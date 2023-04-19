#include <iostream>
#include <functional>
#include "httplib/httplib.h"
#include "handle/handle.h"

int main(int argc, char *argv[])
{
  try
  {
#ifdef _DEBUG
    for (size_t i = 0; i < argc; i++)
    {
      std::cout << argv[i] << std::endl;
    }
#endif // _DEBUG

    std::string ip = "127.0.0.1";
    size_t port = 9999;

    std::cout << "Linstening " << ip << ":" << port << "\n";

    // Handle
    Handle hdl;

    // WebServer
    httplib::Server svr;

    auto callback_api_baidu = std::bind(&Handle::baidu, &hdl, std::placeholders::_1, std::placeholders::_2);
    auto callback_api_yfzxmn = std::bind(&Handle::yfzxmn, &hdl, std::placeholders::_1, std::placeholders::_2);

    svr.Post("/api/baidu", httplib::Server::Handler(callback_api_baidu));
    svr.Post("/api/yfzxmn", httplib::Server::Handler(callback_api_yfzxmn));

    svr.listen(ip, port);

    return 0;
  }
  catch (const std::exception &e)
  {
    std::cerr << e.what() << '\n';
  }
}
