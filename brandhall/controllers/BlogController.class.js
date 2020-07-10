(function(IT,factory){
    'use strict';
    var System = IT['LAM_20150910123700_'];

    if(!System){
        return;
    }else{
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(System) :
            typeof define === 'function' && define.amd ? define(factory(System)) :
                (System['BlogController'] = factory(System));
    }

})(this,function(System){
    'use strict';
    var __this__=null;
    System.is(System,'Controller','BlogController',System.classPath+'/base');
    var ROOT  = System.BACKEND;
    var E = {file_404:System.ERROR_404};
    var BlogController = System.Controller.extend({
        constructor: function (init){
            this.base(init || {});
            __this__=this;
            this.viewpath = System.VIEWS+'/blog';
            this.layoutPath = this.layoutPath+'/default';
            this.content = {
                'user':{
                    'name':'name',
                    'age':28
                }

            };


        },
        '_className':'BlogController',
        'indexAction':function () {
            return this.render('index',null,E);
        },





        /**
         *
         * @author lhh
         * 产品介绍：析构方法
         * 创建日期：2015-4-2
         * 修改日期：2015-4-2
         * 名称：destructor
         * 功能：在注销BlogController对象时调用此方法
         * 说明：
         * 注意：
         * @return  ()
         * Example：
         */
        'destructor':function(){}
    });
    return BlogController;
});


