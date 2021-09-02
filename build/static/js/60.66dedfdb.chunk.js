(window.webpackJsonp=window.webpackJsonp||[]).push([[60,127,128,129,130],{1189:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e.n(r),i=e(33);function o(){var t=Object(i.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return o=function(){return t},t}var l=e(27).c.div(o());n.default=function(t){return a.a.createElement(l,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},1190:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e.n(r),i=e(33),o=e(27),l=e(5);function c(){var t=Object(i.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return c=function(){return t},t}function s(){var t=Object(i.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return s=function(){return t},t}var u=o.c.h3(s(),Object(l.palette)("text",0)),p=o.c.p(c(),Object(l.palette)("text",3)),d=function(t){return a.a.createElement("div",null,t.title?a.a.createElement(u,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?a.a.createElement(p,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function f(){var t=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return f=function(){return t},t}var h=o.c.div(f(),Object(l.palette)("border",0),"");n.default=function(t){return a.a.createElement(h,{className:"".concat(t.className," isoBoxWrapper"),style:t.style},a.a.createElement(d,{title:t.title,subtitle:t.subtitle}),t.children)}},1191:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e.n(r),i=e(33),o=e(27),l=e(5),c=e(49);function s(){var t=Object(i.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return t},t}var u=o.c.h1(s(),Object(l.palette)("secondary",2),Object(l.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(l.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),p=Object(c.a)(u);n.default=function(t){return a.a.createElement(p,{className:"isoComponentTitle"},t.children)}},1264:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e.n(r),i=e(33),o=e(27),l=e(5),c=e(49);function s(){var t=Object(i.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return s=function(){return t},t}var u=o.c.div(s(),function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(l.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),p=Object(c.a)(u);n.default=function(t){return a.a.createElement(p,{className:"isoExampleWrapper",style:t.style},t.children)}},1269:function(t,n,e){"use strict";var r={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};n.a=r},1350:function(t,n,e){"use strict";var r=e(1),a=e(0),i=e(16),o=e.n(i),l=e(128),c=e(107);function s(t){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function p(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function d(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,n){return(m=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var b=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)n.indexOf(r[a])<0&&(e[r[a]]=t[r[a]])}return e},g=Object(c.a)("small","default","large"),y=null;function x(t,n){return!!t&&!!n&&!isNaN(Number(n))}var v=function(t){function n(t){var e;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(e=f(this,h(n).call(this,t))).delayUpdateSpinning=function(){var t=e.props.spinning;e.state.spinning!==t&&e.setState({spinning:t})};var r=t.spinning,a=t.delay;return e.state={spinning:r&&!x(r,a)},e}var e,a,i;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&m(t,n)}(n,r["Component"]),e=n,i=[{key:"setDefaultIndicator",value:function(t){y=t}}],(a=[{key:"isNestedPattern",value:function(){return!(!this.props||!this.props.children)}},{key:"componentWillUnmount",value:function(){this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"componentDidUpdate",value:function(){var t=this,n=this.state.spinning,e=this.props.spinning;if(n!==e){var r=this.props.delay;this.debounceTimeout&&clearTimeout(this.debounceTimeout),n&&!e?(this.debounceTimeout=window.setTimeout(function(){return t.setState({spinning:e})},200),this.delayTimeout&&clearTimeout(this.delayTimeout)):x(e,r)?(this.delayTimeout&&clearTimeout(this.delayTimeout),this.delayTimeout=window.setTimeout(this.delayUpdateSpinning,r)):this.setState({spinning:e})}}},{key:"render",value:function(){var t,n=this.props,e=n.className,a=n.size,i=n.prefixCls,c=n.tip,s=n.wrapperClassName,d=n.style,f=b(n,["className","size","prefixCls","tip","wrapperClassName","style"]),h=this.state.spinning,m=o()(i,(p(t={},"".concat(i,"-sm"),"small"===a),p(t,"".concat(i,"-lg"),"large"===a),p(t,"".concat(i,"-spinning"),h),p(t,"".concat(i,"-show-text"),!!c),t),e),g=Object(l.a)(f,["spinning","delay","indicator"]),x=r.createElement("div",u({},g,{style:d,className:m}),function(t){var n=t.prefixCls,e=t.indicator,a="".concat(n,"-dot");return r.isValidElement(e)?r.cloneElement(e,{className:o()(e.props.className,a)}):r.isValidElement(y)?r.cloneElement(y,{className:o()(y.props.className,a)}):r.createElement("span",{className:o()(a,"".concat(n,"-dot-spin"))},r.createElement("i",null),r.createElement("i",null),r.createElement("i",null),r.createElement("i",null))}(this.props),c?r.createElement("div",{className:"".concat(i,"-text")},c):null);if(this.isNestedPattern()){var v=o()("".concat(i,"-container"),p({},"".concat(i,"-blur"),h));return r.createElement("div",u({},g,{className:o()("".concat(i,"-nested-loading"),s)}),h&&r.createElement("div",{key:"loading"},x),r.createElement("div",{className:v,key:"container"},this.props.children))}return x}}])&&d(e.prototype,a),i&&d(e,i),n}();v.defaultProps={prefixCls:"ant-spin",spinning:!0,size:"default",wrapperClassName:""},v.propTypes={prefixCls:a.string,className:a.string,spinning:a.bool,size:a.oneOf(g),wrapperClassName:a.string,indicator:a.element},n.a=v},1388:function(t,n,e){t.exports=e(1389)},1389:function(t,n,e){"use strict";e.r(n);var r=e(7),a=e.n(r),i=e(41),o=e.n(i),l=e(45),c=e.n(l),s=e(15),u=e.n(s),p=e(42),d=e.n(p),f=e(12),h=e.n(f),m=e(17),b=e.n(m),g=e(1),y=e.n(g),x=e(0),v=e.n(x),w=e(16);function O(){}var k=function(t){function n(t){u()(this,n);var e=h()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));E.call(e);var r=!1;return r="checked"in t?!!t.checked:!!t.defaultChecked,e.state={checked:r},e}return b()(n,t),d()(n,[{key:"componentDidMount",value:function(){var t=this.props,n=t.autoFocus,e=t.disabled;n&&!e&&this.focus()}},{key:"componentWillReceiveProps",value:function(t){"checked"in t&&this.setState({checked:!!t.checked})}},{key:"setChecked",value:function(t){this.props.disabled||("checked"in this.props||this.setState({checked:t}),this.props.onChange(t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var t,n=this.props,e=n.className,r=n.prefixCls,i=n.disabled,l=n.loadingIcon,s=n.checkedChildren,u=n.unCheckedChildren,p=c()(n,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),d=this.state.checked,f=w((t={},o()(t,e,!!e),o()(t,r,!0),o()(t,r+"-checked",d),o()(t,r+"-disabled",i),t));return y.a.createElement("button",a()({},p,{type:"button",role:"switch","aria-checked":d,disabled:i,className:f,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.toggle,onMouseUp:this.handleMouseUp}),l,y.a.createElement("span",{className:r+"-inner"},d?s:u))}}]),n}(g.Component),E=function(){var t=this;this.toggle=function(){var n=t.props.onClick,e=!t.state.checked;t.setChecked(e),n(e)},this.handleKeyDown=function(n){37===n.keyCode?t.setChecked(!1):39===n.keyCode&&t.setChecked(!0)},this.handleMouseUp=function(n){t.node&&t.node.blur(),t.props.onMouseUp&&t.props.onMouseUp(n)},this.saveNode=function(n){t.node=n}};k.propTypes={className:v.a.string,prefixCls:v.a.string,disabled:v.a.bool,checkedChildren:v.a.any,unCheckedChildren:v.a.any,onChange:v.a.func,onMouseUp:v.a.func,onClick:v.a.func,tabIndex:v.a.number,checked:v.a.bool,defaultChecked:v.a.bool,autoFocus:v.a.bool,loadingIcon:v.a.node},k.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1,onChange:O,onClick:O},n.default=k},1443:function(t,n,e){"use strict";var r=e(1556),a=e(33),i=e(27),o=e(5);function l(){var t=Object(a.a)(["\n  &.ant-switch-checked {\n    border-color: ",";\n    background-color: ",";\n  }\n"]);return l=function(){return t},t}var c=function(t){return Object(i.c)(t)(l(),Object(o.palette)("primary",0),Object(o.palette)("primary",0))}(r.a);n.a=c},1556:function(t,n,e){"use strict";e.d(n,"a",function(){return x});var r=e(1),a=e(0),i=e(1388),o=e.n(i),l=e(16),c=e.n(l),s=e(128),u=e(1154),p=e(1136);function d(t){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(){return(f=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function h(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function m(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,n){return!n||"object"!==d(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,n){return(y=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var x=function(t){function n(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=b(this,g(n).apply(this,arguments))).saveSwitch=function(n){t.rcSwitch=n},t}var e,a,i;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&y(t,n)}(n,r["Component"]),e=n,(a=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){var t,n=this.props,e=n.prefixCls,a=n.size,i=n.loading,l=n.className,d=void 0===l?"":l,m=n.disabled,b=c()(d,(h(t={},"".concat(e,"-small"),"small"===a),h(t,"".concat(e,"-loading"),i),t)),g=i?r.createElement(p.a,{type:"loading",className:"".concat(e,"-loading-icon")}):null;return r.createElement(u.a,{insertExtraNode:!0},r.createElement(o.a,f({},Object(s.a)(this.props,["loading"]),{className:b,disabled:m||i,ref:this.saveSwitch,loadingIcon:g})))}}])&&m(e.prototype,a),i&&m(e,i),n}();x.defaultProps={prefixCls:"ant-switch"},x.propTypes={prefixCls:a.string,size:a.oneOf(["small","default","large"]),className:a.string}},1754:function(t,n,e){"use strict";var r=e(33),a=e(1),i=e.n(a),o=e(2625),l=e(27),c=e(5),s=e(49);function u(){var t=Object(r.a)(["\n  && {\n    color: ",";\n    font-size: 12px;\n  }\n\n  &&.ant-alert-success {\n    .ant-alert-icon {\n      color: ",";\n    }\n  }\n\n  &&.ant-alert-error {\n    .ant-alert-icon {\n      color: ",";\n    }\n  }\n\n  &&.ant-alert-with-description {\n    padding: ",";\n    .ant-alert-message {\n      font-weight: 500;\n      color: ",";\n    }\n\n    .ant-alert-description {\n      color: ",";\n      font-size: 12px;\n    }\n\n    .ant-alert-icon {\n      top: 20px;\n      left: ",";\n      right: ",";\n    }\n    &&.ant-alert-no-icon {\n      padding: ",";\n    }\n    .ant-alert-close-icon {\n      right: ",";\n      left: ",";\n    }\n  }\n  &&.ant-alert-no-icon {\n    padding: ",";\n  }\n  .ant-alert-close-icon {\n    right: ",";\n    left: ",";\n  }\n"]);return u=function(){return t},t}var p=Object(l.c)(function(t){return i.a.createElement(o.a,t)})(u(),Object(c.palette)("text",1),Object(c.palette)("success",0),Object(c.palette)("error",0),function(t){return"rtl"===t["data-rtl"]?"16px 60px 16px 16px":"16px 16px 16px 60px"},Object(c.palette)("text",0),Object(c.palette)("text",1),function(t){return"rtl"===t["data-rtl"]?"inherit":"20px"},function(t){return"rtl"===t["data-rtl"]?"20px":"inherit"},function(t){return"rtl"===t["data-rtl"]?"12px 16px 12px 48px":"12px 48px 12px 16px"},function(t){return"rtl"===t["data-rtl"]?"inherit":"16px"},function(t){return"rtl"===t["data-rtl"]?"16px":"inherit"},function(t){return"rtl"===t["data-rtl"]?"12px 16px 12px 48px":"12px 48px 12px 16px"},function(t){return"rtl"===t["data-rtl"]?"inherit":"16px"},function(t){return"rtl"===t["data-rtl"]?"16px":"inherit"}),d=Object(s.a)(p);n.a=d},2681:function(t,n,e){"use strict";e.r(n);var r=e(20),a=e(21),i=e(1141),o=e(29),l=e(1142),c=e(1),s=e.n(c),u=e(1280),p=e(1282),d=e(1754),f=e(1443),h=e(1191),m=e(1190),b=e(1189),g=e(1264),y=e(1269),x=e(184),v=e(33),w=e(1350).a,O=e(27),k=e(5);function E(){var t=Object(v.a)(["\n  && {\n    .ant-spin-dot {\n      i {\n        background-color: ",";\n      }\n    }\n  }\n"]);return E=function(){return t},t}var j=Object(O.c)(function(t){return s.a.createElement(w,t)})(E(),Object(k.palette)("primary",0));e.d(n,"default",function(){return C});var C=function(t){function n(){var t,e;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=Object(i.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(l)))).state={loading:!1},e.toggle=function(t){e.setState({loading:t})},e}return Object(l.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){var t=s.a.createElement(d.a,{message:s.a.createElement(x.a,{id:"feedback.alert.spin.alertTitle"}),description:s.a.createElement(x.a,{id:"feedback.alert.spin.alertDescription"}),type:"info"}),n=y.a.rowStyle,e=y.a.colStyle,r=y.a.gutter;return s.a.createElement(b.default,null,s.a.createElement(h.default,null,s.a.createElement(x.a,{id:"feedback.alert.spin"})),s.a.createElement(u.a,{style:n,gutter:r,justify:"start"},s.a.createElement(p.a,{md:12,sm:12,xs:24,style:e},s.a.createElement(m.default,{title:s.a.createElement(x.a,{id:"feedback.alert.spin.basicTitle"})},s.a.createElement(g.default,null,s.a.createElement(j,{size:"small"}),"\xa0\xa0\xa0",s.a.createElement(j,null),"\xa0\xa0\xa0",s.a.createElement(j,{size:"large"}),"\xa0\xa0\xa0"))),s.a.createElement(p.a,{md:12,sm:12,xs:24,style:e},s.a.createElement(m.default,{title:s.a.createElement(x.a,{id:"feedback.alert.spin.background"})},s.a.createElement(g.default,null,s.a.createElement("div",{style:{textAlign:"center",background:"#f1f3f6",padding:"30px 50px"}},s.a.createElement(j,null)))))),s.a.createElement(u.a,{style:n,gutter:r,justify:"start"},s.a.createElement(p.a,{md:12,sm:12,xs:24,style:e},s.a.createElement(m.default,{title:s.a.createElement(x.a,{id:"feedback.alert.spin.backgroundDescription"})},s.a.createElement(g.default,null,s.a.createElement("div",{style:{marginBottom:"20px"}},s.a.createElement(j,{spinning:this.state.loading},t)),s.a.createElement(x.a,{id:"feedback.alert.spin.loadingState"}),s.a.createElement(f.a,{checked:this.state.loading,onChange:this.toggle}))))))}}]),n}(c.Component)}}]);
//# sourceMappingURL=60.66dedfdb.chunk.js.map