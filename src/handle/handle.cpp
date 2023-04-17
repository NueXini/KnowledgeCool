#include "handle.h"

void Handle::PrintLog(const httplib::Request &req)
{
  // Get the current time
  std::time_t now = std::time(nullptr);

  // Format the time as a string
  char timestamp[20];
  std::strftime(timestamp, sizeof(timestamp), "%m-%d %H:%M:%S", std::localtime(&now));

  // Log the request information
  std::cout << "[" << timestamp << "] "
            << req.method << " "
            << req.path;

  // Log query parameters if any
  if (!req.params.empty())
  {
    std::cout << "?";
    for (auto it = req.params.begin(); it != req.params.end(); ++it)
    {
      std::cout << it->first << "=" << it->second;
      if (std::next(it) != req.params.end())
      {
        std::cout << "&";
      }
    }
    std::cout << " ";
  }

  // Log user agent and remote IP address
  std::cout << req.get_header_value("User-Agent") << " "
            << req.remote_addr << std::endl;
}

void Handle::baidu(const httplib::Request &req, httplib::Response &res)
{
  // API
  // https://eduai.baidu.com/api/zyk/download?docId=81cb83b1360cba1aa911da1a&source_from=eduai&fr=4
  PrintLog(req);
  if (req.has_param("id"))
  {
    auto id = req.get_param_value("id");
    if (id != "")
    {
      if (req.has_header("Cookie"))
      {
        auto ck = req.get_header_value("Cookie");
        httplib::Headers headers = {{"User-Agent", UserAgent}, {"Cookie", ck}, {"Refer", "https://eduai.baidu.com/view/" + id}};
        httplib::Client _cli("https://eduai.baidu.com");
        auto _res = _cli.Get("/api/zyk/download?docId=" + id + "&source_from=eduai&fr=4", headers);
        if (_res && _res->status == 200)
        {
          res.set_content(_res->body, "text/plain");
        }
      }
    }
  }
}

void Handle::yfzxmn(const httplib::Request &req, httplib::Response &res)
{
  // API
  // https://www.yfzxmn.cn/download.action?su_Id=2&ex_Id=25480
  PrintLog(req);
  if (req.has_param("id"))
  {
    auto id = req.get_param_value("id");
    if (id != "")
    {
      if (req.has_header("Cookie"))
      {
        auto ck = req.get_header_value("Cookie");
        httplib::Headers headers = {{"User-Agent", UserAgent}, {"Cookie", ck}};
        httplib::Client _cli("https://www.yfzxmn.cn");
        auto _res = _cli.Get("/download.action?su_Id=2&ex_Id=" + id, headers);
        if (_res && _res->status == 200)
        {
          std::smatch result;
          std::string pattern = R"(.*href=\"(.*)\">)";
          if (std::regex_search(_res->body, result, std::regex(pattern)))
          {
            res.set_content(result[1].str(), "text/plain");
          }
        }
      }
    }
  }
}
