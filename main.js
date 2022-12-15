(()=>{"use strict";var e=document.querySelector(".edit__num"),t=document.querySelector(".edit__date"),r=document.querySelector(".form"),n=document.querySelector(".form__btn-save"),o=document.querySelector(".form__btn-reset"),i=document.querySelector(".assingment__title"),l=document.querySelector(".massage__text"),c=(document.querySelector(".form__btn-save"),document.querySelectorAll(".table__list")),a={inputList:document.querySelector(".edit").querySelectorAll(".edit__input")},u={inputList:document.querySelector(".assingment").querySelectorAll(".assingment__input")},s={buttonAdd:document.querySelector(".approach__btn-add"),inputTypeOrbit:document.querySelector(".approach__type-orbit"),listTable:document.querySelector(".approach__list"),headerTable:document.querySelector(".approach__header-table"),selectorTemplate:".elements__list-approach",elementsList:document.querySelector(".approach__list").querySelectorAll(".element")},m={buttonAdd:document.querySelector(".condition__btn-add"),listTable:document.querySelector(".condition__list"),headerTable:document.querySelector(".condition__header-table"),selectorTemplate:".elements__list-ko",elementsList:document.querySelector(".condition__list").querySelectorAll(".element")},d={buttonAdd:document.querySelector(".destroy__btn-add"),listTable:document.querySelector(".destroy__list"),headerTable:document.querySelector(".destroy__header-table"),selectorTemplate:".elements__list-ko",elementsList:document.querySelector(".destroy__list").querySelectorAll(".element")},b={buttonAdd:document.querySelector(".deorbit__btn-add"),listTable:document.querySelector(".deorbit__list"),headerTable:document.querySelector(".deorbit__header-table"),selectorTemplate:".elements__list-ko",elementsList:document.querySelector(".deorbit__list").querySelectorAll(".element")},_={buttonAdd:document.querySelector(".spacecraft__btn-add"),listTable:document.querySelector(".spacecraft__list"),headerTable:document.querySelector(".spacecraft__header-table"),selectorTemplate:".elements__list-ka",elementsList:document.querySelector(".spacecraft__list").querySelectorAll(".element")},p={Id:3338,TaskNum:{Num:1811,TaskEpoch:"2022-10-18T10:51:41",ShiftBoss:"Ампилова О.�.",TaskDescription:"Задание"},Directive:{CollisionApproach:{Pairs:[{IdPairs:1,FirstObject:{ObjectNumber:21675,NoradNumber:38978,IntDes:"2012-061B",LocalNumber:null},SecondObject:{ObjectNumber:36025,NoradNumber:33749,IntDes:"2009-008A",LocalNumber:null},CollisionApproachEpoch:"2022-10-20T18:15:05.00",OrbiteType:"MOE"}]},BreakUp:{ObjectInfos:[{ObjectNumber:9793,NoradNumber:37951,IntDes:"2011-074B",LocalNumber:null}]},Deorbit:{ObjectInfos:[{ObjectNumber:47463,NoradNumber:37951,IntDes:"2011-074B",LocalNumber:null},{ObjectNumber:43,NoradNumber:37951,IntDes:"2011-074B",LocalNumber:null}]},ConditionKA:{ObjectInfos:[{Name:"KA obj",ObjectNumber:6793,NoradNumber:37951,IntDes:"2011-074B "}]}},Message:"Something"},f={Id:3336,TaskNum:{Num:1253,TaskEpoch:"2022-10-18T10:51:41",ShiftBoss:"Ivanov A.A.",TaskDescription:"Задание"},Directive:{CollisionApproach:{Pairs:[{IdPairs:1,FirstObject:{ObjectNumber:21675,NoradNumber:38978,IntDes:"2012-061B",LocalNumber:null},SecondObject:{ObjectNumber:36025,NoradNumber:33749,IntDes:"2009-008A",LocalNumber:null},CollisionApproachEpoch:"2022-10-20T18:15:05.00",OrbiteType:"MOE"},{IdPairs:2,FirstObject:{ObjectNumber:21675,NoradNumber:38567,IntDes:"2012-061B",LocalNumber:null},SecondObject:{ObjectNumber:36967,NoradNumber:33735,IntDes:"2009-008A",LocalNumber:null},CollisionApproachEpoch:"2022-10-20T19:15:07.00",OrbiteType:"LEO"}]},BreakUp:{ObjectInfos:[{ObjectNumber:9793,NoradNumber:37951,IntDes:"2011-074B",LocalNumber:null}]},ConditionKA:{ObjectInfos:[{Name:"KA obj1",ObjectNumber:8594,NoradNumber:37951,IntDes:"2011-074B "}]}},Message:"Something else"};function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key,"string"),"symbol"===y(o)?o:String(o)),n)}var o}function h(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var S=function(){function e(t,r){var n=t.selectorTemplate,o=t.elementsList,i=t.headerTable;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selectorTemplate=n,this._containerCards=document.querySelector(this.selectorTemplate),this._checkVisibleTableHeader=r,this._elementsList=o,this._headerTable=i}return h(e,[{key:"createCard",value:function(){return this._element=this._getTemplate(),this._listInputs=this._element.querySelectorAll(".item__input"),this._buttonTrash=this._element.querySelector(".element__btn-trash"),this._buttonSave=this._element.querySelector(".element__btn-done"),this._setEventListeners(),this._element}},{key:"_getTemplate",value:function(){return this._containerCards.content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._buttonTrash.addEventListener("click",this.removeButton=function(){e._remove()}),this._buttonSave.addEventListener("click",this.saveButton=function(){return e.save()})}},{key:"_removeEventListeners",value:function(){this._buttonTrash.removeEventListener("click",this.removeButton),this._buttonSave.removeEventListener("click",this.saveButton)}},{key:"save",value:function(){var e=this;this._listInputs.forEach((function(t){t.readOnly?(t.readOnly=!1,e._buttonSave.classList.remove("element__btn-done_type_edit"),t.classList.remove("item__input_type_readonly")):(t.readOnly=!0,e._buttonSave.classList.add("element__btn-done_type_edit"),t.classList.add("item__input_type_readonly"))}))}},{key:"_remove",value:function(){this._removeEventListeners(),this._element.remove(),this._checkVisibleTableHeader()}}]),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key,"string"),"symbol"===T(o)?o:String(o)),n)}var o}var N=function(){function e(t){var r=t.data,n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=n}var t,r;return t=e,r=[{key:"addItem",value:function(e,t){t.append(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e,section,t._container)}))}}],r&&q(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),O=function(){c.forEach((function(e){A(e)?e.classList.remove("header-table_hidden"):e.classList.add("header-table_hidden")}))},A=function(e){return!!e.querySelector(".element")};function L(e){e.reset(),document.querySelectorAll(".element").forEach((function(e){return e.remove()})),O()}O(),o.addEventListener("click",(function(){i.textContent="Создание задания:",L(r)}));var j=new N({renderer:function(e,t,r){var n=function(e){return new S(e,O).createCard()}(t);r.addItem(n,t.listTable)}});function D(e){e.buttonAdd.addEventListener("click",(function(){E(e),O()}))}function E(e){var t=e.selectorTemplate,r=e.listTable,n=e.headerTable,o=new S({selectorTemplate:t,listTable:r,headerTable:n},O).createCard();return function(e,t){j.addItem(t,e)}(r,o),o}function k(e){var t={};return e.forEach((function(e){t[e.name]=e.value})),t}function I(e,t){return e.listTable.querySelectorAll(".element").forEach((function(e){t.push(C(e)),C(e)})),t}function C(e){return k(e.querySelectorAll(".item__input"))}D(m),D(d),D(b),D(s),D(_);var g={};function B(e){if(function(e,t){e.inputList.forEach((function(e){e.value=t.TaskNum[e.name]}))}(u,e),e.Directive.CollisionApproach){var t=e.Directive.CollisionApproach.Pairs;!function(e,t){t.forEach((function(t){var r=E(e),n=r.querySelectorAll(".objects__item");n[0].querySelectorAll(".item__input").forEach((function(e){e.value=t.FirstObject[e.name]})),n[1].querySelectorAll(".item__input").forEach((function(e){e.value=t.SecondObject[e.name]})),r.querySelector(".item__input_type_time").value=t.CollisionApproachEpoch;for(var o=r.querySelector(".item__input_type_orbite").getElementsByTagName("option"),i=0;i<o.length;i++)o[i].value==t.OrbiteType&&(o[i].selected=!0);w(r)}))}(s,t),s.listTable.classList.remove("header-table_hidden")}if(e.Directive.Condition){var r=e.Directive.Condition.ObjectInfos;P(m,r),m.listTable.classList.remove("header-table_hidden")}if(e.Directive.BreakUp){var o=e.Directive.BreakUp.ObjectInfos;P(d,o),d.listTable.classList.remove("header-table_hidden")}if(e.Directive.Deorbit){var c=e.Directive.Deorbit.ObjectInfos;P(b,c),b.listTable.classList.remove("header-table_hidden")}if(e.Directive.ConditionKA){var a=e.Directive.ConditionKA.ObjectInfos;P(_,a),_.listTable.classList.remove("header-table_hidden")}l.value=e.Message,n.textContent="Изменить задание",i.textContent="Редактирование задания:"}function P(e,t){t.forEach((function(t){var r=E(e);r.querySelectorAll(".item__input").forEach((function(e){e.value=t[e.name]})),w(r)}))}function w(e){var t=e.querySelectorAll(".item__input"),r=e.querySelector(".element__btn-done");t.forEach((function(e){e.readOnly=!0,r.classList.add("element__btn-done_type_edit"),e.classList.add("item__input_type_readonly")}))}r.addEventListener("submit",(function(e){if(g={},e.preventDefault(),g.TaskNum=k(u.inputList),g.Directive={},g.Message=l.value,A(m.listTable)){g.Directive.Condition={};var t=g.Directive.Condition.ObjectInfos=[];t=I(m,t)}if(A(d.listTable)){g.Directive.BreakUp={};var o=g.Directive.BreakUp.ObjectInfos=[];o=I(d,o)}if(A(b.listTable)){g.Directive.Deorbit={};var c=g.Directive.Deorbit.ObjectInfos=[];c=I(b,c)}if(A(_.listTable)){g.Directive.ConditionKA={};var a=g.Directive.ConditionKA.ObjectInfos=[];a=I(_,a)}if(A(s.listTable)){g.Directive.CollisionApproach={};var p=g.Directive.CollisionApproach.Pairs=[];document.querySelector(".approach__list").querySelectorAll(".element").forEach((function(e,t){var r={};r.IdPairs=t+1,r.CollisionApproachEpoch=e.querySelector(".item__input_type_time").value,r.OrbiteType=e.querySelector(".item__input_type_orbite").value;var n=e.querySelectorAll(".objects__item"),o=n[0].querySelectorAll(".item__input"),i=n[1].querySelectorAll(".item__input");r.FirstObject=k(o),r.SecondObject=k(i),p.push(r)}))}console.log(g),n.textContent="Добавить задание",i.textContent="Создание задания:",r.reset()})),e.addEventListener("submit",(function(e){e.preventDefault(),(g={}).TaskNum=k(a.inputList),console.log(g),L(r),B(f)})),t.addEventListener("submit",(function(e){e.preventDefault(),(g={}).TaskNum=k(a.inputList),console.log(g),L(r),B(p)}))})();
//# sourceMappingURL=main.js.map