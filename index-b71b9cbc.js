var yt=Object.defineProperty;var gt=(r,t,e)=>t in r?yt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var p=(r,t,e)=>(gt(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=window,X=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),et=new WeakMap;let pt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(X&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&et.set(e,t))}return t}toString(){return this.cssText}};const bt=r=>new pt(typeof r=="string"?r:r+"",void 0,tt),b=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new pt(e,r,tt)},_t=(r,t)=>{X?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=H.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},it=X?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return bt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const T=window,st=T.trustedTypes,At=st?st.emptyScript:"",rt=T.reactiveElementPolyfillSupport,q={toAttribute(r,t){switch(t){case Boolean:r=r?At:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},vt=(r,t)=>t!==r&&(t==t||r==r),j={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:vt};let A=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=j){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||j}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(it(s))}else t!==void 0&&e.push(it(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return _t(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=j){var s;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:q).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(n!==void 0&&this._$El!==n){const o=s.getPropertyOptions(n),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:q;this._$El=n,this[n]=h.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||vt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},rt==null||rt({ReactiveElement:A}),((L=T.reactiveElementVersions)!==null&&L!==void 0?L:T.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const R=window,E=R.trustedTypes,nt=E?E.createPolicy("lit-html",{createHTML:r=>r}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,mt="?"+g,wt=`<${mt}>`,S=document,O=(r="")=>S.createComment(r),k=r=>r===null||typeof r!="object"&&typeof r!="function",ft=Array.isArray,Et=r=>ft(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,at=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,dt=/"/g,$t=/^(?:script|style|textarea|title)$/i,St=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=St(1),x=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ht=new WeakMap,w=S.createTreeWalker(S,129,null,!1),xt=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":"",o=M;for(let a=0;a<e;a++){const l=r[a];let m,d,c=-1,v=0;for(;v<l.length&&(o.lastIndex=v,d=o.exec(l),d!==null);)v=o.lastIndex,o===M?d[1]==="!--"?o=ot:d[1]!==void 0?o=at:d[2]!==void 0?($t.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=_):d[3]!==void 0&&(o=_):o===_?d[0]===">"?(o=s??M,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,m=d[1],o=d[3]===void 0?_:d[3]==='"'?dt:lt):o===dt||o===lt?o=_:o===ot||o===at?o=M:(o=_,s=void 0);const N=o===_&&r[a+1].startsWith("/>")?" ":"";n+=o===M?l+wt:c>=0?(i.push(m),l.slice(0,c)+"$lit$"+l.slice(c)+g+N):l+g+(c===-2?(i.push(void 0),a):N)}const h=n+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[nt!==void 0?nt.createHTML(h):h,i]};class P{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const h=t.length-1,a=this.parts,[l,m]=xt(t,e);if(this.el=P.createElement(l,i),w.currentNode=this.el.content,e===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=w.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(g)){const v=m[o++];if(d.push(c),v!==void 0){const N=s.getAttribute(v.toLowerCase()+"$lit$").split(g),D=/([.?@])?(.*)/.exec(v);a.push({type:1,index:n,name:D[2],strings:N,ctor:D[1]==="."?Mt:D[1]==="?"?kt:D[1]==="@"?Pt:z})}else a.push({type:6,index:n})}for(const c of d)s.removeAttribute(c)}if($t.test(s.tagName)){const d=s.textContent.split(g),c=d.length-1;if(c>0){s.textContent=E?E.emptyScript:"";for(let v=0;v<c;v++)s.append(d[v],O()),w.nextNode(),a.push({type:2,index:++n});s.append(d[c],O())}}}else if(s.nodeType===8)if(s.data===mt)a.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(g,d+1))!==-1;)a.push({type:7,index:n}),d+=g.length-1}n++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function C(r,t,e=r,i){var s,n,o,h;if(t===x)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const l=k(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(r),a._$AT(r,e,i)),i!==void 0?((o=(h=e)._$Co)!==null&&o!==void 0?o:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=C(r,a._$AS(r,t.values),a,i)),t}class Ct{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:S).importNode(i,!0);w.currentNode=n;let o=w.nextNode(),h=0,a=0,l=s[0];for(;l!==void 0;){if(h===l.index){let m;l.type===2?m=new U(o,o.nextSibling,this,t):l.type===1?m=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(m=new Ut(o,this,t)),this.u.push(m),l=s[++a]}h!==(l==null?void 0:l.index)&&(o=w.nextNode(),h++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{constructor(t,e,i,s){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),k(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==x&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Et(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=P.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const o=new Ct(n,this),h=o.v(this.options);o.p(i),this.T(h),this._$AH=o}}_$AC(t){let e=ht.get(t.strings);return e===void 0&&ht.set(t.strings,e=new P(t)),e}k(t){ft(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new U(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class z{constructor(t,e,i,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=C(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{const h=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=C(this,h[i+a],e,a),l===x&&(l=this._$AH[a]),o||(o=!k(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Mt extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const Ot=E?E.emptyScript:"";class kt extends z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Ot):this.element.removeAttribute(this.name)}}class Pt extends z{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=C(this,t,e,0))!==null&&i!==void 0?i:u)===x)return;const s=this._$AH,n=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const ct=R.litHtmlPolyfillSupport;ct==null||ct(P,U),((I=R.litHtmlVersions)!==null&&I!==void 0?I:R.litHtmlVersions=[]).push("2.6.1");const Nt=(r,t,e)=>{var i,s;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=n._$litPart$;if(o===void 0){const h=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=o=new U(t.insertBefore(O(),h),h,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B,V;class $ extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return x}}$.finalized=!0,$._$litElement$=!0,(B=globalThis.litElementHydrateSupport)===null||B===void 0||B.call(globalThis,{LitElement:$});const ut=globalThis.litElementPolyfillSupport;ut==null||ut({LitElement:$});((V=globalThis.litElementVersions)!==null&&V!==void 0?V:globalThis.litElementVersions=[]).push("3.2.2");const Dt=b`
  .result-copy {
    text-align: start;
    margin-right: auto;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .single-line {
    display: block;
  }
  .bold {
    font-weight: 700;
  }
  .weekday-name {
    font-size: 1.5em;
    color: var(--primary);
  }
`;class Y extends ${constructor(){super(),this.inputData={date:10,month:7,year:2005}}handleDateSubmit(t){this.inputData={...t.detail}}render(){return f`
      <h1><span class="primary">Weekday</span>Calculator</h1>
      <p>Ingresa una fecha para calcular en qué día de la semana cae</p>
      <weekday-form @dateSubmit=${this.handleDateSubmit}></weekday-form>
      <calendar-wrapper .inputData=${this.inputData}></calendar-wrapper>
      `}}p(Y,"styles",[b`
      :host {
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: 0 64px;
        width: 100%;
        max-width: 1200px;

        text-align: center;

        // background: hsl(200deg 100% 50% / 40%) content-box;
      }

      .primary {
        color: var(--primary);
      }
    `,Dt]),p(Y,"properties",{inputData:{state:!0,type:Object}});customElements.define("app-wrapper",Y);const Ht=b`
  button {
    // --bd-rds: 12px;
    --heavy-ease-in: cubic-bezier(.31,.05,.62,.45);
    --heavy-ease-out: cubic-bezier(.28,.54,.71,.85);

    user-select: none;

    padding:0;
    border:0;
    border-radius: 8px;
    color: inherit;
    font: inherit;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    background: var(--dark-primary);
    outline-offset: 4px;
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  button span {
    display: block;
    padding: .5rem 2rem;
    border-radius: inherit;
    background: hsl(119deg 85% 40%);

    transition: translate 200ms, background 200ms;
    transition-timing-function: var(--heavy-ease-out);
  }

  button:disabled span {
    background: var(--disabled-bg);
    color: var(--disabled-txt);
  }

  button:not(:disabled) span {
    translate: 0 -4px;
  }

  button:hover:not(:disabled) span {
    background: var(--primary);
    translate: 0 -6px;
    transition-duration: 90ms;
    transition-timing-function: var(--heavy-ease-in);
  }
  button:active:not(:disabled) span {
    background: var(--primary);
    translate: 0 -2px;
    transition-duration: 40ms;
    // transition-timing-function: var(--heavy-ease-in);
  }
`;class K extends ${handleSubmit(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("dateSubmit",{bubbles:!0,detail:{date:11,month:9,year:2001}}))}render(){const t=f`<span class="spacer">/</span>`;return f`
      <form @submit=${this.handleSubmit}>
        <div class="date-wrapper">
          <date-field>
            <p slot="type">Día</p>
          </date-field>
          ${t}
          <date-field>
            <p slot="type">Mes</p>
          </date-field>
          ${t}
          <date-field class="year">
            <p slot="type">Año</p>
          </date-field>
        </div>
        <button>
          <span>Calcular</span>
          <div class="bg"></div>
        </button>
      </form>
    `}}p(K,"styles",[b`
      :host {
        font-family: "Ubuntu Mono", monospace;
        font-weight: 700;
      }

      .date-wrapper {
        display: flex;
        justify-content: center;
        align-items: baseline;
      }

      .date-wrapper[submitted] {
        color: var(--primary);
      }

      .spacer {
        font-size: 2rem;
        margin: 0 1rem;
        pointer-events: none;
        user-select: none;
      }
    `,Ht]),p(K,"properties",{});customElements.define("weekday-form",K);class Z extends ${render(){return f`
      <div class="input-wrapper">
        <div class="input" contenteditable="true"></div>
        <div class="input-bottom"></div>
      </div>
      <slot name="type"></slot>
      `}}p(Z,"styles",b`
    :host([error]) {
      color: var(--error);
    }

    :host([value]) {
      color: var(--secondary);
    }
    :host-context([submitted]) {
      color: inherit;
    }

    .input-wrapper {
      position: relative;
      // background: var(--secondary);
    }

    .input {
      font-size: 2rem;
      text-align: center;
      
      // display: block;

      // outline: 1px solid var(--primary);
      // width: 3ch;
      min-width: 2.5ch;
      width: fit-content;
      height: 1em;
      padding: 1rem;
      // padding-bottom: calc(1rem + 6px);
      // overflow: hidden;
      // text-overflow: ellipsis;
    }
    :host(.year) .input {
      min-width: 4.5ch;
    }

    .input-bottom {
      position: absolute;
      // top: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      height: 6px;
      background: currentColor;

      border-radius: 10px 10px 0 0 / 100% 100% 0 0;
    }

    
    ::slotted(p) {
      font-family: "Open Sans", sans-serif;
      font-weight: 600;
      font-size: 0.9rem;
    }
  `),p(Z,"properties",{});customElements.define("date-field",Z);class G extends ${render(){const{date:t,month:e,year:i}=this.inputData;return f`
      <div class="info">
        <div class="date">10</div>
        <div class="month">JULIO</div>
        <div class="year">2005</div>
        <div class="day">DOMINGO</div>
      </div>
      <div class="calendar-wrapper">
        <calendar-component
          .date=${t}
          .month=${e}
          .year=${i}
        ></calendar-component>
      </div>
    `}}p(G,"styles",b`
    :host {
      align-self: center;

      display: flex;
      width: 100%;
      height: 400px;
      background: var(--active-bg);
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--dark-secondary);
      width: 300px;
    }
    .info div {
      line-height: calc(1em + 0.5rem);
    }
    .info :not(.day) {
      font-weight: 300;
    }
    .info .date {
      font-size: 4rem;
    }
    .info .month {
      font-size: 3rem;
    }
    .info .year {
      font-size: 2.5rem;
    }
    .info .day {
      color: var(--primary);
      font-size: 2rem;
      font-weight: 700;
      margin-top: 3rem;
    }

    .calendar-wrapper {
      flex: 1;
      display: grid;
      place-items: center;
    }
  `),p(G,"properties",{inputData:{attribute:!0,type:Object}});customElements.define("calendar-wrapper",G);class y{static isLeapYear(t){return t%4===0&&t%100!==0||t%400===0}static getWeekday({date:t,month:e,year:i}){const s=Math.floor(i%400/100)*5%7,n=i%100,o=Math.floor(n/4)*5%7,h=n%4;let a=this.monthsCode[e-1];this.isLeapYear(i)&&e<=2&&a--;const l=t%7;return(s+o+h+a+l)%7}}p(y,"monthsList",["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]),p(y,"monthsDays",[31,28,31,30,31,30,31,31,30,31,30,31]),p(y,"weekdaysList",["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]),p(y,"monthsCode",[6,2,2,5,0,3,5,1,4,6,2,4]);const J=(r,t,e=1)=>{const i=[];typeof t>"u"&&(t=r,r=0);for(let s=r;s<t;s+=e)i.push(s);return i};function W(r,t){return(r%t+t)%t}class F extends ${update(){const{date:t,month:e,year:i}=this;if([t,e,i].every(s=>s!==void 0)){console.table({date:t,month:e,year:i});const s=y.getWeekday({date:t,month:e,year:i});this.firstDayCode=W(s-t+1,e)}super.update()}renderPrevMonth(){return console.log(this.month),J(this.firstDayCode).map(t=>y.monthsDays[W(this.month-2,12)]-t).map(t=>f`
        <calendar-date
          .date=${t}
        ></calendar-date>
      `).reverse()}renderCurrentMonth(){return J(y.monthsDays[this.month-1]).map(t=>f`
        <calendar-date
          ?currentMonth=${!0}
          .date=${t+1}
          ?selectedDate=${this.date===t+1}
        ></calendar-date>
      `)}renderNextMonth(){return console.log(-(y.monthsDays[this.month-1]+this.firstDayCode)),J(W(-(y.monthsDays[this.month-1]+this.firstDayCode),7)).map(t=>f`
        <calendar-date
          .date=${t+1}
        ></calendar-date>
      `)}render(){console.log("Rendering...");const t=this.renderPrevMonth(),e=this.renderCurrentMonth(),i=this.renderNextMonth();return f`
      ${t}
      ${e}
      ${i}
    `}}p(F,"styles",b`
    :host {
      display: grid;
      grid-template-columns: repeat(7, 2.6rem);
      gap: 1rem;
    }
    div {
      // width: 3rem;
      // height: 3rem;
      aspect-ratio: 1;
      font-size: 1.2rem;
      background: var(--secondary);
      display: grid;
      place-items: center;
    }
  `),p(F,"properties",{date:{attribute:!0,type:Number},month:{attribute:!0,type:Number},year:{attribute:!0,type:Number},dayCode:{attribute:!0},firstDayCode:{state:!0,type:Number}});customElements.define("calendar-component",F);class Q extends ${render(){return f`
      <span class="bg"></span>
      <div>
        ${this.date}
      </div>
    `}}p(Q,"styles",b`
    :host {
      aspect-ratio: 1;
      font-size: 1.2rem;
      display: grid;
      place-items: center;
      color: var(--disabled-bg);
      border-radius: 50%;

      position: relative;
    }
    div {
      isolation: isolate;
    }
    span.bg {
      position: absolute;
      inset: 0;
      border-radius: 50%;
    }

    :host([selectedDate]) span.bg {
      background: var(--primary);
      filter: blur(2px);
    }

    :host([currentMonth]) {
      color: inherit;
    }
    :host([selectedDate]) {
      // background: var(--translucid-primary);
      // backdrop-filter: blur(5px);
    }
    /* Domingos */
    :host([currentMonth]:nth-child(7n + 1):not([selectedDate])) span.bg {
      background: var(--calendar-holiday);
      inset: 2px;
    }
  `),p(Q,"properties",{date:{attribute:!0,type:Number}});customElements.define("calendar-date",Q);
