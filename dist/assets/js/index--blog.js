!function(){var e={88:function(){const e=document.querySelector("body");console.log();const t=document.querySelector(".burgerMenu__animatedWords_wordToRight"),i=document.querySelector(".burgerMenu__animatedWords_wordToLeft"),n=document.querySelector(".header__burger"),o=document.querySelector(".burgerMenu"),r=document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItem"),s=document.querySelector(".burgerMenu__contentNavigation-rightSide"),a=document.querySelectorAll(".burgerMenu__contentNavigation-rightSideList"),c=document.querySelector(".header__closeBurgerMenuBtn");function d(e,t){e.classList.contains(t)&&e.classList.remove(t)}n.addEventListener("click",(()=>{e.classList.add("hidden"),t.classList.add("burgerMenu__animatedWords_wordToRight--animated"),i.classList.add("burgerMenu__animatedWords_wordToLeft--animated"),o.classList.remove("burgerMenu--closed"),o.classList.add("burgerMenu--visible")})),document.addEventListener("keyup",(n=>{const r=o.classList.contains("burgerMenu--visible");"Escape"===n.key&&r&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),o.classList.remove("burgerMenu--visible"),o.classList.add("burgerMenu--closed"))})),c.addEventListener("click",(n=>{o.classList.contains("burgerMenu--visible")&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),o.classList.remove("burgerMenu--visible"),o.classList.add("burgerMenu--closed"))})),r.forEach((e=>{const t=e.querySelector(".burgerMenu__contentNavigation-leftSideItemImage");/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.addEventListener("click",(()=>{document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItemImage").forEach((e=>{d(e,"burgerMenu__contentNavigation-leftSideItemImage--visible")})),t.classList.add("burgerMenu__contentNavigation-leftSideItemImage--visible")})):e.addEventListener("mouseenter",(()=>{document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItemImage").forEach((e=>{d(e,"burgerMenu__contentNavigation-leftSideItemImage--visible")})),t.classList.add("burgerMenu__contentNavigation-leftSideItemImage--visible")}))})),r.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),a.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),r.forEach((e=>{a.forEach((t=>{const i=t.dataset.burgerMenuLink;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.addEventListener("click",(e=>{const n=e.currentTarget.dataset.burgerMenuLink;s.classList.add("burgerMenu__contentNavigation-rightSide--visible"),d(t,"burgerMenu__contentNavigation-rightSideList--animated"),n===i&&t.classList.add("burgerMenu__contentNavigation-rightSideList--animated")})):e.addEventListener("mouseenter",(e=>{const n=e.target.dataset.burgerMenuLink;s.classList.add("burgerMenu__contentNavigation-rightSide--visible"),d(t,"burgerMenu__contentNavigation-rightSideList--animated"),n===i&&t.classList.add("burgerMenu__contentNavigation-rightSideList--animated")}))}))}))},362:function(){window.addEventListener("load",(function(){const e=document.querySelector(".progress-ring__circle"),t=document.querySelector(".progress-circle"),i=document.querySelector(".progress-circle-arrows"),n=document.querySelectorAll(".progress-circle-arrow"),o=Array.from(n),r=document.querySelector(".progress-circle-arrow--salad"),s=document.querySelector(".progress-circle-arrow--black");function a(){o.forEach((e=>{e.classList.contains("progress-circle-arrow--active")&&e.classList.remove("progress-circle-arrow--active"),e.classList.contains("progress-circle-arrow--not-active")&&e.classList.remove("progress-circle-arrow--not-active")}))}const c=e.r.baseVal.value,d=2*Math.PI*c,l=()=>window.scrollY||document.documentElement.scrollTop;function u(){const t=document.documentElement.scrollHeight-window.innerHeight;!function(t){const i=d-t/100*d;e.style.strokeDashoffset=i}(0+100*l()/t)}function f(){l()>=100&&t.classList.add("progress-circle--active"),l()<100&&t.classList.remove("progress-circle--active")}e.style.strokeDasharray=`${d} ${d}`,e.style.strokeDashoffset=`${d} ${d}`,u(),f(),window.addEventListener("scroll",(()=>{u(),f()})),Array.from(n).forEach((e=>{e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))})),i.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(()=>{const t=document.querySelector(".intro").offsetTop,i=document.querySelector(".footer").offsetTop,n=window.innerHeight+window.scrollY-20;n>=t&&(a(),e.style.fill="#1D1D1D",r.classList.add("progress-circle-arrow--active"),s.classList.add("progress-circle-arrow--not-active")),innerWidth<=1460&&n>=i&&(a(),e.style.fill="#fff",r.classList.add("progress-circle-arrow--not-active"),s.classList.add("progress-circle-arrow--active"))}))}))},497:function(){window.addEventListener("load",(()=>{!function(){const e=document.querySelector(".footer__blocks");window.innerWidth>1920&&e.classList.add("footer__blocks--between"),window.innerWidth<=2340&&e.classList.remove("footer__blocks--between"),window.addEventListener("resize",(()=>{const e=document.querySelector(".footer__blocks");window.innerWidth>1920&&e.classList.add("footer__blocks--between"),window.innerWidth<=2340&&e.classList.remove("footer__blocks--between")}))}()})),window.innerWidth>=1537&&(document.addEventListener("DOMContentLoaded",(()=>{let e=0;const t=document.querySelector(".footer"),i=document.querySelector(".container--footer"),n=document.querySelector(".container"),o=n.getBoundingClientRect().left,r=n.getBoundingClientRect().width;e<1&&(e++,i&&(i.style.marginLeft=`${o}px`,t.style.maxWidth=`${r+o+140}px`)),window.innerWidth>=1537&&i&&(i.style.marginLeft=`${o}px`,t.style.maxWidth=`${r+o+140}px`),window.innerWidth<=1536&&(t.style.width="100%",i&&(i.classList.add("container"),i.classList.add("container--footerSecond"),t.querySelector(".container").classList.remove("container--footer")))})),window.addEventListener("resize",(()=>{const e=document.querySelector(".footer"),t=document.querySelector(".container--footer"),i=document.querySelector(".container"),n=i.getBoundingClientRect().left,o=i.getBoundingClientRect().width;window.innerWidth>=1537&&(t.style.marginLeft=`${n}px`,e.style.maxWidth=`${o+n+140}px`),window.innerWidth<=1536&&(e.style.maxWidth="100%",t&&(t.classList.add("container"),t.classList.add("container--footerSecond"),t.classList.remove("container--footer")))}))),window.addEventListener("resize",(()=>{window.innerWidth>=1537&&(document.addEventListener("DOMContentLoaded",(()=>{let e=0;const t=document.querySelector(".footer"),i=document.querySelector(".container--footer");let n;try{n=document.querySelector(".container--footerSecond")}catch(e){}const o=document.querySelector(".container"),r=o.getBoundingClientRect().left,s=o.getBoundingClientRect().width;e<1&&(e++,i.style.marginLeft=`${r}px`,t.style.maxWidth=`${s+r+140}px`),window.innerWidth>=1537&&(i.style.marginLeft=`${r}px`,t.style.maxWidth=`${s+r+140}px`,n&&n.replace("container--footerSecond","container--footer")),window.innerWidth<=1536&&(t.style.width="100%",i.classList.add("container"),i.classList.add("container--footerSecond"),t.querySelector(".container").classList.remove("container--footer"))})),window.addEventListener("resize",(()=>{const e=document.querySelector(".footer"),t=document.querySelector(".container--footer");let i;try{i=document.querySelector(".container--footerSecond")}catch(e){}const n=document.querySelector(".container"),o=n.getBoundingClientRect().left,r=n.getBoundingClientRect().width;window.innerWidth>=1537&&(t.style.marginLeft=`${o}px`,e.style.maxWidth=`${r+o+140}px`,i&&i.replace("container--footerSecond","container--footer")),window.innerWidth<=1536&&(e.style.maxWidth="100%",t&&(t.classList.add("container"),t.classList.add("container--footerSecond"),t.classList.remove("container--footer"))),window.innerWidth<=1090&&(e.style.maxWidth="100%",t&&(t.style.marginLeft=null),t&&(t.classList.add("container"),t.classList.add("container--footerSecond"),t.classList.remove("container--footer")))})))}));const e=document.querySelector(".container"),t=e.getBoundingClientRect().left,i=getComputedStyle(e).paddingLeft,n=document.querySelector(".container--footer");window.innerWidth>=1091&&n&&(n.style.marginLeft=`${t+Number(i.substring(0,2))}px`),window.innerWidth<=1090&&(n&&(n.style.marginLeft=null),n&&(n.classList.add("container"),n.classList.add("container--footerSecond"),n.classList.remove("container--footer"))),window.addEventListener("resize",(()=>{const e=document.querySelector(".container"),t=e.getBoundingClientRect().left,i=getComputedStyle(e).paddingLeft,n=document.querySelector(".container--footer"),o=document.querySelector(".container--footerSecond");window.innerWidth>1090&&(o&&(o.classList.remove("container"),o.classList.add("container--footer"),o.classList.remove("container--footerSecond")),n&&(n.style.marginLeft=`${t+Number(i.substring(0,2))}px`),o&&(o.style.marginLeft=`${t+Number(i.substring(0,2))}px`)),window.innerWidth<=1090&&(n&&(n.style.marginLeft=null),n&&(n.classList.add("container"),n.classList.add("container--footerSecond"),n.classList.remove("container--footer")))}))},951:function(){function e(){const e=document.querySelector(".footer");if(window.innerWidth<=600){const e=document.querySelector(".footer__right-side-form");let t;try{t=e.querySelector(".footer__right-side-form-content")}catch{}if(t){const i=e.removeChild(t),n=document.createElement("li");n.className="footer__blocks-item footer__blocks-item--new-item-with-form",n.appendChild(i),document.querySelector(".footer__blocks-item--one").after(n)}e&&e.remove()}if(window.innerWidth>600){const t=document.querySelector(".footer__blocks");let i,n;try{i=t.querySelector(".footer__blocks-item--new-item-with-form"),n=i.querySelector(".footer__right-side-form-content")}catch{}if(n){const t=i.removeChild(n),o=document.createElement("div");o.className="footer__right-side-form",e.append(o),e.querySelector(".footer__right-side-form").appendChild(t),i.remove()}}}window.addEventListener("load",(()=>{e(),window.addEventListener("resize",(()=>{e()}))}))},957:function(){window.addEventListener("load",(function(){const e=document.querySelector(".footer__right-side-form-form-checkbox"),t=document.querySelector(".footer__right-side-form-form-checkbox-custom--active");e.addEventListener("click",(()=>{e.checked||(t.style.opacity=0),e.checked&&(t.style.opacity=1)}))}))},253:function(){function e(e){const t=window.scrollY;t>=1&&(e.classList.contains("header--main-transparent")&&e.classList.add("header--main-white"),e.classList.add("header--main--min-padding")),0===t&&(e.classList.contains("header--main-transparent")&&e.classList.remove("header--main-white"),e.classList.remove("header--main--min-padding"))}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".header--main").forEach((t=>{e(t)}))})),window.addEventListener("scroll",(()=>{document.querySelectorAll(".header--main").forEach((t=>{e(t)}))}))},370:function(){document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".header__nav-item-text").forEach((e=>{let t=e.innerText;e.innerHTML="";let i=document.createElement("div");i.classList.add("block");for(let e of t){let t=document.createElement("span");t.innerText=""===e.trim()?" ":e,t.classList.add("letter"),i.appendChild(t)}e.appendChild(i),e.appendChild(i.cloneNode(!0))}))})),window.addEventListener("load",(()=>{document.querySelectorAll(".header__nav-item").forEach((e=>{const t=e.getBoundingClientRect().width;e.style.width=`${t+10}px`}))}))},801:function(){window.innerWidth>=1100?window.onload=()=>{var e;(e=function(){var e=this;this.defaults={wrapperId:"butter",wrapperDamper:.7,cancelOnTouch:!1},this.validateOptions=function(t){for(var i in t)e.defaults.hasOwnProperty(i)&&Object.defineProperty(e.defaults,i,{value:Object.getOwnPropertyDescriptor(t,i).value})},this.wrapperDamper,this.wrapperId,this.cancelOnTouch,this.wrapper,this.wrapperOffset=0,this.animateId,this.resizing=!1,this.active=!1,this.wrapperHeight,this.bodyHeight}).prototype={init:function(e){e&&this.validateOptions(e),this.active=!0,this.resizing=!1,this.wrapperDamper=this.defaults.wrapperDamper,this.wrapperId=this.defaults.wrapperId,this.cancelOnTouch=this.defaults.cancelOnTouch,this.wrapper=document.getElementById(this.wrapperId),this.wrapper.style.position="fixed",this.wrapper.style.width="100%",this.wrapperHeight=this.wrapper.clientHeight,document.body.style.height=this.wrapperHeight+"px",window.addEventListener("resize",this.resize.bind(this)),this.cancelOnTouch&&window.addEventListener("touchstart",this.cancel.bind(this)),this.wrapperOffset=0,this.animateId=window.requestAnimationFrame(this.animate.bind(this))},wrapperUpdate:function(){var e=null!=document.scrollingElement?document.scrollingElement.scrollTop:document.documentElement.scrollTop||0;this.wrapperOffset+=(e-this.wrapperOffset)*this.wrapperDamper,this.wrapper.style.transform="translate3d(0,"+-this.wrapperOffset.toFixed(2)+"px, 0)"},checkResize:function(){this.wrapperHeight!=this.wrapper.clientHeight&&this.resize()},resize:function(){var e=this;e.resizing||(e.resizing=!0,window.cancelAnimationFrame(e.animateId),window.setTimeout((function(){e.wrapperHeight=e.wrapper.clientHeight,parseInt(document.body.style.height)!=parseInt(e.wrapperHeight)&&(document.body.style.height=e.wrapperHeight+"px"),e.animateId=window.requestAnimationFrame(e.animate.bind(e)),e.resizing=!1}),150))},animate:function(){this.checkResize(),this.wrapperUpdate(),this.animateId=window.requestAnimationFrame(this.animate.bind(this))},cancel:function(){this.active&&(window.cancelAnimationFrame(this.animateId),window.removeEventListener("resize",this.resize),window.removeEventListener("touchstart",this.cancel),this.wrapper.removeAttribute("style"),document.body.removeAttribute("style"),this.active=!1,this.wrapper="",this.wrapperOffset=0,this.resizing=!0,this.animateId="")}},this.butter=(new e).init()}:document.querySelector("#butter").style.position="absolute"},802:function(){const e=document.querySelector("body"),t=document.querySelector(".loader"),i=document.querySelector(".loader-first"),n=document.querySelector(".loader-second");window.addEventListener("load",(()=>{e.classList.remove("hidden"),t.classList.add("loader--hide"),i.classList.add("loader-first--active"),n.classList.add("loader-second--active"),t.addEventListener("animationstart",(()=>{setTimeout((()=>{t.classList.add("loader--none")}),1100)}),{once:!0,useCapture:!1})}))}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,i),r.exports}!function(){"use strict";i(802),i(362),i(370),i(253),i(88),document.addEventListener("DOMContentLoaded",(()=>{!function(e,t,i,n,o,r,s,a,c=null,d,[...l]=[],u,f){const m=u,g="bigWhiteFirst",h="blackArrow",w="whiteArrow";let p,L,v,_,y,b,S,q;switch(!0!==void 0?(p=document.querySelector(e),L=document.querySelector(t),v=document.querySelector(i)):(p=e,L=t,v=i),n){case 0:_=(e,t)=>e.pageX+t;break;case 1:_=(e,t)=>e.pageX-p.offsetLeft+t;break;case 2:_=(e,t)=>e.pageX-p.offsetLeft-p.offsetParent.offsetLeft+t;break;case 3:_=(e,t)=>e.pageX-p.offsetLeft-p.offsetParent.offsetLeft-p.offsetParent.offsetParent.offsetLeft+t}switch(o){case 0:y=(e,t)=>e.pageY+t;break;case 1:y=(e,t)=>e.pageY-p.offsetTop+t;break;case 2:y=(e,t)=>e.pageY-p.offsetTop-p.offsetParent.offsetTop+t;break;case 22:y=(e,t)=>e.pageY-p.offsetTop-p.offsetParent.offsetParent.offsetTop+t;break;case 3:y=(e,t)=>e.pageY-p.offsetTop-p.offsetParent.offsetTop-p.offsetParent.offsetParent.offsetTop+t;break;case 33:y=(e,t)=>e.pageY-p.offsetTop-p.offsetParent.offsetTop-p.offsetParent.offsetParent.offsetTop-window.scrollY+t;break;case 4:y=(e,t)=>e.pageY-p.offsetTop-p.offsetParent.offsetTop-p.offsetParent.offsetParent.offsetTop-p.offsetParent.offsetParent.offsetParent.offsetTop+t}if(d&&(b=p.querySelector(".fillingButton__content span")),u===g){let e,t;0!==l.length?([e,t]=[...l],S=new Image(e,t),S.src="assets/images/utils/arrowForFillingButton--black.svg",q=new Image(e,t),q.src="assets/images/utils/arrowForFillingButton--white.svg"):(S=new Image(20,20),S.src="assets/images/utils/arrowForFillingButton--black.svg",q=new Image(20,20),q.src="assets/images/utils/arrowForFillingButton--white.svg"),u===g&&(E=S,q.classList.add("fillingButton__image--white-visible"),E.classList.add("fillingButton__image--black-hidden")),q.classList.add("fillingButton__image--big","fillingButton__image"),S.classList.add("fillingButton__image--big","fillingButton__image"),p.querySelector(".fillingButton__p").classList.add("fillingButton__p--big");const i=p.querySelector(".fillingButton__imagesWrapper");e&&t?(i.style.width=`${e}px`,i.style.height=`${t}px`):(i.style.width="20px",i.style.height="20px"),i.appendChild(S),i.appendChild(q)}var E;if(a&&!m){let e;if(c===w&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--white.svg"),c===h&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--black.svg"),c!==h&&c!==w&&null!==c){const[t,i]=[...l];e=new Image(t,i),e.src=c}e.classList.add("fillingButton__image"),p.querySelector(".fillingButton__content").appendChild(e)}L.addEventListener("mousemove",(e=>{u===g&&function(e,t){e.classList.remove("fillingButton__image--white-visible"),t.classList.remove("fillingButton__image--black-hidden"),e.classList.add("fillingButton__image--white-hidden"),t.classList.add("fillingButton__image--black-visible")}(q,S),v.style.setProperty("--x",`${_(e,r)}px`),v.style.setProperty("--y",`${y(e,s)}px`),v.classList.add("fillingButton__circle--active"),d&&b.classList.add("fillingButton__p--black")})),L.addEventListener("mouseleave",(()=>{u===g&&function(e,t){e.classList.remove("fillingButton__image--white-hidden"),t.classList.remove("fillingButton__image--black-visible"),e.classList.add("fillingButton__image--white-visible"),t.classList.add("fillingButton__image--black-hidden")}(q,S),v.classList.remove("fillingButton__circle--active"),d&&b.classList.remove("fillingButton__p--black")}))}(".fillingButton--burgerMenuAddresses",".fillingButton__svg-circle--burgerMenuAddresses",".fillingButton__circle--burgerMenuAddresses",1,1,0,0,!0,"whiteArrow",!0)})),i(957),i(497),i(951),i(801)}()}();