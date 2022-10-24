LAM.run([LAM], function(LAM){
    'use strict';
    var System = this;
    var __this__=null;
    System.is(System,'BaseController','RoomController',System.CONTROLLERS);
    var BaseController = System.require("src.controllers.BaseController");

    var ROOT  = System.BACKEND;
    var views = System.VIEWS+'/room';
    var E = {file_404:System.ERROR_404};
    var RoomController = BaseController.extend({
        constructor: function (init){
            this.base(init || {});
            __this__=this;
            this.viewpath = System.VIEWS+'/room';
            this.content = {
                'user':{
                    'name':'name',
                    'age':28
                }

            };


        },
        '_className':'RoomController',
        'listAction':function(){
            this.viewpath+='/list';
            this.data = {
                'VIEWS':System.VIEWS,
                'IMAGE':System.IMAGE,
                'ROOT':ROOT,
                'D':{
                    'title':'你好，世界！',
                    'content':'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                }

            };
            return this.render('index', this.data, E);
        },
        'detailAction':function(){
            return this.render('detail/index',{
                'VIEWS':System.VIEWS,
                'IMAGE':System.IMAGE,
                'ROOT':ROOT,
                'D':{
                    'title':'你好，世界！',
                    'content':'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                }

            },E);
        },
        'releaseAction':function(){
            return this.render('release',{
                'VIEWS':System.VIEWS,
                'IMAGE':System.IMAGE,
                'ROOT':ROOT,
                'D':{
                    'title':'你好，世界！',
                    'content':'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                }

            },E);
        },



        /**
         *
         * @author lhh
         * 产品介绍：析构方法
         * 创建日期：2015-4-2
         * 修改日期：2015-4-2
         * 名称：destructor
         * 功能：在注销RoomController对象时调用此方法
         * 说明：
         * 注意：
         * @return  ()
         * Example：
         */
        'destructor':function(){}
    });
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = RoomController :
	typeof define === 'function' && define.amd ? define(RoomController) : LAM.RoomController = RoomController;
    System.export("src.controllers.RoomController", RoomController);
});



