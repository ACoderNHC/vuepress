(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{271:function(t,a,s){"use strict";s.r(a);var n=s(38),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js-调用原生方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-调用原生方法","aria-hidden":"true"}},[t._v("#")]),t._v(" js 调用原生方法")]),t._v(" "),s("h3",{attrs:{id:"基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 推荐先判断是否有native方法存在\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dsBridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasNativeMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcTime.msgCloseWindow'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dsBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcTime.msgCloseWindow'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"getuserinfo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getuserinfo","aria-hidden":"true"}},[t._v("#")]),t._v(" getUserInfo")]),t._v(" "),s("p",[t._v("获取用户信息")]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v("  userInfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dsBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcTime.shopGetUserInfo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"shopaddorderv2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shopaddorderv2","aria-hidden":"true"}},[t._v("#")]),t._v(" shopAddOrderV2")]),t._v(" "),s("p",[t._v("调用原生下单或支付。带order_no即为支付")]),t._v(" "),s("h3",{attrs:{id:"-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-2","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("@param arg arg description\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" orderNo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"order_no"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  int\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" uid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uid"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" string\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" payId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pay_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" int\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" skuId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sku_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" int\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" giftSkuId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gift_sku_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" int\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" productType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"product_type"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" int\n @param completionHandler completionHandler   json "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("支付成功"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("支付失败"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"order_no"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"errorMsg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n \n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dsBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcTime.shopAddOrderV2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"pageloaded"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pageloaded","aria-hidden":"true"}},[t._v("#")]),t._v(" pageLoaded")]),t._v(" "),s("p",[t._v("弹窗告诉native设置标题栏菜单项目，每次弹窗页面的js记载立即调用")]),t._v(" "),s("h3",{attrs:{id:"-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-3","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 弹窗告诉native设置标题栏菜单项目，每次弹窗页面的js记载立即调用\n * @param \n *  hasNativeBar //是否有顶栏\n * menuType:0 //标题栏菜单项目 0：默认没有\n */")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dsBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcTime.pageLoaded'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    hasNativeBar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    menuType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"courseloaded"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#courseloaded","aria-hidden":"true"}},[t._v("#")]),t._v(" courseLoaded")]),t._v(" "),s("p",[t._v("课件图片等资源加载完毕调用----用于告诉原生课件资源已经加载完成了。\nobj 课件加载完毕回调事件")]),t._v(" "),s("h3",{attrs:{id:"-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-4","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v("  userInfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dsBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcTime.shopGetUserInfo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"pageerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pageerror","aria-hidden":"true"}},[t._v("#")]),t._v(" pageError")]),t._v(" "),s("p",[t._v("上报错误接口")]),t._v(" "),s("h3",{attrs:{id:"-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-5","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 上报错误接口\n     * @param\n     *  code: 错误码\n     *  errMsg: 错误信息，用于App端显示给用户，为''空字符时不显示错误，只做错误上报\n     *  msg: 错误的详细信息，可以是出错的文件、行号、堆栈等信息，以便定位问题\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dsBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcTime.pageError'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1001")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        errMsg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'网络连接失败'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'详细错误信息'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"clearwebviewcache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clearwebviewcache","aria-hidden":"true"}},[t._v("#")]),t._v(" clearWebViewCache")]),t._v(" "),s("p",[t._v("清理缓存")]),t._v(" "),s("h3",{attrs:{id:"-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-6","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n       @param obj {"need_clear": true/false}\n     */')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dsBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcTime.need_clear'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"need_clear"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"startrecord"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#startrecord","aria-hidden":"true"}},[t._v("#")]),t._v(" startRecord")]),t._v(" "),s("p",[t._v("开始录音")]),t._v(" "),s("h3",{attrs:{id:"-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-7","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n * 开始录音\n * @param data {"read_content":"ball","read_type":"sentence","tid":138,"timeout":8}\n * @param handler\n * @return\n */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startRecord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Object data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CompletionHandler handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"read_content"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ball"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"read_type"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sentence"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tid"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("138")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timeout"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"stoprecord"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stoprecord","aria-hidden":"true"}},[t._v("#")]),t._v(" stopRecord")]),t._v(" "),s("p",[t._v("停止录音")]),t._v(" "),s("h3",{attrs:{id:"-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-8","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n *\n * @param data  {"id":"1541671330606T"}\n * @param handler\n * @return\n */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopRecord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CompletionHandler handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"cancelrecord"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cancelrecord","aria-hidden":"true"}},[t._v("#")]),t._v(" cancelRecord")]),t._v(" "),s("p",[t._v("终止录音")]),t._v(" "),s("h3",{attrs:{id:"-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-9","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n *\n * @param data  {"id":"1541671330606T"}\n * @param handler\n * @return\n */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancelRecord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CompletionHandler handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"sharestudyreport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sharestudyreport","aria-hidden":"true"}},[t._v("#")]),t._v(" shareStudyReport")]),t._v(" "),s("p",[t._v("学习报告分享数据")]),t._v(" "),s("h3",{attrs:{id:"-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-10","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n *\n  *title\n*description\n*thumb\n*webUrl\n*type // type: 1-图片, 2-网页, 默认网页\n*channel //channel:1 - 朋友圈  2- message， 默认dialog\n*base64Img  这个是用来传截图的\n */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dsBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcTime.shareStudyReport'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title\n    description\n    thumb\n    webUrl\n    type "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// type: 1-图片, 2-网页, 默认网页")]),t._v("\n    channel "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//channel:1 - 朋友圈  2- message， 默认dialog")]),t._v("\n    base64Img  这个是用来传截图的\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);