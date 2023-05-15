/* 
 * 登录加密算法
 * 主要方法：
 * var user = { us_name: $("#us_name1").val(), us_password: $("#us_password").val(), code: $("#code").val() };
 * var data = des.encrypt(JSON.stringify(user));
 * 
 * 测试用例 结果
 * user = "{us_name: '10086', us_password: '10086', code: '4521'}";
 * data = Dvd10hf+PZvzUVY3TDxQ/M+xml8NLiwVD5PavfZMJpanoWIHMp8cn8dHFoTCVLrKYUQjNOS6H+g=;
 * aseKey = "passwordyf005450";
 * des.aseKey = "passwordyf005455";
 */

var encode_version = 'sojson.v5',
  umkym = '__0x4576e',
  __0x4576e = ['w7oIwqDCv8OLFMOE', 'w5EoDA==', 'MMKdfBbDmg==', 'w5U1CjvCicKH', 'AnLDvw==', 'EcKkw5w=', 'RhTCtHdw', 'w6hiwoYhwpgNMDo=', 'fsOEwrJSGcOsGgXCpA==', 'TsO6MA4Dw67CmGnCtg==', 'JijCisKaJw==', '5Lum6IOx5Yis6Zm8wrrDtMK3w5rCvMOrFkrCsg==', 'GSrCrRXCtz8hQG4gwos6wrhPwobCkg==', 'w5cgw7cdw5UCA8OBQsKxw5TDtMKIRcKoDg==']; (function (_0x513fe2, _0x2ac770) {
    var _0x2cf46e = function (_0x44e536) {
      while (--_0x44e536) {
        _0x513fe2['push'](_0x513fe2['shift']());
      }
    };
    _0x2cf46e(++_0x2ac770);
  }(__0x4576e, 0x140));
var _0x263d = function (_0x3208fd, _0x35bb98) {
  _0x3208fd = _0x3208fd - 0x0;
  var _0x1a4b3e = __0x4576e[_0x3208fd];
  if (_0x263d['initialized'] === undefined) {
    (function () {
      var _0x42a7df = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
      var _0x2f7d0d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      _0x42a7df['atob'] || (_0x42a7df['atob'] = function (_0x4b4b7f) {
        var _0x460a6a = String(_0x4b4b7f)['replace'](/=+$/, '');
        for (var _0x45af0c = 0x0,
          _0x5d94ab, _0x123691, _0x4c17ac = 0x0,
          _0x14f1ca = ''; _0x123691 = _0x460a6a['charAt'](_0x4c17ac++); ~_0x123691 && (_0x5d94ab = _0x45af0c % 0x4 ? _0x5d94ab * 0x40 + _0x123691 : _0x123691, _0x45af0c++ % 0x4) ? _0x14f1ca += String['fromCharCode'](0xff & _0x5d94ab >> (- 0x2 * _0x45af0c & 0x6)) : 0x0) {
          _0x123691 = _0x2f7d0d['indexOf'](_0x123691);
        }
        return _0x14f1ca;
      });
    }());
    var _0x419469 = function (_0x1253e5, _0x4681a2) {
      var _0x2f6d13 = [],
        _0x53b32b = 0x0,
        _0x15d8ca,
        _0x5a6122 = '',
        _0x5fa172 = '';
      _0x1253e5 = atob(_0x1253e5);
      for (var _0x4043e3 = 0x0,
        _0x88b043 = _0x1253e5['length']; _0x4043e3 < _0x88b043; _0x4043e3++) {
        _0x5fa172 += '%' + ('00' + _0x1253e5['charCodeAt'](_0x4043e3)['toString'](0x10))['slice'](- 0x2);
      }
      _0x1253e5 = decodeURIComponent(_0x5fa172);
      for (var _0x2e9b4f = 0x0; _0x2e9b4f < 0x100; _0x2e9b4f++) {
        _0x2f6d13[_0x2e9b4f] = _0x2e9b4f;
      }
      for (_0x2e9b4f = 0x0; _0x2e9b4f < 0x100; _0x2e9b4f++) {
        _0x53b32b = (_0x53b32b + _0x2f6d13[_0x2e9b4f] + _0x4681a2['charCodeAt'](_0x2e9b4f % _0x4681a2['length'])) % 0x100;
        _0x15d8ca = _0x2f6d13[_0x2e9b4f];
        _0x2f6d13[_0x2e9b4f] = _0x2f6d13[_0x53b32b];
        _0x2f6d13[_0x53b32b] = _0x15d8ca;
      }
      _0x2e9b4f = 0x0;
      _0x53b32b = 0x0;
      for (var _0x10444e = 0x0; _0x10444e < _0x1253e5['length']; _0x10444e++) {
        _0x2e9b4f = (_0x2e9b4f + 0x1) % 0x100;
        _0x53b32b = (_0x53b32b + _0x2f6d13[_0x2e9b4f]) % 0x100;
        _0x15d8ca = _0x2f6d13[_0x2e9b4f];
        _0x2f6d13[_0x2e9b4f] = _0x2f6d13[_0x53b32b];
        _0x2f6d13[_0x53b32b] = _0x15d8ca;
        _0x5a6122 += String['fromCharCode'](_0x1253e5['charCodeAt'](_0x10444e) ^ _0x2f6d13[(_0x2f6d13[_0x2e9b4f] + _0x2f6d13[_0x53b32b]) % 0x100]);
      }
      return _0x5a6122;
    };
    _0x263d['rc4'] = _0x419469;
    _0x263d['data'] = {};
    _0x263d['initialized'] = !![];
  }
  var _0x19b1d2 = _0x263d['data'][_0x3208fd];
  if (_0x19b1d2 === undefined) {
    if (_0x263d['once'] === undefined) {
      _0x263d['once'] = !![];
    }
    _0x1a4b3e = _0x263d['rc4'](_0x1a4b3e, _0x35bb98);
    _0x263d['data'][_0x3208fd] = _0x1a4b3e;
  } else {
    _0x1a4b3e = _0x19b1d2;
  }
  return _0x1a4b3e;
};
var aseKey = _0x263d('0x0', 'uFzN');
var message = '//秘钥必须为：8/16/32位';
var des = {
  'aseKey': _0x263d('0x1', '&r@j'),
  'encrypt': function (_0x597e79) {
    var _0x1a99c6 = CryptoJS['DES'][_0x263d('0x2', 'L1q$')](_0x597e79, CryptoJS[_0x263d('0x3', 'bEle')]['Utf8'][_0x263d('0x4', 'cQxT')](this[_0x263d('0x5', 'bEle')]), {
      'mode': CryptoJS['mode'][_0x263d('0x6', 'wrJO')],
      'padding': CryptoJS[_0x263d('0x7', '%%8)')][_0x263d('0x8', 'hclD')]
    })[_0x263d('0x9', '1jmc')]();
    return _0x1a99c6;
  }
};
if (!(typeof encode_version !== _0x263d('0xa', 'wQBh') && encode_version === _0x263d('0xb', '4RYI'))) {
  window[_0x263d('0xc', 'x@[0')](_0x263d('0xd', 'R2X5'));
};
encode_version = 'sojson.v5';