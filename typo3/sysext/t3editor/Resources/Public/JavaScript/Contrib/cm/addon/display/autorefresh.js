!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";function b(b,d){function e(){b.display.wrapper.offsetHeight?(c(b,d),b.display.lastWrapHeight!=b.display.wrapper.clientHeight&&b.refresh()):d.timeout=setTimeout(e,d.delay)}d.timeout=setTimeout(e,d.delay),d.hurry=function(){clearTimeout(d.timeout),d.timeout=setTimeout(e,50)},a.on(window,"mouseup",d.hurry),a.on(window,"keyup",d.hurry)}function c(b,c){clearTimeout(c.timeout),a.off(window,"mouseup",c.hurry),a.off(window,"keyup",c.hurry)}a.defineOption("autoRefresh",!1,function(a,d){a.state.autoRefresh&&(c(a,a.state.autoRefresh),a.state.autoRefresh=null),d&&0==a.display.wrapper.offsetHeight&&b(a,a.state.autoRefresh={delay:d.delay||250})})});