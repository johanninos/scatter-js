"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_scatterjsCore=require("scatterjs-core"),socketService=_scatterjsCore.SocketService,proxy=function(a,b){return new Proxy(a,b)},ScatterTron=/*#__PURE__*/function(a){function b(){return(0,_classCallCheck2.default)(this,b),(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(b).call(this,_scatterjsCore.Blockchains.TRX,_scatterjsCore.PluginTypes.BLOCKCHAIN_SUPPORT))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"setSocketService",value:function setSocketService(a){socketService=a}},{key:"hookProvider",value:function hookProvider(){throw new Error("Tron hook provider not enabled yet.")}},{key:"signatureProvider",value:function signatureProvider(){var a=0>=arguments.length?void 0:arguments[0],b=1>=arguments.length?void 0:arguments[1];return function(c,d){c=_scatterjsCore.Network.fromJson(c);var e=function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return function(e){return a(),new Promise(function(a,f){var g={transaction:e,participants:[d.defaultAddress.base58]},h={transaction:g,blockchain:_scatterjsCore.Blockchains.TRX,network:c,requiredFields:{},abi:b};socketService.sendApiRequest({type:"requestSignature",payload:h}).then(function(b){return a(b.signatures[0])}).catch(function(a){return f(a)})})}},f=function(){var a=b(),c=a&&a.accounts.find(function(a){return a.blockchain===_scatterjsCore.Blockchains.TRX})?a.accounts.find(function(a){return a.blockchain===_scatterjsCore.Blockchains.TRX}).address:null;c&&d.setAddress(c)};return proxy(d,{get:function get(c,a){return f(),d.trx.sign=e(),"function"==typeof c[a]?function(){for(var b=arguments.length,d=Array(b),g=0;g<b;g++)d[g]=arguments[g];return"contract"===a?proxy(c[a].apply(c,d),{get:function get(g,a){return f(),c.trx.sign=e({abi:d[0],address:d[1],method:a}),g[a]}}):c[a].apply(c,d)}:c[a]}})}}}]),b}(_scatterjsCore.Plugin);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default=ScatterTron,"undefined"!=typeof window&&(window.ScatterTron=ScatterTron);