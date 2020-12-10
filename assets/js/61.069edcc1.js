(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{484:function(t,a,s){"use strict";s.r(a);var e=s(27),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("center",[s("h1",[t._v("连接材质")]),s("p",[t._v("Connected Textures")])]),t._v(" "),s("h2",{attrs:{id:"ctm丨connected-textures-mod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ctm丨connected-textures-mod"}},[t._v("#")]),t._v(" CTM丨Connected Textures mod")]),t._v(" "),s("p",[t._v("连接材质，原先是MCPatcher的功能，它提供了一系列连接方块材质的方法。")]),t._v(" "),s("p",[t._v("如果你想要某个方块(block)或者图块(tile)覆盖上连接材质或者随机材质，\n请在材质包的optifine/ctm文件夹下新建一个后缀为.properties的文件。\n属性(properties)文件可以放在optifine/ctm的任意一层子文件夹下。")]),t._v(" "),s("p",[t._v('译注：这里所谓的 "图块（tile）" 指的就是assets里面的一张张图片，虽然译名标准化里tile是不翻译的，但是tile在某些情境下可以翻译成"方块"，为了避免混淆，还是按照感觉给出个译名。')]),t._v(" "),s("p",[t._v("针对不同需求和限制，可以使用不同的连接方块材质的方法。\n下面将介绍如何使用每种方法。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("所有属性名称都区分大小写。\n除非另有说明，否则所有的路径都相对于assets/minecraft。")])]),t._v(" "),s("h2",{attrs:{id:"公共属性丨general-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共属性丨general-properties"}},[t._v("#")]),t._v(" 公共属性丨General properties")]),t._v(" "),s("p",[s("strong",[t._v("(可选) 列出这个方法所应用于的方块/图块")])]),t._v(" "),s("p",[t._v("同一个方块/图块可以有多个属性文件，\n它们会按照文件名的字母顺序依次加载。\n所有针对图块的属性文件会在针对方块的属性文件之前被检测，第一个匹配的属性文件会被加载。")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchTiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<需要匹配的图块列表>")]),t._v("\n")])])]),s("p",[t._v("表示原版mc中的图块，只需要使用它在textures/block中的文件名：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchTiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("dirt")]),t._v("\n")])])]),s("p",[t._v("表示模组添加的图块，你需要知道模组的名字：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchTiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("botania:blazeblock")]),t._v("\n")])])]),s("p",[t._v("译注：我使用1.12版本似乎测试出了不一样的结论，如果你用这种格式出现错误，请尝试 modid:blocks/......")]),t._v(" "),s("p",[t._v("一个CTM规则输出的图块还可以被另一个规则匹配。\n图块名称就是指向图块的完整路径。")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchTiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("optifine/ctm/mygrass/1.png")]),t._v("\n")])])]),s("p",[t._v("方块格式 （<>内为可选部分）：")]),t._v(" "),s("blockquote",[s("p",[t._v("<命名空间:>名称<:属性1=值1,值2...:属性2=值1,值2...>")])]),t._v(" "),s("p",[t._v("例如:")]),t._v(" "),s("blockquote",[s("p",[t._v("简称:      oak_stairs")]),t._v(" "),s("p",[t._v("全名:      minecraft:oak_stairs")]),t._v(" "),s("p",[t._v("名称+属性:   minecraft:oak_stairs:facing=east,west:half=bottom")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchBlocks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<方块列表 + 可选属性>")]),t._v("\n")])])]),s("p",[t._v("如果可以从文件名判断这两个属性，则可以省略它们：")]),t._v(" "),s("blockquote",[s("p",[t._v("如果文件名为 optifine/ctm/xxx/<name>.properties，则默认\nmatchTiles=<name>")]),t._v(" "),s("p",[t._v("如果文件名为 optifine/ctm/xxx/block_<name>.properties，则默认\nmatchBlocks=<name>")]),t._v(" "),s("p",[t._v("除非你明确指定了某个属性的值。")])]),t._v(" "),s("p",[s("strong",[t._v("(可选) metadata")])]),t._v(" "),s("p",[t._v("限制匹配的方块的metadata，可以是 0 到 31 的任意值。\n仅限 1.13 之前的版本。")]),t._v(" "),s("p",[t._v("译注：方块的metadata最高为16，不清楚这里可以到31的原因。")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<metadata 列表>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 权重")])]),t._v(" "),s("p",[t._v("如果多个属性文件匹配相同的方块，会使用拥有最大权重的属性文件。\n如果权重相同，会接着比较属性文件名。\n默认的权重为0。")]),t._v(" "),s("p",[s("strong",[t._v("译注：这个属性可能已经没用了，我查看了1.15.2版本的optifine源码，属性文件解析器根本不会解析weight属性。（已被sp614x承认）")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<整数>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(必需) 选择替换材质的方法")])]),t._v(" "),s("p",[t._v("可选的方法:")]),t._v(" "),s("blockquote",[s("p",[t._v("ctm: 标准ctm方法 (例如原始的ctm玻璃), 使用47个图块")]),t._v(" "),s("p",[t._v("ctm_compact: 简化ctm方法, 使用5个图块")]),t._v(" "),s("p",[t._v("horizontal: 只连接到侧面的方块 (例如书架)")]),t._v(" "),s("p",[t._v("vertical: 只连接到上方和下方的方块")]),t._v(" "),s("p",[t._v("horizontal+vertical: 优先水平连接, 无法水平连接时才垂直连接")]),t._v(" "),s("p",[t._v("vertical+horizontal: 优先垂直连接, 无法垂直连接时才水平连接")]),t._v(" "),s("p",[t._v("top: 仅连接到上方的方块 (例如砂岩)")]),t._v(" "),s("p",[t._v("random: 随机选择图块")]),t._v(" "),s("p",[t._v("repeat: 大面积重复固定的图案")]),t._v(" "),s("p",[t._v("fixed: 使用单个固定图块. 相当于只设置一个图块的随机")]),t._v(" "),s("p",[t._v("overlay: 用于方块间过渡的覆盖层, 使用17个图块")]),t._v(" "),s("p",[t._v('overlay_ctm: 方法"ctm"的overlay变体')]),t._v(" "),s("p",[t._v('overlay_random: 方法"random"的overlay变体')]),t._v(" "),s("p",[t._v('overlay_repeat: 方法"repeat"的overlay变体')]),t._v(" "),s("p",[t._v('overlay_fixed: 方法"fixed"的overlay变体')])]),t._v(" "),s("p",[t._v("如果overlay方法的处理顺序在其他方法之前，\n则可以将它们与其他方法组合在一起。（按照字母顺序）")]),t._v(" "),s("p",[t._v('方法"ctm_compact"和任何overlay方法都不兼容。')]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<方法名>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(必需) 图块列表")])]),t._v(" "),s("p",[t._v("就像方块和物品材质。每一个图块必须是一张独立的图片，\n可以用以下几种格式来表示图块：")]),t._v(" "),s("blockquote",[s("p",[t._v("0               -> 0.png")]),t._v(" "),s("p",[t._v("8-11            -> 8.png, 9.png, 10.png, 11.png")]),t._v(" "),s("p",[t._v("name          -> 文件名.png")]),t._v(" "),s("p",[t._v("name.png      -> 文件名.png")]),t._v(" "),s("p",[t._v("<skip>         -> 跳过图块，继续使用下一个CTM属性")]),t._v(" "),s("p",[t._v("<default>      -> 对方块/图块使用默认材质")]),t._v(" "),s("p",[t._v("full/path/name.png -> 完整路径/文件名.png")])]),t._v(" "),s("p",[t._v("除了最后一种格式，png文件必须和属性文件在同一个根目录下。")]),t._v(" "),s("p",[t._v("这些格式可以混合搭配，例如：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0-4 5 some/other/name.png")]),t._v("\n")])])]),s("p",[t._v('对于要跳过的空图块，overlay方法可以使用特殊的名称 "<skip>"。\noverlay方法不能使用图块名称 "<default>"。')]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<图块列表>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 连接类型")])]),t._v(" "),s("p",[t._v("即连接到毗邻方块的条件，\n告诉游戏在什么情况下应该连接两个方块的材质。")]),t._v(" "),s("blockquote",[s("p",[t._v("block: 当这个方块的id = 相邻方块的id时连接")]),t._v(" "),s("p",[t._v("tile: 当这个方块的图块 = 相邻方块的图块时连接")]),t._v(" "),s("p",[t._v("material: 当这个方块的材料 (stone, dirt, etc.) = 相邻方块的材料时连接")]),t._v(" "),s("p",[t._v("state: 当方块状态 (block + properties) = 相邻方块的状态时连接")])]),t._v(" "),s("p",[t._v("基于方块的属性文件默认为block；基于图块的属性文件默认为tile。")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<block | tile | material | state>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 面")])]),t._v(" "),s("p",[t._v("将方法的作用范围限制在方块确定的面。")]),t._v(" "),s("blockquote",[s("p",[t._v("bottom: 底面 (负y)")]),t._v(" "),s("p",[t._v("top: 顶面 (正y)")]),t._v(" "),s("p",[t._v("north: 北面 (负z)")]),t._v(" "),s("p",[t._v("south: 南面 (正z)")]),t._v(" "),s("p",[t._v("east: 东面 (正x)")]),t._v(" "),s("p",[t._v("west: 西面 (负x)")]),t._v(" "),s("p",[t._v('sides: "东面 西面 南面 北面" 的总称')]),t._v(" "),s("p",[t._v("all: 所有面")])]),t._v(" "),s("p",[t._v("不规则方块会忽视这个属性。")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("faces")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<以下的组合: north south east west top bottom sides all>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 生物群系和高度范围")])]),t._v(" "),s("p",[t._v("限定生物群系或高度范围。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://minecraft.gamepedia.com/Biome#Biome_IDs",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("列出了原版生物群系ID。\n也可以使用模组添加的生物群系。")]),t._v(" "),s("p",[t._v('旧属性 "minHeight" 和 "maxHeight" 也可以被识别。')]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("biomes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<生物群系列表>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("heights")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<高度范围>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 名字")])]),t._v(" "),s("p",[t._v("只适用于具有对应的可命名的方块实体值的方块。")]),t._v(" "),s("p",[t._v("例如:")]),t._v(" "),s("blockquote",[s("p",[t._v("beacon(信标) brewing_stand(酿造台) enchanting_table(附魔台) furnace(熔炉) dispenser(发射器) dropper(投掷器) hopper(漏斗)")])]),t._v(" "),s("p",[t._v('关于匹配名称的语法，参阅 "custom_guis.properties"。')]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<名字>")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("下文所有内容都针对特定连接材质方法。")]),t._v(" "),s("p",[t._v("每一个.properties文件都应该仅包含其中一个小节列出的属性。")])]),t._v(" "),s("h2",{attrs:{id:"标准ctm方法丨standard-8-way-connected-textures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准ctm方法丨standard-8-way-connected-textures"}},[t._v("#")]),t._v(" 标准CTM方法丨Standard 8-way connected textures")]),t._v(" "),s("blockquote",[s("p",[t._v("method=ctm")])]),t._v(" "),s("p",[s("strong",[t._v("(必需) 47个图块")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<47 tiles>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 连接相邻方块时，是否显示内边缘接缝")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("innerSeams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("false")]),t._v("\n")])])]),s("p",[s("strong",[t._v("模板：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://attachment.mcbbs.net/forum/201909/12/201902abt22lpjiy5204t5.png",alt:"模板"}})]),t._v(" "),s("p",[t._v("译注：如果你疑惑为什么需要这么多张图片，不妨亲自尝试一下")]),t._v(" "),s("h2",{attrs:{id:"简化ctm方法丨compact-8-way-connected-textures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简化ctm方法丨compact-8-way-connected-textures"}},[t._v("#")]),t._v(" 简化CTM方法丨Compact 8-way connected textures")]),t._v(" "),s("blockquote",[s("p",[t._v("method=ctm_compact")])]),t._v(" "),s("p",[t._v("译注：此方法不适用于玻璃板，详见 "),s("a",{attrs:{href:"https://github.com/sp614x/optifine/issues/463",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/sp614x/optifine/issues/463"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("(必需) 5个图块")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<5 tiles>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 连接相邻方块时，是否显示内边缘接缝")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("innerSeams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("false")]),t._v("\n")])])]),s("p",[s("strong",[t._v("模板：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://attachment.mcbbs.net/forum/201909/12/201916s6q2zj2fh11nia6f.png",alt:"模板"}})]),t._v(" "),s("h2",{attrs:{id:"有特例的ctm方法丨compact-8-way-connected-textures-with-special-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有特例的ctm方法丨compact-8-way-connected-textures-with-special-cases"}},[t._v("#")]),t._v(" 有特例的CTM方法丨Compact 8-way connected textures with special cases")]),t._v(" "),s("blockquote",[s("p",[t._v("method=ctm_compact")])]),t._v(" "),s("p",[s("strong",[t._v("(必需) 5个图块")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<5 tiles> <额外的图块>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 简化CTM图块替换")]),t._v("\n允许为特定CTM实例定义替换图块。")]),t._v(" "),s("blockquote",[s("p",[t._v("<ctm_index> 是ctm_template.png中CTM实例的序号 (0-46)")]),t._v(" "),s("p",[t._v('<tile_index> 是在 "tiles" 中定义的图块的序号 (不是文件名!)')])]),t._v(" "),s("p",[t._v('使用 "ctm_compact" 你可以定义超过5个图块，可以使用更多图块作为替代。')]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ctm.<ctm_index>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<tile_index>")]),t._v("\n")])])]),s("h2",{attrs:{id:"水平连接材质丨horizontal-only-connected-textures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#水平连接材质丨horizontal-only-connected-textures"}},[t._v("#")]),t._v(" 水平连接材质丨Horizontal-only connected textures")]),t._v(" "),s("blockquote",[s("p",[t._v("method=horizontal")])]),t._v(" "),s("p",[s("strong",[t._v("(必需) 4个图块")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<4 tiles>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("模板：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://attachment.mcbbs.net/forum/201909/12/201931f9xowx0o0tclc6jw.png",alt:"模板"}})]),t._v(" "),s("h2",{attrs:{id:"垂直连接材质丨vertical-only-connected-textures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垂直连接材质丨vertical-only-connected-textures"}},[t._v("#")]),t._v(" 垂直连接材质丨Vertical-only connected textures")]),t._v(" "),s("blockquote",[s("p",[t._v("method=vertical")])]),t._v(" "),s("p",[s("strong",[t._v("(必需) 4个图块")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<4 tiles>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("模板：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://attachment.mcbbs.net/forum/201909/12/201942s7olvxbv26pv7046.png",alt:"模板"}})]),t._v(" "),s("h2",{attrs:{id:"顶部连接材质丨top-connected-textures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顶部连接材质丨top-connected-textures"}},[t._v("#")]),t._v(" 顶部连接材质丨Top connected textures")]),t._v(" "),s("blockquote",[s("p",[t._v("method=top")])]),t._v(" "),s("p",[s("strong",[t._v("(必需) 只需要1个图块")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<单个图块>")]),t._v("\n")])])]),s("h2",{attrs:{id:"随机材质丨random-textures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#随机材质丨random-textures"}},[t._v("#")]),t._v(" 随机材质丨Random textures")]),t._v(" "),s("blockquote",[s("p",[t._v("method=random")])]),t._v(" "),s("p",[s("strong",[t._v("(必需) 任意数量的图块")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<图块列表>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 权重")])]),t._v(" "),s("p",[t._v("例如，如果")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("6-11")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("weights")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("10 1 10 2 7 3")]),t._v("\n")])])]),s("p",[t._v("那么图块6和8的权重为10，图块7权重为1，以此类推。\n权重之和不必为100或任何其他特定值。")]),t._v(" "),s("p",[t._v("在上面的例子中，图块6和图块8的使用频率分别为大约30.3%(10/(10+1+10+2+7+3))，\n依此类推。")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("weights")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<对应的权重>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 随机循环")])]),t._v(" "),s("p",[t._v("用于增加随机性的重复随机函数的次数。\n可以使不同的材质使用不同的随机样式。\n较高的值可能会降低区块加载速度。\n默认值为0。")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("randomLoops")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<0-9>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 方块的各个面的对称性")])]),t._v(" "),s("p",[t._v("只适用于标准的六面体方块。")]),t._v(" "),s("blockquote",[s("p",[t._v("none: 所有6个面都是独立材质。这是默认值。")]),t._v(" "),s("p",[t._v("opposite: 双向对称；相反的面有相同的材质，但其他面可能有不同的材质。")]),t._v(" "),s("p",[t._v("all: 六个面拥有相同的材质。")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("symmetry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<none | opposite | all>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 相邻方块之间的材质连接")])]),t._v(" "),s("p",[t._v("如果为true，OptiFine对所有多方块对象的所有部分使用相同的随机数种子，\n例如，高草丛的顶部和底部。")]),t._v(" "),s("p",[t._v('这允许你为多方块对象创建统一的随机材质。\n如果该属性为false，这两部分会被 "打乱"，也就是说，这两张材质可能会不匹配。')]),t._v(" "),s("p",[t._v("注: 要使其正常工作，你需要多个links =true的属性文件，\n以及相同数量的替换材质和相同数量的权重。")]),t._v(" "),s("p",[t._v("例如，")]),t._v(" "),s("p",[s("strong",[t._v("double_plant_top.properties：")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("random")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("grass_top1 grass_top2 grass_top3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("weights")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("1 2 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("linked")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n")])])]),s("p",[s("strong",[t._v("double_plant_bottom.properties：")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("random")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("grass_bottom1 grass_bottom2 grass_bottom3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("weights")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("1 2 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("linked")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n")])])]),s("p",[t._v("默认值为false。该连接属性目前仅适用于植物(例如甘蔗)、两格高的植物和门。")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("linked")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<true | false>")]),t._v("\n")])])]),s("h2",{attrs:{id:"重复图案材质丨repeat-pattern-textures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重复图案材质丨repeat-pattern-textures"}},[t._v("#")]),t._v(" 重复图案材质丨Repeat pattern textures")]),t._v(" "),s("blockquote",[s("p",[t._v("method=repeat")])]),t._v(" "),s("p",[s("strong",[t._v("(必需) 重复图案的宽度")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<图案宽度>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(必需) 重复图案的高度")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<图案高度>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(必需) 图块列表")]),t._v("（也就是按从左到右，从上到下的顺序列出所有图块）")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<图块列表>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 方块的各个面的对称性")])]),t._v(" "),s("p",[t._v("只适用于标准的六面体方块。默认值为none")]),t._v(" "),s("blockquote",[s("p",[t._v("none: 6个面都有材质，这样图块从所有面看上去都是一样的。\nopposite: 双向对称；相反的面具有相同的材质，这意味着与北面和西面相比，南面和东面的图块将左右镜像。")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("symmetry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<none | opposite>")]),t._v("\n")])])]),s("h2",{attrs:{id:"固定材质丨fixed-textures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#固定材质丨fixed-textures"}},[t._v("#")]),t._v(" 固定材质丨Fixed textures")]),t._v(" "),s("blockquote",[s("p",[t._v("method=fixed")])]),t._v(" "),s("p",[s("strong",[t._v("(必需) 单个图块")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<单个图块>")]),t._v("\n")])])]),s("h2",{attrs:{id:"覆盖材质丨overlay-textures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#覆盖材质丨overlay-textures"}},[t._v("#")]),t._v(" 覆盖材质丨Overlay textures")]),t._v(" "),s("blockquote",[s("p",[t._v("method=overlay")])]),t._v(" "),s("p",[s("strong",[t._v("(可选) 连接图块")])]),t._v(" "),s("p",[t._v("只连接使用指定图块的方块")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("connectTiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<图块列表>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) 连接方块")])]),t._v(" "),s("p",[t._v("只连接指定的方块")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("connectBlocks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<方块列表>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) Tint index")])]),t._v(" "),s("p",[t._v("图块材质的Tint index，\n默认为-1 (禁用)")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tintIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<index>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) Tint block")])]),t._v(" "),s("p",[t._v("用于图块材质着色的方块。\n对于相同的tint index，不同方块使用不同颜色。")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tintBlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<block>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("(可选) Layer")])]),t._v(" "),s("p",[t._v("覆盖材质应该在哪一层上被渲染。")]),t._v(" "),s("p",[t._v("值：")]),t._v(" "),s("blockquote",[s("p",[t._v("cutout_mipped - 有多级纹理的透明材质\ncutout - 没有多级纹理的透明材质\ntranslucent - 有多级纹理的半透明材质")])]),t._v(" "),s("p",[t._v('默认值为 "cutout_mipped"')]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("layer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<cutout_mipped|cutout|translucent>")]),t._v("\n")])])]),s("p",[s("strong",[t._v("模板：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://attachment.mcbbs.net/forum/201909/12/201957oug1gtbufnbuo7kf.png",alt:"模板"}})])],1)}),[],!1,null,null,null);a.default=r.exports}}]);