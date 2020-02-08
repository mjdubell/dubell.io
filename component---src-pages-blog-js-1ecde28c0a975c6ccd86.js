(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return v}),r.d(e,"pageQuery",function(){return w});r(79),r(80);var n=r(198),a=r.n(n),o=(r(182),r(184),r(199)),i=r.n(o),c=r(5),s=r.n(c),u=r(0),l=r.n(u),f=r(170),p=r.n(f),h=r(174),m=r(178),d=r(172),g=r(169),y=r.n(g),v=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={searchTerm:"",currentCategories:[],posts:e.props.data.posts.edges,filteredPosts:e.props.data.posts.edges},e.handleChange=function(){var t=i()(a.a.mark(function t(r){var n,o,i,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.target,i=o.name,c=o.value,t.next=3,e.setState(((n={})[i]=c,n));case 3:e.filterPosts();case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.filterPosts=function(){var t=e.state,r=t.posts,n=t.searchTerm,a=t.currentCategories,o=r.filter(function(t){return t.node.frontmatter.title.toLowerCase().includes(n.toLowerCase())});a.length>0&&(o=o.filter(function(t){return t.node.frontmatter.categories&&a.every(function(e){return t.node.frontmatter.categories.includes(e)})})),e.setState({filteredPosts:o})},e.updateCategories=function(t){e.state.currentCategories.includes(t)?e.setState(function(e){return{currentCategories:e.currentCategories.filter(function(e){return t!==e})}}):e.setState(function(e){return{currentCategories:[].concat(e.currentCategories,[t])}})},e}return s()(e,t),e.prototype.render=function(){var t=this,e=this.state,r=e.filteredPosts,n=e.searchTerm,o=e.currentCategories,c=r.length,s=this.props.data.categories.group;return l.a.createElement(h.a,null,l.a.createElement(p.a,{title:"Articles – "+y.a.siteTitle}),l.a.createElement(d.a,null),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Articles"),l.a.createElement("div",{className:"category-container"},s.map(function(e){var r=o.includes(e.fieldValue);return l.a.createElement("div",{className:"category-filter "+(r?"active":""),key:e.fieldValue,onClick:i()(a.a.mark(function r(){return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.updateCategories(e.fieldValue);case 2:return r.next=4,t.filterPosts();case 4:case"end":return r.stop()}},r)}))},e.fieldValue)})),l.a.createElement("div",{className:"search-container"},l.a.createElement("input",{className:"search",type:"text",name:"searchTerm",value:n,placeholder:"Type here to filter posts...",onChange:this.handleChange}),l.a.createElement("div",{className:"filter-count"},c)),l.a.createElement(m.a,{postEdges:r})))},e}(u.Component),w="2933602180"},172:function(t,e,r){"use strict";r.d(e,"a",function(){return h});r(173);var n=r(5),a=r.n(n),o=r(0),i=r.n(o),c=r(170),s=r.n(c),u=r(171),l=r.n(u),f=r(169),p=r.n(f),h=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t,e,r,n=this.props,a=n.postNode,o=n.postPath,c=n.postSEO,u="";if(c){var f=a.frontmatter;t=f.title,e=f.description?f.description:a.excerpt,f.thumbnail&&(u=f.thumbnail.childImageSharp.fixed.src),r=l()(p.a.siteUrl,p.a.pathPrefix,o)}else t=p.a.siteTitle,e=p.a.siteDescription,u=p.a.siteLogo;u=l()(p.a.siteUrl,u);var h=l()(p.a.siteUrl,p.a.pathPrefix),m=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:t,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:""}];return c&&m.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:t,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:t,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:u},description:e}),i.a.createElement(s.a,null,i.a.createElement("meta",{name:"description",content:e}),i.a.createElement("meta",{name:"image",content:u}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),i.a.createElement("meta",{property:"og:url",content:c?r:h}),c?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:t}),i.a.createElement("meta",{property:"og:description",content:e}),i.a.createElement("meta",{property:"og:image",content:u}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:p.a.userTwitter}),i.a.createElement("meta",{name:"twitter:title",content:t}),i.a.createElement("meta",{name:"twitter:description",content:e}),i.a.createElement("meta",{name:"twitter:image",content:u}))},e}(o.Component)},173:function(t,e,r){"use strict";r(177)("fixed",function(t){return function(){return t(this,"tt","","")}})},175:function(t,e,r){"use strict";r.d(e,"b",function(){return u}),r.d(e,"a",function(){return l});var n=r(171),a=r.n(n),o=r(176),i=r.n(o),c=r(169),s=r.n(c),u=function(t){return i.a.utc(t).format(s.a.dateFormat)},l=function(t){var e=i.a.utc(t.date).format(s.a.dateFromFormat);return a()(s.a.repo,"/blob/gatsby/content/posts",e+"-"+t.slug+".md")}},178:function(t,e,r){"use strict";r.d(e,"a",function(){return f});var n=r(5),a=r.n(n),o=r(0),i=r.n(o),c=r(56),s=r(176),u=r.n(s),l=r(175),f=function(t){function e(){return t.apply(this,arguments)||this}a()(e,t);var r=e.prototype;return r.getPostList=function(){return this.props.postEdges.filter(function(t){return"post"===t.node.frontmatter.template}).map(function(t){return{path:t.node.fields.slug,tags:t.node.frontmatter.tags,thumbnail:t.node.frontmatter.thumbnail,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead,categories:t.node.frontmatter.categories}})},r.render=function(){var t=this.props.simple,e=this.getPostList();return i.a.createElement("section",{className:"posts "+(t?"simple":"")},e.map(function(e){var r=Object(l.b)(e.date),n=u()(e.date)>u()().subtract(1,"months");return i.a.createElement(c.Link,{to:e.path,key:e.title},i.a.createElement("div",{className:"each"},i.a.createElement("div",null,i.a.createElement("h2",null,e.title),t?null:i.a.createElement("div",{className:"excerpt"},r)),n&&i.a.createElement("div",{className:"alert"},i.a.createElement("div",{className:"new"},"New!"))))}))},e}(o.Component)},184:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new T(n||[]);return o._invoke=function(t,e,r){var n=l;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?h:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",p="executing",h="completed",m={};function d(){}function g(){}function y(){}var v={};v[o]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(_([])));E&&E!==r&&n.call(E,o)&&(v=E);var x=y.prototype=d.prototype=Object.create(v);function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function b(t){var e;this._invoke=function(r,a){function o(){return new Promise(function(e,o){!function e(r,a,o,i){var c=u(t[r],t,a);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(l).then(function(t){s.value=t,o(s)},function(t){return e("throw",t,o,i)})}i(c.arg)}(r,a,e,o)})}return e=e?e.then(o,o):o()}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=u(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function _(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:k}}function k(){return{value:e,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,y[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,n,a){var o=new b(s(e,r,n,a));return t.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},L(x),x[c]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},198:function(t,e,r){t.exports=r(184)},199:function(t,e){function r(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,a)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var i=t.apply(e,n);function c(t){r(i,a,o,c,s,"next",t)}function s(t){r(i,a,o,c,s,"throw",t)}c(void 0)})}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-1ecde28c0a975c6ccd86.js.map