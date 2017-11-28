webpackJsonp([1],{"3Hv+":function(t,e){},"6K8o":function(t,e){},"9LQc":function(t,e){},"El/1":function(t,e){},NHnr:function(t,e,i){"use strict";function n(t){i("6K8o")}function s(t){i("3Hv+")}function u(t){i("bedp")}function a(t){i("9LQc")}function o(t){i("El/1")}function r(t){i("lB/L")}Object.defineProperty(e,"__esModule",{value:!0});var l=i("7+uW"),c={name:"app"},m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},d=[],p={render:m,staticRenderFns:d},v=p,f=i("VU/8"),V=n,h=f(c,v,!1,V,null,null),w=h.exports,b=i("/ocq"),_=i("fZjL"),T=i.n(_),x={name:"Entry",props:["entry"],data:function(){return{id:this.entry.id,title:this.entry.title,numVotes:this.entry.numVotes}},methods:{upvote:function(){this.numVotes=this.numVotes+1},downvote:function(){this.numVotes=this.numVotes-1}},watch:{numVotes:function(){this.$emit("updateVotes",{id:this.id,numVotes:this.numVotes})}}},y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"entry"},[i("div",{staticClass:"numbering"}),t._v(" "),i("div",{staticClass:"vote"},[i("i",{staticClass:"material-icons arrow-up",on:{click:t.upvote}},[t._v("keyboard_arrow_up")]),t._v(" "),i("p",[t._v(t._s(t.numVotes))]),t._v(" "),i("i",{staticClass:"material-icons arrow-down",on:{click:t.downvote}},[t._v("keyboard_arrow_down")])]),t._v(" "),i("div",{staticClass:"title"},[t._v("\n    "+t._s(t.title)+"\n  ")])])},g=[],q={render:y,staticRenderFns:g},E=q,N=i("VU/8"),C=s,k=N(x,E,!1,C,"data-v-04213afd",null),L=k.exports,$={name:"EntryList",components:{Entry:L},props:["value","currentTab"],data:function(){return{}},computed:{results:function(){var t=this,e=T()(this.value).map(function(e){return t.value[e]});switch(this.currentTab){case"new":return e.slice(-10).reverse();case"popular":return e.concat().sort(this.sortByVotes).slice(0,20);default:return e}}},methods:{updateVotes:function(t){var e=this.value;e[t.id].numVotes=t.numVotes,this.$emit("input",e)},sortByVotes:function(t,e){return t.numVotes>e.numVotes?-1:1}}},R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"entrylist"},[i("transition-group",{attrs:{name:"flip-list",tag:"div"}},t._l(t.results,function(e,n){return i("Entry",{key:e.id,attrs:{entry:e},on:{updateVotes:t.updateVotes}})}))],1)},U=[],A={render:R,staticRenderFns:U},F=A,B=i("VU/8"),P=u,Q=B($,F,!1,P,null,null),H=Q.exports,I={name:"TextBox",props:["value"],methods:{addNewTitle:function(){this.newTitle&&(this.$emit("addNewTitle",{title:this.newTitle,numVotes:this.numVotes}),this.newTitle="",this.numVotes=0)}},data:function(){return{newTitle:"",numVotes:0}}},M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-title"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newTitle,expression:"newTitle",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Add a new title here",id:"new-title",maxlength:"255"},domProps:{value:t.newTitle},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.addNewTitle(e)},input:function(e){e.target.composing||(t.newTitle=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("button",{on:{click:t.addNewTitle}},[t._v("Add")])])},S=[],Z={render:M,staticRenderFns:S},j=Z,G=i("VU/8"),K=a,D=G(I,j,!1,K,null,null),J=D.exports,O={name:"Navbar",data:function(){return{currentTab:"popular"}},methods:{switchTab:function(t,e){t!==this.currentTab&&(document.querySelector(".active").classList.remove("active"),e.target.classList.add("active"),this.currentTab=t,this.$emit("switchTab",t))}}},W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar"},[i("ul",[i("li",{staticClass:"active",on:{click:function(e){t.switchTab("popular",e)}}},[t._v("\n        Popular\n    ")]),t._v(" "),i("li",{on:{click:function(e){t.switchTab("new",e)}}},[t._v("\n        New\n    ")]),t._v(" "),i("li",{on:{click:function(e){t.switchTab("all",e)}}},[t._v("\n        All\n    ")])])])},z=[],X={render:W,staticRenderFns:z},Y=X,tt=i("VU/8"),et=o,it=tt(O,Y,!1,et,null,null),nt=it.exports,st=i("ZTUR"),ut=i.n(st),at={components:{EntryList:H,EntryGenerator:J,Navbar:nt},data:function(){return{entries:{},tab:"popular",id:0}},methods:{addNewTitle:function(t){this.$set(this.entries,this.id,{id:this.id,title:t.title,numVotes:t.numVotes}),this.id+=1},switchTab:function(t){this.tab=t}},mounted:function(){var t=this;ut.a.forEach(function(e){t.addNewTitle(e)})}},ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"top-container"},[i("EntryGenerator",{on:{addNewTitle:t.addNewTitle},model:{value:t.entries,callback:function(e){t.entries=e},expression:"entries"}}),t._v(" "),i("Navbar",{on:{switchTab:t.switchTab}})],1),t._v(" "),i("EntryList",{attrs:{currentTab:t.tab},model:{value:t.entries,callback:function(e){t.entries=e},expression:"entries"}})],1)},rt=[],lt={render:ot,staticRenderFns:rt},ct=lt,mt=i("VU/8"),dt=r,pt=mt(at,ct,!1,dt,null,null),vt=pt.exports;l.a.use(b.a);var ft=new b.a({routes:[{path:"/",name:"Page",component:vt}]});l.a.config.productionTip=!1,new l.a({el:"#app",router:ft,template:"<App/>",components:{App:w}})},ZTUR:function(t,e){t.exports=[{numVotes:-2,title:"Proident veniam culpa excepteur do esse esse aute."},{numVotes:55,title:"Sint labore ex occaecat ea ad sint esse reprehenderit ea excepteur nulla incididunt."},{numVotes:54,title:"Minim deserunt excepteur nulla elit eiusmod proident aute."},{numVotes:5,title:"Eiusmod labore in commodo ex est ullamco incididunt sit incididunt excepteur et."},{numVotes:68,title:"Cillum velit dolore tempor nisi aute."},{numVotes:-1,title:"Adipisicing consectetur tempor amet exercitation eu esse commodo."},{numVotes:50,title:"Quis proident enim id nulla Lorem aute mollit dolore magna."},{numVotes:98,title:"Cillum ipsum non in reprehenderit labore."},{numVotes:37,title:"Labore quis officia nulla mollit incididunt dolor sunt laboris exercitation amet adipisicing magna."},{numVotes:16,title:"Nisi exercitation dolore dolor fugiat dolor veniam aliquip in fugiat tempor id adipisicing deserunt consectetur."},{numVotes:92,title:"Reprehenderit in est sit laboris ea laborum occaecat cillum et deserunt commodo."},{numVotes:-2,title:"Eu ipsum consequat do ad occaecat minim exercitation aliqua mollit non ea ullamco et."},{numVotes:72,title:"Culpa enim fugiat officia tempor sunt pariatur sunt deserunt ad."},{numVotes:76,title:"Ipsum aliquip enim officia velit cillum quis est quis irure deserunt eiusmod do excepteur magna."},{numVotes:27,title:"Id aliquip eiusmod culpa consequat enim in."},{numVotes:92,title:"Qui do nisi cillum ad dolore irure."},{numVotes:-1,title:"Nostrud sit nisi eu duis enim adipisicing ea sunt non mollit."},{numVotes:5,title:"Aliquip excepteur sit voluptate occaecat anim ea dolor sunt."},{numVotes:13,title:"Quis ut sit in adipisicing ea fugiat veniam nostrud est quis incididunt."},{numVotes:81,title:"Nulla anim culpa ipsum quis cupidatat enim exercitation dolore aliquip."},{numVotes:94,title:"Magna qui excepteur consectetur aliqua cupidatat sint."},{numVotes:88,title:"Id ipsum aliqua sint ex ea velit."},{numVotes:84,title:"Sunt et id est aliquip mollit pariatur quis minim eu in adipisicing quis cillum sint."},{numVotes:87,title:"Eu non in minim elit ea proident elit."},{numVotes:62,title:"Amet nisi pariatur minim ad velit consequat elit culpa culpa veniam aliquip."},{numVotes:52,title:"Voluptate qui cillum ullamco Lorem amet."},{numVotes:19,title:"Culpa aliquip aute Lorem veniam anim ut cupidatat."},{numVotes:92,title:"Culpa ut ipsum minim est sunt dolor id."},{numVotes:55,title:"Esse aute fugiat mollit deserunt consectetur velit laboris."},{numVotes:75,title:"Dolore eu consectetur laboris ipsum mollit ipsum."}]},bedp:function(t,e){},"lB/L":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ad14142f5cf00ca43779.js.map