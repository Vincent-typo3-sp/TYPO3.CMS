!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";function b(a){return new RegExp("^(("+a.join(")|(")+"))\\b")}function c(a){return a.scopes[a.scopes.length-1]}var d=b(["and","or","not","is"]),e=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],f=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];a.registerHelper("hintWords","python",e.concat(f)),a.defineMode("python",function(g,h){function i(a,b){if(a.sol()&&(b.indent=a.indentation()),a.sol()&&"py"==c(b).type){var d=c(b).offset;if(a.eatSpace()){var e=a.indentation();return e>d?l(b):e<d&&n(a,b)&&"#"!=a.peek()&&(b.errorToken=!0),null}var f=j(a,b);return d>0&&n(a,b)&&(f+=" "+p),f}return j(a,b)}function j(a,b){if(a.eatSpace())return null;var c=a.peek();if("#"==c)return a.skipToEnd(),"comment";if(a.match(/^[0-9\.]/,!1)){var e=!1;if(a.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(e=!0),a.match(/^[\d_]+\.\d*/)&&(e=!0),a.match(/^\.\d+/)&&(e=!0),e)return a.eat(/J/i),"number";var f=!1;if(a.match(/^0x[0-9a-f_]+/i)&&(f=!0),a.match(/^0b[01_]+/i)&&(f=!0),a.match(/^0o[0-7_]+/i)&&(f=!0),a.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(a.eat(/J/i),f=!0),a.match(/^0(?![\dx])/i)&&(f=!0),f)return a.eat(/L/i),"number"}if(a.match(y))return b.tokenize=k(a.current()),b.tokenize(a,b);for(var g=0;g<r.length;g++)if(a.match(r[g]))return"operator";return a.match(q)?"punctuation":"."==b.lastToken&&a.match(x)?"property":a.match(z)||a.match(d)?"keyword":a.match(A)?"builtin":a.match(/^(self|cls)\b/)?"variable-2":a.match(x)?"def"==b.lastToken||"class"==b.lastToken?"def":"variable":(a.next(),p)}function k(a){function b(b,e){for(;!b.eol();)if(b.eatWhile(/[^'"\\]/),b.eat("\\")){if(b.next(),c&&b.eol())return d}else{if(b.match(a))return e.tokenize=i,d;b.eat(/['"]/)}if(c){if(h.singleLineStringErrors)return p;e.tokenize=i}return d}for(;"rubf".indexOf(a.charAt(0).toLowerCase())>=0;)a=a.substr(1);var c=1==a.length,d="string";return b.isString=!0,b}function l(a){for(;"py"!=c(a).type;)a.scopes.pop();a.scopes.push({offset:c(a).offset+g.indentUnit,type:"py",align:null})}function m(a,b,c){var d=a.match(/^([\s\[\{\(]|#.*)*$/,!1)?null:a.column()+1;b.scopes.push({offset:b.indent+t,type:c,align:d})}function n(a,b){for(var d=a.indentation();b.scopes.length>1&&c(b).offset>d;){if("py"!=c(b).type)return!0;b.scopes.pop()}return c(b).offset!=d}function o(a,b){a.sol()&&(b.beginningOfLine=!0);var d=b.tokenize(a,b),e=a.current();if(b.beginningOfLine&&"@"==e)return a.match(x,!1)?"meta":w?"operator":p;/\S/.test(e)&&(b.beginningOfLine=!1),"variable"!=d&&"builtin"!=d||"meta"!=b.lastToken||(d="meta"),"pass"!=e&&"return"!=e||(b.dedent+=1),"lambda"==e&&(b.lambda=!0),":"!=e||b.lambda||"py"!=c(b).type||l(b);var f=1==e.length?"[({".indexOf(e):-1;if(f!=-1&&m(a,b,"])}".slice(f,f+1)),f="])}".indexOf(e),f!=-1){if(c(b).type!=e)return p;b.indent=b.scopes.pop().offset-t}return b.dedent>0&&a.eol()&&"py"==c(b).type&&(b.scopes.length>1&&b.scopes.pop(),b.dedent-=1),d}for(var p="error",q=h.delimiters||h.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.]/,r=[h.singleOperators,h.doubleOperators,h.doubleDelimiters,h.tripleDelimiters,h.operators||/^([-+*\/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@])/],s=0;s<r.length;s++)r[s]||r.splice(s--,1);var t=h.hangingIndent||g.indentUnit,u=e,v=f;void 0!=h.extra_keywords&&(u=u.concat(h.extra_keywords)),void 0!=h.extra_builtins&&(v=v.concat(h.extra_builtins));var w=!(h.version&&Number(h.version)<3);if(w){var x=h.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;u=u.concat(["nonlocal","False","True","None","async","await"]),v=v.concat(["ascii","bytes","exec","print"]);var y=new RegExp("^(([rbuf]|(br))?('{3}|\"{3}|['\"]))","i")}else{var x=h.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;u=u.concat(["exec","print"]),v=v.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"]);var y=new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var z=b(u),A=b(v),B={startState:function(a){return{tokenize:i,scopes:[{offset:a||0,type:"py",align:null}],indent:a||0,lastToken:null,lambda:!1,dedent:0}},token:function(a,b){var c=b.errorToken;c&&(b.errorToken=!1);var d=o(a,b);return d&&"comment"!=d&&(b.lastToken="keyword"==d||"punctuation"==d?a.current():d),"punctuation"==d&&(d=null),a.eol()&&b.lambda&&(b.lambda=!1),c?d+" "+p:d},indent:function(b,d){if(b.tokenize!=i)return b.tokenize.isString?a.Pass:0;var e=c(b),f=e.type==d.charAt(0);return null!=e.align?e.align-(f?1:0):e.offset-(f?t:0)},electricInput:/^\s*[\}\]\)]$/,closeBrackets:{triples:"'\""},lineComment:"#",fold:"indent"};return B}),a.defineMIME("text/x-python","python");var g=function(a){return a.split(" ")};a.defineMIME("text/x-cython",{name:"python",extra_keywords:g("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})});