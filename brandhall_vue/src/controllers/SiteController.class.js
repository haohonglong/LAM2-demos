LAM.run([LAM], function(LAM){
    'use strict';
    var System = this;
    var __this__=null;
    System.is(System,'BaseController','SiteController',System.CONTROLLERS);
    var BaseController = System.require("src.controllers.BaseController");
    

    var ROOT  = System.BACKEND;
    var E = {file_404:System.ERROR_404};
    var SiteController = BaseController.extend({
        constructor: function (init){
            this.base(init || {});
            __this__=this;
            this.viewpath = System.VIEWS+'/site';


        },
        '_className':'SiteController',
        'indexAction':function(){
            this.title = "首页";
            this.viewpath = System.VIEWS;
            
            return this.renderPartial('main',{
                'COMMON':System.COMMON,
                'ROOT':ROOT,
                'user':{
                    'name':'小明',
                    'age':28
                },
                'D':{
                    'title':'',
                    'content':''
                }

            });


        },
        'loginAction':function(){
            this.title = "登录";
            
            return this.renderPartial('login',{
                'COMMON':System.COMMON,
                'ROOT':ROOT,
                'D':{
                    'title':'',
                    'content':''
                }

            });


        },
        'logoutAction':function(){
            this.title = "";
            System.COOKIE_GUEST.find('auth_key', System.token,function (index) {
                if(index > -1){
                    this.remove(index);
                    System.redirect(System.INDEX+"site/login");
                }
            });

        },


        'regAction':function(){
            this.title = "注册";
            var _this = this;
            System.COOKIE_GUEST.find('auth_key', System.token, function (index,id) {
                if(-1 !== index){
                    var data = this.get(index);
                    if(System.token === data.auth_key){
                        System.redirect(System.INDEX+System.routeRules.index);
                    }
                }

            });
            return this.renderPartial('reg',{
                'COMMON':System.COMMON,
                'ROOT':ROOT,
                'D':{
                    'title':'你好，世界！',
                    'content':'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                }

            });
        },
        'testAction':function(){
            this.title = "test";
            this.content = {
                'user':{
                    'name':'name',
                    'age':28
                }

            };
            return this.render('test',{
                'COMMON':System.COMMON,
                'ROOT':ROOT
            },null,E);
        },





        /**
         *
         * @author lhh
         * 产品介绍：析构方法
         * 创建日期：2015-4-2
         * 修改日期：2015-4-2
         * 名称：destructor
         * 功能：在注销SiteController对象时调用此方法
         * 说明：
         * 注意：
         * @return  ()
         * Example：
         */
        'destructor':function(){}
    });
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = SiteController :
	typeof define === 'function' && define.amd ? define(SiteController) : LAM.SiteController = SiteController;
    System.export("src.controllers.SiteController", SiteController);
});






