System.register("chunks:///_virtual/main",["./test.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/test.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,o,r;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,r=e.Component}],execute:function(){var c;n._RF.push({},"52247NwH+9ISKtvzYRKElkq","test",void 0);var d=o.ccclass;o.property,e("test",d("test")(c=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var o=n.prototype;return o.__preload=function(){window.parent.document.getElementById("gameFrame")&&(window.parent.document.getElementById("gameFrame").style.opacity="1"),setTimeout((function(){window.parent.document.getElementById("splashScreen")&&window.parent.document.getElementById("splashScreen").remove(),window.parent.document.getElementById("logo")&&window.parent.document.getElementById("logo").remove(),window.parent.document.getElementById("PoweredBy")&&window.parent.document.getElementById("PoweredBy").remove()}),200)},o.start=function(){},o.update=function(e){},n}(r))||c);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});