(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],u=0,v=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&v.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(v.length)v.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;r.push([1,"chunk-vendors"]),a()})({0:function(e,t){},"0bb1":function(e,t,a){},1:function(e,t,a){e.exports=a("56d7")},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"header",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-toolbar-title",[e._v("RusCoin Стейкинг")])],1),a("v-spacer"),""!==e.rusCoinsBalance?a("v-text-field",{staticClass:"balanceFiled mr-1",style:"max-width:"+(75+10*e.rusCoinsBalance.toString().length)+"px",attrs:{filled:"",rounded:"",dense:"",readonly:"",value:e.rusCoinsBalance,"hide-details":"true","prepend-inner-icon":"mdi-cog","background-color":"green"}},[a("v-avatar",{staticClass:"ml-n2 mr-1",attrs:{slot:"prepend-inner",size:"24"},slot:"prepend-inner"},[a("v-img",{attrs:{src:"/img/coins/RusCoin.svg"}})],1)],1):e._e(),""!==e.wavesBalance?a("v-text-field",{staticClass:"balanceFiled mt2",style:"max-width:"+(65+10*e.wavesBalance.toString().length)+"px",attrs:{filled:"",rounded:"",dense:"",readonly:"",value:e.wavesBalance,"hide-details":"true","prepend-inner-icon":"mdi-cog","background-color":"green"}},[a("v-avatar",{staticClass:"ml-n2 mr-1",attrs:{slot:"prepend-inner",size:"24"},slot:"prepend-inner"},[a("v-img",{attrs:{src:"/img/coins/waves.svg"}})],1)],1):e._e(),"table"===e.$router.currentRoute?a("v-btn",{staticClass:"ml-3",attrs:{dark:"",fab:"",small:"",color:""!==e.wavesBalance?"green":"grey"},on:{click:[function(t){return t.ctrlKey?e.$store.dispatch("clearCredentials"):null},function(t){e.showSettings=!e.showSettings}]}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-cog")])],1):e._e()],1),a("v-main",[a("router-view")],1),a("v-dialog",{attrs:{maxWidth:"420"},model:{value:e.showSettings,callback:function(t){e.showSettings=t},expression:"showSettings"}},[a("Settings")],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-text",{staticClass:"pt-4"},[a("v-text-field",{staticClass:"mt-2",attrs:{label:"Private key","hide-details":"auto",autofocus:!0,outlined:!0},model:{value:e.addressModel,callback:function(t){e.addressModel=t},expression:"addressModel"}}),a("v-text-field",{staticClass:"mt-2",attrs:{label:"Public key","hide-details":"auto",outlined:!0},model:{value:e.publicKeyModel,callback:function(t){e.publicKeyModel=t},expression:"publicKeyModel"}}),a("v-sheet",{staticClass:"d-flex justify-end"},[a("v-btn",{staticClass:"mt-2",attrs:{dark:"",color:"green",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.save()}},scopedSlots:e._u([{key:"loader",fn:function(){return[e._v(" ... ")]},proxy:!0}])},[e._v(" Save ")])],1)],1)],1)},i=[],c={name:"Settings",data:function(){return{loading:!1,addressModel:"",publicKeyModel:""}},computed:{address:function(){return this.$store.state.address},accessKey:function(){return this.$store.state.accessKey}},methods:{save:function(){this.$store.commit("setAddress",this.addressModel),this.$store.commit("setPublicKey",this.publicKeyModel),this.checkKeys()},checkKeys:function(){this.addressModel&&this.publicKeyModel&&(this.$store.dispatch("getWavesBalance"),this.$store.dispatch("getRusCoinsBalance"))}},mounted:function(){this.addressModel=this.address,this.publicKeyModel=this.accessKey}},l=c,d=a("2877"),u=a("6544"),v=a.n(u),f=a("8336"),p=a("b0af"),m=a("99d9"),g=a("8dd9"),b=a("8654"),h=Object(d["a"])(l,o,i,!1,null,"7a7b82c3",null),x=h.exports;v()(h,{VBtn:f["a"],VCard:p["a"],VCardText:m["b"],VSheet:g["a"],VTextField:b["a"]});var C={name:"App",components:{Settings:x},data:function(){return{showSettings:!1}},computed:{wavesBalance:function(){return this.$store.state.wavesBalance},rusCoinsBalance:function(){return this.$store.state.rusCoinsBalance}},mounted:function(){}},w=C,y=(a("5c0b"),a("7496")),k=a("40dc"),_=a("8212"),R=a("169a"),B=a("132d"),S=a("adda"),V=a("f6c4"),$=a("2fa4"),T=a("2a7f"),P=Object(d["a"])(w,s,r,!1,null,null,null),K=P.exports;v()(P,{VApp:y["a"],VAppBar:k["a"],VAvatar:_["a"],VBtn:f["a"],VDialog:R["a"],VIcon:B["a"],VImg:S["a"],VMain:V["a"],VSpacer:$["a"],VTextField:b["a"],VToolbarTitle:T["a"]});var A=a("9483");Object(A["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var O=a("8c4f"),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mx-auto my-auto pt-4 fill-height"},[a("v-data-table",{staticClass:"elevation-0",attrs:{headers:e.headers,items:e.stackers,"sort-by":"balance"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("RusCoin shareholders")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,s=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",s,!1),n),[e._v(" Add stacker ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Dessert name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}])}),a("v-sheet",{staticClass:"d-flex justify-end"},[a("v-btn",{staticClass:"mt-2 mr-4",attrs:{dark:"",color:"red darken-4",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.run()}},scopedSlots:e._u([{key:"loader",fn:function(){return[e._v(" ... ")]},proxy:!0}])},[e._v(" Accrue for July 15 ")])],1)],1)},M=[],I=a("1da1"),D=(a("96cf"),a("b680"),a("a463")),F={name:"Table",components:{},data:function(){return{loading:!1,pagination:{},editedItem:{},headers:[{text:"Address",align:"start",sortable:!1,value:"short"},{text:"Balance",value:"balance"},{text:"Percent",value:"percent"},{text:"Next benefit",value:"benefit"},{text:"Staking till",value:"endDate"},{text:"Final cost",value:"final"},{text:"Final $ cost",value:"finalDollar"},{text:"Actions",value:"actions",sortable:!1}],stackers:[{address:"3PNCTdLy1X86E4WFQa8diMEcWsy1eokBcBg",short:"3PNCTd****okBcBg",balance:99,percent:2,benefit:.297,endDate:"September 16",final:(99*1.003).toFixed(3),finalDollar:"$"+(99*1.003*50).toFixed(2)}]}},computed:{address:function(){return this.$store.state.address},accessKey:function(){return this.$store.state.accessKey}},methods:{run:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.loading){t.next=2;break}return t.abrupt("return");case 2:try{e.loading=!0,a=new D["wavesexchange"]({apiKey:e.accessKey,secret:e.address}),console.log(a),e.loading=!1}catch(n){console.log(n)}case 3:case"end":return t.stop()}}),t)})))()}}},E=F,W=a("62ad"),N=a("a523"),U=a("8fea"),X=a("ce7e"),z=a("0fd9"),J=a("71d9"),H=Object(d["a"])(E,j,M,!1,null,null,null),Q=H.exports;v()(H,{VBtn:f["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:W["a"],VContainer:N["a"],VDataTable:U["a"],VDialog:R["a"],VDivider:X["a"],VIcon:B["a"],VRow:z["a"],VSheet:g["a"],VSpacer:$["a"],VTextField:b["a"],VToolbar:J["a"],VToolbarTitle:T["a"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex flex-column my-10",staticStyle:{width:"100vw"}},[a("v-card",{staticClass:"infoCard"},[a("v-card-title",[e._v("Инвестируй RusCoin уже сейчас")]),a("v-card-text",[a("p",[e._v("Тут привлекательная информация про Стейкинг RusCoin")]),a("p",[e._v("Пример:")]),a("ol",[a("li",[e._v("Клиент купил 1 000 RusCoin на сумму в $1000 по цене $1/RSC")]),a("li",[e._v("Клиент разместил 1 000 RusCoin в стейкинг на 100 дней по ставке 4%")]),a("li",[e._v("Клиент автоматически на свой waves-кошелек 1-го и 15-го числа каждого месяца получает 6 RSC")]),a("li",[e._v("Цена RusCoin/USDT постоянно растет, поэтому оценка 6 RSC будет от $6 до $300")]),a("li",[e._v("Клиент может продать свои 6 RSC через биржу waves.exchange или вне биржи и вывести деньги(!)")])])]),a("div",{staticClass:"infoButtons"},[a("v-btn",{staticClass:"infoButton",attrs:{dark:"","x-large":"",color:"blue darken-3"},on:{click:e.loginWaves}},[a("img",{attrs:{src:"/img/coins/logo-exchange.svg",alt:"waves exchange"}})]),a("v-btn",{staticClass:"infoButton",attrs:{disabled:"",dark:"","x-large":"",color:"blue darken-3"}},[a("img",{attrs:{width:"160pt",src:"/img/coins/relictum.svg",alt:"relictum exhange"}})]),a("v-btn",{staticClass:"infoButton",staticStyle:{"text-transform":"none",color:"white !important"},attrs:{disabled:"",dark:"","x-large":"",color:"blue darken-3"}},[a("img",{staticClass:"mr-2 mb-1",attrs:{width:"30pt",src:"/img/coins/uniswap.svg",alt:"uniswap exhange"}}),e._v(" Uniswap ")])],1),a("v-card-text",{staticClass:"subtitle-2 font-weight-thin"},[e._v(" *Стейкинг для Relictum Pro и Uniswap будет доступен познее ")])],1),a("v-card",{staticClass:"infoCard"},[a("v-card-title",[e._v("Краткая справка про RusCoin")]),a("v-card-text",[a("ol",[a("li",[e._v("Монета торгуется на waves.exchange более 4 лет с 30.06.2017 года")]),a("li",[e._v("Выпущено 21 000 000 монет номиналом $50/RusCoin на 3 блочейнах (waves,erc-20,Relictum Pro)")]),a("li",[e._v("RusCoin устойчиво торгуется в паре с BTC, ETH,Waves, USDT")]),a("li",[e._v("На 12 июля 2021 года без вмешательства учредителей цена опустилась до $0,88/RusCoin, но по такой нихкой цене можно купить не более 2000 монет RusCoin")]),a("li",[e._v("В середине июня 2021 года выпустили 5 млн RusCoin номиналом $50/RusCoin на блокчейне 5-го поколения Relictum Pro")]),a("li",[e._v("Биржевые торги RusCoin на платформе Relictum Pro стартуют 21 июля 2021 года")]),a("li",[e._v("После открытия биржевых торгов на Relictum Pro будет создан мост (взаимный эквивалентный обмен RusCoin) между блокчейнами waves и Relictum Pro.")]),a("li",[e._v("До начала биржевых торгов на Relictum Pro, можно купить на бирже waves.exchange по низкой цене RusCoin получить 20% бонус (+10% в монетах на кошелек waves и +10% в монетах на кошелек Relictum Pro ) от объема купленных монет")]),a("li",[e._v("Для получения 20% биржевого кэшбека (бонусов) нужно выслать транзакцию на в https://t.me/RusCoin_Bykov")]),a("li",[e._v("Средства от продажи токенов RusCoin размещаются в скупку акций Мосбиржи (тикер: MOEX) и покупку долей в перспективных стартапах")])])])],1),a("div",{staticClass:"subtitle-2 font-weight-thin mt-2 align-self-center"},[e._v("© 2021 RusCoin Emission Center 2017-2021")])],1)},q=[],L=a("3835"),G=a("59d7"),Z=a("c3c4"),ee={name:"Transfer",components:{},data:function(){return{loading:!1,signer:null}},computed:{rusCoinsBalance:function(){return this.$store.state.rusCoinsBalance},rusCoinAddress:function(){return this.$store.state.rusCoinAddress}},methods:{loginWaves:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var a,n,s,r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.signer=new G["Signer"],e.signer.setProvider(new Z["a"]),t.next=4,e.signer.login();case 4:return a=t.sent,n=a.address,s=a.publicKey,e.$store.commit("setAddress",n),e.$store.commit("setPublicKey",s),t.next=11,e.$store.dispatch("getRusCoinsBalance");case 11:return t.next=13,e.$store.dispatch("getWavesBalance");case 13:return console.log(e.signer,e.rusCoinsBalance),t.next=16,e.signer.transfer({recipient:"3PApebH2ATkYEQEFiyYgM4XUndXg3VXWBJy",amount:1e5*e.rusCoinsBalance,assetId:e.rusCoinAddress}).broadcast();case 16:r=t.sent,o=Object(L["a"])(r,1),i=o[0],console.log(i),e.signer.waitTxConfirm(i,1).then(function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(1111,a),t.next=3,e.$store.dispatch("getWavesBalance");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 21:case"end":return t.stop()}}),t)})))()}},mounted:function(){return Object(I["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},te=ee,ae=(a("a989"),Object(d["a"])(te,Y,q,!1,null,null,null)),ne=ae.exports;v()(ae,{VBtn:f["a"],VCard:p["a"],VCardText:m["b"],VCardTitle:m["c"]}),n["a"].use(O["a"]);var se=[{path:"/table",name:"Table",component:Q},{path:"/",name:"Transfer",component:ne}],re=new O["a"]({routes:se}),oe=re,ie=(a("99af"),a("2f62")),ce=a("bfa9"),le=a("bc3a"),de=a.n(le);n["a"].use(ie["a"]);var ue=new ce["a"]({key:"rus-coin-client",namespaced:!0,storage:window.localStorage,reducer:function(e){return{}}}),ve=new ie["a"].Store({state:{rusCoinAddress:"EMdiF8uaySswfCdMxc114rSfzUsAKCtK9d8eSx6ruKP4",address:"",accessKey:"",wavesBalance:"",rusCoinsBalance:""},mutations:{setAddress:function(e,t){e.address=t},setPublicKey:function(e,t){e.accessKey=t},setExpiration:function(e,t){e.expiration=t},setWavesBalance:function(e,t){e.wavesBalance=null!==t&&void 0!==t?t:""},setRusCoinsBalance:function(e,t){e.rusCoinsBalance=null!==t&&void 0!==t?t:""}},actions:{clearCredentials:function(e){var t=e.state;t.address="",t.rusCoinAddress="",t.rusCoinsBalance="",t.wavesBalance=""},getWavesBalance:function(e){return Object(I["a"])(regeneratorRuntime.mark((function t(){var a,n,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.state,n=e.commit,t.next=3,de.a.get("https://nodes.waves.exchange/addresses/balance/".concat(a.address));case 3:s=t.sent,r=s.data,n("setWavesBalance",(null===r||void 0===r?void 0:r.balance)/1e8),console.log(r);case 7:case"end":return t.stop()}}),t)})))()},getRusCoinsBalance:function(e){return Object(I["a"])(regeneratorRuntime.mark((function t(){var a,n,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.state,n=e.commit,t.next=3,de.a.get("https://nodes.waves.exchange/assets/balance/".concat(a.address,"/").concat(a.rusCoinAddress));case 3:s=t.sent,r=s.data,n("setRusCoinsBalance",(null===r||void 0===r?void 0:r.balance)/1e5),console.log(r);case 7:case"end":return t.stop()}}),t)})))()}},modules:{},plugins:[ue.plugin]}),fe=a("f309");n["a"].use(fe["a"]);var pe=new fe["a"]({theme:{options:{customProperties:!0},dark:!0,themes:{dark:{primary:"#5a81ea",secondary:"#e14b51",header:"#19202e"}}}});n["a"].config.productionTip=!1,new n["a"]({router:oe,store:ve,vuetify:pe,render:function(e){return e(K)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},a989:function(e,t,a){"use strict";a("0bb1")}});
//# sourceMappingURL=app.032abef3.js.map