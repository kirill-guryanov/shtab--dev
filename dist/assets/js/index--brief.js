!function(){var e={772:function(){window.addEventListener("load",(function(){const e=document.querySelectorAll(".forms__form-radio-block"),t=Array.from(e);document.addEventListener("DOMContentLoaded",(()=>{t.forEach((e=>{e.querySelector("input").checked&&e.classList.add("forms__form-radio-block--active")}))})),t.forEach((e=>{e.addEventListener("click",(()=>{let i=e.querySelector("input");i.checked||(t.forEach((e=>{e.querySelector("input").checked=!1,e.classList.remove("forms__form-radio-block--active")})),i.checked=!0,e.classList.add("forms__form-radio-block--active"))}))}))}))},771:function(){window.addEventListener("load",(()=>{const e=document.querySelector(".fillingButton--brief-intro"),t=document.querySelector(".forms").offsetTop;e.addEventListener("click",(()=>{!function(e,t){const i=t-document.querySelector(".header--main").getBoundingClientRect().height;window.scroll({left:0,top:i,behavior:"smooth"})}(0,t)}))}))},88:function(){const e=document.querySelector("body");console.log();const t=document.querySelector(".burgerMenu__animatedWords_wordToRight"),i=document.querySelector(".burgerMenu__animatedWords_wordToLeft"),n=document.querySelector(".header__burger"),r=document.querySelector(".burgerMenu"),o=document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItem"),s=document.querySelector(".burgerMenu__contentNavigation-rightSide"),a=document.querySelectorAll(".burgerMenu__contentNavigation-rightSideList"),c=document.querySelector(".header__closeBurgerMenuBtn");function l(e,t){e.classList.contains(t)&&e.classList.remove(t)}n.addEventListener("click",(()=>{e.classList.add("hidden"),t.classList.add("burgerMenu__animatedWords_wordToRight--animated"),i.classList.add("burgerMenu__animatedWords_wordToLeft--animated"),r.classList.remove("burgerMenu--closed"),r.classList.add("burgerMenu--visible")})),document.addEventListener("keyup",(n=>{const o=r.classList.contains("burgerMenu--visible");"Escape"===n.key&&o&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),r.classList.remove("burgerMenu--visible"),r.classList.add("burgerMenu--closed"))})),c.addEventListener("click",(n=>{r.classList.contains("burgerMenu--visible")&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),r.classList.remove("burgerMenu--visible"),r.classList.add("burgerMenu--closed"))})),o.forEach((e=>{const t=e.querySelector(".burgerMenu__contentNavigation-leftSideItemImage");/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.addEventListener("click",(()=>{document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItemImage").forEach((e=>{l(e,"burgerMenu__contentNavigation-leftSideItemImage--visible")})),t.classList.add("burgerMenu__contentNavigation-leftSideItemImage--visible")})):e.addEventListener("mouseenter",(()=>{document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItemImage").forEach((e=>{l(e,"burgerMenu__contentNavigation-leftSideItemImage--visible")})),t.classList.add("burgerMenu__contentNavigation-leftSideItemImage--visible")}))})),o.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),a.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),o.forEach((e=>{a.forEach((t=>{const i=t.dataset.burgerMenuLink;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.addEventListener("click",(e=>{const n=e.currentTarget.dataset.burgerMenuLink;s.classList.add("burgerMenu__contentNavigation-rightSide--visible"),l(t,"burgerMenu__contentNavigation-rightSideList--animated"),n===i&&t.classList.add("burgerMenu__contentNavigation-rightSideList--animated")})):e.addEventListener("mouseenter",(e=>{const n=e.target.dataset.burgerMenuLink;s.classList.add("burgerMenu__contentNavigation-rightSide--visible"),l(t,"burgerMenu__contentNavigation-rightSideList--animated"),n===i&&t.classList.add("burgerMenu__contentNavigation-rightSideList--animated")}))}))}))},923:function(){window.addEventListener("load",(function(){const e=document.querySelector(".progress-ring__circle"),t=document.querySelector(".progress-circle"),i=document.querySelector(".progress-circle-arrows"),n=document.querySelectorAll(".progress-circle-arrow"),r=(Array.from(n),document.querySelector(".progress-circle-arrow--salad")),o=document.querySelector(".progress-circle-arrow--black"),s=e.r.baseVal.value,a=2*Math.PI*s,c=()=>window.scrollY||document.documentElement.scrollTop;function l(){const t=document.documentElement.scrollHeight-window.innerHeight;!function(t){const i=a-t/100*a;e.style.strokeDashoffset=i}(0+100*c()/t)}function d(){c()>=100&&t.classList.add("progress-circle--active"),c()<100&&t.classList.remove("progress-circle--active")}e.style.strokeDasharray=`${a} ${a}`,e.style.strokeDashoffset=`${a} ${a}`,l(),d(),window.addEventListener("scroll",(()=>{l(),d()})),Array.from(n).forEach((e=>{e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))})),i.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),e.style.fill="#fff",r.classList.add("progress-circle-arrow--not-active"),o.classList.add("progress-circle-arrow--active")}))},957:function(){window.addEventListener("load",(function(){const e=document.querySelector(".footer__right-side-form-form-checkbox"),t=document.querySelector(".footer__right-side-form-form-checkbox-custom--active");e.addEventListener("click",(()=>{e.checked||(t.style.opacity=0),e.checked&&(t.style.opacity=1)}))}))},504:function(){window.addEventListener("load",(()=>{const e=document.querySelector(".footer__left-side-rights"),t=document.querySelector(".footer__blocks-item--one").getBoundingClientRect().left;e.style.marginLeft=`${t}px`,window.innerWidth<=930&&(e.style.marginLeft=0),window.addEventListener("resize",(()=>{const e=document.querySelector(".footer__left-side-rights"),t=document.querySelector(".footer__blocks-item--one").getBoundingClientRect().left;e.style.marginLeft=t+"px",window.innerWidth<=930&&(e.style.marginLeft=0)}))}))},253:function(){function e(e){const t=window.scrollY;t>=1&&(e.classList.contains("header--main-transparent")&&e.classList.add("header--main-white"),e.classList.add("header--main--min-padding")),0===t&&(e.classList.contains("header--main-transparent")&&e.classList.remove("header--main-white"),e.classList.remove("header--main--min-padding"))}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".header--main").forEach((t=>{e(t)}))})),window.addEventListener("scroll",(()=>{document.querySelectorAll(".header--main").forEach((t=>{e(t)}))}))},370:function(){document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".header__nav-item-text").forEach((e=>{let t=e.innerText;e.innerHTML="";let i=document.createElement("div");i.classList.add("block");for(let e of t){let t=document.createElement("span");t.innerText=""===e.trim()?" ":e,t.classList.add("letter"),i.appendChild(t)}e.appendChild(i),e.appendChild(i.cloneNode(!0))}))})),window.addEventListener("load",(()=>{document.querySelectorAll(".header__nav-item").forEach((e=>{const t=e.getBoundingClientRect().width;e.style.width=`${t+10}px`}))}))},314:function(){window.addEventListener("load",(function(){document.querySelectorAll(".fillingButton").forEach((e=>{const t=e.querySelector("span"),i=t.getBoundingClientRect().width,n=e.querySelector(".fillingButton__content");t&&t.classList.contains("fillingButton__span--smallMargin")?n&&(n.style.marginLeft=`-${i/2}px`,t.style.marginRight="6px"):t&&t.classList.contains("fillingButton__span--smallMargin-and-partial")?n&&(n.style.marginLeft=`-${i}px`):t&&!t.closest(".fillingButton__content--big")&&n&&(n.style.marginLeft=`-${i+3}px`,t.style.marginRight="6px")}))}))},801:function(){window.innerWidth>=1100?window.onload=()=>{var e;(e=function(){var e=this;this.defaults={wrapperId:"butter",wrapperDamper:.7,cancelOnTouch:!1},this.validateOptions=function(t){for(var i in t)e.defaults.hasOwnProperty(i)&&Object.defineProperty(e.defaults,i,{value:Object.getOwnPropertyDescriptor(t,i).value})},this.wrapperDamper,this.wrapperId,this.cancelOnTouch,this.wrapper,this.wrapperOffset=0,this.animateId,this.resizing=!1,this.active=!1,this.wrapperHeight,this.bodyHeight}).prototype={init:function(e){e&&this.validateOptions(e),this.active=!0,this.resizing=!1,this.wrapperDamper=this.defaults.wrapperDamper,this.wrapperId=this.defaults.wrapperId,this.cancelOnTouch=this.defaults.cancelOnTouch,this.wrapper=document.getElementById(this.wrapperId),this.wrapper.style.position="fixed",this.wrapper.style.width="100%",this.wrapperHeight=this.wrapper.clientHeight,document.body.style.height=this.wrapperHeight+"px",window.addEventListener("resize",this.resize.bind(this)),this.cancelOnTouch&&window.addEventListener("touchstart",this.cancel.bind(this)),this.wrapperOffset=0,this.animateId=window.requestAnimationFrame(this.animate.bind(this))},wrapperUpdate:function(){var e=null!=document.scrollingElement?document.scrollingElement.scrollTop:document.documentElement.scrollTop||0;this.wrapperOffset+=(e-this.wrapperOffset)*this.wrapperDamper,this.wrapper.style.transform="translate3d(0,"+-this.wrapperOffset.toFixed(2)+"px, 0)"},checkResize:function(){this.wrapperHeight!=this.wrapper.clientHeight&&this.resize()},resize:function(){var e=this;e.resizing||(e.resizing=!0,window.cancelAnimationFrame(e.animateId),window.setTimeout((function(){e.wrapperHeight=e.wrapper.clientHeight,parseInt(document.body.style.height)!=parseInt(e.wrapperHeight)&&(document.body.style.height=e.wrapperHeight+"px"),e.animateId=window.requestAnimationFrame(e.animate.bind(e)),e.resizing=!1}),150))},animate:function(){this.checkResize(),this.wrapperUpdate(),this.animateId=window.requestAnimationFrame(this.animate.bind(this))},cancel:function(){this.active&&(window.cancelAnimationFrame(this.animateId),window.removeEventListener("resize",this.resize),window.removeEventListener("touchstart",this.cancel),this.wrapper.removeAttribute("style"),document.body.removeAttribute("style"),this.active=!1,this.wrapper="",this.wrapperOffset=0,this.resizing=!0,this.animateId="")}},this.butter=(new e).init()}:document.querySelector("#butter").style.position="absolute"},802:function(){const e=document.querySelector("body"),t=document.querySelector(".loader"),i=document.querySelector(".loader-first"),n=document.querySelector(".loader-second");window.addEventListener("load",(()=>{e.classList.remove("hidden"),t.classList.add("loader--hide"),i.classList.add("loader-first--active"),n.classList.add("loader-second--active"),t.addEventListener("animationstart",(()=>{setTimeout((()=>{t.classList.add("loader--none")}),1100)}),{once:!0,useCapture:!1})}))}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}!function(){"use strict";function e(e,t,i,n,r,o,s,a,c=null,l,[...d]=[],u,f){const g=u,m="bigWhiteFirst",h="blackArrow",p="whiteArrow";let w,_,v,b,L,y,S,E;switch(!0!==f?(w=document.querySelector(e),_=document.querySelector(t),v=document.querySelector(i)):(w=e,_=t,v=i),n){case 0:b=(e,t)=>e.pageX+t;break;case 1:b=(e,t)=>e.pageX-w.offsetLeft+t;break;case 2:b=(e,t)=>e.pageX-w.offsetLeft-w.offsetParent.offsetLeft+t;break;case 3:b=(e,t)=>e.pageX-w.offsetLeft-w.offsetParent.offsetLeft-w.offsetParent.offsetParent.offsetLeft+t}switch(r){case 0:L=(e,t)=>e.pageY+t;break;case 1:L=(e,t)=>e.pageY-w.offsetTop+t;break;case 2:L=(e,t)=>e.pageY-w.offsetTop-w.offsetParent.offsetTop+t;break;case 22:L=(e,t)=>e.pageY-w.offsetTop-w.offsetParent.offsetParent.offsetTop+t;break;case 3:L=(e,t)=>e.pageY-w.offsetTop-w.offsetParent.offsetTop-w.offsetParent.offsetParent.offsetTop+t;break;case 33:L=(e,t)=>e.pageY-w.offsetTop-w.offsetParent.offsetTop-w.offsetParent.offsetParent.offsetTop-window.scrollY+t;break;case 4:L=(e,t)=>e.pageY-w.offsetTop-w.offsetParent.offsetTop-w.offsetParent.offsetParent.offsetTop-w.offsetParent.offsetParent.offsetParent.offsetTop+t}if(l&&(y=w.querySelector(".fillingButton__content span")),u===m){let e,t;0!==d.length?([e,t]=[...d],S=new Image(e,t),S.src="assets/images/utils/arrowForFillingButton--black.svg",E=new Image(e,t),E.src="assets/images/utils/arrowForFillingButton--white.svg"):(S=new Image(20,20),S.src="assets/images/utils/arrowForFillingButton--black.svg",E=new Image(20,20),E.src="assets/images/utils/arrowForFillingButton--white.svg"),u===m&&(k=S,E.classList.add("fillingButton__image--white-visible"),k.classList.add("fillingButton__image--black-hidden")),E.classList.add("fillingButton__image--big","fillingButton__image"),S.classList.add("fillingButton__image--big","fillingButton__image"),w.querySelector(".fillingButton__p").classList.add("fillingButton__p--big");const i=w.querySelector(".fillingButton__imagesWrapper");e&&t?(i.style.width=`${e}px`,i.style.height=`${t}px`):(i.style.width="20px",i.style.height="20px"),i.appendChild(S),i.appendChild(E)}var k;if(a&&!g){let e;if(c===p&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--white.svg"),c===h&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--black.svg"),c!==h&&c!==p&&null!==c){const[t,i]=[...d];e=new Image(t,i),e.src=c}e.classList.add("fillingButton__image"),w.querySelector(".fillingButton__content").appendChild(e)}_.addEventListener("mousemove",(e=>{u===m&&function(e,t){e.classList.remove("fillingButton__image--white-visible"),t.classList.remove("fillingButton__image--black-hidden"),e.classList.add("fillingButton__image--white-hidden"),t.classList.add("fillingButton__image--black-visible")}(E,S),v.style.setProperty("--x",`${b(e,o)}px`),v.style.setProperty("--y",`${L(e,s)}px`),v.classList.add("fillingButton__circle--active"),l&&y.classList.add("fillingButton__p--black")})),_.addEventListener("mouseleave",(()=>{u===m&&function(e,t){e.classList.remove("fillingButton__image--white-hidden"),t.classList.remove("fillingButton__image--black-visible"),e.classList.add("fillingButton__image--white-visible"),t.classList.add("fillingButton__image--black-hidden")}(E,S),v.classList.remove("fillingButton__circle--active"),l&&y.classList.remove("fillingButton__p--black")}))}i(802),i(923),i(370),i(253),i(88),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--burgerMenuAddresses",".fillingButton__svg-circle--burgerMenuAddresses",".fillingButton__circle--burgerMenuAddresses",1,1,0,0,!0,"whiteArrow",!0)})),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--brief-intro",".fillingButton__svg-circle--brief-intro",".fillingButton__circle--brief-intro",2,22,0,0,!0,"whiteArrow",!0),e(".fillingButton--brief-bottom",".fillingButton__svg-circle--brief-bottom",".fillingButton__circle--brief-bottom",2,2,0,0,!1,null,!0,[20,20],"bigWhiteFirst")})),window.addEventListener("resize",(()=>{e(".fillingButton--brief-intro",".fillingButton__svg-circle--brief-intro",".fillingButton__circle--brief-intro",2,22,0,0,!1)})),i(771),i(772),i(504),i(957),i(314),i(801)}()}();