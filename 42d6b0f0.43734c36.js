(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return u}));var a=n(2),l=n(6),o=(n(0),n(77)),c={id:"basic-collections",title:"Collections"},i={unversionedId:"basic-collections",id:"basic-collections",isDocsHomePage:!1,title:"Collections",description:"Types of collections",source:"@site/docs/basic-collections.md",slug:"/basic-collections",permalink:"/docs/docs/basic-collections",editUrl:"https://github.com/montylang/docs/tree/master/docs/basic-collections.md",version:"current",sidebar:"docs",previous:{title:"Functions",permalink:"/docs/docs/functions"},next:{title:"Maybe",permalink:"/docs/docs/maybe"}},r=[{value:"Types of collections",id:"types-of-collections",children:[{value:"The List Collection",id:"the-list-collection",children:[]},{value:"The Set Collection",id:"the-set-collection",children:[]}]},{value:"Working with Collections",id:"working-with-collections",children:[{value:"Changing the contents",id:"changing-the-contents",children:[]},{value:"Accumulating results",id:"accumulating-results",children:[]},{value:"The Maybe Collection",id:"the-maybe-collection",children:[]}]},{value:"Functors",id:"functors",children:[{value:"Trees",id:"trees",children:[]}]},{value:"Foldables",id:"foldables",children:[]}],s={rightToc:r};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"types-of-collections"},"Types of collections"),Object(o.b)("h3",{id:"the-list-collection"},"The List Collection"),Object(o.b)("p",null,"In Python, a list is defined as ",Object(o.b)("inlineCode",{parentName:"p"},"[1, 2, 3]"),". In Monty, it's the exact same syntax. However, every element of the list must be of the same type. So unlike in Python, you cannot have a list such as ",Object(o.b)("inlineCode",{parentName:"p"},'[1, 2, "apples"]'),"."),Object(o.b)("h3",{id:"the-set-collection"},"The Set Collection"),Object(o.b)("p",null,"Like with lists, sets must contain all the same type: ",Object(o.b)("inlineCode",{parentName:"p"},"Set(1, 2, 3)")),Object(o.b)("h2",{id:"working-with-collections"},"Working with Collections"),Object(o.b)("h3",{id:"changing-the-contents"},"Changing the contents"),Object(o.b)("p",null,"Suppose you have the following Python code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"inputs = [1, 2, 3]\nresults = [x + 1 for x in results]\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"map")," function takes in the collection, then a function to change the contents. This is how you change values of a collection in functional languages."),Object(o.b)("p",null,"So let's rewrite it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"inputs = [1, 2, 3]\nresults = inputs.map((x): x + 1)\n")),Object(o.b)("p",null,"Remember, we can write functions inline using the syntax ",Object(o.b)("inlineCode",{parentName:"p"},"(x): x + 1")),Object(o.b)("h3",{id:"accumulating-results"},"Accumulating results"),Object(o.b)("p",null,"Suppose you have the following Python code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"inputs = [1, 2, 3]\nresult = 0\n\nfor x in inputs:\n  result += x\n")),Object(o.b)("p",null,"Fairly simple, it adds all the results from ",Object(o.b)("inlineCode",{parentName:"p"},"inputs")," up into ",Object(o.b)("inlineCode",{parentName:"p"},"result"),". In Monty, this code becomes a problem. Remember, we can't change ",Object(o.b)("inlineCode",{parentName:"p"},"result")," after we define it."),Object(o.b)("p",null,"Let's reimplement the above Python code to not change ",Object(o.b)("inlineCode",{parentName:"p"},"result"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"def addAll(inputs):\n  if inputs == []:\n    return 0\n\n  first = inputs[0]\n  rest  = inputs[1:]\n  \n  return first + addAll(rest)\n  \nresult = addAll(inputs)\n")),Object(o.b)("p",null,"OK that should be fine in Monty, since nothing changes after being defined."),Object(o.b)("p",null,'"But it\'s clunky! I like the first example waaaaaaaaaay more!"'),Object(o.b)("p",null,"I agree with you. Let's create a function called ",Object(o.b)("inlineCode",{parentName:"p"},"fold")," that will help us with this. I want something generalized to take in a function, which combines all of the values together. It will also need an accumulator parameter"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"def fold(inputs, accumulator, func):\n  if inputs == []:\n    return accumulator\n\n  first = inputs[0]\n  rest  = inputs[1:]\n  \n  newAccumulator = func(accumulator, first)\n\n  return fold(rest, newAccumulator, func)\n")),Object(o.b)("p",null,"Now with this function, we can clean up the immutable Python code with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"def add(x, y):\n  return x + y\n\nresult = fold(inputs, 0, add)\n")),Object(o.b)("p",null,"Much nicer! And we can easily change what that function does."),Object(o.b)("p",null,"In Monty, lists have a ",Object(o.b)("inlineCode",{parentName:"p"},"foldl")," method out of the box, so rewriting this in Monty:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"inputs = [1, 2, 3]\nresult = inputs.foldl(0, (x, y): x + y)\n")),Object(o.b)("h3",{id:"the-maybe-collection"},"The Maybe Collection"),Object(o.b)("h2",{id:"functors"},"Functors"),Object(o.b)("p",null,"\"Whoa whoa whoa, what's a Functor?! Why'd you have to drop that bomb on me!\""),Object(o.b)("p",null,"Stay calm! A Functor is just something that you can ",Object(o.b)("inlineCode",{parentName:"p"},"map")," over."),Object(o.b)("p",null,'"Whew ok, that\'s not so bad"'),Object(o.b)("p",null,"For the examples given... for loops seem simpler than using a map, don't you agree?"),Object(o.b)("h3",{id:"trees"},"Trees"),Object(o.b)("p",null,"Say you have this code in Python:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"class BTree:\n  def __init__(self, value, left, right):\n    self.value = value\n    self.left  = left\n    self.right = right\n    \ninputs = BTree(1, BTree(2, None, None), BTree(3, None, None))\n")),Object(o.b)("p",null,"How would you increment all the values, as we did with the list example?"),Object(o.b)("p",null,"\"Let's see... looks like we'll need a recursive function, something like\""),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"def add1(t):\n  if t == None:\n    return None\n    \n  return BTree(t.value + 1, add1(t.left), add1(t.right))\n\nresults = add1(inputs)\n")),Object(o.b)("p",null,'"That wasn\'t so bad."'),Object(o.b)("p",null,"Sorry, I actually have a tree that has any number of branches. Can you rewrite ",Object(o.b)("inlineCode",{parentName:"p"},"add1")," for that please?"),Object(o.b)("p",null,'"OK, I\'ll just need to change add1 a bit..."'),Object(o.b)("p",null,"Before going on with this charade, let's talk about doing this in Monty instead of Python. This is a Monty book after all."),Object(o.b)("p",null,"Let's rewrite ",Object(o.b)("inlineCode",{parentName:"p"},"BTree"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"class BTree:\n  Node(value, left, right)\n  Leaf\n")),Object(o.b)("p",null,"OK, ",Object(o.b)("inlineCode",{parentName:"p"},"add1")," can be implemented as:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"def add1(t):\n  if t == Leaf:\n    return Leaf\n\n  return Node(t.value + 1, add1(t.left), add1(t.right))\n")),Object(o.b)("p",null,"It's almost identical to the Python code, and it has the same problem as the Python code. Now, remember that a Functor is something you can ",Object(o.b)("inlineCode",{parentName:"p"},"map")," over. What if we could ",Object(o.b)("inlineCode",{parentName:"p"},"map")," over this tree? Then we could use the exact same code to increment all the values as with the list:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"inputs = Node(1, Node(2, Leaf, Leaf), BTree(3, Leaf, Leaf))\nresults = inputs.map((x): x + 1)\n")),Object(o.b)("p",null,"OK now make inputs a list again."),Object(o.b)("p",null,"\"OK that's fine, none of the code for ",Object(o.b)("inlineCode",{parentName:"p"},"results")," will change`"),Object(o.b)("p",null,"But wait, how does ",Object(o.b)("inlineCode",{parentName:"p"},"BTree")," magically become a Functor? Sit tight until the chapter on type classes and you'll find out!"),Object(o.b)("h2",{id:"foldables"},"Foldables"),Object(o.b)("p",null,"A Foldable is something you can call ",Object(o.b)("inlineCode",{parentName:"p"},"foldl")," on, such as lists."),Object(o.b)("p",null,"Now, going back to the accumulating list example. What if we wanted to accumulate the contents of a tree in Python? Like for the ",Object(o.b)("inlineCode",{parentName:"p"},"add1")," example for Functors above, it would require some fancy logic."),Object(o.b)("p",null,"Remember what ",Object(o.b)("inlineCode",{parentName:"p"},"foldl")," does. It goes over a collection, and gathers all the contents into a single value."),Object(o.b)("p",null,"Guess what? A Tree is foldable! So we use the exact same code as for lists:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"inputs = Node(1, Node(2, Leaf, Leaf), BTree(3, Leaf, Leaf))\nresult = inputs.foldl(0, (x, y): x + y)\n")))}u.isMDXComponent=!0},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),u=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,h=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?l.a.createElement(h,i(i({ref:t},s),{},{components:n})):l.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);