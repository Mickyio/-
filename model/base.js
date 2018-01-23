define(['jquery'],function(){
	function move(){
		this.init();
	}
	move.prototype={
		init:function(){
			this.notice_list=$(".notice_list");
			

			this.move_up();
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