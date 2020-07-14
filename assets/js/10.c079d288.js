(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{441:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAABCCAYAAAAi2t8oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AcPDCsNMQgF1AAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAB9klEQVR42u3dSYrDMBAF0KqQW6WP3zmXemUIjhyyagv/9yAbb0Jp+JY84K6qUQDB7lVV9RveCj9VY+SeD7r7bQyMx3Xbo5/91v/Rc2BSf1r/35wLgHSCEBCEmgBId58dvPL1garJNQLiXX3Mf5wP1VH172vtaitCAEEICEJNAAhCAEEIIAgBBCGAIAQQhACCEEAQAghCAEEIIAgBBCGAIAQQhACCEEAQAghCgDD3s/64+/0DSmkfWX9tg6TaZ32f1Abp9a84D24rDYSj41fr9O2XPuiP2ia5fuMhZEV4lP7b8e6OPTOmmPXv67i4+hjY15ZU+6rB7xrhCZNg+wnBvG3hrM7EsbCF4Cq1384oftYAs9UhgBUhhG0RE1aHq60Gq068awypYbDf8SQ+MbBazYIQIaj+6BAUhJgcJ0i/a/zNI0T/3QauEXLaZEgMwW+CkYuvCMcYh88Lpm+PbAVJDfzYN0sQgqkhONsWelwsbEU4WxWmbRO+eb3QmwUZNw1sk9dxyoow/e0CbA+N//AVYXqnuzFgsmuD9drDNULA1lgTAIIQQBACCEIAQQggCAEEIYAgBBCEAIIQQBACCEIAQQggCAEEIYAgBBCEAIIQQBACZJl+vKmfvrNKlvQxv69/PEZUX1sRArbGmgAQhADhuqp8bRqI9gd9RsabsRhpCgAAAABJRU5ErkJggg=="},442:function(t,s,a){t.exports=a.p+"assets/img/image-20200709102736870.8c33118c.png"},443:function(t,s,a){t.exports=a.p+"assets/img/image-20200709102709736.2e64819c.png"},444:function(t,s,a){t.exports=a.p+"assets/img/image-20200709102856643.c748c5cd.png"},445:function(t,s,a){t.exports=a.p+"assets/img/image-20200709104553553.fe3744dd.png"},446:function(t,s,a){t.exports=a.p+"assets/img/image-20200709104851371.2c0b1a21.png"},567:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"简化ctm方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简化ctm方法"}},[t._v("#")]),t._v(" 简化CTM方法")]),t._v(" "),n("p",[t._v("前面我们提到，对于一些简单的情况，制47张材质过于繁琐了，于是OptiFine提供了一种简化方法，只需要5张材质：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(441),alt:""}})]),t._v(" "),n("p",[t._v("是不是很神奇？这五张材质是如何变成游戏中看到的样子的？")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 借用一下CTM模组的设计，CTM模组是Chisel团队开发的独立于OptiFine的，可以实现连接材质的模组：\n * ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐\n * │ 0.png           │ │ 1.png           │ │ 2.png           │\n * │ ╔══════╤══════╗ │ │  ──────┼──────  │ │ ║──────┼──────║ │\n * │ ║      │      ║ │ │ │      │      │ │ │ ║      │      ║ │\n * │ ║ 0    │ 1    ║ │ │ │ 4    │ 5    │ │ │ ║ 8    │ 9    ║ │\n * │ ╟──────┼──────╢ │ │ │──────┼──────│ │ │ ║──────┼──────║ │\n * │ ║      │      ║ │ │ │      │      │ │ │ ║      │      ║ │\n * │ ║ 2    │ 3    ║ │ │ │ 6    │ 7    │ │ │ ║ 10   │11    ║ │\n * │ ╚══════╧══════╝ │ │  ──────┼──────  │ │ ║──────┼──────║ │\n * └─────────────────┘ └─────────────────┘ └─────────────────┘ \n * ┌─────────────────┐ ┌─────────────────┐\n * │ 3.png           │ │ 4.png           │\n * │ ═══════╤═══════ │ │ ╝ ─────┼───── ╚ │\n * │ │      │      │ │ │ │      │      │ │\n * │ │ 12   │ 13   │ │ │ │ 16   │ 17   │ │\n * │ │──────┼──────│ │ │ │──────┼──────│ │\n * │ │      │      │ │ │ │      │      │ │\n * │ │ 14   │ 15   │ │ │ │ 18   │ 19   │ │\n * │ ═══════╧═══════ │ │ ╗ ─────┼───── ╔ │\n * └─────────────────┘ └─────────────────┘ \n * \n * 如图所示，在程序内部，这五张图片被横一刀竖一刀拆分成了20张小图片。\n * 通过拼接这20张小图片，可以得到CTM方法的47张图片（然而开了脑洞的ctm是无法用简化ctm方法实现的）。\n * \n * 连接0,13,2,15，我们可以获得一张向右连接的材质（CTM方法的1号材质）：\n * ╔══════╤═══════\n * ║      │      │\n * ║ 0    │ 13   │\n * ╟──────┼──────┼\n * ║      │      │\n * ║ 2    │ 15   │\n * ╚══════╧═══════\n * \n * 连接8,17,2,15, 我们可以获得一张L形拐角材质，连接到右侧和上方（CTM方法的16号材质）\n * \n * ║ ─────┼───── ╚\n * ║      │      │\n * ║ 8    │ 17   │\n * ╟──────┼──────┼\n * ║      │      │\n * ║ 2    │ 15   │\n * ╚══════╧═══════\n * \n */")]),t._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("提醒")]),t._v(" "),n("p",[t._v("玻璃板使用简化CTM方法会出bug！")]),t._v(" "),n("p",[t._v("详见这个issue："),n("a",{attrs:{href:"https://github.com/sp614x/optifine/issues/463",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/sp614x/optifine/issues/463"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"失败的尝试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#失败的尝试"}},[t._v("#")]),t._v(" 失败的尝试")]),t._v(" "),n("p",[t._v("虽然知道有bug，但是简化CTM还是很诱人的，我还是尝试用简化CTM方法制作了玻璃材质（1号材质黑了是因为它现在彻底透明了）：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(442),alt:"image-20200709102736870"}})]),t._v(" "),n("p",[n("strong",[t._v("glass.properties")])]),t._v(" "),n("div",{staticClass:"language-properties extra-class"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("ctm_compact")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0-4")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchBlocks")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:glass")]),t._v("\n")])])]),n("p",[t._v("我们看到简化CTM方法用于玻璃还是非常的稳健：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(443),alt:"image-20200709102709736"}})]),t._v(" "),n("p",[t._v("我们再试着用于玻璃板：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(444),alt:"image-20200709102856643"}})]),t._v(" "),n("p",[t._v("它的顶部也被连接了，我们加上faces=sides将连接材质限制在侧面：")]),t._v(" "),n("div",{staticClass:"language-properties extra-class"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("ctm_compact")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0-4")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchBlocks")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:glass_pane")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("faces")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("sides")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(445),alt:"image-20200709104553553"}})]),t._v(" "),n("p",[t._v("至此我以为简化CTM玻璃板不过如此，直到我转到了另一面：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(446),alt:"image-20200709104851371"}})]),t._v(" "),n("p",[t._v("这种问题的确不是我有办法解决的，只能放弃了。")]),t._v(" "),n("p",[n("br"),n("br"),n("Vssue")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);