import{u as ve,$ as ie,b as ye,c as N,B as A,s as R,a as K,d as c,o as u,r as k,e as S,f as x,m as g,t as $,n as D,g as B,h as se,i as b,j as we,k as Ce,l as P,p as O,q as xe,v as q,w as ke,x as Se,y as $e,z as Z,R as ze,A as Le,C as Ee,D as De,E as Pe,F as Oe,Z as H,G as Be,H as U,I as J,J as _e,K as E,L as w,T as Me,M as Fe,N as I,O as je,P as Ie,Q as L,S as Te,U as Ae,V as z,W as Ue,X as Ve,Y as G,_ as le,a0 as He,a1 as Ne,a2 as Re,a3 as Ke}from"./index-C0_R-x1S.js";function Q(){ye({variableName:ie("scrollbar.width").name})}function ee(){ve({variableName:ie("scrollbar.width").name})}var Ze=N`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
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
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,Ge={root:function(t){var a=t.props;return["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Xe=A.extend({name:"avatar",style:Ze,classes:Ge}),Ye={name:"BaseAvatar",extends:R,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Xe,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function _(e){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(e)}function te(e,t,a){return(t=We(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function We(e){var t=qe(e,"string");return _(t)=="symbol"?t:t+""}function qe(e,t){if(_(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var o=a.call(e,t);if(_(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ue={name:"Avatar",extends:Ye,inheritAttrs:!1,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}},computed:{dataP:function(){return K(te(te({},this.shape,this.shape),this.size,this.size))}}},Je=["aria-labelledby","aria-label","data-p"],Qe=["data-p"],et=["data-p"],tt=["src","alt","data-p"];function at(e,t,a,o,r,n){return u(),c("div",g({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root"),{"data-p":n.dataP}),[k(e.$slots,"default",{},function(){return[e.label?(u(),c("span",g({key:0,class:e.cx("label")},e.ptm("label"),{"data-p":n.dataP}),$(e.label),17,Qe)):e.$slots.icon?(u(),S(B(e.$slots.icon),{key:1,class:D(e.cx("icon"))},null,8,["class"])):e.icon?(u(),c("span",g({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon"),{"data-p":n.dataP}),null,16,et)):e.image?(u(),c("img",g({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||(t[0]=function(){return n.onError&&n.onError.apply(n,arguments)})},e.ptm("image"),{"data-p":n.dataP}),null,16,tt)):x("",!0)]})],16,Je)}ue.render=at;var de={name:"WindowMaximizeIcon",extends:se};function ot(e,t,a,o,r,n){return u(),c("svg",g({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[b("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1)]),16)}de.render=ot;var ce={name:"WindowMinimizeIcon",extends:se};function nt(e,t,a,o,r,n){return u(),c("svg",g({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[b("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1)]),16)}ce.render=nt;var rt=A.extend({name:"focustrap-directive"}),it=we.extend({style:rt});function M(e){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(e)}function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,o)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?ae(Object(a),!0).forEach(function(o){st(e,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(Object(a)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))})}return e}function st(e,t,a){return(t=lt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function lt(e){var t=ut(e,"string");return M(t)=="symbol"?t:t+""}function ut(e,t){if(M(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var o=a.call(e,t);if(M(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var dt=it.extend("focustrap",{mounted:function(t,a){var o=a.value||{},r=o.disabled;r||(this.createHiddenFocusableElements(t,a),this.bind(t,a),this.autoElementFocus(t,a)),t.setAttribute("data-pd-focustrap",!0),this.$el=t},updated:function(t,a){var o=a.value||{},r=o.disabled;r&&this.unbind(t)},unmounted:function(t){this.unbind(t)},methods:{getComputedSelector:function(t){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(t??"")},bind:function(t,a){var o=this,r=a.value||{},n=r.onFocusIn,d=r.onFocusOut;t.$_pfocustrap_mutationobserver=new MutationObserver(function(l){l.forEach(function(i){if(i.type==="childList"&&!t.contains(document.activeElement)){var s=function(h){var f=q(h)?q(h,o.getComputedSelector(t.$_pfocustrap_focusableselector))?h:O(t,o.getComputedSelector(t.$_pfocustrap_focusableselector)):O(h);return ke(f)?f:h.nextSibling&&s(h.nextSibling)};P(s(i.nextSibling))}})}),t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_mutationobserver.observe(t,{childList:!0}),t.$_pfocustrap_focusinlistener=function(l){return n&&n(l)},t.$_pfocustrap_focusoutlistener=function(l){return d&&d(l)},t.addEventListener("focusin",t.$_pfocustrap_focusinlistener),t.addEventListener("focusout",t.$_pfocustrap_focusoutlistener)},unbind:function(t){t.$_pfocustrap_mutationobserver&&t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_focusinlistener&&t.removeEventListener("focusin",t.$_pfocustrap_focusinlistener)&&(t.$_pfocustrap_focusinlistener=null),t.$_pfocustrap_focusoutlistener&&t.removeEventListener("focusout",t.$_pfocustrap_focusoutlistener)&&(t.$_pfocustrap_focusoutlistener=null)},autoFocus:function(t){this.autoElementFocus(this.$el,{value:oe(oe({},t),{},{autoFocus:!0})})},autoElementFocus:function(t,a){var o=a.value||{},r=o.autoFocusSelector,n=r===void 0?"":r,d=o.firstFocusableSelector,l=d===void 0?"":d,i=o.autoFocus,s=i===void 0?!1:i,p=O(t,"[autofocus]".concat(this.getComputedSelector(n)));s&&!p&&(p=O(t,this.getComputedSelector(l))),P(p)},onFirstHiddenElementFocus:function(t){var a,o=t.currentTarget,r=t.relatedTarget,n=r===o.$_pfocustrap_lasthiddenfocusableelement||!((a=this.$el)!==null&&a!==void 0&&a.contains(r))?O(o.parentElement,this.getComputedSelector(o.$_pfocustrap_focusableselector)):o.$_pfocustrap_lasthiddenfocusableelement;P(n)},onLastHiddenElementFocus:function(t){var a,o=t.currentTarget,r=t.relatedTarget,n=r===o.$_pfocustrap_firsthiddenfocusableelement||!((a=this.$el)!==null&&a!==void 0&&a.contains(r))?Ce(o.parentElement,this.getComputedSelector(o.$_pfocustrap_focusableselector)):o.$_pfocustrap_firsthiddenfocusableelement;P(n)},createHiddenFocusableElements:function(t,a){var o=this,r=a.value||{},n=r.tabIndex,d=n===void 0?0:n,l=r.firstFocusableSelector,i=l===void 0?"":l,s=r.lastFocusableSelector,p=s===void 0?"":s,h=function(m){return xe("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:d,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:m==null?void 0:m.bind(o)})},f=h(this.onFirstHiddenElementFocus),C=h(this.onLastHiddenElementFocus);f.$_pfocustrap_lasthiddenfocusableelement=C,f.$_pfocustrap_focusableselector=i,f.setAttribute("data-pc-section","firstfocusableelement"),C.$_pfocustrap_firsthiddenfocusableelement=f,C.$_pfocustrap_focusableselector=p,C.setAttribute("data-pc-section","lastfocusableelement"),t.prepend(f),t.append(C)}}}),ct=N`
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
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
`,pt={mask:function(t){var a=t.position,o=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:a==="left"||a==="topleft"||a==="bottomleft"?"flex-start":a==="right"||a==="topright"||a==="bottomright"?"flex-end":"center",alignItems:a==="top"||a==="topleft"||a==="topright"?"flex-start":a==="bottom"||a==="bottomleft"||a==="bottomright"?"flex-end":"center",pointerEvents:o?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},mt={mask:function(t){var a=t.props,o=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],r=o.find(function(n){return n===a.position});return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":a.modal},r?"p-dialog-".concat(r):""]},root:function(t){var a=t.props,o=t.instance;return["p-dialog p-component",{"p-dialog-maximized":a.maximizable&&o.maximized}]},header:"p-dialog-header",title:"p-dialog-title",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},ft=A.extend({name:"dialog",style:ct,classes:mt,inlineStyles:pt}),gt={name:"BaseDialog",extends:R,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},_instance:null},style:ft,provide:function(){return{$pcDialog:this,$parentInstance:this}}},X={name:"Dialog",extends:gt,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragstart","dragend"],provide:function(){var t=this;return{dialogRef:U(function(){return t._instance})}},data:function(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&H.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&H.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Be(this.mask,"p-overlay-mask-leave"),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit("hide"),P(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&H.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskMouseDown:function(t){this.maskMouseDownTarget=t.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var t=function(r){return r&&r.querySelector("[autofocus]")},a=this.$slots.footer&&t(this.footerContainer);a||(a=this.$slots.header&&t(this.headerContainer),a||(a=this.$slots.default&&t(this.content),a||(this.maximizable?(this.focusableMax=!0,a=this.maximizableButton):(this.focusableClose=!0,a=this.closeButton)))),a&&P(a,{focusVisible:!0})},maximize:function(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?Q():ee())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&Q()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&ee()},onKeyDown:function(t){t.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},maximizableRef:function(t){this.maximizableButton=t?t.$el:void 0},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Oe(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var a="";for(var o in this.breakpoints)a+=`
                        @media screen and (max-width: `.concat(o,`) {
                            .p-dialog[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[o],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=a}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(t){t.target.closest("div").getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",document.body.setAttribute("data-p-unselectable-text","true"),!this.isUnstyled&&Pe(document.body,{"user-select":"none"}),this.$emit("dragstart",t))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var t=this;this.documentDragListener=function(a){if(t.dragging){var o=Le(t.container),r=Ee(t.container),n=a.pageX-t.lastPageX,d=a.pageY-t.lastPageY,l=t.container.getBoundingClientRect(),i=l.left+n,s=l.top+d,p=De(),h=getComputedStyle(t.container),f=parseFloat(h.marginLeft),C=parseFloat(h.marginTop);t.container.style.position="fixed",t.keepInViewport?(i>=t.minX&&i+o<p.width&&(t.lastPageX=a.pageX,t.container.style.left=i-f+"px"),s>=t.minY&&s+r<p.height&&(t.lastPageY=a.pageY,t.container.style.top=s-C+"px")):(t.lastPageX=a.pageX,t.container.style.left=i-f+"px",t.lastPageY=a.pageY,t.container.style.top=s-C+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var t=this;this.documentDragEndListener=function(a){t.dragging&&(t.dragging=!1,document.body.removeAttribute("data-p-unselectable-text"),!t.isUnstyled&&(document.body.style["user-select"]=""),t.$emit("dragend",a))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.$id+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return K({maximized:this.maximized,modal:this.modal})}},directives:{ripple:ze,focustrap:dt},components:{Button:Z,Portal:$e,WindowMinimizeIcon:ce,WindowMaximizeIcon:de,TimesIcon:Se}};function F(e){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(e)}function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,o)}return a}function re(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?ne(Object(a),!0).forEach(function(o){bt(e,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))})}return e}function bt(e,t,a){return(t=ht(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ht(e){var t=vt(e,"string");return F(t)=="symbol"?t:t+""}function vt(e,t){if(F(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var o=a.call(e,t);if(F(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var yt=["data-p"],wt=["aria-labelledby","aria-modal","data-p"],Ct=["id"],xt=["data-p"];function kt(e,t,a,o,r,n){var d=J("Button"),l=J("Portal"),i=_e("focustrap");return u(),S(l,{appendTo:e.appendTo},{default:E(function(){return[r.containerVisible?(u(),c("div",g({key:0,ref:n.maskRef,class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),onMousedown:t[1]||(t[1]=function(){return n.onMaskMouseDown&&n.onMaskMouseDown.apply(n,arguments)}),onMouseup:t[2]||(t[2]=function(){return n.onMaskMouseUp&&n.onMaskMouseUp.apply(n,arguments)}),"data-p":n.dataP},e.ptm("mask")),[w(Me,g({name:"p-dialog",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},e.ptm("transition")),{default:E(function(){return[e.visible?Fe((u(),c("div",g({key:0,ref:n.containerRef,class:e.cx("root"),style:e.sx("root"),role:"dialog","aria-labelledby":n.ariaLabelledById,"aria-modal":e.modal,"data-p":n.dataP},e.ptmi("root")),[e.$slots.container?k(e.$slots,"container",{key:0,closeCallback:n.close,maximizeCallback:function(p){return n.maximize(p)}}):(u(),c(I,{key:1},[e.showHeader?(u(),c("div",g({key:0,ref:n.headerContainerRef,class:e.cx("header"),onMousedown:t[0]||(t[0]=function(){return n.initDrag&&n.initDrag.apply(n,arguments)})},e.ptm("header")),[k(e.$slots,"header",{class:D(e.cx("title"))},function(){return[e.header?(u(),c("span",g({key:0,id:n.ariaLabelledById,class:e.cx("title")},e.ptm("title")),$(e.header),17,Ct)):x("",!0)]}),b("div",g({class:e.cx("headerActions")},e.ptm("headerActions")),[e.maximizable?k(e.$slots,"maximizebutton",{key:0,maximized:r.maximized,maximizeCallback:function(p){return n.maximize(p)}},function(){return[w(d,g({ref:n.maximizableRef,autofocus:r.focusableMax,class:e.cx("pcMaximizeButton"),onClick:n.maximize,tabindex:e.maximizable?"0":"-1",unstyled:e.unstyled},e.maximizeButtonProps,{pt:e.ptm("pcMaximizeButton"),"data-pc-group-section":"headericon"}),{icon:E(function(s){return[k(e.$slots,"maximizeicon",{maximized:r.maximized},function(){return[(u(),S(B(n.maximizeIconComponent),g({class:[s.class,r.maximized?e.minimizeIcon:e.maximizeIcon]},e.ptm("pcMaximizeButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","tabindex","unstyled","pt"])]}):x("",!0),e.closable?k(e.$slots,"closebutton",{key:1,closeCallback:n.close},function(){return[w(d,g({ref:n.closeButtonRef,autofocus:r.focusableClose,class:e.cx("pcCloseButton"),onClick:n.close,"aria-label":n.closeAriaLabel,unstyled:e.unstyled},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"headericon"}),{icon:E(function(s){return[k(e.$slots,"closeicon",{},function(){return[(u(),S(B(e.closeIcon?"span":"TimesIcon"),g({class:[e.closeIcon,s.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","aria-label","unstyled","pt"])]}):x("",!0)],16)],16)):x("",!0),b("div",g({ref:n.contentRef,class:[e.cx("content"),e.contentClass],style:e.contentStyle,"data-p":n.dataP},re(re({},e.contentProps),e.ptm("content"))),[k(e.$slots,"default")],16,xt),e.footer||e.$slots.footer?(u(),c("div",g({key:1,ref:n.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[k(e.$slots,"footer",{},function(){return[je($(e.footer),1)]})],16)):x("",!0)],64))],16,wt)),[[i,{disabled:!e.modal}]]):x("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,yt)):x("",!0)]}),_:3},8,["appendTo"])}X.render=kt;var St=N`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,$t={root:function(t){var a=t.props;return["p-tag p-component",{"p-tag-info":a.severity==="info","p-tag-success":a.severity==="success","p-tag-warn":a.severity==="warn","p-tag-danger":a.severity==="danger","p-tag-secondary":a.severity==="secondary","p-tag-contrast":a.severity==="contrast","p-tag-rounded":a.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},zt=A.extend({name:"tag",style:St,classes:$t}),Lt={name:"BaseTag",extends:R,props:{value:null,severity:null,rounded:Boolean,icon:String},style:zt,provide:function(){return{$pcTag:this,$parentInstance:this}}};function j(e){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(e)}function Et(e,t,a){return(t=Dt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Dt(e){var t=Pt(e,"string");return j(t)=="symbol"?t:t+""}function Pt(e,t){if(j(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var o=a.call(e,t);if(j(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var pe={name:"Tag",extends:Lt,inheritAttrs:!1,computed:{dataP:function(){return K(Et({rounded:this.rounded},this.severity,this.severity))}}},Ot=["data-p"];function Bt(e,t,a,o,r,n){return u(),c("span",g({class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[e.$slots.icon?(u(),S(B(e.$slots.icon),g({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(u(),c("span",g({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):x("",!0),e.value!=null||e.$slots.default?k(e.$slots,"default",{key:2},function(){return[b("span",g({class:e.cx("label")},e.ptm("label")),$(e.value),17)]}):x("",!0)],16,Ot)}pe.render=Bt;const _t={class:"w-full"},Mt={__name:"AppChatForm",props:["currentUser"],emits:["onMessage"],setup(e,{emit:t}){const a=t,o=e,r=Ie({message:""}),n=({values:l})=>{const i={};return l.message||(i.message=[{message:""}]),{values:l,errors:i}},d=({valid:l,values:i,reset:s})=>{l&&(a("onMessage",{username:o.currentUser.username,id:o.currentUser.id,message:i.message}),s())};return(l,i)=>(u(),c("footer",_t,[w(L(Ae),{initialValues:r,resolver:n,onSubmit:d,class:"flex gap-4 w-full"},{default:E(()=>[w(L(Te),{name:"message",type:"text",placeholder:"Digite sua mensagem",fluid:"",autocomplete:"off"}),w(L(Z),{type:"submit",label:"Enviar"})]),_:1},8,["initialValues"])]))}},Ft={class:"h-full w-full flex flex-col gap-4 min-w-0"},jt={__name:"AppChat",props:["messages","currentUser"],emits:["onMessage"],setup(e,{emit:t}){const a=t,o=e,r=z(null),n=d=>{const{status:l,id:i}=d,s=i===o.currentUser.id;if(l==="welcome")return{li:"items-center",p:"text-gray-400",span:"hidden"};const p="text-sm font-bold bg-gradient-to-r from-gray-100 to-gray-300 p-3.5 mt-[-0.75rem] rounded-2xl text-gray-950 break-words max-w-[80%]";return{li:s?"items-end":"items-start",p:s?p:`${p} rounded-tl-none`,span:s?"hidden":"font-bold text-sm px-4 py-1 rounded rounded-bl-none z-10 bg-gradient-to-r from-emerald-900 to-emerald-600"}};return Ue(()=>o.messages,()=>{Ve(()=>{const d=r.value.scrollHeight;r.value.scrollTo(0,d)})},{deep:!0}),(d,l)=>(u(),c("section",Ft,[b("ul",{ref_key:"messagesContainer",ref:r,class:"max m-0 list-none rounded shadow shadow-emerald-900 p-4 flex flex-col gap-2 h-full overflow-y-auto"},[(u(!0),c(I,null,G(e.messages,i=>(u(),c("li",{key:i.id,class:D([n(i).li,"p-2 flex flex-col"])},[b("span",{style:le({color:i.color}),class:D(n(i).span)},$(i.username),7),b("p",{class:D(n(i).p)},$(i.message),3)],2))),128))],512),w(Mt,{onOnMessage:l[0]||(l[0]=i=>a("onMessage",i)),currentUser:e.currentUser},null,8,["currentUser"])]))}},It={class:"grid grid-cols-10 gap-4"},Tt={__name:"AppDraw",props:["numbers","currentUser"],emits:["onPickNumber"],setup(e,{emit:t}){const a=e,o=t,r=s=>{const p={free:{classes:i.value?"!cursor-not-allowed":"cursor-pointer",severity:"primary",disabled:i.value},used:{classes:"!cursor-not-allowed",severity:"secondary",disabled:!0}};return s.id?p.used:p.free},n=He(),d=z(!1),l=async(s,p)=>{d.value=!0;try{const{id:h,username:f}=p;await Ne({number:Number(s),id:h,username:f}),n.add({severity:"success",summary:"Boa sorte!",detail:`O seu número da sorte é ${s}`,life:3e3}),o("onPickNumber",s)}catch{n.add({severity:"error",summary:"Erro",detail:"Ocorreu um erro ao escolher o número da sorte. Tente novamente",life:3e3}),d.value=!1}},i=U(()=>!a.currentUser||!a.numbers?!1:!!Object.values(a.numbers).find(s=>s.id===a.currentUser.id));return(s,p)=>(u(),S(L(X),{modal:"",closable:i.value,header:"Escolha seu número da sorte",class:"w-full max-w-150 h-fit sm:!block !hidden overflow-y-auto"},{default:E(()=>[b("div",It,[(u(!0),c(I,null,G(e.numbers,(h,f)=>(u(),S(L(Z),{label:f,rounded:"",key:f,onClick:C=>l(f,e.currentUser),class:D(r(h).classes),severity:r(h).severity,disabled:r(h).disabled||d.value},null,8,["label","onClick","class","severity","disabled"]))),128))])]),_:1},8,["closable"]))}},At={class:"m-0 list-none shadow shadow-emerald-900 rounded p-4 flex flex-col gap-2 w-65 min-w-65"},Ut={class:"flex flex-1 items-center gap-2 w-full min-w-0"},Vt=["title"],Ht={__name:"AppList",props:["users","currentUser"],emits:["feeling-lucky"],setup(e,{emit:t}){const a=t,o=e,r=d=>{if(d==="admin"){const l=`O usuário ${o.currentUser.username} encontrou o easter egg. Informe ao restante do chat que ${o.currentUser.username} foi encontrar a sorte grande. Mantenha o mistério, mas instigue o resto do chat para participar.`;a("feeling-lucky",l)}},n=d=>d.charAt(0).toUpperCase()+d.slice(1);return(d,l)=>(u(),c("ul",At,[(u(!0),c(I,null,G(e.users,i=>(u(),c("li",{key:i.id,class:"p-2 flex items-center justify-content-between"},[b("div",Ut,[w(L(ue),{class:D(i.info.role==="admin"?"cursor-help":"cursor-pointer"),title:i.info.role==="admin"?"Pra que serve esse botão?":"Não está aqui",label:i.info.short,size:"small",onClick:s=>r(i.info.role),shape:"circle"},null,8,["class","title","label","onClick"]),b("span",{class:"font-bold text-sm truncate max-w-[80%]",style:le({color:i.info.color}),title:i.username},$(i.username),13,Vt)]),w(L(pe),{value:n(i.info.role),severity:i.info.badge},null,8,["value","severity"])]))),128))]))}},Nt="/assets/alisa-pelo-CXaaW0Du.jpeg",Rt={class:"h-full w-full flex flex-col gap-10 items-center justify-center bg-gradient-to-r from-red-950 via-red-900 to-red-950"},Kt={class:"text-gray-300"},Zt={__name:"AppGameOver",setup(e){const t=U(()=>{const a=window.sessionStorage.getItem("chatUser"),{username:o}=JSON.parse(atob(a));return`Não foi dessa vez ${o}. 😿`});return(a,o)=>(u(),c("main",Rt,[o[0]||(o[0]=b("h1",{class:"text-5xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 text-transparent bg-clip-text"}," Game Over ",-1)),b("p",Kt,$(t.value),1),o[1]||(o[1]=b("img",{class:"w-50 h-50 rounded-4xl",src:Nt},null,-1)),o[2]||(o[2]=b("p",{class:"text-gray-300"}," Melhor você arrumar um trabalho! Claramente você não fecha com a Tropa do Tigrinho. ",-1))]))}},Gt="/assets/deu-green-DkBvcFH6.jpg",Xt={class:"h-full w-full flex flex-col gap-10 items-center justify-center bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950"},Yt={class:"text-gray-300"},Wt={__name:"AppWinner",setup(e){const t=U(()=>{const a=window.sessionStorage.getItem("chatUser"),{username:o}=JSON.parse(atob(a));return`O tigrinho soltou a cartinha, ${o} e seu nome tava nela!! 🔥🐅🔥`});return(a,o)=>(u(),c("main",Xt,[o[0]||(o[0]=b("h1",{class:"text-5xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 text-transparent bg-clip-text"}," Chama!! ",-1)),b("p",Yt,$(t.value),1),o[1]||(o[1]=b("img",{class:"w-50 h-50 rounded-4xl",src:Gt},null,-1)),o[2]||(o[2]=b("p",{class:"text-gray-300"},"Aparentemente você fecha com a Tropa do Tigrinho!",-1))]))}},qt={__name:"AppResult",props:["result"],setup(e){return(t,a)=>(u(),S(L(X),{class:"h-fit w-200",modal:"","show-header":!1,closable:!1,pt:{content:{style:{padding:"0"}}}},{default:E(()=>[(u(),S(B(e.result==="winner"?Wt:Zt),{class:"rounded-xl p-4"}))]),_:1}))}},Jt={key:0,class:"h-full w-full sm:flex hidden gap-4"},ea={__name:"AppChatView",setup(e){let t;const a=z(null),o=z([]),r=z([]),n=z({}),d=z(!1),l=z({visible:!1,result:null});Re(()=>{t=new WebSocket("ws://localhost:8080/api/ws"),i()});const i=()=>{const m=window.sessionStorage.getItem("chatUser"),{id:v,username:y}=JSON.parse(atob(m));t.onopen=async()=>{console.log("Connected to ws server"),a.value={id:v,username:y};const T=window.sessionStorage.getItem("users");if(T)o.value=JSON.parse(T);else try{f({username:y,id:v,message:`${y} entrou no chat.`,status:"welcome"}),s(`Dê boas vindas a "${y}". Avise "@${y}" que há um easter egg.`)}catch{return}},t.onmessage=p},s=async m=>{try{const{message:v}=await Ke(m);f({username:"Gemini",id:"gemini",message:v})}catch{f({username:"Gemini",id:"gemini",message:`Desculpe, não foi possível processar sua mensagem, ${a.value.username}.`})}},p=({data:m})=>{const{id:v,username:y,message:T,connectedUsers:V,numbersList:me,result:fe,status:ge}=JSON.parse(m);if(fe){h(m);return}n.value=me,V&&(window.sessionStorage.setItem("users",JSON.stringify(V)),o.value=V);const W=o.value.find(he=>he.id===v),be=W?W.info.color:"#000000";r.value.push({id:v,username:y,message:T,color:be,status:ge})},h=m=>{const{result:v}=JSON.parse(m);l.value={visible:!0,result:v}},f=m=>{if(t.send(JSON.stringify(m)),m.message.toLowerCase().includes("@gemini")){m.message=m.message.replace("@gemini","");const y=`${m.username} disse: ${m.message}`;s(y)}},C=async m=>{await s(m),setTimeout(()=>{d.value=!0},2e3)},Y=async m=>{await s(`Diga ao chat que o número da sorte de ${a.value.username} é ${m}`),setTimeout(()=>{d.value=!1},1e3)};return(m,v)=>(u(),c(I,null,[a.value?(u(),c("section",Jt,[w(jt,{messages:r.value,onOnMessage:f,currentUser:a.value},null,8,["messages","currentUser"]),w(Ht,{users:o.value,onFeelingLucky:v[0]||(v[0]=y=>C(y)),currentUser:a.value},null,8,["users","currentUser"]),w(Tt,{visible:d.value,"onUpdate:visible":v[1]||(v[1]=y=>d.value=y),numbers:n.value,currentUser:a.value,onOnPickNumber:Y},null,8,["visible","numbers","currentUser"])])):x("",!0),w(qt,{visible:l.value.visible,"onUpdate:visible":v[2]||(v[2]=y=>l.value.visible=y),result:l.value.result},null,8,["visible","result"]),v[3]||(v[3]=b("section",{class:"h-full w-full sm:hidden flex items-center justify-center"},[b("h2",{class:"text-2xl font-bold text-emerald-600 text-center"}," Não otimizado para telas pequenas ")],-1))],64))}};export{ea as default};
