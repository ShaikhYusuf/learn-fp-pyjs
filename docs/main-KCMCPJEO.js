import{$ as Lt,$a as tr,A as Aa,Aa as Ha,Ab as ns,B as At,Ba as Ga,Bb as ve,C as Ye,Ca as Ja,Cb as we,D as Yi,Da as Ya,Db as os,E as Ta,Ea as be,Eb as _o,F as La,Fa as Qa,Fb as is,G as ka,Ga as b,Gb as or,H as ge,Ha as Nt,Hb as le,I as Tt,Ia as Za,Ib as rs,J as re,Ja as yo,Jb as as,K as D,Ka as gn,Kb as F,L as pt,La as bo,Lb as Ke,M as Oa,Ma as Xi,Mb as ss,N as v,Na as Qe,Nb as Co,O as U,Oa as yt,Ob as ls,P as Fa,Pa as N,Pb as ds,Q as _,Qa as vo,Qb as zt,R as x,Ra as yn,Rb as cs,S as p,Sa as Ka,Sb as us,T as ht,Ta as wo,Tb as Ee,U as Ra,Ua as C,Ub as ir,V as pe,Va as V,Vb as ms,W as ae,Wa as $,Wb as ps,X as K,Xa as Bt,Y as X,Ya as Re,Z as se,Za as er,_ as T,_a as bn,a as g,aa as Na,ab as nr,b as O,ba as Ae,bb as bt,ca as ee,cb as Ze,d as B,da as ft,db as vn,e as co,ea as hn,eb as wn,f as Ia,fa as z,fb as En,g as uo,ga as Ba,gb as A,h as ue,ha as qa,hb as h,i as me,ia as kt,ib as y,j as Se,ja as fn,jb as qe,k as Z,ka as Qi,kb as s,l as E,la as ye,lb as a,m as mo,ma as za,mb as Eo,n as Hi,na as Zi,nb as Xa,o as Ma,oa as Wa,ob as es,p as R,pa as Ot,pb as ne,q as Gi,qa as fo,qb as H,r as Fe,ra as Ft,rb as ts,s as Ji,sa as ja,sb as q,t as Pa,ta as Ki,tb as vt,u as po,ua as go,ub as ze,v as ho,va as gt,vb as qt,w as De,wa as Rt,wb as te,x as Pt,xa as Ua,xb as xo,y as mt,ya as Va,yb as r,z as Je,za as $a,zb as he}from"./chunk-A5W7MPIQ.js";var hs=null;function We(){return hs}function rr(o){hs??=o}var xn=class{},je=(()=>{class o{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:()=>p(fs),providedIn:"platform"})}return o})(),ar=new _(""),fs=(()=>{class o extends je{_location;_history;_doc=p(T);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return We().getBaseHref(this._doc)}onPopState(e){let n=We().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=We().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:()=>new o,providedIn:"platform"})}return o})();function So(o,t){return o?t?o.endsWith("/")?t.startsWith("/")?o+t.slice(1):o+t:t.startsWith("/")?o+t:`${o}/${t}`:o:t}function gs(o){let t=o.search(/#|\?|$/);return o[t-1]==="/"?o.slice(0,t-1)+o.slice(t):o}function Te(o){return o&&o[0]!=="?"?`?${o}`:o}var Le=(()=>{class o{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:()=>p(Io),providedIn:"root"})}return o})(),Do=new _(""),Io=(()=>{class o extends Le{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??p(T).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return So(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Te(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,l){let d=this.prepareExternalUrl(i+Te(l));this._platformLocation.pushState(e,n,d)}replaceState(e,n,i,l){let d=this.prepareExternalUrl(i+Te(l));this._platformLocation.replaceState(e,n,d)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||o)(x(je),x(Do,8))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Xe=(()=>{class o{_subject=new ue;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Yd(gs(ys(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Te(n))}normalize(e){return o.stripTrailingSlash(Jd(this._basePath,ys(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Te(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Te(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=Te;static joinWithSlash=So;static stripTrailingSlash=gs;static \u0275fac=function(n){return new(n||o)(x(Le))};static \u0275prov=v({token:o,factory:()=>Gd(),providedIn:"root"})}return o})();function Gd(){return new Xe(x(Le))}function Jd(o,t){if(!o||!t.startsWith(o))return t;let e=t.substring(o.length);return e===""||["/",";","?","#"].includes(e[0])?e:t}function ys(o){return o.replace(/\/index.html$/,"")}function Yd(o){if(new RegExp("^(https?:)?//").test(o)){let[,e]=o.split(/\/\/[^\/]+/);return e}return o}var sr=(()=>{class o extends Le{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=So(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,i,l){let d=this.prepareExternalUrl(i+Te(l))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,d)}replaceState(e,n,i,l){let d=this.prepareExternalUrl(i+Te(l))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,d)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||o)(x(je),x(Do,8))};static \u0275prov=v({token:o,factory:o.\u0275fac})}return o})();var Mo=class{$implicit;ngForOf;index;count;constructor(t,e,n,i){this.$implicit=t,this.ngForOf=e,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Ao=(()=>{class o{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,i){this._viewContainer=e,this._template=n,this._differs=i}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((i,l,d)=>{if(i.previousIndex==null)n.createEmbeddedView(this._template,new Mo(i.item,this._ngForOf,-1,-1),d===null?void 0:d);else if(d==null)n.remove(l===null?void 0:l);else if(l!==null){let c=n.get(l);n.move(c,d),bs(c,i)}});for(let i=0,l=n.length;i<l;i++){let c=n.get(i).context;c.index=i,c.count=l,c.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let l=n.get(i.currentIndex);bs(l,i)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||o)(N(yn),N(Xi),N(cs))};static \u0275dir=$({type:o,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return o})();function bs(o,t){o.context.$implicit=t.item}var _n=(()=>{class o{_viewContainer;_context=new Po;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){vs(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){vs(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||o)(N(yn),N(Xi))};static \u0275dir=$({type:o,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return o})(),Po=class{$implicit=null;ngIf=null};function vs(o,t){if(o&&!o.createEmbeddedView)throw new D(2020,!1)}var et=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=V({type:o});static \u0275inj=U({})}return o})();function Cn(o,t){t=encodeURIComponent(t);for(let e of o.split(";")){let n=e.indexOf("="),[i,l]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===t)return decodeURIComponent(l)}return null}var wt=class{};var dr="browser";function Es(o){return o===dr}var cr=(()=>{class o{static \u0275prov=v({token:o,providedIn:"root",factory:()=>new lr(p(T),window)})}return o})(),lr=class{document;window;offset=()=>[0,0];constructor(t,e){this.document=t,this.window=e}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t,e){this.window.scrollTo(O(g({},e),{left:t[0],top:t[1]}))}scrollToAnchor(t,e){let n=Zd(this.document,t);n&&(this.scrollToElement(n,e),n.focus({preventScroll:!0}))}setHistoryScrollRestoration(t){try{this.window.history.scrollRestoration=t}catch(e){console.warn(pt(2400,!1))}}scrollToElement(t,e){let n=t.getBoundingClientRect(),i=n.left+this.window.pageXOffset,l=n.top+this.window.pageYOffset,d=this.offset();this.window.scrollTo(O(g({},e),{left:i-d[0],top:l-d[1]}))}};function Zd(o,t){let e=o.getElementById(t)||o.getElementsByName(t)[0];if(e)return e;if(typeof o.createTreeWalker=="function"&&o.body&&typeof o.body.attachShadow=="function"){let n=o.createTreeWalker(o.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let l=i.shadowRoot;if(l){let d=l.getElementById(t)||l.querySelector(`[name="${t}"]`);if(d)return d}i=n.nextNode()}}return null}var Sn=class{_doc;constructor(t){this._doc=t}manager},To=(()=>{class o extends Sn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i,l){return e.addEventListener(n,i,l),()=>this.removeEventListener(e,n,i,l)}removeEventListener(e,n,i,l){return e.removeEventListener(n,i,l)}static \u0275fac=function(n){return new(n||o)(x(T))};static \u0275prov=v({token:o,factory:o.\u0275fac})}return o})(),Oo=new _(""),fr=(()=>{class o{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(d=>{d.manager=this});let i=e.filter(d=>!(d instanceof To));this._plugins=i.slice().reverse();let l=e.find(d=>d instanceof To);l&&this._plugins.push(l)}addEventListener(e,n,i,l){return this._findPluginFor(n).addEventListener(e,n,i,l)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(l=>l.supports(e)),!n)throw new D(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||o)(x(Oo),x(ee))};static \u0275prov=v({token:o,factory:o.\u0275fac})}return o})(),mr="ng-app-id";function xs(o){for(let t of o)t.remove()}function _s(o,t){let e=t.createElement("style");return e.textContent=o,e}function Kd(o,t,e,n){let i=o.head?.querySelectorAll(`style[${mr}="${t}"],link[${mr}="${t}"]`);if(i)for(let l of i)l.removeAttribute(mr),l instanceof HTMLLinkElement?n.set(l.href.slice(l.href.lastIndexOf("/")+1),{usage:0,elements:[l]}):l.textContent&&e.set(l.textContent,{usage:0,elements:[l]})}function hr(o,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",o),e}var gr=(()=>{class o{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,i,l={}){this.doc=e,this.appId=n,this.nonce=i,Kd(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let i of e)this.addUsage(i,this.inline,_s);n?.forEach(i=>this.addUsage(i,this.external,hr))}removeStyles(e,n){for(let i of e)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,n,i){let l=n.get(e);l?l.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(d=>this.addElement(d,i(e,this.doc)))})}removeUsage(e,n){let i=n.get(e);i&&(i.usage--,i.usage<=0&&(xs(i.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])xs(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(e,_s(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(e,hr(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||o)(x(T),x(Zi),x(Ft,8),x(Ot))};static \u0275prov=v({token:o,factory:o.\u0275fac})}return o})(),pr={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},yr=/%COMP%/g;var Ss="%COMP%",Xd=`_nghost-${Ss}`,ec=`_ngcontent-${Ss}`,tc=!0,nc=new _("",{factory:()=>tc});function oc(o){return ec.replace(yr,o)}function ic(o){return Xd.replace(yr,o)}function Ds(o,t){return t.map(e=>e.replace(yr,o))}var Mn=(()=>{class o{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,i,l,d,c,u=null,m=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=l,this.doc=d,this.ngZone=c,this.nonce=u,this.tracingService=m,this.defaultRenderer=new Dn(e,d,c,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,n);return i instanceof ko?i.applyToHost(e):i instanceof In&&i.applyStyles(),i}getOrCreateRenderer(e,n){let i=this.rendererByCompId,l=i.get(n.id);if(!l){let d=this.doc,c=this.ngZone,u=this.eventManager,m=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,w=this.tracingService;switch(n.encapsulation){case go.Emulated:l=new ko(u,m,n,this.appId,f,d,c,w);break;case go.ShadowDom:return new Lo(u,e,n,d,c,this.nonce,w,m);case go.ExperimentalIsolatedShadowDom:return new Lo(u,e,n,d,c,this.nonce,w);default:l=new In(u,m,n,f,d,c,w);break}i.set(n.id,l)}return l}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||o)(x(fr),x(gr),x(Zi),x(nc),x(T),x(ee),x(Ft),x(yo,8))};static \u0275prov=v({token:o,factory:o.\u0275fac})}return o})(),Dn=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,n,i){this.eventManager=t,this.doc=e,this.ngZone=n,this.tracingService=i}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(pr[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(Cs(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(Cs(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new D(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,i){if(i){e=i+":"+e;let l=pr[i];l?t.setAttributeNS(l,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let i=pr[n];i?t.removeAttributeNS(i,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,i){i&(Nt.DashCase|Nt.Important)?t.style.setProperty(e,n,i&Nt.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&Nt.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n,i){if(typeof t=="string"&&(t=We().getGlobalEventTarget(this.doc,t),!t))throw new D(5102,!1);let l=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(l=this.tracingService.wrapEventListener(t,e,l)),this.eventManager.addEventListener(t,e,l,i)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;t(e)===!1&&e.preventDefault()}}};function Cs(o){return o.tagName==="TEMPLATE"&&o.content!==void 0}var Lo=class extends Dn{hostEl;sharedStylesHost;shadowRoot;constructor(t,e,n,i,l,d,c,u){super(t,i,l,c),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let m=n.styles;m=Ds(n.id,m);for(let w of m){let P=document.createElement("style");d&&P.setAttribute("nonce",d),P.textContent=w,this.shadowRoot.appendChild(P)}let f=n.getExternalStyles?.();if(f)for(let w of f){let P=hr(w,i);d&&P.setAttribute("nonce",d),this.shadowRoot.appendChild(P)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},In=class extends Dn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,n,i,l,d,c,u){super(t,l,d,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let m=n.styles;this.styles=u?Ds(u,m):m,this.styleUrls=n.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Za.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ko=class extends In{contentAttr;hostAttr;constructor(t,e,n,i,l,d,c,u){let m=i+"-"+n.id;super(t,e,n,l,d,c,u,m),this.contentAttr=oc(m),this.hostAttr=ic(m)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}};var Fo=class o extends xn{supportsDOMEvents=!0;static makeCurrent(){rr(new o)}onAndCancel(t,e,n,i){return t.addEventListener(e,n,i),()=>{t.removeEventListener(e,n,i)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=ac();return e==null?null:sc(e)}resetBaseElement(){Pn=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Cn(document.cookie,t)}},Pn=null;function ac(){return Pn=Pn||document.head.querySelector("base"),Pn?Pn.getAttribute("href"):null}function sc(o){return new URL(o,document.baseURI).pathname}var lc=(()=>{class o{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac})}return o})(),Is=["alt","control","meta","shift"],dc={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},cc={alt:o=>o.altKey,control:o=>o.ctrlKey,meta:o=>o.metaKey,shift:o=>o.shiftKey},Ms=(()=>{class o extends Sn{constructor(e){super(e)}supports(e){return o.parseEventName(e)!=null}addEventListener(e,n,i,l){let d=o.parseEventName(n),c=o.eventCallback(d.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>We().onAndCancel(e,d.domEventName,c,l))}static parseEventName(e){let n=e.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let l=o._normalizeKey(n.pop()),d="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),d="code."),Is.forEach(m=>{let f=n.indexOf(m);f>-1&&(n.splice(f,1),d+=m+".")}),d+=l,n.length!=0||l.length===0)return null;let u={};return u.domEventName=i,u.fullKey=d,u}static matchEventFullKeyCode(e,n){let i=dc[e.key]||e.key,l="";return n.indexOf("code.")>-1&&(i=e.code,l="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Is.forEach(d=>{if(d!==i){let c=cc[d];c(e)&&(l+=d+".")}}),l+=i,l===n)}static eventCallback(e,n,i){return l=>{o.matchEventFullKeyCode(l,e)&&i.runGuarded(()=>n(l))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||o)(x(T))};static \u0275prov=v({token:o,factory:o.\u0275fac})}return o})();function br(o,t,e){return B(this,null,function*(){let n=g({rootComponent:o},uc(t,e));return us(n)})}function uc(o,t){return{platformRef:t?.platformRef,appProviders:[...gc,...o?.providers??[]],platformProviders:fc}}function mc(){Fo.makeCurrent()}function pc(){return new ft}function hc(){return za(document),document}var fc=[{provide:Ot,useValue:dr},{provide:Wa,useValue:mc,multi:!0},{provide:T,useFactory:hc}];var gc=[{provide:Ra,useValue:"root"},{provide:ft,useFactory:pc},{provide:Oo,useClass:To,multi:!0},{provide:Oo,useClass:Ms,multi:!0},Mn,gr,fr,{provide:Qe,useExisting:Mn},{provide:wt,useClass:lc},[]];var tt=class o{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let i=e.slice(0,n),l=e.slice(n+1).trim();this.addHeaderEntry(i,l)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof o?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new o;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof o?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let i=(t.op==="a"?this.headers.get(e):void 0)||[];i.push(...n),this.headers.set(e,i);break;case"d":let l=t.value;if(!l)this.headers.delete(e),this.normalizedNames.delete(e);else{let d=this.headers.get(e);if(!d)return;d=d.filter(c=>l.indexOf(c)===-1),d.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,d)}break}}addHeaderEntry(t,e){let n=t.toLowerCase();this.maybeSetNormalizedName(t,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(l=>l.toString()),i=t.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(t,i)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var No=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}},Bo=class{encodeKey(t){return Ps(t)}encodeValue(t){return Ps(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function yc(o,t){let e=new Map;return o.length>0&&o.replace(/^\?/,"").split("&").forEach(i=>{let l=i.indexOf("="),[d,c]=l==-1?[t.decodeKey(i),""]:[t.decodeKey(i.slice(0,l)),t.decodeValue(i.slice(l+1))],u=e.get(d)||[];u.push(c),e.set(d,u)}),e}var bc=/%(\d[a-f0-9])/gi,vc={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ps(o){return encodeURIComponent(o).replace(bc,(t,e)=>vc[e]??t)}function Ro(o){return`${o}`}var Ue=class o{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Bo,t.fromString){if(t.fromObject)throw new D(2805,!1);this.map=yc(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],i=Array.isArray(n)?n.map(Ro):[Ro(n)];this.map.set(e,i)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let i=t[n];Array.isArray(i)?i.forEach(l=>{e.push({param:n,value:l,op:"a"})}):e.push({param:n,value:i,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new o({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(Ro(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],i=n.indexOf(Ro(t.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};function wc(o){switch(o){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function As(o){return typeof ArrayBuffer<"u"&&o instanceof ArrayBuffer}function Ts(o){return typeof Blob<"u"&&o instanceof Blob}function Ls(o){return typeof FormData<"u"&&o instanceof FormData}function Ec(o){return typeof URLSearchParams<"u"&&o instanceof URLSearchParams}var ks="Content-Type",Os="Accept",Fs="text/plain",Rs="application/json",xc=`${Rs}, ${Fs}, */*`,Wt=class o{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(t,e,n,i){this.url=e,this.method=t.toUpperCase();let l;if(wc(this.method)||i?(this.body=n!==void 0?n:null,l=i):l=n,l){if(this.reportProgress=!!l.reportProgress,this.withCredentials=!!l.withCredentials,this.keepalive=!!l.keepalive,l.responseType&&(this.responseType=l.responseType),l.headers&&(this.headers=l.headers),l.context&&(this.context=l.context),l.params&&(this.params=l.params),l.priority&&(this.priority=l.priority),l.cache&&(this.cache=l.cache),l.credentials&&(this.credentials=l.credentials),typeof l.timeout=="number"){if(l.timeout<1||!Number.isInteger(l.timeout))throw new D(2822,"");this.timeout=l.timeout}l.mode&&(this.mode=l.mode),l.redirect&&(this.redirect=l.redirect),l.integrity&&(this.integrity=l.integrity),l.referrer&&(this.referrer=l.referrer),l.referrerPolicy&&(this.referrerPolicy=l.referrerPolicy),this.transferCache=l.transferCache}if(this.headers??=new tt,this.context??=new No,!this.params)this.params=new Ue,this.urlWithParams=e;else{let d=this.params.toString();if(d.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),u=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+u+d}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||As(this.body)||Ts(this.body)||Ls(this.body)||Ec(this.body)?this.body:this.body instanceof Ue?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ls(this.body)?null:Ts(this.body)?this.body.type||null:As(this.body)?null:typeof this.body=="string"?Fs:this.body instanceof Ue?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Rs:null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,i=t.responseType||this.responseType,l=t.keepalive??this.keepalive,d=t.priority||this.priority,c=t.cache||this.cache,u=t.mode||this.mode,m=t.redirect||this.redirect,f=t.credentials||this.credentials,w=t.referrer||this.referrer,P=t.integrity||this.integrity,ie=t.referrerPolicy||this.referrerPolicy,J=t.transferCache??this.transferCache,W=t.timeout??this.timeout,M=t.body!==void 0?t.body:this.body,L=t.withCredentials??this.withCredentials,j=t.reportProgress??this.reportProgress,ce=t.headers||this.headers,Y=t.params||this.params,mn=t.context??this.context;return t.setHeaders!==void 0&&(ce=Object.keys(t.setHeaders).reduce((pn,ut)=>pn.set(ut,t.setHeaders[ut]),ce)),t.setParams&&(Y=Object.keys(t.setParams).reduce((pn,ut)=>pn.set(ut,t.setParams[ut]),Y)),new o(e,n,M,{params:Y,headers:ce,context:mn,reportProgress:j,responseType:i,withCredentials:L,transferCache:J,keepalive:l,cache:c,priority:d,timeout:W,mode:u,redirect:m,credentials:f,referrer:w,integrity:P,referrerPolicy:ie})}},Et=(function(o){return o[o.Sent=0]="Sent",o[o.UploadProgress=1]="UploadProgress",o[o.ResponseHeader=2]="ResponseHeader",o[o.DownloadProgress=3]="DownloadProgress",o[o.Response=4]="Response",o[o.User=5]="User",o})(Et||{}),Ut=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(t,e=200,n="OK"){this.headers=t.headers||new tt,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.redirected=t.redirected,this.responseType=t.responseType,this.ok=this.status>=200&&this.status<300}},qo=class o extends Ut{constructor(t={}){super(t)}type=Et.ResponseHeader;clone(t={}){return new o({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},An=class o extends Ut{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=Et.Response;clone(t={}){return new o({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected,responseType:t.responseType??this.responseType})}},jt=class extends Ut{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},_c=200,Cc=204;var Sc=new _("");var Dc=/^\)\]\}',?\n/;var wr=(()=>{class o{xhrFactory;tracingService=p(yo,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new D(-2800,!1);let n=this.xhrFactory;return E(null).pipe(ge(()=>new uo(l=>{let d=n.build();if(d.open(e.method,e.urlWithParams),e.withCredentials&&(d.withCredentials=!0),e.headers.forEach((M,L)=>d.setRequestHeader(M,L.join(","))),e.headers.has(Os)||d.setRequestHeader(Os,xc),!e.headers.has(ks)){let M=e.detectContentTypeHeader();M!==null&&d.setRequestHeader(ks,M)}if(e.timeout&&(d.timeout=e.timeout),e.responseType){let M=e.responseType.toLowerCase();d.responseType=M!=="json"?M:"text"}let c=e.serializeBody(),u=null,m=()=>{if(u!==null)return u;let M=d.statusText||"OK",L=new tt(d.getAllResponseHeaders()),j=d.responseURL||e.url;return u=new qo({headers:L,status:d.status,statusText:M,url:j}),u},f=this.maybePropagateTrace(()=>{let{headers:M,status:L,statusText:j,url:ce}=m(),Y=null;L!==Cc&&(Y=typeof d.response>"u"?d.responseText:d.response),L===0&&(L=Y?_c:0);let mn=L>=200&&L<300;if(e.responseType==="json"&&typeof Y=="string"){let pn=Y;Y=Y.replace(Dc,"");try{Y=Y!==""?JSON.parse(Y):null}catch(ut){Y=pn,mn&&(mn=!1,Y={error:ut,text:Y})}}mn?(l.next(new An({body:Y,headers:M,status:L,statusText:j,url:ce||void 0})),l.complete()):l.error(new jt({error:Y,headers:M,status:L,statusText:j,url:ce||void 0}))}),w=this.maybePropagateTrace(M=>{let{url:L}=m(),j=new jt({error:M,status:d.status||0,statusText:d.statusText||"Unknown Error",url:L||void 0});l.error(j)}),P=w;e.timeout&&(P=this.maybePropagateTrace(M=>{let{url:L}=m(),j=new jt({error:new DOMException("Request timed out","TimeoutError"),status:d.status||0,statusText:d.statusText||"Request timeout",url:L||void 0});l.error(j)}));let ie=!1,J=this.maybePropagateTrace(M=>{ie||(l.next(m()),ie=!0);let L={type:Et.DownloadProgress,loaded:M.loaded};M.lengthComputable&&(L.total=M.total),e.responseType==="text"&&d.responseText&&(L.partialText=d.responseText),l.next(L)}),W=this.maybePropagateTrace(M=>{let L={type:Et.UploadProgress,loaded:M.loaded};M.lengthComputable&&(L.total=M.total),l.next(L)});return d.addEventListener("load",f),d.addEventListener("error",w),d.addEventListener("timeout",P),d.addEventListener("abort",w),e.reportProgress&&(d.addEventListener("progress",J),c!==null&&d.upload&&d.upload.addEventListener("progress",W)),d.send(c),l.next({type:Et.Sent}),()=>{d.removeEventListener("error",w),d.removeEventListener("abort",w),d.removeEventListener("load",f),d.removeEventListener("timeout",P),e.reportProgress&&(d.removeEventListener("progress",J),c!==null&&d.upload&&d.upload.removeEventListener("progress",W)),d.readyState!==d.DONE&&d.abort()}})))}static \u0275fac=function(n){return new(n||o)(x(wt))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function Ic(o,t){return t(o)}function Mc(o,t,e){return(n,i)=>ae(e,()=>t(n,l=>o(l,i)))}var Ns=new _("",{factory:()=>[]}),Bs=new _(""),qs=new _("",{factory:()=>!0});var Er=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:function(n){let i=null;return n?i=new(n||o):i=x(wr),i},providedIn:"root"})}return o})();var zo=(()=>{class o{backend;injector;chain=null;pendingTasks=p(qa);contributeToStability=p(qs);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Ns),...this.injector.get(Bs,[])]));this.chain=n.reduceRight((i,l)=>Mc(i,l,this.injector),Ic)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(At(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||o)(x(Er),x(pe))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),xr=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:function(n){let i=null;return n?i=new(n||o):i=x(zo),i},providedIn:"root"})}return o})();function vr(o,t){return{body:t,headers:o.headers,context:o.context,observe:o.observe,params:o.params,reportProgress:o.reportProgress,responseType:o.responseType,withCredentials:o.withCredentials,credentials:o.credentials,transferCache:o.transferCache,timeout:o.timeout,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,integrity:o.integrity,referrer:o.referrer,referrerPolicy:o.referrerPolicy}}var nt=(()=>{class o{handler;constructor(e){this.handler=e}request(e,n,i={}){let l;if(e instanceof Wt)l=e;else{let u;i.headers instanceof tt?u=i.headers:u=new tt(i.headers);let m;i.params&&(i.params instanceof Ue?m=i.params:m=new Ue({fromObject:i.params})),l=new Wt(e,n,i.body!==void 0?i.body:null,{headers:u,context:i.context,params:m,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let d=E(l).pipe(mt(u=>this.handler.handle(u)));if(e instanceof Wt||i.observe==="events")return d;let c=d.pipe(De(u=>u instanceof An));switch(i.observe||"body"){case"body":switch(l.responseType){case"arraybuffer":return c.pipe(R(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new D(2806,!1);return u.body}));case"blob":return c.pipe(R(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new D(2807,!1);return u.body}));case"text":return c.pipe(R(u=>{if(u.body!==null&&typeof u.body!="string")throw new D(2808,!1);return u.body}));default:return c.pipe(R(u=>u.body))}case"response":return c;default:throw new D(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Ue().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,i={}){return this.request("PATCH",e,vr(i,n))}post(e,n,i={}){return this.request("POST",e,vr(i,n))}put(e,n,i={}){return this.request("PUT",e,vr(i,n))}static \u0275fac=function(n){return new(n||o)(x(xr))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Pc=new _("",{factory:()=>!0}),Ac="XSRF-TOKEN",Tc=new _("",{factory:()=>Ac}),Lc="X-XSRF-TOKEN",kc=new _("",{factory:()=>Lc}),Oc=(()=>{class o{cookieName=p(Tc);doc=p(T);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Cn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),zs=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:function(n){let i=null;return n?i=new(n||o):i=x(Oc),i},providedIn:"root"})}return o})();function Fc(o,t){if(!p(Pc)||o.method==="GET"||o.method==="HEAD")return t(o);try{let i=p(je).href,{origin:l}=new URL(i),{origin:d}=new URL(o.url,l);if(l!==d)return t(o)}catch(i){return t(o)}let e=p(zs).getToken(),n=p(kc);return e!=null&&!o.headers.has(n)&&(o=o.clone({headers:o.headers.set(n,e)})),t(o)}function _r(...o){let t=[nt,zo,{provide:xr,useExisting:zo},{provide:Er,useFactory:()=>p(Sc,{optional:!0})??p(wr)},{provide:Ns,useValue:Fc,multi:!0}];for(let e of o)t.push(...e.\u0275providers);return ht(t)}var Ws=(()=>{class o{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||o)(x(T))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Sr=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:function(n){let i=null;return n?i=new(n||o):i=x(Nc),i},providedIn:"root"})}return o})(),Nc=(()=>{class o extends Sr{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case be.NONE:return n;case be.HTML:return Rt(n,"HTML")?gt(n):Ya(this._doc,String(n)).toString();case be.STYLE:return Rt(n,"Style")?gt(n):n;case be.SCRIPT:if(Rt(n,"Script"))return gt(n);throw new D(5200,!1);case be.URL:return Rt(n,"URL")?gt(n):Ja(String(n));case be.RESOURCE_URL:if(Rt(n,"ResourceURL"))return gt(n);throw new D(5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(e){return Ua(e)}bypassSecurityTrustStyle(e){return Va(e)}bypassSecurityTrustScript(e){return $a(e)}bypassSecurityTrustUrl(e){return Ha(e)}bypassSecurityTrustResourceUrl(e){return Ga(e)}static \u0275fac=function(n){return new(n||o)(x(T))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var S="primary",jn=Symbol("RouteTitle"),Ar=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function _t(o){return new Ar(o)}function Dr(o,t,e){for(let n=0;n<o.length;n++){let i=o[n],l=t[n];if(i[0]===":")e[i.substring(1)]=l;else if(i!==l.path)return!1}return!0}function Qs(o,t,e){let n=e.path.split("/"),i=n.indexOf("**");if(i===-1){if(n.length>o.length||e.pathMatch==="full"&&(t.hasChildren()||n.length<o.length))return null;let u={},m=o.slice(0,n.length);return Dr(n,m,u)?{consumed:m,posParams:u}:null}if(i!==n.lastIndexOf("**"))return null;let l=n.slice(0,i),d=n.slice(i+1);if(l.length+d.length>o.length||e.pathMatch==="full"&&t.hasChildren()&&e.path!=="**")return null;let c={};return!Dr(l,o.slice(0,l.length),c)||!Dr(d,o.slice(o.length-d.length),c)?null:{consumed:o,posParams:c}}function Ho(o){return new Promise((t,e)=>{o.pipe(Ye()).subscribe({next:n=>t(n),error:n=>e(n)})})}function Bc(o,t){if(o.length!==t.length)return!1;for(let e=0;e<o.length;++e)if(!Ne(o[e],t[e]))return!1;return!0}function Ne(o,t){let e=o?Tr(o):void 0,n=t?Tr(t):void 0;if(!e||!n||e.length!=n.length)return!1;let i;for(let l=0;l<e.length;l++)if(i=e[l],!Zs(o[i],t[i]))return!1;return!0}function Tr(o){return[...Object.keys(o),...Object.getOwnPropertySymbols(o)]}function Zs(o,t){if(Array.isArray(o)&&Array.isArray(t)){if(o.length!==t.length)return!1;let e=[...o].sort(),n=[...t].sort();return e.every((i,l)=>n[l]===i)}else return o===t}function qc(o){return o.length>0?o[o.length-1]:null}function St(o){return Hi(o)?o:bn(o)?Z(Promise.resolve(o)):E(o)}function Ks(o){return Hi(o)?Ho(o):Promise.resolve(o)}var zc={exact:tl,subset:nl},Xs={exact:Wc,subset:jc,ignored:()=>!0},el={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Lr={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Us(o,t,e){return zc[e.paths](o.root,t.root,e.matrixParams)&&Xs[e.queryParams](o.queryParams,t.queryParams)&&!(e.fragment==="exact"&&o.fragment!==t.fragment)}function Wc(o,t){return Ne(o,t)}function tl(o,t,e){if(!xt(o.segments,t.segments)||!Uo(o.segments,t.segments,e)||o.numberOfChildren!==t.numberOfChildren)return!1;for(let n in t.children)if(!o.children[n]||!tl(o.children[n],t.children[n],e))return!1;return!0}function jc(o,t){return Object.keys(t).length<=Object.keys(o).length&&Object.keys(t).every(e=>Zs(o[e],t[e]))}function nl(o,t,e){return ol(o,t,t.segments,e)}function ol(o,t,e,n){if(o.segments.length>e.length){let i=o.segments.slice(0,e.length);return!(!xt(i,e)||t.hasChildren()||!Uo(i,e,n))}else if(o.segments.length===e.length){if(!xt(o.segments,e)||!Uo(o.segments,e,n))return!1;for(let i in t.children)if(!o.children[i]||!nl(o.children[i],t.children[i],n))return!1;return!0}else{let i=e.slice(0,o.segments.length),l=e.slice(o.segments.length);return!xt(o.segments,i)||!Uo(o.segments,i,n)||!o.children[S]?!1:ol(o.children[S],t,l,n)}}function Uo(o,t,e){return t.every((n,i)=>Xs[e](o[i].parameters,n.parameters))}var _e=class{root;queryParams;fragment;_queryParamMap;constructor(t=new k([],{}),e={},n=null){this.root=t,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=_t(this.queryParams),this._queryParamMap}toString(){return $c.serialize(this)}},k=class{segments;children;parent=null;constructor(t,e){this.segments=t,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Vo(this)}},ot=class{path;parameters;_parameterMap;constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap??=_t(this.parameters),this._parameterMap}toString(){return rl(this)}};function Uc(o,t){return xt(o,t)&&o.every((e,n)=>Ne(e.parameters,t[n].parameters))}function xt(o,t){return o.length!==t.length?!1:o.every((e,n)=>e.path===t[n].path)}function Vc(o,t){let e=[];return Object.entries(o.children).forEach(([n,i])=>{n===S&&(e=e.concat(t(i,n)))}),Object.entries(o.children).forEach(([n,i])=>{n!==S&&(e=e.concat(t(i,n)))}),e}var at=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:()=>new $e,providedIn:"root"})}return o})(),$e=class{parse(t){let e=new Or(t);return new _e(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){let e=`/${Tn(t.root,!0)}`,n=Jc(t.queryParams),i=typeof t.fragment=="string"?`#${Hc(t.fragment)}`:"";return`${e}${n}${i}`}},$c=new $e;function Vo(o){return o.segments.map(t=>rl(t)).join("/")}function Tn(o,t){if(!o.hasChildren())return Vo(o);if(t){let e=o.children[S]?Tn(o.children[S],!1):"",n=[];return Object.entries(o.children).forEach(([i,l])=>{i!==S&&n.push(`${i}:${Tn(l,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=Vc(o,(n,i)=>i===S?[Tn(o.children[S],!1)]:[`${i}:${Tn(n,!1)}`]);return Object.keys(o.children).length===1&&o.children[S]!=null?`${Vo(o)}/${e[0]}`:`${Vo(o)}/(${e.join("//")})`}}function il(o){return encodeURIComponent(o).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Wo(o){return il(o).replace(/%3B/gi,";")}function Hc(o){return encodeURI(o)}function kr(o){return il(o).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function $o(o){return decodeURIComponent(o)}function Vs(o){return $o(o.replace(/\+/g,"%20"))}function rl(o){return`${kr(o.path)}${Gc(o.parameters)}`}function Gc(o){return Object.entries(o).map(([t,e])=>`;${kr(t)}=${kr(e)}`).join("")}function Jc(o){let t=Object.entries(o).map(([e,n])=>Array.isArray(n)?n.map(i=>`${Wo(e)}=${Wo(i)}`).join("&"):`${Wo(e)}=${Wo(n)}`).filter(e=>e);return t.length?`?${t.join("&")}`:""}var Yc=/^[^\/()?;#]+/;function Ir(o){let t=o.match(Yc);return t?t[0]:""}var Qc=/^[^\/()?;=#]+/;function Zc(o){let t=o.match(Qc);return t?t[0]:""}var Kc=/^[^=?&#]+/;function Xc(o){let t=o.match(Kc);return t?t[0]:""}var eu=/^[^&#]+/;function tu(o){let t=o.match(eu);return t?t[0]:""}var Or=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new k([],{}):new k([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(t=0){if(t>50)throw new D(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,t));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,t)),(e.length>0||Object.keys(n).length>0)&&(i[S]=new k(e,n)),i}parseSegment(){let t=Ir(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new D(4009,!1);return this.capture(t),new ot($o(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let e=Zc(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let i=Ir(this.remaining);i&&(n=i,this.capture(n))}t[$o(e)]=$o(n)}parseQueryParam(t){let e=Xc(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let d=tu(this.remaining);d&&(n=d,this.capture(n))}let i=Vs(e),l=Vs(n);if(t.hasOwnProperty(i)){let d=t[i];Array.isArray(d)||(d=[d],t[i]=d),d.push(l)}else t[i]=l}parseParens(t,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Ir(this.remaining),l=this.remaining[i.length];if(l!=="/"&&l!==")"&&l!==";")throw new D(4010,!1);let d;i.indexOf(":")>-1?(d=i.slice(0,i.indexOf(":")),this.capture(d),this.capture(":")):t&&(d=S);let c=this.parseChildren(e+1);n[d??S]=Object.keys(c).length===1&&c[S]?c[S]:new k([],c),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new D(4011,!1)}};function al(o){return o.segments.length>0?new k([],{[S]:o}):o}function sl(o){let t={};for(let[n,i]of Object.entries(o.children)){let l=sl(i);if(n===S&&l.segments.length===0&&l.hasChildren())for(let[d,c]of Object.entries(l.children))t[d]=c;else(l.segments.length>0||l.hasChildren())&&(t[n]=l)}let e=new k(o.segments,t);return nu(e)}function nu(o){if(o.numberOfChildren===1&&o.children[S]){let t=o.children[S];return new k(o.segments.concat(t.segments),t.children)}return o}function it(o){return o instanceof _e}function ll(o,t,e=null,n=null,i=new $e){let l=dl(o);return cl(l,t,e,n,i)}function dl(o){let t;function e(l){let d={};for(let u of l.children){let m=e(u);d[u.outlet]=m}let c=new k(l.url,d);return l===o&&(t=c),c}let n=e(o.root),i=al(n);return t??i}function cl(o,t,e,n,i){let l=o;for(;l.parent;)l=l.parent;if(t.length===0)return Mr(l,l,l,e,n,i);let d=ou(t);if(d.toRoot())return Mr(l,l,new k([],{}),e,n,i);let c=iu(d,l,o),u=c.processChildren?kn(c.segmentGroup,c.index,d.commands):ml(c.segmentGroup,c.index,d.commands);return Mr(l,c.segmentGroup,u,e,n,i)}function Go(o){return typeof o=="object"&&o!=null&&!o.outlets&&!o.segmentPath}function Fn(o){return typeof o=="object"&&o!=null&&o.outlets}function $s(o,t,e){o||="\u0275";let n=new _e;return n.queryParams={[o]:t},e.parse(e.serialize(n)).queryParams[o]}function Mr(o,t,e,n,i,l){let d={};for(let[m,f]of Object.entries(n??{}))d[m]=Array.isArray(f)?f.map(w=>$s(m,w,l)):$s(m,f,l);let c;o===t?c=e:c=ul(o,t,e);let u=al(sl(c));return new _e(u,d,i)}function ul(o,t,e){let n={};return Object.entries(o.children).forEach(([i,l])=>{l===t?n[i]=e:n[i]=ul(l,t,e)}),new k(o.segments,n)}var Jo=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,e,n){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=n,t&&n.length>0&&Go(n[0]))throw new D(4003,!1);let i=n.find(Fn);if(i&&i!==qc(n))throw new D(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function ou(o){if(typeof o[0]=="string"&&o.length===1&&o[0]==="/")return new Jo(!0,0,o);let t=0,e=!1,n=o.reduce((i,l,d)=>{if(typeof l=="object"&&l!=null){if(l.outlets){let c={};return Object.entries(l.outlets).forEach(([u,m])=>{c[u]=typeof m=="string"?m.split("/"):m}),[...i,{outlets:c}]}if(l.segmentPath)return[...i,l.segmentPath]}return typeof l!="string"?[...i,l]:d===0?(l.split("/").forEach((c,u)=>{u==0&&c==="."||(u==0&&c===""?e=!0:c===".."?t++:c!=""&&i.push(c))}),i):[...i,l]},[]);return new Jo(e,t,n)}var $t=class{segmentGroup;processChildren;index;constructor(t,e,n){this.segmentGroup=t,this.processChildren=e,this.index=n}};function iu(o,t,e){if(o.isAbsolute)return new $t(t,!0,0);if(!e)return new $t(t,!1,NaN);if(e.parent===null)return new $t(e,!0,0);let n=Go(o.commands[0])?0:1,i=e.segments.length-1+n;return ru(e,i,o.numberOfDoubleDots)}function ru(o,t,e){let n=o,i=t,l=e;for(;l>i;){if(l-=i,n=n.parent,!n)throw new D(4005,!1);i=n.segments.length}return new $t(n,!1,i-l)}function au(o){return Fn(o[0])?o[0].outlets:{[S]:o}}function ml(o,t,e){if(o??=new k([],{}),o.segments.length===0&&o.hasChildren())return kn(o,t,e);let n=su(o,t,e),i=e.slice(n.commandIndex);if(n.match&&n.pathIndex<o.segments.length){let l=new k(o.segments.slice(0,n.pathIndex),{});return l.children[S]=new k(o.segments.slice(n.pathIndex),o.children),kn(l,0,i)}else return n.match&&i.length===0?new k(o.segments,{}):n.match&&!o.hasChildren()?Fr(o,t,e):n.match?kn(o,0,i):Fr(o,t,e)}function kn(o,t,e){if(e.length===0)return new k(o.segments,{});{let n=au(e),i={};if(Object.keys(n).some(l=>l!==S)&&o.children[S]&&o.numberOfChildren===1&&o.children[S].segments.length===0){let l=kn(o.children[S],t,e);return new k(o.segments,l.children)}return Object.entries(n).forEach(([l,d])=>{typeof d=="string"&&(d=[d]),d!==null&&(i[l]=ml(o.children[l],t,d))}),Object.entries(o.children).forEach(([l,d])=>{n[l]===void 0&&(i[l]=d)}),new k(o.segments,i)}}function su(o,t,e){let n=0,i=t,l={match:!1,pathIndex:0,commandIndex:0};for(;i<o.segments.length;){if(n>=e.length)return l;let d=o.segments[i],c=e[n];if(Fn(c))break;let u=`${c}`,m=n<e.length-1?e[n+1]:null;if(i>0&&u===void 0)break;if(u&&m&&typeof m=="object"&&m.outlets===void 0){if(!Gs(u,m,d))return l;n+=2}else{if(!Gs(u,{},d))return l;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function Fr(o,t,e){let n=o.segments.slice(0,t),i=0;for(;i<e.length;){let l=e[i];if(Fn(l)){let u=lu(l.outlets);return new k(n,u)}if(i===0&&Go(e[0])){let u=o.segments[t];n.push(new ot(u.path,Hs(e[0]))),i++;continue}let d=Fn(l)?l.outlets[S]:`${l}`,c=i<e.length-1?e[i+1]:null;d&&c&&Go(c)?(n.push(new ot(d,Hs(c))),i+=2):(n.push(new ot(d,{})),i++)}return new k(n,{})}function lu(o){let t={};return Object.entries(o).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(t[e]=Fr(new k([],{}),0,n))}),t}function Hs(o){let t={};return Object.entries(o).forEach(([e,n])=>t[e]=`${n}`),t}function Gs(o,t,e){return o==e.path&&Ne(t,e.parameters)}var Ht="imperative",G=(function(o){return o[o.NavigationStart=0]="NavigationStart",o[o.NavigationEnd=1]="NavigationEnd",o[o.NavigationCancel=2]="NavigationCancel",o[o.NavigationError=3]="NavigationError",o[o.RoutesRecognized=4]="RoutesRecognized",o[o.ResolveStart=5]="ResolveStart",o[o.ResolveEnd=6]="ResolveEnd",o[o.GuardsCheckStart=7]="GuardsCheckStart",o[o.GuardsCheckEnd=8]="GuardsCheckEnd",o[o.RouteConfigLoadStart=9]="RouteConfigLoadStart",o[o.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",o[o.ChildActivationStart=11]="ChildActivationStart",o[o.ChildActivationEnd=12]="ChildActivationEnd",o[o.ActivationStart=13]="ActivationStart",o[o.ActivationEnd=14]="ActivationEnd",o[o.Scroll=15]="Scroll",o[o.NavigationSkipped=16]="NavigationSkipped",o})(G||{}),Ce=class{id;url;constructor(t,e){this.id=t,this.url=e}},rt=class extends Ce{type=G.NavigationStart;navigationTrigger;restoredState;constructor(t,e,n="imperative",i=null){super(t,e),this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},fe=class extends Ce{urlAfterRedirects;type=G.NavigationEnd;constructor(t,e,n){super(t,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},oe=(function(o){return o[o.Redirect=0]="Redirect",o[o.SupersededByNewNavigation=1]="SupersededByNewNavigation",o[o.NoDataFromResolver=2]="NoDataFromResolver",o[o.GuardRejected=3]="GuardRejected",o[o.Aborted=4]="Aborted",o})(oe||{}),Jt=(function(o){return o[o.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",o[o.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",o})(Jt||{}),Ie=class extends Ce{reason;code;type=G.NavigationCancel;constructor(t,e,n,i){super(t,e),this.reason=n,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function pl(o){return o instanceof Ie&&(o.code===oe.Redirect||o.code===oe.SupersededByNewNavigation)}var Be=class extends Ce{reason;code;type=G.NavigationSkipped;constructor(t,e,n,i){super(t,e),this.reason=n,this.code=i}},Ct=class extends Ce{error;target;type=G.NavigationError;constructor(t,e,n,i){super(t,e),this.error=n,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Rn=class extends Ce{urlAfterRedirects;state;type=G.RoutesRecognized;constructor(t,e,n,i){super(t,e),this.urlAfterRedirects=n,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yo=class extends Ce{urlAfterRedirects;state;type=G.GuardsCheckStart;constructor(t,e,n,i){super(t,e),this.urlAfterRedirects=n,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qo=class extends Ce{urlAfterRedirects;state;shouldActivate;type=G.GuardsCheckEnd;constructor(t,e,n,i,l){super(t,e),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=l}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Zo=class extends Ce{urlAfterRedirects;state;type=G.ResolveStart;constructor(t,e,n,i){super(t,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ko=class extends Ce{urlAfterRedirects;state;type=G.ResolveEnd;constructor(t,e,n,i){super(t,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xo=class{route;type=G.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ei=class{route;type=G.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ti=class{snapshot;type=G.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ni=class{snapshot;type=G.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},oi=class{snapshot;type=G.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ii=class{snapshot;type=G.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Yt=class{routerEvent;position;anchor;scrollBehavior;type=G.Scroll;constructor(t,e,n,i){this.routerEvent=t,this.position=e,this.anchor=n,this.scrollBehavior=i}toString(){let t=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${t}')`}},Qt=class{},Nn=class{},Zt=class{url;navigationBehaviorOptions;constructor(t,e){this.url=t,this.navigationBehaviorOptions=e}};function du(o){return!(o instanceof Qt)&&!(o instanceof Zt)&&!(o instanceof Nn)}var ri=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new Dt(this.rootInjector)}},Dt=(()=>{class o{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let i=this.getOrCreateContext(e);i.outlet=n,this.contexts.set(e,i)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new ri(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||o)(x(pe))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),ai=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){let e=Rr(t,this._root);return e?e.children.map(n=>n.value):[]}firstChild(t){let e=Rr(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){let e=Nr(t,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==t)}pathFromRoot(t){return Nr(t,this._root).map(e=>e.value)}};function Rr(o,t){if(o===t.value)return t;for(let e of t.children){let n=Rr(o,e);if(n)return n}return null}function Nr(o,t){if(o===t.value)return[t];for(let e of t.children){let n=Nr(o,e);if(n.length)return n.unshift(t),n}return[]}var xe=class{value;children;constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}};function Vt(o){let t={};return o&&o.children.forEach(e=>t[e.value.outlet]=e),t}var Bn=class extends ai{snapshot;constructor(t,e){super(t),this.snapshot=e,Hr(this,t)}toString(){return this.snapshot.toString()}};function hl(o,t){let e=cu(o,t),n=new me([new ot("",{})]),i=new me({}),l=new me({}),d=new me({}),c=new me(""),u=new Me(n,i,d,c,l,S,o,e.root);return u.snapshot=e.root,new Bn(new xe(u,[]),e)}function cu(o,t){let e={},n={},i={},d=new Kt([],e,i,"",n,S,o,null,{},t);return new qn("",new xe(d,[]))}var Me=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,e,n,i,l,d,c,u){this.urlSubject=t,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=l,this.outlet=d,this.component=c,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(R(m=>m[jn]))??E(void 0),this.url=t,this.params=e,this.queryParams=n,this.fragment=i,this.data=l}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(R(t=>_t(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(R(t=>_t(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function $r(o,t,e="emptyOnly"){let n,{routeConfig:i}=o;return t!==null&&(e==="always"||i?.path===""||!t.component&&!t.routeConfig?.loadComponent)?n={params:g(g({},t.params),o.params),data:g(g({},t.data),o.data),resolve:g(g(g(g({},o.data),t.data),i?.data),o._resolvedData)}:n={params:g({},o.params),data:g({},o.data),resolve:g(g({},o.data),o._resolvedData??{})},i&&gl(i)&&(n.resolve[jn]=i.title),n}var Kt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[jn]}constructor(t,e,n,i,l,d,c,u,m,f){this.url=t,this.params=e,this.queryParams=n,this.fragment=i,this.data=l,this.outlet=d,this.component=c,this.routeConfig=u,this._resolve=m,this._environmentInjector=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=_t(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=_t(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${e}')`}},qn=class extends ai{url;constructor(t,e){super(e),this.url=t,Hr(this,e)}toString(){return fl(this._root)}};function Hr(o,t){t.value._routerState=o,t.children.forEach(e=>Hr(o,e))}function fl(o){let t=o.children.length>0?` { ${o.children.map(fl).join(", ")} } `:"";return`${o.value}${t}`}function Pr(o){if(o.snapshot){let t=o.snapshot,e=o._futureSnapshot;o.snapshot=e,Ne(t.queryParams,e.queryParams)||o.queryParamsSubject.next(e.queryParams),t.fragment!==e.fragment&&o.fragmentSubject.next(e.fragment),Ne(t.params,e.params)||o.paramsSubject.next(e.params),Bc(t.url,e.url)||o.urlSubject.next(e.url),Ne(t.data,e.data)||o.dataSubject.next(e.data)}else o.snapshot=o._futureSnapshot,o.dataSubject.next(o._futureSnapshot.data)}function Br(o,t){let e=Ne(o.params,t.params)&&Uc(o.url,t.url),n=!o.parent!=!t.parent;return e&&!n&&(!o.parent||Br(o.parent,t.parent))}function gl(o){return typeof o.title=="string"||o.title===null}var yl=new _(""),Un=(()=>{class o{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=S;activateEvents=new Ae;deactivateEvents=new Ae;attachEvents=new Ae;detachEvents=new Ae;routerOutletData=ls();parentContexts=p(Dt);location=p(yn);changeDetector=p(zt);inputBinder=p(Vn,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:i}=e.name;if(n)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new D(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new D(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new D(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new D(4013,!1);this._activatedRoute=e;let i=this.location,d=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,u=new qr(e,c,i.injector,this.routerOutletData);this.activated=i.createComponent(d,{index:i.length,injector:u,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||o)};static \u0275dir=$({type:o,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[kt]})}return o})(),qr=class{route;childContexts;parent;outletData;constructor(t,e,n,i){this.route=t,this.childContexts=e,this.parent=n,this.outletData=i}get(t,e){return t===Me?this.route:t===Dt?this.childContexts:t===yl?this.outletData:this.parent.get(t,e)}},Vn=new _(""),Gr=(()=>{class o{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,i=Gi([n.queryParams,n.params,n.data]).pipe(ge(([l,d,c],u)=>(c=g(g(g({},l),d),c),u===0?E(c):Promise.resolve(c)))).subscribe(l=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let d=ps(n.component);if(!d){this.unsubscribeFromRouteData(e);return}for(let{templateName:c}of d.inputs)e.activatedComponentRef.setInput(c,l[c])});this.outletDataSubscriptions.set(e,i)}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac})}return o})(),Jr=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=C({type:o,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,i){n&1&&qe(0,"router-outlet")},dependencies:[Un],encapsulation:2})}return o})();function Yr(o){let t=o.children&&o.children.map(Yr),e=t?O(g({},o),{children:t}):g({},o);return!e.component&&!e.loadComponent&&(t||e.loadChildren)&&e.outlet&&e.outlet!==S&&(e.component=Jr),e}function uu(o,t,e){let n=zn(o,t._root,e?e._root:void 0);return new Bn(n,t)}function zn(o,t,e){if(e&&o.shouldReuseRoute(t.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=t.value;let i=mu(o,t,e);return new xe(n,i)}else{if(o.shouldAttach(t.value)){let l=o.retrieve(t.value);if(l!==null){let d=l.route;return d.value._futureSnapshot=t.value,d.children=t.children.map(c=>zn(o,c)),d}}let n=pu(t.value),i=t.children.map(l=>zn(o,l));return new xe(n,i)}}function mu(o,t,e){return t.children.map(n=>{for(let i of e.children)if(o.shouldReuseRoute(n.value,i.value.snapshot))return zn(o,n,i);return zn(o,n)})}function pu(o){return new Me(new me(o.url),new me(o.params),new me(o.queryParams),new me(o.fragment),new me(o.data),o.outlet,o.component,o)}var Xt=class{redirectTo;navigationBehaviorOptions;constructor(t,e){this.redirectTo=t,this.navigationBehaviorOptions=e}},bl="ngNavigationCancelingError";function si(o,t){let{redirectTo:e,navigationBehaviorOptions:n}=it(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,i=vl(!1,oe.Redirect);return i.url=e,i.navigationBehaviorOptions=n,i}function vl(o,t){let e=new Error(`NavigationCancelingError: ${o||""}`);return e[bl]=!0,e.cancellationCode=t,e}function hu(o){return wl(o)&&it(o.url)}function wl(o){return!!o&&o[bl]}var zr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,e,n,i,l){this.routeReuseStrategy=t,this.futureState=e,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=l}activate(t){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,t),Pr(this.futureState.root),this.activateChildRoutes(e,n,t)}deactivateChildRoutes(t,e,n){let i=Vt(e);t.children.forEach(l=>{let d=l.value.outlet;this.deactivateRoutes(l,i[d],n),delete i[d]}),Object.values(i).forEach(l=>{this.deactivateRouteAndItsChildren(l,n)})}deactivateRoutes(t,e,n){let i=t.value,l=e?e.value:null;if(i===l)if(i.component){let d=n.getContext(i.outlet);d&&this.deactivateChildRoutes(t,e,d.children)}else this.deactivateChildRoutes(t,e,n);else l&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(t,e){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){let n=e.getContext(t.value.outlet),i=n&&t.value.component?n.children:e,l=Vt(t);for(let d of Object.values(l))this.deactivateRouteAndItsChildren(d,i);if(n&&n.outlet){let d=n.outlet.detach(),c=n.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:d,route:t,contexts:c})}}deactivateRouteAndOutlet(t,e){let n=e.getContext(t.value.outlet),i=n&&t.value.component?n.children:e,l=Vt(t);for(let d of Object.values(l))this.deactivateRouteAndItsChildren(d,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(t,e,n){let i=Vt(e);t.children.forEach(l=>{this.activateRoutes(l,i[l.value.outlet],n),this.forwardEvent(new ii(l.value.snapshot))}),t.children.length&&this.forwardEvent(new ni(t.value.snapshot))}activateRoutes(t,e,n){let i=t.value,l=e?e.value:null;if(Pr(i),i===l)if(i.component){let d=n.getOrCreateContext(i.outlet);this.activateChildRoutes(t,e,d.children)}else this.activateChildRoutes(t,e,n);else if(i.component){let d=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),d.children.onOutletReAttached(c.contexts),d.attachRef=c.componentRef,d.route=c.route.value,d.outlet&&d.outlet.attach(c.componentRef,c.route.value),Pr(c.route.value),this.activateChildRoutes(t,null,d.children)}else d.attachRef=null,d.route=i,d.outlet&&d.outlet.activateWith(i,d.injector),this.activateChildRoutes(t,null,d.children)}else this.activateChildRoutes(t,null,n)}},li=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Gt=class{component;route;constructor(t,e){this.component=t,this.route=e}};function fu(o,t,e){let n=o._root,i=t?t._root:null;return Ln(n,i,e,[n.value])}function gu(o){let t=o.routeConfig?o.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:o,guards:t}}function tn(o,t){let e=Symbol(),n=t.get(o,e);return n===e?typeof o=="function"&&!Fa(o)?o:t.get(o):n}function Ln(o,t,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let l=Vt(t);return o.children.forEach(d=>{yu(d,l[d.value.outlet],e,n.concat([d.value]),i),delete l[d.value.outlet]}),Object.entries(l).forEach(([d,c])=>On(c,e.getContext(d),i)),i}function yu(o,t,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let l=o.value,d=t?t.value:null,c=e?e.getContext(o.value.outlet):null;if(d&&l.routeConfig===d.routeConfig){let u=bu(d,l,l.routeConfig.runGuardsAndResolvers);u?i.canActivateChecks.push(new li(n)):(l.data=d.data,l._resolvedData=d._resolvedData),l.component?Ln(o,t,c?c.children:null,n,i):Ln(o,t,e,n,i),u&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new Gt(c.outlet.component,d))}else d&&On(t,c,i),i.canActivateChecks.push(new li(n)),l.component?Ln(o,null,c?c.children:null,n,i):Ln(o,null,e,n,i);return i}function bu(o,t,e){if(typeof e=="function")return ae(t._environmentInjector,()=>e(o,t));switch(e){case"pathParamsChange":return!xt(o.url,t.url);case"pathParamsOrQueryParamsChange":return!xt(o.url,t.url)||!Ne(o.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Br(o,t)||!Ne(o.queryParams,t.queryParams);default:return!Br(o,t)}}function On(o,t,e){let n=Vt(o),i=o.value;Object.entries(n).forEach(([l,d])=>{i.component?t?On(d,t.children.getContext(l),e):On(d,null,e):On(d,t,e)}),i.component?t&&t.outlet&&t.outlet.isActivated?e.canDeactivateChecks.push(new Gt(t.outlet.component,i)):e.canDeactivateChecks.push(new Gt(null,i)):e.canDeactivateChecks.push(new Gt(null,i))}function $n(o){return typeof o=="function"}function vu(o){return typeof o=="boolean"}function wu(o){return o&&$n(o.canLoad)}function Eu(o){return o&&$n(o.canActivate)}function xu(o){return o&&$n(o.canActivateChild)}function _u(o){return o&&$n(o.canDeactivate)}function Cu(o){return o&&$n(o.canMatch)}function El(o){return o instanceof Ma||o?.name==="EmptyError"}var jo=Symbol("INITIAL_VALUE");function en(){return ge(o=>Gi(o.map(t=>t.pipe(Je(1),ka(jo)))).pipe(R(t=>{for(let e of t)if(e!==!0){if(e===jo)return jo;if(e===!1||Su(e))return e}return!0}),De(t=>t!==jo),Je(1)))}function Su(o){return it(o)||o instanceof Xt}function xl(o){return o.aborted?E(void 0).pipe(Je(1)):new uo(t=>{let e=()=>{t.next(),t.complete()};return o.addEventListener("abort",e),()=>o.removeEventListener("abort",e)})}function _l(o){return Tt(xl(o))}function Du(o){return Fe(t=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:l}}=t;return l.length===0&&i.length===0?E(O(g({},t),{guardsResult:!0})):Iu(l,e,n).pipe(Fe(d=>d&&vu(d)?Mu(e,i,o):E(d)),R(d=>O(g({},t),{guardsResult:d})))})}function Iu(o,t,e){return Z(o).pipe(Fe(n=>ku(n.component,n.route,e,t)),Ye(n=>n!==!0,!0))}function Mu(o,t,e){return Z(t).pipe(mt(n=>Pa(Au(n.route.parent,e),Pu(n.route,e),Lu(o,n.path),Tu(o,n.route))),Ye(n=>n!==!0,!0))}function Pu(o,t){return o!==null&&t&&t(new oi(o)),E(!0)}function Au(o,t){return o!==null&&t&&t(new ti(o)),E(!0)}function Tu(o,t){let e=t.routeConfig?t.routeConfig.canActivate:null;if(!e||e.length===0)return E(!0);let n=e.map(i=>po(()=>{let l=t._environmentInjector,d=tn(i,l),c=Eu(d)?d.canActivate(t,o):ae(l,()=>d(t,o));return St(c).pipe(Ye())}));return E(n).pipe(en())}function Lu(o,t){let e=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(l=>gu(l)).filter(l=>l!==null).map(l=>po(()=>{let d=l.guards.map(c=>{let u=l.node._environmentInjector,m=tn(c,u),f=xu(m)?m.canActivateChild(e,o):ae(u,()=>m(e,o));return St(f).pipe(Ye())});return E(d).pipe(en())}));return E(i).pipe(en())}function ku(o,t,e,n){let i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||i.length===0)return E(!0);let l=i.map(d=>{let c=t._environmentInjector,u=tn(d,c),m=_u(u)?u.canDeactivate(o,t,e,n):ae(c,()=>u(o,t,e,n));return St(m).pipe(Ye())});return E(l).pipe(en())}function Ou(o,t,e,n,i){let l=t.canLoad;if(l===void 0||l.length===0)return E(!0);let d=l.map(c=>{let u=tn(c,o),m=wu(u)?u.canLoad(t,e):ae(o,()=>u(t,e)),f=St(m);return i?f.pipe(_l(i)):f});return E(d).pipe(en(),Cl(n))}function Cl(o){return Ia(re(t=>{if(typeof t!="boolean")throw si(o,t)}),R(t=>t===!0))}function Fu(o,t,e,n,i,l){let d=t.canMatch;if(!d||d.length===0)return E(!0);let c=d.map(u=>{let m=tn(u,o),f=Cu(m)?m.canMatch(t,e,i):ae(o,()=>m(t,e,i));return St(f).pipe(_l(l))});return E(c).pipe(en(),Cl(n))}var Ve=class o extends Error{segmentGroup;constructor(t){super(),this.segmentGroup=t||null,Object.setPrototypeOf(this,o.prototype)}},Wn=class o extends Error{urlTree;constructor(t){super(),this.urlTree=t,Object.setPrototypeOf(this,o.prototype)}};function Ru(o){throw new D(4e3,!1)}function Nu(o){throw vl(!1,oe.GuardRejected)}var Wr=class{urlSerializer;urlTree;constructor(t,e){this.urlSerializer=t,this.urlTree=e}lineralizeSegments(t,e){return B(this,null,function*(){let n=[],i=e.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return n;if(i.numberOfChildren>1||!i.children[S])throw Ru(`${t.redirectTo}`);i=i.children[S]}})}applyRedirectCommands(t,e,n,i,l){return B(this,null,function*(){let d=yield Bu(e,i,l);if(d instanceof _e)throw new Wn(d);let c=this.applyRedirectCreateUrlTree(d,this.urlSerializer.parse(d),t,n);if(d[0]==="/")throw new Wn(c);return c})}applyRedirectCreateUrlTree(t,e,n,i){let l=this.createSegmentGroup(t,e.root,n,i);return new _e(l,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){let n={};return Object.entries(t).forEach(([i,l])=>{if(typeof l=="string"&&l[0]===":"){let c=l.substring(1);n[i]=e[c]}else n[i]=l}),n}createSegmentGroup(t,e,n,i){let l=this.createSegments(t,e.segments,n,i),d={};return Object.entries(e.children).forEach(([c,u])=>{d[c]=this.createSegmentGroup(t,u,n,i)}),new k(l,d)}createSegments(t,e,n,i){return e.map(l=>l.path[0]===":"?this.findPosParam(t,l,i):this.findOrReturn(l,n))}findPosParam(t,e,n){let i=n[e.path.substring(1)];if(!i)throw new D(4001,!1);return i}findOrReturn(t,e){let n=0;for(let i of e){if(i.path===t.path)return e.splice(n),i;n++}return t}};function Bu(o,t,e){if(typeof o=="string")return Promise.resolve(o);let n=o;return Ho(St(ae(e,()=>n(t))))}function qu(o,t){return o.providers&&!o._injector&&(o._injector=wo(o.providers,t,`Route: ${o.path}`)),o._injector??t}function ke(o){return o.outlet||S}function zu(o,t){let e=o.filter(n=>ke(n)===t);return e.push(...o.filter(n=>ke(n)!==t)),e}var jr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Sl(o){return{routeConfig:o.routeConfig,url:o.url,params:o.params,queryParams:o.queryParams,fragment:o.fragment,data:o.data,outlet:o.outlet,title:o.title,paramMap:o.paramMap,queryParamMap:o.queryParamMap}}function Wu(o,t,e,n,i,l,d){let c=Dl(o,t,e);if(!c.matched)return E(c);let u=Sl(l(c));return n=qu(t,n),Fu(n,t,e,i,u,d).pipe(R(m=>m===!0?c:g({},jr)))}function Dl(o,t,e){if(t.path==="")return t.pathMatch==="full"&&(o.hasChildren()||e.length>0)?g({},jr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(t.matcher||Qs)(e,o,t);if(!i)return g({},jr);let l={};Object.entries(i.posParams??{}).forEach(([c,u])=>{l[c]=u.path});let d=i.consumed.length>0?g(g({},l),i.consumed[i.consumed.length-1].parameters):l;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:d,positionalParamSegments:i.posParams??{}}}function Js(o,t,e,n,i){return e.length>0&&Vu(o,e,n,i)?{segmentGroup:new k(t,Uu(n,new k(e,o.children))),slicedSegments:[]}:e.length===0&&$u(o,e,n)?{segmentGroup:new k(o.segments,ju(o,e,n,o.children)),slicedSegments:e}:{segmentGroup:new k(o.segments,o.children),slicedSegments:e}}function ju(o,t,e,n){let i={};for(let l of e)if(ci(o,t,l)&&!n[ke(l)]){let d=new k([],{});i[ke(l)]=d}return g(g({},n),i)}function Uu(o,t){let e={};e[S]=t;for(let n of o)if(n.path===""&&ke(n)!==S){let i=new k([],{});e[ke(n)]=i}return e}function Vu(o,t,e,n){return e.some(i=>!ci(o,t,i)||!(ke(i)!==S)?!1:!(n!==void 0&&ke(i)===n))}function $u(o,t,e){return e.some(n=>ci(o,t,n))}function ci(o,t,e){return(o.hasChildren()||t.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Hu(o,t,e){return t.length===0&&!o.children[e]}var Ur=class{};function Gu(o,t,e,n,i,l,d="emptyOnly",c){return B(this,null,function*(){return new Vr(o,t,e,n,i,d,l,c).recognize()})}var Ju=31,Vr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,e,n,i,l,d,c,u){this.injector=t,this.configLoader=e,this.rootComponentType=n,this.config=i,this.urlTree=l,this.paramsInheritanceStrategy=d,this.urlSerializer=c,this.abortSignal=u,this.applyRedirects=new Wr(this.urlSerializer,this.urlTree)}noMatchError(t){return new D(4002,`'${t.segmentGroup}'`)}recognize(){return B(this,null,function*(){let t=Js(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=yield this.match(t),i=new xe(n,e),l=new qn("",i),d=ll(n,[],this.urlTree.queryParams,this.urlTree.fragment);return d.queryParams=this.urlTree.queryParams,l.url=this.urlSerializer.serialize(d),{state:l,tree:d}})}match(t){return B(this,null,function*(){let e=new Kt([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),S,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,t,S,e),rootSnapshot:e}}catch(n){if(n instanceof Wn)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Ve?this.noMatchError(n):n}})}processSegmentGroup(t,e,n,i,l){return B(this,null,function*(){if(n.segments.length===0&&n.hasChildren())return this.processChildren(t,e,n,l);let d=yield this.processSegment(t,e,n,n.segments,i,!0,l);return d instanceof xe?[d]:[]})}processChildren(t,e,n,i){return B(this,null,function*(){let l=[];for(let u of Object.keys(n.children))u==="primary"?l.unshift(u):l.push(u);let d=[];for(let u of l){let m=n.children[u],f=zu(e,u),w=yield this.processSegmentGroup(t,f,m,u,i);d.push(...w)}let c=Il(d);return Yu(c),c})}processSegment(t,e,n,i,l,d,c){return B(this,null,function*(){for(let u of e)try{return yield this.processSegmentAgainstRoute(u._injector??t,e,u,n,i,l,d,c)}catch(m){if(m instanceof Ve||El(m))continue;throw m}if(Hu(n,i,l))return new Ur;throw new Ve(n)})}processSegmentAgainstRoute(t,e,n,i,l,d,c,u){return B(this,null,function*(){if(ke(n)!==d&&(d===S||!ci(i,l,n)))throw new Ve(i);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(t,i,n,l,d,u);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(t,i,e,n,l,d,u);throw new Ve(i)})}expandSegmentAgainstRouteUsingRedirect(t,e,n,i,l,d,c){return B(this,null,function*(){let{matched:u,parameters:m,consumedSegments:f,positionalParamSegments:w,remainingSegments:P}=Dl(e,i,l);if(!u)throw new Ve(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Ju&&(this.allowRedirects=!1));let ie=this.createSnapshot(t,i,l,m,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let J=yield this.applyRedirects.applyRedirectCommands(f,i.redirectTo,w,Sl(ie),t),W=yield this.applyRedirects.lineralizeSegments(i,J);return this.processSegment(t,n,e,W.concat(P),d,!1,c)})}createSnapshot(t,e,n,i,l){let d=new Kt(n,i,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Zu(e),ke(e),e.component??e._loadedComponent??null,e,Ku(e),t),c=$r(d,l,this.paramsInheritanceStrategy);return d.params=Object.freeze(c.params),d.data=Object.freeze(c.data),d}matchSegmentAgainstRoute(t,e,n,i,l,d){return B(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=ce=>this.createSnapshot(t,n,ce.consumedSegments,ce.parameters,d),u=yield Ho(Wu(e,n,i,t,this.urlSerializer,c,this.abortSignal));if(n.path==="**"&&(e.children={}),!u?.matched)throw new Ve(e);t=n._injector??t;let{routes:m}=yield this.getChildConfig(t,n,i),f=n._loadedInjector??t,{parameters:w,consumedSegments:P,remainingSegments:ie}=u,J=this.createSnapshot(t,n,P,w,d),{segmentGroup:W,slicedSegments:M}=Js(e,P,ie,m,l);if(M.length===0&&W.hasChildren()){let ce=yield this.processChildren(f,m,W,J);return new xe(J,ce)}if(m.length===0&&M.length===0)return new xe(J,[]);let L=ke(n)===l,j=yield this.processSegment(f,m,W,M,L?S:l,!0,J);return new xe(J,j instanceof xe?[j]:[])})}getChildConfig(t,e,n){return B(this,null,function*(){if(e.children)return{routes:e.children,injector:t};if(e.loadChildren){if(e._loadedRoutes!==void 0){let l=e._loadedNgModuleFactory;return l&&!e._loadedInjector&&(e._loadedInjector=l.create(t).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Ho(Ou(t,e,n,this.urlSerializer,this.abortSignal))){let l=yield this.configLoader.loadChildren(t,e);return e._loadedRoutes=l.routes,e._loadedInjector=l.injector,e._loadedNgModuleFactory=l.factory,l}throw Nu(e)}return{routes:[],injector:t}})}};function Yu(o){o.sort((t,e)=>t.value.outlet===S?-1:e.value.outlet===S?1:t.value.outlet.localeCompare(e.value.outlet))}function Qu(o){let t=o.value.routeConfig;return t&&t.path===""}function Il(o){let t=[],e=new Set;for(let n of o){if(!Qu(n)){t.push(n);continue}let i=t.find(l=>n.value.routeConfig===l.value.routeConfig);i!==void 0?(i.children.push(...n.children),e.add(i)):t.push(n)}for(let n of e){let i=Il(n.children);t.push(new xe(n.value,i))}return t.filter(n=>!e.has(n))}function Zu(o){return o.data||{}}function Ku(o){return o.resolve||{}}function Xu(o,t,e,n,i,l,d){return Fe(c=>B(null,null,function*(){let{state:u,tree:m}=yield Gu(o,t,e,n,c.extractedUrl,i,l,d);return O(g({},c),{targetSnapshot:u,urlAfterRedirects:m})}))}function em(o){return Fe(t=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=t;if(!n.length)return E(t);let i=new Set(n.map(c=>c.route)),l=new Set;for(let c of i)if(!l.has(c))for(let u of Ml(c))l.add(u);let d=0;return Z(l).pipe(mt(c=>i.has(c)?tm(c,e,o):(c.data=$r(c,c.parent,o).resolve,E(void 0))),re(()=>d++),Yi(1),Fe(c=>d===l.size?E(t):Se))})}function Ml(o){let t=o.children.map(e=>Ml(e)).flat();return[o,...t]}function tm(o,t,e){let n=o.routeConfig,i=o._resolve;return n?.title!==void 0&&!gl(n)&&(i[jn]=n.title),po(()=>(o.data=$r(o,o.parent,e).resolve,nm(i,o,t).pipe(R(l=>(o._resolvedData=l,o.data=g(g({},o.data),l),null)))))}function nm(o,t,e){let n=Tr(o);if(n.length===0)return E({});let i={};return Z(n).pipe(Fe(l=>om(o[l],t,e).pipe(Ye(),re(d=>{if(d instanceof Xt)throw si(new $e,d);i[l]=d}))),Yi(1),R(()=>i),Pt(l=>El(l)?Se:mo(l)))}function om(o,t,e){let n=t._environmentInjector,i=tn(o,n),l=i.resolve?i.resolve(t,e):ae(n,()=>i(t,e));return St(l)}function Ys(o){return ge(t=>{let e=o(t);return e?Z(e).pipe(R(()=>t)):E(t)})}var Qr=(()=>{class o{buildTitle(e){let n,i=e.root;for(;i!==void 0;)n=this.getResolvedTitleForRoute(i)??n,i=i.children.find(l=>l.outlet===S);return n}getResolvedTitleForRoute(e){return e.data[jn]}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:()=>p(Pl),providedIn:"root"})}return o})(),Pl=(()=>{class o extends Qr{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||o)(x(Ws))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),st=new _("",{factory:()=>({})}),It=new _(""),ui=(()=>{class o{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=p(as);loadComponent(e,n){return B(this,null,function*(){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let i=B(this,null,function*(){try{let l=yield Ks(ae(e,()=>n.loadComponent())),d=yield Ll(Tl(l));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=d,d}finally{this.componentLoaders.delete(n)}});return this.componentLoaders.set(n,i),i})}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let i=B(this,null,function*(){try{let l=yield Al(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=l.routes,n._loadedInjector=l.injector,n._loadedNgModuleFactory=l.factory,l}finally{this.childrenLoaders.delete(n)}});return this.childrenLoaders.set(n,i),i}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function Al(o,t,e,n){return B(this,null,function*(){let i=yield Ks(ae(e,()=>o.loadChildren())),l=yield Ll(Tl(i)),d;l instanceof Ka||Array.isArray(l)?d=l:d=yield t.compileModuleAsync(l),n&&n(o);let c,u,m=!1,f;return Array.isArray(d)?(u=d,m=!0):(c=d.create(e).injector,f=d,u=c.get(It,[],{optional:!0,self:!0}).flat()),{routes:u.map(Yr),injector:c,factory:f}})}function im(o){return o&&typeof o=="object"&&"default"in o}function Tl(o){return im(o)?o.default:o}function Ll(o){return B(this,null,function*(){return o})}var mi=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:()=>p(rm),providedIn:"root"})}return o})(),rm=(()=>{class o{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Zr=new _(""),Kr=new _("");function kl(o,t,e){let n=o.get(Kr),i=o.get(T);if(!i.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(m=>setTimeout(m));let l,d=new Promise(m=>{l=m}),c=i.startViewTransition(()=>(l(),am(o)));c.updateCallbackDone.catch(m=>{}),c.ready.catch(m=>{}),c.finished.catch(m=>{});let{onViewTransitionCreated:u}=n;return u&&ae(o,()=>u({transition:c,from:t,to:e})),d}function am(o){return new Promise(t=>{bo({read:()=>setTimeout(t)},{injector:o})})}var sm=()=>{},Xr=new _(""),pi=(()=>{class o{currentNavigation=z(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=z(null);events=new ue;transitionAbortWithErrorSubject=new ue;configLoader=p(ui);environmentInjector=p(pe);destroyRef=p(Lt);urlSerializer=p(at);rootContexts=p(Dt);location=p(Xe);inputBindingEnabled=p(Vn,{optional:!0})!==null;titleStrategy=p(Qr);options=p(st,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=p(mi);createViewTransition=p(Zr,{optional:!0});navigationErrorHandler=p(Xr,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>E(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new Xo(i)),n=i=>this.events.next(new ei(i));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;F(()=>{this.transitions?.next(O(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new me(null),this.transitions.pipe(De(n=>n!==null),ge(n=>{let i=!1,l=new AbortController,d=()=>!i&&this.currentTransition?.id===n.id;return E(n).pipe(ge(c=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",oe.SupersededByNewNavigation),Se;this.currentTransition=n;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:u?O(g({},u),{previousNavigation:null}):null,abort:()=>l.abort(),routesRecognizeHandler:c.routesRecognizeHandler,beforeActivateHandler:c.beforeActivateHandler});let m=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=c.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!m&&f!=="reload")return this.events.next(new Be(c.id,this.urlSerializer.serialize(c.rawUrl),"",Jt.IgnoredSameUrlNavigation)),c.resolve(!1),Se;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return E(c).pipe(ge(w=>(this.events.next(new rt(w.id,this.urlSerializer.serialize(w.extractedUrl),w.source,w.restoredState)),w.id!==this.navigationId?Se:Promise.resolve(w))),Xu(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,l.signal),re(w=>{n.targetSnapshot=w.targetSnapshot,n.urlAfterRedirects=w.urlAfterRedirects,this.currentNavigation.update(P=>(P.finalUrl=w.urlAfterRedirects,P)),this.events.next(new Nn)}),ge(w=>Z(n.routesRecognizeHandler.deferredHandle??E(void 0)).pipe(R(()=>w))),re(()=>{let w=new Rn(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(w)}));if(m&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:w,extractedUrl:P,source:ie,restoredState:J,extras:W}=c,M=new rt(w,this.urlSerializer.serialize(P),ie,J);this.events.next(M);let L=hl(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=O(g({},c),{targetSnapshot:L,urlAfterRedirects:P,extras:O(g({},W),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(j=>(j.finalUrl=P,j)),E(n)}else return this.events.next(new Be(c.id,this.urlSerializer.serialize(c.extractedUrl),"",Jt.IgnoredByUrlHandlingStrategy)),c.resolve(!1),Se}),R(c=>{let u=new Yo(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(u),this.currentTransition=n=O(g({},c),{guards:fu(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),n}),Du(c=>this.events.next(c)),ge(c=>{if(n.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw si(this.urlSerializer,c.guardsResult);let u=new Qo(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(u),!d())return Se;if(!c.guardsResult)return this.cancelNavigationTransition(c,"",oe.GuardRejected),Se;if(c.guards.canActivateChecks.length===0)return E(c);let m=new Zo(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(m),!d())return Se;let f=!1;return E(c).pipe(em(this.paramsInheritanceStrategy),re({next:()=>{f=!0;let w=new Ko(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(w)},complete:()=>{f||this.cancelNavigationTransition(c,"",oe.NoDataFromResolver)}}))}),Ys(c=>{let u=f=>{let w=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let P=f._environmentInjector;w.push(this.configLoader.loadComponent(P,f.routeConfig).then(ie=>{f.component=ie}))}for(let P of f.children)w.push(...u(P));return w},m=u(c.targetSnapshot.root);return m.length===0?E(c):Z(Promise.all(m).then(()=>c))}),Ys(()=>this.afterPreactivation()),ge(()=>{let{currentSnapshot:c,targetSnapshot:u}=n,m=this.createViewTransition?.(this.environmentInjector,c.root,u.root);return m?Z(m).pipe(R(()=>n)):E(n)}),Je(1),ge(c=>{let u=uu(e.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);this.currentTransition=n=c=O(g({},c),{targetRouterState:u}),this.currentNavigation.update(f=>(f.targetRouterState=u,f)),this.events.next(new Qt);let m=n.beforeActivateHandler.deferredHandle;return m?Z(m.then(()=>c)):E(c)}),re(c=>{new zr(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),d()&&(i=!0,this.currentNavigation.update(u=>(u.abort=sm,u)),this.lastSuccessfulNavigation.set(F(this.currentNavigation)),this.events.next(new fe(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0))}),Tt(xl(l.signal).pipe(De(()=>!i&&!n.targetRouterState),re(()=>{this.cancelNavigationTransition(n,l.signal.reason+"",oe.Aborted)}))),re({complete:()=>{i=!0}}),Tt(this.transitionAbortWithErrorSubject.pipe(re(c=>{throw c}))),At(()=>{l.abort(),i||this.cancelNavigationTransition(n,"",oe.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Pt(c=>{if(i=!0,this.destroyed)return n.resolve(!1),Se;if(wl(c))this.events.next(new Ie(n.id,this.urlSerializer.serialize(n.extractedUrl),c.message,c.cancellationCode)),hu(c)?this.events.next(new Zt(c.url,c.navigationBehaviorOptions)):n.resolve(!1);else{let u=new Ct(n.id,this.urlSerializer.serialize(n.extractedUrl),c,n.targetSnapshot??void 0);try{let m=ae(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(m instanceof Xt){let{message:f,cancellationCode:w}=si(this.urlSerializer,m);this.events.next(new Ie(n.id,this.urlSerializer.serialize(n.extractedUrl),f,w)),this.events.next(new Zt(m.redirectTo,m.navigationBehaviorOptions))}else throw this.events.next(u),c}catch(m){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(m)}}return Se}))}))}cancelNavigationTransition(e,n,i){let l=new Ie(e.id,this.urlSerializer.serialize(e.extractedUrl),n,i);this.events.next(l),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=F(this.currentNavigation),i=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==i?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function lm(o){return o!==Ht}var Ol=new _("");var Fl=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:()=>p(dm),providedIn:"root"})}return o})(),di=class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}shouldDestroyInjector(t){return!0}},dm=(()=>{class o extends di{static \u0275fac=(()=>{let e;return function(i){return(e||(e=fn(o)))(i||o)}})();static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),hi=(()=>{class o{urlSerializer=p(at);options=p(st,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=p(Xe);urlHandlingStrategy=p(mi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new _e;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:i}){let l=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,d=i??l;return d instanceof _e?this.urlSerializer.serialize(d):d}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:i}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,i),this.routerState=e):this.rawUrlTree=i}routerState=hl(null,p(pe));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:()=>p(cm),providedIn:"root"})}return o})(),cm=(()=>{class o extends hi{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof rt?this.updateStateMemento():e instanceof Be?this.commitTransition(n):e instanceof Rn?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Qt?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Ie&&!pl(e)?this.restoreHistory(n):e instanceof Ct?this.restoreHistory(n,!0):e instanceof fe&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:i,id:l}=n,{replaceUrl:d,state:c}=i;if(this.location.isCurrentPathEqualTo(e)||d){let u=this.browserPageId,m=g(g({},c),this.generateNgRouterState(l,u,n));this.location.replaceState(e,"",m)}else{let u=g(g({},c),this.generateNgRouterState(l,this.browserPageId+1,n));this.location.go(e,"",u)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,l=this.currentPageId-i;l!==0?this.location.historyGo(l):this.getCurrentUrlTree()===e.finalUrl&&l===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,i){return this.canceledNavigationResolution==="computed"?g({navigationId:e,\u0275routerPageId:n},this.routerUrlState(i)):g({navigationId:e},this.routerUrlState(i))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=fn(o)))(i||o)}})();static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function fi(o,t){o.events.pipe(De(e=>e instanceof fe||e instanceof Ie||e instanceof Ct||e instanceof Be),R(e=>e instanceof fe||e instanceof Be?0:(e instanceof Ie?e.code===oe.Redirect||e.code===oe.SupersededByNewNavigation:!1)?2:1),De(e=>e!==2),Je(1)).subscribe(()=>{t()})}var Q=(()=>{class o{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=p(er);stateManager=p(hi);options=p(st,{optional:!0})||{};pendingTasks=p(Na);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=p(pi);urlSerializer=p(at);location=p(Xe);urlHandlingStrategy=p(mi);injector=p(pe);_events=new ue;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=p(Fl);injectorCleanup=p(Ol,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=p(It,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!p(Vn,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new co;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let i=this.navigationTransitions.currentTransition,l=F(this.navigationTransitions.currentNavigation);if(i!==null&&l!==null){if(this.stateManager.handleRouterEvent(n,l),n instanceof Ie&&n.code!==oe.Redirect&&n.code!==oe.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof fe)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof Zt){let d=n.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(n.url,i.currentRawUrl),u=g({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||lm(i.source)},d);this.scheduleNavigation(c,Ht,null,u,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}du(n)&&this._events.next(n)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ht,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,i,l)=>{this.navigateToSyncWithBrowser(e,i,n,l)})}navigateToSyncWithBrowser(e,n,i,l){let d=i?.navigationId?i:null,c=i?.\u0275routerUrl??e;if(i?.\u0275routerUrl&&(l=O(g({},l),{browserUrl:e})),i){let m=g({},i);delete m.navigationId,delete m.\u0275routerPageId,delete m.\u0275routerUrl,Object.keys(m).length!==0&&(l.state=m)}let u=this.parseUrl(c);this.scheduleNavigation(u,n,d,l).catch(m=>{this.disposed||this.injector.get(hn)(m)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return F(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Yr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:i,queryParams:l,fragment:d,queryParamsHandling:c,preserveFragment:u}=n,m=u?this.currentUrlTree.fragment:d,f=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":f=g(g({},this.currentUrlTree.queryParams),l);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=l||null}f!==null&&(f=this.removeEmptyProps(f));let w;try{let P=i?i.snapshot:this.routerState.snapshot.root;w=dl(P)}catch(P){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),w=this.currentUrlTree.root}return cl(w,e,f,m??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let i=it(e)?e:this.parseUrl(e),l=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(l,Ht,null,n)}navigate(e,n={skipLocationChange:!1}){return um(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(n){return this.console.warn(pt(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let i;if(n===!0?i=g({},el):n===!1?i=g({},Lr):i=g(g({},Lr),n),it(e))return Us(this.currentUrlTree,e,i);let l=this.parseUrl(e);return Us(this.currentUrlTree,l,i)}removeEmptyProps(e){return Object.entries(e).reduce((n,[i,l])=>(l!=null&&(n[i]=l),n),{})}scheduleNavigation(e,n,i,l,d){if(this.disposed)return Promise.resolve(!1);let c,u,m;d?(c=d.resolve,u=d.reject,m=d.promise):m=new Promise((w,P)=>{c=w,u=P});let f=this.pendingTasks.add();return fi(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:l,resolve:c,reject:u,promise:m,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),m.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function um(o){for(let t=0;t<o.length;t++)if(o[t]==null)throw new D(4008,!1)}var pm=(()=>{class o{router=p(Q);stateManager=p(hi);fragment=z("");queryParams=z({});path=z("");serializer=p(at);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof fe&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new _e(n)))}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),nn=(()=>{class o{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=p(new Co("href"),{optional:!0});reactiveHref=ss(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return F(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return F(this._target)}_target=z(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return F(this._queryParams)}_queryParams=z(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return F(this._fragment)}_fragment=z(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return F(this._queryParamsHandling)}_queryParamsHandling=z(void 0);set state(e){this._state.set(e)}get state(){return F(this._state)}_state=z(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return F(this._info)}_info=z(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return F(this._relativeTo)}_relativeTo=z(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return F(this._preserveFragment)}_preserveFragment=z(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return F(this._skipLocationChange)}_skipLocationChange=z(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return F(this._replaceUrl)}_replaceUrl=z(!1);isAnchorElement;onChanges=new ue;applicationErrorHandler=p(hn);options=p(st,{optional:!0});reactiveRouterState=p(pm);constructor(e,n,i,l,d,c){this.router=e,this.route=n,this.tabIndexAttribute=i,this.renderer=l,this.el=d,this.locationStrategy=c;let u=d.nativeElement.tagName?.toLowerCase();this.isAnchorElement=u==="a"||u==="area"||!!(typeof customElements=="object"&&customElements.get(u)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=z(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(it(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,i,l,d){let c=this._urlTree();if(c===null||this.isAnchorElement&&(e!==0||n||i||l||d||typeof this.target=="string"&&this.target!="_self"))return!0;let u={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(c,u)?.catch(m=>{this.applicationErrorHandler(m)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let i=this.renderer,l=this.el.nativeElement;n!==null?i.setAttribute(l,e,n):i.removeAttribute(l,e)}_urlTree=Ke(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i==="preserve"||i==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let n=this.routerLinkInput();return n===null||!this.router.createUrlTree?null:it(n)?n:this.router.createUrlTree(n,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,n)=>this.computeHref(e)===this.computeHref(n)});get urlTree(){return F(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(n){return new(n||o)(N(Q),N(Me),Qi("tabindex"),N(yt),N(ye),N(Le))};static \u0275dir=$({type:o,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,i){n&1&&H("click",function(d){return i.onClick(d.button,d.ctrlKey,d.shiftKey,d.altKey,d.metaKey)}),n&2&&Ze("href",i.reactiveHref(),Qa)("target",i._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Ee],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Ee],replaceUrl:[2,"replaceUrl","replaceUrl",Ee],routerLink:"routerLink"},features:[kt]})}return o})();var Hn=class{};var Rl=(()=>{class o{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,i,l){this.router=e,this.injector=n,this.preloadingStrategy=i,this.loader=l}setUpPreloading(){this.subscription=this.router.events.pipe(De(e=>e instanceof fe),mt(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,n){let i=[];for(let l of n){l.providers&&!l._injector&&(l._injector=wo(l.providers,e,""));let d=l._injector??e;l._loadedNgModuleFactory&&!l._loadedInjector&&(l._loadedInjector=l._loadedNgModuleFactory.create(d).injector);let c=l._loadedInjector??d;(l.loadChildren&&!l._loadedRoutes&&l.canLoad===void 0||l.loadComponent&&!l._loadedComponent)&&i.push(this.preloadConfig(d,l)),(l.children||l._loadedRoutes)&&i.push(this.processRoutes(c,l.children??l._loadedRoutes))}return Z(i).pipe(Ji())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{if(e.destroyed)return E(null);let i;n.loadChildren&&n.canLoad===void 0?i=Z(this.loader.loadChildren(e,n)):i=E(null);let l=i.pipe(Fe(d=>d===null?E(void 0):(n._loadedRoutes=d.routes,n._loadedInjector=d.injector,n._loadedNgModuleFactory=d.factory,this.processRoutes(d.injector??e,d.routes))));if(n.loadComponent&&!n._loadedComponent){let d=this.loader.loadComponent(e,n);return Z([l,d]).pipe(Ji())}else return l})}static \u0275fac=function(n){return new(n||o)(x(Q),x(pe),x(Hn),x(ui))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Nl=new _(""),hm=(()=>{class o{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Ht;restoredId=0;store={};isHydrating=p(ja,{optional:!0})??!1;urlSerializer=p(at);zone=p(ee);viewportScroller=p(cr);transitions=p(pi);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&p(bt).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof rt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof fe?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Be&&e.code===Jt.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Yt)||e.scrollBehavior==="manual")return;let n={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],n):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,n):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,n){if(this.isHydrating)return;let i=F(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>B(this,null,function*(){yield new Promise(l=>{setTimeout(l),typeof requestAnimationFrame<"u"&&requestAnimationFrame(l)}),this.zone.run(()=>{this.transitions.events.next(new Yt(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n,i))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){vo()};static \u0275prov=v({token:o,factory:o.\u0275fac})}return o})();function ta(o,...t){return ht([{provide:It,multi:!0,useValue:o},[],{provide:Me,useFactory:Bl},{provide:nr,multi:!0,useFactory:ql},t.map(e=>e.\u0275providers)])}function Bl(){return p(Q).routerState.root}function Gn(o,t){return{\u0275kind:o,\u0275providers:t}}function ql(){let o=p(se);return t=>{let e=o.get(bt);if(t!==e.components[0])return;let n=o.get(Q),i=o.get(zl);o.get(na)===1&&n.initialNavigation(),o.get(Ul,null,{optional:!0})?.setUpPreloading(),o.get(Nl,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var zl=new _("",{factory:()=>new ue}),na=new _("",{factory:()=>1});function Wl(){let o=[{provide:Ki,useValue:!0},{provide:na,useValue:0},tr(()=>{let t=p(se);return t.get(ar,Promise.resolve()).then(()=>new Promise(n=>{let i=t.get(Q),l=t.get(zl);fi(i,()=>{n(!0)}),t.get(pi).afterPreactivation=()=>(n(!0),l.closed?E(void 0):l),i.initialNavigation()}))})];return Gn(2,o)}function jl(){let o=[tr(()=>{p(Q).setUpLocationChangeListener()}),{provide:na,useValue:2}];return Gn(3,o)}var Ul=new _("");function Vl(o){return Gn(0,[{provide:Ul,useExisting:Rl},{provide:Hn,useExisting:o}])}function $l(){return Gn(8,[Gr,{provide:Vn,useExisting:Gr}])}function Hl(o){gn("NgRouterViewTransitions");let t=[{provide:Zr,useValue:kl},{provide:Kr,useValue:g({skipNextTransition:!!o?.skipInitialTransition},o)}];return Gn(9,t)}var Gl=[Xe,{provide:at,useClass:$e},Q,Dt,{provide:Me,useFactory:Bl},ui,[]],Jn=(()=>{class o{constructor(){}static forRoot(e,n){return{ngModule:o,providers:[Gl,[],{provide:It,multi:!0,useValue:e},[],n?.errorHandler?{provide:Xr,useValue:n.errorHandler}:[],{provide:st,useValue:n||{}},n?.useHash?gm():ym(),fm(),n?.preloadingStrategy?Vl(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?bm(n):[],n?.bindToComponentInputs?$l().\u0275providers:[],n?.enableViewTransitions?Hl().\u0275providers:[],vm()]}}static forChild(e){return{ngModule:o,providers:[{provide:It,multi:!0,useValue:e}]}}static \u0275fac=function(n){return new(n||o)};static \u0275mod=V({type:o});static \u0275inj=U({})}return o})();function fm(){return{provide:Nl,useFactory:()=>{let o=p(cr),t=p(st);return t.scrollOffset&&o.setOffset(t.scrollOffset),new hm(t)}}}function gm(){return{provide:Le,useClass:sr}}function ym(){return{provide:Le,useClass:Io}}function bm(o){return[o.initialNavigation==="disabled"?jl().\u0275providers:[],o.initialNavigation==="enabledBlocking"?Wl().\u0275providers:[]]}var ea=new _("");function vm(){return[{provide:ea,useFactory:ql},{provide:nr,multi:!0,useExisting:ea}]}var lt=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=V({type:o});static \u0275inj=U({})}return o})();var wm=["*"];var Em=new _("MAT_CARD_CONFIG"),Jl=(()=>{class o{appearance;constructor(){let e=p(Em,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=C({type:o,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,i){n&2&&te("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:wm,decls:1,vars:0,template:function(n,i){n&1&&(vt(),ze(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return o})(),Yl=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275dir=$({type:o,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return o})();var Ql=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275dir=$({type:o,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return o})();var Zl=(()=>{class o{align="start";static \u0275fac=function(n){return new(n||o)};static \u0275dir=$({type:o,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(n,i){n&2&&te("mat-mdc-card-actions-align-end",i.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return o})();var Kl=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=V({type:o});static \u0275inj=U({imports:[lt]})}return o})();var _m=()=>["/les1"],Cm=()=>["/les2"],Sm=()=>["/les3"],Dm=()=>["/les4"],Im=()=>["/les5"],Mm=()=>["/les6"],Pm=()=>["/les7"],Am=()=>["/les8"],Tm=()=>["/les9"],Lm=()=>["/les10"],gi=class o{lessons=[{title:"Lesson 1: Introduction to Economics",description:"Basic concepts of supply and demand.",url:"/les"},{title:"Lesson 2: Market Structures",description:"Understanding monopoly, oligopoly, and perfect competition."},{title:"Lesson 3: Economic Policies",description:"How governments control economic growth and inflation."}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-lessons"]],decls:81,vars:20,consts:[[1,"lesson-container"],[1,"lesson-card"],["mat-raised-button","",1,"custom-button",3,"routerLink"]],template:function(e,n){e&1&&(h(0,"div",0)(1,"mat-card",1)(2,"mat-card-title"),r(3,"Lesson 1: What is Functional Programming?"),y(),h(4,"mat-card-content"),r(5," An introduction to Functional Programming, covering key principles, advantages and Object-Oriented Programming. "),y(),h(6,"mat-card-actions")(7,"button",2),r(8," View Lesson "),y()()(),h(9,"mat-card",1)(10,"mat-card-title"),r(11,"Lesson 2: Basic Functional Programming Concepts"),y(),h(12,"mat-card-content"),r(13," covers essential functional programming concepts like first-class functions, higher-order functions, immutability, pure functions, and common array methods "),y(),h(14,"mat-card-actions")(15,"button",2),r(16," View Lesson "),y()()(),h(17,"mat-card",1)(18,"mat-card-title"),r(19,"Lesson 3: Intermediate Functional Programming Concepts"),y(),h(20,"mat-card-content"),r(21," introduces intermediate functional programming concepts like pattern matching, recursion, lazy evaluation, and currying in JavaScript and Python "),y(),h(22,"mat-card-actions")(23,"button",2),r(24," View Lesson "),y()()(),h(25,"mat-card",1)(26,"mat-card-title"),r(27,"Lesson 4: Advanced Functional Programming Concepts \u2013 Monads, Functors, and Concurrency"),y(),h(28,"mat-card-content"),r(29," This lesson explores advanced functional programming concepts like monads, functors, functional error handling, concurrency, and immutable data structures in JavaScript and Python. "),y(),h(30,"mat-card-actions")(31,"button",2),r(32," View Lesson "),y()()(),h(33,"mat-card",1)(34,"mat-card-title"),r(35,"Lesson 5: Functional Programming in Practice"),y(),h(36,"mat-card-content"),r(37," This lesson focuses on applying functional programming concepts to solve real-world problems with clean, efficient code. "),y(),h(38,"mat-card-actions")(39,"button",2),r(40," View Lesson "),y()()(),h(41,"mat-card",1)(42,"mat-card-title"),r(43,"Lesson 6: Real-World Applications and Projects - Simplified "),y(),h(44,"mat-card-content"),r(45," Focuses on using programming skills to build practical projects and real-world applications, demonstrating how to solve actual problems efficiently. "),y(),h(46,"mat-card-actions")(47,"button",2),r(48," View Lesson "),y()()(),h(49,"mat-card",1)(50,"mat-card-title"),r(51,"Lesson 7: Advanced Topics "),y(),h(52,"mat-card-content"),r(53," Explores complex programming concepts such as concurrency, design patterns, and performance optimization to deepen our understanding and enhance coding skills. "),y(),h(54,"mat-card-actions")(55,"button",2),r(56," View Lesson "),y()()(),h(57,"mat-card",1)(58,"mat-card-title"),r(59,"Lesson 8: Key Functional Programming Libraries in JavaScript and Python"),y(),h(60,"mat-card-content"),r(61," Covers essential functional programming libraries in JavaScript and Python, showcasing tools like Lodash, Ramda, and PyFunctional to simplify functional programming tasks. "),y(),h(62,"mat-card-actions")(63,"button",2),r(64," View Lesson "),y()()(),h(65,"mat-card",1)(66,"mat-card-title"),r(67,"Lesson 9: Case Studies and Industry Applications"),y(),h(68,"mat-card-content"),r(69," Explores real-world case studies and how functional programming is applied in various industries to solve complex problems and improve software development efficiency. "),y(),h(70,"mat-card-actions")(71,"button",2),r(72," View Lesson "),y()()(),h(73,"mat-card",1)(74,"mat-card-title"),r(75,"Lesson 10: Final Project"),y(),h(76,"mat-card-content"),r(77," In this lesson, students apply all the concepts learned throughout the course to build a comprehensive, functional programming-based project, demonstrating their understanding and skills. "),y(),h(78,"mat-card-actions")(79,"button",2),r(80," View Lesson "),y()()()()),e&2&&(b(7),A("routerLink",le(10,_m)),b(8),A("routerLink",le(11,Cm)),b(8),A("routerLink",le(12,Sm)),b(8),A("routerLink",le(13,Dm)),b(8),A("routerLink",le(14,Im)),b(8),A("routerLink",le(15,Mm)),b(8),A("routerLink",le(16,Pm)),b(8),A("routerLink",le(17,Am)),b(8),A("routerLink",le(18,Tm)),b(8),A("routerLink",le(19,Lm)))},dependencies:[Kl,Jl,Zl,Ql,Yl,Jn,nn],styles:[".lesson-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding:20px}.lesson-card[_ngcontent-%COMP%]{display:flex;justify-items:center;width:90%;margin:20px;padding:20px;border-radius:10px;box-shadow:0 4px 10px #0000001a;transition:transform .3s ease-in-out}.lesson-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:10px 0}.custom-button[_ngcontent-%COMP%]{background-color:#1e90ff!important;color:#fff!important;font-size:16px;padding:8px 16px;border-radius:30px!important;box-shadow:2px 2px 10px #0003;transition:.3s ease-in-out}.custom-button[_ngcontent-%COMP%]:hover{background-color:#add8e6!important;transform:scale(1.05)}.custom-button[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;font-size:16px;padding:10px 20px;border-radius:4px;text-transform:uppercase;font-weight:700;transition:background-color .3s,transform .3s ease-in-out;outline:none;border:none}.custom-button[_ngcontent-%COMP%]:hover{background-color:#45a049;transform:scale(1.05)}.custom-button[_ngcontent-%COMP%]:focus{outline:2px solid #4CAF50}"]})};var yi=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-lessons1"]],decls:243,vars:6,consts:[[1,"container"],["id","what-is-fp"],["id","principles-advantages"],["id","comparison"],[1,"code-block"],["id","paradigms"],["id","fp-in-javascript-vs-python"],["id","summary"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 1: Introduction to Functional Programming (FP)"),a(),s(3,"section",1)(4,"h2"),r(5,"1. What is Functional Programming?"),a(),s(6,"p"),r(7," Functional Programming (FP) is a programming paradigm where programs are constructed by applying and composing "),s(8,"strong"),r(9,"functions"),a(),r(10,". Unlike imperative programming, which focuses on "),s(11,"strong"),r(12,"how to do things"),a(),r(13," (step-by-step instructions), FP focuses on "),s(14,"strong"),r(15,"what to do"),a(),r(16," by expressing logic as mathematical functions. "),a(),s(17,"h3"),r(18,"Key Characteristics of FP:"),a(),s(19,"ul")(20,"li")(21,"strong"),r(22,"Puer Functions:"),a(),r(23," Functions that always produce the same output for the same input and have no side effects."),a(),s(24,"li")(25,"strong"),r(26,"Immutability:"),a(),r(27," Data is never modified after it\u2019s created."),a(),s(28,"li")(29,"strong"),r(30,"First-Class and Higher-Order Functions:"),a(),r(31," Functions are treated as values and can be passed as arguments or returned from other functions."),a(),s(32,"li")(33,"strong"),r(34,"Declarative Style:"),a(),r(35," Code describes what should happen, not how it should happen."),a()()(),s(36,"section",2)(37,"h2"),r(38,"2. Functional Programming Principles and Advantages"),a(),s(39,"h3"),r(40,"Principles of FP:"),a(),s(41,"ol")(42,"li")(43,"strong"),r(44,"Pure Functions:"),a(),r(45," Avoid side effects and rely only on inputs to produce outputs."),a(),s(46,"li")(47,"strong"),r(48,"Immutability:"),a(),r(49," Data is never changed; instead, new data is created."),a(),s(50,"li")(51,"strong"),r(52,"Function Composition:"),a(),r(53," Combining simple functions to build complex ones."),a(),s(54,"li")(55,"strong"),r(56,"Declarative Code:"),a(),r(57,' Focus on the "what" rather than the "how."'),a()(),s(58,"h3"),r(59,"Advantages of FP:"),a(),s(60,"ul")(61,"li")(62,"strong"),r(63,"Predictability:"),a(),r(64," Pure functions and immutability make code easier to reason about."),a(),s(65,"li")(66,"strong"),r(67,"Concurrency:"),a(),r(68," Immutable data structures are inherently thread-safe."),a(),s(69,"li")(70,"strong"),r(71,"Reusability:"),a(),r(72," Small, pure functions can be reused across the codebase."),a(),s(73,"li")(74,"strong"),r(75,"Debugging:"),a(),r(76," Fewer side effects mean fewer bugs."),a()()(),s(77,"section",3)(78,"h2"),r(79,"3. Comparing Functional Programming with Imperative and Object-Oriented Programming"),a(),s(80,"h3"),r(81,"Imperative Programming:"),a(),s(82,"p"),r(83," Imperative programming focuses on "),s(84,"strong"),r(85,"how to do things"),a(),r(86," using statements that change the program\u2019s state. It works with loops and conditional structures. "),a(),s(87,"div",4)(88,"pre"),r(89,"        "),s(90,"code"),r(91),a(),r(92,`
      `),a()(),s(93,"h3"),r(94,"Object-Oriented Programming (OOP):"),a(),s(95,"p"),r(96," Object-Oriented Programming focuses on "),s(97,"strong"),r(98,"objects"),a(),r(99," and "),s(100,"strong"),r(101,"methods"),a(),r(102," that operate on data. "),a(),s(103,"div",4)(104,"pre"),r(105,"        "),s(106,"code"),r(107),a(),r(108,`
      `),a()(),s(109,"h3"),r(110,"Functional Programming:"),a(),s(111,"p"),r(112," Functional programming focuses on "),s(113,"strong"),r(114,"what to do"),a(),r(115," using pure functions and immutable data. "),a(),s(116,"div",4)(117,"pre"),r(118,"        "),s(119,"code"),r(120,`
        // JavaScript: Functional
        const numbers = [1, 2, 3];
        const doubled = numbers.map(x => x * 2);
        console.log(doubled); // Output: [2, 4, 6]
        `),a(),r(121,`
      `),a()()(),s(122,"section",5)(123,"h2"),r(124,"4. Functional Programming Paradigms"),a(),s(125,"h3"),r(126,"Pure Functions and Side Effects"),a(),s(127,"p"),r(128," A "),s(129,"strong"),r(130,"pure function"),a(),r(131," always produces the same output for the same input and has no side effects (e.g., modifying global state or I/O operations). "),a(),s(132,"div",4)(133,"pre"),r(134,"        "),s(135,"code"),r(136,`
        // JavaScript: Pure Function
        const add = (a, b) => a + b;
        console.log(add(2, 3)); // Output: 5
        `),a(),r(137,`
      `),a()(),s(138,"h3"),r(139,"First-Class Functions"),a(),s(140,"p"),r(141," Functions are treated as "),s(142,"strong"),r(143,"first-class citizens"),a(),r(144,", meaning they can be assigned to variables, passed as arguments, and returned from other functions. "),a(),s(145,"div",4)(146,"pre"),r(147,"        "),s(148,"code"),r(149,`
        // JavaScript: First-Class Function
        const greet = () => "Hello, World!";
        console.log(greet()); // Output: Hello, World!
        `),a(),r(150,`
      `),a()(),s(151,"h3"),r(152,"Higher-Order Functions"),a(),s(153,"p"),r(154," A "),s(155,"strong"),r(156,"higher-order function"),a(),r(157," is a function that takes another function as an argument or returns a function. "),a(),s(158,"div",4)(159,"pre"),r(160,"        "),s(161,"code"),r(162,`
        // JavaScript: Higher-Order Function
        const twice = (f, x) => f(f(x));
        const addOne = x => x + 1;
        console.log(twice(addOne, 5)); // Output: 7
        `),a(),r(163,`
      `),a()(),s(164,"h3"),r(165,"Immutability"),a(),s(166,"p"),r(167," Data is never modified; instead, new data is created. "),a(),s(168,"div",4)(169,"pre"),r(170,"        "),s(171,"code"),r(172,`
        // JavaScript: Immutability
        const numbers = [1, 2, 3];
        const newNumbers = [...numbers, 4]; // Create a new array
        console.log(newNumbers); // Output: [1, 2, 3, 4]
        `),a(),r(173,`
      `),a()(),s(174,"h3"),r(175,"Referential Transparency"),a(),s(176,"p"),r(177," An expression is "),s(178,"strong"),r(179,"referentially transparent"),a(),r(180," if it can be replaced with its value without changing the program\u2019s behavior. "),a(),s(181,"div",4)(182,"pre"),r(183,"        "),s(184,"code"),r(185,`
        // JavaScript: Referential Transparency
        const add = (a, b) => a + b;
        console.log(add(2, 3) === 5); // Output: true
        `),a(),r(186,`
      `),a()()(),s(187,"section",6)(188,"h2"),r(189,"5. FP in JavaScript vs Python"),a(),s(190,"h3"),r(191,"JavaScript's Support for FP:"),a(),s(192,"p"),r(193,"JavaScript supports FP features like first-class functions, closures, and arrow functions."),a(),s(194,"div",4)(195,"pre"),r(196,"        "),s(197,"code"),r(198,`
        // JavaScript: Arrow Function
        const square = x => x * x;
        console.log(square(5)); // Output: 25
        `),a(),r(199,`
      `),a()(),s(200,"h3"),r(201,"Python's Support for FP:"),a(),s(202,"p"),r(203,"Python supports FP with features like lambdas, map, filter, and functools."),a(),s(204,"div",4)(205,"pre"),r(206,"        "),s(207,"code"),r(208,`
        // Python: Lambda and map
        numbers = [1, 2, 3]
        squared = list(map(lambda x: x * x, numbers))
        print(squared)  # Output: [1, 4, 9]
        `),a(),r(209,`
      `),a()()(),s(210,"section",7)(211,"h2"),r(212,"Summary"),a(),s(213,"p"),r(214,"Functional Programming focuses on "),s(215,"strong"),r(216,"pure functions"),a(),r(217,", "),s(218,"strong"),r(219,"immutability"),a(),r(220,", and "),s(221,"strong"),r(222,"declarative code"),a(),r(223,"."),a(),s(224,"p"),r(225,"It contrasts with imperative and object-oriented programming by emphasizing "),s(226,"strong"),r(227,"what to do"),a(),r(228," rather than "),s(229,"strong"),r(230,"how to do it"),a(),r(231,"."),a(),s(232,"p"),r(233,"JavaScript and Python both support FP with features like "),s(234,"strong"),r(235,"first-class functions"),a(),r(236,", "),s(237,"strong"),r(238,"higher-order functions"),a(),r(239,", and "),s(240,"strong"),r(241,"immutability"),a(),r(242,"."),a()()()),e&2&&(b(91),ve(`
        // JavaScript: Imperative
        let numbers = [1, 2, 3];
        for (let i = 0; i < numbers.length; i++) `,"{",`
          numbers[i] = numbers[i] * 2;
        `,"}",`
        console.log(numbers); // Output: [2, 4, 6]
        `),b(16),we(`
        // JavaScript: OOP
        class Calculator `,"{",`
          add(a, b) `,"{",`
            return a + b;
          `,"}",`
        `,"}",`
        const calc = new Calculator();
        console.log(calc.add(2, 3)); // Output: 5
        `))},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.container[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}div[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.container[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}"]})};var bi=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-lessons2"]],decls:213,vars:22,consts:[[1,"lesson"],[1,"lesson-title"],[1,"section"],[1,"section-title"],[1,"section-description"],[1,"example-title"],[1,"example"],[1,"language-javascript"],[1,"language-python"],[1,"section","summary"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h2",1),r(2,"Lesson 2: Basic Functional Programming Concepts"),a(),s(3,"div",2)(4,"h3",3),r(5,"1. First-Class and Higher-Order Functions"),a(),s(6,"p",4),r(7," In functional programming, functions are treated as "),s(8,"strong"),r(9,"first-class citizens"),a(),r(10,", meaning they can be: "),a(),s(11,"ul")(12,"li"),r(13,"Assigned to variables."),a(),s(14,"li"),r(15,"Passed as arguments to other functions."),a(),s(16,"li"),r(17,"Returned from other functions."),a()(),s(18,"h4",5),r(19,"JavaScript Examples:"),a(),s(20,"div",6)(21,"h5"),r(22,"1. Function as an Argument"),a(),s(23,"pre")(24,"code",7),r(25),a()()(),s(26,"div",6)(27,"h5"),r(28,"2. Function as a Return Value"),a(),s(29,"pre")(30,"code",7),r(31),a()()(),s(32,"h4",5),r(33,"Python Examples:"),a(),s(34,"div",6)(35,"h5"),r(36,"1. Function as an Argument"),a(),s(37,"pre")(38,"code",8),r(39),a()()(),s(40,"div",6)(41,"h5"),r(42,"2. Function as a Return Value"),a(),s(43,"pre")(44,"code",8),r(45),a()()()(),s(46,"div",2)(47,"h3",3),r(48,"2. Immutability and Data Structures"),a(),s(49,"p",4),r(50,"Immutability means that once data is created, it cannot be changed. Instead, new data is created when modifications are needed."),a(),s(51,"h4",5),r(52,"JavaScript Examples:"),a(),s(53,"div",6)(54,"h5"),r(55,"1. Using "),s(56,"code"),r(57,"Object.freeze()"),a()(),s(58,"pre")(59,"code",7),r(60),a()()(),s(61,"div",6)(62,"h5"),r(63,"2. Using Immutable.js"),a(),s(64,"pre")(65,"code",7),r(66),a()()(),s(67,"h4",5),r(68,"Python Examples:"),a(),s(69,"div",6)(70,"h5"),r(71,"1. Using Tuples"),a(),s(72,"pre")(73,"code",8),r(74,`# Tuples are immutable
numbers = (1, 2, 3)
# numbers[0] = 10  # Error: 'tuple' object does not support item assignment
print(numbers)  # Output: (1, 2, 3)`),a()()(),s(75,"div",6)(76,"h5"),r(77,"2. Using "),s(78,"code"),r(79,"frozenset"),a()(),s(80,"pre")(81,"code",8),r(82),a()()(),s(83,"div",6)(84,"h5"),r(85,"3. Immutability in Lists"),a(),s(86,"pre")(87,"code",8),r(88,`# Creating a new list instead of modifying the original
numbers = [1, 2, 3]
new_numbers = numbers + [4]  # Creates a new list
print(new_numbers)  # Output: [1, 2, 3, 4]`),a()()()(),s(89,"div",2)(90,"h3",3),r(91,"3. Pure Functions"),a(),s(92,"p",4),r(93,"A "),s(94,"strong"),r(95,"pure function"),a(),r(96," always returns the same output for the same input and has no side effects."),a(),s(97,"h4",5),r(98,"JavaScript Examples:"),a(),s(99,"div",6)(100,"h5"),r(101,"1. Pure Function"),a(),s(102,"pre")(103,"code",7),r(104,`const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5`),a()()(),s(105,"div",6)(106,"h5"),r(107,"2. Impure Function"),a(),s(108,"pre")(109,"code",7),r(110,`let total = 0;
const addToTotal = (x) => (total += x);
addToTotal(5);
console.log(total); // Output: 5 (side effect: modifies external state)`),a()()(),s(111,"h4",5),r(112,"Python Examples:"),a(),s(113,"div",6)(114,"h5"),r(115,"1. Pure Function"),a(),s(116,"pre")(117,"code",8),r(118,`def add(a, b):
    return a + b

print(add(2, 3))  # Output: 5`),a()()(),s(119,"div",6)(120,"h5"),r(121,"2. Impure Function"),a(),s(122,"pre")(123,"code",8),r(124,`total = 0
def add_to_total(x):
    global total
    total += x
    return total

add_to_total(5)
print(total)  # Output: 5 (side effect: modifies external state)`),a()()()(),s(125,"div",2)(126,"h3",3),r(127,"4. Lambda Expressions and Anonymous Functions"),a(),s(128,"h4",5),r(129,"JavaScript Examples:"),a(),s(130,"div",6)(131,"h5"),r(132,"1. Arrow Functions"),a(),s(133,"pre")(134,"code",7),r(135,`const square = (x) => x * x;
console.log(square(5)); // Output: 25`),a()()(),s(136,"h4",5),r(137,"Python Examples:"),a(),s(138,"div",6)(139,"h5"),r(140,"1. Lambda Functions"),a(),s(141,"pre")(142,"code",8),r(143,`square = lambda x: x * x
print(square(5))  # Output: 25`),a()()()(),s(144,"div",2)(145,"h3",3),r(146,"5. Map, Filter, and Reduce"),a(),s(147,"h4",5),r(148,"JavaScript Examples:"),a(),s(149,"div",6)(150,"h5"),r(151,"1. Map"),a(),s(152,"pre")(153,"code",7),r(154,`const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // Output: [2, 4, 6, 8]`),a()()(),s(155,"div",6)(156,"h5"),r(157,"2. Filter"),a(),s(158,"pre")(159,"code",7),r(160,`const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // Output: [2, 4]`),a()()(),s(161,"div",6)(162,"h5"),r(163,"3. Reduce"),a(),s(164,"pre")(165,"code",7),r(166,`const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum); // Output: 10`),a()()(),s(167,"h4",5),r(168,"Python Examples:"),a(),s(169,"div",6)(170,"h5"),r(171,"1. Map"),a(),s(172,"pre")(173,"code",8),r(174,`numbers = [1, 2, 3, 4]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)  # Output: [2, 4, 6, 8]`),a()()(),s(175,"div",6)(176,"h5"),r(177,"2. Filter"),a(),s(178,"pre")(179,"code",8),r(180,`evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # Output: [2, 4]`),a()()(),s(181,"div",6)(182,"h5"),r(183,"3. Reduce"),a(),s(184,"pre")(185,"code",8),r(186,`from functools import reduce

sum = reduce(lambda acc, x: acc + x, numbers, 0)
print(sum)  # Output: 10`),a()()()(),s(187,"div",9)(188,"h3",3),r(189,"Summary"),a(),s(190,"ul")(191,"li")(192,"strong"),r(193,"First-class and higher-order functions"),a(),r(194," allow functions to be treated as values."),a(),s(195,"li")(196,"strong"),r(197,"Immutability"),a(),r(198," ensures data is never modified, promoting predictability."),a(),s(199,"li")(200,"strong"),r(201,"Pure functions"),a(),r(202," avoid side effects and make code easier to reason about."),a(),s(203,"li")(204,"strong"),r(205,"Lambda expressions"),a(),r(206," provide concise syntax for small, anonymous functions."),a(),s(207,"li")(208,"strong"),r(209,"Map, filter, and reduce"),a(),r(210," are powerful tools for transforming and processing data."),a()(),s(211,"p"),r(212,"This lesson builds a strong foundation in functional programming concepts. In the next lesson, we\u2019ll explore more advanced topics!"),a()()()),e&2&&(b(25),ve("// Function as an argument\nconst greet = (name) => \\`Hello, \\$","{","name","}",`!\\\`;
const greetUser = (greetFn, name) => greetFn(name);

console.log(greetUser(greet, "Alice")); // Output: Hello, Alice!`),b(6),we("// Function as a return value\nconst createGreeter = (greeting) => (name) => \\`\\$","{","greeting","}",", \\$","{","name","}",`!\\\`;
const sayHello = createGreeter("Hello");
console.log(sayHello("Bob")); // Output: Hello, Bob!`),b(8),ve(`# Function as an argument
def greet(name):
    return f"Hello, `,"{","name","}",`!"

def greet_user(greet_fn, name):
    return greet_fn(name)

print(greet_user(greet, "Alice"))  # Output: Hello, Alice!`),b(6),we(`# Function as a return value
def create_greeter(greeting):
    def greeter(name):
        return f"`,"{","greeting","}",", ","{","name","}",`!"
    return greeter

say_hello = create_greeter("Hello")
print(say_hello("Bob"))  # Output: Hello, Bob!`),b(15),we(`// Using Object.freeze()
const person = Object.freeze(`,"{",' name: "Alice", age: 25 ',"}",`);
// person.age = 30; // Error: Cannot assign to read-only property 'age'

console.log(person); // Output: `,"{",' name: "Alice", age: 25 ',"}"),b(6),ve("const ","{"," List ","}",` = require("immutable");

const numbers = List([1, 2, 3]);
const newNumbers = numbers.push(4); // Creates a new list
console.log(newNumbers.toJS()); // Output: [1, 2, 3, 4]`),b(16),we(`# frozenset is immutable
unique_numbers = frozenset(`,"{","1, 2, 3","}",`)
# unique_numbers.add(4)  # Error: 'frozenset' object has no attribute 'add'
print(unique_numbers)  # Output: frozenset(`,"{","1, 2, 3","}",")"))},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6;padding:20px}.lesson[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h2.lesson-title[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h2.lesson-title[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}.section[_ngcontent-%COMP%]{margin-bottom:30px}h3.section-title[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h3.section-title[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}p.section-description[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p.section-description[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}.example[_ngcontent-%COMP%]{margin-bottom:20px}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-bottom:10px}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}.language-javascript[_ngcontent-%COMP%], .language-python[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto;white-space:pre-wrap;word-wrap:break-word}.section.summary[_ngcontent-%COMP%]{background-color:#ecf0f1;padding:20px;border-radius:10px}.section.summary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:disc;margin-left:40px}.section.summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.2rem;color:#333;margin-bottom:10px}@media(max-width:768px){.lesson[_ngcontent-%COMP%]{padding:15px}h2.lesson-title[_ngcontent-%COMP%]{font-size:2rem}h3.section-title[_ngcontent-%COMP%]{font-size:1.75rem}p.section-description[_ngcontent-%COMP%]{font-size:1rem}code[_ngcontent-%COMP%]{font-size:.9rem}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.2rem}.section.summary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-left:30px}.section.summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1rem}}@media(max-width:480px){h2.lesson-title[_ngcontent-%COMP%]{font-size:1.75rem}h3.section-title[_ngcontent-%COMP%]{font-size:1.5rem}.lesson[_ngcontent-%COMP%]{padding:10px}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1rem}.section.summary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-left:20px}}"]})};var vi=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-lesson3"]],decls:278,vars:30,consts:[[1,"lesson"],["id","pattern-matching"],["id","recursion"],["id","lazy-evaluation"],["id","type-systems"],["id","currying"],["id","summary"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 3: Intermediate Functional Programming Concepts"),a(),s(3,"section",1)(4,"h2"),r(5,"1. Pattern Matching"),a(),s(6,"h3"),r(7,"What is Pattern Matching?"),a(),s(8,"p"),r(9,"Pattern matching is a way to check a value against a pattern and extract data from it. It\u2019s a powerful feature for working with complex data structures."),a(),s(10,"h4"),r(11,"Pattern Matching in JavaScript"),a(),s(12,"h5"),r(13,"1. Destructuring"),a(),s(14,"pre")(15,"code"),r(16),a()(),s(17,"p")(18,"strong"),r(19,"Explanation:"),a(),r(20," Destructuring allows you to unpack values from arrays or properties from objects into distinct variables."),a(),s(21,"h5"),r(22,"2. Switch-Case"),a(),s(23,"pre")(24,"code"),r(25),a()(),s(26,"p")(27,"strong"),r(28,"Explanation:"),a(),r(29," The "),s(30,"code"),r(31,"switch-case"),a(),r(32," statement matches the value of "),s(33,"code"),r(34,"day"),a(),r(35," and returns the corresponding result."),a(),s(36,"h4"),r(37,"Pattern Matching in Python"),a(),s(38,"h5"),r(39,"1. Match Statement (Python 3.10+)"),a(),s(40,"pre")(41,"code"),r(42,`def get_day_type(day):
      match day:
          case "Monday" | "Tuesday":
              return "Weekday"
          case "Saturday" | "Sunday":
              return "Weekend"
          case _:
              return "Invalid day"
  
  print(get_day_type("Monday"))  # Output: Weekday`),a()(),s(43,"p")(44,"strong"),r(45,"Explanation:"),a(),r(46," The "),s(47,"code"),r(48,"match"),a(),r(49," statement matches the value of "),s(50,"code"),r(51,"day"),a(),r(52," and returns the corresponding result."),a()(),s(53,"section",2)(54,"h2"),r(55,"2. Recursion"),a(),s(56,"h3"),r(57,"What is Recursion?"),a(),s(58,"p"),r(59,"Recursion is a technique where a function calls itself to solve a problem. It\u2019s commonly used for tasks like traversing trees or calculating Fibonacci numbers."),a(),s(60,"h4"),r(61,"Recursion in JavaScript"),a(),s(62,"h5"),r(63,"1. Fibonacci Sequence"),a(),s(64,"pre")(65,"code"),r(66),a()(),s(67,"p")(68,"strong"),r(69,"Explanation:"),a(),r(70," The "),s(71,"code"),r(72,"fibonacci"),a(),r(73," function calls itself to calculate the Fibonacci sequence."),a(),s(74,"h5"),r(75,"2. Tree Traversal"),a(),s(76,"pre")(77,"code"),r(78),a()(),s(79,"p")(80,"strong"),r(81,"Explanation:"),a(),r(82," The "),s(83,"code"),r(84,"traverse"),a(),r(85," function recursively visits each node in the tree."),a(),s(86,"h4"),r(87,"Recursion in Python"),a(),s(88,"h5"),r(89,"1. Fibonacci Sequence"),a(),s(90,"pre")(91,"code"),r(92,`def fibonacci(n):
      if n <= 1:
          return n
      return fibonacci(n - 1) + fibonacci(n - 2)
  
  print(fibonacci(6))  # Output: 8`),a()(),s(93,"p")(94,"strong"),r(95,"Explanation:"),a(),r(96," The "),s(97,"code"),r(98,"fibonacci"),a(),r(99," function calls itself to calculate the Fibonacci sequence."),a(),s(100,"h5"),r(101,"2. Tree Traversal"),a(),s(102,"pre")(103,"code"),r(104),a()(),s(105,"p")(106,"strong"),r(107,"Explanation:"),a(),r(108," The "),s(109,"code"),r(110,"traverse"),a(),r(111," function recursively visits each node in the tree."),a(),s(112,"h4"),r(113,"Tail Recursion and Optimization"),a(),s(114,"h5"),r(115,"JavaScript Example: Tail Recursion"),a(),s(116,"pre")(117,"code"),r(118),a()(),s(119,"p")(120,"strong"),r(121,"Explanation:"),a(),r(122," The "),s(123,"code"),r(124,"factorial"),a(),r(125," function uses tail recursion to calculate the factorial of a number."),a(),s(126,"h5"),r(127,"Python Example: Tail Recursion"),a(),s(128,"pre")(129,"code"),r(130,`def factorial(n, acc=1):
      if n <= 1:
          return acc
      return factorial(n - 1, n * acc)  # Tail-recursive call
  
  print(factorial(5))  # Output: 120`),a()(),s(131,"p")(132,"strong"),r(133,"Explanation:"),a(),r(134," The "),s(135,"code"),r(136,"factorial"),a(),r(137," function uses tail recursion, but Python does not optimize it."),a()(),s(138,"section",3)(139,"h2"),r(140,"3. Lazy Evaluation"),a(),s(141,"h3"),r(142,"What is Lazy Evaluation?"),a(),s(143,"p"),r(144,"Lazy evaluation is a technique where expressions are not evaluated until their results are needed. This is useful for working with infinite sequences or large datasets."),a(),s(145,"h4"),r(146,"Lazy Evaluation in JavaScript"),a(),s(147,"h5"),r(148,"1. Generators"),a(),s(149,"pre")(150,"code"),r(151),a()(),s(152,"p")(153,"strong"),r(154,"Explanation:"),a(),r(155," The "),s(156,"code"),r(157,"fibonacciSequence"),a(),r(158," generator lazily produces Fibonacci numbers."),a(),s(159,"h4"),r(160,"Lazy Evaluation in Python"),a(),s(161,"h5"),r(162,"1. Generators"),a(),s(163,"pre")(164,"code"),r(165,`def fibonacci_sequence():
      a, b = 0, 1
      while True:
          yield a
          a, b = b, a + b
  
  fib = fibonacci_sequence()
  print(next(fib))  # Output: 0
  print(next(fib))  # Output: 1
  print(next(fib))  # Output: 1`),a()(),s(166,"p")(167,"strong"),r(168,"Explanation:"),a(),r(169," The "),s(170,"code"),r(171,"fibonacci_sequence"),a(),r(172," generator lazily produces Fibonacci numbers."),a()(),s(173,"section",4)(174,"h2"),r(175,"4. Type Systems in FP"),a(),s(176,"h4"),r(177,"JavaScript's Weak Typing and Type Inference"),a(),s(178,"p"),r(179,"JavaScript is dynamically typed, but tools like "),s(180,"strong"),r(181,"TypeScript"),a(),r(182," add type safety."),a(),s(183,"h5"),r(184,"TypeScript Example"),a(),s(185,"pre")(186,"code"),r(187,`const add = (a: number, b: number): number => a + b;
  console.log(add(2, 3)); // Output: 5`),a()(),s(188,"p")(189,"strong"),r(190,"Explanation:"),a(),r(191," TypeScript adds type annotations to ensure "),s(192,"code"),r(193,"a"),a(),r(194," and "),s(195,"code"),r(196,"b"),a(),r(197," are numbers."),a(),s(198,"h4"),r(199,"Python\u2019s Dynamic Typing and Optional Type Annotations"),a(),s(200,"p"),r(201,"Python is dynamically typed but supports optional type annotations."),a(),s(202,"h5"),r(203,"Python Example"),a(),s(204,"pre")(205,"code"),r(206,`def add(a: int, b: int) -> int:
      return a + b
  
  print(add(2, 3))  # Output: 5`),a()(),s(207,"p")(208,"strong"),r(209,"Explanation:"),a(),r(210," Python\u2019s type annotations are optional but improve code readability and tooling support."),a()(),s(211,"section",5)(212,"h2"),r(213,"5. Currying and Partial Application"),a(),s(214,"h3"),r(215,"What is Currying?"),a(),s(216,"p"),r(217,"Currying is the process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument."),a(),s(218,"h3"),r(219,"What is Partial Application?"),a(),s(220,"p"),r(221,"Partial application is the process of fixing a number of arguments to a function, producing a new function with fewer arguments."),a(),s(222,"h4"),r(223,"Currying in JavaScript"),a(),s(224,"h5"),r(225,"1. Using Closures"),a(),s(226,"pre")(227,"code"),r(228,`const add = (a) => (b) => a + b;
  const addFive = add(5);
  console.log(addFive(3)); // Output: 8`),a()(),s(229,"p")(230,"strong"),r(231,"Explanation:"),a(),r(232," The "),s(233,"code"),r(234,"add"),a(),r(235," function is curried, and "),s(236,"code"),r(237,"addFive"),a(),r(238," partially applies the first argument."),a(),s(239,"h4"),r(240,"Partial Application in Python"),a(),s(241,"h5"),r(242,"1. Using "),s(243,"code"),r(244,"functools.partial"),a()(),s(245,"pre")(246,"code"),r(247,`from functools import partial
  
  def add(a, b):
      return a + b
  
  add_five = partial(add, 5)
  print(add_five(3))  # Output: 8`),a()(),s(248,"p")(249,"strong"),r(250,"Explanation:"),a(),s(251,"code"),r(252,"functools.partial"),a(),r(253," creates a new function with the first argument fixed."),a()(),s(254,"section",6)(255,"h2"),r(256,"Summary"),a(),s(257,"ul")(258,"li")(259,"strong"),r(260,"Pattern matching:"),a(),r(261," simplifies working with complex data structures."),a(),s(262,"li")(263,"strong"),r(264,"Recursion:"),a(),r(265," is a powerful technique for solving problems like tree traversal."),a(),s(266,"li")(267,"strong"),r(268,"Lazy evaluation:"),a(),r(269," delays computation until needed, useful for infinite sequences."),a(),s(270,"li")(271,"strong"),r(272,"Type systems:"),a(),r(273," in JavaScript and Python provide flexibility and safety."),a(),s(274,"li")(275,"strong"),r(276,"Currying and partial application:"),a(),r(277," enable flexible function composition."),a()()()()),e&2&&(b(16),we(`const [a, b] = [1, 2];
  console.log(a, b); // Output: 1 2
  
  const `,"{"," name, age ","}"," = ","{",' name: "Alice", age: 25 ',"}",`;
  console.log(name, age); // Output: Alice 25`),b(9),we("const getDayType = (day) => ","{",`
    switch (day) `,"{",`
      case "Monday":
      case "Tuesday":
        return "Weekday";
      case "Saturday":
      case "Sunday":
        return "Weekend";
      default:
        return "Invalid day";
    `,"}",`
  `,"}",`;
  
  console.log(getDayType("Monday")); // Output: Weekday`),b(41),ve("const fibonacci = (n) => ","{",`
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  `,"}",`;
  
  console.log(fibonacci(6)); // Output: 8`),b(12),_o("const tree = ","{",`
    value: 1,
    left: `,"{"," value: 2, left: null, right: null ","}",`,
    right: `,"{"," value: 3, left: null, right: null ","}",`,
  `,"}",`;
  
  const traverse = (node) => `,"{",`
    if (!node) return;
    console.log(node.value); // Visit the node
    traverse(node.left); // Traverse left subtree
    traverse(node.right); // Traverse right subtree
  `,"}",`;
  
  traverse(tree); // Output: 1 2 3`),b(26),os("tree = ","{",`
      "value": 1,
      "left": `,"{",'"value": 2, "left": None, "right": None',"}",`,
      "right": `,"{",'"value": 3, "left": None, "right": None',"}",`,
  `,"}",`
  
  def traverse(node):
      if not node:
          return
      print(node["value"])  # Visit the node
      traverse(node["left"])  # Traverse left subtree
      traverse(node["right"])  # Traverse right subtree
  
  traverse(tree)  # Output: 1 2 3`),b(14),ve("const factorial = (n, acc = 1) => ","{",`
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc); // Tail-recursive call
  `,"}",`;
  
  console.log(factorial(5)); // Output: 120`),b(33),we("function* fibonacciSequence() ","{",`
    let [a, b] = [0, 1];
    while (true) `,"{",`
      yield a;
      [a, b] = [b, a + b];
    `,"}",`
  `,"}",`
  
  const fib = fibonacciSequence();
  console.log(fib.next().value); // Output: 0
  console.log(fib.next().value); // Output: 1
  console.log(fib.next().value); // Output: 1`))},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6;padding:20px}.lesson[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:30px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:40px}section[_ngcontent-%COMP%]{margin-bottom:40px}h2[_ngcontent-%COMP%]{font-size:2rem;color:#2980b9;margin-bottom:15px;border-bottom:2px solid #2980b9;padding-bottom:5px}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{color:#34495e;margin-top:20px;margin-bottom:10px}p[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:20px}strong[_ngcontent-%COMP%]{font-weight:700;color:#2980b9}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;white-space:pre-wrap;word-wrap:break-word;margin:10px 0}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px;color:#2c3e50}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:disc}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#2980b9;transform:translate(5px)}.example[_ngcontent-%COMP%]{margin-bottom:20px}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-bottom:10px}#summary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:disc;margin-left:40px}#summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.2rem;color:#333;margin-bottom:10px}@media(max-width:768px){.lesson[_ngcontent-%COMP%]{padding:20px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}code[_ngcontent-%COMP%]{font-size:.9rem}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.2rem}ul[_ngcontent-%COMP%]{margin-left:15px}}@media(max-width:480px){.lesson[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], .example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1rem}ul[_ngcontent-%COMP%]{margin-left:10px}li[_ngcontent-%COMP%]{font-size:1rem}}"]})};var wi=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-lesson4"]],decls:177,vars:32,consts:[[1,"container"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 4"),a(),s(3,"section")(4,"h2")(5,"strong"),r(6,"1. Monads (in JavaScript and Python)"),a()(),s(7,"h3"),r(8,"What is a Monad?"),a(),s(9,"p"),r(10," A monad is a design pattern in functional programming that allows you to structure computations in a sequence. It\u2019s like a container that wraps a value and provides a way to apply functions to that value while handling side effects or additional context (like error handling, async operations, etc.). "),a(),s(11,"p"),r(12,"Think of a monad as a box. You put a value inside the box, and the box provides rules for how you can interact with that value."),a(),s(13,"h4"),r(14,"Monads in JavaScript"),a(),s(15,"h5"),r(16,"Example 1: "),s(17,"strong"),r(18,"Promise Monad"),a()(),s(19,"pre")(20,"code"),r(21),a()(),s(22,"p"),r(23,"Explanation:"),a(),s(24,"ul")(25,"li"),r(26,"`fetchData()` returns a `Promise` that resolves to `42` after 1 second."),a(),s(27,"li"),r(28,"`.then()` is used to chain operations. Each `.then()` applies a function to the value inside the `Promise`."),a(),s(29,"li"),r(30,"This is monadic behavior because the `Promise` manages the async context for you."),a()(),s(31,"h5"),r(32,"Example 2: "),s(33,"strong"),r(34,"Maybe Monad"),a()(),s(35,"pre")(36,"code"),r(37),a()(),s(38,"p"),r(39,"Explanation:"),a(),s(40,"ul")(41,"li"),r(42,"`Maybe.of(value)` wraps a value in a `Maybe` container."),a(),s(43,"li"),r(44,"`.map(fn)` applies a function `fn` to the value inside the `Maybe` if the value is not `null` or `undefined`."),a(),s(45,"li"),r(46,"If the value is `null` or `undefined`, the function is not applied, and the computation stops safely."),a()(),s(47,"h5"),r(48,"Example 3: "),s(49,"strong"),r(50,"Maybe Monad with Safe Handling"),a()(),s(51,"pre")(52,"code"),r(53),a()(),s(54,"p"),r(55,"Explanation: Safe handling of a user object, with no errors thrown if `null` is passed in."),a()(),s(56,"section")(57,"h2")(58,"strong"),r(59,"2. Functors and Applicative Functors"),a()(),s(60,"h3"),r(61,"What is a Functor?"),a(),s(62,"p"),r(63," A functor is any type that implements a `map` method. It\u2019s a container that allows you to apply a function to the value inside it. "),a(),s(64,"h4"),r(65,"Functors in JavaScript"),a(),s(66,"h5"),r(67,"Example: "),s(68,"strong"),r(69,"Array as a Functor"),a()(),s(70,"pre")(71,"code"),r(72,`
const numbers = [1, 2, 3];
const doubled = numbers.map((x) => x * 2); // [2, 4, 6]
    `),a()(),s(73,"p"),r(74,"Explanation: The `map` function is used to apply a function to each element in the array and return a new array."),a(),s(75,"h4"),r(76,"Functors in Python"),a(),s(77,"h5"),r(78,"Example: "),s(79,"strong"),r(80,"List as a Functor"),a()(),s(81,"pre")(82,"code"),r(83,`
numbers = [1, 2, 3]
doubled = list(map(lambda x: x * 2, numbers))  # [2, 4, 6]
    `),a()(),s(84,"p"),r(85,"Explanation: The `map` function in Python applies a function to each element in the list and returns a new list."),a(),s(86,"h3"),r(87,"What is an Applicative Functor?"),a(),s(88,"p"),r(89," An applicative functor is a functor that can apply a function wrapped in a container to a value wrapped in a container. "),a(),s(90,"h4"),r(91,"Applicative Functors in JavaScript"),a(),s(92,"h5"),r(93,"Example: "),s(94,"strong"),r(95,"Using Promise.all"),a()(),s(96,"pre")(97,"code"),r(98,`
const add = (a, b) => a + b;

const promise1 = Promise.resolve(2);
const promise2 = Promise.resolve(3);

Promise.all([promise1, promise2]).then(([a, b]) => add(a, b)); // 5
    `),a()(),s(99,"p"),r(100,"Explanation: `Promise.all` takes an array of promises and applies a function to their resolved values."),a()(),s(101,"section")(102,"h2")(103,"strong"),r(104,"3. Functional Error Handling"),a()(),s(105,"h4"),r(106,"Using Either or Maybe for Safe Computation in JavaScript"),a(),s(107,"h5"),r(108,"Example: "),s(109,"strong"),r(110,"Either Monad"),a()(),s(111,"pre")(112,"code"),r(113),a()(),s(114,"p"),r(115,"Explanation: `Left` represents an error state, and `Right` represents a success state. `.map(fn)` only applies the function if the state is `Right`."),a(),s(116,"h5"),r(117,"Result Monad in Python"),a(),s(118,"pre")(119,"code"),r(120,`
class Result:
    def __init__(self, value):
        self.value = value

        @staticmethod
    def of(value):
        return Ok(value)

class Ok(Result):
    def map(self, fn):
        return Result.of(fn(self.value))

class Err(Result):
    def map(self, fn):
        return self  # Ignore the function

def safe_divide(a, b):
    return Err("Division by zero") if b == 0 else Ok(a / b)

safe_divide(10, 0).map(lambda x: print(x))  # No output (error)
safe_divide(10, 2).map(lambda x: print(x))  # Output: 5.0
    `),a()(),s(121,"p"),r(122,"Explanation: `Ok` represents a success state, and `Err` represents an error state. `.map(fn)` only applies the function if the state is `Ok`."),a()(),s(123,"section")(124,"h2")(125,"strong"),r(126,"4. Concurrency and Parallelism in FP"),a()(),s(127,"h4"),r(128,"Functional Concurrency Using JavaScript"),a(),s(129,"h5"),r(130,"Example: "),s(131,"strong"),r(132,"Async/Await"),a()(),s(133,"pre")(134,"code"),r(135),a()(),s(136,"p"),r(137,"Explanation: `await` pauses the execution until the `Promise` resolves, allowing you to write asynchronous code that looks synchronous."),a(),s(138,"h4"),r(139,"Python's Asyncio"),a(),s(140,"h5"),r(141,"Example: "),s(142,"strong"),r(143,"Asyncio"),a()(),s(144,"pre")(145,"code"),r(146,`
import asyncio

async def fetch_data():
    await asyncio.sleep(1)  # Simulate async operation
    return 42

async def main():
    result = await fetch_data()
    print(result)  # Output: 42

asyncio.run(main())
    `),a()(),s(147,"p"),r(148,"Explanation: `await` pauses the execution until the coroutine completes. `asyncio.run()` runs the main coroutine."),a()(),s(149,"section")(150,"h2")(151,"strong"),r(152,"5. Purely Functional Data Structures"),a()(),s(153,"h3"),r(154,"Immutable Data Structures"),a(),s(155,"h4"),r(156,"Immutable Data Structures in JavaScript"),a(),s(157,"h5"),r(158,"Example: "),s(159,"strong"),r(160,"Immutable.js"),a()(),s(161,"pre")(162,"code"),r(163),a()(),s(164,"p"),r(165,"Explanation: `List` is an immutable data structure. Operations like `map` return a new `List` instead of modifying the original."),a(),s(166,"h4"),r(167,"Immutable Data Structures in Python"),a(),s(168,"h5"),r(169,"Example: "),s(170,"strong"),r(171,"Pyrsistent"),a()(),s(172,"pre")(173,"code"),r(174,`
from pyrsistent import pvector

numbers = pvector([1, 2, 3])
doubled = numbers.map(lambda x: x * 2)  # pvector([2, 4, 6])
    `),a()(),s(175,"p"),r(176,"Explanation: `pvector` is an immutable list. Operations like `map` return a new `pvector`."),a()()()),e&2&&(b(21),we(`
const fetchData = () => `,"{",`
  return new Promise((resolve) => `,"{",`
    setTimeout(() => resolve(42), 1000); // Simulate async operation
  `,"}",`);
`,"}",`;

fetchData()
  .then((data) => data * 2) // Apply a function to the value inside the Promise
  .then((result) => console.log(result)); // Output: 84 after 1 second
    `),b(16),_o(`
class Maybe `,"{",`
  constructor(value) `,"{",`
    this.value = value;
  `,"}",`

  static of(value) `,"{",`
    return new Maybe(value);
  `,"}",`

  map(fn) `,"{",`
    return this.value == null ? Maybe.of(null) : Maybe.of(fn(this.value));
  `,"}",`
`,"}",`

const safeDivide = (a, b) => (b === 0 ? Maybe.of(null) : Maybe.of(a / b));

safeDivide(10, 0)
  .map((result) => result * 2)  // Won't execute because result is null
  .map((result) => console.log(result)); // No output (no error)
    `),b(16),ve(`
const safeGetUser = (id) => id ? Maybe.of(`,"{"," id, name: 'John Doe' ","}",`) : Maybe.of(null);

safeGetUser(null)
  .map((user) => user.name)
  .map((name) => console.log(name)); // No output (no error)
    `),b(60),is([`
class Either `,"{",`
  constructor(value) `,"{",`
    this.value = value;
  `,"}",`

  static of(value) `,"{",`
    return new Right(value);
  `,"}",`
`,"}",`

class Left extends Either `,"{",`
  map(fn) `,"{",`
    return this; // Ignore the function
  `,"}",`
`,"}",`

class Right extends Either `,"{",`
  map(fn) `,"{",`
    return Either.of(fn(this.value));
  `,"}",`
`,"}",`

const safeDivide = (a, b) => (b === 0 ? new Left("Division by zero") : new Right(a / b));

safeDivide(10, 0).map((result) => console.log(result)); // No output (error)
safeDivide(10, 2).map((result) => console.log(result)); // Output: 5
    `]),b(22),ve(`
const fetchData = async () => `,"{",`
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
`,"}",`;

fetchData().then((data) => console.log(data));
    `),b(28),ve(`
import `,"{"," List ","}",` from "immutable";

const numbers = List([1, 2, 3]);
const doubled = numbers.map((x) => x * 2); // List [2, 4, 6]
    `))},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6;padding:20px}.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:30px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:40px}section[_ngcontent-%COMP%]{margin-bottom:40px}h2[_ngcontent-%COMP%]{font-size:2rem;color:#2980b9;margin-bottom:15px;border-bottom:2px solid #2980b9;padding-bottom:5px}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{color:#34495e;margin-top:20px;margin-bottom:10px}p[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:20px}strong[_ngcontent-%COMP%]{font-weight:700;color:#2980b9}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;white-space:pre-wrap;word-wrap:break-word;margin:10px 0}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px;color:#2c3e50}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:disc}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#2980b9;transform:translate(5px)}.example[_ngcontent-%COMP%]{margin-bottom:20px}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-bottom:10px}#summary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:disc;margin-left:40px}#summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.2rem;color:#333;margin-bottom:10px}@media(max-width:768px){.container[_ngcontent-%COMP%]{padding:20px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}code[_ngcontent-%COMP%]{font-size:.9rem}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.2rem}ul[_ngcontent-%COMP%]{margin-left:15px}}@media(max-width:480px){.container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], .example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1rem}ul[_ngcontent-%COMP%]{margin-left:10px}li[_ngcontent-%COMP%]{font-size:1rem}}"]})};var km=()=>["/lessons"],Ei=class o{text="Introduction To Functional Programming";typingSpeed=100;ngAfterViewInit(){this.startTyping()}startTyping(){let t=0,e=document.getElementById("typed-text"),n=document.getElementById("start-btn"),i=setInterval(()=>{t<this.text.length?(e.innerHTML+=this.text.charAt(t),t++):(clearInterval(i),setTimeout(()=>{n.classList.add("show-button")},1e3))},this.typingSpeed)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-home"]],decls:8,vars:2,consts:[[1,"container"],[1,"content"],[1,"typing-text"],["id","typed-text"],[1,"cursor"],["id","start-btn",1,"btn",3,"routerLink"]],template:function(e,n){e&1&&(h(0,"div",0)(1,"div",1)(2,"h1",2),qe(3,"span",3),h(4,"span",4),r(5,"\u2022"),y()(),h(6,"button",5),r(7,"Get Started"),y()()()),e&2&&(b(6),A("routerLink",le(1,km)))},dependencies:[nn],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#fff}.content[_ngcontent-%COMP%]{text-align:center}.typing-text[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:orange;white-space:nowrap;overflow:hidden;display:flex;align-items:center;justify-content:center}.cursor[_ngcontent-%COMP%]{color:orange;font-size:2rem;margin-left:5px;opacity:1;animation:_ngcontent-%COMP%_blink .8s infinite}.btn[_ngcontent-%COMP%]{margin-top:20px;padding:12px 24px;font-size:1.2rem;font-weight:700;color:#fff;background-color:#1e90ff;border:none;border-radius:8px;cursor:pointer;opacity:0;transform:translateY(20px);transition:opacity 1s ease-in-out,transform .5s ease-in-out}@keyframes _ngcontent-%COMP%_blink{50%{opacity:0}}.show-button[_ngcontent-%COMP%]{opacity:1!important;transform:translateY(0)!important}"]})};var xi=new WeakMap,Yn=(()=>{class o{_appRef;_injector=p(se);_environmentInjector=p(pe);load(e){let n=this._appRef=this._appRef||this._injector.get(bt),i=xi.get(n);i||(i={loaders:new Set,refs:[]},xi.set(n,i),n.onDestroy(()=>{xi.get(n)?.refs.forEach(l=>l.destroy()),xi.delete(n)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(ms(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var _i;function Om(){if(_i===void 0&&(_i=null,typeof window<"u")){let o=window;o.trustedTypes!==void 0&&(_i=o.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return _i}function rn(o){return Om()?.createHTML(o)||o}function Xl(o){return Error(`Unable to find icon with the name "${o}"`)}function Fm(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function ed(o){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`)}function td(o){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`)}var He=class{url;svgText;options;svgElement=null;constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}},od=(()=>{class o{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,i,l){this._httpClient=e,this._sanitizer=n,this._errorHandler=l,this._document=i}addSvgIcon(e,n,i){return this.addSvgIconInNamespace("",e,n,i)}addSvgIconLiteral(e,n,i){return this.addSvgIconLiteralInNamespace("",e,n,i)}addSvgIconInNamespace(e,n,i,l){return this._addSvgIconConfig(e,n,new He(i,null,l))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,i,l){let d=this._sanitizer.sanitize(be.HTML,i);if(!d)throw td(i);let c=rn(d);return this._addSvgIconConfig(e,n,new He("",c,l))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,i){return this._addSvgIconSetConfig(e,new He(n,null,i))}addSvgIconSetLiteralInNamespace(e,n,i){let l=this._sanitizer.sanitize(be.HTML,n);if(!l)throw td(n);let d=rn(l);return this._addSvgIconSetConfig(e,new He("",d,i))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(be.RESOURCE_URL,e);if(!n)throw ed(e);let i=this._cachedIconsByUrl.get(n);return i?E(Ci(i)):this._loadSvgIconFromConfig(new He(e,null)).pipe(re(l=>this._cachedIconsByUrl.set(n,l)),R(l=>Ci(l)))}getNamedSvgIcon(e,n=""){let i=nd(n,e),l=this._svgIconConfigs.get(i);if(l)return this._getSvgFromConfig(l);if(l=this._getIconConfigFromResolvers(n,e),l)return this._svgIconConfigs.set(i,l),this._getSvgFromConfig(l);let d=this._iconSetConfigs.get(n);return d?this._getSvgFromIconSetConfigs(e,d):mo(Xl(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?E(Ci(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(R(n=>Ci(n)))}_getSvgFromIconSetConfigs(e,n){let i=this._extractIconWithNameFromAnySet(e,n);if(i)return E(i);let l=n.filter(d=>!d.svgText).map(d=>this._loadSvgIconSetFromConfig(d).pipe(Pt(c=>{let m=`Loading icon set URL: ${this._sanitizer.sanitize(be.RESOURCE_URL,d.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(m)),E(null)})));return ho(l).pipe(R(()=>{let d=this._extractIconWithNameFromAnySet(e,n);if(!d)throw Xl(e);return d}))}_extractIconWithNameFromAnySet(e,n){for(let i=n.length-1;i>=0;i--){let l=n[i];if(l.svgText&&l.svgText.toString().indexOf(e)>-1){let d=this._svgElementFromConfig(l),c=this._extractSvgIconFromSet(d,e,l.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(re(n=>e.svgText=n),R(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?E(null):this._fetchIcon(e).pipe(re(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,i){let l=e.querySelector(`[id="${n}"]`);if(!l)return null;let d=l.cloneNode(!0);if(d.removeAttribute("id"),d.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(d,i);if(d.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(d),i);let c=this._svgElementFromString(rn("<svg></svg>"));return c.appendChild(d),this._setSvgAttributes(c,i)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let i=n.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let n=this._svgElementFromString(rn("<svg></svg>")),i=e.attributes;for(let l=0;l<i.length;l++){let{name:d,value:c}=i[l];d!=="id"&&n.setAttribute(d,c)}for(let l=0;l<e.childNodes.length;l++)e.childNodes[l].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[l].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:i}=e,l=i?.withCredentials??!1;if(!this._httpClient)throw Fm();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let d=this._sanitizer.sanitize(be.RESOURCE_URL,n);if(!d)throw ed(n);let c=this._inProgressUrlFetches.get(d);if(c)return c;let u=this._httpClient.get(d,{responseType:"text",withCredentials:l}).pipe(R(m=>rn(m)),At(()=>this._inProgressUrlFetches.delete(d)),Ta());return this._inProgressUrlFetches.set(d,u),u}_addSvgIconConfig(e,n,i){return this._svgIconConfigs.set(nd(e,n),i),this}_addSvgIconSetConfig(e,n){let i=this._iconSetConfigs.get(e);return i?i.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let i=0;i<this._resolvers.length;i++){let l=this._resolvers[i](n,e);if(l)return Rm(l)?new He(l.url,null,l.options):new He(l,null)}}static \u0275fac=function(n){return new(n||o)(x(nt,8),x(Sr),x(T,8),x(ft))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function Ci(o){return o.cloneNode(!0)}function nd(o,t){return o+":"+t}function Rm(o){return!!(o.url&&o.options)}var Nm=["*"],Bm=new _("MAT_ICON_DEFAULT_OPTIONS"),qm=new _("mat-icon-location",{providedIn:"root",factory:()=>{let o=p(T),t=o?o.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}}),id=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],zm=id.map(o=>`[${o}]`).join(", "),Wm=/^url\(['"]?#(.*?)['"]?\)$/,an=(()=>{class o{_elementRef=p(ye);_iconRegistry=p(od);_location=p(qm);_errorHandler=p(ft);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=co.EMPTY;constructor(){let e=p(new Co("aria-hidden"),{optional:!0}),n=p(Bm,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let i=e.childNodes[n];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),n.forEach(i=>e.classList.add(i)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((i,l)=>{i.forEach(d=>{l.setAttribute(d.name,`url('${e}#${d.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(zm),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let l=0;l<n.length;l++)id.forEach(d=>{let c=n[l],u=c.getAttribute(d),m=u?u.match(Wm):null;if(m){let f=i.get(c);f||(f=[],i.set(c,f)),f.push({name:d,value:m[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,i]=this._splitIconName(e);n&&(this._svgNamespace=n),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,n).pipe(Je(1)).subscribe(l=>this._setSvgElement(l),l=>{let d=`Error retrieving icon ${n}:${i}! ${l.message}`;this._errorHandler.handleError(new Error(d))})}}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=C({type:o,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,i){n&2&&(Ze("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),xo(i.color?"mat-"+i.color:""),te("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Ee],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Nm,decls:1,vars:0,template:function(n,i){n&1&&(vt(),ze(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return o})(),sn=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=V({type:o});static \u0275inj=U({imports:[lt]})}return o})();var jm=()=>["A","B","C","D","E","F"];function Um(o,t){o&1&&(h(0,"span",12)(1,"mat-icon"),r(2,"check_circle"),y()())}function Vm(o,t){o&1&&(h(0,"span",12)(1,"mat-icon"),r(2,"cancel"),y()())}function $m(o,t){if(o&1){let e=ne();h(0,"button",8),H("click",function(){let i=K(e).$index,l=q().$implicit,d=q();return X(d.selectOption(l.id,i+1))}),h(1,"span",9),r(2),y(),h(3,"span",10),r(4),y(),Re(5,Um,3,0,"span",11)(6,Vm,3,0,"span",11),y()}if(o&2){let e=t.$implicit,n=t.$index,i=q().$implicit,l=q();te("highlight",!l.submitted&&l.selectedAnswers[i.id]===n+1)("correct-option",l.submitted&&l.isCorrectOption(i,n+1))("incorrect-option",l.submitted&&l.selectedAnswers[i.id]===n+1&&!l.isCorrectOption(i,n+1)),A("disabled",l.submitted),b(2),he(le(11,jm)[n]),b(2),he(e),b(),A("ngIf",l.submitted&&l.isCorrectOption(i,n+1)),b(),A("ngIf",l.submitted&&l.selectedAnswers[i.id]===n+1&&!l.isCorrectOption(i,n+1))}}function Hm(o,t){if(o&1&&(h(0,"div",1)(1,"div",3)(2,"span",4),r(3),y()(),h(4,"h2",5),r(5),y(),h(6,"div",6),wn(7,$m,7,12,"button",7,vn),y()()),o&2){let e=t.$implicit,n=t.$index;b(3),ns("Question ",n+1),b(2),he(e.question),b(2),En(e.options)}}function Gm(o,t){if(o&1){let e=ne();h(0,"div",13)(1,"button",14),H("click",function(){K(e);let i=q();return X(i.submitAnswers())}),h(2,"mat-icon"),r(3,"cloud_upload"),y(),h(4,"span"),r(5,"Submit Answers"),y()()()}if(o&2){let e=q();b(),A("disabled",e.submitted)}}var Si=class o{constructor(t,e){this.http=t;this.route=e}quizzes=[];selectedAnswers={};submitted=!1;lessonId;ngOnInit(){this.route.params.subscribe(t=>{this.lessonId=+t.lessonId,this.loadQuizzes(this.lessonId)})}loadQuizzes(t){let e=`./lesson${t}.json`;this.http.get(e).subscribe({next:n=>{this.quizzes=n},error:n=>{console.error("Error loading quiz data:",n)}})}selectOption(t,e){this.submitted||(this.selectedAnswers[t]=e)}submitAnswers(){if(Object.keys(this.selectedAnswers).length<this.quizzes.length){alert("Please answer all the questions before submitting.");return}this.submitted=!0}isCorrectOption(t,e){return t?t.answer===e||t.options[e-1]===t.answer:!1}static \u0275fac=function(e){return new(e||o)(N(nt),N(Me))};static \u0275cmp=C({type:o,selectors:[["app-quiz"]],decls:4,vars:1,consts:[[1,"quiz-wrapper"],[1,"card","quiz-card"],["class","quiz-actions",4,"ngIf"],[1,"quiz-card-header"],[1,"question-number"],[1,"question-text"],[1,"options-list"],[1,"option-btn",3,"highlight","correct-option","incorrect-option","disabled"],[1,"option-btn",3,"click","disabled"],[1,"option-letter"],[1,"option-text"],["class","option-status-icon",4,"ngIf"],[1,"option-status-icon"],[1,"quiz-actions"],[1,"btn","btn-primary","submit-btn",3,"click","disabled"]],template:function(e,n){e&1&&(h(0,"div",0),wn(1,Hm,9,2,"div",1,vn),Re(3,Gm,6,1,"div",2),y()),e&2&&(b(),En(n.quizzes),b(2),A("ngIf",n.quizzes.length>0))},dependencies:[et,_n,sn,an],styles:[".quiz-wrapper[_ngcontent-%COMP%]{max-width:720px;margin:0 auto;display:flex;flex-direction:column;gap:1.5rem;padding:1rem 0}.quiz-card[_ngcontent-%COMP%]{padding:2.5rem}.quiz-card-header[_ngcontent-%COMP%]{margin-bottom:.75rem}.question-number[_ngcontent-%COMP%]{font-size:.85rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--color-accent)}.question-text[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;line-height:1.5;margin-bottom:1.5rem;color:var(--color-text)}.options-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.option-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;width:100%;padding:1rem 1.25rem;background:#fff9;border:1px solid var(--color-border);border-radius:var(--radius-md);cursor:pointer;text-align:left;font-family:var(--font-family-sans);font-size:.95rem;color:var(--color-text);font-weight:500;transition:all .2s cubic-bezier(.4,0,.2,1)}.option-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--color-white);border-color:var(--color-accent);box-shadow:0 0 0 3px #8e44ad14;transform:translate(4px)}.option-btn[_ngcontent-%COMP%]:active:not(:disabled){transform:translate(2px) scale(.99)}.option-btn[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.option-letter[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:32px;height:32px;min-width:32px;border-radius:8px;background:linear-gradient(135deg,#8e44ad14,#9b59b614);color:var(--color-accent);font-weight:700;font-size:.85rem}.option-text[_ngcontent-%COMP%]{flex:1}.option-btn.highlight[_ngcontent-%COMP%]{background:#8e44ad0d;border-color:var(--color-accent);box-shadow:0 0 0 3px #8e44ad1a}.option-btn.highlight[_ngcontent-%COMP%]   .option-letter[_ngcontent-%COMP%]{background:var(--color-accent);color:var(--color-white)}.option-btn.correct-option[_ngcontent-%COMP%]{background:#2ecc710a!important;border-color:var(--color-success, #2ecc71)!important;box-shadow:0 0 0 3px #2ecc711a!important}.option-btn.correct-option[_ngcontent-%COMP%]   .option-letter[_ngcontent-%COMP%]{background:var(--color-success, #2ecc71)!important;color:var(--color-white)!important}.option-btn.incorrect-option[_ngcontent-%COMP%]{background:#e74c3c0a!important;border-color:var(--color-error, #e74c3c)!important;box-shadow:0 0 0 3px #e74c3c1a!important}.option-btn.incorrect-option[_ngcontent-%COMP%]   .option-letter[_ngcontent-%COMP%]{background:var(--color-error, #e74c3c)!important;color:var(--color-white)!important}.option-status-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-left:auto}.correct-option[_ngcontent-%COMP%]   .option-status-icon[_ngcontent-%COMP%]{color:var(--color-success, #2ecc71)}.incorrect-option[_ngcontent-%COMP%]   .option-status-icon[_ngcontent-%COMP%]{color:var(--color-error, #e74c3c)}.quiz-actions[_ngcontent-%COMP%]{margin-top:1rem;display:flex;justify-content:center}.submit-btn[_ngcontent-%COMP%]{padding:.9rem 2.5rem}"]})};var Di=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-lessons5"]],decls:237,vars:0,consts:[[1,"lesson"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 5: Functional Programming in Practice"),a(),s(3,"h2"),r(4,"1. Functional Programming in JavaScript"),a(),s(5,"h3"),r(6,"Writing Pure Functions and Higher-Order Functions in JS"),a(),s(7,"h4"),r(8,"Pure Functions"),a(),s(9,"p")(10,"strong"),r(11,"What is a Pure Function?"),a()(),s(12,"p"),r(13,"A pure function is a function that:"),a(),s(14,"ul")(15,"li")(16,"strong"),r(17,"Always returns the same output for the same input"),a(),r(18," (deterministic)."),a(),s(19,"li")(20,"strong"),r(21,"Has no side effects"),a(),r(22," (doesn't modify external state or perform I/O operations)."),a()(),s(23,"p"),r(24,"Pure functions are predictable and easier to test and debug."),a(),s(25,"h4"),r(26,"Example of a Pure Function"),a(),s(27,"pre")(28,"code"),r(29,`const add = (a, b) => a + b;
  console.log(add(2, 3)); // Always returns 5`),a()(),s(30,"h4"),r(31,"Example of an Impure Function"),a(),s(32,"pre")(33,"code"),r(34,`let counter = 0;
  const increment = () => {
    counter++; // Modifies external state
    return counter;
  };
  console.log(increment()); // Output depends on external state`),a()(),s(35,"h3"),r(36,"Higher-Order Functions"),a(),s(37,"p")(38,"strong"),r(39,"What is a Higher-Order Function?"),a()(),s(40,"p"),r(41,"A higher-order function is a function that:"),a(),s(42,"ul")(43,"li"),r(44,"Takes one or more functions as arguments."),a(),s(45,"li"),r(46,"Returns a function as its result."),a()(),s(47,"p"),r(48,"Higher-order functions are a key concept in functional programming."),a(),s(49,"h4"),r(50,"Example of a Higher-Order Function"),a(),s(51,"pre")(52,"code"),r(53,`const multiplyBy = (factor) => (number) => number * factor;
  const double = multiplyBy(2);
  console.log(double(5)); // 10`),a()(),s(54,"h3"),r(55,"Using Libraries like Ramda and Lodash FP"),a(),s(56,"h4"),r(57,"Ramda"),a(),s(58,"p")(59,"strong"),r(60,"What is Ramda?"),a()(),s(61,"p"),r(62,"Ramda is a functional programming library for JavaScript. It provides utility functions for working with data in a functional style."),a(),s(63,"h4"),r(64,"Example of Ramda"),a(),s(65,"pre")(66,"code"),r(67,`import R from "ramda";
  
  const add = R.add;
  const multiply = R.multiply;
  
  const result = R.pipe(add(2), multiply(3))(5); // (5 + 2) * 3 = 21
  console.log(result);`),a()(),s(68,"h4"),r(69,"Lodash FP"),a(),s(70,"p")(71,"strong"),r(72,"What is Lodash FP?"),a()(),s(73,"p"),r(74,"Lodash FP is a functional programming version of Lodash. It provides immutable and auto-curried functions."),a(),s(75,"h4"),r(76,"Example of Lodash FP"),a(),s(77,"pre")(78,"code"),r(79,`import _ from "lodash/fp";
  
  const add = _.add;
  const multiply = _.multiply;
  
  const result = _.pipe([add(2), multiply(3)])(5); // (5 + 2) * 3 = 21
  console.log(result);`),a()(),s(80,"h2"),r(81,"2. Functional Programming in Python"),a(),s(82,"h3"),r(83,"Writing Pure Functions and Higher-Order Functions in Python"),a(),s(84,"h4"),r(85,"Pure Functions"),a(),s(86,"h4"),r(87,"Example of a Pure Function"),a(),s(88,"pre")(89,"code"),r(90,`def add(a, b):
      return a + b
  
  print(add(2, 3))  # Always returns 5`),a()(),s(91,"h4"),r(92,"Higher-Order Functions"),a(),s(93,"h4"),r(94,"Example of a Higher-Order Function"),a(),s(95,"pre")(96,"code"),r(97,`def multiply_by(factor):
      def multiply(number):
          return number * factor
      return multiply
  
  double = multiply_by(2)
  print(double(5))  # 10`),a()(),s(98,"h3"),r(99,"Python's `functools` Module"),a(),s(100,"h4"),r(101,"`reduce`"),a(),s(102,"p")(103,"strong"),r(104,"What is `reduce`?"),a()(),s(105,"p"),r(106,"`reduce` applies a function cumulatively to items in a sequence, reducing it to a single value."),a(),s(107,"h4"),r(108,"Example of `reduce`"),a(),s(109,"pre")(110,"code"),r(111,`from functools import reduce
  
  numbers = [1, 2, 3, 4]
  total = reduce(lambda acc, x: acc + x, numbers)
  print(total)  # 10`),a()(),s(112,"h4"),r(113,"`partial`"),a(),s(114,"p")(115,"strong"),r(116,"What is `partial`?"),a()(),s(117,"p"),r(118,"`partial` fixes some arguments of a function, creating a new function."),a(),s(119,"h4"),r(120,"Example of `partial`"),a(),s(121,"pre")(122,"code"),r(123,`from functools import partial
  
  def power(base, exponent):
      return base ** exponent
  
  square = partial(power, exponent=2)
  print(square(5))  # 25`),a()(),s(124,"h4"),r(125,"`lru_cache`"),a(),s(126,"p")(127,"strong"),r(128,"What is `lru_cache`?"),a()(),s(129,"p"),r(130,"`lru_cache` is a decorator that memoizes function results to optimize performance."),a(),s(131,"h4"),r(132,"Example of `lru_cache`"),a(),s(133,"pre")(134,"code"),r(135,`from functools import lru_cache
  
  @lru_cache
  def fibonacci(n):
      if n < 2:
          return n
      return fibonacci(n - 1) + fibonacci(n - 2)
  
  print(fibonacci(10))  # 55`),a()(),s(136,"h3"),r(137,"Pythonic FP Libraries"),a(),s(138,"h4"),r(139,"`toolz`"),a(),s(140,"p")(141,"strong"),r(142,"What is `toolz`?"),a()(),s(143,"p"),r(144,"`toolz` is a library for functional programming in Python."),a(),s(145,"h4"),r(146,"Example of `toolz`"),a(),s(147,"pre")(148,"code"),r(149,`from toolz import pipe
  
  result = pipe(5, lambda x: x + 2, lambda x: x * 3)  # (5 + 2) * 3 = 21
  print(result)`),a()(),s(150,"h4"),r(151,"`fn`"),a(),s(152,"p")(153,"strong"),r(154,"What is `fn`?"),a()(),s(155,"p"),r(156,"`fn` is a library for functional programming."),a(),s(157,"h4"),r(158,"Example of `fn`"),a(),s(159,"pre")(160,"code"),r(161,`from fn import F
  
  result = F() >> (lambda x: x + 2) >> (lambda x: x * 3)  # (5 + 2) * 3 = 21
  print(result(5))`),a()(),s(162,"h4"),r(163,"`PyFunctional`"),a(),s(164,"p")(165,"strong"),r(166,"What is `PyFunctional`?"),a()(),s(167,"p"),r(168,"`PyFunctional` is a library for functional data processing."),a(),s(169,"h4"),r(170,"Example of `PyFunctional`"),a(),s(171,"pre")(172,"code"),r(173,`from functional import seq
  
  result = seq([1, 2, 3]).map(lambda x: x * 2).sum()
  print(result)  # 12`),a()(),s(174,"h2"),r(175,"3. Testing in Functional Programming"),a(),s(176,"h3"),r(177,"Unit Testing Functional Code in JavaScript"),a(),s(178,"h4"),r(179,"Using Mocha"),a(),s(180,"pre")(181,"code"),r(182,`const assert = require("assert");
  
  const add = (a, b) => a + b;
  
  describe("add", () => {
    it("should return the sum of two numbers", () => {
      assert.strictEqual(add(2, 3), 5);
    });
  });`),a()(),s(183,"h3"),r(184,"Unit Testing Functional Code in Python"),a(),s(185,"h4"),r(186,"Using `pytest`"),a(),s(187,"pre")(188,"code"),r(189,`def add(a, b):
      return a + b
  
  def test_add():
      assert add(2, 3) == 5`),a()(),s(190,"h3"),r(191,"Property-Based Testing"),a(),s(192,"h4"),r(193,"JavaScript (jsverify)"),a(),s(194,"pre")(195,"code"),r(196,`const jsc = require("jsverify");
  
  const add = (a, b) => a + b;
  
  jsc.assertForall(jsc.integer, jsc.integer, (a, b) => add(a, b) === a + b);`),a()(),s(197,"h4"),r(198,"Python (Hypothesis)"),a(),s(199,"pre")(200,"code"),r(201,`from hypothesis import given
  from hypothesis.strategies import integers
  
  def add(a, b):
      return a + b
  
  @given(integers(), integers())
  def test_add(a, b):
      assert add(a, b) == a + b`),a()(),s(202,"h2"),r(203,"4. Design Patterns in FP"),a(),s(204,"h3"),r(205,"JavaScript FP Design Patterns"),a(),s(206,"h4"),r(207,"Function Composition"),a(),s(208,"pre")(209,"code"),r(210,`const compose = (f, g) => (x) => f(g(x));
  const add = (x) => x + 2;
  const multiply = (x) => x * 3;
  
  const result = compose(multiply, add)(5); // (5 + 2) * 3 = 21
  console.log(result);`),a()(),s(211,"h3"),r(212,"Python FP Design Patterns"),a(),s(213,"h4"),r(214,"Strategy Pattern"),a(),s(215,"pre")(216,"code"),r(217,`def strategy_add(a, b):
      return a + b
  
  def strategy_multiply(a, b):
      return a * b
  
  def execute_strategy(strategy, a, b):
      return strategy(a, b)
  
  print(execute_strategy(strategy_add, 2, 3))  # 5
  print(execute_strategy(strategy_multiply, 2, 3))  # 6`),a()(),s(218,"h2"),r(219,"Summary"),a(),s(220,"ul")(221,"li")(222,"strong"),r(223,"JavaScript"),a(),r(224,": Use pure functions, higher-order functions, and libraries like Ramda, Lodash FP, and RxJS."),a(),s(225,"li")(226,"strong"),r(227,"Python"),a(),r(228,": Use pure functions, higher-order functions, `functools`, and libraries like `toolz`, `fn`, and `PyFunctional`."),a(),s(229,"li")(230,"strong"),r(231,"Testing"),a(),r(232,": Use unit testing frameworks like Mocha, Jest, and `pytest`, and property-based testing with `jsverify` and `Hypothesis`."),a(),s(233,"li")(234,"strong"),r(235,"Design Patterns"),a(),r(236,": Use function composition, monads, and strategy patterns in both JavaScript and Python."),a()()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.lesson[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word;font-size:1.1rem}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}div[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.lesson[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}code[_ngcontent-%COMP%]{font-size:.95rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.lesson[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}ul[_ngcontent-%COMP%]{list-style-type:disc;padding-left:30px}li[_ngcontent-%COMP%]{font-size:1rem;color:#333}li[_ngcontent-%COMP%]:hover{color:#2980b9;cursor:pointer}pre[_ngcontent-%COMP%]{font-size:1rem;border-radius:5px;padding:10px}a[_ngcontent-%COMP%]{color:#3498db}a[_ngcontent-%COMP%]:hover{text-decoration:underline;color:#2980b9}"]})};var Ii=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-lessons8"]],decls:263,vars:0,consts:[[1,"lesson"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 8: Key Functional Programming Libraries in JavaScript and Python"),a(),s(3,"section")(4,"h2"),r(5,"1. Ramda: A Popular FP Library for JavaScript"),a(),s(6,"p")(7,"strong"),r(8,"What Makes Ramda Special?"),a()(),s(9,"ul")(10,"li")(11,"strong"),r(12,"Currying by Default:"),a(),r(13," All functions in Ramda are curried, allowing for partial application and reusability of functions."),a(),s(14,"li")(15,"strong"),r(16,"Immutability:"),a(),r(17," Ramda returns new data structures instead of modifying the original ones, preventing side effects."),a(),s(18,"li")(19,"strong"),r(20,"Composability:"),a(),r(21," Functions can be composed in a clean and readable way using Ramda."),a()(),s(22,"p")(23,"strong"),r(24,"Example: Curried Functions and Composition"),a()(),s(25,"pre")(26,"code"),r(27,`
  const R = require('ramda');
  
  // Curried function to add two numbers
  const add = (a) => (b) => a + b;
  
  const add5 = add(5);  // The function now adds 5 to any number passed to it
  console.log(add5(3)); // Output: 8
  
  // Using Ramda to compose functions
  const multiplyBy2 = (x) => x * 2;
  const multiplyAndAdd = R.compose(add5, multiplyBy2);
  
  console.log(multiplyAndAdd(3)); // Output: 11 (multiplyBy2(3) = 6, add5(6) = 11)
      `),a()(),s(28,"p")(29,"strong"),r(30,"Explanation:"),a()(),s(31,"ul")(32,"li")(33,"strong"),r(34,"Curried Function:"),a(),r(35," The add function is curried, so calling add(5) returns a function that takes the next argument and adds 5 to it."),a(),s(36,"li")(37,"strong"),r(38,"Function Composition:"),a(),r(39," R.compose(add5, multiplyBy2) creates a new function that first multiplies a number by 2, and then adds 5 to it."),a()(),s(40,"h2"),r(41,"2. Lodash FP: A Functional Version of Lodash"),a(),s(42,"p")(43,"strong"),r(44,"Key Features:"),a()(),s(45,"ul")(46,"li")(47,"strong"),r(48,"Currying:"),a(),r(49," Functions in Lodash FP are curried by default."),a(),s(50,"li")(51,"strong"),r(52,"Immutability:"),a(),r(53," Like Ramda, data is not mutated; instead, a new transformed copy is returned."),a(),s(54,"li")(55,"strong"),r(56,"Functional Utility Functions:"),a(),r(57," Lodash FP provides utilities like map, filter, and reduce for functional transformations."),a()(),s(58,"p")(59,"strong"),r(60,"Example: Curried Functions and Transformation"),a()(),s(61,"pre")(62,"code"),r(63,`
  const _ = require('lodash/fp');
  
  // Curried function to multiply
  const multiply = (a) => (b) => a * b;
  
  const multiplyBy2 = multiply(2);
  console.log(multiplyBy2(5)); // Output: 10
  
  // Using Lodash FP to map over an array
  const numbers = [1, 2, 3, 4, 5];
  const doubleNumbers = _.map((x) => x * 2, numbers);
  
  console.log(doubleNumbers);  // Output: [2, 4, 6, 8, 10]
      `),a()(),s(64,"p")(65,"strong"),r(66,"Explanation:"),a()(),s(67,"ul")(68,"li")(69,"strong"),r(70,"Currying:"),a(),r(71," The multiply function is curried, which allows you to create functions like multiplyBy2."),a(),s(72,"li")(73,"strong"),r(74,"Array Transformation:"),a(),r(75," _.map applies the function to each element in the array, returning a new array without modifying the original."),a()(),s(76,"h2"),r(77,"3. RxJS: Functional Reactive Programming in JavaScript"),a(),s(78,"p")(79,"strong"),r(80,"Key Features:"),a()(),s(81,"ul")(82,"li")(83,"strong"),r(84,"Observables:"),a(),r(85," RxJS allows you to work with data that changes over time."),a(),s(86,"li")(87,"strong"),r(88,"Operators:"),a(),r(89," Functions like map, filter, merge, and combineLatest help transform and combine observables."),a(),s(90,"li")(91,"strong"),r(92,"Functional Programming:"),a(),r(93," RxJS encourages using functional techniques like map, reduce, and filter on streams of data."),a()(),s(94,"p")(95,"strong"),r(96,"Example: Working with Observables"),a()(),s(97,"pre")(98,"code"),r(99,`
  const rxjs = require('rxjs');
  const } map, filter { = require('rxjs/operators');
  
  // Create an observable stream of numbers
  const numbers$ = rxjs.of(1, 2, 3, 4, 5);
  
  // Apply functional operators to the stream
  const doubledNumbers$ = numbers$.pipe(
    filter(x => x % 2 === 0),  // Keep even numbers
    map(x => x * 2)            // Double the numbers
  );
  
  doubledNumbers$.subscribe(value => console.log(value)); 
  // Output: 4, 8
      `),a()(),s(100,"p")(101,"strong"),r(102,"Explanation:"),a()(),s(103,"ul")(104,"li")(105,"strong"),r(106,"Observables:"),a(),r(107," numbers$ is an observable that emits values over time."),a(),s(108,"li")(109,"strong"),r(110,"Functional Operators:"),a(),r(111," We use filter to keep only even numbers, and map to double those numbers. The result is an observable that emits 4 and 8."),a()(),s(112,"h2"),r(113,"4. Folktale: Functional Programming for JavaScript"),a(),s(114,"p")(115,"strong"),r(116,"Key Features:"),a()(),s(117,"ul")(118,"li")(119,"strong"),r(120,"Monads:"),a(),r(121," Monads like Maybe, Either, Task, etc., help handle computations that may fail."),a(),s(122,"li")(123,"strong"),r(124,"Immutability:"),a(),r(125," Everything in Folktale is immutable by default."),a()(),s(126,"p")(127,"strong"),r(128,"Example: Maybe Monad"),a()(),s(129,"pre")(130,"code"),r(131,`
  const } Maybe { = require('folktale/data/maybe');
  
  // Example of Maybe monad for safe computation
  const safeDivide = (a, b) => b === 0 ? Maybe.nothing() : Maybe.of(a / b);
  
  safeDivide(10, 2)
    .map(result => result * 2)
    .getOrElse('Error!');  // Output: 10
      `),a()(),s(132,"p")(133,"strong"),r(134,"Explanation:"),a()(),s(135,"ul")(136,"li")(137,"strong"),r(138,"Maybe Monad:"),a(),r(139," The Maybe monad allows safe handling of null or undefined values. If the denominator is 0, it returns Nothing (similar to null), otherwise it performs the division and returns the result."),a(),s(140,"li")(141,"strong"),r(142,"map:"),a(),r(143," The map function transforms the value inside the Maybe container."),a()()(),s(144,"section")(145,"h2"),r(146,"Python Libraries"),a(),s(147,"h3"),r(148,"1. toolz: A Library for Functional Programming Tools"),a(),s(149,"p")(150,"strong"),r(151,"Key Features:"),a()(),s(152,"ul")(153,"li")(154,"strong"),r(155,"Function Composition:"),a(),r(156," Functions like pipe and compose allow for chaining operations."),a(),s(157,"li")(158,"strong"),r(159,"Lazy Evaluation:"),a(),r(160," Process large datasets efficiently using lazy evaluation."),a(),s(161,"li")(162,"strong"),r(163,"Iterable Processing:"),a(),r(164," Functional tools to work with iterators and sequences."),a()(),s(165,"p")(166,"strong"),r(167,"Example: Function Composition with toolz"),a()(),s(168,"pre")(169,"code"),r(170,`
  from toolz import pipe
  
  # Compose a sequence of operations using pipe
  result = pipe([1, 2, 3, 4, 5],
                sum,
                lambda x: x * 2)
  
  print(result)  # Output: 30
      `),a()(),s(171,"p")(172,"strong"),r(173,"Explanation:"),a()(),s(174,"ul")(175,"li")(176,"strong"),r(177,"pipe:"),a(),r(178," pipe function allows you to chain functions, passing the result of one to the next."),a(),s(179,"li")(180,"strong"),r(181,"Composing Functions:"),a(),r(182," Sum the list first, and then multiply the result by 2."),a()(),s(183,"h3"),r(184,"2. fn: A Lightweight Functional Programming Library for Python"),a(),s(185,"p")(186,"strong"),r(187,"Key Features:"),a()(),s(188,"ul")(189,"li")(190,"strong"),r(191,"Currying:"),a(),r(192," Functions are curried by default."),a(),s(193,"li")(194,"strong"),r(195,"Lazy Evaluation:"),a(),r(196," Supports lazy function calls."),a()(),s(197,"p")(198,"strong"),r(199,"Example: Curried Functions"),a()(),s(200,"pre")(201,"code"),r(202,`
  from fn import F
  
  # Curried function to add two numbers
  add = F(lambda a, b: a + b)
  
  add5 = add(5)
  print(add5(3))  # Output: 8
      `),a()(),s(203,"p")(204,"strong"),r(205,"Explanation:"),a()(),s(206,"ul")(207,"li")(208,"strong"),r(209,"Currying:"),a(),r(210," The add function is curried, and add(5) returns a function that can be called with another argument."),a()(),s(211,"h3"),r(212,"3. PyFunctional: An FP-Inspired Approach to Python"),a(),s(213,"p")(214,"strong"),r(215,"Key Features:"),a()(),s(216,"ul")(217,"li")(218,"strong"),r(219,"Data Pipelines:"),a(),r(220," Create transformation pipelines on data."),a(),s(221,"li")(222,"strong"),r(223,"Immutability:"),a(),r(224," Data structures are immutable by default."),a()(),s(225,"p")(226,"strong"),r(227,"Example: Data Pipelines"),a()(),s(228,"pre")(229,"code"),r(230,`
  from pyfunctional import seq
  
  # Use map and filter to transform data
  result = seq([1, 2, 3, 4, 5]) \\
      .filter(lambda x: x % 2 == 0) \\
      .map(lambda x: x * 2) \\
      .to_list()
  
  print(result)  # Output: [4, 8]
      `),a()(),s(231,"p")(232,"strong"),r(233,"Explanation:"),a()(),s(234,"ul")(235,"li")(236,"strong"),r(237,"Data Pipelines:"),a(),r(238," The data is first filtered to keep even numbers and then each element is doubled."),a()(),s(239,"h3"),r(240,"4. pyrsistent: Immutable Data Structures in Python"),a(),s(241,"p")(242,"strong"),r(243,"Key Features:"),a()(),s(244,"ul")(245,"li")(246,"strong"),r(247,"Immutability:"),a(),r(248," The data structures provided by pyrsistent are immutable, ensuring no side effects."),a()(),s(249,"p")(250,"strong"),r(251,"Example: Immutable List"),a()(),s(252,"pre")(253,"code"),r(254,`
  from pyrsistent import pvector
  
  # Creating an immutable vector
  numbers = pvector([1, 2, 3])
  new_numbers = numbers.append(4)
  
  print(new_numbers)  # Output: pvector([1, 2, 3, 4])
  print(numbers)      # Output: pvector([1, 2, 3])
      `),a()(),s(255,"p")(256,"strong"),r(257,"Explanation:"),a()(),s(258,"ul")(259,"li")(260,"strong"),r(261,"Immutability:"),a(),r(262," The numbers vector remains unchanged when we append a new value, and a new pvector is returned instead."),a()()()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.lesson[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}div[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.container[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}"]})};var Mi=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-lessons9"]],decls:171,vars:0,consts:[[1,"lesson-container"],["id","js-case-studies"],[1,"case-study"],["id","python-case-studies"],["id","summary"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 9: Case Studies and Industry Applications"),a(),s(3,"section",1)(4,"h2"),r(5,"1. Real-world Case Studies of Functional Programming in JavaScript"),a(),s(6,"div",2)(7,"h3"),r(8,"Netflix"),a(),s(9,"p"),r(10,"Netflix is a major video streaming platform that serves millions of users worldwide. To maintain scalability and reliability, Netflix uses JavaScript along with functional programming techniques."),a(),s(11,"h4"),r(12,"How Netflix Uses Functional Programming in JavaScript:"),a(),s(13,"ul")(14,"li")(15,"strong"),r(16,"Immutable Data Structures:"),a(),r(17," Netflix uses immutable data structures to ensure that data remains unchanged throughout the application lifecycle, reducing the risk of side effects."),a(),s(18,"li")(19,"strong"),r(20,"Declarative Programming with RxJS:"),a(),r(21," Netflix uses RxJS to manage complex data flows, especially with asynchronous streams."),a(),s(22,"li")(23,"strong"),r(24,"Function Composition:"),a(),r(25," Netflix uses functional programming to compose and pipeline data transformations, reducing complexity."),a()(),s(26,"h4"),r(27,"Example: Managing Asynchronous Streams with RxJS"),a(),s(28,"pre"),r(29,"          "),s(30,"code"),r(31,`
            const } interval { = require('rxjs');
            const } map { = require('rxjs/operators');
  
            interval(1000)
              .pipe(
                map(val => val * 10)
              )
              .subscribe(val => console.log(\`Current bitrate: $}val{ kbps\`));
          `),a(),r(32,`
        `),a(),s(33,"h4"),r(34,"How This Helps Netflix:"),a(),s(35,"ul")(36,"li")(37,"strong"),r(38,"Non-blocking asynchronous operations:"),a(),r(39," By using RxJS, Netflix can handle thousands of real-time data streams efficiently."),a(),s(40,"li")(41,"strong"),r(42,"Composable, Maintainable Code:"),a(),r(43," Function composition helps Netflix maintain a modular, clean, and reusable codebase."),a()()(),s(44,"div",2)(45,"h3"),r(46,"Airbnb"),a(),s(47,"p"),r(48,"Airbnb, a leading platform for short-term rentals, integrates functional programming principles in their JavaScript stack."),a(),s(49,"h4"),r(50,"How Airbnb Uses Functional Programming in JavaScript:"),a(),s(51,"ul")(52,"li")(53,"strong"),r(54,"Immutable Data:"),a(),r(55," Airbnb uses immutable.js to avoid side effects and ensure data consistency in booking data and user info."),a(),s(56,"li")(57,"strong"),r(58,"Pure Functions:"),a(),r(59," Airbnb uses pure functions for tasks like calculating booking totals or user recommendation scores."),a(),s(60,"li")(61,"strong"),r(62,"Functional Programming with React:"),a(),r(63," Airbnb uses React with a functional programming approach to design stateless, reusable UI components."),a()(),s(64,"h4"),r(65,"Example: Immutable Data Structures in Airbnb"),a(),s(66,"pre"),r(67,"          "),s(68,"code"),r(69,`
            const } Map { = require('immutable');
            
            const user = Map(} name: 'John', age: 30 {);
            const updatedUser = user.set('age', 31);  // Immutable update
            
            console.log(user.get('age'));  // Output: 30
            console.log(updatedUser.get('age'));  // Output: 31
          `),a(),r(70,`
        `),a(),s(71,"h4"),r(72,"How This Helps Airbnb:"),a(),s(73,"ul")(74,"li")(75,"strong"),r(76,"Simplified State Management:"),a(),r(77," Immutable data ensures that state mutations don't occur unexpectedly, leading to bug-free code."),a(),s(78,"li")(79,"strong"),r(80,"Cleaner Code:"),a(),r(81," Pure functions reduce side effects, and using React with FP principles makes components easier to debug."),a()()()(),s(82,"section",3)(83,"h2"),r(84,"2. Functional Programming in Python for Large-Scale Systems"),a(),s(85,"div",2)(86,"h3"),r(87,"Using FP in Machine Learning Pipelines"),a(),s(88,"p"),r(89,"Machine learning involves processing large amounts of data, and FP helps manage the complexity of ML workflows by promoting immutability and avoiding side effects."),a(),s(90,"h4"),r(91,"How FP Helps in Machine Learning Pipelines:"),a(),s(92,"ul")(93,"li")(94,"strong"),r(95,"Immutable Data:"),a(),r(96," Using immutable data structures makes the pipeline more predictable and minimizes side effects."),a(),s(97,"li")(98,"strong"),r(99,"Composability:"),a(),r(100," FP allows easy composition of functions to create readable, sequential data transformations."),a(),s(101,"li")(102,"strong"),r(103,"Declarative Pipelines:"),a(),r(104," FP allows workflows to be expressed declaratively, focusing on what to achieve, not how to do it."),a()(),s(105,"h4"),r(106,"Example: Composing Functions in a ML Pipeline"),a(),s(107,"pre"),r(108,"          "),s(109,"code"),r(110,`
            from toolz import pipe
            
            data = [1, 2, 3, 4, 5]
            
            result = pipe(data,
                          lambda x: [i * 2 for i in x],  # Feature scaling
                          lambda x: sum(x))  # Simplified model output
            
            print(result)  # Output: 30
          `),a(),r(111,`
        `),a(),s(112,"h4"),r(113,"How This Helps in ML Pipelines:"),a(),s(114,"ul")(115,"li")(116,"strong"),r(117,"Data Processing:"),a(),r(118," FP tools like toolz help build a testable and modular pipeline of transformations."),a(),s(119,"li")(120,"strong"),r(121,"Maintainability:"),a(),r(122," Immutability and avoiding side effects improve pipeline maintainability, testing, and scalability."),a()()(),s(123,"div",2)(124,"h3"),r(125,"Python for Distributed Systems"),a(),s(126,"p"),r(127,"Distributed systems benefit from functional programming principles for concurrency and fault tolerance."),a(),s(128,"h4"),r(129,"How FP Helps in Distributed Systems:"),a(),s(130,"ul")(131,"li")(132,"strong"),r(133,"Concurrency:"),a(),r(134," Stateless functions in FP can run in parallel, ideal for distributed systems."),a(),s(135,"li")(136,"strong"),r(137,"Fault Tolerance:"),a(),r(138," Patterns like monads and either types help handle errors effectively in distributed systems."),a()(),s(139,"h4"),r(140,"Example: Distributed Task Management with Celery"),a(),s(141,"pre"),r(142,"          "),s(143,"code"),r(144,`
            from celery import Celery
  
            app = Celery('tasks', broker='pyamqp://guest@localhost//')
  
            @app.task
            def add(x, y):
                return x + y
  
            # Mapping tasks over a dataset
            results = [add.apply_async((x, y)) for x, y in zip(range(10), range(10, 20))]
          `),a(),r(145,`
        `),a(),s(146,"h4"),r(147,"How This Helps in Distributed Systems:"),a(),s(148,"ul")(149,"li")(150,"strong"),r(151,"Task Scheduling:"),a(),r(152," Celery uses functional programming to schedule and execute tasks concurrently in a distributed environment."),a(),s(153,"li")(154,"strong"),r(155,"Parallelism:"),a(),r(156," FP allows parallel task execution without complex state management, improving system efficiency."),a()()()(),s(157,"section",4)(158,"h2"),r(159,"Summary"),a(),s(160,"p"),r(161,"This lesson demonstrated how functional programming is applied in real-world systems, both in JavaScript (e.g., Netflix, Airbnb) and Python (e.g., machine learning pipelines, distributed systems)."),a(),s(162,"h4"),r(163,"Key Takeaways:"),a(),s(164,"ul")(165,"li"),r(166,"JavaScript leverages FP for scalability, maintainability, and reliability in large-scale web apps like Netflix and Airbnb."),a(),s(167,"li"),r(168,"Python uses FP in ML pipelines and distributed systems to ensure predictable, concurrent, and scalable solutions."),a(),s(169,"li"),r(170,"Libraries like RxJS (for JavaScript) and tools like Celery (for Python) are commonly used in functional programming for large-scale systems."),a()()()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.lesson-container[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}div[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.lesson-container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.lesson-container[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}"]})};var Pi=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-lessons10"]],decls:113,vars:0,consts:[[1,"container"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 10: Final Project"),a(),s(3,"section")(4,"h2"),r(5,"Project Overview"),a(),s(6,"p"),r(7," In this final project, you will develop a complex functional programming project in either JavaScript or Python. You can choose one of the following examples for your project: "),a(),s(8,"ul")(9,"li"),r(10,"A Web Service"),a(),s(11,"li"),r(12,"An AI Model"),a(),s(13,"li"),r(14,"A Distributed System"),a()(),s(15,"p"),r(16," Throughout this project, you'll focus on incorporating the core FP principles in your code. The goal is to practice applying concepts like immutability, higher-order functions, recursion, and monads, and see how they improve your application. "),a()(),s(17,"section")(18,"h2"),r(19,"Key Functional Programming Concepts"),a(),s(20,"div")(21,"h3"),r(22,"1. Immutability"),a(),s(23,"p"),r(24," Immutability is one of the most important principles of functional programming. It refers to the idea that once a value is created, it cannot be changed. "),a(),s(25,"h4"),r(26,"In JavaScript:"),a(),s(27,"pre")(28,"code"),r(29,`
  const } Map { = require('immutable');
  
  let user = Map(} name: 'Alice', age: 25 {);
  user = user.set('age', 26);  // A new Map is returned, the original Map remains unchanged
  console.log(user);  // Map } "name": "Alice", "age": 26 {
        `),a()(),s(30,"h4"),r(31,"In Python:"),a(),s(32,"pre")(33,"code"),r(34,`
  from pyrsistent import v
  
  numbers = v([1, 2, 3])
  new_numbers = numbers.append(4)  # The original \`numbers\` list is unchanged
  print(numbers)  # pvector([1, 2, 3])
  print(new_numbers)  # pvector([1, 2, 3, 4])
        `),a()()(),s(35,"div")(36,"h3"),r(37,"2. Higher-Order Functions"),a(),s(38,"p"),r(39," A higher-order function is a function that either takes one or more functions as arguments or returns a function as a result. "),a(),s(40,"h4"),r(41,"In JavaScript:"),a(),s(42,"pre")(43,"code"),r(44,`
  const multiply = (x) => (y) => x * y;  // Function that returns another function
  
  const timesThree = multiply(3);  // timesThree is now a function that multiplies any number by 3
  console.log(timesThree(4));  // Output: 12
        `),a()(),s(45,"h4"),r(46,"In Python:"),a(),s(47,"pre")(48,"code"),r(49,`
  def apply_function(f, x):
      return f(x)
  
  result = apply_function(lambda x: x * 2, 4)  # Pass a function as an argument
  print(result)  # Output: 8
        `),a()()(),s(50,"div")(51,"h3"),r(52,"3. Recursion"),a(),s(53,"p"),r(54," Recursion is when a function calls itself in order to solve a problem. It\u2019s a common pattern in functional programming and can often replace traditional looping constructs. "),a(),s(55,"h4"),r(56,"In JavaScript:"),a(),s(57,"pre")(58,"code"),r(59,`
  function factorial(n) }
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  {
  
  console.log(factorial(5));  // Output: 120
        `),a()(),s(60,"h4"),r(61,"In Python:"),a(),s(62,"pre")(63,"code"),r(64,`
  def factorial(n):
      if n <= 1:
          return 1
      return n * factorial(n - 1)
  
  print(factorial(5))  # Output: 120
        `),a()()(),s(65,"div")(66,"h3"),r(67,"4. Monads"),a(),s(68,"p"),r(69," Monads are used in FP to handle side effects, such as working with asynchronous operations or managing errors, without breaking functional purity. A monad encapsulates a value with a context and provides methods to operate on it. "),a(),s(70,"h4"),r(71,"In JavaScript:"),a(),s(72,"pre")(73,"code"),r(74,`
  const fetchData = () => }
    return new Promise((resolve) => }
      setTimeout(() => resolve(10), 1000); // Simulate async operation
    {);
  {;
  
  fetchData()
    .then((value) => value * 2) // Apply transformation
    .then((result) => console.log(result));  // Output: 20
        `),a()(),s(75,"h4"),r(76,"In Python:"),a(),s(77,"pre")(78,"code"),r(79,`
  class Option:
      def __init__(self, value):
          self.value = value
  
      def map(self, func):
          if self.value is None:
              return Option(None)
          return Option(func(self.value))
  
  result = Option(10).map(lambda x: x * 2)
  print(result.value)  # Output: 20
        `),a()()()(),s(80,"section")(81,"h2"),r(82,"Example Projects"),a(),s(83,"div")(84,"h3"),r(85,"Example Project: Web Service in JavaScript (Node.js)"),a(),s(86,"p"),r(87," A web service is a great way to apply functional programming in real-world applications. You can use Node.js to create a server that handles HTTP requests. Here, you\u2019ll focus on applying immutability and higher-order functions to manage state and handle asynchronous operations. "),a(),s(88,"pre")(89,"code"),r(90,`
  const express = require('express');
  const app = express();
  
  // Route with higher-order function
  app.get('/greet', (req, res) => }
    const greet = (name) => \`Hello, $}name{!\`;
    const response = greet(req.query.name || 'World');
    res.send(response);
  {);
  
  app.listen(3000, () => }
    console.log('Server is running on port 3000');
  {);
        `),a()()(),s(91,"div")(92,"h3"),r(93,"Example Project: AI Model in Python (Machine Learning Pipeline)"),a(),s(94,"p"),r(95," In Python, you can use functional programming principles in machine learning pipelines. Libraries like scikit-learn can be used, but we\u2019ll focus on using functions to process data and apply transformations. "),a(),s(96,"pre")(97,"code"),r(98,`
  from sklearn.datasets import load_iris
  from sklearn.model_selection import train_test_split
  from sklearn.ensemble import RandomForestClassifier
  from sklearn.metrics import accuracy_score
  
  # Functional programming approach to a ML pipeline
  def load_data():
      return load_iris()
  
  def split_data(data):
      return train_test_split(data.data, data.target, test_size=0.2)
  
  def train_model(X_train, y_train):
      model = RandomForestClassifier()
      model.fit(X_train, y_train)
      return model
  
  def evaluate_model(model, X_test, y_test):
      predictions = model.predict(X_test)
      return accuracy_score(y_test, predictions)
  
  # Applying the functions
  data = load_data()
  X_train, X_test, y_train, y_test = split_data(data)
  model = train_model(X_train, y_train)
  accuracy = evaluate_model(model, X_test, y_test)
  
  print(f'Model Accuracy: }accuracy{')
        `),a()()()(),s(99,"section")(100,"h2"),r(101,"Conclusion"),a(),s(102,"p"),r(103," In this final project, you are tasked with applying functional programming principles to build a complex system in either JavaScript or Python. Whether you're building a web service, an AI model, or a distributed system, the key is to use FP concepts like immutability, higher-order functions, recursion, and monads to manage complexity and write clean, maintainable code. "),a(),s(104,"p"),r(105," You will see that these functional programming techniques allow you to: "),a(),s(106,"ul")(107,"li"),r(108,"Better handle side effects"),a(),s(109,"li"),r(110,"Make the code more modular and reusable"),a(),s(111,"li"),r(112,"Improve maintainability and scalability of the application"),a()()()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.container[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}div[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.container[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}"]})};var Ai=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-lessons6"]],decls:124,vars:0,consts:[[1,"lesson-container"],[1,"language-javascript"],[1,"language-python"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 6: Real-World Applications and Projects - Simplified"),a(),s(3,"section")(4,"h2"),r(5,"1. Building Web Applications using FP"),a(),s(6,"p"),r(7,"When we build web applications, we can use Functional Programming (FP) to organize the code in a clean and easy-to-understand way. FP focuses on writing pure functions and making sure we don\u2019t change things (like variables or states) unexpectedly."),a(),s(8,"ul")(9,"li")(10,"strong"),r(11,"Pure Functions:"),a(),r(12," A pure function is a function that always produces the same output for the same input and doesn\u2019t cause any side effects (like changing a variable)."),a(),s(13,"li")(14,"strong"),r(15,"Immutability:"),a(),r(16," In FP, once something is created, it can\u2019t be changed. You create a new value instead of modifying the old one."),a()()(),s(17,"section")(18,"h2"),r(19,"2. JavaScript: Functional Web Development using React (Functional Components)"),a(),s(20,"p"),r(21,"React is a tool we use to build websites. In React, we can create functional components, which are like simple, self-contained building blocks for a website."),a(),s(22,"p"),r(23,"Functional Components are simply functions that take inputs (called props) and return some output (like a part of a webpage). These components are pure functions because they always return the same thing when given the same input, making the code easier to debug and understand."),a(),s(24,"pre")(25,"code",1),r(26,`
  import React, { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);  // This manages the count variable
  
    return (
      `),s(27,"div"),r(28,`
        `),s(29,"p"),r(30,"Count: {count}"),a(),r(31,`
        `),s(32,"pre")(33,"code"),r(34,`
            <button onClick="{() \u2192 setCount(count + 1)}">Increment</button>
            <button onClick="{() \u2192 setCount(count - 1)}">Decrement</button>
          `),a()(),r(35,`
          
      `),a(),r(36,`
    );
  }
  
  export default Counter;
      `),a()(),s(37,"p")(38,"strong"),r(39,"Explanation:"),a(),r(40," The useState(0) is used to create a count variable with an initial value of 0. The setCount() function is used to update the count when the buttons are clicked. This is a pure function because no matter how many times you click the button, it will always give you the same result when the count is the same."),a()(),s(41,"section")(42,"h2"),r(43,"3. Python: Functional Web Frameworks (e.g., Flask, FastAPI)"),a(),s(44,"p"),r(45,"Flask and FastAPI are tools in Python that let you build web apps. When using FP in web development, we treat our web app logic as pure functions, just like in React."),a(),s(46,"pre")(47,"code",2),r(48,`
  from fastapi import FastAPI
  
  app = FastAPI()
  
  @app.get("/")
  def read_root():
      return {"message": "Hello, World!"}
      `),a()(),s(49,"p")(50,"strong"),r(51,"Explanation:"),a(),r(52,' This is a very simple web application that just responds with a message: "Hello, World!" when you visit the root URL. The function read_root() is pure because it always returns the same result (the message) when called.'),a()(),s(53,"section")(54,"h2"),r(55,"4. Working with Databases"),a(),s(56,"p"),r(57,"When working with databases, FP helps you organize how you retrieve and store data in a predictable way. Instead of directly changing data, you use pure functions that return new data without modifying the original."),a()(),s(58,"section")(59,"h2"),r(60,"5. Functional Programming in JavaScript for Working with Databases (e.g., Sequelize, Mongoose)"),a(),s(61,"p"),r(62,"In JavaScript, libraries like Sequelize (for SQL databases) and Mongoose (for MongoDB) help us interact with databases. In FP, we write code that is predictable and doesn't change anything unexpectedly."),a(),s(63,"pre")(64,"code",1),r(65,`
  const mongoose = require('mongoose');
  
  // Define a user model
  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
  });
  
  // Create the user model
  const User = mongoose.model('User', userSchema);
  
  // Function to create a new user
  async function createUser(name, email) {
    const newUser = new User({ name, email });
    await newUser.save();  // Save the new user to the database
    return newUser;
  }
      `),a()(),s(66,"p")(67,"strong"),r(68,"Explanation:"),a(),r(69," The createUser() function is a pure function because it only creates a new user and returns the result. It doesn\u2019t change anything unexpected, and it doesn't rely on external state."),a()(),s(70,"section")(71,"h2"),r(72,"6. Python\u2019s Functional Approach to Interacting with Databases (e.g., SQLAlchemy with FP Techniques)"),a(),s(73,"p"),r(74,"Just like in JavaScript, we can also use FP principles in Python when interacting with databases."),a(),s(75,"pre")(76,"code",2),r(77,`
  from sqlalchemy import create_engine, Column, Integer, String
  from sqlalchemy.ext.declarative import declarative_base
  from sqlalchemy.orm import sessionmaker
  
  Base = declarative_base()
  
  class User(Base):
      __tablename__ = 'users'
      id = Column(Integer, primary_key=True)
      name = Column(String)
      email = Column(String)
  
  engine = create_engine('sqlite:///:memory:')  # In-memory database
  Base.metadata.create_all(engine)
  
  Session = sessionmaker(bind=engine)
  session = Session()
  
  def create_user(name, email):
      new_user = User(name=name, email=email)
      session.add(new_user)
      session.commit()  # Commit the transaction
      return new_user
      `),a()(),s(78,"p")(79,"strong"),r(80,"Explanation:"),a(),r(81," The create_user() function is a pure function because it doesn't change any global state and it simply creates a new user. It adds the user to the database but doesn\u2019t change anything in the external world (other than storing the data in the database)."),a()(),s(82,"section")(83,"h2"),r(84,"7. Machine Learning and Data Science with FP"),a(),s(85,"p"),r(86,"FP can also be applied in data science to process and analyze data in a clean and predictable way. You can use libraries like Pandas and NumPy in Python for this purpose."),a()(),s(87,"section")(88,"h2"),r(89,"8. Functional Programming Libraries in Python for Data Science (e.g., Pandas, NumPy, PyFunctional)"),a(),s(90,"p"),r(91,"Pandas and NumPy are libraries in Python that help us work with large datasets and perform mathematical operations. We can apply FP techniques here too, especially immutability and pure functions."),a(),s(92,"pre")(93,"code",2),r(94,`
  from pyfunctional import PyFunctional
  
  data = [1, 2, 3, 4, 5]
  
  # Using map to square each element
  result = PyFunctional.from_iterable(data).map(lambda x: x ** 2).to_list()
  print(result)
      `),a()(),s(95,"p")(96,"strong"),r(97,"Explanation:"),a(),r(98," We used a function called map() to apply a function that squares each number in the list. Notice that the original list doesn\u2019t change \u2014 instead, we create a new list with the squared numbers, following the immutable principle of FP."),a()(),s(99,"section")(100,"h2"),r(101,"9. Functional Systems Programming"),a(),s(102,"p"),r(103,"Systems programming means writing code that interacts closely with hardware or manages resources like memory. In FP, we write this kind of code using pure functions, making it predictable and easy to debug."),a()(),s(104,"section")(105,"h2"),r(106,"10. Systems Programming with Functional Paradigms in JavaScript (Node.js)"),a(),s(107,"pre")(108,"code",1),r(109,`
  const fs = require('fs');
  
  const readFileContent = (filename) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, 'utf8', (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  };
  
  readFileContent('example.txt').then(content => console.log(content)).catch(err => console.log(err));
      `),a()(),s(110,"p")(111,"strong"),r(112,"Explanation:"),a(),r(113," readFileContent() is a pure function. It just reads the file and returns the data, which can be used or logged. The result is returned as a Promise (a future value), ensuring that the code is predictable and can be easily chained."),a()(),s(114,"section")(115,"h2"),r(116,"11. Systems Programming with Python (using FP for Concurrent Systems)"),a(),s(117,"pre")(118,"code",2),r(119,`
  import asyncio
  
  async def fetch_data():
      await asyncio.sleep(1)  # Simulate async operation
      return 42
  
  async def main():
      result = await fetch_data()
      print(result)  # Output: 42
  
  asyncio.run(main())
      `),a()(),s(120,"p")(121,"strong"),r(122,"Explanation:"),a(),r(123," The fetch_data() function is a coroutine (a special type of function) that simulates fetching data asynchronously. await allows the function to pause, wait for the data, and then continue. This is a functional approach because the program runs predictably without unexpected behavior. "),a()()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.lesson-container[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word;font-size:1.1rem}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}div[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.lesson-container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}code[_ngcontent-%COMP%]{font-size:.95rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.lesson-container[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}ul[_ngcontent-%COMP%]{list-style-type:disc;padding-left:30px}li[_ngcontent-%COMP%]{font-size:1rem;color:#333}li[_ngcontent-%COMP%]:hover{color:#2980b9;cursor:pointer}pre[_ngcontent-%COMP%]{font-size:1rem;border-radius:5px;padding:10px}a[_ngcontent-%COMP%]{color:#3498db}a[_ngcontent-%COMP%]:hover{text-decoration:underline;color:#2980b9}"]})};var Ti=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-lessons7"]],decls:94,vars:0,consts:[[1,"lesson-container"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 7: Advanced Topics"),a(),s(3,"section")(4,"h2"),r(5,"1. Functional Metaprogramming"),a(),s(6,"p")(7,"strong"),r(8,"What is Metaprogramming?"),a()(),s(9,"p"),r(10,"Metaprogramming is writing code that writes or modifies other code. In simpler terms, it\u2019s when a program has the ability to manipulate itself. In Functional Programming (FP), this involves using higher-order functions (functions that take other functions as input or return them) to create more dynamic and reusable code. Functional Metaprogramming is about applying FP principles to control or generate code structures dynamically."),a()(),s(11,"section")(12,"h2"),r(13,"2. JavaScript\u2019s Ability to Create Higher-Level Abstractions"),a(),s(14,"p"),r(15,"In JavaScript, we can create higher-level abstractions using things like function factories and decorators. These techniques are powerful because they allow us to write cleaner, reusable, and more readable code."),a(),s(16,"h3"),r(17,"Function Factories"),a(),s(18,"p"),r(19,"A function factory is a function that creates other functions. It\u2019s like a template that generates customized functions based on certain inputs."),a(),s(20,"pre")(21,"code"),r(22,`
  function createMultiplier(factor) }
    return function (x) }
      return x * factor;
    {;
  
  
  const multiplyBy2 = createMultiplier(2);
  console.log(multiplyBy2(5));  // Output: 10
  
  const multiplyBy3 = createMultiplier(3);
  console.log(multiplyBy3(5));  // Output: 15
      `),a()(),s(23,"p")(24,"strong"),r(25,"Explanation:"),a(),r(26," createMultiplier is a function factory because it returns a new function (multiplyBy2 or multiplyBy3) every time it's called. These functions multiply a number by a fixed factor (either 2 or 3)."),a(),s(27,"h3"),r(28,"Decorators"),a(),s(29,"p"),r(30,"A decorator is a function that takes another function and modifies or extends its behavior. It allows you to add extra functionality without changing the original function."),a(),s(31,"pre")(32,"code"),r(33,`
  function addLogging(func) }
    return function(...args) }
      console.log(\`Calling function with arguments: $}args{\`);
      return func(...args);  // Call the original function
    {;
  {
  
  function greet(name) }
    return \`Hello, $}name{!\`;
  {
  
  const greetWithLogging = addLogging(greet);
  console.log(greetWithLogging('Alice'));  // Output: Calling function with arguments: [ 'Alice' ] 
                                         //         Hello, Alice!
      `),a()(),s(34,"p")(35,"strong"),r(36,"Explanation:"),a(),r(37," addLogging is a decorator that enhances the greet function by logging its arguments every time it's called."),a()(),s(38,"section")(39,"h2"),r(40,"3. Python\u2019s Metaprogramming (Using Metaclasses and functools)"),a(),s(41,"h3"),r(42,"Metaclasses"),a(),s(43,"p"),r(44,"In Python, metaclasses are classes that create other classes. It\u2019s like a class that defines how other classes behave. Metaclasses can be used to modify class creation, adding new methods, or changing attributes."),a(),s(45,"pre")(46,"code"),r(47,`
  # Define a metaclass that modifies class creation
  class MyMeta(type):
      def __new__(cls, name, bases, dct):
          dct['greet'] = lambda self: f"Hello from }self.__class__.__name__{!"
          return super().__new__(cls, name, bases, dct)
  
  class MyClass(metaclass=MyMeta):
      pass
  
  obj = MyClass()
  print(obj.greet())  # Output: Hello from MyClass!
      `),a()(),s(48,"p")(49,"strong"),r(50,"Explanation:"),a(),r(51," MyMeta is a metaclass that adds a new method greet to the class it creates (MyClass). When MyClass is created, it automatically gets the greet method, which prints a message."),a(),s(52,"h3"),r(53,"functools"),a(),s(54,"p"),r(55,"Python\u2019s functools module provides functions that allow you to work with higher-order functions in a functional style. One important feature is functools.partial, which allows you to create new functions by fixing certain arguments of an existing function."),a(),s(56,"pre")(57,"code"),r(58,`
  import functools
  
  def multiply(a, b):
      return a * b
  
  # Create a new function that multiplies by 2
  double = functools.partial(multiply, 2)
  
  print(double(5))  # Output: 10
      `),a()(),s(59,"p")(60,"strong"),r(61,"Explanation:"),a(),r(62," functools.partial creates a new function double that multiplies any number by 2. You only need to provide the second argument."),a()(),s(63,"section")(64,"h2"),r(65,"4. FP in Distributed Systems"),a(),s(66,"p"),r(67,"A distributed system is a system where multiple computers work together to solve a problem. With FP, we can write code that is easy to scale and robust in distributed environments."),a()(),s(68,"section")(69,"h2"),r(70,"5. Using Functional Programming for Distributed Systems with JavaScript (Node.js, Event-driven Programming)"),a(),s(71,"p"),r(72,"Node.js is a great tool for building distributed systems in JavaScript. It uses event-driven programming, where the flow of the program is driven by events (like user actions or data arriving)."),a(),s(73,"pre")(74,"code"),r(75,`
  const EventEmitter = require('events');
  
  class MyEmitter extends EventEmitter }{
  
  const myEmitter = new MyEmitter();
  
  // Define an event listener
  myEmitter.on('event', () => }
    console.log('An event occurred!');
  {);
  
  // Trigger the event
  myEmitter.emit('event');  // Output: An event occurred!
      `),a()(),s(76,"p")(77,"strong"),r(78,"Explanation:"),a(),r(79," MyEmitter is an event emitter. We can register event listeners (like on('event', ...)) and trigger events (emit('event')). This is useful in distributed systems because events can trigger actions across multiple parts of the system."),a()(),s(80,"section")(81,"h2"),r(82,"6. Using Python with FP for Concurrency and Fault Tolerance (e.g., Celery, Dask)"),a(),s(83,"h3"),r(84,"Celery Example (Task Queue)"),a(),s(85,"p"),r(86,"Celery is used for running tasks in the background. It can distribute tasks across multiple workers, which is useful for scaling applications."),a(),s(87,"pre")(88,"code"),r(89,`
  from celery import Celery
  
  # Create a Celery app
  app = Celery('tasks', broker='pyamqp://guest@localhost//')
  
  @app.task
  def add(x, y):
      return x + y
      `),a()(),s(90,"p")(91,"strong"),r(92,"Explanation:"),a(),r(93," The add function is a task that will be executed in the background. Celery uses a task queue to distribute tasks across workers, allowing for concurrency."),a()()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.lesson-container[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}section[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.lesson-container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.lesson-container[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}"]})};function Jm(o,t){if(o&1){let e=ne();s(0,"div",2)(1,"h2"),r(2),a(),s(3,"button",3),ts("click",function(){let i=K(e).$implicit,l=q();return X(l.startQuiz(i.id))}),r(4,"Start Quiz"),a()()}if(o&2){let e=t.$implicit;b(2),he(e.name)}}var Li=class o{constructor(t){this.router=t}lessons=[{id:1,name:"Lesson 1: What is Functional Programming?"},{id:2,name:"Lesson 2: Basic Functional Programming Concepts"},{id:3,name:"Lesson 3: Intermediate Functional Programming Concepts"},{id:4,name:"Lesson 4: Advanced Functional Programming Concepts \u2013 Monads, Functors, and Concurrency"},{id:5,name:"Lesson 5: Functional Programming in Practice"},{id:6,name:"Lesson 6: Real-World Applications and Projects - Simplified"},{id:7,name:"Lesson 7: Advanced Topics"},{id:8,name:"Lesson 8: Key Functional Programming Libraries in JavaScript and Python"},{id:9,name:"Lesson 9: Case Studies and Industry Applications"},{id:10,name:"Lesson 10: Final Project"}];startQuiz(t){this.router.navigate(["/quiz",t])}static \u0275fac=function(e){return new(e||o)(N(Q))};static \u0275cmp=C({type:o,selectors:[["app-quiz-list"]],decls:6,vars:0,consts:[[1,"container"],[1,"card-container"],[1,"card"],[1,"btn",3,"click"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Select a Lesson"),a(),s(3,"div",1),wn(4,Jm,5,1,"div",2,vn),a()()),e&2&&(b(4),En(n.lessons))},styles:[".container[_ngcontent-%COMP%]{text-align:center;margin-top:50px}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;justify-content:center;width:100%;height:100%}.card[_ngcontent-%COMP%]{background:#fff;padding:20px;width:100%;max-width:800px;border-radius:10px;box-shadow:0 4px 8px #0000001a;transition:transform .3s ease-in-out,box-shadow .3s ease-in-out;text-align:left;position:relative}.card[_ngcontent-%COMP%]:hover{transform:scale(1.02);box-shadow:0 6px 12px #00000026}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:10px;font-size:1.5rem}.btn[_ngcontent-%COMP%]{background-color:#1e90ff;color:#fff;padding:10px 20px;font-size:1rem;border:none;border-radius:5px;cursor:pointer;position:absolute;bottom:15px;right:20px;transition:background .3s}.btn[_ngcontent-%COMP%]:hover{background-color:#1e90ff}"]})};var Ym=new _(""),Qm=new _("");function dd(o){return o!=null}function cd(o){return bn(o)?Z(o):o}function ud(o){let t={};return o.forEach(e=>{t=e!=null?g(g({},t),e):t}),Object.keys(t).length===0?null:t}function md(o,t){return t.map(e=>e(o))}function Zm(o){return!o.validate}function pd(o){return o.map(t=>Zm(t)?t:e=>t.validate(e))}function Km(o){if(!o)return null;let t=o.filter(dd);return t.length==0?null:function(e){return ud(md(e,t))}}function ca(o){return o!=null?Km(pd(o)):null}function Xm(o){if(!o)return null;let t=o.filter(dd);return t.length==0?null:function(e){let n=md(e,t).map(cd);return ho(n).pipe(R(ud))}}function ua(o){return o!=null?Xm(pd(o)):null}function rd(o,t){return o===null?[t]:Array.isArray(o)?[...o,t]:[o,t]}function ep(o){return o._rawValidators}function tp(o){return o._rawAsyncValidators}function ia(o){return o?Array.isArray(o)?o:[o]:[]}function Oi(o,t){return Array.isArray(o)?o.includes(t):o===t}function ad(o,t){let e=ia(t);return ia(o).forEach(i=>{Oi(e,i)||e.push(i)}),e}function sd(o,t){return ia(t).filter(e=>!Oi(o,e))}var ra=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=ca(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=ua(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},to=class extends ra{name;get formDirective(){return null}get path(){return null}};var aa=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var hd=(()=>{class o extends aa{constructor(e){super(e)}static \u0275fac=function(n){return new(n||o)(N(to,10))};static \u0275dir=$({type:o,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,i){n&2&&te("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[Bt]})}return o})();var Qn="VALID",ki="INVALID",ln="PENDING",Zn="DISABLED",dt=class{},Fi=class extends dt{value;source;constructor(t,e){super(),this.value=t,this.source=e}},Xn=class extends dt{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},eo=class extends dt{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},dn=class extends dt{status;source;constructor(t,e){super(),this.status=t,this.source=e}},sa=class extends dt{source;constructor(t){super(),this.source=t}},la=class extends dt{source;constructor(t){super(),this.source=t}};function np(o){return(ma(o)?o.validators:o)||null}function op(o){return Array.isArray(o)?ca(o):o||null}function ip(o,t){return(ma(t)?t.asyncValidators:o)||null}function rp(o){return Array.isArray(o)?ua(o):o||null}function ma(o){return o!=null&&!Array.isArray(o)&&typeof o=="object"}function ap(o,t,e){let n=o.controls;if(!(t?Object.keys(n):n).length)throw new D(1e3,"");if(!n[e])throw new D(1001,"")}function sp(o,t,e){o._forEachChild((n,i)=>{if(e[i]===void 0)throw new D(-1002,"")})}var da=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return F(this.statusReactive)}set status(t){F(()=>this.statusReactive.set(t))}_status=Ke(()=>this.statusReactive());statusReactive=z(void 0);get valid(){return this.status===Qn}get invalid(){return this.status===ki}get pending(){return this.status===ln}get disabled(){return this.status===Zn}get enabled(){return this.status!==Zn}errors;get pristine(){return F(this.pristineReactive)}set pristine(t){F(()=>this.pristineReactive.set(t))}_pristine=Ke(()=>this.pristineReactive());pristineReactive=z(!0);get dirty(){return!this.pristine}get touched(){return F(this.touchedReactive)}set touched(t){F(()=>this.touchedReactive.set(t))}_touched=Ke(()=>this.touchedReactive());touchedReactive=z(!1);get untouched(){return!this.touched}_events=new ue;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(ad(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(ad(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(sd(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(sd(t,this._rawAsyncValidators))}hasValidator(t){return Oi(this._rawValidators,t)}hasAsyncValidator(t){return Oi(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(O(g({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new eo(!0,n))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),t.onlySelf||this._parent?._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new eo(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(O(g({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new Xn(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new Xn(!0,n))}markAsPending(t={}){this.status=ln;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new dn(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(O(g({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Zn,this.errors=null,this._forEachChild(i=>{i.disable(O(g({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Fi(this.value,n)),this._events.next(new dn(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(O(g({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Qn,this._forEachChild(n=>{n.enable(O(g({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(O(g({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Qn||this.status===ln)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Fi(this.value,e)),this._events.next(new dn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(O(g({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Zn:Qn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=ln,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let n=cd(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,i)=>n&&n._find(i),this)}getError(t,e){let n=e?this.get(e):this;return n?.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new dn(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new Ae,this.statusChanges=new Ae}_calculateStatus(){return this._allControlsDisabled()?Zn:this.errors?ki:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ln)?ln:this._anyControlsHaveStatus(ki)?ki:Qn}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,t.onlySelf||this._parent?._updatePristine(t,e),i&&this._events.next(new Xn(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new eo(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){ma(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=op(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=rp(this._rawAsyncValidators)}},Ri=class extends da{constructor(t,e,n){super(np(e),ip(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){sp(this,!0,t),Object.keys(t).forEach(n=>{ap(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let i=this.controls[n];i&&i.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,i)=>{n.reset(t?t[i]:null,O(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new la(this))}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,n,i)=>((n.enabled||this.disabled)&&(e[i]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((i,l)=>{n=e(n,i,l)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var fd=new _("",{factory:()=>pa}),pa="always";function lp(o,t,e=pa){gd(o,t),t.valueAccessor.writeValue(o.value),(o.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(o.disabled),cp(o,t),mp(o,t),up(o,t),dp(o,t)}function ld(o,t){o.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function dp(o,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};o.registerOnDisabledChange(e),t._registerOnDestroy(()=>{o._unregisterOnDisabledChange(e)})}}function gd(o,t){let e=ep(o);t.validator!==null?o.setValidators(rd(e,t.validator)):typeof e=="function"&&o.setValidators([e]);let n=tp(o);t.asyncValidator!==null?o.setAsyncValidators(rd(n,t.asyncValidator)):typeof n=="function"&&o.setAsyncValidators([n]);let i=()=>o.updateValueAndValidity();ld(t._rawValidators,i),ld(t._rawAsyncValidators,i)}function cp(o,t){t.valueAccessor.registerOnChange(e=>{o._pendingValue=e,o._pendingChange=!0,o._pendingDirty=!0,o.updateOn==="change"&&yd(o,t)})}function up(o,t){t.valueAccessor.registerOnTouched(()=>{o._pendingTouched=!0,o.updateOn==="blur"&&o._pendingChange&&yd(o,t),o.updateOn!=="submit"&&o.markAsTouched()})}function yd(o,t){o._pendingDirty&&o.markAsDirty(),o.setValue(o._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(o._pendingValue),o._pendingChange=!1}function mp(o,t){let e=(n,i)=>{t.valueAccessor.writeValue(n),i&&t.viewToModelUpdate(n)};o.registerOnChange(e),t._registerOnDestroy(()=>{o._unregisterOnChange(e)})}function pp(o,t){o==null,gd(o,t)}function hp(o,t){o._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}var fp={provide:to,useExisting:Oa(()=>ha)},Kn=Promise.resolve(),ha=(()=>{class o extends to{callSetDisabledState;get submitted(){return F(this.submittedReactive)}_submitted=Ke(()=>this.submittedReactive());submittedReactive=z(!1);_directives=new Set;form;ngSubmit=new Ae;options;constructor(e,n,i){super(),this.callSetDisabledState=i,this.form=new Ri({},ca(e),ua(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Kn.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),lp(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Kn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Kn.then(()=>{let n=this._findContainer(e.path),i=new Ri({});pp(i,e),n.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Kn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){Kn.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),hp(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new sa(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||o)(N(Ym,10),N(Qm,10),N(fd,8))};static \u0275dir=$({type:o,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,i){n&1&&H("submit",function(d){return i.onSubmit(d)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[or([fp]),Bt]})}return o})();var bd=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275dir=$({type:o,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return o})();var gp=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=V({type:o});static \u0275inj=U({})}return o})();var vd=(()=>{class o{static withConfig(e){return{ngModule:o,providers:[{provide:fd,useValue:e.callSetDisabledState??pa}]}}static \u0275fac=function(n){return new(n||o)};static \u0275mod=V({type:o});static \u0275inj=U({imports:[gp]})}return o})();var fa=class{Id=0;name="";email="";score=0;timespent=0;init(t,e,n){this.Id=t,this.name=e,this.email=n,this.score=0,this.timespent=0}},Ni=class{participantList=[];reset(){this.participantList=[]}get(t){return this.participantList.find(n=>n.name==t)}getById(t){return this.participantList.find(n=>n.Id==t)}add(t,e){let n=this.participantList.find(i=>i.name==t);if(n)return n.score=0,n.timespent=0,n;{let i=new fa;return i.init(this.participantList.length+1,t,e),this.participantList.push(i),i}}remove(t){let e=!1,n=this.participantList.findIndex(i=>i.name==t);return n!==-1&&(this.participantList.splice(n,1),e=!0),e}getList(){let t=[...this.participantList];return t.sort((e,n)=>n.score-e.score),t}};var no=class{get(){return[{Id:1,optionList:["3.3","3.5.1","2.4","2.6"],question:"Which of the following version of Python was released in December, 2015 by Python.org?",answer:1},{Id:2,optionList:[".python",".pe",".py",".pi"],question:"Python files are saved with the extension as ?",answer:2},{Id:3,optionList:["PGUI","Pyshell","IDLE","PythonSh"],question:"What is the name of the GUI that comes in-built as an interactive shell with Python?",answer:2},{Id:4,optionList:["Indigenous Development Lab","Integrated Development Environment","Integrated Developers Local Environment","Indie Developers Environment"],question:"IDLE stands for ? ?",answer:1},{Id:5,optionList:["print","display","run","output"],question:"The function to display a specified message on the screen is ? ?",answer:0},{Id:6,optionList:["==","===",">>>","="],question:"Which of the following is an assignment operator in Python?",answer:3},{Id:7,optionList:["x = y: y = 33","x = y = z = 33","x = z; y = z; x = 33;","x & y & z = 33"],question:"Which of the following is used to initialize multiple variables with a common value?",answer:1},{Id:8,optionList:["{","%","*","#"],question:"Comments in Python begin with ??",answer:3},{Id:9,optionList:["user","enter","input","value"],question:"A user-specified value can be assigned to a variable with this function ?",answer:2},{Id:10,optionList:["Floating Decimal","Text String","Boolean Value","Integer"],question:"User input is read as ?",answer:1},{Id:11,optionList:["\\t","\\n","\\s","\\r"],question:"Output displayed by the print function will add this invisible character at the end of the line by default ?",answer:1},{Id:12,optionList:["Single Space","Double Space","A new Line","Double Lines"],question:"Multiple values specified in parentheses to print function will display each value separated with this by default ?",answer:0},{Id:13,optionList:["sep is !","separate = !","sep >> '!'","sep = '!'"],question:"Which of the following will provide an ! character as alternative separator for the print function?",answer:3},{Id:14,optionList:["end to *","end as *","end = '*'","ending = '*'"],question:"Which of the following will provide a * character as alternative line ending for the print function?",answer:2},{Id:15,optionList:["Semantic error","Syntax error","Runtime error","All type of errors"],question:"For which type of error does the interpreter halts and reports the error but does not execute the program?",answer:1},{Id:16,optionList:["Semantic error","Syntax error","Runtime error","All type of errors"],question:'For which type of error does the interpreter runs the program but halts at error and reports the error as an "Exception"?',answer:2},{Id:17,optionList:["Semantic error","Syntax error","Runtime error","All type of errors"],question:"For which type of error does the interpreter runs the program and does not report an error?",answer:0},{Id:18,optionList:["2.0","2","18","18.0"],question:"What will be the output after the following statements?",codeBlock:`x = 6
y = 3
print(x / y)`,answer:0},{Id:19,optionList:["4.0","4","16","16.0"],question:"What will be the output after the following statements?",codeBlock:`x = 8 
y = 2 
print(x // y)`,answer:1},{Id:20,optionList:["0","20","1.0","1"],question:"What will be the output after the following statements?",codeBlock:`x = 5 
y = 4 
print(x % y)`,answer:3},{Id:21,optionList:["3","2","5","1"],question:"What will be the output after the following statements?",codeBlock:`x = 3 
y = 2 
x += y
print(x)`,answer:2},{Id:22,optionList:["7","12","5","35"],question:"What will be the output after the following statements?",codeBlock:`x = 5 
y = 7 
x *= y 
print(x)`,answer:3},{Id:23,optionList:["10","25","15","-15"],question:"What will be the output after the following statements?",codeBlock:`x = 25 
y = 15 
x -= y
print(x)`,answer:0},{Id:24,optionList:["4","28","2","37"],question:"What will be the output after the following statements?",codeBlock:`x = 30
y = 7 
x %= y 
print(x)`,answer:2},{Id:25,optionList:["y = 7 and x = 3","True","x = 3 and y = 3","False"],question:"What will be the output after the following statements?",codeBlock:`x = 3 
y = 7 
print(x == y)`,answer:3},{Id:26,optionList:["y = 6 and x = 8","True","x = 6 and y = 6","False"],question:"What will be the output after the following statements?",codeBlock:`x = 8 
y = 6 
print(x != y)`,answer:1},{Id:27,optionList:["True","False","Yes","No"],question:"What will be the output after the following statements?",codeBlock:`x = 83 
y = 57 
print(x > y)`,answer:0},{Id:28,optionList:["True","False","Yes","No"],question:"What will be the output after the following statements?",codeBlock:`x = 72 
y = 64 
print(x < y)`,answer:1},{Id:29,optionList:["True","False","Not defined","xy"],question:"What will be the output after the following statements?",codeBlock:`x = True 
y = False 
print(x and y)`,answer:1},{Id:30,optionList:["True","False","Not defined","xy"],question:"What will be the output after the following statements?",codeBlock:`x = True 
y = False 
print(x or y)`,answer:0},{Id:31,optionList:["True","False","Not defined","y"],question:"What will be the output after the following statements?",codeBlock:`x = True 
y = False 
print(not x)`,answer:1},{Id:32,optionList:["True","False","Not defined","x"],question:"What will be the output after the following statements?",codeBlock:`x = True 
y = False 
print(not y)`,answer:0},{Id:33,optionList:["True","False","20","40"],question:"What will be the output after the following statements?",codeBlock:`x = 20 
y = 40
z = y 
if (y > x) else x 
print(z)`,answer:3},{Id:34,optionList:["True","False","50","10"],question:"What will be the output after the following statements?",codeBlock:`x = 50
y = 10 
z = y 
if (y > x) else x 
print(z)`,answer:2},{Id:35,optionList:["True","False","65","53"],question:"What will be the output after the following statements?",codeBlock:`x = 65
y = 53 
z = y 
if (x % 2 == 0) else x
print(z)`,answer:2},{Id:36,optionList:["True","False","46","98"],question:"What will be the output after the following statements?",codeBlock:`x = 46 
y = 98
z = y 
if (y % 2 == 0) else x 
print(z)`,answer:3},{Id:37,optionList:["30","15","22","247"],question:"What will be the output after the following statements?",codeBlock:`x = 2 * 4 + 7 
print(x)`,answer:1},{Id:38,optionList:["63","16","33","35"],question:"What will be the output after the following statements?",codeBlock:`x = 7 * (4 + 5) 
print(x)`,answer:0},{Id:39,optionList:["40","2416","21","46"],question:"What will be the output after the following statements?",codeBlock:`x = '24' + '16' 
print(x)`,answer:1},{Id:40,optionList:["40","153","50","1535"],question:"What will be the output after the following statements?",codeBlock:`x = 15 + 35 
print(x)`,answer:2},{Id:41,optionList:["Float","String","List","Integer"],question:"What will be the data type of x after the following statement if input entered is 18 ?",codeBlock:"x = input('Enter a number: ')",answer:1},{Id:42,optionList:["Float","String","List","Integer"],question:"What will be the data type of y after the following statements if input entered is 50?",codeBlock:`x = input('Enter a number: ') 
y = int(x)`,answer:3},{Id:43,optionList:["Float","String","List","Integer"],question:"What will be the data type of y after the following statements?",codeBlock:`x = 71 
y = float(x)`,answer:0},{Id:44,optionList:["Float","String","List","Integer"],question:"What will be the data type of y after the following statements?",codeBlock:`x = 48 
y = str(x)`,answer:1},{Id:45,optionList:["x","8","z","y"],question:"What will be the output after the following statements?",codeBlock:`x = y = z = 8
print(y)`,answer:1},{Id:46,optionList:["All three will have the value of 3","All three will have the value of 100","All three will have the value of 300","x and y will have arbitrary values, while z will have the value of 300"],question:"What will be the value of x, y and z after the following statement?",codeBlock:"x = y = z = 300",answer:2},{Id:47,optionList:["All three will have the value of 3","All three will have the value of 345","x will have the value of 3, y will have the value 4 and z will have the value of 5","x and y will have arbitrary values, while z will have the value of 345"],question:"What will be the value of x, y and z after the following statement?",codeBlock:"x, y, z = 3, 4, 5",answer:2},{Id:48,optionList:["List","Dictionary","Tuple","String"],question:"What is the data type of x after the following statement?",codeBlock:"x = [7, 8, 9, 10]",answer:0},{Id:49,optionList:["List","Dictionary","Tuple","String"],question:"What is the data type of x after the following statement?",codeBlock:"x = ['Today', 'Tomorrow', 'Yesterday']",answer:0},{Id:50,optionList:["x1","Today","Tomorrow","Yesterday"],question:"What will be the output after the following statements?",codeBlock:`x = ['Today', 'Tomorrow', 'Yesterday'] 
y = x[1] 
print(y)`,answer:2},{Id:51,optionList:["x0","25","35","45"],question:"What will be the output after the following statements?",codeBlock:`x = [25, 35, 45] 
y = x[0] 
print(y)`,answer:1},{Id:52,optionList:["20","30","40","50"],question:"What will be the output after the following statements?",codeBlock:`x = [10, 20, 30] 
y = x[1] + x[2] 
print(y)`,answer:3},{Id:53,optionList:["MondayTuesday","SundayMonday","SunMonday","Monday Tuesday"],question:"What will be the output after the following statements?",codeBlock:`x = ['Sunday', 'Monday', 'Tuesday'] 
y = x[1] + x[2] 
print(y)`,answer:0},{Id:54,optionList:["0.0","1.0","5.0","6.0"],question:"What will be the output after the following statements?",codeBlock:`x = [[0.0, 1.0, 2.0],[4.0, 5.0, 6.0]] 
y = x[1][2]
print(y)`,answer:3},{Id:55,optionList:["1.0","4.0","5.0","6.0"],question:"What will be the output after the following statements?",codeBlock:`x = [[0.0, 1.0, 2.0],[4.0, 5.0, 6.0]] 
y = x[0][1] + x[1][0] 
print(y)`,answer:2},{Id:56,optionList:["3","4","3 4","12"],question:"What will be the output after the following statements?",codeBlock:`x = 3 
y = 4 
print(x*y)`,answer:3},{Id:57,optionList:["30","40","50","10"],question:"What will be the output after the following statements?",codeBlock:`x = [15, 45, 85, 95] 
print(x[3]-x[1])`,answer:2},{Id:58,optionList:["[5, 4, 3, 2]","5, 4, 3, 2","5432","(5, 4, 3, 2)"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2] 
print(x)`,answer:0},{Id:59,optionList:["[5, 4, 3, 2]","5, 4, 3, 2, 1","5432","[5, 4, 3, 2, 1]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2]
x.append(1) 
print(x)`,answer:3},{Id:60,optionList:["[5, 1, 3, 2, 0]","[5, 0, 4, 3, 2]","[0, 5, 4, 3, 2]","[1, 5, 4, 3, 2]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2]
x.insert(1, 0) 
print(x)`,answer:1},{Id:61,optionList:["[5, 3, 2]","[5, 4, 3]","[5, 4, 2]","[3, 2]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2]
x.remove(2) 
print(x)`,answer:1},{Id:62,optionList:["4","3","2","1"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2, 1] 
print(x.pop(3))`,answer:2},{Id:63,optionList:["4","3","2","1"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2, 1] 
print(x.index(1))`,answer:0},{Id:64,optionList:["[5, 4, 3, 2, 1]","[]","[1, 2, 3, 4, 5]","[5, 4, 3, 2, 1, 5, 4, 3, 2, 1]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2, 1]
x.extend(x) 
print(x)`,answer:3},{Id:65,optionList:["[5, 4, 3, 2, 1, 0, 5, 10]","[]","[5, 4, 3, 2, 1]","[0, 5, 10, 5, 4, 3, 2, 1]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2, 1] 
y = [0, 5, 10]
x.extend(y) 
print(x)`,answer:0},{Id:66,optionList:["[5, 4, 3, 2, 1, 10, 5, 0]","[]","[10, 5, 0, 5, 4, 3, 2, 1]","[10, 5, 0]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2, 1] 
y = [10, 5, 0]
x.extend(y) 
print(y)`,answer:3},{Id:67,optionList:["[5, 4, 3, 2, 1, 10, 5, 0]","[10, 5, 0, 5, 4, 3, 2, 1]","[5, 4, 3, 2, 1]","[10, 5, 0]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2, 1] 
y = [10, 5, 0]
y.extend(x) 
print(y)`,answer:1},{Id:68,optionList:["[0, 1, 2, 3, 4, 5]","[0, 5, 4, 3, 2, 1]","[5, 4, 3, 2, 1, 0]","[1, 2, 3, 4, 5]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2, 1]
x.reverse() 
print(x)`,answer:3},{Id:69,optionList:["[11, 14, 25, 53, 62]","[25, 14, 53, 62, 11]","[62, 53, 25, 14, 11]","[25, 53, 62, 14, 11]"],question:"What will be the output after the following statements?",codeBlock:`x = [25, 14, 53, 62, 11]
x.sort() 
print(x)`,answer:0},{Id:70,optionList:["['Today', 'Sunday', '15', '25', '53']","['Sunday', 'Today', '15', '25', '53']","['15', '25', '53', 'Sunday', 'Today']","['15', '25', '53', 'Today', 'Sunday']"],question:"What will be the output after the following statements?",codeBlock:`x = ['25', 'Today', '53', 'Sunday', '15']
x.sort() 
print(x)`,answer:2},{Id:71,optionList:["['Today', 'Sunday', 15, 25, 53]","[15, 'Sunday', 53, 'Today', 25]","[15, 25, 53, 'Sunday', 'Today']","[15, 25, 53, 'Today', 'Sunday']"],question:"What will be the output after the following statements?",codeBlock:`x = [25, 'Today', 53, 'Sunday', 15]
x.reverse()
print(x)`,answer:1},{Id:72,optionList:["25","3","53","35"],question:"What will be the output after the following statements?",codeBlock:`x = [25, 35, 53, 25, 52, 35, 25] 
print(x.count(25))`,answer:1},{Id:73,optionList:["25","5","7","35"],question:"What will be the output after the following statements?",codeBlock:`x = [25, 35, 53, 25, 52, 35, 25] 
print(len(x))`,answer:2},{Id:74,optionList:["25","5","7","[25, 35, 53, 25, 52, 35, 25]"],question:"What will be the output after the following statements?",codeBlock:`x = [25, 35, 53, 25, 52, 35, 25] 
len(x) 
print(x)`,answer:3},{Id:75,optionList:["[25, 35, 53, 52, 35, 25]","[25, 5, 5, 25, 52, 5, 25]","[35, 53, 52, 35]","[25, 35, 53, 25, 52, 35, 25]"],question:"What will be the output after the following statements?",codeBlock:`x = [25, 35, 53, 25, 52, 35, 25] 
del x[3] 
print(x)`,answer:0},{Id:76,optionList:["[5, 3, 6, 4, 0, 1]","[5, 3, 2, 4, 0, 1]","[5, 6, 2, 4, 0, 1]","[5, 4, 0, 1]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 3, 6, 2, 4, 0, 1] 
del x[2:3] 
print(x)`,answer:1},{Id:77,optionList:["[]","[5, 3, 6, 2, 4, 0, 7]","[5, 3, 6, 2, 4, 0]","[3, 6, 2, 4, 0]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 3, 6, 2, 4, 0, 7] 
del x[0:7]
print(x)`,answer:0},{Id:78,optionList:["[]","[5, 3, 6, 2, 7]","[5, 3, 6, 2, 4, 0]","[4, 0, 7]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 3, 6, 2, 4, 0, 7] 
del x[0:4] 
print(x)`,answer:3},{Id:79,optionList:["[]","[5, 3, 6, 2, 7]","[5, 3, 6, 2, 4, 0]","[4, 0, 7]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 3, 6, 2, 4, 0, 7] 
del x[:] 
print(x)`,answer:0},{Id:80,optionList:["11","4","40","7"],question:"What will be the output after the following statements?",codeBlock:`x = [4, 0, 7]
y = str(x[0]) + str(x[1]) 
print(y)`,answer:2},{Id:81,optionList:["11","11.0","47.0","47"],question:"What will be the output after the following statements?",codeBlock:`x = [4, 0, 7] 
y = float(x[0] + x[2]) 
print(y)`,answer:1},{Id:82,optionList:["List","String","Dictionary","Tuple"],question:"What will be the data type of x after the following statement?",codeBlock:"x = (34, 81, 50)",answer:3},{Id:83,optionList:["List","String","Dictionary","Tuple"],question:"What will be the data type of x after the following statement?",codeBlock:"x = 'Python 3 Test'",answer:1},{Id:84,optionList:["List","String","Dictionary","Tuple"],question:"What will be the data type of x after the following statement?",codeBlock:"x = [2290, 376, 198]",answer:0},{Id:85,optionList:["List","Set","Dictionary","Tuple"],question:"What will be the data type of x after the following statement?",codeBlock:"x = {'lang' :'Python', 'version' : '3'}",answer:2},{Id:86,optionList:["List","Set","Dictionary","Tuple"],question:"What will be the data type of x after the following statement?",codeBlock:"x = {2015, 2016, 2017, 2018}",answer:1},{Id:87,optionList:["List","String","Dictionary","Boolean"],question:"What will be the data type of x after the following statement?",codeBlock:"x = [2016, 'Leap Year', 'True']",answer:0},{Id:88,optionList:["List","String","Dictionary","Boolean"],question:"What will be the data type of x after the following statement?",answer:3},{Id:89,optionList:["data()","type()","true()","str()"],question:"Which of the following function can be used to find the data type of a variable?",answer:1},{Id:90,optionList:["x[0]","[24]","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = [24, 50, 37]
y = 24 in x 
print(y)`,answer:2},{Id:91,optionList:["x[1]","['B']","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = {'A', 'B', 'C'} 
y = 'b' in x 
print(y)`,answer:3},{Id:92,optionList:["[1]","y","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python' 
y = 'y' in x 
print(y)`,answer:2},{Id:93,optionList:["x[0]","[24]","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = {0:4, 1:8, 2:16, 3:32} 
y = 0 in x 
print(y)`,answer:2},{Id:94,optionList:["x[0]","[24]","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = {0:4, 1:8, 2:16, 3:32} 
y = 8 in x
print(y)`,answer:3},{Id:95,optionList:["List","String","Dictionary","Boolean"],question:"What will be the data type of x after the following statements?",codeBlock:`false = "This is not true" 
x = false`,answer:1},{Id:96,optionList:["List","Dictionary","Tuple","Set"],question:"Which of the following is immutable (values that cannot be changed)?",answer:2},{Id:97,optionList:["List","Dictionary","Tuple","Set"],question:"Which of the following has only unique values?",answer:3},{Id:98,optionList:["dict_keys([0, 1, 2, 3])","dict_keys{0, 1, 2, 3}","dict_keys(0, 1, 2, 3)","dict_keys[0, 1, 2, 3]"],question:"What will be the output after the following statements?",codeBlock:`x = {0:4, 1:8, 2:16, 3:32} 
print(x.keys())`,answer:0},{Id:99,optionList:["dict_values([4, 8, 16, 32])","dict_values{4, 8, 16, 32}","dict_values(4, 8, 16, 32)","dict_values[4, 8, 16, 32]"],question:"What will be the output after the following statements?",codeBlock:`x = {0:4, 1:8, 2:16, 3:32} 
print(x.values())`,answer:0},{Id:100,optionList:["Jan","Feb","March","April"],question:"What will be the output after the following statements?",codeBlock:`x = {1:'Jan', 2:'Feb', 3:'March', 4:'April'} 
print(x[2])`,answer:1},{Id:101,optionList:["[4, 8]","[4, 8, 16]","16","8"],question:"What will be the output after the following statements?",codeBlock:`x = {0:4, 1:8, 2:16, 3:32} 
print(list(x.values())[2])`,answer:2},{Id:102,optionList:["dict_items(4, 8, 16, 32)","dict_items([4, 8, 16, 32])","dict_items[0, 1, 2, 3]","dict_items([(0, 4), (1, 8), (2, 16), (3, 32)])"],question:"What will be the output after the following statements?",codeBlock:`x = {0:4, 1:8, 2:16, 3:32} 
print(x.items())`,answer:3},{Id:103,optionList:["[4, 8, 16, 32]","[(3, 16), (5, 4), (8, 8), (9, 32)]","[3, 5, 8, 9]","[(4, 5), (8, 8), (16, 3), (32, 9)]"],question:"What will be the output after the following statements?",codeBlock:`x = {5:4, 8:8, 3:16, 9:32} 
print(sorted(x.items()))`,answer:1},{Id:104,optionList:["20","5","x","7"],question:"What will be the output after the following statements?",codeBlock:`x = 7 
if x > 5:     
    print(20)`,answer:0},{Id:105,optionList:["20","x","10","8"],question:"What will be the output after the following statements?",codeBlock:`x = 8 
if x > 8:     
    print(20) 
else:     
    print(10)`,answer:2},{Id:106,optionList:["20","40","10","30"],question:"What will be the output after the following statements?",codeBlock:`x = 40
if x > 10:     
    print(20) 
elif x == 40:     
    print(10) 
else:     
    print(30)`,answer:0},{Id:107,optionList:["0","1","2","15"],question:"What will be the output after the following statements?",codeBlock:`x = 15
if x > 15:
    print(0)
elif x == 15:
    print(1)
else:
    print(2)`,answer:1},{Id:108,optionList:["15","yes","equal","no"],question:"What will be the output after the following statements?",codeBlock:`x = 5 
if x > 15:
    print('yes') 
elif x == 15:     
    print('equal') 
else:     
    print('no')`,answer:3},{Id:109,optionList:["true","false","not true","not false"],question:"What will be the output after the following statements?",codeBlock:`x = 50
if x > 10  and x < 15:     
    print('true') 
elif x > 15  and x < 25:     
    print('not true') 
elif x > 25  and x < 35:
    print('false') 
else:     
    print('not false')`,answer:3},{Id:110,optionList:["true","false","not true","not false"],question:"What will be the output after the following statements?",codeBlock:`x = 25 
if x > 10  and x < 15:     
    print('true') 
elif x > 15  and x < 25:     
    print('not true') 
elif x > 25  and x < 35:
    print('false') 
else:
    print('not false')`,answer:3},{Id:111,optionList:["true","false","not true","not false"],question:"What will be the output after the following statements?",codeBlock:`x = 15 
if x > 10  and x <= 15:
    print('true') 
elif x > 15  and x < 25:     
    print('not true') 
elif x > 25  and x < 35:
    print('false') 
else:     
    print('not false')`,answer:0},{Id:112,optionList:["true","false","not true","not false"],question:"What will be the output after the following statements?",codeBlock:`x = 25 
if x > 10  and x <= 15:
    print('true') 
elif x >= 15  and x < 25:     
    print('not true') 
elif x >= 25  and x < 35:
    print('false') 
else:     
    print('not false')`,answer:1},{Id:113,optionList:["true","false","not true","not false"],question:"What will be the output after the following statements?",codeBlock:`x = 25 
if x >= 10  and x <= 15:
    print('true') 
elif x >= 15  and x <= 25:     
    print('not true') 
elif x >= 25  and x <= 35:
    print('false') 
else:     
    print('not false')`,answer:2},{Id:114,optionList:["true","false","not true","not false"],question:"What will be the output after the following statements?",codeBlock:`x = 20 
if x <= 10 or x >= 75:     
    print('true') 
elif x <= 15 or x >= 55:     
    print('not true') 
elif x <= 25 or x >= 35:
    print('false') 
else:     
    print('not false')`,answer:1},{Id:115,optionList:["true","false","not true","not false"],question:"What will be the output after the following statements?",codeBlock:`x = 30 
if x <= 10 or x >= 75:     
    print('true') 
elif x <= 15 or x >= 55:     
    print('not true') 
elif x <= 25 or x >= 35:
    print('false') 
else:     
    print('not false')`,answer:3},{Id:116,optionList:["true","false","not true","not false"],question:"What will be the output after the following statements?",codeBlock:`x = 80 
if x <= 10 or x >= 75:     
    print('true') 
elif x <= 15 or x >= 55:     
    print('not true') 
elif x <= 25 or x >= 35:
    print('false') 
else:     
    print('not false')`,answer:0},{Id:117,optionList:["true","false","not true","not false"],question:"What will be the output after the following statements?",codeBlock:`x = 60 
if x <= 10 or x >= 75:     
    print('true') 
elif x <= 15 or x >= 55:     
    print('not true') 
elif x <= 25 or x >= 35:
    print('false') 
else:     
    print('not false')`,answer:2},{Id:118,optionList:["true","false","not true","not false"],question:"What will be the output after the following statements?",codeBlock:`x = 68 
if x <= 50 and x >= 25:
    print('true')
elif x <= 60 or x >= 55:     
    print('not true') 
elif x <= 70 and x >= 35:
    print('false') 
else:     
    print('not false')`,answer:2},{Id:119,optionList:["true","false","not true","not false"],question:"What will be the output after the following statements?",codeBlock:`x = 99 
if x <= 30 or x >= 100:
    print('true')
elif x >= 50 and x <= 80:     
    print('not true') 
elif x >= 100 or x <= 75:
    print('false') 
else:     
    print('not false')`,answer:3},{Id:120,optionList:["true","false","not true","not false"],question:"What will be the output after the following statements?",codeBlock:`x = 70 
if x <= 30 or x >= 100:
    print('true') 
elif x <= 50 and x == 50:     
    print('not true') 
elif x >= 150 or x <= 75:
    print('false') 
else:     
    print('not false')`,answer:1},{Id:121,optionList:["true","false","not true","not false"],question:"What will be the output after the following statements?",codeBlock:`x = 40 
y = 25 
if x + y >= 100:     
    print('true') 
elif x + y == 50:     
    print('not true') 
elif x + y <= 90:     
    print('false') 
else:     
    print('not false')`,answer:1},{Id:122,optionList:["123456789","1","10","2"],question:"What will be the output after the following statements?",codeBlock:`x = 1
while x < 10:     
    print(x, end='')     
    x = x + 1`,answer:0},{Id:123,optionList:["0123456789","123456789","4123456789","048"],question:"What will be the output after the following statements?",codeBlock:`x = 0 
while x < 10:     
    print(x, end='')     
    x += 4`,answer:3},{Id:124,optionList:["012345","0123456789","4123456789","048"],question:"What will be the output after the following statements?",codeBlock:`x = 0 
y = 4 
while x + y < 10:     
    print(x, end='')     
    x += 1`,answer:0},{Id:125,optionList:["012345","0123456","123456","0123456"],question:"What will be the output after the following statements?",codeBlock:`x = 0 
y = 4 
while x + y < 10:     
    x += 1     
    print(x, end='')`,answer:2},{Id:126,optionList:["012345","456789","123456789","0123456789"],question:"What will be the output after the following statements?",codeBlock:`x = 1 
y = 4 
while x * y < 10:     
    print(y, end='')     
    y += 1`,answer:1},{Id:127,optionList:["4","48","148","0123456789"],question:"What will be the output after the following statements?",codeBlock:`x = 1 
y = 4 
while x * y < 10:     
    print(y, end='')     
    x += 1     
    y += 1`,answer:0},{Id:128,optionList:["4","48","14","12"],question:"What will be the output after the following statements?",codeBlock:`x = 1 
y = 4 
while x * y <= 10:     
    print(x, end='')     
    x += 1     
    y += 1`,answer:3},{Id:129,optionList:["1045","10 45","34","3 4 10 45"],question:"What will be the output after the following statements?",codeBlock:`x, y = 2, 5 
while y - x < 5:
    print(x*y, end=' ')     
    x += 3     
    y += 4`,answer:1},{Id:130,optionList:["1 1 2 3 5 8","112358","0123456789","0 2 4 6 8"],question:"What will be the output after the following statements?",codeBlock:`x, y = 0, 1 
while y < 10:     
    print(y, end=' ')     
    x, y = y, x + y`,answer:0},{Id:131,optionList:["1 1 2 2","1 1 2 2 3 3 4 4","1 2 3 4","1 2 1 2 1 2"],question:"What will be the output after the following statements?",codeBlock:`x = 1 
while x < 4:     
    x += 1     
    y = 1     
    while y < 3:         
        print(y, end=' ')         
        y += 1`,answer:3},{Id:132,optionList:["1 1 2 2","1 2","1 2 3 4","1 2 1 2 1 2"],question:"What will be the output after the following statements?",codeBlock:`x = y = 1 
while x < 4:     
    x += 1     
    while y < 3:         
        print(y, end=' ')         
        y += 1`,answer:1},{Id:133,optionList:["Closed loop","One time loop","Infinite loop","Evergreen loop"],question:"What type of loop is this?",codeBlock:`x = 1 
while x < 5:     
    print(x, end='')`,answer:2},{Id:134,optionList:["h","hello","h e l l o","i x"],question:"What will be the output after the following statements?",codeBlock:`x = 'hello' 
for i in x:     
    print(i, end='')`,answer:1},{Id:135,optionList:["5","1 5","012345","01234"],question:"What will be the output after the following statements?",codeBlock:`for i in range(5):     
    print(i, end='')`,answer:3},{Id:136,optionList:["15","12345","1234","012345"],question:"What will be the output after the following statements?",codeBlock:`for i in range(1,5):     
    print(i, end='')`,answer:2},{Id:137,optionList:["1 6 11 16 21","1 5 10 15 20 25","1 5 25","16111621"],question:"What will be the output after the following statements?",codeBlock:`for i in range(1,25,5):     
    print(i, end=' ')`,answer:0},{Id:138,optionList:["P","python","Pytho","Python"],question:"What will be the output after the following statements?",codeBlock:`x = ['P', 'y', 't', 'h', 'o', 'n'] 
for i in x:     
    print(i, end='')`,answer:3},{Id:139,optionList:["abcd","a b c d","False","True"],question:"What will be the output after the following statements?",codeBlock:`x = ('a', 'b', 'c', 'd') 
for i in x:     
    print(i, end=' ')`,answer:1},{Id:140,optionList:["x z y","xzy","False","True"],question:"What will be the output after the following statements?",codeBlock:`x = {'x', 'z', 'y'} 
for i in x:     
    print(i, end='')`,answer:1},{Id:141,optionList:["x y z","1 2 3","x:3 y:2 z:1","True"],question:"What will be the output after the following statements?",codeBlock:`x = {'z:1', 'y:2', 'x:3'} 
for i in x:     
    print(i, end=' ')`,answer:2},{Id:142,optionList:["('P')('y')('t')('h')('o')('n')","python","python","(0, 'P')(1, 'y')(2, 't')(3, 'h')(4, 'o')(5, 'n')"],question:"What will be the output after the following statements?",codeBlock:`x = ['P', 'y', 't', 'h', 'o', 'n'] 
for i in enumerate(x):     
    print(i, end='')`,answer:3},{Id:143,optionList:["x y z","1 2 3","x:1 y:2 z:3","True"],question:"What will be the output after the following statements?",codeBlock:`x = {'x':1, 'y':2, 'z':3} 
for i in x:     
    print(i, end=' ')`,answer:0},{Id:144,optionList:["x y z","x 1 y 2 z 3","x:1 y:2 z:3","x, 1, y, 2, z, 3"],question:"What will be the output after the following statements?",codeBlock:`x = {'x':1, 'y':2, 'z':3} 
for i, j in x.items():     
    print(i, j, end=' ')`,answer:1},{Id:145,optionList:["('P')('y')('t')('h')('o')('n')","python 0 1 2 3 4 5","('p', '0')('y', '1')('t', '2')('h', '3')('o', '4')('n', '5')","(0, 'P')(1, 'y')(2, 't')(3, 'h')(4, 'o')(5, 'n')"],question:"What will be the output after the following statements?",codeBlock:`x = ['p', 'y', 't', 'h', 'o', 'n'] 
y = ['0', '1', '2', '3', '4', '5'] 
for i in zip(x, y):     
    print(i, end='')`,answer:2},{Id:146,optionList:["123","1234","12","12345"],question:"What will be the output after the following statements?",codeBlock:`for i in range(1,5):     
    print(i, end='')     
    if i == 3:         
        break`,answer:0},{Id:147,optionList:["12","01","012","0123"],question:"What will be the output after the following statements?",codeBlock:`for i in range(0,5):
    if i == 2:         
        break     

print(i, end='')`,answer:1},{Id:148,optionList:["1 2 4","1 2 3 4","1 2","1 2 3"],question:"What will be the output after the following statements?",codeBlock:`for i in range(1,5):     
    if i == 3:         
        continue     
    
print(i, end=' ')`,answer:0},{Id:149,optionList:["0124","01234","12","1345"],question:"What will be the output after the following statements?",codeBlock:`for i in range(0,5):     
    print(i, end='')     
    if i == 2:         
        continue`,answer:1},{Id:150,optionList:["01245","12345","5","1234"],question:"What will be the output after the following statements?",codeBlock:`myvar = 5 
def printvar() :     
    print(myvar) 
    printvar()`,answer:2},{Id:151,optionList:["A list","A string","An integer","A function"],question:"What is printvar in the following statements?",codeBlock:`myvar = 5 
def printvar() :     
    print(myvar) 
    printvar()`,answer:3},{Id:152,optionList:["55","5 5","5","10"],question:"What will be the output after the following statements?",codeBlock:`myvar = 5 
def printvar() :
    print(myvar, end ='') 
    printvar() 
    printvar()`,answer:0},{Id:153,optionList:["55","4 5","45","var"],question:"What will be the output after the following statements?",codeBlock:`def call(var) :
    print(var, end ='') 
    
call(45)`,answer:2},{Id:154,optionList:["10","50","40","10 + 40"],question:"What will be the output after the following statements?",codeBlock:`def call(var1, var2) :
    print(var1 + var2, end ='')
    
call(10, 40)`,answer:1},{Id:155,optionList:["1000","10","30","10 10 10"],question:"What will be the output after the following statements?",codeBlock:`def call(var1, var2, var3) :
    print(var1 var2 var3, end ='') 
    a = b = c = 10 
    
call(a, b, c)`,answer:0},{Id:156,optionList:["100","1000","2052","200"],question:"What will be the output after the following statements?",codeBlock:`def call(var1=20, var2=5, var3=2) :     
    print(var1 var2 var3, end ='') 
    
call()`,answer:3},{Id:157,optionList:["597","315","2052","200"],question:"What will be the output after the following statements?",codeBlock:`def call(var1=20, var2=5, var3=2) :     
    print(var1 var2 var3, end ='') 
    
call(5,9,7)`,answer:1},{Id:158,optionList:["57","315","70","200"],question:"What will be the output after the following statements?",codeBlock:`def call(var1=20, var2=5, var3=2) :     
    print(var1 var2 var3, end ='') 
    
call(5,7)`,answer:2},{Id:159,optionList:["17","98","70","11"],question:"What will be the output after the following statements?",codeBlock:`def call(var1=20, var2=5, var3=2) :     
    print((var1 * var2) - var3, end ='') 
    
call(var2=5, var3=3, var1=4)`,answer:0},{Id:160,optionList:["17","98","26","11"],question:"What will be the output after the following statements?",codeBlock:`def call(var1=20, var2=5, var3=2) :     
    print((var1 * var2) - var3, end ='') 
    
call(7,4)`,answer:2},{Id:161,optionList:["18","5, 3","15","8"],question:"What will be the output after the following statements?",codeBlock:`def call(x, y) :     
    return x * y 

print(call(5, 3))`,answer:2},{Id:162,optionList:["0.444445","2","0","2.25"],question:"What will be the output after the following statements?",codeBlock:`def call(y, x) :     
    return x / y 

z = call(4, 9) 
print(z)`,answer:3},{Id:163,optionList:["6","-6","2","6.0"],question:"What will be the output after the following statements?",codeBlock:`def call(x,y) :     
    if y == 0:         
        return     
    return y - x 

print(call(8,2))`,answer:1},{Id:164,optionList:["5","5.0","0","None"],question:"What will be the output after the following statements?",codeBlock:`def call(x,y) :     
    if x == 0:     
        return     
    return y + x 

print(call(0,5))`,answer:3},{Id:165,optionList:["24","24.0","6: 24","36"],question:"What will be the output after the following statements?",codeBlock:`y = lambda x: x*4 
print(y(6))`,answer:0},{Id:166,optionList:["None","25","27","No output"],question:"What will be the output after the following statements?",codeBlock:`x = 27 
if x < 25:     
    print(x) 
else:
    pass`,answer:3},{Id:167,optionList:["List","Module","Dictionary","Tuple"],question:"Which of the following is not a core data structure in Python?",answer:1},{Id:168,optionList:["012","123","111","000"],question:"What will be the output after the following statements?",codeBlock:`def gen():     
    x = 0     
    while True:         
        yield x         
        x += 1 
        
y = gen() 
print(next(y), end='') 
print(next(y), end='') 
print(next(y), end='')`,answer:0},{Id:169,optionList:["0123","123","12345","234"],question:"What will be the output after the following statements?",codeBlock:`def gen():     
    x = 2     
    while True:         
        yield x         
        x += 1 
        
y = gen() 
for i in y:     
    if i >= 5:         
        break     
    else:         
        print(i, end='')`,answer:3},{Id:170,optionList:["HELP","save","help()","help"],question:"What do you type to enter the interactive help mode of Python?",answer:2},{Id:171,optionList:["Imports the random module","Imports a random module from a list of modules","Imports the random function","imports the directory named random"],question:"What does the following statement do?",codeBlock:"import random",answer:0},{Id:172,optionList:["Imports all the python keywords","Imports the keyword and sys modules","Imports the keyword and sys functions","imports the directories named keyword and sys"],question:"What does the following statement do?",codeBlock:"import keyword, sys",answer:1},{Id:173,optionList:["A random float value between 4 and 7, including 4 and 7","A random float value between 4 and 7, excluding 4 and 7","A random integer value between 4 and 7, excluding 4 and 7","A random integer value between 4 and 7, including 4 and 7"],question:"What will be the output after the following statements?",codeBlock:`import random as rd 
print(rd.randint(4,7))`,answer:3},{Id:174,optionList:["A random float value between 0 and 1","A random integer value between 0 and 1","A random float value between 0 and 10","A random integer value between 0 and 10"],question:"What will be the output after the following statements?",codeBlock:`import random as rd 
print(rd.random())`,answer:0},{Id:175,optionList:["A dictionary containing 3 random keys from list x","Three random integer values between 0 and 10","A list containing 3 random elements from list x","A tuple containing 2 random elements from list x"],question:"What will be the output after the following statements?",codeBlock:`from random import * 
x = [0, 2, 4, 6, 8, 10] 
print(sample(x, 3))`,answer:2},{Id:176,optionList:["[4, 11, 30]","[3, 15, 10]","[1, 5, 7, 4]","[1, 5, 0]"],question:"Which of the following can be a possible output after the following statements?",codeBlock:`from random import * 
print(sample(range(0,10), 3))`,answer:3},{Id:177,optionList:["Displays the Python version","Displays the operating system version","Displays the date","Displays the year"],question:"What does the following statements do?",codeBlock:`import sys 
print(sys.version)`,answer:0},{Id:178,optionList:["Displays the Python version","Displays the operating system version","Displays the location of the Python interpreter","Displays the date and time"],question:"What does the following statements do?",codeBlock:`import sys 
print(sys.executable)`,answer:2},{Id:179,optionList:["Displays the list of Python modules","Displays a list of all the Python keywords","Displays a random keyword from the Python keywords","Displays the date and time"],question:"What does the following statements do?",codeBlock:`import keyword 
print(keyword.kwlist)`,answer:1},{Id:180,optionList:["67","68","67.0","68.0"],question:"What will be the output after the following statements?",codeBlock:`import math 
print(math.floor(67.3))`,answer:0},{Id:181,optionList:["21","22","21.0","22.0"],question:"What will be the output after the following statements?",codeBlock:`import math 
print(math.ceil(21.4))`,answer:1},{Id:182,optionList:["2.1","2","2.0","4.0"],question:"What will be the output after the following statements?",codeBlock:`import math 
print(math.sqrt(4))`,answer:2},{Id:183,optionList:["6","9","6.0","9.0"],question:"What will be the output after the following statements?",codeBlock:`import math 
print(math.pow(3,2))`,answer:3},{Id:184,optionList:["Displays current date and time","Displays a list of all the hours remaining till midnight","Displays a random time from today's date","Displays today's weekday name"],question:"What does the following statements do?",codeBlock:`import datetime 
print(datetime.datetime.today())`,answer:0},{Id:185,optionList:["Displays current date and time","Displays a list of all the hours remaining till midnight","Displays current hour of the day","Displays the number of hours in a day"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(getattr(datetime.today(),'hour'))`,answer:2},{Id:186,optionList:["Displays current date and year","Displays current year","Displays the number of months in a year","Displays the number of days in a year"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(getattr(datetime.today(),'year'))`,answer:1},{Id:187,optionList:["Displays the full month name","Displays the abbreviated month name","Displays the abbreviated day name","Displays the full weekday name"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%A'))`,answer:3},{Id:188,optionList:["Displays the full weekday name","Displays the full month name","Displays the abbreviated day name","Displays the abbreviated month name"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%B'))`,answer:1},{Id:189,optionList:["Displays the hour number of 12-hour clock","Displays the date and time appropriate for locale","Displays the day of the month number (from 01 to 31)","Displays the microsecond number (from 0 to 999999) 190. What does the following statements do?"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%d'))`,answer:2},{Id:190,optionList:["Displays the date and time appropriate for locale","Displays the microsecond number (from 0 to 999999)","Displays the hour number of 12-hour clock","Displays the hour number of 24-hour clock"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%c'))`,answer:0},{Id:191,optionList:["Displays the date and time appropriate for locale","Displays the microsecond number (from 0 to 999999)","Displays the hour number of 24-hour clock","Displays the hour number of 12-hour clock"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%f'))`,answer:1},{Id:192,optionList:["Displays the hour number of 12-hour clock","Displays the minute number from 00 to 59","Displays the hour number of 24-hour clock","Displays the day number of the year from 000 to 366 193. What does the following statements do?"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%I'))`,answer:0},{Id:193,optionList:["Displays the minute number from 00 to 59","Displays the hour number of 12-hour clock","Displays the hour number of 24-hour clock","Displays the day number of the year from 000 to 366"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%H'))`,answer:2},{Id:194,optionList:["Displays the month number from 01 to 12","Displays the minute number from 00 to 59","Displays the day number of the year from 000 to 366","Displays the second number from 00 to 59 195."],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%j'))`,answer:2},{Id:195,optionList:["Displays the month number from 01 to 12","Displays the second number from 00 to 59","Displays the AM or PM equivalent for locale","Displays the minute number from 00 to 59"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%M'))`,answer:3},{Id:196,optionList:["Displays the minute number from 00 to 59","Displays the month number from 01 to 12","Displays the second number from 00 to 59","Displays the AM or PM equivalent for locale"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%m'))`,answer:1},{Id:197,optionList:["Displays the AM or PM equivalent for locale","Displays the minute number from 00 to 59","Displays the month number from 01 to 12","Displays the second number from 00 to 59"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%p'))`,answer:0},{Id:198,optionList:["Displays the AM or PM equivalent for locale","Displays the second number from 00 to 59","Displays the week number of the year from 00 to 53","Displays the month number from 01 to 12"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%S'))`,answer:1},{Id:199,optionList:["Displays the weekday number from 0(Sunday) to 6(Saturday)","Displays the AM or PM equivalent for locale","Displays the date appropriate for locale","Displays the week number of the year from 00 to 53"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%W'))`,answer:3},{Id:200,optionList:["Displays the week number of the year from 00 to 53","Displays the date appropriate for locale","Displays the weekday number from 0(Sunday) to 6(Saturday)","Displays the time appropriate for locale"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%w'))`,answer:2},{Id:201,optionList:["Displays the time appropriate for locale","Displays the current year as 00 to 99","Displays the current year as 0001 to 9999","Displays the date appropriate for locale"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%x'))`,answer:3},{Id:202,optionList:["Displays the current year as 0001 to 9999","Displays the timezone name","Displays the time appropriate for locale","Displays the current year as 00 to 99"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%X'))`,answer:2},{Id:203,optionList:["Displays the current year as 00 to 99","Displays the current year as 0001 to 9999","Displays the timezone name","Displays the timezone offset from UTC as +HHMM or -HHMM 204."],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%y'))`,answer:0},{Id:204,optionList:["Displays the current year as 0001 to 9999","Displays the timezone name","Displays the timezone offset from UTC as +HHMM or -HHMM","Displays the full month name"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%Y'))`,answer:0},{Id:205,optionList:["Displays the timezone offset from UTC as +HHMM or -HHMM","Displays the timezone name","Displays the abbreviated month name","Displays the full month name"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%Z'))`,answer:1},{Id:206,optionList:["Displays the full month name","Displays the abbreviated month name","Displays the abbreviated day name","Displays the timezone offset from UTC as +HHMM or -HHMM 207."],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%z'))`,answer:3},{Id:207,optionList:["Displays the full month name","Displays the full day name","Displays the abbreviated day name","Displays the abbreviated month name"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%a'))`,answer:2},{Id:208,optionList:["Displays the full month name","Displays the abbreviated month name","Displays the full day name","Displays the abbreviated day name"],question:"What does the following statements do?",codeBlock:`from datetime import * 
print(datetime.today().strftime('%b'))`,answer:1},{Id:209,optionList:["Displays the current time in seconds since the Epoch as a floating point number","Displays the current time in minutes since the Epoch as a floating point number","Displays the current time in seconds since the Epoch as an integer","Displays the current time in minutes since the Epoch as an integer"],question:"What does the following statements do?",codeBlock:`from time import *
print(time())`,answer:0},{Id:210,optionList:["Pauses the execution of the program by 3 minutes","Pauses the execution of the program by 3 seconds","Displays the current time in seconds since the Epoch as an integer","Displays the current time in minutes since the Epoch as an integer"],question:"What does the following statements do?",codeBlock:`from time import * 
sleep(3)`,answer:1},{Id:211,optionList:["Python Python","MCQ MCQ","Python MCQ","PythonMCQ"],question:"What does the following statements do?",codeBlock:`x = 'Python' 
y = 'MCQ' 
print(x + y)`,answer:3},{Id:212,optionList:["Pyt Pyt Pyt","t","Python Python Python","PythonPythonPython"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python ' 
print(x*3)`,answer:2},{Id:213,optionList:["h","t","Python Python Python Python","o"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python ' 
print(x[4])`,answer:3},{Id:214,optionList:["Pyth","th","tho","thon"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python' 
print(x[2:4])`,answer:1},{Id:215,optionList:["yth","Pn","Python","PythonPythonPython"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python' 
print(x[:])`,answer:2},{Id:216,optionList:["y","Y","Python","True"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python' 
print('y' in x)`,answer:3},{Id:217,optionList:["p","P","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python' 
print('p' not in x)`,answer:2},{Id:218,optionList:["Python 3 Test","Python Test","Test 3 Python","Test Python"],question:"What will be the output after the following statements?",codeBlock:`x = '{} 3 {}'.format('Python', 'Test') 
print(x)`,answer:0},{Id:219,optionList:["Python for Questions","Questions for Python","1 for 0","Python 1 for 0 Questions"],question:"What will be the output after the following statements?",codeBlock:`x = '{1} for {0}'.format('Python', 'Questions') 
print(x)`,answer:1},{Id:220,optionList:["Python MCQ","MCQ Test","Test MCQ Python","Python MCQ Test"],question:"What will be the output after the following statements?",codeBlock:`x = '%s MCQ %s' %('Python', 'Test') 
print(x)`,answer:3},{Id:221,optionList:["Python 3","3 Version","Python 3 Version","Python Version 3"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python %d Version' %(3) 
print(x)`,answer:2},{Id:222,optionList:["Python 3 or Python 2","Python 2 or Python 3","Python 2 or Python 2","Python 23"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python %c or Python %c' %('2', '3') 
print(x)`,answer:1},{Id:223,optionList:["Python 3.51 or Python 2.7","Python 2 or Python 3","Python 2.7 or Python 3.5","Python 2.7 or Python 3.51"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python %.1f or Python %.2f' %(2.7, 3.51) 
print(x)`,answer:3},{Id:224,optionList:["Python","Python.capitalize","PYTHON","pYTHON"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python' 
print(x.capitalize())`,answer:0},{Id:225,optionList:["python job interview","Python job interview","Python Job Interview","Python job Interview"],question:"What will be the output after the following statements?",codeBlock:`x = 'python job interview' 
print(x.title())`,answer:2},{Id:226,optionList:["PYTHON JOBS","Python jobs","Python Jobs","python jobs"],question:"What will be the output after the following statements?",codeBlock:`x = 'python jobs' 
print(x.upper())`,answer:0},{Id:227,optionList:["PYTHON JOBS","Python jobs","Python Jobs","python jobs"],question:"What will be the output after the following statements?",codeBlock:`x = 'python jobs' 
print(x.lower())`,answer:3},{Id:228,optionList:["PYTHON JOBS","pYTHON jOBS","Python Jobs","python jobs"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python Jobs' 
print(x.swapcase())`,answer:1},{Id:229,optionList:["Python33","3Python3","Python3","Python 33"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python' 
print(x.join('33'))`,answer:1},{Id:230,optionList:["3Python Test3","3Python3Test","Python3Test3","Python Test33"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python Test' 
print(x.join('33'))`,answer:0},{Id:231,optionList:["Python 3","3Python3","Python3","Python+3"],question:"What will be the output after the following statements?",codeBlock:`x = ' Python ' y = '3'
print(x.lstrip()+y.lstrip())`,answer:0},{Id:232,optionList:["Python 3","3Python3","Python3","Python+3"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python ' 
y = '3 '
print(x.rstrip()+y.rstrip())`,answer:2},{Id:233,optionList:["Python 3 Questions","Python3Questions","Python3 Questions","Python 3Questions"],question:"What will be the output after the following statements?",codeBlock:`x = ' Python ' 
y = ' 3 ' 
z = ' Questions ' 
print(x.strip()+y.strip()+z.strip())`,answer:1},{Id:234,optionList:["Interview","Intrviw","I n t e r v i e w","Int rvi w"],question:"What will be the output after the following statements?",codeBlock:`x = 'Interview' 
print(x.replace('e',' '))`,answer:3},{Id:235,optionList:["MCQs******","M C Q S","******MCQs","M C Q s"],question:"What will be the output after the following statements?",codeBlock:`x = 'MCQs' 
print(x.ljust(10,'*'))`,answer:0},{Id:236,optionList:["MCQs******","M C Q S","******MCQs","M C Q s"],question:"What will be the output after the following statements?",codeBlock:`x = 'MCQs' 
print(x.rjust(10,'*'))`,answer:2},{Id:237,optionList:["MCQs******","***MCQs***","******MCQs","M C Q s"],question:"What will be the output after the following statements?",codeBlock:`x = 'MCQs' 
print(x.center(10,'*'))`,answer:1},{Id:238,optionList:["1","0","4","5"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python Pi Py Pip' 
print(x.count('p'))`,answer:0},{Id:239,optionList:["-1","0","1","3"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python Pi Py' 
print(x.find('p'))`,answer:0},{Id:240,optionList:["-1","0","1","3"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python Pi Py'
print(x.find('P'))`,answer:1},{Id:241,optionList:["1","0","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = 'Pi Py Python' 
print(x.startswith('p'))`,answer:3},{Id:242,optionList:["1","0","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = 'Pi Py Python' 
print(x.endswith('n'))`,answer:2},{Id:243,optionList:["1","0","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python' 
print(x.isalpha())`,answer:2},{Id:244,optionList:["1","0","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python 3' 
print(x.isnumeric())`,answer:3},{Id:245,optionList:["1","0","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python 3 MCQ' 
print(x.isalnum())`,answer:3},{Id:246,optionList:["True","False","1","0"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python 3 MCQ' 
print(x.islower())`,answer:1},{Id:247,optionList:["True","False","1","0"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python 3 MCQ' 
print(x.istitle())`,answer:1},{Id:248,optionList:["True","False","1","0"],question:"What will be the output after the following statements?",codeBlock:`x = 'MCQ' 
print(x.isupper())`,answer:0},{Id:249,optionList:["True","False","1","0"],question:"What will be the output after the following statements?",codeBlock:`x = '\\n' 
print(x.isspace())`,answer:0},{Id:250,optionList:["True","False","1","0"],question:"What will be the output after the following statements?",codeBlock:`x = '2000' 
print(x.isdigit())`,answer:0},{Id:251,optionList:["True","False","1","0"],question:"What will be the output after the following statements?",codeBlock:`x = '2.7' 
print(x.isdecimal())`,answer:1},{Id:252,optionList:["Opens an existing text file named python.csv to write","Opens an existing text file named python.csv to append","Opens an existing text file named python.csv to read","Opens a new file named python.csv to read"],question:"What does the following statement do?",codeBlock:"x = open('python.csv', 'r')",answer:2},{Id:253,optionList:["Opens or creates a text file named python.csv to write","Opens or creates a text file named python.csv to append","Opens or creates a text file named python.csv to read","Opens a new file named python.csv to write"],question:"What does the following statement do?",codeBlock:"x = open('python.csv', 'w')",answer:0},{Id:254,optionList:["Opens or creates a text file named python.csv to write","Opens or creates a text file named python.csv to append","Opens or creates a text file named python.csv to read","Opens a new file named python.csv to append"],question:"What does the following statement do?",codeBlock:"x = open('python.csv', 'a')",answer:1},{Id:255,optionList:["Opens a text file named python.txt to read from or write to","Opens a text file named python.txt to read","Opens a text file named python.txt to write","Opens a new file named python.txt to append"],question:"What does the following statement do?",codeBlock:"x = open('python.txt', 'r+')",answer:0},{Id:256,optionList:["Opens a text file named python.txt to read","Opens a text file named python.txt to write to or read from","Opens a text file named python.txt to write","Opens a new file named python.txt to append"],question:"What does the following statement do?",codeBlock:"x = open('python.txt', 'r+')",answer:1},{Id:257,optionList:["Opens a text file named python.txt to read","Opens a text file named python.txt to read and write","Opens a text file named python.txt to write to","Opens or creates a text file named python.txt to read from or write to at the end of the file"],question:"What does the following statement do?",codeBlock:"x = open('python.txt', 'a+')",answer:1},{Id:258,optionList:["Opens an existing text file named python.bat to write","Opens an existing binary file named python.bat to write","Opens an existing binary file named python.bat to append","Opens an existing binary file named python.bat to read"],question:"What does the following statement do?",codeBlock:"x = open('python.bat', 'rb')",answer:3},{Id:259,optionList:["Opens or creates a binary file named python.bat to write","Opens or creates a binary file named python.bat to append","Opens or creates a binary file named python.bat to read","Opens a new file named python.bat to write"],question:"What does the following statement do?",codeBlock:"x = open('python.bat', 'wb')",answer:0},{Id:260,optionList:["Opens or creates a binary file named python.bat to write","Opens or creates a binary file named python.bat to append","Opens or creates a binary file named python.bat to read","Opens a new file named python.bat to append"],question:"What does the following statement do?",codeBlock:"x = open('python.bat', 'ab')",answer:1},{Id:261,optionList:["python","python.txt opened","python.txt or FileNotFoundError","python r"],question:"What will be the output after the following statements?",codeBlock:`x = open('python.txt', 'r') 
print(x.name)`,answer:2},{Id:262,optionList:["python write","python.txt","r","w"],question:"What will be the output after the following statements?",codeBlock:`x = open('python.csv', 'w') 
print(x.mode)`,answer:3},{Id:263,optionList:["open","closed","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = open('python.csv', 'w') 
print(x.closed)`,answer:3},{Id:264,optionList:["open","closed","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = open('python.csv', 'w')
x.close() 
print(x.closed)`,answer:2},{Id:265,optionList:["readable","writable","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = open('python.csv', 'w') 
print(x.readable())`,answer:3},{Id:266,optionList:["readable","writable","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = open('python.csv', 'w') 
print(x.writable())`,answer:2},{Id:267,optionList:["readable","writable","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = open('python.csv', 'a') 
print(x.writable())`,answer:2},{Id:268,optionList:["4+4","4 + 4","4*2","4**2"],question:"In IDLE shell, the output will be the same for all the following statements except one. Which one?",answer:3},{Id:269,optionList:["Page Down","Page Up","Alt + P","Ctrl + P"],question:"In IDLE shell, what is the keyboard shortcut for the previous command in history on Windows/Linux?",answer:2},{Id:270,optionList:["Page Down","Page Up","Ctrl + N","Alt + N"],question:"In IDLE shell, what is the keyboard shortcut for the next command in history on Windows/Linux?",answer:3},{Id:271,optionList:["Page Down","Page Up","Alt + P","Ctrl + P"],question:"In IDLE shell, what is the keyboard shortcut for the previous command in history on Mac OS X?",answer:3},{Id:272,optionList:["Page Down","Page Up","Ctrl + N","Alt + N"],question:"In IDLE shell, what is the keyboard shortcut for the next command in history on Mac OS X?",answer:2},{Id:273,optionList:["F5","F1","Shift","Alt"],question:"In IDLE file editor, what is the keyboard shortcut for executing the program in shell?",answer:0},{Id:274,optionList:["Not declared","Not defined","Not assigned","Not a variable"],question:"What type of error is shown when you use a variable without assigning an initial value?",answer:1},{Id:275,optionList:["High level","Low level","Top level","Bottom level"],question:"What type of language is Python?",answer:0},{Id:276,optionList:["Python - the reptile","Monty Python","A pet","A company"],question:"Python language was named after?",answer:1},{Id:277,optionList:["Bill Gates","Guido Van Rossum","Jeff Bezos","Larry Page"],question:"Who is the creator of Python?",answer:1},{Id:278,optionList:["Dynamic typing","Static typing","Slow typing","Auto typing"],question:"Which of the following is identified with Python?",answer:0},{Id:279,optionList:["Single quotes","Double quotes","Either single quotes or double quotes","! symbol"],question:"Which of the following is used to enclose strings?",answer:2},{Id:280,optionList:["\\t","\\tab","\\a","\\b"],question:"Which of the following is used to add an invisible tab character to the output?",answer:0},{Id:281,optionList:["2 t 4","2\\t4","2 4","2 tab 4"],question:"What will be the output after the following statement?",codeBlock:"print('2\\\\t4')",answer:1},{Id:282,optionList:["True","False","b","5"],question:"What will be the output after the following statements?",codeBlock:`a = True 
b = False 
c = 5 
if (a == 1) else b 
print(c)`,answer:3},{Id:283,optionList:["True","False","a","b"],question:"What will be the output after the following statements?",codeBlock:`a = True 
b = False 
c = 'a' 
if (b == 0) else 'b' 
print(c)`,answer:2},{Id:284,optionList:["True","False","ab","ba"],question:"What will be the output after the following statements?",codeBlock:`a = False 
b = False 
print(a and b)`,answer:1},{Id:285,optionList:["Multiplication","Division","Addition","Subtraction"],question:"In the order of precedence, which of the operation will be completed first in the following statement?",codeBlock:"3 * 6 + 5 - 4 / 2",answer:0},{Id:286,optionList:["Multiplication","Division","Addition","Subtraction"],question:"In the order of precedence, which of the operation will be completed last in the following statement?",codeBlock:"3 * 6 + 5 - 4 / 2",answer:3},{Id:287,optionList:["Multiplication, Division, Subtraction, Addition","Multiplication, Division, Addition, Subtraction","Division, Multiplication, Subtraction, Addition","Division, Multiplication, Addition, Subtraction"],question:"What will be the order of precedence of operations in the following statement?",codeBlock:"10 * 4 - 1 + 8 / 5",answer:1},{Id:288,optionList:["Integer","String","List","Float"],question:"What will be the data type of x after the following statement if input entered is 64?",codeBlock:"x = float(input('Enter a number: '))",answer:3},{Id:289,optionList:["0","16.0","32","4.0"],question:"What will be the output after the following statements?",codeBlock:`a = 27 / 3 % 2 * 4**2 
print(a)`,answer:1},{Id:290,optionList:["20.0","1.0","36.0","0.0"],question:"What will be the output after the following statements?",codeBlock:`a = 3 / 3 - 3*3 
print(a)`,answer:0},{Id:291,optionList:["[3, 5, 7, 9]","[1, 3, 5] [3, 5, 7, 9, 11, 13, 15, 17]","[3, 5, 7, 9] [7, 9, 11, 13, 15, 17, 19]","[3, 5, 7, 9, 11, 13, 15, 17, 19]"],question:"What will be the output after the following statements?",codeBlock:`a = [1,3,5,7,9,11,13,15,17,19] 
print(a[1:5],a[3:17])`,answer:2},{Id:292,optionList:["[1, 3, 5, 1, 3, 5]","[1, 2, 3, 5]","[3, 5]","[11, 33, 55]"],question:"What will be the output after the following statements?",codeBlock:`a = [1,3,5] 
print(a * 2)`,answer:0},{Id:293,optionList:["abc","abc123","123abc","abc_123"],question:"Which of the following is not a valid variable name?",answer:2},{Id:294,optionList:["a$1","a1","1a","abc 123"],question:"Which of the following is a valid variable name?",answer:1},{Id:295,optionList:["25 15","15 25","a 15","25 a"],question:"What will be the output after the following statements?",codeBlock:`a = 15 
b = a 
a = 25 
print(a,b)`,answer:0},{Id:296,optionList:["25 15 20","20.0 20.0 20.0","20.0 20 20.0","20 20.0 20"],question:"What will be the output after the following statements?",codeBlock:`x = 16 / 4 * 5 
y = 16 / 4 * 5.0 
z = 16 / 4.0 * 5 
print(x, y, z)`,answer:1},{Id:297,optionList:["Integer","List","String","Float"],question:"What will be the data type of x after the following statement?",codeBlock:"x = 1/2",answer:3},{Id:298,optionList:["1,4","y,z","No output","None"],question:"What will be the output after the following statements?",codeBlock:`def x(y,z):     
    pass 

x(1,4)`,answer:2},{Id:299,optionList:["14","16","20","25"],question:"What will be the output after the following statements?",codeBlock:`b = 1 
for a in range(1, 10, 3):
    b += a + 1 
    
print(b)`,answer:1},{Id:300,optionList:["37","47","44","38"],question:"What will be the output after the following statements?",codeBlock:`b = 1 
for a in range(1, 10):
    b += a - 1 
    
print(b)`,answer:0},{Id:301,optionList:["7","4","3","8"],question:"What will be the output after the following statements?",codeBlock:`b = 3
for a in range(10, 1):
    b -= a + 1 

print(b)`,answer:2},{Id:302,optionList:["120","40","36","250"],question:"What will be the output after the following statements?",codeBlock:`b = 1 
for a in range(1, 5):
    b *= a + 1 
    
print(b)`,answer:0},{Id:303,optionList:["a","False","not a","True"],question:"What will be the output after the following statements?",codeBlock:`a = True 
print(a and not a)`,answer:1},{Id:304,optionList:["a == b","False","not b","True"],question:"What will be the output after the following statements?",codeBlock:`a = True 
b = False 
print(a == b or not b)`,answer:3},{Id:305,optionList:["a is b","False","not b","True"],question:"What will be the output after the following statements?",codeBlock:`a = 'Hello' 
b = 'hello' 
print(a is b)`,answer:1},{Id:306,optionList:["a is b","False","not b","True"],question:"What will be the output after the following statements?",codeBlock:`a = 'Python' 
b = 'Python' 
print(a is b)`,answer:3},{Id:307,optionList:["a is b","False","not b","True"],question:"What will be the output after the following statements?",codeBlock:`a = [4, 7, 9] 
b = [4, 7, 9] 
print(a is b)`,answer:1},{Id:308,optionList:["a is b","False","not b","True"],question:"What will be the output after the following statements?",codeBlock:`a = [4, 7, 9] 
b = [7, 4, 9] 
print(a is not b)`,answer:3},{Id:309,optionList:["True True","False False","False True","True False"],question:"What will be the output after the following statements?",codeBlock:`a = [3, 6, 9] 
b = [3, 6, 9] 
print(a is b, a == b)`,answer:2},{Id:310,optionList:["0 5 10","5 10 10","5 10 5","5 5 10"],question:"What will be the output after the following statements?",codeBlock:`a = 0 
b = 5 
c = 10 
a = b 
b = c 
c = a 
print(a, b, c)`,answer:2},{Id:311,optionList:["20 15","15 20","a 20","15 a"],question:"What will be the output after the following statements?",codeBlock:`b = 15 
c = 20
a = b 
b = c 
c = a 
print(b, c)`,answer:0},{Id:312,optionList:["4*3","60//5","17-5","12/1"],question:"In IDLE shell, the output will be the same for all the following statements except one. Which one?",answer:3},{Id:313,optionList:["P = 'python' * int('1')","P = 'python' + 1","P = 'python' + str(1)","P = 'python' * 1"],question:"In IDLE shell, the output will be an error for one of the following statements. Which one?",answer:1},{Id:314,optionList:["4 4","4 3","12 12","64 64"],question:"What will be the output after the following statements?",codeBlock:`a = 4**3 
b = pow(4,3) 
print(a, b)`,answer:3},{Id:315,optionList:["(10, 15, 6, 17, 24)","6","5","24"],question:"What will be the output after the following statements?",codeBlock:`a = min(10, 15, 6, 17, 24) 
print(a)`,answer:1},{Id:316,optionList:["[4, 25, 16, 9, 24]","9","25","24"],question:"What will be the output after the following statements?",codeBlock:`a = [4, 25, 16, 9, 24] 
print(max(a))`,answer:2},{Id:317,optionList:["5 5 5","6 5 6","5 6 6","5 6 5"],question:"What will be the output after the following statements?",codeBlock:`a = round(5.3) 
b = round(5.6) 
c = round(5.5) 
print(a, b, c)`,answer:2},{Id:318,optionList:["3","4","5","6"],question:'How many times will "Python 3" be printed after the following statements?',codeBlock:`for i in range(1, 5):     
    print('Python 3')`,answer:1},{Id:319,optionList:["4","5","4.0","4.5"],question:"What will be the output after the following statements?",codeBlock:`a = round(4.49999) 
print(a)`,answer:0},{Id:320,optionList:["None","No value","Zero","Bool"],question:"What will be the output for a function that does not return any value?",answer:0},{Id:321,optionList:["SyntaxError","TypeError","ValueError","NameError"],question:"What type of error will be shown after the following statement?",codeBlock:"a = b",answer:3},{Id:322,optionList:["SyntaxError","TypeError","ValueError","NameError"],question:"What type of error will be shown after the following statement?",codeBlock:"a = int('hello')",answer:2},{Id:323,optionList:["SyntaxError","TypeError","ValueError","NameError"],question:"What type of error will be shown after the following statement?",codeBlock:"a = {7)",answer:0},{Id:324,optionList:["SyntaxError","TypeError","ValueError","NameError"],question:"What type of error will be shown after the following statement?",codeBlock:"a = 'Python' + 3",answer:1},{Id:325,optionList:["List","Dictionary","Tuple","Set"],question:"What is the data type of a after the following statement?",codeBlock:"a = {'A', 'B', 'C', 'D'}",answer:3},{Id:326,optionList:["List","Dictionary","Tuple","Set"],question:"What is the data type of a after the following statement?",codeBlock:"a = {'A':1, 'B':2, 'C':3, 'D':4}",answer:1},{Id:327,optionList:["List","Dictionary","Tuple","Set"],question:"What is the data type of a after the following statement?",codeBlock:"a = (1, 4, 3, 6)",answer:2},{Id:328,optionList:["List","Dictionary","Tuple","Set"],question:"What is the data type of a after the following statement?",codeBlock:"a = [1, 4, 3, 6]",answer:0},{Id:329,optionList:["List","Dictionary","Tuple","Set"],question:"What is the data type used to store values in key values pair?",answer:1},{Id:330,optionList:['"Python\\tis\\tEasy\\n"',`"Hello, it's very easy to learn Python"`,'"Python", "easy"',`"Python is easy'`],question:"In IDLE shell, which of the following statements gives SyntaxError?",answer:3},{Id:331,optionList:["45","50.0","45.0","55.0"],question:"What will be the output after the following statements?",codeBlock:`a = 45 
b = 55
c = (a + b) / 2 
print(c)`,answer:1},{Id:332,optionList:["Parentheses","Exponential","Division","Subtraction"],question:"Which of the following has the highest precedence in an expression?",answer:0},{Id:333,optionList:["32","144","36","24"],question:"What will be the output after the following statements?",codeBlock:`a = 4*3**2 
print(a)`,answer:2},{Id:334,optionList:["regex","regexes","REG","re"],question:"What is the name of Python's built-in module for regular expressions?",answer:3},{Id:335,optionList:["csv","tsc","delimited","pipe"],question:"What is the name of Python's built-in module for delimited files?",answer:0},{Id:336,optionList:["date","time","datetime","dates"],question:"What is the name of Python's built-in module for basic date and time types?",answer:2},{Id:337,optionList:["mailserver","email","message","mail"],question:"What is the name of Python's built-in module for email related tasks?",answer:1},{Id:338,optionList:["getpass","password","login","readpass"],question:"What is the name of Python's built-in module for reading passwords?",answer:0},{Id:339,optionList:["getip","ipman","ip","ipaddress"],question:"What is the name of Python's built-in module for IPv4/IPv6 manipulation?",answer:3},{Id:340,optionList:["json","jcode","jsonencode","jsoncode"],question:"What is the name of Python's built-in module for encoding/decoding JSON format?",answer:0},{Id:341,optionList:["string","keyword","stringtest","keytest"],question:"What is the name of Python's built-in module for Python keywords?",answer:1},{Id:342,optionList:["maths","mathematics","math","mathfunc"],question:"What is the name of Python's built-in module for mathematical functions?",answer:2},{Id:343,optionList:["windows","liunx","operatingsystem","os"],question:"What is the name of Python's built-in module for operating system interfaces?",answer:3},{Id:344,optionList:["pprint","print","prettyprint","printp"],question:"What is the name of Python's built-in module for data pretty printer?",answer:0},{Id:345,optionList:["psrandom","random","psuedo","randomnum"],question:"What is the name of Python's built-in module for generating pseudo-random numbers?",answer:1},{Id:346,optionList:["scheduler","eventsched","sched","schedule"],question:"What is the name of Python's built-in module for general purpose event scheduler?",answer:2},{Id:347,optionList:["shutil","fileutil","futility","fileop"],question:"What is the name of Python's built-in module for high level file operations?",answer:0},{Id:348,optionList:["net","socket","webking","webworking"],question:"What is the name of Python's built-in module for low level networking interface?",answer:1},{Id:349,optionList:["SQL","sqldb","dbase","sqlite3"],question:"What is the name of Python's built-in module for SQLite databases?",answer:3},{Id:350,optionList:["ssl","swrap","tlsssl","sslobj"],question:"What is the name of Python's built-in module for TLS/SSL wrapper for socket objects?",answer:0},{Id:351,optionList:["mathstats","statistics","statmath","statfunc"],question:"What is the name of Python's built-in module for mathematical statistics functions?",answer:1},{Id:352,optionList:["sub","mansub","submng","subprocess"],question:"What is the name of Python's built-in module for subprocess management?",answer:3},{Id:353,optionList:["config","pysys","sysconfig","pycon"],question:"What is the name of Python's built-in module for Python's configuration information?",answer:2},{Id:354,optionList:["telnetlib","tellib","tnet","telnet"],question:"What is the name of Python's built-in module for telnet client class?",answer:0},{Id:355,optionList:["temp","tempdir","temporary","tempfile"],question:"What is the name of Python's built-in module for generating temporary files and directories?",answer:3},{Id:356,optionList:["thread","threadall","threading","thrpar"],question:"What is the name of Python's built-in module for thread based parallelism?",answer:2},{Id:357,optionList:["timely","time","primetime","mytime"],question:"What is the name of Python's built-in module for time access and conversions?",answer:1},{Id:358,optionList:["calendars","calendar","yearcal","calc"],question:"What is the name of Python's built-in module for working with calendars?",answer:1},{Id:359,optionList:["timeit","selftime","codetime","timer"],question:"What is the name of Python's built-in module for measuring execution time of code snippets?",answer:0},{Id:360,optionList:["tkgui","guitk","intertk","tkinter"],question:"What is the name of Python's built-in module for interface to Tcl/Tk for graphical user interfaces?",answer:3},{Id:361,optionList:["torque","tedu","turtle","moveturtle"],question:"What is the name of Python's built-in module for simple educational graphical applications?",answer:2},{Id:362,optionList:["urls","urllib","URL","httpurl"],question:"What is the name of Python's built-in module for url handling?",answer:1},{Id:363,optionList:["wav","WAVE","WAV","wave"],question:"What is the name of Python's built-in module for interface to WAV sound format?",answer:3},{Id:364,optionList:["browser","browse","webrowser","webbrowser"],question:"What is the name of Python's built-in module for web browser controlller?",answer:3},{Id:365,optionList:["xml","XML","allxml","onlyxml"],question:"What is the name of Python's built-in module for xml processing?",answer:0},{Id:366,optionList:["readzip","zipfile","writezip","rwzip"],question:"What is the name of Python's built-in module for reading and writing ZIP archive files?",answer:1},{Id:367,optionList:["pcgi","pycgi","cgi","cgipy"],question:"What is the name of Python's built-in module for running Python scripts via CGI?",answer:2},{Id:368,optionList:["complexmath","cmath","mathc","mathplex"],question:"What is the name of Python's built-in module for mathematical functions for complex numbers?",answer:1},{Id:369,optionList:["color","colors","colours","colorsys"],question:"What is the name of Python's built-in module for conversions between color systems?",answer:3},{Id:370,optionList:["copyd","copyme","copy","copys"],question:"What is the name of Python's built-in module for shallow and deep copy operations?",answer:2},{Id:371,optionList:["filecmp","cmpfile","compare","filecompare"],question:"What is the name of Python's built-in module for comparing files?",answer:0},{Id:372,optionList:["ftp","ftplib","FTP","pftp"],question:"What is the name of Python's built-in module for FTP protocol client?",answer:1},{Id:373,optionList:["upattern","pathpat","upath","glob"],question:"What is the name of Python's built-in module for unix style pathname pattern expansion?",answer:3},{Id:374,optionList:["hyper","xml","html","uml"],question:"What is the name of Python's built-in module for html manipulation?",answer:2},{Id:375,optionList:["[0, 1, 2, 3, 4, 5]","[0]","[]","[1, 2, 3, 4, 5]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2, 1]
x.clear()
print(x)`,answer:2},{Id:376,optionList:["[0, 1, 2, 3, 4, 5]","[5, 4, 3, 2, 1]","[]","[1, 2, 3, 4, 5]"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2, 1] 
y = x.copy() 
print(y)`,answer:1},{Id:377,optionList:["[0, 1, 2, 3, 4, 5]","[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]","[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]","[1, 4, 9, 16, 25, 36, 49, 64, 81]"],question:"What will be the output after the following statements?",codeBlock:`x = [] 
for i in range(10):
    x.append(i**2) 
    
print(x)`,answer:1},{Id:378,optionList:["[0, 1, 2, 3, 4, 5]","[1, 4, 9, 16, 25]","[0, 1, 4, 9, 16, 25]","[0, 1, 4, 9, 16]"],question:"What will be the output after the following statements?",codeBlock:`x = list(map(lambda x:x**2, range(5))) 
print(x)`,answer:3},{Id:379,optionList:["[0, 1, 2, 3, 4, 5]","[1, 4, 9]","[0, 1, 4, 9]","[0, 1, 4, 9, 16]"],question:"What will be the output after the following statements?",codeBlock:`x = [i**2 for i in range(4)] 
print(x)`,answer:2},{Id:380,optionList:["[0, 1, 2, 3, 4, 5]","[(1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)]","[(0, 1, 2), (3, 4, 5)]","[(0, 3), (0, 4), (0, 5), (1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)]"],question:"What will be the output after the following statements?",codeBlock:`a = [(x, y) for x in [0, 1, 2] for y in [3, 4, 5] if x!=y] 
print(a)`,answer:3},{Id:381,optionList:["[(0, 5), (0, 4), (3, 5), (3, 4), (3, 0), (5, 4), (5, 0)]","[(1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)]","[(0, 3, 5), (0, 4, 5)]","[(0, 5), (0, 4), (0, 0), (3, 5), (3, 4), (3, 0), (5, 5), (5, 4), (5, 0)]"],question:"What will be the output after the following statements?",codeBlock:`a = [(x, y) for x in [0, 3, 5] for y in [5, 4, 0] if x!=y] 
print(a)`,answer:0},{Id:382,optionList:["[(0, 2)]","[(0, 0), (2, 2)]","[(0, 2), (2, 4, 0)]","[(0, 2), (0, 4), (0, 0), (2, 2), (2, 4), (2, 0)]"],question:"What will be the output after the following statements?",codeBlock:`a = [(x, y) for x in [0, 2] for y in [2, 4, 0] if x==y] 
print(a)`,answer:0},{Id:383,optionList:["[(0, 2)]","[(0, 0), (2, 2)]","[(0, 2), (0, 4), (2, 4), (2, 0)]","[(0, 2), (0, 4), (0, 0), (2, 2), (2, 4), (2, 0)]"],question:"What will be the output after the following statements?",codeBlock:`a = [(x, y) for x in [0, 2] for y in [2, 4, 0] if x!=y] 
print(a)`,answer:2},{Id:384,optionList:["[0, 1, 2, 3, 4, 5]","[(1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)]","[(0, 1, 2), (3, 4, 5)]","[(0, 3), (0, 4), (0, 5), (1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)]"],question:"What will be the output after the following statements?",codeBlock:`a = [] 
for x in [0, 1, 2]:     
    for y in [3, 4, 5]:         
        if x!=y:
            a.append((x,y)) 

print(a)`,answer:3},{Id:385,optionList:["[(0, 2)]","[-2, -1, 0, 1, 2]","[8, 1, 0, 1, 8]","[-8, -1, 0, 1, 8]"],question:"What will be the output after the following statements?",codeBlock:`a = [-2, -1, 0, 1, 2] 
print([i**3 for i in a])`,answer:3},{Id:386,optionList:["[81, 1, 0, 1, 81]","[-81, -1, 0, 1, 81]","[16, 1, 0, 1, 16]","[-16, -1, 0, 1, 16]"],question:"What will be the output after the following statements?",codeBlock:`a = [-3, -1, 0, 1, 3] 
print([i**4 for i in a])`,answer:0},{Id:387,optionList:["[-3, -1, 0, 1, 3]","[0, 1, 3]","[1, 3]","[-1, 0, 1]"],question:"What will be the output after the following statements?",codeBlock:`a = [-3, -1, 0, 1, 3] 
print([x for x in a if x>=0])`,answer:1},{Id:388,optionList:["[-3, -1, 0, 1, 3]","[0, 1, 3]","[3, 1, 0, 1, 3]","[-1, 0, 1]"],question:"What will be the output after the following statements?",codeBlock:`a = [-3, -1, 0, 1, 3] 
print([abs(x) for x in a])`,answer:2},{Id:389,optionList:["['today', 'tomorrow ', 'not now']","[' today', ' tomorrow', 'not now']","['today', 'tomorrow', 'notnow']","['today', 'tomorrow', 'not now']"],question:"What will be the output after the following statements?",codeBlock:`a = [' today', ' tomorrow ', 'not now'] 
print([x.strip() for x in a])`,answer:3},{Id:390,optionList:["[(0, 0), (1, 2), (2, 4), (3, 6)]","[(0, 0), (1, 2), (2, 4), (3, 6), (4, 8)]","[(1, 2), (2, 4), (3, 6), (4, 8)]","[(1, 2), (2, 4), (3, 6)]"],question:"What will be the output after the following statements?",codeBlock:"print([(x, x*2) for x in range(4)])",answer:0},{Id:391,optionList:["[0, 1, 2, 4, 5, 6, 7, 8, 9]","[0, 1, 2, 7, 8, 9, 4, 5, 6]","[(0, 1, 2), (7, 8, 9), (4, 5, 6)]","[(0, 7, 4), (1, 8, 5), (2, 9, 6)]"],question:"What will be the output after the following statements?",codeBlock:`a = [[0, 1, 2], [7, 8, 9], [4, 5, 6]] 
print([x for y in a for x in y])`,answer:1},{Id:392,optionList:["[3.0, 3.1, 3.14, 3.142, 3.1416]","['3.0', '3.1', '3.14', '3.142']","['3.0', '3.1', '3.14', '3.142', '3.1416']","['3.1', '3.14', '3.142', '3.1416']"],question:"What will be the output after the following statements?",codeBlock:`from math import pi 
a = [str(round(pi, i)) for i in range(0,5)] 
print(a)`,answer:2},{Id:393,optionList:["[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]","[[0, 4, 8], [1, 5, 9], [2, 6, 10], [3, 7, 11]]","[[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]","[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]"],question:"What will be the output after the following statements?",codeBlock:`a = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]] 
b = [[x[i] for x in a] for i in range(4)] 
print(b)`,answer:1},{Id:394,optionList:["[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]","[[0, 4, 8], [1, 5, 9], [2, 6, 10], [3, 7, 11]]","[[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]","[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]"],question:"What will be the output after the following statements?",codeBlock:`a = [] 
b = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]] 
for i in range(4):
    a.append([row[i] for row in b]) 
    
print(a)`,answer:1},{Id:395,optionList:["[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]","[[0, 4, 8], [1, 5, 9], [2, 6, 10], [3, 7, 11]]","[[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]","[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]"],question:"What will be the output after the following statements?",codeBlock:`a = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]] 
print(list(zip(*a)))`,answer:1},{Id:396,optionList:["None","Null","[0, 1, 2, 3]","NameError"],question:"What will be the output after the following statements?",codeBlock:`a = [0, 1, 2, 3] 
del a 
print(a)`,answer:3},{Id:397,optionList:["None","[]","[0, 1, 2, 3]","NameError"],question:"What will be the output after the following statements?",codeBlock:`a = [0, 1, 2, 3] 
del a[:] 
print(a)`,answer:1},{Id:398,optionList:["[0, 1, 2, 3, 4, 5]","[0, 1, 2, 3, 4]","[-4, -2, 0, 2, 4]","[0, 1, 4, 9, 16]"],question:"What will be the output after the following statements?",codeBlock:`x = [i*2-4 for i in range(5)] 
print(x)`,answer:2},{Id:399,optionList:["[-3, 6, 33]","[0, 1, 2, 3, 4]","[-3, -2, 0, 2, 3]","[-3, 9, 18, 36]"],question:"What will be the output after the following statements?",codeBlock:`x = [i**2-3 for i in range(0,7,3)] 
print(x)`,answer:0},{Id:400,optionList:["[0, 2, 36]","[0, 1, 2, 3, 4]","[0, 6, 2]","[0, 2, 14]"],question:"What will be the output after the following statements?",codeBlock:`x = [i**4//7 for i in range(0,6,2)] 
print(x)`,answer:0},{Id:401,optionList:["[0, 2, 36]","[0, 2, 21]","[0, 6, 2]","[0, 2, 14]"],question:"What will be the output after the following statements?",codeBlock:`x = [int(i**3/3) for i in range(0,5,2)] 
print(x)`,answer:1},{Id:402,optionList:["[-3, -2, -1]","[0, 2, 6]","[0, 1, 2]","[-3, -1, 3]"],question:"What will be the output after the following statements?",codeBlock:`x = [int(i/2-5) for i in range(3,8,2)] 
print(x)`,answer:0},{Id:403,optionList:['print("Hello World!")','print "Hello World!"','print("Hello World!")!','print("Hello World!"):'],question:"What is the famous one-line Hello World program of Python?",answer:0},{Id:404,optionList:["Three braces {{{ }}}","Three Colons ::: :::","Three hashes ### ###","Three Quotes ''' '''"],question:"What is used for multi-line strings in Python?",answer:3},{Id:405,optionList:["y ran for x minutes","y ran for 90 minutes","I ran for 90 minutes","I ran for x minutes"],question:"What will be the output after the following statements?",codeBlock:`x = 90 
y = 'I ran for %s minutes' 
print(y % x)`,answer:2},{Id:406,optionList:["ran for 60 minutes","she ran for 60 minutes","She ran for 60 minutes","x ran for 60 minutes"],question:"What will be the output after the following statements?",codeBlock:`x = 'She' 
y = 60 
z = 'ran for %s minutes' 
print(x, z % y)`,answer:2},{Id:407,optionList:["ran for 75 minutes","ran for 60 minutes","ran for 135 minutes","y ran for 60 minutes"],question:"What will be the output after the following statements?",codeBlock:`x = 75 
y = 60 
z = 'ran for %s minutes' 
print(z % y)`,answer:1},{Id:408,optionList:["He ran for 7 minutes for 7 days","He ran for 6 minutes for 6 days","He ran for 6 minutes for 7 days","He ran for 7 minutes for 6 days"],question:"What will be the output after the following statements?",codeBlock:`x = 7 
y = 6 
z = 'He ran for %s minutes for %s days' 
print(z % (x, y))`,answer:3},{Id:409,optionList:["We can not convert Python 2 program to Python 3 program","We can not convert Python 3 program to Python 2 program","We can convert Python 2 program to Python 3 program","We can convert Python 3 program to Python 2 program"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python 2' 
y = 'Python 3' 
z = 'We can convert %s program to %s program' 
print(z % (x, y))`,answer:2},{Id:410,optionList:["Displays a tab","Displays 5 spaces","Displays a newline","Displays 10 quotes"],question:"What will be the output after the following statements?",codeBlock:`x = ' ' 
print(x*5)`,answer:1},{Id:411,optionList:["'yes', 'may be', 'no'","'no', 'may be', 'yes'","['no', 'may be', 'yes']","['yes', 'may be', 'no']"],question:"What will be the output after the following statements?",codeBlock:`x = 'no' 
y = 'yes' 
z = 'may be' 
a = [y, z, x] 
print(a)`,answer:3},{Id:412,optionList:["Addition","Multiplication","Division","Deletion"],question:"Which of the following operations is not possible while manipulating lists?",answer:2},{Id:413,optionList:["Braces","Indentation","Commas","Expressions"],question:"Which of the following is used by interpreter to identify code blocks?",answer:1},{Id:414,optionList:["Yesterday's Today's Tomorrow's weather temperature humidity","Yesterday's weather temperature humidity","Yesterday's weather temperature humidity Today's Tomorrow's","Yesterday's weather Today's temperature Tomorrow's humidity"],question:"What will be the output after the following statements?",codeBlock:`x = ["Yesterday's", "Today's", "Tomorrow's"] 
y = ['weather', 'temperature', 'humidity'] 
for i in x:
    print(i, end=' ') 
    for j in y:         
        print(j, end=' ')`,answer:0},{Id:415,optionList:["Yesterday's Today's Tomorrow's temperature","Yesterday's temperature","Yesterday's temperature Today's Tomorrow's","Yesterday's temperature Today's temperature Tomorrow's temperature"],question:"What will be the output after the following statements?",codeBlock:`x = ["Yesterday's", "Today's", "Tomorrow's"] 
y = ['temperature'] 
for i in x:
    print(i, end=' ')     
    for j in y:         
        print(j, end=' ')`,answer:2},{Id:416,optionList:["Today's Tomorrow's temperature","Today's temperature Tomorrow's temperature","temperature Today's Tomorrow's","Today's temperature Tomorrow's"],question:"What will be the output after the following statements?",codeBlock:`x = ["Yesterday's", "Today's", "Tomorrow's"] y = ['temperature'] 
for i in x:         
    if i[0] == 'T':             
        for j in y:                 
            print(i, j, end=' ')`,answer:1},{Id:417,optionList:["Today's Tomorrow's temperature","Yesterday's temperature Tomorrow's temperature","Yesterday's","Yesterday's Today's Tomorrow's"],question:"What will be the output after the following statements?",codeBlock:`x = ["Yesterday's", "Today's", "Tomorrow's"] 
y = ['temperature'] 
for i in x:
    if i[0] != 'T':             
        for j in y:                 
            print(i, end=' ')`,answer:2},{Id:418,optionList:["temperature temperature","temperature","temperature temperature temperature","Yesterday's Today's Tomorrow's"],question:"What will be the output after the following statements?",codeBlock:`x = ["Yesterday's", "Today's", "Tomorrow's"] 
y = ['temperature'] 
for i in x:         
    if i[0] != 'y':             
        for j in y:                 
            print(j, end=' ')`,answer:2},{Id:419,optionList:["26 11","25 11","25 10","26 10"],question:"What will be the output after the following statements?",codeBlock:`x = 25 
y = 10 
while x < 26 and y < 11:
    x = x + 1     
    y = y + 1     
    
print(x,y)`,answer:0},{Id:420,optionList:["26 11","25 11","25 10","26 10"],question:"What will be the output after the following statements?",codeBlock:`x = 25
y = 10 
while x < 26 and y < 11:
    print(x,y)     
    x = x + 1     
    y = y + 1`,answer:2},{Id:421,optionList:["list(range(0,5))","list(0, 1, 2, 3, 4)","0, 1, 2, 3, 4","[0, 1, 2, 3, 4]"],question:"What will be the output after the following statement?",codeBlock:"print(list(range(0,5)))",answer:3},{Id:422,optionList:["hello world","hello Python","hello","hello % world"],question:"What will be the output after the following statements?",codeBlock:`def abc(world):     
    print('hello %s' % world) 
    
abc('Python')`,answer:1},{Id:423,optionList:["hello world","hello Python world","hello Python","hello world Python"],question:"What will be the output after the following statements?",codeBlock:`def abc(x, y):
    print('hello %s %s' % (y, x)) 
    
abc('Python', 'world')`,answer:3},{Id:424,optionList:["hello world","hello Python world","hello Python","hello world Python"],question:"What will be the output after the following statements?",codeBlock:`b = 'Python' 
a = 'world' 
def pypi(x, y):
    print('hello %s %s' % (y, x)) 
    
pypi(a, b)`,answer:1},{Id:425,optionList:["15","45","75","120"],question:"What will be the output after the following statements?",codeBlock:`a = 12 
b = 45
c = 10 
def pypi(x, y, z):     
    return(z * y - x) 

print(pypi(b, c, a))`,answer:2},{Id:426,optionList:["280","Error","60","215"],question:"What will be the output after the following statements?",codeBlock:`def pypi():     
    b = 25     
    c = 20     
    return(a * b - c) 

a = 12 
print(pypi())`,answer:0},{Id:427,optionList:["Furniture has 4 legs","Error","has 4 legs","legs has 4 legs"],question:"What will be the output after the following statements?",codeBlock:`class Furniture:     
    def legs(x):         
        print('has %s legs' % x)
        
Furniture.legs(4)`,answer:2},{Id:428,optionList:["Furniture is made of wood","is made of wood","print(is made of wood)","legs is made of wood"],question:"What will be the output after the following statements?",codeBlock:`class Furniture:     
    def legs():         
        print('is made of wood')
        
Furniture.legs()`,answer:1},{Id:429,optionList:["It has 4 legs","It has no legs","It has 0 legs","It has 6 legs"],question:"What will be the output after the following statements?",codeBlock:`class Furniture:     
    def chair(x):
        print('It has %s legs' % x)     
        
    def table(x):         
        print('It has %s legs' % x) 
        
Furniture.table(6)`,answer:3},{Id:430,optionList:["It has 4 legs","It has no legs","It has 0 legs","It has 6 legs"],question:"What will be the output after the following statements?",codeBlock:`class Furniture:     
    def chair():
        print('It has 4 legs')     
        
    def table():         
        print('It has 6 legs') 
        
Furniture.chair()`,answer:0},{Id:431,optionList:["None","Error","Wrong Value","This is absolute value"],question:"What will be the output after the following statements?",codeBlock:`x = -4 
if abs(x) > 0:     
    print('This is absolute value')`,answer:3},{Id:432,optionList:["No output","Error","0","-3"],question:"What will be the output after the following statements?",codeBlock:`x = -3 
if abs(x) < 3:     
    print(x) 
else:     
    print(0)`,answer:2},{Id:433,optionList:["No output","Error","0","-4"],question:"What will be the output after the following statements?",codeBlock:`x = -4 
if bool(x):     
    print(x) 
else:     
    print(0)`,answer:3},{Id:434,optionList:["No output","Error","5","0"],question:"What will be the output after the following statements?",codeBlock:`x = 0 
if bool(x):     
    print(x) 
else:     
    print(5)`,answer:2},{Id:435,optionList:["None","Yes","No","0"],question:"What will be the output after the following statements?",codeBlock:`x = 'None' 
if bool(x):     
    print('Yes') 
else:     
    print('No')`,answer:1},{Id:436,optionList:["None","Yes","No","0"],question:"What will be the output after the following statements?",codeBlock:`x = '' 
if bool(x):     
    print('Yes') 
else:
    print('No')`,answer:2},{Id:437,optionList:["None","Yes","No","0"],question:"What will be the output after the following statements?",codeBlock:`x = ' ' 
if bool(x):     
    print('Yes') 
else:     
    print('No')`,answer:1},{Id:438,optionList:["No","Yes","None","0"],question:"What will be the output after the following statements?",codeBlock:`x = [] 
if bool(x):     
    print('Yes') 
else:     
    print('No')`,answer:0},{Id:439,optionList:["No","Yes","None","0"],question:"What will be the output after the following statements?",codeBlock:`x = [1, 2, 3] 
if bool(x):     
    print('Yes') 
else:    
    print('No')`,answer:1},{Id:440,optionList:["Yes","No","None","0"],question:"What will be the output after the following statements?",codeBlock:`x = '' 
if not bool(x):     
    print('Yes') 
else:     
    print('No')`,answer:0},{Id:441,optionList:["x",'print("Python")',"Python","0"],question:"What will be the output after the following statements?",codeBlock:`x = 'print("Python")' 
eval(x)`,answer:2},{Id:442,optionList:["45*2",'eval("90")',"90","0"],question:"What will be the output after the following statements if input entered is 45*2?",codeBlock:`x = input("Enter an expression: ") 
print(eval(x))`,answer:2},{Id:443,optionList:["Python 3is Good","Python 3 is Good","Python 3","is Good"],question:"What will be the output after the following statements?",codeBlock:`x = '''print("Python 3", end='') print(" is Good")''' 
exec(x)`,answer:1},{Id:444,optionList:["a","A","b","c"],question:"What will be the output after the following statements?",codeBlock:`a = ['a', 'b', 'c', 'A', 'B'] 
print(max(a))`,answer:3},{Id:445,optionList:["a","A","b","c"],question:"What will be the output after the following statements?",codeBlock:`a = ['a', 'b', 'c', 'A', 'B'] 
print(min(a))`,answer:1},{Id:446,optionList:["a","A","1","c"],question:"What will be the output after the following statements?",codeBlock:`a = ['a', 'b', 'c', '1', '2', 'A', 'B'] 
print(max(a))`,answer:3},{Id:447,optionList:["a","A","1","c"],question:"What will be the output after the following statements?",codeBlock:`a = ['a', 'b', 'c', '1', '2', 'A', 'B'] 
print(min(a))`,answer:2},{Id:448,optionList:["3","2","1","6"],question:"What will be the output after the following statements?",codeBlock:`a = [1, 2, 3] 
print(sum(a))`,answer:3},{Id:449,optionList:["10","100","18","30"],question:"What will be the output after the following statements?",codeBlock:`a = list(range(0,10,3)) 
print(sum(a))`,answer:2},{Id:450,optionList:["10","0","18","90"],question:"What will be the output after the following statements?",codeBlock:`a = list(range(10,-10,3)) 
print(sum(a))`,answer:1},{Id:451,optionList:["-24","0","24","20"],question:"What will be the output after the following statements?",codeBlock:`a = list(range(-10,5,2))
print(sum(a))`,answer:0},{Id:452,optionList:["[6, 4, 3, 2, 1]","6","[5, 4, 3, 2, 1]","5"],question:"What will be the output after the following statements?",codeBlock:`x = [5, 4, 3, 2, 1] 
y = x.copy() 
x[0] = 6 
print(y)`,answer:2},{Id:453,optionList:["[6, 4, 3, 2, 1]","6","[5, 4, 3, 2, 1]","5"],question:"What will be the output after the following statements?",codeBlock:`import copy 
x = [5, 4, 3, 2, 1] 
y = copy.copy(x)
x.append(6) 
print(y[0])`,answer:3},{Id:454,optionList:["True","keyword","for","False"],question:"What will be the output after the following statements?",codeBlock:`import keyword 
print(keyword.iskeyword('IS'))`,answer:3},{Id:455,optionList:["True","keyword","for","False"],question:"What will be the output after the following statements?",codeBlock:`import keyword 
print(keyword.iskeyword('for'))`,answer:0},{Id:456,optionList:["True","keyword","for","False"],question:"What will be the output after the following statements?",codeBlock:`import keyword
print(keyword.iskeyword('Python'))`,answer:3},{Id:457,optionList:["A random element from the list x","The list x","A random element from the list x, excluding 3 and 0","A random element from the list elements 3 and 0"],question:"What will be the output after the following statements?",codeBlock:`import random 
x = [3, 8, 6, 5, 0] 
print(random.choice(x))`,answer:0},{Id:458,optionList:["A random element from the list x","The shuffled list x with the elements mixed up","A random element from the list x, excluding 3 and 0","A random element from the list elements 3 and 0"],question:"What will be the output after the following statements?",codeBlock:`import random 
x = [3, 8, 6, 5, 0] 
random.shuffle(x) 
print(x)`,answer:1},{Id:459,optionList:["A random element from the list x","The shuffled list x with the elements mixed up","None","A random element from the list x, excluding 3 and 0"],question:"What will be the output after the following statements?",codeBlock:`import random 
x = [3, 8, 6, 5, 0] 
y = random.shuffle(x) 
print(y)`,answer:2},{Id:460,optionList:["A random character from the string 'Python Jobs'","Python Jobs","None","PJ"],question:"What will be the output after the following statements?",codeBlock:`import sys
x = sys.stdout.write('Python Jobs')`,answer:1},{Id:461,optionList:["Current time in seconds since the Epoch at 00:00:00 GMT on January 1, 1970","Today's time in hours","None","Today's time in minutes"],question:"What will be the output after the following statements?",codeBlock:`import time 
print(time.time())`,answer:0},{Id:462,optionList:["String","Integer","List","Float"],question:"What will be the data type of the output after the following statements?",codeBlock:`import time 
print(time.time())`,answer:3},{Id:463,optionList:["String","Integer","List","Float"],question:"What will be the data type of the output after the following statements?",codeBlock:`import time 
print(time.asctime())`,answer:0},{Id:464,optionList:["Current time in seconds since the Epoch at 00:00:00 GMT on January 1, 1970","Current date and time","None","Today's time in minutes"],question:"What will be the output after the following statements?",codeBlock:`import time 
print(time.asctime())`,answer:1},{Id:465,optionList:["Current time in seconds since the Epoch at 00:00:00 GMT on January 1, 1970","Current date and time","Sat Feb 10 12:45:32 2016","No output"],question:"What will be the output after the following statements?",codeBlock:`import time 
y = (2016, 2, 10, 12, 45, 32, 5, 0, 0) 
print(time.asctime(y))`,answer:2},{Id:466,optionList:["2016","3:40","Mon","04"],question:"What is likely to be the output after the following statements?",codeBlock:`import time 
y = time.asctime() 
print(y[:3])`,answer:2},{Id:467,optionList:["10","A random integer number within the range of 0 to 9","None","A random floating point number within the range of 0 to 9"],question:"What will be the output after the following statements?",codeBlock:`import random 
print(int(random.random()*10))`,answer:1},{Id:468,optionList:["11","A random integer number within the range of 0 to 11","None","A random whole number within the range of 1 to 10"],question:"What will be the output after the following statements?",codeBlock:`import random
print(int(random.random()*10) + 1)`,answer:3},{Id:469,optionList:["A list of 5 unique numbers within the range of 0 to 19","A list of 5 unique numbers within the range of 0 to 20","A list of 4 unique numbers within the range of 0 to 19","A tuple of 5 unique numbers within the range of 0 to 19"],question:"What will be the output after the following statements?",codeBlock:`import random
print(random.sample(range(20), 5))`,answer:0},{Id:470,optionList:["A list of 5 unique numbers within the range of 4 to 19","A list of 5 unique numbers within the range of 5 to 20","A list of 4 unique numbers within the range of 5 to 19","A tuple of 4 unique numbers within the range of 5 to 19"],question:"What will be the output after the following statements?",codeBlock:`import random
print(random.sample(range(5, 20), 4))`,answer:2},{Id:471,optionList:["SyntaxError","TypeError","ValueError","NameError"],question:"What will be the output after the following statement?",codeBlock:"print(a)",answer:3},{Id:472,optionList:["SyntaxError","TypeError","ValueError","NameError"],question:"What will be the output after the following statement?",codeBlock:`a = "Python Practice'`,answer:0},{Id:473,optionList:["No Error","TypeError","ValueError","NameError"],question:"What will be the output after the following statement?",codeBlock:"a = true",answer:3},{Id:474,optionList:["undefined","Null","Nan","None"],question:"What is the value of the NoneType data type?",answer:3},{Id:475,optionList:["NameError","56","a = 56","xyz"],question:"What will be the output after the following statements?",codeBlock:`def xyz():     
    a = 56 
    
xyz()
print(a)`,answer:0},{Id:476,optionList:["NameError","40","10","32"],question:"What will be the output after the following statements?",codeBlock:`def xyz():     
    x = 40     
    abc()     
    
print(x) 
    
def abc():     
    a = 32     
    x = 10 
    
xyz()`,answer:1},{Id:477,optionList:["NameError","40","10","32"],question:"What will be the output after the following statements?",codeBlock:`def xyz():     
    x = 40
    
def abc():     
    xyz()     
    a = 32     
    x = 10     
    print(x) 
    
abc()`,answer:2},{Id:478,optionList:["NameError","x","10","0"],question:"What will be the output after the following statements?",codeBlock:`def abc():     
    print(x) 
    x = 10 
    
abc()`,answer:2},{Id:479,optionList:["NameError","12","10","0"],question:"What will be the output after the following statements?",codeBlock:`def abc():     
    x = 12
    
print(x) 
x = 10 
abc()`,answer:1},{Id:480,optionList:["NameError","12","10","0"],question:"What will be the output after the following statements?",codeBlock:`def abc():     
    x = 10     
    
print(x) 
abc() 
x = 12`,answer:2},{Id:481,optionList:["NameError","23","10","0"],question:"What will be the output after the following statements?",codeBlock:`def abc():     
    global x     
    x = 23
    
x = 10 
abc() 
print(x)`,answer:1},{Id:482,optionList:["NameError","20","10","UnboundLocalError"],question:"What will be the output after the following statements?",codeBlock:`def abc():     
    print(x)     
    
x = 10 
abc() 
x = 20`,answer:3},{Id:483,optionList:["NameError","5","5.0","ZeroDivisionError"],question:"What will be the output after the following statements?",codeBlock:`def abc(x):     
    return 20 / x 
    
print(abc(4))`,answer:2},{Id:484,optionList:["NameError","Undefined","5.0","ZeroDivisionError"],question:"What will be the output after the following statements?",codeBlock:`def abc(x):     
    return 20 / x 
    
print(abc(0))`,answer:3},{Id:485,optionList:["NameError","Not a valid argument","Not a valid argument None","ZeroDivisionError"],question:"What will be the output after the following statements?",codeBlock:`def abc(x):     
    try:
        print(20 / x)     
    except:         
        print('Not a valid argument', end=' ') 
        
print(abc(0))`,answer:2},{Id:486,optionList:["Not a valid argument 0 None","Not a valid argument","Not a valid argument None","ZeroDivisionError"],question:"What will be the output after the following statements?",codeBlock:`def abc(x):     
    try:
        print(20 / x)
    except:
        print('Not a valid argument', end=' ')     
    finally:         
        print(0, end=' ') 
        
print(abc(0))`,answer:0},{Id:487,optionList:["4","3","[1, 2, 3, 4]","IndexError"],question:"What will be the output after the following statements?",codeBlock:`x = [1, 2, 3, 4] 
print(x[4])`,answer:3},{Id:488,optionList:["20","30","[20]","IndexError"],question:"What will be the output after the following statements?",codeBlock:`x = [10, 20, 30, 40] 
print(x[20])`,answer:3},{Id:489,optionList:["2","3.0","TypeError","IndexError"],question:"What will be the output after the following statements?",codeBlock:`x = [1.0, 2.0, 3.0] 
print(x[2.0])`,answer:2},{Id:490,optionList:["2","3.0","TypeError","IndexError"],question:"What will be the output after the following statements?",codeBlock:`x = [1.0, 2.0, 3.0] 
print(x[int(2.0)])`,answer:1},{Id:491,optionList:["Today is a niceday","Today is a nice day","Todayis aniceday","Todayisaniceday"],question:"What will be the output after the following statements?",codeBlock:`x = ['Today', 'nice', 'day'] 
print(x[0] + ' is a ' + x[1] + x[2])`,answer:0},{Id:492,optionList:["Today was a great day","Sunday was a great day","TypeError","IndexError"],question:"What will be the output after the following statements?",codeBlock:`x = ['Today', 'Sunday', 'Monday']
print(x[0] + ' was a great day')`,answer:0},{Id:493,optionList:["Today was a great day","Sunday was a great day","Monday was a great day","IndexError"],question:"What will be the output after the following statements?",codeBlock:`x = ['Today', 'Sunday', 'Monday'] 
print(x[-1] + ' was a great day')`,answer:2},{Id:494,optionList:["Today was a great day","Sunday was a great day","Monday was a great day","IndexError"],question:"What will be the output after the following statements?",codeBlock:`x = ['Today', 'Sunday', 'Monday'] 
print(x[-3] + ' was a great day')`,answer:0},{Id:495,optionList:["Friday was a great day","Sunday was a great day","Monday was a great day","Yesterday was a great day"],question:"What will be the output after the following statements?",codeBlock:`x = ['Today', 'Sunday', 'Monday'] 
x[2] = 'Friday' 
x[1] = 'Yesterday'
print(x[-2] + ' was a great day')`,answer:3},{Id:496,optionList:["['Today', 'Sunday', 'Monday', 4, 6, 8]","[4, 6, 8, 'Today', 'Sunday', 'Monday']","['Today', 'Sunday', 'Monday']","[4, 6, 8]"],question:"What will be the output after the following statements?",codeBlock:`x = ['Today', 'Sunday', 'Monday'] 
y = [4, 6, 8] 
print(y + x)`,answer:1},{Id:497,optionList:["'Mon' in x","'Monday' in x","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = 'Monday' 
print('Mon' in x)`,answer:2},{Id:498,optionList:["'Day' not in x","'Monday' not in x","True","False"],question:"What will be the output after the following statements?",codeBlock:`x = 'Monday' 
print('Day' not in x)`,answer:2},{Id:499,optionList:["x","['hot', '100', True]","'hot', '100', True","hot 100 True"],question:"What will be the output after the following statements?",codeBlock:`x = ['hot', '100', True] 
weather = x[0] 
temperature = x[1] 
humid = x[2]
print(weather, temperature, humid)`,answer:3},{Id:500,optionList:["ValueError","['hot', '100', True]","'hot', '100', True","hot 100 True"],question:"What will be the output after the following statements?",codeBlock:`x = ['hot', '100', True] 
weather, temperature, humid = x 
print(weather, temperature, humid)`,answer:3},{Id:501,optionList:["ValueError","hot 100","hot True","hot 100 True"],question:"What will be the output after the following statements?",codeBlock:`x = ['hot', '100', True] 
weather, humid = x 
print(weather, humid)`,answer:0},{Id:502,optionList:["ValueError","hot 100","hot True","hot 100 True"],question:"What will be the output after the following statements?",codeBlock:`x = ['hot', '100', True]
x.remove('100') 
weather, humid = x 
print(weather, humid)`,answer:2},{Id:503,optionList:["SortError","['a', 'b', 'c', 'A', 'B', 'C']","['a', 'A', 'b', 'B', 'c', 'C']","['A', 'B', 'C', 'a', 'b', 'c']"],question:"What will be the output after the following statements?",codeBlock:`x = ['a', 'b', 'c', 'A', 'B', 'C']
x.sort() 
print(x)`,answer:3},{Id:504,optionList:["SortError","['a', 'b', 'c', 'A', 'B', 'C']","['a', 'A', 'b', 'B', 'c', 'C']","['A', 'B', 'C', 'a', 'b', 'c']"],question:"What will be the output after the following statements?",codeBlock:`x = ['a', 'b', 'c', 'A', 'B', 'C']
x.sort(key=str.lower) 
print(x)`,answer:2},{Id:505,optionList:["TypeError","['a', 'b', 'c', 'A', 'B', 'C']","['a', 'A', 'b', 'B', 'c', 'C']","['A', 'B', 'C', 'a', 'b', 'c']"],question:"What will be the output after the following statements?",codeBlock:`x = ['a', 'b', 'c', 'A', 'B', 'C']
x.sort(key=str.swapcase) 
print(x)`,answer:1},{Id:506,optionList:["TypeError","['a', 'b', 'c', 'A', 'B', 'C']","['a', 'A', 'b', 'B', 'c', 'C']","['A', 'B', 'C', 'a', 'b', 'c']"],question:"What will be the output after the following statements?",codeBlock:`x = ['a', 'b', 1, 2, 'A', 'B']
x.sort() 
print(x)`,answer:0},{Id:507,optionList:["IndexError","A random day from all the seven days","A random day from all the days except Sunday","A random day from all the days except Monday"],question:"What will be the output after the following statements?",codeBlock:`import random
x = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
print(x[random.randint(0, len(x) - 1)])`,answer:1},{Id:508,optionList:["SyntaxError","Today is a nice day","I will go for a walk today","Today is a nice day I will go for a walk today"],question:"What will be the output after the following statements?",codeBlock:`x = 'Today is a nice day' + \\
' I will go for a walk today' 
print(x)`,answer:3},{Id:509,optionList:["TypeError","Today is a nice day","SyntaxError","Today is not a nice day"],question:"What will be the output after the following statements?",codeBlock:`x = 'Today is a nice day' 
x[9] =  'not ' 
print(x)`,answer:0},{Id:510,optionList:["TypeError","Today is a nice day","SyntaxError","Today is not a nice day"],question:"What will be the output after the following statements?",codeBlock:`x = 'Today is a nice day' 
y =  x[:9] + 'not ' + x[9:] 
print(y)`,answer:3},{Id:511,optionList:["TypeError","Today is a nice day","SyntaxError","Today is not a nice day"],question:"What will be the output after the following statements?",codeBlock:`x = 'Today is a nice day' 
y =  x[:9] + 'not ' + x[9:] 
print(x)`,answer:1},{Id:512,optionList:["TypeError","Today is a nice day","SyntaxError","Today is not a nice day"],question:"What will be the output after the following statements?",codeBlock:`x =  'Today is not a nice day' 
x = 'Today is a nice day' 
print(x)`,answer:1},{Id:513,optionList:["TypeError","('Today', 'nice', 'day')","SyntaxError","('Today', 'not', 'nice', 'day')"],question:"What will be the output after the following statements?",codeBlock:`x =  ('Today', 'nice', 'day') 
x[1] = 'not' 
print(x)`,answer:0},{Id:514,optionList:["TypeError","String","Tuple","List"],question:"What will be the data type of the output after the following statements?",codeBlock:`x =  ('Today') 
print(x)`,answer:1},{Id:515,optionList:["TypeError","String","Tuple","List"],question:"What will be the data type of the output after the following statements?",codeBlock:`x =  ('Today',) 
print(x)`,answer:2},{Id:516,optionList:["TypeError","String","Tuple","List"],question:"What will be the data type of y after the following statements?",codeBlock:`x =  [1, 2, 3, 4] 
y = tuple(x)`,answer:2},{Id:517,optionList:["TypeError","String","Tuple","List"],question:"What will be the data type of z after the following statements?",codeBlock:`x =  [1, 2, 3, 4] 
y = tuple(x) 
z = list(y)`,answer:3},{Id:518,optionList:["TypeError","String","Tuple","List"],question:"What will be the data type of the output after the following statements?",codeBlock:`x =  'Python' 
y =  list(x) 
print(y)`,answer:3},{Id:519,optionList:["TypeError","String","Tuple","List"],question:"What will be the data type of the output after the following statements?",codeBlock:`x =  'Python' 
y =  tuple(x) 
print(y)`,answer:2},{Id:520,optionList:["('P', 'y', 't', 'h', 'o', 'n')","Python","P y t h o n","('Python')"],question:"What will be the output after the following statements?",codeBlock:`x =  ('Python') 
print(x)`,answer:1},{Id:521,optionList:["('Python',)","Python","P y t h o n","('Python')"],question:"What will be the output after the following statements?",codeBlock:`x =  ('Python',) 
print(x)`,answer:0},{Id:522,optionList:["[0, 2, 4, 6]","(0, 2, 4, 6)","0, 2, 4, 6","0 2 4 6"],question:"What will be the output after the following statements?",codeBlock:`x =  [0, 2, 4, 6] 
print(tuple(x))`,answer:1},{Id:523,optionList:["[0, 2, 4, 6]","(0, 2, 4, 6)","0, 2, 4, 6","0 2 4 6"],question:"What will be the output after the following statements?",codeBlock:`x =  (0, 2, 4, 6) 
print(list(x))`,answer:0},{Id:524,optionList:["('P', 'y', 't', 'h', 'o', 'n')","(Python)","['P', 'y', 't', 'h', 'o', 'n']","['Python']"],question:"What will be the output after the following statements?",codeBlock:`x =  'Python' 
print(list(x))`,answer:2},{Id:525,optionList:["('P', 'y', 't', 'h', 'o', 'n')","(Python)","['P', 'y', 't', 'h', 'o', 'n']","['Python']"],question:"What will be the output after the following statements?",codeBlock:`x =  'Python' 
print(tuple(x))`,answer:0},{Id:526,optionList:["[4, 5, 7, 8, 9]","[4, 5, 6, 7, 8, 9]","[4, 6, 7, 8, 9]","[4, 7, 8, 9]"],question:"What will be the output after the following statements?",codeBlock:`x =  [4, 5, 7, 8, 9] 
y = x 
y[1] = 6 
print(y)`,answer:2},{Id:527,optionList:["[4, 5, 7, 8, 9]","[4, 5, 6, 7, 8, 9]","[4, 6, 7, 8, 9]","[4, 7, 8, 9]"],question:"What will be the output after the following statements?",codeBlock:`x =  [4, 5, 7, 8, 9] 
y = x 
y[1] = 6 
print(x)`,answer:2},{Id:528,optionList:["[7, 8, 9]","[7, 8, 9, 44]","[7, 44, 8, 9]","[44, 7, 8, 9]"],question:"What will be the output after the following statements?",codeBlock:`def abc(z):
    z.append(44) 
    
x =  [7, 8, 9] 
abc(x) 
print(x)`,answer:1},{Id:529,optionList:["5","6","[5, 4, 3, 2, 1, 6]","1"],question:"What will be the output after the following statements?",codeBlock:`import copy 
x = [5, 4, 3, 2, 1] 
y = copy.copy(x)
x.append(6) 
print(y[-1])`,answer:3},{Id:530,optionList:["3","6","[5, 4, 6, 3, 2, 1]","4"],question:"What will be the output after the following statements?",codeBlock:`import copy 
x = [5, 4, 3, 2, 1] 
y = copy.copy(x) 
x[2] = 6 
print(y[2])`,answer:0},{Id:531,optionList:["[[5, 4, 3, 2, 1], [7, 8, 9]]","[[5, 4, 6, 2, 1], [7, 8, 9]]","[5, 4, 6, 3, 2, 1]","[5, 4, 6, 2, 1, 7, 8, 9]"],question:"What will be the output after the following statements?",codeBlock:`import copy 
x = [5, 4, 3, 2, 1] 
y = [7, 8, 9] 
z = [x, y] 
a = copy.copy(z) 
x[2] = 6 
print(a)`,answer:1},{Id:533,optionList:["day","KeyError","Sunday","10"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
print(x['year'])`,answer:1},{Id:534,optionList:["Sunday 10","KeyError","Sunday","10"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
for i in x.values():     
    print(i, end=' ')`,answer:0},{Id:535,optionList:["Sunday 10","day week","Sunday","10"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
for i in x.keys():     
    print(i, end=' ')`,answer:1},{Id:536,optionList:["('day', 'Sunday') ('week', 10)","day week","('week', 10)","('day', 'Sunday')"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
for i in x.items():     
    print(i, end=' ')`,answer:0},{Id:537,optionList:["(('week', 10), ('day', 'Sunday'))","('day', 'Sunday') ('week', 10)","['day', 'week']","(day, week)"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
print(list(x.keys()))`,answer:2},{Id:538,optionList:["(('week', 10), ('day', 'Sunday'))","('day', 'Sunday') ('week', 10)","['day', 'week']","(day, week)"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
print(tuple(x.items()))`,answer:0},{Id:539,optionList:["Sunday 10","('Sunday', 10)","['Sunday', 10]","10"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
print(tuple(x.values()))`,answer:1},{Id:540,optionList:["('day', 'Sunday') ('week', 10)","{'day':'Sunday', 'week':10}","'day':'Sunday', 'week':10","day Sunday week 10"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
for i, j in x.items():     
    print(i, j, end=' ')`,answer:3},{Id:541,optionList:["Sunday","True","False","day"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
print('day' in x.values())`,answer:2},{Id:542,optionList:["Sunday","True","False","day"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
print('day' in x.keys())`,answer:1},{Id:543,optionList:["Friday","True","Sunday","day"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
print(x.get('day', 'Friday'))`,answer:2},{Id:544,optionList:["Friday","True","Sunday","day"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
print(x.get('days', 'Friday'))`,answer:0},{Id:545,optionList:["10","5","Sunday","day"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
print(x.get('weak', 5))`,answer:1},{Id:546,optionList:["10","5","Sunday","day"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
print(x.get('week', 5))`,answer:0},{Id:547,optionList:["year","2016","Sunday","10"],question:"What will be the output after the following statements?",codeBlock:`x = {'day':'Sunday', 'week':10} 
print(x.get('year', 2016))`,answer:1},{Id:548,optionList:["('day', 'Tuesday')","{'day': 'Tuesday', 'month': 'March'}","'day': 'Tuesday', 'month': 'March', 'year': 2016","{'day': 'Tuesday', 'month': 'March', 'year': 2016}"],question:"What will be the output after the following statements?",codeBlock:`x = {'year': 2016, 'month': 'March'} 
if 'day' not in x:
    x['day'] = 'Tuesday' 
    
print(x)`,answer:3},{Id:549,optionList:["('day', 'Tuesday')","{'day': 'Tuesday', 'month': 'March'}","'day': 'Tuesday', 'month': 'March', 'year': 2016","{'day': 'Tuesday', 'month': 'March', 'year': 2016}"],question:"What will be the output after the following statements?",codeBlock:`x = {'year': 2016, 'month': 'March'}
x.setdefault('day', 'Tuesday') 
print(x)`,answer:3},{Id:550,optionList:["('day', 'Monday')","{'day': 'Monday', 'month': 'March'}","{'day': 'Tuesday', 'month': 'March', 'year': 2016}","{'day': 'Monday', 'month': 'March', 'year': 2016}"],question:"What will be the output after the following statements?",codeBlock:`x = {'year': 2016, 'month': 'March'}
x.setdefault('day', 'Tuesday')
x.setdefault('day', 'Monday') 
print(x)`,answer:2},{Id:551,optionList:["Tuple","Set","List","Dictionary"],question:"What will be the data type of x after the following statement?",codeBlock:"x = {}",answer:3},{Id:552,optionList:["Today is a \\n nice day","Today is a nice day","Today is a nice day","'Today is a \\n nice day'"],question:"What will be the output after the following statement?",codeBlock:"print(r'Today is a \\n nice day')",answer:0},{Id:553,optionList:["PYTHON JOBS","Python jobs","Python Jobs","python jobs"],question:"What will be the output after the following statements?",codeBlock:`x = 'python jobs'
x.upper()
print(x)`,answer:3},{Id:554,optionList:["PYTHON JOBS","Python jobs","Python Jobs","python jobs"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python Jobs'
x.lower() 
print(x)`,answer:2},{Id:555,optionList:["python 3 jobs","Python jobs","Python Jobs","python jobs"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python Jobs' 
if x.lower() == 'python jobs':
    print('Python jobs') 
else:     
    print('python 3 jobs')`,answer:1},{Id:556,optionList:["python 3 jobs","Python jobs","Python Jobs","python jobs"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python Jobs' 
if x.isupper():
    print('Python jobs') 
else:     
    print('python 3 jobs')`,answer:0},{Id:557,optionList:["python Jobs","PYTHON JOBS","Python Jobs","python jobs"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python Jobs' 
y = x.upper().lower().upper() 
print(y)`,answer:1},{Id:558,optionList:["python jobs","PYTHON JOBS","False","True"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python Jobs' 
y = x.upper().lower().isupper() 
print(y)`,answer:2},{Id:559,optionList:["'Python', 'is', 'interesting'","Python is interesting","Pythonisinteresting","['Python', 'is', 'interesting']"],question:"What will be the output after the following statements?",codeBlock:`x = ['Python', 'is', 'interesting'] 
y = ' '.join(x) 
print(y)`,answer:1},{Id:560,optionList:["'Python', 'is', 'interesting'","Python is interesting","Pythonisinteresting","['Python', 'is', 'interesting']"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python is interesting' 
y = x.split() 
print(y)`,answer:3},{Id:561,optionList:[`['Today is a nice day.', "Let's go for a walk.", "We'll also go to the park."]`,"Today is a nice day.","Let's go for a walk.","We'll also go to the park."],question:"What will be the output after the following statements?",codeBlock:`x = '''Today is a nice day.
Let's go for a walk. We'll also go to the park.''' 
y = x.split('\\n') 
print(y)`,answer:0},{Id:562,optionList:["Python 2","Python 3","Python 2 and Python 3","Python 2 Python 3"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python 2 and Python 3' 
print(x.strip('and'))`,answer:2},{Id:563,optionList:["Python 2","Python 2 and Py","Python 2 and Python 3","Python 2 Python 3"],question:"What will be the output after the following statements?",codeBlock:`x = 'Python 2 and Python 3' 
print(x.strip('thon 3'))`,answer:1},{Id:564,optionList:["A comment","Python String","Shebang line","Python Variable"],question:"What is the first line of the following statements on Windows?",codeBlock:"#! python3 x = 'Python 3'",answer:2},{Id:565,optionList:["The phone number is 444-4444","\\d\\d\\d-\\d\\d\\d\\d","444-4444","r'\\d\\d\\d-\\d\\d\\d\\d'"],question:"What will be the output after the following statements?",codeBlock:`import re x = re.compile(r'\\d\\d\\d-\\d\\d\\d\\d') 
y = x.search('The phone number is 444-4444') 
print(y.group())`,answer:2},{Id:566,optionList:["The phone number is 444-4444","4444","444-4444","444"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(\\d\\d\\d)-(\\d\\d\\d\\d)') 
y = x.search('The phone number is 444-4444') 
print(y.group(2))`,answer:1},{Id:567,optionList:["The phone number is 444-4444","4444","444-4444","444"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(\\d\\d\\d)-(\\d\\d\\d\\d)') 
y = x.search('The phone number is 444-4444') 
print(y.group(1))`,answer:3},{Id:568,optionList:["The phone number is 444-4444","4444","444-4444","444"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(\\d\\d\\d)-(\\d\\d\\d\\d)') 
y = x.search('The phone number is 444-4444') 
print(y.group(0))`,answer:2},{Id:569,optionList:["('444', '4444')","4444","444-4444","444"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(\\d\\d\\d)-(\\d\\d\\d\\d)') 
y = x.search('The phone number is 444-4444') 
print(y.groups())`,answer:0},{Id:570,optionList:["('444', '4444')","444","444-4444","(444)"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(\\(\\d\\d\\d\\))-(\\d\\d\\d\\d)') 
y = x.search('The phone number is (444)-4444') 
print(y.group(1))`,answer:3},{Id:571,optionList:["Python 2|Python 3","Python 2","Python 3","Python 3 MCQ"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'Python 2|Python 3') 
y = x.search('Python 3 MCQ') 
print(y.group())`,answer:2},{Id:572,optionList:["Python 2.7","Python 2","Python 3","Python 2|Python 3"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'Python 2|Python 3') 
y = x.search('Python 2.7') 
print(y.group())`,answer:1},{Id:573,optionList:["day","Today","nice day","Sunday"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'day') 
y = x.search('Today is a nice day and a Sunday') 
print(y.group())`,answer:0},{Id:574,optionList:["day","Today","nice day","Sunday"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(Sun)?day') 
y = x.search('Today is a nice day and a Sunday') 
print(y.group())`,answer:0},{Id:575,optionList:["day","Today","nice day","Sunday"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(Sun|To)?day') 
y = x.search('Today is a nice day and a Sunday') 
print(y.group())`,answer:1},{Id:576,optionList:["nice day","Today","day","Sunday"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(Sun)*day') 
y = x.search('Today is a nice day and a Sunday') 
print(y.group())`,answer:2},{Id:577,optionList:["day","Today","nice day","Sunday"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(Sun)+day') 
y = x.search('Today is a nice day and a Sunday') 
print(y.group())`,answer:3},{Id:578,optionList:["PythonPythonPython","PythonPython","Python","Python 2"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(Python){2}') 
y = x.search('PythonPythonPython') 
print(y.group())`,answer:1},{Id:579,optionList:["PythonPythonPython","PythonPython","Python","Python 2"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(Python){2,3}') 
y = x.search('PythonPythonPython') 
print(y.group())`,answer:0},{Id:580,optionList:["PythonPythonPython","PythonPython","Python","Python 2"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(Python){1,3}?') 
y = x.search('PythonPythonPython') 
print(y.group())`,answer:2},{Id:581,optionList:["day","Today","['day', 'day', 'day']","('day', 'day', 'day')"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'day') 
y = x.findall('Today is a nice day and a Sunday') 
print(y)`,answer:2},{Id:582,optionList:["('day', 'day', 'day')","['', '', 'Sun']","['day', 'day', 'day']","Sunday"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(Sun)?day') 
y = x.findall('Today is a nice day and a Sunday') 
print(y)`,answer:1},{Id:583,optionList:["('day', 'day', 'day')","['', '', 'Sun']","['day', 'day', 'day']","['To', '', 'Sun']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(Sun|To)?day') 
y = x.findall('Today is a nice day and a Sunday') 
print(y)`,answer:3},{Id:584,optionList:["('day', 'day', 'day')","['', '', 'Sun']","['day', 'day', 'day']","['To', '', 'Sun']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(Sun)*day') 
y = x.findall('Today is a nice day and a Sunday') 
print(y)`,answer:1},{Id:585,optionList:["['', '', 'Sun']","['Sun']","['day', 'day', 'day']","['To', '', 'Sun']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(Sun)+day') 
y = x.findall('Today is a nice day and a Sunday') 
print(y)`,answer:1},{Id:586,optionList:["[('(444)', '4444')]","[('444)', '4444']","(('(444)', '4444'))","('444', '4444')"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(\\(\\d\\d\\d\\))-(\\d\\d\\d\\d)') 
y = x.findall('The phone number is (444)-4444') 
print(y)`,answer:0},{Id:587,optionList:["[('(444)', '4444')]","'4', '4', '4', '4', '4', '4', '4'","(('(444)', '4444'))","['4', '4', '4', '4', '4', '4', '4']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'\\d') 
y = x.findall('The phone number is (444)-4444') 
print(y)`,answer:3},{Id:588,optionList:["['Python', '3']","['P', 'y', 't', 'h', 'o', 'n', ' ', '3']","['P', 'y', 't', 'h', 'o', 'n', ' ']","['P', 'y', 't', 'h', 'o', 'n']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'\\D') 
y = x.findall('Python 3') 
print(y)`,answer:2},{Id:589,optionList:["['Python', '3']","['P', 'y', 't', 'h', 'o', 'n', '3']","['P', 'y', 't', 'h', 'o', 'n', ' ']","['P', 'y', 't', 'h', 'o', 'n', '_', '3']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'\\w') 
y = x.findall('Python_3') 
print(y)`,answer:3},{Id:590,optionList:["['Python', '3']","[]","['P', 'y', 't', 'h', 'o', 'n', ' ']","[' ']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'\\W') 
y = x.findall('Python_3') 
print(y)`,answer:1},{Id:591,optionList:["['Python', '3']","[]","['P', 'y', 't', 'h', 'o', 'n', ' ']","[' ']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'\\s') 
y = x.findall('Python 3') 
print(y)`,answer:3},{Id:592,optionList:["['P', 'y', 't', 'h', 'o', 'n', '3']","[]","['P', 'y', 't', 'h', 'o', 'n', ' ']","[' ']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'\\S') 
y = x.findall('Python 3') 
print(y)`,answer:0},{Id:593,optionList:["['P', 'y', 't', 'h', 'o', 'n', '3']","[]","['3']","[' ']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'[0-9]') 
y = x.findall('Python 3') 
print(y)`,answer:2},{Id:594,optionList:["['P', 't', 'h', 'o', 'n']","['P', 't']","[]","[' ']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'[ptPT]') 
y = x.findall('Python 3') 
print(y)`,answer:1},{Id:595,optionList:["['P', 't', '3']","['P', 't']","[]","['t', '3']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'[p-t0-6]') 
y = x.findall('Python 3') 
print(y)`,answer:3},{Id:596,optionList:["['P', 't', '3']","['P', 't']","['P']","['t', '3']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'[D-S0-2]') 
y = x.findall('Python 3') 
print(y)`,answer:2},{Id:597,optionList:["['P', 't']","[' ', '3']","['t', '3']"],question:"What will be the output after the following statements?",answer:0},{Id:598,optionList:["['Py']","Py","['P', 'y']","['P', 'y', '3']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'^Py') 
y = x.search('Python_3') 
print(y.group())`,answer:1},{Id:599,optionList:["['3']","Python_3","True","False"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'3$') 
print(x.search('Python_3') == None)`,answer:3},{Id:600,optionList:["['oday', 'nday']","['oday', ' day', 'nday']","['day', 'day', 'day']","['Today', ' day', 'Sunday']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'.day') 
y = x.findall('Today is a nice day and a Sunday') 
print(y)`,answer:1},{Id:601,optionList:["['To']","['Today is a nice day and a Sunday']","['Today is a nice day and a Sun']","['Today is a nice day']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(.*)day') 
y = x.findall('Today is a nice day and a Sunday') 
print(y)`,answer:2},{Id:602,optionList:["['To', ' is a nice ', ' and a Sun']","['Today is a nice day and a Sunday']","['Today is a nice day and a Sun']","['Today is a nice day']"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile(r'(.*?)day') 
y = x.findall('Today is a nice day and a Sunday') 
print(y)`,answer:0},{Id:603,optionList:["Today is a nice day.\\n Let's go for a walk.\\n We'll also go to the park.","Today is a nice day.\\n Let's go for a walk.","['Today is a nice day.']","Today is a nice day."],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile('.*') 
y = x.search("Today is a nice day.\\n Let's go for a walk.\\n We'll also go to the park.") 
print(y.group())`,answer:3},{Id:604,optionList:["Today is a nice day. Let's go for a walk. We'll also go to the park.","Today is a nice day.\\n Let's go for a walk.","['Today is a nice day.']","Today is a nice day."],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile('.*', re.DOTALL) 
y = x.search("Today is a nice day.\\n Let's go for a walk.\\n We'll also go to the park.") 
print(y.group())`,answer:0},{Id:605,optionList:["Today is a nice day.","None","['Today is a nice day.']","(Today is a nice day.)"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile('Day') 
y = x.search('Today is a nice day') 
print(y)`,answer:1},{Id:606,optionList:["Today is a nice day.","None","['Today is a nice day.']","day"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile('Day', re.I) 
y = x.search('Today is a nice day') 
print(y.group())`,answer:3},{Id:607,optionList:["[Today is a nice day.]","['day', 'day']","['day', 'day', 'day']","day"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile('day', re.IGNORECASE) 
y = x.findall('Today is a nice day and a Sunday') 
print(y)`,answer:2},{Id:608,optionList:["Today is a nice day","Today is a nice day and a Sunday","['Sunday']","Today is a nice day and a Wednesday"],question:"What will be the output after the following statements?",codeBlock:`import re 
x = re.compile('Sunday') 
y = x.sub('Wednesday', 'Today is a nice day and a Sunday') 
print(y)`,answer:3},{Id:609,optionList:["Name of the operating system","Version of the operating system","The current working directory","Name of the current file"],question:"What will be the output after the following statements?",codeBlock:`import os 
x = os.getcwd() 
print(x)`,answer:2},{Id:610,optionList:["Ping http://google.com","Display http://google.com in the shell","Download http://google.com as a text file","Launch a browser window to http://google.com"],question:"What do the following statements do?",codeBlock:`import webbrowser
webbrowser.open('http://google.com')`,answer:3},{Id:611,optionList:["A set of the program's filename and command line arguments","A list of the program's filename and command line arguments","A tuple of the program's filename and command line arguments","A dictionary of the program's filename and command line arguments"],question:"What will be the output after the following statements?",codeBlock:`import sys 
print(sys.argv)`,answer:1}]}};var oo=class{questionCollection;questionCompleteList;questionList;currentQuestionIndex=0;constructor(t){t=="python"?this.questionCollection=new no:this.questionCollection=new no,this.questionCompleteList=this.questionCollection.get(),this.questionList=this.shuffleArray([...this.questionCompleteList]).slice(0,5);let e=this.questionList.map(n=>{let i=this.shuffleArray([...n.optionList]),d=i.indexOf(n.optionList[n.answer-1])+1;return O(g({},n),{optionList:i,answer:d})});this.questionList=e}shuffleArray(t){for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}getList(t){return this.questionList}getCompleteList(){return this.questionCompleteList}getCurrent(){return this.questionList[this.currentQuestionIndex]}getAnswer(){return this.questionList[this.currentQuestionIndex].answer}moveToNext(){let t=!1;if(++this.currentQuestionIndex,this.currentQuestionIndex==this.questionList.length)this.currentQuestionIndex=0,t=!0;else{let e=this.questionList[this.currentQuestionIndex]}return t}};var Bi=class{participantList=new Ni;registerParticipant(t,e){return this.participantList.add(t,e)}getParticipantList(){return this.participantList.getList()}getQuestionList(t){return new oo(t).getList(0)}getCompleteQuestionList(t){return new oo(t).getCompleteList()}updateScore(t,e,n){let i=this.participantList.getById(t);i&&(i.score=e,i.timespent=n)}};var cn=class o{constructor(t){this.http=t;this.qns=[],this.seconds=0,this.qnProgress=0}rootUrl=window.location.origin;serverRoutes=new Bi;qns;seconds;timer;qnProgress;correctAnswerCount=0;displayTimeElapsed(){return Math.floor(this.seconds/3600)+":"+Math.floor(this.seconds/60)+":"+Math.floor(this.seconds%60)}getRandomIndex(t){let e=new Set;for(;e.size!==20;)e.add(Math.floor(Math.random()*t)+1);return[...e]}getParticipantName(){var t=JSON.parse(localStorage.getItem("participant")||"{}");return t.name||t.Name||"Guest"}insertParticipant(t,e){let n=this.serverRoutes.registerParticipant(t,e);return localStorage.setItem("participant",JSON.stringify(n)),E(n)}getParticipantList(){return E(this.serverRoutes.getParticipantList())}getQuestions(t){let n=this.serverRoutes.getQuestionList(t);return E(n)}getCompleteQuestionList(t){let e=this.serverRoutes.getCompleteQuestionList(t);return E(e)}submitScore(){var t=JSON.parse(localStorage.getItem("participant")||"{}");return t.Score=this.correctAnswerCount,t.TimeSpent=this.seconds,this.serverRoutes.updateScore(t.Id,t.Score,t.TimeSpent),E(!0)}static \u0275fac=function(e){return new(e||o)(x(nt))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})};var qi=class o{constructor(t,e){this.quizService=t;this.route=e}emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";ngOnInit(){localStorage.getItem("participant")!=null&&this.route.navigate(["/les1"])}OnSubmit(t,e){this.quizService.insertParticipant(t,e).subscribe(n=>{localStorage.clear(),localStorage.setItem("participant",JSON.stringify(n)),this.route.navigate(["/les1"])})}static \u0275fac=function(e){return new(e||o)(N(cn),N(Q))};static \u0275cmp=C({type:o,selectors:[["app-register"]],decls:25,vars:2,consts:[["registerForm","ngForm"],["name",""],["email",""],[1,"register-wrapper"],[1,"card","register-card"],[1,"register-title"],[1,"register-subtitle"],[1,"register-form",3,"ngSubmit"],[1,"form-group"],["for","name",1,"form-label"],[1,"input-wrapper"],["type","text","id","name","name","Name","placeholder","John Doe","required","",1,"input"],["for","email",1,"form-label"],["type","email","id","email","name","Email","placeholder","john@example.com","required","",1,"input",3,"pattern"],["type","submit",1,"btn","btn-primary","register-btn",3,"disabled"]],template:function(e,n){if(e&1){let i=ne();h(0,"div",3)(1,"div",4)(2,"h2",5),r(3,"Welcome to Python Learning"),y(),h(4,"p",6),r(5,"Sign up to track your learning progress, take quizzes, and view the global leaderboard."),y(),h(6,"form",7,0),H("ngSubmit",function(){K(i);let d=qt(13),c=qt(19);return X(n.OnSubmit(d.value,c.value))}),h(8,"div",8)(9,"label",9),r(10,"Full Name"),y(),h(11,"div",10),qe(12,"input",11,1),y()(),h(14,"div",8)(15,"label",12),r(16,"Email Address"),y(),h(17,"div",10),qe(18,"input",13,2),y()(),h(20,"button",14)(21,"span"),r(22,"Get Started"),y(),h(23,"mat-icon"),r(24,"arrow_forward"),y()()()()()}if(e&2){let i=qt(7);b(18),A("pattern",n.emailPattern),b(2),A("disabled",!i.valid)}},dependencies:[et,vd,bd,hd,ha,sn,an],styles:[".register-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:70vh;padding:2rem}.register-card[_ngcontent-%COMP%]{max-width:460px;width:100%;text-align:center}.register-title[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:800;background:linear-gradient(135deg,var(--color-accent),var(--color-accent-purple));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:.5rem}.register-subtitle[_ngcontent-%COMP%]{color:var(--color-secondary);font-size:.95rem;margin-bottom:2rem;line-height:1.6}.register-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem}.form-group[_ngcontent-%COMP%]{text-align:left}.form-label[_ngcontent-%COMP%]{display:block;font-weight:600;font-size:.85rem;color:var(--color-text);margin-bottom:.5rem;letter-spacing:.01em}.input-wrapper[_ngcontent-%COMP%]{position:relative}.register-btn[_ngcontent-%COMP%]{width:100%;margin-top:.75rem;padding:.95rem 0;font-size:1rem}"]})};var zi=class o{constructor(t){this.router=t}canActivate(t,e){return localStorage.getItem("participant")!=null?!0:(this.router.navigate(["/register"]),!1)}static \u0275fac=function(e){return new(e||o)(x(Q))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})};var Ed=[{path:"register",component:qi},{path:"",canActivate:[zi],children:[{path:"",redirectTo:"lessons",pathMatch:"full"},{path:"home",component:Ei},{path:"lessons",component:gi},{path:"les1",component:yi},{path:"les2",component:bi},{path:"les3",component:vi},{path:"les4",component:wi},{path:"les5",component:Di},{path:"les6",component:Ai},{path:"les7",component:Ti},{path:"les8",component:Ii},{path:"les9",component:Mi},{path:"les10",component:Pi},{path:"quiz/:lessonId",component:Si},{path:"quiz-list",component:Li}]}];var bp="@",vp=(()=>{class o{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=p(se);loadingSchedulerFn=p(wp,{optional:!0});_engine;constructor(e,n,i,l,d){this.doc=e,this.delegate=n,this.zone=i,this.animationType=l,this.moduleImpl=d}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-3TPEDWMG.js").then(i=>i),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(i=>{throw new D(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:l})=>{this._engine=i(this.animationType,this.doc);let d=new l(this.delegate,this._engine,this.zone);return this.delegate=d,d})}createRenderer(e,n){let i=this.delegate.createRenderer(e,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let l=new ga(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(d=>{let c=d.createRenderer(e,n);l.use(c),this.scheduler??=this.injector.get(Ba,null,{optional:!0}),this.scheduler?.notify(10)}).catch(d=>{l.use(i)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){vo()};static \u0275prov=v({token:o,factory:o.\u0275fac})}return o})(),ga=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,i){this.delegate.insertBefore(t,e,n,i)}removeChild(t,e,n,i){this.delegate.removeChild(t,e,n,i)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,i){this.delegate.setAttribute(t,e,n,i)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,i){this.delegate.setStyle(t,e,n,i)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n,i){return this.shouldReplay(e)&&this.replay.push(l=>l.listen(t,e,n,i)),this.delegate.listen(t,e,n,i)}shouldReplay(t){return this.replay!==null&&t.startsWith(bp)}},wp=new _("");function xd(o="animations"){return gn("NgAsyncAnimations"),ht([{provide:Qe,useFactory:()=>new vp(p(T),p(Mn),p(ee),o)},{provide:fo,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var _d={providers:[_r(),ta(Ed),ds({eventCoalescing:!0}),xd()]};function io(o){return o.buttons===0||o.detail===0}function ro(o){let t=o.touches&&o.touches[0]||o.changedTouches&&o.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var ya;function Cd(){if(ya==null){let o=typeof document<"u"?document.head:null;ya=!!(o&&(o.createShadowRoot||o.attachShadow))}return ya}function ba(o){if(Cd()){let t=o.getRootNode?o.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function Oe(o){return o.composedPath?o.composedPath()[0]:o.target}var va;try{va=typeof Intl<"u"&&Intl.v8BreakIterator}catch(o){va=!1}var Ge=(()=>{class o{_platformId=p(Ot);isBrowser=this._platformId?Es(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||va)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ao;function Sd(){if(ao==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ao=!0}))}finally{ao=ao||!1}return ao}function un(o){return Sd()?o:!!o.capture}function ct(o){return o instanceof ye?o.nativeElement:o}var Dd=new _("cdk-input-modality-detector-options"),Id={ignoreKeys:[18,17,224,91,16]},Md=650,wa={passive:!0,capture:!0},Pd=(()=>{class o{_platform=p(Ge);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new me(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Oe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Md||(this._modality.next(io(e)?"keyboard":"mouse"),this._mostRecentTarget=Oe(e))};_onTouchstart=e=>{if(ro(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Oe(e)};constructor(){let e=p(ee),n=p(T),i=p(Dd,{optional:!0});if(this._options=g(g({},Id),i),this.modalityDetected=this._modality.pipe(La(1)),this.modalityChanged=this.modalityDetected.pipe(Aa()),this._platform.isBrowser){let l=p(Qe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[l.listen(n,"keydown",this._onKeydown,wa),l.listen(n,"mousedown",this._onMousedown,wa),l.listen(n,"touchstart",this._onTouchstart,wa)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),so=(function(o){return o[o.IMMEDIATE=0]="IMMEDIATE",o[o.EVENTUAL=1]="EVENTUAL",o})(so||{}),Ad=new _("cdk-focus-monitor-default-options"),Wi=un({passive:!0,capture:!0}),Ea=(()=>{class o{_ngZone=p(ee);_platform=p(Ge);_inputModalityDetector=p(Pd);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=p(T);_stopInputModalityDetector=new ue;constructor(){let e=p(Ad,{optional:!0});this._detectionMode=e?.detectionMode||so.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=Oe(e);for(let i=n;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,n=!1){let i=ct(e);if(!this._platform.isBrowser||i.nodeType!==1)return E();let l=ba(i)||this._document,d=this._elementInfo.get(i);if(d)return n&&(d.checkChildren=!0),d.subject;let c={checkChildren:n,subject:new ue,rootNode:l};return this._elementInfo.set(i,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let n=ct(e),i=this._elementInfo.get(n);i&&(i.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(i))}focusVia(e,n,i){let l=ct(e),d=this._document.activeElement;l===d?this._getClosestElementsInfo(l).forEach(([c,u])=>this._originChanged(c,n,u)):(this._setOrigin(n),typeof l.focus=="function"&&l.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===so.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===so.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?Md:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,n){let i=this._elementInfo.get(n),l=Oe(e);!i||!i.checkChildren&&n!==l||this._originChanged(n,this._getFocusOrigin(l),i)}_onBlur(e,n){let i=this._elementInfo.get(n);!i||i.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(i,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Wi),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Wi)}),this._rootNodeFocusListenerCount.set(n,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Tt(this._stopInputModalityDetector)).subscribe(l=>{this._setOrigin(l,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let i=this._rootNodeFocusListenerCount.get(n);i>1?this._rootNodeFocusListenerCount.set(n,i-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Wi),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Wi),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,i){this._setClasses(e,n),this._emitOrigin(i,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((i,l)=>{(l===e||i.checkChildren&&l.contains(e))&&n.push([l,i])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let l=e.labels;if(l){for(let d=0;d<l.length;d++)if(l[d].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Td=new Set,Mt,xa=(()=>{class o{_platform=p(Ge);_nonce=p(Ft,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):xp}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ep(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function Ep(o,t){if(!Td.has(o))try{Mt||(Mt=document.createElement("style"),t&&Mt.setAttribute("nonce",t),Mt.setAttribute("type","text/css"),document.head.appendChild(Mt)),Mt.sheet&&(Mt.sheet.insertRule(`@media ${o} {body{ }}`,0),Td.add(o))}catch(e){console.error(e)}}function xp(o){return{matches:o==="all"||o==="",media:o,addListener:()=>{},removeListener:()=>{}}}var _p=new _("MATERIAL_ANIMATIONS"),Ld=null;function Cp(){return p(_p,{optional:!0})?.animationsDisabled||p(fo,{optional:!0})==="NoopAnimations"?"di-disabled":(Ld??=p(xa).matchMedia("(prefers-reduced-motion)").matches,Ld?"reduced-motion":"enabled")}function ji(){return Cp()!=="enabled"}var Pe=(function(o){return o[o.FADING_IN=0]="FADING_IN",o[o.VISIBLE=1]="VISIBLE",o[o.FADING_OUT=2]="FADING_OUT",o[o.HIDDEN=3]="HIDDEN",o})(Pe||{}),_a=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Pe.HIDDEN;constructor(t,e,n,i=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},kd=un({passive:!0,capture:!0}),Ca=class{_events=new Map;addHandler(t,e,n,i){let l=this._events.get(e);if(l){let d=l.get(n);d?d.add(i):l.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,kd)})}removeHandler(t,e,n){let i=this._events.get(t);if(!i)return;let l=i.get(e);l&&(l.delete(n),l.size===0&&i.delete(e),i.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,kd)))}_delegateEventHandler=t=>{let e=Oe(t);e&&this._events.get(t.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(l=>l.handleEvent(t))})}},lo={enterDuration:225,exitDuration:150},Sp=800,Od=un({passive:!0,capture:!0}),Fd=["mousedown","touchstart"],Rd=["mouseup","mouseleave","touchend","touchcancel"],Dp=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=C({type:o,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return o})(),Ui=class o{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ca;constructor(t,e,n,i,l){this._target=t,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=ct(n)),l&&l.get(Yn).load(Dp)}fadeInRipple(t,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),l=g(g({},lo),n.animation);n.centered&&(t=i.left+i.width/2,e=i.top+i.height/2);let d=n.radius||Ip(t,e,i),c=t-i.left,u=e-i.top,m=l.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${c-d}px`,f.style.top=`${u-d}px`,f.style.height=`${d*2}px`,f.style.width=`${d*2}px`,n.color!=null&&(f.style.backgroundColor=n.color),f.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(f);let w=window.getComputedStyle(f),P=w.transitionProperty,ie=w.transitionDuration,J=P==="none"||ie==="0s"||ie==="0s, 0s"||i.width===0&&i.height===0,W=new _a(this,f,n,J);f.style.transform="scale3d(1, 1, 1)",W.state=Pe.FADING_IN,n.persistent||(this._mostRecentTransientRipple=W);let M=null;return!J&&(m||l.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let L=()=>{M&&(M.fallbackTimer=null),clearTimeout(ce),this._finishRippleTransition(W)},j=()=>this._destroyRipple(W),ce=setTimeout(j,m+100);f.addEventListener("transitionend",L),f.addEventListener("transitioncancel",j),M={onTransitionEnd:L,onTransitionCancel:j,fallbackTimer:ce}}),this._activeRipples.set(W,M),(J||!m)&&this._finishRippleTransition(W),W}fadeOutRipple(t){if(t.state===Pe.FADING_OUT||t.state===Pe.HIDDEN)return;let e=t.element,n=g(g({},lo),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",t.state=Pe.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=ct(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Fd.forEach(n=>{o._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Rd.forEach(e=>{this._triggerElement.addEventListener(e,this,Od)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===Pe.FADING_IN?this._startFadeOutTransition(t):t.state===Pe.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=Pe.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=Pe.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=io(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Sp;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!ro(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===Pe.VISIBLE||t.config.terminateOnPointerUp&&t.state===Pe.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Fd.forEach(e=>o._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(Rd.forEach(e=>t.removeEventListener(e,this,Od)),this._pointerUpEventsRegistered=!1))}};function Ip(o,t,e){let n=Math.max(Math.abs(o-e.left),Math.abs(o-e.right)),i=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+i*i)}var Nd=new _("mat-ripple-global-options");var Mp={capture:!0},Pp=["focus","mousedown","mouseenter","touchstart"],Sa="mat-ripple-loader-uninitialized",Da="mat-ripple-loader-class-name",Bd="mat-ripple-loader-centered",Vi="mat-ripple-loader-disabled",qd=(()=>{class o{_document=p(T);_animationsDisabled=ji();_globalRippleOptions=p(Nd,{optional:!0});_platform=p(Ge);_ngZone=p(ee);_injector=p(se);_eventCleanups;_hosts=new Map;constructor(){let e=p(Qe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Pp.map(n=>e.listen(this._document,n,this._onInteraction,Mp)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(Sa,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(Da))&&e.setAttribute(Da,n.className||""),n.centered&&e.setAttribute(Bd,""),n.disabled&&e.setAttribute(Vi,"")}setDisabled(e,n){let i=this._hosts.get(e);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):n?e.setAttribute(Vi,""):e.removeAttribute(Vi)}_onInteraction=e=>{let n=Oe(e);if(n instanceof HTMLElement){let i=n.closest(`[${Sa}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(Da)),e.append(n);let i=this._globalRippleOptions,l=this._animationsDisabled?0:i?.animation?.enterDuration??lo.enterDuration,d=this._animationsDisabled?0:i?.animation?.exitDuration??lo.exitDuration,c={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(Vi),rippleConfig:{centered:e.hasAttribute(Bd),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:l,exitDuration:d}}},u=new Ui(c,this._ngZone,n,this._platform,this._injector),m=!c.rippleDisabled;m&&u.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:u,hasSetUpEvents:m}),e.removeAttribute(Sa)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var zd=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=C({type:o,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return o})();var Ap=new _("MAT_BUTTON_CONFIG");function Wd(o){return o==null?void 0:ir(o)}var jd=(()=>{class o{_elementRef=p(ye);_ngZone=p(ee);_animationsDisabled=ji();_config=p(Ap,{optional:!0});_focusMonitor=p(Ea);_cleanupClick;_renderer=p(yt);_rippleLoader=p(qd);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){p(Yn).load(zd);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||o)};static \u0275dir=$({type:o,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,i){n&2&&(Ze("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),xo(i.color?"mat-"+i.color:""),te("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Ee],disabled:[2,"disabled","disabled",Ee],ariaDisabled:[2,"aria-disabled","ariaDisabled",Ee],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ee],tabIndex:[2,"tabIndex","tabIndex",Wd],_tabindex:[2,"tabindex","_tabindex",Wd]}})}return o})();var Ud=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=V({type:o});static \u0275inj=U({imports:[lt]})}return o})();var Tp=["matButton",""],Lp=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],kp=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Vd=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),$d=(()=>{class o extends jd{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Op(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?Vd.get(this._appearance):null,l=Vd.get(e);i&&n.remove(...i),n.add(...l),this._appearance=e}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=C({type:o,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Bt],attrs:Tp,ngContentSelectors:kp,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(vt(Lp),Eo(0,"span",0),ze(1),s(2,"span",1),ze(3,1),a(),ze(4,2),Eo(5,"span",2)(6,"span",3)),n&2&&te("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return o})();function Op(o){return o.hasAttribute("mat-raised-button")?"elevated":o.hasAttribute("mat-stroked-button")?"outlined":o.hasAttribute("mat-flat-button")?"filled":o.hasAttribute("mat-button")?"text":null}var Hd=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=V({type:o});static \u0275inj=U({imports:[Ud,lt]})}return o})();function Rp(o,t){if(o&1){let e=ne();h(0,"button",15),H("click",function(){K(e);let i=q();return X(i.toggleSidebar())}),h(1,"mat-icon"),r(2,"menu"),y()()}}function Np(o,t){if(o&1){let e=ne();h(0,"button",16),H("click",function(){K(e);let i=q();return X(i.navigate("/lessons"))}),h(1,"mat-icon"),r(2,"home"),y(),h(3,"span"),r(4,"Home"),y()()}}function Bp(o,t){if(o&1){let e=ne();Xa(0),h(1,"span",17),r(2,"Welcome, "),h(3,"strong"),r(4),y()(),h(5,"button",18),H("click",function(){K(e);let i=q();return X(i.logout())}),h(6,"mat-icon"),r(7,"logout"),y(),h(8,"span"),r(9,"Logout"),y()(),es()}if(o&2){let e=q();b(4),he(e.getUserName())}}function qp(o,t){if(o&1){let e=ne();h(0,"button",16),H("click",function(){K(e);let i=q();return X(i.navigate("/register"))}),h(1,"mat-icon"),r(2,"login"),y(),h(3,"span"),r(4,"Login / Register"),y()()}}function zp(o,t){if(o&1){let e=ne();h(0,"div",19),H("click",function(){K(e);let i=q();return X(i.toggleSidebar())}),y()}}function Wp(o,t){if(o&1){let e=ne();h(0,"div",27)(1,"a",28),H("click",function(){K(e);let i=q().$implicit,l=q(2);return X(l.navigate("/"+i.quiz))}),h(2,"mat-icon"),r(3,"quiz"),y(),h(4,"span"),r(5,"Quiz"),y()()()}}function jp(o,t){if(o&1){let e=ne();h(0,"div",23)(1,"div",24)(2,"a",25),H("click",function(){let i=K(e).$implicit,l=q(2);return X(l.selectLesson(i.id,i.url))}),h(3,"mat-icon"),r(4),y(),h(5,"span"),r(6),y()(),Re(7,Wp,6,0,"div",26),y()()}if(o&2){let e=t.$implicit,n=q(2);b(),te("active",n.selectedLessonId===e.id),b(3),he(e.id==="home"?"home":"bookmark"),b(2),he(e.name),b(),A("ngIf",e.quiz&&n.selectedLessonId===e.id)}}function Up(o,t){if(o&1&&(h(0,"aside",20)(1,"nav",21),Re(2,jp,8,5,"div",22),y()()),o&2){let e=q();te("sidebar-open",e.isSidebarActive)("sidebar-collapsed",!e.isSidebarActive),b(2),A("ngForOf",e.menuItems)}}function Vp(o,t){if(o&1){let e=ne();h(0,"div",29)(1,"button",30),H("click",function(){K(e);let i=q();return X(i.goToPreviousStep())}),h(2,"mat-icon"),r(3,"navigate_before"),y(),h(4,"span"),r(5),y()(),h(6,"span",31),r(7),y(),h(8,"button",32),H("click",function(){K(e);let i=q();return X(i.goToNextStep())}),h(9,"span"),r(10),y(),h(11,"mat-icon"),r(12,"navigate_next"),y()()()}if(o&2){let e=q();b(),A("disabled",!e.hasPreviousStep()),b(4),he(e.getPreviousButtonText()),b(2),he(e.getStepIndicatorText()),b(),A("disabled",!e.hasNextStep()),b(2),he(e.getNextButtonText())}}var $i=class o{constructor(t,e){this.router=t;this.quizService=e;this.router.events.pipe(De(n=>n instanceof fe)).subscribe(n=>{let i=n.urlAfterRedirects||n.url,l=i.match(/\/les(\d+)/),d=i.match(/\/quiz\/(\d+)/);l?this.selectedLessonId=l[1]:d?this.selectedLessonId=d[1]:i.includes("/lessons")&&(this.selectedLessonId="home")})}title="fp-pyjs";isSidebarActive=!1;selectedLessonId="home";siteTitle="Functional Programming Guide";menuItems=[{id:"home",name:"Home / Overview",url:"lessons"},{id:"1",name:"Lesson 1: What is FP?",url:"les1",quiz:"quiz/1"},{id:"2",name:"Lesson 2: Basic Concepts",url:"les2",quiz:"quiz/2"},{id:"3",name:"Lesson 3: Intermediate Concepts",url:"les3",quiz:"quiz/3"},{id:"4",name:"Lesson 4: Advanced Concepts",url:"les4",quiz:"quiz/4"},{id:"5",name:"Lesson 5: FP in Practice",url:"les5",quiz:"quiz/5"},{id:"6",name:"Lesson 6: Real-World Applications",url:"les6",quiz:"quiz/6"},{id:"7",name:"Lesson 7: Advanced Topics",url:"les7",quiz:"quiz/7"},{id:"8",name:"Lesson 8: Libraries in JS/Python",url:"les8",quiz:"quiz/8"},{id:"9",name:"Lesson 9: Case Studies",url:"les9",quiz:"quiz/9"},{id:"10",name:"Lesson 10: Final Project",url:"les10",quiz:"quiz/10"}];isLoggedIn(){return localStorage.getItem("participant")!=null}getUserName(){return this.quizService.getParticipantName()}logout(){localStorage.clear(),this.router.navigate(["/register"])}toggleSidebar(){this.isSidebarActive=!this.isSidebarActive}selectLesson(t,e){this.selectedLessonId=t,this.router.navigate([e]),window.innerWidth<=992&&(this.isSidebarActive=!1)}navigate(t){this.router.navigate([t]),window.innerWidth<=992&&(this.isSidebarActive=!1)}getCurrentStep(){let t=this.router.url;if(t.includes("/lessons"))return{type:"home",num:0,index:0};let e=t.match(/\/les(\d+)/);if(e){let n=parseInt(e[1],10);return{type:"lesson",num:n,index:(n-1)*2+1}}if(e=t.match(/\/quiz\/(\d+)/),e){let n=parseInt(e[1],10);return{type:"quiz",num:n,index:(n-1)*2+2}}return null}getStepUrl(t){if(t===0)return"lessons";let e=Math.floor((t-1)/2)+1;return(t-1)%2===0?`les${e}`:`quiz/${e}`}hasPreviousStep(){let t=this.getCurrentStep();return t!==null&&t.index>0}hasNextStep(){let t=this.getCurrentStep();return t!==null&&t.index<20}goToPreviousStep(){let t=this.getCurrentStep();if(t&&this.hasPreviousStep()){let e=this.getStepUrl(t.index-1),n=t.index-1===0?"home":(Math.floor((t.index-2)/2)+1).toString();this.selectedLessonId=n,this.router.navigate([e])}}goToNextStep(){let t=this.getCurrentStep();if(t&&this.hasNextStep()){let e=this.getStepUrl(t.index+1),n=(Math.floor(t.index/2)+1).toString();this.selectedLessonId=n,this.router.navigate([e])}}getPreviousButtonText(){let t=this.getCurrentStep();return t?t.type==="lesson"?t.num===1?"Back to Home":"Back to Quiz":t.type==="quiz"?"Back to Lesson":"Previous":"Previous"}getNextButtonText(){let t=this.getCurrentStep();return t?t.type==="home"?"Start Lesson 1":t.type==="lesson"?"Go to Quiz":t.type==="quiz"?"Next Lesson":"Next":"Next"}getStepIndicatorText(){let t=this.getCurrentStep();if(!t)return"";if(t.type==="home")return"Home / Overview";let e=t.type==="lesson"?"Content":"Quiz";return`Lesson ${t.num} of 10: ${e}`}static \u0275fac=function(e){return new(e||o)(N(Q),N(cn))};static \u0275cmp=C({type:o,selectors:[["app-root"]],decls:18,vars:8,consts:[["loginBtn",""],[1,"app-layout"],[1,"app-header"],[1,"app-brand"],["class","sidebar-toggle","aria-label","Toggle Navigation",3,"click",4,"ngIf"],[1,"app-title"],[1,"header-actions"],["mat-button","",3,"click",4,"ngIf"],[4,"ngIf","ngIfElse"],[1,"app-body"],["class","sidebar-backdrop",3,"click",4,"ngIf"],["class","app-sidebar",3,"sidebar-open","sidebar-collapsed",4,"ngIf"],[1,"app-content"],[1,"content-container"],["class","lesson-navigation",4,"ngIf"],["aria-label","Toggle Navigation",1,"sidebar-toggle",3,"click"],["mat-button","",3,"click"],[1,"user-greeting"],["mat-button","",1,"logout-btn",3,"click"],[1,"sidebar-backdrop",3,"click"],[1,"app-sidebar"],[1,"sidebar-menu"],["class","menu-item",4,"ngFor","ngForOf"],[1,"menu-item"],[1,"menu-link-wrapper"],[1,"menu-link",3,"click"],["class","lesson-submenus",4,"ngIf"],[1,"lesson-submenus"],[1,"submenu-link",3,"click"],[1,"lesson-navigation"],[1,"btn","btn-secondary",3,"click","disabled"],[1,"lesson-indicator"],[1,"btn","btn-primary",3,"click","disabled"]],template:function(e,n){if(e&1&&(h(0,"div",1)(1,"header",2)(2,"div",3),Re(3,Rp,3,0,"button",4),h(4,"span",5),r(5),y()(),h(6,"div",6),Re(7,Np,5,0,"button",7)(8,Bp,10,1,"ng-container",8)(9,qp,5,0,"ng-template",null,0,rs),y()(),h(11,"div",9),Re(12,zp,1,0,"div",10)(13,Up,3,5,"aside",11),h(14,"main",12)(15,"div",13),qe(16,"router-outlet"),Re(17,Vp,13,5,"div",14),y()()()()),e&2){let i=qt(10);b(3),A("ngIf",n.isLoggedIn()),b(2),he(n.siteTitle),b(2),A("ngIf",n.isLoggedIn()),b(),A("ngIf",n.isLoggedIn())("ngIfElse",i),b(4),A("ngIf",n.isLoggedIn()&&n.isSidebarActive),b(),A("ngIf",n.isLoggedIn()),b(4),A("ngIf",n.getCurrentStep()!==null)}},dependencies:[Un,Jn,et,Ao,_n,Hd,$d,sn,an],styles:[".app-sidebar.sidebar-collapsed[_ngcontent-%COMP%]{width:0;border-right-color:transparent;overflow:hidden}.sidebar-menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.lesson-submenus[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-left:1.5rem;margin-top:.25rem;margin-bottom:.5rem;border-left:2px solid rgba(142,68,173,.15);margin-left:1.25rem;gap:.25rem}"]})};br($i,_d).catch(o=>console.error(o));
