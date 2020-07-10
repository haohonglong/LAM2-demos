/**
 *----------------------------------
 * @author lhh
 * 产品介绍：
 * 创建日期：2015.1.13      
 * 修改日期：2015.1.13
 * 名称：
 * 功能：拼贴铺装 与flash 交互
 * 说明：
 * 注意：
 * Example：
 *----------------------------------*/

var zIndex=10;
DATA.cp.flash.config.flashvars.uid = "1";


swfobject.embedSWF(
DATA.path, 
"Flipper_cp", "100%", "100%", "10.0.0", 
"expressInstall.swf", 
DATA.cp.flash.config.flashvars, 
DATA.cp.flash.config.params, 
DATA.cp.flash.config.attributes);



function getFlashObjs (nameStr){
    if (navigator.appName.indexOf("Microsoft") != -1) {
       return window[nameStr];  
    } else {  
       return document[nameStr];
    } 
}
var callFlash=function(){
    getFlashObjs('Flipper_cp').CreatRect(8000,5800,200,200,200,200);
    

};

//isReady;pageInit;sendToJavaScript 这三个函数是flash 那边定义的，名称不可修改。为的是页面加载时可立即调用flash 方法
var jsReady = false;
function isReady() {
    return jsReady;
}

function pageInit() {
    jsReady = true;
}

function sendToJavaScript() {
    callFlash();
}

//输入框节点对象
var n_D_left = null,
    n_D_right= null,
    n_D_down = null,
    n_D_up   = null,
    R45  = null,
    R90  = null,
    D_reset  = null,
    D_send   = null;


   
//接收flash
function OpenAreaAssemblePage(wallW,
                              wallH,
                              wallTextureID,
                              areaTextureID,
                              areaX,
                              areaY,
                              areaW,
                              areaH, 
                              wallRotate,
                              areaRotate){

	DATA.cp.flash.init.wallW         = wallW           = wallW         ? wallW         : 0; 
  DATA.cp.flash.init.wallH         = wallH           = wallH         ? wallH         : 0; 
  DATA.cp.flash.init.wallTextureID = wallTextureID   = wallTextureID ? wallTextureID : 0; 
  DATA.cp.flash.init.areaTextureID = areaTextureID   = areaTextureID ? areaTextureID : 0; 
  DATA.cp.flash.init.areaX         = areaX           = areaX         ? areaX         : 0; 
  DATA.cp.flash.init.areaY         = areaY           = areaY         ? areaY         : 0; 
  DATA.cp.flash.init.areaW         = areaW           = areaW         ? areaW         : 0; 
  DATA.cp.flash.init.areaH         = areaH           = areaH         ? areaH         : 0; 
  DATA.cp.R.R45 = DATA.cp.flash.init.wallRotate    = wallRotate      = wallRotate    ? wallRotate    : 0; 
  DATA.cp.R.R90 = DATA.cp.flash.init.areaRotate    = areaRotate      = areaRotate    ? areaRotate    : 0; 


  //接收flash 初始数据
  DATA.cp.P.b.D_left  = DATA.cp.P.a.D_left  = areaX;
  DATA.cp.P.b.D_right = DATA.cp.P.a.D_right = wallW - (areaX + areaW);
  DATA.cp.P.b.D_up    = DATA.cp.P.a.D_up    = areaY;
  DATA.cp.P.b.D_down  = DATA.cp.P.a.D_down  = wallH - (areaY + areaH);
  getPostionValue();

}

//给位置信息框赋值
function getPostionValue(v){
	if(1 === v){//用于重置为初始值
		  D_left.value  = DATA.cp.P.b.D_left ;
	    D_right.value = DATA.cp.P.b.D_right;
	    D_down.value  = DATA.cp.P.b.D_down ;
	    D_up.value    = DATA.cp.P.b.D_up   ;
	    DATA.cp.R.R45 = DATA.cp.flash.init.wallRotate; 
	    DATA.cp.R.R90 = DATA.cp.flash.init.areaRotate;

	}else{//改变后的值
		  D_left.value  = DATA.cp.P.a.D_left ;
	    D_right.value = DATA.cp.P.a.D_right;
	    D_down.value  = DATA.cp.P.a.D_down ;
	    D_up.value    = DATA.cp.P.a.D_up   ;
		
	}
		
}

/**
 *----------------------------------
 * @author lhh
 * 产品介绍：
 * 创建日期：2015-1-13
 * 修改日期：2015-1-13
 * 名称：rotation_f
 * 功能：所有值清零
 * 说明：只有在点击关闭弹出按钮是才调用到
 * 注意：
 * Example：
 *----------------------------------*/
function clear_zero(){
	D_left.value  = 0;
    D_right.value = 0;
    D_down.value  = 0;
    D_up.value    = 0;
    DATA.cp.R.R45 = 0; 
    DATA.cp.R.R90 = 0;
		
}


//获取输入框中的值
function getInputValue(){
	DATA.cp.P.a.D_left  = D_left.value ;
  DATA.cp.P.a.D_right = D_right.value;
  DATA.cp.P.a.D_down  = D_down.value ;
  DATA.cp.P.a.D_up    = D_up.value   ;
}


/**
 *----------------------------------
 * @author lhh
 * 产品介绍：
 * 创建日期：2015-1-13
 * 修改日期：2015-1-13
 * 名称：rotation_f
 * 功能：旋转做的操作
 * 说明：递增加 只要到360 就清零
 * 注意：
 * @param   (String)v 			NO NULL :传人角度的标示
 * Example：
 *----------------------------------*/
function rotation_f(v){//旋转做的操作
	if('R45' === v){
		if(360 === DATA.cp.R.R45){
			DATA.cp.R.R45 =0;
		}else{
			DATA.cp.R.R45= parseInt(DATA.cp.R.R45) +45;
		}
		
		return ;
	}
	if('R90' === v){
		if(360 === DATA.cp.R.R90){
			DATA.cp.R.R90 =0;
		}else{
			DATA.cp.R.R90= parseInt(DATA.cp.R.R90) +90;
		}
		return ;
	}

}


/**
 *----------------------------------
 * @author lhh
 * 产品介绍：
 * 创建日期：2015-1-14
 * 修改日期：2015-1-14
 * 名称：setPostionValue
 * 功能：拖拽时时事接受flash 传过来的参数
 * 说明：当拖拽时鼠标抬起接收flash 传过来的参数 注意：这个方法名不能改！
 * 注意：
 * @param   (String)v 			NO NULL :传人角度的标示
 * Example：
 *----------------------------------*/
function setPostionValue(left,right,down,up){
    if(left <0 || right <0 || down <0 || up <0) return 0;
    DATA.cp.P.a.D_left  = left;
    DATA.cp.P.a.D_right = right;
    DATA.cp.P.a.D_down  = down;
    DATA.cp.P.a.D_up    = up;
    getPostionValue();
    

}

/**
 *----------------------------------
 * @author lhh
 * 产品介绍：
 * 创建日期：2015-1-14
 * 修改日期：2015-1-14
 * 名称：reset
 * 功能：恢复初始flash 传过来的值
 * 说明：
 * 注意：
 * Example：
 *----------------------------------*/
function reset(){
    getPostionValue(1);
    getFlashObjs('Flipper_cp').UpdataRect(DATA.cp.flash.init.areaX,
                                          DATA.cp.flash.init.areaY,
                                          DATA.cp.flash.init.areaW,
                                          DATA.cp.flash.init.areaH);
    console.log(DATA.cp.flash.init.areaX);
    console.log(DATA.cp.flash.init.areaY);
    console.log(DATA.cp.flash.init.areaW);
    console.log(DATA.cp.flash.init.areaH);
    
    
}

/**
 *----------------------------------
 * @author lhh
 * 产品介绍：
 * 创建日期：2015-1-14
 * 修改日期：2015-1-14
 * 名称：send
 * 功能：确定时发送参数到flash
 * 说明：
 * 注意：
 * Example：
 *----------------------------------*/
function send(){
    AreaAssembleReset(DATA.cp.flash.init.wallW,        
                      DATA.cp.flash.init.wallH,        
                      DATA.cp.flash.init.wallTextureID,
                      DATA.cp.flash.init.areaTextureID,
                      DATA.cp.P.a.D_left,        
                      DATA.cp.P.a.D_up,        
                      DATA.cp.flash.init.wallW-(DATA.cp.P.a.D_left+DATA.cp.P.a.D_right),        
                      DATA.cp.flash.init.wallH-(DATA.cp.P.a.D_up+DATA.cp.P.a.D_down),        
                      DATA.cp.R.R45,
                      DATA.cp.R.R90);


}


/**
 *----------------------------------
 * @author lhh
 * 产品介绍：
 * 创建日期：2015-1-14
 * 修改日期：2015-1-14
 * 名称：is_overflow
 * 功能：判读输入的值是否超出
 * 说明：
 * 注意：
 * @param   (Number)s 			NO NULL :标示方向
 * @param   (int)value 			NO NULL :输入的值
 * Example：
 *----------------------------------*/
function is_overflow(n,value){
	var wallW = parseInt(DATA.cp.flash.init.wallW),
  		wallH = parseInt(DATA.cp.flash.init.wallH),
  		D_right = parseInt(DATA.cp.P.a.D_right),
  		D_left  = parseInt(DATA.cp.P.a.D_left),
  		D_down  = parseInt(DATA.cp.P.a.D_down),
  		D_up    = parseInt(DATA.cp.P.a.D_up);
    value=parseInt(value);
	 // console.log('=======下面是W=======================================================================')
	 // console.log('wallW'+wallW)
	 // console.log('贴图W：'+ (wallW - (D_left+D_right)))
	 // console.log(value > wallW - (D_left+D_right))
	 // console.log('=======下面是H=======================================================================')
	 // console.log('wallH'+wallH)
	 // console.log('贴图H：'+ (wallH - (D_down+D_down)))
	 // console.log(value > wallH - (D_down+D_down))

	//1 水平 ;2 垂直
	if(1 === n){
    // if (value > wallW - (D_left+D_right)) {
		if (D_left+D_right < value) {//D_left+D_right < value
			return true;
		}else{
			return false;
		}
	}

	if(2 === n){
		// if (value > wallH - (D_down+D_up)) {
    	if (D_down+D_up < value){
			return true;
    
		}else{
			return false;
		}
	}
}



$(function(){
        //获取输入框节点元素
        CollagePavement = document.getElementById('CollagePavement');
        D_left  = document.getElementById('D_left');
        D_right = document.getElementById('D_right');
        D_down  = document.getElementById('D_down');
        D_up    = document.getElementById('D_up');
        D_reset  = document.getElementById('D_reset');
        D_send   = document.getElementById('D_send');
        R45   = document.getElementById('R45');
        R90   = document.getElementById('R90');
        getPostionValue();
        
        //点击重置按钮
        $(D_reset).bind('click',function(event){
        	event=window.System.Basis.fixEvt(event);
        	reset();
        	event.preventDefault();
        	

        });

        //点击确认按钮
        $(D_send).bind('click',function(){
        	send();
        });

        //旋转45度
        $(R45).bind('click',function(){
        	rotation_f('R45');
        	//纹理角度
    		  getFlashObjs('Flipper_cp').SetWallRotation(DATA.cp.R.R45);
        });
        //旋转90度
        $(R90).bind('click',function(){
        	rotation_f('R90');
        	//纹理角度
    		getFlashObjs('Flipper_cp').SetRectRotation(DATA.cp.R.R90);
        });

        //这个地方把改变的值传给flash
        $('#CollagePavement input[type="text"]').unbind();
        $('#CollagePavement input[type="text"]').bind('blur',function(even){
          event=window.System.Basis.fixEvt(even);
        	if("INPUT" === event.target.tagName){
        		if(Hxsj.is_numeric(this.value)){
	        		switch(this.id){
						case 'D_left':
							if(parseInt(this.value) >=0 && !is_overflow(1,parseInt(this.value))){
								DATA.cp.P.a.D_left  = parseInt(this.value);
								getFlashObjs('Flipper_cp').SetLeftPosition(DATA.cp.P.a.D_left);
							}
							else{
								getPostionValue();
							}
						break;
						case 'D_right':
							if(parseInt(this.value) >=0 && !is_overflow(1,parseInt(this.value))){
								DATA.cp.P.a.D_right = parseInt(this.value);
								getFlashObjs('Flipper_cp').SetRightPosition(DATA.cp.P.a.D_right);
							}
							else{
								getPostionValue();
							}
							

						break;
						case 'D_down':
							if(parseInt(this.value) >=0 && !is_overflow(2,parseInt(this.value))){
								DATA.cp.P.a.D_down  = parseInt(this.value);
								getFlashObjs('Flipper_cp').SetBottomPosition(DATA.cp.P.a.D_down);
							}
							else{
								getPostionValue();
							}
							
						break;
						case 'D_up':
							if(parseInt(this.value) >=0 && !is_overflow(2,parseInt(this.value))){
								DATA.cp.P.a.D_up    = parseInt(this.value);
								getFlashObjs('Flipper_cp').SetTopPosition(DATA.cp.P.a.D_up);
							}
							else{
								getPostionValue();
							}
							
						break;

						
						default:
					}
				}else{
					getPostionValue();
				}

				
				

        		
        		
        	}
        });

		var $inputs=$('#CollagePavement input[type="text"]');
	    $inputs.keydown(function(event){
	        return Hxsj.tools.enterToTab($inputs,event,this);
	    });


        




    pageInit();
    
    
    OpenAreaAssemblePage(8000,//墙宽
                         7000,//墙高
                         1,//墙材质id
                         2,//拼贴区域材质id
                         1826,//拼贴区域X轴坐标
                         2429,//拼贴区域Y轴坐标
                         3000,//拼贴区域宽
                         2000,//拼贴区域高
                         0,//墙面壁纸旋转角度
                         0);//拼贴壁纸旋转角度    
    
});




$(function(){
      var cp=new Hxsj.pop('#CollagePavement',null,0);
      cp.$dom=$(cp.popLayout);
      cp.close=function(){
          Hxsj.mask.hide();
          cp.$dom.hide();
          cp.remove();
      };
      cp.resize().setCenter().closed($('.js_popup_close_cp'),function(){
          cp.close();
          
      });
      $('.js_showcp').bind('click',function(){
          Hxsj.loading_f(function(){
              cp.$dom.show();
              Hxsj.mask.show();
          });
          
      });
      $('.js_button_cp').bind('click',function(){
          cp.close();
      });
  });