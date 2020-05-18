LAM.run([window],function(window){
	'use strict';
	var System=this;
	var I= {};
	I.home={};


	I.scroll=function(){
		$(".scroll").css({'overflow':'hidden'}).niceScroll({cursorcolor:"#54728c"});
	};
	

	

	I.header=function(){
		$('.btn-nav-toggle-responsive').on('click',function(){
			$('.left-sidebar').toggleClass('show-fullsidebar');
		});
	};
	/**
	 * 请求相关数据在局部中更新
	 * @param $dom
	 * @param D
	 * @param D.url
	 * @param D.type
	 * @param D.dataType
	 * @param D.async
	 */
	I.getFile=function($dom ,D
						,url
						,type
						,dataType
						,async
						,cache){
		if(!D || !System.isObject()){
			throw new Error("Warning :缺少重要参数");
		}
		url  		= D&&D.url ;
		type  		= D&&D.type  	 || "GET";
		dataType  	= D&&D.dataType  || "html";
		async 		= D&&D.async ;
		cache 		= D&&D.cache ;
		$.ajax({
			type: type,
			url : url,
			async: async ? true : false,
			cache: cache ? true : false,
			dataType: dataType,
			error:function(){
				throw new Error("Warning :");
			},
			success: function(content){
				$dom.append(content);

			}
		});

	};

	/**
	 * 根据当前dom获取自定义属性pagelet的值找到相应的占位符，请求的页面替换占位符
	 * @param $dom
	 * @param D
	 */

	I.get=function(_this ,D){
		if(!D || !System.isObject()){
			D ={};
		}
		var defaults={
			'async':true,
			'callBack':function(content){
				$(this).html(content);
			}
		};
		var $this=$(_this);
		D = System.isObject(D) ? System.merge({},[D,defaults]) : defaults;
		var dom=$this.attr('pagelet') || '#content-let';
		var $dom=$(dom);
		//请求数据路径，格式
		$dom.attr('file',$this.attr('url'));
		$dom.attr('dataType') || $dom.attr('dataType','text');
		System.Html.include($dom,D);

	};

	I.alink=function($a){
		$a.on('click',function(){
			I.get(this);
			return false;
		});
	};




	I.content=function(){
		var b=$('body').height();
		var h=$('#header').height();
		var f=$('#footer').height();

		var h=b-h;
		$('.content_size').height(h);
		console.log(h)
	};





	System.export("I",I);


});









