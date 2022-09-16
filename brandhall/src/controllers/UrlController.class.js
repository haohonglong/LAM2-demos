(function(global,factory){
    'use strict';

    global = typeof globalThis !== 'undefined' ? globalThis : global || self;
    var System = global['LAM_20150910123700_'];

    if(!System){
        return;
    }else{
        var UrlController = factory(System);
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = UrlController :
        typeof define === 'function' && define.amd ? define(factory) : System.UrlController = UrlController;
        System.export("UrlController", UrlController);
    }

})(this,function(System){
    'use strict';
    var __this__=null;
    System.is(System,'Controller','UrlController',System.classPath+'/base');
    var Controller = System.require("System.base.Controller");

    System.import(['/CookieModel.class'],System.MODELS);
    var ROOT  = System.BACKEND;
    var views = System.VIEWS+'/room';
    var E = {file_404:System.ERROR_404};
    var UrlController = Controller.extend({
        constructor: function (init){
            this.base(init || {});
            __this__=this;
            this.viewpath = System.VIEWS+'/url';
            this.cookie =System.CookieModel.get();
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
        'createAction':function(){
            return this.render('create',{
                'VIEWS':System.VIEWS,
                'IMAGE':System.IMAGE,
                'ROOT':ROOT,
                'cookie':this.cookie

            },E);
        },
        'editAction':function(){
            return this.render('edit',{
                'VIEWS':System.VIEWS,
                'IMAGE':System.IMAGE,
                'ROOT':ROOT,
                'cookie':this.cookie

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
    return UrlController;
});


