(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{54:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return s}));var t=r(2),o=r(6),a=(r(0),r(77)),c={id:"monad",title:"Monads & Unwrap"},i={unversionedId:"monad",id:"monad",isDocsHomePage:!1,title:"Monads & Unwrap",description:"Monads",source:"@site/docs/monad.md",slug:"/monad",permalink:"/docs/docs/monad",editUrl:"https://github.com/montylang/docs/tree/master/docs/monad.md",version:"current",sidebar:"docs",previous:{title:"Functors",permalink:"/docs/docs/functor"}},u=[{value:"Monads",id:"monads",children:[]}],p={rightToc:u};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"monads"},"Monads"),Object(a.b)("p",null,"TODO: Add explanations"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"instance Maybe of Monad:\n  def bind(Just(value), f):\n    return f(value)\n\n  def bind(None, _):\n    return None\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"a = Just(3)\nb = Just(4)\n\naPlusB = unwrap:\n  innerA <- a\n  innerB <- b\n  wrap(innerA + innerB)\n")))}s.isMDXComponent=!0},77:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(r),f=t,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return r?o.a.createElement(m,i(i({ref:n},p),{},{components:r})):o.a.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);