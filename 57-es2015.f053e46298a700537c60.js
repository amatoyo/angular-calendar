(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{U7mt:function(e,n,i){"use strict";i.r(n),i.d(n,"DemoModule",(function(){return y}));var t=i("ofXK"),a=i("tyNb"),c=i("Nrjh"),d=i("/om3"),w=i("dBcC"),l=i("cbJd"),v=i("fXoL"),o=i("Vpa8"),r=i("kx+m"),s=i("1xDM"),m=i("e096"),u=i("5dod");function h(e,n){if(1&e&&(v.mc(0,"span",11),v.id(1),v.lc()),2&e){const e=v.Ac().day;v.Ub(1),v.jd(e.badgeTotal)}}function D(e,n){if(1&e&&(v.id(0,"\n  "),v.mc(1,"div",7),v.id(2,"\n    "),v.gd(3,h,2,1,"span",8),v.id(4,"\n    "),v.mc(5,"span",9),v.id(6),v.Bc(7,"calendarDate"),v.lc(),v.id(8,"\n  "),v.lc(),v.id(9,"\n  "),v.mc(10,"small",10),v.id(11),v.lc(),v.id(12,"\n")),2&e){const e=n.day,i=n.locale;v.Ub(3),v.Jc("ngIf",e.badgeTotal>0),v.Ub(3),v.jd(v.Ec(7,3,e.date,"monthViewDayNumber",i)),v.Ub(5),v.kd("There are ",e.events.length," events on this day")}}function f(e,n){if(1&e&&(v.mc(0,"mwl-calendar-month-view",12),v.id(1,"\n  "),v.lc()),2&e){const e=v.Ac(),n=v.Wc(10);v.Jc("viewDate",e.viewDate)("events",e.events)("cellTemplate",n)}}function g(e,n){if(1&e&&(v.mc(0,"mwl-calendar-week-view",13),v.id(1,"\n  "),v.lc()),2&e){const e=v.Ac();v.Jc("viewDate",e.viewDate)("events",e.events)}}function p(e,n){if(1&e&&(v.mc(0,"mwl-calendar-day-view",13),v.id(1,"\n  "),v.lc()),2&e){const e=v.Ac();v.Jc("viewDate",e.viewDate)("events",e.events)}}class C{constructor(){this.view=l.a.Month,this.viewDate=new Date,this.events=[]}}C.\u0275fac=function(e){return new(e||C)},C.\u0275cmp=v.bc({type:C,selectors:[["mwl-demo-component"]],decls:21,vars:6,consts:[[3,"view","viewDate","viewChange","viewDateChange"],[1,"alert","alert-info"],["href","https://github.com/mattlewis92/angular-calendar#how-do-i-use-a-custom-template"],["customCellTemplate",""],[3,"ngSwitch"],[3,"viewDate","events","cellTemplate",4,"ngSwitchCase"],[3,"viewDate","events",4,"ngSwitchCase"],[1,"cal-cell-top"],["class","cal-day-badge",4,"ngIf"],[1,"cal-day-number"],[2,"margin","5px"],[1,"cal-day-badge"],[3,"viewDate","events","cellTemplate"],[3,"viewDate","events"]],template:function(e,n){1&e&&(v.mc(0,"mwl-demo-utils-calendar-header",0),v.yc("viewChange",(function(e){return n.view=e}))("viewDateChange",(function(e){return n.viewDate=e})),v.id(1,"\n"),v.lc(),v.id(2,"\n\n"),v.mc(3,"div",1),v.id(4,"\n  For details on how to customise any of the templates, please see\n  "),v.mc(5,"a",2),v.id(6,"this guide"),v.lc(),v.id(7,"\n"),v.lc(),v.id(8,"\n\n"),v.gd(9,D,13,7,"ng-template",null,3,v.hd),v.id(11,"\n\n"),v.mc(12,"div",4),v.id(13,"\n  "),v.gd(14,f,2,3,"mwl-calendar-month-view",5),v.id(15,"\n  "),v.gd(16,g,2,2,"mwl-calendar-week-view",6),v.id(17,"\n  "),v.gd(18,p,2,2,"mwl-calendar-day-view",6),v.id(19,"\n"),v.lc(),v.id(20,"\n")),2&e&&(v.Jc("view",n.view)("viewDate",n.viewDate),v.Ub(12),v.Jc("ngSwitch",n.view),v.Ub(2),v.Jc("ngSwitchCase","month"),v.Ub(2),v.Jc("ngSwitchCase","week"),v.Ub(2),v.Jc("ngSwitchCase","day"))},directives:[o.a,t.q,t.r,t.o,r.a,s.a,m.a],pipes:[u.a],encapsulation:2,changeDetection:0});var b=i("j1vE");class y{}y.\u0275mod=v.fc({type:y}),y.\u0275inj=v.ec({factory:function(e){return new(e||y)},imports:[[t.c,c.a.forRoot({provide:d.a,useFactory:b.a}),w.a,a.e.forChild([{path:"",component:C}])]]})},Vpa8:function(e,n,i){"use strict";i.d(n,"a",(function(){return v}));var t=i("fXoL"),a=i("cbJd"),c=i("5qES"),d=i("Pn2z"),w=i("SSGA"),l=i("5dod");class v{constructor(){this.locale="en",this.viewChange=new t.t,this.viewDateChange=new t.t,this.CalendarView=a.a}}v.\u0275fac=function(e){return new(e||v)},v.\u0275cmp=t.bc({type:v,selectors:[["mwl-demo-utils-calendar-header"]],inputs:{view:"view",viewDate:"viewDate",locale:"locale"},outputs:{viewChange:"viewChange",viewDateChange:"viewDateChange"},decls:43,vars:16,consts:[[1,"row","text-center"],[1,"col-md-4"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"btn","btn-primary",3,"click"]],template:function(e,n){1&e&&(t.id(0,"\n    "),t.mc(1,"div",0),t.id(2,"\n      "),t.mc(3,"div",1),t.id(4,"\n        "),t.mc(5,"div",2),t.id(6,"\n          "),t.mc(7,"div",3),t.yc("viewDateChange",(function(e){return n.viewDate=e}))("viewDateChange",(function(){return n.viewDateChange.next(n.viewDate)})),t.id(8,"\n            Previous\n          "),t.lc(),t.id(9,"\n          "),t.mc(10,"div",4),t.yc("viewDateChange",(function(e){return n.viewDate=e}))("viewDateChange",(function(){return n.viewDateChange.next(n.viewDate)})),t.id(11,"\n            Today\n          "),t.lc(),t.id(12,"\n          "),t.mc(13,"div",5),t.yc("viewDateChange",(function(e){return n.viewDate=e}))("viewDateChange",(function(){return n.viewDateChange.next(n.viewDate)})),t.id(14,"\n            Next\n          "),t.lc(),t.id(15,"\n        "),t.lc(),t.id(16,"\n      "),t.lc(),t.id(17,"\n      "),t.mc(18,"div",1),t.id(19,"\n        "),t.mc(20,"h3"),t.id(21),t.Bc(22,"calendarDate"),t.lc(),t.id(23,"\n      "),t.lc(),t.id(24,"\n      "),t.mc(25,"div",1),t.id(26,"\n        "),t.mc(27,"div",2),t.id(28,"\n          "),t.mc(29,"div",6),t.yc("click",(function(){return n.viewChange.emit(n.CalendarView.Month)})),t.id(30,"\n            Month\n          "),t.lc(),t.id(31,"\n          "),t.mc(32,"div",6),t.yc("click",(function(){return n.viewChange.emit(n.CalendarView.Week)})),t.id(33,"\n            Week\n          "),t.lc(),t.id(34,"\n          "),t.mc(35,"div",6),t.yc("click",(function(){return n.viewChange.emit(n.CalendarView.Day)})),t.id(36,"\n            Day\n          "),t.lc(),t.id(37,"\n        "),t.lc(),t.id(38,"\n      "),t.lc(),t.id(39,"\n    "),t.lc(),t.id(40,"\n    "),t.ic(41,"br"),t.id(42,"\n  ")),2&e&&(t.Ub(7),t.Jc("view",n.view)("viewDate",n.viewDate),t.Ub(3),t.Jc("viewDate",n.viewDate),t.Ub(3),t.Jc("view",n.view)("viewDate",n.viewDate),t.Ub(8),t.jd(t.Ec(22,12,n.viewDate,n.view+"ViewTitle",n.locale)),t.Ub(8),t.Zb("active",n.view===n.CalendarView.Month),t.Ub(3),t.Zb("active",n.view===n.CalendarView.Week),t.Ub(3),t.Zb("active",n.view===n.CalendarView.Day))},directives:[c.a,d.a,w.a],pipes:[l.a],encapsulation:2})},dBcC:function(e,n,i){"use strict";i.d(n,"a",(function(){return w}));var t=i("ofXK"),a=i("3Pt+"),c=i("Nrjh"),d=i("fXoL");class w{}w.\u0275mod=d.fc({type:w}),w.\u0275inj=d.ec({factory:function(e){return new(e||w)},imports:[[t.c,a.c,c.a]]})}}]);