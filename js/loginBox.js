//主页登陆相关方法

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
	if(userName == "admin"){
		myLocal.save("user",1);
		window.location="index.html";
	}else{
		myLocal.save("user",0);
		window.location="index.html";
	}
});