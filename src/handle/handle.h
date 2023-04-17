#ifndef HANDLE_H_INCLUDED
#define HANDLE_H_INCLUDED

#include <iostream>
#include <regex>
#include <ctime>
#define CPPHTTPLIB_OPENSSL_SUPPORT
#include "httplib/httplib.h"

class Handle
{
public:
  void PrintLog(const httplib::Request &req);
  void baidu(const httplib::Request &req, httplib::Response &res);  // 百度文库高校版
  void yfzxmn(const httplib::Request &req, httplib::Response &res); // 银符在线考试模拟

private:
  const std::string UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36";
};

#endif // HANDLE_H_INCLUDED