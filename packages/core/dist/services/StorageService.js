"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),storage={},getWindow=function(){return"undefined"==typeof window?{localStorage:{setItem:function setItem(a,b){return storage[a]=b},getItem:function getItem(a){return storage[a]||null},removeItem:function removeItem(a){return delete storage[a]}}}:window},StorageService=/*#__PURE__*/function(){function a(){(0,_classCallCheck2.default)(this,a)}return(0,_createClass2.default)(a,null,[{key:"setAppKey",value:function setAppKey(a){getWindow().localStorage.setItem("appkey",a)}},{key:"getAppKey",value:function getAppKey(){return getWindow().localStorage.getItem("appkey")}},{key:"removeAppKey",value:function removeAppKey(){return getWindow().localStorage.removeItem("appkey")}},{key:"setNonce",value:function setNonce(a){getWindow().localStorage.setItem("nonce",a)}},{key:"getNonce",value:function getNonce(){return getWindow().localStorage.getItem("nonce")}},{key:"removeNonce",value:function removeNonce(){return getWindow().localStorage.removeItem("nonce")}}]),a}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default=StorageService;