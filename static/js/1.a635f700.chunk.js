webpackJsonp([1],Array(136).concat([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(183),o=n(18),i=n(160),c=(n.n(i),n(261)),u=n(193),a=n(262),s=n(264),p=Object(i.createStructuredSelector)({currentNoteID:Object(u.a)()}),f=function(t){return{selectNote:function(e){return t(Object(c.a)(e))}}};e.default=o.compose.apply(void 0,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(a.a).concat([Object(r.a)(p,f)]))(s.a)},,,,function(t,e,n){var r=n(164),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},,,function(t,e,n){function r(t){return null==t?void 0===t?a:u:s&&s in Object(t)?i(t):c(t)}var o=n(163),i=n(202),c=n(203),u="[object Null]",a="[object Undefined]",s=o?o.toStringTag:void 0;t.exports=r},function(t,e,n){function r(t,e){var n=i(t,e);return o(n)?n:void 0}var o=n(215),i=n(218);t.exports=r},,,,function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e,n){function r(t){if(!i(t))return!1;var e=o(t);return e==u||e==a||e==c||e==s}var o=n(143),i=n(152),c="[object AsyncFunction]",u="[object Function]",a="[object GeneratorFunction]",s="[object Proxy]";t.exports=r},function(t,e,n){"use strict";function r(t){"undefined"!==typeof console&&"function"===typeof console.error&&console.error(t);try{throw new Error(t)}catch(t){}}e.a=r},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},,,,function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return c});var r=n(16),o=n.n(r),i=o.a.shape({trySubscribe:o.a.func.isRequired,tryUnsubscribe:o.a.func.isRequired,notifyNestedSubs:o.a.func.isRequired,isSubscribed:o.a.func.isRequired}),c=o.a.shape({subscribe:o.a.func.isRequired,dispatch:o.a.func.isRequired,getState:o.a.func.isRequired})},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function u(){}function a(t,e){var n={run:function(r){try{var o=t(e.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(t){n.shouldComponentUpdate=!0,n.error=t}}};return n}function s(t){var e,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=s.getDisplayName,l=void 0===p?function(t){return"ConnectAdvanced("+t+")"}:p,g=s.methodName,m=void 0===g?"connectAdvanced":g,w=s.renderCountProp,x=void 0===w?void 0:w,S=s.shouldHandleStateChanges,P=void 0===S||S,E=s.storeKey,C=void 0===E?"store":E,N=s.withRef,A=void 0!==N&&N,T=c(s,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),_=C+"Subscription",R=j++,M=(e={},e[C]=h.a,e[_]=h.b,e),q=(n={},n[_]=h.b,n);return function(e){d()("function"==typeof e,"You must pass a component to the function returned by connect. Instead received "+JSON.stringify(e));var n=e.displayName||e.name||"Component",c=l(n),s=v({},T,{getDisplayName:l,methodName:m,renderCountProp:x,shouldHandleStateChanges:P,storeKey:C,withRef:A,displayName:c,wrappedComponentName:n,WrappedComponent:e}),p=function(n){function p(t,e){r(this,p);var i=o(this,n.call(this,t,e));return i.version=R,i.state={},i.renderCount=0,i.store=t[C]||e[C],i.propsMode=Boolean(t[C]),i.setWrappedInstance=i.setWrappedInstance.bind(i),d()(i.store,'Could not find "'+C+'" in either the context or props of "'+c+'". Either wrap the root component in a <Provider>, or explicitly pass "'+C+'" as a prop to "'+c+'".'),i.initSelector(),i.initSubscription(),i}return i(p,n),p.prototype.getChildContext=function(){var t,e=this.propsMode?null:this.subscription;return t={},t[_]=e||this.context[_],t},p.prototype.componentDidMount=function(){P&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},p.prototype.componentWillReceiveProps=function(t){this.selector.run(t)},p.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},p.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=u,this.store=null,this.selector.run=u,this.selector.shouldComponentUpdate=!1},p.prototype.getWrappedInstance=function(){return d()(A,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+m+"() call."),this.wrappedInstance},p.prototype.setWrappedInstance=function(t){this.wrappedInstance=t},p.prototype.initSelector=function(){var e=t(this.store.dispatch,s);this.selector=a(e,this.store),this.selector.run(this.props)},p.prototype.initSubscription=function(){if(P){var t=(this.propsMode?this.props:this.context)[_];this.subscription=new y.a(this.store,t,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},p.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(O)):this.notifyNestedSubs()},p.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},p.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},p.prototype.addExtraProps=function(t){if(!A&&!x&&(!this.propsMode||!this.subscription))return t;var e=v({},t);return A&&(e.ref=this.setWrappedInstance),x&&(e[x]=this.renderCount++),this.propsMode&&this.subscription&&(e[_]=this.subscription),e},p.prototype.render=function(){var t=this.selector;if(t.shouldComponentUpdate=!1,t.error)throw t.error;return Object(b.createElement)(e,this.addExtraProps(t.props))},p}(b.Component);return p.WrappedComponent=e,p.displayName=c,p.childContextTypes=q,p.contextTypes=M,p.propTypes=M,f()(p,e)}}e.a=s;var p=n(30),f=n.n(p),l=n(11),d=n.n(l),b=n(2),y=(n.n(b),n(185)),h=n(156),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},j=0,O={}},function(t,e,n){"use strict";function r(t){return function(e,n){function r(){return o}var o=t(e,n);return r.dependsOnOwnProps=!1,r}}function o(t){return null!==t.dependsOnOwnProps&&void 0!==t.dependsOnOwnProps?Boolean(t.dependsOnOwnProps):1!==t.length}function i(t,e){return function(e,n){var r=(n.displayName,function(t,e){return r.dependsOnOwnProps?r.mapToProps(t,e):r.mapToProps(t)});return r.dependsOnOwnProps=!0,r.mapToProps=function(e,n){r.mapToProps=t,r.dependsOnOwnProps=o(t);var i=r(e,n);return"function"===typeof i&&(r.mapToProps=i,r.dependsOnOwnProps=o(i),i=r(e,n)),i},r}}e.a=r,e.b=i;n(159)},function(t,e,n){"use strict";n(32),n(150)},function(t,e,n){"use strict";function r(t,e){return t===e}function o(t,e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!t(e[o],n[o]))return!1;return!0}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=null,i=null;return function(){return o(e,n,arguments)||(i=t.apply(null,arguments)),n=arguments,i}}function c(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every(function(t){return"function"===typeof t})){var n=e.map(function(t){return typeof t}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return e}function u(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];var u=0,a=r.pop(),s=c(r),p=t.apply(void 0,[function(){return u++,a.apply(null,arguments)}].concat(n)),f=i(function(){for(var t=[],e=s.length,n=0;n<e;n++)t.push(s[n].apply(null,arguments));return p.apply(null,t)});return f.resultFunc=a,f.recomputations=function(){return u},f.resetRecomputations=function(){return u=0},f}}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;if("object"!==typeof t)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof t);var n=Object.keys(t);return e(n.map(function(e){return t[e]}),function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.reduce(function(t,e,r){return t[n[r]]=e,t},{})})}e.__esModule=!0,e.defaultMemoize=i,e.createSelectorCreator=u,e.createStructuredSelector=a;var s=e.createSelector=u(i)},function(t,e,n){"use strict";function r(t){var e={dispatch:u.a,subscribe:u.a,getState:u.a,replaceReducer:u.a,asyncReducers:s.a};f()(i()(t,e),"(app/utils...) injectors: Expected a valid redux store")}e.a=r;var o=n(196),i=n.n(o),c=n(149),u=n.n(c),a=n(152),s=n.n(a),p=n(11),f=n.n(p)},function(t,e,n){var r=n(201),o=n(148),i=Object.prototype,c=i.hasOwnProperty,u=i.propertyIsEnumerable,a=r(function(){return arguments}())?r:function(t){return o(t)&&c.call(t,"callee")&&!u.call(t,"callee")};t.exports=a},function(t,e,n){var r=n(140),o=r.Symbol;t.exports=o},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(10))},function(t,e,n){(function(t){var r=n(140),o=n(204),i="object"==typeof e&&e&&!e.nodeType&&e,c=i&&"object"==typeof t&&t&&!t.nodeType&&t,u=c&&c.exports===i,a=u?r.Buffer:void 0,s=a?a.isBuffer:void 0,p=s||o;t.exports=p}).call(e,n(57)(t))},function(t,e,n){var r=n(206),o=n(207),i=n(208),c=i&&i.isTypedArray,u=c?o(c):r;t.exports=u},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},function(t,e,n){function r(t){if(!o(t))return i(t);var e=[];for(var n in Object(t))u.call(t,n)&&"constructor"!=n&&e.push(n);return e}var o=n(169),i=n(209),c=Object.prototype,u=c.hasOwnProperty;t.exports=r},function(t,e){function n(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}var r=Object.prototype;t.exports=n},function(t,e,n){function r(t){return null!=t&&i(t.length)&&!o(t)}var o=n(149),i=n(167);t.exports=r},function(t,e){function n(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,o=r.toString;t.exports=n},,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="app/containers/NoteEditor/SELECT_NOTE"},function(t,e,n){"use strict";var r=n(194),o={injectReducer:r.a};e.a=o},,,,,,function(t,e,n){"use strict";var r=(n(184),n(157),n(186));n.d(e,"a",function(){return r.a})},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=n(2),u=(n.n(c),n(16)),a=n.n(u),s=n(156);n(150),function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",n=arguments[1],u=n||e+"Subscription",p=function(t){function n(i,c){r(this,n);var u=o(this,t.call(this,i,c));return u[e]=i.store,u}return i(n,t),n.prototype.getChildContext=function(){var t;return t={},t[e]=this[e],t[u]=null,t},n.prototype.render=function(){return c.Children.only(this.props.children)},n}(c.Component);p.propTypes={store:s.a.isRequired,children:a.a.element.isRequired},p.childContextTypes=(t={},t[e]=s.a.isRequired,t[u]=s.b,t)}()},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(){var t=[],e=[];return{clear:function(){e=i,t=i},notify:function(){for(var n=t=e,r=0;r<n.length;r++)n[r]()},get:function(){return e},subscribe:function(n){var r=!0;return e===t&&(e=t.slice()),e.push(n),function(){r&&t!==i&&(r=!1,e===t&&(e=t.slice()),e.splice(e.indexOf(n),1))}}}}n.d(e,"a",function(){return u});var i=null,c={notify:function(){}},u=function(){function t(e,n,o){r(this,t),this.store=e,this.parentSub=n,this.onStateChange=o,this.unsubscribe=null,this.listeners=c}return t.prototype.addNestedSub=function(t){return this.trySubscribe(),this.listeners.subscribe(t)},t.prototype.notifyNestedSubs=function(){this.listeners.notify()},t.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},t.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=o())},t.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=c)},t}()},function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e,n){for(var r=e.length-1;r>=0;r--){var o=e[r](t);if(o)return o}return function(e,r){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function i(t,e){return t===e}var c=n(157),u=n(187),a=n(188),s=n(189),p=n(190),f=n(191),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.connectHOC,n=void 0===e?c.a:e,d=t.mapStateToPropsFactories,b=void 0===d?s.a:d,y=t.mapDispatchToPropsFactories,h=void 0===y?a.a:y,v=t.mergePropsFactories,j=void 0===v?p.a:v,O=t.selectorFactory,g=void 0===O?f.a:O;return function(t,e,c){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=a.pure,p=void 0===s||s,f=a.areStatesEqual,d=void 0===f?i:f,y=a.areOwnPropsEqual,v=void 0===y?u.a:y,O=a.areStatePropsEqual,m=void 0===O?u.a:O,w=a.areMergedPropsEqual,x=void 0===w?u.a:w,S=r(a,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),P=o(t,b,"mapStateToProps"),E=o(e,h,"mapDispatchToProps"),C=o(c,j,"mergeProps");return n(g,l({methodName:"connect",getDisplayName:function(t){return"Connect("+t+")"},shouldHandleStateChanges:Boolean(t),initMapStateToProps:P,initMapDispatchToProps:E,initMergeProps:C,pure:p,areStatesEqual:d,areOwnPropsEqual:v,areStatePropsEqual:m,areMergedPropsEqual:x},S))}}()},function(t,e,n){"use strict";function r(t,e){return t===e?0!==t||0!==e||1/t===1/e:t!==t&&e!==e}function o(t,e){if(r(t,e))return!0;if("object"!==typeof t||null===t||"object"!==typeof e||null===e)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(var c=0;c<n.length;c++)if(!i.call(e,n[c])||!r(t[n[c]],e[n[c]]))return!1;return!0}e.a=o;var i=Object.prototype.hasOwnProperty},function(t,e,n){"use strict";function r(t){return"function"===typeof t?Object(u.b)(t,"mapDispatchToProps"):void 0}function o(t){return t?void 0:Object(u.a)(function(t){return{dispatch:t}})}function i(t){return t&&"object"===typeof t?Object(u.a)(function(e){return Object(c.bindActionCreators)(t,e)}):void 0}var c=n(18),u=n(158);e.a=[r,o,i]},function(t,e,n){"use strict";function r(t){return"function"===typeof t?Object(i.b)(t,"mapStateToProps"):void 0}function o(t){return t?void 0:Object(i.a)(function(){return{}})}var i=n(158);e.a=[r,o]},function(t,e,n){"use strict";function r(t,e,n){return u({},n,t,e)}function o(t){return function(e,n){var r=(n.displayName,n.pure),o=n.areMergedPropsEqual,i=!1,c=void 0;return function(e,n,u){var a=t(e,n,u);return i?r&&o(a,c)||(c=a):(i=!0,c=a),c}}}function i(t){return"function"===typeof t?o(t):void 0}function c(t){return t?void 0:function(){return r}}var u=(n(159),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t});e.a=[i,c]},function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e,n,r){return function(o,i){return n(t(o,i),e(r,i),i)}}function i(t,e,n,r,o){function i(o,i){return b=o,y=i,h=t(b,y),v=e(r,y),j=n(h,v,y),d=!0,j}function c(){return h=t(b,y),e.dependsOnOwnProps&&(v=e(r,y)),j=n(h,v,y)}function u(){return t.dependsOnOwnProps&&(h=t(b,y)),e.dependsOnOwnProps&&(v=e(r,y)),j=n(h,v,y)}function a(){var e=t(b,y),r=!l(e,h);return h=e,r&&(j=n(h,v,y)),j}function s(t,e){var n=!f(e,y),r=!p(t,b);return b=t,y=e,n&&r?c():n?u():r?a():j}var p=o.areStatesEqual,f=o.areOwnPropsEqual,l=o.areStatePropsEqual,d=!1,b=void 0,y=void 0,h=void 0,v=void 0,j=void 0;return function(t,e){return d?s(t,e):i(t,e)}}function c(t,e){var n=e.initMapStateToProps,c=e.initMapDispatchToProps,u=e.initMergeProps,a=r(e,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),s=n(t,a),p=c(t,a),f=u(t,a);return(a.pure?i:o)(s,p,f,t,a)}e.a=c;n(192)},function(t,e,n){"use strict";n(150)},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(160),o=(n.n(r),function(t){return t.get("noteEditor")}),i=function(){return Object(r.createSelector)(o,function(t){return t.get("currentNoteID")})}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=n(2),u=n.n(c),a=n(16),s=n.n(a),p=n(30),f=n.n(p),l=n(195),d=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.a=function(t){var e=t.name,n=t.reducer;return function(t){var c=function(c){function a(){var t,e,n,i;r(this,a);for(var c=arguments.length,u=Array(c),s=0;s<c;s++)u[s]=arguments[s];return e=n=o(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(u))),n.injectors=Object(l.a)(n.context.store),i=e,o(n,i)}return i(a,c),d(a,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(e,n)}},{key:"render",value:function(){return u.a.createElement(t,this.props)}}]),a}(u.a.Component);return c.WrappedComponent=t,c.contextTypes={store:s.a.object.isRequired},c.displayName="withReducer("+(t.displayName||t.name||"Component")+")",f()(c,t)}}},function(t,e,n){"use strict";function r(t){return Object(o.a)(t),{injectReducer:Object(i.a)(t,!0)}}e.a=r;var o=n(161),i=n(211)},function(t,e,n){function r(t,e){return null==e||o(t,e,i(e))}var o=n(197),i=n(198);t.exports=r},function(t,e){function n(t,e,n){var r=n.length;if(null==t)return!r;for(t=Object(t);r--;){var o=n[r],i=e[o],c=t[o];if(void 0===c&&!(o in t)||!i(c))return!1}return!0}t.exports=n},function(t,e,n){function r(t){return c(t)?o(t):i(t)}var o=n(199),i=n(168),c=n(170);t.exports=r},function(t,e,n){function r(t,e){var n=c(t),r=!n&&i(t),p=!n&&!r&&u(t),l=!n&&!r&&!p&&s(t),d=n||r||p||l,b=d?o(t.length,String):[],y=b.length;for(var h in t)!e&&!f.call(t,h)||d&&("length"==h||p&&("offset"==h||"parent"==h)||l&&("buffer"==h||"byteLength"==h||"byteOffset"==h)||a(h,y))||b.push(h);return b}var o=n(200),i=n(162),c=n(151),u=n(165),a=n(205),s=n(166),p=Object.prototype,f=p.hasOwnProperty;t.exports=r},function(t,e){function n(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}t.exports=n},function(t,e,n){function r(t){return i(t)&&o(t)==c}var o=n(143),i=n(148),c="[object Arguments]";t.exports=r},function(t,e,n){function r(t){var e=c.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[a]=n:delete t[a]),o}var o=n(163),i=Object.prototype,c=i.hasOwnProperty,u=i.toString,a=o?o.toStringTag:void 0;t.exports=r},function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e){function n(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||o.test(t))&&t>-1&&t%1==0&&t<e}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=n},function(t,e,n){function r(t){return c(t)&&i(t.length)&&!!u[o(t)]}var o=n(143),i=n(167),c=n(148),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=r},function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},function(t,e,n){(function(t){var r=n(164),o="object"==typeof e&&e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,c=i&&i.exports===o,u=c&&r.process,a=function(){try{return u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=a}).call(e,n(57)(t))},function(t,e,n){var r=n(210),o=r(Object.keys,Object);t.exports=o},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e,n){"use strict";function r(t,e){return function(n,r){e||Object(l.a)(t),i()(f()(n)&&!u()(n)&&s()(r),"(app/utils...) injectAsyncReducer: Expected `asyncReducer` to be a reducer function"),Reflect.has(t.asyncReducers,n)&&t.asyncReducers[n]===r||(t.asyncReducers[n]=r,t.replaceReducer(Object(d.a)(t.asyncReducers)))}}e.a=r;var o=n(11),i=n.n(o),c=n(212),u=n.n(c),a=n(149),s=n.n(a),p=n(223),f=n.n(p),l=n(161),d=n(61)},function(t,e,n){function r(t){if(null==t)return!0;if(a(t)&&(u(t)||"string"==typeof t||"function"==typeof t.splice||s(t)||f(t)||c(t)))return!t.length;var e=i(t);if(e==l||e==d)return!t.size;if(p(t))return!o(t).length;for(var n in t)if(y.call(t,n))return!1;return!0}var o=n(168),i=n(213),c=n(162),u=n(151),a=n(170),s=n(165),p=n(169),f=n(166),l="[object Map]",d="[object Set]",b=Object.prototype,y=b.hasOwnProperty;t.exports=r},function(t,e,n){var r=n(214),o=n(219),i=n(220),c=n(221),u=n(222),a=n(143),s=n(171),p=s(r),f=s(o),l=s(i),d=s(c),b=s(u),y=a;(r&&"[object DataView]"!=y(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=y(new o)||i&&"[object Promise]"!=y(i.resolve())||c&&"[object Set]"!=y(new c)||u&&"[object WeakMap]"!=y(new u))&&(y=function(t){var e=a(t),n="[object Object]"==e?t.constructor:void 0,r=n?s(n):"";if(r)switch(r){case p:return"[object DataView]";case f:return"[object Map]";case l:return"[object Promise]";case d:return"[object Set]";case b:return"[object WeakMap]"}return e}),t.exports=y},function(t,e,n){var r=n(144),o=n(140),i=r(o,"DataView");t.exports=i},function(t,e,n){function r(t){return!(!c(t)||i(t))&&(o(t)?b:s).test(u(t))}var o=n(149),i=n(216),c=n(152),u=n(171),a=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,p=Function.prototype,f=Object.prototype,l=p.toString,d=f.hasOwnProperty,b=RegExp("^"+l.call(d).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},function(t,e,n){function r(t){return!!i&&i in t}var o=n(217),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},function(t,e,n){var r=n(140),o=r["__core-js_shared__"];t.exports=o},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e,n){var r=n(144),o=n(140),i=r(o,"Map");t.exports=i},function(t,e,n){var r=n(144),o=n(140),i=r(o,"Promise");t.exports=i},function(t,e,n){var r=n(144),o=n(140),i=r(o,"Set");t.exports=i},function(t,e,n){var r=n(144),o=n(140),i=r(o,"WeakMap");t.exports=i},function(t,e,n){function r(t){return"string"==typeof t||!i(t)&&c(t)&&o(t)==u}var o=n(143),i=n(151),c=n(148),u="[object String]";t.exports=r},function(t,e,n){"use strict";var r=n(177),o=n(225),i=r.a.injectReducer,c=[i({name:"noteEditor",reducer:o.a})];e.a=c},function(t,e,n){"use strict";var r=n(17),o=(n.n(r),n(176)),i=Object(r.fromJS)({currentNoteID:""}),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments[1],n=e.type,r=e.payload;switch(n){case o.a:return t.set("currentNoteID",r);default:return t}};e.a=c},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(176),o=function(t){return{type:r.a,payload:t}}},function(t,e,n){"use strict";var r=n(177),o=n(224),i=n(263),c=r.a.injectReducer,u=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(o.a),[c({name:"noteList",reducer:i.a})]);e.a=u},function(t,e,n){"use strict";var r=n(17),o=(n.n(r),Object(r.fromJS)({})),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments[1];e.type;return t};e.a=i},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var a=n(2),s=n.n(a),p=n(58),f=n(31),l=(n.n(f),n(265)),d=n(266),b=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),y=u(["\n  query AllNotesQuery {\n    allNotes {\n      id\n      createdAt\n      title\n      description\n    }\n  }\n"],["\n  query AllNotesQuery {\n    allNotes {\n      id\n      createdAt\n      title\n      description\n    }\n  }\n"]),h=u(["\n  mutation CreateNoteMutation($title: String, $description: String) {\n    createNote(\n      title: $title,\n      description: $description,\n    ) {\n      id\n      createdAt\n      title\n      description\n    }\n  }\n"],["\n  mutation CreateNoteMutation($title: String, $description: String) {\n    createNote(\n      title: $title,\n      description: $description,\n    ) {\n      id\n      createdAt\n      title\n      description\n    }\n  }\n"]),v=u(["\n  margin: 10px 0;\n  border: 1px solid #108EE9;\n"],["\n  margin: 10px 0;\n  border: 1px solid #108EE9;\n"]),j=Object(f.gql)(y),O=Object(f.gql)(h),g=p.a.div(v),m=function(t){function e(){var t,n,c,u;o(this,e);for(var a=arguments.length,s=Array(a),p=0;p<a;p++)s[p]=arguments[p];return n=c=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),c.handleCreate=function(){c.props.createNoteMutation({update:function(t,e){var n=e.data.createNote,o=t.readQuery({query:j});o.allNotes=[n].concat(r(o.allNotes)),t.writeQuery({query:j,data:o})}})},c.handleDelete=function(t,e,n){var r=t.readQuery({query:j});r.allNotes=r.allNotes.filter(function(t){return t.id!==n}),t.writeQuery({query:j,data:r})},c.handleSelect=function(t){return function(){c.props.selectNote(t)}},u=n,i(c,u)}return c(e,t),b(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.currentNoteID,r=e.allNotesQuery,o=r.loading,i=r.error,c=r.allNotes;return o?s.a.createElement("div",null,"Loading"):i?s.a.createElement("div",null,"Something wrong..."):s.a.createElement("div",null,s.a.createElement(d.a,{handleCreate:this.handleCreate}),s.a.createElement(g,null,c.map(function(e){return s.a.createElement(l.a,{key:e.id,note:e,isActive:e.id===n,handleSelect:t.handleSelect(e.id),handleDelete:t.handleDelete})})))}}]),e}(a.PureComponent);e.a=Object(f.compose)(Object(f.graphql)(j,{name:"allNotesQuery"}),Object(f.graphql)(O,{name:"createNoteMutation"}))(m)},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var u=n(2),a=n.n(u),s=n(58),p=n(31),f=(n.n(p),function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()),l=c(["\n  mutation DeleteNoteMutation($id: ID!) {\n    deleteNote(\n      id: $id,\n    ) {\n      id\n    }\n  }\n"],["\n  mutation DeleteNoteMutation($id: ID!) {\n    deleteNote(\n      id: $id,\n    ) {\n      id\n    }\n  }\n"]),d=c(["\n  flex: 1;\n"],["\n  flex: 1;\n"]),b=c(["\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  border-left: 3px solid ",";\n\n  &:not(:last-child) {\n    border-bottom: 1px solid #108EE9;\n  }\n"],["\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  border-left: 3px solid ",";\n\n  &:not(:last-child) {\n    border-bottom: 1px solid #108EE9;\n  }\n"]),y=c(["\n  padding: 8px;\n  border-radius: 4px;\n  color: #ECF6FD;\n  background-color: #108EE9;\n  transition: opacity 0.15s ease-in;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.9;\n  }\n"],["\n  padding: 8px;\n  border-radius: 4px;\n  color: #ECF6FD;\n  background-color: #108EE9;\n  transition: opacity 0.15s ease-in;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.9;\n  }\n"]),h=Object(p.gql)(l),v=s.a.div(d),j=s.a.div(b,function(t){return t.isActive?"#108EE9":"transparent"}),O=s.a.div(y),g=function(t){function e(){var t,n,i,c;r(this,e);for(var u=arguments.length,a=Array(u),s=0;s<u;s++)a[s]=arguments[s];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),i.deleteNote=function(){var t=i.props,e=t.note,n=t.deleteNoteMutation,r=e.id;n({variables:{id:r},update:function(t,e){var n=e.data.deleteNote;i.props.handleDelete(t,n,r)}})},c=n,o(i,c)}return i(e,t),f(e,[{key:"render",value:function(){var t=this.props,e=t.isActive,n=t.note,r=t.handleSelect,o=n.title,i=n.description;return a.a.createElement(j,{isActive:e,onClick:r},a.a.createElement(v,null,a.a.createElement("div",null,"title: ",o),a.a.createElement("div",null,"description: ",i)),a.a.createElement(O,{onClick:this.deleteNote},"\u522a\u9664"))}}]),e}(u.PureComponent);e.a=Object(p.graphql)(h,{name:"deleteNoteMutation"})(g)},function(t,e,n){"use strict";var r=n(2),o=n.n(r),i=n(58),c=function(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  padding: 8px;\n  border-radius: 4px;\n  color: #ECF6FD;\n  background-color: #108EE9;\n  transition: opacity 0.15s ease-in;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.9;\n  }\n"],["\n  padding: 8px;\n  border-radius: 4px;\n  color: #ECF6FD;\n  background-color: #108EE9;\n  transition: opacity 0.15s ease-in;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.9;\n  }\n"]),u=i.a.div(c),a=function(t){var e=t.handleCreate;return o.a.createElement(u,{onClick:e},"\u65b0\u589e\u7b46\u8a18")};e.a=a}]));
//# sourceMappingURL=1.a635f700.chunk.js.map