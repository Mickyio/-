define(['jquery'],function(){
	function Register(){
		this.init();

	}
	Register.prototype = {
		// body... 
		constructor:Register,
		init:function(){
			this.flag1=false;
			this.flag2=false;
			this.flag3=false;
			this.count=[];
			
			this.reg1 = /^1[3|4|5|7|8][0-9]{9}$/; //手机号码
			this.reg2=/^[a-zA-Z]\w{5,15}$/;//密码

			this.phone=$("#phone");
			this.phone_ok=$(this.phone).parent().find("label").eq(0);
			this.phone_error=$(this.phone).parent().find("label").eq(1);

			this.password=$("#password");
			this.password_ok=$(this.password).parent().find("label").eq(0);
			this.password_error=$(this.password).parent().find("label").eq(1);

			this.repassword=$("#repassword");
			this.repassword_ok=$(this.repassword).parent().find("label").eq(0);
			this.repassword_error=$(this.repassword).parent().find("label").eq(1);

			
			this.phone.on("blur",$.proxy(this.check_phone_input,this));
			this.password.on("blur",$.proxy(this.check_password_input,this));
			this.repassword.on("blur",$.proxy(this.check_repassword_input,this));
			
			this.submitbtn=$("#submit");
			this.submitbtn.on("click",$.proxy(this.submit,this));

		},
		check_phone_input:function(){

			//验证手机号码
			
			
			
			//console.log(this.flag1);
			if(this.reg1.test(this.phone.val())){
				this.flag1=true;			
				this.phone_ok.css({
					display:"inline",
				})

			}else{
				this.flag1=false;
				this.phone_error.css({
					display:"block",
				})
				this.phone_ok.css({
					display:"none",
				})
			}
			if(this.count.indexOf("flag1")==-1){
				this.count.push("flag1");
			}
			

		},
		check_password_input:function(){
			//验证密码
			
			if(this.reg2.test(this.password.val())){
				this.flag2=true;
				//this.count.push(this.flag2);
				
				this.password_ok.css({
					display:"inline",
				})
			}else{
				this.flag2=false;
				this.password_error.css({
					display:"block",
				})
				this.password_ok.css({
					display:"none",
				})
			}
			if(this.count.indexOf("flag2")==-1){
				this.count.push("flag2");
			}
		},
		check_repassword_input:function(){
			//验证密码
			
			if(this.repassword.val()==this.password.val()){
				this.flag3=true;
				//this.count.push(this.flag3);
				this.repassword_ok.css({
					display:"inline",
				})
			}else{
				this.flag3=false;
				this.repassword_error.css({
					display:"block",
				})
				this.repassword_ok.css({
					display:"none",
				})
			}
			if(this.count.indexOf("flag3")==-1){
				this.count.push("flag3");
			}
		},
		submit:function(e){
			var e=event||window.event;
			this.flag = true ;
			for(var i=0;i<this.count.length;i++){
				if(!this[this.count[i]]){
						console.log("验证失败") ;
						
						e.preventDefault();
						this.flag = false ;
				}
			}
			if(this.flag){
					//console.log("验证成功") ;
					this.setCookie();
					self.location.href="login.html";
				}

			/*if($.cookie("Logins")){
				flag=true;
				break;
			}
			if(){

			}*/
			console.log(this.count);
			/*for(var i = 0 ; i < this.count.length;i ++){
				console.log(this.count);*/
				/*if(!this[this.count[i]]){
						console.log("验证失败") ;
				}else{
					console.log("验证成功") ;
				}*/
			
		},
		setCookie:function(){
			var evt = event || window.event;
			if($.cookie(this.phone.val())){
				//账号存在
				var scookie=$.cookie("logins");
				var acookie=JSON.parse(scookie);

				acookie.forEach(function(item){
					if(item.id==this.phone.value()){
						evt.preventDefault();
					}
				})
			}else{
				$.cookie("logins",'{"id":"'+this.phone.val()+ '","pass":"'+this.password.val()+'"}');
				//console.log(acookie);
			}
		}

		

	};
	return new Register();
})