(this["webpackJsonpblog-frontend"]=this["webpackJsonpblog-frontend"]||[]).push([[0],{110:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(18),r=a.n(l),i=(a(62),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Welcome to my blog!"),o.a.createElement("br",null),o.a.createElement("div",{className:"bubble"},o.a.createElement("blockquote",null," The limits of my language are the limits of my world."),o.a.createElement("br",null),o.a.createElement("cite",null,"Ludwig Wittgenstein , Tractatus Logico-Philosophicus , 1922")))}),c=[{name:"1",title:"Learning Software: Anki",date:"24/1/2020",content:["Welcome! Today we're going to be talking about Anki. If you have never heard of Anki and \n            you are struggling on memorizing stuff, then this is a perfect opportunity for you to try \n            it out now. The link is <a href=\"//apps.ankiweb.net/\">here</a>. If you are using a mobile device, you can search\n            Anki up in the play store or app store. The installation should be very simple so I'm not going to go through it here.","<b> Anki is a program which makes remembering things easy. Because it's a lot \n            more efficient than traditional study methods, you can either greatly decrease your time \n            spent studying, or greatly increase the amount you learn. </b> This is the official description of what Anki is. You \n            might be wondering how this is going to help you improve your memorizing skill. You can think of it as pump card if \n            u have never used it before. What it does is to allow the user to create their pump card and also customize their \n            deck. If you are coming from a programming background like me, this gave us a very flexible way to manage our study. \n            You can choose to focus on the difficult concept more frequently. For example, you can choose to study a card daily \n            if you can't remember the meaning of the letter in that language. This will require a lot more time to accomplish \n            in the traditional method and Anki manage this hassle for us.  ",'\n            Wait for a second, you might want to ask a question now, How can I study if I am too lazy to make my own deck?  \n            The answer is very simple. YOU DON\'T. The best feature that Anki developed is to share decks with other \n            learners. The link is right <a href="//ankiweb.net/shared/decks/">here</a>. This should be enough for you to get started. \n            Go get a new deck and start learning!! ']}],m=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"404 Not Found"))},u=a(48),s=a.n(u),h=function(e){var t=e.match.params.name,a=c.find((function(e){return e.name===t}));return a?o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h1",null,a.title)),o.a.createElement("br",null),a.content.map((function(e,t){return o.a.createElement("p",{className:"p",key:t},s()(e))})),o.a.createElement("br",null),o.a.createElement("br",null)):o.a.createElement(m,null)},d=a(20),g=a(119),f=function(e){var t=e.articles;return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",null,t.reverse().map((function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{className:"Card"},o.a.createElement(g.a.Body,null,o.a.createElement("h6",null,e.date),o.a.createElement(d.b,{className:"article-list-item",key:t,to:"https://qwmichael.github.io/blog-frontend "+"/article/".concat(e.name)},o.a.createElement("h4",null,e.title)))),o.a.createElement("br",null))}))))},p=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h1",null,"Article List")),o.a.createElement("br",null),o.a.createElement(f,{articles:c}))},y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("h1",null,"About me"),o.a.createElement("br",null),o.a.createElement("p",null,"Hi all, Thanks for visiting my blog and my name is Michael, currently studying Software Engineering at UNSW Sydney. The reason why I created this blog is to share some of my thought and the difficulty that I encounter in the learning process. I hope my articles can help anyone of you guys to understand new things or reinforce your existed knowledge. I have a lot of interest including Japanese, programming, reading and listening to music. Those will be mainly the content that I'm going to share."),o.a.createElement("p",null,"I'm currently looking for any oppotunity. Feel free to email me  ",o.a.createElement("a",{href:"mailto:michaelng9413@gmail.com"},"michaelng9413@gmail.com"),".")))},b=a(11),E=a(117),w=a(115),k=a(118),v=a(116),I=(a(109),a(110),["1.mp3","2.mp3","3.mp3","4.flac","5.mp3","6.mp3","7.mp3","8.flac","9.mp3","10.mp3","11.mp3"]);var x=function(){function e(e){e.preventDefault();var t=(Number(window.localStorage.getItem("index"))+1)%I.length;window.localStorage.setItem("index",t),document.getElementById("audio").src=I[t],document.getElementById("audio").setAttribute("autoplay","")}return console.log("https://qwmichael.github.io/blog-frontend "),o.a.createElement(d.a,{basename:"https://qwmichael.github.io/blog-frontend "},o.a.createElement(E.a,{bg:"dark",variant:"dark"},o.a.createElement(E.a.Brand,{href:"https://qwmichael.github.io/blog-frontend /"},o.a.createElement(w.a,{src:"hibibg.png",roundedCircle:!0,width:"50",height:"50"})),o.a.createElement(k.a,{className:"mr-auto"},o.a.createElement(k.a.Link,{href:"/about"},"About"),o.a.createElement(k.a.Link,{href:"/articles-list"},"Articles")),o.a.createElement(v.a,{variant:"light",className:"right-buffer",onClick:function(e){e.preventDefault();var t,a=((Number(window.localStorage.getItem("index"))-1)%(t=I.length)+t)%t;window.localStorage.setItem("index",a),document.getElementById("audio").src=I[a],document.getElementById("audio").setAttribute("autoplay",""),console.log("index is "+window.localStorage.getItem("index"))}},"<"),o.a.createElement(v.a,{variant:"light",className:"right-buffer",onClick:e},">"),o.a.createElement("audio",{controls:!0,src:function(){null==window.localStorage.getItem("index")&&window.localStorage.setItem("index",Math.floor(1e3*Math.random())%I.length);for(var e=Math.floor(1e3*Math.random())%I.length;e==window.localStorage.getItem("index");)e=Math.floor(1e3*Math.random())%I.length;return window.localStorage.setItem("index",e),I[e]}(),onEnded:e,id:"audio",controlsList:"nodownload"})),o.a.createElement("div",{id:"page-body"},o.a.createElement("div",{className:"App"},o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/",component:i,exact:!0}),o.a.createElement(b.a,{path:"https://qwmichael.github.io/blog-frontend /about",component:y,exact:!0}),o.a.createElement(b.a,{path:"https://qwmichael.github.io/blog-frontend /articles-list",component:p,exact:!0}),o.a.createElement(b.a,{path:"https://qwmichael.github.io/blog-frontend /article/:name",component:h,exact:!0}),o.a.createElement(b.a,{component:m})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,a){e.exports=a(113)},62:function(e,t,a){},87:function(e,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.ebcbb3c0.chunk.js.map