define(['jquery'],function(){
	function Nav(){

	}
	Nav.prototype={
		constructor:Nav,
		init:function(){
			$li=$(".product_type_ul").children();
			console.log($li);
			$product_detail=$(".product_detail")
			$li.on("mouseenter",$.proxy(this.show,this));
		},
		show:function(e){
			var index=e.target.index;

			$($li).each(function(){

			})
		}
	}
	return new Nav();
})