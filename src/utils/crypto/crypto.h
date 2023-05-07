#ifndef CRYPTO_H_INCLUDED
#define CRYPTO_H_INCLUDED

#include <string>
#include <vector>
#include <openssl/des.h>

#include "../base64/base64.h"

#define DES_BLOCK_SIZE 8

namespace Crypto
{
  std::string des_ecb_pkcs7_encrypt(const std::string &plaintext, const std::string &key);
}

#endif // CRYPTO_H_INCLUDED