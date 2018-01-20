define(['jquery'],function(){

		
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
					//console.log($(_this.$content_list_li[index]).find("img"))
					$(_this.$content_list_li[index]).find("img").attr("src",item.img);

					$(_this.$sale_title[index]).find("a").html(item.title);
					$(_this.$sale_price[index]).html(item.price);
					$(_this.$origin_price[index]).html(item.sale_price);
					//console.log(res.img)

				})
			}

		}
	




	
	return new getData();
})