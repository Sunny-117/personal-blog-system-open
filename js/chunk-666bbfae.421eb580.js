(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-666bbfae"],{2095:function(t,a,e){"use strict";a["a"]=function(t,a=!1){const e=new Date(+t);let s=e.getMonth()+1;s<10&&(s="0"+s);let n=e.getDate();if(n<10&&(n="0"+n),a){let t=e.getHours().toString().padStart(2,"0"),a=e.getMinutes().toString().padStart(2,"0"),i=e.getSeconds().toString().padStart(2,"0");return`${e.getFullYear()}-${s}-${n} ${t}:${a}:${i}`}return`${e.getFullYear()}-${s}-${n}`}},"3b3e":function(t,a,e){},4196:function(t,a,e){"use strict";a["a"]=function(){return{data(){return{page:1,limit:10}},created(){this.$eventBus.$on("mainScroll",this.handleScrolls)},destroyed(){this.$eventBus.$off("mainScroll",this.handleScrolls)},computed:{hasMore(){return this.data.rows.length<this.data.total}},methods:{async fetchMoreData(){if(!this.hasMore)return;this.isLoading=!0,this.page++;const t=await this.fetchData();this.isLoading=!1,this.data.total=t.total,this.data.rows=this.data.rows.concat(t.rows)},handleScrolls(t){if(this.isLoading||!t)return;const a=100,e=t.scrollHeight-t.clientHeight-t.scrollTop;e<a&&this.fetchMoreData()}}}}},"42f0":function(t,a,e){"use strict";e("c01f")},"4ec2":function(t,a,e){"use strict";e("3b3e")},6175:function(t,a,e){"use strict";e("6be4")},"684a":function(t,a,e){"use strict";var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"message-area-container"},[a("FormData",t._g({},t.$listeners)),a("h4",[t._v(t._s(t.title)),a("span",[t._v(t._s(t.subTitle))])]),a("DataList",{attrs:{list:t.list}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isListLoading,expression:"isListLoading"}],staticClass:"loading"})],1)},n=[],i=function(){var t=this,a=t._self._c;return a("div",{ref:"form",attrs:{id:"form-data-container"}},[a("form",{staticClass:"form-data"},[a("div",{staticClass:"input-area"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.nickname,expression:"formData.nickname"}],attrs:{maxlength:"10",type:"text",placeholder:"用户昵称"},domProps:{value:t.formData.nickname},on:{input:function(a){a.target.composing||t.$set(t.formData,"nickname",a.target.value)}}}),a("div",{staticClass:"name-err"},[t._v(t._s(t.errorData.nickname))]),a("span",[t._v(t._s(t.formData.nickname.length)+"/10")])]),a("div",{staticClass:"comment-area"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],attrs:{maxlength:"300",placeholder:"输入内容"},domProps:{value:t.formData.content},on:{input:function(a){a.target.composing||t.$set(t.formData,"content",a.target.value)}}}),a("div",{staticClass:"content-err"},[t._v(t._s(t.errorData.content))]),a("span",[t._v(t._s(t.formData.content.length)+"/300")])]),a("button",{staticClass:"submit",attrs:{disabled:t.isSubmiting},on:{click:function(a){return a.preventDefault(),t.handleClick.apply(null,arguments)}}},[t._v(t._s(t.isSubmiting?"提交中...":"提交"))])])])},r=[],o=e("c4f5"),c={data(){return{formData:{nickname:"",content:""},errorData:{nickname:"",content:""},isSubmiting:!1}},methods:{showMessage:o["a"],handleClick(){this.errorData.nickname=this.formData.nickname?"":"请输入昵称！",this.errorData.content=this.formData.content?"":"请输入内容！",this.errorData.nickname||this.errorData.content||(this.isSubmiting=!0,this.$emit("clicks",this.formData,t=>{this.formData.nickname="",this.formData.content="",this.isSubmiting=!1,this.showMessage({content:t,type:"success",container:this.$refs.form,duration:800})}))}}},l=c,u=(e("4ec2"),e("de1f")),d=Object(u["a"])(l,i,r,!1,null,"6dc72968",null),h=d.exports,f=function(){var t=this,a=t._self._c;return a("ul",{staticClass:"form-list-container"},t._l(t.list,(function(e,s){return a("li",{key:s},[a("Avatar",{attrs:{url:e.avatar,size:44}}),a("div",{staticClass:"message"},[a("span",{staticClass:"nick-name"},[t._v(t._s(e.nickname))]),a("p",{staticClass:"comment-content"},[t._v(" "+t._s(e.content)+" ")]),a("div",{staticClass:"date"},[a("span",[t._v(t._s(t.formatDate(e.createDate,!0)))])])])],1)})),0)},m=[],g=e("77c0"),p=e("2095"),v={components:{Avatar:g["a"]},props:{list:{type:Array,default:()=>[]}},methods:{formatDate:p["a"]}},D=v,S=(e("a024"),Object(u["a"])(D,f,m,!1,null,"e40b4dce",null)),b=S.exports,$={components:{FormData:h,DataList:b},props:{title:{type:String,default:""},subTitle:{type:String,default:""},list:{type:Array,default:()=>[]},isListLoading:{type:Boolean,default:!1}}},_=$,k=(e("42f0"),Object(u["a"])(_,s,n,!1,null,"1aab5cb8",null));a["a"]=k.exports},"6be4":function(t,a,e){},"85e3":function(t,a,e){},"8fc4":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("div",{ref:"msgContainer",staticClass:"message-container"},[a("MessageArea",{attrs:{title:"留言板",subTitle:`(${t.data.total})`,list:t.data.rows,isListLoading:t.isLoading},on:{clicks:t.handleClicks}})],1)},n=[],i=e("684a"),r=e("e128"),o=e("4196"),c=e("c443"),l=e("f119"),u={mixins:[Object(l["a"])("msgContainer"),Object(r["a"])({total:0,rows:[]}),Object(o["a"])()],components:{MessageArea:i["a"]},methods:{async fetchData(){const t=await c["a"](this.page,this.limit);return t},async handleClicks(t,a){const e=await c["b"](t);this.data.rows.unshift(e),this.data.total++,a("感谢您的留言")}}},d=u,h=(e("6175"),e("de1f")),f=Object(h["a"])(d,s,n,!1,null,"63030065",null);a["default"]=f.exports},a024:function(t,a,e){"use strict";e("85e3")},c01f:function(t,a,e){},e128:function(t,a,e){"use strict";a["a"]=function(t=null){return{data(){return{isLoading:!0,data:t}},async created(){this.data=await this.fetchData(),this.isLoading=!1}}}},f119:function(t,a,e){"use strict";a["a"]=function(t){return{mounted(){this.$eventBus.$on("setMainScroll",this.handleSetMainScroll),this.$refs[t].addEventListener("scroll",this.handleScroll)},beforeDestroy(){this.$eventBus.$emit("mainScroll"),this.$eventBus.$off("setMainScroll",this.handleSetMainScroll),this.$refs[t].removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.$eventBus.$emit("mainScroll",this.$refs[t])},handleSetMainScroll(a){this.$refs[t].scrollTop=a}}}}}}]);
//# sourceMappingURL=chunk-666bbfae.421eb580.js.map