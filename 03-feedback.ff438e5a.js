var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var r,i,o,a,f,u,l=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,f=setTimeout(h,t),c?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-l>=o}function h(){var e=m();if(O(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-u);return v?d(n,o-(e-l)):n}(e))}function j(e){return f=void 0,b&&r?y(e):(r=i=void 0,a)}function w(){var e=m(),n=O(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(v)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,o=(v="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=i=f=void 0},w.flush=function(){return void 0===f?a:j(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form");let y=document.querySelector("input"),S=document.querySelector("textarea");b.addEventListener("input",t((()=>{let e={email:y.value.trim(),message:S.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),function(){let e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;y.value=e.email,S.value=e.message}(),b.addEventListener("submit",(e=>{e.preventDefault();let t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&""!==t.email&&""!==t.message?(!function(){let e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;y.value=e.email,S.value=e.message,console.log(e)}(),localStorage.removeItem("feedback-form-state"),e.target.reset()):alert("Please fill the fields")}));
//# sourceMappingURL=03-feedback.ff438e5a.js.map