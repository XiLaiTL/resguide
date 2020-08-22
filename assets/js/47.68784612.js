(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{479:function(t,a,e){"use strict";e.r(a);var s=e(27),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"海鼠壁-竖向连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#海鼠壁-竖向连接"}},[t._v("#")]),t._v(" 海鼠壁——竖向连接")]),t._v(" "),e("blockquote",[e("p",[t._v("注：案例中海鼠壁的设计思路来源于"),e("a",{attrs:{href:"https://tachibana11111.wixsite.com/tachibana-tex-3d",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tachibana TEX 3D"),e("OutboundLink")],1),t._v("材质包。")])]),t._v(" "),e("p",[t._v("本小节我们要把蓝色陶瓦替换成"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Namako_wall",target:"_blank",rel:"noopener noreferrer"}},[t._v("海鼠壁"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("海鼠壁是一种日式墙壁，用于防火和防潮。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/07/28/cos4pzF7VXQAM2B.jpg",alt:"海鼠壁にも「漆喰ドカッと」 | 淡路島の近畿壁材工業株式会社"}})]),t._v(" "),e("p",[t._v("观察其纹理，深蓝色打底，白色交叉网纹，上下都有白漆包边。这种中间纹理重复，顶端和底端不同的材质十分适合用竖向连接方法（vertical）做。")]),t._v(" "),e("p",[t._v("竖向连接方法的模板如下，它需要四张材质，相当于竖向放置的CTM。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/07/28/sNu29RtjFY5rITX.png",alt:""}})]),t._v(" "),e("p",[t._v("我的朋友绘制了四张材质，与上面的模板一一对应。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/07/28/BrdPbZ1lwHiRG3a.png",alt:"image-20200708202727524"}})]),t._v(" "),e("p",[t._v("新建文件名为namako.properties（namako是海鼠壁的罗马音），输入以下代码：")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("vertical")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0-3")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这次我们用matchTiles，matchTiles表示我们要把什么材质换成连接材质。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# minecraft:blue_terracotta表示minecraft/textures/block/blue_terracotta.png")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在此我们还看不出matchTiles方法相对于matchBlocks有什么独特的优势，但不久我们就会看到。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchTiles")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:blue_terracotta")]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("有关matchTiles")]),t._v(" "),e("p",[t._v("经测试得出，如果材质在block文件夹的子文件夹下，需要用"),e("code",[t._v("block/子文件夹路径/文件名.png")]),t._v("这样的表示方法。")])]),t._v(" "),e("p",[t._v("保存，重载资源包，进入游戏查看：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/07/28/ES2okezL8KIjJDs.png",alt:"image-20200708201423876"}})]),t._v(" "),e("p",[t._v("我们用海鼠壁围出一圈墙壁看看效果：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/07/28/3UPzeYABTu2ZcF6.png",alt:"image-20200708205113091"}})]),t._v(" "),e("p",[t._v("有点内味了，但我还希望在拐角处加一个包边图案。这但那是下一节的内容了，本节到此结束。")]),t._v(" "),e("p",[e("br"),e("br"),e("Vssue")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);