function M(){}const pt=t=>t;function yt(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function Z(){return Object.create(null)}function E(t){t.forEach(it)}function Q(t){return typeof t=="function"}function Kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function Qt(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function gt(t){return Object.keys(t).length===0}function wt(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ut(t,e,n){t.$$.on_destroy.push(wt(e,n))}function Vt(t,e,n,i){if(t){const s=st(t,e,n,i);return t[0](s)}}function st(t,e,n,i){return t[1]&&i?yt(n.ctx.slice(),t[1](i(e))):n.ctx}function Xt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Yt(t,e,n,i,s,l){if(s){const r=st(e,n,i,l);t.p(r,s)}}function Zt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const rt=typeof window<"u";let bt=rt?()=>window.performance.now():()=>Date.now(),U=rt?t=>requestAnimationFrame(t):M;const S=new Set;function ot(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&U(ot)}function xt(t){let e;return S.size===0&&U(ot),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let H=!1;function $t(){H=!0}function vt(){H=!1}function Et(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:Et(1,s,h=>e[n[h]].claim_order,a))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,s=Math.max(d,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const f=a<l.length?l[a]:null;t.insertBefore(r[c],f)}}function ct(t,e){t.appendChild(e)}function lt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=X("style");return At(lt(t),e),e.sheet}function At(t,e){return ct(t.head||t,e),e.sheet}function St(t,e){if(H){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function te(t,e,n){H&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t){return document.createTextNode(t)}function ne(){return Y(" ")}function ie(){return Y("")}function tt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function se(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Mt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function re(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:Mt(t,e,n)}function jt(t){return Array.from(t.childNodes)}function Dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function at(t,e,n,i,s=!1){Dt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ut(t,e,n,i){return at(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function oe(t,e,n){return ut(t,e,n,X)}function ce(t,e,n){return ut(t,e,n,Ct)}function Tt(t,e){return at(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Y(e),!0)}function le(t){return Tt(t," ")}function ae(t,e){e=""+e,t.data!==e&&(t.data=e)}function ue(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let R;function zt(){if(R===void 0){R=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{R=!0}}return R}function fe(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=X("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=zt();let l;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=tt(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=tt(i.contentWindow,"resize",e),e()}),ct(t,i),()=>{(s||l&&i.contentWindow)&&l(),V(i)}}function de(t,e,n){t.classList[n?"add":"remove"](e)}function Ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function _e(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function he(t,e){return new t(e)}const L=new Map;let W=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:kt(e),rules:{}};return L.set(t,n),n}function et(t,e,n,i,s,l,r,o=0){const c=16.666/i;let a=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);a+=y*100+`%{${r(g,1-g)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,d=`__svelte_${Pt(f)}_${o}`,h=lt(t),{stylesheet:u,rules:_}=L.get(h)||Rt(h,t);_[d]||(_[d]=!0,u.insertRule(`@keyframes ${d} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${i}ms linear ${s}ms 1 both`,W+=1,d}function qt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),W-=s,W||Lt())}function Lt(){U(()=>{W||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),L.clear())})}let T;function D(t){T=t}function ft(){if(!T)throw new Error("Function called outside component initialization");return T}function me(t){ft().$$.on_mount.push(t)}function pe(t){ft().$$.after_update.push(t)}const A=[],nt=[];let C=[];const J=[],dt=Promise.resolve();let K=!1;function _t(){K||(K=!0,dt.then(ht))}function ye(){return _t(),dt}function B(t){C.push(t)}function ge(t){J.push(t)}const I=new Set;let k=0;function ht(){if(k!==0)return;const t=T;do{try{for(;k<A.length;){const e=A[k];k++,D(e),Wt(e.$$)}}catch(e){throw A.length=0,k=0,e}for(D(null),A.length=0,k=0;nt.length;)nt.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];I.has(n)||(I.add(n),n())}C.length=0}while(A.length);for(;J.length;)J.pop()();K=!1,I.clear(),D(t)}function Wt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}function Bt(t){const e=[],n=[];C.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),C=e}let j;function Ht(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function G(t,e,n){t.dispatchEvent(Ot(`${e?"intro":"outro"}${n}`))}const q=new Set;let x;function we(){x={r:0,c:[],p:x}}function be(){x.r||E(x.c),x=x.p}function mt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function xe(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),x.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ft={duration:0};function $e(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,a=null;function f(){a&&qt(t,a)}function d(u,_){const p=u.b-r;return _*=Math.abs(p),{a:r,b:u.b,d:p,duration:_,start:u.start,end:u.start+_,group:u.group}}function h(u){const{delay:_=0,duration:p=300,easing:y=pt,tick:g=M,css:$}=l||Ft,N={start:bt()+_,b:u};u||(N.group=x,x.r+=1),o||c?c=N:($&&(f(),a=et(t,r,u,p,_,y,$)),u&&g(0,1),o=d(N,p),B(()=>G(t,u,"start")),xt(v=>{if(c&&v>c.start&&(o=d(c,p),c=null,G(t,o.b,"start"),$&&(f(),a=et(t,r,o.b,o.duration,0,y,l.css))),o){if(v>=o.end)g(r=o.b,1-r),G(t,o.b,"end"),c||(o.b?f():--o.group.r||E(o.group.c)),o=null;else if(v>=o.start){const z=v-o.start;r=o.a+o.d*y(z/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(u){Q(l)?Ht().then(()=>{l=l(s),h(u)}):h(u)},end(){f(),o=c=null}}}const ve=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ee(t,e){t.d(1),e.delete(t.key)}function Ne(t,e,n,i,s,l,r,o,c,a,f,d){let h=t.length,u=l.length,_=h;const p={};for(;_--;)p[t[_].key]=_;const y=[],g=new Map,$=new Map,N=[];for(_=u;_--;){const m=d(s,l,_),w=n(m);let b=r.get(w);b?i&&N.push(()=>b.p(m,e)):(b=a(w,m),b.c()),g.set(w,y[_]=b),w in p&&$.set(w,Math.abs(_-p[w]))}const v=new Set,z=new Set;function F(m){mt(m,1),m.m(o,f),r.set(m.key,m),f=m.first,u--}for(;h&&u;){const m=y[u-1],w=t[h-1],b=m.key,O=w.key;m===w?(f=m.first,h--,u--):g.has(O)?!r.has(b)||v.has(b)?F(m):z.has(O)?h--:$.get(b)>$.get(O)?(z.add(b),F(m)):(v.add(O),h--):(c(w,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,r)}for(;u;)F(y[u-1]);return E(N),y}function ke(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ae(t){t&&t.c()}function Se(t,e){t&&t.l(e)}function It(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||B(()=>{const r=t.$$.on_mount.map(it).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),l.forEach(B)}function Gt(t,e){const n=t.$$;n.fragment!==null&&(Bt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Jt(t,e){t.$$.dirty[0]===-1&&(A.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ce(t,e,n,i,s,l,r,o=[-1]){const c=T;D(t);const a=t.$$={fragment:null,ctx:[],props:l,update:M,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(d,h,...u)=>{const _=u.length?u[0]:h;return a.ctx&&s(a.ctx[d],a.ctx[d]=_)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](_),f&&Jt(t,d)),h}):[],a.update(),f=!0,E(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){$t();const d=jt(e.target);a.fragment&&a.fragment.l(d),d.forEach(V)}else a.fragment&&a.fragment.c();e.intro&&mt(t.$$.fragment),It(t,e.target,e.anchor,e.customElement),vt(),ht()}D(c)}class Me{$destroy(){Gt(this,1),this.$destroy=M}$on(e,n){if(!Q(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!gt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{fe as $,It as A,Gt as B,Vt as C,Yt as D,Zt as E,Xt as F,St as G,M as H,Ut as I,B as J,re as K,tt as L,ve as M,ee as N,de as O,Ct as P,ce as Q,_e as R,Me as S,Qt as T,pt as U,yt as V,bt as W,xt as X,Ne as Y,Ee as Z,ke as _,ne as a,ge as a0,se as a1,E as a2,$e as a3,te as b,le as c,xe as d,ie as e,be as f,mt as g,V as h,Ce as i,pe as j,X as k,oe as l,jt as m,Mt as n,me as o,ue as p,Y as q,Tt as r,Kt as s,ye as t,ae as u,we as v,nt as w,he as x,Ae as y,Se as z};