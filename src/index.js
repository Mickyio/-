/*主页业务逻辑页面*/	
//requirejs === require
require(["scripts/config.js"],function(){ //先去配置;
	require(["jquery","supperbanner","getData","getBrand","getRecomend","count_down","Register","Load","Login","move","Pop","shopcar"/*,"pop","shopping","loadLi"*/],function($,sup,getData,getBrand,getRecomend,count_down,Register,Load,Login,move,Pop,shopcar/*,pop,shop,loadli*/){//再去使用简写的路径;
		//console.log($);
		// $(".container").css({
		// 	background : '#ddd'
		// })
		

		/*轮播图*/
		
		$("#banner").supperBanner({
			src:[
				"http://image.xzhuang.com/upload/20170930/151244c87377dba579eac7a698aaeb932c44ad.jpg",
				"http://image.xzhuang.com/upload/20180116/1830242f346f1cef797f3762915164a6acf0c6.jpg",
				"http://image.xzhuang.com/upload/20170926/101041c87377dba579eac7a698aaeb932c44ad.jpg",
				"http://image.xzhuang.com/upload/20180116/1829372f346f1cef797f3762915164a6acf0c6.jpg"
			],
			autoplay:true,
			create_btn:true
		})
		getData.init();

		getBrand.init();

		 getRecomend;

		count_down;

		Register;

		Load;
		Login;
		move;
		/*$(".buy_btn").on("click",function(){
			Pop.init();
		});*/
		$(".buy_btn").on("click",function(){
			Pop.init($(".buy_btn"));
		});

		setTimeout(function() {
			$(".sale_buy").on("click",function(){
				Pop.init($(".sale_buy"));
			});
		}, 500);
		

		$("#goods_yh_btn").on("click",function(){
			Pop.init($("#goods_yh_btn"));
		});
		shopcar.init();
		shopcar.getCart();
		

		/*登陆框*/
		//console.log(pop.init())
		//$("#login").on("click",$.proxy(pop.init,pop))
		/*$("#login").on("click",function(){
			pop.init(`<div>
						<p>hello world</p>
					</div>`)
		})

		loadli.init($(".goodslist li"))

		//通信没有问题;
		shop.init($(".goodslist li button"))*/
	})	
})
