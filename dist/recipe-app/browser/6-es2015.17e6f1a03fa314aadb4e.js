(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(t,n,i){"use strict";i.r(n),i.d(n,"AuthModule",(function(){return m}));var e=i("ofXK"),o=i("3Pt+"),s=i("tyNb"),r=i("PCNd"),c=i("fXoL");let a=(()=>{class t{constructor(){this.close=new c.n}onClose(){this.close.emit()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(c.Mb(0,"div",0),c.Ub("click",(function(){return n.onClose()})),c.Lb(),c.Mb(1,"div",1),c.Mb(2,"p"),c.jc(3),c.Lb(),c.Mb(4,"div",2),c.Mb(5,"button",3),c.Ub("click",(function(){return n.onClose()})),c.jc(6,"Close"),c.Lb(),c.Lb(),c.Lb()),2&t&&(c.zb(3),c.kc(n.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.26)}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),t})(),b=(()=>{class t{constructor(t){this.viewContainerRef=t}}return t.\u0275fac=function(n){return new(n||t)(c.Jb(c.N))},t.\u0275dir=c.Eb({type:t,selectors:[["","appPlaceholder",""]]}),t})();var l=i("/WaZ"),d=i("l7P3");let u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["app-loading-spinner"]],decls:5,vars:0,consts:[[1,"lds-ring"]],template:function(t,n){1&t&&(c.Mb(0,"div",0),c.Kb(1,"div"),c.Kb(2,"div"),c.Kb(3,"div"),c.Kb(4,"div"),c.Lb())},styles:[".lds-ring[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:8px solid transparent;border-top-color:#f84a33}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),t})();function p(t,n){}function g(t,n){1&t&&(c.Mb(0,"div",5),c.Kb(1,"app-loading-spinner"),c.Lb())}function h(t,n){if(1&t){const t=c.Nb();c.Mb(0,"form",6,7),c.Ub("ngSubmit",(function(){c.fc(t);const n=c.dc(1);return c.Wb().onSubmit(n)})),c.Mb(2,"div",8),c.Mb(3,"label",9),c.jc(4,"E-Mail"),c.Lb(),c.Kb(5,"input",10),c.Lb(),c.Mb(6,"div",8),c.Mb(7,"label",11),c.jc(8,"Password"),c.Lb(),c.Kb(9,"input",12),c.Lb(),c.Mb(10,"div"),c.Mb(11,"button",13),c.jc(12),c.Lb(),c.jc(13," | "),c.Mb(14,"button",14),c.Ub("click",(function(){return c.fc(t),c.Wb().onSwitchMode()})),c.jc(15),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=c.dc(1),n=c.Wb();c.zb(11),c.Zb("disabled",!t.valid),c.zb(1),c.lc(" ",n.isLoginMode?"Login":"Sign Up"," "),c.zb(3),c.lc(" Switch to ",n.isLoginMode?"Sign Up":"Login","")}}let f=(()=>{class t{constructor(t,n){this.componentFactoryResolver=t,this.store=n,this.isLoginMode=!0,this.isLoading=!1,this.error=null}ngOnInit(){this.storeSub=this.store.select("auth").subscribe(t=>{this.isLoading=t.loading,this.error=t.authError,this.error&&this.showErrorAlert(this.error)})}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(t){if(!t.valid)return;const n=t.value.email,i=t.value.password;this.store.dispatch(this.isLoginMode?new l.k({email:n,password:i}):new l.n({email:n,password:i})),t.reset()}onHandleError(){this.store.dispatch(new l.h)}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe(),this.storeSub&&this.storeSub.unsubscribe()}showErrorAlert(t){const n=this.componentFactoryResolver.resolveComponentFactory(a),i=this.alertHost.viewContainerRef;i.clear();const e=i.createComponent(n);e.instance.message=t,this.closeSub=e.instance.close.subscribe(()=>{this.closeSub.unsubscribe(),i.clear()})}}return t.\u0275fac=function(n){return new(n||t)(c.Jb(c.j),c.Jb(d.h))},t.\u0275cmp=c.Db({type:t,selectors:[["app-auth"]],viewQuery:function(t,n){var i;1&t&&c.nc(b,!0),2&t&&c.cc(i=c.Vb())&&(n.alertHost=i.first)},decls:5,vars:2,consts:[["appPlaceholder",""],[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["style","text-align: center;",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[2,"text-align","center"],[3,"ngSubmit"],["authForm","ngForm"],[1,"form-group"],["for","email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(c.ic(0,p,0,0,"ng-template",0),c.Mb(1,"div",1),c.Mb(2,"div",2),c.ic(3,g,2,0,"div",3),c.ic(4,h,16,3,"form",4),c.Lb(),c.Lb()),2&t&&(c.zb(3),c.Zb("ngIf",n.isLoading),c.zb(1),c.Zb("ngIf",!n.isLoading))},directives:[b,e.j,u,o.u,o.m,o.n,o.a,o.l,o.o,o.s,o.b,o.k],encapsulation:2}),t})(),m=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},imports:[[o.j,e.c,s.j.forChild([{path:"",component:f}]),r.a]]}),t})()}}]);