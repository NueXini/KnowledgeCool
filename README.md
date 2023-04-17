# KnowledgeCool

知识库，这是一个简单的文库下载器后端 (C++练手项目)

# Support

|         文库         |                         官网                         |
| :------------------: | :--------------------------------------------------: |
| 银符在线考试模拟题库 |   [https://www.yfzxmn.cn/](https://www.yfzxmn.cn/)   |
|    百度文库高校版    | [https://eduai.baidu.com/](https://eduai.baidu.com/) |
|         知网         |    [https://www.cnki.net/](https://www.cnki.net/)    |

# API

## 银符在线考试模拟题库

`POST /api/yfzxmn`

**请求参数：**

| 参数 | 类型 | 描述   |
| ---- | ---- | ------ |
| id   | int  | 试卷id |

**请求协议头：**

| 参数 | 类型 | 描述   |
| ---- | ---- | ------ |
| Cookie   | string | 包含JSESSIONID的cookies |

## 百度文库高校版

`POST /api/baidu`

**请求参数：**

| 参数 | 类型 | 描述   |
| ---- | ---- | ------ |
| id   | int  | 文档id |

https://wenku.baidu.com/view/5633b3e62bf90242a8956bec0975f46526d3a758.html, id：`5633b3e62bf90242a8956bec0975f46526d3a758`

https://eduai.baidu.com/view/5633b3e62bf90242a8956bec0975f46526d3a758, id:`5633b3e62bf90242a8956bec0975f46526d3a758`

**请求协议头：**

| 参数 | 类型 | 描述   |
| ---- | ---- | ------ |
| Cookie   | string | 百度账号cookies |

# Reference

- [cpp-httplib](https://github.com/yhirose/cpp-httplib)

- [OpenSSL](https://github.com/openssl/openssl)

- [rapidjson](https://github.com/Tencent/rapidjson)

# License

KnowledgeCool is licensed under the GNU General Public License v3.0