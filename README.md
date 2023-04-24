# KnowledgeCool

知识库，这是一个简单的文库下载器后端 (C++练手项目)

# Support

| 文库                 | 官网                                                 |
| :------------------- | :--------------------------------------------------- |
| 银符在线考试模拟题库 | [https://www.yfzxmn.cn/](https://www.yfzxmn.cn/)     |
| 百度文库高校版       | [https://eduai.baidu.com/](https://eduai.baidu.com/) |
| 知网                 | [https://www.cnki.net/](https://www.cnki.net/)       |

# API

## 银符在线考试模拟题库

- **检查手机号是否已注册**

```http
POST /api/yfzxmn
```

**请求参数：**

| 参数  | 类型   | 描述                       | 是否必须 |
| ----- | ------ | -------------------------- | -------- |
| type  | string | 请求类型：值为`checkphone` | 是       |
| phone | string | 大陆手机号，无需区号       | 是       |



- **获取短信验证码**

```http
POST /api/yfzxmn
```

**请求参数：**

| 参数  | 类型   | 描述                    | 是否必须 |
| ----- | ------ | ----------------------- | -------- |
| type  | string | 请求类型：值为`sendsms` | 是       |
| phone | string | 大陆手机号，无需区号    | 是       |



- **注册**

```http
POST /api/yfzxmn
```

**请求参数：**

| 参数     | 类型   | 描述                                                         | 是否必须 |
| -------- | ------ | ------------------------------------------------------------ | -------- |
| type     | string | 请求类型：值为`register`                                     | 是       |
| phone    | string | 大陆手机号，无需区号                                         | 是       |
| password | string | 密码，且密码中必须包含字母（不区分大小写）、数字、特殊字符，长度不少于10个字符 | 是       |
| code     | string | 验证码，注册之前请先获取验证码                               | 是       |



- **获取下载链接**

```http
POST /api/yfzxmn
```

**请求参数：**

| 参数 | 类型   | 描述                     | 是否必须 |
| ---- | ------ | ------------------------ | -------- |
| type | string | 请求类型：值为`download` | 是       |
| id   | int    | 试卷id                   | 是       |

**请求协议头：**

| 参数 | 类型 | 描述   | 是否必须 |
| ---- | ---- | ------ | ------ |
| Cookie   | string | 包含JSESSIONID的cookies | 是 |



## 百度文库高校版

- **获取下载链接**

```http
POST /api/baidu
```

**请求参数：**

| 参数 | 类型 | 描述   | 是否必须 |
| ---- | ---- | ------ | -------- |
| id   | int  | 文档id | 是       |

[https://wenku.baidu.com/view/67a7d581db38376baf1ffc4ffe4733687f21fc45.html](https://wenku.baidu.com/view/67a7d581db38376baf1ffc4ffe4733687f21fc45.html)

- id: `5633b3e62bf90242a8956bec0975f46526d3a758`

https://eduai.baidu.com/view/5633b3e62bf90242a8956bec0975f46526d3a758

- id: `67a7d581db38376baf1ffc4ffe4733687f21fc45`

**请求协议头：**

| 参数 | 类型 | 描述   | 是否必须 |
| ---- | ---- | ------ | ------ |
| Cookie   | string | 百度账号cookies | 是 |

# Reference

- [cpp-httplib](https://github.com/yhirose/cpp-httplib)

- [OpenSSL](https://github.com/openssl/openssl)

- [rapidjson](https://github.com/Tencent/rapidjson)

# License

KnowledgeCool is licensed under the GNU General Public License v3.0