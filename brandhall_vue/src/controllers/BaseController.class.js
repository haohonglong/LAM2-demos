LAM.run([LAM], function(LAM){
	'use strict';
	var System = this;
	System.is(System,'Controller','BaseController',System.classPath+'/base');
	var Controller = System.require("lam.base.Controller");
	var Base64 = System.require("lam.base.Base64");

	var __this__=null;
	var BaseController = Controller.extend({
		constructor: function (init) {
			this.base(init || {});
			this.csrfToken = Base64.encode(System.hash());
			__this__ = this;
		},
		'_className':'BaseController',
		'__constructor':function(){},
		'getToken': function(){ return this.csrfToken; },

		/**
		 *
		 * @author lhh
		 * 产品介绍：析构方法
		 * 创建日期：2015-4-2
		 * 修改日期：2015-4-2
		 * 名称：destructor
		 * 功能：在注销BaseController对象时调用此方法
		 * 说明：
		 * 注意：
		 * @return  ()						:
		 * Example：
		 */
		'destructor':function(){}
	});

	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = BaseController :
	typeof define === 'function' && define.amd ? define(BaseController) : LAM.BaseController = BaseController;
	System.export("src.controllers.BaseController", BaseController);

});