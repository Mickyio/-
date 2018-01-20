define(['jquery'],function(){
	
		
		function getBrand(){
			//this.init();
		}
		getBrand.prototype = {
			constructor:getBrand,
			init:function(){
				this.$brand_list=$(".brand_list");

				//console.log(this.$brand_list_img)
				
				var setup={
				url:"scripts/brand.json",
				type:"GET",
				context:this
				}
			  $.ajax(setup).then($.proxy(this.rendring,this));
			},
			rendring:function(res){
				
				//console.log(res);
				//var _this=this;
				var main="";
				res.forEach(function(item){
					//console.log($(_this.$content_list_li[index]).find("img"))
					//console.log(_this.$brand_list_img[index])
				//	$(_this.$brand_list_img[index]).attr("src",item.img);
					main +='<a class="brand_img">'+
								'<img src="'+item.img+'">'+
								'<span></span>'+
							'</a>'


					
					//console.log(res.img)

				})
				this.$brand_list.html(main)
			}

		}
	



		
		/*rendring_data:function(res){
			console.log(res)
			if(!this.res){
				this.res=res;
			}
			console.log(this.res);
			var rendringArr=[];
			rendringArr=this.res.slice(this.index*6,(this.index+1)*6);
			var _this=this;
			var html="";
			rendringArr.forEach(fuction(item){
				html+='<li>'+
						'<div class="sale_img">'+
							'<a href="">'+
								'<img src="'+item.img+'">'+
							'</a>'+
							'<div class="time" style="position: static;margin-top: 5px">'+
								'<div class="time_bg" style="background:url(http://image.xzhuang.com/static/images/img/back.png) 0 0 no-repeat;opacity: 1;filter: alpha(opacity=100);"></div>'+
								'<p class="time_con"></p>'+
							'</div>'+
						'</div>'+
						'<h4 class="sale_title">'+
							'<a href="">'+item.title+'</a>'+
						'</h4>'+
						'<div class="goods_price">'+
							'<span class="sale_price">'+
								'<dfn>¥</dfn>'+
								+item.sale_price+
							'</span>'+
							'<del class="origin_price">'+
								'<del>¥</del>'
								+item.origin_price+
							'</del>'+
							'<a href="" class="buy_btn" style="display: block;">立即抢购</a>'+
						'</div>'+
					'</li>'
			})
			this.ul.innerHTML=html;

		}*/
	
	return new getBrand();
})