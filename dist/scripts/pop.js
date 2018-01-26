define(['jquery'],function(){
	function Pop(){

	}
	Pop.prototype={
		constructor:Pop,
		init:function(ele){
			this.ele=ele;
			//this.btn=$(".buy_btn");
			this.mask=$(".util-overlayer");
			this.pop=$(".util-dialog");
			this.action=$(".btn-action")
			this.cancel=$(".btn-cancel");
			this.close=$(".close");
			this.name=$(".f12").eq(0);
			this.price=$(".f12").eq(1).find("b");
			this.status=$(this.ele).css("display");
		
			
			
			if($(this.ele).length>1){
				for(var i=0;i<this.ele.length;i++){
				this.ele[i].index=i;
				$(this.ele[i]).on("click",$.proxy(this.show,this))
				$(this.ele[i]).on("click",$.proxy(this.getid,this))
				}
			}else{
				$(this.ele).on("click",$.proxy(this.show,this))
				$(this.ele).on("click",$.proxy(this.getid,this))
			}
			
			this.action.on("click",$.proxy(this.gotoShopcar,this));
			this.close.on("click",$.proxy(this.hide,this));
			this.cancel.on("click",$.proxy(this.hide,this));

			//console.log(this.btn);
			//this.show();
			//this.getCookie();
		},
		getid:function(e){
			var e=e||window.event;
			this.index=e.target.index;
			//console.log(this.index);
			this.id=$(this.ele[this.index]).attr("data-id");

			console.log(this.id);
			$.cookie("id",this.id);
			this.getCookie();

		},
		show:function(){
			this.mask.css({
				display:"block"
			})
			this.pop.css({
				display:"block"
			})
		},
		hide:function(){
			this.mask.css({
				display:"none"
			})
			this.pop.css({
				display:"none"
			})
		},
		getCookie:function(){
			this.cookie=$.cookie("id");
			//console.log(this.cookie)
			if(this.cookie){
				var setup={
				url:"scripts/recomend.json",
				type:"GET",
				context:this
				}
			  $.ajax(setup).then($.proxy(this.loaddata,this));
			}
		},
		loaddata:function(res){
			var _this=this;
			console.log(res);
			res.index_data.forEach(function(item){
				if(item.id==_this.cookie){
					$(_this.name).html(item.title);
					$(_this.price).html(item.sale_price);
					$(_this.ele).attr({"src":item.img,"id":item.id,"title":item.title,"price":item.sale_price})
					$(_this.action).attr({"img":item.img,"id":item.id,"title":item.title,"price":item.sale_price,"num":1})
				}
			})
			res.recomend_data.forEach(function(item){
				if(item.id==_this.cookie){
					$(_this.name).html(item.title);
					$(_this.price).html(item.sale_price);
					$(_this.ele).attr({"src":item.img,"id":item.id,"title":item.title,"price":item.sale_price})
					$(_this.action).attr({"img":item.img,"id":item.id,"title":item.title,"price":item.sale_price,"num":1})
				}
			})
		},
		gotoShopcar:function(){
			self.location.href="shopcar.html";
		}
	}
	return new Pop();
})