import{a as A,c as W,d as K}from"./chunk-FVK4E7CF.js";import{a as ne,c as M}from"./chunk-5RKEQHWJ.js";import{a as D,b as k,h as R,m as S,o as E}from"./chunk-CP6DEO5Z.js";import{L as y,P as h,l as p,mc as $,n as B,na as H}from"./chunk-TPQ77ZJP.js";import{e as re}from"./chunk-C6Q5SG76.js";var V=re(ne());var U=new Map([["91e83e01e41226af166d535e204ab7277b920b8fc518884e1f695ba6f269d74f","AckiNackiBlockManagerNodeWallet"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Mvmultifactor"],["2a7dd92c9d5617625bf1fbba27fc56cdebe8e3dfa844ecce0cf824818ece41a4","BlockKeeperEpochContract"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoinWallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","AckiNackiBlockKeeperNodeWallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoinRoot"],["eb7a346704904a164482466f768ce32a92439cd7488495639a98023901f2800f","USDCRoot"],["d46ad99d6889112ebedd8a00eea444b928b882dab1c6388b1c006e29ebd91fc9","USDCWallet"],["66dd0af2eae28a105c1f6cc8515f7c46271d502b176c6220ae42e3140ba6c3a4","USDCWallet"],["dee014d1c9c5ec9171b261bcf1fa45228c945fbcf1659b911569e458892616cf","DappConfig"],["a713404b073f1d1e0d2daded883e7376da67c8e1daf666d2a0b17b081812d732","DappConfig"]]),O=new Map([["AckiNackiBlockManagerNodeWallet","Block Manager Node Wallet"],["Indexer","Indexer"],["Mvmultifactor","Multifactor"],["BlockKeeperEpochContract","Block Keeper Epoch Contract"],["PopitGame","PopitGame"],["PopCoinWallet","PopCoin Wallet"],["AckiNackiBlockKeeperNodeWallet","Block Keeper Node Wallet"],["Boost","Boost"],["PopCoinRoot","PopCoin Root"],["USDCRoot","USDC Root"],["USDCWallet","USDC Wallet"],["DappConfig","DappConfig"]]),ce=new Map([["51ceb7acf7a74a59d121f0cdf6372eb22cc072347c09accb46ea160d03daf5cb","Mobile Verifier Root"]]),N=(()=>{class r{constructor(){this.lastCode=new Map,this.codeSchemaCache=new Map}resolveNameByHash(e){let t=ce.get(e);if(t)return t;for(let[o,c]of this.lastCode.entries())if(c===e)return O.get(o)||o;let a=U.get(e);if(a)return O.get(a)||a}async fetchCodeSchemaJson(e){let t=[`${e}.json`,`${e}.abi.json`],a=!1;for(let o of t){let c=new AbortController,i=setTimeout(()=>c.abort(),5e3);try{let s=await fetch(`${D.api}/abi/${o}`,{method:"GET",signal:c.signal});if(s.ok)return{result:await s.json(),hadTransientError:a};s.status>=500&&(a=!0)}catch(s){a=!0}finally{clearTimeout(i)}}return{result:void 0,hadTransientError:a}}async updateLastCodeHash(){if(!(this.lastCode.size>0))try{let e=new AbortController,t=setTimeout(()=>e.abort(),5e3),a=await fetch(`${D.api}/abi/last.json`,{method:"GET",signal:e.signal}).finally(()=>clearTimeout(t));if(a.ok){let o=await a.json();for(let c of o)this.lastCode.set(c[0],c[1])}}catch(e){}}async getAlias(e){await this.updateLastCodeHash();let t=U.get(e);if(!t)return e;let a=this.lastCode.get(t);return a||e}async getCodeSchema(e){let t=await this.getAlias(e);if(this.codeSchemaCache.has(t))return this.codeSchemaCache.get(t);try{let{result:a,hadTransientError:o}=await this.fetchCodeSchemaJson(t);if(!a||typeof a!="object"){o||this.codeSchemaCache.set(t,void 0);return}let c=a,i=c.abi??c;if(!i||typeof i!="object"||!("ABI version"in i)){o||this.codeSchemaCache.set(t,void 0);return}let s={name:c.name||this.resolveNameByHash(t)||t,abi:(0,V.abiContract)(i)};return this.codeSchemaCache.set(t,s),s}catch(a){return}}async getLatestCodeHashes(){return await this.updateLastCodeHash(),new Map(this.lastCode)}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=y({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var C=new Map([[3,{id:3,name:"USDC",decimals:6,description:"USD Coin"}]]),J=(()=>{class r{constructor(){this.collectionAddress=R,this.cache=null,this.loadingPromise=null,this.graphql=h(k),this.api=h(N),this.tvmClient=h(M),this.platformId=h(H)}async getCurrencyMap(){if(this.cache)return this.cache;if($(this.platformId))return this.loadCurrencyMap();if(this.loadingPromise)return this.loadingPromise;this.loadingPromise=this.loadCurrencyMap();try{this.cache=await this.loadingPromise}finally{this.loadingPromise=null}return this.cache}async getCurrencyName(e){return(await this.getCurrencyMap()).get(e)?.name??null}async loadCurrencyMap(){try{let a=(await p(this.graphql.query(`
        query GetCurrencyCollection($address: String!) {
          blockchain {
            account(address: $address) {
              info {
                data
                code_hash
                init_code_hash
              }
            }
          }
        }
      `,{address:this.collectionAddress})))?.blockchain?.account?.info;if(!a?.data)return new Map(C);let o=await this.resolveAbi(a.code_hash,a.init_code_hash);if(!o)return new Map(C);let l=(await this.tvmClient.decodeAccountData(a.data,o))?.data?._data,f=l?.data??l?.currencies?._data??l;if(!f||typeof f!="object")return new Map(C);let b=new Map(C);for(let[P,_]of Object.entries(f)){let w=_?.data??_,m=w!==null&&typeof w=="object"?w:void 0,u=Number(m?.key??P);if(!Number.isFinite(u))continue;let T=m?.name,F=m?.decimals,j=m?.description,x=C.get(u);b.set(u,{id:u,name:typeof T=="string"&&T.trim().length>0?T:x?.name??`Currency ${u}`,decimals:typeof F=="number"?F:x?.decimals,description:typeof j=="string"?j:x?.description})}return b}catch(e){return new Map(C)}}async resolveAbi(e,t){let a=[e,t].filter(Boolean);for(let o of a){let c=await this.api.getCodeSchema(o);if(c?.abi)return c.abi}return null}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=y({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function L(r){if(!r)return null;let n=r.trim().replace(/^0x/i,"");if(!n)return null;try{return BigInt(`0x${n}`).toString()}catch{return null}}function Q(r){if(r==null||r==="")return null;let n=String(r).trim();if(!n)return null;try{return BigInt(n).toString()}catch{return null}}function Y(r){let n=Number(r);return Number.isFinite(n)&&n>0?new Date(n*1e3):null}function oe(r,n){return r?.map(e=>{let t=n.get(e.currency);return{id:e.currency,name:t?.name||`Currency ${e.currency}`,value:L(e.value)??"0",decimals:t?.decimals}})??[]}function X({address:r,accountBoc:n,accountData:e,currencyMap:t,contractName:a,dataParsed:o}){return{id:e.id||r,accType:e.acc_type,accTypeName:e.acc_type_name,balances:oe(e.balance_other,t).concat([{id:0,name:"SHELL",value:L(e.balance)??"0",decimals:9}]),bits:parseInt(e.bits,16),boc:n,cells:parseInt(e.cells,16),code:e.code||"",codeHash:e.code_hash||"",data:e.data||"",dataHash:e.data_hash||"",initCodeHash:e.init_code_hash||"",jsonVersion:e.json_version,lastPaid:Y(e.last_paid),lastTransLt:L(e.last_trans_lt),publicCells:parseInt(e.public_cells,16),workchainId:e.workchain_id,isUpdatable:E(r),contractName:a,dataParsed:o,snapshotCompleteness:"full",degradedReasons:[]}}function Z({address:r,info:n,mainCurrencyName:e,contractName:t}){return{id:r,accType:n.acc_type||0,accTypeName:n.acc_type_name||"Unknown",balances:[{id:0,name:e,value:Q(n.balance)??"0"}],bits:0,cells:0,publicCells:0,boc:n.boc||"",code:n.code||"",codeHash:n.code_hash||"",data:n.data||"",dataHash:n.data_hash||"",initCodeHash:n.init_code_hash||"",jsonVersion:0,lastPaid:Y(n.last_paid),lastTransLt:Q(n.last_trans_lt),workchainId:0,isUpdatable:E(r),contractName:t,snapshotCompleteness:"partial",degradedReasons:["tvm-sdk-fallback"]}}var d=(function(r){return r.Indexer="Indexer",r.MvMultifactor="Mobile Verifier Multifactor",r.PopitGame="Popit Game",r})(d||{}),v=new Map([["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb",d.MvMultifactor],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126",d.PopitGame],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245",d.Indexer]]),g=class{constructor(n,e,t){this.tvmClientService=e,Object.assign(this,n),this.detectedType=t??void 0}get type(){return typeof this.detectedType<"u"?this.detectedType:v.get(this.codeHash)??v.get(this.initCodeHash)??null??null}async getName(){return typeof this.nameCache<"u"?this.nameCache:this.namePromise?this.namePromise:(this.namePromise=(async()=>{try{let n=S(this.id);if(n)return this.nameCache=n,n;if(this.type===d.MvMultifactor){let e=await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getMvMultifactorAbi())});this.nameCache=e?.data?._name||null}else if(this.type===d.Indexer){let e=await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getIndexerAbi())});this.nameCache=e?.data?._name||null}else this.nameCache=null}catch(n){return null}finally{this.namePromise=void 0}return this.nameCache})(),this.namePromise)}async getLinkedAccounts(){let n=new Map;try{if(this.type===d.MvMultifactor){let e=await this.getName();if(e){let a=await this.tvmClientService.getIndexerAddressByName(e);n.set(d.Indexer,a)}let t=await this.tvmClientService.getPopitGameAddress(this.id);return t&&n.set(d.PopitGame,t),n}if(this.type===d.Indexer){let e=await this.tvmClientService.getMvFromIndexerData(this.data);if(e){n.set(d.MvMultifactor,e);let t=await this.tvmClientService.getPopitGameAddress(e);t&&n.set(d.PopitGame,t)}}else if(this.type===d.PopitGame){let t=(await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getPopitGameAbi())}))?.data?._owner;t&&n.set(d.MvMultifactor,t)}}catch(e){}return n}};var ie=new Map([["91e83e01e41226af166d535e204ab7277b920b8fc518884e1f695ba6f269d74f","Block Manager Node Wallet"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Multifactor"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoin Wallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","Block Keeper Node Wallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoin Root"],["d46ad99d6889112ebedd8a00eea444b928b882dab1c6388b1c006e29ebd91fc9","USDC Wallet"],["51ceb7acf7a74a59d121f0cdf6372eb22cc072347c09accb46ea160d03daf5cb","Mobile Verifier Root"]]);function I(r){return ie.get(r)}function ee(r){return v.get(r)}function q(r){if(!r)return null;let n=r.toLowerCase();return n.includes("indexer")?d.Indexer:n.includes("multifactor")?d.MvMultifactor:n.includes("popit")?d.PopitGame:null}function te(r,n){let e=[r,n].filter(Boolean);for(let t of e){let a=v.get(t);if(a)return a}return null}function ae(r,n){for(let[e,t]of n.entries())if(r.includes(t)){let a=q(e);if(a)return a}return null}var Fe=(()=>{class r{constructor(){this.graphql=h(k),this.tvmClientService=h(M),this.apiService=h(N),this.currencyService=h(J),this.nameToMvCache=new Map}async getAccountDetails(e,t={}){let a=e.trim();if(!this.isAddress(a))try{let c=await this.tvmClientService.getIndexerAddressByName(a);a=await this.resolveMvFromIndexer(c)||c}catch(c){throw c instanceof Error?c:new Error("Failed to resolve account name.")}try{let c=await p(this.graphql.getAccountBoc(a,{noCache:t.noCache}));if(c)try{let{parsed:i}=await this.tvmClientService.parseAccount(c);if(i){let s=i.code_hash||"",l=i.init_code_hash||"",f=I(s),b;for(let w of[s,l].filter(Boolean)){let m=await this.apiService.getCodeSchema(w);if(m){if(f=m.name,m.abi&&i.data)try{let u=await this.tvmClientService.decodeAccountData(i.data,m.abi);u?.data&&(b=u.data)}catch(u){}break}}let P=await this.currencyService.getCurrencyMap(),_=await this.resolveAccountType(s,l,f),G=X({address:a,accountBoc:c,accountData:i,currencyMap:P,contractName:f,dataParsed:b});return new g(G,this.tvmClientService,_)}}catch(i){}return await this.getAccountDetailsFallback(a,t.noCache)}catch(c){throw c instanceof Error?c:new Error("Failed to load account details.")}}async getAccountDetailsFallback(e,t=!1){try{let o=await p(this.graphql.query(`
        query GetAccountInfo($address: String!) {
          blockchain {
            account(address: $address) {
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
              }
            }
          }
        }
      `,{address:e},{noCache:t}).pipe(B(b=>b?.blockchain?.account?.info||null)));if(!o)return null;let c=o.code_hash||"",i=I(c),s=await this.resolveAccountType(c,o.init_code_hash||"",i),l=await this.currencyService.getCurrencyMap(),f=Z({address:e,info:o,mainCurrencyName:l.get(1)?.name||"SHELL",contractName:i});return new g(f,this.tvmClientService,s)}catch(a){throw a instanceof Error?a:new Error("Failed to load fallback account details.")}}async resolveAccountType(e,t,a){let o=te(e,t);if(o)return o;let c=[e,t].filter(Boolean);try{let i=await this.apiService.getLatestCodeHashes(),s=ae(c,i);if(s)return s}catch(i){}return q(a)}getContractName(e){return I(e)}getContractType(e){return ee(e)}getMainBalance(e){return e.balances.find(a=>a.id===0)?.value??"0"}getAccountName(e){return S(e)||null}isAddress(e){return W(e)}isHash(e){return K(e)}async getTransactionLookupAddresses(e,t,a=[]){let o=new Set,c=[],i=l=>{let f=A(l);o.has(f)||(o.add(f),c.push(f))};i(e);for(let l of a)l&&i(l);let s=t.trim();if(!this.isAddress(s))try{i(await this.tvmClientService.getIndexerAddressByName(s))}catch(l){}return c}async getTransactionLookupAddressesForAccount(e,t){let o=[...(await e.getLinkedAccounts()).values()];try{let c=await this.tvmClientService.getPopitGameAddress(e.id);if(c){let i=A(c);o.some(l=>A(l)===i)||o.push(c)}}catch(c){}return this.getTransactionLookupAddresses(e.id,t,o)}async resolveWalletName(e){let t=e.trim().toLowerCase();if(!t||!/^[a-z0-9_-]{1,64}$/.test(t))return null;try{let a=await this.tvmClientService.getIndexerAddressByName(t);return await this.resolveMvFromIndexer(a)}catch{return null}}async resolveMvFromIndexer(e){let t=this.nameToMvCache.get(e);if(t)return t;try{let c=(await p(this.graphql.query(`
        query GetIndexerData($address: String!) {
          blockchain {
            account(address: $address) {
              info {
                data
              }
            }
          }
        }
      `,{address:e})))?.blockchain?.account?.info?.data;if(!c)return null;let i=await this.tvmClientService.getMvFromIndexerData(c);return i&&this.nameToMvCache.set(e,i),i}catch(a){return null}}async getTransactionDetails(e){return await p(this.graphql.query(`
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
    `,{hash:e},{timeout:6e4}).pipe(B(a=>a?.blockchain?.transaction??null)))}async searchByHash(e){let o=(await p(this.graphql.query(`
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
    `,{id:e},{timeout:6e4}))).blockchain,c=o?.message;return{blocks:o?.block?[o.block]:[],transactions:o?.transaction?[o.transaction]:[],messages:c?[{id:c.id,dst_transaction:c.dst_transaction??void 0,src_transaction:c.src_transaction??void 0}]:[]}}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=y({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{N as a,J as b,d as c,v as d,g as e,Fe as f};
