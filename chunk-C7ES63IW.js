import{a as ce,c as N}from"./chunk-F5RX2E5J.js";import{a as E,b as k,d as R,e as K,f as S,l as U,q as M,s as L}from"./chunk-RPFYFQP4.js";import{L as C,P as m,l as f,n as B,na as W,nc as $}from"./chunk-RLXXVR6I.js";import{e as ne}from"./chunk-C6Q5SG76.js";var J=ne(ce());var O=new Map([["91e83e01e41226af166d535e204ab7277b920b8fc518884e1f695ba6f269d74f","AckiNackiBlockManagerNodeWallet"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Mvmultifactor"],["2a7dd92c9d5617625bf1fbba27fc56cdebe8e3dfa844ecce0cf824818ece41a4","BlockKeeperEpochContract"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoinWallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","AckiNackiBlockKeeperNodeWallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoinRoot"],["eb7a346704904a164482466f768ce32a92439cd7488495639a98023901f2800f","USDCRoot"],["d46ad99d6889112ebedd8a00eea444b928b882dab1c6388b1c006e29ebd91fc9","USDCWallet"],["66dd0af2eae28a105c1f6cc8515f7c46271d502b176c6220ae42e3140ba6c3a4","USDCWallet"],["dee014d1c9c5ec9171b261bcf1fa45228c945fbcf1659b911569e458892616cf","DappConfig"],["a713404b073f1d1e0d2daded883e7376da67c8e1daf666d2a0b17b081812d732","DappConfig"]]),z=new Map([["AckiNackiBlockManagerNodeWallet","Block Manager Node Wallet"],["Indexer","Indexer"],["Mvmultifactor","Multifactor"],["BlockKeeperEpochContract","Block Keeper Epoch Contract"],["PopitGame","PopitGame"],["PopCoinWallet","PopCoin Wallet"],["AckiNackiBlockKeeperNodeWallet","Block Keeper Node Wallet"],["Boost","Boost"],["PopCoinRoot","PopCoin Root"],["USDCRoot","USDC Root"],["USDCWallet","USDC Wallet"],["DappConfig","DappConfig"]]),oe=new Map([["51ceb7acf7a74a59d121f0cdf6372eb22cc072347c09accb46ea160d03daf5cb","Mobile Verifier Root"]]),I=(()=>{class n{constructor(){this.lastCode=new Map,this.codeSchemaCache=new Map}resolveNameByHash(e){let t=oe.get(e);if(t)return t;for(let[o,r]of this.lastCode.entries())if(r===e)return z.get(o)||o;let a=O.get(e);if(a)return z.get(a)||a}async fetchCodeSchemaJson(e){let t=[`${e}.json`,`${e}.abi.json`],a=!1;for(let o of t){let r=new AbortController,s=setTimeout(()=>r.abort(),5e3);try{let i=await fetch(`${E.api}/abi/${o}`,{method:"GET",signal:r.signal});if(i.ok)return{result:await i.json(),hadTransientError:a};i.status>=500&&(a=!0)}catch(i){a=!0}finally{clearTimeout(s)}}return{result:void 0,hadTransientError:a}}async updateLastCodeHash(){if(!(this.lastCode.size>0))try{let e=new AbortController,t=setTimeout(()=>e.abort(),5e3),a=await fetch(`${E.api}/abi/last.json`,{method:"GET",signal:e.signal}).finally(()=>clearTimeout(t));if(a.ok){let o=await a.json();for(let r of o)this.lastCode.set(r[0],r[1])}}catch(e){}}async getAlias(e){await this.updateLastCodeHash();let t=O.get(e);if(!t)return e;let a=this.lastCode.get(t);return a||e}async getCodeSchema(e){let t=await this.getAlias(e);if(this.codeSchemaCache.has(t))return this.codeSchemaCache.get(t);try{let{result:a,hadTransientError:o}=await this.fetchCodeSchemaJson(t);if(!a||typeof a!="object"){o||this.codeSchemaCache.set(t,void 0);return}let r=a,s=r.abi??r;if(!s||typeof s!="object"||!("ABI version"in s)){o||this.codeSchemaCache.set(t,void 0);return}let i={name:r.name||this.resolveNameByHash(t)||t,abi:(0,J.abiContract)(s)};return this.codeSchemaCache.set(t,i),i}catch(a){return}}async getLatestCodeHashes(){return await this.updateLastCodeHash(),new Map(this.lastCode)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var v=new Map([[3,{id:3,name:"USDC",decimals:6,description:"USD Coin"}]]),Q=(()=>{class n{constructor(){this.collectionAddress=U,this.cache=null,this.loadingPromise=null,this.graphql=m(S),this.api=m(I),this.tvmClient=m(N),this.platformId=m(W)}async getCurrencyMap(){if(this.cache)return this.cache;if($(this.platformId))return this.loadCurrencyMap();if(this.loadingPromise)return this.loadingPromise;this.loadingPromise=this.loadCurrencyMap();try{this.cache=await this.loadingPromise}finally{this.loadingPromise=null}return this.cache}async getCurrencyName(e){return(await this.getCurrencyMap()).get(e)?.name??null}async loadCurrencyMap(){try{let e=await f(this.graphql.resolveAccountQueryArgs(this.collectionAddress)),t=`
        query GetCurrencyCollection(${e.varDecls}) {
          blockchain {
            account(${e.argClause}) {
              info {
                data
                code_hash
                init_code_hash
              }
            }
          }
        }
      `,o=(await f(this.graphql.query(t,e.variables)))?.blockchain?.account?.info;if(!o?.data)return new Map(v);let r=await this.resolveAbi(o.code_hash,o.init_code_hash);if(!r)return new Map(v);let u=(await this.tvmClient.decodeAccountData(o.data,r))?.data?._data,p=u?.data??u?.currencies?._data??u;if(!p||typeof p!="object")return new Map(v);let y=new Map(v);for(let[P,A]of Object.entries(p)){let _=A?.data??A,b=_!==null&&typeof _=="object"?_:void 0,h=Number(b?.key??P);if(!Number.isFinite(h))continue;let T=b?.name,j=b?.decimals,H=b?.description,x=v.get(h);y.set(h,{id:h,name:typeof T=="string"&&T.trim().length>0?T:x?.name??`Currency ${h}`,decimals:typeof j=="number"?j:x?.decimals,description:typeof H=="string"?H:x?.description})}return y}catch(e){return new Map(v)}}async resolveAbi(e,t){let a=[e,t].filter(Boolean);for(let o of a){let r=await this.api.getCodeSchema(o);if(r?.abi)return r.abi}return null}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function q(n){if(!n)return null;let c=n.trim().replace(/^0x/i,"");if(!c)return null;try{return BigInt(`0x${c}`).toString()}catch{return null}}function Y(n){if(n==null||n==="")return null;let c=String(n).trim();if(!c)return null;try{return BigInt(c).toString()}catch{return null}}function X(n){let c=Number(n);return Number.isFinite(c)&&c>0?new Date(c*1e3):null}function ie(n,c){return n?.map(e=>{let t=c.get(e.currency);return{id:e.currency,name:t?.name||`Currency ${e.currency}`,value:q(e.value)??"0",decimals:t?.decimals}})??[]}function Z({address:n,accountBoc:c,accountData:e,currencyMap:t,contractName:a,dataParsed:o,dappId:r}){return{id:e.id||n,accType:e.acc_type,accTypeName:e.acc_type_name,balances:ie(e.balance_other,t).concat([{id:0,name:"SHELL",value:q(e.balance)??"0",decimals:9}]),bits:parseInt(e.bits,16),boc:c,cells:parseInt(e.cells,16),code:e.code||"",codeHash:e.code_hash||"",data:e.data||"",dataHash:e.data_hash||"",initCodeHash:e.init_code_hash||"",jsonVersion:e.json_version,lastPaid:X(e.last_paid),lastTransLt:q(e.last_trans_lt),publicCells:parseInt(e.public_cells,16),workchainId:e.workchain_id,isUpdatable:L(n),contractName:a,dataParsed:o,dappId:r,snapshotCompleteness:"full",degradedReasons:[]}}function ee({address:n,info:c,mainCurrencyName:e,contractName:t}){return{id:n,accType:c.acc_type||0,accTypeName:c.acc_type_name||"Unknown",balances:[{id:0,name:e,value:Y(c.balance)??"0"}],bits:0,cells:0,publicCells:0,boc:c.boc||"",code:c.code||"",codeHash:c.code_hash||"",data:c.data||"",dataHash:c.data_hash||"",initCodeHash:c.init_code_hash||"",jsonVersion:0,lastPaid:X(c.last_paid),lastTransLt:Y(c.last_trans_lt),workchainId:0,isUpdatable:L(n),contractName:t,dappId:c.dapp_id||void 0,snapshotCompleteness:"partial",degradedReasons:["tvm-sdk-fallback"]}}var d=(function(n){return n.Indexer="Indexer",n.MvMultifactor="Mobile Verifier Multifactor",n.PopitGame="Popit Game",n})(d||{}),g=new Map([["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb",d.MvMultifactor],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126",d.PopitGame],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245",d.Indexer]]),w=class{constructor(c,e,t){this.tvmClientService=e,Object.assign(this,c),this.detectedType=t??void 0}get type(){return typeof this.detectedType<"u"?this.detectedType:g.get(this.codeHash)??g.get(this.initCodeHash)??null??null}async getName(){return typeof this.nameCache<"u"?this.nameCache:this.namePromise?this.namePromise:(this.namePromise=(async()=>{try{let c=M(this.id);if(c)return this.nameCache=c,c;if(this.type===d.MvMultifactor){let e=await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getMvMultifactorAbi())});this.nameCache=e?.data?._name||null}else if(this.type===d.Indexer){let e=await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getIndexerAbi())});this.nameCache=e?.data?._name||null}else this.nameCache=null}catch(c){return null}finally{this.namePromise=void 0}return this.nameCache})(),this.namePromise)}async getLinkedAccounts(){let c=new Map;try{if(this.type===d.MvMultifactor){let e=await this.getName();if(e){let a=await this.tvmClientService.getIndexerAddressByName(e);c.set(d.Indexer,a)}let t=await this.tvmClientService.getPopitGameAddress(this.id);return t&&c.set(d.PopitGame,t),c}if(this.type===d.Indexer){let e=await this.tvmClientService.getMvFromIndexerData(this.data);if(e){c.set(d.MvMultifactor,e);let t=await this.tvmClientService.getPopitGameAddress(e);t&&c.set(d.PopitGame,t)}}else if(this.type===d.PopitGame){let t=(await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getPopitGameAbi())}))?.data?._owner;t&&c.set(d.MvMultifactor,t)}}catch(e){}return c}};var se=new Map([["91e83e01e41226af166d535e204ab7277b920b8fc518884e1f695ba6f269d74f","Block Manager Node Wallet"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Multifactor"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoin Wallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","Block Keeper Node Wallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoin Root"],["d46ad99d6889112ebedd8a00eea444b928b882dab1c6388b1c006e29ebd91fc9","USDC Wallet"],["51ceb7acf7a74a59d121f0cdf6372eb22cc072347c09accb46ea160d03daf5cb","Mobile Verifier Root"]]);function D(n){return se.get(n)}function te(n){return g.get(n)}function G(n){if(!n)return null;let c=n.toLowerCase();return c.includes("indexer")?d.Indexer:c.includes("multifactor")?d.MvMultifactor:c.includes("popit")?d.PopitGame:null}function ae(n,c){let e=[n,c].filter(Boolean);for(let t of e){let a=g.get(t);if(a)return a}return null}function re(n,c){for(let[e,t]of c.entries())if(n.includes(t)){let a=G(e);if(a)return a}return null}var je=(()=>{class n{constructor(){this.graphql=m(S),this.tvmClientService=m(N),this.apiService=m(I),this.currencyService=m(Q),this.nameToMvCache=new Map}async getAccountDetails(e,t={}){let a=e.trim();if(!this.isAddress(a))try{let r=await this.tvmClientService.getIndexerAddressByName(a);a=await this.resolveMvFromIndexer(r)||r}catch(r){throw r instanceof Error?r:new Error("Failed to resolve account name.")}try{let{boc:r,dappId:s}=await f(this.graphql.getAccountBocWithDappId(a,{noCache:t.noCache}));if(r)try{let{parsed:i}=await this.tvmClientService.parseAccount(r);if(i){let l=i.code_hash||"",u=i.init_code_hash||"",p=D(l),y;for(let _ of[l,u].filter(Boolean)){let b=await this.apiService.getCodeSchema(_);if(b){if(p=b.name,b.abi&&i.data)try{let h=await this.tvmClientService.decodeAccountData(i.data,b.abi);h?.data&&(y=h.data)}catch(h){}break}}let P=await this.currencyService.getCurrencyMap(),A=await this.resolveAccountType(l,u,p),F=Z({address:a,accountBoc:r,accountData:i,currencyMap:P,contractName:p,dataParsed:y,dappId:s??void 0});return new w(F,this.tvmClientService,A)}}catch(i){}return await this.getAccountDetailsFallback(a,t.noCache)}catch(r){throw r instanceof Error?r:new Error("Failed to load account details.")}}async getAccountDetailsFallback(e,t=!1){try{let a=await f(this.graphql.resolveAccountQueryArgs(e)),o=`
        query GetAccountInfo(${a.varDecls}) {
          blockchain {
            account(${a.argClause}) {
              info {
                balance(format: DEC)
                acc_type
                acc_type_name
                last_paid
                code_hash
                data_hash
                init_code_hash
                last_trans_lt(format: DEC)
                code
                data
                boc
                dapp_id
              }
            }
          }
        }
      `,r=await f(this.graphql.query(o,a.variables,{noCache:t}).pipe(B(y=>y?.blockchain?.account?.info||null)));if(!r)return null;let s=r.code_hash||"",i=D(s),l=await this.resolveAccountType(s,r.init_code_hash||"",i),u=await this.currencyService.getCurrencyMap(),p=ee({address:e,info:r,mainCurrencyName:u.get(1)?.name||"SHELL",contractName:i});return new w(p,this.tvmClientService,l)}catch(a){throw a instanceof Error?a:new Error("Failed to load fallback account details.")}}async resolveAccountType(e,t,a){let o=ae(e,t);if(o)return o;let r=[e,t].filter(Boolean);try{let s=await this.apiService.getLatestCodeHashes(),i=re(r,s);if(i)return i}catch(s){}return G(a)}getContractName(e){return D(e)}getContractType(e){return te(e)}getMainBalance(e){return e.balances.find(a=>a.id===0)?.value??"0"}getAccountName(e){return M(e)||null}isAddress(e){return R(e)}isHash(e){return K(e)}async getTransactionLookupAddresses(e,t,a=[]){let o=new Set,r=[],s=l=>{let u=k(l);o.has(u)||(o.add(u),r.push(u))};s(e);for(let l of a)l&&s(l);let i=t.trim();if(!this.isAddress(i))try{s(await this.tvmClientService.getIndexerAddressByName(i))}catch(l){}return r}async getTransactionLookupAddressesForAccount(e,t){let o=[...(await e.getLinkedAccounts()).values()];try{let r=await this.tvmClientService.getPopitGameAddress(e.id);if(r){let s=k(r);o.some(l=>k(l)===s)||o.push(r)}}catch(r){}return this.getTransactionLookupAddresses(e.id,t,o)}async resolveWalletName(e){let t=e.trim().toLowerCase();if(!t||!/^[a-z0-9_-]{1,64}$/.test(t))return null;try{let a=await this.tvmClientService.getIndexerAddressByName(t);return await this.resolveMvFromIndexer(a)}catch{return null}}async resolveMvFromIndexer(e){let t=this.nameToMvCache.get(e);if(t)return t;try{let a=await f(this.graphql.resolveAccountQueryArgs(e)),o=`
        query GetIndexerData(${a.varDecls}) {
          blockchain {
            account(${a.argClause}) {
              info {
                data
              }
            }
          }
        }
      `,s=(await f(this.graphql.query(o,a.variables)))?.blockchain?.account?.info?.data;if(!s)return null;let i=await this.tvmClientService.getMvFromIndexerData(s);return i&&this.nameToMvCache.set(e,i),i}catch(a){return null}}async getTransactionDetails(e){return await f(this.graphql.query(`
      query GetTransaction($hash: String!) {
        blockchain {
          transaction(hash: $hash) {
            id
            account_addr
            now
            now_string
            aborted
            balance_delta(format: DEC)
            total_fees(format: DEC)
            status_name
            orig_status_name
            end_status_name
            tr_type_name
            workchain_id
            compute {
              success
              exit_code
              gas_used(format: DEC)
              gas_fees(format: DEC)
            }
            in_message {
              id
              src
              dst
              value(format: DEC)
              value_other { currency value(format: DEC) }
              msg_type_name
            }
            out_messages {
              id
              src
              dst
              value(format: DEC)
              value_other { currency value(format: DEC) }
              msg_type_name
            }
          }
        }
      }
    `,{hash:e},{timeout:6e4}).pipe(B(a=>a?.blockchain?.transaction??null)))}async searchByHash(e){let o=(await f(this.graphql.query(`
      query Search($id: String!) {
        blockchain {
          block(hash: $id) {
            id
          }
          transaction(hash: $id) {
            id
          }
          message(hash: $id) {
            id
            dst_transaction {
              id
            }
            src_transaction {
              id
            }
          }
        }
      }
    `,{id:e},{timeout:6e4}))).blockchain,r=o?.message;return{blocks:o?.block?[o.block]:[],transactions:o?.transaction?[o.transaction]:[],messages:r?[{id:r.id,dst_transaction:r.dst_transaction??void 0,src_transaction:r.src_transaction??void 0}]:[]}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();export{I as a,Q as b,d as c,g as d,w as e,je as f};
