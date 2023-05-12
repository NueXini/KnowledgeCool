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
  }

  // Log user agent and remote IP address
  std::cout << " " << req.get_header_value("User-Agent") << " "
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
        httplib::Headers headers = {{"User-Agent", UserAgent}, {"Cookie", ck}, {"Referer", "https://eduai.baidu.com/view/" + id}};
        httplib::Client _cli("https://eduai.baidu.com");
        auto _res = _cli.Get("/api/zyk/download?docId=" + id + "&source_from=eduai&fr=4", headers);
        if (_res && _res->status == 200)
        {
          res.set_content(_res->body, "application/json");
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
  if (req.has_param("type"))
  {
    auto type = req.get_param_value("type");
    static const std::string yfurl = "https://www.yfzxmn.cn";
    httplib::Client _cli(yfurl);
    // type=download&id=
    if (type == "download")
    {
      if (req.has_param("id"))
      {
        auto id = req.get_param_value("id");
        if (id != "")
        {
          if (req.has_header("Cookie"))
          {
            auto ck = req.get_header_value("Cookie");
            httplib::Headers headers = {
                {"User-Agent", UserAgent},
                {"Cookie", ck},
                {"Referer", yfurl + "/"}};
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

    /*
     * Register
     */

    // type=checkphone&phone=
    if (type == "checkphone")
    {
      if (req.has_param("phone"))
      {
        auto phone = req.get_param_value("phone");
        if (std::regex_match(phone, std::regex(PhonePattern)))
        {
          httplib::Headers headers = {
              {"User-Agent", UserAgent},
              {"Referer", yfurl + "/"},
              {"X-Requested-With", "XMLHttpRequest"}};
          auto _res = _cli.Get("/user_checkUsTel.action?usertab.us_tel=" + phone, headers);
          if (_res && _res->status == 200)
          {
            /*
             * {"status":"true","error":"","end":"1"}
             * {"status":"false","result":"请输入正确的手机号！","error":"","end":"1"}
             * {"status":"false","result":"手机号已注册！","error":"","end":"1"}
             */
            res.set_content(_res->body, "application/json");
          }
        }
      }
    }
    // type=sendsms&phone=
    if (type == "sendsms")
    {
      if (req.has_param("phone"))
      {
        auto phone = req.get_param_value("phone");
        if (std::regex_match(phone, std::regex(PhonePattern)))
        {
          httplib::Headers headers = {
              {"User-Agent", UserAgent},
              {"Referer", yfurl + "/"},
              {"X-Requested-With", "XMLHttpRequest"}};
          auto _res = _cli.Get("/user_sendSMS.action?phone=" + phone, headers);
          if (_res && _res->status == 200)
          {
            // {"status":"true","error":"","end":"1"}
            res.set_content(_res->body, "application/json");
          }
        }
      }
    }
    // type=register&phone=&password=&code=
    if (type == "register")
    {
      if (req.has_param("phone"))
      {
        auto phone = req.get_param_value("phone");
        if (std::regex_match(phone, std::regex(PhonePattern)))
        {
          if (req.has_param("code"))
          {
            auto code = req.get_param_value("code");
            if (req.has_param("password"))
            {
              auto password = req.get_param_value("password");
              if (std::regex_match(password, std::regex(PasswordPattern)))
              {
                httplib::Headers headers = {
                    {"User-Agent", UserAgent},
                    {"Referer", "https://www.yfzxmn.cn/register.jsp"},
                    {"Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"},
                    {"X-Requested-With", "XMLHttpRequest"},
                    {"Referer", yfurl + "/"}};
                httplib::Params params = {
                    {"usertab.us_tel", phone},
                    {"code", code},
                    {"usertab.us_password", password},
                    {"txtUser", password}};
                auto _res = _cli.Post("/user_register.action", headers, params);
                if (_res && _res->status == 200)
                {
                  /*
                   * {"result":"手机验证码错误","error":"","end":"1"}
                   * {"status":"true","error":"","end":"1"}
                   */
                  res.set_content(_res->body, "application/json");
                }
              }
            }
          }
        }
      }
    }

    /*
     * Login
     */

    // type=getverifycode
    if (type == "getverifycode")
    {
      httplib::Headers headers = {
          {"User-Agent", UserAgent},
          {"Referer", yfurl + "/"}};
      auto _res = _cli.Get("/code.action", headers);
      if (_res && _res->status == 200)
      {
        res.set_header("Set-Cookie", _res->get_header_value("Set-Cookie"));
        res.set_content(_res->body, "image/jpeg");
      }
    }

    // type=login&phone=&password=&code=
    if (type == "login")
    {
      if (req.has_param("phone"))
      {
        auto phone = req.get_param_value("phone");
        if (std::regex_match(phone, std::regex(PhonePattern)))
        {
          if (req.has_param("code"))
          {
            auto code = req.get_param_value("code");
            if (req.has_param("password"))
            {
              auto password = req.get_param_value("password");
              if (std::regex_match(password, std::regex(PasswordPattern)))
              {
                if (req.has_header("Cookie"))
                {
                  auto ck = req.get_header_value("Cookie");
                  httplib::Headers headers = {
                      {"User-Agent", UserAgent},
                      {"Cookie", ck},
                      {"Referer", yfurl + "/"},
                      {"X-Requested-With", "XMLHttpRequest"},
                  };
                  /*
                   * 需要把账号密码和验证码转为JSON格式在DES加密带Cookie请求获取 信息
                   * {"us_name":"10086","us_password":"10086","code":"4521"}
                   * Dvd10hf+PZvzUVY3TDxQ/M+xml8NLiwVD5PavfZMJpanoWIHMp8cn8dHFoTCVLrKYUQjNOS6H+g=
                   */

                  // 生成JSON字符串
                  rapidjson::StringBuffer buffer;
                  rapidjson::Writer<rapidjson::StringBuffer> writer(buffer);
                  writer.StartObject();
                  writer.Key("us_name");
                  writer.String(phone.c_str());
                  writer.Key("us_password");
                  writer.String(password.c_str());
                  writer.Key("code");
                  writer.String(code.c_str());
                  writer.EndObject();

                  auto logincode = Crypto::des_ecb_pkcs7_encrypt(buffer.GetString(), "password");
                  auto _res = _cli.Get("/user_login.action?code=" + httplib::detail::encode_url(logincode), headers);
                  if (_res && _res->status == 200)
                  {
                    /*
                     * {"result":"验证码错误，登录失败","error":"","end":"1"}
                     * {"result":"验证码失效，请重新获取验证码","error":"","end":"1"}
                     * {"UserMessage":{"id":"12345","schoolId":"1234","schoolName":"广州xxxx","loginName":"12345678900","loginip":"1.2.3.4","usertype":"0","becomeDue":"false","beIp":"false","sc_reg":"2,3,5,6,7,10,11,12,14,16,","us_tel":"12345678900"},"error":"","end":"1"}
                     * {"result":"参数错误","error":"","end":"1"}
                     */
                    try
                    {
                      rapidjson::Document d;
                      if (!d.Parse(_res->body.c_str()).HasParseError())
                      {
                        if (d.IsObject())
                        {
                          if (d.HasMember("UserMessage"))
                          {
                            res.set_header("Cookie", ck);
                            res.set_content(R"({"msg":"ok"})", "application/json");
                          }
                          else
                          {
                            res.set_content(_res->body, "application/json");
                          }
                        }
                      }
                    }
                    catch (const std::exception &e)
                    {
                      std::cerr << e.what() << '\n';
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    //
  }
}