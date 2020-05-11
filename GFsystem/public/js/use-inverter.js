LAMJS.main(function(){
	'use strict';
	var System=this;
	var I=System.modules.exports.I || {};
	var init_tpl=false;
	var defaults={};

	/**
	 * function:获取逆变器数据
	 * @type {{getInverterData: Function}}
	 */
	I.ElectricalBox={
		'getInverterData':function(init){
			defaults={
				'$view':$('#electricalBox'),
				'isAjax':true,
				'type': 'post',
				'url':  'js/dataJson-data.json',
				'data': {},
				'init_fun':function(v){
					var tpl=[];

					tpl.push('<li class="_zh_station col-sm-6 col-md-3" id="s_'+ v._id +'">');
					tpl.push('<div style="height:41px;">');
					tpl.push('<i class="_zh_station-stationicon"></i>');
					tpl.push('<div class="_zh_station-title">');
					tpl.push('<p class="MB5">电站1</p>');
					tpl.push('<span class="_zh_circleImg _zh_circleImg-green"></span>正常');
					tpl.push('</div>');
					tpl.push('</div>');
					tpl.push('<div class="_zh_station-c">');
					tpl.push('<div class="text1">');
					tpl.push('<p>输出功率</p>');
					tpl.push('<p>输入功率</p>');
					tpl.push('<p>单瓦发电量</p>');
					tpl.push('<p>日发电量</p>');
					tpl.push('</div>');
					tpl.push('<div class="data-value">');
					tpl.push('<p>42WhkW</p>');
					tpl.push('<p>88.88kW</p>');
					tpl.push('<p>42Wh</p>');
					tpl.push('<p>42WhkWh</p>');
					tpl.push('</div>');
					tpl.push('</div>');
					tpl.push('<div class="_zh_station-lineicon"></div>');
					tpl.push('</li>');

					return tpl.join('');
				},
				'getCurTpl':function(D){
					var tpl, i,len= D.data.length, v;

					for(i=0;i<len;i++){
						tpl=[];
						v= D.data[i];
						if(!System.empty( v['_id'])){
							tpl.push('<p>222</p>');
							tpl.push('<p>88.88kW</p>');
							tpl.push('<p>42Wh</p>');
							tpl.push('<p>42WhkWh</p>');

						}

						$('#s_'+v['_id']+' .data-value').html(tpl.join(''));

					}

				},
				'initTpl':function(D){
					var tpl=[], i,len= D.length, v;

					for(i=0;i<len;i++){
						v=D[i];
						if(!System.empty( v['_id'])){
							if(System.isFunction(init.init_fun)){
								tpl.push(init.init_fun(v));

							}

						}
					}

					return tpl.join('');
				}
			};

			init = System.isObject(init) ? System.merge({},[init,defaults]) : defaults;

			var getTpl  = init.getCurTpl;
            var initTpl = init.initTpl;


			if(init.isAjax){
				System.Html.ajax(null,{
					type: init.type || 'post',
					url:  init.url  || 'js/dataJson-data.json',
					data: init.data || {},
					dataType: 'json',
					callBack:function(D){
						if(init_tpl){//模版已初始化，刷新局部的某一部分
							getTpl(D);
						}else{//初始化模版，或重新刷新模版
							init_tpl =true;
							init.$view.html(initTpl(D.data));
						}
					}
				});
				//$.ajax({
				//	type: init.type || 'post',
				//	url:  init.url  || 'js/dataJson-data.json',
				//	data: init.data || {},
				//	dataType: 'json',
				//	error:function(){
				//		throw new Error("Warning :没有取到数据！！！");
				//	},
				//	success: function(D){
				//		if(init_tpl){//模版已初始化，刷新局部的某一部分
				//			getTpl(D);
				//		}else{//初始化模版，或重新刷新模版
				//			init_tpl =true;
				//			init.$view.html(initTpl(D.data));
				//		}
                //
                //
				//	}
				//});
			}else{
				init_tpl =true;
				init.$view.html(initTpl(init.data.data));
			}



		}


	};

	I.ElectricalBox.init_tpl=function(b){
		init_tpl=b;
	};


	System.modules.exports.I=I;


});









