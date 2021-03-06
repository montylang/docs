(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return i}));var r=t(2),a=t(6),o=(t(0),t(77)),c={id:"functor",title:"Functors"},l={unversionedId:"functor",id:"functor",isDocsHomePage:!1,title:"Functors",description:"Functors",source:"@site/docs/functor.md",slug:"/functor",permalink:"/docs/docs/functor",editUrl:"https://github.com/montylang/docs/tree/master/docs/functor.md",version:"current",sidebar:"docs",previous:{title:"Types & Classes",permalink:"/docs/docs/type-class"},next:{title:"Monads & Unwrap",permalink:"/docs/docs/monad"}},u=[{value:"Functors",id:"functors",children:[{value:"Maybe Functor",id:"maybe-functor",children:[]},{value:"BTree",id:"btree",children:[]}]}],p={rightToc:u};function i(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"functors"},"Functors"),Object(o.b)("p",null,"Recall: A functor is something we can ",Object(o.b)("inlineCode",{parentName:"p"},"map")," over, applying a function to some underlying value."),Object(o.b)("p",null,"Now that you know about type classes, classes, and collections, let's talk about how functors really work."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"type Functor:\n  def map(self, function)\n")),Object(o.b)("h3",{id:"maybe-functor"},"Maybe Functor"),Object(o.b)("p",null,"Let's go back to the ",Object(o.b)("inlineCode",{parentName:"p"},"Maybe")," example, and see how we could implement it as a functor."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"class Maybe:\n  Just(value)\n  None\n")),Object(o.b)("p",null,"If we have a ",Object(o.b)("inlineCode",{parentName:"p"},"Just(value)"),", we should apply the function to ",Object(o.b)("inlineCode",{parentName:"p"},"value"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"Just(value).map(f) = Just(f(value))\n")),Object(o.b)("p",null,"If we have a ",Object(o.b)("inlineCode",{parentName:"p"},"None"),", we should do nothing"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"None.map(f) = None\n")),Object(o.b)("p",null,"Putting these together:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"instance Maybe of Functor:\n  def map(Just(value), f):\n    return Just(f(value))\n\n  def map(_, _):\n    return None\n")),Object(o.b)("h3",{id:"btree"},"BTree"),Object(o.b)("p",null,"As promised, let's go over how to turn a BTree into a functor:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"class BTree:\n  Node(value, left, right)\n  Leaf\n")),Object(o.b)("p",null,"When we call ",Object(o.b)("inlineCode",{parentName:"p"},"map")," on a Node, we want to apply a function to the value, and all values on the left and right."),Object(o.b)("p",null,"When we call ",Object(o.b)("inlineCode",{parentName:"p"},"map")," on a Leaf, we want to do nothing. Exactly the same as calling ",Object(o.b)("inlineCode",{parentName:"p"},"None.map(f)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"instance BTree:\n  def map(Node(value, left, right), f):\n    return Node(\n      f(value),\n      left.map(f),\n      right.map(f),\n    )\n\n  def map(_, _):\n    return Leaf\n")),Object(o.b)("p",null,"So, this isn't done automatically, but it's very simple to implement. And now, for any BTree we define, we can call ",Object(o.b)("inlineCode",{parentName:"p"},"map")," on it! Magical!"))}i.isMDXComponent=!0},77:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),i=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=i(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=i(t),f=r,d=s["".concat(c,".").concat(f)]||s[f]||b[f]||o;return t?a.a.createElement(d,l(l({ref:n},p),{},{components:t})):a.a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);