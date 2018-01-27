
var usr = $('#userName'),
	pas = $('#passWord'),
	watch = $('.watch'),
	chk = $('#checkbox'),
	sub = $('#submit'),
	userName, passWord,
	flag = 0;
pas.bind('input propertychange', function () {
	if(pas.val() !== ""){
		$('.watch').css("display", "inline-block");
	}else{
		$('.watch').css("display", "none");
	}
	passWord = pas.val();
	console.log(passWord);
});
usr.bind('input propertychange', function () {
	userName = usr.val();
	console.log(userName);
});
watch.bind({
	mousedown : function () {
		document.getElementById('passWord').type = "text";
	},
	mouseup : function () {
		document.getElementById('passWord').type = "password";
	}
});
sub.bind('click', function () {
	if(chk.attr('checked')){
		//创建cookie，为期七天
		console.log("checked");
	}
	$.ajax({
		type : "post",
		url : "======",
		data : {
			u : userName,
			p : passWord
		},
		dataType : "TEXT",
		success : function (r) {
			//r为返回值
			if(r.trim() == "y"){
				//y为url跳转网页中传回的值
				window.location.href = "跳转界面";
			}else{
				alert("用户名或密码错误");
			}
		}
	})
});