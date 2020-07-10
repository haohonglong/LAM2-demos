/**
 *----------------------------------
 * @author lhh
 * 产品介绍：
 * 创建日期：2015.1.5      
 * 修改日期：2015.1.5
 * 名称：DATA(Object)
 * 功能：数据接口
 * 说明：
 * 注意：
 * Example：
 *----------------------------------*/

 var DATA={
 	'path':'',
 	//拼贴铺装
 	'cp':{
 		'P':{//位置 大写P
 			'b':{//之前的保存flash初始的值用于重置
 				'D_left' :0,
 				'D_right':0,
 				'D_down' :0,
 				'D_up'   :0
 			},
 			'a':{//之后的要传递的值
 				'wallTextureID' :0,
 				'areaTextureID' :0,
 				'D_left' :0,
 				'D_right':0,
 				'D_down' :0,
 				'D_up'   :0
 			}
 		},
 		'R':{//旋转
 			'R45':0,
 			'R90':0
 		},
 		//
 		'flash':{
 			'config':{
 				'flashvars':{
					'configurl':"",//配置目录
					'planid':"",//户型设计id
					'uid':'',//登录用户的uid
					'brandhallid':""//品牌馆id
				},
				'params':{
					'menu': "false",
					//        scale: "noScale",
					'allowFullscreen': "true",
					'allowScriptAccess': "always",
					'bgcolor': "",
					'wmode': "direct" // can cause issues with FP settings & webcam
					//wmode:"transparent"
				},
				'attributes':{
					'id':"Flipper_cp",
					'name':'Flipper_cp'
				}
			},
 			'init':{//接收flash 初始化的值
				'wallW'			:0 ,//墙宽
				'wallH'			:0 ,//墙高
				'wallTextureID' :0 ,//墙材质id
				'areaTextureID' :0 ,//拼贴区域材质id
				'areaX'			:0 ,//拼贴区域X轴坐标
				'areaY'			:0 ,//拼贴区域Y轴坐标
				'areaW'			:0 ,//拼贴区域宽
				'areaH'			:0 ,//拼贴区域高 
				'wallRotate'	:0 ,//墙面壁纸旋转角度
				'areaRotate'	:0  //拼贴壁纸旋转角度
 			}
 		}

 		
 	},
 	//阳台
 	'balcony':{
 		'l':0,
 		'w':0,
 		'h':0
 	}
 	
    
 };
