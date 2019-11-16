webpackJsonp([0xcb7bfd242706],{37:function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),c=function(e){function t(){o(this,t);var n=r(this,e.apply(this,arguments));return n.state={menuOpen:!1},n.flipState=function(){n.setState({menuOpen:!n.state.menuOpen})},n}return a(t,e),t.prototype.render=function(){var e=[{key:"home",to:"/",title:"Home"},{key:"blog",to:"/blog",title:"Posts"},{key:"projects",to:"/projects",title:"Projects"},{key:"broken",to:"/broken",title:"Broken Link"},{external:!0,key:"github",to:"https://www.github.com/kevinoliveira",target:"_blank",title:"Github"}],t=e.map(function(e){var t=e.title,n=e.to,o=e.external,r=i(e,["title","to","external"]);return o?s.createElement("span",{key:n},s.createElement("a",l({href:n},r),t),"     "):s.createElement("span",{key:n},s.createElement("a",l({},r,{href:n}),t),"     ")});return s.createElement("h5",null,t)},t}(s.Component);t.default=c},213:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=n(53),s=n(37),c=function(e){function t(){i(this,t);var n=o(this,e.apply(this,arguments));return n.nl=function(e){return a.createElement("sup",{id:"fnref-"+String(e)},a.createElement("a",{href:"#fn-"+String(e),className:"footnote-ref"},e))},n.footNotes=function(e){var t=Object.keys(e).map(function(t){return a.createElement("li",{id:"fn-"+t,key:"#fn-"+t},a.createElement("p",null,e[t]),a.createElement("a",{href:"#fnref-"+t,className:"footnote-backref"},"↩"))});return a.createElement("div",{className:"footnotes"},a.createElement("hr",null),a.createElement("ol",null,t))},n.cnd=function(e,t,n){return a.createElement("div",null,e,": ",t,".  ",a.createElement("a",{href:n,target:"blank"},"link"))},n.ct=function(e,t,n){return a.createElement("h3",null,e,"  ",t?a.createElement("a",{href:t,target:"blank"},"Repository"):null,t&&n?" | ":null,n?a.createElement("a",{href:n.link,target:"blank"},n.label):null)},n}return r(t,e),t.prototype.render=function(){var e=this.nl,t=this.cnd,n=this.ct,i=this.footNotes,o={1:t("GastbyJS","Gatsby lets you build blazing fast sites with your data, whatever the source. Liberate your sites from legacy CMSs and fly into the future","https://www.gatsbyjs.org/"),2:t("Typescript","JavaScript that scales, TypeScript is a typed superset of JavaScript that compiles to plain JavaScript","http://www.typescriptlang.org"),3:t("Markdown","a lightweight markup language with plain text formatting syntax","https://en.wikipedia.org/wiki/Markdown"),4:t("ReactJS","A JavaScript library for building user interfaces","https://reactjs.org"),5:t("Server Side Rendering"," is the process of taking a client-side JavaScript Framework website and rendering it to static HTML and CSS on the server","https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38"),6:t("Visual Studio Code","Code editing. Redefined","https://code.visualstudio.com/"),7:t("URI Online Judge","Problems & Contests","https://www.urionlinejudge.com.br/"),8:t("Node Package Manager","is the package manager for JavaScript and the world’s largest software registry","https://www.npmjs.com/"),9:t("Command-line interface","is a means of interacting with a computer program where the user (or client) issues commands to the program in the form of successive lines of text (command lines)","https://en.wikipedia.org/wiki/Command-line_interface")};return a.createElement("div",null,a.createElement(l.default,{notHome:!0}),a.createElement(s.default,null),a.createElement("h1",null,"My Projects"),n("kevinoliveira.github.io","https://github.com/kevinoliveira/kevinoliveira.github.io/tree/edit"),a.createElement("p",null,"This website, i have used GastbyJS",e(1)," and Typescript",e(2),", i write posts in Markdown",e(3)," and special pages like this are actually React",e(4)," components. to deploy the whole thing Gastby uses SSR",e(5)," to create static html pages."),n("URI online judge code","https://github.com/kevinoliveira/uri-online-judge-code",{label:"Extension",link:"https://marketplace.visualstudio.com/items?itemName=kevinoliveira.uri-online-judge-code"}),a.createElement("p",null,"This is a VScode",e(6)," extension to interact with Uri Online Judge",e(7),", allowing you to discover problems, solve and submit without leaving VScode."),n("Markgen",void 0,{label:"NPM",link:"https://www.npmjs.com/package/markgen"}),a.createElement("p",null,"Is a Npm Package",e(8)," that provides a CLI",e(9)," for transpiling Markdown into a custom stylized html file, allowing you to create very easily a single page with some information."),n("File Watcher For Contest","https://github.com/kevinoliveira/FileWatcherForContest"),a.createElement("p",null,"Very simple Shell script to compile, input entry and run C++ contest solutions. saves up a lot of time."),n("Final","https://github.com/kevinoliveira/final",{label:"Web",link:"https://kevinoliveira.github.io/final/"}),a.createElement("p",null,"A very simple SPA",e(10),"-ish solution to calculate how much you need to score in the final test, this is made specific to UNEB",e(11),"(with is my university btw), this project was make when e knew nothing about web development but is actually very useful and people have using it for years, so i will not shutdown it."),n("Say It!","https://github.com/kevinoliveira/sayit",{label:"Web",link:"https://kevinoliveira.github.io/sayit/"}),a.createElement("p",null,"Another SPA-ish, this is one is very simple, you write a message, click the button to copy a shareable link, send it to some one, and this person will only see the message when she opens the link, kinda like a envelope, but digital. Please don't be mean."),n("Dot Files","https://github.com/kevinoliveira/dotFiles"),a.createElement("p",null,"Very straight forward, my config files to configure I3WM",e(11)," I3Status",e(11),"  NeoVim",e(11),"  Rofi",e(11),"  Aplications Menu",e(11),"  VScode",e(11),"  Bash",e(11),"  and other stuff"),n("Other Projects"),a.createElement("p",null,"I do have other projects, but they are either abandoned or private."),i(o))},t}(a.Component);t.default=c}});
//# sourceMappingURL=component---src-pages-projects-tsx-a13e943280b48d70cc2b.js.map