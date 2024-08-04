import './polyfills.server.mjs';
import{$ as De,A as m,B as _,C as v,D as l,E as u,F as p,G as D,H as h,I as g,J as d,K as M,L as I,M as _e,N as ve,O as ye,P as Ce,Q as te,R,S as B,U as Ve,Z as be,a as de,aa as Me,b as he,ba as ie,c as fe,d as Q,da as we,e as J,ea as Ae,f as Z,fa as Ee,g as A,ga as Fe,h as pe,ha as Ie,i as k,ia as Se,j as T,ja as xe,k as X,l as E,m as ge,ma as Oe,n as C,o as V,p as me,q as Y,qa as Ne,r as j,s as a,t as f,ta as Pe,u as K,v as x,w as ee,x as H,y as F,z as G}from"./chunk-3FHZL27G.mjs";import{a as y,b as w}from"./chunk-VVCT4QZE.mjs";var ke=(()=>{let e=class e{constructor(){this.title="Les petits plats"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=T({type:e,selectors:[["app-root"]],standalone:!0,features:[R],decls:1,vars:0,template:function(r,o){r&1&&p(0,"router-outlet")},dependencies:[Ne]});let t=e;return t})();var Le=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(f(K),f(Y))},e.\u0275dir=E({type:e});let t=e;return t})(),at=(()=>{let e=class e extends Le{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=me(e)))(o||e)}})(),e.\u0275dir=E({type:e,features:[x]});let t=e;return t})(),$e=new A("");var lt={provide:$e,useExisting:Q(()=>W),multi:!0};function ut(){let t=ie()?ie().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ct=new A(""),W=(()=>{let e=class e extends Le{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ut())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(f(K),f(Y),f(ct,8))},e.\u0275dir=E({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&h("input",function(c){return o._handleInput(c.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(c){return o._compositionEnd(c.target.value)})},features:[te([lt]),x]});let t=e;return t})();var dt=new A(""),ht=new A("");function We(t){return t!=null}function qe(t){return Ve(t)?de(t):t}function ze(t){let e={};return t.forEach(n=>{e=n!=null?y(y({},e),n):e}),Object.keys(e).length===0?null:e}function Qe(t,e){return e.map(n=>n(t))}function ft(t){return!t.validate}function Je(t){return t.map(e=>ft(e)?e:n=>e.validate(n))}function pt(t){if(!t)return null;let e=t.filter(We);return e.length==0?null:function(n){return ze(Qe(n,e))}}function Ze(t){return t!=null?pt(Je(t)):null}function gt(t){if(!t)return null;let e=t.filter(We);return e.length==0?null:function(n){let i=Qe(n,e).map(qe);return fe(i).pipe(he(ze))}}function Xe(t){return t!=null?gt(Je(t)):null}function Te(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function mt(t){return t._rawValidators}function _t(t){return t._rawAsyncValidators}function re(t){return t?Array.isArray(t)?t:[t]:[]}function L(t,e){return Array.isArray(t)?t.includes(e):t===e}function je(t,e){let n=re(e);return re(t).forEach(r=>{L(n,r)||n.push(r)}),n}function He(t,e){return re(e).filter(n=>!L(t,n))}var $=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ze(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Xe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},oe=class extends ${get formDirective(){return null}get path(){return null}},P=class extends ${constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},se=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},vt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},yi=w(y({},vt),{"[class.ng-submitted]":"isSubmitted"}),Ye=(()=>{let e=class e extends se{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(f(P,2))},e.\u0275dir=E({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&F("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[x]});let t=e;return t})();var O="VALID",U="INVALID",S="PENDING",N="DISABLED";function yt(t){return(q(t)?t.validators:t)||null}function Ct(t){return Array.isArray(t)?Ze(t):t||null}function Vt(t,e){return(q(e)?e.asyncValidators:t)||null}function bt(t){return Array.isArray(t)?Xe(t):t||null}function q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var ae=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O}get invalid(){return this.status===U}get pending(){return this.status==S}get disabled(){return this.status===N}get enabled(){return this.status!==N}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(je(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(je(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(He(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(He(e,this._rawAsyncValidators))}hasValidator(e){return L(this._rawValidators,e)}hasAsyncValidator(e){return L(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=S,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=N,this.errors=null,this._forEachChild(i=>{i.disable(w(y({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(w(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(i=>{i.enable(w(y({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(w(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===S)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?N:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=S,this._hasOwnPendingAsyncValidator=!0;let n=qe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new j,this.statusChanges=new j}_calculateStatus(){return this._allControlsDisabled()?N:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(S)?S:this._anyControlsHaveStatus(U)?U:O}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=bt(this._rawAsyncValidators)}};var Ke=new A("CallSetDisabledState",{providedIn:"root",factory:()=>le}),le="always";function Dt(t,e){return[...e.path,t]}function Mt(t,e,n=le){At(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Et(t,e),It(t,e),Ft(t,e),wt(t,e)}function Ge(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function wt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function At(t,e){let n=mt(t);e.validator!==null?t.setValidators(Te(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=_t(t);e.asyncValidator!==null?t.setAsyncValidators(Te(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Ge(e._rawValidators,r),Ge(e._rawAsyncValidators,r)}function Et(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&et(t,e)})}function Ft(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&et(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function et(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function It(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function St(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function xt(t){return Object.getPrototypeOf(t.constructor)===at}function Ot(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===W?n=o:xt(o)?i=o:r=o}),r||i||n||null}function Re(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Be(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Nt=class extends ae{constructor(e=null,n,i){super(yt(n),Vt(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Be(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Re(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Re(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Be(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Pt={provide:P,useExisting:Q(()=>ue)},Ue=Promise.resolve(),ue=(()=>{let e=class e extends P{constructor(i,r,o,s,c,b){super(),this._changeDetectorRef=c,this.callSetDisabledState=b,this.control=new Nt,this._registered=!1,this.name="",this.update=new j,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Ot(this,s)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),St(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Mt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Ue.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&De(r);Ue.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Dt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(f(oe,9),f(dt,10),f(ht,10),f($e,10),f(be,8),f(Ke,8))},e.\u0275dir=E({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[k.None,"disabled","isDisabled"],model:[k.None,"ngModel","model"],options:[k.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[te([Pt]),x,ge]});let t=e;return t})();var kt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=X({type:e}),e.\u0275inj=Z({});let t=e;return t})();var tt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Ke,useValue:i.callSetDisabledState??le}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=X({type:e}),e.\u0275inj=Z({imports:[kt]});let t=e;return t})();var it=(()=>{let e=class e{constructor(i){this.httpClient=i,this.jsonURL="assets/data/recipes.json"}getData(){return this.httpClient.get(this.jsonURL)}};e.\u0275fac=function(r){return new(r||e)(pe(Ee))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ce=(t,e)=>({"fa-angle-down":t,"fa-angle-up":e});function Ht(t,e){if(t&1){let n=D();l(0,"li",20),h("click",function(){C(n);let r=g().$implicit,o=g(2);return V(o.selectResult(r))}),d(1),u()}if(t&2){let n=e.$implicit;a(),I(" ",n.ingredient," ")}}function Gt(t,e){if(t&1){let n=D();l(0,"li",20),h("click",function(){let r=C(n).$implicit,o=g(2);return V(o.selectResult(r))}),d(1),u(),_(2,Ht,2,1,"li",21,m),l(4,"li",20),h("click",function(){let r=C(n).$implicit,o=g(2);return V(o.selectResult(r))}),d(5),u()}if(t&2){let n=e.$implicit;a(),I(" ",n.name," "),a(),v(n.ingredients),a(3),I(" ",n.description," ")}}function Rt(t,e){if(t&1&&(l(0,"ul",9),_(1,Gt,6,2,null,null,m),u()),t&2){let n=g();a(),v(n.filteredResults)}}function Bt(t,e){t&1&&(l(0,"ul",9)(1,"li",21),d(2," Aucune recette ne correspond a votre recherche "),u()())}function Ut(t,e){if(t&1){let n=D();l(0,"div",10)(1,"div",22)(2,"span",23),d(3),u(),l(4,"span",24)(5,"i",25),h("click",function(){C(n);let r=g();return V(r.ngOnInit())}),u()()()()}if(t&2){let n=g();a(3),M(n.selected)}}function Lt(t,e){if(t&1){let n=D();l(0,"li")(1,"a",26),h("click",function(){let r=C(n).$implicit,o=g();return V(o.searchIngredient(r))}),d(2),u()()}if(t&2){let n=e.$implicit;a(2),M(n)}}function $t(t,e){if(t&1){let n=D();l(0,"li")(1,"a",26),h("click",function(){let r=C(n).$implicit,o=g();return V(o.searchAppareil(r.appliance))}),d(2),u()()}if(t&2){let n=e.$implicit;a(2),M(n.appliance)}}function Wt(t,e){if(t&1){let n=D();l(0,"li")(1,"a",26),h("click",function(){let r=C(n).$implicit,o=g(2);return V(o.searchUstensils(r))}),d(2),u()()}if(t&2){let n=e.$implicit;a(2),M(n)}}function qt(t,e){if(t&1&&_(0,Wt,3,1,"li",null,m),t&2){let n=e.$implicit;v(n.ustensils)}}function zt(t,e){if(t&1&&(l(0,"strong"),d(1),u(),d(2),p(3,"br")),t&2){let n=e.$implicit;a(),I("",n.ingredient,":"),a(),_e(" ",n.quantity,"",n.unit,"")}}function Qt(t,e){if(t&1&&(l(0,"div",19)(1,"div",27),p(2,"div",28),l(3,"div",29)(4,"div",30)(5,"h5",31),d(6),u(),l(7,"div",32),p(8,"i",33),d(9),u()(),l(10,"div",34)(11,"p",35),_(12,zt,4,3,null,null,m),u(),l(14,"p",36),d(15),u()()()()()),t&2){let n=e.$implicit;a(6),M(n.name),a(3),I(" ",n.time," min"),a(3),v(n.ingredients),a(3),M(n.description)}}var nt=(()=>{let e=class e{constructor(i){this.service=i,this.dropdowns={ingredients:!1,appareils:!1,ustensiles:!1},this.selected="",this.searchQuery="",this.filteredResults=[],this.showSuggestions=!1}ngOnInit(){this.searchQuery="",this.selected="",this.loadData(),this.getIngredients(),this.getAppareil()}toggleDropdown(i){this.dropdowns[i]=!this.dropdowns[i]}loadData(){this.service.getData().subscribe(i=>{this.data=i,console.log(this.data)},i=>{console.error("Error loading JSON data",i)})}getIngredients(){this.service.getData().subscribe(i=>{let r=new Set;i.forEach(s=>{s.ingredients.forEach(c=>{r.add(c.ingredient)})});let o=Array.from(r);console.log("uniqueIngredients",o),this.ingredientList=o},i=>{console.error("Error loading JSON data",i)})}getAppareil(){this.service.getData().subscribe(i=>{this.appareilList=i.reduce((r,o)=>(r.some(s=>s.appliance===o.appliance)||r.push(o),r),[]),console.log(this.appareilList)})}searchIngredient(i){console.log(i),this.selected=i,this.service.getData().subscribe(r=>{this.data=r.sort((o,s)=>{let c=o.ingredients.some(z=>z.ingredient===i),b=s.ingredients.some(z=>z.ingredient===i);return c&&!b?-1:!c&&b?1:o.name.localeCompare(s.name)}),console.log(this.data)},r=>{console.error("Error loading JSON data",r)})}searchUstensils(i){console.log(i),this.selected=i,this.service.getData().subscribe(r=>{this.data=r.sort((o,s)=>{let c=o.ustensils.includes(i),b=s.ustensils.includes(i);return c&&!b?-1:!c&&b?1:0}),console.log(this.data)},r=>{console.error("Error loading JSON data",r)})}searchAppareil(i){this.selected=i,this.service.getData().subscribe(r=>{this.data=r.sort((o,s)=>o.appliance===i?-1:s.appliance===i?1:o.appliance.localeCompare(s.appliance)),console.log(this.data)},r=>{console.error("Error loading JSON data",r)})}onSearch(i){let r=i.target.value.toLowerCase();r.length>=3?(this.filteredResults=this.data.filter(o=>o.name.toLowerCase().includes(r)||o.description.toLowerCase().includes(r)||o.ingredients.some(s=>s.ingredient.toLowerCase().includes(r))),this.showSuggestions=!0,this.filteredResults||(this.filteredResults=[])):this.showSuggestions=!1}selectResult(i){this.searchQuery=i.name||i.ingredient||i.description,this.selected=i.name,console.log(i),this.data=[i],this.showSuggestions=!1}onFocus(){this.showSuggestions=this.filteredResults.length>0}onBlur(){setTimeout(()=>{this.showSuggestions=!1},200)}nativeSearch(){if(this.showSuggestions=!this.showSuggestions,console.log(this.searchQuery),this.searchQuery.length>=3){this.selected=this.searchQuery;let i=[];for(let r=0;r<this.data.length;r++){let o=this.data[r];if(o.name.toLowerCase().includes(this.searchQuery)||o.description.toLowerCase().includes(this.searchQuery))i.push(o);else for(let s=0;s<o.ingredients.length;s++)if(o.ingredients[s].ingredient.toLowerCase().includes(this.searchQuery)){i.push(o);break}}console.log("result : ",i),this.filteredResults=i,this.data=i,this.showSuggestions=!0,this.filteredResults||(this.filteredResults=[])}else this.showSuggestions=!1}};e.\u0275fac=function(r){return new(r||e)(f(it))},e.\u0275cmp=T({type:e,selectors:[["app-home"]],standalone:!0,features:[R],decls:37,vars:22,consts:[[1,"container"],[1,"my-4","text-center"],["src","assets/logo.png","alt","Les petits plats",1,"logo"],[1,"input-group","mb-3",3,"focusin","focusout"],["type","search","placeholder","Rechercher titre, ingr\xE9dients ou description.",1,"form-control",3,"ngModelChange","input","ngModel"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"fas","fa-search"],[1,"position-relative","showSuggestions"],[1,"list-group","w-100"],[1,"mt-4","mb-4"],[1,"d-flex","mb-4"],[1,"btn-group","mr-2"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-purple",3,"click"],[1,"fas",3,"ngClass"],[1,"dropdown-menu",2,"max-height","200px","overflow-y","auto"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-green",3,"click"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-red",3,"click"],[1,"row"],[1,"col-md-4","mb-4"],[1,"list-group-item","list-group-item-action",3,"click"],[1,"list-group-item","list-group-item-action"],[1,"btn-custom"],[1,"btn-label"],[1,""],[1,"fas","fa-times","m-1",3,"click"],[1,"dropdown-item",3,"click"],[1,"card"],[1,"card-img-top"],[1,"card-body"],[1,"card-body-title","mb-3"],[1,"card-title"],[1,"recipe-time"],[1,"far","fa-clock"],[1,"card-text-content","card-body-title"],[1,"card-text"],[1,"card-text",2,"max-height","90px","overflow-y","auto","max-width","40%"]],template:function(r,o){r&1&&(l(0,"div",0)(1,"header",1),p(2,"img",2),u(),l(3,"div",3),h("focusin",function(){return o.onFocus()})("focusout",function(){return o.onBlur()}),l(4,"input",4),Ce("ngModelChange",function(c){return ye(o.searchQuery,c)||(o.searchQuery=c),c}),h("input",function(c){return o.onSearch(c)}),u(),l(5,"div",5)(6,"button",6),h("click",function(){return o.nativeSearch()}),p(7,"i",7),u()()(),l(8,"div",8),ee(9,Rt,3,0,"ul",9)(10,Bt,3,0,"ul",9),u(),ee(11,Ut,6,1,"div",10),l(12,"div",11)(13,"div",12)(14,"button",13),h("click",function(){return o.toggleDropdown("ingredients")}),d(15," Ingredients "),p(16,"i",14),u(),l(17,"ul",15),_(18,Lt,3,1,"li",null,m),u()(),l(20,"div",12)(21,"button",16),h("click",function(){return o.toggleDropdown("appareils")}),d(22," Appareils "),p(23,"i",14),u(),l(24,"ul",15),_(25,$t,3,1,"li",null,m),u()(),l(27,"div",12)(28,"button",17),h("click",function(){return o.toggleDropdown("ustensiles")}),d(29," Ustensiles "),p(30,"i",14),u(),l(31,"ul",15),_(32,qt,2,0,null,null,m),u()()(),l(34,"div",18),_(35,Qt,16,3,"div",19,m),u()()),r&2&&(a(4),ve("ngModel",o.searchQuery),a(5),G(9,o.filteredResults.length>0&&o.showSuggestions?9:-1),a(),G(10,o.filteredResults.length===0&&o.showSuggestions?10:-1),a(),G(11,o.selected?11:-1),a(5),H("ngClass",B(13,ce,!o.dropdowns.ingredients,o.dropdowns.ingredients)),a(),F("show",o.dropdowns.ingredients),a(),v(o.ingredientList),a(5),H("ngClass",B(16,ce,!o.dropdowns.appareils,o.dropdowns.appareils)),a(),F("show",o.dropdowns.appareils),a(),v(o.appareilList),a(5),H("ngClass",B(19,ce,!o.dropdowns.ustensiles,o.dropdowns.ustensiles)),a(),F("show",o.dropdowns.ustensiles),a(),v(o.data),a(3),v(o.data))},dependencies:[Ae,we,tt,W,Ye,ue],styles:["a[_ngcontent-%COMP%]{cursor:pointer}.logo[_ngcontent-%COMP%]{max-width:250px;margin-bottom:20px}.list-group[_ngcontent-%COMP%]{z-index:1000;max-height:200px;overflow-y:scroll;margin-bottom:50px}.list-group-item[_ngcontent-%COMP%]{cursor:pointer}.input-group[_ngcontent-%COMP%]{margin:0 auto}.btn-group[_ngcontent-%COMP%]{margin-right:30px}.btn-group[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{padding:20px;font-weight:700}.btn-custom[_ngcontent-%COMP%]{background-color:#8000ff;color:#fff;display:flex;align-items:center;position:relative;margin-right:90%;justify-content:space-between;border-radius:5px;padding:5px}.btn-custom[_ngcontent-%COMP%]   .btn-label[_ngcontent-%COMP%]{margin-right:5px}.btn-custom[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%]{color:#fff;border:2px solid white;border-radius:50%;padding:2px 5px;cursor:pointer}.btn-custom[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%]:hover{border:2px solid #f2f2f2}.card-img-top[_ngcontent-%COMP%]{background-color:#d3c2c2;height:150px}.card-text[_ngcontent-%COMP%]{font-size:.9rem}.recipe-time[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:700}.recipe-time[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}.card-body-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.btn[_ngcontent-%COMP%]{border-radius:0 20px 20px 0}.btn-purple[_ngcontent-%COMP%]{background-color:#8000ff;color:#fff}.btn-purple[_ngcontent-%COMP%]:hover{background-color:#6a00cc;color:#fff}.btn-green[_ngcontent-%COMP%]{background-color:#00ffaf;color:#fff}.btn-green[_ngcontent-%COMP%]:hover{background-color:#00cc8a;color:#fff}.btn-red[_ngcontent-%COMP%]{background-color:#ff004f;color:#fff}.btn-red[_ngcontent-%COMP%]:hover{background-color:#cc003e;color:#fff}"]});let t=e;return t})();var rt=[{path:"home",component:nt},{path:"**",redirectTo:"home"}];var ot={providers:[Pe(rt),xe(),Fe(Ie())]};var Jt={providers:[Oe()]},st=Me(ot,Jt);var Zt=()=>Se(ke,st),Bi=Zt;export{Bi as a};
