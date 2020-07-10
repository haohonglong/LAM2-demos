(function(IT,factory){
    'use strict';
    var System = IT['LAM_20150910123700_'];

    if(!System){
        return;
    }else{
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(System) :
            typeof define === 'function' && define.amd ? define(factory(System)) :
                (System['SiteController'] = factory(System));
    }

})(this,function(System){
    'use strict';
    var __this__=null;
    System.is(System,'Controller','SiteController',System.classPath+'/base');
    var ROOT  = System.BACKEND;
    var E = {file_404:System.ERROR_404};
    var SiteController = System.Controller.extend({
        constructor: function (init){
            this.base(init || {});
            __this__=this;
            this.viewpath = System.VIEWS+'/site';
            this.layoutPath = this.layoutPath+'/default';
            this.defaultRoute = System.routeRules.list;


        },
        '_className':'SiteController',
        'loginAction':function(){
            this.title = "登录";
            var pwd = System.get('pwd');

            var _this = this;
            var data = null;
            System.COOKIE.find('id',"1",function (index,id) {
                if(-1 === index){
                    if(System.isset(pwd) && "123456" === pwd) {
                        data = {
                            "userid":id,
                            "name":"long",
                            "pwd":"123456"
                        };
                        this.add(data);
                        System.redirect(System.INDEX+_this.defaultRoute);
                    }
                }else {
                    data = this.get(index);
                    if("123456" === data.pwd){
                        System.redirect(System.INDEX+_this.defaultRoute);
                    }
                }
            });

            return this.renderPartial('login',{
                'COMMON':System.COMMON,
                'ROOT':ROOT,
                'D':{
                    'title':'你好，世界！',
                    'content':'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                }

            });


        },
        'logoutAction':function(){
            this.title = "";
            System.COOKIE.find('id',"1",function (index) {
                if(index > -1){
                    this.remove(index);
                    System.redirect(System.INDEX+"site/login");
                }
            });

        },


        'regAction':function(){
            this.title = "注册";
            var _this = this;
            System.COOKIE.find('id',"1",function (index,id) {
                if(-1 !== index){
                    var data = this.get(index);
                    if("123456" === data.pwd){
                        System.redirect(System.INDEX+_this.defaultRoute);
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
    return SiteController;
});


