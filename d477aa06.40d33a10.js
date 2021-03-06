(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(2),o=t(6),r=(t(0),t(75)),i={id:"functions",title:"Functions"},s={unversionedId:"functions",id:"functions",isDocsHomePage:!1,title:"Functions",description:"Python vs Monty",source:"@site/docs/functions.md",slug:"/functions",permalink:"/docs/docs/functions",editUrl:"https://github.com/montylang/docs/tree/master/docs/functions.md",version:"current",sidebar:"docs",previous:{title:"Basic Types",permalink:"/docs/docs/basic-types"},next:{title:"Collections",permalink:"/docs/docs/basic-collections"}},c=[{value:"Python vs Monty",id:"python-vs-monty",children:[]},{value:"Functions as a first class citizens",id:"functions-as-a-first-class-citizens",children:[]},{value:"Currying",id:"currying",children:[]},{value:"Lambdas",id:"lambdas",children:[]},{value:"Dot sugar syntax",id:"dot-sugar-syntax",children:[]}],l={rightToc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"python-vs-monty"},"Python vs Monty"),Object(r.b)("p",null,"Let's start by taking a look at how functions are declared in python."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"def add1(x):\n  return x + 1\n")),Object(r.b)("p",null,"This creates a function named ",Object(r.b)("inlineCode",{parentName:"p"},"add1")," that takes a single parameter (who's value\nwill be bound to ",Object(r.b)("inlineCode",{parentName:"p"},"x")," and returns ",Object(r.b)("inlineCode",{parentName:"p"},"x + 1"),". Pretty simple. Now let's take a look at what\nthat same function looks like in monty."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"def add1(x):\n  return x + 1\n")),Object(r.b)("p",null,"It's declared exactly the same way. While there are some differences between monty functions\nand python functions for the most part they're very similar."),Object(r.b)("h2",{id:"functions-as-a-first-class-citizens"},"Functions as a first class citizens"),Object(r.b)("p",null,"Your first question might be: \"What does 'first class citizens' mean? They look exactly the\nsame as in python\". Let's talk about how functions are often used in functional languages\ncompared to imperative ones using an example."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"def foo(a):\n  return a(3)\n")),Object(r.b)("p",null,"This may not be something you're used to seeing in python. The function ",Object(r.b)("inlineCode",{parentName:"p"},"foo")," takes a single\nargument which appears to be another function. What do you think would happen if we ran ",Object(r.b)("inlineCode",{parentName:"p"},"foo(add1)"),"?\nIf you thought it should return ",Object(r.b)("inlineCode",{parentName:"p"},"4")," then you're right! That's exactly how it works. Let's quickly\nlook at why that's the case by examining what exactly ",Object(r.b)("inlineCode",{parentName:"p"},"add1")," (the parameter passed to foo) is."),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"add1")," monty example above we declared the function identically to how would have in python\nbut monty offers another way to declare functions."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"add1 = def (x):\n  return x + 1\n")),Object(r.b)("p",null,"Now this may look a little bit odd but in fact the monty interpreter turns our \"normal\" declaration\ninto this form. Here we're creating a function with no name which takes a single number and increments\nit by one (the exact same behaviour as before). We're then assigning that nameless function to a\nvariable named ",Object(r.b)("inlineCode",{parentName:"p"},"add1"),"."),Object(r.b)("p",null,"So if I were now to ask you what type of value was stored in ",Object(r.b)("inlineCode",{parentName:"p"},"add1")," I would hope you'd immediatly say:\n\"Well it's a function with no name. You just told us that\". Let's now return to our call ",Object(r.b)("inlineCode",{parentName:"p"},"foo(add1)"),"\nyou might now be able to better describe what's happening here. We're simply passing a variable into\na function, that variable just happens to be a function. Inside the body of ",Object(r.b)("inlineCode",{parentName:"p"},"foo")," that nameless function\nis assigned to ",Object(r.b)("inlineCode",{parentName:"p"},"a")," rather than ",Object(r.b)("inlineCode",{parentName:"p"},"add1")," so we can execute the function as you'd expect by running ",Object(r.b)("inlineCode",{parentName:"p"},"a(3)"),"."),Object(r.b)("p",null,"The function ",Object(r.b)("inlineCode",{parentName:"p"},"foo")," will actually work on ",Object(r.b)("strong",{parentName:"p"},"any")," function that takes a single number as a parameter.\nThis type of behaviour is very common in functional programming. You'll encounter lot's of functions\nthat take other functions as their arguments. These types of functions are called ",Object(r.b)("strong",{parentName:"p"},"higher order functions"),"."),Object(r.b)("p",null,"You'll see in the ",Object(r.b)("a",{parentName:"p",href:"/docs/docs/basic-collections"},"basic collections")," section some of the most common higher\norder functions provided by prelude."),Object(r.b)("h2",{id:"currying"},"Currying"),Object(r.b)("p",null,"Currying is a technique to allow only partially applying a function."),Object(r.b)("p",null,"Suppose we have this function for adding numbers:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"def add(a, b):\n  return a + b\n")),Object(r.b)("p",null,"Now suppose we want to re-use this function to implement ",Object(r.b)("inlineCode",{parentName:"p"},"add1")," from above:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"add1 = (x): add(1, x)\n")),Object(r.b)("p",null,"Great! Wonderful code re-use. This technique is used often enough in functional programming that there is special syntax for it in Monty (and many other languages) called currying. The syntax might look a bit stange, since the ",Object(r.b)("inlineCode",{parentName:"p"},"add")," function really has two parameters. But it's really just sugar syntax for writing ",Object(r.b)("inlineCode",{parentName:"p"},"add1 = (x): add(1, x)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"add1 = add(1)\n")),Object(r.b)("h2",{id:"lambdas"},"Lambdas"),Object(r.b)("p",null,"While they might have a fancy name lambdas don't introduce anything we haven't already seen in this\nsection. They're simply a short form for function declarations. They can be useful for single\nuse functions that you want to declare inline. Alright, enough chatter! Let's see an example."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"# From example 1\ndef add1(x):\n  return x + 1\n\n# From example 2\nadd1 = def (x):\n  return x + 1\n  \nadd1 = (x): x + 1\n")),Object(r.b)("p",null,"Here we see three ways of declaring the exact same function. The first two we've seen already and\nthe third introduces the lambda syntax. A lambda is simply a function that only has a single line.\nThe return value of the function is the result of running that line. We also drop the ",Object(r.b)("inlineCode",{parentName:"p"},"def")," for brevity."),Object(r.b)("p",null,"Assigning a lambda to a variable to create a function isn't where they're very useful, after all\nwe already know how to declare functions. Let's reuse another example from above however to demonstrate\nhow they can be useful. However this time we'll use a lambda instead of a regular function call."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"def foo(a):\n  return a(3)\n  \nfoo((x): x + 1)\n")),Object(r.b)("p",null,"Notice how we don't declare ",Object(r.b)("inlineCode",{parentName:"p"},"add1")," as a standalone function anymore? We can simply declare it\ndirectly in our function call. This can be handy in all sorts of different situations often when\nyou're iterating lists or other containers."),Object(r.b)("h2",{id:"dot-sugar-syntax"},"Dot sugar syntax"),Object(r.b)("p",null,"As Monty doesn't support object oriented programming, there are no objects. Sometimes it's a lot cleaner to use the \"dot\" syntax for method calls though, right?"),Object(r.b)("p",null,"What if we want to treat ",Object(r.b)("inlineCode",{parentName:"p"},"1")," as an object, and ",Object(r.b)("inlineCode",{parentName:"p"},"add")," as a method:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"1.add(2)\n")),Object(r.b)("p",null,"Monty supports this sugar syntax! It's exactly the same as calling ",Object(r.b)("inlineCode",{parentName:"p"},"add(1, 2)")))}u.isMDXComponent=!0},75:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=a,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||r;return t?o.a.createElement(h,s(s({ref:n},l),{},{components:t})):o.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);