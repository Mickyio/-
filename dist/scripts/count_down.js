define(['jquery'],function(){
	function Gettime(){
		this.init();
	}

	Gettime.prototype={
		constructor:Gettime,
		init:function(){
			/*this.nowtime=new Date();*/
			this.menu=$(".menu");
			
			//console.log(scrollTop);
			this.content=$(".content");
			//console.log(this.content);
			//console.log(this.scrollTop)
			this.$p=$(".time_con");
			//console.log(this.$p)

			//公告
			
			//右侧菜单
			this.right_menu=$(".newHome_toolBar");
			this.back=this.right_menu.find(".newHome-toolBar-gototop");
			//console.log(this.back)
			// console.log(this.$p);
			this.$p.attr("active-data-val","1517980000");
			this.endtime=$(".time_con").attr("active-data-val");
			this.showhide();
			this.timer=null;
			$(window).on("scroll",$.proxy(this.showhide,this));
			$(this.back).on("click",$.proxy(this.back_totop,this));
			this.rendring();

		},
		showhide:function(){


				//侧边菜单的显示隐藏
				//var _this=this;
				this.scrollTop=$(document).scrollTop();
				//console.log(this.scrollTop)
				clearTimeout(this.timer2);
				//console.log(_this.menu)   _this.content[0].offsetTop
				var _this=this;
				this.timer2=setTimeout(function(){
					if(_this.scrollTop>=800){
						_this.right_menu.css("display","block");
						_this.menu.css("display","block");
					}else{
						_this.menu.css("display","none");
						_this.right_menu.css("display","none");
					}
				},500)
			
			
			
		},
		back_totop:function(){
				//返回顶部
				$('html , body').animate({scrollTop: 0},'slow');
			
		},
		rendring:function(){
			var this_ = this;
			setInterval(function(){
				this_.nowtime=new Date();
				this_.cha=this_.endtime-Math.round(new Date().getTime()/1000-28800);


				this_.$day=Math.floor(this_.cha/(60*60*24));
				this_.$hour=Math.floor(this_.cha/(60*60))%24;
				this_.$minute=Math.floor(this_.cha/60)%60;
				this_.$second=Math.floor(this_.cha)%60;

				var html='仅剩'+
							'<b>'+
							+this_.$day+
							'</b>'+'天'+
							'<b>'+
							this_.$hour+
							'</b>'+'时'+
							this_.$minute+
							'<b>'+'分'+
							this_.$second+
							'</b>'+'秒'
							$(this_.$p).each(function(){
								this_.$p.html(html);
							})
			}, 1000);

   			

		}/*,
		count:function(){
			// var _this=this;
			// setInterval(this.init(),1000)
		}*/


	}
	return new Gettime();
})