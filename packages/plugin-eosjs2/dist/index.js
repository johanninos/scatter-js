"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_scatterjsCore=require("scatterjs-core"),socketService=_scatterjsCore.SocketService,proxy=function(a,b){return new Proxy(a,b)},cache={},ScatterEOS=/*#__PURE__*/function(a){function b(){return(0,_classCallCheck2.default)(this,b),(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(b).call(this,_scatterjsCore.Blockchains.EOS,_scatterjsCore.PluginTypes.BLOCKCHAIN_SUPPORT))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"setSocketService",value:function setSocketService(a){socketService=a}},{key:"hookProvider",value:function hookProvider(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,c=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2];return a=_scatterjsCore.Network.fromJson(a),{requiredFields:{},getAvailableKeys:function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,socketService.sendApiRequest({type:"identityFromPermissions",payload:{}}).then(function(a){return a?a.accounts.filter(function(a){return a.blockchain===_scatterjsCore.Blockchains.EOS}).map(function(a){return a.publicKey}):[]});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop();}},a,this)}));return function getAvailableKeys(){return a.apply(this,arguments)}}(),sign:function(){var d=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function d(e){var f;return _regenerator.default.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return f=b?b():{},e.serializedTransaction=Buffer.from(e.serializedTransaction).toString("hex"),d.abrupt("return",new Promise(/*#__PURE__*/function(){var b=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function b(d,g){return _regenerator.default.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:socketService.sendApiRequest({type:"requestSignature",payload:{transaction:e,blockchain:_scatterjsCore.Blockchains.EOS,network:a,requiredFields:f}}).then(function(a){return c?void d({signatures:a.signatures,serializedTransaction:Buffer.from(e.serializedTransaction,"hex")}):d(a.signatures)}).catch(function(a){return g(a)});case 1:case"end":return b.stop();}},b,this)}));return function(){return b.apply(this,arguments)}}()));case 3:case"end":return d.stop();}},d,this)}));return function sign(){return d.apply(this,arguments)}}()}}},{key:"signatureProvider",value:function signatureProvider(){var a=this,b=0>=arguments.length?void 0:arguments[0];// Protocol will be deprecated.
return function(b,c){var d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};b=_scatterjsCore.Network.fromJson(b);var e={},f=function(){return e},g=a.hookProvider(b,f,d.beta3||!1);// The proxy stands between the eosjs object and scatter.
// This is used to add special functionality like adding `requiredFields` arrays to transactions
return proxy(new c(Object.assign(d,{signatureProvider:g})),{get:function get(a,b){return function(){if("undefined"==typeof a[b])throw new Error("".concat(b," does not exist on the eosjs.Api() object."));for(var c=arguments.length,d=Array(c),f=0;f<c;f++)d[f]=arguments[f];var g=d.find(function(a){return a.hasOwnProperty("requiredFields")});return e=g?g.requiredFields:{},a[b].apply(a,d)}}});// Proxy
}}}]),b}(_scatterjsCore.Plugin);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default=ScatterEOS,"undefined"!=typeof window&&(window.ScatterEOS=ScatterEOS);