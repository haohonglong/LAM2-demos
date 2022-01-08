(function(IT,factory){
    'use strict';
    var System = IT['LAM_20150910123700_'];

    if(!System){
        return;
    }else{
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(System) :
            typeof define === 'function' && define.amd ? define(factory(System)) :
                (System['SortsController'] = factory(System));
    }

})(this,function(System){
    'use strict';
    var __this__=null;
    System.is(System,'Controller','SortsController',System.classPath+'/base');
    System.import(['/CookieModel.class'],System.MODELS);
    var ROOT  = System.BACKEND;
    var views = System.VIEWS+'/room';
    var E = {file_404:System.ERROR_404};
    var SortsController = System.Controller.extend({
        constructor: function (init){
            this.base(init || {});
            __this__=this;
            this.viewpath = System.VIEWS+'/sorts';
            this.layoutPath = this.layoutPath+'/default';
            this.cookie =System.CookieModel.get();
            this.content = {
                'user':{
                    'name':'name',
                    'age':28
                }

            };


        },
        '_className':'SortsController',
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
                'ROOT':ROOT

            },E);
        },

        'deleteAction':function(){
            var id = System.get('id');
            $.get(System.SERVER+'/sorts/delete',{
                'id':id
            },function(data){
                if(data.status){
                    alert(data.message);
                    System.redirect(System.INDEX+'sorts/index');
                }else{
                    alert(data.message);
                    System.each(data.errors,function (key,value) {
                        alert(value)
                    });
                    System.redirect(System.INDEX+'sorts/index');
                }
            },'json');
        },






        /**
         *
         * @author lhh
         * 产品介绍：析构方法
         * 创建日期：2015-4-2
         * 修改日期：2015-4-2
         * 名称：destructor
         * 功能：在注销SortsController对象时调用此方法
         * 说明：
         * 注意：
         * @return  ()
         * Example：
         */
        'destructor':function(){}
    });
    return SortsController;
});


