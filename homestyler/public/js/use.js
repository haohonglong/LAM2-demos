/**
 * Tools 0.1 pre
 * 创建人：龙昊宏
 * 名称：
 * 功能：
 * 
 *  创建日期：2015.1.4      
 *  修改日期：2015.1.4
 * 
 *
 * Copyright Software 
 * 
 * 
 */
 

LAM.run([jQuery],function($){
    'use strict';
    var System = this;

    var _Hxsj = System.require("Hxsj");

    var Hxsj=new _Hxsj({
        'D'    : DATA || {},
        'tab'  : new System.Tab(),
        'tools': new System.Tools(),
        'pop'  : System.PopupLayer
     });


/**
 *----------------------------------
 * @author lhh
 * 产品介绍：
 * 创建日期：2014-2-2
 * 修改日期：2014-2-6
 * 名称：setCenter
 * 功能：复写弹出层的居中方法，能适应现在的flash 区域垂直居中，不是以屏幕为居中
 * 说明：仅适用在这个项目中
 * 注意：
 * @param   (Object)  init           NO NULL :
 * Example：
 *----------------------------------*/
    Hxsj.pop.prototype.setCenter=function(fn){//fn 传回调方法 可自定义居中方式
        fn = fn || Hxsj.setCenter_flash(this.padding);
        this.autoScreenCenter($(this.popLayout),this.padding,fn);
        return this;
    };


     $(window).load(function(){
        Hxsj.autoCenterLoading();
     });

     $(window).resize(function() {
         Hxsj.autoScreen();
         Hxsj.autoHeight();
         Hxsj.setToolContent();
         Hxsj.createArear();
         Hxsj.detailedList();
         Hxsj.similarGoods();
         Hxsj.see();
          var ind=0;
         $('.lhh-HXSJ-Menu-A').each(function(i){
           if($(this).find(".title").hasClass("cur")){
                ind=i;
            }
         });
        $('.lhh-HXSJ-Menu-A').eq(ind).trigger("click");
         
         
    });

    $(function(){
         Hxsj.run();

        //点击工具图标  测试用 
        $('#Tool li').bind('click',function(){
            if(Hxsj.content.hasClass('show')){
                Hxsj.content.removeClass('show');
                Hxsj.hide_content();
            }else{
                Hxsj.content.addClass('show');
                Hxsj.show_content();
            }
        });

        //add_favorite
        $('.lhh-HXSJ-Thumbnail-box .star').on('click',function(){
            if($(this).hasClass('star-selected')){
                $(this).removeClass('star-selected');
            }
            else{
                $(this).addClass('star-selected');
            }

        });


        
        Hxsj.changeDesignName();
      

    });
});




    
