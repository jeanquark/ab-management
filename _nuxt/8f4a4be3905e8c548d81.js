(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{229:function(t,e,r){"use strict";r.r(e);r(20);var o,n,l,c,d,m=r(4),f=r(16),v={data:function(){return{form:{email:"john.doe@example.com",password:"secret",password_confirmation:"secret"}}},methods:{signUserUp:(o=Object(m.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("signUserUp!"),t.next=4,this.$store.dispatch("firebase-auth/signUserUp",this.form);case 4:r=t.sent,console.log("abc: ",r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error from client: ",t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(t){return o.apply(this,arguments)})}},h=r(10),w=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",on:{submit:function(e){return e.preventDefault(),t.signUserUp()}}},[r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[t._v("\n            Username\n        ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"text",placeholder:"Username"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password"}},[t._v("\n            Password\n        ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password",type:"password",placeholder:"******************"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password_confirmation"}},[t._v("\n            Repeat Password\n        ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password_confirmation",type:"password",placeholder:"******************"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}})]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-between"},[e("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"submit"}},[this._v("\n            Sign Up\n        ")])])}],!1,null,"1c23e8e5",null).exports,x={data:function(){return{form:{email:"john.doe@example.com",password:"secret"}}},methods:{signUserIn:(n=Object(m.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("signUserIn"),t.next=4,this.$store.dispatch("firebase-auth/signUserIn",this.form);case 4:e=t.sent,console.log("abc: ",e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error from client: ",t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(){return n.apply(this,arguments)})}},y={components:{Register:w,Login:Object(h.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",on:{submit:function(e){return e.preventDefault(),t.signUserIn()}}},[r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[t._v("\n            Username\n        ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"text",placeholder:"Username"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password"}},[t._v("\n            Password\n        ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password",type:"password",placeholder:"******************"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-between"},[e("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"submit"}},[this._v("\n            Sign In\n        ")]),e("br"),this._v(" "),e("a",{staticClass:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",attrs:{href:"#"}},[this._v("\n            Forgot Password?\n        ")])])}],!1,null,"3d5ebf8f",null).exports},layout:"layoutFront",mounted:(d=Object(m.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.c.collection("posts").doc("post1").get();case 2:(e=t.sent).exists&&(this.text=e.data().content);case 4:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)}),data:function(){return{text:"",message:"",snackbar:!1,showLogin:!0}},computed:{loadedUser:function(){return this.$store.getters["users/loadedUser"]}},methods:{updatePost:(c=Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.c.collection("posts").doc("post1").update({content:this.text});case 3:this.message="Successfull update!",this.snackbar=!0,t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),this.message="Sorry, an error occured.",this.snackbar=!0;case 11:case"end":return t.stop()}}),t,this,[[0,7]])}))),function(){return c.apply(this,arguments)}),logout:(l=Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("firebase-auth/signOut");case 2:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)})}},_=Object(h.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap justify-center"},[r("div",{staticClass:"w-full sm:w-1/2 bg-white justify-center p-4"},[r("p",{staticClass:"text-black"},[t._v("\n\t\t\t\ttext: "+t._s(this.text)),r("br"),r("br"),t._v("\n\t\t\t\tmessage: "+t._s(this.message)),r("br"),r("br"),t._v("\n\t\t\t\tloadedUser: "+t._s(this.loadedUser)),r("br"),r("br")]),t._v(" "),r("div",{staticClass:"flex flex-wrap mb-2"},[r("div",{staticClass:"w-full px-3"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"message"}},[t._v("\n                        Your text\n                    ")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"message",rows:"5"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"flex flex-wrap mb-2 justify-center"},[r("button",{staticClass:"bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded",on:{click:function(e){return t.updatePost()}}},[t._v("\n                    Update\n                ")])])]),t._v(" "),r("div",{staticClass:"w-full justify-center p-4"},[r("div",{staticClass:"flex flex-wrap justify-center my-3"},[r("button",{staticClass:"bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded",on:{click:function(e){t.showLogin=!t.showLogin}}},[t._v(t._s(t.showLogin?"Switch to register":"Switch to login"))])]),t._v(" "),r("div",{staticClass:"flex flex-wrap justify-center my-3"},[t.showLogin?r("login"):r("register")],1)]),t._v(" "),r("div",{staticClass:"w-full flex flex-wrap justify-center p-4"},[r("button",{staticClass:"bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded",on:{click:function(e){return t.logout()}}},[t._v("\n\t\t\t\tlogout\n\t\t\t")])])])}),[],!1,null,"76a940a6",null);e.default=_.exports}}]);