(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1712:function(e,t,n){"use strict";function o(e,t){if("undefined"===typeof window)return 0;var n=t?"scrollTop":"scrollLeft",o=e===window,r=o?e[t?"pageYOffset":"pageXOffset"]:e[n];return o&&"number"!==typeof r&&(r=document.documentElement[n]),r}n.d(t,"a",function(){return o})},1713:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n(66),r=n.n(o);function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e){var t,n=function(){if(null==t){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];t=r()(function(n){return function(){t=null,e.apply(void 0,i(n))}}(o))}};return n.cancel=function(){return r.a.cancel(t)},n}function l(){return function(e,t,n){var o=n.value,r=!1;return{configurable:!0,get:function(){if(r||this===e.prototype||this.hasOwnProperty(t))return o;var n=a(o.bind(this));return r=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),r=!1,n}}}}},2711:function(e,t,n){"use strict";n.r(t);var o=n(20),r=n(21),i=n(1141),a=n(29),l=n(1142),f=n(1),s=n.n(f),c=n(18),u=n(0),p=n(108),h=n(16),d=n.n(h),y=n(568),v=n.n(y),m=n(128),b=n(1712),w=n(1713);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var P=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"===typeof Reflect?"undefined":j(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};function T(e){return e!==window?e.getBoundingClientRect():{top:0,left:0,bottom:0}}function A(){}function k(){return"undefined"!==typeof window?window:null}var N=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=S(this,x(t).apply(this,arguments))).state={affixStyle:void 0,placeholderStyle:void 0},e.eventHandlers={},e.events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],e.saveFixedNode=function(t){e.fixedNode=t},e.savePlaceholderNode=function(t){e.placeholderNode=t},e}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,f["Component"]),n=t,(o=[{key:"setAffixStyle",value:function(e,t){var n=this,o=this.props,r=o.onChange,i=void 0===r?A:r,a=o.target,l=void 0===a?k:a,f=this.state.affixStyle,s=l()===window;"scroll"===e.type&&f&&t&&s||v()(t,f)||this.setState({affixStyle:t},function(){var e=!!n.state.affixStyle;(t&&!f||!t&&f)&&i(e)})}},{key:"setPlaceholderStyle",value:function(e){var t=this.state.placeholderStyle;v()(e,t)||this.setState({placeholderStyle:e})}},{key:"syncPlaceholderStyle",value:function(e){var t=this.state.affixStyle;t&&(this.placeholderNode.style.cssText="",this.setAffixStyle(e,g({},t,{width:this.placeholderNode.offsetWidth})),this.setPlaceholderStyle({width:this.placeholderNode.offsetWidth}))}},{key:"updatePosition",value:function(e){var t=this.props,n=t.offsetBottom,o=t.offset,r=t.target,i=void 0===r?k:r,a=this.props.offsetTop,l=i();a="undefined"===typeof a?o:a;var f=Object(b.a)(l,!0),s=c.findDOMNode(this),u=function(e,t){var n=e.getBoundingClientRect(),o=T(t),r=Object(b.a)(t,!0),i=Object(b.a)(t,!1),a=window.document.body,l=a.clientTop||0,f=a.clientLeft||0;return{top:n.top-o.top+r-l,left:n.left-o.left+i-f,width:n.width,height:n.height}}(s,l),p={width:this.fixedNode.offsetWidth,height:this.fixedNode.offsetHeight},h={top:!1,bottom:!1};"number"!==typeof a&&"number"!==typeof n?(h.top=!0,a=0):(h.top="number"===typeof a,h.bottom="number"===typeof n);var d=T(l),y=l.innerHeight||l.clientHeight;if(f>u.top-a&&h.top){var v=u.width,m=d.top+a;this.setAffixStyle(e,{position:"fixed",top:m,left:d.left+u.left,width:v}),this.setPlaceholderStyle({width:v,height:p.height})}else if(f<u.top+p.height+n-y&&h.bottom){var w=l===window?0:window.innerHeight-d.bottom,E=u.width;this.setAffixStyle(e,{position:"fixed",bottom:w+n,left:d.left+u.left,width:E}),this.setPlaceholderStyle({width:E,height:u.height})}else{var S=this.state.affixStyle;"resize"===e.type&&S&&"fixed"===S.position&&s.offsetWidth?this.setAffixStyle(e,g({},S,{width:s.offsetWidth})):this.setAffixStyle(e,null),this.setPlaceholderStyle(null)}"resize"===e.type&&this.syncPlaceholderStyle(e)}},{key:"componentDidMount",value:function(){var e=this,t=this.props.target||k;this.timeout=setTimeout(function(){e.setTargetEventListeners(t),e.updatePosition({})})}},{key:"componentWillReceiveProps",value:function(e){this.props.target!==e.target&&(this.clearEventListeners(),this.setTargetEventListeners(e.target),this.updatePosition({})),this.props.offsetTop===e.offsetTop&&this.props.offsetBottom===e.offsetBottom||this.updatePosition({})}},{key:"componentWillUnmount",value:function(){this.clearEventListeners(),clearTimeout(this.timeout),this.updatePosition.cancel()}},{key:"setTargetEventListeners",value:function(e){var t=this,n=e();n&&(this.clearEventListeners(),this.events.forEach(function(e){t.eventHandlers[e]=Object(p.a)(n,e,t.updatePosition)}))}},{key:"clearEventListeners",value:function(){var e=this;this.events.forEach(function(t){var n=e.eventHandlers[t];n&&n.remove&&n.remove()})}},{key:"render",value:function(){var e,t,n,o=d()((e={},t=this.props.prefixCls||"ant-affix",n=this.state.affixStyle,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e)),r=Object(m.a)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]),i=g({},this.state.placeholderStyle,this.props.style);return f.createElement("div",g({},r,{style:i,ref:this.savePlaceholderNode}),f.createElement("div",{className:o,ref:this.saveFixedNode,style:this.state.affixStyle},this.props.children))}}])&&E(n.prototype,o),r&&E(n,r),t}();N.propTypes={offsetTop:u.number,offsetBottom:u.number,target:u.func},P([Object(w.a)()],N.prototype,"updatePosition",null);var C=n(1149);n.d(t,"default",function(){return B});var B=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",null," Basic Affix "),s.a.createElement(N,null,s.a.createElement(C.a,{type:"primary"},"Affix top")),s.a.createElement("br",null),s.a.createElement(N,{offsetBottom:0},s.a.createElement(C.a,{type:"primary"},"Affix bottom")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h2",null," Containter to Scroll Affix "),s.a.createElement("div",{className:"scrollable-container",ref:function(t){e.container=t}},s.a.createElement("div",{className:"background"},s.a.createElement(N,{target:function(){return e.container}},s.a.createElement(C.a,{type:"primary"},"Fixed at the top of container")))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h2",null," Affix with Callback "),s.a.createElement(N,{offsetTop:120,onChange:function(e){}},s.a.createElement(C.a,null,"120px to affix top")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null))}}]),t}(f.Component)}}]);
//# sourceMappingURL=62.43beef41.chunk.js.map