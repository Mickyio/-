
define(['jquery'],function(){
	function shopcart(){

	}
	shopcart.prototype={
		constructor:shopcart,
		init:function(){
			this.btn=$(".btn-action");
			this.img=$(".cartltab_pro").find("img");
			this.title=$(".cartltab_proname");
			this.price=$(".cartltabtr").find("td").eq(1);
			
			this.tbody=$("#tbody");
			
			this.product_num=$("#cartTotal").find("li").eq(0);		
			this.product_Total=$("#cartTotal").find("li").eq(3);			
			this.delete=$(".deleteGoodsFromCart");

			$(this.delete).on("click",$.proxy(this.deleteProduct,this));			
				$(this.btn).on("click",$.proxy(this.getCookie,this));			
		},
		getCookie:function(e){
			//var index=e.target.index;
			var img=this.btn.attr("img");
			var id=this.btn.attr("id");
			var price=parseInt(this.btn.attr("price"));
			var title=this.btn.attr("title");
			//console.log(img,price,title,id)
			var num=this.btn.attr("num");

			
			if ($.cookie("shopping_cart")) {
					var acookie = JSON.parse($.cookie("shopping_cart"));
					var flag = false;
					acookie.forEach(function(item){
						if (item.id == id) {
								flag = true;
								item.num++;
							}
					})
					if (!flag) {
						var item = {
							id:id,
							price:price,
							title:title,
							img:img,
							
							num:1
						}
						acookie.push(item);
						
					}
					scookie = JSON.stringify(acookie);
					$.cookie("shopping_cart",scookie);
					console.log(num);			
				}else {
					$.cookie("shopping_cart",'[{"id":"'+id+'","title":"'+title+'","img":"'+img+'","price":"'+price+'","num":1}]');

				}
				//console.log($.cookie("shopping_cart"))


				//console.log($.cookie("shopping_cart"));
				this.getCart();
				/*this.img.attr("src",acookie.img);
				this.price.html(acookie.sale_price)
				this.title.html(acookie.title);*/
		},
		getCart:function(){
			if($.cookie("shopping_cart")){
			var acookie=JSON.parse($.cookie("shopping_cart"));
			// console.log(acookie)cookie没问题
			var html="";
			acookie.forEach(function(cookie){
				//console.log(cookie);
				$(cookie).each(function(index,item){
					//console.log(item.title)
					html += '<tr class="cartltabtr" id="tr-2103">'+
	                        '<td align="left">'+
	                        	'<a title="" target="_blank" class="cartltab_pro">'+
	                        		'<img src="'+item.img+'" height="50" width="50">'+
	                        	'</a> '+
	                        	'<a target="_top" class="cartltab_proname">'+
	                        	item.title+
	                        	'</a>'+
	                        '</td>'+
	                        '<td>'+item.price+'</td>'+
	                        '<td>0</td>'+
	                        '<td>'+
	                        	'<span class="cartltab_num1 decreaseCartProductNum" data-product-id="'+item.id+'">-</span>' +
	                        	'<input class="cartltab_num updateCartProductNum" id="quantity-60381"  name="quantity" value="'+item.num+'" data-value="'+item.id+'" type="text" data-product-id="60381">' +
	                        	'<span class="cartltab_num2 increaseCartProductNum" data-product-id="'+item.id+'" >+</span>'+
	                        '</td>'+
	                        '<td>'+item.price+'</td>'+
	                        '<td>'+item.num*item.price+'</td>'+
	                        '<td class="cart_caozuo">'+
	                        	'<a class="cct_list_num_2103 deleteGoodsFromCart" data-product-id="60381" href="javascript:;">删除</a>'+
	                        	'<br>'+
	                        '</td>'+
	                    '</tr>'
				})
				
			})	
			$("#tbody").html(html);
			this.cartltabtr=$(".cartltabtr")
			this.add=$(".increaseCartProductNum");			
			this.reduce=$(".decreaseCartProductNum");
			for(var i=0;i<this.cartltabtr.length;i++){
				this.add[i].index=i;
				this.reduce[i].index=i;
				$(this.add[i]).on("click",$.proxy(this.addnum,this));
				$(this.reduce[i]).on("click",$.proxy(this.reducenum,this));
			}			
			}
		},
		addnum:function(e){
			var e=e||window.event;
			this.index=e.target.index;
			this.id=$(e.target).attr("data-product-id");
			//更改cookie
			var scookie=$.cookie("shopping_cart");
			var acookie=JSON.parse(scookie);
			var _this=this;
			acookie.forEach(function(item){
				if(item.id==_this.id){
					item.num++;
					_this.temp_num = item.num;
				}
				
			})
			scookie=JSON.stringify(acookie);
			$.cookie("shopping_cart",scookie);
			// console.log(this.id)
			this.num=$(".updateCartProductNum")[this.index];//获取索引			
			$(this.num).val(this.temp_num);
			$(this.num).attr({"data-value":this.newNum});
			//单价
			this.Unit_price=$($(".cartltabtr")[this.index]).find("td").eq(1).html();
			//单个商品的价格
			let singel_num_price = _this.temp_num * this.Unit_price;
			$($(".cartltabtr")[this.index]).find("td").eq(5).html(singel_num_price)
			this.Subtotal=$($(".cartltabtr")[this.index]).find("td").eq(5).html();
			//console.log(this.newNum*this.Unit_price)
			//总价
			$(this.Subtotal).html(this.newNum*this.Unit_price);

			this.getCartSum();



			
		},
		getCartSum:function(){
			if(!$.cookie("shopping_cart")){
				return 0;
			}
			var acookie=JSON.parse($.cookie("shopping_cart"));
			var sum=0;
			var totalprice=0;//总价
			//var totalprice=0;
			for(var i in acookie){
				sum+=parseInt(acookie[i].num);
				totalprice+=acookie[i].num*acookie[i].price;
				Subtotal=acookie[i].num*acookie[i].price;
				num=acookie[i].num;
			}
			$(this.num).attr("value",num);
			$(this.Subtotal).html("￥"+parseInt(Subtotal))
			$(this.product_num).html("商品数量总计："+sum+"件");
			$(this.product_Total).html("￥"+totalprice);
			console.log($.cookie("shopping_cart"))

		},
		reducenum:function(e){
			this.id=$(e.target).attr("data-product-id");
			this.newNum=parseInt(this.num_Val)-1;
			this.num_Val=this.newNum;
			//console.log(this.newNum);
			$(this.num).attr({"value":this.newNum,"data-value":this.newNum});
			this.Unit_price=parseInt(this.price.html());
			//console.log(this.Unit_price)
			/*$(this.Subtotal).html("￥"+parseInt(this.newNum*this.Unit_price))

			$(this.product_num).html("商品数量总计："+this.newNum+"件");
			$(this.product_Total).html("￥"+this.newNum*this.Unit_price);*/

			var scookie=$.cookie("shopping_cart");
			var acookie=JSON.parse(scookie);
			var _this=this;
			acookie.forEach(function(item){
				if(item.id==_this.id){
					item.num--;
				}
			})
			scookie=JSON.stringify(acookie);
			$.cookie("shopping_cart",scookie);
			//console.log($.cookie("shopping_cart"))
			this.getCartSum();
		},
		deleteProduct:function(){
			var myMessage=confirm("确定删除吗？");
			if(myMessage==true){
				
				//$(".cartltabtr").children().remove();
				
			}else{
				return;
			}
		}


	}
	return new shopcart();
})