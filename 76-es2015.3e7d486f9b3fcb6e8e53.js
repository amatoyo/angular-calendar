(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{DCrg:function(e,t,n){"use strict";n.r(t),n.d(t,"DemoModule",(function(){return Q}));var a=n("ofXK"),i=n("tyNb"),r=n("Nrjh"),c=n("/om3"),s=n("j1vE"),l=n("dBcC"),d=n("G6HM"),o=n("Da6A"),g=n("M34a"),v=n("fXoL"),m=n("5qES"),u=n("Pn2z"),h=n("SSGA"),p=n("J5kl"),w=n("1xDM"),f=n("+R2k"),y=(n("r5Jv"),n("3x2b")),b=n("qWwx"),D=n("JM9+"),E=n("/qmH"),k=n("Gw5/");function C(e,t){if(1&e&&(v.mc(0,"div",9),v.id(1,"\n      "),v.mc(2,"b"),v.id(3),v.lc(),v.id(4,"\n    "),v.lc()),2&e){const e=t.$implicit;v.Ub(3),v.jd(e.name)}}function T(e,t){if(1&e){const e=v.nc();v.mc(0,"div",15),v.yc("drop",(function(n){v.Zc(e);const a=t.$implicit;return v.Ac(2).eventDropped(n,a.date,!0)}))("dragEnter",(function(){v.Zc(e);const n=t.$implicit;return v.Ac(2).dateDragEnter(n.date)})),v.lc()}}const z=function(e,t){return{event:e,calendarId:t}},A=function(e,t){return{x:e,y:t}},O=function(e){return{x:e}},S=function(){return{}};function F(e,t){if(1&e){const e=v.nc();v.mc(0,"div",19,20),v.yc("dragStart",(function(){v.Zc(e);const t=v.Wc(1);v.Ac();const n=v.Wc(1);return v.Ac(2).dragStarted(n,t)}))("dragging",(function(){return v.Zc(e),v.Ac(3).allDayEventDragMove()}))("dragEnd",(function(n){v.Zc(e);const a=t.$implicit,i=v.Ac(3);return i.dragEnded(a,n,i.dayColumnWidth)})),v.id(2,"\n        "),v.mc(3,"mwl-calendar-week-view-event",21),v.yc("eventClicked",(function(n){v.Zc(e);const a=t.$implicit;return v.Ac(3).eventClicked.emit({event:a.event,sourceEvent:n.sourceEvent})})),v.id(4,"\n        "),v.lc(),v.id(5,"\n      "),v.lc()}if(2&e){const e=t.$implicit,n=v.Ac(3);v.fd("width",100/n.users.length*e.span,"%")("margin-left",100/n.users.length*e.offset,"%"),v.Zb("cal-draggable",e.event.draggable&&0===n.allDayEventResizes.size)("cal-starts-within-week",!e.startsBeforeWeek)("cal-ends-within-week",!e.endsAfterWeek),v.Jc("ngClass",null==e.event?null:e.event.cssClass)("dropData",v.Oc(25,z,e.event,n.calendarId))("dragAxis",v.Oc(28,A,e.event.draggable&&0===n.allDayEventResizes.size,!n.snapDraggedEvents&&e.event.draggable&&0===n.allDayEventResizes.size))("dragSnapGrid",n.snapDraggedEvents?v.Nc(31,O,n.dayColumnWidth):v.Mc(33,S))("validateDrag",n.validateDrag),v.Ub(3),v.Jc("locale",n.locale)("weekEvent",e)("tooltipPlacement",n.tooltipPlacement)("tooltipTemplate",n.tooltipTemplate)("tooltipAppendToBody",n.tooltipAppendToBody)("tooltipDelay",n.tooltipDelay)("customTemplate",n.eventTemplate)("eventTitleTemplate",n.eventTitleTemplate)("eventActionsTemplate",n.eventActionsTemplate)("daysInWeek",n.daysInWeek)}}function B(e,t){if(1&e&&(v.mc(0,"div",16,17),v.id(2,"\n      "),v.gd(3,F,6,34,"div",18),v.id(4,"\n    "),v.lc()),2&e){const e=t.$implicit,n=v.Ac(2);v.Ub(3),v.Jc("ngForOf",e.row)("ngForTrackBy",n.trackByWeekAllDayEvent)}}function R(e,t){if(1&e){const e=v.nc();v.mc(0,"div",10,11),v.yc("dragEnter",(function(){return v.Zc(e),v.Ac().dragEnter("allDay")}))("dragLeave",(function(){return v.Zc(e),v.Ac().dragLeave("allDay")})),v.id(2,"\n    "),v.mc(3,"div",6),v.id(4,"\n      "),v.ic(5,"div",12),v.id(6,"\n      "),v.gd(7,T,1,0,"div",13),v.id(8,"\n    "),v.lc(),v.id(9,"\n    "),v.gd(10,B,5,2,"div",14),v.id(11,"\n  "),v.lc()}if(2&e){const e=v.Ac();v.Ub(5),v.Jc("ngTemplateOutlet",e.allDayEventsLabelTemplate),v.Ub(2),v.Jc("ngForOf",e.days)("ngForTrackBy",e.trackByWeekDayHeaderDate),v.Ub(3),v.Jc("ngForOf",e.view.allDayEventRows)("ngForTrackBy",e.trackById)}}function J(e,t){if(1&e&&(v.mc(0,"mwl-calendar-week-view-hour-segment",26),v.id(1,"\n        "),v.lc()),2&e){const e=t.$implicit,n=v.Ac(3);v.fd("height",n.hourSegmentHeight,"px"),v.Jc("segment",e)("segmentHeight",n.hourSegmentHeight)("locale",n.locale)("customTemplate",n.hourSegmentTemplate)("isTimeLabel",!0)}}function U(e,t){if(1&e&&(v.mc(0,"div",24),v.id(1,"\n        "),v.gd(2,J,2,7,"mwl-calendar-week-view-hour-segment",25),v.id(3,"\n      "),v.lc()),2&e){const e=t.$implicit,n=t.odd,a=v.Ac(2);v.Zb("cal-hour-odd",n),v.Ub(2),v.Jc("ngForOf",e.segments)("ngForTrackBy",a.trackByHourSegment)}}function W(e,t){if(1&e&&(v.mc(0,"div",22),v.id(1,"\n      "),v.gd(2,U,4,4,"div",23),v.id(3,"\n    "),v.lc()),2&e){const e=v.Ac();v.Ub(2),v.Jc("ngForOf",e.view.hourColumns[0].hours)("ngForTrackBy",e.trackByHour)}}const x=function(){return{left:!0,top:!0}};function j(e,t){1&e&&v.ic(0,"div",33),2&e&&v.Jc("resizeEdges",v.Mc(1,x))}const H=function(){return{right:!0,bottom:!0}};function $(e,t){1&e&&v.ic(0,"div",34),2&e&&v.Jc("resizeEdges",v.Mc(1,H))}const Z=function(e,t,n,a){return{left:e,right:t,top:n,bottom:a}};function I(e,t){if(1&e){const e=v.nc();v.mc(0,"div",29,20),v.yc("resizeStart",(function(n){v.Zc(e);const a=t.$implicit,i=v.Ac(2),r=v.Wc(14);return i.timeEventResizeStarted(r,a,n)}))("resizing",(function(n){v.Zc(e);const a=t.$implicit;return v.Ac(2).timeEventResizing(a,n)}))("resizeEnd",(function(){v.Zc(e);const n=t.$implicit;return v.Ac(2).timeEventResizeEnded(n)}))("dragStart",(function(){v.Zc(e);const n=t.$implicit,a=v.Wc(1),i=v.Ac(2),r=v.Wc(14);return i.dragStarted(r,a,n)}))("dragging",(function(n){v.Zc(e);const a=t.$implicit;return v.Ac(2).dragMove(a,n)}))("dragEnd",(function(n){v.Zc(e);const a=t.$implicit,i=v.Ac(2);return i.dragEnded(a,n,i.dayColumnWidth,!0)})),v.id(2,"\n          "),v.gd(3,j,1,2,"div",30),v.id(4,"\n          "),v.mc(5,"mwl-calendar-week-view-event",31),v.yc("eventClicked",(function(n){v.Zc(e);const a=t.$implicit;return v.Ac(2).eventClicked.emit({event:a.event,sourceEvent:n.sourceEvent})})),v.id(6,"\n          "),v.lc(),v.id(7,"\n          "),v.gd(8,$,1,2,"div",32),v.id(9,"\n        "),v.lc()}if(2&e){const e=t.$implicit,n=v.Ac().$implicit,a=v.Ac();v.fd("top",e.top,"px")("height",e.height,"px")("left",e.left,"%")("width",e.width,"%"),v.Zb("cal-draggable",e.event.draggable&&0===a.timeEventResizes.size)("cal-starts-within-day",!e.startsBeforeDay)("cal-ends-within-day",!e.endsAfterDay),v.Jc("ngClass",e.event.cssClass)("hidden",0===e.height&&0===e.width)("resizeSnapGrid",v.Qc(37,Z,a.dayColumnWidth,a.dayColumnWidth,a.eventSnapSize||a.hourSegmentHeight,a.eventSnapSize||a.hourSegmentHeight))("validateResize",a.validateResize)("allowNegativeResizes",!0)("dropData",v.Oc(42,z,e.event,a.calendarId))("dragAxis",v.Oc(45,A,e.event.draggable&&0===a.timeEventResizes.size,e.event.draggable&&0===a.timeEventResizes.size))("dragSnapGrid",a.snapDraggedEvents?v.Oc(48,A,a.dayColumnWidth,a.eventSnapSize||a.hourSegmentHeight):v.Mc(51,S))("ghostDragEnabled",!a.snapDraggedEvents)("validateDrag",a.validateDrag),v.Ub(3),v.Jc("ngIf",(null==e.event||null==e.event.resizable?null:e.event.resizable.beforeStart)&&!e.startsBeforeDay),v.Ub(2),v.Jc("locale",a.locale)("weekEvent",e)("tooltipPlacement",a.tooltipPlacement)("tooltipTemplate",a.tooltipTemplate)("tooltipAppendToBody",a.tooltipAppendToBody)("tooltipDisabled",a.dragActive||a.timeEventResizes.size>0)("tooltipDelay",a.tooltipDelay)("customTemplate",a.eventTemplate)("eventTitleTemplate",a.eventTitleTemplate)("eventActionsTemplate",a.eventActionsTemplate)("column",n),v.Ub(3),v.Jc("ngIf",(null==e.event||null==e.event.resizable?null:e.event.resizable.afterEnd)&&!e.endsAfterDay)}}function M(e,t){if(1&e){const e=v.nc();v.mc(0,"mwl-calendar-week-view-hour-segment",36),v.yc("mwlClick",(function(n){v.Zc(e);const a=t.$implicit;return v.Ac(3).hourSegmentClicked.emit({date:a.date,sourceEvent:n})}))("drop",(function(n){v.Zc(e);const a=t.$implicit;return v.Ac(3).eventDropped(n,a.date,!1)})),v.id(1,"\n          "),v.lc()}if(2&e){const e=t.$implicit,n=v.Ac(3);v.fd("height",n.hourSegmentHeight,"px"),v.Jc("segment",e)("segmentHeight",n.hourSegmentHeight)("locale",n.locale)("customTemplate",n.hourSegmentTemplate)("clickListenerDisabled",0===n.hourSegmentClicked.observers.length)("dragOverClass",n.dragActive&&n.snapDraggedEvents?null:"cal-drag-over")}}function L(e,t){if(1&e&&(v.mc(0,"div",24),v.id(1,"\n          "),v.gd(2,M,2,8,"mwl-calendar-week-view-hour-segment",35),v.id(3,"\n        "),v.lc()),2&e){const e=t.$implicit,n=t.odd,a=v.Ac(2);v.Zb("cal-hour-odd",n),v.Ub(2),v.Jc("ngForOf",e.segments)("ngForTrackBy",a.trackByHourSegment)}}function G(e,t){if(1&e&&(v.mc(0,"div",27),v.id(1,"\n        "),v.gd(2,I,10,52,"div",28),v.id(3,"\n\n        "),v.gd(4,L,4,4,"div",23),v.id(5,"\n      "),v.lc()),2&e){const e=t.$implicit,n=v.Ac();v.Ub(2),v.Jc("ngForOf",e.events)("ngForTrackBy",n.trackByWeekTimeEvent),v.Ub(2),v.Jc("ngForOf",e.hours)("ngForTrackBy",n.trackByHour)}}class P extends p.a{getWeekView(e){const{period:t}=super.getWeekView(e),n={period:t,allDayEventRows:[],hourColumns:[],users:[...e.users]};return n.users.forEach((t,a)=>{const i=e.events.filter(e=>e.meta.user.id===t.id),r=super.getWeekView(Object.assign(Object.assign({},e),{events:i}));n.hourColumns.push(r.hourColumns[0]),r.allDayEventRows.forEach(({row:e},t)=>{n.allDayEventRows[t]=n.allDayEventRows[t]||{row:[]},n.allDayEventRows[t].row.push(Object.assign(Object.assign({},e[0]),{offset:a,span:1}))})}),n}}P.\u0275fac=function(e){return N(e||P)},P.\u0275prov=v.dc({token:P,factory:P.\u0275fac});const N=v.oc(P);class V extends w.a{constructor(e,t,n,a){super(e,t,n,a),this.cdr=e,this.utils=t,this.dateAdapter=a,this.users=[],this.userChanged=new v.t,this.daysInWeek=1,this.trackByUserId=(e,t)=>t.id}ngOnChanges(e){super.ngOnChanges(e),e.users&&(this.refreshBody(),this.emitBeforeViewRender())}getDayColumnWidth(e){return Math.floor(e.offsetWidth/this.users.length)}dragMove(e,t){if(this.snapDraggedEvents){const n=this.getDraggedUserColumn(e,t.x),a=this.getDragMovedEventTimes(e,Object.assign(Object.assign({},t),{x:0}),this.dayColumnWidth,!0),i=e.event,r=Object.assign(Object.assign(Object.assign({},i),a),{meta:Object.assign(Object.assign({},i.meta),{user:n})}),c=this.events.map(e=>e===i?r:e);this.restoreOriginalEvents(c,new Map([[r,i]]))}this.dragAlreadyMoved=!0}dragEnded(e,t,n,a=!1){super.dragEnded(e,Object.assign(Object.assign({},t),{x:0}),n,a);const i=this.getDraggedUserColumn(e,t.x);i&&i!==e.event.meta.user&&this.userChanged.emit({event:e.event,newUser:i})}getWeekView(e){return this.utils.getWeekView(Object.assign({events:e,users:this.users,viewDate:this.viewDate,weekStartsOn:this.weekStartsOn,excluded:this.excludeDays,precision:this.precision,absolutePositionedEvents:!0,hourSegments:this.hourSegments,dayStart:{hour:this.dayStartHour,minute:this.dayStartMinute},dayEnd:{hour:this.dayEndHour,minute:this.dayEndMinute},segmentHeight:this.hourSegmentHeight,weekendDays:this.weekendDays},Object(f.e)(this.dateAdapter,this.viewDate,this.weekStartsOn,this.excludeDays,this.daysInWeek)))}getDraggedUserColumn(e,t){const n=Math.round(t/this.dayColumnWidth),a=this.view.users.findIndex(t=>t===e.event.meta.user)+n;return this.view.users[a]}}V.\u0275fac=function(e){return new(e||V)(v.hc(v.j),v.hc(P),v.hc(v.F),v.hc(c.a))},V.\u0275cmp=v.bc({type:V,selectors:[["mwl-day-view-scheduler"]],inputs:{users:"users"},outputs:{userChanged:"userChanged"},features:[v.Tb([P]),v.Rb,v.Sb],decls:21,vars:8,consts:[["role","grid",1,"cal-week-view"],["role","row",1,"cal-day-headers"],["class","cal-header","tabindex","0","role","columnheader",4,"ngFor","ngForOf","ngForTrackBy"],["class","cal-all-day-events","mwlDroppable","",3,"dragEnter","dragLeave",4,"ngIf"],["mwlDroppable","",1,"cal-time-events",3,"dragEnter","dragLeave"],["class","cal-time-label-column",4,"ngIf"],[1,"cal-day-columns"],["dayColumns",""],["class","cal-day-column",4,"ngFor","ngForOf","ngForTrackBy"],["tabindex","0","role","columnheader",1,"cal-header"],["mwlDroppable","",1,"cal-all-day-events",3,"dragEnter","dragLeave"],["allDayEventsContainer",""],[1,"cal-time-label-column",3,"ngTemplateOutlet"],["class","cal-day-column","mwlDroppable","","dragOverClass","cal-drag-over",3,"drop","dragEnter",4,"ngFor","ngForOf","ngForTrackBy"],["class","cal-events-row",4,"ngFor","ngForOf","ngForTrackBy"],["mwlDroppable","","dragOverClass","cal-drag-over",1,"cal-day-column",3,"drop","dragEnter"],[1,"cal-events-row"],["eventRowContainer",""],["class","cal-event-container","mwlDraggable","","dragActiveClass","cal-drag-active",3,"cal-draggable","cal-starts-within-week","cal-ends-within-week","ngClass","width","marginLeft","dropData","dragAxis","dragSnapGrid","validateDrag","dragStart","dragging","dragEnd",4,"ngFor","ngForOf","ngForTrackBy"],["mwlDraggable","","dragActiveClass","cal-drag-active",1,"cal-event-container",3,"ngClass","dropData","dragAxis","dragSnapGrid","validateDrag","dragStart","dragging","dragEnd"],["event",""],[3,"locale","weekEvent","tooltipPlacement","tooltipTemplate","tooltipAppendToBody","tooltipDelay","customTemplate","eventTitleTemplate","eventActionsTemplate","daysInWeek","eventClicked"],[1,"cal-time-label-column"],["class","cal-hour",3,"cal-hour-odd",4,"ngFor","ngForOf","ngForTrackBy"],[1,"cal-hour"],[3,"height","segment","segmentHeight","locale","customTemplate","isTimeLabel",4,"ngFor","ngForOf","ngForTrackBy"],[3,"segment","segmentHeight","locale","customTemplate","isTimeLabel"],[1,"cal-day-column"],["class","cal-event-container","mwlResizable","","mwlDraggable","","dragActiveClass","cal-drag-active",3,"cal-draggable","cal-starts-within-day","cal-ends-within-day","ngClass","hidden","top","height","left","width","resizeSnapGrid","validateResize","allowNegativeResizes","dropData","dragAxis","dragSnapGrid","ghostDragEnabled","validateDrag","resizeStart","resizing","resizeEnd","dragStart","dragging","dragEnd",4,"ngFor","ngForOf","ngForTrackBy"],["mwlResizable","","mwlDraggable","","dragActiveClass","cal-drag-active",1,"cal-event-container",3,"ngClass","hidden","resizeSnapGrid","validateResize","allowNegativeResizes","dropData","dragAxis","dragSnapGrid","ghostDragEnabled","validateDrag","resizeStart","resizing","resizeEnd","dragStart","dragging","dragEnd"],["class","cal-resize-handle cal-resize-handle-before-start","mwlResizeHandle","",3,"resizeEdges",4,"ngIf"],[3,"locale","weekEvent","tooltipPlacement","tooltipTemplate","tooltipAppendToBody","tooltipDisabled","tooltipDelay","customTemplate","eventTitleTemplate","eventActionsTemplate","column","eventClicked"],["class","cal-resize-handle cal-resize-handle-after-end","mwlResizeHandle","",3,"resizeEdges",4,"ngIf"],["mwlResizeHandle","",1,"cal-resize-handle","cal-resize-handle-before-start",3,"resizeEdges"],["mwlResizeHandle","",1,"cal-resize-handle","cal-resize-handle-after-end",3,"resizeEdges"],["mwlDroppable","","dragActiveClass","cal-drag-active",3,"height","segment","segmentHeight","locale","customTemplate","clickListenerDisabled","dragOverClass","mwlClick","drop",4,"ngFor","ngForOf","ngForTrackBy"],["mwlDroppable","","dragActiveClass","cal-drag-active",3,"segment","segmentHeight","locale","customTemplate","clickListenerDisabled","dragOverClass","mwlClick","drop"]],template:function(e,t){1&e&&(v.mc(0,"div",0),v.id(1,"\n  "),v.mc(2,"div",1),v.id(3,"\n    "),v.gd(4,C,5,1,"div",2),v.id(5,"\n  "),v.lc(),v.id(6,"\n  "),v.gd(7,R,12,5,"div",3),v.id(8,"\n  "),v.mc(9,"div",4),v.yc("dragEnter",(function(){return t.dragEnter("time")}))("dragLeave",(function(){return t.dragLeave("time")})),v.id(10,"\n    "),v.gd(11,W,4,2,"div",5),v.id(12,"\n    "),v.mc(13,"div",6,7),v.id(15,"\n      "),v.gd(16,G,6,4,"div",8),v.id(17,"\n    "),v.lc(),v.id(18,"\n  "),v.lc(),v.id(19,"\n"),v.lc(),v.id(20,"\n")),2&e&&(v.Ub(4),v.Jc("ngForOf",t.users)("ngForTrackBy",t.trackByUserId),v.Ub(3),v.Jc("ngIf",t.view.allDayEventRows.length>0),v.Ub(4),v.Jc("ngIf",t.view.hourColumns.length>0),v.Ub(2),v.Zb("cal-resize-active",t.timeEventResizes.size>0),v.Ub(3),v.Jc("ngForOf",t.view.hourColumns)("ngForTrackBy",t.trackByHourColumn))},directives:[a.n,a.o,y.b,a.t,y.c,a.m,b.a,D.a,E.a,E.c,k.a],encapsulation:2});var X=n("5dod");const q=[{id:0,name:"John smith",color:d.a.yellow},{id:1,name:"Jane Doe",color:d.a.blue}];class K{constructor(){this.viewDate=new Date,this.users=q,this.events=[{title:"An event",color:q[0].color,start:Object(o.a)(Object(g.a)(new Date),5),meta:{user:q[0]},resizable:{beforeStart:!0,afterEnd:!0},draggable:!0},{title:"Another event",color:q[1].color,start:Object(o.a)(Object(g.a)(new Date),2),meta:{user:q[1]},resizable:{beforeStart:!0,afterEnd:!0},draggable:!0},{title:"A 3rd event",color:q[0].color,start:Object(o.a)(Object(g.a)(new Date),7),meta:{user:q[0]},resizable:{beforeStart:!0,afterEnd:!0},draggable:!0},{title:"An all day event",color:q[0].color,start:new Date,meta:{user:q[0]},draggable:!0,allDay:!0},{title:"Another all day event",color:q[1].color,start:new Date,meta:{user:q[1]},draggable:!0,allDay:!0},{title:"A 3rd all day event",color:q[0].color,start:new Date,meta:{user:q[0]},draggable:!0,allDay:!0}]}eventTimesChanged({event:e,newStart:t,newEnd:n}){e.start=t,e.end=n,this.events=[...this.events]}userChanged({event:e,newUser:t}){e.color=t.color,e.meta.user=t,this.events=[...this.events]}}K.\u0275fac=function(e){return new(e||K)},K.\u0275cmp=v.bc({type:K,selectors:[["mwl-demo-component"]],decls:30,vars:12,consts:[[1,"row"],[1,"col-md-6"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"col-md-6","text-right"],[3,"viewDate","events","users","eventTimesChanged","userChanged"]],template:function(e,t){1&e&&(v.mc(0,"div",0),v.id(1,"\n  "),v.mc(2,"div",1),v.id(3,"\n    "),v.mc(4,"div",2),v.id(5,"\n      "),v.mc(6,"div",3),v.yc("viewDateChange",(function(e){return t.viewDate=e})),v.id(7,"\n        Previous\n      "),v.lc(),v.id(8,"\n      "),v.mc(9,"div",4),v.yc("viewDateChange",(function(e){return t.viewDate=e})),v.id(10,"\n        Today\n      "),v.lc(),v.id(11,"\n      "),v.mc(12,"div",5),v.yc("viewDateChange",(function(e){return t.viewDate=e})),v.id(13,"\n        Next\n      "),v.lc(),v.id(14,"\n    "),v.lc(),v.id(15,"\n  "),v.lc(),v.id(16,"\n  "),v.mc(17,"div",6),v.id(18,"\n    "),v.mc(19,"h3"),v.id(20),v.Bc(21,"calendarDate"),v.lc(),v.id(22,"\n  "),v.lc(),v.id(23,"\n"),v.lc(),v.id(24,"\n"),v.ic(25,"br"),v.id(26,"\n\n"),v.mc(27,"mwl-day-view-scheduler",7),v.yc("eventTimesChanged",(function(e){return t.eventTimesChanged(e)}))("userChanged",(function(e){return t.userChanged(e)})),v.id(28,"\n"),v.lc(),v.id(29,"\n")),2&e&&(v.Ub(6),v.Jc("view","day")("viewDate",t.viewDate),v.Ub(3),v.Jc("viewDate",t.viewDate),v.Ub(3),v.Jc("view","day")("viewDate",t.viewDate),v.Ub(8),v.jd(v.Dc(21,9,t.viewDate,"dayViewTitle")),v.Ub(7),v.Jc("viewDate",t.viewDate)("events",t.events)("users",t.users))},directives:[m.a,u.a,h.a,V],pipes:[X.a],encapsulation:2,changeDetection:0});class Q{}Q.\u0275mod=v.fc({type:Q}),Q.\u0275inj=v.ec({factory:function(e){return new(e||Q)},imports:[[a.c,r.a.forRoot({provide:c.a,useFactory:s.a}),l.a,i.e.forChild([{path:"",component:K}])]]})},dBcC:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("ofXK"),i=n("3Pt+"),r=n("Nrjh"),c=n("fXoL");class s{}s.\u0275mod=c.fc({type:s}),s.\u0275inj=c.ec({factory:function(e){return new(e||s)},imports:[[a.c,i.c,r.a]]})}}]);