define(['jquery','cookie'],function(){
	function Login(){
		// body... 
		this.init();
	}
	Login.prototype={
		init:function(){
			this.username=$("#username");
			this.password=$("#password");
			this.btn=$(".dl_denglu");
			console.log(this.btn);
			this.btn.on("click",$.proxy(this.checkUser,this));
			this.error=$("#login_error");
		},
		checkUser:function(e){
			var e=event||window.event;
			var username=this.username.val();
			var pass=this.password.val();
			var acookie=$.cookie("logins");
			var scookie=JSON.parse(acookie);
			var flag=false;
			console.log(scookie);
			if(username==scookie.id && pass==scookie.pass){
				flag=true;
				console.log("登录成功");
				self.location.href="index.html";
			}else{
				flag=false;
				console.log("登录失败");
				this.error.css({
					display:"block"
				})
				//登录成功
			}
			if(flag=false){
				e.preventDefault();
			}
		}
	}
	return new Login();
})