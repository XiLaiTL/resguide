(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{406:function(t,s,a){t.exports=a.p+"assets/img/image-20200706221351663.67038980.png"},407:function(t,s,a){t.exports=a.p+"assets/img/image-20200708101757000.b3f5663d.png"},408:function(t,s,a){t.exports=a.p+"assets/img/image-20200708101857617.8f30e694.png"},409:function(t,s,a){t.exports=a.p+"assets/img/image-20200708101922214.fd12ccfa.png"},484:function(t,s,a){"use strict";a.r(s);var n=a(27),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"面剔除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面剔除"}},[t._v("#")]),t._v(" 面剔除")]),t._v(" "),n("p",[t._v("面剔除（Face culling）是游戏开发中提高渲染效率的重要方式，尤其是像Minecraft这样的游戏中。")]),t._v(" "),n("p",[t._v("想象一个高楼，如果将其简化为一个立方体，它拥有六个面。")]),t._v(" "),n("p",[t._v("但我们真的能看到六个面吗？首先它的底面我们是无论如何也看不到的，其次，我们无法同时看到超过多于三个面，通常情况下我们只能看到两个面——除非飞在高空中，否则我们看不到它的顶面。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(406),alt:"image-20200706221351663"}})]),t._v(" "),n("p",[t._v("如果我们让游戏同时绘制六个面，岂不是太浪费性能！")]),t._v(" "),n("p",[t._v("再看Minecraft，光是地表的方块就非常多，如果算上被掩埋在地底的所有方块，渲染其所有面，计算量将会十分庞大。理所应当，看不到的面就不应该渲染，当我们开启旁观者模式，潜入地下，我们会直接透视到远处的岩浆湖。从我们的视点到远处的岩浆湖之间数不清的方块根本没有被渲染。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(407),alt:"image-20200708101757000"}})]),t._v(" "),n("p",[t._v("这之间的绝大部分面，都被面剔除算法给舍弃了，如果一个方块紧挨着另一个方块时，这两个方块的相邻的面都不应该被渲染。道理很简单，但实际操作时，还会出现很多麻烦的问题。例如，怎样才算是紧挨着？如果挨着的方块是透明的应该怎么办？如果紧挨着的面不够大，盖不全该怎么办？")]),t._v(" "),n("p",[t._v("这些问题从两方面解决了，一个是对方，一个是己方。")]),t._v(" "),n("p",[t._v("从对方考虑，如果对方不是一个完整的不透明方块，那我们认为它无法遮挡住一个面，也就不会发生面剔除。")]),t._v(" "),n("p",[t._v("如果对方是一个完整的不透明的方块，例如一块石头。我们就要从己方考虑，这边是一个什么样的方块？")]),t._v(" "),n("p",[t._v("拿最基础的下半台阶为例：")]),t._v(" "),n("p",[n("strong",[t._v("slab.json")])]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parent"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"block/block"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"textures"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"particle"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#side"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"elements"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"from"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"to"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"faces"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"down"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uv"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"texture"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#bottom"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cullface"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"down"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"up"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uv"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"texture"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#top"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"north"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uv"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"texture"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#side"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cullface"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"north"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"south"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uv"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"texture"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#side"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cullface"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"south"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"west"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uv"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"texture"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#side"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cullface"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"west"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"east"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uv"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"texture"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#side"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cullface"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"east"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(408),alt:"image-20200708101857617"}})]),t._v(" "),n("p",[t._v("我们看到这个台阶的四面被放上了完整不透明方块。其顶部虽有方块，但并未被剔除。")]),t._v(" "),n("p",[t._v("但是我们来到一个与之对立的视点。就完全看不到这个台阶了，这个方向的三个面全部被剔除。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(409),alt:"image-20200708101922214"}})]),t._v(" "),n("p",[t._v("由此我们可以完全理解模型文件中用于面的cullface参数：")]),t._v(" "),n("p",[t._v("如果一个面的cullface为south，当这个方块的南方为一个完整不透明方块时，这个面就会被剔除。")]),t._v(" "),n("p",[t._v("（真实情况要更为复杂，一个面是否被剔除是根据紧邻面的RenderShape等因素综合判断的）")]),t._v(" "),n("p",[t._v("而例子中的台阶的顶面没有cullface，当然也就不会被剔除。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("你说在最后一张图中台阶的顶面也未被渲染？")]),t._v(" "),n("p",[t._v("当一个面背对着玩家时，这个面就已经被宣判死刑了，哪里还需要判断这么多东西。")])]),t._v(" "),n("h2",{attrs:{id:"拓展阅读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://minecraft-zh.gamepedia.com/%E6%95%99%E7%A8%8B/%E4%B8%8D%E9%80%8F%E6%98%8E%E5%BA%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minecraft中文wiki: 不透明度"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("br"),n("br"),n("Vssue")],1)])}),[],!1,null,null,null);s.default=r.exports}}]);