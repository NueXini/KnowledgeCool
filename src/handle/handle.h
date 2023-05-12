#ifndef HANDLE_H_INCLUDED
#define HANDLE_H_INCLUDED

#include <iostream>
#include <regex>
#include <ctime>
#define CPPHTTPLIB_OPENSSL_SUPPORT

#include "httplib/httplib.h"

#include "rapidjson/document.h"
#include "rapidjson/writer.h"
#include "rapidjson/stringbuffer.h"

#include "../utils/crypto/crypto.h"

class Handle
{
public:
  void PrintLog(const httplib::Request &req);
  void baidu(const httplib::Request &req, httplib::Response &res);  // 百度文库高校版
  void yfzxmn(const httplib::Request &req, httplib::Response &res); // 银符在线考试模拟

private:
  const std::string UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36";
  const std::string PhonePattern = R"(^1[3456789]\d{9}$)";
  const std::string PasswordPattern = R"((?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{10,})";
};

#endif // HANDLE_H_INCLUDED