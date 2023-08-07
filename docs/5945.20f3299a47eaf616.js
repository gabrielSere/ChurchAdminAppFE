"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[5945],{5945:(j,u,s)=>{s.r(u),s.d(u,{default:()=>N});var w=s(4755),a=s(9401),c=s(1728),d=s(9114),f=s(430),p=s(9609),g=s(8467),h=s(1531),x=s(8288),v=s(5971),y=s(4485),Z=s(8746),e=s(2223),A=s(8951);const P=["resetPasswordNgForm"];function C(t,r){if(1&t&&(e.TgZ(0,"fuse-alert",41),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),e.xp6(1),e.hij(" ",o.alert.message," ")}}function T(t,r){1&t&&e._UZ(0,"mat-icon",42),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function U(t,r){1&t&&e._UZ(0,"mat-icon",42),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-slash")}function _(t,r){1&t&&e._UZ(0,"mat-icon",42),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function b(t,r){1&t&&e._UZ(0,"mat-icon",42),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-slash")}function I(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Password confirmation is required "),e.qZA())}function J(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Passwords must match "),e.qZA())}function R(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1," Reset your password "),e.qZA())}function F(t,r){1&t&&e._UZ(0,"mat-progress-spinner",43),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const Q=function(){return["/sign-in"]},N=[{path:"",component:(()=>{class t{constructor(o,n){this._authService=o,this._formBuilder=n,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.resetPasswordForm=this._formBuilder.group({password:["",a.kI.required],passwordConfirm:["",a.kI.required]},{validators:y.a.mustMatch("password","passwordConfirm")})}resetPassword(){this.resetPasswordForm.invalid||(this.resetPasswordForm.disable(),this.showAlert=!1,this._authService.resetPassword(this.resetPasswordForm.get("password").value).pipe((0,Z.x)(()=>{this.resetPasswordForm.enable(),this.resetPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(o=>{this.alert={type:"success",message:"Your password has been reset."}},o=>{this.alert={type:"error",message:"Something went wrong, please try again."}}))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(A.e),e.Y36(a.QS))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-reset-password"]],viewQuery:function(o,n){if(1&o&&e.Gf(P,5),2&o){let i;e.iGM(i=e.CRH())&&(n.resetPasswordNgForm=i.first)}},standalone:!0,features:[e.jDz],decls:66,vars:16,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["resetPasswordNgForm","ngForm"],[1,"w-full"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","password-confirm","matInput","","type","password",3,"formControlName"],["passwordConfirmField",""],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(o,n){if(1&o){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Reset your password"),e.qZA(),e.TgZ(7,"div",6),e._uU(8,"Create a new password for your account"),e.qZA(),e.YNc(9,C,2,5,"fuse-alert",7),e.TgZ(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),e._uU(14,"Password"),e.qZA(),e._UZ(15,"input",11,12),e.TgZ(17,"button",13),e.NdJ("click",function(){e.CHM(i);const m=e.MAs(16);return e.KtG(m.type="password"===m.type?"text":"password")}),e.YNc(18,T,1,1,"mat-icon",14),e.YNc(19,U,1,1,"mat-icon",14),e.qZA(),e.TgZ(20,"mat-error"),e._uU(21," Password is required "),e.qZA()(),e.TgZ(22,"mat-form-field",10)(23,"mat-label"),e._uU(24,"Password (Confirm)"),e.qZA(),e._UZ(25,"input",15,16),e.TgZ(27,"button",13),e.NdJ("click",function(){e.CHM(i);const m=e.MAs(26);return e.KtG(m.type="password"===m.type?"text":"password")}),e.YNc(28,_,1,1,"mat-icon",14),e.YNc(29,b,1,1,"mat-icon",14),e.qZA(),e.YNc(30,I,2,0,"mat-error",17),e.YNc(31,J,2,0,"mat-error",17),e.qZA(),e.TgZ(32,"button",18),e.NdJ("click",function(){return n.resetPassword()}),e.YNc(33,R,2,0,"span",17),e.YNc(34,F,1,2,"mat-progress-spinner",19),e.qZA(),e.TgZ(35,"div",20)(36,"span"),e._uU(37,"Return to"),e.qZA(),e.TgZ(38,"a",21),e._uU(39,"sign in "),e.qZA()()()()(),e.TgZ(40,"div",22),e.O4$(),e.TgZ(41,"svg",23)(42,"g",24),e._UZ(43,"circle",25)(44,"circle",26),e.qZA()(),e.TgZ(45,"svg",27)(46,"defs")(47,"pattern",28),e._UZ(48,"rect",29),e.qZA()(),e._UZ(49,"rect",30),e.qZA(),e.kcU(),e.TgZ(50,"div",31)(51,"div",32)(52,"div"),e._uU(53,"Welcome to"),e.qZA(),e.TgZ(54,"div"),e._uU(55,"our community"),e.qZA()(),e.TgZ(56,"div",33),e._uU(57," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.qZA(),e.TgZ(58,"div",34)(59,"div",35),e._UZ(60,"img",36)(61,"img",37)(62,"img",38)(63,"img",39),e.qZA(),e.TgZ(64,"div",40),e._uU(65,"More than 17k people joined us, it's your turn"),e.qZA()()()()()}if(2&o){const i=e.MAs(16),l=e.MAs(26);e.xp6(9),e.Q6J("ngIf",n.showAlert),e.xp6(1),e.Q6J("formGroup",n.resetPasswordForm),e.xp6(5),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===i.type),e.xp6(1),e.Q6J("ngIf","text"===i.type),e.xp6(6),e.Q6J("formControlName","passwordConfirm"),e.xp6(3),e.Q6J("ngIf","password"===l.type),e.xp6(1),e.Q6J("ngIf","text"===l.type),e.xp6(1),e.Q6J("ngIf",n.resetPasswordForm.get("passwordConfirm").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.resetPasswordForm.get("passwordConfirm").hasError("mustMatch")),e.xp6(1),e.Q6J("color","primary")("disabled",n.resetPasswordForm.disabled),e.xp6(1),e.Q6J("ngIf",!n.resetPasswordForm.disabled),e.xp6(1),e.Q6J("ngIf",n.resetPasswordForm.disabled),e.xp6(4),e.Q6J("routerLink",e.DdM(15,Q))}},dependencies:[w.O5,v.W,a.u5,a._Y,a.Fj,a.JJ,a.JL,a.UX,a.sg,a.u,d.lN,d.KE,d.hX,d.TO,d.R9,p.c,p.Nt,c.ot,c.lW,c.RK,f.Ps,f.Hw,g.Cq,g.Ou,h.rH],encapsulation:2,data:{animation:x.L}}),t})()}]}}]);