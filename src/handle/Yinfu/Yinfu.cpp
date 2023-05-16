#include "Yinfu.h"

namespace Yinfu
{
  static const std::string yfurl = "https://www.yfzxmn.cn";
  static const std::string PhonePattern = R"(^1[3456789]\d{9}$)";
  static const std::string PasswordPattern = R"((?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{10,})";
  static const std::string UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36";
  static const std::map<std::string, size_t> typeMap = {
      {"download", 0},
      {"login", 1},
      {"getverifycode", 2},
      {"register", 3},
      {"sendsms", 4},
      {"checkphone", 5},
  };

  void Handle(const httplib::Request &req, httplib::Response &res)
  {
    if (req.has_param("type"))
    {
      auto type = req.get_param_value("type");
      auto isFound = typeMap.find(type);
      if (isFound != typeMap.end())
      {
        size_t value = isFound->second;
        switch (value)
        {
        case 0:
          Handle_Download(req, res);
          break;
        case 1:
          Handle_Login(req, res);
          break;
        case 2:
          Handle_GetVerifyCode(req, res);
          break;
        case 3:
          Handle_Register(req, res);
          break;
        case 4:
          Handle_SendSMS(req, res);
          break;
        case 5:
          Handle_SendSMS(req, res);
          break;
        default:
          break;
        }
      }
    }
  }

  void Handle_Download(const httplib::Request &req, httplib::Response &res)
  {
    // type=download&id=
    httplib::Client _cli(yfurl);
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
          auto tmp_res = _cli.Get("/download.action?su_Id=2&ex_Id=" + id, headers);
          if (tmp_res && tmp_res->status == 200)
          {
            std::smatch result;
            std::string pattern = R"(.*href=\"(.*)\">)";
            if (std::regex_search(tmp_res->body, result, std::regex(pattern)))
            {
              res.set_content(result[1].str(), "text/plain");
            }
          }
        }
      }
    }
  }

  void Handle_Login(const httplib::Request &req, httplib::Response &res)
  {
    // type=login&phone=&password=&code=
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
                httplib::Client _cli(yfurl);
                auto tmp_res = _cli.Get("/user_login.action?code=" + httplib::detail::encode_url(logincode), headers);
                if (tmp_res && tmp_res->status == 200)
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
                    if (!d.Parse(tmp_res->body.c_str()).HasParseError())
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
                          res.set_content(tmp_res->body, "application/json");
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

  void Handle_GetVerifyCode(const httplib::Request &req, httplib::Response &res)
  {
    // type=getverifycode
    httplib::Headers headers = {
        {"User-Agent", UserAgent},
        {"Referer", yfurl + "/"}};
    httplib::Client _cli(yfurl);
    auto tmp_res = _cli.Get("/code.action", headers);
    if (tmp_res && tmp_res->status == 200)
    {
      res.set_header("Set-Cookie", tmp_res->get_header_value("Set-Cookie"));
      res.set_content(tmp_res->body, "image/jpeg");
    }
  }

  void Handle_Register(const httplib::Request &req, httplib::Response &res)
  {
    // type=register&phone=&password=&code=
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
                  {"Referer", yfurl + "/register.jsp"},
                  {"Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"},
                  {"X-Requested-With", "XMLHttpRequest"}};
              httplib::Params params = {
                  {"usertab.us_tel", phone},
                  {"code", code},
                  {"usertab.us_password", password},
                  {"txtUser", password}};
              httplib::Client _cli(yfurl);
              auto tmp_res = _cli.Post("/user_register.action", headers, params);
              if (tmp_res && tmp_res->status == 200)
              {
                /*
                 * {"result":"手机验证码错误","error":"","end":"1"}
                 * {"status":"true","error":"","end":"1"}
                 */
                res.set_content(tmp_res->body, "application/json");
              }
            }
          }
        }
      }
    }
  }

  void Handle_SendSMS(const httplib::Request &req, httplib::Response &res)
  {
    // type=sendsms&phone=
    if (req.has_param("phone"))
    {
      auto phone = req.get_param_value("phone");
      if (std::regex_match(phone, std::regex(PhonePattern)))
      {
        httplib::Headers headers = {
            {"User-Agent", UserAgent},
            {"Referer", yfurl + "/"},
            {"X-Requested-With", "XMLHttpRequest"}};
        httplib::Client _cli(yfurl);
        auto tmp_res = _cli.Get("/user_sendSMS.action?phone=" + phone, headers);
        if (tmp_res && tmp_res->status == 200)
        {
          // {"status":"true","error":"","end":"1"}
          res.set_content(tmp_res->body, "application/json");
        }
      }
    }
  }

  void Handle_CheckPhone(const httplib::Request &req, httplib::Response &res)
  {
    // type=checkphone&phone=
    if (req.has_param("phone"))
    {
      auto phone = req.get_param_value("phone");
      if (std::regex_match(phone, std::regex(PhonePattern)))
      {
        httplib::Headers headers = {
            {"User-Agent", UserAgent},
            {"Referer", yfurl + "/"},
            {"X-Requested-With", "XMLHttpRequest"}};
        httplib::Client _cli(yfurl);
        auto tmp_res = _cli.Get("/user_checkUsTel.action?usertab.us_tel=" + phone, headers);
        if (tmp_res && tmp_res->status == 200)
        {
          /*
           * {"status":"true","error":"","end":"1"}
           * {"status":"false","result":"请输入正确的手机号！","error":"","end":"1"}
           * {"status":"false","result":"手机号已注册！","error":"","end":"1"}
           */
          res.set_content(tmp_res->body, "application/json");
        }
      }
    }
  }
}