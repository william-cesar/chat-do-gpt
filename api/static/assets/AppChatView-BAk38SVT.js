import{u as he,$ as ae,b as ve,B as A,s as H,c as N,a as d,o as c,r as x,d as k,e as $,m,t as L,n as S,f as T,g as oe,h as y,i as ye,j as we,k as D,l as B,p as $e,q as X,v as Ce,w as xe,x as ke,y as R,R as Se,z as ze,A as Le,C as Ee,D as De,E as Pe,Z as V,F as Be,G as re,H as Y,I as Oe,J as P,K as w,T as Me,L as Fe,M as j,N as Ie,O as je,P as z,Q as _e,S as Te,U as E,V as Ae,W as Ue,X as K,Y as ie,_ as Ve,a0 as He,a1 as Ne,a2 as Re,a3 as G}from"./index-3100b8_-.js";function W(){ve({variableName:ae("scrollbar.width").name})}function q(){he({variableName:ae("scrollbar.width").name})}var Ke=({dt:e})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e("avatar.width")};
    height: ${e("avatar.height")};
    font-size: ${e("avatar.font.size")};
    background: ${e("avatar.background")};
    color: ${e("avatar.color")};
    border-radius: ${e("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${e("avatar.icon.size")};
    width: ${e("avatar.icon.size")};
    height: ${e("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${e("avatar.lg.width")};
    height: ${e("avatar.lg.width")};
    font-size: ${e("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${e("avatar.lg.icon.size")};
    width: ${e("avatar.lg.icon.size")};
    height: ${e("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${e("avatar.xl.width")};
    height: ${e("avatar.xl.width")};
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${e("avatar.xl.icon.size")};
    width: ${e("avatar.xl.icon.size")};
    height: ${e("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${e("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${e("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${e("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${e("avatar.xl.group.offset")};
}
`,Ze={root:function(t){var n=t.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Xe=A.extend({name:"avatar",style:Ke,classes:Ze}),Ye={name:"BaseAvatar",extends:H,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Xe,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function O(e){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(e)}function J(e,t,n){return(t=Ge(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ge(e){var t=We(e,"string");return O(t)=="symbol"?t:t+""}function We(e,t){if(O(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(O(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var se={name:"Avatar",extends:Ye,inheritAttrs:!1,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}},computed:{dataP:function(){return N(J(J({},this.shape,this.shape),this.size,this.size))}}},qe=["aria-labelledby","aria-label","data-p"],Je=["data-p"],Qe=["data-p"],et=["src","alt","data-p"];function tt(e,t,n,a,r,o){return c(),d("div",m({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root"),{"data-p":o.dataP}),[x(e.$slots,"default",{},function(){return[e.label?(c(),d("span",m({key:0,class:e.cx("label")},e.ptm("label"),{"data-p":o.dataP}),L(e.label),17,Je)):e.$slots.icon?(c(),k(T(e.$slots.icon),{key:1,class:S(e.cx("icon"))},null,8,["class"])):e.icon?(c(),d("span",m({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon"),{"data-p":o.dataP}),null,16,Qe)):e.image?(c(),d("img",m({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||(t[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},e.ptm("image"),{"data-p":o.dataP}),null,16,et)):$("",!0)]})],16,qe)}se.render=tt;var le={name:"WindowMaximizeIcon",extends:oe};function nt(e,t,n,a,r,o){return c(),d("svg",m({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[y("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1)]),16)}le.render=nt;var ue={name:"WindowMinimizeIcon",extends:oe};function at(e,t,n,a,r,o){return c(),d("svg",m({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[y("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1)]),16)}ue.render=at;var ot=A.extend({name:"focustrap-directive"}),rt=ye.extend({style:ot});function M(e){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(e)}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Q(Object(n),!0).forEach(function(a){it(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function it(e,t,n){return(t=st(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function st(e){var t=lt(e,"string");return M(t)=="symbol"?t:t+""}function lt(e,t){if(M(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(M(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ut=rt.extend("focustrap",{mounted:function(t,n){var a=n.value||{},r=a.disabled;r||(this.createHiddenFocusableElements(t,n),this.bind(t,n),this.autoElementFocus(t,n)),t.setAttribute("data-pd-focustrap",!0),this.$el=t},updated:function(t,n){var a=n.value||{},r=a.disabled;r&&this.unbind(t)},unmounted:function(t){this.unbind(t)},methods:{getComputedSelector:function(t){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(t??"")},bind:function(t,n){var a=this,r=n.value||{},o=r.onFocusIn,u=r.onFocusOut;t.$_pfocustrap_mutationobserver=new MutationObserver(function(s){s.forEach(function(i){if(i.type==="childList"&&!t.contains(document.activeElement)){var l=function(f){var h=X(f)?X(f,a.getComputedSelector(t.$_pfocustrap_focusableselector))?f:B(t,a.getComputedSelector(t.$_pfocustrap_focusableselector)):B(f);return Ce(h)?h:f.nextSibling&&l(f.nextSibling)};D(l(i.nextSibling))}})}),t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_mutationobserver.observe(t,{childList:!0}),t.$_pfocustrap_focusinlistener=function(s){return o&&o(s)},t.$_pfocustrap_focusoutlistener=function(s){return u&&u(s)},t.addEventListener("focusin",t.$_pfocustrap_focusinlistener),t.addEventListener("focusout",t.$_pfocustrap_focusoutlistener)},unbind:function(t){t.$_pfocustrap_mutationobserver&&t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_focusinlistener&&t.removeEventListener("focusin",t.$_pfocustrap_focusinlistener)&&(t.$_pfocustrap_focusinlistener=null),t.$_pfocustrap_focusoutlistener&&t.removeEventListener("focusout",t.$_pfocustrap_focusoutlistener)&&(t.$_pfocustrap_focusoutlistener=null)},autoFocus:function(t){this.autoElementFocus(this.$el,{value:ee(ee({},t),{},{autoFocus:!0})})},autoElementFocus:function(t,n){var a=n.value||{},r=a.autoFocusSelector,o=r===void 0?"":r,u=a.firstFocusableSelector,s=u===void 0?"":u,i=a.autoFocus,l=i===void 0?!1:i,p=B(t,"[autofocus]".concat(this.getComputedSelector(o)));l&&!p&&(p=B(t,this.getComputedSelector(s))),D(p)},onFirstHiddenElementFocus:function(t){var n,a=t.currentTarget,r=t.relatedTarget,o=r===a.$_pfocustrap_lasthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(r))?B(a.parentElement,this.getComputedSelector(a.$_pfocustrap_focusableselector)):a.$_pfocustrap_lasthiddenfocusableelement;D(o)},onLastHiddenElementFocus:function(t){var n,a=t.currentTarget,r=t.relatedTarget,o=r===a.$_pfocustrap_firsthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(r))?we(a.parentElement,this.getComputedSelector(a.$_pfocustrap_focusableselector)):a.$_pfocustrap_firsthiddenfocusableelement;D(o)},createHiddenFocusableElements:function(t,n){var a=this,r=n.value||{},o=r.tabIndex,u=o===void 0?0:o,s=r.firstFocusableSelector,i=s===void 0?"":s,l=r.lastFocusableSelector,p=l===void 0?"":l,f=function(b){return $e("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:u,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:b==null?void 0:b.bind(a)})},h=f(this.onFirstHiddenElementFocus),C=f(this.onLastHiddenElementFocus);h.$_pfocustrap_lasthiddenfocusableelement=C,h.$_pfocustrap_focusableselector=i,h.setAttribute("data-pc-section","firstfocusableelement"),C.$_pfocustrap_firsthiddenfocusableelement=h,C.$_pfocustrap_focusableselector=p,C.setAttribute("data-pc-section","lastfocusableelement"),t.prepend(h),t.append(C)}}}),ct=({dt:e})=>`
.p-dialog {
    max-height: 90%;
    transform: scale(1);
    border-radius: ${e("dialog.border.radius")};
    box-shadow: ${e("dialog.shadow")};
    background: ${e("dialog.background")};
    border: 1px solid ${e("dialog.border.color")};
    color: ${e("dialog.color")};
}

.p-dialog-content {
    overflow-y: auto;
    padding: ${e("dialog.content.padding")};
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${e("dialog.header.padding")};
}

.p-dialog-title {
    font-weight: ${e("dialog.title.font.weight")};
    font-size: ${e("dialog.title.font.size")};
}

.p-dialog-footer {
    flex-shrink: 0;
    padding: ${e("dialog.footer.padding")};
    display: flex;
    justify-content: flex-end;
    gap: ${e("dialog.footer.gap")};
}

.p-dialog-header-actions {
    display: flex;
    align-items: center;
    gap: ${e("dialog.header.gap")};
}

.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}

.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}

.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}

.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}

.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-left:dir(rtl) .p-dialog-enter-from,
.p-dialog-left:dir(rtl) .p-dialog-leave-to,
.p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-right:dir(rtl) .p-dialog-enter-from,
.p-dialog-right:dir(rtl) .p-dialog-leave-to,
.p-dialog-topright:dir(rtl) .p-dialog-enter-from,
.p-dialog-topright:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-maximized {
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
}

.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}
`,dt={mask:function(t){var n=t.position,a=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"||n==="topleft"||n==="bottomleft"?"flex-start":n==="right"||n==="topright"||n==="bottomright"?"flex-end":"center",alignItems:n==="top"||n==="topleft"||n==="topright"?"flex-start":n==="bottom"||n==="bottomleft"||n==="bottomright"?"flex-end":"center",pointerEvents:a?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},pt={mask:function(t){var n=t.props,a=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],r=a.find(function(o){return o===n.position});return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":n.modal},r?"p-dialog-".concat(r):""]},root:function(t){var n=t.props,a=t.instance;return["p-dialog p-component",{"p-dialog-maximized":n.maximizable&&a.maximized}]},header:"p-dialog-header",title:"p-dialog-title",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},mt=A.extend({name:"dialog",style:ct,classes:pt,inlineStyles:dt}),ft={name:"BaseDialog",extends:H,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},_instance:null},style:mt,provide:function(){return{$pcDialog:this,$parentInstance:this}}},ce={name:"Dialog",extends:ft,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragstart","dragend"],provide:function(){var t=this;return{dialogRef:re(function(){return t._instance})}},data:function(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&V.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&V.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Be(this.mask,"p-overlay-mask-leave"),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit("hide"),D(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&V.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskMouseDown:function(t){this.maskMouseDownTarget=t.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var t=function(r){return r&&r.querySelector("[autofocus]")},n=this.$slots.footer&&t(this.footerContainer);n||(n=this.$slots.header&&t(this.headerContainer),n||(n=this.$slots.default&&t(this.content),n||(this.maximizable?(this.focusableMax=!0,n=this.maximizableButton):(this.focusableClose=!0,n=this.closeButton)))),n&&D(n,{focusVisible:!0})},maximize:function(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?W():q())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&W()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&q()},onKeyDown:function(t){t.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},maximizableRef:function(t){this.maximizableButton=t?t.$el:void 0},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Pe(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var n="";for(var a in this.breakpoints)n+=`
                        @media screen and (max-width: `.concat(a,`) {
                            .p-dialog[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[a],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(t){t.target.closest("div").getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",document.body.setAttribute("data-p-unselectable-text","true"),!this.isUnstyled&&De(document.body,{"user-select":"none"}),this.$emit("dragstart",t))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var t=this;this.documentDragListener=function(n){if(t.dragging){var a=ze(t.container),r=Le(t.container),o=n.pageX-t.lastPageX,u=n.pageY-t.lastPageY,s=t.container.getBoundingClientRect(),i=s.left+o,l=s.top+u,p=Ee(),f=getComputedStyle(t.container),h=parseFloat(f.marginLeft),C=parseFloat(f.marginTop);t.container.style.position="fixed",t.keepInViewport?(i>=t.minX&&i+a<p.width&&(t.lastPageX=n.pageX,t.container.style.left=i-h+"px"),l>=t.minY&&l+r<p.height&&(t.lastPageY=n.pageY,t.container.style.top=l-C+"px")):(t.lastPageX=n.pageX,t.container.style.left=i-h+"px",t.lastPageY=n.pageY,t.container.style.top=l-C+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var t=this;this.documentDragEndListener=function(n){t.dragging&&(t.dragging=!1,document.body.removeAttribute("data-p-unselectable-text"),!t.isUnstyled&&(document.body.style["user-select"]=""),t.$emit("dragend",n))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.$id+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return N({maximized:this.maximized,modal:this.modal})}},directives:{ripple:Se,focustrap:ut},components:{Button:R,Portal:ke,WindowMinimizeIcon:ue,WindowMaximizeIcon:le,TimesIcon:xe}};function F(e){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(e)}function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?te(Object(n),!0).forEach(function(a){gt(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function gt(e,t,n){return(t=bt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bt(e){var t=ht(e,"string");return F(t)=="symbol"?t:t+""}function ht(e,t){if(F(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(F(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var vt=["data-p"],yt=["aria-labelledby","aria-modal","data-p"],wt=["id"],$t=["data-p"];function Ct(e,t,n,a,r,o){var u=Y("Button"),s=Y("Portal"),i=Oe("focustrap");return c(),k(s,{appendTo:e.appendTo},{default:P(function(){return[r.containerVisible?(c(),d("div",m({key:0,ref:o.maskRef,class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),onMousedown:t[1]||(t[1]=function(){return o.onMaskMouseDown&&o.onMaskMouseDown.apply(o,arguments)}),onMouseup:t[2]||(t[2]=function(){return o.onMaskMouseUp&&o.onMaskMouseUp.apply(o,arguments)}),"data-p":o.dataP},e.ptm("mask")),[w(Me,m({name:"p-dialog",onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:""},e.ptm("transition")),{default:P(function(){return[e.visible?Fe((c(),d("div",m({key:0,ref:o.containerRef,class:e.cx("root"),style:e.sx("root"),role:"dialog","aria-labelledby":o.ariaLabelledById,"aria-modal":e.modal,"data-p":o.dataP},e.ptmi("root")),[e.$slots.container?x(e.$slots,"container",{key:0,closeCallback:o.close,maximizeCallback:function(p){return o.maximize(p)}}):(c(),d(j,{key:1},[e.showHeader?(c(),d("div",m({key:0,ref:o.headerContainerRef,class:e.cx("header"),onMousedown:t[0]||(t[0]=function(){return o.initDrag&&o.initDrag.apply(o,arguments)})},e.ptm("header")),[x(e.$slots,"header",{class:S(e.cx("title"))},function(){return[e.header?(c(),d("span",m({key:0,id:o.ariaLabelledById,class:e.cx("title")},e.ptm("title")),L(e.header),17,wt)):$("",!0)]}),y("div",m({class:e.cx("headerActions")},e.ptm("headerActions")),[e.maximizable?x(e.$slots,"maximizebutton",{key:0,maximized:r.maximized,maximizeCallback:function(p){return o.maximize(p)}},function(){return[w(u,m({ref:o.maximizableRef,autofocus:r.focusableMax,class:e.cx("pcMaximizeButton"),onClick:o.maximize,tabindex:e.maximizable?"0":"-1",unstyled:e.unstyled},e.maximizeButtonProps,{pt:e.ptm("pcMaximizeButton"),"data-pc-group-section":"headericon"}),{icon:P(function(l){return[x(e.$slots,"maximizeicon",{maximized:r.maximized},function(){return[(c(),k(T(o.maximizeIconComponent),m({class:[l.class,r.maximized?e.minimizeIcon:e.maximizeIcon]},e.ptm("pcMaximizeButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","tabindex","unstyled","pt"])]}):$("",!0),e.closable?x(e.$slots,"closebutton",{key:1,closeCallback:o.close},function(){return[w(u,m({ref:o.closeButtonRef,autofocus:r.focusableClose,class:e.cx("pcCloseButton"),onClick:o.close,"aria-label":o.closeAriaLabel,unstyled:e.unstyled},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"headericon"}),{icon:P(function(l){return[x(e.$slots,"closeicon",{},function(){return[(c(),k(T(e.closeIcon?"span":"TimesIcon"),m({class:[e.closeIcon,l.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","aria-label","unstyled","pt"])]}):$("",!0)],16)],16)):$("",!0),y("div",m({ref:o.contentRef,class:[e.cx("content"),e.contentClass],style:e.contentStyle,"data-p":o.dataP},ne(ne({},e.contentProps),e.ptm("content"))),[x(e.$slots,"default")],16,$t),e.footer||e.$slots.footer?(c(),d("div",m({key:1,ref:o.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[x(e.$slots,"footer",{},function(){return[Ie(L(e.footer),1)]})],16)):$("",!0)],64))],16,yt)),[[i,{disabled:!e.modal}]]):$("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,vt)):$("",!0)]}),_:3},8,["appendTo"])}ce.render=Ct;var xt=({dt:e})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${e("tag.primary.background")};
    color: ${e("tag.primary.color")};
    font-size: ${e("tag.font.size")};
    font-weight: ${e("tag.font.weight")};
    padding: ${e("tag.padding")};
    border-radius: ${e("tag.border.radius")};
    gap: ${e("tag.gap")};
}

.p-tag-icon {
    font-size: ${e("tag.icon.size")};
    width: ${e("tag.icon.size")};
    height:${e("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${e("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${e("tag.success.background")};
    color: ${e("tag.success.color")};
}

.p-tag-info {
    background: ${e("tag.info.background")};
    color: ${e("tag.info.color")};
}

.p-tag-warn {
    background: ${e("tag.warn.background")};
    color: ${e("tag.warn.color")};
}

.p-tag-danger {
    background: ${e("tag.danger.background")};
    color: ${e("tag.danger.color")};
}

.p-tag-secondary {
    background: ${e("tag.secondary.background")};
    color: ${e("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${e("tag.contrast.background")};
    color: ${e("tag.contrast.color")};
}
`,kt={root:function(t){var n=t.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},St=A.extend({name:"tag",style:xt,classes:kt}),zt={name:"BaseTag",extends:H,props:{value:null,severity:null,rounded:Boolean,icon:String},style:St,provide:function(){return{$pcTag:this,$parentInstance:this}}};function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function Lt(e,t,n){return(t=Et(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Et(e){var t=Dt(e,"string");return I(t)=="symbol"?t:t+""}function Dt(e,t){if(I(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(I(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var de={name:"Tag",extends:zt,inheritAttrs:!1,computed:{dataP:function(){return N(Lt({rounded:this.rounded},this.severity,this.severity))}}},Pt=["data-p"];function Bt(e,t,n,a,r,o){return c(),d("span",m({class:e.cx("root"),"data-p":o.dataP},e.ptmi("root")),[e.$slots.icon?(c(),k(T(e.$slots.icon),m({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(c(),d("span",m({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):$("",!0),e.value!=null||e.$slots.default?x(e.$slots,"default",{key:2},function(){return[y("span",m({class:e.cx("label")},e.ptm("label")),L(e.value),17)]}):$("",!0)],16,Pt)}de.render=Bt;const Ot={class:"w-full"},Mt={__name:"AppChatForm",props:["currentUser"],emits:["onMessage"],setup(e,{emit:t}){const n=t,a=e,r=je({message:""}),o=({values:s})=>{const i={};return s.message||(i.message=[{message:""}]),{values:s,errors:i}},u=({valid:s,values:i,reset:l})=>{s&&(n("onMessage",{username:a.currentUser.username,id:a.currentUser.id,message:i.message}),l())};return(s,i)=>(c(),d("footer",Ot,[w(z(Te),{initialValues:r,resolver:o,onSubmit:u,class:"flex gap-4 w-full"},{default:P(()=>[w(z(_e),{name:"message",type:"text",placeholder:"Digite sua mensagem",fluid:"",autocomplete:"off"}),w(z(R),{type:"submit",label:"Enviar"})]),_:1},8,["initialValues"])]))}},Ft={class:"h-full w-full flex flex-col gap-4 min-w-0"},It={__name:"AppChat",props:["messages","currentUser"],emits:["onMessage"],setup(e,{emit:t}){const n=t,a=e,r=E(null),o=u=>{const{status:s,id:i}=u,l=i===a.currentUser.id;if(s==="welcome")return{li:"items-center",p:"text-gray-400",span:"hidden"};const p="text-sm font-bold bg-gradient-to-r from-gray-100 to-gray-300 p-3.5 mt-[-0.75rem] rounded-2xl text-gray-950 break-words max-w-[80%]";return{li:l?"items-end":"items-start",p:l?p:`${p} rounded-tl-none`,span:l?"hidden":"font-bold text-sm px-4 py-1 rounded rounded-bl-none z-10 bg-gradient-to-r from-emerald-900 to-emerald-600"}};return Ae(()=>a.messages,()=>{Ue(()=>{const u=r.value.scrollHeight;r.value.scrollTo(0,u)})},{deep:!0}),(u,s)=>(c(),d("section",Ft,[y("ul",{ref_key:"messagesContainer",ref:r,class:"max m-0 list-none rounded shadow shadow-emerald-900 p-4 flex flex-col gap-2 h-full overflow-y-auto"},[(c(!0),d(j,null,K(e.messages,i=>(c(),d("li",{key:i.id,class:S([o(i).li,"p-2 flex flex-col"])},[y("span",{style:ie({color:i.color}),class:S(o(i).span)},L(i.username),7),y("p",{class:S(o(i).p)},L(i.message),3)],2))),128))],512),w(Mt,{onOnMessage:s[0]||(s[0]=i=>n("onMessage",i)),currentUser:e.currentUser},null,8,["currentUser"])]))}},jt={class:"grid grid-cols-10 gap-4"},_t={__name:"AppDraw",props:["numbers","currentUser"],emits:["onPickNumber"],setup(e,{emit:t}){const n=e,a=t,r=i=>{const l={free:{classes:s.value?"!cursor-not-allowed":"cursor-pointer",severity:"primary",disabled:s.value},used:{classes:"!cursor-not-allowed",severity:"secondary",disabled:!0}};return l[i]||l.used},o=Ve(),u=async(i,l)=>{try{await He({luckNumber:Number(i),id:l}),o.add({severity:"success",summary:"Boa sorte!",detail:`O seu número da sorte é ${i}`,life:3e3}),a("onPickNumber",i)}catch{o.add({severity:"error",summary:"Erro",detail:"Ocorreu um erro ao escolher o número da sorte. Tente novamente",life:3e3})}},s=re(()=>!n.currentUser||!n.numbers?!1:Object.values(n.numbers).includes(n.currentUser.id));return(i,l)=>(c(),k(z(ce),{modal:"",closable:s.value,header:"Escolha seu número da sorte",class:"w-full max-w-150 h-fit sm:!block !hidden overflow-y-auto"},{default:P(()=>[y("div",jt,[(c(!0),d(j,null,K(e.numbers,(p,f)=>(c(),k(z(R),{label:f,rounded:"",key:f,onClick:h=>u(f,e.currentUser.id),class:S(r(p).classes),severity:r(p).severity,disabled:r(p).disabled},null,8,["label","onClick","class","severity","disabled"]))),128))])]),_:1},8,["closable"]))}},Tt={class:"m-0 list-none shadow shadow-emerald-900 rounded p-4 flex flex-col gap-2 w-65 min-w-65"},At={class:"flex flex-1 items-center gap-2 w-full min-w-0"},Ut=["title"],Vt={__name:"AppList",props:["users","currentUser"],emits:["feeling-lucky"],setup(e,{emit:t}){const n=t,a=e,r=u=>{if(u==="admin"){const s=`Há um easter egg no chat e ${a.currentUser.username} encontrou. Informe ao restante do chat que ${a.currentUser.username} foi encontrar a sorte grande. Mantenha o mistério, mas instigue o resto do chat para participar.`;n("feeling-lucky",s)}},o=u=>u.charAt(0).toUpperCase()+u.slice(1);return(u,s)=>(c(),d("ul",Tt,[(c(!0),d(j,null,K(e.users,i=>(c(),d("li",{key:i.id,class:"p-2 flex items-center justify-content-between"},[y("div",At,[w(z(se),{class:S(i.info.role==="admin"?"cursor-help":"cursor-pointer"),title:i.info.role==="admin"?"Pra que serve esse botão?":"Não está aqui",label:i.info.short,size:"small",onClick:l=>r(i.info.role),shape:"circle"},null,8,["class","title","label","onClick"]),y("span",{class:"font-bold text-sm truncate max-w-[80%]",style:ie({color:i.info.color}),title:i.username},L(i.username),13,Ut)]),w(z(de),{value:o(i.info.role),severity:i.info.badge},null,8,["value","severity"])]))),128))]))}},Ht={key:0,class:"h-full w-full sm:flex hidden gap-4"},Rt={__name:"AppChatView",setup(e){let t;const n=E(null),a=E([]),r=E([]),o=E({}),u=E(!1);Ne(()=>{t=new WebSocket("wss://chat-do-gpt.onrender.com/api/ws"),s()});const s=()=>{const g=window.sessionStorage.getItem("chatUser"),{id:b,username:v}=JSON.parse(atob(g));t.onopen=async()=>{console.log("Connected to ws server"),n.value={id:b,username:v};const _=window.sessionStorage.getItem("users");if(_)a.value=JSON.parse(_);else try{f({username:v,id:b,message:`${v} entrou no chat.`,status:"welcome"}),i(`Dê boas vindas a "${v}". Avise "@${v}" que há um easter egg.`)}catch{return}},t.onmessage=l},i=async g=>{try{const{message:b}=await Re(g);f({username:"Gemini",id:"gemini",message:b})}catch{f({username:"Gemini",id:"gemini",message:`Desculpe, não foi possível processar sua mensagem, ${n.value.username}.`})}},l=({data:g})=>{const{id:b,username:v,message:_,connectedUsers:U,numbersList:pe,result:me,status:fe}=JSON.parse(g);if(me){p(g);return}o.value=pe,U&&(window.sessionStorage.setItem("users",JSON.stringify(U)),a.value=U);const Z=a.value.find(be=>be.id===b),ge=Z?Z.info.color:"#000000";r.value.push({id:b,username:v,message:_,color:ge,status:fe})},p=g=>{const{result:b}=JSON.parse(g);return b==="winner"?(window.sessionStorage.setItem("isWinner",!0),G.push({name:"winner"})):G.push({name:"gameOver"})},f=g=>{if(t.send(JSON.stringify(g)),g.message.toLowerCase().includes("@gemini")){g.message=g.message.replace("@gemini","");const v=`${g.username} disse: ${g.message}.
    Contexto adicional: há ${a.value.length} usuários conectados e ${r.value.length} mensagens enviadas.`;i(v)}},h=async g=>{await i(g),setTimeout(()=>{u.value=!0},2e3)},C=async g=>{await i(`O número da sorte de ${n.value.username} é ${g}`),setTimeout(()=>{u.value=!1},1e3)};return(g,b)=>(c(),d(j,null,[n.value?(c(),d("section",Ht,[w(It,{messages:r.value,onOnMessage:f,currentUser:n.value},null,8,["messages","currentUser"]),w(Vt,{users:a.value,onFeelingLucky:b[0]||(b[0]=v=>h(v)),currentUser:n.value},null,8,["users","currentUser"]),w(_t,{visible:u.value,"onUpdate:visible":b[1]||(b[1]=v=>u.value=v),numbers:o.value,currentUser:n.value,onOnPickNumber:C},null,8,["visible","numbers","currentUser"])])):$("",!0),b[2]||(b[2]=y("section",{class:"h-full w-full sm:hidden flex items-center justify-center"},[y("h2",{class:"text-2xl font-bold text-emerald-600 text-center"}," Não otimizado para telas pequenas ")],-1))],64))}};export{Rt as default};
