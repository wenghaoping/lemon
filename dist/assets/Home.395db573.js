import{u as y,w as T,N as g}from"./app.2b783260.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";import{d as p,c as i,u as e,o,b as a,g as _,e as r,t as l,k as x,F as I,z as L,G as A,A as d,B as k}from"./framework.0718b91c.js";import"./framework.8fbe3919.js";const B={key:0,class:"home-hero"},C={key:0,class:"figure"},N=["src","alt"],w={key:1,id:"main-title",class:"title"},b={key:2,class:"tagline"},V=p({__name:"HomeHero",setup(h){const{site:s,frontmatter:t}=y(),c=i(()=>{const{heroImage:n,heroText:u,tagline:H,actionLink:$,actionText:F}=t.value;return n||u||H||$&&F}),v=i(()=>t.value.heroText||s.value.title),f=i(()=>t.value.tagline||s.value.description);return(n,u)=>e(c)?(o(),a("header",B,[e(t).heroImage?(o(),a("figure",C,[_("img",{class:"image",src:e(T)(e(t).heroImage),alt:e(t).heroAlt},null,8,N)])):r("",!0),e(v)?(o(),a("h1",w,l(e(v)),1)):r("",!0),e(f)?(o(),a("p",b,l(e(f)),1)):r("",!0),e(t).actionLink&&e(t).actionText?(o(),x(g,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("",!0),e(t).altActionLink&&e(t).altActionText?(o(),x(g,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("",!0)])):r("",!0)}});var D=m(V,[["__scopeId","data-v-370f18c0"]]);const S={key:0,class:"home-features"},z={class:"wrapper"},E={class:"container"},G={class:"features"},j={key:0,class:"title"},q={key:1,class:"details"},J=p({__name:"HomeFeatures",setup(h){const{frontmatter:s}=y(),t=i(()=>s.value.features&&s.value.features.length>0),c=i(()=>s.value.features?s.value.features:[]);return(v,f)=>e(t)?(o(),a("div",S,[_("div",z,[_("div",E,[_("div",G,[(o(!0),a(I,null,L(e(c),(n,u)=>(o(),a("section",{key:u,class:"feature"},[n.title?(o(),a("h2",j,l(n.title),1)):r("",!0),n.details?(o(),a("p",q,l(n.details),1)):r("",!0)]))),128))])])])])):r("",!0)}});var K=m(J,[["__scopeId","data-v-e39c13e0"]]);const M={key:0,class:"footer"},O={class:"container"},P={class:"text"},Q=p({__name:"HomeFooter",setup(h){const{frontmatter:s}=y();return(t,c)=>e(s).footer?(o(),a("footer",M,[_("div",O,[_("p",P,l(e(s).footer),1)])])):r("",!0)}});var R=m(Q,[["__scopeId","data-v-30918238"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=p({__name:"Home",setup(h){return(s,t)=>{const c=A("Content");return o(),a("main",U,[d(D),k(s.$slots,"hero",{},void 0,!0),d(K),_("div",W,[d(c)]),k(s.$slots,"features",{},void 0,!0),d(R),k(s.$slots,"footer",{},void 0,!0)])}}});var se=m(X,[["__scopeId","data-v-10122c92"]]);export{se as default};
