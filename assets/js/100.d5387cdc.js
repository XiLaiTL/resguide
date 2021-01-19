(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{530:function(t,a,e){"use strict";e.r(a);var r=e(27),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"主菜单全景图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主菜单全景图"}},[t._v("#")]),t._v(" 主菜单全景图")]),t._v(" "),e("p",[t._v("主菜单全景图就是主菜单的背景，其材质位于 assets/minecraft/textures/gui/title/background 文件夹下，共六张。")]),t._v(" "),e("p",[t._v("把这六张图片拼接一下，不难看出这是一个盒子的展开图。想象将其折叠成一个盒子，将玩家视角置于盒子正中央，就好似玩家声临其境一样。这就是游戏中常用的 "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cube_mapping",target:"_blank",rel:"noopener noreferrer"}},[t._v("CubeMapping"),e("OutboundLink")],1),t._v(" 技术。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/07/28/TZB52HWRr8K6kiu.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"如何制作主菜单全景图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何制作主菜单全景图"}},[t._v("#")]),t._v(" 如何制作主菜单全景图")]),t._v(" "),e("h3",{attrs:{id:"常规方式：截图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常规方式：截图"}},[t._v("#")]),t._v(" 常规方式：截图")]),t._v(" "),e("p",[t._v("最简单的方法就是在游戏里看向六个方向，分别截一张图：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("首先要在启动器中将游戏窗口大小改为 512 x 512。")])]),t._v(" "),e("li",[e("p",[t._v("拍摄前要阻止各种可能的变化，防止不同截图衔接不上，最好将世界变成彻底静态的。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("/gamerule doDaylightCycle false")]),t._v(" 停止昼夜交替")]),t._v(" "),e("li",[t._v("关闭飘来飘去的云")]),t._v(" "),e("li",[t._v("如果开的光影中有各种晃动元素，也要关掉")])])]),t._v(" "),e("li",[e("p",[t._v("将角视场调整为82")])]),t._v(" "),e("li",[e("p",[t._v("按下 F1（有些笔记本需要 Fn + F1）隐藏一切 UI")])]),t._v(" "),e("li",[e("p",[t._v("选择合适的位置，选择合适的时间，调整光影的各种设置以达到最符合氛围的效果")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("/tp @p ~ ~ ~ -90 0")]),t._v("，按下 F2（有些笔记本需要 Fn + F2）截图得到 "),e("code",[t._v("panorama_0.png")])]),t._v(" "),e("li",[e("code",[t._v("/tp @p ~ ~ ~ 0 0")]),t._v("，截图得到 "),e("code",[t._v("panorama_1.png")])]),t._v(" "),e("li",[e("code",[t._v("/tp @p ~ ~ ~ 180 0")]),t._v("，截图得到 "),e("code",[t._v("panorama_2.png")])]),t._v(" "),e("li",[e("code",[t._v("/tp @p ~ ~ ~ 90 0")]),t._v("，截图得到 "),e("code",[t._v("panorama_3.png")])]),t._v(" "),e("li",[e("code",[t._v("/tp @p ~ ~ ~ -90 -90")]),t._v("，截图得到 "),e("code",[t._v("panorama_4.png")])]),t._v(" "),e("li",[e("code",[t._v("/tp @p ~ ~ ~ -90 90")]),t._v("，截图得到 "),e("code",[t._v("panorama_5.png")])])])]),t._v(" "),e("li",[e("p",[t._v("将截图放到材质包的 assets/minecraft/textures/gui/title/background 文件夹下，测试，如果感觉图片之间衔接不好，可以试着调整一下光影设置，很多光影会模糊加深屏幕边缘，要将这类设置关掉。")])])]),t._v(" "),e("h3",{attrs:{id:"extra：使用mod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extra：使用mod"}},[t._v("#")]),t._v(" extra：使用mod")]),t._v(" "),e("p",[t._v("1.9.x 到 1.12.x 版本可以使用 "),e("a",{attrs:{href:"https://www.mcbbs.net/thread-648145-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quark"),e("OutboundLink")],1),t._v(" 模组中的全景图生成器功能（"),e("code",[t._v("Ctrl+Shift+截屏键")]),t._v("），但实际上这个功能只相当于瞬间执行上述方法的第五步。")]),t._v(" "),e("p",[t._v("如果使用1.14.4-1.15.x版本，可以使用 "),e("strong",[e("a",{attrs:{href:"https://www.mcbbs.net/thread-910751-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Runorama——全景截图背景"),e("OutboundLink")],1)]),t._v(" mod。")]),t._v(" "),e("h3",{attrs:{id:"extra2：画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extra2：画"}},[t._v("#")]),t._v(" extra2：画")]),t._v(" "),e("p",[t._v("Conquest_ 材质包的主菜单全景图是画出来的。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/07/28/GysUjbtpQAx29Ni.png",alt:"conquest全景图"}})]),t._v(" "),e("h3",{attrs:{id:"进阶：使用软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进阶：使用软件"}},[t._v("#")]),t._v(" 进阶：使用软件")]),t._v(" "),e("p",[t._v("全景图本质上是一个天空盒（skybox），它自然可以用3D渲染软件渲染出来，这部分需要一定专业知识，在此不多赘述。我也不会。")]),t._v(" "),e("h3",{attrs:{id:"特殊：静态背景图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特殊：静态背景图片"}},[t._v("#")]),t._v(" 特殊：静态背景图片")]),t._v(" "),e("p",[t._v("还记得我们在一开始遇到的问题吗？我们用原版assets文件制作初始资源包时，主菜单的全景图变成了灰幕。")]),t._v(" "),e("p",[t._v("从Minecraft1.13版本起，全景图文件夹里就多了一张名为panorama_overlay.png的图片，让我们再次把这张图片放回assets/minecraft/textures/gui/title/background文件夹")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/08/22/7G1sKDv64FiTxpu.png",alt:"image-20200822162516716"}})]),t._v(" "),e("p",[t._v("顾名思义，这张图的含义似乎是：在全景图上覆盖的图片，我们将其稍加编辑，查看下效果：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/08/22/UTBny5d4sQXPEej.png",alt:"image-20200822162930523"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/08/22/2ugvMi6jbRDacJE.png",alt:"image-20200822162918630"}})]),t._v(" "),e("p",[t._v("效果已经很明显了，panorama_overlay.png将覆盖在主菜单全景图上，如果这张图片支持任意分辨率，那我们就可以用一张静态的图片取而代之。")]),t._v(" "),e("p",[t._v("比如这样：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/08/22/PD5pEzjACO76oGW.png",alt:"image-20200822164541552"}})]),t._v(" "),e("h2",{attrs:{id:"使用-optifine-添加更多花样"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-optifine-添加更多花样"}},[t._v("#")]),t._v(" 使用 OptiFine 添加更多花样")]),t._v(" "),e("p",[t._v("详见 OptiFine 帮助文档的"),e("a",{attrs:{href:"https://www.mcbbs.net/forum.php?mod=redirect&goto=findpost&ptid=896135&pid=15810206",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义全景图"),e("OutboundLink")],1),t._v("章节")])])}),[],!1,null,null,null);a.default=_.exports}}]);