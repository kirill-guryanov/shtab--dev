!function(){var e={88:function(){const e=document.querySelector("body");console.log();const t=document.querySelector(".burgerMenu__animatedWords_wordToRight"),i=document.querySelector(".burgerMenu__animatedWords_wordToLeft"),o=document.querySelector(".header__burger"),n=document.querySelector(".burgerMenu"),r=document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItem"),s=document.querySelector(".burgerMenu__contentNavigation-rightSide"),l=document.querySelectorAll(".burgerMenu__contentNavigation-rightSideList"),a=document.querySelector(".header__closeBurgerMenuBtn");function c(e,t){e.classList.contains(t)&&e.classList.remove(t)}o.addEventListener("click",(()=>{e.classList.add("hidden"),t.classList.add("burgerMenu__animatedWords_wordToRight--animated"),i.classList.add("burgerMenu__animatedWords_wordToLeft--animated"),n.classList.remove("burgerMenu--closed"),n.classList.add("burgerMenu--visible")})),document.addEventListener("keyup",(o=>{const r=n.classList.contains("burgerMenu--visible");"Escape"===o.key&&r&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),n.classList.remove("burgerMenu--visible"),n.classList.add("burgerMenu--closed"))})),a.addEventListener("click",(o=>{n.classList.contains("burgerMenu--visible")&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),n.classList.remove("burgerMenu--visible"),n.classList.add("burgerMenu--closed"))})),r.forEach((e=>{const t=e.querySelector(".burgerMenu__contentNavigation-leftSideItemImage");e.addEventListener("mouseenter",(()=>{document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItemImage").forEach((e=>{c(e,"burgerMenu__contentNavigation-leftSideItemImage--visible")})),t.classList.add("burgerMenu__contentNavigation-leftSideItemImage--visible")}))})),r.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),l.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),r.forEach((e=>{l.forEach((t=>{const i=t.dataset.burgerMenuLink;e.addEventListener("mouseenter",(e=>{const o=e.target.dataset.burgerMenuLink;s.classList.add("burgerMenu__contentNavigation-rightSide--visible"),c(t,"burgerMenu__contentNavigation-rightSideList--animated"),o===i&&t.classList.add("burgerMenu__contentNavigation-rightSideList--animated")}))}))}))},157:function(){window.addEventListener("load",(function(){const e=document.querySelector(".progress-ring__circle"),t=document.querySelector(".progress-circle"),i=document.querySelector(".progress-circle-arrows"),o=document.querySelectorAll(".progress-circle-arrow"),n=Array.from(o),r=document.querySelector(".progress-circle-arrow--salad"),s=document.querySelector(".progress-circle-arrow--black");function l(){n.forEach((e=>{e.classList.contains("progress-circle-arrow--active")&&e.classList.remove("progress-circle-arrow--active"),e.classList.contains("progress-circle-arrow--not-active")&&e.classList.remove("progress-circle-arrow--not-active")}))}const a=e.r.baseVal.value,c=2*Math.PI*a,d=()=>window.scrollY||document.documentElement.scrollTop;function u(){const t=document.documentElement.scrollHeight-window.innerHeight;!function(t){const i=c-t/100*c;e.style.strokeDashoffset=i}(0+100*d()/t)}function f(){d()>=100&&t.classList.add("progress-circle--active"),d()<100&&t.classList.remove("progress-circle--active")}e.style.strokeDasharray=`${c} ${c}`,e.style.strokeDashoffset=`${c} ${c}`,u(),f(),window.addEventListener("scroll",(()=>{u(),f()})),Array.from(o).forEach((e=>{e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))})),i.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(()=>{const t=document.querySelector(".intro").offsetTop,i=document.querySelector(".stack").offsetTop,o=document.querySelector(".costs").offsetTop,n=document.querySelector(".reviews").offsetTop,a=document.querySelector(".offer").offsetTop,c=document.querySelector(".footer").offsetTop,d=window.innerHeight+window.scrollY-20;d>=t&&(l(),e.style.fill="#fff",r.classList.add("progress-circle-arrow--not-active"),s.classList.add("progress-circle-arrow--active")),d>=i&&(l(),e.style.fill="#1D1D1D",r.classList.add("progress-circle-arrow--active"),s.classList.add("progress-circle-arrow--not-active")),d>=o&&(l(),e.style.fill="#fff",r.classList.add("progress-circle-arrow--not-active"),s.classList.add("progress-circle-arrow--active")),d>=n&&(l(),e.style.fill="#1D1D1D",r.classList.add("progress-circle-arrow--active"),s.classList.add("progress-circle-arrow--not-active")),d>=a&&(l(),e.style.fill="#1D1D1D",r.classList.add("progress-circle-arrow--active"),s.classList.add("progress-circle-arrow--not-active")),innerWidth<=1460&&d>=c&&(l(),e.style.fill="#fff",r.classList.add("progress-circle-arrow--not-active"),s.classList.add("progress-circle-arrow--active"))}))}))},497:function(){window.addEventListener("load",(()=>{!function(){const e=document.querySelector(".footer__blocks");window.innerWidth>1920&&e.classList.add("footer__blocks--between"),window.innerWidth<=2340&&e.classList.remove("footer__blocks--between"),window.addEventListener("resize",(()=>{const e=document.querySelector(".footer__blocks");window.innerWidth>1920&&e.classList.add("footer__blocks--between"),window.innerWidth<=2340&&e.classList.remove("footer__blocks--between")}))}()}))},951:function(){function e(){const e=document.querySelector(".footer");if(window.innerWidth<=600){const e=document.querySelector(".footer__right-side-form");let t;try{t=e.querySelector(".footer__right-side-form-content")}catch{}if(t){const i=e.removeChild(t),o=document.createElement("li");o.className="footer__blocks-item footer__blocks-item--new-item-with-form",o.appendChild(i),document.querySelector(".footer__blocks-item--one").after(o)}e&&e.remove()}if(window.innerWidth>600){const t=document.querySelector(".footer__blocks");let i,o;try{i=t.querySelector(".footer__blocks-item--new-item-with-form"),o=i.querySelector(".footer__right-side-form-content")}catch{}if(o){const t=i.removeChild(o),n=document.createElement("div");n.className="footer__right-side-form",e.append(n),e.querySelector(".footer__right-side-form").appendChild(t),i.remove()}}}window.addEventListener("load",(()=>{e(),window.addEventListener("resize",(()=>{e()}))}))},957:function(){window.addEventListener("load",(function(){const e=document.querySelector(".footer__right-side-form-form-checkbox"),t=document.querySelector(".footer__right-side-form-form-checkbox-custom--active");e.addEventListener("click",(()=>{e.checked||(t.style.opacity=0),e.checked&&(t.style.opacity=1)}))}))},504:function(){window.addEventListener("load",(()=>{const e=document.querySelector(".footer__left-side-rights"),t=document.querySelector(".footer__blocks-item--one").getBoundingClientRect().left;e.style.marginLeft=`${t}px`,window.innerWidth<=930&&(e.style.marginLeft=0),window.addEventListener("resize",(()=>{const e=document.querySelector(".footer__left-side-rights"),t=document.querySelector(".footer__blocks-item--one").getBoundingClientRect().left;e.style.marginLeft=t+"px",window.innerWidth<=930&&(e.style.marginLeft=0)}))}))},253:function(){function e(e){const t=window.scrollY;t>=1&&(e.classList.contains("header--main-transparent")&&e.classList.add("header--main-white"),e.classList.add("header--main--min-padding")),0===t&&(e.classList.contains("header--main-transparent")&&e.classList.remove("header--main-white"),e.classList.remove("header--main--min-padding"))}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".header--main").forEach((t=>{e(t)}))})),window.addEventListener("scroll",(()=>{document.querySelectorAll(".header--main").forEach((t=>{e(t)}))}))},370:function(){document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".header__nav-item-text").forEach((e=>{let t=e.innerText;e.innerHTML="";let i=document.createElement("div");i.classList.add("block");for(let e of t){let t=document.createElement("span");t.innerText=""===e.trim()?" ":e,t.classList.add("letter"),i.appendChild(t)}e.appendChild(i),e.appendChild(i.cloneNode(!0))}))})),window.addEventListener("load",(()=>{document.querySelectorAll(".header__nav-item").forEach((e=>{const t=e.getBoundingClientRect().width;e.style.width=`${t+10}px`}))}))},893:function(){window.addEventListener("load",(()=>{document.querySelectorAll(".servisec-list__item").forEach((e=>{const t=e.querySelector(".servisec-list__item-title-span-wrapper"),i=e.querySelector(".servisec-list__item-title span"),o=e.querySelector(".servisec-list__item-title span");t.style.left=i.offsetLeft+i.offsetParent.offsetLeft-2+"px",t.style.top=i.offsetTop+i.offsetParent.offsetTop+"px",t.style.width=o.getBoundingClientRect().width+"px",t.classList.contains("servisec-list__item-title-span-wrapper--wide")&&(t.style.width=o.getBoundingClientRect().width+5+"px"),t.style.height=o.getBoundingClientRect().height/1.2+"px"}))})),window.addEventListener("resize",(()=>{document.querySelectorAll(".servisec-list__item").forEach((e=>{const t=e.querySelector(".servisec-list__item-title-span-wrapper"),i=e.querySelector(".servisec-list__item-title span"),o=e.querySelector(".servisec-list__item-title span");t.style.left=i.offsetLeft+i.offsetParent.offsetLeft-2+"px",t.style.top=i.offsetTop+i.offsetParent.offsetTop+"px",t.style.width=o.getBoundingClientRect().width+"px",t.style.height=o.getBoundingClientRect().height/1.2+"px"}))}))},411:function(){window.addEventListener("load",(function(){const e=document.querySelector(".reviews"),t=document.querySelector(".reviews__splide").offsetTop,i=e.querySelector(".container"),o=i.getBoundingClientRect().width,n=i.getBoundingClientRect().left,r=document.querySelectorAll(".reviews__splide .splide__arrow"),s=Array.from(r),l=document.querySelector(".section__titles--reviews"),a=l.getBoundingClientRect().height,c=l.offsetTop/2;s.forEach((e=>{e.style.left=n+o-90+"px",e.classList.contains("splide__arrow--prev")&&(e.style.left=n+o-90-59+"px"),e.style.top=a+c-t+"px"}))})),window.addEventListener("resize",(()=>{const e=document.querySelector(".reviews"),t=document.querySelector(".reviews__splide").offsetTop,i=e.querySelector(".container"),o=i.getBoundingClientRect().width,n=i.getBoundingClientRect().left,r=document.querySelectorAll(".reviews__splide .splide__arrow"),s=Array.from(r),l=document.querySelector(".section__titles--reviews"),a=l.getBoundingClientRect().height,c=l.offsetTop/2;s.forEach((e=>{e.style.left=n+o-90+"px",e.classList.contains("splide__arrow--prev")&&(e.style.left=n+o-90-59+"px"),e.style.top=a+c-t+"px"}))}))},721:function(){window.addEventListener("load",(function(){document.querySelector(".reviews__splide"),document.querySelectorAll(".reviews__splide .splide__arrow");const e=document.querySelector(".reviews__splide .splide__arrow--prev"),t=document.querySelector(".reviews__splide .splide__arrow--next"),i=document.querySelector(".reviews"),o=i.querySelector(".reviews__splide-arrow-prev"),n=i.querySelector(".reviews__splide-arrow-next"),r=i.removeChild(o),s=i.removeChild(n);e.appendChild(r),t.appendChild(s),e.firstChild.remove(),t.firstChild.remove()}))},922:function(){window.addEventListener("load",(function(){new Splide(".reviews__splide",{arrows:!0,perMove:1,pagination:!1,focus:"center",breakpoints:{5e3:{perPage:4,gap:16},1460:{perPage:4,gap:50},1350:{gap:20},1200:{perPage:4,gap:20},1180:{perPage:3,gap:60},1060:{gap:20},920:{perPage:2,gap:160},840:{gap:100},765:{gap:30},675:{perPage:1,gap:30},450:{perPage:1,gap:15}}}).mount()}))},314:function(){window.addEventListener("load",(function(){document.querySelectorAll(".fillingButton").forEach((e=>{const t=e.querySelector("span"),i=t.getBoundingClientRect().width,o=e.querySelector(".fillingButton__content");t&&t.classList.contains("fillingButton__span--smallMargin")?o&&(o.style.marginLeft=`-${i/2}px`,t.style.marginRight="6px"):t&&t.classList.contains("fillingButton__span--smallMargin-and-partial")?o&&(o.style.marginLeft=`-${i}px`):t&&!t.closest(".fillingButton__content--big")&&o&&(o.style.marginLeft=`-${i+3}px`,t.style.marginRight="6px")}))}))},575:function(){function e(e){try{document.querySelectorAll(e).forEach((e=>{const t=e.offsetHeight,i=function(e){const t=e.getBoundingClientRect(),i=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+i}}(e).top,o=window.innerHeight;let n=o-t/11;t>o&&(n=o-o/11),pageYOffset>i-n&&pageYOffset<i+t?e.classList.add("animated"):e.classList.contains("animationNoRepeat")||e.classList.remove("animated")}))}catch(e){console.log(`ERROR in animationOnScroll function ${e}`)}}document.querySelectorAll(".animationItem"),document.addEventListener("DOMContentLoaded",(()=>{e()})),window.addEventListener("scroll",(()=>{e(".animationItem")}))},801:function(){window.innerWidth>=1100?window.onload=()=>{var e;(e=function(){var e=this;this.defaults={wrapperId:"butter",wrapperDamper:.7,cancelOnTouch:!1},this.validateOptions=function(t){for(var i in t)e.defaults.hasOwnProperty(i)&&Object.defineProperty(e.defaults,i,{value:Object.getOwnPropertyDescriptor(t,i).value})},this.wrapperDamper,this.wrapperId,this.cancelOnTouch,this.wrapper,this.wrapperOffset=0,this.animateId,this.resizing=!1,this.active=!1,this.wrapperHeight,this.bodyHeight}).prototype={init:function(e){e&&this.validateOptions(e),this.active=!0,this.resizing=!1,this.wrapperDamper=this.defaults.wrapperDamper,this.wrapperId=this.defaults.wrapperId,this.cancelOnTouch=this.defaults.cancelOnTouch,this.wrapper=document.getElementById(this.wrapperId),this.wrapper.style.position="fixed",this.wrapper.style.width="100%",this.wrapperHeight=this.wrapper.clientHeight,document.body.style.height=this.wrapperHeight+"px",window.addEventListener("resize",this.resize.bind(this)),this.cancelOnTouch&&window.addEventListener("touchstart",this.cancel.bind(this)),this.wrapperOffset=0,this.animateId=window.requestAnimationFrame(this.animate.bind(this))},wrapperUpdate:function(){var e=null!=document.scrollingElement?document.scrollingElement.scrollTop:document.documentElement.scrollTop||0;this.wrapperOffset+=(e-this.wrapperOffset)*this.wrapperDamper,this.wrapper.style.transform="translate3d(0,"+-this.wrapperOffset.toFixed(2)+"px, 0)"},checkResize:function(){this.wrapperHeight!=this.wrapper.clientHeight&&this.resize()},resize:function(){var e=this;e.resizing||(e.resizing=!0,window.cancelAnimationFrame(e.animateId),window.setTimeout((function(){e.wrapperHeight=e.wrapper.clientHeight,parseInt(document.body.style.height)!=parseInt(e.wrapperHeight)&&(document.body.style.height=e.wrapperHeight+"px"),e.animateId=window.requestAnimationFrame(e.animate.bind(e)),e.resizing=!1}),150))},animate:function(){this.checkResize(),this.wrapperUpdate(),this.animateId=window.requestAnimationFrame(this.animate.bind(this))},cancel:function(){this.active&&(window.cancelAnimationFrame(this.animateId),window.removeEventListener("resize",this.resize),window.removeEventListener("touchstart",this.cancel),this.wrapper.removeAttribute("style"),document.body.removeAttribute("style"),this.active=!1,this.wrapper="",this.wrapperOffset=0,this.resizing=!0,this.animateId="")}},this.butter=(new e).init()}:document.querySelector("#butter").style.position="absolute"},802:function(){const e=document.querySelector("body"),t=document.querySelector(".loader"),i=document.querySelector(".loader-first"),o=document.querySelector(".loader-second");window.addEventListener("load",(()=>{e.classList.remove("hidden"),t.classList.add("loader--hide"),i.classList.add("loader-first--active"),o.classList.add("loader-second--active"),t.addEventListener("animationstart",(()=>{setTimeout((()=>{t.classList.add("loader--none")}),1100)}),{once:!0,useCapture:!1})}))}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,i),r.exports}!function(){"use strict";function e(e,t,i,o,n,r,s,l,a=null,c,[...d]=[],u){const f=u,g="bigWhiteFirst",p="blackArrow",m="whiteArrow",w=document.querySelector(e),_=document.querySelector(t),h=document.querySelector(i);let v,y,L,b,S;switch(o){case 1:v=(e,t)=>e.pageX-w.offsetLeft+t;break;case 2:v=(e,t)=>e.pageX-w.offsetLeft-w.offsetParent.offsetLeft+t;break;case 3:v=(e,t)=>e.pageX-w.offsetLeft-w.offsetParent.offsetLeft-w.offsetParent.offsetParent.offsetLeft+t}switch(n){case 1:y=(e,t)=>e.pageY-w.offsetTop+t;break;case 2:y=(e,t)=>e.pageY-w.offsetTop-w.offsetParent.offsetTop+t;break;case 22:y=(e,t)=>e.pageY-w.offsetTop-w.offsetParent.offsetParent.offsetTop+t;break;case 3:y=(e,t)=>e.pageY-w.offsetTop-w.offsetParent.offsetTop-w.offsetParent.offsetParent.offsetTop+t;break;case 4:y=(e,t)=>e.pageY-w.offsetTop-w.offsetParent.offsetTop-w.offsetParent.offsetParent.offsetTop-w.offsetParent.offsetParent.offsetParent.offsetTop+t}if(c&&(L=w.querySelector(".fillingButton__content span")),u===g){let e,t;0!==d.length?([e,t]=[...d],b=new Image(e,t),b.src="assets/images/utils/arrowForFillingButton--black.svg",S=new Image(e,t),S.src="assets/images/utils/arrowForFillingButton--white.svg"):(b=new Image(20,20),b.src="assets/images/utils/arrowForFillingButton--black.svg",S=new Image(20,20),S.src="assets/images/utils/arrowForFillingButton--white.svg"),u===g&&(B=b,S.classList.add("fillingButton__image--white-visible"),B.classList.add("fillingButton__image--black-hidden")),S.classList.add("fillingButton__image--big","fillingButton__image"),b.classList.add("fillingButton__image--big","fillingButton__image"),w.querySelector(".fillingButton__p").classList.add("fillingButton__p--big");const i=w.querySelector(".fillingButton__imagesWrapper");e&&t?(i.style.width=`${e}px`,i.style.height=`${t}px`):(i.style.width="20px",i.style.height="20px"),i.appendChild(b),i.appendChild(S)}var B;if(l&&!f){let e;if(a===m&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--white.svg"),a===p&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--black.svg"),a!==p&&a!==m&&null!==a){const[t,i]=[...d];e=new Image(t,i),e.src=a}e.classList.add("fillingButton__image"),w.querySelector(".fillingButton__content").appendChild(e)}_.addEventListener("mousemove",(e=>{u===g&&function(e,t){e.classList.remove("fillingButton__image--white-visible"),t.classList.remove("fillingButton__image--black-hidden"),e.classList.add("fillingButton__image--white-hidden"),t.classList.add("fillingButton__image--black-visible")}(S,b),h.style.setProperty("--x",`${v(e,r)}px`),h.style.setProperty("--y",`${y(e,s)}px`),h.classList.add("fillingButton__circle--active"),c&&L.classList.add("fillingButton__p--black")})),_.addEventListener("mouseleave",(()=>{u===g&&function(e,t){e.classList.remove("fillingButton__image--white-hidden"),t.classList.remove("fillingButton__image--black-visible"),e.classList.add("fillingButton__image--white-visible"),t.classList.add("fillingButton__image--black-hidden")}(S,b),h.classList.remove("fillingButton__circle--active"),c&&L.classList.remove("fillingButton__p--black")}))}i(802),i(88),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--burgerMenuAddresses",".fillingButton__svg-circle--burgerMenuAddresses",".fillingButton__circle--burgerMenuAddresses",1,1,0,0,!0,"whiteArrow",!0)})),i(157),i(370),i(253),i(893),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--costs",".fillingButton__svg-circle--costs",".fillingButton__circle--costs",2,2,0,0,!0,"whiteArrow",!0),e(".fillingButton--stackTop",".fillingButton__svg-circle--stackTop",".fillingButton__circle--stackTop",3,3,0,0,!0,"blackArrow",!1),e(".fillingButton--introTop",".fillingButton__svg-circle--introTop",".fillingButton__circle--introTop",3,3,0,0,!0,"whiteArrow",!0),e(".fillingButton--introBottom",".fillingButton__svg-circle--introBottom",".fillingButton__circle--introBottom",3,3,0,0,!0,"whiteArrow",!0),e(".fillingButton--infoOffer",".fillingButton__svg-circle--infoOffer",".fillingButton__circle--infoOffer",3,3,0,0,!0,"blackArrow",!1)})),window.addEventListener("resize",(()=>{e(".fillingButton--stackTop",".fillingButton__svg-circle--stackTop",".fillingButton__circle--stackTop",3,3,0,0,!1),e(".fillingButton--introTop",".fillingButton__svg-circle--introTop",".fillingButton__circle--introTop",3,3,0,0,!1),e(".fillingButton--introBottom",".fillingButton__svg-circle--introBottom",".fillingButton__circle--introBottom",3,3,0,0,!1),e(".fillingButton--costs",".fillingButton__svg-circle--costs",".fillingButton__circle--costs",3,3,0,0,!1),e(".fillingButton--infoOffer",".fillingButton__svg-circle--infoOffer",".fillingButton__circle--infoOffer",3,3,0,0,!1)})),i(957),i(497),i(951),i(504),i(314),i(801),i(575),i(922),i(411),i(721)}()}();