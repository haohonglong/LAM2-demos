LAM.run([LAM], function(LAM){
    'use strict';
    var System = this;
    var __this__=null;
    System.is(System,'BaseController','UrlController',System.CONTROLLERS);
    var BaseController = System.require("src.controllers.BaseController");

    System.import(['/CookieModel.class'],System.MODELS);
    var ROOT  = System.BACKEND;
    var views = System.VIEWS+'/room';
    var E = {file_404:System.ERROR_404};
    var UrlController = BaseController.extend({
        constructor: function (init){
            this.base(init || {});
            __this__=this;
            this.viewpath = System.VIEWS+'/url';
            this.cookie =LAM.CookieModel.get();
            this.content = {
                'user':{
                    'name':'李强',
                    'age':28
                }

            };




        },
        '_className':'UrlController',
        'indexAction':function(){
            return this.render('index',{
                'VIEWS':System.VIEWS,
                'IMAGE':System.IMAGE,
                'ROOT':ROOT

            },E);
        },


        /**
         *
         * @author lhh
         * 产品介绍：析构方法
         * 创建日期：2015-4-2
         * 修改日期：2015-4-2
         * 名称：destructor
         * 功能：在注销UrlController对象时调用此方法
         * 说明：
         * 注意：
         * @return  ()
         * Example：
         */
        'destructor':function(){}
    });
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = UrlController :
	typeof define === 'function' && define.amd ? define(UrlController) : LAM.UrlController = UrlController;
    System.export("src.controllers.UrlController", UrlController);
});




