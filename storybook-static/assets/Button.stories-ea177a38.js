import{r as O}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";var N={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=O,R=Symbol.for("react.element"),S=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,T=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function E(t,e,i){var r,a={},c=null,d=null;i!==void 0&&(c=""+i),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(d=e.ref);for(r in e)h.call(e,r)&&!k.hasOwnProperty(r)&&(a[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)a[r]===void 0&&(a[r]=e[r]);return{$$typeof:R,type:t,key:c,ref:d,props:a,_owner:T.current}}l.Fragment=S;l.jsx=E;l.jsxs=E;N.exports=l;var p=N.exports;function u({label:t,...e}){return p.jsxs("div",{className:"flex flex-col",children:[p.jsx("label",{className:"",htmlFor:e.id,children:t}),p.jsx("input",{className:"",...e})]})}try{u.displayName="Input",u.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}const w={title:"UI/Input",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"}}},o={},s={args:{label:"Text"}},n={args:{required:!0,label:"Not empty"}};var m,_,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var x,y,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Text"
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,v,I;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    required: true,
    label: "Not empty"
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const D=["Default","Label","Invalid"];export{o as Default,n as Invalid,s as Label,D as __namedExportsOrder,w as default};
//# sourceMappingURL=Button.stories-ea177a38.js.map
