(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{420:function(e,t,s){"use strict";s.r(t);var n=s(29),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"responseview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#responseview"}},[e._v("#")]),e._v(" ResponseView "),s("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),e._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[e._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[e._v("import")]),e._v(" { ResponseView } "),s("span",{staticClass:"token keyword"},[e._v("from")]),e._v(" "),s("span",{staticClass:"token string"},[e._v('"@tsed/common"')])])])]),s("tr",[s("th",[e._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.44.11/packages/common/src/mvc/decorators/method/responseView.ts#L0-L0"}},[e._v("/packages/common/src/mvc/decorators/method/responseView.ts")])])])])])]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("function "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ResponseView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("viewPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" viewOptions?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),s("div",{pre:!0},[s("p",[e._v("Renders a view and sends the rendered HTML string to the client. Optional parameter:")]),e._v(" "),s("ul",[s("li",[e._v("viewOptions, an object whose properties define local variables for the view.")])]),e._v(" "),s("p",[e._v("The view argument is a string that is the file path of the view file to render.\nThis can be an absolute path, or a path relative to the views setting.\nIf the path does not contain a file extension, then the view engine setting determines the file extension.\nIf the path does contain a file extension, then Express will load the module for the specified template engine (via require())\nand render it using the loaded module’s __express function.")]),e._v(" "),s("p",[e._v("For more information, see "),s("a",{pre:!0,attrs:{href:"http://expressjs.com/guide/using-template-engines.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using template engines with Express"),s("OutboundLink",{pre:!0})],1),e._v(".")]),e._v(" "),s("blockquote",[s("p",[e._v("NOTE: The view argument performs file system operations like reading a file from disk and evaluating Node.js modules,\nand as so for security reasons should not contain input from the end-user.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);