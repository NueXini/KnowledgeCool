#ifndef HANDLE_BAIDU_H_INCLUDED
#define HANDLE_BAIDU_H_INCLUDED

#include <string>

#define CPPHTTPLIB_OPENSSL_SUPPORT
#include "httplib/httplib.h"

namespace Baidu
{
  void Handle(const httplib::Request &req, httplib::Response &res);
}

#endif // HANDLE_BAIDU_H_INCLUDED