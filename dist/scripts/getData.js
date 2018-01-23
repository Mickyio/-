define(['jquery'],function(){

		
		function getData(){

		}
		getData.prototype = {
			constructor:getData,
			init:function(){
				this.$content_list_li=$(".content_list").find("li")/*.find(".sale_img")*/;
				this.list_img=this.$content_list_li.find("img");
				//console.log(this.list_img)
				this.$sale_title=$(".sale_title");
				this.$sale_price=$(".sale_price");
				this.$origin_price=$(".origin_price");
				
				var setup={
				url:"scripts/recomend.json",
				type:"GET",
				context:this
				}
			  $.ajax(setup).then($.proxy(this.rendring,this));
			},
			rendring:function(res){
				
				//console.log(this);
				var _this=this;
				
				res.index_data.forEach(function(item,index){
					//console.log($(_this.$content_list_li[index]).find("img"))
					$(_this.$content_list_li[index]).find("img").attr({"src":item.img,"id":item.id});

					$(_this.$sale_title[index]).find("a").html(item.title);
					$(_this.$sale_price[index]).html(item.price);
					$(_this.$origin_price[index]).html(item.sale_price);
					//console.log(res.img)

				})
				for(var i=0;i<_this.list_img.length;i++){
					_this.list_img[i].index=i;
					$(_this.list_img[i]).on("click",$.proxy(_this.getInfo,this));
				}
				
			},
			getInfo:function(e){
				var e=e||window.event;
				self.location.href="http://localhost:82/detail.html";
				//console.log(1);
				this.index=e.target.index;
				//console.log(this.index);
				this.id=$(this.list_img[this.index]).attr("id");
				console.log(this.id);
				this.setCookie();

			},
			


		
		setCookie:function(){
			$.cookie("id",this.id);
		}
	


}

	
	return new getData();
})