!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){$((function(){$("#tabs").tabs()}));var n=1;function r(e){var t,r=document.getElementsByClassName("item");for(e>r.length&&(n=1),e<1&&(n=r.length),t=0;t<r.length;t++)r[t].style.display="none";r[n-1].style.display="block"}r(n),document.getElementById("nextArt").addEventListener("click",(function(){r(n+=1)})),document.getElementById("previousArt").addEventListener("click",(function(){r(n-=1)})),document.getElementById("nextCom").addEventListener("click",(function(){l(o+=1)})),document.getElementById("previousCom").addEventListener("click",(function(){l(o-=1)}));var o=1;function l(e){var t,n=document.getElementsByClassName("item-com");for(e>n.length&&(o=1),e<1&&(o=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[o-1].style.display="block"}l(o)}]);