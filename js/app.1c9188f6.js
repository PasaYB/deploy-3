(function(t){function a(a){for(var s,i,c=a[0],o=a[1],l=a[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,c=1;c<e.length;c++){var o=e[c];0!==n[o]&&(s=!1)}s&&(r.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},n={app:0},r=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/deploy-3/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var u=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0a92":function(t,a,e){t.exports=e.p+"img/php3.2e2ca3b4.png"},"1ccd":function(t,a,e){"use strict";e("3c0a")},"1f66":function(t,a,e){t.exports=e.p+"img/3.107b0760.png"},"1f70":function(t,a,e){"use strict";e("6981")},"277a":function(t,a,e){t.exports=e.p+"img/borderWaves.eb7014a0.svg"},"2f2a":function(t,a,e){},"2fd6":function(t,a,e){"use strict";e("446b")},"31c1":function(t,a,e){t.exports=e.p+"img/bg10.81bfafa0.jpg"},3279:function(t,a,e){"use strict";e("d219")},"3c0a":function(t,a,e){},"3c38":function(t,a,e){"use strict";e("2f2a")},"3f11":function(t,a,e){t.exports=e.p+"img/work.0908215f.png"},4082:function(t,a,e){"use strict";var s=e("fa7d"),n=e("522c"),r=(e("6a31"),e("2fd6"),e("2877")),i=Object(r["a"])(n["default"],s["a"],s["b"],!1,null,"e5f56f1e",null);a["default"]=i.exports},"446b":function(t,a,e){},"4cf7":function(t,a,e){},"522c":function(t,a,e){"use strict";var s=e("e1f2"),n=e.n(s);a["default"]=n.a},"56d7":function(t,a,e){"use strict";e.r(a);var s=e("2b0e"),n=e("7496"),r=e("8336"),i=e("132d"),c=e("f6c4"),o=e("0789"),l=e("f977"),u=function(){var t=this,a=t._self._c;return a(n["a"],[a("appheader",{attrs:{color:t.color,flat:t.flat}}),a(c["a"],{staticClass:"pt-0"},[a("appprofile"),a("appproject"),a("appgit"),a("appplans"),a("appcontact")],1),a(o["c"],[a(r["a"],{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{def:l["b"],name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"secondary"},on:{click:t.toTop}},[a(i["a"],[t._v("mdi-arrow-up")])],1)],1),a("appfooter")],1)},f=[],d=e("40dc"),p=e("5bc1"),m=e("8212"),g=e("adda"),b=e("8860"),h=e("da13"),v=e("5d23"),x=e("34c3"),y=e("f774"),_=e("2fa4"),C=e("2a7f"),w=function(){var t=this,a=t._self._c;return a("div",[a(y["a"],{attrs:{app:"",temporary:"",dark:"",src:e("d4b8")},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[a(b["a"],{attrs:{dense:""}},t._l(t.items,(function([e,s,n],r){return a(h["a"],{key:r,attrs:{link:""},on:{click:function(a){return t.$vuetify.goTo(n)}}},[a(x["a"],{staticClass:"justify-center"},[a(i["a"],[t._v(t._s(e))])],1),a(v["a"],[a(v["b"],{staticClass:"subtitile-1"},[t._v(t._s(s))])],1)],1)})),1)],1),a(d["a"],{staticClass:"px-15",class:{expand:t.flat},attrs:{app:"",color:t.color,flat:t.flat,dark:""}},[a(C["a"],[a(m["a"],[a(g["a"],{attrs:{alt:"Pasa",src:e("8d9a")}})],1)],1),a(_["a"]),t.isXs?a(p["a"],{staticClass:"mr-4",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}):a("div",[a(r["a"],{attrs:{text:""},on:{click:function(a){return t.$vuetify.goTo("#home")}}},[a("span",{staticClass:"mr-2"},[t._v("Home")])]),a(r["a"],{attrs:{text:""},on:{click:function(a){return t.$vuetify.goTo("#profile")}}},[a("span",{staticClass:"mr-2"},[t._v("Profile")])]),a(r["a"],{attrs:{text:""},on:{click:function(a){return t.$vuetify.goTo("#contact")}}},[a("span",{staticClass:"mr-2"},[t._v("Contact")])])],1)],1)],1)},k=[],j={data:()=>({drawer:null,isXs:!1,items:[["mdi mdi-home","Home","#home"],["mdi mdi-account","Profile","#profile"],["mdi mdi-phone","Contact","#contact"]]}),props:{color:String,flat:Boolean},methods:{onResize(){this.isXs=window.innerWidth<850}},watch:{isXs(t){t||this.drawer&&(this.drawer=!1)}},mounted(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})}},P=j,O=(e("7556"),e("2877")),S=Object(O["a"])(P,w,k,!1,null,"4e8bbbc8",null),T=S.exports,M=e("b0af"),$=e("99d9"),L=e("553a"),z=function(){var t=this,a=t._self._c;return a(L["a"],{attrs:{dark:"",padless:""}},[a(M["a"],{staticClass:"secondary white--text text-center",attrs:{tile:""}},[a($["a"],t._l(t.icons,(function(e,s){return a(r["a"],{key:s,staticClass:"mx-4 white--text",attrs:{href:e.link,target:"_blank",icon:""}},[a(i["a"],{attrs:{size:"24px"}},[t._v(t._s(e.text))])],1)})),1)],1)],1)},W=[],A={data:()=>({icons:[{text:"mdi-github",link:"https://github.com/PasaYB/"},{text:"mdi-instagram",link:"https://instagram.com/pszaaaa/"}]})},B=A,Y=(e("1ccd"),Object(O["a"])(B,z,W,!1,null,"2c087d24",null)),D=Y.exports,U=e("62ad"),H=e("a523"),R=e("ce87"),X=e("8b9c"),E=e("0fd9"),N=function(){var t=this,a=t._self._c;return a("section",{attrs:{id:"home"}},[a(X["a"],{attrs:{dark:"",src:e("31c1"),height:"750"}},[a(E["a"],{attrs:{align:"center",justify:"center"}},[a(U["a"],{attrs:{cols:"10"}},[a(E["a"],{attrs:{align:"center",justify:"center"}},[a(U["a"],{attrs:{cols:"12",md:"6",xl:"8"}},[a("h1",{staticClass:"bebas-neue-regular mb-2"},[t._v("Introduction")]),a("h1",{staticClass:"poppins-thin"},[t._v(" My name is Lanang Gading Pasa, Im a student from Vocation High School 2 Depok Sleman Yogyakarta")]),a(r["a"],{staticClass:"poppins-thin mt-7",attrs:{rounded:"",outlined:"",large:"",dark:""},on:{click:function(a){return t.$vuetify.goTo("#profile")}}},[t._v(" Press to see more Profile "),a(i["a"],{staticClass:"ml-2"},[t._v("mdi-arrow-down")])],1)],1),a(U["a"],{staticClass:"hidden-sm-and-down",attrs:{cols:"12",md:"6",xl:"4"}})],1)],1)],1),a("div",{staticClass:"svg-border-waves text-white"},[a(g["a"],{attrs:{src:e("277a")}})],1)],1),a(H["a"],{staticClass:"mt-2",attrs:{fluid:"",id:"profile"}},[a(E["a"],{attrs:{align:"center",justify:"center"}},[a(U["a"],{attrs:{cols:"10"}},[a(E["a"],{attrs:{align:"center",justify:"space-around"}},[a(U["a"],{staticClass:"text-center",attrs:{cols:"12"}},[a("h1",{staticClass:"bebas-neue-regular mb-6"},[t._v("My Skills")])]),t._l(t.profile,(function(e,s){return a(U["a"],{key:s,staticClass:"text-center",attrs:{cols:"12",sm:"4"}},[a(R["a"],{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return[a(M["a"],{staticClass:"card",class:{up:s},attrs:{shaped:"",rounded:"",elevation:s?10:4}},[a(g["a"],{staticClass:"d-block ml-auto mr-auto",class:{"zoom-efect":s},attrs:{src:e.img,"max-width":"100px"}}),a("h1",{staticClass:"bebas-neue-regular2"},[t._v(t._s(e.title))]),a("h4",{staticClass:"font-weight-regular subtitle-1"},[t._v(" "+t._s(e.text)+" ")])],1)]}}],null,!0)})],1)}))],2)],1)],1)],1)],1)},F=[],G={data(){return{profile:[{img:e("775a"),title:"Web Development"},{img:e("8e30"),title:"Database Management"},{img:e("1f66"),title:"Critical Thinking"}]}}},I=G,J=(e("1f70"),e("a5ee"),Object(O["a"])(I,N,F,!1,null,null,null)),Q=J.exports,V=function(){var t=this,a=t._self._c;return a("section",{attrs:{id:"about"}},[a(H["a"],{attrs:{fluid:""}},[a(E["a"],{attrs:{align:"center",justify:"center"}},[a(U["a"],{attrs:{cols:"10"}},[a(E["a"],{attrs:{align:"center",justify:"center"}},[a(U["a"],{attrs:{cols:"12",md:"7"}},[a("h1",{staticClass:"bebas-neue-regular mb-5 mt-10"},[t._v("My Project")]),a(E["a"],[a(U["a"],{staticClass:"d-flex align-center",attrs:{cols:"12"}},[a(g["a"],{staticClass:"mr-6",attrs:{src:e("9121"),"max-width":"60px"}}),a("p",{staticClass:"poppins-thin"},[t._v(" Laravel Project, create a Local Web starting from creating a Login Page, Migration: DB Query, DB Relationship, MySQL Store Procedure, and the final result is an LTE Admin Web Page ")])],1),a(U["a"],{staticClass:"d-flex align-center",attrs:{cols:"12"}},[a(g["a"],{staticClass:"mr-6",attrs:{src:e("0a92"),"max-width":"60px"}}),a("p",{staticClass:"poppins-thin"},[t._v(" Local Web Library, create a Local Web Library using the PHP programming language ")])],1)],1)],1),a(U["a"],{staticClass:"dd-none d-md-flex align-self-end",attrs:{cols:"12",md:"5"}})],1)],1)],1)],1)],1)},q=[],K=(e("3279"),{}),Z=Object(O["a"])(K,V,q,!1,null,"ed1f3586",null),tt=Z.exports,at=function(){var t=this,a=t._self._c;return a("section",{attrs:{id:"gif"}},[a(H["a"],{attrs:{fluid:""}},[a(E["a"],{attrs:{align:"center",justify:"center"}},[a(U["a"],{attrs:{cols:"10"}},[a(E["a"],{attrs:{align:"center",justify:"center"}},[a(U["a"],{staticClass:"white--text text-right mt-15",attrs:{cols:"12",sm:"9"}},[a(r["a"],{staticClass:"mt-9",attrs:{rounded:"",outlined:"",href:"https://github.com/PasaYB",target:"_blank",large:"",color:"white"}},[a(i["a"],{staticClass:"mr-2"},[t._v(" mdi-github ")]),t._v(" More on github ")],1)],1)],1)],1)],1)],1)],1)},et=[],st=(e("c995c"),{}),nt=Object(O["a"])(st,at,et,!1,null,"772c7c77",null),rt=nt.exports,it=e("4082"),ct=e("2db4"),ot=function(){var t=this,a=t._self._c;return a("section",{staticClass:"pb-11",attrs:{id:"contact"}},[a(H["a"],{attrs:{fluid:""}},[a(E["a"],{attrs:{align:"center",justify:"center"}},[a(U["a"],{attrs:{cols:"10"}},[a(E["a"],{attrs:{justify:"center"}},[a(U["a"],{attrs:{cols:"10",sm:""}},[a("h1",{staticClass:"bebas-neue-regular"},[t._v("Contact Me")]),a("h3",{staticClass:"font-weight-light mt-6"},[a("span",{staticClass:"mdi mdi-phone"}),t._v(" Phone: +62-821-1498-0303 ")]),a("h3",{staticClass:"font-weight-light mt-4"},[a("span",{staticClass:"mdi mdi-email-outline"}),t._v(" Email: lananggading.pasa@gmail.com ")]),a("h3",{staticClass:"font-weight-light mt-4"},[a("span",{staticClass:"mdi mdi-map-marker"}),t._v(" Address: Grogolan, Umbulmartani, Ngemplak, Sleman, Yogyakarta ")])])],1)],1)],1)],1),a(ct["a"],{attrs:{timeout:"3000",right:"",top:"",color:t.snackbar.color},scopedSlots:t._u([{key:"action",fn:function({attrs:e}){return[a(r["a"],t._b({attrs:{text:""},on:{click:function(a){t.snackbar.enabled=!1}}},"v-btn",e,!1),[t._v(" Fechar ")])]}}]),model:{value:t.snackbar.enabled,callback:function(a){t.$set(t.snackbar,"enabled",a)},expression:"snackbar.enabled"}},[t._v(" "+t._s(t.snackbar.text)+" ")])],1)},lt=[],ut={data:()=>({valid:!0,lazy:!1,snackbar:{enabled:!1,text:"",color:""}})},ft=ut,dt=(e("3c38"),Object(O["a"])(ft,ot,lt,!1,null,"3b849764",null)),pt=dt.exports,mt={name:"App",components:{appheader:T,appfooter:D,appprofile:Q,appproject:tt,appgit:rt,appplans:it["default"],appcontact:pt},data:()=>({fab:null,color:"",flat:null}),created(){const t=window.pageYOffset||0;t<=60&&(this.color="transparent",this.flat=!0)},watch:{fab(t){t?(this.color="secondary",this.flat=!1):(this.color="transparent",this.flat=!0)}},methods:{onScroll(t){if("undefined"===typeof window)return;const a=window.pageYOffset||t.target.scrollTop||0;this.fab=a>60},toTop(){this.$vuetify.goTo(0)}}},gt=mt,bt=(e("83fa"),Object(O["a"])(gt,u,f,!1,null,"1a347856",null)),ht=bt.exports,vt=e("f309");s["a"].use(vt["a"]);var xt=new vt["a"]({theme:{themes:{light:{primary:"#000000",secondary:"#000000"}}}});s["a"].config.productionTip=!1,new s["a"]({vuetify:xt,render:t=>t(ht)}).$mount("#app")},"644a":function(t,a,e){t.exports=e.p+"img/poce.1bb495f2.png"},6981:function(t,a,e){},"6a31":function(t,a,e){"use strict";e("9e23")},7556:function(t,a,e){"use strict";e("8959")},"775a":function(t,a,e){t.exports=e.p+"img/1.d61df893.png"},"83fa":function(t,a,e){"use strict";e("f0f2")},8959:function(t,a,e){},"8d9a":function(t,a,e){t.exports=e.p+"img/poto.772779a7.jpg"},"8e30":function(t,a,e){t.exports=e.p+"img/2.3e1c7cf3.png"},9121:function(t,a,e){t.exports=e.p+"img/lrvl.c839e1ed.png"},"96ec":function(t,a,e){},"9e23":function(t,a,e){},a5ee:function(t,a,e){"use strict";e("96ec")},aa19:function(t,a,e){t.exports=e.p+"img/buss.955aedce.png"},c995c:function(t,a,e){"use strict";e("4cf7")},d219:function(t,a,e){},d4b8:function(t,a,e){t.exports=e.p+"img/bg7.0c2cdff2.jpg"},e1f2:function(t,a){},f0f2:function(t,a,e){},fa7d:function(t,a,e){"use strict";e.d(a,"a",(function(){return u})),e.d(a,"b",(function(){return f}));var s=e("b0af"),n=e("99d9"),r=e("62ad"),i=e("a523"),c=e("ce7e"),o=e("adda"),l=e("0fd9"),u=function(){var t=this,a=t._self._c;t._self._setupProxy;return a("section",{staticClass:"pb-8",attrs:{id:"plans"}},[a(i["a"],{attrs:{fluid:""}},[a(l["a"],{attrs:{align:"center",justify:"center"}},[a(r["a"],{attrs:{cols:"10"}},[a(s["a"],{staticStyle:{width:"100%"}},[a("h1",{staticClass:"text-center pt-6 bebas-neue-regular mt-9"},[t._v("My Future Plans")]),a(c["a"],{staticClass:"my-6"}),a(l["a"],{staticClass:"text-center"},[a(r["a"],{staticClass:"col-12 col-sm-6 col-md-4"},[a("div",{staticClass:"flex-center"},[a(n["a"],[a("div",{staticClass:"flex-center"},[a("div",{staticClass:"border1"},[a(o["a"],{attrs:{src:e("3f11")}})],1)]),a("div",{staticClass:"lexend my-2"},[t._v("Work at my dream company")])]),this.$vuetify.breakpoint.mdAndUp?a(c["a"],{staticStyle:{"margin-right":"-23px"},attrs:{vertical:""}}):t._e()],1),this.$vuetify.breakpoint.smAndUp?t._e():a(c["a"],{staticClass:"mx-4"})],1),a(r["a"],{staticClass:"col-12 col-sm-6 col-md-4"},[a("div",{staticClass:"flex-center"},[a(n["a"],[a("div",{staticClass:"flex-center"},[a("div",{staticClass:"border1"},[a(o["a"],{attrs:{src:e("aa19")}})],1)]),a("div",{staticClass:"lexend my-2"},[t._v("Build my own business")])]),this.$vuetify.breakpoint.mdAndUp?a(c["a"],{staticStyle:{"margin-right":"-23px"},attrs:{vertical:""}}):t._e()],1),this.$vuetify.breakpoint.smAndUp?t._e():a(c["a"],{staticClass:"mx-4"})],1),a(r["a"],{staticClass:"col-12 col-md-4"},[this.$vuetify.breakpoint.smOnly?a(c["a"],{staticClass:"mx-4"}):t._e(),a("div",{staticClass:"flex-center"},[a(n["a"],[a("div",{staticClass:"flex-center"},[a(o["a"],{attrs:{src:e("644a")}})],1),a("div",{staticClass:"lexend my-2"},[t._v("Buy Porsche")])])],1)],1)],1)],1)],1)],1)],1)],1)},f=[]}});
//# sourceMappingURL=app.1c9188f6.js.map