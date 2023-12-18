LAM.run([LAM], function(LAM){
    'use strict';
    var System = this;
    var __this__=null;
    System.is(System,'BaseController','TestController',System.CONTROLLERS);
    var BaseController = System.require("src.controllers.BaseController");
    

    var ROOT  = System.BACKEND;
    var E = {file_404:System.ERROR_404};
    var TestController = BaseController.extend({
        constructor: function (init){
            this.base(init || {});
            __this__=this;
            this.viewpath = System.VIEWS+'/test';


        },
        '_className':'TestController',
        'indexAction':function(){
            this.title = "首页";
            
            return this.renderPartial('index');


        },



        /**
         *
         * @author lhh
         * 产品介绍：析构方法
         * 创建日期：2015-4-2
         * 修改日期：2015-4-2
         * 名称：destructor
         * 功能：在注销TestController对象时调用此方法
         * 说明：
         * 注意：
         * @return  ()
         * Example：
         */
        'destructor':function(){}
    });
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = TestController :
	typeof define === 'function' && define.amd ? define(TestController) : LAM.TestController = TestController;
    System.export("web.controllerInstance", new TestController());
});






