const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.6Bb56eQa.js","../chunks/CRUsCSWV.js","../chunks/IHki7fMi.js","../chunks/CxnCOJnG.js","../chunks/DErh4lBM.js","../chunks/-kjmKd_Q.js","../chunks/D9rPE3x6.js","../chunks/BzX2F8xg.js","../chunks/CmGUCpOy.js","../assets/0.CbNKPoEy.css","../nodes/1.BVyLsGqW.js","../nodes/2.BKYgV_hV.js","../nodes/3.Cc0-4Buo.js","../chunks/D6YF6ztN.js","../chunks/COqcEkzf.js","../assets/Card.BarILZit.css","../chunks/B79fQi9A.js","../assets/Badge.D1UTJWue.css","../chunks/B4YznNug.js","../assets/SkeletonLoader.CK3xjwXZ.css","../chunks/BMre6Alt.js","../assets/3.BT-wj0Nf.css","../nodes/4.HrmdJp2x.js","../chunks/D9BD8Bbg.js","../assets/4.Diezt62L.css","../nodes/5.BZwdt4hV.js","../assets/5.uI-FNlsM.css","../nodes/6.DZUGMx4c.js","../nodes/7.DtZa8yV0.js","../nodes/8.DAle2Dss.js","../assets/8.23p-iqVw.css","../nodes/9.D5riAFqh.js","../assets/9.D6R3BwPy.css","../nodes/10.DNqT0X9t.js","../assets/10.BeUKzFrO.css","../nodes/11.G5Qbz31u.js","../nodes/12.DPS6Z6Vh.js"])))=>i.map(i=>d[i]);
import{f as Wt}from"../chunks/CmGUCpOy.js";import{S as Pt,i as Tt,s as Lt,d as U,o as G,p as E,x as re,y as ie,b as K,h as Ut,G as z,k as Gt,T as Et,A as zt,U as Vt,V as Z,m as C,v as ee,q as te,u as be,r as _e,I as L,e as Jt,f as Kt,j as Qt,W as le,a as Xt,g as $t,t as Yt}from"../chunks/CRUsCSWV.js";import"../chunks/IHki7fMi.js";const Zt="modulepreload",Ct=function(n,r){return new URL(n,r).href},me={},N=function(r,i,s){let c=Promise.resolve();if(i&&i.length>0){const a=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),d=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));c=Promise.allSettled(i.map(h=>{if(h=Ct(h,s),h in me)return;me[h]=!0;const p=h.endsWith(".css"),O=p?'[rel="stylesheet"]':"";if(!!s)for(let y=a.length-1;y>=0;y--){const _=a[y];if(_.href===h&&(!p||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${O}`))return;const R=document.createElement("link");if(R.rel=p?"stylesheet":Zt,p||(R.as="script"),R.crossOrigin="",R.href=h,d&&R.setAttribute("nonce",d),document.head.appendChild(R),p)return new Promise((y,_)=>{R.addEventListener("load",y),R.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function b(a){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=a,window.dispatchEvent(u),!u.defaultPrevented)throw a}return c.then(a=>{for(const u of a||[])u.status==="rejected"&&b(u.reason);return r().catch(b)})};var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Se={},ae={};Object.defineProperty(ae,"__esModule",{value:!0});ae.TvmClientError=void 0;class en extends Error{constructor(r,i,s){super(i),this.code=r,this.data=s}}ae.TvmClientError=en;(function(n){var r=P&&P.__awaiter||function(y,_,o,f){function w(q){return q instanceof o?q:new o(function(M){M(q)})}return new(o||(o=Promise))(function(q,M){function j(k){try{v(f.next(k))}catch(I){M(I)}}function l(k){try{v(f.throw(k))}catch(I){M(I)}}function v(k){k.done?q(k.value):w(k.value).then(j,l)}v((f=f.apply(y,_||[])).next())})};Object.defineProperty(n,"__esModule",{value:!0}),n.BinaryBridge=n.useLibrary=n.getBridge=n.ResponseType=void 0;const i=ae;var s;(function(y){y[y.Success=0]="Success",y[y.Error=1]="Error",y[y.Nop=2]="Nop",y[y.AppRequest=3]="AppRequest",y[y.AppNotify=4]="AppNotify",y[y.Custom=100]="Custom"})(s=n.ResponseType||(n.ResponseType={}));let c;function b(){if(!c)throw new i.TvmClientError(1,"TON Client binary bridge isn't set.");return c}n.getBridge=b;function a(y){c=new d(y)}n.useLibrary=a;function u(y){return"requestParamsSync"in y?{syncLibrary:y}:"requestSync"in y?{syncLibrary:new p(y)}:"sendRequestParams"in y?{library:y}:{library:new h(y)}}class d{constructor(_){this.loading=void 0,this.loadError=void 0,this.binding=void 0,this.requests=new Map,this.nextRequestId=1,this.contextCount=0,this.responseHandlerAssigned=!1;const o=_();o instanceof Promise?(this.loading=[],o.then(f=>{const w=this.loading;this.loading=void 0;const q=u(f);this.binding=q,w==null||w.forEach(M=>M.resolve(q))},f=>{const w=this.loading;this.loading=void 0,this.loadError=f??void 0,w==null||w.forEach(q=>q.reject(f))})):this.binding=u(o)}checkResponseHandler(){var _,o;const f=this.contextCount>0||this.requests.size>0;if(this.responseHandlerAssigned!==f){if(this.binding){const{library:w,syncLibrary:q}=this.binding;if(f){const M=(j,l,v,k)=>this.handleLibraryResponse(j,l,v,k);(_=w??q)===null||_===void 0||_.setResponseParamsHandler(M)}else(o=w??q)===null||o===void 0||o.setResponseParamsHandler()}this.responseHandlerAssigned=f}}getLibName(){return r(this,void 0,void 0,function*(){const{library:_,syncLibrary:o}=yield this.bindingRequired();return o?o.getLibName():yield _.getLibName()})}getLibNameSync(){return this.syncLibraryRequired().getLibName()}createContext(_){return r(this,void 0,void 0,function*(){const{library:o,syncLibrary:f}=yield this.bindingRequired();this.contextCount+=1;const w=JSON.stringify(_),q=f?f.createContext(w):yield o.createContext(w);return d.parseResult(q)})}createContextSync(_){const o=this.syncLibraryRequired();this.contextCount+=1;const f=JSON.stringify(_),w=o.createContext(f);return d.parseResult(w)}destroyContext(_){var o,f;this.contextCount=Math.max(this.contextCount-1,0),this.checkResponseHandler(),this.binding&&((f=(o=this.binding.library)!==null&&o!==void 0?o:this.binding.syncLibrary)===null||f===void 0||f.destroyContext(_))}request(_,o,f,w){return r(this,void 0,void 0,function*(){const{library:q,syncLibrary:M}=yield this.bindingRequired();return new Promise((j,l)=>{var v;const k={resolve:j,reject:l,responseHandler:w},I=this.generateRequestId();this.requests.set(I,k),this.checkResponseHandler(),(v=q??M)===null||v===void 0||v.sendRequestParams(_,I,o,f)})})}requestSync(_,o,f){const w=this.syncLibraryRequired();return d.parseResultParams(w.requestParamsSync(_,o,f))}bindingRequired(){return this.binding?Promise.resolve(this.binding):this.loadError?Promise.reject(this.loadError):this.loading===void 0?Promise.reject(new i.TvmClientError(1,"TON Client binary library isn't set.")):new Promise((_,o)=>{var f;(f=this.loading)===null||f===void 0||f.push({resolve:_,reject:o})})}syncLibraryRequired(){var _;const o=(_=this.binding)===null||_===void 0?void 0:_.syncLibrary;if(o)return o;throw new i.TvmClientError(1,"TON Client binary library does not support sync calls.")}generateRequestId(){const _=this.nextRequestId;do this.nextRequestId+=1,this.nextRequestId>=Number.MAX_SAFE_INTEGER&&(this.nextRequestId=1);while(this.requests.has(this.nextRequestId));return _}handleLibraryResponse(_,o,f,w){const q=this.requests.get(_);if(q)switch(w&&(this.requests.delete(_),this.checkResponseHandler()),f){case s.Success:q.resolve(o);break;case s.Error:q.reject(o);break;default:(f===s.AppNotify||f===s.AppRequest||f>=s.Custom)&&q.responseHandler&&q.responseHandler(o,f)}}static parseResult(_){if(_!==void 0)return d.parseResultParams(JSON.parse(_))}static parseResultParams(_){if(_!==void 0){if("error"in _)throw new i.TvmClientError(_.error.code,_.error.message,_.error.data);return _.result}}}n.BinaryBridge=d;class h{constructor(_){this.library=_}getLibName(){return this.library.getLibName()}createContext(_){return this.library.createContext(_)}destroyContext(_){this.library.destroyContext(_)}setResponseParamsHandler(_){_===void 0?this.library.setResponseHandler(void 0):this.library.setResponseHandler(O(_))}sendRequestParams(_,o,f,w){this.library.sendRequest(_,o,f,R(w))}}class p{constructor(_){this.library=_}getLibName(){return this.library.getLibName()}createContext(_){return this.library.createContext(_)}destroyContext(_){this.library.destroyContext(_)}setResponseParamsHandler(_){_===void 0?this.library.setResponseHandler(void 0):this.library.setResponseHandler(O(_))}sendRequestParams(_,o,f,w){this.library.sendRequest(_,o,f,R(w))}requestParamsSync(_,o,f){return F(this.library.requestSync(_,o,R(f)))}}function O(y){return(_,o,f,w)=>y(_,F(o),f,w)}function F(y){return y!==""?JSON.parse(y):void 0}function R(y){return y==null?"":JSON.stringify(y,(_,o)=>typeof o=="bigint"?o<Number.MAX_SAFE_INTEGER&&o>Number.MIN_SAFE_INTEGER?Number(o):o.toString():o)}})(Se);var de={},fe={};(function(n){var r=P&&P.__awaiter||function(e,t,g,m){function S(V){return V instanceof g?V:new g(function(Q){Q(V)})}return new(g||(g=Promise))(function(V,Q){function Ht(J){try{oe(m.next(J))}catch(ue){Q(ue)}}function Dt(J){try{oe(m.throw(J))}catch(ue){Q(ue)}}function oe(J){J.done?V(J.value):S(J.value).then(Ht,Dt)}oe((m=m.apply(e,t||[])).next())})};Object.defineProperty(n,"__esModule",{value:!0}),n.builderOpCell=n.builderOpBitString=n.builderOpInteger=n.bocCacheTypeUnpinned=n.bocCacheTypePinned=n.AbiModule=n.DataLayout=n.MessageBodyType=n.signerSigningBox=n.signerKeys=n.signerExternal=n.signerNone=n.abiSerialized=n.abiHandle=n.abiJson=n.abiContract=n.AbiErrorCode=n.CryptoModule=n.resultOfAppEncryptionBoxDecrypt=n.resultOfAppEncryptionBoxEncrypt=n.resultOfAppEncryptionBoxGetInfo=n.paramsOfAppEncryptionBoxDecrypt=n.paramsOfAppEncryptionBoxEncrypt=n.paramsOfAppEncryptionBoxGetInfo=n.resultOfAppSigningBoxSign=n.resultOfAppSigningBoxGetPublicKey=n.paramsOfAppSigningBoxSign=n.paramsOfAppSigningBoxGetPublicKey=n.resultOfAppPasswordProviderGetPassword=n.paramsOfAppPasswordProviderGetPassword=n.MnemonicDictionary=n.boxEncryptionAlgorithmNaclSecretBox=n.boxEncryptionAlgorithmNaclBox=n.boxEncryptionAlgorithmChaCha20=n.cryptoBoxSecretEncryptedSecret=n.cryptoBoxSecretPredefinedSeedPhrase=n.cryptoBoxSecretRandomSeedPhrase=n.CipherMode=n.encryptionAlgorithmNaclSecretBox=n.encryptionAlgorithmNaclBox=n.encryptionAlgorithmChaCha20=n.encryptionAlgorithmAES=n.CryptoErrorCode=n.AccountModule=n.AccountErrorCode=n.ClientModule=n.appRequestResultOk=n.appRequestResultError=n.NetworkQueriesProtocol=n.ClientErrorCode=void 0,n.paramsOfAppDebotBrowserGetSigningBox=n.paramsOfAppDebotBrowserInput=n.paramsOfAppDebotBrowserShowAction=n.paramsOfAppDebotBrowserSwitchCompleted=n.paramsOfAppDebotBrowserSwitch=n.paramsOfAppDebotBrowserLog=n.debotActivityTransaction=n.DebotErrorCode=n.NetModule=n.AggregationFn=n.paramsOfQueryOperationQueryCounterparties=n.paramsOfQueryOperationAggregateCollection=n.paramsOfQueryOperationWaitForCollection=n.paramsOfQueryOperationQueryCollection=n.SortDirection=n.NetErrorCode=n.TvmModule=n.accountForExecutorAccount=n.accountForExecutorUninit=n.accountForExecutorNone=n.TvmErrorCode=n.UtilsModule=n.AccountAddressType=n.addressStringFormatBase64=n.addressStringFormatHex=n.addressStringFormatAccountId=n.ProcessingModule=n.MessageMonitoringStatus=n.monitoredMessageHashAddress=n.monitoredMessageBoc=n.MonitorFetchWaitMode=n.processingEventRempError=n.processingEventRempOther=n.processingEventRempIncludedIntoAcceptedBlock=n.processingEventRempIncludedIntoBlock=n.processingEventRempSentToValidators=n.processingEventMessageExpired=n.processingEventFetchNextBlockFailed=n.processingEventWillFetchNextBlock=n.processingEventSendFailed=n.processingEventDidSend=n.processingEventWillSend=n.processingEventFetchFirstBlockFailed=n.processingEventWillFetchFirstBlock=n.ProcessingErrorCode=n.BocModule=n.BocErrorCode=n.tvcV1=n.builderOpAddress=n.builderOpCellBoc=void 0,n.ProofsModule=n.ProofsErrorCode=n.DebotModule=n.resultOfAppDebotBrowserApprove=n.resultOfAppDebotBrowserInvokeDebot=n.resultOfAppDebotBrowserGetSigningBox=n.resultOfAppDebotBrowserInput=n.paramsOfAppDebotBrowserApprove=n.paramsOfAppDebotBrowserSend=n.paramsOfAppDebotBrowserInvokeDebot=void 0,function(e){e[e.NotImplemented=1]="NotImplemented",e[e.InvalidHex=2]="InvalidHex",e[e.InvalidBase64=3]="InvalidBase64",e[e.InvalidAddress=4]="InvalidAddress",e[e.CallbackParamsCantBeConvertedToJson=5]="CallbackParamsCantBeConvertedToJson",e[e.WebsocketConnectError=6]="WebsocketConnectError",e[e.WebsocketReceiveError=7]="WebsocketReceiveError",e[e.WebsocketSendError=8]="WebsocketSendError",e[e.HttpClientCreateError=9]="HttpClientCreateError",e[e.HttpRequestCreateError=10]="HttpRequestCreateError",e[e.HttpRequestSendError=11]="HttpRequestSendError",e[e.HttpRequestParseError=12]="HttpRequestParseError",e[e.CallbackNotRegistered=13]="CallbackNotRegistered",e[e.NetModuleNotInit=14]="NetModuleNotInit",e[e.InvalidConfig=15]="InvalidConfig",e[e.CannotCreateRuntime=16]="CannotCreateRuntime",e[e.InvalidContextHandle=17]="InvalidContextHandle",e[e.CannotSerializeResult=18]="CannotSerializeResult",e[e.CannotSerializeError=19]="CannotSerializeError",e[e.CannotConvertJsValueToJson=20]="CannotConvertJsValueToJson",e[e.CannotReceiveSpawnedResult=21]="CannotReceiveSpawnedResult",e[e.SetTimerError=22]="SetTimerError",e[e.InvalidParams=23]="InvalidParams",e[e.ContractsAddressConversionFailed=24]="ContractsAddressConversionFailed",e[e.UnknownFunction=25]="UnknownFunction",e[e.AppRequestError=26]="AppRequestError",e[e.NoSuchRequest=27]="NoSuchRequest",e[e.CanNotSendRequestResult=28]="CanNotSendRequestResult",e[e.CanNotReceiveRequestResult=29]="CanNotReceiveRequestResult",e[e.CanNotParseRequestResult=30]="CanNotParseRequestResult",e[e.UnexpectedCallbackResponse=31]="UnexpectedCallbackResponse",e[e.CanNotParseNumber=32]="CanNotParseNumber",e[e.InternalError=33]="InternalError",e[e.InvalidHandle=34]="InvalidHandle",e[e.LocalStorageError=35]="LocalStorageError",e[e.InvalidData=36]="InvalidData"}(n.ClientErrorCode||(n.ClientErrorCode={})),function(e){e.HTTP="HTTP",e.WS="WS"}(n.NetworkQueriesProtocol||(n.NetworkQueriesProtocol={}));function i(e){return{type:"Error",text:e}}n.appRequestResultError=i;function s(e){return{type:"Ok",result:e}}n.appRequestResultOk=s;class c{constructor(t){this.client=t}get_api_reference(){return this.client.request("client.get_api_reference")}get_api_reference_sync(){return this.client.requestSync("client.get_api_reference")}version(){return this.client.request("client.version")}version_sync(){return this.client.requestSync("client.version")}config(){return this.client.request("client.config")}config_sync(){return this.client.requestSync("client.config")}build_info(){return this.client.request("client.build_info")}build_info_sync(){return this.client.requestSync("client.build_info")}resolve_app_request(t){return this.client.request("client.resolve_app_request",t)}resolve_app_request_sync(t){this.client.requestSync("client.resolve_app_request",t)}}n.ClientModule=c,function(e){e[e.NotImplemented=1]="NotImplemented",e[e.InvalidHex=2]="InvalidHex",e[e.InvalidBase64=3]="InvalidBase64",e[e.InvalidAddress=4]="InvalidAddress",e[e.CallbackParamsCantBeConvertedToJson=5]="CallbackParamsCantBeConvertedToJson",e[e.WebsocketConnectError=6]="WebsocketConnectError",e[e.WebsocketReceiveError=7]="WebsocketReceiveError",e[e.WebsocketSendError=8]="WebsocketSendError",e[e.HttpClientCreateError=9]="HttpClientCreateError",e[e.HttpRequestCreateError=10]="HttpRequestCreateError",e[e.HttpRequestSendError=11]="HttpRequestSendError",e[e.HttpRequestParseError=12]="HttpRequestParseError",e[e.CallbackNotRegistered=13]="CallbackNotRegistered",e[e.NetModuleNotInit=14]="NetModuleNotInit",e[e.InvalidConfig=15]="InvalidConfig",e[e.CannotCreateRuntime=16]="CannotCreateRuntime",e[e.InvalidContextHandle=17]="InvalidContextHandle",e[e.CannotSerializeResult=18]="CannotSerializeResult",e[e.CannotSerializeError=19]="CannotSerializeError",e[e.CannotConvertJsValueToJson=20]="CannotConvertJsValueToJson",e[e.CannotReceiveSpawnedResult=21]="CannotReceiveSpawnedResult",e[e.SetTimerError=22]="SetTimerError",e[e.InvalidParams=23]="InvalidParams",e[e.ContractsAddressConversionFailed=24]="ContractsAddressConversionFailed",e[e.UnknownFunction=25]="UnknownFunction",e[e.AppRequestError=26]="AppRequestError",e[e.NoSuchRequest=27]="NoSuchRequest",e[e.CanNotSendRequestResult=28]="CanNotSendRequestResult",e[e.CanNotReceiveRequestResult=29]="CanNotReceiveRequestResult",e[e.CanNotParseRequestResult=30]="CanNotParseRequestResult",e[e.UnexpectedCallbackResponse=31]="UnexpectedCallbackResponse",e[e.CanNotParseNumber=32]="CanNotParseNumber",e[e.InternalError=33]="InternalError",e[e.InvalidHandle=34]="InvalidHandle",e[e.LocalStorageError=35]="LocalStorageError",e[e.InvalidData=36]="InvalidData"}(n.AccountErrorCode||(n.AccountErrorCode={}));class b{constructor(t){this.client=t}get_account(t){return this.client.request("account.get_account",t)}get_account_sync(t){return this.client.requestSync("account.get_account",t)}}n.AccountModule=b,function(e){e[e.InvalidPublicKey=100]="InvalidPublicKey",e[e.InvalidSecretKey=101]="InvalidSecretKey",e[e.InvalidKey=102]="InvalidKey",e[e.InvalidFactorizeChallenge=106]="InvalidFactorizeChallenge",e[e.InvalidBigInt=107]="InvalidBigInt",e[e.ScryptFailed=108]="ScryptFailed",e[e.InvalidKeySize=109]="InvalidKeySize",e[e.NaclSecretBoxFailed=110]="NaclSecretBoxFailed",e[e.NaclBoxFailed=111]="NaclBoxFailed",e[e.NaclSignFailed=112]="NaclSignFailed",e[e.Bip39InvalidEntropy=113]="Bip39InvalidEntropy",e[e.Bip39InvalidPhrase=114]="Bip39InvalidPhrase",e[e.Bip32InvalidKey=115]="Bip32InvalidKey",e[e.Bip32InvalidDerivePath=116]="Bip32InvalidDerivePath",e[e.Bip39InvalidDictionary=117]="Bip39InvalidDictionary",e[e.Bip39InvalidWordCount=118]="Bip39InvalidWordCount",e[e.MnemonicGenerationFailed=119]="MnemonicGenerationFailed",e[e.MnemonicFromEntropyFailed=120]="MnemonicFromEntropyFailed",e[e.SigningBoxNotRegistered=121]="SigningBoxNotRegistered",e[e.InvalidSignature=122]="InvalidSignature",e[e.EncryptionBoxNotRegistered=123]="EncryptionBoxNotRegistered",e[e.InvalidIvSize=124]="InvalidIvSize",e[e.UnsupportedCipherMode=125]="UnsupportedCipherMode",e[e.CannotCreateCipher=126]="CannotCreateCipher",e[e.EncryptDataError=127]="EncryptDataError",e[e.DecryptDataError=128]="DecryptDataError",e[e.IvRequired=129]="IvRequired",e[e.CryptoBoxNotRegistered=130]="CryptoBoxNotRegistered",e[e.InvalidCryptoBoxType=131]="InvalidCryptoBoxType",e[e.CryptoBoxSecretSerializationError=132]="CryptoBoxSecretSerializationError",e[e.CryptoBoxSecretDeserializationError=133]="CryptoBoxSecretDeserializationError",e[e.InvalidNonceSize=134]="InvalidNonceSize"}(n.CryptoErrorCode||(n.CryptoErrorCode={}));function a(e){return{type:"AES",value:e}}n.encryptionAlgorithmAES=a;function u(e){return{type:"ChaCha20",value:e}}n.encryptionAlgorithmChaCha20=u;function d(e){return{type:"NaclBox",value:e}}n.encryptionAlgorithmNaclBox=d;function h(e){return{type:"NaclSecretBox",value:e}}n.encryptionAlgorithmNaclSecretBox=h,function(e){e.CBC="CBC",e.CFB="CFB",e.CTR="CTR",e.ECB="ECB",e.OFB="OFB"}(n.CipherMode||(n.CipherMode={}));function p(e,t){return{type:"RandomSeedPhrase",dictionary:e,wordcount:t}}n.cryptoBoxSecretRandomSeedPhrase=p;function O(e,t,g){return{type:"PredefinedSeedPhrase",phrase:e,dictionary:t,wordcount:g}}n.cryptoBoxSecretPredefinedSeedPhrase=O;function F(e){return{type:"EncryptedSecret",encrypted_secret:e}}n.cryptoBoxSecretEncryptedSecret=F;function R(e){return{type:"ChaCha20",value:e}}n.boxEncryptionAlgorithmChaCha20=R;function y(e){return{type:"NaclBox",value:e}}n.boxEncryptionAlgorithmNaclBox=y;function _(e){return{type:"NaclSecretBox",value:e}}n.boxEncryptionAlgorithmNaclSecretBox=_,function(e){e[e.Ton=0]="Ton",e[e.English=1]="English",e[e.ChineseSimplified=2]="ChineseSimplified",e[e.ChineseTraditional=3]="ChineseTraditional",e[e.French=4]="French",e[e.Italian=5]="Italian",e[e.Japanese=6]="Japanese",e[e.Korean=7]="Korean",e[e.Spanish=8]="Spanish"}(n.MnemonicDictionary||(n.MnemonicDictionary={}));function o(e){return{type:"GetPassword",encryption_public_key:e}}n.paramsOfAppPasswordProviderGetPassword=o;function f(e,t){return{type:"GetPassword",encrypted_password:e,app_encryption_pubkey:t}}n.resultOfAppPasswordProviderGetPassword=f;function w(){return{type:"GetPublicKey"}}n.paramsOfAppSigningBoxGetPublicKey=w;function q(e){return{type:"Sign",unsigned:e}}n.paramsOfAppSigningBoxSign=q;function M(e){return{type:"GetPublicKey",public_key:e}}n.resultOfAppSigningBoxGetPublicKey=M;function j(e){return{type:"Sign",signature:e}}n.resultOfAppSigningBoxSign=j;function l(){return{type:"GetInfo"}}n.paramsOfAppEncryptionBoxGetInfo=l;function v(e){return{type:"Encrypt",data:e}}n.paramsOfAppEncryptionBoxEncrypt=v;function k(e){return{type:"Decrypt",data:e}}n.paramsOfAppEncryptionBoxDecrypt=k;function I(e){return{type:"GetInfo",info:e}}n.resultOfAppEncryptionBoxGetInfo=I;function x(e){return{type:"Encrypt",data:e}}n.resultOfAppEncryptionBoxEncrypt=x;function T(e){return{type:"Decrypt",data:e}}n.resultOfAppEncryptionBoxDecrypt=T;function B(e,t,g,m){return r(this,void 0,void 0,function*(){try{let S={};switch(t.type){case"GetPassword":S=yield e.get_password(t);break}m.resolve_app_request(g,Object.assign({type:t.type},S))}catch(S){m.reject_app_request(g,S)}})}function A(e,t,g,m){return r(this,void 0,void 0,function*(){try{let S={};switch(t.type){case"GetPublicKey":S=yield e.get_public_key();break;case"Sign":S=yield e.sign(t);break}m.resolve_app_request(g,Object.assign({type:t.type},S))}catch(S){m.reject_app_request(g,S)}})}function D(e,t,g,m){return r(this,void 0,void 0,function*(){try{let S={};switch(t.type){case"GetInfo":S=yield e.get_info();break;case"Encrypt":S=yield e.encrypt(t);break;case"Decrypt":S=yield e.decrypt(t);break}m.resolve_app_request(g,Object.assign({type:t.type},S))}catch(S){m.reject_app_request(g,S)}})}class ke{constructor(t){this.client=t}factorize(t){return this.client.request("crypto.factorize",t)}factorize_sync(t){return this.client.requestSync("crypto.factorize",t)}modular_power(t){return this.client.request("crypto.modular_power",t)}modular_power_sync(t){return this.client.requestSync("crypto.modular_power",t)}tvm_crc16(t){return this.client.request("crypto.tvm_crc16",t)}tvm_crc16_sync(t){return this.client.requestSync("crypto.tvm_crc16",t)}generate_random_bytes(t){return this.client.request("crypto.generate_random_bytes",t)}generate_random_bytes_sync(t){return this.client.requestSync("crypto.generate_random_bytes",t)}convert_public_key_to_tvm_safe_format(t){return this.client.request("crypto.convert_public_key_to_tvm_safe_format",t)}convert_public_key_to_tvm_safe_format_sync(t){return this.client.requestSync("crypto.convert_public_key_to_tvm_safe_format",t)}generate_random_sign_keys(){return this.client.request("crypto.generate_random_sign_keys")}generate_random_sign_keys_sync(){return this.client.requestSync("crypto.generate_random_sign_keys")}sign(t){return this.client.request("crypto.sign",t)}sign_sync(t){return this.client.requestSync("crypto.sign",t)}verify_signature(t){return this.client.request("crypto.verify_signature",t)}verify_signature_sync(t){return this.client.requestSync("crypto.verify_signature",t)}sha256(t){return this.client.request("crypto.sha256",t)}sha256_sync(t){return this.client.requestSync("crypto.sha256",t)}sha512(t){return this.client.request("crypto.sha512",t)}sha512_sync(t){return this.client.requestSync("crypto.sha512",t)}scrypt(t){return this.client.request("crypto.scrypt",t)}scrypt_sync(t){return this.client.requestSync("crypto.scrypt",t)}nacl_sign_keypair_from_secret_key(t){return this.client.request("crypto.nacl_sign_keypair_from_secret_key",t)}nacl_sign_keypair_from_secret_key_sync(t){return this.client.requestSync("crypto.nacl_sign_keypair_from_secret_key",t)}nacl_sign(t){return this.client.request("crypto.nacl_sign",t)}nacl_sign_sync(t){return this.client.requestSync("crypto.nacl_sign",t)}nacl_sign_open(t){return this.client.request("crypto.nacl_sign_open",t)}nacl_sign_open_sync(t){return this.client.requestSync("crypto.nacl_sign_open",t)}nacl_sign_detached(t){return this.client.request("crypto.nacl_sign_detached",t)}nacl_sign_detached_sync(t){return this.client.requestSync("crypto.nacl_sign_detached",t)}nacl_sign_detached_verify(t){return this.client.request("crypto.nacl_sign_detached_verify",t)}nacl_sign_detached_verify_sync(t){return this.client.requestSync("crypto.nacl_sign_detached_verify",t)}nacl_box_keypair(){return this.client.request("crypto.nacl_box_keypair")}nacl_box_keypair_sync(){return this.client.requestSync("crypto.nacl_box_keypair")}nacl_box_keypair_from_secret_key(t){return this.client.request("crypto.nacl_box_keypair_from_secret_key",t)}nacl_box_keypair_from_secret_key_sync(t){return this.client.requestSync("crypto.nacl_box_keypair_from_secret_key",t)}nacl_box(t){return this.client.request("crypto.nacl_box",t)}nacl_box_sync(t){return this.client.requestSync("crypto.nacl_box",t)}nacl_box_open(t){return this.client.request("crypto.nacl_box_open",t)}nacl_box_open_sync(t){return this.client.requestSync("crypto.nacl_box_open",t)}nacl_secret_box(t){return this.client.request("crypto.nacl_secret_box",t)}nacl_secret_box_sync(t){return this.client.requestSync("crypto.nacl_secret_box",t)}nacl_secret_box_open(t){return this.client.request("crypto.nacl_secret_box_open",t)}nacl_secret_box_open_sync(t){return this.client.requestSync("crypto.nacl_secret_box_open",t)}mnemonic_words(t){return this.client.request("crypto.mnemonic_words",t)}mnemonic_words_sync(t){return this.client.requestSync("crypto.mnemonic_words",t)}mnemonic_from_random(t){return this.client.request("crypto.mnemonic_from_random",t)}mnemonic_from_random_sync(t){return this.client.requestSync("crypto.mnemonic_from_random",t)}mnemonic_from_entropy(t){return this.client.request("crypto.mnemonic_from_entropy",t)}mnemonic_from_entropy_sync(t){return this.client.requestSync("crypto.mnemonic_from_entropy",t)}mnemonic_verify(t){return this.client.request("crypto.mnemonic_verify",t)}mnemonic_verify_sync(t){return this.client.requestSync("crypto.mnemonic_verify",t)}mnemonic_derive_sign_keys(t){return this.client.request("crypto.mnemonic_derive_sign_keys",t)}mnemonic_derive_sign_keys_sync(t){return this.client.requestSync("crypto.mnemonic_derive_sign_keys",t)}hdkey_xprv_from_mnemonic(t){return this.client.request("crypto.hdkey_xprv_from_mnemonic",t)}hdkey_xprv_from_mnemonic_sync(t){return this.client.requestSync("crypto.hdkey_xprv_from_mnemonic",t)}hdkey_derive_from_xprv(t){return this.client.request("crypto.hdkey_derive_from_xprv",t)}hdkey_derive_from_xprv_sync(t){return this.client.requestSync("crypto.hdkey_derive_from_xprv",t)}hdkey_derive_from_xprv_path(t){return this.client.request("crypto.hdkey_derive_from_xprv_path",t)}hdkey_derive_from_xprv_path_sync(t){return this.client.requestSync("crypto.hdkey_derive_from_xprv_path",t)}hdkey_secret_from_xprv(t){return this.client.request("crypto.hdkey_secret_from_xprv",t)}hdkey_secret_from_xprv_sync(t){return this.client.requestSync("crypto.hdkey_secret_from_xprv",t)}hdkey_public_from_xprv(t){return this.client.request("crypto.hdkey_public_from_xprv",t)}hdkey_public_from_xprv_sync(t){return this.client.requestSync("crypto.hdkey_public_from_xprv",t)}chacha20(t){return this.client.request("crypto.chacha20",t)}chacha20_sync(t){return this.client.requestSync("crypto.chacha20",t)}create_crypto_box(t,g){return this.client.request("crypto.create_crypto_box",t,(m,S)=>{S===3?B(g,m.request_data,m.app_request_id,this.client):S===4&&B(g,m,null,this.client)})}create_crypto_box_sync(t){return this.client.requestSync("crypto.create_crypto_box",t)}remove_crypto_box(t){return this.client.request("crypto.remove_crypto_box",t)}remove_crypto_box_sync(t){this.client.requestSync("crypto.remove_crypto_box",t)}get_crypto_box_info(t){return this.client.request("crypto.get_crypto_box_info",t)}get_crypto_box_info_sync(t){return this.client.requestSync("crypto.get_crypto_box_info",t)}get_crypto_box_seed_phrase(t){return this.client.request("crypto.get_crypto_box_seed_phrase",t)}get_crypto_box_seed_phrase_sync(t){return this.client.requestSync("crypto.get_crypto_box_seed_phrase",t)}get_signing_box_from_crypto_box(t){return this.client.request("crypto.get_signing_box_from_crypto_box",t)}get_signing_box_from_crypto_box_sync(t){return this.client.requestSync("crypto.get_signing_box_from_crypto_box",t)}get_encryption_box_from_crypto_box(t){return this.client.request("crypto.get_encryption_box_from_crypto_box",t)}get_encryption_box_from_crypto_box_sync(t){return this.client.requestSync("crypto.get_encryption_box_from_crypto_box",t)}clear_crypto_box_secret_cache(t){return this.client.request("crypto.clear_crypto_box_secret_cache",t)}clear_crypto_box_secret_cache_sync(t){this.client.requestSync("crypto.clear_crypto_box_secret_cache",t)}register_signing_box(t){return this.client.request("crypto.register_signing_box",void 0,(g,m)=>{m===3?A(t,g.request_data,g.app_request_id,this.client):m===4&&A(t,g,null,this.client)})}register_signing_box_sync(){return this.client.requestSync("crypto.register_signing_box")}get_signing_box(t){return this.client.request("crypto.get_signing_box",t)}get_signing_box_sync(t){return this.client.requestSync("crypto.get_signing_box",t)}signing_box_get_public_key(t){return this.client.request("crypto.signing_box_get_public_key",t)}signing_box_get_public_key_sync(t){return this.client.requestSync("crypto.signing_box_get_public_key",t)}signing_box_sign(t){return this.client.request("crypto.signing_box_sign",t)}signing_box_sign_sync(t){return this.client.requestSync("crypto.signing_box_sign",t)}remove_signing_box(t){return this.client.request("crypto.remove_signing_box",t)}remove_signing_box_sync(t){this.client.requestSync("crypto.remove_signing_box",t)}register_encryption_box(t){return this.client.request("crypto.register_encryption_box",void 0,(g,m)=>{m===3?D(t,g.request_data,g.app_request_id,this.client):m===4&&D(t,g,null,this.client)})}register_encryption_box_sync(){return this.client.requestSync("crypto.register_encryption_box")}remove_encryption_box(t){return this.client.request("crypto.remove_encryption_box",t)}remove_encryption_box_sync(t){this.client.requestSync("crypto.remove_encryption_box",t)}encryption_box_get_info(t){return this.client.request("crypto.encryption_box_get_info",t)}encryption_box_get_info_sync(t){return this.client.requestSync("crypto.encryption_box_get_info",t)}encryption_box_encrypt(t){return this.client.request("crypto.encryption_box_encrypt",t)}encryption_box_encrypt_sync(t){return this.client.requestSync("crypto.encryption_box_encrypt",t)}encryption_box_decrypt(t){return this.client.request("crypto.encryption_box_decrypt",t)}encryption_box_decrypt_sync(t){return this.client.requestSync("crypto.encryption_box_decrypt",t)}create_encryption_box(t){return this.client.request("crypto.create_encryption_box",t)}create_encryption_box_sync(t){return this.client.requestSync("crypto.create_encryption_box",t)}}n.CryptoModule=ke,function(e){e[e.RequiredAddressMissingForEncodeMessage=301]="RequiredAddressMissingForEncodeMessage",e[e.RequiredCallSetMissingForEncodeMessage=302]="RequiredCallSetMissingForEncodeMessage",e[e.InvalidJson=303]="InvalidJson",e[e.InvalidMessage=304]="InvalidMessage",e[e.EncodeDeployMessageFailed=305]="EncodeDeployMessageFailed",e[e.EncodeRunMessageFailed=306]="EncodeRunMessageFailed",e[e.AttachSignatureFailed=307]="AttachSignatureFailed",e[e.InvalidTvcImage=308]="InvalidTvcImage",e[e.RequiredPublicKeyMissingForFunctionHeader=309]="RequiredPublicKeyMissingForFunctionHeader",e[e.InvalidSigner=310]="InvalidSigner",e[e.InvalidAbi=311]="InvalidAbi",e[e.InvalidFunctionId=312]="InvalidFunctionId",e[e.InvalidData=313]="InvalidData",e[e.EncodeInitialDataFailed=314]="EncodeInitialDataFailed",e[e.InvalidFunctionName=315]="InvalidFunctionName",e[e.PubKeyNotSupported=316]="PubKeyNotSupported"}(n.AbiErrorCode||(n.AbiErrorCode={}));function je(e){return{type:"Contract",value:e}}n.abiContract=je;function Ie(e){return{type:"Json",value:e}}n.abiJson=Ie;function Re(e){return{type:"Handle",value:e}}n.abiHandle=Re;function Be(e){return{type:"Serialized",value:e}}n.abiSerialized=Be;function Me(){return{type:"None"}}n.signerNone=Me;function Fe(e){return{type:"External",public_key:e}}n.signerExternal=Fe;function Ae(e){return{type:"Keys",keys:e}}n.signerKeys=Ae;function xe(e){return{type:"SigningBox",handle:e}}n.signerSigningBox=xe,function(e){e.Input="Input",e.Output="Output",e.InternalOutput="InternalOutput",e.Event="Event"}(n.MessageBodyType||(n.MessageBodyType={})),function(e){e.Input="Input",e.Output="Output"}(n.DataLayout||(n.DataLayout={}));class Ne{constructor(t){this.client=t}encode_message_body(t){return this.client.request("abi.encode_message_body",t)}encode_message_body_sync(t){return this.client.requestSync("abi.encode_message_body",t)}attach_signature_to_message_body(t){return this.client.request("abi.attach_signature_to_message_body",t)}attach_signature_to_message_body_sync(t){return this.client.requestSync("abi.attach_signature_to_message_body",t)}encode_message(t){return this.client.request("abi.encode_message",t)}encode_message_sync(t){return this.client.requestSync("abi.encode_message",t)}encode_internal_message(t){return this.client.request("abi.encode_internal_message",t)}encode_internal_message_sync(t){return this.client.requestSync("abi.encode_internal_message",t)}attach_signature(t){return this.client.request("abi.attach_signature",t)}attach_signature_sync(t){return this.client.requestSync("abi.attach_signature",t)}decode_message(t){return this.client.request("abi.decode_message",t)}decode_message_sync(t){return this.client.requestSync("abi.decode_message",t)}decode_message_body(t){return this.client.request("abi.decode_message_body",t)}decode_message_body_sync(t){return this.client.requestSync("abi.decode_message_body",t)}encode_account(t){return this.client.request("abi.encode_account",t)}encode_account_sync(t){return this.client.requestSync("abi.encode_account",t)}decode_account_data(t){return this.client.request("abi.decode_account_data",t)}decode_account_data_sync(t){return this.client.requestSync("abi.decode_account_data",t)}update_initial_data(t){return this.client.request("abi.update_initial_data",t)}update_initial_data_sync(t){return this.client.requestSync("abi.update_initial_data",t)}encode_initial_data(t){return this.client.request("abi.encode_initial_data",t)}encode_initial_data_sync(t){return this.client.requestSync("abi.encode_initial_data",t)}decode_initial_data(t){return this.client.request("abi.decode_initial_data",t)}decode_initial_data_sync(t){return this.client.requestSync("abi.decode_initial_data",t)}decode_boc(t){return this.client.request("abi.decode_boc",t)}decode_boc_sync(t){return this.client.requestSync("abi.decode_boc",t)}encode_boc(t){return this.client.request("abi.encode_boc",t)}encode_boc_sync(t){return this.client.requestSync("abi.encode_boc",t)}calc_function_id(t){return this.client.request("abi.calc_function_id",t)}calc_function_id_sync(t){return this.client.requestSync("abi.calc_function_id",t)}get_signature_data(t){return this.client.request("abi.get_signature_data",t)}get_signature_data_sync(t){return this.client.requestSync("abi.get_signature_data",t)}}n.AbiModule=Ne;function He(e){return{type:"Pinned",pin:e}}n.bocCacheTypePinned=He;function De(){return{type:"Unpinned"}}n.bocCacheTypeUnpinned=De;function We(e,t){return{type:"Integer",size:e,value:t}}n.builderOpInteger=We;function Pe(e){return{type:"BitString",value:e}}n.builderOpBitString=Pe;function Te(e){return{type:"Cell",builder:e}}n.builderOpCell=Te;function Le(e){return{type:"CellBoc",boc:e}}n.builderOpCellBoc=Le;function Ue(e){return{type:"Address",address:e}}n.builderOpAddress=Ue;function Ge(e){return{type:"V1",value:e}}n.tvcV1=Ge,function(e){e[e.InvalidBoc=201]="InvalidBoc",e[e.SerializationError=202]="SerializationError",e[e.InappropriateBlock=203]="InappropriateBlock",e[e.MissingSourceBoc=204]="MissingSourceBoc",e[e.InsufficientCacheSize=205]="InsufficientCacheSize",e[e.BocRefNotFound=206]="BocRefNotFound",e[e.InvalidBocRef=207]="InvalidBocRef"}(n.BocErrorCode||(n.BocErrorCode={}));class Ee{constructor(t){this.client=t}decode_tvc(t){return this.client.request("boc.decode_tvc",t)}decode_tvc_sync(t){return this.client.requestSync("boc.decode_tvc",t)}parse_message(t){return this.client.request("boc.parse_message",t)}parse_message_sync(t){return this.client.requestSync("boc.parse_message",t)}parse_transaction(t){return this.client.request("boc.parse_transaction",t)}parse_transaction_sync(t){return this.client.requestSync("boc.parse_transaction",t)}parse_account(t){return this.client.request("boc.parse_account",t)}parse_account_sync(t){return this.client.requestSync("boc.parse_account",t)}parse_block(t){return this.client.request("boc.parse_block",t)}parse_block_sync(t){return this.client.requestSync("boc.parse_block",t)}parse_shardstate(t){return this.client.request("boc.parse_shardstate",t)}parse_shardstate_sync(t){return this.client.requestSync("boc.parse_shardstate",t)}get_blockchain_config(t){return this.client.request("boc.get_blockchain_config",t)}get_blockchain_config_sync(t){return this.client.requestSync("boc.get_blockchain_config",t)}get_boc_hash(t){return this.client.request("boc.get_boc_hash",t)}get_boc_hash_sync(t){return this.client.requestSync("boc.get_boc_hash",t)}get_boc_depth(t){return this.client.request("boc.get_boc_depth",t)}get_boc_depth_sync(t){return this.client.requestSync("boc.get_boc_depth",t)}get_code_from_tvc(t){return this.client.request("boc.get_code_from_tvc",t)}get_code_from_tvc_sync(t){return this.client.requestSync("boc.get_code_from_tvc",t)}cache_get(t){return this.client.request("boc.cache_get",t)}cache_get_sync(t){return this.client.requestSync("boc.cache_get",t)}cache_set(t){return this.client.request("boc.cache_set",t)}cache_set_sync(t){return this.client.requestSync("boc.cache_set",t)}cache_unpin(t){return this.client.request("boc.cache_unpin",t)}cache_unpin_sync(t){this.client.requestSync("boc.cache_unpin",t)}encode_boc(t){return this.client.request("boc.encode_boc",t)}encode_boc_sync(t){return this.client.requestSync("boc.encode_boc",t)}get_code_salt(t){return this.client.request("boc.get_code_salt",t)}get_code_salt_sync(t){return this.client.requestSync("boc.get_code_salt",t)}set_code_salt(t){return this.client.request("boc.set_code_salt",t)}set_code_salt_sync(t){return this.client.requestSync("boc.set_code_salt",t)}decode_state_init(t){return this.client.request("boc.decode_state_init",t)}decode_state_init_sync(t){return this.client.requestSync("boc.decode_state_init",t)}encode_state_init(t){return this.client.request("boc.encode_state_init",t)}encode_state_init_sync(t){return this.client.requestSync("boc.encode_state_init",t)}encode_external_in_message(t){return this.client.request("boc.encode_external_in_message",t)}encode_external_in_message_sync(t){return this.client.requestSync("boc.encode_external_in_message",t)}get_compiler_version(t){return this.client.request("boc.get_compiler_version",t)}get_compiler_version_sync(t){return this.client.requestSync("boc.get_compiler_version",t)}}n.BocModule=Ee,function(e){e[e.MessageAlreadyExpired=501]="MessageAlreadyExpired",e[e.MessageHasNotDestinationAddress=502]="MessageHasNotDestinationAddress",e[e.CanNotBuildMessageCell=503]="CanNotBuildMessageCell",e[e.FetchBlockFailed=504]="FetchBlockFailed",e[e.SendMessageFailed=505]="SendMessageFailed",e[e.InvalidMessageBoc=506]="InvalidMessageBoc",e[e.MessageExpired=507]="MessageExpired",e[e.TransactionWaitTimeout=508]="TransactionWaitTimeout",e[e.InvalidBlockReceived=509]="InvalidBlockReceived",e[e.CanNotCheckBlockShard=510]="CanNotCheckBlockShard",e[e.BlockNotFound=511]="BlockNotFound",e[e.InvalidData=512]="InvalidData",e[e.ExternalSignerMustNotBeUsed=513]="ExternalSignerMustNotBeUsed",e[e.MessageRejected=514]="MessageRejected",e[e.InvalidRempStatus=515]="InvalidRempStatus",e[e.NextRempStatusTimeout=516]="NextRempStatusTimeout",e[e.InvalidThread=517]="InvalidThread"}(n.ProcessingErrorCode||(n.ProcessingErrorCode={}));function ze(e,t){return{type:"WillFetchFirstBlock",message_id:e,message_dst:t}}n.processingEventWillFetchFirstBlock=ze;function Ve(e,t,g){return{type:"FetchFirstBlockFailed",error:e,message_id:t,message_dst:g}}n.processingEventFetchFirstBlockFailed=Ve;function Je(e,t,g,m){return{type:"WillSend",shard_block_id:e,message_id:t,message_dst:g,message:m}}n.processingEventWillSend=Je;function Ke(e,t,g,m){return{type:"DidSend",shard_block_id:e,message_id:t,message_dst:g,message:m}}n.processingEventDidSend=Ke;function Qe(e,t,g,m,S){return{type:"SendFailed",shard_block_id:e,message_id:t,message_dst:g,message:m,error:S}}n.processingEventSendFailed=Qe;function Xe(e,t,g,m){return{type:"WillFetchNextBlock",shard_block_id:e,message_id:t,message_dst:g,message:m}}n.processingEventWillFetchNextBlock=Xe;function $e(e,t,g,m,S){return{type:"FetchNextBlockFailed",shard_block_id:e,message_id:t,message_dst:g,message:m,error:S}}n.processingEventFetchNextBlockFailed=$e;function Ye(e,t,g,m){return{type:"MessageExpired",message_id:e,message_dst:t,message:g,error:m}}n.processingEventMessageExpired=Ye;function Ze(e,t,g,m){return{type:"RempSentToValidators",message_id:e,message_dst:t,timestamp:g,json:m}}n.processingEventRempSentToValidators=Ze;function Ce(e,t,g,m){return{type:"RempIncludedIntoBlock",message_id:e,message_dst:t,timestamp:g,json:m}}n.processingEventRempIncludedIntoBlock=Ce;function et(e,t,g,m){return{type:"RempIncludedIntoAcceptedBlock",message_id:e,message_dst:t,timestamp:g,json:m}}n.processingEventRempIncludedIntoAcceptedBlock=et;function tt(e,t,g,m){return{type:"RempOther",message_id:e,message_dst:t,timestamp:g,json:m}}n.processingEventRempOther=tt;function nt(e,t,g){return{type:"RempError",message_id:e,message_dst:t,error:g}}n.processingEventRempError=nt,function(e){e.AtLeastOne="AtLeastOne",e.All="All",e.NoWait="NoWait"}(n.MonitorFetchWaitMode||(n.MonitorFetchWaitMode={}));function rt(e){return{type:"Boc",boc:e}}n.monitoredMessageBoc=rt;function it(e,t){return{type:"HashAddress",hash:e,address:t}}n.monitoredMessageHashAddress=it,function(e){e.Finalized="Finalized",e.Timeout="Timeout",e.Reserved="Reserved"}(n.MessageMonitoringStatus||(n.MessageMonitoringStatus={}));class at{constructor(t){this.client=t}monitor_messages(t){return this.client.request("processing.monitor_messages",t)}monitor_messages_sync(t){this.client.requestSync("processing.monitor_messages",t)}get_monitor_info(t){return this.client.request("processing.get_monitor_info",t)}get_monitor_info_sync(t){return this.client.requestSync("processing.get_monitor_info",t)}fetch_next_monitor_results(t){return this.client.request("processing.fetch_next_monitor_results",t)}fetch_next_monitor_results_sync(t){return this.client.requestSync("processing.fetch_next_monitor_results",t)}cancel_monitor(t){return this.client.request("processing.cancel_monitor",t)}cancel_monitor_sync(t){this.client.requestSync("processing.cancel_monitor",t)}send_messages(t){return this.client.request("processing.send_messages",t)}send_messages_sync(t){return this.client.requestSync("processing.send_messages",t)}send_message(t,g){return this.client.request("processing.send_message",t,g)}send_message_sync(t){return this.client.requestSync("processing.send_message",t)}wait_for_transaction(t,g){return this.client.request("processing.wait_for_transaction",t,g)}wait_for_transaction_sync(t){return this.client.requestSync("processing.wait_for_transaction",t)}process_message(t,g){return this.client.request("processing.process_message",t,g)}process_message_sync(t){return this.client.requestSync("processing.process_message",t)}}n.ProcessingModule=at;function st(){return{type:"AccountId"}}n.addressStringFormatAccountId=st;function ct(){return{type:"Hex"}}n.addressStringFormatHex=ct;function ot(e,t,g){return{type:"Base64",url:e,test:t,bounce:g}}n.addressStringFormatBase64=ot,function(e){e.AccountId="AccountId",e.Hex="Hex",e.Base64="Base64"}(n.AccountAddressType||(n.AccountAddressType={}));class ut{constructor(t){this.client=t}convert_address(t){return this.client.request("utils.convert_address",t)}convert_address_sync(t){return this.client.requestSync("utils.convert_address",t)}get_address_type(t){return this.client.request("utils.get_address_type",t)}get_address_type_sync(t){return this.client.requestSync("utils.get_address_type",t)}calc_storage_fee(t){return this.client.request("utils.calc_storage_fee",t)}calc_storage_fee_sync(t){return this.client.requestSync("utils.calc_storage_fee",t)}compress_zstd(t){return this.client.request("utils.compress_zstd",t)}compress_zstd_sync(t){return this.client.requestSync("utils.compress_zstd",t)}decompress_zstd(t){return this.client.request("utils.decompress_zstd",t)}decompress_zstd_sync(t){return this.client.requestSync("utils.decompress_zstd",t)}}n.UtilsModule=ut,function(e){e[e.CanNotReadTransaction=401]="CanNotReadTransaction",e[e.CanNotReadBlockchainConfig=402]="CanNotReadBlockchainConfig",e[e.TransactionAborted=403]="TransactionAborted",e[e.InternalError=404]="InternalError",e[e.ActionPhaseFailed=405]="ActionPhaseFailed",e[e.AccountCodeMissing=406]="AccountCodeMissing",e[e.LowBalance=407]="LowBalance",e[e.AccountFrozenOrDeleted=408]="AccountFrozenOrDeleted",e[e.AccountMissing=409]="AccountMissing",e[e.UnknownExecutionError=410]="UnknownExecutionError",e[e.InvalidInputStack=411]="InvalidInputStack",e[e.InvalidAccountBoc=412]="InvalidAccountBoc",e[e.InvalidMessageType=413]="InvalidMessageType",e[e.ContractExecutionError=414]="ContractExecutionError",e[e.AccountIsSuspended=415]="AccountIsSuspended"}(n.TvmErrorCode||(n.TvmErrorCode={}));function _t(){return{type:"None"}}n.accountForExecutorNone=_t;function lt(){return{type:"Uninit"}}n.accountForExecutorUninit=lt;function gt(e,t){return{type:"Account",boc:e,unlimited_balance:t}}n.accountForExecutorAccount=gt;class dt{constructor(t){this.client=t}run_executor(t){return this.client.request("tvm.run_executor",t)}run_executor_sync(t){return this.client.requestSync("tvm.run_executor",t)}run_tvm(t){return this.client.request("tvm.run_tvm",t)}run_tvm_sync(t){return this.client.requestSync("tvm.run_tvm",t)}run_get(t){return this.client.request("tvm.run_get",t)}run_get_sync(t){return this.client.requestSync("tvm.run_get",t)}}n.TvmModule=dt,function(e){e[e.QueryFailed=601]="QueryFailed",e[e.SubscribeFailed=602]="SubscribeFailed",e[e.WaitForFailed=603]="WaitForFailed",e[e.GetSubscriptionResultFailed=604]="GetSubscriptionResultFailed",e[e.InvalidServerResponse=605]="InvalidServerResponse",e[e.ClockOutOfSync=606]="ClockOutOfSync",e[e.WaitForTimeout=607]="WaitForTimeout",e[e.GraphqlError=608]="GraphqlError",e[e.NetworkModuleSuspended=609]="NetworkModuleSuspended",e[e.WebsocketDisconnected=610]="WebsocketDisconnected",e[e.NotSupported=611]="NotSupported",e[e.NoEndpointsProvided=612]="NoEndpointsProvided",e[e.GraphqlWebsocketInitError=613]="GraphqlWebsocketInitError",e[e.NetworkModuleResumed=614]="NetworkModuleResumed",e[e.Unauthorized=615]="Unauthorized",e[e.QueryTransactionTreeTimeout=616]="QueryTransactionTreeTimeout",e[e.GraphqlConnectionError=617]="GraphqlConnectionError",e[e.WrongWebscoketProtocolSequence=618]="WrongWebscoketProtocolSequence",e[e.ParseUrlFailed=619]="ParseUrlFailed",e[e.ModifyUrlFailed=620]="ModifyUrlFailed",e[e.SendMessageFailed=621]="SendMessageFailed",e[e.NotFound=622]="NotFound",e[e.AllAttemptsFailed=623]="AllAttemptsFailed"}(n.NetErrorCode||(n.NetErrorCode={})),function(e){e.ASC="ASC",e.DESC="DESC"}(n.SortDirection||(n.SortDirection={}));function bt(e){return Object.assign({type:"QueryCollection"},e)}n.paramsOfQueryOperationQueryCollection=bt;function ft(e){return Object.assign({type:"WaitForCollection"},e)}n.paramsOfQueryOperationWaitForCollection=ft;function pt(e){return Object.assign({type:"AggregateCollection"},e)}n.paramsOfQueryOperationAggregateCollection=pt;function mt(e){return Object.assign({type:"QueryCounterparties"},e)}n.paramsOfQueryOperationQueryCounterparties=mt,function(e){e.COUNT="COUNT",e.MIN="MIN",e.MAX="MAX",e.SUM="SUM",e.AVERAGE="AVERAGE"}(n.AggregationFn||(n.AggregationFn={}));class yt{constructor(t){this.client=t}query(t){return this.client.request("net.query",t)}query_sync(t){return this.client.requestSync("net.query",t)}batch_query(t){return this.client.request("net.batch_query",t)}batch_query_sync(t){return this.client.requestSync("net.batch_query",t)}query_collection(t){return this.client.request("net.query_collection",t)}query_collection_sync(t){return this.client.requestSync("net.query_collection",t)}aggregate_collection(t){return this.client.request("net.aggregate_collection",t)}aggregate_collection_sync(t){return this.client.requestSync("net.aggregate_collection",t)}wait_for_collection(t){return this.client.request("net.wait_for_collection",t)}wait_for_collection_sync(t){return this.client.requestSync("net.wait_for_collection",t)}unsubscribe(t){return this.client.request("net.unsubscribe",t)}unsubscribe_sync(t){this.client.requestSync("net.unsubscribe",t)}subscribe_collection(t,g){return this.client.request("net.subscribe_collection",t,g)}subscribe_collection_sync(t){return this.client.requestSync("net.subscribe_collection",t)}subscribe(t,g){return this.client.request("net.subscribe",t,g)}subscribe_sync(t){return this.client.requestSync("net.subscribe",t)}suspend(){return this.client.request("net.suspend")}suspend_sync(){this.client.requestSync("net.suspend")}resume(){return this.client.request("net.resume")}resume_sync(){this.client.requestSync("net.resume")}find_last_shard_block(t){return this.client.request("net.find_last_shard_block",t)}find_last_shard_block_sync(t){return this.client.requestSync("net.find_last_shard_block",t)}fetch_endpoints(){return this.client.request("net.fetch_endpoints")}fetch_endpoints_sync(){return this.client.requestSync("net.fetch_endpoints")}set_endpoints(t){return this.client.request("net.set_endpoints",t)}set_endpoints_sync(t){this.client.requestSync("net.set_endpoints",t)}get_endpoints(){return this.client.request("net.get_endpoints")}get_endpoints_sync(){return this.client.requestSync("net.get_endpoints")}query_counterparties(t){return this.client.request("net.query_counterparties",t)}query_counterparties_sync(t){return this.client.requestSync("net.query_counterparties",t)}query_transaction_tree(t){return this.client.request("net.query_transaction_tree",t)}query_transaction_tree_sync(t){return this.client.requestSync("net.query_transaction_tree",t)}create_block_iterator(t){return this.client.request("net.create_block_iterator",t)}create_block_iterator_sync(t){return this.client.requestSync("net.create_block_iterator",t)}resume_block_iterator(t){return this.client.request("net.resume_block_iterator",t)}resume_block_iterator_sync(t){return this.client.requestSync("net.resume_block_iterator",t)}create_transaction_iterator(t){return this.client.request("net.create_transaction_iterator",t)}create_transaction_iterator_sync(t){return this.client.requestSync("net.create_transaction_iterator",t)}resume_transaction_iterator(t){return this.client.request("net.resume_transaction_iterator",t)}resume_transaction_iterator_sync(t){return this.client.requestSync("net.resume_transaction_iterator",t)}iterator_next(t){return this.client.request("net.iterator_next",t)}iterator_next_sync(t){return this.client.requestSync("net.iterator_next",t)}remove_iterator(t){return this.client.request("net.remove_iterator",t)}remove_iterator_sync(t){this.client.requestSync("net.remove_iterator",t)}get_signature_id(){return this.client.request("net.get_signature_id")}get_signature_id_sync(){return this.client.requestSync("net.get_signature_id")}}n.NetModule=yt,function(e){e[e.DebotStartFailed=801]="DebotStartFailed",e[e.DebotFetchFailed=802]="DebotFetchFailed",e[e.DebotExecutionFailed=803]="DebotExecutionFailed",e[e.DebotInvalidHandle=804]="DebotInvalidHandle",e[e.DebotInvalidJsonParams=805]="DebotInvalidJsonParams",e[e.DebotInvalidFunctionId=806]="DebotInvalidFunctionId",e[e.DebotInvalidAbi=807]="DebotInvalidAbi",e[e.DebotGetMethodFailed=808]="DebotGetMethodFailed",e[e.DebotInvalidMsg=809]="DebotInvalidMsg",e[e.DebotExternalCallFailed=810]="DebotExternalCallFailed",e[e.DebotBrowserCallbackFailed=811]="DebotBrowserCallbackFailed",e[e.DebotOperationRejected=812]="DebotOperationRejected",e[e.DebotNoCode=813]="DebotNoCode"}(n.DebotErrorCode||(n.DebotErrorCode={}));function ht(e,t,g,m,S,V,Q){return{type:"Transaction",msg:e,dst:t,out:g,fee:m,setcode:S,signkey:V,signing_box_handle:Q}}n.debotActivityTransaction=ht;function wt(e){return{type:"Log",msg:e}}n.paramsOfAppDebotBrowserLog=wt;function vt(e){return{type:"Switch",context_id:e}}n.paramsOfAppDebotBrowserSwitch=vt;function St(){return{type:"SwitchCompleted"}}n.paramsOfAppDebotBrowserSwitchCompleted=St;function Ot(e){return{type:"ShowAction",action:e}}n.paramsOfAppDebotBrowserShowAction=Ot;function qt(e){return{type:"Input",prompt:e}}n.paramsOfAppDebotBrowserInput=qt;function kt(){return{type:"GetSigningBox"}}n.paramsOfAppDebotBrowserGetSigningBox=kt;function jt(e,t){return{type:"InvokeDebot",debot_addr:e,action:t}}n.paramsOfAppDebotBrowserInvokeDebot=jt;function It(e){return{type:"Send",message:e}}n.paramsOfAppDebotBrowserSend=It;function Rt(e){return{type:"Approve",activity:e}}n.paramsOfAppDebotBrowserApprove=Rt;function Bt(e){return{type:"Input",value:e}}n.resultOfAppDebotBrowserInput=Bt;function Mt(e){return{type:"GetSigningBox",signing_box:e}}n.resultOfAppDebotBrowserGetSigningBox=Mt;function Ft(){return{type:"InvokeDebot"}}n.resultOfAppDebotBrowserInvokeDebot=Ft;function At(e){return{type:"Approve",approved:e}}n.resultOfAppDebotBrowserApprove=At;function pe(e,t,g,m){return r(this,void 0,void 0,function*(){try{let S={};switch(t.type){case"Log":e.log(t);break;case"Switch":e.switch(t);break;case"SwitchCompleted":e.switch_completed();break;case"ShowAction":e.show_action(t);break;case"Input":S=yield e.input(t);break;case"GetSigningBox":S=yield e.get_signing_box();break;case"InvokeDebot":yield e.invoke_debot(t);break;case"Send":e.send(t);break;case"Approve":S=yield e.approve(t);break}m.resolve_app_request(g,Object.assign({type:t.type},S))}catch(S){m.reject_app_request(g,S)}})}class xt{constructor(t){this.client=t}init(t,g){return this.client.request("debot.init",t,(m,S)=>{S===3?pe(g,m.request_data,m.app_request_id,this.client):S===4&&pe(g,m,null,this.client)})}init_sync(t){return this.client.requestSync("debot.init",t)}start(t){return this.client.request("debot.start",t)}start_sync(t){this.client.requestSync("debot.start",t)}fetch(t){return this.client.request("debot.fetch",t)}fetch_sync(t){return this.client.requestSync("debot.fetch",t)}execute(t){return this.client.request("debot.execute",t)}execute_sync(t){this.client.requestSync("debot.execute",t)}send(t){return this.client.request("debot.send",t)}send_sync(t){this.client.requestSync("debot.send",t)}remove(t){return this.client.request("debot.remove",t)}remove_sync(t){this.client.requestSync("debot.remove",t)}}n.DebotModule=xt,function(e){e[e.InvalidData=901]="InvalidData",e[e.ProofCheckFailed=902]="ProofCheckFailed",e[e.InternalError=903]="InternalError",e[e.DataDiffersFromProven=904]="DataDiffersFromProven"}(n.ProofsErrorCode||(n.ProofsErrorCode={}));class Nt{constructor(t){this.client=t}proof_block_data(t){return this.client.request("proofs.proof_block_data",t)}proof_block_data_sync(t){this.client.requestSync("proofs.proof_block_data",t)}proof_transaction_data(t){return this.client.request("proofs.proof_transaction_data",t)}proof_transaction_data_sync(t){this.client.requestSync("proofs.proof_transaction_data",t)}proof_message_data(t){return this.client.request("proofs.proof_message_data",t)}proof_message_data_sync(t){this.client.requestSync("proofs.proof_message_data",t)}}n.ProofsModule=Nt})(fe);var se={},ce={};Object.defineProperty(ce,"__esModule",{value:!0});ce.packageVersion=void 0;ce.packageVersion="2.1.1";var X=P&&P.__awaiter||function(n,r,i,s){function c(b){return b instanceof i?b:new i(function(a){a(b)})}return new(i||(i=Promise))(function(b,a){function u(p){try{h(s.next(p))}catch(O){a(O)}}function d(p){try{h(s.throw(p))}catch(O){a(O)}}function h(p){p.done?b(p.value):c(p.value).then(u,d)}h((s=s.apply(n,r||[])).next())})};Object.defineProperty(se,"__esModule",{value:!0});se.TvmClient=void 0;const W=fe,$=Se,tn=ce;class ne{constructor(r){this.context=void 0,this.contextCreation=void 0,this.contextError=void 0,this.config=r??{},this.client=new W.ClientModule(this),this.crypto=new W.CryptoModule(this),this.abi=new W.AbiModule(this),this.account=new W.AccountModule(this),this.boc=new W.BocModule(this),this.processing=new W.ProcessingModule(this),this.utils=new W.UtilsModule(this),this.net=new W.NetModule(this),this.tvm=new W.TvmModule(this),this.proofs=new W.ProofsModule(this)}static set default(r){this._default=r}static get default(){return this._default===null&&(this._default=new ne(this._defaultConfig)),this._default}static set defaultConfig(r){this._defaultConfig=r}static get defaultConfig(){return this._defaultConfig}static useBinaryLibrary(r){(0,$.useLibrary)(r)}static toKey(r){return Y(r,256)}static toHash64(r){return Y(r,64)}static toHash128(r){return Y(r,128)}static toHash256(r){return Y(r,256)}static toHash512(r){return Y(r,512)}static toHex(r,i=0){return Y(r,i)}close(){const r=this.context;r!==void 0&&(this.context=void 0,(0,$.getBridge)().destroyContext(r))}resolveError(r,i,s){var c;return X(this,void 0,void 0,function*(){return s.code!==23||!(!((c=s.data)===null||c===void 0)&&c.suggest_use_helper_for)?s:this.resolveApiError((yield this.client.get_api_reference()).api,r,i,s)})}resolveErrorSync(r,i,s){var c;return s.code!==23||!(!((c=s.data)===null||c===void 0)&&c.suggest_use_helper_for)?s:this.resolveApiError(this.client.get_api_reference_sync().api,r,i,s)}resolveApiError(r,i,s,c){var b,a;if(c.code!==23||!(!((b=c.data)===null||b===void 0)&&b.suggest_use_helper_for))return c;try{let _=function(o,f,w){switch(o.type){case"Array":Array.isArray(f)&&f.forEach(j=>_(o.array_item,j,`${w}[i]`));break;case"Struct":o.struct_fields.forEach(j=>_(j,f[j.name],w?`${w}.${j.name}`:j.name));break;case"Optional":f&&_(o.optional_inner,f,w);break;case"Ref":o.ref_name!="Value"&&o.ref_name!="API"&&o.ref_name!="AbiParam"&&_(p[o.ref_name],f,w);break;case"EnumOfTypes":if(o.enum_types.some(j=>j.name==f.type))return;let q=o.name.toLowerCase(),M=[];o.enum_types.forEach(j=>M.push(q+j.name)),c.message=`Consider using one of the helper methods (${M.join(", ")}) for the "${w}" parameter
`+c.message;break;default:break}};const[u,d]=i.split("."),h=r.modules.reduce((o,f)=>o.concat(f.types),[]),p={};h.forEach(o=>p[o.name]=o);const R=r.modules.find(o=>o.name===u).functions.find(o=>o.name===d).params[1];if(!R||R.generic_name=="AppObject")return c;const y=p[R.ref_name];_(y,s,"")}catch(u){c.message=(a=u.message)!==null&&a!==void 0?a:`${u}`}return c}getClientConfig(r){return Object.assign(Object.assign({},this.config),{binding:{library:`ever-sdk-js (${r})`,version:tn.packageVersion}})}contextRequiredSync(){if(this.context!==void 0)return this.context;const r=(0,$.getBridge)();return this.context=r.createContextSync(this.getClientConfig(r.getLibNameSync())),this.context}contextRequired(){if(this.context!==void 0)return Promise.resolve(this.context);if(this.contextError!==void 0)return Promise.reject(this.contextError);if(this.contextCreation===void 0){this.contextCreation=[];const r=(0,$.getBridge)();X(this,void 0,void 0,function*(){try{const i=this.getClientConfig(yield r.getLibName()),s=yield r.createContext(i),c=this.contextCreation;this.contextCreation=void 0,this.context=s,c==null||c.forEach(b=>b.resolve(s))}catch(i){const s=this.contextCreation;this.contextCreation=void 0,this.contextError=i??void 0,s==null||s.forEach(c=>c.reject(i))}})}return new Promise((r,i)=>{var s;(s=this.contextCreation)===null||s===void 0||s.push({resolve:r,reject:i})})}request(r,i,s){var c;return X(this,void 0,void 0,function*(){const b=(c=this.context)!==null&&c!==void 0?c:yield this.contextRequired();return(0,$.getBridge)().request(b,r,i,s??(()=>{})).catch(a=>X(this,void 0,void 0,function*(){throw yield this.resolveError(r,i,a)}))})}requestSync(r,i){var s;const c=(s=this.context)!==null&&s!==void 0?s:this.contextRequiredSync(),b=(0,$.getBridge)();try{return b.requestSync(c,r,i)}catch(a){throw this.resolveErrorSync(r,i,a)}}resolve_app_request(r,i){return X(this,void 0,void 0,function*(){r&&(yield this.client.resolve_app_request({app_request_id:r,result:{type:"Ok",result:i}}))})}reject_app_request(r,i){return X(this,void 0,void 0,function*(){r&&(yield this.client.resolve_app_request({app_request_id:r,result:{type:"Error",text:i.message}}))})}}se.TvmClient=ne;ne._defaultConfig={};ne._default=null;function Y(n,r){let i;typeof n=="number"||typeof n=="bigint"?i=n.toString(16):typeof n=="string"?n.startsWith("0x")?i=n.substring(2):i=nn(n):i=n.toString();let s=r/4;for(;i.length>s&&i.startsWith("0");)i=i.substring(1);return i.padStart(s,"0")}function nn(n){var r;let i=[];for(let c=0;c<n.length;c+=1){const b=((r=n.codePointAt(c))!==null&&r!==void 0?r:0)-48,a=ye(i,3),u=ye(i,1),d=he(a,u);i=he(d,[b])}let s="";for(let c=i.length-1;c>=0;c-=1)s+=i[c].toString(16).padStart(4,"0");return s}function ye(n,r){let i=0;const s=[];for(let c=0;c<n.length;c+=1){let b=(n[c]<<r)+i;s.push(b&65535),i=b>>16&65535}return i>0&&s.push(i),s}function he(n,r){let i=0;const s=[],c=Math.max(n.length,r.length);for(let b=0;b<c;b+=1){let a=(b<n.length?n[b]:0)+(b<r.length?r[b]:0)+i;s.push(a&65535),i=a>>16&65535}return i>0&&s.push(i),s}(function(n){var r=P&&P.__createBinding||(Object.create?function(s,c,b,a){a===void 0&&(a=b);var u=Object.getOwnPropertyDescriptor(c,b);(!u||("get"in u?!c.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return c[b]}}),Object.defineProperty(s,a,u)}:function(s,c,b,a){a===void 0&&(a=b),s[a]=c[b]}),i=P&&P.__exportStar||function(s,c){for(var b in s)b!=="default"&&!Object.prototype.hasOwnProperty.call(c,b)&&r(c,s,b)};Object.defineProperty(n,"__esModule",{value:!0}),i(fe,n),i(se,n)})(de);const rn=`//****************************************************************** WRAPPER BEGIN
let wasm;

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

let cachedBigInt64Memory0 = null;

function getBigInt64Memory0() {
    if (cachedBigInt64Memory0 === null || cachedBigInt64Memory0.byteLength === 0) {
        cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
    }
    return cachedBigInt64Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  \`\${val}\`;
    }
    if (type == 'string') {
        return \`"\${val}"\`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return \`Symbol(\${description})\`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return \`Function(\${name})\`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of \`val\`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return \`\${val.name}: \${val.message}\\n\${val.stack}\`;
    }
    // TODO we could test for more things here, like \`Set\`s and \`Map\`s.
    return className;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => {
    wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b)
});

function makeClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        try {
            return f(state.a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
                state.a = 0;
                CLOSURE_DTORS.unregister(state);
            }
        }
    };
    real.original = state;
    CLOSURE_DTORS.register(real, state, state);
    return real;
}
function __wbg_adapter_50(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he84bfe4fefbef312(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_53(arg0, arg1) {
    wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd848180b26e4591a(arg0, arg1);
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
                CLOSURE_DTORS.unregister(state);
            } else {
                state.a = a;
            }
        }
    };
    real.original = state;
    CLOSURE_DTORS.register(real, state, state);
    return real;
}
function __wbg_adapter_56(arg0, arg1) {
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd407a95742fcd496(arg0, arg1);
}

function __wbg_adapter_59(arg0, arg1, arg2) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha7aaf995f6117ba3(retptr, arg0, arg1, addHeapObject(arg2));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function __wbg_adapter_62(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h310491e1b08cdbdc(arg0, arg1, addHeapObject(arg2));
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
/**
* @param {string} config_json
* @returns {string}
*/
function core_create_context(config_json) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(config_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.core_create_context(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

/**
* @param {number} context
*/
function core_destroy_context(context) {
    wasm.core_destroy_context(context);
}

/**
* @param {number} context
* @param {string} function_name
* @param {any} params
* @param {number} request_id
*/
function core_request(context, function_name, params, request_id) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(function_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.core_request(retptr, context, ptr0, len0, addHeapObject(params), request_id);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_new_16b304a2cfa7ff4a = function() {
        const ret = new Array();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_d4638f722068f043 = function(arg0, arg1, arg2) {
        getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_string = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'string';
        return ret;
    };
    imports.wbg.__wbg_new_28c511d9baebfa89 = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_8417257aaedc936b = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).set(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_6648ce0320163d0f = function(arg0, arg1, arg2) {
        getObject(arg0)[takeObject(arg1)] = takeObject(arg2);
    };
    imports.wbg.__wbg_new_d9bc3a0147634640 = function() {
        const ret = new Map();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_72fb9a18b5ae2624 = function() {
        const ret = new Object();
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_number_new = function(arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
        const ret = new Date();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getTime_2bc4375165f02d15 = function(arg0) {
        const ret = getObject(arg0).getTime();
        return ret;
    };
    imports.wbg.__wbg_crypto_6bab3db62a8f597e = function(arg0) {
        const ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = getObject(arg0);
        const ret = typeof(val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbg_process_6cdf0546f86c63e6 = function(arg0) {
        const ret = getObject(arg0).process;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_versions_d7353ecce16215f8 = function(arg0) {
        const ret = getObject(arg0).versions;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_node_df9c841f7fd6e565 = function(arg0) {
        const ret = getObject(arg0).node;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_require_d2326adfa32c7477 = function() { return handleError(function () {
        const ret = module.require;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_function = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'function';
        return ret;
    };
    imports.wbg.__wbg_call_b3ca7c6051f9bec1 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_msCrypto_b770d30eddcd2f4b = function(arg0) {
        const ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithlength_e9b4878cebadb3d3 = function(arg0) {
        const ret = new Uint8Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
        const obj = takeObject(arg0).original;
        if (obj.cnt-- == 1) {
            obj.a = 0;
            return true;
        }
        const ret = false;
        return ret;
    };
    imports.wbg.__wbg_objectStore_da468793bd9df17b = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).objectStore(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_readyState_f8d58cc9e9c4f906 = function(arg0) {
        const ret = getObject(arg0).readyState;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_setonsuccess_632ce0a1460455c2 = function(arg0, arg1) {
        getObject(arg0).onsuccess = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_8479b33e7568a904 = function(arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_target_2fc177e386c8b7b0 = function(arg0) {
        const ret = getObject(arg0).target;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_transaction_1e282a79e9bb7387 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = getObject(arg0).transaction(getStringFromWasm0(arg1, arg2), takeObject(arg3));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setoncomplete_d8e4236665cbf1e2 = function(arg0, arg1) {
        getObject(arg0).oncomplete = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_da071ec94e148397 = function(arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_setonabort_523135fd9168ae8b = function(arg0, arg1) {
        getObject(arg0).onabort = getObject(arg1);
    };
    imports.wbg.__wbg_get_bd8e338fbd5f5cc8 = function(arg0, arg1) {
        const ret = getObject(arg0)[arg1 >>> 0];
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_next_196c84450b364254 = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).next();
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_done_298b57d23c0fc80c = function(arg0) {
        const ret = getObject(arg0).done;
        return ret;
    };
    imports.wbg.__wbg_value_d93c65011f51a456 = function(arg0) {
        const ret = getObject(arg0).value;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_iterator_2cee6dadfd956dfa = function() {
        const ret = Symbol.iterator;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_next_40fc327bfc8770e6 = function(arg0) {
        const ret = getObject(arg0).next;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_27c0f87801dedf93 = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_12d079cc21e14bdb = function(arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_63b92bc8671ed464 = function(arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_a47bac70306a19a7 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_c20a40f15020d68a = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_self_ce0dbfc45cf2f5be = function() { return handleError(function () {
        const ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_window_c6fb939a7f436783 = function() { return handleError(function () {
        const ret = window.window;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_globalThis_d1e6af4856ba331b = function() { return handleError(function () {
        const ret = globalThis.globalThis;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_global_207b558942527489 = function() { return handleError(function () {
        const ret = global.global;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbg_newnoargs_e258087cd0daa0ea = function(arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_get_e3c254076557e348 = function() { return handleError(function (arg0, arg1) {
        const ret = Reflect.get(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_set_1f9b04f170055d33 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb = function(arg0, arg1, arg2) {
        const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_randomFillSync_6c846068575c3ec5 = function() { return handleError(function (arg0, arg1) {
        getObject(arg0).randomFillSync(takeObject(arg1));
    }, arguments) };
    imports.wbg.__wbg_subarray_a1f73cd4b5b42fe1 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_9c292cd2d477713f = function() { return handleError(function (arg0, arg1) {
        getObject(arg0).getRandomValues(getObject(arg1));
    }, arguments) };
    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_jsval_loose_eq = function(arg0, arg1) {
        const ret = getObject(arg0) == getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = getObject(arg0);
        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'number' ? obj : undefined;
        getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbg_instanceof_Uint8Array_2b3bbecd033d19f6 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Uint8Array;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_instanceof_ArrayBuffer_836825be07d4c9d2 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof ArrayBuffer;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_instanceof_Error_e20bb56fd5591a93 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Error;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_stringify_8887fe74e1c50d81 = function() { return handleError(function (arg0) {
        const ret = JSON.stringify(getObject(arg0));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_message_5bf28016c2b49cfb = function(arg0) {
        const ret = getObject(arg0).message;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_setTimeout_c172d5704ef82276 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_clearTimeout_ba63ae54a36e111e = function(arg0, arg1) {
        getObject(arg0).clearTimeout(arg1);
    };
    imports.wbg.__wbg_headers_abb199c3be8d817c = function(arg0) {
        const ret = getObject(arg0).headers;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_cb0e7a5c2dd66afd = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_fetch_c4b6afebdb1f918e = function(arg0, arg1) {
        const ret = getObject(arg0).fetch(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_Response_849eb93e75734b6e = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Response;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_status_61a01141acd3cf74 = function(arg0) {
        const ret = getObject(arg0).status;
        return ret;
    };
    imports.wbg.__wbg_url_5f6dc4009ac5f99d = function(arg0, arg1) {
        const ret = getObject(arg1).url;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_message_c539585471131985 = function(arg0, arg1) {
        const ret = getObject(arg1).message;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_put_22792e17580ca18b = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).put(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setonupgradeneeded_ad7645373c7d5e1b = function(arg0, arg1) {
        getObject(arg0).onupgradeneeded = getObject(arg1);
    };
    imports.wbg.__wbg_setonblocked_eb1032a3dfaabd1c = function(arg0, arg1) {
        getObject(arg0).onblocked = getObject(arg1);
    };
    imports.wbg.__wbg_setonversionchange_af0457acbb949df2 = function(arg0, arg1) {
        getObject(arg0).onversionchange = getObject(arg1);
    };
    imports.wbg.__wbg_Window_18c70cd8aae46148 = function(arg0) {
        const ret = getObject(arg0).Window;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_indexedDB_7c51d9056667f4e0 = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).indexedDB;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_WorkerGlobalScope_e05a65389c91124f = function(arg0) {
        const ret = getObject(arg0).WorkerGlobalScope;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_indexedDB_d312f95759a15fdc = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).indexedDB;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_global_43fcc492dd43a370 = function(arg0) {
        const ret = getObject(arg0).global;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_indexedDB_dc5bedbc95106b81 = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).indexedDB;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_open_a05198d687357536 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).open(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_get_5361b64cac0d0826 = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).get(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_objectStoreNames_588b5924274239fd = function(arg0) {
        const ret = getObject(arg0).objectStoreNames;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_item_87130eb4d38ecdc5 = function(arg0, arg1, arg2) {
        const ret = getObject(arg1).item(arg2 >>> 0);
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_createObjectStore_882f2f6b1b1ef040 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).createObjectStore(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_new_cf3ec55744a78578 = function(arg0) {
        const ret = new Date(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getTimezoneOffset_38257122e236c190 = function(arg0) {
        const ret = getObject(arg0).getTimezoneOffset();
        return ret;
    };
    imports.wbg.__wbg_new_6c74223c77cfabad = function() { return handleError(function (arg0, arg1) {
        const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_newwithstr_31798037aa20dbc1 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = new WebSocket(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setonmessage_2af154ce83a3dc94 = function(arg0, arg1) {
        getObject(arg0).onmessage = getObject(arg1);
    };
    imports.wbg.__wbg_setonopen_ce7a4c51e5cf5788 = function(arg0, arg1) {
        getObject(arg0).onopen = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_39a785302b0cd2e9 = function(arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_close_acd9532ff5c093ea = function() { return handleError(function (arg0) {
        getObject(arg0).close();
    }, arguments) };
    imports.wbg.__wbg_send_70603dff16b81b66 = function() { return handleError(function (arg0, arg1, arg2) {
        getObject(arg0).send(getStringFromWasm0(arg1, arg2));
    }, arguments) };
    imports.wbg.__wbg_data_3ce7c145ca4fbcdc = function(arg0) {
        const ret = getObject(arg0).data;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithlength_66ae46612e7f0234 = function(arg0) {
        const ret = new Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithu8arraysequence_9d62f79f4425e877 = function() { return handleError(function (arg0) {
        const ret = new Blob(getObject(arg0));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_keys_91e412b4b222659f = function(arg0) {
        const ret = Object.keys(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_length_cd7af8117672b8b8 = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbindgen_is_bigint = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'bigint';
        return ret;
    };
    imports.wbg.__wbg_isSafeInteger_f7b04ef02296c4d2 = function(arg0) {
        const ret = Number.isSafeInteger(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbindgen_bigint_get_as_i64 = function(arg0, arg1) {
        const v = getObject(arg1);
        const ret = typeof(v) === 'bigint' ? v : undefined;
        getBigInt64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? BigInt(0) : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbindgen_bigint_from_i64 = function(arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_jsval_eq = function(arg0, arg1) {
        const ret = getObject(arg0) === getObject(arg1);
        return ret;
    };
    imports.wbg.__wbg_isArray_2ab64d95e09ea0ae = function(arg0) {
        const ret = Array.isArray(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbindgen_in = function(arg0, arg1) {
        const ret = getObject(arg0) in getObject(arg1);
        return ret;
    };
    imports.wbg.__wbg_instanceof_Map_87917e0a7aaf4012 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Map;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbindgen_bigint_from_u64 = function(arg0) {
        const ret = BigInt.asUintN(64, arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_entries_95cc2c823b285a09 = function(arg0) {
        const ret = Object.entries(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_null = function(arg0) {
        const ret = getObject(arg0) === null;
        return ret;
    };
    imports.wbg.__wbg_String_b9412f8799faab3e = function(arg0, arg1) {
        const ret = String(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_String_63b60bf2d0a90959 = function(arg0, arg1) {
        const ret = String(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_coreresponsehandler_20bcf2bc15d3b9a9 = function(arg0, arg1, arg2, arg3) {
        core_response_handler(arg0 >>> 0, takeObject(arg1), arg2 >>> 0, arg3 !== 0);
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        const ret = debugString(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6 = function(arg0) {
        const ret = getObject(arg0).queueMicrotask;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_resolve_b0083a7967828ec8 = function(arg0) {
        const ret = Promise.resolve(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_then_0c86a60e8fcfe9f6 = function(arg0, arg1) {
        const ret = getObject(arg0).then(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_queueMicrotask_481971b0d87f3dd4 = function(arg0) {
        queueMicrotask(getObject(arg0));
    };
    imports.wbg.__wbg_then_a73caa9a87991566 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_Window_f401953a2cf86220 = function(arg0) {
        let result;
        try {
            result = true;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_result_6cedf5f78600a79c = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).result;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_error_685b20024dc2d6ca = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).error;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_text_450a059667fd91fd = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).text();
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_newwithstrandinit_3fd6fba4083ff2d0 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_closure_wrapper808 = function(arg0, arg1, arg2) {
        const ret = makeClosure(arg0, arg1, 79, __wbg_adapter_50);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper813 = function(arg0, arg1, arg2) {
        const ret = makeClosure(arg0, arg1, 79, __wbg_adapter_53);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper3712 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 332, __wbg_adapter_56);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper4427 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 336, __wbg_adapter_59);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper6024 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 336, __wbg_adapter_62);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper6029 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 336, __wbg_adapter_62);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper7708 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 1325, __wbg_adapter_62);
        return addHeapObject(ret);
    };

    return imports;
}

function __wbg_init_memory(imports, maybe_memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedBigInt64Memory0 = null;
    cachedFloat64Memory0 = null;
    cachedInt32Memory0 = null;
    cachedUint8Memory0 = null;


    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(input) {
    if (wasm !== undefined) return wasm;

    if (typeof input === 'undefined') {    }
    const imports = __wbg_get_imports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await input, imports);

    return __wbg_finalize_init(instance, module);
}


//****************************************************************** WRAPPER END

function replaceUndefinedWithNulls(value) {
    if (value === undefined) {
        return null;
    }
    if (value instanceof Blob) {
        return value;
    }
    if (typeof value === "object" && value !== null) {
        const result = Array.isArray(value) ? [] : {};
        for (const key in value) {
            result[key] = replaceUndefinedWithNulls(value[key]);
        }
        return result;
    }
    return value;
};

function core_response_handler(request_id, params, response_type, finished) {
    postMessage({
        type: 'response',
        requestId: request_id,
        params: replaceUndefinedWithNulls(params),
        responseType: response_type,
        finished,
    });
}

async function replaceBlobsWithArrayBuffers(value) {
    if (value instanceof Blob) {
        return await value.arrayBuffer();
    }
    if (typeof value === "bigint") {
        if (value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER) {
            return Number(value);
        } else {
            return value.toString();
        }
    }
    if (typeof value === "object" && value !== null) {
        const result = Array.isArray(value) ? [] : {};
        for (const key in value) {
            result[key] = await replaceBlobsWithArrayBuffers(value[key]);
        }
        return result;
    }
    return value;
}

self.onmessage = (e) => {
    const message = e.data;
    switch (message.type) {
    case 'init':
        (async () => {
            await init(message.wasmModule);
            postMessage({ type: 'init' });
        })();
        break;

    case 'createContext':
        postMessage({
            type: 'createContext',
            result: core_create_context(message.configJson),
            requestId: message.requestId,
        });
        break;

    case 'destroyContext':
        core_destroy_context(message.context);
        postMessage({
            type: 'destroyContext'
        });
        break;

    case 'request':
        (async () => {
            core_request(
                message.context,
                message.functionName,
                await replaceBlobsWithArrayBuffers(message.functionParams),
                message.requestId,
            );
        })();
        break;
    }
};
`;let H=null;function an(n){H=n}function Oe(){return Promise.resolve("web")}function ge(n){H&&H.debugLog&&H.debugLog(n)}async function qe(){const n=Date.now();let r;if(H&&H.loadModule)r=await H.loadModule;else{const i=fetch(H&&H.binaryURL||"/eversdk.wasm");if(WebAssembly.compileStreaming)return ge("compileStreaming binary"),await WebAssembly.compileStreaming(i);ge("compile binary"),r=await WebAssembly.compile(await(await i).arrayBuffer())}await init(r),ge(`compile time ${Date.now()-n}`)}function sn(){const n=new Blob([rn],{type:"application/javascript"}),r=URL.createObjectURL(n),i=new Worker(r);let s=1;const c=new Map;let b=!1,a=null;return i.onmessage=u=>{const d=u.data;switch(d.type){case"init":b=!0;for(const[p,O]of c.entries())i.postMessage({type:"createContext",requestId:p,configJson:O.configJson});break;case"createContext":const h=c.get(d.requestId);h&&(c.delete(d.requestId),h.resolve(d.result));break;case"destroyContext":break;case"response":a&&a(d.requestId,d.params,d.responseType,d.finished);break}},i.onerror=u=>{console.log(`Error from Web Worker: ${u.message}`)},(async()=>i.postMessage({type:"init",wasmModule:await qe()}))(),Promise.resolve({getLibName:Oe,setResponseParamsHandler:u=>{a=u},createContext:u=>new Promise(d=>{const h=s;s+=1,c.set(h,{configJson:u,resolve:d}),b&&i.postMessage({type:"createContext",requestId:h,configJson:u})}),destroyContext:u=>{i.postMessage({type:"destroyContext",context:u})},sendRequestParams:(u,d,h,p)=>{i.postMessage({type:"request",context:u,requestId:d,functionName:h,functionParams:p})}})}function cn(){let n;const r=new Array(128).fill(void 0);r.push(void 0,null,!0,!1);function i(l){return r[l]}let s=r.length;function c(l){l<132||(r[l]=s,s=l)}function b(l){const v=i(l);return c(l),v}const a=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&a.decode();let u=null;function d(){return(u===null||u.byteLength===0)&&(u=new Uint8Array(n.memory.buffer)),u}function h(l,v){return l=l>>>0,a.decode(d().subarray(l,l+v))}function p(l){s===r.length&&r.push(r.length+1);const v=s;return s=r[v],r[v]=l,v}let O=0;const F=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},R=typeof F.encodeInto=="function"?function(l,v){return F.encodeInto(l,v)}:function(l,v){const k=F.encode(l);return v.set(k),{read:l.length,written:k.length}};function y(l,v,k){if(k===void 0){const A=F.encode(l),D=v(A.length,1)>>>0;return d().subarray(D,D+A.length).set(A),O=A.length,D}let I=l.length,x=v(I,1)>>>0;const T=d();let B=0;for(;B<I;B++){const A=l.charCodeAt(B);if(A>127)break;T[x+B]=A}if(B!==I){B!==0&&(l=l.slice(B)),x=k(x,I,I=B+l.length*3,1)>>>0;const A=d().subarray(x+B,x+I),D=R(l,A);B+=D.written,x=k(x,I,B,1)>>>0}return O=B,x}let _=null;function o(){return(_===null||_.byteLength===0)&&(_=new Int32Array(n.memory.buffer)),_}typeof FinalizationRegistry>"u"||new FinalizationRegistry(l=>{n.__wbindgen_export_2.get(l.dtor)(l.a,l.b)});function f(l){let v,k;try{const T=n.__wbindgen_add_to_stack_pointer(-16),B=y(l,n.__wbindgen_malloc,n.__wbindgen_realloc),A=O;n.core_create_context(T,B,A);var I=o()[T/4+0],x=o()[T/4+1];return v=I,k=x,h(I,x)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_free(v,k,1)}}function w(l){n.core_destroy_context(l)}function q(l,v,k,I){try{const B=n.__wbindgen_add_to_stack_pointer(-16),A=y(v,n.__wbindgen_malloc,n.__wbindgen_realloc),D=O;n.core_request(B,l,A,D,p(k),I);var x=o()[B/4+0],T=o()[B/4+1];if(T)throw b(x)}finally{n.__wbindgen_add_to_stack_pointer(16)}}async function M(l){if(l instanceof Blob)return await l.arrayBuffer();if(typeof l=="bigint")return l<Number.MAX_SAFE_INTEGER&&l>Number.MIN_SAFE_INTEGER?Number(l):l.toString();if(typeof l=="object"&&l!==null){const v=Array.isArray(l)?[]:{};for(const k in l)v[k]=await M(l[k]);return v}return l}let j=[];return(async()=>{await init(await qe());for(const l of j)l.resolve(f(l.configJson));j=null})(),Promise.resolve({getLibName:Oe,setResponseParamsHandler:l=>{},createContext:l=>j===null?Promise.resolve(f(l)):new Promise(v=>{j.push({configJson:l,resolve:v})}),destroyContext:l=>{w(l)},sendRequestParams:(l,v,k,I)=>{(async()=>q(l,k,await M(I),v))()}})}function on(){return H&&H.disableSeparateWorker?cn():sn()}Wt.wasm&&(async()=>{an({binaryURL:"/tvmsdk.wasm"}),de.TvmClient.useBinaryLibrary(on);const r=await new de.TvmClient().crypto.generate_random_sign_keys();console.log("TVM Client configured with libWeb",{keys:r})})();const hn={};function un(n){let r,i,s;var c=n[2][0];function b(a,u){return{props:{data:a[4],form:a[3],params:a[1].params}}}return c&&(r=Z(c,b(n)),n[12](r)),{c(){r&&ee(r.$$.fragment),i=z()},l(a){r&&be(r.$$.fragment,a),i=z()},m(a,u){r&&te(r,a,u),K(a,i,u),s=!0},p(a,u){if(u&4&&c!==(c=a[2][0])){if(r){re();const d=r;G(d.$$.fragment,1,0,()=>{C(d,1)}),ie()}c?(r=Z(c,b(a)),a[12](r),ee(r.$$.fragment),E(r.$$.fragment,1),te(r,i.parentNode,i)):r=null}else if(c){const d={};u&16&&(d.data=a[4]),u&8&&(d.form=a[3]),u&2&&(d.params=a[1].params),r.$set(d)}},i(a){s||(r&&E(r.$$.fragment,a),s=!0)},o(a){r&&G(r.$$.fragment,a),s=!1},d(a){a&&U(i),n[12](null),r&&C(r,a)}}}function _n(n){let r,i,s;var c=n[2][0];function b(a,u){return{props:{data:a[4],params:a[1].params,$$slots:{default:[ln]},$$scope:{ctx:a}}}}return c&&(r=Z(c,b(n)),n[11](r)),{c(){r&&ee(r.$$.fragment),i=z()},l(a){r&&be(r.$$.fragment,a),i=z()},m(a,u){r&&te(r,a,u),K(a,i,u),s=!0},p(a,u){if(u&4&&c!==(c=a[2][0])){if(r){re();const d=r;G(d.$$.fragment,1,0,()=>{C(d,1)}),ie()}c?(r=Z(c,b(a)),a[11](r),ee(r.$$.fragment),E(r.$$.fragment,1),te(r,i.parentNode,i)):r=null}else if(c){const d={};u&16&&(d.data=a[4]),u&2&&(d.params=a[1].params),u&8239&&(d.$$scope={dirty:u,ctx:a}),r.$set(d)}},i(a){s||(r&&E(r.$$.fragment,a),s=!0)},o(a){r&&G(r.$$.fragment,a),s=!1},d(a){a&&U(i),n[11](null),r&&C(r,a)}}}function ln(n){let r,i,s;var c=n[2][1];function b(a,u){return{props:{data:a[5],form:a[3],params:a[1].params}}}return c&&(r=Z(c,b(n)),n[10](r)),{c(){r&&ee(r.$$.fragment),i=z()},l(a){r&&be(r.$$.fragment,a),i=z()},m(a,u){r&&te(r,a,u),K(a,i,u),s=!0},p(a,u){if(u&4&&c!==(c=a[2][1])){if(r){re();const d=r;G(d.$$.fragment,1,0,()=>{C(d,1)}),ie()}c?(r=Z(c,b(a)),a[10](r),ee(r.$$.fragment),E(r.$$.fragment,1),te(r,i.parentNode,i)):r=null}else if(c){const d={};u&32&&(d.data=a[5]),u&8&&(d.form=a[3]),u&2&&(d.params=a[1].params),r.$set(d)}},i(a){s||(r&&E(r.$$.fragment,a),s=!0)},o(a){r&&G(r.$$.fragment,a),s=!1},d(a){a&&U(i),n[10](null),r&&C(r,a)}}}function we(n){let r,i=n[7]&&ve(n);return{c(){r=Qt("div"),i&&i.c(),this.h()},l(s){r=Jt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var c=Kt(r);i&&i.l(c),c.forEach(U),this.h()},h(){_e(r,"id","svelte-announcer"),_e(r,"aria-live","assertive"),_e(r,"aria-atomic","true"),L(r,"position","absolute"),L(r,"left","0"),L(r,"top","0"),L(r,"clip","rect(0 0 0 0)"),L(r,"clip-path","inset(50%)"),L(r,"overflow","hidden"),L(r,"white-space","nowrap"),L(r,"width","1px"),L(r,"height","1px")},m(s,c){K(s,r,c),i&&i.m(r,null)},p(s,c){s[7]?i?i.p(s,c):(i=ve(s),i.c(),i.m(r,null)):i&&(i.d(1),i=null)},d(s){s&&U(r),i&&i.d()}}}function ve(n){let r;return{c(){r=Yt(n[8])},l(i){r=$t(i,n[8])},m(i,s){K(i,r,s)},p(i,s){s&256&&Xt(r,i[8])},d(i){i&&U(r)}}}function gn(n){let r,i,s,c,b;const a=[_n,un],u=[];function d(p,O){return p[2][1]?0:1}r=d(n),i=u[r]=a[r](n);let h=n[6]&&we(n);return{c(){i.c(),s=Gt(),h&&h.c(),c=z()},l(p){i.l(p),s=Ut(p),h&&h.l(p),c=z()},m(p,O){u[r].m(p,O),K(p,s,O),h&&h.m(p,O),K(p,c,O),b=!0},p(p,[O]){let F=r;r=d(p),r===F?u[r].p(p,O):(re(),G(u[F],1,1,()=>{u[F]=null}),ie(),i=u[r],i?i.p(p,O):(i=u[r]=a[r](p),i.c()),E(i,1),i.m(s.parentNode,s)),p[6]?h?h.p(p,O):(h=we(p),h.c(),h.m(c.parentNode,c)):h&&(h.d(1),h=null)},i(p){b||(E(i),b=!0)},o(p){G(i),b=!1},d(p){p&&(U(s),U(c)),u[r].d(p),h&&h.d(p)}}}function dn(n,r,i){let{stores:s}=r,{page:c}=r,{constructors:b}=r,{components:a=[]}=r,{form:u}=r,{data_0:d=null}=r,{data_1:h=null}=r;Et(s.page.notify);let p=!1,O=!1,F=null;zt(()=>{const o=s.page.subscribe(()=>{p&&(i(7,O=!0),Vt().then(()=>{i(8,F=document.title||"untitled page")}))});return i(6,p=!0),o});function R(o){le[o?"unshift":"push"](()=>{a[1]=o,i(0,a)})}function y(o){le[o?"unshift":"push"](()=>{a[0]=o,i(0,a)})}function _(o){le[o?"unshift":"push"](()=>{a[0]=o,i(0,a)})}return n.$$set=o=>{"stores"in o&&i(9,s=o.stores),"page"in o&&i(1,c=o.page),"constructors"in o&&i(2,b=o.constructors),"components"in o&&i(0,a=o.components),"form"in o&&i(3,u=o.form),"data_0"in o&&i(4,d=o.data_0),"data_1"in o&&i(5,h=o.data_1)},n.$$.update=()=>{n.$$.dirty&514&&s.page.set(c)},[a,c,b,u,d,h,p,O,F,s,R,y,_]}class wn extends Pt{constructor(r){super(),Tt(this,r,dn,gn,Lt,{stores:9,page:1,constructors:2,components:0,form:3,data_0:4,data_1:5})}}const vn=[()=>N(()=>import("../nodes/0.6Bb56eQa.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),()=>N(()=>import("../nodes/1.BVyLsGqW.js"),__vite__mapDeps([10,1,2,4,5,3]),import.meta.url),()=>N(()=>import("../nodes/2.BKYgV_hV.js"),__vite__mapDeps([11,5,1,3,2]),import.meta.url),()=>N(()=>import("../nodes/3.Cc0-4Buo.js"),__vite__mapDeps([12,1,13,2,4,5,3,6,14,15,16,17,18,19,20,7,21]),import.meta.url),()=>N(()=>import("../nodes/4.HrmdJp2x.js"),__vite__mapDeps([22,1,13,2,23,7,6,3,14,15,16,17,18,19,20,24]),import.meta.url),()=>N(()=>import("../nodes/5.BZwdt4hV.js"),__vite__mapDeps([25,1,2,4,5,3,6,14,15,16,17,18,19,7,26]),import.meta.url),()=>N(()=>import("../nodes/6.DZUGMx4c.js"),__vite__mapDeps([27,1,13,2,6,3,14,15,16,17]),import.meta.url),()=>N(()=>import("../nodes/7.DtZa8yV0.js"),__vite__mapDeps([28,1,13,2,23,7,6,3,14,15,18,19,20]),import.meta.url),()=>N(()=>import("../nodes/8.DAle2Dss.js"),__vite__mapDeps([29,1,2,4,5,3,6,14,15,16,17,18,19,7,30]),import.meta.url),()=>N(()=>import("../nodes/9.D5riAFqh.js"),__vite__mapDeps([31,1,13,2,6,3,23,7,14,15,16,17,18,19,32]),import.meta.url),()=>N(()=>import("../nodes/10.DNqT0X9t.js"),__vite__mapDeps([33,1,13,2,23,7,6,3,14,15,18,19,16,17,34]),import.meta.url),()=>N(()=>import("../nodes/11.G5Qbz31u.js"),__vite__mapDeps([35,1,13,2,23,7,6,3,14,15,16,17,18,19,20]),import.meta.url),()=>N(()=>import("../nodes/12.DPS6Z6Vh.js"),__vite__mapDeps([36,1,13,2,4,5,3,6,14,15,16,17,18,19,7,26]),import.meta.url)],Sn=[],On={"/":[2],"/accounts/[id]":[3],"/blocks":[4],"/blocks/[id]":[5],"/contracts":[6],"/messages":[7],"/messages/[id]":[8],"/showcase":[9],"/stats":[10],"/transactions":[11],"/transactions/[id]":[12]},bn={handleError:({error:n})=>{console.error(n)},init:void 0,reroute:()=>{},transport:{}},fn=Object.fromEntries(Object.entries(bn.transport).map(([n,r])=>[n,r.decode])),qn=!1,kn=(n,r)=>fn[n](r);export{kn as decode,fn as decoders,On as dictionary,qn as hash,bn as hooks,hn as matchers,vn as nodes,wn as root,Sn as server_loads};
