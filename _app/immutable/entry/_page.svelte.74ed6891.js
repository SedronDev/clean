import{S as Z,i as x,s as ee,k,a as D,l as y,m as g,c as V,h as f,n as j,p as te,b as I,G as m,g as B,d as H,f as S,q as C,r as A,J as O,H as z,e as w,v as U,y as Q,z as W,A as X,B as Y,K as le}from"../chunks/index.54db4006.js";import{j as L}from"../chunks/singletons.77da0a2e.js";import{T as se,C as ie}from"../chunks/circle.434b25dd.js";L.disable_scroll_handling;const ne=L.goto;L.invalidate;L.invalidateAll;L.preload_data;L.preload_code;L.before_navigate;L.after_navigate;function M(h,t,c){const v=h.slice();return v[12]=t[c],v[13]=t,v[14]=c,v}function G(h){let t,c,v,u,i,d,o,r,a,l,_,e,s;return{c(){t=k("div"),c=k("h1"),v=C("Bienvenido a"),u=D(),i=k("div"),d=k("i"),o=C("CLEAN!"),r=D(),a=k("div"),l=k("button"),_=C("Empezar"),this.h()},l(n){t=y(n,"DIV",{class:!0});var E=g(t);c=y(E,"H1",{});var p=g(c);v=A(p,"Bienvenido a"),p.forEach(f),E.forEach(f),u=V(n),i=y(n,"DIV",{class:!0});var b=g(i);d=y(b,"I",{class:!0});var T=g(d);o=A(T,"CLEAN!"),T.forEach(f),b.forEach(f),r=V(n),a=y(n,"DIV",{class:!0});var $=g(a);l=y($,"BUTTON",{type:!0,class:!0});var N=g(l);_=A(N,"Empezar"),N.forEach(f),$.forEach(f),this.h()},h(){j(t,"class","col-12 d-flex align-items-center justify-content-center"),j(d,"class","blur-in clean ms-4 svelte-1c8r6dc"),j(i,"class","col-12 d-flex justify-content-center"),j(l,"type","button"),j(l,"class","btn btn-light"),j(a,"class","col-12 d-flex justify-content-center")},m(n,E){I(n,t,E),m(t,c),m(c,v),I(n,u,E),I(n,i,E),m(i,d),m(d,o),I(n,r,E),I(n,a,E),m(a,l),m(l,_),e||(s=O(l,"click",h[5]),e=!0)},p:z,d(n){n&&f(t),n&&f(u),n&&f(i),n&&f(r),n&&f(a),e=!1,s()}}}function J(h){let t,c,v,u,i,d,o,r;const a=[re,ce],l=[];function _(e,s){return e[2]?1:0}return i=_(h),d=l[i]=a[i](h),{c(){t=k("div"),c=k("h3"),v=C("El juego consiste en darle a los circulos verdes antes que acabe el tiempo:"),u=D(),d.c(),o=w(),this.h()},l(e){t=y(e,"DIV",{class:!0});var s=g(t);c=y(s,"H3",{class:!0});var n=g(c);v=A(n,"El juego consiste en darle a los circulos verdes antes que acabe el tiempo:"),n.forEach(f),s.forEach(f),u=V(e),d.l(e),o=w(),this.h()},h(){j(c,"class","text-center"),j(t,"class","col-12 d-flex align-items-center justify-content-center mb-5")},m(e,s){I(e,t,s),m(t,c),m(c,v),I(e,u,s),l[i].m(e,s),I(e,o,s),r=!0},p(e,s){let n=i;i=_(e),i===n?l[i].p(e,s):(U(),H(l[n],1,1,()=>{l[n]=null}),S(),d=l[i],d?d.p(e,s):(d=l[i]=a[i](e),d.c()),B(d,1),d.m(o.parentNode,o))},i(e){r||(B(d),r=!0)},o(e){H(d),r=!1},d(e){e&&f(t),e&&f(u),l[i].d(e),e&&f(o)}}}function ce(h){let t,c,v,u,i,d,o,r,a,l,_,e;return{c(){t=k("div"),c=k("h1"),v=C("Tiempo:"),u=C(" "),i=k("h1"),d=C("0"),o=D(),r=k("div"),a=k("button"),l=C("Reintentar"),this.h()},l(s){t=y(s,"DIV",{class:!0});var n=g(t);c=y(n,"H1",{});var E=g(c);v=A(E,"Tiempo:"),E.forEach(f),u=A(n," "),i=y(n,"H1",{});var p=g(i);d=A(p,"0"),p.forEach(f),n.forEach(f),o=V(s),r=y(s,"DIV",{class:!0});var b=g(r);a=y(b,"BUTTON",{type:!0,class:!0});var T=g(a);l=A(T,"Reintentar"),T.forEach(f),b.forEach(f),this.h()},h(){j(t,"class","col-12 d-flex justify-content-center"),j(a,"type","button"),j(a,"class","btn btn-light"),j(r,"class","col-12 d-flex justify-content-center")},m(s,n){I(s,t,n),m(t,c),m(c,v),m(t,u),m(t,i),m(i,d),I(s,o,n),I(s,r,n),m(r,a),m(a,l),_||(e=O(a,"click",h[8]),_=!0)},p:z,i:z,o:z,d(s){s&&f(t),s&&f(o),s&&f(r),_=!1,e()}}}function re(h){let t,c,v,u,i,d,o,r;i=new se({props:{initialTime:20,onEnd:h[6]}});let a=h[0],l=[];for(let e=0;e<a.length;e+=1)l[e]=K(M(h,a,e));const _=e=>H(l[e],1,1,()=>{l[e]=null});return{c(){t=k("div"),c=k("h1"),v=C("Tiempo:"),u=C(" "),Q(i.$$.fragment),d=D(),o=k("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=y(e,"DIV",{class:!0});var s=g(t);c=y(s,"H1",{});var n=g(c);v=A(n,"Tiempo:"),n.forEach(f),u=A(s," "),W(i.$$.fragment,s),s.forEach(f),d=V(e),o=y(e,"DIV",{class:!0});var E=g(o);for(let p=0;p<l.length;p+=1)l[p].l(E);E.forEach(f),this.h()},h(){j(t,"class","col-12 d-flex justify-content-center"),j(o,"class","col-12 d-flex align-items-center justify-content-center")},m(e,s){I(e,t,s),m(t,c),m(c,v),m(t,u),X(i,t,null),I(e,d,s),I(e,o,s);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(o,null);r=!0},p(e,s){if(s&1){a=e[0];let n;for(n=0;n<a.length;n+=1){const E=M(e,a,n);l[n]?(l[n].p(E,s),B(l[n],1)):(l[n]=K(E),l[n].c(),B(l[n],1),l[n].m(o,null))}for(U(),n=a.length;n<l.length;n+=1)_(n);S()}},i(e){if(!r){B(i.$$.fragment,e);for(let s=0;s<a.length;s+=1)B(l[s]);r=!0}},o(e){H(i.$$.fragment,e),l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)H(l[s]);r=!1},d(e){e&&f(t),Y(i),e&&f(d),e&&f(o),le(l,e)}}}function K(h){let t,c;function v(){return h[7](h[12],h[13],h[14])}return t=new ie({props:{clicked:h[12],onClick:v}}),{c(){Q(t.$$.fragment)},l(u){W(t.$$.fragment,u)},m(u,i){X(t,u,i),c=!0},p(u,i){h=u;const d={};i&1&&(d.clicked=h[12]),i&1&&(d.onClick=v),t.$set(d)},i(u){c||(B(t.$$.fragment,u),c=!0)},o(u){H(t.$$.fragment,u),c=!1},d(u){Y(t,u)}}}function P(h){let t,c,v,u,i,d,o,r,a,l,_,e,s,n,E;return{c(){t=k("h1"),c=C("CLEAN!"),v=D(),u=k("div"),i=k("h3"),d=C("Cuando consigues apagar todos los circulos obtienes un "),o=k("i"),r=C("CLEAN"),a=C(`
                    y avanzas de nivel.`),l=D(),_=k("div"),e=k("button"),s=C("Siguiente"),this.h()},l(p){t=y(p,"H1",{class:!0});var b=g(t);c=A(b,"CLEAN!"),b.forEach(f),v=V(p),u=y(p,"DIV",{class:!0});var T=g(u);i=y(T,"H3",{class:!0});var $=g(i);d=A($,"Cuando consigues apagar todos los circulos obtienes un "),o=y($,"I",{class:!0});var N=g(o);r=A(N,"CLEAN"),N.forEach(f),a=A($,`
                    y avanzas de nivel.`),$.forEach(f),T.forEach(f),l=V(p),_=y(p,"DIV",{class:!0});var q=g(_);e=y(q,"BUTTON",{type:!0,class:!0});var R=g(e);s=A(R,"Siguiente"),R.forEach(f),q.forEach(f),this.h()},h(){j(t,"class","clean text-center mb-5 svelte-1c8r6dc"),j(o,"class","mini-clean svelte-1c8r6dc"),j(i,"class","text-center"),j(u,"class","col-12 d-flex align-items-center justify-content-center"),j(e,"type","button"),j(e,"class","btn btn-light"),j(_,"class","col-12 d-flex align-items-center justify-content-center mb-5")},m(p,b){I(p,t,b),m(t,c),I(p,v,b),I(p,u,b),m(u,i),m(i,d),m(i,o),m(o,r),m(i,a),I(p,l,b),I(p,_,b),m(_,e),m(e,s),n||(E=O(e,"click",h[9]),n=!0)},p:z,d(p){p&&f(t),p&&f(v),p&&f(u),p&&f(l),p&&f(_),n=!1,E()}}}function F(h){let t,c,v,u,i,d,o,r,a,l,_,e,s,n,E,p;return{c(){t=k("h1"),c=C("CLEAN!"),v=D(),u=k("div"),i=k("h3"),d=C(`Mientras mas niveles completes, el juego se irá volviendo mas complicado,
                    tu meta es alcanzar el máximo nivel que puedas.
                    `),o=k("br"),r=D(),a=k("br"),l=C(`
                    Aceptas el reto?`),_=D(),e=k("div"),s=k("button"),n=C("Acepto el reto!"),this.h()},l(b){t=y(b,"H1",{class:!0});var T=g(t);c=A(T,"CLEAN!"),T.forEach(f),v=V(b),u=y(b,"DIV",{class:!0});var $=g(u);i=y($,"H3",{class:!0});var N=g(i);d=A(N,`Mientras mas niveles completes, el juego se irá volviendo mas complicado,
                    tu meta es alcanzar el máximo nivel que puedas.
                    `),o=y(N,"BR",{}),r=V(N),a=y(N,"BR",{}),l=A(N,`
                    Aceptas el reto?`),N.forEach(f),$.forEach(f),_=V(b),e=y(b,"DIV",{class:!0});var q=g(e);s=y(q,"BUTTON",{type:!0,class:!0});var R=g(s);n=A(R,"Acepto el reto!"),R.forEach(f),q.forEach(f),this.h()},h(){j(t,"class","clean text-center mb-5 svelte-1c8r6dc"),j(i,"class","text-center mb-5"),j(u,"class","col-12 d-flex align-items-center justify-content-center"),j(s,"type","button"),j(s,"class","btn btn-light"),j(e,"class","col-12 d-flex align-items-center justify-content-center")},m(b,T){I(b,t,T),m(t,c),I(b,v,T),I(b,u,T),m(u,i),m(i,d),m(i,o),m(i,r),m(i,a),m(i,l),I(b,_,T),I(b,e,T),m(e,s),m(s,n),E||(p=O(s,"click",h[10]),E=!0)},p:z,d(b){b&&f(t),b&&f(v),b&&f(u),b&&f(_),b&&f(e),E=!1,p()}}}function oe(h){let t,c,v,u,i,d,o=h[1]==0&&G(h),r=h[1]==1&&J(h),a=h[1]==2&&P(h),l=h[1]==3&&F(h);return{c(){t=k("div"),c=k("div"),o&&o.c(),v=D(),r&&r.c(),u=D(),a&&a.c(),i=D(),l&&l.c(),this.h()},l(_){t=y(_,"DIV",{class:!0,style:!0});var e=g(t);c=y(e,"DIV",{class:!0});var s=g(c);o&&o.l(s),v=V(s),r&&r.l(s),u=V(s),a&&a.l(s),i=V(s),l&&l.l(s),s.forEach(f),e.forEach(f),this.h()},h(){j(c,"class","row text-light"),j(t,"class","container d-flex align-items-center justify-content-center"),te(t,"min-height","100vh")},m(_,e){I(_,t,e),m(t,c),o&&o.m(c,null),m(c,v),r&&r.m(c,null),m(c,u),a&&a.m(c,null),m(c,i),l&&l.m(c,null),d=!0},p(_,[e]){_[1]==0?o?o.p(_,e):(o=G(_),o.c(),o.m(c,v)):o&&(o.d(1),o=null),_[1]==1?r?(r.p(_,e),e&2&&B(r,1)):(r=J(_),r.c(),B(r,1),r.m(c,u)):r&&(U(),H(r,1,1,()=>{r=null}),S()),_[1]==2?a?a.p(_,e):(a=P(_),a.c(),a.m(c,i)):a&&(a.d(1),a=null),_[1]==3?l?l.p(_,e):(l=F(_),l.c(),l.m(c,null)):l&&(l.d(1),l=null)},i(_){d||(B(r),d=!0)},o(_){H(r),d=!1},d(_){_&&f(t),o&&o.d(),r&&r.d(),a&&a.d(),l&&l.d()}}}function ae(h,t,c){let v=0,u=!1,i=E=>{c(2,u=E)};const d=E=>{c(1,v=E)},o=E=>{for(let p=1;p<E.length;p++)if(E[p]!==E[0])return!1;return!0};let r=[!0,!0,!1,!1];const a=()=>d(1),l=()=>{i(!0)},_=(E,p,b)=>{c(0,p[b]=!0,r)},e=()=>{c(0,r=[!0,!0,!1,!1]),i(!1)},s=()=>d(3),n=()=>ne("/game");return h.$$.update=()=>{h.$$.dirty&1&&o(r)&&c(1,v=2)},[r,v,u,i,d,a,l,_,e,s,n]}class _e extends Z{constructor(t){super(),x(this,t,ae,oe,ee,{})}}export{_e as default};
