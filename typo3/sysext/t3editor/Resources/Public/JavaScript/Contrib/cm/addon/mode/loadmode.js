!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror"),"cjs"):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],function(b){a(b,"amd")}):a(CodeMirror,"plain")}(function(a,b){function c(a,b){var c=b;return function(){0==--c&&a()}}function d(b,d){var e=a.modes[b].dependencies;if(!e)return d();for(var f=[],g=0;g<e.length;++g)a.modes.hasOwnProperty(e[g])||f.push(e[g]);if(!f.length)return d();for(var h=c(d,f.length),g=0;g<f.length;++g)a.requireMode(f[g],h)}a.modeURL||(a.modeURL="../mode/%N/%N.js");var e={};a.requireMode=function(c,f){if("string"!=typeof c&&(c=c.name),a.modes.hasOwnProperty(c))return d(c,f);if(e.hasOwnProperty(c))return e[c].push(f);var g=a.modeURL.replace(/%N/g,c);if("plain"==b){var h=document.createElement("script");h.src=g;var i=document.getElementsByTagName("script")[0],j=e[c]=[f];a.on(h,"load",function(){d(c,function(){for(var a=0;a<j.length;++a)j[a]()})}),i.parentNode.insertBefore(h,i)}else"cjs"==b?(require(g),f()):"amd"==b&&requirejs([g],f)},a.autoLoadMode=function(b,c){a.modes.hasOwnProperty(c)||a.requireMode(c,function(){b.setOption("mode",b.getOption("mode"))})}});