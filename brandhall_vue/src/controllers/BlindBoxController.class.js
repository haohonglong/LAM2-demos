LAM.run([LAM], function(LAM){
    'use strict';
    var System = this;
    var __this__=null;
    System.is(System,'BaseController','BlindBoxController',System.CONTROLLERS);
    var BaseController = System.require("src.controllers.BaseController");
    

    var ROOT  = System.BACKEND;
    var E = {file_404:System.ERROR_404};
    var BlindBoxController = BaseController.extend({
        constructor: function (init){
            this.base(init || {});
            __this__=this;
            this.viewpath = System.VIEWS+'/blindBox';


        },
        '_className':'BlindBoxController',
        'indexAction':function(){
            this.title = "九宫格盲盒";
            
            return this.renderPartial('blindBox');


        },
        





        /**
         *
         * @author lhh
         * 产品介绍：析构方法
         * 创建日期：2015-4-2
         * 修改日期：2015-4-2
         * 名称：destructor
         * 功能：在注销BlindBoxController对象时调用此方法
         * 说明：
         * 注意：
         * @return  ()
         * Example：
         */
        'destructor':function(){}
    });
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = BlindBoxController :
	typeof define === 'function' && define.amd ? define(BlindBoxController) : LAM.BlindBoxController = BlindBoxController;
    System.export("web.controllerInstance", new BlindBoxController());
});






