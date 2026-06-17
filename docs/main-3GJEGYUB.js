import{$ as re,$a as $o,A as pt,Aa as $e,Ab as Qo,B as kn,Ba as V,Bb as Je,C as ze,Ca as zn,Cb as ea,D as or,Da as cr,Db as ta,E as Po,Ea as zo,F as ae,Fa as Bn,G as In,Ga as D,H as be,Ha as F,I as P,Ia as R,J as Bt,Ja as Et,K as v,Ka as Bo,L as T,La as dr,M as Oo,Ma as ur,N as _,Na as mr,O as x,Oa as bt,P as h,Pa as Fe,Q as ft,Qa as Gt,R as ko,Ra as qt,S as ie,Sa as Wt,T as X,Ta as W,U as Rn,Ua as E,V as Tn,Va as w,W as se,Wa as He,X as L,Xa as s,Y as gt,Ya as a,Z as Io,Za as $n,_ as _e,_a as Ge,a as f,aa as ar,ab as qe,b as q,ba as Fn,bb as Jt,ca as j,cb as Me,d as I,da as Ro,db as Yt,e as An,ea as To,eb as Ho,f as wo,fa as Be,fb as Ae,g as ht,ga as Se,gb as Pe,h as he,ha as sr,hb as Oe,i as pe,ia as Y,ib as r,j as fe,ja as Fo,jb as Hn,k as J,ka as lr,kb as Go,l as b,la as No,lb as le,m as Co,ma as vt,mb as ce,n as ir,na as Nn,nb as qo,o as Do,oa as yt,ob as Gn,p as N,pa as Lo,pb as Wo,q as rr,qa as jo,qb as qn,r as De,ra as Ln,rb as Q,s as zt,sa as Uo,sb as Jo,t as So,ta as y,tb as U,u as Pn,ua as $t,ub as Kt,v as Mo,va as Vo,vb as Yo,w as ge,wa as jn,wb as Ko,x as On,xa as Ht,xb as Zo,y as it,ya as Un,yb as Xo,z as Ao,za as Vn,zb as We}from"./chunk-6J2WDVQ7.js";var na=null;function Ne(){return na}function hr(t){na??=t}var Zt=class{},Le=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>h(ia),providedIn:"platform"})}return t})(),pr=new _(""),ia=(()=>{class t extends Le{_location;_history;_doc=h(L);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ne().getBaseHref(this._doc)}onPopState(e){let n=Ne().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Ne().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Wn(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function ra(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function xe(t){return t&&t[0]!=="?"?`?${t}`:t}var we=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>h(Yn),providedIn:"root"})}return t})(),Jn=new _(""),Yn=(()=>{class t extends we{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??h(L).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Wn(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+xe(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,l){let c=this.prepareExternalUrl(o+xe(l));this._platformLocation.pushState(e,n,c)}replaceState(e,n,o,l){let c=this.prepareExternalUrl(o+xe(l));this._platformLocation.replaceState(e,n,c)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(x(Le),x(Jn,8))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ye=(()=>{class t{_subject=new he;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=ul(ra(oa(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+xe(n))}normalize(e){return t.stripTrailingSlash(dl(this._basePath,oa(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",o=null){this._locationStrategy.pushState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+xe(n)),o)}replaceState(e,n="",o=null){this._locationStrategy.replaceState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+xe(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=xe;static joinWithSlash=Wn;static stripTrailingSlash=ra;static \u0275fac=function(n){return new(n||t)(x(we))};static \u0275prov=v({token:t,factory:()=>cl(),providedIn:"root"})}return t})();function cl(){return new Ye(x(we))}function dl(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function oa(t){return t.replace(/\/index.html$/,"")}function ul(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var gr=(()=>{class t extends we{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=Wn(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,o,l){let c=this.prepareExternalUrl(o+xe(l))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,c)}replaceState(e,n,o,l){let c=this.prepareExternalUrl(o+xe(l))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,c)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(x(Le),x(Jn,8))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var fr=/\s+/,aa=[],vr=(()=>{class t{_ngEl;_renderer;initialClasses=aa;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(fr):aa}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(fr):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],o=e[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(fr).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||t)(V(Y),V($e))};static \u0275dir=R({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Kn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({})}return t})();function Xt(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[o,l]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===i)return decodeURIComponent(l)}return null}var rt=class{};var Er="browser";function sa(t){return t===Er}var br=(()=>{class t{static \u0275prov=v({token:t,providedIn:"root",factory:()=>new yr(h(L),window)})}return t})(),yr=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(q(f({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=fl(this.document,i);n&&(this.scrollToElement(n,e),n.focus({preventScroll:!0}))}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch(e){console.warn(Bt(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),o=n.left+this.window.pageXOffset,l=n.top+this.window.pageYOffset,c=this.offset();this.window.scrollTo(q(f({},e),{left:o-c[0],top:l-c[1]}))}};function fl(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),o=n.currentNode;for(;o;){let l=o.shadowRoot;if(l){let c=l.getElementById(i)||l.querySelector(`[name="${i}"]`);if(c)return c}o=n.nextNode()}}return null}var Qt=class{_doc;constructor(i){this._doc=i}manager},Zn=(()=>{class t extends Qt{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,o,l){return e.addEventListener(n,o,l),()=>this.removeEventListener(e,n,o,l)}removeEventListener(e,n,o,l){return e.removeEventListener(n,o,l)}static \u0275fac=function(n){return new(n||t)(x(L))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),ei=new _(""),Cr=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(c=>{c.manager=this});let o=e.filter(c=>!(c instanceof Zn));this._plugins=o.slice().reverse();let l=e.find(c=>c instanceof Zn);l&&this._plugins.push(l)}addEventListener(e,n,o,l){return this._findPluginFor(n).addEventListener(e,n,o,l)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(l=>l.supports(e)),!n)throw new P(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(x(ei),x(re))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),_r="ng-app-id";function ca(t){for(let i of t)i.remove()}function da(t,i){let e=i.createElement("style");return e.textContent=t,e}function gl(t,i,e,n){let o=t.head?.querySelectorAll(`style[${_r}="${i}"],link[${_r}="${i}"]`);if(o)for(let l of o)l.removeAttribute(_r),l instanceof HTMLLinkElement?n.set(l.href.slice(l.href.lastIndexOf("/")+1),{usage:0,elements:[l]}):l.textContent&&e.set(l.textContent,{usage:0,elements:[l]})}function wr(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Dr=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,o,l={}){this.doc=e,this.appId=n,this.nonce=o,gl(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let o of e)this.addUsage(o,this.inline,da);n?.forEach(o=>this.addUsage(o,this.external,wr))}removeStyles(e,n){for(let o of e)this.removeUsage(o,this.inline);n?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,n,o){let l=n.get(e);l?l.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(c=>this.addElement(c,o(e,this.doc)))})}removeUsage(e,n){let o=n.get(e);o&&(o.usage--,o.usage<=0&&(ca(o.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ca(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:o}]of this.inline)o.push(this.addElement(e,da(n,this.doc)));for(let[n,{elements:o}]of this.external)o.push(this.addElement(e,wr(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(x(L),x(lr),x(yt,8),x(vt))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),xr={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Sr=/%COMP%/g;var ma="%COMP%",vl=`_nghost-${ma}`,yl=`_ngcontent-${ma}`,El=!0,bl=new _("",{factory:()=>El});function _l(t){return yl.replace(Sr,t)}function xl(t){return vl.replace(Sr,t)}function ha(t,i){return i.map(e=>e.replace(Sr,t))}var nn=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,o,l,c,d,u=null,m=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=l,this.doc=c,this.ngZone=d,this.nonce=u,this.tracingService=m,this.defaultRenderer=new en(e,c,d,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let o=this.getOrCreateRenderer(e,n);return o instanceof Qn?o.applyToHost(e):o instanceof tn&&o.applyStyles(),o}getOrCreateRenderer(e,n){let o=this.rendererByCompId,l=o.get(n.id);if(!l){let c=this.doc,d=this.ngZone,u=this.eventManager,m=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,g=this.tracingService;switch(n.encapsulation){case Ln.Emulated:l=new Qn(u,m,n,this.appId,p,c,d,g);break;case Ln.ShadowDom:return new Xn(u,e,n,c,d,this.nonce,g,m);case Ln.ExperimentalIsolatedShadowDom:return new Xn(u,e,n,c,d,this.nonce,g);default:l=new tn(u,m,n,p,c,d,g);break}o.set(n.id,l)}return l}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(x(Cr),x(Dr),x(lr),x(bl),x(L),x(re),x(yt),x(jn,8))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),en=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,o){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=o}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(xr[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(ua(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(ua(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new P(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,o){if(o){e=o+":"+e;let l=xr[o];l?i.setAttributeNS(l,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let o=xr[n];o?i.removeAttributeNS(o,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,o){o&($t.DashCase|$t.Important)?i.style.setProperty(e,n,o&$t.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&$t.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,o){if(typeof i=="string"&&(i=Ne().getGlobalEventTarget(this.doc,i),!i))throw new P(5102,!1);let l=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(l=this.tracingService.wrapEventListener(i,e,l)),this.eventManager.addEventListener(i,e,l,o)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function ua(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Xn=class extends en{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,o,l,c,d,u){super(i,o,l,d),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let m=n.styles;m=ha(n.id,m);for(let g of m){let A=document.createElement("style");c&&A.setAttribute("nonce",c),A.textContent=g,this.shadowRoot.appendChild(A)}let p=n.getExternalStyles?.();if(p)for(let g of p){let A=wr(g,o);c&&A.setAttribute("nonce",c),this.shadowRoot.appendChild(A)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},tn=class extends en{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,o,l,c,d,u){super(i,l,c,d),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let m=n.styles;this.styles=u?ha(u,m):m,this.styleUrls=n.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Vo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Qn=class extends tn{contentAttr;hostAttr;constructor(i,e,n,o,l,c,d,u){let m=o+"-"+n.id;super(i,e,n,l,c,d,u,m),this.contentAttr=_l(m),this.hostAttr=xl(m)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var ti=class t extends Zt{supportsDOMEvents=!0;static makeCurrent(){hr(new t)}onAndCancel(i,e,n,o){return i.addEventListener(e,n,o),()=>{i.removeEventListener(e,n,o)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=wl();return e==null?null:Cl(e)}resetBaseElement(){rn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Xt(document.cookie,i)}},rn=null;function wl(){return rn=rn||document.head.querySelector("base"),rn?rn.getAttribute("href"):null}function Cl(t){return new URL(t,document.baseURI).pathname}var Dl=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),pa=["alt","control","meta","shift"],Sl={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ml={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},fa=(()=>{class t extends Qt{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,o,l){let c=t.parseEventName(n),d=t.eventCallback(c.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ne().onAndCancel(e,c.domEventName,d,l))}static parseEventName(e){let n=e.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let l=t._normalizeKey(n.pop()),c="",d=n.indexOf("code");if(d>-1&&(n.splice(d,1),c="code."),pa.forEach(m=>{let p=n.indexOf(m);p>-1&&(n.splice(p,1),c+=m+".")}),c+=l,n.length!=0||l.length===0)return null;let u={};return u.domEventName=o,u.fullKey=c,u}static matchEventFullKeyCode(e,n){let o=Sl[e.key]||e.key,l="";return n.indexOf("code.")>-1&&(o=e.code,l="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),pa.forEach(c=>{if(c!==o){let d=Ml[c];d(e)&&(l+=c+".")}}),l+=o,l===n)}static eventCallback(e,n,o){return l=>{t.matchEventFullKeyCode(l,e)&&o.runGuarded(()=>n(l))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(x(L))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function Mr(t,i,e){return I(this,null,function*(){let n=f({rootComponent:t},Al(i,e));return Qo(n)})}function Al(t,i){return{platformRef:i?.platformRef,appProviders:[...Rl,...t?.providers??[]],platformProviders:Il}}function Pl(){ti.makeCurrent()}function Ol(){return new ar}function kl(){return Fo(document),document}var Il=[{provide:vt,useValue:Er},{provide:No,useValue:Pl,multi:!0},{provide:L,useFactory:kl}];var Rl=[{provide:ko,useValue:"root"},{provide:ar,useFactory:Ol},{provide:ei,useClass:Zn,multi:!0},{provide:ei,useClass:fa,multi:!0},nn,Dr,Cr,{provide:Vn,useExisting:nn},{provide:rt,useClass:Dl},[]];var Ke=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let o=e.slice(0,n),l=e.slice(n+1).trim();this.addHeaderEntry(o,l)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let o=(i.op==="a"?this.headers.get(e):void 0)||[];o.push(...n),this.headers.set(e,o);break;case"d":let l=i.value;if(!l)this.headers.delete(e),this.normalizedNames.delete(e);else{let c=this.headers.get(e);if(!c)return;c=c.filter(d=>l.indexOf(d)===-1),c.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,c)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(l=>l.toString()),o=i.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(i,o)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var ii=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},ri=class{encodeKey(i){return ga(i)}encodeValue(i){return ga(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Tl(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let l=o.indexOf("="),[c,d]=l==-1?[i.decodeKey(o),""]:[i.decodeKey(o.slice(0,l)),i.decodeValue(o.slice(l+1))],u=e.get(c)||[];u.push(d),e.set(c,u)}),e}var Fl=/%(\d[a-f0-9])/gi,Nl={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ga(t){return encodeURIComponent(t).replace(Fl,(i,e)=>Nl[e]??i)}function ni(t){return`${t}`}var je=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new ri,i.fromString){if(i.fromObject)throw new P(2805,!1);this.map=Tl(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],o=Array.isArray(n)?n.map(ni):[ni(n)];this.map.set(e,o)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let o=i[n];Array.isArray(o)?o.forEach(l=>{e.push({param:n,value:l,op:"a"})}):e.push({param:n,value:o,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(ni(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],o=n.indexOf(ni(i.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function Ll(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function va(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function ya(t){return typeof Blob<"u"&&t instanceof Blob}function Ea(t){return typeof FormData<"u"&&t instanceof FormData}function jl(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var ba="Content-Type",_a="Accept",xa="text/plain",wa="application/json",Ul=`${wa}, ${xa}, */*`,_t=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,o){this.url=e,this.method=i.toUpperCase();let l;if(Ll(this.method)||o?(this.body=n!==void 0?n:null,l=o):l=n,l){if(this.reportProgress=!!l.reportProgress,this.withCredentials=!!l.withCredentials,this.keepalive=!!l.keepalive,l.responseType&&(this.responseType=l.responseType),l.headers&&(this.headers=l.headers),l.context&&(this.context=l.context),l.params&&(this.params=l.params),l.priority&&(this.priority=l.priority),l.cache&&(this.cache=l.cache),l.credentials&&(this.credentials=l.credentials),typeof l.timeout=="number"){if(l.timeout<1||!Number.isInteger(l.timeout))throw new P(2822,"");this.timeout=l.timeout}l.mode&&(this.mode=l.mode),l.redirect&&(this.redirect=l.redirect),l.integrity&&(this.integrity=l.integrity),l.referrer&&(this.referrer=l.referrer),l.referrerPolicy&&(this.referrerPolicy=l.referrerPolicy),this.transferCache=l.transferCache}if(this.headers??=new Ke,this.context??=new ii,!this.params)this.params=new je,this.urlWithParams=e;else{let c=this.params.toString();if(c.length===0)this.urlWithParams=e;else{let d=e.indexOf("?"),u=d===-1?"?":d<e.length-1?"&":"";this.urlWithParams=e+u+c}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||va(this.body)||ya(this.body)||Ea(this.body)||jl(this.body)?this.body:this.body instanceof je?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ea(this.body)?null:ya(this.body)?this.body.type||null:va(this.body)?null:typeof this.body=="string"?xa:this.body instanceof je?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?wa:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,o=i.responseType||this.responseType,l=i.keepalive??this.keepalive,c=i.priority||this.priority,d=i.cache||this.cache,u=i.mode||this.mode,m=i.redirect||this.redirect,p=i.credentials||this.credentials,g=i.referrer||this.referrer,A=i.integrity||this.integrity,Z=i.referrerPolicy||this.referrerPolicy,H=i.transferCache??this.transferCache,z=i.timeout??this.timeout,M=i.body!==void 0?i.body:this.body,O=i.withCredentials??this.withCredentials,B=i.reportProgress??this.reportProgress,ne=i.headers||this.headers,G=i.params||this.params,Ut=i.context??this.context;return i.setHeaders!==void 0&&(ne=Object.keys(i.setHeaders).reduce((Vt,nt)=>Vt.set(nt,i.setHeaders[nt]),ne)),i.setParams&&(G=Object.keys(i.setParams).reduce((Vt,nt)=>Vt.set(nt,i.setParams[nt]),G)),new t(e,n,M,{params:G,headers:ne,context:Ut,reportProgress:B,responseType:o,withCredentials:O,transferCache:H,keepalive:l,cache:d,priority:c,timeout:z,mode:u,redirect:m,credentials:p,referrer:g,integrity:A,referrerPolicy:Z})}},ot=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(ot||{}),wt=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new Ke,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},oi=class t extends wt{constructor(i={}){super(i)}type=ot.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},on=class t extends wt{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=ot.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},xt=class extends wt{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Vl=200,zl=204;var Bl=new _("");var $l=/^\)\]\}',?\n/;var Pr=(()=>{class t{xhrFactory;tracingService=h(jn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new P(-2800,!1);let n=this.xhrFactory;return b(null).pipe(ae(()=>new ht(l=>{let c=n.build();if(c.open(e.method,e.urlWithParams),e.withCredentials&&(c.withCredentials=!0),e.headers.forEach((M,O)=>c.setRequestHeader(M,O.join(","))),e.headers.has(_a)||c.setRequestHeader(_a,Ul),!e.headers.has(ba)){let M=e.detectContentTypeHeader();M!==null&&c.setRequestHeader(ba,M)}if(e.timeout&&(c.timeout=e.timeout),e.responseType){let M=e.responseType.toLowerCase();c.responseType=M!=="json"?M:"text"}let d=e.serializeBody(),u=null,m=()=>{if(u!==null)return u;let M=c.statusText||"OK",O=new Ke(c.getAllResponseHeaders()),B=c.responseURL||e.url;return u=new oi({headers:O,status:c.status,statusText:M,url:B}),u},p=this.maybePropagateTrace(()=>{let{headers:M,status:O,statusText:B,url:ne}=m(),G=null;O!==zl&&(G=typeof c.response>"u"?c.responseText:c.response),O===0&&(O=G?Vl:0);let Ut=O>=200&&O<300;if(e.responseType==="json"&&typeof G=="string"){let Vt=G;G=G.replace($l,"");try{G=G!==""?JSON.parse(G):null}catch(nt){G=Vt,Ut&&(Ut=!1,G={error:nt,text:G})}}Ut?(l.next(new on({body:G,headers:M,status:O,statusText:B,url:ne||void 0})),l.complete()):l.error(new xt({error:G,headers:M,status:O,statusText:B,url:ne||void 0}))}),g=this.maybePropagateTrace(M=>{let{url:O}=m(),B=new xt({error:M,status:c.status||0,statusText:c.statusText||"Unknown Error",url:O||void 0});l.error(B)}),A=g;e.timeout&&(A=this.maybePropagateTrace(M=>{let{url:O}=m(),B=new xt({error:new DOMException("Request timed out","TimeoutError"),status:c.status||0,statusText:c.statusText||"Request timeout",url:O||void 0});l.error(B)}));let Z=!1,H=this.maybePropagateTrace(M=>{Z||(l.next(m()),Z=!0);let O={type:ot.DownloadProgress,loaded:M.loaded};M.lengthComputable&&(O.total=M.total),e.responseType==="text"&&c.responseText&&(O.partialText=c.responseText),l.next(O)}),z=this.maybePropagateTrace(M=>{let O={type:ot.UploadProgress,loaded:M.loaded};M.lengthComputable&&(O.total=M.total),l.next(O)});return c.addEventListener("load",p),c.addEventListener("error",g),c.addEventListener("timeout",A),c.addEventListener("abort",g),e.reportProgress&&(c.addEventListener("progress",H),d!==null&&c.upload&&c.upload.addEventListener("progress",z)),c.send(d),l.next({type:ot.Sent}),()=>{c.removeEventListener("error",g),c.removeEventListener("abort",g),c.removeEventListener("load",p),c.removeEventListener("timeout",A),e.reportProgress&&(c.removeEventListener("progress",H),d!==null&&c.upload&&c.upload.removeEventListener("progress",z)),c.readyState!==c.DONE&&c.abort()}})))}static \u0275fac=function(n){return new(n||t)(x(rt))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Hl(t,i){return i(t)}function Gl(t,i,e){return(n,o)=>X(e,()=>i(n,l=>t(l,o)))}var Ca=new _("",{factory:()=>[]}),Da=new _(""),Sa=new _("",{factory:()=>!0});var Or=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:function(n){let o=null;return n?o=new(n||t):o=x(Pr),o},providedIn:"root"})}return t})();var ai=(()=>{class t{backend;injector;chain=null;pendingTasks=h(To);contributeToStability=h(Sa);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Ca),...this.injector.get(Da,[])]));this.chain=n.reduceRight((o,l)=>Gl(o,l,this.injector),Hl)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(kn(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(x(Or),x(ie))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),kr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:function(n){let o=null;return n?o=new(n||t):o=x(ai),o},providedIn:"root"})}return t})();function Ar(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var si=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,o={}){let l;if(e instanceof _t)l=e;else{let u;o.headers instanceof Ke?u=o.headers:u=new Ke(o.headers);let m;o.params&&(o.params instanceof je?m=o.params:m=new je({fromObject:o.params})),l=new _t(e,n,o.body!==void 0?o.body:null,{headers:u,context:o.context,params:m,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let c=b(l).pipe(it(u=>this.handler.handle(u)));if(e instanceof _t||o.observe==="events")return c;let d=c.pipe(ge(u=>u instanceof on));switch(o.observe||"body"){case"body":switch(l.responseType){case"arraybuffer":return d.pipe(N(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new P(2806,!1);return u.body}));case"blob":return d.pipe(N(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new P(2807,!1);return u.body}));case"text":return d.pipe(N(u=>{if(u.body!==null&&typeof u.body!="string")throw new P(2808,!1);return u.body}));default:return d.pipe(N(u=>u.body))}case"response":return d;default:throw new P(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new je().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,o={}){return this.request("PATCH",e,Ar(o,n))}post(e,n,o={}){return this.request("POST",e,Ar(o,n))}put(e,n,o={}){return this.request("PUT",e,Ar(o,n))}static \u0275fac=function(n){return new(n||t)(x(kr))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ql=new _("",{factory:()=>!0}),Wl="XSRF-TOKEN",Jl=new _("",{factory:()=>Wl}),Yl="X-XSRF-TOKEN",Kl=new _("",{factory:()=>Yl}),Zl=(()=>{class t{cookieName=h(Jl);doc=h(L);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Xt(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ma=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:function(n){let o=null;return n?o=new(n||t):o=x(Zl),o},providedIn:"root"})}return t})();function Xl(t,i){if(!h(ql)||t.method==="GET"||t.method==="HEAD")return i(t);try{let o=h(Le).href,{origin:l}=new URL(o),{origin:c}=new URL(t.url,l);if(l!==c)return i(t)}catch(o){return i(t)}let e=h(Ma).getToken(),n=h(Kl);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}function Ir(...t){let i=[si,ai,{provide:kr,useExisting:ai},{provide:Or,useFactory:()=>h(Bl,{optional:!0})??h(Pr)},{provide:Ca,useValue:Xl,multi:!0}];for(let e of t)i.push(...e.\u0275providers);return ft(i)}var Aa=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(x(L))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var C="primary",yn=Symbol("RouteTitle"),Lr=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function st(t){return new Lr(t)}function Rr(t,i,e){for(let n=0;n<t.length;n++){let o=t[n],l=i[n];if(o[0]===":")e[o.substring(1)]=l;else if(o!==l.path)return!1}return!0}function Fa(t,i,e){let n=e.path.split("/"),o=n.indexOf("**");if(o===-1){if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let u={},m=t.slice(0,n.length);return Rr(n,m,u)?{consumed:m,posParams:u}:null}if(o!==n.lastIndexOf("**"))return null;let l=n.slice(0,o),c=n.slice(o+1);if(l.length+c.length>t.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let d={};return!Rr(l,t.slice(0,l.length),d)||!Rr(c,t.slice(t.length-c.length),d)?null:{consumed:t,posParams:d}}function hi(t){return new Promise((i,e)=>{t.pipe(ze()).subscribe({next:n=>i(n),error:n=>e(n)})})}function tc(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!ke(t[e],i[e]))return!1;return!0}function ke(t,i){let e=t?jr(t):void 0,n=i?jr(i):void 0;if(!e||!n||e.length!=n.length)return!1;let o;for(let l=0;l<e.length;l++)if(o=e[l],!Na(t[o],i[o]))return!1;return!0}function jr(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Na(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((o,l)=>n[l]===o)}else return t===i}function nc(t){return t.length>0?t[t.length-1]:null}function ct(t){return ir(t)?t:dr(t)?J(Promise.resolve(t)):b(t)}function La(t){return ir(t)?hi(t):Promise.resolve(t)}var ic={exact:Ua,subset:Va},ja={exact:rc,subset:oc,ignored:()=>!0},Xr={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},dn={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Qr(t,i,e){let n=t instanceof ee?t:i.parseUrl(t);return Kt(()=>Ur(i.lastSuccessfulNavigation()?.finalUrl??new ee,n,f(f({},dn),e)))}function Ur(t,i,e){return ic[e.paths](t.root,i.root,e.matrixParams)&&ja[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function rc(t,i){return ke(t,i)}function Ua(t,i,e){if(!at(t.segments,i.segments)||!di(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!Ua(t.children[n],i.children[n],e))return!1;return!0}function oc(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>Na(t[e],i[e]))}function Va(t,i,e){return za(t,i,i.segments,e)}function za(t,i,e,n){if(t.segments.length>e.length){let o=t.segments.slice(0,e.length);return!(!at(o,e)||i.hasChildren()||!di(o,e,n))}else if(t.segments.length===e.length){if(!at(t.segments,e)||!di(t.segments,e,n))return!1;for(let o in i.children)if(!t.children[o]||!Va(t.children[o],i.children[o],n))return!1;return!0}else{let o=e.slice(0,t.segments.length),l=e.slice(t.segments.length);return!at(t.segments,o)||!di(t.segments,o,n)||!t.children[C]?!1:za(t.children[C],i,l,n)}}function di(t,i,e){return i.every((n,o)=>ja[e](t[o].parameters,n.parameters))}var ee=class{root;queryParams;fragment;_queryParamMap;constructor(i=new k([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=st(this.queryParams),this._queryParamMap}toString(){return lc.serialize(this)}},k=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ui(this)}},Ze=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=st(this.parameters),this._parameterMap}toString(){return $a(this)}};function ac(t,i){return at(t,i)&&t.every((e,n)=>ke(e.parameters,i[n].parameters))}function at(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function sc(t,i){let e=[];return Object.entries(t.children).forEach(([n,o])=>{n===C&&(e=e.concat(i(o,n)))}),Object.entries(t.children).forEach(([n,o])=>{n!==C&&(e=e.concat(i(o,n)))}),e}var et=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>new Ve,providedIn:"root"})}return t})(),Ve=class{parse(i){let e=new zr(i);return new ee(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${an(i.root,!0)}`,n=uc(i.queryParams),o=typeof i.fragment=="string"?`#${cc(i.fragment)}`:"";return`${e}${n}${o}`}},lc=new Ve;function ui(t){return t.segments.map(i=>$a(i)).join("/")}function an(t,i){if(!t.hasChildren())return ui(t);if(i){let e=t.children[C]?an(t.children[C],!1):"",n=[];return Object.entries(t.children).forEach(([o,l])=>{o!==C&&n.push(`${o}:${an(l,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=sc(t,(n,o)=>o===C?[an(t.children[C],!1)]:[`${o}:${an(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[C]!=null?`${ui(t)}/${e[0]}`:`${ui(t)}/(${e.join("//")})`}}function Ba(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function li(t){return Ba(t).replace(/%3B/gi,";")}function cc(t){return encodeURI(t)}function Vr(t){return Ba(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function mi(t){return decodeURIComponent(t)}function Pa(t){return mi(t.replace(/\+/g,"%20"))}function $a(t){return`${Vr(t.path)}${dc(t.parameters)}`}function dc(t){return Object.entries(t).map(([i,e])=>`;${Vr(i)}=${Vr(e)}`).join("")}function uc(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(o=>`${li(e)}=${li(o)}`).join("&"):`${li(e)}=${li(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var mc=/^[^\/()?;#]+/;function Tr(t){let i=t.match(mc);return i?i[0]:""}var hc=/^[^\/()?;=#]+/;function pc(t){let i=t.match(hc);return i?i[0]:""}var fc=/^[^=?&#]+/;function gc(t){let i=t.match(fc);return i?i[0]:""}var vc=/^[^&#]+/;function yc(t){let i=t.match(vc);return i?i[0]:""}var zr=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new k([],{}):new k([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new P(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,i));let o={};return this.peekStartsWith("(")&&(o=this.parseParens(!1,i)),(e.length>0||Object.keys(n).length>0)&&(o[C]=new k(e,n)),o}parseSegment(){let i=Tr(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new P(4009,!1);return this.capture(i),new Ze(mi(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=pc(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let o=Tr(this.remaining);o&&(n=o,this.capture(n))}i[mi(e)]=mi(n)}parseQueryParam(i){let e=gc(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let c=yc(this.remaining);c&&(n=c,this.capture(n))}let o=Pa(e),l=Pa(n);if(i.hasOwnProperty(o)){let c=i[o];Array.isArray(c)||(c=[c],i[o]=c),c.push(l)}else i[o]=l}parseParens(i,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let o=Tr(this.remaining),l=this.remaining[o.length];if(l!=="/"&&l!==")"&&l!==";")throw new P(4010,!1);let c;o.indexOf(":")>-1?(c=o.slice(0,o.indexOf(":")),this.capture(c),this.capture(":")):i&&(c=C);let d=this.parseChildren(e+1);n[c??C]=Object.keys(d).length===1&&d[C]?d[C]:new k([],d),this.consumeOptional("//")}return n}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new P(4011,!1)}};function Ha(t){return t.segments.length>0?new k([],{[C]:t}):t}function Ga(t){let i={};for(let[n,o]of Object.entries(t.children)){let l=Ga(o);if(n===C&&l.segments.length===0&&l.hasChildren())for(let[c,d]of Object.entries(l.children))i[c]=d;else(l.segments.length>0||l.hasChildren())&&(i[n]=l)}let e=new k(t.segments,i);return Ec(e)}function Ec(t){if(t.numberOfChildren===1&&t.children[C]){let i=t.children[C];return new k(t.segments.concat(i.segments),i.children)}return t}function Xe(t){return t instanceof ee}function qa(t,i,e=null,n=null,o=new Ve){let l=Wa(t);return Ja(l,i,e,n,o)}function Wa(t){let i;function e(l){let c={};for(let u of l.children){let m=e(u);c[u.outlet]=m}let d=new k(l.url,c);return l===t&&(i=d),d}let n=e(t.root),o=Ha(n);return i??o}function Ja(t,i,e,n,o){let l=t;for(;l.parent;)l=l.parent;if(i.length===0)return Fr(l,l,l,e,n,o);let c=bc(i);if(c.toRoot())return Fr(l,l,new k([],{}),e,n,o);let d=_c(c,l,t),u=d.processChildren?ln(d.segmentGroup,d.index,c.commands):Ka(d.segmentGroup,d.index,c.commands);return Fr(l,d.segmentGroup,u,e,n,o)}function pi(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function un(t){return typeof t=="object"&&t!=null&&t.outlets}function Oa(t,i,e){t||="\u0275";let n=new ee;return n.queryParams={[t]:i},e.parse(e.serialize(n)).queryParams[t]}function Fr(t,i,e,n,o,l){let c={};for(let[m,p]of Object.entries(n??{}))c[m]=Array.isArray(p)?p.map(g=>Oa(m,g,l)):Oa(m,p,l);let d;t===i?d=e:d=Ya(t,i,e);let u=Ha(Ga(d));return new ee(u,c,o)}function Ya(t,i,e){let n={};return Object.entries(t.children).forEach(([o,l])=>{l===i?n[o]=e:n[o]=Ya(l,i,e)}),new k(t.segments,n)}var fi=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&pi(n[0]))throw new P(4003,!1);let o=n.find(un);if(o&&o!==nc(n))throw new P(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function bc(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new fi(!0,0,t);let i=0,e=!1,n=t.reduce((o,l,c)=>{if(typeof l=="object"&&l!=null){if(l.outlets){let d={};return Object.entries(l.outlets).forEach(([u,m])=>{d[u]=typeof m=="string"?m.split("/"):m}),[...o,{outlets:d}]}if(l.segmentPath)return[...o,l.segmentPath]}return typeof l!="string"?[...o,l]:c===0?(l.split("/").forEach((d,u)=>{u==0&&d==="."||(u==0&&d===""?e=!0:d===".."?i++:d!=""&&o.push(d))}),o):[...o,l]},[]);return new fi(e,i,n)}var Dt=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function _c(t,i,e){if(t.isAbsolute)return new Dt(i,!0,0);if(!e)return new Dt(i,!1,NaN);if(e.parent===null)return new Dt(e,!0,0);let n=pi(t.commands[0])?0:1,o=e.segments.length-1+n;return xc(e,o,t.numberOfDoubleDots)}function xc(t,i,e){let n=t,o=i,l=e;for(;l>o;){if(l-=o,n=n.parent,!n)throw new P(4005,!1);o=n.segments.length}return new Dt(n,!1,o-l)}function wc(t){return un(t[0])?t[0].outlets:{[C]:t}}function Ka(t,i,e){if(t??=new k([],{}),t.segments.length===0&&t.hasChildren())return ln(t,i,e);let n=Cc(t,i,e),o=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let l=new k(t.segments.slice(0,n.pathIndex),{});return l.children[C]=new k(t.segments.slice(n.pathIndex),t.children),ln(l,0,o)}else return n.match&&o.length===0?new k(t.segments,{}):n.match&&!t.hasChildren()?Br(t,i,e):n.match?ln(t,0,o):Br(t,i,e)}function ln(t,i,e){if(e.length===0)return new k(t.segments,{});{let n=wc(e),o={};if(Object.keys(n).some(l=>l!==C)&&t.children[C]&&t.numberOfChildren===1&&t.children[C].segments.length===0){let l=ln(t.children[C],i,e);return new k(t.segments,l.children)}return Object.entries(n).forEach(([l,c])=>{typeof c=="string"&&(c=[c]),c!==null&&(o[l]=Ka(t.children[l],i,c))}),Object.entries(t.children).forEach(([l,c])=>{n[l]===void 0&&(o[l]=c)}),new k(t.segments,o)}}function Cc(t,i,e){let n=0,o=i,l={match:!1,pathIndex:0,commandIndex:0};for(;o<t.segments.length;){if(n>=e.length)return l;let c=t.segments[o],d=e[n];if(un(d))break;let u=`${d}`,m=n<e.length-1?e[n+1]:null;if(o>0&&u===void 0)break;if(u&&m&&typeof m=="object"&&m.outlets===void 0){if(!Ia(u,m,c))return l;n+=2}else{if(!Ia(u,{},c))return l;n++}o++}return{match:!0,pathIndex:o,commandIndex:n}}function Br(t,i,e){let n=t.segments.slice(0,i),o=0;for(;o<e.length;){let l=e[o];if(un(l)){let u=Dc(l.outlets);return new k(n,u)}if(o===0&&pi(e[0])){let u=t.segments[i];n.push(new Ze(u.path,ka(e[0]))),o++;continue}let c=un(l)?l.outlets[C]:`${l}`,d=o<e.length-1?e[o+1]:null;c&&d&&pi(d)?(n.push(new Ze(c,ka(d))),o+=2):(n.push(new Ze(c,{})),o++)}return new k(n,{})}function Dc(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=Br(new k([],{}),0,n))}),i}function ka(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function Ia(t,i,e){return t==e.path&&ke(i,e.parameters)}var St="imperative",$=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})($||{}),ue=class{id;url;constructor(i,e){this.id=i,this.url=e}},Qe=class extends ue{type=$.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",o=null){super(i,e),this.navigationTrigger=n,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},me=class extends ue{urlAfterRedirects;type=$.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},K=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(K||{}),At=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(At||{}),ve=class extends ue{reason;code;type=$.NavigationCancel;constructor(i,e,n,o){super(i,e),this.reason=n,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Za(t){return t instanceof ve&&(t.code===K.Redirect||t.code===K.SupersededByNewNavigation)}var Ie=class extends ue{reason;code;type=$.NavigationSkipped;constructor(i,e,n,o){super(i,e),this.reason=n,this.code=o}},lt=class extends ue{error;target;type=$.NavigationError;constructor(i,e,n,o){super(i,e),this.error=n,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},mn=class extends ue{urlAfterRedirects;state;type=$.RoutesRecognized;constructor(i,e,n,o){super(i,e),this.urlAfterRedirects=n,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gi=class extends ue{urlAfterRedirects;state;type=$.GuardsCheckStart;constructor(i,e,n,o){super(i,e),this.urlAfterRedirects=n,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},vi=class extends ue{urlAfterRedirects;state;shouldActivate;type=$.GuardsCheckEnd;constructor(i,e,n,o,l){super(i,e),this.urlAfterRedirects=n,this.state=o,this.shouldActivate=l}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},yi=class extends ue{urlAfterRedirects;state;type=$.ResolveStart;constructor(i,e,n,o){super(i,e),this.urlAfterRedirects=n,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ei=class extends ue{urlAfterRedirects;state;type=$.ResolveEnd;constructor(i,e,n,o){super(i,e),this.urlAfterRedirects=n,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},bi=class{route;type=$.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},_i=class{route;type=$.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},xi=class{snapshot;type=$.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},wi=class{snapshot;type=$.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ci=class{snapshot;type=$.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Di=class{snapshot;type=$.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pt=class{routerEvent;position;anchor;scrollBehavior;type=$.Scroll;constructor(i,e,n,o){this.routerEvent=i,this.position=e,this.anchor=n,this.scrollBehavior=o}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},Ot=class{},hn=class{},kt=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Sc(t){return!(t instanceof Ot)&&!(t instanceof kt)&&!(t instanceof hn)}var Si=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new dt(this.rootInjector)}},dt=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let o=this.getOrCreateContext(e);o.outlet=n,this.contexts.set(e,o)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Si(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(x(ie))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mi=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=$r(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=$r(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Hr(i,this._root);return e.length<2?[]:e[e.length-2].children.map(o=>o.value).filter(o=>o!==i)}pathFromRoot(i){return Hr(i,this._root).map(e=>e.value)}};function $r(t,i){if(t===i.value)return i;for(let e of i.children){let n=$r(t,e);if(n)return n}return null}function Hr(t,i){if(t===i.value)return[i];for(let e of i.children){let n=Hr(t,e);if(n.length)return n.unshift(i),n}return[]}var de=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ct(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var pn=class extends Mi{snapshot;constructor(i,e){super(i),this.snapshot=e,to(this,i)}toString(){return this.snapshot.toString()}};function Xa(t,i){let e=Mc(t,i),n=new pe([new Ze("",{})]),o=new pe({}),l=new pe({}),c=new pe({}),d=new pe(""),u=new ye(n,o,c,d,l,C,t,e.root);return u.snapshot=e.root,new pn(new de(u,[]),e)}function Mc(t,i){let e={},n={},o={},c=new It([],e,o,"",n,C,t,null,{},i);return new fn("",new de(c,[]))}var ye=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,o,l,c,d,u){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=o,this.dataSubject=l,this.outlet=c,this.component=d,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(N(m=>m[yn]))??b(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=o,this.data=l}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(N(i=>st(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(N(i=>st(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function eo(t,i,e="emptyOnly"){let n,{routeConfig:o}=t;return i!==null&&(e==="always"||o?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:f(f({},i.params),t.params),data:f(f({},i.data),t.data),resolve:f(f(f(f({},t.data),i.data),o?.data),t._resolvedData)}:n={params:f({},t.params),data:f({},t.data),resolve:f(f({},t.data),t._resolvedData??{})},o&&es(o)&&(n.resolve[yn]=o.title),n}var It=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[yn]}constructor(i,e,n,o,l,c,d,u,m,p){this.url=i,this.params=e,this.queryParams=n,this.fragment=o,this.data=l,this.outlet=c,this.component=d,this.routeConfig=u,this._resolve=m,this._environmentInjector=p}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=st(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=st(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},fn=class extends Mi{url;constructor(i,e){super(e),this.url=i,to(this,e)}toString(){return Qa(this._root)}};function to(t,i){i.value._routerState=t,i.children.forEach(e=>to(t,e))}function Qa(t){let i=t.children.length>0?` { ${t.children.map(Qa).join(", ")} } `:"";return`${t.value}${i}`}function Nr(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,ke(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),ke(i.params,e.params)||t.paramsSubject.next(e.params),tc(i.url,e.url)||t.urlSubject.next(e.url),ke(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Gr(t,i){let e=ke(t.params,i.params)&&ac(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||Gr(t.parent,i.parent))}function es(t){return typeof t.title=="string"||t.title===null}var ts=new _(""),En=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=C;activateEvents=new _e;deactivateEvents=new _e;attachEvents=new _e;detachEvents=new _e;routerOutletData=Zo();parentContexts=h(dt);location=h(cr);changeDetector=h(We);inputBinder=h(bn,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:o}=e.name;if(n)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new P(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new P(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new P(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new P(4013,!1);this._activatedRoute=e;let o=this.location,c=e.snapshot.component,d=this.parentContexts.getOrCreateContext(this.name).children,u=new qr(e,d,o.injector,this.routerOutletData);this.activated=o.createComponent(c,{index:o.length,injector:u,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Be]})}return t})(),qr=class{route;childContexts;parent;outletData;constructor(i,e,n,o){this.route=i,this.childContexts=e,this.parent=n,this.outletData=o}get(i,e){return i===ye?this.route:i===dt?this.childContexts:i===ts?this.outletData:this.parent.get(i,e)}},bn=new _(""),no=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,o=rr([n.queryParams,n.params,n.data]).pipe(ae(([l,c,d],u)=>(d=f(f(f({},l),c),d),u===0?b(d):Promise.resolve(d)))).subscribe(l=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let c=ta(n.component);if(!c){this.unsubscribeFromRouteData(e);return}for(let{templateName:d}of c.inputs)e.activatedComponentRef.setInput(d,l[d])});this.outletDataSubscriptions.set(e,o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),io=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,o){n&1&&He(0,"router-outlet")},dependencies:[En],encapsulation:2})}return t})();function ro(t){let i=t.children&&t.children.map(ro),e=i?q(f({},t),{children:i}):f({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==C&&(e.component=io),e}function Ac(t,i,e){let n=gn(t,i._root,e?e._root:void 0);return new pn(n,i)}function gn(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let o=Pc(t,i,e);return new de(n,o)}else{if(t.shouldAttach(i.value)){let l=t.retrieve(i.value);if(l!==null){let c=l.route;return c.value._futureSnapshot=i.value,c.children=i.children.map(d=>gn(t,d)),c}}let n=Oc(i.value),o=i.children.map(l=>gn(t,l));return new de(n,o)}}function Pc(t,i,e){return i.children.map(n=>{for(let o of e.children)if(t.shouldReuseRoute(n.value,o.value.snapshot))return gn(t,n,o);return gn(t,n)})}function Oc(t){return new ye(new pe(t.url),new pe(t.params),new pe(t.queryParams),new pe(t.fragment),new pe(t.data),t.outlet,t.component,t)}var Rt=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},ns="ngNavigationCancelingError";function Ai(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=Xe(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,o=is(!1,K.Redirect);return o.url=e,o.navigationBehaviorOptions=n,o}function is(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[ns]=!0,e.cancellationCode=i,e}function kc(t){return rs(t)&&Xe(t.url)}function rs(t){return!!t&&t[ns]}var Wr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,o,l){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=o,this.inputBindingEnabled=l}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),Nr(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let o=Ct(e);i.children.forEach(l=>{let c=l.value.outlet;this.deactivateRoutes(l,o[c],n),delete o[c]}),Object.values(o).forEach(l=>{this.deactivateRouteAndItsChildren(l,n)})}deactivateRoutes(i,e,n){let o=i.value,l=e?e.value:null;if(o===l)if(o.component){let c=n.getContext(o.outlet);c&&this.deactivateChildRoutes(i,e,c.children)}else this.deactivateChildRoutes(i,e,n);else l&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),o=n&&i.value.component?n.children:e,l=Ct(i);for(let c of Object.values(l))this.deactivateRouteAndItsChildren(c,o);if(n&&n.outlet){let c=n.outlet.detach(),d=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:c,route:i,contexts:d})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),o=n&&i.value.component?n.children:e,l=Ct(i);for(let c of Object.values(l))this.deactivateRouteAndItsChildren(c,o);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let o=Ct(e);i.children.forEach(l=>{this.activateRoutes(l,o[l.value.outlet],n),this.forwardEvent(new Di(l.value.snapshot))}),i.children.length&&this.forwardEvent(new wi(i.value.snapshot))}activateRoutes(i,e,n){let o=i.value,l=e?e.value:null;if(Nr(o),o===l)if(o.component){let c=n.getOrCreateContext(o.outlet);this.activateChildRoutes(i,e,c.children)}else this.activateChildRoutes(i,e,n);else if(o.component){let c=n.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let d=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),c.children.onOutletReAttached(d.contexts),c.attachRef=d.componentRef,c.route=d.route.value,c.outlet&&c.outlet.attach(d.componentRef,d.route.value),Nr(d.route.value),this.activateChildRoutes(i,null,c.children)}else c.attachRef=null,c.route=o,c.outlet&&c.outlet.activateWith(o,c.injector),this.activateChildRoutes(i,null,c.children)}else this.activateChildRoutes(i,null,n)}},Pi=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Mt=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Ic(t,i,e){let n=t._root,o=i?i._root:null;return sn(n,o,e,[n.value])}function Rc(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function Ft(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!Oo(t)?t:i.get(t):n}function sn(t,i,e,n,o={canDeactivateChecks:[],canActivateChecks:[]}){let l=Ct(i);return t.children.forEach(c=>{Tc(c,l[c.value.outlet],e,n.concat([c.value]),o),delete l[c.value.outlet]}),Object.entries(l).forEach(([c,d])=>cn(d,e.getContext(c),o)),o}function Tc(t,i,e,n,o={canDeactivateChecks:[],canActivateChecks:[]}){let l=t.value,c=i?i.value:null,d=e?e.getContext(t.value.outlet):null;if(c&&l.routeConfig===c.routeConfig){let u=Fc(c,l,l.routeConfig.runGuardsAndResolvers);u?o.canActivateChecks.push(new Pi(n)):(l.data=c.data,l._resolvedData=c._resolvedData),l.component?sn(t,i,d?d.children:null,n,o):sn(t,i,e,n,o),u&&d&&d.outlet&&d.outlet.isActivated&&o.canDeactivateChecks.push(new Mt(d.outlet.component,c))}else c&&cn(i,d,o),o.canActivateChecks.push(new Pi(n)),l.component?sn(t,null,d?d.children:null,n,o):sn(t,null,e,n,o);return o}function Fc(t,i,e){if(typeof e=="function")return X(i._environmentInjector,()=>e(t,i));switch(e){case"pathParamsChange":return!at(t.url,i.url);case"pathParamsOrQueryParamsChange":return!at(t.url,i.url)||!ke(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Gr(t,i)||!ke(t.queryParams,i.queryParams);default:return!Gr(t,i)}}function cn(t,i,e){let n=Ct(t),o=t.value;Object.entries(n).forEach(([l,c])=>{o.component?i?cn(c,i.children.getContext(l),e):cn(c,null,e):cn(c,i,e)}),o.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Mt(i.outlet.component,o)):e.canDeactivateChecks.push(new Mt(null,o)):e.canDeactivateChecks.push(new Mt(null,o))}function _n(t){return typeof t=="function"}function Nc(t){return typeof t=="boolean"}function Lc(t){return t&&_n(t.canLoad)}function jc(t){return t&&_n(t.canActivate)}function Uc(t){return t&&_n(t.canActivateChild)}function Vc(t){return t&&_n(t.canDeactivate)}function zc(t){return t&&_n(t.canMatch)}function os(t){return t instanceof Do||t?.name==="EmptyError"}var ci=Symbol("INITIAL_VALUE");function Tt(){return ae(t=>rr(t.map(i=>i.pipe(pt(1),Po(ci)))).pipe(N(i=>{for(let e of i)if(e!==!0){if(e===ci)return ci;if(e===!1||Bc(e))return e}return!0}),ge(i=>i!==ci),pt(1)))}function Bc(t){return Xe(t)||t instanceof Rt}function as(t){return t.aborted?b(void 0).pipe(pt(1)):new ht(i=>{let e=()=>{i.next(),i.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function ss(t){return In(as(t))}function $c(t){return De(i=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:o,canDeactivateChecks:l}}=i;return l.length===0&&o.length===0?b(q(f({},i),{guardsResult:!0})):Hc(l,e,n).pipe(De(c=>c&&Nc(c)?Gc(e,o,t):b(c)),N(c=>q(f({},i),{guardsResult:c})))})}function Hc(t,i,e){return J(t).pipe(De(n=>Kc(n.component,n.route,e,i)),ze(n=>n!==!0,!0))}function Gc(t,i,e){return J(i).pipe(it(n=>So(Wc(n.route.parent,e),qc(n.route,e),Yc(t,n.path),Jc(t,n.route))),ze(n=>n!==!0,!0))}function qc(t,i){return t!==null&&i&&i(new Ci(t)),b(!0)}function Wc(t,i){return t!==null&&i&&i(new xi(t)),b(!0)}function Jc(t,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return b(!0);let n=e.map(o=>Pn(()=>{let l=i._environmentInjector,c=Ft(o,l),d=jc(c)?c.canActivate(i,t):X(l,()=>c(i,t));return ct(d).pipe(ze())}));return b(n).pipe(Tt())}function Yc(t,i){let e=i[i.length-1],o=i.slice(0,i.length-1).reverse().map(l=>Rc(l)).filter(l=>l!==null).map(l=>Pn(()=>{let c=l.guards.map(d=>{let u=l.node._environmentInjector,m=Ft(d,u),p=Uc(m)?m.canActivateChild(e,t):X(u,()=>m(e,t));return ct(p).pipe(ze())});return b(c).pipe(Tt())}));return b(o).pipe(Tt())}function Kc(t,i,e,n){let o=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!o||o.length===0)return b(!0);let l=o.map(c=>{let d=i._environmentInjector,u=Ft(c,d),m=Vc(u)?u.canDeactivate(t,i,e,n):X(d,()=>u(t,i,e,n));return ct(m).pipe(ze())});return b(l).pipe(Tt())}function Zc(t,i,e,n,o){let l=i.canLoad;if(l===void 0||l.length===0)return b(!0);let c=l.map(d=>{let u=Ft(d,t),m=Lc(u)?u.canLoad(i,e):X(t,()=>u(i,e)),p=ct(m);return o?p.pipe(ss(o)):p});return b(c).pipe(Tt(),ls(n))}function ls(t){return wo(be(i=>{if(typeof i!="boolean")throw Ai(t,i)}),N(i=>i===!0))}function Xc(t,i,e,n,o,l){let c=i.canMatch;if(!c||c.length===0)return b(!0);let d=c.map(u=>{let m=Ft(u,t),p=zc(m)?m.canMatch(i,e,o):X(t,()=>m(i,e,o));return ct(p).pipe(ss(l))});return b(d).pipe(Tt(),ls(n))}var Ue=class t extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,t.prototype)}},vn=class t extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,t.prototype)}};function Qc(t){throw new P(4e3,!1)}function ed(t){throw is(!1,K.GuardRejected)}var Jr=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){return I(this,null,function*(){let n=[],o=e.root;for(;;){if(n=n.concat(o.segments),o.numberOfChildren===0)return n;if(o.numberOfChildren>1||!o.children[C])throw Qc(`${i.redirectTo}`);o=o.children[C]}})}applyRedirectCommands(i,e,n,o,l){return I(this,null,function*(){let c=yield td(e,o,l);if(c instanceof ee)throw new vn(c);let d=this.applyRedirectCreateUrlTree(c,this.urlSerializer.parse(c),i,n);if(c[0]==="/")throw new vn(d);return d})}applyRedirectCreateUrlTree(i,e,n,o){let l=this.createSegmentGroup(i,e.root,n,o);return new ee(l,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([o,l])=>{if(typeof l=="string"&&l[0]===":"){let d=l.substring(1);n[o]=e[d]}else n[o]=l}),n}createSegmentGroup(i,e,n,o){let l=this.createSegments(i,e.segments,n,o),c={};return Object.entries(e.children).forEach(([d,u])=>{c[d]=this.createSegmentGroup(i,u,n,o)}),new k(l,c)}createSegments(i,e,n,o){return e.map(l=>l.path[0]===":"?this.findPosParam(i,l,o):this.findOrReturn(l,n))}findPosParam(i,e,n){let o=n[e.path.substring(1)];if(!o)throw new P(4001,!1);return o}findOrReturn(i,e){let n=0;for(let o of e){if(o.path===i.path)return e.splice(n),o;n++}return i}};function td(t,i,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return hi(ct(X(e,()=>n(i))))}function nd(t,i){return t.providers&&!t._injector&&(t._injector=Bn(t.providers,i,`Route: ${t.path}`)),t._injector??i}function Ce(t){return t.outlet||C}function id(t,i){let e=t.filter(n=>Ce(n)===i);return e.push(...t.filter(n=>Ce(n)!==i)),e}var Yr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function cs(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function rd(t,i,e,n,o,l,c){let d=ds(t,i,e);if(!d.matched)return b(d);let u=cs(l(d));return n=nd(i,n),Xc(n,i,e,o,u,c).pipe(N(m=>m===!0?d:f({},Yr)))}function ds(t,i,e){if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?f({},Yr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let o=(i.matcher||Fa)(e,t,i);if(!o)return f({},Yr);let l={};Object.entries(o.posParams??{}).forEach(([d,u])=>{l[d]=u.path});let c=o.consumed.length>0?f(f({},l),o.consumed[o.consumed.length-1].parameters):l;return{matched:!0,consumedSegments:o.consumed,remainingSegments:e.slice(o.consumed.length),parameters:c,positionalParamSegments:o.posParams??{}}}function Ra(t,i,e,n,o){return e.length>0&&sd(t,e,n,o)?{segmentGroup:new k(i,ad(n,new k(e,t.children))),slicedSegments:[]}:e.length===0&&ld(t,e,n)?{segmentGroup:new k(t.segments,od(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new k(t.segments,t.children),slicedSegments:e}}function od(t,i,e,n){let o={};for(let l of e)if(ki(t,i,l)&&!n[Ce(l)]){let c=new k([],{});o[Ce(l)]=c}return f(f({},n),o)}function ad(t,i){let e={};e[C]=i;for(let n of t)if(n.path===""&&Ce(n)!==C){let o=new k([],{});e[Ce(n)]=o}return e}function sd(t,i,e,n){return e.some(o=>!ki(t,i,o)||!(Ce(o)!==C)?!1:!(n!==void 0&&Ce(o)===n))}function ld(t,i,e){return e.some(n=>ki(t,i,n))}function ki(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function cd(t,i,e){return i.length===0&&!t.children[e]}var Kr=class{};function dd(t,i,e,n,o,l,c="emptyOnly",d){return I(this,null,function*(){return new Zr(t,i,e,n,o,c,l,d).recognize()})}var ud=31,Zr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,o,l,c,d,u){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=o,this.urlTree=l,this.paramsInheritanceStrategy=c,this.urlSerializer=d,this.abortSignal=u,this.applyRedirects=new Jr(this.urlSerializer,this.urlTree)}noMatchError(i){return new P(4002,`'${i.segmentGroup}'`)}recognize(){return I(this,null,function*(){let i=Ra(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=yield this.match(i),o=new de(n,e),l=new fn("",o),c=qa(n,[],this.urlTree.queryParams,this.urlTree.fragment);return c.queryParams=this.urlTree.queryParams,l.url=this.urlSerializer.serialize(c),{state:l,tree:c}})}match(i){return I(this,null,function*(){let e=new It([],Object.freeze({}),Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),C,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,i,C,e),rootSnapshot:e}}catch(n){if(n instanceof vn)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Ue?this.noMatchError(n):n}})}processSegmentGroup(i,e,n,o,l){return I(this,null,function*(){if(n.segments.length===0&&n.hasChildren())return this.processChildren(i,e,n,l);let c=yield this.processSegment(i,e,n,n.segments,o,!0,l);return c instanceof de?[c]:[]})}processChildren(i,e,n,o){return I(this,null,function*(){let l=[];for(let u of Object.keys(n.children))u==="primary"?l.unshift(u):l.push(u);let c=[];for(let u of l){let m=n.children[u],p=id(e,u),g=yield this.processSegmentGroup(i,p,m,u,o);c.push(...g)}let d=us(c);return md(d),d})}processSegment(i,e,n,o,l,c,d){return I(this,null,function*(){for(let u of e)try{return yield this.processSegmentAgainstRoute(u._injector??i,e,u,n,o,l,c,d)}catch(m){if(m instanceof Ue||os(m))continue;throw m}if(cd(n,o,l))return new Kr;throw new Ue(n)})}processSegmentAgainstRoute(i,e,n,o,l,c,d,u){return I(this,null,function*(){if(Ce(n)!==c&&(c===C||!ki(o,l,n)))throw new Ue(o);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,o,n,l,c,u);if(this.allowRedirects&&d)return this.expandSegmentAgainstRouteUsingRedirect(i,o,e,n,l,c,u);throw new Ue(o)})}expandSegmentAgainstRouteUsingRedirect(i,e,n,o,l,c,d){return I(this,null,function*(){let{matched:u,parameters:m,consumedSegments:p,positionalParamSegments:g,remainingSegments:A}=ds(e,o,l);if(!u)throw new Ue(e);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>ud&&(this.allowRedirects=!1));let Z=this.createSnapshot(i,o,l,m,d);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let H=yield this.applyRedirects.applyRedirectCommands(p,o.redirectTo,g,cs(Z),i),z=yield this.applyRedirects.lineralizeSegments(o,H);return this.processSegment(i,n,e,z.concat(A),c,!1,d)})}createSnapshot(i,e,n,o,l){let c=new It(n,o,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,pd(e),Ce(e),e.component??e._loadedComponent??null,e,fd(e),i),d=eo(c,l,this.paramsInheritanceStrategy);return c.params=Object.freeze(d.params),c.data=Object.freeze(d.data),c}matchSegmentAgainstRoute(i,e,n,o,l,c){return I(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let d=ne=>this.createSnapshot(i,n,ne.consumedSegments,ne.parameters,c),u=yield hi(rd(e,n,o,i,this.urlSerializer,d,this.abortSignal));if(n.path==="**"&&(e.children={}),!u?.matched)throw new Ue(e);i=n._injector??i;let{routes:m}=yield this.getChildConfig(i,n,o),p=n._loadedInjector??i,{parameters:g,consumedSegments:A,remainingSegments:Z}=u,H=this.createSnapshot(i,n,A,g,c),{segmentGroup:z,slicedSegments:M}=Ra(e,A,Z,m,l);if(M.length===0&&z.hasChildren()){let ne=yield this.processChildren(p,m,z,H);return new de(H,ne)}if(m.length===0&&M.length===0)return new de(H,[]);let O=Ce(n)===l,B=yield this.processSegment(p,m,z,M,O?C:l,!0,H);return new de(H,B instanceof de?[B]:[])})}getChildConfig(i,e,n){return I(this,null,function*(){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let l=e._loadedNgModuleFactory;return l&&!e._loadedInjector&&(e._loadedInjector=l.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield hi(Zc(i,e,n,this.urlSerializer,this.abortSignal))){let l=yield this.configLoader.loadChildren(i,e);return e._loadedRoutes=l.routes,e._loadedInjector=l.injector,e._loadedNgModuleFactory=l.factory,l}throw ed(e)}return{routes:[],injector:i}})}};function md(t){t.sort((i,e)=>i.value.outlet===C?-1:e.value.outlet===C?1:i.value.outlet.localeCompare(e.value.outlet))}function hd(t){let i=t.value.routeConfig;return i&&i.path===""}function us(t){let i=[],e=new Set;for(let n of t){if(!hd(n)){i.push(n);continue}let o=i.find(l=>n.value.routeConfig===l.value.routeConfig);o!==void 0?(o.children.push(...n.children),e.add(o)):i.push(n)}for(let n of e){let o=us(n.children);i.push(new de(n.value,o))}return i.filter(n=>!e.has(n))}function pd(t){return t.data||{}}function fd(t){return t.resolve||{}}function gd(t,i,e,n,o,l,c){return De(d=>I(null,null,function*(){let{state:u,tree:m}=yield dd(t,i,e,n,d.extractedUrl,o,l,c);return q(f({},d),{targetSnapshot:u,urlAfterRedirects:m})}))}function vd(t){return De(i=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=i;if(!n.length)return b(i);let o=new Set(n.map(d=>d.route)),l=new Set;for(let d of o)if(!l.has(d))for(let u of ms(d))l.add(u);let c=0;return J(l).pipe(it(d=>o.has(d)?yd(d,e,t):(d.data=eo(d,d.parent,t).resolve,b(void 0))),be(()=>c++),or(1),De(d=>c===l.size?b(i):fe))})}function ms(t){let i=t.children.map(e=>ms(e)).flat();return[t,...i]}function yd(t,i,e){let n=t.routeConfig,o=t._resolve;return n?.title!==void 0&&!es(n)&&(o[yn]=n.title),Pn(()=>(t.data=eo(t,t.parent,e).resolve,Ed(o,t,i).pipe(N(l=>(t._resolvedData=l,t.data=f(f({},t.data),l),null)))))}function Ed(t,i,e){let n=jr(t);if(n.length===0)return b({});let o={};return J(n).pipe(De(l=>bd(t[l],i,e).pipe(ze(),be(c=>{if(c instanceof Rt)throw Ai(new Ve,c);o[l]=c}))),or(1),N(()=>o),On(l=>os(l)?fe:Co(l)))}function bd(t,i,e){let n=i._environmentInjector,o=Ft(t,n),l=o.resolve?o.resolve(i,e):X(n,()=>o(i,e));return ct(l)}function Ta(t){return ae(i=>{let e=t(i);return e?J(e).pipe(N(()=>i)):b(i)})}var oo=(()=>{class t{buildTitle(e){let n,o=e.root;for(;o!==void 0;)n=this.getResolvedTitleForRoute(o)??n,o=o.children.find(l=>l.outlet===C);return n}getResolvedTitleForRoute(e){return e.data[yn]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>h(hs),providedIn:"root"})}return t})(),hs=(()=>{class t extends oo{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(x(Aa))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),tt=new _("",{factory:()=>({})}),ut=new _(""),Ii=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=h(Jo);loadComponent(e,n){return I(this,null,function*(){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let o=I(this,null,function*(){try{let l=yield La(X(e,()=>n.loadComponent())),c=yield gs(fs(l));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=c,c}finally{this.componentLoaders.delete(n)}});return this.componentLoaders.set(n,o),o})}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let o=I(this,null,function*(){try{let l=yield ps(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=l.routes,n._loadedInjector=l.injector,n._loadedNgModuleFactory=l.factory,l}finally{this.childrenLoaders.delete(n)}});return this.childrenLoaders.set(n,o),o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ps(t,i,e,n){return I(this,null,function*(){let o=yield La(X(e,()=>t.loadChildren())),l=yield gs(fs(o)),c;l instanceof zo||Array.isArray(l)?c=l:c=yield i.compileModuleAsync(l),n&&n(t);let d,u,m=!1,p;return Array.isArray(c)?(u=c,m=!0):(d=c.create(e).injector,p=c,u=d.get(ut,[],{optional:!0,self:!0}).flat()),{routes:u.map(ro),injector:d,factory:p}})}function _d(t){return t&&typeof t=="object"&&"default"in t}function fs(t){return _d(t)?t.default:t}function gs(t){return I(this,null,function*(){return t})}var Ri=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>h(xd),providedIn:"root"})}return t})(),xd=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ao=new _(""),so=new _("");function vs(t,i,e){let n=t.get(so),o=t.get(L);if(!o.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(m=>setTimeout(m));let l,c=new Promise(m=>{l=m}),d=o.startViewTransition(()=>(l(),wd(t)));d.updateCallbackDone.catch(m=>{}),d.ready.catch(m=>{}),d.finished.catch(m=>{});let{onViewTransitionCreated:u}=n;return u&&X(t,()=>u({transition:d,from:i,to:e})),c}function wd(t){return new Promise(i=>{Un({read:()=>setTimeout(i)},{injector:t})})}var Cd=()=>{},lo=new _(""),Ti=(()=>{class t{currentNavigation=j(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=j(null);events=new he;transitionAbortWithErrorSubject=new he;configLoader=h(Ii);environmentInjector=h(ie);destroyRef=h(gt);urlSerializer=h(et);rootContexts=h(dt);location=h(Ye);inputBindingEnabled=h(bn,{optional:!0})!==null;titleStrategy=h(oo);options=h(tt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=h(Ri);createViewTransition=h(ao,{optional:!0});navigationErrorHandler=h(lo,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>b(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=o=>this.events.next(new bi(o)),n=o=>this.events.next(new _i(o));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;U(()=>{this.transitions?.next(q(f({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new pe(null),this.transitions.pipe(ge(n=>n!==null),ae(n=>{let o=!1,l=new AbortController,c=()=>!o&&this.currentTransition?.id===n.id;return b(n).pipe(ae(d=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",K.SupersededByNewNavigation),fe;this.currentTransition=n;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:d.id,initialUrl:d.rawUrl,extractedUrl:d.extractedUrl,targetBrowserUrl:typeof d.extras.browserUrl=="string"?this.urlSerializer.parse(d.extras.browserUrl):d.extras.browserUrl,trigger:d.source,extras:d.extras,previousNavigation:u?q(f({},u),{previousNavigation:null}):null,abort:()=>l.abort(),routesRecognizeHandler:d.routesRecognizeHandler,beforeActivateHandler:d.beforeActivateHandler});let m=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),p=d.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!m&&p!=="reload")return this.events.next(new Ie(d.id,this.urlSerializer.serialize(d.rawUrl),"",At.IgnoredSameUrlNavigation)),d.resolve(!1),fe;if(this.urlHandlingStrategy.shouldProcessUrl(d.rawUrl))return b(d).pipe(ae(g=>(this.events.next(new Qe(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?fe:Promise.resolve(g))),gd(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,l.signal),be(g=>{n.targetSnapshot=g.targetSnapshot,n.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(A=>(A.finalUrl=g.urlAfterRedirects,A)),this.events.next(new hn)}),ae(g=>J(n.routesRecognizeHandler.deferredHandle??b(void 0)).pipe(N(()=>g))),be(()=>{let g=new mn(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(g)}));if(m&&this.urlHandlingStrategy.shouldProcessUrl(d.currentRawUrl)){let{id:g,extractedUrl:A,source:Z,restoredState:H,extras:z}=d,M=new Qe(g,this.urlSerializer.serialize(A),Z,H);this.events.next(M);let O=Xa(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=q(f({},d),{targetSnapshot:O,urlAfterRedirects:A,extras:q(f({},z),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(B=>(B.finalUrl=A,B)),b(n)}else return this.events.next(new Ie(d.id,this.urlSerializer.serialize(d.extractedUrl),"",At.IgnoredByUrlHandlingStrategy)),d.resolve(!1),fe}),N(d=>{let u=new gi(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);return this.events.next(u),this.currentTransition=n=q(f({},d),{guards:Ic(d.targetSnapshot,d.currentSnapshot,this.rootContexts)}),n}),$c(d=>this.events.next(d)),ae(d=>{if(n.guardsResult=d.guardsResult,d.guardsResult&&typeof d.guardsResult!="boolean")throw Ai(this.urlSerializer,d.guardsResult);let u=new vi(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot,!!d.guardsResult);if(this.events.next(u),!c())return fe;if(!d.guardsResult)return this.cancelNavigationTransition(d,"",K.GuardRejected),fe;if(d.guards.canActivateChecks.length===0)return b(d);let m=new yi(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);if(this.events.next(m),!c())return fe;let p=!1;return b(d).pipe(vd(this.paramsInheritanceStrategy),be({next:()=>{p=!0;let g=new Ei(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(g)},complete:()=>{p||this.cancelNavigationTransition(d,"",K.NoDataFromResolver)}}))}),Ta(d=>{let u=p=>{let g=[];if(p.routeConfig?._loadedComponent)p.component=p.routeConfig?._loadedComponent;else if(p.routeConfig?.loadComponent){let A=p._environmentInjector;g.push(this.configLoader.loadComponent(A,p.routeConfig).then(Z=>{p.component=Z}))}for(let A of p.children)g.push(...u(A));return g},m=u(d.targetSnapshot.root);return m.length===0?b(d):J(Promise.all(m).then(()=>d))}),Ta(()=>this.afterPreactivation()),ae(()=>{let{currentSnapshot:d,targetSnapshot:u}=n,m=this.createViewTransition?.(this.environmentInjector,d.root,u.root);return m?J(m).pipe(N(()=>n)):b(n)}),pt(1),ae(d=>{let u=Ac(e.routeReuseStrategy,d.targetSnapshot,d.currentRouterState);this.currentTransition=n=d=q(f({},d),{targetRouterState:u}),this.currentNavigation.update(p=>(p.targetRouterState=u,p)),this.events.next(new Ot);let m=n.beforeActivateHandler.deferredHandle;return m?J(m.then(()=>d)):b(d)}),be(d=>{new Wr(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),c()&&(o=!0,this.currentNavigation.update(u=>(u.abort=Cd,u)),this.lastSuccessfulNavigation.set(U(this.currentNavigation)),this.events.next(new me(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects))),this.titleStrategy?.updateTitle(d.targetRouterState.snapshot),d.resolve(!0))}),In(as(l.signal).pipe(ge(()=>!o&&!n.targetRouterState),be(()=>{this.cancelNavigationTransition(n,l.signal.reason+"",K.Aborted)}))),be({complete:()=>{o=!0}}),In(this.transitionAbortWithErrorSubject.pipe(be(d=>{throw d}))),kn(()=>{l.abort(),o||this.cancelNavigationTransition(n,"",K.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),On(d=>{if(o=!0,this.destroyed)return n.resolve(!1),fe;if(rs(d))this.events.next(new ve(n.id,this.urlSerializer.serialize(n.extractedUrl),d.message,d.cancellationCode)),kc(d)?this.events.next(new kt(d.url,d.navigationBehaviorOptions)):n.resolve(!1);else{let u=new lt(n.id,this.urlSerializer.serialize(n.extractedUrl),d,n.targetSnapshot??void 0);try{let m=X(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(m instanceof Rt){let{message:p,cancellationCode:g}=Ai(this.urlSerializer,m);this.events.next(new ve(n.id,this.urlSerializer.serialize(n.extractedUrl),p,g)),this.events.next(new kt(m.redirectTo,m.navigationBehaviorOptions))}else throw this.events.next(u),d}catch(m){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(m)}}return fe}))}))}cancelNavigationTransition(e,n,o){let l=new ve(e.id,this.urlSerializer.serialize(e.extractedUrl),n,o);this.events.next(l),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=U(this.currentNavigation),o=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==o?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Dd(t){return t!==St}var ys=new _("");var Es=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>h(Sd),providedIn:"root"})}return t})(),Oi=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Sd=(()=>{class t extends Oi{static \u0275fac=(()=>{let e;return function(o){return(e||(e=Se(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fi=(()=>{class t{urlSerializer=h(et);options=h(tt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=h(Ye);urlHandlingStrategy=h(Ri);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ee;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:o}){let l=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,c=o??l;return c instanceof ee?this.urlSerializer.serialize(c):c}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:o}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,o),this.routerState=e):this.rawUrlTree=o}routerState=Xa(null,h(ie));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>h(Md),providedIn:"root"})}return t})(),Md=(()=>{class t extends Fi{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof Qe?this.updateStateMemento():e instanceof Ie?this.commitTransition(n):e instanceof mn?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Ot?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof ve&&!Za(e)?this.restoreHistory(n):e instanceof lt?this.restoreHistory(n,!0):e instanceof me&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:o,id:l}=n,{replaceUrl:c,state:d}=o;if(this.location.isCurrentPathEqualTo(e)||c){let u=this.browserPageId,m=f(f({},d),this.generateNgRouterState(l,u,n));this.location.replaceState(e,"",m)}else{let u=f(f({},d),this.generateNgRouterState(l,this.browserPageId+1,n));this.location.go(e,"",u)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,l=this.currentPageId-o;l!==0?this.location.historyGo(l):this.getCurrentUrlTree()===e.finalUrl&&l===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,o){return this.canceledNavigationResolution==="computed"?f({navigationId:e,\u0275routerPageId:n},this.routerUrlState(o)):f({navigationId:e},this.routerUrlState(o))}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Se(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ni(t,i){t.events.pipe(ge(e=>e instanceof me||e instanceof ve||e instanceof lt||e instanceof Ie),N(e=>e instanceof me||e instanceof Ie?0:(e instanceof ve?e.code===K.Redirect||e.code===K.SupersededByNewNavigation:!1)?2:1),ge(e=>e!==2),pt(1)).subscribe(()=>{i()})}var te=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=h(Bo);stateManager=h(Fi);options=h(tt,{optional:!0})||{};pendingTasks=h(Io);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=h(Ti);urlSerializer=h(et);location=h(Ye);urlHandlingStrategy=h(Ri);injector=h(ie);_events=new he;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=h(Es);injectorCleanup=h(ys,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=h(ut,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!h(bn,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new An;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let o=this.navigationTransitions.currentTransition,l=U(this.navigationTransitions.currentNavigation);if(o!==null&&l!==null){if(this.stateManager.handleRouterEvent(n,l),n instanceof ve&&n.code!==K.Redirect&&n.code!==K.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof me)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof kt){let c=n.navigationBehaviorOptions,d=this.urlHandlingStrategy.merge(n.url,o.currentRawUrl),u=f({scroll:o.extras.scroll,browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Dd(o.source)},c);this.scheduleNavigation(d,St,null,u,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}Sc(n)&&this._events.next(n)}catch(o){this.navigationTransitions.transitionAbortWithErrorSubject.next(o)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),St,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,o,l)=>{this.navigateToSyncWithBrowser(e,o,n,l)})}navigateToSyncWithBrowser(e,n,o,l){let c=o?.navigationId?o:null,d=o?.\u0275routerUrl??e;if(o?.\u0275routerUrl&&(l=q(f({},l),{browserUrl:e})),o){let m=f({},o);delete m.navigationId,delete m.\u0275routerPageId,delete m.\u0275routerUrl,Object.keys(m).length!==0&&(l.state=m)}let u=this.parseUrl(d);this.scheduleNavigation(u,n,c,l).catch(m=>{this.disposed||this.injector.get(Fn)(m)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return U(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ro),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:o,queryParams:l,fragment:c,queryParamsHandling:d,preserveFragment:u}=n,m=u?this.currentUrlTree.fragment:c,p=null;switch(d??this.options.defaultQueryParamsHandling){case"merge":p=f(f({},this.currentUrlTree.queryParams),l);break;case"preserve":p=this.currentUrlTree.queryParams;break;default:p=l||null}p!==null&&(p=this.removeEmptyProps(p));let g;try{let A=o?o.snapshot:this.routerState.snapshot.root;g=Wa(A)}catch(A){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),g=this.currentUrlTree.root}return Ja(g,e,p,m??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let o=Xe(e)?e:this.parseUrl(e),l=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(l,St,null,n)}navigate(e,n={skipLocationChange:!1}){return Ad(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(n){return this.console.warn(Bt(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let o;if(n===!0?o=f({},Xr):n===!1?o=f({},dn):o=f(f({},dn),n),Xe(e))return Ur(this.currentUrlTree,e,o);let l=this.parseUrl(e);return Ur(this.currentUrlTree,l,o)}removeEmptyProps(e){return Object.entries(e).reduce((n,[o,l])=>(l!=null&&(n[o]=l),n),{})}scheduleNavigation(e,n,o,l,c){if(this.disposed)return Promise.resolve(!1);let d,u,m;c?(d=c.resolve,u=c.reject,m=c.promise):m=new Promise((g,A)=>{d=g,u=A});let p=this.pendingTasks.add();return Ni(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(p))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:l,resolve:d,reject:u,promise:m,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),m.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ad(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new P(4008,!1)}var Pd=(()=>{class t{router=h(te);stateManager=h(Fi);fragment=j("");queryParams=j({});path=j("");serializer=h(et);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof me&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:o}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(o),this.path.set(this.serializer.serialize(new ee(n)))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Re=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=h(new Ko("href"),{optional:!0});reactiveHref=Yo(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return U(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return U(this._target)}_target=j(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return U(this._queryParams)}_queryParams=j(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return U(this._fragment)}_fragment=j(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return U(this._queryParamsHandling)}_queryParamsHandling=j(void 0);set state(e){this._state.set(e)}get state(){return U(this._state)}_state=j(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return U(this._info)}_info=j(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return U(this._relativeTo)}_relativeTo=j(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return U(this._preserveFragment)}_preserveFragment=j(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return U(this._skipLocationChange)}_skipLocationChange=j(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return U(this._replaceUrl)}_replaceUrl=j(!1);isAnchorElement;onChanges=new he;applicationErrorHandler=h(Fn);options=h(tt,{optional:!0});reactiveRouterState=h(Pd);constructor(e,n,o,l,c,d){this.router=e,this.route=n,this.tabIndexAttribute=o,this.renderer=l,this.el=c,this.locationStrategy=d;let u=c.nativeElement.tagName?.toLowerCase();this.isAnchorElement=u==="a"||u==="area"||!!(typeof customElements=="object"&&customElements.get(u)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=j(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Xe(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,o,l,c){let d=this._urlTree();if(d===null||this.isAnchorElement&&(e!==0||n||o||l||c||typeof this.target=="string"&&this.target!="_self"))return!0;let u={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(d,u)?.catch(m=>{this.applicationErrorHandler(m)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let o=this.renderer,l=this.el.nativeElement;n!==null?o.setAttribute(l,e,n):o.removeAttribute(l,e)}_urlTree=Kt(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=o=>o==="preserve"||o==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let n=this.routerLinkInput();return n===null||!this.router.createUrlTree?null:Xe(n)?n:this.router.createUrlTree(n,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,n)=>this.computeHref(e)===this.computeHref(n)});get urlTree(){return U(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(n){return new(n||t)(V(te),V(ye),sr("tabindex"),V($e),V(Y),V(we))};static \u0275dir=R({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,o){n&1&&Ge("click",function(c){return o.onClick(c.button,c.ctrlKey,c.shiftKey,c.altKey,c.metaKey)}),n&2&&Fe("href",o.reactiveHref(),Uo)("target",o._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Je],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Je],replaceUrl:[2,"replaceUrl","replaceUrl",Je],routerLink:"routerLink"},features:[Be]})}return t})(),uo=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new _e;link=h(Re,{optional:!0});constructor(e,n,o,l){this.router=e,this.element=n,this.renderer=o,this.cdr=l,this.routerEventsSubscription=e.events.subscribe(c=>{c instanceof me&&this.update()})}ngAfterContentInit(){b(this.links.changes,b(null)).pipe(zt()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=J(e).pipe(zt()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(e){let n=Array.isArray(e)?e:e.split(" ");this.classes=n.filter(o=>!!o)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(n=>{e?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let n=Od(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?f({},Xr):f({},dn);return o=>{let l=o.urlTree;return l?U(Qr(l,e,n)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(n){return new(n||t)(V(te),V(Y),V($e),V(We))};static \u0275dir=R({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(n,o,l){if(n&1&&Yt(l,Re,5),n&2){let c;Ae(c=Pe())&&(o.links=c)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Be]})}return t})();function Od(t){let i=t;return!!(i.paths||i.matrixParams||i.queryParams||i.fragment)}var xn=class{};var bs=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,o,l){this.router=e,this.injector=n,this.preloadingStrategy=o,this.loader=l}setUpPreloading(){this.subscription=this.router.events.pipe(ge(e=>e instanceof me),it(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,n){let o=[];for(let l of n){l.providers&&!l._injector&&(l._injector=Bn(l.providers,e,""));let c=l._injector??e;l._loadedNgModuleFactory&&!l._loadedInjector&&(l._loadedInjector=l._loadedNgModuleFactory.create(c).injector);let d=l._loadedInjector??c;(l.loadChildren&&!l._loadedRoutes&&l.canLoad===void 0||l.loadComponent&&!l._loadedComponent)&&o.push(this.preloadConfig(c,l)),(l.children||l._loadedRoutes)&&o.push(this.processRoutes(d,l.children??l._loadedRoutes))}return J(o).pipe(zt())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{if(e.destroyed)return b(null);let o;n.loadChildren&&n.canLoad===void 0?o=J(this.loader.loadChildren(e,n)):o=b(null);let l=o.pipe(De(c=>c===null?b(void 0):(n._loadedRoutes=c.routes,n._loadedInjector=c.injector,n._loadedNgModuleFactory=c.factory,this.processRoutes(c.injector??e,c.routes))));if(n.loadComponent&&!n._loadedComponent){let c=this.loader.loadComponent(e,n);return J([l,c]).pipe(zt())}else return l})}static \u0275fac=function(n){return new(n||t)(x(te),x(ie),x(xn),x(Ii))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_s=new _(""),kd=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=St;restoredId=0;store={};isHydrating=h(Lo,{optional:!0})??!1;urlSerializer=h(et);zone=h(re);viewportScroller=h(br);transitions=h(Ti);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&h(bt).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Qe?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof me?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Ie&&e.code===At.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Pt)||e.scrollBehavior==="manual")return;let n={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],n):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,n):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,n){if(this.isHydrating)return;let o=U(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>I(this,null,function*(){yield new Promise(l=>{setTimeout(l),typeof requestAnimationFrame<"u"&&requestAnimationFrame(l)}),this.zone.run(()=>{this.transitions.events.next(new Pt(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n,o))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){zn()};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function mo(t,...i){return ft([{provide:ut,multi:!0,useValue:t},[],{provide:ye,useFactory:xs},{provide:mr,multi:!0,useFactory:ws},i.map(e=>e.\u0275providers)])}function xs(){return h(te).routerState.root}function wn(t,i){return{\u0275kind:t,\u0275providers:i}}function ws(){let t=h(se);return i=>{let e=t.get(bt);if(i!==e.components[0])return;let n=t.get(te),o=t.get(Cs);t.get(ho)===1&&n.initialNavigation(),t.get(Ms,null,{optional:!0})?.setUpPreloading(),t.get(_s,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var Cs=new _("",{factory:()=>new he}),ho=new _("",{factory:()=>1});function Ds(){let t=[{provide:jo,useValue:!0},{provide:ho,useValue:0},ur(()=>{let i=h(se);return i.get(pr,Promise.resolve()).then(()=>new Promise(n=>{let o=i.get(te),l=i.get(Cs);Ni(o,()=>{n(!0)}),i.get(Ti).afterPreactivation=()=>(n(!0),l.closed?b(void 0):l),o.initialNavigation()}))})];return wn(2,t)}function Ss(){let t=[ur(()=>{h(te).setUpLocationChangeListener()}),{provide:ho,useValue:2}];return wn(3,t)}var Ms=new _("");function As(t){return wn(0,[{provide:Ms,useExisting:bs},{provide:xn,useExisting:t}])}function Ps(){return wn(8,[no,{provide:bn,useExisting:no}])}function Os(t){Ht("NgRouterViewTransitions");let i=[{provide:ao,useValue:vs},{provide:so,useValue:f({skipNextTransition:!!t?.skipInitialTransition},t)}];return wn(9,i)}var ks=[Ye,{provide:et,useClass:Ve},te,dt,{provide:ye,useFactory:xs},Ii,[]],Cn=(()=>{class t{constructor(){}static forRoot(e,n){return{ngModule:t,providers:[ks,[],{provide:ut,multi:!0,useValue:e},[],n?.errorHandler?{provide:lo,useValue:n.errorHandler}:[],{provide:tt,useValue:n||{}},n?.useHash?Rd():Td(),Id(),n?.preloadingStrategy?As(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?Fd(n):[],n?.bindToComponentInputs?Ps().\u0275providers:[],n?.enableViewTransitions?Os().\u0275providers:[],Nd()]}}static forChild(e){return{ngModule:t,providers:[{provide:ut,multi:!0,useValue:e}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({})}return t})();function Id(){return{provide:_s,useFactory:()=>{let t=h(br),i=h(tt);return i.scrollOffset&&t.setOffset(i.scrollOffset),new kd(i)}}}function Rd(){return{provide:we,useClass:gr}}function Td(){return{provide:we,useClass:Yn}}function Fd(t){return[t.initialNavigation==="disabled"?Ss().\u0275providers:[],t.initialNavigation==="enabledBlocking"?Ds().\u0275providers:[]]}var co=new _("");function Nd(){return[{provide:co,useFactory:ws},{provide:mr,multi:!0,useExisting:co}]}var Te=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({})}return t})();var Ld=["*"];var jd=new _("MAT_CARD_CONFIG"),Is=(()=>{class t{appearance;constructor(){let e=h(jd,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,o){n&2&&Oe("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Ld,decls:1,vars:0,template:function(n,o){n&1&&(Jt(),Me(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),Rs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var Ts=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var Fs=(()=>{class t{align="start";static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(n,o){n&2&&Oe("mat-mdc-card-actions-align-end",o.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})();var ji=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[Te]})}return t})();var Vd=()=>["/les1"],zd=()=>["/les2"],Bd=()=>["/les3"],$d=()=>["/les4"],Hd=()=>["/les5"],Gd=()=>["/les6"],qd=()=>["/les7"],Wd=()=>["/les8"],Jd=()=>["/les9"],Yd=()=>["/les10"],Ui=class t{lessons=[{title:"Lesson 1: Introduction to Economics",description:"Basic concepts of supply and demand.",url:"/les"},{title:"Lesson 2: Market Structures",description:"Understanding monopoly, oligopoly, and perfect competition."},{title:"Lesson 3: Economic Policies",description:"How governments control economic growth and inflation."}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-lessons"]],decls:81,vars:20,consts:[[1,"lesson-container"],[1,"lesson-card"],["mat-raised-button","",1,"custom-button",3,"routerLink"]],template:function(e,n){e&1&&(E(0,"div",0)(1,"mat-card",1)(2,"mat-card-title"),r(3,"Lesson 1: What is Functional Programming?"),w(),E(4,"mat-card-content"),r(5," An introduction to Functional Programming, covering key principles, advantages and Object-Oriented Programming. "),w(),E(6,"mat-card-actions")(7,"button",2),r(8," View Lesson "),w()()(),E(9,"mat-card",1)(10,"mat-card-title"),r(11,"Lesson 2: Basic Functional Programming Concepts"),w(),E(12,"mat-card-content"),r(13," covers essential functional programming concepts like first-class functions, higher-order functions, immutability, pure functions, and common array methods "),w(),E(14,"mat-card-actions")(15,"button",2),r(16," View Lesson "),w()()(),E(17,"mat-card",1)(18,"mat-card-title"),r(19,"Lesson 3: Intermediate Functional Programming Concepts"),w(),E(20,"mat-card-content"),r(21," introduces intermediate functional programming concepts like pattern matching, recursion, lazy evaluation, and currying in JavaScript and Python "),w(),E(22,"mat-card-actions")(23,"button",2),r(24," View Lesson "),w()()(),E(25,"mat-card",1)(26,"mat-card-title"),r(27,"Lesson 4: Advanced Functional Programming Concepts \u2013 Monads, Functors, and Concurrency"),w(),E(28,"mat-card-content"),r(29," This lesson explores advanced functional programming concepts like monads, functors, functional error handling, concurrency, and immutable data structures in JavaScript and Python. "),w(),E(30,"mat-card-actions")(31,"button",2),r(32," View Lesson "),w()()(),E(33,"mat-card",1)(34,"mat-card-title"),r(35,"Lesson 5: Functional Programming in Practice"),w(),E(36,"mat-card-content"),r(37," This lesson focuses on applying functional programming concepts to solve real-world problems with clean, efficient code. "),w(),E(38,"mat-card-actions")(39,"button",2),r(40," View Lesson "),w()()(),E(41,"mat-card",1)(42,"mat-card-title"),r(43,"Lesson 6: Real-World Applications and Projects - Simplified "),w(),E(44,"mat-card-content"),r(45," Focuses on using programming skills to build practical projects and real-world applications, demonstrating how to solve actual problems efficiently. "),w(),E(46,"mat-card-actions")(47,"button",2),r(48," View Lesson "),w()()(),E(49,"mat-card",1)(50,"mat-card-title"),r(51,"Lesson 7: Advanced Topics "),w(),E(52,"mat-card-content"),r(53," Explores complex programming concepts such as concurrency, design patterns, and performance optimization to deepen our understanding and enhance coding skills. "),w(),E(54,"mat-card-actions")(55,"button",2),r(56," View Lesson "),w()()(),E(57,"mat-card",1)(58,"mat-card-title"),r(59,"Lesson 8: Key Functional Programming Libraries in JavaScript and Python"),w(),E(60,"mat-card-content"),r(61," Covers essential functional programming libraries in JavaScript and Python, showcasing tools like Lodash, Ramda, and PyFunctional to simplify functional programming tasks. "),w(),E(62,"mat-card-actions")(63,"button",2),r(64," View Lesson "),w()()(),E(65,"mat-card",1)(66,"mat-card-title"),r(67,"Lesson 9: Case Studies and Industry Applications"),w(),E(68,"mat-card-content"),r(69," Explores real-world case studies and how functional programming is applied in various industries to solve complex problems and improve software development efficiency. "),w(),E(70,"mat-card-actions")(71,"button",2),r(72," View Lesson "),w()()(),E(73,"mat-card",1)(74,"mat-card-title"),r(75,"Lesson 10: Final Project"),w(),E(76,"mat-card-content"),r(77," In this lesson, students apply all the concepts learned throughout the course to build a comprehensive, functional programming-based project, demonstrating their understanding and skills. "),w(),E(78,"mat-card-actions")(79,"button",2),r(80," View Lesson "),w()()()()),e&2&&(y(7),W("routerLink",Q(10,Vd)),y(8),W("routerLink",Q(11,zd)),y(8),W("routerLink",Q(12,Bd)),y(8),W("routerLink",Q(13,$d)),y(8),W("routerLink",Q(14,Hd)),y(8),W("routerLink",Q(15,Gd)),y(8),W("routerLink",Q(16,qd)),y(8),W("routerLink",Q(17,Wd)),y(8),W("routerLink",Q(18,Jd)),y(8),W("routerLink",Q(19,Yd)))},dependencies:[ji,Is,Fs,Ts,Rs,Cn,Re],styles:[".lesson-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding:20px}.lesson-card[_ngcontent-%COMP%]{display:flex;justify-items:center;width:90%;margin:20px;padding:20px;border-radius:10px;box-shadow:0 4px 10px #0000001a;transition:transform .3s ease-in-out}.lesson-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:10px 0}.custom-button[_ngcontent-%COMP%]{background-color:#1e90ff!important;color:#fff!important;font-size:16px;padding:8px 16px;border-radius:30px!important;box-shadow:2px 2px 10px #0003;transition:.3s ease-in-out}.custom-button[_ngcontent-%COMP%]:hover{background-color:#add8e6!important;transform:scale(1.05)}.custom-button[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;font-size:16px;padding:10px 20px;border-radius:4px;text-transform:uppercase;font-weight:700;transition:background-color .3s,transform .3s ease-in-out;outline:none;border:none}.custom-button[_ngcontent-%COMP%]:hover{background-color:#45a049;transform:scale(1.05)}.custom-button[_ngcontent-%COMP%]:focus{outline:2px solid #4CAF50}"]})};var Vi=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-lessons1"]],decls:243,vars:6,consts:[[1,"container"],["id","what-is-fp"],["id","principles-advantages"],["id","comparison"],[1,"code-block"],["id","paradigms"],["id","fp-in-javascript-vs-python"],["id","summary"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 1: Introduction to Functional Programming (FP)"),a(),s(3,"section",1)(4,"h2"),r(5,"1. What is Functional Programming?"),a(),s(6,"p"),r(7," Functional Programming (FP) is a programming paradigm where programs are constructed by applying and composing "),s(8,"strong"),r(9,"functions"),a(),r(10,". Unlike imperative programming, which focuses on "),s(11,"strong"),r(12,"how to do things"),a(),r(13," (step-by-step instructions), FP focuses on "),s(14,"strong"),r(15,"what to do"),a(),r(16," by expressing logic as mathematical functions. "),a(),s(17,"h3"),r(18,"Key Characteristics of FP:"),a(),s(19,"ul")(20,"li")(21,"strong"),r(22,"Puer Functions:"),a(),r(23," Functions that always produce the same output for the same input and have no side effects."),a(),s(24,"li")(25,"strong"),r(26,"Immutability:"),a(),r(27," Data is never modified after it\u2019s created."),a(),s(28,"li")(29,"strong"),r(30,"First-Class and Higher-Order Functions:"),a(),r(31," Functions are treated as values and can be passed as arguments or returned from other functions."),a(),s(32,"li")(33,"strong"),r(34,"Declarative Style:"),a(),r(35," Code describes what should happen, not how it should happen."),a()()(),s(36,"section",2)(37,"h2"),r(38,"2. Functional Programming Principles and Advantages"),a(),s(39,"h3"),r(40,"Principles of FP:"),a(),s(41,"ol")(42,"li")(43,"strong"),r(44,"Pure Functions:"),a(),r(45," Avoid side effects and rely only on inputs to produce outputs."),a(),s(46,"li")(47,"strong"),r(48,"Immutability:"),a(),r(49," Data is never changed; instead, new data is created."),a(),s(50,"li")(51,"strong"),r(52,"Function Composition:"),a(),r(53," Combining simple functions to build complex ones."),a(),s(54,"li")(55,"strong"),r(56,"Declarative Code:"),a(),r(57,' Focus on the "what" rather than the "how."'),a()(),s(58,"h3"),r(59,"Advantages of FP:"),a(),s(60,"ul")(61,"li")(62,"strong"),r(63,"Predictability:"),a(),r(64," Pure functions and immutability make code easier to reason about."),a(),s(65,"li")(66,"strong"),r(67,"Concurrency:"),a(),r(68," Immutable data structures are inherently thread-safe."),a(),s(69,"li")(70,"strong"),r(71,"Reusability:"),a(),r(72," Small, pure functions can be reused across the codebase."),a(),s(73,"li")(74,"strong"),r(75,"Debugging:"),a(),r(76," Fewer side effects mean fewer bugs."),a()()(),s(77,"section",3)(78,"h2"),r(79,"3. Comparing Functional Programming with Imperative and Object-Oriented Programming"),a(),s(80,"h3"),r(81,"Imperative Programming:"),a(),s(82,"p"),r(83," Imperative programming focuses on "),s(84,"strong"),r(85,"how to do things"),a(),r(86," using statements that change the program\u2019s state. It works with loops and conditional structures. "),a(),s(87,"div",4)(88,"pre"),r(89,"        "),s(90,"code"),r(91),a(),r(92,`
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
      `),a()()(),s(210,"section",7)(211,"h2"),r(212,"Summary"),a(),s(213,"p"),r(214,"Functional Programming focuses on "),s(215,"strong"),r(216,"pure functions"),a(),r(217,", "),s(218,"strong"),r(219,"immutability"),a(),r(220,", and "),s(221,"strong"),r(222,"declarative code"),a(),r(223,"."),a(),s(224,"p"),r(225,"It contrasts with imperative and object-oriented programming by emphasizing "),s(226,"strong"),r(227,"what to do"),a(),r(228," rather than "),s(229,"strong"),r(230,"how to do it"),a(),r(231,"."),a(),s(232,"p"),r(233,"JavaScript and Python both support FP with features like "),s(234,"strong"),r(235,"first-class functions"),a(),r(236,", "),s(237,"strong"),r(238,"higher-order functions"),a(),r(239,", and "),s(240,"strong"),r(241,"immutability"),a(),r(242,"."),a()()()),e&2&&(y(91),le(`
        // JavaScript: Imperative
        let numbers = [1, 2, 3];
        for (let i = 0; i < numbers.length; i++) `,"{",`
          numbers[i] = numbers[i] * 2;
        `,"}",`
        console.log(numbers); // Output: [2, 4, 6]
        `),y(16),ce(`
        // JavaScript: OOP
        class Calculator `,"{",`
          add(a, b) `,"{",`
            return a + b;
          `,"}",`
        `,"}",`
        const calc = new Calculator();
        console.log(calc.add(2, 3)); // Output: 5
        `))},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.container[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}div[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.container[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}"]})};var zi=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-lessons2"]],decls:213,vars:22,consts:[[1,"lesson"],[1,"lesson-title"],[1,"section"],[1,"section-title"],[1,"section-description"],[1,"example-title"],[1,"example"],[1,"language-javascript"],[1,"language-python"],[1,"section","summary"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h2",1),r(2,"Lesson 2: Basic Functional Programming Concepts"),a(),s(3,"div",2)(4,"h3",3),r(5,"1. First-Class and Higher-Order Functions"),a(),s(6,"p",4),r(7," In functional programming, functions are treated as "),s(8,"strong"),r(9,"first-class citizens"),a(),r(10,", meaning they can be: "),a(),s(11,"ul")(12,"li"),r(13,"Assigned to variables."),a(),s(14,"li"),r(15,"Passed as arguments to other functions."),a(),s(16,"li"),r(17,"Returned from other functions."),a()(),s(18,"h4",5),r(19,"JavaScript Examples:"),a(),s(20,"div",6)(21,"h5"),r(22,"1. Function as an Argument"),a(),s(23,"pre")(24,"code",7),r(25),a()()(),s(26,"div",6)(27,"h5"),r(28,"2. Function as a Return Value"),a(),s(29,"pre")(30,"code",7),r(31),a()()(),s(32,"h4",5),r(33,"Python Examples:"),a(),s(34,"div",6)(35,"h5"),r(36,"1. Function as an Argument"),a(),s(37,"pre")(38,"code",8),r(39),a()()(),s(40,"div",6)(41,"h5"),r(42,"2. Function as a Return Value"),a(),s(43,"pre")(44,"code",8),r(45),a()()()(),s(46,"div",2)(47,"h3",3),r(48,"2. Immutability and Data Structures"),a(),s(49,"p",4),r(50,"Immutability means that once data is created, it cannot be changed. Instead, new data is created when modifications are needed."),a(),s(51,"h4",5),r(52,"JavaScript Examples:"),a(),s(53,"div",6)(54,"h5"),r(55,"1. Using "),s(56,"code"),r(57,"Object.freeze()"),a()(),s(58,"pre")(59,"code",7),r(60),a()()(),s(61,"div",6)(62,"h5"),r(63,"2. Using Immutable.js"),a(),s(64,"pre")(65,"code",7),r(66),a()()(),s(67,"h4",5),r(68,"Python Examples:"),a(),s(69,"div",6)(70,"h5"),r(71,"1. Using Tuples"),a(),s(72,"pre")(73,"code",8),r(74,`# Tuples are immutable
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
print(sum)  # Output: 10`),a()()()(),s(187,"div",9)(188,"h3",3),r(189,"Summary"),a(),s(190,"ul")(191,"li")(192,"strong"),r(193,"First-class and higher-order functions"),a(),r(194," allow functions to be treated as values."),a(),s(195,"li")(196,"strong"),r(197,"Immutability"),a(),r(198," ensures data is never modified, promoting predictability."),a(),s(199,"li")(200,"strong"),r(201,"Pure functions"),a(),r(202," avoid side effects and make code easier to reason about."),a(),s(203,"li")(204,"strong"),r(205,"Lambda expressions"),a(),r(206," provide concise syntax for small, anonymous functions."),a(),s(207,"li")(208,"strong"),r(209,"Map, filter, and reduce"),a(),r(210," are powerful tools for transforming and processing data."),a()(),s(211,"p"),r(212,"This lesson builds a strong foundation in functional programming concepts. In the next lesson, we\u2019ll explore more advanced topics!"),a()()()),e&2&&(y(25),le("// Function as an argument\nconst greet = (name) => \\`Hello, \\$","{","name","}",`!\\\`;
const greetUser = (greetFn, name) => greetFn(name);

console.log(greetUser(greet, "Alice")); // Output: Hello, Alice!`),y(6),ce("// Function as a return value\nconst createGreeter = (greeting) => (name) => \\`\\$","{","greeting","}",", \\$","{","name","}",`!\\\`;
const sayHello = createGreeter("Hello");
console.log(sayHello("Bob")); // Output: Hello, Bob!`),y(8),le(`# Function as an argument
def greet(name):
    return f"Hello, `,"{","name","}",`!"

def greet_user(greet_fn, name):
    return greet_fn(name)

print(greet_user(greet, "Alice"))  # Output: Hello, Alice!`),y(6),ce(`# Function as a return value
def create_greeter(greeting):
    def greeter(name):
        return f"`,"{","greeting","}",", ","{","name","}",`!"
    return greeter

say_hello = create_greeter("Hello")
print(say_hello("Bob"))  # Output: Hello, Bob!`),y(15),ce(`// Using Object.freeze()
const person = Object.freeze(`,"{",' name: "Alice", age: 25 ',"}",`);
// person.age = 30; // Error: Cannot assign to read-only property 'age'

console.log(person); // Output: `,"{",' name: "Alice", age: 25 ',"}"),y(6),le("const ","{"," List ","}",` = require("immutable");

const numbers = List([1, 2, 3]);
const newNumbers = numbers.push(4); // Creates a new list
console.log(newNumbers.toJS()); // Output: [1, 2, 3, 4]`),y(16),ce(`# frozenset is immutable
unique_numbers = frozenset(`,"{","1, 2, 3","}",`)
# unique_numbers.add(4)  # Error: 'frozenset' object has no attribute 'add'
print(unique_numbers)  # Output: frozenset(`,"{","1, 2, 3","}",")"))},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6;padding:20px}.lesson[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h2.lesson-title[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h2.lesson-title[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}.section[_ngcontent-%COMP%]{margin-bottom:30px}h3.section-title[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h3.section-title[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}p.section-description[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p.section-description[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}.example[_ngcontent-%COMP%]{margin-bottom:20px}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-bottom:10px}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}.language-javascript[_ngcontent-%COMP%], .language-python[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto;white-space:pre-wrap;word-wrap:break-word}.section.summary[_ngcontent-%COMP%]{background-color:#ecf0f1;padding:20px;border-radius:10px}.section.summary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:disc;margin-left:40px}.section.summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.2rem;color:#333;margin-bottom:10px}@media(max-width:768px){.lesson[_ngcontent-%COMP%]{padding:15px}h2.lesson-title[_ngcontent-%COMP%]{font-size:2rem}h3.section-title[_ngcontent-%COMP%]{font-size:1.75rem}p.section-description[_ngcontent-%COMP%]{font-size:1rem}code[_ngcontent-%COMP%]{font-size:.9rem}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.2rem}.section.summary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-left:30px}.section.summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1rem}}@media(max-width:480px){h2.lesson-title[_ngcontent-%COMP%]{font-size:1.75rem}h3.section-title[_ngcontent-%COMP%]{font-size:1.5rem}.lesson[_ngcontent-%COMP%]{padding:10px}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1rem}.section.summary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-left:20px}}"]})};var Bi=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-lesson3"]],decls:278,vars:30,consts:[[1,"lesson"],["id","pattern-matching"],["id","recursion"],["id","lazy-evaluation"],["id","type-systems"],["id","currying"],["id","summary"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 3: Intermediate Functional Programming Concepts"),a(),s(3,"section",1)(4,"h2"),r(5,"1. Pattern Matching"),a(),s(6,"h3"),r(7,"What is Pattern Matching?"),a(),s(8,"p"),r(9,"Pattern matching is a way to check a value against a pattern and extract data from it. It\u2019s a powerful feature for working with complex data structures."),a(),s(10,"h4"),r(11,"Pattern Matching in JavaScript"),a(),s(12,"h5"),r(13,"1. Destructuring"),a(),s(14,"pre")(15,"code"),r(16),a()(),s(17,"p")(18,"strong"),r(19,"Explanation:"),a(),r(20," Destructuring allows you to unpack values from arrays or properties from objects into distinct variables."),a(),s(21,"h5"),r(22,"2. Switch-Case"),a(),s(23,"pre")(24,"code"),r(25),a()(),s(26,"p")(27,"strong"),r(28,"Explanation:"),a(),r(29," The "),s(30,"code"),r(31,"switch-case"),a(),r(32," statement matches the value of "),s(33,"code"),r(34,"day"),a(),r(35," and returns the corresponding result."),a(),s(36,"h4"),r(37,"Pattern Matching in Python"),a(),s(38,"h5"),r(39,"1. Match Statement (Python 3.10+)"),a(),s(40,"pre")(41,"code"),r(42,`def get_day_type(day):
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
  print(add_five(3))  # Output: 8`),a()(),s(248,"p")(249,"strong"),r(250,"Explanation:"),a(),s(251,"code"),r(252,"functools.partial"),a(),r(253," creates a new function with the first argument fixed."),a()(),s(254,"section",6)(255,"h2"),r(256,"Summary"),a(),s(257,"ul")(258,"li")(259,"strong"),r(260,"Pattern matching:"),a(),r(261," simplifies working with complex data structures."),a(),s(262,"li")(263,"strong"),r(264,"Recursion:"),a(),r(265," is a powerful technique for solving problems like tree traversal."),a(),s(266,"li")(267,"strong"),r(268,"Lazy evaluation:"),a(),r(269," delays computation until needed, useful for infinite sequences."),a(),s(270,"li")(271,"strong"),r(272,"Type systems:"),a(),r(273," in JavaScript and Python provide flexibility and safety."),a(),s(274,"li")(275,"strong"),r(276,"Currying and partial application:"),a(),r(277," enable flexible function composition."),a()()()()),e&2&&(y(16),ce(`const [a, b] = [1, 2];
  console.log(a, b); // Output: 1 2
  
  const `,"{"," name, age ","}"," = ","{",' name: "Alice", age: 25 ',"}",`;
  console.log(name, age); // Output: Alice 25`),y(9),ce("const getDayType = (day) => ","{",`
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
  
  console.log(getDayType("Monday")); // Output: Weekday`),y(41),le("const fibonacci = (n) => ","{",`
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  `,"}",`;
  
  console.log(fibonacci(6)); // Output: 8`),y(12),Gn("const tree = ","{",`
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
  
  traverse(tree); // Output: 1 2 3`),y(26),qo("tree = ","{",`
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
  
  traverse(tree)  # Output: 1 2 3`),y(14),le("const factorial = (n, acc = 1) => ","{",`
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc); // Tail-recursive call
  `,"}",`;
  
  console.log(factorial(5)); // Output: 120`),y(33),ce("function* fibonacciSequence() ","{",`
    let [a, b] = [0, 1];
    while (true) `,"{",`
      yield a;
      [a, b] = [b, a + b];
    `,"}",`
  `,"}",`
  
  const fib = fibonacciSequence();
  console.log(fib.next().value); // Output: 0
  console.log(fib.next().value); // Output: 1
  console.log(fib.next().value); // Output: 1`))},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6;padding:20px}.lesson[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:30px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:40px}section[_ngcontent-%COMP%]{margin-bottom:40px}h2[_ngcontent-%COMP%]{font-size:2rem;color:#2980b9;margin-bottom:15px;border-bottom:2px solid #2980b9;padding-bottom:5px}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{color:#34495e;margin-top:20px;margin-bottom:10px}p[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:20px}strong[_ngcontent-%COMP%]{font-weight:700;color:#2980b9}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;white-space:pre-wrap;word-wrap:break-word;margin:10px 0}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px;color:#2c3e50}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:disc}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#2980b9;transform:translate(5px)}.example[_ngcontent-%COMP%]{margin-bottom:20px}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-bottom:10px}#summary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:disc;margin-left:40px}#summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.2rem;color:#333;margin-bottom:10px}@media(max-width:768px){.lesson[_ngcontent-%COMP%]{padding:20px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}code[_ngcontent-%COMP%]{font-size:.9rem}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.2rem}ul[_ngcontent-%COMP%]{margin-left:15px}}@media(max-width:480px){.lesson[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], .example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1rem}ul[_ngcontent-%COMP%]{margin-left:10px}li[_ngcontent-%COMP%]{font-size:1rem}}"]})};var $i=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-lesson4"]],decls:177,vars:32,consts:[[1,"container"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 4"),a(),s(3,"section")(4,"h2")(5,"strong"),r(6,"1. Monads (in JavaScript and Python)"),a()(),s(7,"h3"),r(8,"What is a Monad?"),a(),s(9,"p"),r(10," A monad is a design pattern in functional programming that allows you to structure computations in a sequence. It\u2019s like a container that wraps a value and provides a way to apply functions to that value while handling side effects or additional context (like error handling, async operations, etc.). "),a(),s(11,"p"),r(12,"Think of a monad as a box. You put a value inside the box, and the box provides rules for how you can interact with that value."),a(),s(13,"h4"),r(14,"Monads in JavaScript"),a(),s(15,"h5"),r(16,"Example 1: "),s(17,"strong"),r(18,"Promise Monad"),a()(),s(19,"pre")(20,"code"),r(21),a()(),s(22,"p"),r(23,"Explanation:"),a(),s(24,"ul")(25,"li"),r(26,"`fetchData()` returns a `Promise` that resolves to `42` after 1 second."),a(),s(27,"li"),r(28,"`.then()` is used to chain operations. Each `.then()` applies a function to the value inside the `Promise`."),a(),s(29,"li"),r(30,"This is monadic behavior because the `Promise` manages the async context for you."),a()(),s(31,"h5"),r(32,"Example 2: "),s(33,"strong"),r(34,"Maybe Monad"),a()(),s(35,"pre")(36,"code"),r(37),a()(),s(38,"p"),r(39,"Explanation:"),a(),s(40,"ul")(41,"li"),r(42,"`Maybe.of(value)` wraps a value in a `Maybe` container."),a(),s(43,"li"),r(44,"`.map(fn)` applies a function `fn` to the value inside the `Maybe` if the value is not `null` or `undefined`."),a(),s(45,"li"),r(46,"If the value is `null` or `undefined`, the function is not applied, and the computation stops safely."),a()(),s(47,"h5"),r(48,"Example 3: "),s(49,"strong"),r(50,"Maybe Monad with Safe Handling"),a()(),s(51,"pre")(52,"code"),r(53),a()(),s(54,"p"),r(55,"Explanation: Safe handling of a user object, with no errors thrown if `null` is passed in."),a()(),s(56,"section")(57,"h2")(58,"strong"),r(59,"2. Functors and Applicative Functors"),a()(),s(60,"h3"),r(61,"What is a Functor?"),a(),s(62,"p"),r(63," A functor is any type that implements a `map` method. It\u2019s a container that allows you to apply a function to the value inside it. "),a(),s(64,"h4"),r(65,"Functors in JavaScript"),a(),s(66,"h5"),r(67,"Example: "),s(68,"strong"),r(69,"Array as a Functor"),a()(),s(70,"pre")(71,"code"),r(72,`
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
    `),a()(),s(175,"p"),r(176,"Explanation: `pvector` is an immutable list. Operations like `map` return a new `pvector`."),a()()()),e&2&&(y(21),ce(`
const fetchData = () => `,"{",`
  return new Promise((resolve) => `,"{",`
    setTimeout(() => resolve(42), 1000); // Simulate async operation
  `,"}",`);
`,"}",`;

fetchData()
  .then((data) => data * 2) // Apply a function to the value inside the Promise
  .then((result) => console.log(result)); // Output: 84 after 1 second
    `),y(16),Gn(`
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
    `),y(16),le(`
const safeGetUser = (id) => id ? Maybe.of(`,"{"," id, name: 'John Doe' ","}",`) : Maybe.of(null);

safeGetUser(null)
  .map((user) => user.name)
  .map((name) => console.log(name)); // No output (no error)
    `),y(60),Wo([`
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
    `]),y(22),le(`
const fetchData = async () => `,"{",`
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
`,"}",`;

fetchData().then((data) => console.log(data));
    `),y(28),le(`
import `,"{"," List ","}",` from "immutable";

const numbers = List([1, 2, 3]);
const doubled = numbers.map((x) => x * 2); // List [2, 4, 6]
    `))},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6;padding:20px}.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:30px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:40px}section[_ngcontent-%COMP%]{margin-bottom:40px}h2[_ngcontent-%COMP%]{font-size:2rem;color:#2980b9;margin-bottom:15px;border-bottom:2px solid #2980b9;padding-bottom:5px}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{color:#34495e;margin-top:20px;margin-bottom:10px}p[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:20px}strong[_ngcontent-%COMP%]{font-weight:700;color:#2980b9}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;white-space:pre-wrap;word-wrap:break-word;margin:10px 0}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px;color:#2c3e50}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:disc}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#2980b9;transform:translate(5px)}.example[_ngcontent-%COMP%]{margin-bottom:20px}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-bottom:10px}#summary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:disc;margin-left:40px}#summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.2rem;color:#333;margin-bottom:10px}@media(max-width:768px){.container[_ngcontent-%COMP%]{padding:20px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}code[_ngcontent-%COMP%]{font-size:.9rem}.example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.2rem}ul[_ngcontent-%COMP%]{margin-left:15px}}@media(max-width:480px){.container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], .example[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1rem}ul[_ngcontent-%COMP%]{margin-left:10px}li[_ngcontent-%COMP%]{font-size:1rem}}"]})};var Kd=()=>["/lessons"],Hi=class t{text="Introduction To Functional Programming";typingSpeed=100;ngAfterViewInit(){this.startTyping()}startTyping(){let i=0,e=document.getElementById("typed-text"),n=document.getElementById("start-btn"),o=setInterval(()=>{i<this.text.length?(e.innerHTML+=this.text.charAt(i),i++):(clearInterval(o),setTimeout(()=>{n.classList.add("show-button")},1e3))},this.typingSpeed)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-home"]],decls:8,vars:2,consts:[[1,"container"],[1,"content"],[1,"typing-text"],["id","typed-text"],[1,"cursor"],["id","start-btn",1,"btn",3,"routerLink"]],template:function(e,n){e&1&&(E(0,"div",0)(1,"div",1)(2,"h1",2),He(3,"span",3),E(4,"span",4),r(5,"\u2022"),w()(),E(6,"button",5),r(7,"Get Started"),w()()()),e&2&&(y(6),W("routerLink",Q(1,Kd)))},dependencies:[Re],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#fff}.content[_ngcontent-%COMP%]{text-align:center}.typing-text[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:orange;white-space:nowrap;overflow:hidden;display:flex;align-items:center;justify-content:center}.cursor[_ngcontent-%COMP%]{color:orange;font-size:2rem;margin-left:5px;opacity:1;animation:_ngcontent-%COMP%_blink .8s infinite}.btn[_ngcontent-%COMP%]{margin-top:20px;padding:12px 24px;font-size:1.2rem;font-weight:700;color:#fff;background-color:#1e90ff;border:none;border-radius:8px;cursor:pointer;opacity:0;transform:translateY(20px);transition:opacity 1s ease-in-out,transform .5s ease-in-out}@keyframes _ngcontent-%COMP%_blink{50%{opacity:0}}.show-button[_ngcontent-%COMP%]{opacity:1!important;transform:translateY(0)!important}"]})};var Xd=new _("",{factory:()=>Ns}),Ns="always";var Qd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({})}return t})();var Ls=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Xd,useValue:e.callSetDisabledState??Ns}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[Qd]})}return t})();function Dn(t,i=0){return js(t)?Number(t):arguments.length===2?i:0}function js(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Nt(t){return t instanceof Y?t.nativeElement:t}function Lt(t){return t!=null&&`${t}`!="false"}var po;try{po=typeof Intl<"u"&&Intl.v8BreakIterator}catch(t){po=!1}var jt=(()=>{class t{_platformId=h(vt);isBrowser=this._platformId?sa(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||po)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function fo(t){return t.composedPath?t.composedPath()[0]:t.target}var Sn;function Us(){if(Sn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Sn=!0}))}finally{Sn=Sn||!1}return Sn}function Gi(t){return Us()?t:!!t.capture}var qi=new WeakMap,Mn=(()=>{class t{_appRef;_injector=h(se);_environmentInjector=h(ie);load(e){let n=this._appRef=this._appRef||this._injector.get(bt),o=qi.get(n);o||(o={loaders:new Set,refs:[]},qi.set(n,o),n.onDestroy(()=>{qi.get(n)?.refs.forEach(l=>l.destroy()),qi.delete(n)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(ea(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function go(t){return t.buttons===0||t.detail===0}function vo(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Vs=new Set,mt,yo=(()=>{class t{_platform=h(jt);_nonce=h(yt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):nu}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&tu(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function tu(t,i){if(!Vs.has(t))try{mt||(mt=document.createElement("style"),i&&mt.setAttribute("nonce",i),mt.setAttribute("type","text/css"),document.head.appendChild(mt)),mt.sheet&&(mt.sheet.insertRule(`@media ${t} {body{ }}`,0),Vs.add(t))}catch(e){console.error(e)}}function nu(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}function iu(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let i=0;i<t.addedNodes.length;i++)if(!(t.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<t.removedNodes.length;i++)if(!(t.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var zs=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ru=(()=>{class t{_mutationObserverFactory=h(zs);_observedElements=new Map;_ngZone=h(re);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=Nt(e);return new ht(o=>{let c=this._observeElement(n).pipe(N(d=>d.filter(u=>!iu(u))),ge(d=>!!d.length)).subscribe(d=>{this._ngZone.run(()=>{o.next(d)})});return()=>{c.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new he,o=this._mutationObserverFactory.create(l=>n.next(l));o&&o.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:o,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:o}=this._observedElements.get(e);n&&n.disconnect(),o.complete(),this._observedElements.delete(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Bs=(()=>{class t{_contentObserver=h(ru);_elementRef=h(Y);event=new _e;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Dn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Ao(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",Je],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),$s=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({providers:[zs]})}return t})();var ou=new _("MATERIAL_ANIMATIONS"),Hs=null;function au(){return h(ou,{optional:!0})?.animationsDisabled||h(Nn,{optional:!0})==="NoopAnimations"?"di-disabled":(Hs??=h(yo).matchMedia("(prefers-reduced-motion)").matches,Hs?"reduced-motion":"enabled")}function Gs(){return au()!=="enabled"}var Ee=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Ee||{}),Eo=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ee.HIDDEN;constructor(i,e,n,o=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},qs=Gi({passive:!0,capture:!0}),bo=class{_events=new Map;addHandler(i,e,n,o){let l=this._events.get(e);if(l){let c=l.get(n);c?c.add(o):l.set(n,new Set([o]))}else this._events.set(e,new Map([[n,new Set([o])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,qs)})}removeHandler(i,e,n){let o=this._events.get(i);if(!o)return;let l=o.get(e);l&&(l.delete(n),l.size===0&&o.delete(e),o.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,qs)))}_delegateEventHandler=i=>{let e=fo(i);e&&this._events.get(i.type)?.forEach((n,o)=>{(o===e||o.contains(e))&&n.forEach(l=>l.handleEvent(i))})}},Ws={enterDuration:225,exitDuration:150},su=800,Js=Gi({passive:!0,capture:!0}),Ys=["mousedown","touchstart"],Ks=["mouseup","mouseleave","touchend","touchcancel"],lu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),Wi=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new bo;constructor(i,e,n,o,l){this._target=i,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=Nt(n)),l&&l.get(Mn).load(lu)}fadeInRipple(i,e,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),l=f(f({},Ws),n.animation);n.centered&&(i=o.left+o.width/2,e=o.top+o.height/2);let c=n.radius||cu(i,e,o),d=i-o.left,u=e-o.top,m=l.enterDuration,p=document.createElement("div");p.classList.add("mat-ripple-element"),p.style.left=`${d-c}px`,p.style.top=`${u-c}px`,p.style.height=`${c*2}px`,p.style.width=`${c*2}px`,n.color!=null&&(p.style.backgroundColor=n.color),p.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(p);let g=window.getComputedStyle(p),A=g.transitionProperty,Z=g.transitionDuration,H=A==="none"||Z==="0s"||Z==="0s, 0s"||o.width===0&&o.height===0,z=new Eo(this,p,n,H);p.style.transform="scale3d(1, 1, 1)",z.state=Ee.FADING_IN,n.persistent||(this._mostRecentTransientRipple=z);let M=null;return!H&&(m||l.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let O=()=>{M&&(M.fallbackTimer=null),clearTimeout(ne),this._finishRippleTransition(z)},B=()=>this._destroyRipple(z),ne=setTimeout(B,m+100);p.addEventListener("transitionend",O),p.addEventListener("transitioncancel",B),M={onTransitionEnd:O,onTransitionCancel:B,fallbackTimer:ne}}),this._activeRipples.set(z,M),(H||!m)&&this._finishRippleTransition(z),z}fadeOutRipple(i){if(i.state===Ee.FADING_OUT||i.state===Ee.HIDDEN)return;let e=i.element,n=f(f({},Ws),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",i.state=Ee.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Nt(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ys.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ks.forEach(e=>{this._triggerElement.addEventListener(e,this,Js)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Ee.FADING_IN?this._startFadeOutTransition(i):i.state===Ee.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=Ee.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Ee.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=go(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+su;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!vo(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Ee.VISIBLE||i.config.terminateOnPointerUp&&i.state===Ee.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Ys.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Ks.forEach(e=>i.removeEventListener(e,this,Js)),this._pointerUpEventsRegistered=!1))}};function cu(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),o=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+o*o)}var Zs=new _("mat-ripple-global-options");var Xs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var Qs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[Te]})}return t})();var el=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[Te]})}return t})();var tl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[Te]})}return t})();var du=["*"],uu=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,mu=["unscopedContent"],hu=["text"],pu=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],fu=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var gu=new _("ListOption"),vu=(()=>{class t{_elementRef=h(Y);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),yu=(()=>{class t{_elementRef=h(Y);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),Eu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),nl=(()=>{class t{_listOption=h(gu,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,hostVars:4,hostBindings:function(n,o){n&2&&Oe("mdc-list-item__start",o._isAlignedAtStart())("mdc-list-item__end",!o._isAlignedAtStart())}})}return t})(),bu=(()=>{class t extends nl{static \u0275fac=(()=>{let e;return function(o){return(e||(e=Se(t)))(o||t)}})();static \u0275dir=R({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Et]})}return t})(),_u=(()=>{class t extends nl{static \u0275fac=(()=>{let e;return function(o){return(e||(e=Se(t)))(o||t)}})();static \u0275dir=R({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Et]})}return t})(),xu=new _("MAT_LIST_CONFIG"),_o=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Lt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Lt(e))}_disabled=j(!1);_defaultOptions=h(xu,{optional:!0});static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,hostVars:1,hostBindings:function(n,o){n&2&&Fe("aria-disabled",o.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),wu=(()=>{class t{_elementRef=h(Y);_ngZone=h(re);_listBase=h(_o,{optional:!0});_platform=h(jt);_hostElement;_isButtonElement;_noopAnimations=Gs();_avatars;_icons;set lines(e){this._explicitLines=Dn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Lt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Lt(e))}_disabled=j(!1);_subscriptions=new An;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){h(Mn).load(Xs);let e=h(Zs,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Wi(this,this._ngZone,this._hostElement,this._platform,h(se)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Mo(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let n=this._explicitLines??this._inferLinesFromContent(),o=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",n===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",n===3),this._hasUnscopedTextContent){let l=this._titles.length===0&&n===1;o.classList.toggle("mdc-list-item__primary-text",l),o.classList.toggle("mdc-list-item__secondary-text",!l)}else o.classList.remove("mdc-list-item__primary-text"),o.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,contentQueries:function(n,o,l){if(n&1&&Yt(l,bu,4)(l,_u,4),n&2){let c;Ae(c=Pe())&&(o._avatars=c),Ae(c=Pe())&&(o._icons=c)}},hostVars:4,hostBindings:function(n,o){n&2&&(Fe("aria-disabled",o.disabled)("disabled",o._isButtonElement&&o.disabled||null),Oe("mdc-list-item--disabled",o.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var il=(()=>{class t extends _o{static \u0275fac=(()=>{let e;return function(o){return(e||(e=Se(t)))(o||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[qn([{provide:_o,useExisting:t}]),Et],ngContentSelectors:du,decls:1,vars:0,template:function(n,o){n&1&&(Jt(),Me(0))},styles:[uu],encapsulation:2,changeDetection:0})}return t})(),rl=(()=>{class t extends wu{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Lt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Se(t)))(o||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(n,o,l){if(n&1&&Yt(l,yu,5)(l,vu,5)(l,Eu,5),n&2){let c;Ae(c=Pe())&&(o._lines=c),Ae(c=Pe())&&(o._titles=c),Ae(c=Pe())&&(o._meta=c)}},viewQuery:function(n,o){if(n&1&&Ho(mu,5)(hu,5),n&2){let l;Ae(l=Pe())&&(o._unscopedContent=l.first),Ae(l=Pe())&&(o._itemText=l.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(n,o){n&2&&(Fe("aria-current",o._getAriaCurrent()),Oe("mdc-list-item--activated",o.activated)("mdc-list-item--with-leading-avatar",o._avatars.length!==0)("mdc-list-item--with-leading-icon",o._icons.length!==0)("mdc-list-item--with-trailing-meta",o._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",o._hasBothLeadingAndTrailing())("_mat-animation-noopable",o._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Et],ngContentSelectors:fu,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(n,o){n&1&&(Jt(pu),Me(0),E(1,"span",1),Me(2,1),Me(3,2),E(4,"span",2,0),Ge("cdkObserveContent",function(){return o._updateItemLines(!0)}),Me(6,3),w()(),Me(7,4),Me(8,5),He(9,"div",3))},dependencies:[Bs],encapsulation:2,changeDetection:0})}return t})();var ol=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=T({imports:[$s,tl,el,Te,Qs]})}return t})();function Du(t,i){if(t&1){let e=$n();E(0,"mat-list-item",5),Ge("click",function(){let o=Rn(e).$index,l=qe().$implicit,c=qe();return Tn(c.selectOption(l.id,o+1))}),r(1),w()}if(t&2){let e=i.$implicit,n=i.$index,o=qe().$implicit,l=qe();W("ngClass",l.getClass(o.id,n+1)),y(),Go(" ",e," ")}}function Su(t,i){if(t&1&&(E(0,"div",1)(1,"h2"),r(2),w(),E(3,"mat-list"),qt(4,Du,2,2,"mat-list-item",4,Gt),w()()),t&2){let e=i.$implicit;y(2),Hn(e.question),y(2),Wt(e.options)}}var Ji=class t{constructor(i,e){this.http=i;this.route=e}quizzes=[];selectedAnswers={};submitted=!1;lessonId;ngOnInit(){this.route.params.subscribe(i=>{this.lessonId=+i.lessonId,this.loadQuizzes(this.lessonId)})}loadQuizzes(i){let e=`./lesson${i}.json`;this.http.get(e).subscribe(n=>{this.quizzes=n},n=>{console.error("Error loading quiz data:",n)})}selectOption(i,e){this.submitted||(this.selectedAnswers[i]=e)}submitAnswers(){this.submitted=!0}getClass(i,e){if(!this.submitted)return this.selectedAnswers[i]===e?"highlight":"";let n=this.quizzes.find(l=>l.id===i)?.answer===e,o=this.selectedAnswers[i]===e;return n?"correct":o?"incorrect":e===this.quizzes.find(l=>l.id===i)?.answer?"correct-answer":""}static \u0275fac=function(e){return new(e||t)(V(si),V(ye))};static \u0275cmp=D({type:t,selectors:[["app-quiz"]],decls:6,vars:0,consts:[[1,"quiz-container"],[1,"quiz-item"],[1,"button-container"],["mat-raised-button","",1,"custom-button",3,"click"],[3,"ngClass"],[3,"click","ngClass"]],template:function(e,n){e&1&&(E(0,"div",0),qt(1,Su,6,1,"div",1,Gt),E(3,"div",2)(4,"button",3),Ge("click",function(){return n.submitAnswers()}),r(5,"Submit"),w()()()),e&2&&(y(),Wt(n.quizzes))},dependencies:[Ls,Kn,vr,ol,il,rl],styles:[".quiz-container[_ngcontent-%COMP%]{width:90%;height:100vh;margin:20px auto}.quiz-item[_ngcontent-%COMP%]{margin-bottom:20px}mat-list-item[_ngcontent-%COMP%]{cursor:pointer;padding:10px;border:1px solid #ccc;margin-bottom:5px}mat-list-item.highlight[_ngcontent-%COMP%]{background-color:orange;color:#fff}mat-list-item.correct[_ngcontent-%COMP%]{background-color:#90ee90}mat-list-item.incorrect[_ngcontent-%COMP%]{background-color:#f08080}mat-list-item.correct-answer[_ngcontent-%COMP%]{background-color:#ff0}.button-container[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.custom-button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;font-size:16px;font-weight:700;padding:10px 20px;border-radius:8px;transition:transform .2s ease,background-color .2s ease}.custom-button[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.custom-button[_ngcontent-%COMP%]:active{transform:translateY(0)}"]})};var Yi=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-lessons5"]],decls:237,vars:0,consts:[[1,"lesson"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 5: Functional Programming in Practice"),a(),s(3,"h2"),r(4,"1. Functional Programming in JavaScript"),a(),s(5,"h3"),r(6,"Writing Pure Functions and Higher-Order Functions in JS"),a(),s(7,"h4"),r(8,"Pure Functions"),a(),s(9,"p")(10,"strong"),r(11,"What is a Pure Function?"),a()(),s(12,"p"),r(13,"A pure function is a function that:"),a(),s(14,"ul")(15,"li")(16,"strong"),r(17,"Always returns the same output for the same input"),a(),r(18," (deterministic)."),a(),s(19,"li")(20,"strong"),r(21,"Has no side effects"),a(),r(22," (doesn't modify external state or perform I/O operations)."),a()(),s(23,"p"),r(24,"Pure functions are predictable and easier to test and debug."),a(),s(25,"h4"),r(26,"Example of a Pure Function"),a(),s(27,"pre")(28,"code"),r(29,`const add = (a, b) => a + b;
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
  print(execute_strategy(strategy_multiply, 2, 3))  # 6`),a()(),s(218,"h2"),r(219,"Summary"),a(),s(220,"ul")(221,"li")(222,"strong"),r(223,"JavaScript"),a(),r(224,": Use pure functions, higher-order functions, and libraries like Ramda, Lodash FP, and RxJS."),a(),s(225,"li")(226,"strong"),r(227,"Python"),a(),r(228,": Use pure functions, higher-order functions, `functools`, and libraries like `toolz`, `fn`, and `PyFunctional`."),a(),s(229,"li")(230,"strong"),r(231,"Testing"),a(),r(232,": Use unit testing frameworks like Mocha, Jest, and `pytest`, and property-based testing with `jsverify` and `Hypothesis`."),a(),s(233,"li")(234,"strong"),r(235,"Design Patterns"),a(),r(236,": Use function composition, monads, and strategy patterns in both JavaScript and Python."),a()()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.lesson[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word;font-size:1.1rem}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}div[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.lesson[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}code[_ngcontent-%COMP%]{font-size:.95rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.lesson[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}ul[_ngcontent-%COMP%]{list-style-type:disc;padding-left:30px}li[_ngcontent-%COMP%]{font-size:1rem;color:#333}li[_ngcontent-%COMP%]:hover{color:#2980b9;cursor:pointer}pre[_ngcontent-%COMP%]{font-size:1rem;border-radius:5px;padding:10px}a[_ngcontent-%COMP%]{color:#3498db}a[_ngcontent-%COMP%]:hover{text-decoration:underline;color:#2980b9}"]})};var Ki=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-lessons8"]],decls:263,vars:0,consts:[[1,"lesson"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 8: Key Functional Programming Libraries in JavaScript and Python"),a(),s(3,"section")(4,"h2"),r(5,"1. Ramda: A Popular FP Library for JavaScript"),a(),s(6,"p")(7,"strong"),r(8,"What Makes Ramda Special?"),a()(),s(9,"ul")(10,"li")(11,"strong"),r(12,"Currying by Default:"),a(),r(13," All functions in Ramda are curried, allowing for partial application and reusability of functions."),a(),s(14,"li")(15,"strong"),r(16,"Immutability:"),a(),r(17," Ramda returns new data structures instead of modifying the original ones, preventing side effects."),a(),s(18,"li")(19,"strong"),r(20,"Composability:"),a(),r(21," Functions can be composed in a clean and readable way using Ramda."),a()(),s(22,"p")(23,"strong"),r(24,"Example: Curried Functions and Composition"),a()(),s(25,"pre")(26,"code"),r(27,`
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
      `),a()(),s(255,"p")(256,"strong"),r(257,"Explanation:"),a()(),s(258,"ul")(259,"li")(260,"strong"),r(261,"Immutability:"),a(),r(262," The numbers vector remains unchanged when we append a new value, and a new pvector is returned instead."),a()()()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.lesson[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}div[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.container[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}"]})};var Zi=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-lessons9"]],decls:171,vars:0,consts:[[1,"lesson-container"],["id","js-case-studies"],[1,"case-study"],["id","python-case-studies"],["id","summary"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 9: Case Studies and Industry Applications"),a(),s(3,"section",1)(4,"h2"),r(5,"1. Real-world Case Studies of Functional Programming in JavaScript"),a(),s(6,"div",2)(7,"h3"),r(8,"Netflix"),a(),s(9,"p"),r(10,"Netflix is a major video streaming platform that serves millions of users worldwide. To maintain scalability and reliability, Netflix uses JavaScript along with functional programming techniques."),a(),s(11,"h4"),r(12,"How Netflix Uses Functional Programming in JavaScript:"),a(),s(13,"ul")(14,"li")(15,"strong"),r(16,"Immutable Data Structures:"),a(),r(17," Netflix uses immutable data structures to ensure that data remains unchanged throughout the application lifecycle, reducing the risk of side effects."),a(),s(18,"li")(19,"strong"),r(20,"Declarative Programming with RxJS:"),a(),r(21," Netflix uses RxJS to manage complex data flows, especially with asynchronous streams."),a(),s(22,"li")(23,"strong"),r(24,"Function Composition:"),a(),r(25," Netflix uses functional programming to compose and pipeline data transformations, reducing complexity."),a()(),s(26,"h4"),r(27,"Example: Managing Asynchronous Streams with RxJS"),a(),s(28,"pre"),r(29,"          "),s(30,"code"),r(31,`
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
        `),a(),s(146,"h4"),r(147,"How This Helps in Distributed Systems:"),a(),s(148,"ul")(149,"li")(150,"strong"),r(151,"Task Scheduling:"),a(),r(152," Celery uses functional programming to schedule and execute tasks concurrently in a distributed environment."),a(),s(153,"li")(154,"strong"),r(155,"Parallelism:"),a(),r(156," FP allows parallel task execution without complex state management, improving system efficiency."),a()()()(),s(157,"section",4)(158,"h2"),r(159,"Summary"),a(),s(160,"p"),r(161,"This lesson demonstrated how functional programming is applied in real-world systems, both in JavaScript (e.g., Netflix, Airbnb) and Python (e.g., machine learning pipelines, distributed systems)."),a(),s(162,"h4"),r(163,"Key Takeaways:"),a(),s(164,"ul")(165,"li"),r(166,"JavaScript leverages FP for scalability, maintainability, and reliability in large-scale web apps like Netflix and Airbnb."),a(),s(167,"li"),r(168,"Python uses FP in ML pipelines and distributed systems to ensure predictable, concurrent, and scalable solutions."),a(),s(169,"li"),r(170,"Libraries like RxJS (for JavaScript) and tools like Celery (for Python) are commonly used in functional programming for large-scale systems."),a()()()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.lesson-container[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}div[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.lesson-container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.lesson-container[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}"]})};var Xi=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-lessons10"]],decls:113,vars:0,consts:[[1,"container"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 10: Final Project"),a(),s(3,"section")(4,"h2"),r(5,"Project Overview"),a(),s(6,"p"),r(7," In this final project, you will develop a complex functional programming project in either JavaScript or Python. You can choose one of the following examples for your project: "),a(),s(8,"ul")(9,"li"),r(10,"A Web Service"),a(),s(11,"li"),r(12,"An AI Model"),a(),s(13,"li"),r(14,"A Distributed System"),a()(),s(15,"p"),r(16," Throughout this project, you'll focus on incorporating the core FP principles in your code. The goal is to practice applying concepts like immutability, higher-order functions, recursion, and monads, and see how they improve your application. "),a()(),s(17,"section")(18,"h2"),r(19,"Key Functional Programming Concepts"),a(),s(20,"div")(21,"h3"),r(22,"1. Immutability"),a(),s(23,"p"),r(24," Immutability is one of the most important principles of functional programming. It refers to the idea that once a value is created, it cannot be changed. "),a(),s(25,"h4"),r(26,"In JavaScript:"),a(),s(27,"pre")(28,"code"),r(29,`
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
        `),a()()()(),s(99,"section")(100,"h2"),r(101,"Conclusion"),a(),s(102,"p"),r(103," In this final project, you are tasked with applying functional programming principles to build a complex system in either JavaScript or Python. Whether you're building a web service, an AI model, or a distributed system, the key is to use FP concepts like immutability, higher-order functions, recursion, and monads to manage complexity and write clean, maintainable code. "),a(),s(104,"p"),r(105," You will see that these functional programming techniques allow you to: "),a(),s(106,"ul")(107,"li"),r(108,"Better handle side effects"),a(),s(109,"li"),r(110,"Make the code more modular and reusable"),a(),s(111,"li"),r(112,"Improve maintainability and scalability of the application"),a()()()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.container[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}div[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.container[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}"]})};var Qi=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-lessons6"]],decls:124,vars:0,consts:[[1,"lesson-container"],[1,"language-javascript"],[1,"language-python"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 6: Real-World Applications and Projects - Simplified"),a(),s(3,"section")(4,"h2"),r(5,"1. Building Web Applications using FP"),a(),s(6,"p"),r(7,"When we build web applications, we can use Functional Programming (FP) to organize the code in a clean and easy-to-understand way. FP focuses on writing pure functions and making sure we don\u2019t change things (like variables or states) unexpectedly."),a(),s(8,"ul")(9,"li")(10,"strong"),r(11,"Pure Functions:"),a(),r(12," A pure function is a function that always produces the same output for the same input and doesn\u2019t cause any side effects (like changing a variable)."),a(),s(13,"li")(14,"strong"),r(15,"Immutability:"),a(),r(16," In FP, once something is created, it can\u2019t be changed. You create a new value instead of modifying the old one."),a()()(),s(17,"section")(18,"h2"),r(19,"2. JavaScript: Functional Web Development using React (Functional Components)"),a(),s(20,"p"),r(21,"React is a tool we use to build websites. In React, we can create functional components, which are like simple, self-contained building blocks for a website."),a(),s(22,"p"),r(23,"Functional Components are simply functions that take inputs (called props) and return some output (like a part of a webpage). These components are pure functions because they always return the same thing when given the same input, making the code easier to debug and understand."),a(),s(24,"pre")(25,"code",1),r(26,`
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
      `),a()(),s(120,"p")(121,"strong"),r(122,"Explanation:"),a(),r(123," The fetch_data() function is a coroutine (a special type of function) that simulates fetching data asynchronously. await allows the function to pause, wait for the data, and then continue. This is a functional approach because the program runs predictably without unexpected behavior. "),a()()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.lesson-container[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word;font-size:1.1rem}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}div[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.lesson-container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}code[_ngcontent-%COMP%]{font-size:.95rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.lesson-container[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}ul[_ngcontent-%COMP%]{list-style-type:disc;padding-left:30px}li[_ngcontent-%COMP%]{font-size:1rem;color:#333}li[_ngcontent-%COMP%]:hover{color:#2980b9;cursor:pointer}pre[_ngcontent-%COMP%]{font-size:1rem;border-radius:5px;padding:10px}a[_ngcontent-%COMP%]{color:#3498db}a[_ngcontent-%COMP%]:hover{text-decoration:underline;color:#2980b9}"]})};var er=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-lessons7"]],decls:94,vars:0,consts:[[1,"lesson-container"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Lesson 7: Advanced Topics"),a(),s(3,"section")(4,"h2"),r(5,"1. Functional Metaprogramming"),a(),s(6,"p")(7,"strong"),r(8,"What is Metaprogramming?"),a()(),s(9,"p"),r(10,"Metaprogramming is writing code that writes or modifies other code. In simpler terms, it\u2019s when a program has the ability to manipulate itself. In Functional Programming (FP), this involves using higher-order functions (functions that take other functions as input or return them) to create more dynamic and reusable code. Functional Metaprogramming is about applying FP principles to control or generate code structures dynamically."),a()(),s(11,"section")(12,"h2"),r(13,"2. JavaScript\u2019s Ability to Create Higher-Level Abstractions"),a(),s(14,"p"),r(15,"In JavaScript, we can create higher-level abstractions using things like function factories and decorators. These techniques are powerful because they allow us to write cleaner, reusable, and more readable code."),a(),s(16,"h3"),r(17,"Function Factories"),a(),s(18,"p"),r(19,"A function factory is a function that creates other functions. It\u2019s like a template that generates customized functions based on certain inputs."),a(),s(20,"pre")(21,"code"),r(22,`
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
      `),a()(),s(90,"p")(91,"strong"),r(92,"Explanation:"),a(),r(93," The add function is a task that will be executed in the background. Celery uses a task queue to distribute tasks across workers, allowing for concurrency."),a()()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f7fb;color:#333;line-height:1.6}.lesson-container[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;padding:20px;background-color:#fff;box-shadow:0 2px 10px #0000001a;border-radius:10px;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#2c3e50;text-align:center;margin-bottom:30px;transition:color .3s ease,transform .3s ease}h1[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h2[_ngcontent-%COMP%]{font-size:2rem;color:#34495e;margin:20px 0 10px;padding-bottom:5px;border-bottom:2px solid #3498db;transition:color .3s ease,transform .3s ease}h2[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.05)}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#2980b9;margin-top:15px;transition:color .3s ease,transform .3s ease}h3[_ngcontent-%COMP%]:hover{color:#3498db;transform:scale(1.05)}p[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:15px;color:#7f8c8d;line-height:1.8;transition:color .3s ease,transform .3s ease}p[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}pre[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;padding:20px;border-radius:5px;margin-top:10px;white-space:pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#ecf0f1;padding:0 5px;border-radius:3px}ul[_ngcontent-%COMP%]{margin-left:20px;list-style-type:square}li[_ngcontent-%COMP%]{font-size:1.1rem;color:#7f8c8d;margin-bottom:10px;transition:color .3s ease,transform .3s ease}li[_ngcontent-%COMP%]:hover{color:#3498db;transform:translate(5px)}section[_ngcontent-%COMP%]{margin-bottom:25px}a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;transition:color .3s ease,transform .3s ease}a[_ngcontent-%COMP%]:hover{color:#2980b9;transform:scale(1.1)}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1rem;background-color:#34495e;border-radius:5px;overflow-x:auto}@media(max-width:768px){.lesson-container[_ngcontent-%COMP%]{padding:15px}h1[_ngcontent-%COMP%]{font-size:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%]{font-size:1.25rem}p[_ngcontent-%COMP%]{font-size:1rem}}@media(max-width:480px){h1[_ngcontent-%COMP%]{font-size:1.75rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.1rem}.lesson-container[_ngcontent-%COMP%]{padding:10px}code[_ngcontent-%COMP%]{font-size:.9rem}}"]})};function Mu(t,i){if(t&1){let e=$n();s(0,"div",2)(1,"h2"),r(2),a(),s(3,"button",3),$o("click",function(){let o=Rn(e).$implicit,l=qe();return Tn(l.startQuiz(o.id))}),r(4,"Start Quiz"),a()()}if(t&2){let e=i.$implicit;y(2),Hn(e.name)}}var tr=class t{constructor(i){this.router=i}lessons=[{id:1,name:"Lesson 1: What is Functional Programming?"},{id:2,name:"Lesson 2: Basic Functional Programming Concepts"},{id:3,name:"Lesson 3: Intermediate Functional Programming Concepts"},{id:4,name:"Lesson 4: Advanced Functional Programming Concepts \u2013 Monads, Functors, and Concurrency"},{id:5,name:"Lesson 5: Functional Programming in Practice"},{id:6,name:"Lesson 6: Real-World Applications and Projects - Simplified"},{id:7,name:"Lesson 7: Advanced Topics"},{id:8,name:"Lesson 8: Key Functional Programming Libraries in JavaScript and Python"},{id:9,name:"Lesson 9: Case Studies and Industry Applications"},{id:10,name:"Lesson 10: Final Project"}];startQuiz(i){this.router.navigate(["/quiz",i])}static \u0275fac=function(e){return new(e||t)(V(te))};static \u0275cmp=D({type:t,selectors:[["app-quiz-list"]],decls:6,vars:0,consts:[[1,"container"],[1,"card-container"],[1,"card"],[1,"btn",3,"click"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"h1"),r(2,"Select a Lesson"),a(),s(3,"div",1),qt(4,Mu,5,1,"div",2,Gt),a()()),e&2&&(y(4),Wt(n.lessons))},styles:[".container[_ngcontent-%COMP%]{text-align:center;margin-top:50px}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;justify-content:center;width:100%;height:100%}.card[_ngcontent-%COMP%]{background:#fff;padding:20px;width:100%;max-width:800px;border-radius:10px;box-shadow:0 4px 8px #0000001a;transition:transform .3s ease-in-out,box-shadow .3s ease-in-out;text-align:left;position:relative}.card[_ngcontent-%COMP%]:hover{transform:scale(1.02);box-shadow:0 6px 12px #00000026}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:10px;font-size:1.5rem}.btn[_ngcontent-%COMP%]{background-color:#1e90ff;color:#fff;padding:10px 20px;font-size:1rem;border:none;border-radius:5px;cursor:pointer;position:absolute;bottom:15px;right:20px;transition:background .3s}.btn[_ngcontent-%COMP%]:hover{background-color:#1e90ff}"]})};var al=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:Hi},{path:"lessons",component:Ui},{path:"les1",component:Vi},{path:"les2",component:zi},{path:"les3",component:Bi},{path:"les4",component:$i},{path:"les5",component:Yi},{path:"les6",component:Qi},{path:"les7",component:er},{path:"les8",component:Ki},{path:"les9",component:Zi},{path:"les10",component:Xi},{path:"quiz/:lessonId",component:Ji},{path:"quiz-list",component:tr}];var Au="@",Pu=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=h(se);loadingSchedulerFn=h(Ou,{optional:!0});_engine;constructor(e,n,o,l,c){this.doc=e,this.delegate=n,this.zone=o,this.animationType=l,this.moduleImpl=c}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-CJLZK47I.js").then(o=>o),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(o=>{throw new P(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:l})=>{this._engine=o(this.animationType,this.doc);let c=new l(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(e,n){let o=this.delegate.createRenderer(e,n);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let l=new xo(o);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(c=>{let d=c.createRenderer(e,n);l.use(d),this.scheduler??=this.injector.get(Ro,null,{optional:!0}),this.scheduler?.notify(10)}).catch(c=>{l.use(o)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){zn()};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),xo=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,n,o){this.delegate.insertBefore(i,e,n,o)}removeChild(i,e,n,o){this.delegate.removeChild(i,e,n,o)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,n,o){this.delegate.setAttribute(i,e,n,o)}removeAttribute(i,e,n){this.delegate.removeAttribute(i,e,n)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,n,o){this.delegate.setStyle(i,e,n,o)}removeStyle(i,e,n){this.delegate.removeStyle(i,e,n)}setProperty(i,e,n){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(i,e,n)),this.delegate.setProperty(i,e,n)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,n,o){return this.shouldReplay(e)&&this.replay.push(l=>l.listen(i,e,n,o)),this.delegate.listen(i,e,n,o)}shouldReplay(i){return this.replay!==null&&i.startsWith(Au)}},Ou=new _("");function sl(t="animations"){return Ht("NgAsyncAnimations"),ft([{provide:Vn,useFactory:()=>new Pu(h(L),h(nn),h(re),t)},{provide:Nn,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ll={providers:[Ir(),mo(al),Xo({eventCoalescing:!0}),sl()]};var ku=()=>({exact:!0}),nr=class t{constructor(i){this.router=i}title="fp-py";login(){this.router.navigate(["home"])}static \u0275fac=function(e){return new(e||t)(V(te))};static \u0275cmp=D({type:t,selectors:[["app-root"]],decls:8,vars:2,consts:[[1,"navbar"],[1,"navbar-brand"],[1,"navbar-nav"],["routerLink","/","routerLinkActive","active",1,"nav-link",3,"routerLinkActiveOptions"],[1,"container"]],template:function(e,n){e&1&&(E(0,"nav",0)(1,"div",1),r(2,"Learning Project"),w(),E(3,"div",2)(4,"a",3),r(5,"Home"),w()()(),E(6,"div",4),He(7,"router-outlet"),w()),e&2&&(y(4),W("routerLinkActiveOptions",Q(1,ku)))},dependencies:[En,ji,Cn,Re,uo],styles:[".navbar-container[_ngcontent-%COMP%]{width:100%;padding:0 20px;background-color:#fff;box-shadow:0 4px 10px #0000001a}.custom-navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 20px;max-width:1200px;margin:auto}.navbar-brand[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:#007bff!important}.btn[_ngcontent-%COMP%]{font-size:16px;font-weight:500;padding:8px 16px;border-radius:8px;transition:all .3s ease-in-out}.btn-outline-primary[_ngcontent-%COMP%]:hover{background-color:#007bff;color:#fff}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#0056b3}"]})};Mr(nr,ll).catch(t=>console.error(t));
