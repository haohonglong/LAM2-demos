/**
 * 创建人：lhh
 * 创建日期:2015-3-20
 * 修改日期:2018-11-25
 * 功能：配置文件
 * 说明 : 这个文件要copy到项目里面可以修改 System.Config里的属性 和 GRN_LHH; 的值；
 *
 * note :
 *
 *
 *
 */

 (function (window, undefined) {
    'use strict';
    var ROOT = "", _ROOT_ = "", namespace = "";
    //check
    if (window.GRN_LHH && window[window.GRN_LHH] != undefined) {
        return;
    } else {
        window.GRN_LHH = 'System';
    }
    namespace = window.GRN_LHH;
    //js获取项目根路径，如： http://localhost:8083/uimcardprj
    function getRootPath() {
        //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
        var curWwwPath = window.document.location.href;
        //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        //获取主机地址，如： http://localhost:8083
        var localhostPaht = curWwwPath.substring(0, pos);
        //获取带"/"的项目名，如：/uimcardprj
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
        return (localhostPaht + projectName);
    }

    if (!window._ROOT_) {
        _ROOT_ = window._ROOT_ = getRootPath();
    } else {
        _ROOT_ = window._ROOT_;
    }

    window[namespace] = {};
    window[namespace].configure = function (System) {
        'use strict';

        return {
            'LAMPATH': _ROOT_ + '/LAM2/lamborghiniJS',
            'LAM_DEBUG': true,
            'LAM_ENV': 'dev',
            'Public': function (System) {

                ROOT = _ROOT_ + '/documentation';
                const SRC = ROOT + '/src',
                    ASSETS = ROOT + '/src/assets',
                    VIEWS = ROOT + '/views',
                    CONF = ROOT + '/common/config';

                return {
                      'ROOT': ROOT
                    , 'BACKEND': ROOT
                    , 'COMMON': _ROOT_ + '/common'
                    , 'PLUGINS': _ROOT_ + '/common/plugins'
                    , 'MYCOMMON': ROOT + '/common'
                    , CONF
                    , SRC
                    , 'CSS': ROOT + '/css'
                    , 'SCRIPT': ROOT + '/js'
                    , 'IMAGE': ROOT + '/images'
                    , 'DATA': ROOT + '/database'
                    , 'CONTROLLERS': ROOT + '/controllers'
                    , 'MODELS': ROOT + '/models'
                    , 'LAYOUTS': VIEWS + '/layouts'
                    , 'API': ROOT + '/api'
                    , 'COMPONENTS': ROOT + '/components'
                    , VIEWS
                    , 'ERROR_404': VIEWS + '/_404.html'
                    , 'INDEX': 'index.html?r='
                    , 'SERVER': 'http://yaf.local'
                    , 'CONFIGURATION_PATH': CONF + '/config.js'
                    , 'BASE64ENCODE': true
                    , 'LAMPATH': System.classPath

                };
            },
            'components': {
                'excluded': [],
                'moduleId': 'm',
                'routerId': 'r',
                'defaultRoute': 'introduce/index',
                'routeRules': {},
                'routeAutoRun': true,
                't': function (System) {
                    // var id =0;
                    // System.Moudle = System.createDict();
                    // System.Object.g_key_id=function(){
                    //     return System.timestamp()+Math.round(Math.random()*System.random)+'_'+id++;
                    // };
                    // System.listen(function(){
                    //     if(System.isFunction(System.import)){
                    //         return true;
                    //     }
                    // },1);
                    // return System.md5(System.timestamp());
                },
                'runtime': function (System) {
                    System.COOKIE = new System.Storage('guest', localStorage);

                }

            },
            'configure_cache': {
                'type': sessionStorage,
                'expires': 0
            },
            'hashLength': 32,
            //定义模版标签
            'templat': {
                'custom_attr': '[data-var=tpl]',
                'delimiters': ['{#', '#}']
            },
            'files': [],
            'XHR': {//配置加载xhr 的公共参数
                'type': 'GET'
                , 'async': false
                , 'cache': false
                , 'beforeSend': function () { }
            },
            //配置基础文件
            'autoLoadFile': function (System) {
                var PLUGINS = System.PLUGINS;
                return {
                    files: [
                        { 'name': 'Router', 'path': System.classPath + '/base/Router.class.js' }
                    ]
                };
            },

            //标签的渲染方式
            'render': {
                //加载文件的后缀名称
                'suffixs': ['.js', '.css'],
                //输出标签的方式 ()
                'fragment': null,
                //true : document.createElement(); false :document.write();
                'create': false,
                //加载后是否要移除添加过的script 节点
                'remove': false,
                'append': 'after',
                'default': {
                    'script': {
                        'Attribute': {
                            'type': 'text/javascript',
                            //'async':'async',
                            //'defer':'defer',
                            'charset': 'utf-8',
                            'sn': System.timestamp()
                        }
                    },
                    'css': {
                        'Attribute': {
                            'type': 'text/css',
                            'rel': 'stylesheet',
                            'sn': System.timestamp()
                        }
                    }
                },
                'H': function () {
                    return {
                        'html': document.getElementsByTagName('html')[0],
                        'head': document.getElementsByTagName('head')[0],
                        'body': document.getElementsByTagName('body')[0],
                        'meta': document.getElementsByTagName('meta')[0],
                        'script': document.getElementsByTagName('script')[0],
                        'link': document.getElementsByTagName('link')[0],
                        'div': document.getElementsByTagName('div')[0]
                    };
                },
                'bulid': function (tag, D) {
                    tag = tag || "script";
                    var node;
                    var k;
                    var fragment;
                    node = document.createElement(tag);
                    for (k in D)
                        node[k] = D[k];

                    if (!Config.render.fragment) {
                        Config.render.fragment = document.createDocumentFragment();
                    }
                    fragment = Config.render.fragment;

                    Config.render.fragment.appendChild(node);

                    return fragment;
                },
                /**
                 * 用createElement 创建标签并且设为异步
                 */
                'use': function () {
                    this.create = true;
                    this.default.script.Attribute.async = 'async';
                    this.default.script.Attribute.defer = 'defer';
                },
                /**
                 * 用document.write() 创建标签并且设为非异步
                 */
                'unuse': function () {
                    this.create = false;
                    this.default.script.Attribute.async = 'false';
                    this.default.script.Attribute.defer = '';
                }
            },
            'params': {},
            'getClassPath': function () {
                return this.LAMPATH;
            }
        };
    };

})(this);