(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["raf"],{"02ad":function(t,e,n){},"03ea":function(t,e,n){"use strict";var i=n("0a0d"),s=n.n(i);e["a"]={name:"RequestAnimationFrame",data:function(){return{_id:null,prev:null,current:s()(),diff:null}},methods:{tick:function(){this.prev=this.current,this.current=s()(),this.diff=Math.max(this.current-this.prev,8),this.$emit("tick",this.current,this.prev,this.diff),this._id=requestAnimationFrame(this.tick)}},created:function(){this.tick=this.tick.bind(this)},mounted:function(){requestAnimationFrame(this.tick)},beforeDestroy:function(){cancelAnimationFrame(this._id)},render:function(){return this.$scopedSlots.default?this.$scopedSlots.default({current:this.current})[0]:this.$createElement("link")}}},"0a0d":function(t,e,n){t.exports=n("e829")},"2f37":function(t,e,n){var i=n("63b6");i(i.S,"Date",{now:function(){return(new Date).getTime()}})},7430:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"1em"}},[n("RequestAnimationFrame",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.current;return[n("div",{staticClass:"run"},[n("div",{staticClass:"filled",style:{width:i/50%300+"px"}},[t._v("\n        "+t._s(i)+"\n      ")])])]}}])}),n("RequestAnimationFrame",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.current;return[n("div",{staticClass:"run"},[n("div",{staticClass:"filled",style:{opacity:.5*Math.sin(i/1e3)+.5+""}},[t._v("\n        "+t._s(i)+"\n      ")])])]}}])}),n("RequestAnimationFrame",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.current;return[n("div",{staticClass:"run"},[n("div",{staticClass:"filled",style:{background:"hsl("+i/10%360+", 50%, 50%"}},[t._v("\n        "+t._s(i)+"\n      ")])])]}}])}),n("RequestAnimationFrame",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.current;return[n("div",{staticClass:"board"},[n("div",{staticClass:"item",style:{background:"hsl("+i/10%360+", 50%, 50%",left:40*Math.sin(i/1e3)+50+"%",top:40*Math.cos(i/1e3)+50+"%"}},[t._v("\n        "+t._s(i)+"\n      ")]),n("div",{staticClass:"item",style:{background:"hsl("+(i/10+180)%360+", 50%, 50%",left:40*-Math.sin(i/1e3)+50+"%",top:40*-Math.cos(i/1e3)+50+"%"}},[t._v("\n        "+t._s(i)+"\n      ")])])]}}])})],1)},s=[],a=n("03ea"),r={components:{RequestAnimationFrame:a["a"]}},c=r,u=(n("ecee"),n("2877")),o=Object(u["a"])(c,i,s,!1,null,"269a484f",null);e["default"]=o.exports},e829:function(t,e,n){n("2f37"),t.exports=n("584a").Date.now},ecee:function(t,e,n){"use strict";var i=n("02ad"),s=n.n(i);s.a}}]);
//# sourceMappingURL=raf.b0b05c1b.js.map