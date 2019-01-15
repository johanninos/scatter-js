"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var plugin,_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_StorageService=_interopRequireDefault(require("./StorageService")),_getRandomValues=_interopRequireDefault(require("get-random-values")),_createHash=_interopRequireDefault(require("create-hash")),_isomorphicWs=_interopRequireDefault(require("isomorphic-ws")),suffix="/socket.io/?EIO=3&transport=websocket",socket=null,connected=!1,paired=!1,openRequests=[],allowReconnects=!0,reconnectionTimeout=null,sha256=function(a){return(0,_createHash.default)("sha256").update(a).digest("hex")},random=function(){var a=new Uint8Array(24);return(0,_getRandomValues.default)(a),a.join("")},_getOrigin=function getOrigin(){var a;return a="undefined"==typeof location?plugin:location.hasOwnProperty("hostname")&&location.hostname.length&&"localhost"!==location.hostname?location.hostname:plugin,"www."===a.substr(0,4)&&(a=a.replace("www.","")),a},appkey=_StorageService.default.getAppKey();Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;appkey||(appkey="appkey:"+random());var send=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:null,b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null;null===a&&null===b?socket.send("40/scatter"):socket.send("42/scatter,"+JSON.stringify([a,b]))},pairingPromise=null,pair=function(){var a=!!(0<arguments.length&&arguments[0]!==void 0)&&arguments[0];return new Promise(function(b,c){pairingPromise={resolve:b,reject:c},send("pair",{data:{appkey:appkey,origin:_getOrigin(),passthrough:a},plugin:plugin})})},eventHandlers={},SocketService=/*#__PURE__*/function(){function a(){(0,_classCallCheck2.default)(this,a)}return(0,_createClass2.default)(a,null,[{key:"init",value:function init(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:6e4;plugin=a,this.timeout=b}},{key:"getOrigin",value:function getOrigin(){return _getOrigin()}},{key:"addEventHandler",value:function addEventHandler(a,b){b||(b="app"),eventHandlers[b]=a}},{key:"removeEventHandler",value:function removeEventHandler(a){a||(a="app"),delete eventHandlers[a]}},{key:"link",value:function link(){var a=this;return Promise.race([new Promise(function(b){return setTimeout(function(){connected||(b(!1),socket&&(socket.disconnect(),socket=null))},a.timeout)}),new Promise(/*#__PURE__*/function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(b){var c,d;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=function(){socket.onmessage=function(e){// Handshaking/Upgrading
if(-1===e.data.indexOf("42/scatter"))return!1;// Real message
var f=JSON.parse(e.data.replace("42/scatter,","")),g=(0,_slicedToArray2.default)(f,2),h=g[0],i=g[1];return"paired"===h?a(i):"rekey"===h?b():"api"===h?c(i):"event"===h?d(i):void 0};var a=function(a){if(paired=a,paired){var b=_StorageService.default.getAppKey(),c=-1<appkey.indexOf("appkey:")?sha256(appkey):appkey;b&&b===c||(_StorageService.default.setAppKey(c),appkey=_StorageService.default.getAppKey())}pairingPromise.resolve(a)},b=function(){appkey="appkey:"+random(),send("rekeyed",{data:{appkey:appkey,origin:_getOrigin()},plugin:plugin})},c=function(a){var b=openRequests.find(function(b){return b.id===a.id});if(b){openRequests=openRequests.filter(function(b){return b.id!==a.id});var c="object"===(0,_typeof2.default)(a.result)&&null!==a.result&&a.result.hasOwnProperty("isError");c?b.reject(a.result):b.resolve(a.result)}},d=function(a){var b=a.event,c=a.payload;Object.keys(eventHandlers).length&&Object.keys(eventHandlers).map(function(a){eventHandlers[a](b,c)})}},d=function(){var a,e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],f=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;f||(a=new Promise(function(a){return f=a}));var g=e?"local.get-scatter.com:50006":"127.0.0.1:50005",h=e?"wss://":"ws://",i="".concat(h).concat(g).concat(suffix),j=new _isomorphicWs.default(i);return j.onerror=function(){e?d(!1,f):(b(!1),f(!1))},j.onopen=function(){socket=j,send(),clearTimeout(reconnectionTimeout),connected=!0,pair(!0).then(function(){b(!0),f(!0)}),c()},a},a.next=4,d();case 4:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}())])}},{key:"isConnected",value:function isConnected(){return connected}},{key:"isPaired",value:function isPaired(){return paired}},{key:"disconnect",value:function disconnect(){return socket&&socket.disconnect(),!0}},{key:"sendApiRequest",value:function sendApiRequest(a){return new Promise(function(b,c){return"identityFromPermissions"!==a.type||paired?void pair().then(function(){if(!paired)return c({code:"not_paired",message:"The user did not allow this app to connect to their Scatter"});// Request ID used for resolving promises
a.id=random(),a.appkey=appkey,a.nonce=_StorageService.default.getNonce()||0;// Next nonce used to authenticate the next request
var d=random();a.nextNonce=sha256(d),_StorageService.default.setNonce(d),a.hasOwnProperty("payload")&&!a.payload.hasOwnProperty("origin")&&(a.payload.origin=_getOrigin()),openRequests.push(Object.assign(a,{resolve:b,reject:c})),send("api",{data:a,plugin:plugin})}):b(!1)})}}]),a}();exports.default=SocketService;