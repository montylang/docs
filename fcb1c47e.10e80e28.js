(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return u}));var a=t(2),i=t(6),o=(t(0),t(77)),r={id:"maybe",title:"Maybe"},l={unversionedId:"maybe",id:"maybe",isDocsHomePage:!1,title:"Maybe",description:"Motivation",source:"@site/docs/maybe.md",slug:"/maybe",permalink:"/docs/docs/maybe",editUrl:"https://github.com/montylang/docs/tree/master/docs/maybe.md",version:"current",sidebar:"docs",previous:{title:"Collections",permalink:"/docs/docs/basic-collections"},next:{title:"Types & Classes",permalink:"/docs/docs/type-class"}},b=[{value:"Motivation",id:"motivation",children:[]},{value:"What is the <code>Maybe</code> type?",id:"what-is-the-maybe-type",children:[]},{value:"Example continued",id:"example-continued",children:[]},{value:"A peek at <code>unwrap</code>",id:"a-peek-at-unwrap",children:[]},{value:"Next up",id:"next-up",children:[]}],p={rightToc:b};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"Let's begin with a quick comparison between how Monty and Python handle ",Object(o.b)("inlineCode",{parentName:"p"},"None"),".\nFirst let's write a simple validator function in Python. If the number is valid\nwe return the number otherwise we return ",Object(o.b)("inlineCode",{parentName:"p"},"None"),". Pretty simple."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"def validateNumber(num):\n  if num > 2 and num < 10:\n    return num\n  else:\n    return None\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"3 + validateNumber(7) # -> 10\n3 + validateNumber(11) # -> TypeError: unsupported operand type(s) for +: 'int' and 'NoneType'\n")),Object(o.b)("p",null,"We can see that everything is fine when the number is valid but we get an error when the\nnumber is invalid. We'd need to use an if to first check the return value, like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"result = validateNumber(11)\n\nif result is not None:\n  result + 3\nelse:\n  # Handle failure\n\n")),Object(o.b)("p",null,"Logic like this can become quite convoluted very quickly. Imagine if we had more numbers\nwe wanted to operate on. We'd need to check the return value of each ",Object(o.b)("inlineCode",{parentName:"p"},"validateNumber")," call\nbefore using it. Now let's take a look at rewriting this in monty:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"def validateNumber(num):\n  if num > 2 and num < 10:\n    return Just(num)\n  else:\n    return None\n")),Object(o.b)("p",null,"As you can see not much has changed at all, in fact the only thing that's changed is\nwe've wrapped the ",Object(o.b)("inlineCode",{parentName:"p"},"num")," return value with ",Object(o.b)("inlineCode",{parentName:"p"},"Just"),". We'll talk about what exactly that means\nbut first let's try and use it like we did above."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"3 + validateNumber(7) # -> error: cannot operate on types Int and Maybe\n")),Object(o.b)("p",null,"You'll notice right away there's a difference. Monty seems to be failing even on the \"success\"\ncase. Why would that be? Well we're no longer returning ",Object(o.b)("inlineCode",{parentName:"p"},"num")," we're returning ",Object(o.b)("inlineCode",{parentName:"p"},"Just(num)"),"."),Object(o.b)("h2",{id:"what-is-the-maybe-type"},"What is the ",Object(o.b)("inlineCode",{parentName:"h2"},"Maybe")," type?"),Object(o.b)("p",null,"Let's start off with a definition. In monty (and many other functional languages) we have the\nfollowing data type:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"class Maybe:\n  Just(value)\n  None\n")),Object(o.b)("p",null,"If you're unfamiliar with data types you can learn more about them ",Object(o.b)("a",{parentName:"p",href:"/docs/docs/data-types"},"here"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Maybe")," type is used to represent an operation that might fail. Most imperative\nlanguages use ",Object(o.b)("inlineCode",{parentName:"p"},"null")," to represent this (and python uses ",Object(o.b)("inlineCode",{parentName:"p"},"None"),"). Maybes and nulls are\nvery similar but maybes offer some advantages that we'll see in a moment."),Object(o.b)("h2",{id:"example-continued"},"Example continued"),Object(o.b)("p",null,"Let's keep looking at our ",Object(o.b)("inlineCode",{parentName:"p"},"validateNumber")," function in monty. We saw that we could no\nlonger operate on the return value the way we would in python. Let's take a look at\nhow we can unpack a maybe."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"case validateNumber(7):\n  Just(result): 3 + result\n  None: # Handle failure\n")),Object(o.b)("p",null,"At first glace you might be thinking: \"That's even worse than what python does!\" and\nyou'd be right. Luckily we have a few additional tools in functional programming that\nallow us to work with a ",Object(o.b)("inlineCode",{parentName:"p"},"Maybe")," without unwrapping it. The first one we'll look at is\n",Object(o.b)("inlineCode",{parentName:"p"},"map"),". In ",Object(o.b)("a",{parentName:"p",href:"/docs/docs/basic-collections"},"basic collections")," you should have learnt about ",Object(o.b)("inlineCode",{parentName:"p"},"map"),"\nand functors. In monty ",Object(o.b)("inlineCode",{parentName:"p"},"Maybe")," is a functor i.e. something you can map over. Let's see\nhow we can use that to our advantage."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"result = validateNumber(7).map((x): 3 + x) # Just(10)\n")),Object(o.b)("p",null,"You'll notice that our result is still wrapped inside of a ",Object(o.b)("inlineCode",{parentName:"p"},"Just"),". Rather than unpacking\nthe value we operated on the value inside the ",Object(o.b)("inlineCode",{parentName:"p"},"Just"),". This has a couple of advantages\nthat we'll discuss but first let's take a look at what happens when ",Object(o.b)("inlineCode",{parentName:"p"},"validateNumber"),"\nfails."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"result = validateNumber(11).map((x): 3 + x) # None\n")),Object(o.b)("p",null,"This is where we start to see the power of using map. Validate number failed and returned\na ",Object(o.b)("inlineCode",{parentName:"p"},"None")," but calling map on that ",Object(o.b)("inlineCode",{parentName:"p"},"None"),' didn\'t fail (like you might expect in an imperative\nlanguage) instead it "short circuited" and gave us ',Object(o.b)("inlineCode",{parentName:"p"},"None")," back. In other words we can operate\non the ",Object(o.b)("inlineCode",{parentName:"p"},"Maybe")," without knowing whether or not it's a ",Object(o.b)("inlineCode",{parentName:"p"},"Just")," or ",Object(o.b)("inlineCode",{parentName:"p"},"None"),". We aren't forced to\nunwrap the value to operate on it whereas with a null we must check that it's succeeded before\nwe can use the value."),Object(o.b)("h2",{id:"a-peek-at-unwrap"},"A peek at ",Object(o.b)("inlineCode",{parentName:"h2"},"unwrap")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," We won't go into how or why ",Object(o.b)("inlineCode",{parentName:"p"},"unwrap")," works we'll save that for\n",Object(o.b)("a",{parentName:"p",href:"/docs/docs/monad"},"a later portion of the docs"),". I would highly suggest not skipping ahead as the\nfollowing examples should give you a strong intuition about what's to come."),Object(o.b)("p",null,"Let's start with a simple motivational example."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'def useValidatedNumber(num):\n  return if num == 5:\n    Just("Five")\n  else:\n    None\n')),Object(o.b)("p",null,"Here we have a function that we want to use on the result of ",Object(o.b)("inlineCode",{parentName:"p"},"validateNumber"),". Let's\ntry and use what we just learnt and map that function into the ",Object(o.b)("inlineCode",{parentName:"p"},"Maybe"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"result = validateNumber(5).map(useValidatedNumber)\n")),Object(o.b)("p",null,"Can you see what the problem with this is? It's not immediately obvious so let's\ntake a look at the returns. Running ",Object(o.b)("inlineCode",{parentName:"p"},"validateNumber(5)")," gives us ",Object(o.b)("inlineCode",{parentName:"p"},"Just(5)")," now\nwe map ",Object(o.b)("inlineCode",{parentName:"p"},"useValidatedNumber")," inside which runs ",Object(o.b)("inlineCode",{parentName:"p"},"useValidatedNumber(5)")," which gives\nus ",Object(o.b)("inlineCode",{parentName:"p"},'Just("Five")')," however that result goes back inside the original value giving us a\nfinal value of ",Object(o.b)("inlineCode",{parentName:"p"},'Just(Just("Five"))'),". This obviously isn't what we want. What we want is\n",Object(o.b)("inlineCode",{parentName:"p"},'Just("Five") on it\'s own'),"."),Object(o.b)("p",null,"Let's take a look at a naive solution:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'def newUseValidatedNumber(value):\n  return case value:\n    Just(num): if num == 5:\n                 Just("Five")\n               else:\n                 None\n    None: None\n')),Object(o.b)("p",null,"We went ahead and rewrote our ",Object(o.b)("inlineCode",{parentName:"p"},"useValidatedNumber")," to unpack the ",Object(o.b)("inlineCode",{parentName:"p"},"Maybe")," value\nand handle both cases before rewrapping it. This avoids the nested ",Object(o.b)("inlineCode",{parentName:"p"},"Just"),"s but\nwe're back to where we started. We have to unpack the number before we could use it."),Object(o.b)("p",null,"Now let's look at how ",Object(o.b)("inlineCode",{parentName:"p"},"unwrap")," can help us here:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"result = unwrap:\n  validated <- validateNumber(5)\n  useValidatedNumber(validated)\n")),Object(o.b)("p",null,"Let's start by looking at what the ",Object(o.b)("inlineCode",{parentName:"p"},"<-")," does inside of ",Object(o.b)("inlineCode",{parentName:"p"},"unwrap")," (it can't be used anywhere\nelse). The ",Object(o.b)("inlineCode",{parentName:"p"},"<-")," operator can be thought of like a special assignment. The only difference\nbeing that it unwraps the value on the right before assigning it to the variable on the left.\nSo in our case we know ",Object(o.b)("inlineCode",{parentName:"p"},"validateNumber(5)")," is ",Object(o.b)("inlineCode",{parentName:"p"},"Just(5)")," so ",Object(o.b)("inlineCode",{parentName:"p"},"validated")," will be ",Object(o.b)("inlineCode",{parentName:"p"},"5"),". You\nshould immediately be able to see how this solves our previous problem. Now that we have\nthe inside of our ",Object(o.b)("inlineCode",{parentName:"p"},"Just")," on it's own we can simply pass that to useValidatedNumber."),Object(o.b)("p",null,'The final line of the unwrap is what the entire expression will evaluate to. You can think\nof it as a "return" for the unwrap. We know that ',Object(o.b)("inlineCode",{parentName:"p"},"useValidatedNumber(5)")," is ",Object(o.b)("inlineCode",{parentName:"p"},'Just("Five")'),'\nso this unwrap will "return" ',Object(o.b)("inlineCode",{parentName:"p"},'Just("Five")'),"."),Object(o.b)("p",null,"At this point you might be wondering what happens if you try and ",Object(o.b)("inlineCode",{parentName:"p"},"<-")," a ",Object(o.b)("inlineCode",{parentName:"p"},"None")," value. Let's\ntake a look:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"result = unwrap:\n  validated <- validateNumber(11)\n  useValidatedNumber(validated)\n")),Object(o.b)("p",null,"In this case ",Object(o.b)("inlineCode",{parentName:"p"},"result")," is simply ",Object(o.b)("inlineCode",{parentName:"p"},"None"),". After ",Object(o.b)("inlineCode",{parentName:"p"},"validateNumber(11)")," returns ",Object(o.b)("inlineCode",{parentName:"p"},"None")," we stop\nexecuting and return ",Object(o.b)("inlineCode",{parentName:"p"},"None"),". This saves us from having to worry about the ",Object(o.b)("inlineCode",{parentName:"p"},"None")," case in\n",Object(o.b)("inlineCode",{parentName:"p"},"useValidatedNumber"),"."),Object(o.b)("p",null,"In addition ",Object(o.b)("inlineCode",{parentName:"p"},"unwrap")," blocks can have many",Object(o.b)("inlineCode",{parentName:"p"},"<-")," lines. This allows you to perform as many\n",Object(o.b)("inlineCode",{parentName:"p"},"Maybe")," operations in a row as you want. Rather than checking for failure after every single\noperation that can fail you can perform all your operations inside an unwrap and check only\nonce at the very end."),Object(o.b)("p",null,"I'll give one more example just to show another way this can be powerful:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"result = unwrap:\n  v1 <- validateNumber(3)\n  v2 <- validateNumber(7)\n  Just(v1 + v2)\n")),Object(o.b)("p",null,"Here we're combining two ",Object(o.b)("inlineCode",{parentName:"p"},"Maybe"),"s into a single one without having to extract the values.\nAs you might expect if any of the values on the right hand side is ",Object(o.b)("inlineCode",{parentName:"p"},"None")," then this\nentire expression will short circuit and return ",Object(o.b)("inlineCode",{parentName:"p"},"None"),"."),Object(o.b)("h2",{id:"next-up"},"Next up"),Object(o.b)("p",null,"The intuition for dealing with nested ",Object(o.b)("inlineCode",{parentName:"p"},"Just"),"s and chaining ",Object(o.b)("inlineCode",{parentName:"p"},"Maybe")," operations together is\nimportant because ",Object(o.b)("inlineCode",{parentName:"p"},"Maybe")," is a Monad. The exact same concepts can be applied to any other Monad!"),Object(o.b)("p",null,"Armed with our knowledge of nesting and chaining we'll examine Monads in more detail and\nsee some more examples that you're probably already familiar with."))}u.isMDXComponent=!0},77:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,m=s["".concat(r,".").concat(d)]||s[d]||c[d]||o;return t?i.a.createElement(m,l(l({ref:n},p),{},{components:t})):i.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);