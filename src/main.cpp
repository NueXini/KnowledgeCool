#include <iostream>
#include <functional>
#include "lib/httplib.h"
#include "handle/handle.h"

int main(int argc, char *argv[])
{
  try
  {
    /* code */

#ifdef _DEBUG
    for (size_t i = 0; i < argc; i++)
    {
      std::cout << argv[i] << std::endl;
    }
#endif // _DEBUG

    // Handle
    Handle hdl;

    // WebServer
    httplib::Server svr;

    auto callback_api_baidu = std::bind(&Handle::baidu, &hdl, std::placeholders::_1, std::placeholders::_2);
    auto callback_api_yfzxmn = std::bind(&Handle::yfzxmn, &hdl, std::placeholders::_1, std::placeholders::_2);

    svr.Post("/api/baidu", httplib::Server::Handler(callback_api_baidu));
    svr.Post("/api/yfzxmn", httplib::Server::Handler(callback_api_yfzxmn));

    svr.listen("127.0.0.1", 9999);

    return 0;
  }
  catch (const std::exception &e)
  {
    std::cerr << e.what() << '\n';
  }
}
