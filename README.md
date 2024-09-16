# LAM2-demos
these are usage case of LAM2

### usage:
             git clone https://github.com/haohonglong/LAM2-demos.git
             cd LAM2-demos
             git clone  --branch v2.1.6.1 https://github.com/haohonglong/LAM2.git
             
             以下命令不是必须的
             cd LAM2
             git checkout -b master origin/master

### structure：
                brandhall  #后台管理demo
                    |-commmon       项目公共文件目录
                        |-config       
                            |-config.js       项目配置文件(2)
                    |-controllers   项目控制器文件存放位置(5)
                        |-RoomController.class.js  对应views文件夹下的room文件夹
                    |-public        项目资源文件存放位置(9)
                        |-css
                        |-images
                        |-js
                    |-views         项目视图文件存放位置
                        |—layouts   布局文件存放的位置
                             |-main.html(8)
                        |-room
                            |-list.html(7)
                    |-index.html    项目入口文件(1)
                
                LAM2
                    |-lamborghiniJS #类库核心文件存放位置
                        |-base
                            |-System.js(3)
                            |-View.class.js(6)
                            |-Router.class.js(4)
                            |-...
   ##### 上面数字代表的是执行的顺序
	
	
 
 

#### note:必须要在服务器环境里运行（为了解决ajax跨域的问题）                  
        
#### 例如 nginx 配置
        server {
            listen          8080;
            server_name     lam2;
            index           index.html;
            root  /www/LamborghiniJS/LAM2-demos;
            #解决html 405 Not Allowed (nginx默认静态页面不允许POST方式访问，允许GET方式)
            error_page 405 =200 $request_uri;
        }
#### 使用 node-http-server 作服务器
        1.安装node-http-server
        npm i -g node-http-server
        2.在LAM2-demos目录里运行命令
        node-http-server port=9527 verbose=true
        3.在浏览器地址栏输入
         http://localhost:9527/brandhall/ 
        注意：后面的/ 不要丢掉！！！
        
        
		
#### common/config/config.js 里配置相关参数（参考 二十、Config.js 配置参数）		

#### 1.入口文件(index.html)：
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <script type="text/javascript">window._ROOT_ = "..";</script>
            <script type="text/javascript" src="../brandhall/common/config/config.js"></script>
            <script type="text/javascript" src="../lamborghiniJS/base/System.js"></script>
            <script type="text/javascript">
                LAM.main=function (view) {
                    return view;
                };
                LAM.bootstrap();
            </script>
        </head>
        </html>

#### 2.浏览器上访问：http://lam2:8080/brandhall/index.html?r=room/list
    room ：控制器名
    list ：控制器里面的方法名
##### 有模块的方式：http://lam2:8080/brandhall/index.html?r=room/list&m=xx
    &m=xx  (m 可以在config.js 文件里修改components.moduleID的值) xx代表模块文件夹名称，多层级文件夹用/号分割


#### 一、配置文件配置 参考 二、开发约定
		tip:
			只有配置文件跟项目绑定的,类库文件可以在开发过程中任何时候，更改到其它地方（多个项目公用一个类库文件夹，此时类库文件夹就可移动项目文件夹外面）,移动后只要重新修改主配置文件 vendorPath 的值即可。
	    配置文件详细内容见 common/config/config.js
		
		
        根据下面三条修改主配置文件对应的参数
			1.修改 GRN_LHH 的值
			2.修改 System.Config.vendorPath 的值
		
		为什么要像上面这样做呢？当文件里引用外部文件的位置发生改变不用打开每个页面修改，只要修改一个地方就可以解决。
		想一下如果我的所有静态都都写好了，要是多个项目共享一个LAM 类库（不需要项目里都再copy 一个LAM,当然你也可以这么做）。这时要移动LAM文件夹的位置,通常做法修改每个页面里引用LAM类库的src，
		如果一两个还可以，但要是n个文件呢，是不是我们都要每个文件都要打开修改一遍呢，当然有些IDE 有批量修改的功能（批量修改还会误操作）。如果我们只修改一个地方就解决这个问题，这样是不是比批量修改更快呢？而且避免误操作。
		所以上面的配置文件就是包含解决这个问题的方式。

		主配置文件文件里做的事情是：
			1.配置类库文件的路径信息及别的相关信息
			2.加载基础类文件
			3.加载加载器工具

(参考[LAM2](https://github.com/haohonglong/LAM2)
 五、文件加载器)
            
