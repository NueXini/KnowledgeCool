#ifndef HANDLE_YINFU_H_INCLUDED
#define HANDLE_YINFU_H_INCLUDED

#include <iostream>
#include <map>
#include <string>
#include <regex>

#define CPPHTTPLIB_OPENSSL_SUPPORT
#include "httplib/httplib.h"

#include "rapidjson/document.h"
#include "rapidjson/writer.h"
#include "rapidjson/stringbuffer.h"

#include "../../utils/crypto/crypto.h"

namespace Yinfu
{
  void Handle(const httplib::Request &req, httplib::Response &res);
  void Handle_Download(const httplib::Request &req, httplib::Response &res);
  void Handle_Login(const httplib::Request &req, httplib::Response &res);
  void Handle_GetVerifyCode(const httplib::Request &req, httplib::Response &res);
  void Handle_Register(const httplib::Request &req, httplib::Response &res);
  void Handle_SendSMS(const httplib::Request &req, httplib::Response &res);
  void Handle_CheckPhone(const httplib::Request &req, httplib::Response &res);
}

#endif // HANDLE_YINFU_H_INCLUDED