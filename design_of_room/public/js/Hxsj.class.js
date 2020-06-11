/**
 *----------------------------------
 * @author lhh
 * 产品介绍：
 * 创建日期：2014.12.31      
 * 修改日期：2014.12.31
 * 名称：class Hxsj 
 * 功能：户型设计交互各种操作
 * 说明：
 * 注意：
 * Example：
 *----------------------------------*/
LAM.Hxsj = LAM.run([LAM],function(LAM){
    'use strict';
    var System = LAM;

    System.is(System,'Dom','Hxsj',System.classPath+'/base');
    
        var __this__=null;
        var Hxsj = System.Dom.extend({
            constructor: function (P) {
                this.base();
                __this__ = this;
                this.p= P || {};
                this.Reg  =null;
                this.Login=null;
                //
                // console.log(this)
                this.content=null;
                this.content_width=0;
                
                this.header_h=0;
                this.content_h=0;//包括了pandding

                this.arear_h=0;//没有包括pandding
                this.select_height=0;
                this.content_close=null;
                this.loading_node=null;
                
                
                this.mask=null;
                if(P){
                    this.D     = P.D     || null;
                    this.tab   = P.tab   || new System.Tab()   || null;
                    this.tools = P.tools || new System.Tools() || null;
                    this.pop   = P.pop   || System.PopupLayer  || null;
                    this.Drag  = P.Drag  || System.Drag        || null;
                    this.B  = new System.Browser() || null;
                }
            },
            '_className':'Hxsj',
            '__constructor':function(){},
            /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2014-12-31
         * 修改日期：2014-12-31
         * 名称：fly
         * 功能：点击某个节点然后出现飞入的效果
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'fly':function(init){
            

            
            return this;
        },
        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-17
         * 修改日期：2015-1-17
         * 名称：addCar
         * 功能：添加购物车
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'addCar':function(init){
            

            
            return this;
        },

        
        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-29
         * 修改日期：2015-2-9,2-10
         * 名称：selectTab
         * 功能：下拉选项卡
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         *                                           {
         *                                             'parent': (String) //在什么范围内查找对应的目标元素
         *                                           }
         * Example：
         *----------------------------------*/
        'selectTab':function(init){
             init = init || {};
             var wrap= init.parent || false;
             var $list=wrap ? $(wrap+' .lhh-HXSJ-SelectTab-title .li-1') : $('.lhh-HXSJ-SelectTab-title .li-1');
             var $block= wrap ? $(wrap+' .lhh-HXSJ-SelectTab-block') : $('.lhh-HXSJ-SelectTab-block');
             var scroll= wrap ? wrap+' .scroll_SelectTab' : '.scroll_SelectTab';
             var $SelectTabContent= wrap ? $(wrap+' .lhh-HXSJ-SelectTab-block-wrap')                : $('.lhh-HXSJ-SelectTab-block-wrap');
             var $i= wrap ?                $(wrap+' .lhh-HXSJ-SelectTab-title .icon')               : $('.lhh-HXSJ-SelectTab-title .icon');
             var $t= wrap ?                $(wrap+' .lhh-HXSJ-SelectTab-title-more span')           : $('.lhh-HXSJ-SelectTab-title-more span');
             var $more= wrap ?             $(wrap+' .lhh-HXSJ-SelectTab-title-more')                : $('.lhh-HXSJ-SelectTab-title-more');

             // var tab=this.tab.run({
             //        'list':$list,
             //        'event':'hover',
             //        'hover':true,
             //        'or':true,
             //        'class':'cur',
             //        'block':$block,
             //        'fn':function(obj){
             //            var index=obj.this_index;
             //            var _this=this;
             //            obj.current.block.hide();
             //            obj.current.block.eq(index).show();
             //            obj.current.block.eq(index).hover(null,function(){
                      //        $(_this).hide();
                      //        $(this).hide();
                      //    });

             //        }

                    

                    
             //    });
            var _this=null;
            var $tab=$('.js_SelectTabWrap');
            // var $primary=$('#Tool-content .primary');
            
            
            $list.hover(function(){
                _this=this;
                $list.removeClass('cur');
                $(this).addClass('cur');
                $block.hide();
                $block.eq($(this).index()).show();

                $block.eq($(_this).index()).unbind('hover');
                $block.eq($(_this).index()).hover(null,function(){
                    $(_this).removeClass('cur');
                    $(this).hide();
                });

                // $primary.unbind('hover');
                // $primary.hover(null,function(){
                //     $(_this).removeClass('cur');
                //     $block.eq($(_this).index()).hide();
                // });


                $tab.unbind('hover');
                $tab.hover(null,function(){
                    $(_this).removeClass('cur');
                    $block.eq($(_this).index()).hide();
                });


                
                
            });

            


            
            
             
                 
             


            // $more.off();
            // $more.on('click',function(){
            //     if($i.hasClass('up')){
            //         $t.text('展开');
            //         $i.removeClass('up');
            //         $SelectTabContent.hide();
            //     }else{
            //         $i.addClass('up');
            //         $t.text('收起');
            //         $SelectTabContent.show();

            //     }
            // });

            $block.each(function(){
                if($(this).hasClass('none')){
                    $(this).show();
                }
            });
            this.scrolls(scroll);
            
            $block.each(function(){
                if($(this).hasClass('none')){
                    $(this).hide();
                }
            });

            
            return this;
        },



        
        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-6
         * 修改日期：2015-1-6
         * 名称：show_toolBar_content
         * 功能：点击工具栏下显示对应的工具
         * 说明：
         * 注意：此处this 指针指向的不是 Hxsj ,而是被点击的元素dom对象
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'show_toolBar_content':function(){
            __this__.setToolContent();
            
            
        },

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-14
         * 修改日期：2015-1-14
         * 名称：add_favorite
         * 功能：添加收藏
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'add_favorite':function(){
            $('.lhh-HXSJ-Thumbnail-box .star').hide();
            var $start=null;
            $('.lhh-HXSJ-Thumbnail-box').hover(function(){
                $start=$(this).find('.star').show();
            },function(){
                if($start.length > 0){
                    $start.hide();
                }

            });
            

            
        },

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-28
         * 修改日期：2015-1-28
         * 名称：menu_create
         * 功能：创建左侧的菜单
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'menu_create':function(){
            this.tab.run({
                'list':$('#createRoom .l-1'),
                'event':'click',
                'live':'on',
                'or':true,
                'class':'selected',
                'fn':function(){
                    
                }

                
            });
        },

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-28
         * 修改日期：2015-1-28
         * 名称：createArear
         * 功能：创建图形
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'createArear':function(){
            var h=this.content_h-$('.lhh-HXSJ-Search').height()-40;

            $('#createRoom .sectionScroll').css({
                'height':h+'px'
            });
            this.scrolls();
        },
        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-28
         * 修改日期：2015-1-28
         * 名称：detailedList
         * 功能：清单
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'detailedList':function(){
            
            var title_h=$('#HXSJ-DetailedList .lhh-HXSJ-Title-DList').outerHeight(true);
            var tab_h=$('#HXSJ-DetailedList .lhh-HXSJ-DListTab-A').outerHeight(true)+$('#HXSJ-DetailedList .lhh-HXSJ-DListTab-B').outerHeight(true);
            var th_h=$('#HXSJ-DetailedList .lhh-HXSJ-DListGoods-th').outerHeight(true);
            $('#HXSJ-DetailedList .h-360').css({
                'height':this.content_h-title_h-tab_h-th_h-30+'px'
            });
        },

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-28
         * 修改日期：2015-1-28
         * 名称：similarGoods
         * 功能：同类商品
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'similarGoods':function(){
            var title_h=$('#SimilarGoods .lhh-HXSJ-SimilarGoods-title').outerHeight(true);
            var tab_h=$('.lhh-HXSJ-SelectTab').outerHeight(true)+$('.lhh-HXSJ-SelectTab-title').outerHeight(true);
            var Button_h=$('#SimilarGoods .lhh-HXSJ-Button-A1').outerHeight(true);
            $('.scroll_SimilarGoods').css({
                'height':this.content_h-title_h-tab_h-Button_h+10+'px'
            });


            this.scrolls('.scroll_SimilarGoods');


        },

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-28
         * 修改日期：2015-1-28
         * 名称：see
         * 功能：摆摆看看
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'see':function(){
            $('.sectionScroll_see').css({
                'height':this.content_h-70+'px'
            });
            this.scrolls('.sectionScroll_see');


        },

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-2-12
         * 修改日期：2015-2-12
         * 名称：changeDesignName
         * 功能：更改设计名称
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'changeDesignName':function(){
            var $text=$(".js_name_wrap h4");
            var $input=$("input[name='designname']");

            function _blur(){
                var dName=$input.val();
                if('' === dName){
                    $input.hide();
                    $text.text("设计名称").show();
                }else{
                    $input.attr('value',dName).hide();
                    $text.text(dName).show();
                }
            }

            //设计名称
            $text.bind('click',function(e){
                $input.show();
                $input.focus();
                $text.hide();
                e.stopPropagation();
            });
            $input.bind('blur',function(){
                _blur();

            }).keydown(function(e){
                if(13 === e.keyCode)
                    _blur();
                
            });
        },



        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-20
         * 修改日期：2015-1-20
         * 名称：setThumbnailArear
         * 功能：设置缩略图区
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'setThumbnailArear':function(){
            
            var $thumbnail=$('.js_thumbnails');
            
            //从已知工具栏右侧区域高度求出菜单区的高度
            var h=this.content_h-$('.lhh-HXSJ-Search').height()-40;

            if($thumbnail.length > 0){
                $thumbnail.css({
                            'height':h+15+'px'
                        });
                $thumbnail.find('.sectionScroll').css({
                            'height':h+15+'px'
                        });
            }

            this.scrolls();

        },



        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-20
         * 修改日期：2015-1-20
         * 名称：ToolContent
         * 功能：设置工具栏右侧内容区
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'setToolContent':function(){
            
            this.setSliderMenu();
            this.setThumbnailArear();
            this.createArear();
            this.see();

            
            
            return this;


        },

        

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-8
         * 修改日期：2015-1-18
         * 名称：hide_slider_submenu
         * 功能：隐藏下拉菜单下所有内容
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'hide_slider_submenu':function(){
            $('.lhh-HXSJ-Menu-A').each(function(){
                $(this).find('.title').removeClass("cur").next().hide();
                __this__.setToolContent();
            });
        },


        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-20
         * 修改日期：2015-1-20
         * 名称：setSliderMenu
         * 功能：设置下拉菜单区域
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'setSliderMenu':function(){
            var $menu=$('.lhh-HXSJ-Menu');
            if(0 === $menu.length) return this;
            var $menu_sub=$('.lhh-HXSJ-Menu .sectionScroll');
            //从已知工具栏右侧区域高度求出菜单区的高度
            var h=this.content_h-$('.lhh-HXSJ-Search').height()-40;
            $menu.css({
                        'height':h-10+'px'
                    });


            if($menu_sub.length > 0){
                var testH=0;
                $(".lhh-HXSJ-Menu-A").each(function(){
                    testH+=$(this).height();
                });
                $menu_sub.css({
                            'height':h-testH+'px'
                        });
            }

            this.scrolls();


        },


        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-8
         * 修改日期：2015-1-18
         * 名称：menu_slider
         * 功能：点击菜单下拉显示子菜单
         * 说明：每点击时会调用自定义滚动条的方法
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'menu_slider':function(){
            if(0 === $('.lhh-HXSJ-Menu-A .title').length) return this;
            $('.lhh-HXSJ-Menu-A .title').hover(function(){
                $(this).addClass('hover');
            },function(){
                $(this).removeClass('hover');

            });

            __this__.setSliderMenu();
            //点击只展开当前的下拉菜单其余隐藏
            $('.lhh-HXSJ-Menu-A').on('click',function(event){
                __this__.hide_slider_submenu();
                $(this).find('.title').addClass("cur").next().show();
                //event.stopPropagation(); 
                __this__.setSliderMenu();

            });

            

            
            //+-号互换
            var isplus=function($icon){
                if($icon.hasClass('plus')){
                    $icon.removeClass('plus').addClass('minus');
                }else{
                    $icon.addClass('plus').removeClass('minus');
                }

            };
            $('.lhh-HXSJ-Menu .l-1-title').each(function(){
                var $i=$(this).find('.icon');
                if(0 === $i.length) return false;
                $(this).toggle(
                  function (event) {
                    //打开状态
                    var $icon=$(this).children('.icon');
                    isplus($icon);
                    $(this).next().show();
                    __this__.setSliderMenu();
                    event.stopPropagation(); 
                  },
                    //收起状态
                  function (event) {
                    var $icon=$(this).children('.icon');
                    isplus($icon);
                    $(this).next().hide();
                    __this__.setSliderMenu();
                    event.stopPropagation(); 
                  }
                );
                
            });

            //
            $('.lhh-HXSJ-Menu .sectionList-A1 a').on('click',function(event){
                event=window.System.Basis.fixEvt(event);
                $('.lhh-HXSJ-Menu .selected').removeClass('selected');
                $(this).parent().prev().addClass('selected');
                $('.lhh-HXSJ-Menu').find('a').removeClass('cur');
                $(this).addClass('cur');

                event.preventDefault();
            });


            




        },
        

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-6
         * 修改日期：2015-1-6
         * 名称：loading_f
         * 功能：缓冲的一个加载
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'loading_f':function(fn,time){
            if(!this.isF(fn)) return this;
            time=time || 1000;
            this.loading_node.show();
            this.mask.show();
            this.sleep(function(){
                __this__.loading_node.hide();
                __this__.mask.hide();
                fn();
                
            },time);
        },

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-2-10
         * 修改日期：2015-2-10
         * 名称：autoCenterLoading
         * 功能：自动居中loading
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'autoCenterLoading':function(){
            if(0 === this.loading_node.length)
                this.loading_node=$('#loading');
            if(this.loading_node.length > 0)
                this.autoScreenCenter(this.loading_node,0,function($window){
                        var size=window.System.autoCenter($window.w,this.width(),
                                                          __this__.arear_h,this.height(),
                                                          0);
                        this.css({'top':size.y+'px',
                                 'left':size.x+'px'
                                });
                    });
        },


        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-9
         * 修改日期：2015-1-9
         * 名称：button_fade
         * 功能：缩略图按钮移入移出渐隐渐现
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'button_fade':function(){
            //var temp=null,flag=true;

            this.tab.run({
                'list':$('.lhh-HXSJ-Thumbnail li'),
                'event':'hover',
                'or':true,
                'class':'hover',
                'fn':function(){
                    // $(this).find('.lhh-HXSJ-Thumbnail-button').animate({opacity: 'show'}, 500);
                }

                
            });



        },

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-6
         * 修改日期：2015-1-6
         * 名称：focus_text
         * 功能：文本框聚焦框变色
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'focus_text':function(){
            this.tools.focusin($(".js_text"),"bor-blue");
            this.tab.run({
                'list':$('.js_focus_input'),
                'event':'hover',
                //'hover':true,
                'or':true,
                'class':'cur',
                'fn':function(){

                }

                
            });
        },
        
        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-12
         * 修改日期：2015-1-12
         * 名称：sollagePavement
         * 功能：拼贴铺装与flash 交互
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'sollagePavement':function(){
            
        },
        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-26
         * 修改日期：2015-1-27
         * 名称：balcony
         * 功能：阳台属性
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'balcony':function(){
            var html_balcony= System.Template.getBlock("balcony");

            var IMGW=135,IMGH=90,N2500=2500,N2800=2800;
            
            var $balcony_a_l = $('.js_balcony_l_text span');
            var $balcony_a_h = $('.js_balcony_h_text span');
            var $wall_a_h    = $('.js_wall_h span');
            var $balcony_in_l    = $('.js_balcony_l');
            var $balcony_in_w    = $('.js_balcony_w');
            var $balcony_in_h    = $('.js_balcony_h');
            var $balconyBox=$('.lhh-HXSJ-PopWallBox-balconyBox');
            var balcony=function (){
                //i 图上尺寸;a 实际尺寸
                var balcony_in_l=balcony_in_w=balcony_a_w=balcony_a_l=balcony_in_h=balcony_h=balcony_w=balcony_l=balcony_a_h=wall_a_h=0;
                
                balcony_a_l= parseInt($balcony_a_l.text().trim());
                balcony_a_h= parseInt($balcony_a_h.text().trim());
                wall_a_h   = parseInt($wall_a_h.text().trim());
                balcony_in_l = parseInt($balcony_in_l.val().trim());
                balcony_in_w = parseInt($balcony_in_w.val().trim());
                balcony_in_h = parseInt($balcony_in_h.val().trim());

                //判读输入的是否是合法数字
                // if(!__this__.is_numeric(balcony_in_l) || !__this__.is_numeric(balcony_in_w) || !__this__.is_numeric(balcony_in_h) ){
                    
                //     console.error('输入的不是合法数字')
                //     return 0;
                // }

                


                if(balcony_in_h <=2800){//限定高度尺寸
                   // $balcony_a_h.text(balcony_in_h);
                   DATA.balcony.h=balcony_in_h;
                }
                else{//如果超出设定尺寸，还原默认值
                    

                    $balcony_in_h.val(2800);
                    // $balcony_a_h.text(2800);

                    //设置阳台尺寸给全局变量
                    DATA.balcony.h=2800;
                    
                    
                }
                //长度输入位数限制在4位,值 不得大于 10m
                if(balcony_in_l.toString().length >4){
                    balcony_in_l=parseInt(balcony_in_l.toString().substring(0,4));
                    $balcony_in_l.val(balcony_in_l);
                }



                
                // $balcony_a_l.text(balcony_in_l);
                //设置阳台尺寸给全局变量
                DATA.balcony.l=balcony_in_l;
                



                //效果
                //==================================================================================================
                // balcony_l = balcony_in_l >= 2500  ? Math.round(parseFloat(2500/N2500*IMGW))  : Math.round(parseFloat(balcony_in_l/N2500*IMGW));
                balcony_l = Math.round(parseFloat(120/balcony_a_l*balcony_in_l));
                balcony_h = balcony_in_h >= 2800  ? 86  : Math.round(parseFloat(86/N2800*balcony_in_h));
                // balcony_h = balcony_h>86 ? 86 : balcony_h;
                //宽度溢出

                if(balcony_l > 100) {
                    balcony_l=100;
                }
                //台高溢出
                // if(balcony_in_h/N2800 > 1) {
                //     $balconyBox.css({"height":86+"px"});
                //     return 0;   
                // }
                $balconyBox.css({"width":balcony_l+"px","height":balcony_h+"px"});
                //==================================================================================================

                // console.log(DATA.balcony.l)
                // console.log(DATA.balcony.h)


                

            };

            if($(".lhh-HXSJ-PopWallBox-balcony").length >0){
                $(".lhh-HXSJ-PopWallBox-balcony input").keyup(function(){
                    balcony();
                });
                balcony();

                var $input_balcony=$('.lhh-HXSJ-PopWallBox-balcony input');
                $input_balcony.keydown(function(event){
                    return __this__.tools.enterToTab($input_balcony,event,this);
                });


                 //显示天花板
                var $ceiling=null;
                $('.js_ceiling').on('click',function(){
                    $ceiling=$('.lhh-HXSJ-PopWallBox-ceiling',$(this).parents('.lhh-HXSJ-PopWallBox-content'));
                    if($ceiling.hasClass('none')){
                        $ceiling.removeClass('none');
                    }
                    else{
                        $ceiling.addClass('none');

                    }
                });

                new this.Drag($(".lhh-HXSJ-PopWallBox-balcony").get(0),
                                {
                                    'noText':true,
                                    'partial':$(".lhh-HXSJ-PopWallBox-balcony .lhh-HXSJ-Title-pop").get(0)
                                });
            }
            

            

        },

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-26
         * 修改日期：2015-1-26
         * 名称：wallHole
         * 功能：墙洞属性
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'wallHole':function(){
            var html_wallHole= System.Template.getBlock("wall_hole");

            var IMGW=155,IMGH=96;
            
            var $hole_w=$(".js_hole_w");
            var $hole_h=$(".js_hole_h");
            var $wall_w=$(".js_wall_w");
            var $wall_h=$(".js_wall_h");
            var $highGround=$(".js_highGround");
            var $wallhole=$(".lhh-HXSJ-PopWallBox-wallhole");

            var resetHole=function (){
                var holeWidth=holeW=holeH=holeHigh=wallW=wallH=hg=highGround=T=L=0;
                holeW = parseInt($hole_w.val().trim());
                holeH = parseInt($hole_h.val().trim());
                wallW = parseInt($wall_w.text().trim());
                wallH = parseInt($wall_h.text().trim());
                hg    = parseInt($highGround.val().trim());
                
                
                holeWidth  = parseInt(holeW/wallW*IMGW);
                holeHigh   = parseInt(holeH/wallH*IMGH);
                highGround = parseInt(hg/wallH*IMGH);

                //保证墙洞的位置始终在中间
                var G=window.System.autoCenter(IMGW,holeWidth,IMGH,holeHigh);
                L=G.x;
                T=highGround;
                
                
                //高度是否溢出
                if(1 < (hg + holeH)/wallH || hg < 0){
                    $hole_h.val(1200);
                    $highGround.val(0);
                    $wallhole.css({"height":46+"px","bottom":"0"});
                    return 0;   
                }
                
                //宽度是否溢出
                if(holeW/wallW > 1 || holeH/wallH > 1) {
                    $hole_w.val(1200);
                    //保证墙洞的位置始终在中间
                    var G=window.System.autoCenter(IMGW,75,IMGH,holeHigh);
                    L=G.x;
                    $wallhole.css({"width":75+"px","left":L+"px"});
                    return 0;   
                }
                
                $wallhole.css({"width":holeWidth+"px","height":holeHigh+"px","bottom":T+"px","left":L+"px"});
            };


            

            if($('.lhh-HXSJ-PopWallBox-hole').length >0){
                $(".lhh-HXSJ-PopWallBox-setup input").keyup(function(){
                    resetHole();
                });
                resetHole();
                


                var $input_wallHole=$('.lhh-HXSJ-PopWallBox-hole input');
                $input_wallHole.keydown(function(event){
                    return __this__.tools.enterToTab($input_wallHole,event,this);
                });

                

                //方洞变园洞
                var $hole=null;
                $('.js_circleHole').on('click',function(){
                    $hole=$('.lhh-HXSJ-PopWallBox-wallhole',$(this).parents('.lhh-HXSJ-PopWallBox-content'));
                    if($hole.hasClass('circle')){
                        $hole.removeClass('circle');
                    }
                    else{
                        $hole.addClass('circle');

                    }
                });

                new this.Drag($(".lhh-HXSJ-PopWallBox-hole").get(0),
                                {
                                    'noText':true,
                                    'partial':$(".lhh-HXSJ-PopWallBox-hole .lhh-HXSJ-Title-pop").get(0)
                                });
            }

                
                


        },

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-12
         * 修改日期：2015-1-12
         * 名称：hide_content
         * 功能：隐藏工具内容显示区
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'hide_content':function(){
            if(this.content.hasClass('show'))
                this.content.removeClass('show');
            
            // this.content.stop();
            // this.content.animate({width: 0}, "slow");
            // this.sleep(function(){
            //      __this__.content.css('visibility', 'hidden');
                
            // },500);
            
            this.content.css({width: 0,'visibility':'hidden'});

        },
        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-12
         * 修改日期：2015-1-12
         * 名称：show_content
         * 功能：显示工具内容显示区
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'show_content':function(){
            // this.content.stop();
            // this.content.animate({width: '765px'}, "slow").css('visibility', 'visible');
            this.content.css({width: '765px','visibility':'visible'});
        },

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-20
         * 修改日期：2015-1-20
         * 名称：content_close_f
         * 功能：关闭按钮执行的行为
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'content_close_f':function(){
            this.content.removeClass('show');
            this.hide_content();
        },





        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-12
         * 修改日期：2015-1-12
         * 名称：fake_drop_down_box
         * 功能：文本框聚焦框变色
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'fake_drop_down_box':function($select,selectBox){
            $select.click(function(event){
                $(selectBox).show();
                event.stopPropagation();
            });
            $(selectBox).find('li').click(function(){
                var val=$(this).text();
                $select.find('span').text(val);
                $select.find('input').val(val);
                $(this).parents(selectBox).hide();
                

            });

            // $(window).click(function(){
            //     $(selectBox).hide();
            // });
        },


        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-10
         * 修改日期：2015-1-10
         * 名称：scrolls
         * 功能：加载自定义滚动条 返回方法原型方便返回时再调用
         * 说明：
         * 注意：
         * @param   (jQuery)  Scroll           NO NULL :
         * @param   (Function)  fn             NO NULL :对应不同地方加载滚动条，在调用时定义一个适应的方法
         * Example：
         *----------------------------------*/
        'scrolls':function(Scroll,fn){
            
            $Scroll = Scroll ? $(Scroll) : $('.sectionScroll');
            if(0 === $Scroll.length) return this;
            try {
        　　    
                if(__this__.isF(fn)){
                    fn();
                }
                $Scroll.scroll_absolute({arrows:false});

                
                
        　　} catch(err) {
        　　   console.error("错误名称: " + err.name+" ---> ");
        　　 　console.error("错误信息: " + err.message+" ---> ");

        　　}

        },
        


        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-7
         * 修改日期：2015-1-7
         * 名称：login
         * 功能：注册登录弹出框
         * 说明：
         * 注意：
         * @param   (Object)  init           NO NULL :
         * Example：
         *----------------------------------*/
        'login':function(){
            this.tab.run({
                'list':$('.js_loginTab li'),
                'event':'click',
                'class':'curr',
                'block':$('.js_loginBlock'),
                'fn':function(obj){
                    obj.current.block.each(function(i){
                        if(obj.this_index==i){
                            $(this).show();
                        }else{
                            $(this).hide();
                        }
                    });
                    

                    
                }

                
            });

            //login pop
            var login=new this.pop('.js_popup_login',null,0);
            login.$dom=$(login.popLayout);
            login.close=function(){
                __this__.mask.hide();
                this.$dom.hide();
            };
            login.closed($('.js_popup_close_login'),function(){
                login.close();
            });
            $('.js_showLogin').bind('click',function(){
                __this__.loading_f(function(){
                    login.$dom.show();
                    __this__.mask.show();
                });
                
            });
            $('.js_button_login').bind('click',function(){
                login.close();
            });



            //reg pop
            var reg=new this.pop('.js_popup_reg',null,0);
            reg.$dom=$(reg.popLayout);
            reg.close=function(){
                __this__.mask.hide();
                this.$dom.hide();
            };
            reg.closed($('.js_popup_close_reg'),function(){
                reg.close();
            });
            $('.js_showReg').bind('click',function(){
                __this__.loading_f(function(){
                    reg.$dom.show();
                    __this__.mask.show();
                });

            });
            $('.js_button_reg').bind('click',function(){
                reg.close();
            });
            //===============================================

            //从登录状态转到注册
            $('.freeReg').on('click',function(){
                login.$dom.hide();
                reg.$dom.show();
            });

            //从注册状态转到登录
            $('.goLogin').on('click',function(){
                reg.$dom.hide();
                login.$dom.show();
            });

            this.Reg  =reg;
            this.Login=login;
        },
        
        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-23
         * 修改日期：2015-1-23
         * 名称：(init) autoScreen
         * 功能：屏幕内容区自适应高度 
         * 说明：
         * 注意：
         * @param   (void)param           NULL :
         * Example：
         *----------------------------------*/
        'autoScreen':function(){
            //设定flash 区域的高度
            this.arear_h=$(window).height()-$('#HXSJ-Header').height();
            $('#HXSJ-Container').css({
                                        'height':this.arear_h+'px'
                                    });

            //flash 未加载完时强制设置高度
            //if(!__this__.isFlashComplete('Flipper')){
                // $('#Flipper').css({
                //                     'height':this.arear_h+'px'
                //                 });
                // console.log('flash 没加载完');
            //}
            

            return this;
        },
        

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-10
         * 修改日期：2015-1-10
         * 名称：autoHeight
         * 功能：高度自适应浏览器高度 上下间距20px
         * 说明：
         * 注意：
         * @param   (jQuery)  $Scroll           NO NULL :
         * Example：
         *----------------------------------*/
        'autoHeight':function(page_h,h){
            $page_h = page_h ? $(page_h) : $('.page_h');
            if(0 === $page_h.length) return this;
            h = h || 40;

            this.header_h=$('#HXSJ-Header').height() || 70;
            this.content_h=$(window).height()-this.header_h-h;
            $page_h.css('height',this.content_h);
            

            return this;

        },

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-2-9
         * 修改日期：2015-2-9
         * 名称：(Function) setCenter_flash
         * 功能：在flash区域中 垂直居中
         * 说明：返回的是供回调用的方法。传入的是padding的值
         * 注意：this 指向的不是 当前对象，是元素jQuery对象
         * @param   (int)  padding           NO NULL :pandding 值
         * Example：
         *----------------------------------*/
        'setCenter_flash':function(padding){
            return function($window){
                var size=window.System.autoCenter($window.w,this.width(),
                                                  __this__.arear_h,this.height(),
                                                  padding);
                this.css({'top':size.y+'px',
                         'left':size.x+'px'
                        });
            };
            
                
            
        },

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-5
         * 修改日期：2015-1-5
         * 名称：init
         * 功能：页面加载时初始化
         * 说明：
         * 注意：禁止异步时重调
         * @param   (void)param           NULL :
         * Example：
         *----------------------------------*/
        'init':function(){
            
            this.autoScreen();

            this.content=$('#Tool-content');
            // if(0 === this.content.length) return this;
            this.content_width=this.content.width();
            this.loading_node=$('#loading');
            // this.__this__.setToolContent();
            
            //初始化工具内容区域
            this.content.css({
                                'width':0,
                                'visibility': 'hidden'
                            });
            this.content_close=$('#Tool-content-close');
            this.content_close.bind('click',function(){
                __this__.content_close_f();
                
            });

            
            this.mask=$('.lhh-HXSJ-Mask');
            this.login();




            return this;
        },

        

        /**
         *----------------------------------
         * @author lhh
         * 产品介绍：
         * 创建日期：2015-1-17
         * 修改日期：2015-1-17
         * 名称：reload_ajax
         * 功能：页面加载时初始化 也可供也可供异步初始化
         * 说明：异步调用时可用这个方法重加载
         * 注意：
         * @param   (void)param           NULL :
         * Example：
         *----------------------------------*/
        'reload_ajax':function(){
            this.tools.hover_image($('.js_focus_image'),{'fn':this.show_toolBar_content,'onece':true});
            this.focus_text();
            this.add_favorite();
            this.menu_create();
            this.menu_slider();
            this.button_fade();
            this.autoHeight();
            this.wallHole();
            this.balcony();
            this.selectTab();
            this.detailedList();
            this.similarGoods();
            

            
            
            
           
            
            return this;
        },
        'run':function(){
            //$(window).load(function(){
                __this__.init();
                __this__.reload_ajax();
            //});
            
            
            return this;
        },
    
            /**
             *
             * @author lhh
             * 产品介绍：析构方法
             * 创建日期：2015-4-2
             * 修改日期：2015-4-2
             * 名称：destructor
             * 功能：在注销Hxsj对象时调用此方法
             * 说明：
             * 注意：
             * @return  ()                      :
             * Example：
             */
            'destructor':function(){}
        });
    
        return Hxsj;
});


 