define(['jquery'],function(){
	function getRecomend(){
		this.init();
	}
	getRecomend.prototype={
		constructor:getRecomend,
		init:function(){
			//this.hot_product_list=$(".hot_product_list").find("li");
			this.hot_product_list=$(".hot_product_list");
			//this.user_center=$(".user_center");
			/*this.hot_img=$(".hot_img").find("a").find("img");
			this.sale_slogan=$(".sale_pink");
			this.hot_product_brand=this.hot_product_list.find("h2").find("a");
			this.hot_product_title=$(".hot_img").find("p");
			console.log(this.hot_product_brand)
			this.priced=$(".priced");
			this.price=$("price");
			this.sale_num=$(".sale_num").find("strong");
			this.discount=$(".discount")*/
			/*$(".user_center").mouseenter($.proxy(this.showhide("block"),this));
			$(".user_center").mouseleave($.proxy(this.showhide("none"),this));*/
			/*$(".content_brand").find("li").mouseenter(function(){
				$(".brand_detail").slideUp("slow",function(){
				  	$(".brand_detail").css("bottom","0")
				 });
			})*/

			/*$(".content_brand").find("li").mouseenter(function(){
				  $(".brand_detail").animate({ 
				    bottom: 0
				    
				  }, 500 );
				});
			$(".content_brand").find("li").mouseleave(function(){
				  $(".brand_detail").animate({ 
				    bottom: -97px
				    
				  }, 500 );
				});*/
			
			//this.user_center.on("mouseleave",$.proxy(this.hide,this));
			//this.user_center_unflod=$(".user_center_unflod");
			//console.log(this.user_center_unflod)
			//console.log(this.hot_product_list)
			var setup={
				url:"scripts/recomend.json",
				type:"GET",
				context:this
			}
			$.ajax(setup).then($.proxy(this.rendring,this));
		},
		/*showhide:function($status){
			if($status ="none"){
				$(".user_center_unflod").css("display","none");
			}else{
				$(".user_center_unflod").css("display","block")
			}
		},*/
		rendring:function(res){
			//console.log(res);
			//var _this=this;
			var main="" ;
			res.forEach(function(item){
				/*$(_this.hot_img[index]).attr("src",item.img);
				$(_this.sale_slogan[index]).html(item.sale_slogan);
				$(_this.hot_product_brand[index]).html(item.brand)
				$(_this.hot_product_title[index]).html(item.title);
				$(_this.priced[index]).html(item.original_price);
				$(_this.price[index]).html(item.sale_price);
				$(_this.sale_num[index]).html(item.sale_num);
				$(_this.discount[index]).html(item.discount);*/
				main +='<li>'+
						'<div class="hot_img">'+
							'<a href="">'+
								'<img src="'+item.img+'">'+
							'</a>'+
							'<div class="sale_pink">'+item.sale_slogan+'</div>'+
							'<h2 class="">'+
								'<a href="">'+item.brand+'</a>'+
							'</h2>'+
							'<p>'+item.title+'</p>'+
							'<div class="sale_price">'+
								'<span class="sale_num">'+
									'<strong>'+item.sale_num+'</strong>'+
									'人已购买'+
									
								'</span>'+
								'<span class="priced">'+
									'<dfn>¥</dfn>'+
									item.original_price+
								'</span>'+
								'<del class="price">'+
									'<dfn>¥</dfn>'+
									item.sale_price+
								'</del>'+
								'<span class="discount">'+item.discount+'</span>'+
							'</div>'+
							'<a href="" class="sale_buy" data='+item.id+'>'+
								'立即抢购'+
							'</a>'+
						'</div>'+
					'</li>'


			});
			this.hot_product_list.html(main);
			


			

			//$(_this.$brand_list_img[index]).attr("src",item.img);
		}
	}
	return new getRecomend()
})