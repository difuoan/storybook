(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n.luvely={},n.Vue))})(this,function(n,e){"use strict";async function l(t,o="https://your-restful-endpoint"){console.log("pending"),t.value="pending",await fetch(o).then(s=>(s.ok?t.value="success":t.value="error",console.log(t.value),s)).catch(()=>{t.value="error",console.log(t.value)})}const p={"data-testid":"span"},a={"data-testid":"state"},d=e.defineComponent({__name:"TestComponent",props:{text:{type:String,default:"State"}},setup(t){const o=e.ref("idle"),s=()=>l(o);return(r,c)=>(e.openBlock(),e.createElementBlock("button",{onClick:s,"data-testid":"TestComponent"},[e.createElementVNode("span",p,e.toDisplayString(t.text)+": ",1),e.createElementVNode("span",a,e.toDisplayString(o.value),1)]))}}),i=(t,o)=>{const s=t.__vccOpts||t;for(const[r,c]of o)s[r]=c;return s},f=i(d,[["__file","/app/lib/components/TestComponent.vue"]]);function u(t){return t===void 0?"Hello!":`Hello ${t}!`}const _=i(e.defineComponent({__name:"TestGreeting",props:{name:{type:String,required:!1}},setup(t){return(o,s)=>(e.openBlock(),e.createElementBlock("h1",null,e.toDisplayString(e.unref(u)(o.name)),1))}}),[["__file","/app/lib/components/TestGreeting.vue"]]);n.TestComponent=f,n.TestGreeting=_,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
