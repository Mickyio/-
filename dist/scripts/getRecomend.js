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
			$(this.usercenter).on("mouseenter",$.proxy(this.showhide,this,"block"));
			$(this.usercenter).on("mouseleave",$.proxy(this.showhide,this,"none"));

		},
		showhide:function(status){
			console.log(status)
			if(status == "block"){
				this.user_center_unflod.css("display","block");
				$("serv2").css({
					
				})
			}else{
				this.user_center_unflod.css("display","none");
				
			}
		},
		rendring:function(res){

			var main="" ;
			res.recomend_data.forEach(function(item){
				
				main +='<li>'+
						'<div class="hot_img">'+
							'<a class=pro_list_img>'+
								'<img src="'+item.img+'"  id='+item.id+'>'+
							'</a>'+
							'<div class="sale_pink">'+item.sale_slogan+'</div>'+
							'<h2 class="sale_brand">'+
								'<a>'+item.brand+'</a>'+
							'</h2>'+
							'<p class="pro_title">'+item.title+'</p>'+
							'<div class="sale_price">'+
								'<span class="sale_num">'+
									'<strong>'+item.sale_num+'</strong>'+
									'人已购买'+
									
								'</span>'+
								'<span class="priced sale_price">'+
									'<dfn>¥</dfn>'+
									item.original_price+
								'</span>'+
								'<del class="price">'+
									'<dfn>¥</dfn>'+
									item.sale_price+
								'</del>'+
								'<span class="discount">'+item.discount+'</span>'+
							'</div>'+
							'<a class="sale_buy" data-id='+item.id+' img='+item.img+' title='+item.title+' price='+item.sale_price+' id='+item.id+'>'+
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
			//获取商品所有信息
			
			
			this.index=e.target.index;
			
			//console.log(this.hot_li_img[this.index])
			this.id=$(this.hot_li_img[this.index]).attr("id");
			// let timer = setTimeout(function(){
				//console.log(this.id);
				this.brand=$(".sale_brand").eq(this.index).find("a").text();
				this.img=$(".hot_img").eq(this.index).find("img").attr("src");
				//this.sale_slogan=$(".sale_pink").eq(this.index).text();
				this.title=$(".hot_img").eq(this.index).find("p").text();
				this.sale_num=$(".sale_num").eq(this.index).find("strong").text();
				this.sale_price=$(".price").eq(this.index).text();
				this.discount=$(".discount").eq(this.index).text();
				this.original_price=$(".priced").eq(this.index).text();
				//console.log(this.brand,this.img,this.title,this.sale_num);
				$.cookie("shopping_cart",'{"id":"'+this.id+ '","discount":"'+this.discount+ '","original_price":"'+this.original_price+ '","sale_price":"'+this.sale_price+ '","title":"'+this.title+'","brand":"'+this.brand+'","img":"'+this.img+'","sale_num":"'+this.sale_num+'"}')
				self.location.href="detail.html";
			

		}

	}
	return  new getRecomend();
})