!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror"),require("../dialog/dialog")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../dialog/dialog"],a):a(CodeMirror)}(function(a){"use strict";function b(a,b,c,d,e){a.openDialog?a.openDialog(b,e,{value:d,selectValueOnOpen:!0}):e(prompt(c,d))}function c(a,b){var c=Number(b);return/^[-+]/.test(b)?a.getCursor().line+c:c-1}var d='Jump to line: <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">(Use line:column or scroll% syntax)</span>';a.commands.jumpToLine=function(a){var e=a.getCursor();b(a,d,"Jump to line:",e.line+1+":"+e.ch,function(b){if(b){var d;if(d=/^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(b))a.setCursor(c(a,d[1]),Number(d[2]));else if(d=/^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(b)){var f=Math.round(a.lineCount()*Number(d[1])/100);/^[-+]/.test(d[1])&&(f=e.line+f+1),a.setCursor(f-1,e.ch)}else(d=/^\s*\:?\s*([\+\-]?\d+)\s*/.exec(b))&&a.setCursor(c(a,d[1]),e.ch)}})},a.keyMap.default["Alt-G"]="jumpToLine"});