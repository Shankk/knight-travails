(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-family: 'Orbitron', sans-serif;\n    \n}\n\nbody {\n    margin: 0px;\n    padding: 0px;\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n    flex-flow: column nowrap;\n}\n\n.header {\n    color: white;\n    background-color: darkslategrey;\n    padding: 20px;\n}\n\n.main {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-flow: row nowrap;\n}\n\n.sidebar {\n    width: 20%;\n    height: 100%;\n    background-color: cyan;\n    padding-top: 5%;\n    gap: 5%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.outputBox {\n    color: white;\n    font-size: 18px;\n    background-color: darkcyan;\n    border-radius: 16px;\n    padding: 5%;\n    min-width: 200px;\n    min-height: 300px;\n    width: 80%;\n    height: 70%;\n    white-space: pre;\n}\n\n#content {\n    width: 80%;\n    height: 100%;\n    background-color: darkcyan;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid {\n    width: 70%;\n    height: 100%;\n    padding: 0px;\n    border-style: solid;\n    border-width: 10px;\n    display: flex;\n}\n.column {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n.rowWhite {\n    min-width: 75px;\n    min-height: 75px;\n    background: white;\n    text-align: center;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n}\n\n.rowGrey {\n    background: grey;\n    text-align: center;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n}\n\nbutton {\n    all: unset;\n    text-align: center;\n    min-width: 200px;\n    min-height: 70px;\n    font-size: 20px;\n    color: white;\n    background-color: darkcyan;\n    border-radius: 16px;\n}\n\nbutton:hover {\n    transform: scale(1.05);\n}\n\nbutton:active {\n    transform: scale(0.95);\n}\n\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(28),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=t.p+"8df2b68ab1d5c9bcf627.png",g=document.querySelector(".sidebar"),v=document.createElement("button"),y=document.createElement("button"),x=document.createElement("div");g.appendChild(v),g.appendChild(y),g.appendChild(x),v.className="submitPosition",v.textContent="Submit Position",y.className="clearBoard",y.textContent="Clear Board",x.className="outputBox";let w=[4,4],b=[6,6];const E=[[-2,-1],[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2]];class C{constructor(n,e,t,r){this.row=n,this.col=e,this.distFromStart=t,this.predecessor=r}getPositionString(){return`${this.row}, ${this.col}`}}const S=(n,e)=>{const t=[];for(const r of E){const[o,i]=r,a=n+o,c=e+i;0<a&&a<=8&&0<c&&c<=8&&t.push([a,c])}return t};function k(n){if(null===n)return;let e=document.createElement("img");e.src=m,e.width=e.height=75,document.getElementById(n).textContent=n,document.getElementById(n).appendChild(e)}function I(n){let e=document.createElement("grid");e.className="grid";for(let t=0;t<n;t++){let r=document.createElement("div");r.className="column";for(let e=0;e<n;e++){let n=document.createElement("div");n.className="row",n.id=e+1+"-"+(t+1),n.className=t%2==0?e%2==0?"rowWhite":"rowGrey":e%2==0?"rowGrey":"rowWhite",n.addEventListener("click",(n=>{var e=n.target.id;""!=e&&(console.log("left-click: "+e+" sliced: "+e.slice(0,1)+" "+e.slice(2,3)),w[0]=e.slice(0,1),w[1]=e.slice(2,3),k(w[0]+"-"+w[1]))})),n.addEventListener("contextmenu",(n=>{n.preventDefault();var e=n.target.id;""!=e&&(console.log("right-click: "+e+" sliced: "+e.slice(0,1)+" "+e.slice(2,3)),b[0]=e.slice(0,1),b[1]=e.slice(2,3),k(b[0]+"-"+b[1]))})),n.textContent=e+1+"-"+(t+1),r.appendChild(n)}e.appendChild(r)}document.getElementById("content").textContent=" ",document.getElementById("content").appendChild(e)}v.addEventListener("click",(()=>{I(8);let n=function(n,e,t,r){const o=[],i=new C(n,e,0);o.push(i);const a=new Set;for(;o.length>0;){const n=o.shift(),{row:e,col:i,distFromStart:c}=n;if(e===t&&i===r)return n;a.add(n.getPositionString());for(const t of S(e,i)){const[e,r]=t,i=new C(e,r,c+1,n);a.has(i.getPositionString())||o.push(i)}}return"Out of Bounds"}(parseInt(w[0]),parseInt(w[1]),parseInt(b[0]),parseInt(b[1]));console.log(n),function(n){const e=[];for(;null!=n;)e.push([n.row,n.col]),n=n.predecessor;console.log("Hooray You Did it! Here are your moves!");var t="Hooray You Did it! \nHere are your moves!\n";for(let n=e.length-1;n>=0;n--)console.log(e[n]+" => "),t=t+e[n]+(n>0?" =>\n":""),x.textContent=t,k(e[n][0]+"-"+e[n][1])}(n)})),y.addEventListener("click",(()=>{I(8)})),I(8)})()})();