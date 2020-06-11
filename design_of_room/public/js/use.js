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

    $(function(){
    
    

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


    
    System.Hxsj.changeDesignName();
  

});
});




    
