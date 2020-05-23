function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{Vpa8:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("fXoL"),i=t("cbJd"),r=t("5qES"),c=t("Pn2z"),o=t("SSGA"),l=t("5dod"),d=function e(){_classCallCheck(this,e),this.locale="en",this.viewChange=new a.t,this.viewDateChange=new a.t,this.CalendarView=i.a};d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=a.bc({type:d,selectors:[["mwl-demo-utils-calendar-header"]],inputs:{view:"view",viewDate:"viewDate",locale:"locale"},outputs:{viewChange:"viewChange",viewDateChange:"viewDateChange"},decls:43,vars:16,consts:[[1,"row","text-center"],[1,"col-md-4"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"btn","btn-primary",3,"click"]],template:function(e,n){1&e&&(a.id(0,"\n    "),a.mc(1,"div",0),a.id(2,"\n      "),a.mc(3,"div",1),a.id(4,"\n        "),a.mc(5,"div",2),a.id(6,"\n          "),a.mc(7,"div",3),a.yc("viewDateChange",(function(e){return n.viewDate=e}))("viewDateChange",(function(){return n.viewDateChange.next(n.viewDate)})),a.id(8,"\n            Previous\n          "),a.lc(),a.id(9,"\n          "),a.mc(10,"div",4),a.yc("viewDateChange",(function(e){return n.viewDate=e}))("viewDateChange",(function(){return n.viewDateChange.next(n.viewDate)})),a.id(11,"\n            Today\n          "),a.lc(),a.id(12,"\n          "),a.mc(13,"div",5),a.yc("viewDateChange",(function(e){return n.viewDate=e}))("viewDateChange",(function(){return n.viewDateChange.next(n.viewDate)})),a.id(14,"\n            Next\n          "),a.lc(),a.id(15,"\n        "),a.lc(),a.id(16,"\n      "),a.lc(),a.id(17,"\n      "),a.mc(18,"div",1),a.id(19,"\n        "),a.mc(20,"h3"),a.id(21),a.Bc(22,"calendarDate"),a.lc(),a.id(23,"\n      "),a.lc(),a.id(24,"\n      "),a.mc(25,"div",1),a.id(26,"\n        "),a.mc(27,"div",2),a.id(28,"\n          "),a.mc(29,"div",6),a.yc("click",(function(){return n.viewChange.emit(n.CalendarView.Month)})),a.id(30,"\n            Month\n          "),a.lc(),a.id(31,"\n          "),a.mc(32,"div",6),a.yc("click",(function(){return n.viewChange.emit(n.CalendarView.Week)})),a.id(33,"\n            Week\n          "),a.lc(),a.id(34,"\n          "),a.mc(35,"div",6),a.yc("click",(function(){return n.viewChange.emit(n.CalendarView.Day)})),a.id(36,"\n            Day\n          "),a.lc(),a.id(37,"\n        "),a.lc(),a.id(38,"\n      "),a.lc(),a.id(39,"\n    "),a.lc(),a.id(40,"\n    "),a.ic(41,"br"),a.id(42,"\n  ")),2&e&&(a.Ub(7),a.Jc("view",n.view)("viewDate",n.viewDate),a.Ub(3),a.Jc("viewDate",n.viewDate),a.Ub(3),a.Jc("view",n.view)("viewDate",n.viewDate),a.Ub(8),a.jd(a.Ec(22,12,n.viewDate,n.view+"ViewTitle",n.locale)),a.Ub(8),a.Zb("active",n.view===n.CalendarView.Month),a.Ub(3),a.Zb("active",n.view===n.CalendarView.Week),a.Ub(3),a.Zb("active",n.view===n.CalendarView.Day))},directives:[r.a,c.a,o.a],pipes:[l.a],encapsulation:2})},dBcC:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t("ofXK"),i=t("3Pt+"),r=t("Nrjh"),c=t("fXoL"),o=function e(){_classCallCheck(this,e)};o.\u0275mod=c.fc({type:o}),o.\u0275inj=c.ec({factory:function(e){return new(e||o)},imports:[[a.c,i.c,r.a]]})},qPtN:function(e,n,t){"use strict";t.r(n),t.d(n,"DemoModule",(function(){return M}));var a=t("ofXK"),i=t("tyNb"),r=t("Nrjh"),c=t("/om3"),o=t("dBcC"),l=t("cbJd"),d=t("G6HM"),v=t("M34a"),w=t("s+wp"),s=t("fXoL"),u=t("Vpa8"),m=t("1kSV"),p=t("XOxG"),f=t("Gw5/"),g=t("srvh"),y=t("WKnn"),b=t("kx+m"),h=t("1xDM"),D=t("e096"),C=t("5dod"),k=t("BcY+");function E(e,n){if(1&e&&(s.mc(0,"span",11),s.id(1),s.lc()),2&e){var t=s.Ac().day;s.Ub(1),s.jd(t.badgeTotal)}}function T(e,n){if(1&e&&(s.mc(0,"span"),s.id(1),s.lc()),2&e){var t=n.$implicit;s.Xb("badge badge-",t[0],""),s.Ub(1),s.kd("\n      ",t[1].length,"\n    ")}}function A(e,n){if(1&e&&(s.id(0,"\n  "),s.mc(1,"div",6),s.id(2,"\n    "),s.gd(3,E,2,1,"span",7),s.id(4,"\n    "),s.mc(5,"span",8),s.id(6),s.Bc(7,"calendarDate"),s.lc(),s.id(8,"\n  "),s.lc(),s.id(9,"\n  "),s.mc(10,"div",9),s.id(11,"\n    "),s.gd(12,T,2,4,"span",10),s.id(13,"\n  "),s.lc(),s.id(14,"\n")),2&e){var t=n.day,a=n.locale;s.Ub(3),s.Jc("ngIf",t.badgeTotal>0),s.Ub(3),s.jd(s.Ec(7,3,t.date,"monthViewDayNumber",a)),s.Ub(6),s.Jc("ngForOf",t.eventGroups)}}function S(e,n){if(1&e&&(s.mc(0,"div"),s.id(1,"\n        "),s.mc(2,"mwl-calendar-event-actions",18),s.id(3,"\n        "),s.lc(),s.id(4,"\n         \n        "),s.mc(5,"mwl-calendar-event-title",15),s.id(6,"\n        "),s.lc(),s.id(7,"\n      "),s.lc()),2&e){var t=n.$implicit;s.Ub(2),s.Jc("event",t),s.Ub(3),s.Jc("event",t)}}function _(e,n){if(1&e&&(s.id(0,"\n    "),s.mc(1,"div",16),s.id(2,"\n      "),s.gd(3,S,8,2,"div",17),s.id(4,"\n    "),s.lc(),s.id(5,"\n  ")),2&e){var t=s.Ac().weekEvent;s.Ub(3),s.Jc("ngForOf",t.event.meta.groupedEvents)}}function J(e,n){if(1&e&&(s.kc(0),s.id(1,"\n      "),s.mc(2,"mwl-calendar-event-actions",18),s.id(3,"\n      "),s.lc(),s.id(4,"\n       \n    "),s.jc()),2&e){var t=s.Ac().weekEvent;s.Ub(2),s.Jc("event",t.event)}}var O=function(e,n){return{backgroundColor:e,borderColor:n}};function U(e,n){if(1&e&&(s.id(0,"\n  "),s.gd(1,_,6,1,"ng-template",null,12,s.hd),s.id(3,"\n\n  "),s.mc(4,"div",13),s.yc("mwlClick",(function(){return n.eventClicked.emit()})),s.Bc(5,"calendarEventTitle"),s.id(6,"\n    "),s.gd(7,J,5,1,"ng-container",14),s.id(8,"\n    "),s.mc(9,"mwl-calendar-event-title",15),s.id(10,"\n    "),s.lc(),s.id(11,"\n  "),s.lc(),s.id(12,"\n")),2&e){var t=n.weekEvent,a=n.tooltipPlacement,i=n.tooltipTemplate,r=n.tooltipAppendToBody,c=n.tooltipDisabled,o=n.tooltipDelay,l=s.Wc(2);s.Ub(4),s.Jc("ngbPopover",l)("disablePopover",!t.event.meta.groupedEvents)("ngStyle",s.Oc(15,O,null==t.event.color?null:t.event.color.secondary,null==t.event.color?null:t.event.color.primary))("mwlCalendarTooltip",c||t.event.meta.groupedEvents?"":s.Ec(5,11,t.event.title,"weekTooltip",t.event))("tooltipPlacement",a)("tooltipEvent",t.event)("tooltipTemplate",i)("tooltipAppendToBody",r)("tooltipDelay",o),s.Ub(3),s.Jc("ngIf",!t.event.meta.groupedEvents),s.Ub(2),s.Jc("event",t.event)}}function j(e,n){if(1&e){var t=s.nc();s.mc(0,"mwl-calendar-month-view",19),s.yc("beforeViewRender",(function(e){return s.Zc(t),s.Ac().beforeMonthViewRender(e)})),s.id(1,"\n  "),s.lc()}if(2&e){var a=s.Ac(),i=s.Wc(4);s.Jc("viewDate",a.viewDate)("events",a.events)("cellTemplate",i)("activeDayIsOpen",!0)}}function V(e,n){if(1&e&&(s.mc(0,"mwl-calendar-week-view",20),s.id(1,"\n  "),s.lc()),2&e){var t=s.Ac(),a=s.Wc(7);s.Jc("viewDate",t.viewDate)("events",t.groupedSimilarEvents)("eventTemplate",a)}}function P(e,n){if(1&e&&(s.mc(0,"mwl-calendar-day-view",20),s.id(1,"\n  "),s.lc()),2&e){var t=s.Ac(),a=s.Wc(7);s.Jc("viewDate",t.viewDate)("events",t.groupedSimilarEvents)("eventTemplate",a)}}var I=function(){function e(){_classCallCheck(this,e),this.view=l.a.Month,this.viewDate=new Date,this.events=[{title:"Event 1",color:d.a.yellow,start:Object(v.a)(new Date),meta:{type:"warning"}},{title:"Event 2",color:d.a.yellow,start:Object(v.a)(new Date),meta:{type:"warning"}},{title:"Event 3",color:d.a.blue,start:Object(v.a)(new Date),meta:{type:"info"}},{title:"Event 4",color:d.a.red,start:Object(v.a)(new Date),meta:{type:"danger"}},{title:"Event 5",color:d.a.red,start:Object(v.a)(new Date),meta:{type:"danger"}}],this.groupedSimilarEvents=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.groupedSimilarEvents=[];var n=new Set;this.events.forEach((function(t){if(!n.has(t)){var a=e.events.filter((function(e){return e!==t&&!n.has(e)&&Object(w.a)(e.start,t.start)&&(Object(w.a)(e.end,t.end)||!e.end&&!t.end)&&e.color.primary===t.color.primary&&e.color.secondary===t.color.secondary}));n.add(t),a.forEach((function(e){n.add(e)})),a.length>0?e.groupedSimilarEvents.push({title:"".concat(a.length+1," events"),color:t.color,start:t.start,end:t.end,meta:{groupedEvents:[t].concat(_toConsumableArray(a))}}):e.groupedSimilarEvents.push(t)}}))}},{key:"beforeMonthViewRender",value:function(e){e.body.forEach((function(e){var n={};e.events.forEach((function(e){n[e.meta.type]=n[e.meta.type]||[],n[e.meta.type].push(e)})),e.eventGroups=Object.entries(n)}))}}]),e}();I.\u0275fac=function(e){return new(e||I)},I.\u0275cmp=s.bc({type:I,selectors:[["mwl-demo-component"]],decls:18,vars:6,consts:[[3,"view","viewDate","viewChange","viewDateChange"],["customCellTemplate",""],["customEventTemplate",""],[3,"ngSwitch"],[3,"viewDate","events","cellTemplate","activeDayIsOpen","beforeViewRender",4,"ngSwitchCase"],[3,"viewDate","events","eventTemplate",4,"ngSwitchCase"],[1,"cal-cell-top"],["class","cal-day-badge",4,"ngIf"],[1,"cal-day-number"],[1,"cell-totals"],[3,"class",4,"ngFor","ngForOf"],[1,"cal-day-badge"],["groupedEventsTemplate",""],[1,"cal-event",3,"ngbPopover","disablePopover","ngStyle","mwlCalendarTooltip","tooltipPlacement","tooltipEvent","tooltipTemplate","tooltipAppendToBody","tooltipDelay","mwlClick"],[4,"ngIf"],["view","week",3,"event"],[2,"min-width","150px"],[4,"ngFor","ngForOf"],[3,"event"],[3,"viewDate","events","cellTemplate","activeDayIsOpen","beforeViewRender"],[3,"viewDate","events","eventTemplate"]],template:function(e,n){1&e&&(s.mc(0,"mwl-demo-utils-calendar-header",0),s.yc("viewChange",(function(e){return n.view=e}))("viewDateChange",(function(e){return n.viewDate=e})),s.id(1,"\n"),s.lc(),s.id(2,"\n\n"),s.gd(3,A,15,7,"ng-template",null,1,s.hd),s.id(5,"\n\n"),s.gd(6,U,13,18,"ng-template",null,2,s.hd),s.id(8,"\n\n"),s.mc(9,"div",3),s.id(10,"\n  "),s.gd(11,j,2,4,"mwl-calendar-month-view",4),s.id(12,"\n  "),s.gd(13,V,2,3,"mwl-calendar-week-view",5),s.id(14,"\n  "),s.gd(15,P,2,3,"mwl-calendar-day-view",5),s.id(16,"\n"),s.lc(),s.id(17,"\n")),2&e&&(s.Jc("view",n.view)("viewDate",n.viewDate),s.Ub(9),s.Jc("ngSwitch",n.view),s.Ub(2),s.Jc("ngSwitchCase","month"),s.Ub(2),s.Jc("ngSwitchCase","week"),s.Ub(2),s.Jc("ngSwitchCase","day"))},directives:[u.a,a.q,a.r,a.o,a.n,m.e,a.p,p.a,f.a,g.a,y.a,b.a,h.a,D.a],pipes:[C.a,k.a],styles:[".cell-totals[_ngcontent-%COMP%] {\n        margin: 5px;\n        text-align: center;\n      }\n      .badge[_ngcontent-%COMP%] {\n        margin-right: 5px;\n      }"],changeDetection:0});var x=t("j1vE"),M=function e(){_classCallCheck(this,e)};M.\u0275mod=s.fc({type:M}),M.\u0275inj=s.ec({factory:function(e){return new(e||M)},imports:[[a.c,r.a.forRoot({provide:c.a,useFactory:x.a}),m.f,o.a,i.e.forChild([{path:"",component:I}])]]})}}]);