var aseKey = 'passwordyf005455';
var des = {
  'aseKey': aseKey,
  'encrypt': function (input) {
    var encryptedMessage = CryptoJS.DES.encrypt(input, CryptoJS.enc.Utf8.parse(this.aseKey), {
      'mode': CryptoJS.mode.ECB,
      'padding': CryptoJS.pad.Pkcs7
    }).toString();
    return encryptedMessage;
  }
};

var user = { us_name: $("#us_name1").val(), us_password: $("#us_password").val(), code: $("#code").val() };
console.log(des.encrypt(JSON.stringify(user)));