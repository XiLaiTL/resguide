(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{479:function(t,e,a){"use strict";a.r(e);var s=a(27),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("center",[a("h1",[t._v("生物群系调色板：网格格式")]),a("p",[t._v("Biome Palettes: Grid Format")])]),t._v(" "),a("h2",{attrs:{id:"概述丨overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述丨overview"}},[t._v("#")]),t._v(" 概述丨Overview")]),t._v(" "),a("p",[t._v("OptiFine的自定义生物群系调色板 (网格格式) 的说明\n基于McPatcher的自定义生物群系调色板")]),t._v(" "),a("p",[t._v("原版颜色映射格式有一些缺陷。\n首先，像沙漠这样的生物群系在颜色图中只有一个像素，这意味着它们的颜色不能随高度变化。\n此外，多个生物群系共享它们的温湿度值，因此不可能给它们不同的颜色方案。\n即使基础值不同，生物群落有时也会在高海拔重叠。")]),t._v(" "),a("p",[t._v("OptiFine提供了另一种选择，最初由Misa提出。和原版颜色映射一样，它也是--一般来说，请参阅下面的提示--一种256x256的彩色图片，\n但是x坐标表示生物群系ID，y坐标表示高度。(生物群系的ID列表请参阅Minecraft Wiki)。\n这允许生物群系之间的完全分离，并让你完全控制从基岩到最大建筑高度的所有颜色。")]),t._v(" "),a("p",[t._v('颜色映射中的每一列表示一个生物群落。请注意此图片是垂直 "翻转" 的:\n世界的底部 (y=0) 在图片的顶部，最大建筑高度 (y=255) 在底部。\n海平面为 y=64。一般来说，你会让每一列都有一些渐变。')]),t._v(" "),a("p",[t._v("模板")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://attachment.mcbbs.net/forum/201911/14/111538jlwq8nk8kkyhkekh.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"属性文件丨colormap-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性文件丨colormap-properties"}},[t._v("#")]),t._v(" 属性文件丨colormap.properties")]),t._v(" "),a("p",[a("strong",[t._v("(可选) 格式标识")]),t._v("\n此属性简单地将网格格式的颜色映射与原版颜色映射区分开来。\n如果没有指定，网格颜色映射将被解释为原版的温度+湿度格式，这会导致怪异的结果。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 网格格式\nformat=grid\n")])])]),a("p",[t._v('如果你在 "assets/minecraft/optifine/color.properties" 文件中对其进行过全局设置，格式属性可以被省略：')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 网格格式\npalette.format=grid\n")])])]),a("p",[t._v("这会使所有自定义颜色映射都使用网格格式，所以请确保这是你想要的。")]),t._v(" "),a("p",[a("strong",[t._v("(可选) 列出要设置可选属性的方块")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 方块\n# 例如:\n#   blocks=stone minecraft:sand minecraft:lever:face=wall:facing=east,west\nblocks=<列表>\n")])])]),a("p",[t._v("参阅生物群系调色板 (biome_palettes.txt).")]),t._v(" "),a("p",[a("strong",[t._v("(可选) 颜色映射图")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 图片\nsource=<图片>\n")])])]),a("p",[t._v("参阅生物群系调色板。")]),t._v(" "),a("p",[a("strong",[t._v("(可选) 默认颜色")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 颜色\ncolor=<RGB值>\n")])])]),a("p",[t._v("参阅生物群系调色板。")]),t._v(" "),a("p",[a("strong",[t._v("(可选) y 变异度")]),t._v("\n如果设置了该属性，则在被颜色映射使用之前，会将随机噪声添加到y坐标，从而使平面区域具有更多样的外观。\n例如，值为2时，游戏会在 y - 2 到 y + 2 之间随机选择一个值。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Y 变异度\nyVariance=<值>\n")])])]),a("p",[t._v("默认值为0 (无变化).")]),t._v(" "),a("p",[t._v('这个属性也可以在 "assets/minecraft/optifine/color.properties" 中全局设置：')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Y 变异度\npalette.yVariance=<值>\n")])])]),a("p",[a("strong",[t._v("(可选) y 偏移")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Y 偏移\nyOffset=<值>\n")])])]),a("p",[t._v("在从颜色映射采样之前，从方块的y坐标中减去一个固定值。\n例如，值为64时，将对从0到64格高的方块使用颜色映射中 y=0 的像素的颜色。高度为65的方块将使用 y=1 的像素，高度为65的方块将使用 y=2 的像素，诸如此类。")]),t._v(" "),a("p",[t._v("默认值为0 (无偏移).")]),t._v(" "),a("h2",{attrs:{id:"提示丨tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示丨tips"}},[t._v("#")]),t._v(" 提示丨Tips")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("向前兼容性：颜色映射中未使用的列表示未分配的生物群系ID，这些ID可以被未来的Minecraft版本或模组使用。\n当然，如果你知道它们使用的ID，你可以为特定的模组生物群系创建配色方案。\n但即使你不这么做，最好也至少为未使用的列设置一个中性的渐变，这样新的生物群系就会有一个合理的默认外观。")]),t._v(" "),a("p",[t._v('向后兼容性: 无论属性文件如何设置，在 "assets/minecraft/textures/colormap" 中的原版 "grass.png"\n和 "foliage.png" 颜色映射永远都是原版格式。这为非OptiFine用户保留了兼容性。\n要使用草或叶子的网格格式，你必须在 "assets/minecraft/optifine/colormap/blocks" 中创建一个自定义颜色映射，\n并将其应用于适当的方块。对于OptiFine用户，自定义颜色映射会覆盖原版颜色映射；\n对于非OptiFine用户，只有原版颜色映射会被使用。')]),t._v(" "),a("p",[t._v("分辨率：虽然这种格式的颜色映射通常是256x256，但没有原版格式那样的硬性要求：")]),t._v(" "),a("p",[t._v('Minecraft 1.7 引入了许多生物群系的稀有变种。例如 "Birch Forest M" (ID 155) 是 "Birch Forest" (ID 27) 的稀有变种。\n方便的是，罕见变种的ID永远是常见的生物群系的ID + 128。\n如果你想让所有的稀有生物群系使用与相应的非稀有生物群系相同的配色方案，就可以利用这一事实。\n只需将颜色映射图的宽度从256像素调整为128像素，OptiFine在为生物群系分配颜色映射的列时，就会在x方向 "包装" 它。\n与之类似，一张1像素宽的颜色映射图可以为所有生物群系提供相同的基于高度的颜色梯度。\n在y方向上，如果你提供了超过256个像素，且服务器的最大建造高度高于默认值，OptiFine将很乐意使用它们。\n类似地，如果颜色映射图低于256像素，它将在此高度 "达到极限"，此高度之上的方块具有相同的颜色。\n特别地，64像素的高度会使地下具有颜色变化，海平面以上具有固定颜色。\n192像素的高度和 yOffset=64 的设置正好相反：地面上具有颜色变化，地面以下具有固定的颜色。\n1像素的高度允许生物群系之间的颜色变化，但不允许颜色随高度变化。')]),t._v(" "),a("h2",{attrs:{id:"参考文献丨references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献丨references"}},[t._v("#")]),t._v(" 参考文献丨References")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("https://bitbucket.org/prupe/mcpatcher/wiki/Biome_Palettes_(Grid)\nhttp://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/resource-pack-discussion/1255785-b?comment=124")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);