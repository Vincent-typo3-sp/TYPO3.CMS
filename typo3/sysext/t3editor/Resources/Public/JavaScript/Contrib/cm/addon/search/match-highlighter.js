!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror"),require("./matchesonscrollbar")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./matchesonscrollbar"],a):a(CodeMirror)}(function(a){"use strict";function b(a){this.options={};for(var b in l)this.options[b]=(a&&a.hasOwnProperty(b)?a:l)[b];this.overlay=this.timeout=null,this.matchesonscroll=null,this.active=!1}function c(a){var b=a.state.matchHighlighter;(b.active||a.hasFocus())&&e(a,b)}function d(a){var b=a.state.matchHighlighter;b.active||(b.active=!0,e(a,b))}function e(a,b){clearTimeout(b.timeout),b.timeout=setTimeout(function(){h(a)},b.options.delay)}function f(a,b,c,d){var e=a.state.matchHighlighter;if(a.addOverlay(e.overlay=k(b,c,d)),e.options.annotateScrollbar&&a.showMatchesOnScrollbar){var f=c?new RegExp("\\b"+b+"\\b"):b;e.matchesonscroll=a.showMatchesOnScrollbar(f,!1,{className:"CodeMirror-selection-highlight-scrollbar"})}}function g(a){var b=a.state.matchHighlighter;b.overlay&&(a.removeOverlay(b.overlay),b.overlay=null,b.matchesonscroll&&(b.matchesonscroll.clear(),b.matchesonscroll=null))}function h(a){a.operation(function(){var b=a.state.matchHighlighter;if(g(a),!a.somethingSelected()&&b.options.showToken){for(var c=b.options.showToken===!0?/[\w$]/:b.options.showToken,d=a.getCursor(),e=a.getLine(d.line),h=d.ch,j=h;h&&c.test(e.charAt(h-1));)--h;for(;j<e.length&&c.test(e.charAt(j));)++j;return void(h<j&&f(a,e.slice(h,j),c,b.options.style))}var k=a.getCursor("from"),l=a.getCursor("to");if(k.line==l.line&&(!b.options.wordsOnly||i(a,k,l))){var m=a.getRange(k,l);b.options.trim&&(m=m.replace(/^\s+|\s+$/g,"")),m.length>=b.options.minChars&&f(a,m,!1,b.options.style)}})}function i(a,b,c){var d=a.getRange(b,c);if(null!==d.match(/^\w+$/)){if(b.ch>0){var e={line:b.line,ch:b.ch-1},f=a.getRange(e,b);if(null===f.match(/\W/))return!1}if(c.ch<a.getLine(b.line).length){var e={line:c.line,ch:c.ch+1},f=a.getRange(c,e);if(null===f.match(/\W/))return!1}return!0}return!1}function j(a,b){return!(a.start&&b.test(a.string.charAt(a.start-1))||a.pos!=a.string.length&&b.test(a.string.charAt(a.pos)))}function k(a,b,c){return{token:function(d){return!d.match(a)||b&&!j(d,b)?(d.next(),void(d.skipTo(a.charAt(0))||d.skipToEnd())):c}}}var l={style:"matchhighlight",minChars:2,delay:100,wordsOnly:!1,annotateScrollbar:!1,showToken:!1,trim:!0};a.defineOption("highlightSelectionMatches",!1,function(e,f,i){if(i&&i!=a.Init&&(g(e),clearTimeout(e.state.matchHighlighter.timeout),e.state.matchHighlighter=null,e.off("cursorActivity",c),e.off("focus",d)),f){var j=e.state.matchHighlighter=new b(f);e.hasFocus()?(j.active=!0,h(e)):e.on("focus",d),e.on("cursorActivity",c)}})});