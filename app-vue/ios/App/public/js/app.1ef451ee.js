(function(t){function e(e){for(var o,a,s=e[0],l=e[1],c=e[2],f=0,p=[];f<s.length;f++)a=s[f],r[a]&&p.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"1e15":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("ion-app",[n("ion-split-pane",[n("ion-menu",{attrs:{type:"reveal"}},[n("ion-header",[n("ion-toolbar",[n("ion-title",[t._v("Demo Test")])],1)],1),n("ion-content",[n("ion-list",[n("ion-menu-toggle",{attrs:{"auto-hide":"false"}},[n("ion-item",{on:{click:function(e){return t.goToView("airport")}}},[n("ion-icon",{attrs:{slot:"start",name:"settings"},slot:"start"}),n("ion-label",[t._v("\n                Airport\n              ")])],1),n("ion-item",{on:{click:function(e){return t.goToView("preferences")}}},[n("ion-icon",{attrs:{slot:"start",name:"settings"},slot:"start"}),n("ion-label",[t._v("\n                Preferences\n              ")])],1),n("ion-item",{on:{click:function(e){return t.goToView("aboutus")}}},[n("ion-icon",{attrs:{slot:"start",name:"information"},slot:"start"}),n("ion-label",[t._v("\n                    About\n                  ")])],1)],1)],1)],1)],1),n("ion-router-outlet",{attrs:{main:""}},[n("router-view")],1)],1)],1),n("ion-alert-controller"),n("ion-action-sheet-controller")],1)},i=[],a={name:"app",methods:{goToView:function(t){switch(console.log(t),t){case"aboutus":this.$router.push("/");break;case"airport":this.$router.push("/airport");break;case"preferences":this.$router.push("/preferences");break;default:}}}},s=a,l=(n("034f"),n("2877")),c=Object(l["a"])(s,r,i,!1,null,null,null),u=c.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ion-page"},[n("ion-header",[n("ion-toolbar",[n("ion-buttons",{attrs:{slot:"start"},slot:"start"},[n("ion-menu-button")],1),n("ion-title",[t._v("\n      About HellowWorld\n    ")])],1)],1),n("ion-content",{attrs:{id:"content",padding:""}},[n("ion-button",{on:{click:t.triggerError}},[t._v("Trigger an Error")])],1),n("ion-footer",[n("ion-toolbar",{attrs:{color:"dark"}},[n("ion-title",[t._v("Footer")])],1)],1)],1)},d=[],v=n("0a0d"),b=n.n(v),m={name:"aboutus",methods:{triggerError:function(){throw new Error("This is error for testing sentry"+b()())}}},h=m,g=(n("791f"),Object(l["a"])(h,p,d,!1,null,"654a1d4e",null)),_=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ion-page"},[n("ion-header",[n("ion-toolbar",{attrs:{color:"success"}},[n("ion-buttons",{attrs:{slot:"start"},slot:"start"},[n("ion-menu-button")],1),n("ion-title",{attrs:{center:""}},[t._v("\n      Airport\n    ")])],1)],1),n("ion-content",{attrs:{id:"content",padding:""}},[t._v("\n    Hello Airportss\n")]),n("ion-footer",[n("ion-toolbar",{attrs:{color:"dark"}},[n("ion-title",[t._v("Footer")])],1)],1)],1)},w=[],T=(n("a1f1"),{}),k=Object(l["a"])(T,y,w,!1,null,"76bb87b6",null),O=k.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ion-page"},[n("ion-header",[n("ion-toolbar",{attrs:{color:"success"}},[n("ion-buttons",{attrs:{slot:"start"},slot:"start"},[n("ion-menu-button")],1),n("ion-title",[t._v("\n      Preferences\n    ")])],1)],1),n("ion-content",{attrs:{id:"content",padding:""}},[n("ion-list",[n("ion-radio-group",{attrs:{id:"timezonePref"}},[n("ion-item",[n("ion-label",[t._v("Device default")]),n("ion-radio",{attrs:{slot:"end",color:"primary",value:"L"},slot:"end"})],1),n("ion-item",[n("ion-label",[t._v("Device 234")]),n("ion-radio",{attrs:{slot:"end",color:"primary",value:"L"},slot:"end"})],1),n("ion-item",[n("ion-label",[t._v("Device 3423")]),n("ion-radio",{attrs:{slot:"end",color:"primary",value:"L"},slot:"end"})],1),n("ion-item",[n("ion-label",[t._v("Device 564")]),n("ion-radio",{attrs:{slot:"end",color:"primary",value:"L"},slot:"end"})],1),n("ion-item",[n("ion-label",[t._v("Device dsf")]),n("ion-radio",{attrs:{slot:"end",color:"primary",value:"L"},slot:"end"})],1),n("ion-item",[n("ion-label",[t._v("Device sdfsdfsf")]),n("ion-radio",{attrs:{slot:"end",color:"primary",value:"L"},slot:"end"})],1)],1)],1)],1),n("ion-footer",[n("ion-toolbar",{attrs:{color:"dark"}},[n("ion-title",[t._v("Footer")])],1)],1)],1)},E=[],x=(n("fcf0"),{}),P=Object(l["a"])(x,j,E,!1,null,"422f6b36",null),S=P.exports;o["a"].use(f["a"]);var D=new f["a"]({routes:[{path:"/",name:"aboutus",component:_},{path:"/airport",name:"airport",component:O},{path:"/preferences",name:"preferences",component:S}]}),V=n("69b4");o["a"].config.productionTip=!1,o["a"].config.ignoredElements=[/^ion-/],new o["a"]({router:D,render:function(t){return t(u)}}).$mount("#app"),V["init"]({release:"WSVue-123",dsn:"https://f5f708eca78141d1b09aec3c5eade8f1@sentry.io/181356",transport:V["Transports"].FetchTransport,integrations:[new V["Integrations"].Vue({Vue:o["a"]})],environment:"DEV-SENTRY-TEST",beforeSend:function(t){return console.log(t),t}})},"64a9":function(t,e,n){},"791f":function(t,e,n){"use strict";var o=n("1e15"),r=n.n(o);r.a},a1f1:function(t,e,n){"use strict";var o=n("d93e"),r=n.n(o);r.a},d93e:function(t,e,n){},ed74:function(t,e,n){},fcf0:function(t,e,n){"use strict";var o=n("ed74"),r=n.n(o);r.a}});
//# sourceMappingURL=app.1ef451ee.js.map