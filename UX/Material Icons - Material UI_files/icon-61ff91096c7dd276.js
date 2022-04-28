(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57389],{889124:function(e,o,n){var t={"./icon-pt.json":997421,"./icon-zh.json":600025,"./icon.json":871049,"docs/translations/api-docs/icon/icon-pt.json":997421,"docs/translations/api-docs/icon/icon-zh.json":600025,"docs/translations/api-docs/icon/icon.json":871049};function i(e){var o=s(e);return n(o)}function s(e){if(!n.o(t,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=s,e.exports=i,i.id=889124},474404:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return r}});n(827378);var t=n(888233),i=n(631506),s=JSON.parse('{"props":{"baseClassName":{"type":{"name":"string"},"default":"\'material-icons\'"},"children":{"type":{"name":"node"}},"classes":{"type":{"name":"object"}},"color":{"type":{"name":"union","description":"\'inherit\'<br>&#124;&nbsp;\'action\'<br>&#124;&nbsp;\'disabled\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'secondary\'<br>&#124;&nbsp;\'error\'<br>&#124;&nbsp;\'info\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'<br>&#124;&nbsp;string"},"default":"\'inherit\'"},"component":{"type":{"name":"elementType"}},"fontSize":{"type":{"name":"union","description":"\'inherit\'<br>&#124;&nbsp;\'large\'<br>&#124;&nbsp;\'medium\'<br>&#124;&nbsp;\'small\'<br>&#124;&nbsp;string"},"default":"\'medium\'"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"}}},"name":"Icon","styles":{"classes":["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeLarge"],"globalClasses":{},"name":"MuiIcon"},"spread":true,"forwardsRefTo":"HTMLSpanElement","filename":"/packages/mui-material/src/Icon/Icon.js","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/icons/\\">Icons</a></li>\\n<li><a href=\\"/material-ui/material-icons/\\">Material icons</a></li></ul>","cssComponent":false}'),a=n(824246);function r(e){var o=e.descriptions,n=e.pageContent;return(0,a.jsx)(t.Z,{descriptions:o,pageContent:n})}r.getInitialProps=function(){var e=n(889124);return{descriptions:(0,i.Z)(e),pageContent:s}}},17486:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/icon",function(){return n(474404)}])},997421:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"baseClassName":"The base class applied to the icon. Defaults to &#39;material-icons&#39;, but can be changed to any other base class that suits the icon font you&#39;re using (e.g. material-icons-rounded, fas, etc).","children":"The name of the icon font ligature.","classes":"Sobrescreve ou extende os estilos aplicados para o componente. Veja a <a href=\\"#css\\">API CSS</a> abaixo para maiores detalhes.","color":"The color of the component. It supports both default and custom theme colors, which can be added as shown in the <a href=\\"https://mui.com/material-ui/customization/palette/#adding-new-colors\\">palette customization guide</a>.","component":"The component used for the root node. Either a string to use a HTML element or a component.","fontSize":"The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.","sx":"The system prop that allows defining system overrides as well as additional CSS styles. See the <a href=\\"/system/basics/#the-sx-prop\\">`sx` page</a> for more details."},"classDescriptions":{"root":{"description":"Estilos aplicados ao elemento raiz."},"colorPrimary":{"description":"Estilos aplicados para {{nodeName}} se {{conditions}}.","nodeName":"o elemento raiz","conditions":"<code>color=\\"primary\\"</code>"},"colorSecondary":{"description":"Estilos aplicados para {{nodeName}} se {{conditions}}.","nodeName":"o elemento raiz","conditions":"<code>color=\\"secondary\\"</code>"},"colorAction":{"description":"Estilos aplicados para {{nodeName}} se {{conditions}}.","nodeName":"o elemento raiz","conditions":"<code>color=\\"action\\"</code>"},"colorError":{"description":"Estilos aplicados para {{nodeName}} se {{conditions}}.","nodeName":"o elemento raiz","conditions":"<code>color=\\"error\\"</code>"},"colorDisabled":{"description":"Estilos aplicados para {{nodeName}} se {{conditions}}.","nodeName":"o elemento raiz","conditions":"<code>color=\\"disabled\\"</code>"},"fontSizeInherit":{"description":"Estilos aplicados para {{nodeName}} se {{conditions}}.","nodeName":"o elemento raiz","conditions":"<code>fontSize=\\"inherit\\"</code>"},"fontSizeSmall":{"description":"Estilos aplicados para {{nodeName}} se {{conditions}}.","nodeName":"o elemento raiz","conditions":"<code>fontSize=\\"small\\"</code>"},"fontSizeLarge":{"description":"Estilos aplicados para {{nodeName}} se {{conditions}}.","nodeName":"o elemento raiz","conditions":"<code>fontSize=\\"large\\"</code>"}}}')},600025:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"baseClassName":"\u4e3aIcon\u6dfb\u52a0\u57fa\u7c7b\u540d\u3002 \u9ed8\u8ba4\u503c\u4e3a &#39;material-icons&#39;\u4f46\u53ef\u4ee5\u66f4\u6539\u4e3a\u66f4\u9002\u5408\u4f60\u7684\u5176\u4ed6\u540d\u79f0 (\u6bd4\u5982\uff1amaterial-icons-rounded, fas, \u7b49\u7b49)\u3002","children":"Icon\u5b50\u8282\u70b9\u540d","classes":"Override or extend the styles applied to the component. See <a href=\\"#css\\">CSS API</a> below for more details.","color":"The color of the component. It supports both default and custom theme colors, which can be added as shown in the <a href=\\"https://mui.com/material-ui/customization/palette/#adding-new-colors\\">palette customization guide</a>.","component":"The component used for the root node. Either a string to use a HTML element or a component.","fontSize":"\u56fe\u6807\u7684\u5927\u5c0f\u3002\u9ed8\u8ba4\u4e3a 24px\uff0c\u4f46\u53ef\u8bbe\u7f6e\u4e3a\u7ee7\u627f\u5b57\u4f53\u5927\u5c0f\u3002","sx":"The system prop that allows defining system overrides as well as additional CSS styles. See the <a href=\\"/system/basics/#the-sx-prop\\">`sx` page</a> for more details."},"classDescriptions":{"root":{"description":"Styles applied to the root element."},"colorPrimary":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"primary\\"</code>"},"colorSecondary":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"secondary\\"</code>"},"colorAction":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"action\\"</code>"},"colorError":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"error\\"</code>"},"colorDisabled":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"disabled\\"</code>"},"fontSizeInherit":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"inherit\\"</code>"},"fontSizeSmall":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"small\\"</code>"},"fontSizeLarge":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"large\\"</code>"}}}')},871049:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"baseClassName":"The base class applied to the icon. Defaults to &#39;material-icons&#39;, but can be changed to any other base class that suits the icon font you&#39;re using (e.g. material-icons-rounded, fas, etc).","children":"The name of the icon font ligature.","classes":"Override or extend the styles applied to the component. See <a href=\\"#css\\">CSS API</a> below for more details.","color":"The color of the component. It supports both default and custom theme colors, which can be added as shown in the <a href=\\"https://mui.com/material-ui/customization/palette/#adding-new-colors\\">palette customization guide</a>.","component":"The component used for the root node. Either a string to use a HTML element or a component.","fontSize":"The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.","sx":"The system prop that allows defining system overrides as well as additional CSS styles. See the <a href=\\"/system/the-sx-prop/\\">`sx` page</a> for more details."},"classDescriptions":{"root":{"description":"Styles applied to the root element."},"colorPrimary":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"primary\\"</code>"},"colorSecondary":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"secondary\\"</code>"},"colorAction":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"action\\"</code>"},"colorError":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"error\\"</code>"},"colorDisabled":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"disabled\\"</code>"},"fontSizeInherit":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"inherit\\"</code>"},"fontSizeSmall":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"small\\"</code>"},"fontSizeLarge":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"large\\"</code>"}}}')}},function(e){e.O(0,[64631,31194,72773,31659,16950,37141,59771,63463,61980,45387,892,2798,30170,20365,60630,25747,18049,26035,85244,67414,90478,30016,53384,49774,92888,40179],(function(){return o=17486,e(e.s=o);var o}));var o=e.O();_N_E=o}]);