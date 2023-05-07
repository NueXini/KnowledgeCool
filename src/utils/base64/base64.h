#ifndef BASE64_H_INCLUDED
#define BASE64_H_INCLUDED

#include <string>
#include <algorithm>

namespace Base64
{
  std::string Encode(const std::string &input);
  std::string Decode(const std::string &input);
}

#endif // BASE64_H_INCLUDED