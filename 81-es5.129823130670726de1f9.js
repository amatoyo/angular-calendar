function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _get(t,e,r){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=_superPropBase(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{PGuz:function(t,e,r){"use strict";r.r(e),r.d(e,"DemoModule",(function(){return b}));var n=r("ofXK"),o=r("tyNb"),c=r("Nrjh"),i=r("/om3"),a=r("dBcC"),s=r("J5kl"),u=r("/Eym"),f=r("9ig3"),l=r("r4sE"),p=r("jKzE"),y=r("fXoL"),_=r("kx+m"),h=function(t){_inherits(r,t);var e=_createSuper(r);function r(){return _classCallCheck(this,r),e.apply(this,arguments)}return _createClass(r,[{key:"getMonthView",value:function(t){return t.viewStart=Object(u.a)(Object(f.a)(t.viewDate),1),t.viewEnd=Object(l.a)(Object(p.a)(t.viewDate),1),_get(_getPrototypeOf(r.prototype),"getMonthView",this).call(this,t)}}]),r}(s.a);h.\u0275fac=function(t){return v(t||h)},h.\u0275prov=y.dc({token:h,factory:h.\u0275fac});var v=y.oc(h),d=function t(){_classCallCheck(this,t),this.viewDate=new Date,this.events=[]};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=y.bc({type:d,selectors:[["mwl-demo-component"]],features:[y.Tb([{provide:s.a,useClass:h}])],decls:3,vars:2,consts:[[3,"viewDate","events"]],template:function(t,e){1&t&&(y.mc(0,"mwl-calendar-month-view",0),y.id(1,"\n"),y.lc(),y.id(2,"\n")),2&t&&y.Jc("viewDate",e.viewDate)("events",e.events)},directives:[_.a],encapsulation:2,changeDetection:0});var w=r("j1vE"),b=function t(){_classCallCheck(this,t)};b.\u0275mod=y.fc({type:b}),b.\u0275inj=y.ec({factory:function(t){return new(t||b)},imports:[[n.c,c.a.forRoot({provide:i.a,useFactory:w.a}),a.a,o.e.forChild([{path:"",component:d}])]]})},dBcC:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("ofXK"),o=r("3Pt+"),c=r("Nrjh"),i=r("fXoL"),a=function t(){_classCallCheck(this,t)};a.\u0275mod=i.fc({type:a}),a.\u0275inj=i.ec({factory:function(t){return new(t||a)},imports:[[n.c,o.c,c.a]]})}}]);