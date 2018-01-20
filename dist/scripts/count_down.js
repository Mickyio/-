define(['jquery'],function(){
	function Gettime(){
		this.init();
	}

	Gettime.prototype={
		constructor:Gettime,
		init:function(){
			/*this.nowtime=new Date();*/
			this.menu=$(".menu");
			this.scrollTop=$(document).scrollTop();
			//console.log(scrollTop);
			this.content=$(".content");
			//console.log(this.content);
			console.log(this.scrollTop)
			this.$p=$(".time_con");
			console.log(this.$p)
	
			// console.log(this.$p);
			this.$p.attr("active-data-val","1516950000");
			this.endtime=$(".time_con").attr("active-data-val");
			this.showhide();
			this.timer=null;
			$(window).scroll($.proxy(this.showhide,this));


/*			this.cha=this.endtime-Math.round(new Date().getTime()/1000-28800);
			

			this.$day=Math.floor(this.cha/(60*60*24));
			this.$hour=Math.floor(this.cha/(60*60))%24;
			this.$minute=Math.floor(this.cha/60)%60;
			this.$second=Math.floor(this.cha)%60;*/
			this.rendring();

		},
		showhide:function(){


				
				var _this=this;
				clearTimeout(_this.timer2);
				//console.log(_this.menu)   _this.content[0].offsetTop
				_this.timer2=setTimeout(function(){
					if(_this.scrollTop>=1000){
						_this.menu.css("display","block");
					}else{
						_this.menu.css("display","none")
					}
				},800)
			
			
			
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