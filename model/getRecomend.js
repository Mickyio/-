define(['jquery','cookie'],function(){
	function getRecomend(){
		this.init();
	}
	getRecomend.prototype={
		constructor:getRecomend,
		init:function(){
			
			this.hot_product_list=$(".hot_product_list");
			
		
			var setup={
				url:"scripts/recomend.json",
				type:"GET",
				context:this
			}
			$.ajax(setup).then($.proxy(this.rendring,this));
			this.usercenter=$(".user_center");
			this.user_center_unflod=$(".user_center_unflod");
			$(this.usercenter).on("mouseover",$.proxy(this.showhide,this,"block"));
			$(this.usercenter).on("mouseleave",$.proxy(this.showhide,this,"none"));

		},
		showhide:function($status){
			/*if($status ="none"){*/
				this.user_center_unflod.css("display",$status);
			/*}else{
				this.user_center_unflod.css("display","block")
			}*/
		},
		rendring:function(res){
			//console.log(res);
			//var _this=this;
			var main="" ;
			res.recomend_data.forEach(function(item){
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
							'<a>'+
								'<img src="'+item.img+'"  id='+item.id+'>'+
							'</a>'+
							'<div class="sale_pink">'+item.sale_slogan+'</div>'+
							'<h2 class="">'+
								'<a>'+item.brand+'</a>'+
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
							'<a class="sale_buy" data='+item.id+'>'+
								'立即抢购'+
							'</a>'+
						'</div>'+
					'</li>'


			});
			this.hot_product_list.html(main);
			this.hot_li=$(".hot_product_list")
			this.hot_li_img=$(".hot_product_list").find("img");
			//console.log(this.hot_li);
			for(var i=0;i<this.hot_li_img.length;i++){
				 this.hot_li_img[i].index=i;
			
				
				// console.log(this.hot_li_img[i].parent());
				 $(this.hot_li_img[i]).on("click",$.proxy(this.getInfo,this));
				
				
					
			}
			
			//$(_this.$brand_list_img[index]).attr("src",item.img);
		},
		getInfo:function(e){
			var e=e||window.event;
			self.location.href="http://localhost:82/detail.html";
			this.index=e.target.index;
			//console.log(this.hot_li_img[this.index])
			this.id=$(this.hot_li_img[this.index]).attr("id");
			// let timer = setTimeout(function(){
				//console.log(this.id);
				this.setcookie();
			

		},
		setcookie:function(){
			$.cookie("id",this.id);

		}

	}
	return new getRecomend();
})