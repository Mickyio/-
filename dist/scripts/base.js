define(['jquery'],function(){
	function getData(){
		this.init();
	}
	getData.prototype={
		constructor:getData,
		init:function(){
			this.ul=document.getElementById("content_list");
			console.log(this.ul)
		}
	}
	new getData();
})