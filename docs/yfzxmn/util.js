var scripts = document.getElementsByTagName('script');
// 获取现在已经加载的所有script
var lastScript = scripts[scripts.length - 1];
// 获取最近一个加载的script，即这个js本身
var basepath = lastScript.src.replace(/util.js.*/, "");// 获取此js的路径
$.ajax({
	type: "GET",
	async: false,
	url: basepath + "crypto-js.min.js",
	dataType: "script"
});
//加密
var encode_version = 'sojson.v5', umkym = '__0x4576e', __0x4576e = ['w7oIwqDCv8OLFMOE', 'w5EoDA==', 'MMKdfBbDmg==', 'w5U1CjvCicKH', 'AnLDvw==', 'EcKkw5w=', 'RhTCtHdw', 'w6hiwoYhwpgNMDo=', 'fsOEwrJSGcOsGgXCpA==', 'TsO6MA4Dw67CmGnCtg==', 'JijCisKaJw==', '5Lum6IOx5Yis6Zm8wrrDtMK3w5rCvMOrFkrCsg==', 'GSrCrRXCtz8hQG4gwos6wrhPwobCkg==', 'w5cgw7cdw5UCA8OBQsKxw5TDtMKIRcKoDg==']; (function (_0x513fe2, _0x2ac770) { var _0x2cf46e = function (_0x44e536) { while (--_0x44e536) { _0x513fe2['push'](_0x513fe2['shift']()); } }; _0x2cf46e(++_0x2ac770); }(__0x4576e, 0x140)); var _0x263d = function (_0x3208fd, _0x35bb98) { _0x3208fd = _0x3208fd - 0x0; var _0x1a4b3e = __0x4576e[_0x3208fd]; if (_0x263d['initialized'] === undefined) { (function () { var _0x42a7df = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this; var _0x2f7d0d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; _0x42a7df['atob'] || (_0x42a7df['atob'] = function (_0x4b4b7f) { var _0x460a6a = String(_0x4b4b7f)['replace'](/=+$/, ''); for (var _0x45af0c = 0x0, _0x5d94ab, _0x123691, _0x4c17ac = 0x0, _0x14f1ca = ''; _0x123691 = _0x460a6a['charAt'](_0x4c17ac++); ~_0x123691 && (_0x5d94ab = _0x45af0c % 0x4 ? _0x5d94ab * 0x40 + _0x123691 : _0x123691, _0x45af0c++ % 0x4) ? _0x14f1ca += String['fromCharCode'](0xff & _0x5d94ab >> (-0x2 * _0x45af0c & 0x6)) : 0x0) { _0x123691 = _0x2f7d0d['indexOf'](_0x123691); } return _0x14f1ca; }); }()); var _0x419469 = function (_0x1253e5, _0x4681a2) { var _0x2f6d13 = [], _0x53b32b = 0x0, _0x15d8ca, _0x5a6122 = '', _0x5fa172 = ''; _0x1253e5 = atob(_0x1253e5); for (var _0x4043e3 = 0x0, _0x88b043 = _0x1253e5['length']; _0x4043e3 < _0x88b043; _0x4043e3++) { _0x5fa172 += '%' + ('00' + _0x1253e5['charCodeAt'](_0x4043e3)['toString'](0x10))['slice'](-0x2); } _0x1253e5 = decodeURIComponent(_0x5fa172); for (var _0x2e9b4f = 0x0; _0x2e9b4f < 0x100; _0x2e9b4f++) { _0x2f6d13[_0x2e9b4f] = _0x2e9b4f; } for (_0x2e9b4f = 0x0; _0x2e9b4f < 0x100; _0x2e9b4f++) { _0x53b32b = (_0x53b32b + _0x2f6d13[_0x2e9b4f] + _0x4681a2['charCodeAt'](_0x2e9b4f % _0x4681a2['length'])) % 0x100; _0x15d8ca = _0x2f6d13[_0x2e9b4f]; _0x2f6d13[_0x2e9b4f] = _0x2f6d13[_0x53b32b]; _0x2f6d13[_0x53b32b] = _0x15d8ca; } _0x2e9b4f = 0x0; _0x53b32b = 0x0; for (var _0x10444e = 0x0; _0x10444e < _0x1253e5['length']; _0x10444e++) { _0x2e9b4f = (_0x2e9b4f + 0x1) % 0x100; _0x53b32b = (_0x53b32b + _0x2f6d13[_0x2e9b4f]) % 0x100; _0x15d8ca = _0x2f6d13[_0x2e9b4f]; _0x2f6d13[_0x2e9b4f] = _0x2f6d13[_0x53b32b]; _0x2f6d13[_0x53b32b] = _0x15d8ca; _0x5a6122 += String['fromCharCode'](_0x1253e5['charCodeAt'](_0x10444e) ^ _0x2f6d13[(_0x2f6d13[_0x2e9b4f] + _0x2f6d13[_0x53b32b]) % 0x100]); } return _0x5a6122; }; _0x263d['rc4'] = _0x419469; _0x263d['data'] = {}; _0x263d['initialized'] = !![]; } var _0x19b1d2 = _0x263d['data'][_0x3208fd]; if (_0x19b1d2 === undefined) { if (_0x263d['once'] === undefined) { _0x263d['once'] = !![]; } _0x1a4b3e = _0x263d['rc4'](_0x1a4b3e, _0x35bb98); _0x263d['data'][_0x3208fd] = _0x1a4b3e; } else { _0x1a4b3e = _0x19b1d2; } return _0x1a4b3e; }; var aseKey = _0x263d('0x0', 'uFzN'); var message = '//秘钥必须为：8/16/32位'; var des = { 'aseKey': _0x263d('0x1', '&r@j'), 'encrypt': function (_0x597e79) { var _0x1a99c6 = CryptoJS['DES'][_0x263d('0x2', 'L1q$')](_0x597e79, CryptoJS[_0x263d('0x3', 'bEle')]['Utf8'][_0x263d('0x4', 'cQxT')](this[_0x263d('0x5', 'bEle')]), { 'mode': CryptoJS['mode'][_0x263d('0x6', 'wrJO')], 'padding': CryptoJS[_0x263d('0x7', '%%8)')][_0x263d('0x8', 'hclD')] })[_0x263d('0x9', '1jmc')](); return _0x1a99c6; } }; if (!(typeof encode_version !== _0x263d('0xa', 'wQBh') && encode_version === _0x263d('0xb', '4RYI'))) { window[_0x263d('0xc', 'x@[0')](_0x263d('0xd', 'R2X5')); }; encode_version = 'sojson.v5';
$.extend({
	url: null,
	changePhone:function(){
		layer.open({
			type: 1,
			title:0,
			shade: 0.5,
			zIndex: 9000,
			content: $('#chPhone'),
			area : ['500px' , '400px']
		});
	},
	changePass:function(){
		layer.open({
			type: 1,
			title:0,
			shade: 0.5,
			zIndex: 9000,
			content: $('#chPass'),
			area : ['500px' , '400px']
		});
	},
	/**
	 * 登录窗口
	 */
	loginwindow: function () {
		var div = $("#loginWindow");
		/*if(!div.html())
			div = $("" +
			"<div id='loginWindow' title='登录'" +
			"style='width:330px;height:335px;*+height:340px;font-size:12px;'>" +
			"<style type='text/css'>.panel-tool-close{background: transparent url('lib/images/windowClose.png') no-repeat;}" +
			".panel-tool{height: 22px;}.panel-tool a{width: 22px; height: 22px;}.panel-header{border:none;}" +
			".window{border-width: 7px;padding:0px;background: transparent linear-gradient(to bottom, #EFF5FF 0px, #F3F3F3 20%) repeat-x scroll 0% 0%;}" +
			".panel-title{text-align: center;color: #FFF;background:url('lib/images/loginTitle.png') no-repeat 85px 0px;letter-spacing: 3px;}" +
			".window-header{height: 52px;}.panel-title{height: 52px; line-height:50px;}" +
			".window, .window .window-body{border-color: #d6d1ca;}.panel-body{background:none;}" +
			".trName{color:#006ea5; padding-left:15px;font-size:14px;margin-top:5px;line-height:20px;}"+
			".loginInput{background-color:none;background: url('lib/images/loginInput.png') no-repeat;width:257px;height:36px;line-height:36px;border:none;padding-left:20px;outline:none;}" +
			".loginWButton{background:url('lib/images/loginButtonBg.png') repeat-x;width:100%;height:60px; text-align:center;color:#FFF;" +
			"font-size:14px;font-weight:bold;letter-spacing: 3px;border:none;cursor: pointer;}"+
			"</style><div style='padding-left:15px;'><form id='loginForm' action='user_login.action' method='post' autocomplete='off'>" +
			"<div class='trName'>用户名:</div><div><div><input type='text' id='us_name' name='usertab.us_name' class='loginInput'/></div></div>" +
			"<div style='letter-spacing: 7px;' class='trName'>密码:</div>" +
			"<div><input type='password' id='us_password' name='usertab.us_password' class='loginInput'/></div>" +
			"<div class='trName' style='line-height:36px;'>验证码:<input type='text' id='code' name='code' " +
			"style=\"width: 120px;background: url('lib/images/loginCode.png') no-repeat; height: 36px;line-height:36px;border: none; padding-left:20px;\"/>" +
			"<img src='./code.action' id='CheckCodeImage' style='margin-top:8px;' align='top' onclick=\"$('#CheckCodeImage').attr('src','./code.action?time='+$.gettime());\"/>&nbsp;</div>" +
			"<div style='height:36px; line-height:36px; padding-left:15px;'><font color='red' id='message'></font></div></div>" +
			"<div style='height:60px;border-top: 2px solid #bfb8ad;'><div style='float:left;width:49.8%;'>" +
			"<input type='button' class='loginWButton' value='登录' onclick='$.login()'/></div>" +
			"<div style='float:right;width:49.8%;'><input type='button' class='loginWButton' value='注册' onclick='$.register()'/></div>" +
			"<div class='c_b'></div></div>" +
			"</form></div>");*/
		/*div.window( {
			top : (($(window).scrollTop())+190),
			shadow : true,
			modal : true,
			closed : false,
			minimizable : false,
			maximizable : false,
			collapsible : false
		});*/
		//$(".loginPOP").show(200);
		var htmlstr="" +
		"<script type='text/javascript'>"+
			"$(function () {"+
				"$('.closebox').click(function () {"+
					"$('.loginPOP').hide(200);"+
				"});  "+

"});"+

		"</script>"+
		"<div class='loginPOP' id='loginWindow'>"+
		"<h3>账户登录</h3>"+
		"<ul>"+
			"<li>"+
			 " <label  class='tit'>账&nbsp;&nbsp;&nbsp;户</label>"+
			 " <input  id='us_name1' name='usertab.us_name' name='txtUser' type='text' maxlength='11'  class='txtinput' placeholder='请输入用户名/手机' />"+
			"</li>"   +            
			"<li>"+
				"<label  class='tit'>密&nbsp;&nbsp;&nbsp;码</label>"+
				"<input id='us_password' name='usertab.us_password'  type='password' maxlength='20' class='txtinput' placeholder='请输入密码' />"+
			"</li>"+
			"<li>"+
				"<label  class='tit'>验证码</label>"+
				"<input id='code' name='code' type='text' maxlength='11' class='txtinput wd80'placeholder='验证码' />"+
				"<div class='yzm'>"+
					"<img src='./code.action' id='CheckCodeImage' style='margin-top:0px;' align='top' onclick=\"$('#CheckCodeImage').attr('src','./code.action?time='+$.gettime());\">"+
				"</div>"+
			"</li>" +             
		"</ul>"+
		"<div style='margin: 0;height:16px;'><a href='forgetPass.jsp'  style='float: right;text-decoration:none;line-height: 30px;color: #333;'>忘记密码</a></div>"+
		"<div class='ljbottom' onclick='$.login()'>立即登录</div>" +
		
		"<div style='margin: 0;height:36px;'><a style='float: left' href='https://www.yfzxmn.com/carsi/login' target='_blank'><img src='lib/images/carsico.png'  width='120'></a><a href='javascript:void(0);'  onclick='$.register()' style='float: right;text-decoration:none;line-height: 30px;color: #333;'>去注册</a></div>"+
		"<div style='height:16px; line-height:16px; padding-left:10px;text-align: left;'><font color='red' id='message'></font></div>"	+
	"</div>"+
		"<style type='text/css'>"+
		"	.loginPOP{"+
				
		"	padding: 10px 30px;"+
			"text-align: center;"+
			"background-color:white;"+
"}"+
		"	ol,ul {list - style:none}"+
			"input {font - family:Microsoft YaHei,Arial;outline:none;}"+
			"input:focus {outline:none;color:#aaa;}"+
			".loginPOP h3{"+
			"	height: 50px;"+
			"line-height: 50px;"+
		"	font-size: 16px;"+
			"text-align: center;"+
			"margin-bottom: 15px;"+
			"color: #666;"+
"}"+
" label, summary { "+
    " position: inherit !important; "+
   " padding-top: 0px !important; " +
"color: black !important;"+
"}" +   
			".closebox{"+
				"color: #666;"+
			"float: right;"+
		"	width: 30px;"+
			"height: 30px;"+
			"font-size: 20px;"+
			"line-height: 30px;"+
			"margin-top: -40px;"+
			"margin-right: -20px;"+
			"cursor: pointer;"+
"}"+".loginPOP ul li{margin: 10px auto;position: relative;padding: 0;}.loginPOP ul li label{width: 50px;display: inline-block; padding-right: 10px;font-size: 12px;color: #666;}"+
			".txtinput{border: 1px solid #d4d4d4;border-radius: 3px;height: 30px;line-height: 30px;padding-left: 10px;width: 200px; }"+
			".txtinput:focus{border - color: #67cedc;outline: 0;-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}"+
			".tit{font - size: 16px!important;font-weight: bold;}"+
			".ljbottom{background-color: #005FA9 !important;margin:20px auto 10px auto;color:#fff;text-align: center;font-size: 14px;line-height: 40px;height: 40px;border-radius: 6px;cursor: pointer;width:100%;}"+
			".wd80{width: 100px; border-radius: 6px 0 0 6px;}"+
			".yzm{display: inline-block; width: 95px; height: 60px; vertical-align: top;text-align: left;}"+
		"	.yzm img{margin:0 0 0;padding:0;border: 0;height: 40px;display: inline-block;border-radius: 0 3px 3px 0;}"+
			".tipzh{position: absolute;top: 70px;left: 58%;}</style>"+
	"";
		layer.open({
			type: 1,
			title: 0,
			shade: 0.5,
			zIndex: 9000,
			content: htmlstr
		});
	},
	/**
	 * 首页登录
	 */
	login: function () {
		if ($.checkLogin()) {
			var user = { us_name: $("#us_name1").val(), us_password: $("#us_password").val(), code: $("#code").val() };
			var data = des.encrypt(JSON.stringify(user));
			//console.log(data);
			$.ajax({
				url: "user_login.action",
				data: { code: data },
				//data:$('#loginForm').serialize(),
				type: "get",
				dataType: "json",
				success: function (data) {
					console.log(data)
					if (data.UserMessage != null) {
						$("#us_id").val(data.UserMessage.id);
						layer.closeAll();//$('#loginWindow').dialog('close');
						var uname=data.UserMessage.trueName==null? data.UserMessage.loginName: data.UserMessage.trueName;
						console.log(uname);
						var username = '<a href="editUser.jsp"><font id="username" color="#185b90">' +uname+ ' </font> </a>';
						var schoolname = '<font color="#185b90">' + data.UserMessage.schoolName + '</font>';
						var loginout = '<button class="loginoutButton" onclick="$.logout()"></button>';
						var examRoom = '<button onclick="location.href=\'examRoom_get.action\'" class="examRoomButton"></button>';
						$("#loginDiv").html("");
						if ((data.UserMessage.usertype & 4) > 0) {
							$("#loginDiv").append(schoolname + username + loginout + examRoom);
						} else {
							$("#loginDiv").append(schoolname + username + loginout);
						}
						if(data.status&&data.status=="true"){
							$.messager.confirm("", "温馨提示：为了您的账号安全，请尽快绑定手机号，便于日后找回密码！", 
							 function (b) { 
								if(b){
									 location.href = "editUser.jsp";
									}
								}
							);
							return;
						}
						location.href="index.jsp";
					} else {
						if (data.result == "passweek") {
							location.href = "updatepass.jsp";
						} else
							$("#message").html(data.result);
					}
				},
				error: function () {
					location.href = "login.jsp";
				}
			});
		}
	},

	/**
	 * 登录页面登录
	 */
	loginjsp: function () {
		if ($.checkLogin()) {
			var user = { us_name: $("#us_name").val(), us_password: $("#us_password").val(), code: $("#code").val() };
			var data = des.encrypt(JSON.stringify(user));
			//console.log(data);
			$.ajax({
				url: "user_login.action",
				data: { code: data },
				//data:$('#loginForm').serialize(),
				type: "get",
				dataType: "json",
				success: function (data) {
					if (data.UserMessage != null) {
						location.href = "index.jsp";
					} else {
						$("#message").html(data.result);
					}
				},
				error: function () {
					location.href = "login.jsp";
				}
			});
		}
	},
	/**
	 * 注册
	 */
	register: function () {
		$.post("user_toRegister.action", function (data) {
			if (data.IpTab == null&&data.Ipv6Tab == null) {
				$.messager.alert("", "对不起，您的IP不在授权范围内");
			} else {
				location.href = "register.jsp";
			}
		}, "json")
	},
	/**
	 * 注销
	 */
	logout: function () {
		$.ajax({
			url: "user_logout.action",
			type: "post",
			dataType: "json",
			success: function (data) {
				$("#loginDiv").html("");
				$("#loginDiv").append('<button class="loginButton" onclick="$.loginwindow()"></button>'
					+ '<button class="registerButton" onclick="$.register()"></button>');
				
			}
		})
		if($("#schid").val()==1496){
					window.location = "https://www.yfzxmn.com/scslcas/logout?error=已退出！";
				}else{
					location.href = "index.jsp";
				}
	},
	/**
	 * 登录检查
	 * @return {TypeName} 
	 */
	checkLogin: function () {
		if ($("#us_name1").val() == "") {
			$.messager.alert("", "用户名不能为空");
			return false;
		}
		if ($("#us_password").val() == "") {
			$.messager.alert("", "密码不能为空");
			return false;
		}
		if ($("#code").val() == "") {
			$.messager.alert("", "验证码不能为空");
			return false;
		}
		return true;
	},
	/**
	 * 保存临时试卷
	 */
	saveTemporaryExam: function () {
		$("#TemporaryBody").html($("#BodyExam").html());
	},
	/**
	 * 判断登录状态
	 */
	checkUserType: function () {
		$.post("user_userType.action", function (json) {
			if (json.status) {
				return true;
			} else {
				return false;
			}
		})
	},
	/**
	 * 保存试卷
	 */
	saveExam: function () {
		$("#ex_time").val($("#f_mm").html());
		$.post("user_userType.action", function (json) {
			if (json.status) {
				if ($("#ue_up").val() == 0) {
					saveExam1();
				} else {
					var is_share = 0;
					if ($("#ue_up").val() == 3) {
						$.messager.defaults = { ok: "是", cancel: "否" };
						$.messager.confirm("", "是否同时分享成绩？", function (data) {
							if (data) {
								is_share = 1;
							}
						})
					}
					saveExam2(is_share);
				}
			} else {
				$.loginwindow();
			}
		}, "json")
	},
	/**
	 * 我的题库
	 */
	getUserExam: function () {
		$.post("user_userType.action", function (json) {
			if (json.status) {
				location.href = "userExam_get.action";
			} else {
				$.loginwindow();
			}
		}, "json")
	},
	/**
	 *  获取当前日期
	 * @return {s}
	 */
	getdate: function () {
		var enabled = 0;
		var today = new Date();
		var s;
		if (today.getYear() > 1900)
			s = (today.getYear()) + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日";
		else
			s = (today.getYear() + 1900) + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日";
		return s;
	},
	/**
	 *  获取当前时间
	 * @return {ctime}
	 */
	gettime: function () {
		//alert("url");
		var Digital = new Date();
		var hours = Digital.getHours();
		var minutes = Digital.getMinutes();
		var seconds = Digital.getSeconds();
		if (minutes <= 9)
			minutes = "0" + minutes;
		if (seconds <= 9)
			seconds = "0" + seconds;
		var ctime = hours + ":" + minutes + ":" + seconds;
		return ctime;
	},
	bodyIframe: function (path) {
		var body = $('<iframe frameborder="0" id="mainbody"></iframe>');
		body.attr("src", path);
		body.height($("#rightMain").height());
		body.width($("#rightMain").width());
		$("#rightMain").empty();
		$("#rightMain").append(body);
	}
})
$.fn.extend({
	/**
	 * 分页功能
	 * $("div").addpagination(totalpages, currentpage, onevent, classs)
	 * totalpages 		总页数
	 * currentpage		当前页数
	 * onevent			连接 如  index.do?page=pagevalue&currentpage=100 中间的pagevalue 被自动换成连接页数
	 * 					或者写  javascript:alert(pagevalue);
	 * classs			可以定义自己的CSS样式，不定义采用默认
	 */
	addpagination: function (totalpages, currentpage, onevent, classs, sele) {
		//alert($(this).html());
		if (totalpages == 1 || totalpages == 0)
			return;
		totalpages = parseInt(totalpages);
		currentpage = parseInt(currentpage);
		var style = '<style type="text/css">'
			+ 'DIV.pagination {FONT-SIZE: 12px; TEXT-ALIGN: center;}'
			+ 'DIV.pagination A {BORDER: #a7b3cd 1px solid; PADDING: 2px 5px; MARGIN: 0px 2px; TEXT-DECORATION: none; COLOR: #000;}'
			+ 'DIV.pagination A:hover {BORDER: #a7b3cd 2px solid;}'
			+ 'DIV.pagination A:active {BORDER: #a7b3cd 2px solid; COLOR: #a7b3cd;}'
			+ 'DIV.pagination SPAN.current {FONT-SIZE: 12px; BORDER: #a7b3cd 1px solid; PADDING: 2px 5px; MARGIN: 0px 2px; BACKGROUND-COLOR: #a7b3cd;}'
			+ 'DIV.pagination SPAN.disabled {BORDER: #a7b3cd 1px solid; PADDING: 2px 5px; MARGIN: 0px 2px; TEXT-DECORATION: none; COLOR: #c9caca;FONT-SIZE: 12px;}'
			+ 'DIV.pagination A.blue {COLOR: #56a9df;}'
			+ '</style>';
		if (classs == undefined || classs == "" || classs == null)
			classs = "pagination";
		if (onevent == undefined || onevent == "" || onevent == null)
			onevent = "#?page=pagevalue";
		var pagination = $('<div class="' + classs + '"></div>');
		var str;
		if (!sele) {
			if (currentpage == 1)
				str = '<span class="disabled">上一页</span>';
			else
				str = '<a href="' + onevent.replace(/pagevalue/g, "" + (currentpage - 1)) + '">上一页</a>';
			for (var j = 1; j < 3 && j < totalpages + 1; j++)
				if (currentpage == j)
					str += '<span class="current">' + j + '</span>';
				else
					str += '<a href="' + onevent.replace(/pagevalue/g, "" + j)
						+ '">' + j + '</a>';
			var i = currentpage - 2;
			if (i <= 3) {
				i = 3;
			} else {
				str += "...";
			}
			if (i > totalpages - 7 && totalpages - 7 > 2) {
				i = totalpages - 7;
			}
			n = i + 5;
			for (; i < n && i < totalpages - 2 && i > 2; i++) {
				if (i == currentpage) {
					str += '<span class="current">' + i + '</span>';
				} else {
					str += '<a href="' + onevent.replace(/pagevalue/g, "" + i) + '">' + i + '</a>';
				}
			}
			if (i < 3)
				i = 3;
			var j = totalpages - 2;
			if (i < j)
				str += "...";
			else
				j = i;
			for (; j <= totalpages && j > 2; j++)
				if (currentpage == j)
					str += '<span class="current">' + j + '</span>';
				else
					str += '<a href="' + onevent.replace(/pagevalue/g, "" + j)
						+ '">' + j + '</a>';
			if (currentpage == totalpages)
				str += '<span class="disabled">下一页</span>';
			else {
				str += '<a href="' + onevent.replace(/pagevalue/g, parseInt(currentpage) + 1) + '">下一页</a>';
			}
			str += '共' + totalpages + '页 ';
			str += ' 到第<select onchange="window.location=\'' + onevent + '\'.replace(/pagevalue/g,this.value); " name="CURRENTPAGE">';
			for (var k = 1; k <= totalpages; k++)
				if (k == currentpage)
					str += '<option selected="selected" value="' + k + '">' + k + '</option>';
				else
					str += '<option value="' + k + '">' + k + '</option>';
			str += '</select>页';
		}
		else {
			if (currentpage == 1)
				str = '<span class="disabled">上一页</span>';
			else
				str = '<a href="' + onevent.replace(/pagevalue/g, "" + (currentpage - 1)) + '" class="blue">上一页</a>';
			if (currentpage == totalpages)
				str += '<span class="disabled">下一页</span>';
			else {
				str += '<a href="' + onevent.replace(/pagevalue/g, parseInt(currentpage) + 1) + '" class="blue">下一页</a>';
			}
		}
		pagination.html(str);
		$(this).html(style);
		$(this).append(pagination);
		//alert($(this).html());
	}
})
jQuery.extend({
	/**
	 * json转字符串
	 * @param {Object} o
	 * @return {TypeName} 
	 */
	jsontostr: function (o) {
		var r = [];
		if (typeof o == "string") return "\"" + o.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
		if (typeof o == "undefined") return "\"\"";
		if (typeof o == "object") {
			if (o === null) return "null";
			else if (!o.sort) {
				for (var i in o)
					r.push(i + ":" + $.jsontostr(o[i]))
				r = "{" + r.join() + "}"
			} else {
				for (var i = 0; i < o.length; i++)
					r.push($.jsontostr(o[i]))
				r = "[" + r.join() + "]"
			}
			return r;
		}
		return o.toString();
	}
})
function saveExam1() {
	$.ajax({
		url: "userExam_save.action",
		data: $("#examinfo").serialize(),
		type: "post",
		dataType: "json",
		success: function (data) {
			$.messager.alert("", "试卷保存成功");
		}
	})
}
function saveExam2(is_share) {
	$.ajax({
		url: "userExam_saveHtml.action",
		data: {
			"userExamtab.us_id": $("#us_id").val(),
			"userExamtab.ue_name": $("#ue_name").val(),
			"userExamtab.ue_fraction": $("#ue_fraction").val(),
			"userExamtab.ex_fraction": $("#ex_fraction").val(),
			"userExamtab.ue_Type": $("#ueType").val(),
			"userExamtab.su_id": $("#su_id").val(),
			"userExamtab.ue_type": $("#ue_type").val(),
			"userExamtab.ef_id": $("#ef_id").val(),
			"userExamtab.ue_up": $("#ue_up").val(),
			"userExamtab.ex_id": $("#ex_id").val(),
			"userExamtab.ue_randomexam": $("#ue_randomexam").val(),
			"userExamtab.is_share": is_share,
			"exam": $("#BodyExam").html()
		},
		type: "post",
		dataType: "json",
		success: function (data) {
			$.messager.alert("", "试卷保存成功");
			if ($("#ue_up").val() == 3) {
				anjson = new Array();
				var anli = $("div[name=an]");
				for (i = 0; i < anli.length; i++) {
					var way = anli.eq(i).attr("way");
					var anId = anli.eq(i).attr("anid");
					var chk_value = "";
					if (parseFloat($("#ar" + anId).attr("fraction")) != parseFloat($("#an" + anId).attr("fraction"))) {
						if (way == 1 || way == 2 || way == 4 || way == 9) {
							anli.eq(i).children("input:checked").each(function () { chk_value = chk_value + ($(this).val()); });
						} else if (way == 8) {
							anli.eq(i).children("input:checked").each(function () { chk_value = chk_value + ($(this).val()); });
							chk_value += ";" + anli.eq(i).children("input[type='text']").val();
						} else {
							chk_value = anli.eq(i).children().val();
						}
						anjson[i] = {};
						anjson[i].value = chk_value;
						anjson[i].way = way;
						anjson[i].id = anId;
						anjson[i].quid = anli.eq(i).attr("quid");
					} else {
						anjson[i] = {};
					}
				}
				$.ajax({
					url: "wrong_insert.action",
					data: {
						"ue_id": data.UserExamtab.ue_id,
						"json": $.jsontostr(anjson)
					},
					type: "post",
					dataType: "json"
				})
			}
		}
	})
}
function share() {
	$.post("user_userType.action", function (json) {
		if (json.status) {
			if ($("#ue_up").val() == 3) {
				$.messager.confirm("", "是否晒成绩同时存入我的题库？", function (data) {
					if (data) {
						saveExam2(1);
					}
				})
			} else {
				$.messager.alert("", "您还没有评分");
			}
		} else {
			$.loginwindow();
		}
	}, "json")
}
function toBin(intNum) {
	var i = "";
	if (/\d+/.test(intNum)) {
		while (intNum != 0) {
			i = Math.abs(intNum % 2) + i;
			intNum = parseInt(intNum / 2);
		}
		if (i.length == 0)
			i = "0";
		return i;
	} else {
		return 0;
	}
}
function checkRigister() {
	if ($("#mobil").val() == "") {
		$.messager.alert("", "手机号不能为空");
		return false;
	}
	if ($("#smscode").val() == "") {
		$.messager.alert("", "短信验证码不能为空");
		return false;
	}
	if ($("#uspassword").val() == "") {
		$.messager.alert("", "密码不能为空");
		return false;
	}
	if ($("#olduspassword").val() == "") {
		$.messager.alert("", "原密码不能为空");
		return false;
	}
	if ($("#uspassword").val().length < 6) {
		$.messager.alert("", "密码过短，至少为6位");
		return false;
	}
	if ($("#repassword").val() == "") {
		$.messager.alert("", "确认密码不能为空");
		return false;
	}
	if ($("#newpassword").val() == "") {
		$.messager.alert("", "新密码不能为空");
		return false;
	}
	if ($("#repassword").val() != $("#uspassword").val()) {
		$.messager.alert("", "两次输入的密码不一致");
		return false;
	}
	var pwdRegex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{10,}');
	if (!pwdRegex.test($("#uspassword").val())) {
		$.messager.alert("", "密码中必须包含字母（不区分大小写）、数字、特殊字符，长度不少于10个字符')");
		return false;
	}
	if (!pwdRegex.test($("#repassword").val())) {
		$.messager.alert("", "密码中必须包含字母（不区分大小写）、数字、特殊字符，长度不少于10个字符')");
		return false;
	}
	/*if ($("#us_email").val() == "") {
		$.messager.alert("", "邮箱不能为空");
		return false;
	}*/
}


function checkupdatepass() {
	if ($("#usname").val() == "") {
		$.messager.alert("", "用户名不能为空");
		return false;
	}

	if ($("#olduspassword").val() == "") {
		$.messager.alert("", "原密码不能为空");
		return false;
	}

	if ($("#newpassword").val() == "") {
		$.messager.alert("", "新密码不能为空");
		return false;
	}
	if ($("#newpassword").val() != $("#repnewpassword").val()) {
		$.messager.alert("", "两次输入的密码不一致");
		return false;
	}
	var pwdRegex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{10,}');

	if (!pwdRegex.test($("#newpassword").val())) {
		$.messager.alert("", "新密码中必须包含字母（不区分大小写）、数字、特殊字符，长度不少于10个字符')");
		return false;
	}

}
function register() {
	if (checkRigister() != false) {
		$.ajax({
			url: "user_register.action",
			data: $('#form').serialize(),
			type: "post",
			dataType: "json",
			success: function (data) {
				if (data.result != "注册成功")
					$.messager.alert("", data.result);
				else {
					$.messager.alert("", data.result, "", function () { location.href = 'index.jsp' });
				}
			}
		});
	}
}
function forgetpass() {
	if (checkRigister() != false) {
		$.ajax({
			url: "user_forgetPass.action",
			data: $('#form').serialize(),
			type: "post",
			dataType: "json",
			success: function (data) {
				if (data.status != "true")
					$.messager.alert("", data.result);
				else {
					 document.getElementById("form").reset();

						 $.messager.alert('提示',data.result,'info',function(){
       						 $.loginwindow();
    				 });
				}
			}
		});
	}
}

function updatpass() {
	if (checkupdatepass() != false) {
		$.ajax({
			url: "user_updatepass.action",
			data: $('#form').serialize(),
			type: "post",
			dataType: "json",
			success: function (data) {
				if (data.result != "密码修改成功！")
					$.messager.alert("", data.result);
				else {
					$.messager.alert("", data.result, "", function () { location.href = 'index.jsp' });
				}
			}
		});
	}
}
function checkLength(obj, len) {
	if (obj.value.length > len) {
		$.messager.alert("", "您的输入过长，不能超过" + len + "个字符");
		$(obj).focus();
		$(obj).val(obj.value.substr(0, len));
	}
}
function checkSearch() {
	var keyWords = $("#key").val();
	$("#c").val(encodeURI(keyWords));
}
function ow(url) {
	var tmp = window.open("about:blank", "", "height=100%, width=100%, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no")
	tmp.moveTo(0, 0);
	tmp.resizeTo(screen.width, screen.height - 20);
	tmp.focus();
	tmp.location = url;
}
function show() {
	$.post("shareInfo.jsp", function (html) {
		$.messager.show({
			title: '晒成绩有奖活动',
			msg: html,
			showType: 'show',
			width: 450,
			height: 400
		});
	}, "text")
}
//导出成绩
function exportExaminee(tb_id) {
	$.ajax({
		url: "examinee_export.action",
		data: { "tb_id": tb_id },
		type: "post",
		dataType: "json",
		success: function (data) {
			if (data.result == "null") {
				$.messager.alert("", "没有可导出的信息");
			} else {
				var div = $("#downloadWindow");
				if (!div.html())
					div = $("<div id='downloadWindow' class='easyui-dialog' " +
						"style='width:240px;height:140px;padding:10px 30px;font-size:12px;' title='下载' data-options='shadow: true' buttons='#dlg-buttons'>" +
						data.result + "<div id='downloadBtn' style='margin-top: 5px;'><a class='easyui-linkbutton' href='examinee_download.action?filename=" + data.result + "'>确定</a></div>" +
						"</div>");
				div.window({
					top: (($(window).scrollTop()) + 190),
					shadow: true,
					modal: true,
					closed: false,
					minimizable: false,
					maximizable: false,
					collapsible: false
				});
				$("#downloadBtn").find("a").linkbutton({});
			}
		}
	})
}

function modifyTel(){
	if ($("#mobil").val() == "") {
			$.messager.alert("", "手机号不能为空");
			return ;
		}
	if ($("#SMScode").val() == "") {
			$.messager.alert("", "验证码不能为空");
			return ;
		}
	var phone = $("#mobil").val();
	var SMScode =	$("#SMScode").val();
	$.post("user_updateTel.action?phone=" + phone+"&code="+SMScode,function(json){
			$.messager.alert("", json.result);
			if(json.status == "true"){
				$("#us_tel").val(phone);
				layer.closeAll();
				}
			if(json.status == "bind"){
				$("#us_tel").val(phone);
				layer.closeAll();
				$("#phoneDiv").text("修改手机号");
			}
			},"json")
}
function modifyPass(){
	$("#passwordTips").hide();
	$("#qrpasswordTips").hide();
	if ($("#uspassword").val() == "") {
			//$.messager.alert("", "手机号不能为空");
			$("#passwordTips").text("密码不能为空！");
			$("#passwordTips").show();
			return ;
		}
	if ($("#repassword").val() == "") {
			//$.messager.alert("", "验证码不能为空");
			$("#qrpasswordTips").text("确认密码不能为空！");
			$("#qrpasswordTips").show();
			return ;
		}
	if ($("#uspassword").val() != $("#repassword").val()) {
		$("#qrpasswordTips").text("两次密码输入的不一致，请重新输入！");
		$("#qrpasswordTips").show();
		return ;
	}
	var pwdRegex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{10,}');

	if (!pwdRegex.test($("#uspassword").val())) {
		$("#passwordTips").text("新密码中必须包含字母（不区分大小写）、数字、特殊字符，长度不少于10个字符");
		$("#passwordTips").show();
		return ;
	}
	var pass = $("#uspassword").val();
	$.post("user_updatePassw.action?pass=" + pass,function(json){
			$.messager.alert("", json.result);
			if(json.status == "true"){
				
				layer.closeAll();
				}
			},"json")
}