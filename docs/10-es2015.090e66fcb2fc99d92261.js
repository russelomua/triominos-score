(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Eq5z:function(e,t,n){"use strict";n.r(t),n.d(t,"GamesPageModule",function(){return R});var i=n("ofXK"),o=n("TEn/"),r=n("3Pt+"),s=n("tyNb"),c=n("mrSG"),a=n("fXoL"),l=function(e){return e[e.BRIDGE=40]="BRIDGE",e[e.HEXAGON=50]="HEXAGON",e[e.DOUBLE_HEXAGON=60]="DOUBLE_HEXAGON",e[e.TRIPLE_HEXAGON=70]="TRIPLE_HEXAGON",e}({});class b{constructor(e,t,n,i=null){this.uuid=e,this.playersBag=t,this.tilesBag=n,this.dateStart=i,this.SCORE_PER_PICKED_TILE=-5}getDateStart(){return this.dateStart}start(){if(this.isStarted()||this.playersBag.count()<2)return;const e=this.playersBag.count()>2?7:9;this.playersBag.dealTiles(e),this.playersBag.next(),this.dateStart=new Date}canStart(){return this.playersBag.players().length>=2&&!this.isStarted()}isStarted(){return null!==this.dateStart}endTurn(e,t,n,i){this.setTileScore(e),this.pickTilesFromBag(t,n),i&&this.playersBag.current().addScore(i),this.playersBag.next()}setTileScore(e){e>15||this.playersBag.current().addScore(e)}pickTilesFromBag(e,t){this.tilesBag.pickTile(e),this.playersBag.current().pickTiles(e),t&&this.playersBag.current().placeTile();const n=3===e&&!1===t?-25:this.SCORE_PER_PICKED_TILE*e;this.playersBag.current().addScore(n)}isEnded(){return this.playersBag.players().some(e=>0===e.getTiles())}}class u{constructor(e,t=0,n=0){this.name=e,this.score=t,this.tiles=n}getName(){return this.name}setTiles(e){this.tiles=e}placeTile(){this.tiles--}pickTiles(e){this.tiles+=e}getTiles(){return this.tiles}getScore(){return this.score}addScore(e){this.score+=e}}class d{constructor(){this.playersList=[]}addPlayer(e){4!==this.playersList.length&&this.playersList.push(e)}players(){return this.playersList}current(){return this.currentPlayer}currentIndex(){return this.playersList.indexOf(this.currentPlayer)}setCurrent(e){e>this.playersList.length-1||(this.currentPlayer=this.playersList[e])}next(){const e=this.currentIndex();this.currentPlayer=-1===e||e===this.playersList.length-1?this.playersList[0]:this.playersList[e+1]}count(){return this.playersList.length}dealTiles(e){for(const t of this.players())t.setTiles(e)}delete(e){const t=this.playersList.indexOf(e);-1!==t&&this.playersList.splice(t,1)}}class g{constructor(e){this.totalCount=e}pickTile(e){return!(e>3||this.totalCount>0||(this.totalCount-=e,0))}hasTiles(){return this.totalCount>0}getTilesCount(){return this.totalCount}}let h=(()=>{class e{deserialize(e){const t=e.playersBag.players().map(e=>({name:e.getName(),score:e.getScore(),tiles:e.getTiles()}));return{uuid:e.uuid,players:t,tiles:e.tilesBag.getTilesCount(),dateStart:e.getDateStart(),playerIndex:e.playersBag.currentIndex()}}serialize(e){const t=new g(e.tiles),n=new d;for(const i of e.players){const e=new u(i.name,i.score,i.tiles);n.addPlayer(e)}return n.setCurrent(e.playerIndex),new b(e.uuid,n,t,e.dateStart)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),p=(()=>{class e{persist(e){const t=JSON.stringify(e);localStorage.setItem("triominos",t)}restore(){const e=localStorage.getItem("triominos");return null!==e?JSON.parse(e):[]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),m=(()=>{class e{constructor(e,t){this.serializer=e,this.persistenceService=t,this.TILES_COUNT=56,this.states=[],this.states=this.persistenceService.restore()}create(){return new b("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),new d,new g(this.TILES_COUNT))}save(e){const t=this.states.findIndex(t=>t.uuid===e.uuid),n=this.serializer.deserialize(e);-1===t?this.states.push(n):this.states[t]=n,this.persistenceService.persist(this.states)}delete(e){console.log(e,this.states),console.log(e,this.states.splice(e,1),this.states)}findById(e){const t=this.states.find(t=>t.uuid===e);return t?this.serializer.serialize(t):null}}return e.\u0275fac=function(t){return new(t||e)(a.Rb(h),a.Rb(p))},e.\u0275prov=a.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function f(e,t){1&e&&a.Lb(0,"ion-icon",13)}function y(e,t){1&e&&a.Lb(0,"ion-icon",14)}function M(e,t){if(1&e&&(a.Nb(0,"ion-chip",16),a.mc(1),a.Mb()),2&e){const e=t.$implicit;a.cc("outline",!0),a.Ab(1),a.nc(e.name)}}function N(e,t){if(1&e&&(a.Nb(0,"div"),a.kc(1,M,2,2,"ion-chip",15),a.Mb()),2&e){const e=a.Xb().$implicit;a.Ab(1),a.cc("ngForOf",e.players)}}function x(e,t){1&e&&(a.Nb(0,"ion-chip",17),a.mc(1,"Players missing"),a.Mb()),2&e&&a.cc("outline",!0)}const k=function(e){return[e]};function S(e,t){if(1&e){const e=a.Ob();a.Nb(0,"ion-item-sliding"),a.Nb(1,"ion-item",5),a.kc(2,f,1,0,"ion-icon",6),a.kc(3,y,1,0,"ion-icon",7),a.Nb(4,"ion-label",8),a.kc(5,N,2,1,"div",9),a.kc(6,x,2,1,"ng-template",null,10,a.lc),a.Mb(),a.Mb(),a.Nb(8,"ion-item-options",11),a.Nb(9,"ion-item-option",12),a.Vb("click",function(){a.hc(e);const n=t.index;return a.Xb().deleteGame(n)}),a.mc(10," Delete "),a.Mb(),a.Mb(),a.Mb()}if(2&e){const e=t.$implicit,n=a.gc(7);a.Ab(1),a.cc("routerLink",a.ec(5,k,e.uuid)),a.Ab(1),a.cc("ngIf",!e.dateStart),a.Ab(1),a.cc("ngIf",e.dateStart),a.Ab(2),a.cc("ngIf",e.players.length)("ngIfElse",n)}}const v=function(){return["new"]};let I=(()=>{class e{constructor(e,t){this.gameService=e,this.alertController=t}deleteGame(e){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.alertController.create({header:"Delete game",message:"Are you sure to delete this game?",buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",role:"destructive",handler:()=>{this.gameService.delete(e)}}]});yield t.present()})}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(m),a.Kb(o.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-games"]],decls:13,vars:3,consts:[["color","primary"],["collapse","true","slot","end"],[3,"routerLink"],["name","add-outline"],[4,"ngFor","ngForOf"],["detail","",3,"routerLink"],["name","cog-outline","color","primary","slot","start",4,"ngIf"],["name","trophy","color","warning","slot","start",4,"ngIf"],[1,"ion-text-wrap"],[4,"ngIf","ngIfElse"],["noPlayers",""],["side","end"],["color","danger",3,"click"],["name","cog-outline","color","primary","slot","start"],["name","trophy","color","warning","slot","start"],["color","secondary",3,"outline",4,"ngFor","ngForOf"],["color","secondary",3,"outline"],["color","danger",3,"outline"]],template:function(e,t){1&e&&(a.Nb(0,"ion-header"),a.Nb(1,"ion-toolbar",0),a.Nb(2,"ion-title"),a.mc(3,"Triominos Games"),a.Mb(),a.Nb(4,"ion-buttons",1),a.Nb(5,"ion-button",2),a.Lb(6,"ion-icon",3),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(7,"ion-content"),a.Nb(8,"ion-list"),a.Nb(9,"ion-list-header"),a.Nb(10,"ion-label"),a.mc(11,"Games list"),a.Mb(),a.Mb(),a.kc(12,S,11,7,"ion-item-sliding",4),a.Mb(),a.Mb()),2&e&&(a.Ab(5),a.cc("routerLink",a.dc(2,v)),a.Ab(7),a.cc("ngForOf",t.gameService.states))},directives:[o.o,o.G,o.E,o.g,o.f,o.K,s.h,o.p,o.m,o.v,o.w,o.u,i.i,o.t,o.q,i.j,o.s,o.r,o.k],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})();var T=n("IzEk");function O(e,t){if(1&e&&(a.Nb(0,"div"),a.Nb(1,"strong"),a.mc(2,"Tiles:"),a.Mb(),a.mc(3),a.Mb()),2&e){const e=a.Xb().$implicit;a.Ab(3),a.oc(" ",e.getTiles()," ")}}function A(e,t){if(1&e&&(a.Nb(0,"ion-text",10),a.mc(1),a.Mb()),2&e){const e=a.Xb().$implicit;a.Ab(1),a.oc(" ",e.getScore()," points ")}}function P(e,t){if(1&e){const e=a.Ob();a.Nb(0,"ion-button",11),a.Vb("click",function(){a.hc(e);const t=a.Xb().$implicit;return a.Xb().game.playersBag.delete(t)}),a.Lb(1,"ion-icon",12),a.Mb()}}function E(e,t){if(1&e&&(a.Nb(0,"ion-item",5),a.Lb(1,"ion-icon",6),a.Nb(2,"ion-label",7),a.mc(3),a.kc(4,O,4,1,"div",4),a.Mb(),a.kc(5,A,2,1,"ion-text",8),a.kc(6,P,2,0,"ion-button",9),a.Mb()),2&e){const e=t.$implicit,n=a.Xb();a.cc("color",n.game.playersBag.current()===e?"primary":""),a.Ab(3),a.oc(" ",e.getName()," "),a.Ab(1),a.cc("ngIf",n.game.isStarted()),a.Ab(1),a.cc("ngIf",n.game.isStarted()),a.Ab(1),a.cc("ngIf",!n.game.isStarted())}}function L(e,t){1&e&&(a.Nb(0,"span"),a.mc(1,"To start a game add from 2 to 4 players"),a.Mb())}function C(e,t){1&e&&a.mc(0,"Add more players or start the game")}function B(e,t){if(1&e){const e=a.Ob();a.Nb(0,"ion-col"),a.Nb(1,"ion-button",19),a.Vb("click",function(){return a.hc(e),a.Xb(2).game.start()}),a.Lb(2,"ion-icon",20),a.Nb(3,"span",18),a.mc(4,"Start game"),a.Mb(),a.Mb(),a.Mb()}}function w(e,t){if(1&e){const e=a.Ob();a.Nb(0,"ion-card"),a.Nb(1,"ion-card-content"),a.Nb(2,"div",13),a.kc(3,L,2,0,"span",14),a.Mb(),a.kc(4,C,1,0,"ng-template",null,15,a.lc),a.Nb(6,"ion-grid"),a.Nb(7,"ion-row"),a.Nb(8,"ion-col"),a.Nb(9,"ion-button",16),a.Vb("click",function(){return a.hc(e),a.Xb().addPlayer()}),a.Lb(10,"ion-icon",17),a.Nb(11,"span",18),a.mc(12,"Add player"),a.Mb(),a.Mb(),a.Mb(),a.kc(13,B,5,0,"ion-col",4),a.Mb(),a.Mb(),a.Mb(),a.Mb()}if(2&e){const e=a.gc(5),t=a.Xb();a.Ab(3),a.cc("ngIf",!t.game.canStart())("ngIfElse",e),a.Ab(10),a.cc("ngIf",t.game.canStart())}}function X(e,t){if(1&e){const e=a.Ob();a.Nb(0,"ion-item"),a.Nb(1,"ion-label",21),a.mc(2,"Tiles score"),a.Mb(),a.Nb(3,"ion-range",28),a.Vb("ngModelChange",function(t){return a.hc(e),a.Xb(2).tilesScore=t}),a.Mb(),a.Nb(4,"ion-note",29),a.mc(5),a.Yb(6,"number"),a.Mb(),a.Mb()}if(2&e){const e=a.Xb(2);a.Ab(3),a.cc("ngModel",e.tilesScore),a.Ab(2),a.nc(a.Zb(6,2,e.tilesScore))}}function G(e,t){if(1&e&&(a.Nb(0,"ion-select-option",32),a.mc(1),a.Mb()),2&e){const e=t.$implicit;a.cc("value",e.value),a.Ab(1),a.oc(" ",e.label," ")}}function _(e,t){if(1&e){const e=a.Ob();a.Nb(0,"ion-item"),a.Nb(1,"ion-label"),a.mc(2,"Bonus"),a.Mb(),a.Nb(3,"ion-select",30),a.Vb("ngModelChange",function(t){return a.hc(e),a.Xb(2).bonus=t}),a.kc(4,G,2,2,"ion-select-option",31),a.Mb(),a.Mb()}if(2&e){const e=a.Xb(2);a.Ab(3),a.cc("ngModel",e.bonus),a.Ab(1),a.cc("ngForOf",e.bonusList)}}function H(e,t){if(1&e){const e=a.Ob();a.Nb(0,"ion-card"),a.Nb(1,"ion-card-header"),a.mc(2," Game process "),a.Mb(),a.Nb(3,"ion-list"),a.Nb(4,"ion-item"),a.Nb(5,"ion-label",21),a.mc(6,"Picked tiles"),a.Mb(),a.Nb(7,"ion-range",22),a.Vb("ngModelChange",function(t){return a.hc(e),a.Xb().tilesPicked=t}),a.Mb(),a.Nb(8,"ion-note",23),a.mc(9),a.Yb(10,"number"),a.Mb(),a.Mb(),a.Nb(11,"ion-item"),a.Nb(12,"ion-label"),a.mc(13,"Is Tile placed"),a.Mb(),a.Nb(14,"ion-toggle",24),a.Vb("ngModelChange",function(t){return a.hc(e),a.Xb().isTilesPlaced=t}),a.Mb(),a.Mb(),a.kc(15,X,7,4,"ion-item",4),a.kc(16,_,5,2,"ion-item",4),a.Mb(),a.Nb(17,"ion-card-content",25),a.Nb(18,"ion-button",26),a.Vb("click",function(){return a.hc(e),a.Xb().nextPlayer()}),a.Nb(19,"span",27),a.mc(20,"Next player"),a.Mb(),a.Lb(21,"ion-icon",20),a.Mb(),a.Mb(),a.Mb()}if(2&e){const e=a.Xb();a.Ab(7),a.cc("ngModel",e.tilesPicked),a.Ab(2),a.nc(a.Zb(10,5,e.tilesPicked)),a.Ab(5),a.cc("ngModel",e.isTilesPlaced),a.Ab(1),a.cc("ngIf",e.isTilesPlaced),a.Ab(1),a.cc("ngIf",e.isTilesPlaced)}}const D=[{path:"",component:I},{path:":uuid",component:(()=>{class e{constructor(e,t,n,i){this.alertController=e,this.gameService=t,this.router=n,this.route=i,this.bonusList=[{value:null,label:"None"},{value:l.BRIDGE,label:"Bridge"},{value:l.HEXAGON,label:"Hexagon"},{value:l.DOUBLE_HEXAGON,label:"2 Hexagon"},{value:l.TRIPLE_HEXAGON,label:"3 Hexagon"}],this.tilesScore=0,this.tilesPicked=0,this.bonus=null,i.data.pipe(Object(T.a)(1)).subscribe(e=>{this.game=e.game})}getBonusText(e){var t;const n=this.bonusList.find(t=>t.value===e);return null!==(t=null==n?void 0:n.label)&&void 0!==t?t:""}addPlayer(){return Object(c.a)(this,void 0,void 0,function*(){const e=yield this.alertController.create({header:"Add player",inputs:[{name:"name",type:"text",placeholder:"Player name"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Add",handler:e=>{const t=new u(e.name);this.game.playersBag.addPlayer(t)}}]});yield e.present()})}nextPlayer(){this.game.endTurn(this.tilesScore,this.tilesPicked,!!this.isTilesPlaced,this.bonus),this.tilesScore=0,this.tilesPicked=0,this.isTilesPlaced=!1,this.bonus=null}getPlayers(){return this.game.playersBag.players()}save(){this.gameService.save(this.game)}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(o.a),a.Kb(m),a.Kb(s.g),a.Kb(s.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-game"]],decls:12,vars:3,consts:[["color","primary"],["slot","start"],["defaultHref","games",3,"click"],[3,"color",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"color"],["slot","start","name","person-circle-outline"],[1,"ion-text-wrap"],["slot","end",4,"ngIf"],["color","danger","fill","clear","slot","end",3,"click",4,"ngIf"],["slot","end"],["color","danger","fill","clear","slot","end",3,"click"],["name","trash"],[1,"ion-text-center"],[4,"ngIf","ngIfElse"],["canStart",""],["color","success","expand","block",3,"click"],["name","person-add"],[2,"margin-left",".25rem"],["color","secondary","expand","block",3,"click"],["name","play"],["position","fixed"],["color","warning","min","0","max","3","snaps","true",3,"ngModel","ngModelChange"],["color","warning","slot","end"],["color","success",3,"ngModel","ngModelChange"],[2,"text-align","right"],["color","secondary",3,"click"],[2,"margin-right",".25rem"],["color","success","min","0","max","15","snaps","true",3,"ngModel","ngModelChange"],["color","success","slot","end"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(a.Nb(0,"ion-header"),a.Nb(1,"ion-toolbar",0),a.Nb(2,"ion-buttons",1),a.Nb(3,"ion-back-button",2),a.Vb("click",function(){return t.save()}),a.Mb(),a.Mb(),a.Nb(4,"ion-title"),a.mc(5,"Triominos game"),a.Mb(),a.Mb(),a.Mb(),a.Nb(6,"ion-content"),a.Nb(7,"ion-card"),a.Nb(8,"ion-list"),a.kc(9,E,7,5,"ion-item",3),a.Mb(),a.Mb(),a.kc(10,w,14,3,"ion-card",4),a.kc(11,H,22,7,"ion-card",4),a.Mb()),2&e&&(a.Ab(9),a.cc("ngForOf",t.game.playersBag.players()),a.Ab(1),a.cc("ngIf",!t.game.isStarted()),a.Ab(1),a.cc("ngIf",t.game.isStarted()))},directives:[o.o,o.G,o.g,o.d,o.e,o.E,o.m,o.h,o.v,i.i,i.j,o.q,o.p,o.u,o.D,o.f,o.i,o.n,o.A,o.l,o.j,o.y,o.L,r.d,r.e,o.x,o.F,o.b,o.B,o.C],pipes:[i.d],styles:[""]}),e})(),resolve:{game:(()=>{class e{constructor(e){this.gameService=e}resolve(e,t){if(console.log(e.params.uuid),"new"===e.params.uuid)return this.gameService.create();const n=this.gameService.findById(e.params.uuid);if(!n)throw new Error;return n}}return e.\u0275fac=function(t){return new(t||e)(a.Rb(m))},e.\u0275prov=a.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}];let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({imports:[[s.i.forChild(D)],s.i]}),e})(),R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({imports:[[i.b,r.a,o.H,F]]}),e})()}}]);