#include "Baidu.h"

namespace Baidu
{
  static const std::string UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36";
  static const std::string bdurl = "https://eduai.baidu.com";

  void Handle(const httplib::Request &req, httplib::Response &res)
  {
    // API
    // https://eduai.baidu.com/api/zyk/download?docId=81cb83b1360cba1aa911da1a&source_from=eduai&fr=4
    if (req.has_param("id"))
    {
      auto id = req.get_param_value("id");
      if (id != "")
      {
        if (req.has_header("Cookie"))
        {
          auto ck = req.get_header_value("Cookie");
          httplib::Headers headers = {{"User-Agent", UserAgent}, {"Cookie", ck}, {"Referer", bdurl + "/view/" + id}};
          httplib::Client _cli(bdurl);
          auto tmp_res = _cli.Get("/api/zyk/download?docId=" + id + "&source_from=eduai&fr=4", headers);
          if (tmp_res && tmp_res->status == 200)
          {
            // {"status":{"code":110014,"msg":"请登录之后再进行操作!"},"data":{"errno":110014,"errstr":"请登录之后再进行操作!"}}
            // {"status":{"code":0,"msg":null},"data":{"url":"https://wkbjcloudbos.bdimg.com/v1/wenku71//bwmark/830f165e2c4bb822ddade9d63becb955?","category_v2":"实用模板"}}
            res.set_content(tmp_res->body, "application/json");
          }
        }
      }
    }
  }
}
