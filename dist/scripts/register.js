define(['jquery'],function(){
	function Register(){
		this.init();

	}
	Register.prototype = {
		// body... 
		constructor:Register,
		init:function(){
			this.flag1=false;
			this.flag=false;
			
			
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
			

		},
		check_phone_input:function(){

			//验证手机号码
			
			this.flag1=this.reg1.test(this.phone.val());
			
			console.log(this.flag1);
			if(this.flag1==true){
				this.count++;
				this.phone_ok.css({
					display:"inline",
				})

			}else{
				this.phone_error.css({
					display:"block",
				})
				this.phone_ok.css({
					display:"none",
				})
			}
			
			

		},
		check_password_input:function(){
			//验证密码
			this.flag2=this.reg2.test(this.password.val());
			if(this.flag2==true){
				this.count++;
				this.password_ok.css({
					display:"inline",
				})
			}else{
				this.password_error.css({
					display:"block",
				})
				this.password_ok.css({
					display:"none",
				})
			}
		},
		check_repassword_input:function(){
			//验证密码
			
			if(this.repassword.val()==this.password.val()){
				this.count++;
				this.repassword_ok.css({
					display:"inline",
				})
			}else{
				this.repassword_error.css({
					display:"block",
				})
				this.repassword_ok.css({
					display:"none",
				})
			}
		}


	};
	return new Register();
})