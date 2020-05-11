LAM.run([window],function(window){
	'use strict';
	var System=this;
	var I= {};
	I.home={
		'highcharts':function($dom){
			$dom.highcharts({
				credits: {
					enabled: false
				},
				chart: {
					zoomType: 'xy',
					marginBottom: 60,
					marginTop: 60
				},
				title: {
					text: '今日上网电量实时曲线',
					verticalAlign: 'bottom',
					floating:true,
					y:0,
					style:{
						fontSize: 18,
						fontWeight: 'bolder',
						color: '#495b79'
					}
				},
				subtitle: {
					text: ''
				},
				xAxis: [{
					categories: ['0:00', '2:00', '3:00', '4:00', '5:00', '6:00',
						'7:00', '8:00', '9:00', '10:00', '11:00', '12:00'],
					crosshair: true
				}],
				yAxis: [{ // Primary yAxis
					labels: {
						format: '{value}',
						style: {
							color: '#464646'
						}
					}

				}, { // Secondary yAxis
					title: {
						text: '发电量',
						align:'low',
						style: {
							color: '#464646'
						}
					},
					labels: {
						format: '{value}',
						style: {
							color: '#464646'
						}
					},
					opposite: true
				}],
				tooltip: {
					shared: true
				},
				legend: {
					layout: 'horizontal',
					align: 'center',
					x: 120,
					verticalAlign: 'top',
					y: 0,
					floating: true,
					backgroundColor: (Highcharts && Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'

				},
				series: [{
					name: '发电量',
					type: 'column',
					yAxis: 1,
					data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
					tooltip: {
						valueSuffix: ''
					},
					color: '#78b03b'

				}, {
					name: '光照辐射量',
					type: 'spline',
					data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
					tooltip: {
						valueSuffix: ''
					},
					color: '#f79218'
				}]
			});
		}

		

		
	};


	I.scroll=function(){
		$(".scroll").css({'overflow':'hidden'}).niceScroll({cursorcolor:"#54728c"});
	};
	
	I.side=function(){
		$('ul.nav-list').accordion();

		$('li.nav-toggle > button').on('click',function(e){
			e.preventDefault();
			$('.hidden-minibar').toggleClass("hide");
			$('.site-holder').toggleClass("mini-sidebar");
			if($('.toggle-left').hasClass('fa-angle-double-left')){ $('.toggle-left').removeClass('fa-angle-double-left').addClass('fa-angle-double-right'); }
			else { $('.toggle-left').removeClass('fa-angle-double-right').addClass('fa-angle-double-left'); }


			if($('.site-holder').hasClass('mini-sidebar'))
			{
				$('.sidebar-holder').tooltip({
					selector: "a",
					container: "body",
					placement: "right"
				});
				$('li.submenu ul').tooltip('destroy');
			}
			else
			{
				$('.sidebar-holder').tooltip('destroy');
			}


		});


		$('.nav-list a').on('click',function(){
			$('.nav-list li').removeClass('active');
			if('iframe' === $(this).attr('target')){
				$(this).parent().addClass('active');

			}
		});
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
						,async){
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









