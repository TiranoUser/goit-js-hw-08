!function(){function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},r=a.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in l){var a=l[e];delete l[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){l[e]=a},a.parcelRequired7c6=r);var n=r("eaxEB"),o=document.querySelector(".feedback-form");null!==localStorage.getItem("feedback-form-state")&&(o.elements.email.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,o.elements.message.value=JSON.parse(localStorage.getItem("feedback-form-state")).message);o.addEventListener("input",e(n)((function(e){e.preventDefault();var a=e.currentTarget.elements,t=a.email,l=a.message,r={email:t.value,message:l.value};localStorage.setItem("feedback-form-state",JSON.stringify(r))})),500),o.addEventListener("submit",(function(e){e.preventDefault();var a=e.currentTarget.elements,t=a.email,l=a.message;console.log("email: ".concat(t.value," message: ").concat(l.value)),localStorage.clear(),t.value="",l.value=""}))}();
//# sourceMappingURL=03-feedback.0f14b010.js.map
