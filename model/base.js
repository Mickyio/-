define(['jquery'],function(){
	function move(){
		this.init();
	}
	move.prototype={
		init:function(){
			this.notice_list=$(".notice_list");
			this.login=$(".welcome").find("a").eq(0);
			this.register=$(".welcome").find("a").eq(1);
			console.log(this.login,this.register);
			this.login.on("click",$.proxy(this.checkLogin,this));
			this.input=$("#search_txt");
			this.list = $(".search_list");
			//console.log(this.list)
			this.input.on("input",$.proxy(this.offinput,this))
			// 当输入框失去焦点时
			this.input.on("blur",$.proxy(this.oninput,this));
			this.timer=null;
			this.move_up();
		},
		oninput:function(){
			
			this.list.css({
						display:"none"
					})
			
		 
		},
		offinput:function(){
			this.list.css({
				display:"block"
			})
			clearInterval(this.timer);
			
			// 获取输入框的value
			$val = this.input.val();
			var _this = this;
			this.timer = setTimeout(function(){	
				//通过 jQ 的 ajax 请求数据 
				$.ajax({url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + $val + "&cb=callback",
				        dataType:'jsonp',//数据类型
				        type: "GET",//获取方式
				        jsonpCallback:"callback",//回调函数名
				        context:this,
				        success:function(result){
        					let n = 8 ;
        					for(let i = 0 ; i < n ; i++){
        						// 获取的结果插到相应是li中
        						_this.list.children().eq(i).html(result.s[i]);
        						}
        					},
       					
   						})
				},500)
				
		},
		move_up:function(){
			var timer;
			
			var _this=this;
			clearInterval(timer);
			timer=setInterval(function(){
				_this.now=parseInt($(_this.notice_list).css("marginTop"));
				//console.log(_this.now);
				_this.target=-29;
				_this.speed=(_this.target-_this.now)/6;
				_this.speed=_this.speed>0?Math.ceil(_this.speed):Math.floor(_this.speed);
				if(_this.now==_this.target){
					$(_this.notice_list).css({
						marginTop:0
						
					})
				}else{
					//console.log($(_this.notice_list).css);
					//$(_this.notice_list).css("marginTop")=_this.now+_this.speed+"px";
					$(_this.notice_list).css({
						marginTop:_this.now+_this.speed
						
					})
				}
			},200)
			
			//var _this=this;
			/*timer=setInterval(function(){
				//获取当前位置
				_this.now=getComputedStyle($(_this.notice_list),false)[marginTop];
				console.log(_this.now);
			},3000)*/
		}

	}
	return new move();
})