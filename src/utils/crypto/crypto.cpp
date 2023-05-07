#include "crypto.h"

namespace Crypto
{
  std::string des_ecb_pkcs7_encrypt(const std::string &plaintext, const std::string &key)
  {
    // 初始化DES加密上下文
    DES_key_schedule schedule;
    DES_set_key_unchecked((const_DES_cblock *)&key[0], &schedule);

    // 对明文进行PKCS7填充
    std::string padded_plaintext(plaintext);
    unsigned char padding_size = 8 - (padded_plaintext.size() % 8);
    for (unsigned char i = 0; i < padding_size; ++i)
    {
      padded_plaintext.push_back(padding_size);
    }

    // 加密
    std::string ciphertext(padded_plaintext.size(), 0);
    for (unsigned int i = 0; i < padded_plaintext.size(); i += 8)
    {
      DES_ecb_encrypt((const_DES_cblock *)&padded_plaintext[i], (DES_cblock *)&ciphertext[i], &schedule, DES_ENCRYPT);
    }

    // 返回加密结果
    return Base64::Encode(ciphertext);
  }
}
