define(['jquery'],function(){
	// class getData{
	// 	constructor(){};
	// 	init(){
	// 		this.hot_product_list=$("#hot_product_list").find("li");
	// 		this.sale_title=$(".sale_title").find("a");
	// 		this.sale_price=$(".sale_price");
	// 		this.origin_price=$(".origin_price");
	// 		let url={
	// 			url:"scripts/index_data.json",
	// 			type:"GET",
	// 			context:this
	// 		}
	// 		$.ajax(url).then($.proxy(this.rendring,this));
	// 	};
		
	// 	rendring(res){
	// 		console.log(1);
			/*this.res=res;
			let _this=this;
			$(res.img).each(function(index,item){
				this.hot_product_list.eq(index).find("img").attr("src",item);
			});
			$(res.title).each(function(index,item){
				this.sale_title.eq(index).html(item);

			});
			$(res.sale_price).each(function(index,item){
				this.sale_price.eq(index).html(item);
			});
			$(res.original_price).each(function(index,item){
				this.origin_price.eq(index).html(item);
			});*/
		//};
		
		function getData(){

		}
		getData.prototype = {
			constructor:getData,
			init:function(){
				this.$content_list_li=$(".content_list").find("li")/*.find(".sale_img")*/;
				this.$sale_title=$(".sale_title");
				this.$sale_price=$(".sale_price");
				this.$origin_price=$(".origin_price");
				
				var setup={
				url:"scripts/index_data.json",
				type:"GET",
				context:this
				}
			  $.ajax(setup).then($.proxy(this.rendring,this));
			},
			rendring:function(res){
				
				//console.log(this);
				var _this=this;
				res.forEach(function(item,index){
					$(_this.$content_list_li[index]).find("img").attr("src",item.img);

					$(_this.$sale_title[index]).find("a").html(item.title);
					$(_this.$sale_price[index]).html(item.price);
					$(_this.$origin_price[index]).html(item.sale_price);
					//console.log(res.img)

				})
			}

		}
	



		// get:function(url,callback){
		// 	var xhr=new XMLHttpRequest();
		// 	xhr.open("GET",url);
		// 	xhr.send(null);
		// 	xhr.onreadystatechange=function(){
		// 		if(xhr.readyState==4&& xhr.status==200){
		// 			try{
		// 				var json=JSON.parse(xhe.responseText);
		// 				callback(json);
		// 			}catch(e){
		// 				callback(xhr.responseText);
		// 			}
		// 		}
		// 	}
		// },
		// load_data:function(){
		// 	this.get("index_data.php",this.rendring_data.bind(this));
		// },
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
	
	return new getData();
})