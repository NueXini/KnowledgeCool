cmake_minimum_required(VERSION 3.0.0)
project(KnowledgeCool VERSION 2023.04.03 LANGUAGES CXX)
set(CMAKE_CXX_STANDARD 17)

include_directories("${CMAKE_SOURCE_DIR}/include/")

if("${CMAKE_CXX_COMPILER_ID}" STREQUAL "Clang")
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -static")
endif()

add_executable(${PROJECT_NAME}
  src/handle/Baidu/Baidu.cpp
  src/handle/Yinfu/Yinfu.cpp
  src/utils/base64/base64.cpp
  src/utils/crypto/crypto.cpp
  src/main.cpp
)

if(WIN32)
  target_link_libraries(${PROJECT_NAME} PRIVATE ws2_32)
  target_link_libraries(${PROJECT_NAME} PRIVATE crypt32)
  target_link_libraries(${PROJECT_NAME} PRIVATE cryptui)
endif()

# cpp-httplib only support 1.1.1 or 3.0.0 version OpenSSL
find_package(OpenSSL REQUIRED)
if(OpenSSL_FOUND)
  target_link_directories(${PROJECT_NAME} PRIVATE ${OPENSSL_LIBRARIES})
  target_include_directories(${PROJECT_NAME} PRIVATE ${OPENSSL_INCLUDE_DIR})
  target_link_libraries(${PROJECT_NAME} PRIVATE OpenSSL::SSL OpenSSL::Crypto)
endif()
