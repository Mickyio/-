define(['jquery',"cookie"],function(){
	function Load(){
		this.init();
	}
	Load.prototype={
		constructor:Load,
		init:function(){
			this.bfd_recom=$("#bfd_recom");
			this.BFD_rank=$("#BFD_rank");
			/*this.adv=$(".adv_title").find("div");
			console.log(this.adv);*/
			this.adv=$(".adv_title>div");
			this.showadv=$(".show_adv ");
			//console.log(this.showadv)
			for(var i=0;i<this.adv.length;i++){
				this.adv[i].index=i;
				$(this.adv[i]).on("mouseenter",$.proxy(this.changeAdv,this));
			}
			//console.log(this.adv);
			//for(var i=0;i<)
			//console.log(this.bfd_recom);
			var setup={
				url:"scripts/detail_list1.json",
				type:"GET",
				context:this
				}
			  $.ajax(setup).then($.proxy(this.rendring,this));

			  //商品信息
			  this.pro_li=$("#content_list").find("li");
			  
			  this.hot_li=$(".hot_product_list").find("li");
			 // console.log(this.pro_li,this.hot_li);
			 this.small=$(".product_img_s");
			 this.big=$(".zoomLarge");
			  this.small_focus=$(".zoomMask");
			 this.pro_small_img=$(".product_img_s").find("#show_img");
			 //console.log(this.pro_small_img);
			 this.pro_big_img=$(".zoomLarge").find("img");
			 this.small.on("mouseenter",$.proxy(this.showhide,this,"block"));
			 this.small.on("mouseleave",$.proxy(this.showhide,this,"none"));
			 this.small.on("mousemove",$.proxy(this.move_focus,this));
			 this.title=$(".p_title").find("h1");
			// console.log($.cookie("id"));
			 //this.pro_small_img.attr("src");
			this.getCookie();
		},
		getCookie:function(){
			this.cookie=$.cookie("id");
			if(this.cookie){
				var setup={
				url:"scripts/recomend.json",
				type:"GET",
				context:this
				}
			  $.ajax(setup).then($.proxy(this.loadPic,this));
			}
			
		},
		showhide($status){
		//	console.log(1);
			this.big.css({
				display:$status
			})
			this.small_focus.css({
				display:$status
			})

			this.propX = $(this.big).width() / $(this.small_focus).width();
			this.propY = $(this.big).height() / $(this.small_focus).height();
			//console.log(this.propX,this.propY)


			//缩放大图
			this.pro_big_img.css({
				width:this.pro_small_img.width()*this.propX,
				height:this.pro_small_img.height()*this.propY
			})

			if($status=="block"){
				this.pro_small_img.css({
					opacity:0.3
				})
			}
		},
		move_focus:function(event){
			var e=event||window.event;
			this.left = e.clientX- ($(this.small_focus).width() / 2);
			this.sTop =e.clientY-($(this.small_focus).height() / 2) ;

			//console.log(this.left,this.sTop)
			this.small_focus.css({
				left:this.left+"px",
				top:this.sTop+"px"
			})

			/*边界检测 -start*/
			
			this.bigLeft=this.left*this.propX;
			this.bigTop=this.sTop*this.propY;
			this.pro_big_img.css({
				left:-this.bigLeft+"px",
				top:-this.bigTop+"px"
			})

			
			
		},
		loadPic:function(res){
			//console.log(res);
			var _this=this;
			res.recomend_data.forEach(function(item){
				if(item.id==_this.cookie){
					_this.pro_small_img.attr("src",item.img);
					_this.pro_big_img.attr("src",item.img);
					_this.title.html(item.title);
					//_this.view
				}
			})
			res.index_data.forEach(function(item){
				if(item.id==_this.cookie){
					_this.pro_small_img.attr("src",item.img);
					_this.pro_big_img.attr("src",item.img);
					_this.title.html(item.title);
					//_this.view
				}
			})
			
		},
		
		
		changeAdv:function(e){
			var e=event||window.event;
			this.index=e.target.index;
			for(var i=0;i<this.adv.length;i++){
				$(this.adv[i]).css({
					backgroundPosition:'50% 50%'
				})
				$(this.showadv[i]).css({
					display:"none"
				})
			}
			$(this.adv[this.index]).css({
				backgroundPosition : '0 0'
			})
			$(this.showadv[this.index]).css({
				display:"block"
			});



		},
		rendring:function(res){
			//console.log(res);
			//this.res=JSON.parse(res);
			//console.log(res.list1);

			var main1="";
			var main2="";
			res.list1.forEach(function(item){
					main1 += '<dl>'+
		                '<dt>'+
		                	'<a href="###" target="_blank">'+
		                		'<img src="'+item.img+'" height="62px" width="62px">'+
		           			'</a>'+
		                '</dt>'+
		                '<dd class="p_name">'+
		                	'<a href="" target="_blank">'+item.title+'</a>'+
		                '</dd>'+
		                '<dd class="p_price">'+item.sale_price+'&nbsp;&nbsp;'+
		                	'<span>¥'+item.original_price+'</span>'+
		                '</dd>'+
		            '</dl>'
			})
			res.list2.forEach(function(item){
					main2 += '<dl>'+
		                '<dt>'+
		                	'<a href="###" target="_blank">'+
		                		'<img src="'+item.img+'" height="62px" width="62px">'+
		           			'</a>'+
		                '</dt>'+
		                '<dd class="p_name">'+
		                	'<a href="" target="_blank">'+item.title+'</a>'+
		                '</dd>'+
		                '<dd class="p_price">'+item.sale_price+'&nbsp;&nbsp;'+
		                	'<span>¥'+item.original_price+'</span>'+
		                '</dd>'+
		            '</dl>'
			})

			this.bfd_recom.html(main1);
			this.BFD_rank.html(main2);

		}
	}
	return new Load();
})