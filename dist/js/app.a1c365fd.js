(function(t){function n(n){for(var s,o,r=n[0],c=n[1],l=n[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(n);while(p.length)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],s=!0,r=1;r<e.length;r++){var c=e[r];0!==a[c]&&(s=!1)}s&&(i.splice(n--,1),t=o(o.s=e[0]))}return t}var s={},a={app:0},i=[];function o(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)o.d(e,s,function(n){return t[n]}.bind(null,s));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var l=0;l<r.length;l++)n(r[l]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"0d5b":function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return a}));var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("router-view")],1)},a=[]},"199c":function(t,n){},"23be":function(t,n,e){"use strict";var s=e("199c"),a=e.n(s);n["default"]=a.a},"3dfd":function(t,n,e){"use strict";var s=e("0d5b"),a=e("23be"),i=(e("034f"),e("2877")),o=Object(i["a"])(a["default"],s["a"],s["b"],!1,null,null,null);n["default"]=o.exports},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),a=e("3dfd"),i=e("4af9"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"loginframe"},[t._m(0),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phonenumber,expression:"phonenumber"}],staticClass:"phonebox",attrs:{placeholder:"请输入手机号"},domProps:{value:t.phonenumber},on:{input:function(n){n.target.composing||(t.phonenumber=n.target.value)}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.passwords,expression:"passwords"}],staticClass:"passbox",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.passwords},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.login()},input:function(n){n.target.composing||(t.passwords=n.target.value)}}})]),e("button",{attrs:{disabled:!t.canSubmit},on:{click:function(n){return t.login()}}},[t._v("登录")])])},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("span",{staticClass:"noticefont"},[t._v("通过网易云音乐账号密码登录")])])}],c=e("7338"),l=e.n(c),u={name:"itema",props:[],data:function(){return{phonenumber:"",passwords:"",jj:"",hh:"",dizhi:"",id:""}},computed:{canSubmit:function(){return Boolean(this.phonenumber&&this.passwords)}},methods:{login:function(){var t=this;l.a.get("https://lygaries.vercel.app/login/cellphone?phone="+this.phonenumber+"&password="+this.passwords).then((function(n){200==n.data.code?(t.id=n.data.account.id,localStorage.setItem("token",n.data.token),t.$router.push({name:"hellopage",params:{id:t.id}})):400==n.data.code?alert("手机号码不符合规范！"):250==n.data.code?alert("当前登录失败，请稍后再试！"):alert("账号或密码错误！")}),(function(t){alert(t)}))}}},d=u,p=(e("f7e8"),e("2877")),m=Object(p["a"])(d,o,r,!1,null,null,null),f=m.exports,h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wholeframe"},[e("div",{staticClass:"top"},[e("span",{staticClass:"lltfont"},[t._v("林林听")]),e("img",{staticClass:"touxiang",attrs:{src:t.touxiang}}),e("span",{staticClass:"nicknameclass"},[t._v(t._s(t.nickname))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchcontent,expression:"searchcontent"}],staticClass:"searchbox",domProps:{value:t.searchcontent},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.search()},input:function(n){n.target.composing||(t.searchcontent=n.target.value)}}}),e("button",{staticClass:"searchbtn",on:{click:function(n){return t.search()}}},[t._v("搜索")])]),e("div",{staticClass:"body"},[e("div",{staticClass:"list"},[e("ul",{staticClass:"listul"},t._l(t.songlist,(function(n,s){return e("li",{key:s,staticClass:"listli",on:{click:function(n){return t.play(s)}}},[e("span",{staticClass:"songname"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"songername"},[t._v(t._s(n.artists[0].name))])])})),0)]),e("div",{staticClass:"middle"},[e("div",{staticClass:"midlsongname"},[t._v(t._s(t.songname))]),e("div",{staticClass:"artistsname"},[t._v(t._s(t.artistsname))]),e("div",{staticClass:"nono"},[e("img",{staticClass:"imgh",class:{running:t.isoning},attrs:{src:t.artimg}})])]),e("div",{staticClass:"comlist"},[e("span",{staticClass:"hotcomment"},[t._v("热门评论")]),e("hr"),t._l(t.comment,(function(n,s){return e("dl",{key:s,staticClass:"commentdl"},[e("dt",{staticClass:"commentdt"},[e("img",{staticClass:"commentimg",attrs:{src:n.user.avatarUrl,alt:" "}})]),e("dd",{staticClass:"commentdd1"},[t._v(t._s(n.user.nickname))]),e("dd",{staticClass:"commentdd2"},[t._v(t._s(n.content))])])}))],2)]),e("div",{staticClass:"bottom"},[e("div",{staticClass:"btnbg",on:{click:t.nextsong}},[e("div",{staticClass:"nextbtn"})]),e("audio",{staticClass:"audiobox",attrs:{src:t.songurl,controls:"controls",autoplay:"autoplay"},on:{ended:function(n){return t.nextsong()}}})])])},g=[],v=(e("b0c0"),{name:"oWorld",props:["id"],data:function(){return{songlist:[],songerlist:[],idlist:[],searchcontent:"",songurl:"",artistsname:"",songname:"",isplaying:!1,comment:[],artimg:"http://p4.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg",touxiang:"",nickname:"",isoning:!1}},mounted:function(){var t=this;l.a.get("https://lygaries.vercel.app/user/detail?uid="+this.id).then((function(n){t.touxiang=n.data.profile.avatarUrl,t.nickname=n.data.profile.nickname}))},directives:{},filters:{},methods:{search:function(){var t=this;l.a.get("https://lygaries.vercel.app/search?keywords="+this.searchcontent).then((function(n){t.songlist=n.data.result.songs;for(var e=0;e<n.data.result.songs.length;e++)t.idlist[e]=n.data.result.songs[e].id}),(function(t){console.log(t)}))},play:function(t){var n=this;this.isoning=!0,this.indexbig=t,this.songurl="https://music.163.com/song/media/outer/url?id="+this.idlist[t]+".mp3",l.a.get("https://lygaries.vercel.app/song/detail?ids="+this.idlist[t]).then((function(t){n.songname=t.data.songs[0].name,n.artistsname=t.data.songs[0].ar[0].name,n.artimg=t.data.songs[0].al.picUrl})),l.a.get("https://lygaries.vercel.app/comment/music?id="+this.idlist[t]).then((function(t){n.comment=t.data.hotComments}))},nextsong:function(){var t=this;this.isoning=!0,this.indexbig=this.indexbig+1,this.songurl="https://music.163.com/song/media/outer/url?id="+this.idlist[this.indexbig]+".mp3",l.a.get("https://lygaries.vercel.app/song/detail?ids="+this.idlist[this.indexbig]).then((function(n){t.songname=n.data.songs[0].name,t.artistsname=n.data.songs[0].ar[0].name,t.artimg=n.data.songs[0].al.picUrl})),l.a.get("https://lygaries.vercel.app/comment/music?id="+this.idlist[this.indexbig]).then((function(n){t.comment=n.data.hotComments}))}}}),b=v,y=(e("b6cb"),Object(p["a"])(b,h,g,!1,null,"496c46c0",null)),_=y.exports;s["a"].use(i["a"]);var C=[{name:"loginpage",path:"/",component:f},{name:"hellopage",path:"/hellopage/:id",component:_,props:!0}],x=new i["a"]({routes:C});x.beforeEach((function(t,n,e){var s=localStorage.getItem("token");"/"!==t.path&&null==s?e({path:"/"}):e()}));var k=x;s["a"].config.productionTip=!1,s["a"].use(k),new s["a"]({router:k,render:function(t){return t(a["default"])}}).$mount("#app")},"85ec":function(t,n,e){},b6cb:function(t,n,e){"use strict";e("fb4a")},d893:function(t,n,e){},f7e8:function(t,n,e){"use strict";e("d893")},fb4a:function(t,n,e){}});
//# sourceMappingURL=app.a1c365fd.js.map