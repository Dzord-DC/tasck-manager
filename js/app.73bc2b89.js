(function(){"use strict";var t={8720:function(t,e,a){var n=a(9242),i=a(3396);const s={class:"app"};function o(t,e,a,n,o,l){const c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(c)])}var l={methods:{goTo(t){t&&this.$router.push({name:t})}}},c={name:"App",mixins:[l],components:{},mounted(){this.goTo("home")}},r=a(89);const u=(0,r.Z)(c,[["render",o]]);var d=u,k=a(2483);const p={class:"container"},v=(0,i._)("section",{class:"title-box"},[(0,i._)("h1",null,"Менеджер задачь")],-1),m={class:"body"};function h(t,e,a,n,s,o){return(0,i.wg)(),(0,i.iD)("div",p,[v,(0,i._)("section",m,[(0,i._)("button",{class:"v-btn",onClick:e[0]||(e[0]=e=>t.goTo("tasck-list"))}," Список задачь ")])])}var w={name:"MainSite",mixins:[l],data(){return{}},computed:{},created(){}};const y=(0,r.Z)(w,[["render",h]]);var f=y,g=a(7139);const b=t=>((0,i.dD)("data-v-47fed969"),t=t(),(0,i.Cn)(),t),D={class:"container"},x=b((()=>(0,i._)("section",{class:"title-box"},[(0,i._)("h1",null,"Список задачь")],-1))),T={class:"boby-box"},_={key:0},I=["value"],O={key:0},S=b((()=>(0,i._)("h1",null,"Активные задач:",-1))),C={class:"text-box"},N=["disabled"],q={key:1,class:"text-box"},j=["disabled"],z={key:3,class:"text-box"},U={key:4,class:"text-box"},V=["value"],E=["onClick"],A=["onClick"],J=["onClick"];function M(t,e,a,s,o,l){return(0,i.wg)(),(0,i.iD)("div",D,[x,(0,i._)("section",null,[(0,i._)("button",{class:"v-btn v1",onClick:e[0]||(e[0]=e=>t.goTo("home"))}," На главную ")]),(0,i._)("section",T,[(0,i._)("button",{class:"v-btn v2",onClick:e[1]||(e[1]=t=>o.showNew=!o.showNew)}," Создать задачу "),o.showNew?((0,i.wg)(),(0,i.iD)("div",_,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>o.tasck.name=t),type:"text",name:"name",id:"name",placeholder:"Название",class:"input input-text"},null,512),[[n.nr,o.tasck.name]]),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>o.tasck.value=t),type:"number",placeholder:"Оценка",class:"input input-number"},null,512),[[n.nr,o.tasck.value]]),(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":e[4]||(e[4]=t=>o.tasck.priority=t),name:"priority",id:"priority-select",class:"input"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.selectAr,(t=>((0,i.wg)(),(0,i.iD)("option",{key:t.value,value:t.value},(0,g.zw)(t.name),9,I)))),128))],512),[[n.bM,o.tasck.priority]]),(0,i._)("button",{class:"v-btn v3",onClick:e[5]||(e[5]=(...t)=>l.seve&&l.seve(...t))}," Создать ")])):(0,i.kq)("",!0)]),l.tascks.length?((0,i.wg)(),(0,i.iD)("section",O,[S,(0,i._)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.tascks,((a,s)=>((0,i.wg)(),(0,i.iD)("div",{key:`tasck-${s}`,class:"flex"},[(0,i._)("div",C,(0,g.zw)(s),1),o.editID==s?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,"onUpdate:modelValue":e[6]||(e[6]=t=>o.edit.name=t),type:"text",name:"name",id:"name",placeholder:"Название",class:"input input-text",disabled:o.editID!=s},null,8,N)),[[n.nr,o.edit.name]]):((0,i.wg)(),(0,i.iD)("div",q,(0,g.zw)(a.name),1)),o.editID==s?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:2,"onUpdate:modelValue":e[7]||(e[7]=t=>o.edit.value=t),type:"number",placeholder:"Оценка",class:"input input-number",disabled:o.editID!=s},null,8,j)),[[n.nr,o.edit.value]]):((0,i.wg)(),(0,i.iD)("div",z,(0,g.zw)(a.value),1)),o.edit||o.editID?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",U,(0,g.zw)(a.priority),1)),o.editID==s?(0,i.wy)(((0,i.wg)(),(0,i.iD)("select",{key:5,"onUpdate:modelValue":e[8]||(e[8]=t=>o.edit.priority=t),name:"priority",id:"priority-select",class:"input"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.selectAr,(t=>((0,i.wg)(),(0,i.iD)("option",{key:t.value,value:t.value},(0,g.zw)(t.name),9,V)))),128))],512)),[[n.bM,o.edit.priority]]):(0,i.kq)("",!0),o.editID==s||o.edit?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:6,onClick:t=>l.setEditId(a,s),class:"v-btn v3"},"Изменить",8,E)),o.editID==s||o.edit?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:7,class:"v-btn v3 red",onClick:e=>t.deleteTasck(s)}," Удалить ",8,A)),o.editID==s?((0,i.wg)(),(0,i.iD)("button",{key:8,class:"v-btn v3",onClick:t=>l.conformEdit(s,o.edit)}," Сохранить ",8,J)):(0,i.kq)("",!0)])))),128))])])):(0,i.kq)("",!0)])}var P=a(65),Z={name:"tasck-list",mixins:[l],data(){return{showNew:!1,tasck:{name:null,value:null,priority:"average"},edit:!1,editID:null,selectAr:[{value:"low",name:"Низкий"},{value:"average",name:"Средний"},{value:"high",name:"Высокий"}]}},computed:{tascks(){return this.getTascks()}},mounted(){this.loadTascks()},methods:{...(0,P.Se)(["getTascks"]),...(0,P.nv)(["saveTasck","deleteTasck","editTasck","loadTascks"]),seve(){this.tasck.name&&this.tasck.value&&(this.saveTasck(this.tasck),this.clearCreated())},setEditId(t,e){this.edit=t,this.editID=e},conformEdit(t,e){this.editTasck({i:t,payload:e}),this.edit=null,this.editID=null},clearCreated(){this.tasck={name:null,value:null,priority:"average"},this.showNew=!1}}};const H=(0,r.Z)(Z,[["render",M],["__scopeId","data-v-47fed969"]]);var K=H;const Y=[{path:"/",name:"home",component:f,alias:"/*"},{path:"/tasck-list",name:"tasck-list",component:K,children:[]},{path:"/*",name:"404",alias:"/"}],$=(0,k.p7)({history:(0,k.PO)(),routes:Y});var F=$,W=new P.ZP.Store({state:{tascks:[]},mutations:{uppDateState(t,e){t.tascks=e},clearData(t){t.tascks=[]},addNewTasck(t,e){t.tascks.push(e)},delete(t,e){t.tascks.splice(e,1)},edit(t,{i:e,payload:a}){t.tascks.splice(e,1,a)}},getters:{getTascks:t=>t.tascks},actions:{loadTascks(){const t=JSON.parse(localStorage.getItem("tascks"));t&&this.commit("uppDateState",t)},saveTasck(t,e){this.commit("addNewTasck",e),localStorage.setItem("tascks",JSON.stringify(t.rootState.tascks))},deleteTasck(t,e){this.commit("delete",e),localStorage.setItem("tascks",JSON.stringify(t.rootState.tascks))},editTasck(t,e){this.commit("edit",e),localStorage.setItem("tascks",JSON.stringify(t.rootState.tascks))}}});(0,n.ri)(d).use(F).use(W).mount("#app")}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,s){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],s=t[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&s||o>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(l=!1,s<o&&(o=s));if(l){t.splice(u--,1);var r=i();void 0!==r&&(e=r)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,i,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,o=n[0],l=n[1],c=n[2],r=0;if(o.some((function(e){return 0!==t[e]}))){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(c)var u=c(a)}for(e&&e(n);r<o.length;r++)s=o[r],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},n=self["webpackChunkmysite"]=self["webpackChunkmysite"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(8720)}));n=a.O(n)})();
//# sourceMappingURL=app.73bc2b89.js.map