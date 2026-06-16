import{a as ne,c as I}from"./chunk-F5RX2E5J.js";import{a as B,b as S,d as W,e as $,f as M,l as R,q as N,s as E}from"./chunk-R33FNBXU.js";import{L as v,P as f,l as p,n as x,na as H,nc as q}from"./chunk-RLXXVR6I.js";import{e as ae}from"./chunk-C6Q5SG76.js";var z=ae(ne());var K=new Map([["91e83e01e41226af166d535e204ab7277b920b8fc518884e1f695ba6f269d74f","AckiNackiBlockManagerNodeWallet"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Mvmultifactor"],["2a7dd92c9d5617625bf1fbba27fc56cdebe8e3dfa844ecce0cf824818ece41a4","BlockKeeperEpochContract"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoinWallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","AckiNackiBlockKeeperNodeWallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoinRoot"],["eb7a346704904a164482466f768ce32a92439cd7488495639a98023901f2800f","USDCRoot"],["d46ad99d6889112ebedd8a00eea444b928b882dab1c6388b1c006e29ebd91fc9","USDCWallet"],["66dd0af2eae28a105c1f6cc8515f7c46271d502b176c6220ae42e3140ba6c3a4","USDCWallet"],["dee014d1c9c5ec9171b261bcf1fa45228c945fbcf1659b911569e458892616cf","DappConfig"],["a713404b073f1d1e0d2daded883e7376da67c8e1daf666d2a0b17b081812d732","DappConfig"]]),U=new Map([["AckiNackiBlockManagerNodeWallet","Block Manager Node Wallet"],["Indexer","Indexer"],["Mvmultifactor","Multifactor"],["BlockKeeperEpochContract","Block Keeper Epoch Contract"],["PopitGame","PopitGame"],["PopCoinWallet","PopCoin Wallet"],["AckiNackiBlockKeeperNodeWallet","Block Keeper Node Wallet"],["Boost","Boost"],["PopCoinRoot","PopCoin Root"],["USDCRoot","USDC Root"],["USDCWallet","USDC Wallet"],["DappConfig","DappConfig"]]),ce=new Map([["51ceb7acf7a74a59d121f0cdf6372eb22cc072347c09accb46ea160d03daf5cb","Mobile Verifier Root"]]),D=(()=>{class c{constructor(){this.lastCode=new Map,this.codeSchemaCache=new Map}resolveNameByHash(e){let t=ce.get(e);if(t)return t;for(let[o,n]of this.lastCode.entries())if(n===e)return U.get(o)||o;let a=K.get(e);if(a)return U.get(a)||a}async fetchCodeSchemaJson(e){let t=[`${e}.json`,`${e}.abi.json`],a=!1;for(let o of t){let n=new AbortController,s=setTimeout(()=>n.abort(),5e3);try{let i=await fetch(`${B.api}/abi/${o}`,{method:"GET",signal:n.signal});if(i.ok)return{result:await i.json(),hadTransientError:a};i.status>=500&&(a=!0)}catch(i){a=!0}finally{clearTimeout(s)}}return{result:void 0,hadTransientError:a}}async updateLastCodeHash(){if(!(this.lastCode.size>0))try{let e=new AbortController,t=setTimeout(()=>e.abort(),5e3),a=await fetch(`${B.api}/abi/last.json`,{method:"GET",signal:e.signal}).finally(()=>clearTimeout(t));if(a.ok){let o=await a.json();for(let n of o)this.lastCode.set(n[0],n[1])}}catch(e){}}async getAlias(e){await this.updateLastCodeHash();let t=K.get(e);if(!t)return e;let a=this.lastCode.get(t);return a||e}async getCodeSchema(e){let t=await this.getAlias(e);if(this.codeSchemaCache.has(t))return this.codeSchemaCache.get(t);try{let{result:a,hadTransientError:o}=await this.fetchCodeSchemaJson(t);if(!a||typeof a!="object"){o||this.codeSchemaCache.set(t,void 0);return}let n=a,s=n.abi??n;if(!s||typeof s!="object"||!("ABI version"in s)){o||this.codeSchemaCache.set(t,void 0);return}let i={name:n.name||this.resolveNameByHash(t)||t,abi:(0,z.abiContract)(s)};return this.codeSchemaCache.set(t,i),i}catch(a){return}}async getLatestCodeHashes(){return await this.updateLastCodeHash(),new Map(this.lastCode)}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=v({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();var g=new Map([[3,{id:3,name:"USDC",decimals:6,description:"USD Coin"}]]),V=(()=>{class c{constructor(){this.collectionAddress=R,this.cache=null,this.loadingPromise=null,this.graphql=f(M),this.api=f(D),this.tvmClient=f(I),this.platformId=f(H)}async getCurrencyMap(){if(this.cache)return this.cache;if(q(this.platformId))return this.loadCurrencyMap();if(this.loadingPromise)return this.loadingPromise;this.loadingPromise=this.loadCurrencyMap();try{this.cache=await this.loadingPromise}finally{this.loadingPromise=null}return this.cache}async getCurrencyName(e){return(await this.getCurrencyMap()).get(e)?.name??null}async loadCurrencyMap(){try{let t=(await p(this.graphql.queryAccount(h=>`
            query GetCurrencyCollection(${h.varDecls}) {
              blockchain {
                account(${h.argClause}) {
                  info {
                    data
                    code_hash
                    init_code_hash
                  }
                }
              }
            }
          `,this.collectionAddress)))?.blockchain?.account?.info;if(!t?.data)return new Map(g);let a=await this.resolveAbi(t.code_hash,t.init_code_hash);if(!a)return new Map(g);let i=(await this.tvmClient.decodeAccountData(t.data,a))?.data?._data,l=i?.data??i?.currencies?._data??i;if(!l||typeof l!="object")return new Map(g);let u=new Map(g);for(let[h,k]of Object.entries(l)){let A=k?.data??k,C=A!==null&&typeof A=="object"?A:void 0,b=Number(C?.key??h);if(!Number.isFinite(b))continue;let m=C?.name,y=C?.decimals,j=C?.description,T=g.get(b);u.set(b,{id:b,name:typeof m=="string"&&m.trim().length>0?m:T?.name??`Currency ${b}`,decimals:typeof y=="number"?y:T?.decimals,description:typeof j=="string"?j:T?.description})}return u}catch(e){return new Map(g)}}async resolveAbi(e,t){let a=[e,t].filter(Boolean);for(let o of a){let n=await this.api.getCodeSchema(o);if(n?.abi)return n.abi}return null}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=v({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();function L(c){if(!c)return null;let r=c.trim().replace(/^0x/i,"");if(!r)return null;try{return BigInt(`0x${r}`).toString()}catch{return null}}function J(c){if(c==null||c==="")return null;let r=String(c).trim();if(!r)return null;try{return BigInt(r).toString()}catch{return null}}function Q(c){let r=Number(c);return Number.isFinite(r)&&r>0?new Date(r*1e3):null}function re(c,r){return c?.map(e=>{let t=r.get(e.currency);return{id:e.currency,name:t?.name||`Currency ${e.currency}`,value:L(e.value)??"0",decimals:t?.decimals}})??[]}function Y({address:c,accountBoc:r,accountData:e,currencyMap:t,contractName:a,dataParsed:o,dappId:n}){return{id:e.id||c,accType:e.acc_type,accTypeName:e.acc_type_name,balances:re(e.balance_other,t).concat([{id:0,name:"SHELL",value:L(e.balance)??"0",decimals:9}]),bits:parseInt(e.bits,16),boc:r,cells:parseInt(e.cells,16),code:e.code||"",codeHash:e.code_hash||"",data:e.data||"",dataHash:e.data_hash||"",initCodeHash:e.init_code_hash||"",jsonVersion:e.json_version,lastPaid:Q(e.last_paid),lastTransLt:L(e.last_trans_lt),publicCells:parseInt(e.public_cells,16),workchainId:e.workchain_id,isUpdatable:E(c),contractName:a,dataParsed:o,dappId:n,snapshotCompleteness:"full",degradedReasons:[]}}function X({address:c,info:r,mainCurrencyName:e,contractName:t}){return{id:c,accType:r.acc_type||0,accTypeName:r.acc_type_name||"Unknown",balances:[{id:0,name:e,value:J(r.balance)??"0"}],bits:0,cells:0,publicCells:0,boc:r.boc||"",code:r.code||"",codeHash:r.code_hash||"",data:r.data||"",dataHash:r.data_hash||"",initCodeHash:r.init_code_hash||"",jsonVersion:0,lastPaid:Q(r.last_paid),lastTransLt:J(r.last_trans_lt),workchainId:0,isUpdatable:E(c),contractName:t,dappId:r.dapp_id||void 0,snapshotCompleteness:"partial",degradedReasons:["tvm-sdk-fallback"]}}var d=(function(c){return c.Indexer="Indexer",c.MvMultifactor="Mobile Verifier Multifactor",c.PopitGame="Popit Game",c})(d||{}),w=new Map([["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb",d.MvMultifactor],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126",d.PopitGame],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245",d.Indexer]]),_=class{constructor(r,e,t){this.tvmClientService=e,Object.assign(this,r),this.detectedType=t??void 0}get type(){return typeof this.detectedType<"u"?this.detectedType:w.get(this.codeHash)??w.get(this.initCodeHash)??null??null}async getName(){return typeof this.nameCache<"u"?this.nameCache:this.namePromise?this.namePromise:(this.namePromise=(async()=>{try{let r=N(this.id);if(r)return this.nameCache=r,r;if(this.type===d.MvMultifactor){let e=await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getMvMultifactorAbi())});this.nameCache=e?.data?._name||null}else if(this.type===d.Indexer){let e=await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getIndexerAbi())});this.nameCache=e?.data?._name||null}else this.nameCache=null}catch(r){return null}finally{this.namePromise=void 0}return this.nameCache})(),this.namePromise)}async getLinkedAccounts(){let r=new Map;try{if(this.type===d.MvMultifactor){let e=await this.getName();if(e){let a=await this.tvmClientService.getIndexerAddressByName(e);r.set(d.Indexer,a)}let t=await this.tvmClientService.getPopitGameAddress(this.id);return t&&r.set(d.PopitGame,t),r}if(this.type===d.Indexer){let e=await this.tvmClientService.getMvFromIndexerData(this.data);if(e){r.set(d.MvMultifactor,e);let t=await this.tvmClientService.getPopitGameAddress(e);t&&r.set(d.PopitGame,t)}}else if(this.type===d.PopitGame){let t=(await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getPopitGameAbi())}))?.data?._owner;t&&r.set(d.MvMultifactor,t)}}catch(e){}return r}};var oe=new Map([["91e83e01e41226af166d535e204ab7277b920b8fc518884e1f695ba6f269d74f","Block Manager Node Wallet"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Multifactor"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoin Wallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","Block Keeper Node Wallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoin Root"],["d46ad99d6889112ebedd8a00eea444b928b882dab1c6388b1c006e29ebd91fc9","USDC Wallet"],["51ceb7acf7a74a59d121f0cdf6372eb22cc072347c09accb46ea160d03daf5cb","Mobile Verifier Root"]]);function P(c){return oe.get(c)}function Z(c){return w.get(c)}function G(c){if(!c)return null;let r=c.toLowerCase();return r.includes("indexer")?d.Indexer:r.includes("multifactor")?d.MvMultifactor:r.includes("popit")?d.PopitGame:null}function ee(c,r){let e=[c,r].filter(Boolean);for(let t of e){let a=w.get(t);if(a)return a}return null}function te(c,r){for(let[e,t]of r.entries())if(c.includes(t)){let a=G(e);if(a)return a}return null}var Fe=(()=>{class c{constructor(){this.graphql=f(M),this.tvmClientService=f(I),this.apiService=f(D),this.currencyService=f(V),this.nameToMvCache=new Map}async getAccountDetails(e,t={}){let a=e.trim();if(!this.isAddress(a))try{let n=await this.tvmClientService.getIndexerAddressByName(a);a=await this.resolveMvFromIndexer(n)||n}catch(n){throw n instanceof Error?n:new Error("Failed to resolve account name.")}try{let{boc:n,dappId:s}=await p(this.graphql.getAccountBocWithDappId(a,{noCache:t.noCache}));if(n)try{let{parsed:i}=await this.tvmClientService.parseAccount(n);if(i){let l=i.code_hash||"",u=i.init_code_hash||"",h=P(l),k;for(let b of[l,u].filter(Boolean)){let m=await this.apiService.getCodeSchema(b);if(m){if(h=m.name,m.abi&&i.data)try{let y=await this.tvmClientService.decodeAccountData(i.data,m.abi);y?.data&&(k=y.data)}catch(y){}break}}let F=await this.currencyService.getCurrencyMap(),A=await this.resolveAccountType(l,u,h),C=Y({address:a,accountBoc:n,accountData:i,currencyMap:F,contractName:h,dataParsed:k,dappId:s??void 0});return new _(C,this.tvmClientService,A)}}catch(i){}return await this.getAccountDetailsFallback(a,t.noCache)}catch(n){throw n instanceof Error?n:new Error("Failed to load account details.")}}async getAccountDetailsFallback(e,t=!1){try{let a=await p(this.graphql.queryAccount(u=>`
              query GetAccountInfo(${u.varDecls}) {
                blockchain {
                  account(${u.argClause}) {
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
            `,e,{noCache:t}).pipe(x(u=>u?.blockchain?.account?.info||null)));if(!a)return null;let o=a.code_hash||"",n=P(o),s=await this.resolveAccountType(o,a.init_code_hash||"",n),i=await this.currencyService.getCurrencyMap(),l=X({address:e,info:a,mainCurrencyName:i.get(1)?.name||"SHELL",contractName:n});return new _(l,this.tvmClientService,s)}catch(a){throw a instanceof Error?a:new Error("Failed to load fallback account details.")}}async resolveAccountType(e,t,a){let o=ee(e,t);if(o)return o;let n=[e,t].filter(Boolean);try{let s=await this.apiService.getLatestCodeHashes(),i=te(n,s);if(i)return i}catch(s){}return G(a)}getContractName(e){return P(e)}getContractType(e){return Z(e)}getMainBalance(e){return e.balances.find(a=>a.id===0)?.value??"0"}getAccountName(e){return N(e)||null}isAddress(e){return W(e)}isHash(e){return $(e)}async getTransactionLookupAddresses(e,t,a=[]){let o=new Set,n=[],s=l=>{let u=S(l);o.has(u)||(o.add(u),n.push(u))};s(e);for(let l of a)l&&s(l);let i=t.trim();if(!this.isAddress(i))try{s(await this.tvmClientService.getIndexerAddressByName(i))}catch(l){}return n}async getTransactionLookupAddressesForAccount(e,t){let o=[...(await e.getLinkedAccounts()).values()];try{let n=await this.tvmClientService.getPopitGameAddress(e.id);if(n){let s=S(n);o.some(l=>S(l)===s)||o.push(n)}}catch(n){}return this.getTransactionLookupAddresses(e.id,t,o)}async resolveWalletName(e){let t=e.trim().toLowerCase();if(!t||!/^[a-z0-9_-]{1,64}$/.test(t))return null;try{let a=await this.tvmClientService.getIndexerAddressByName(t);return await this.resolveMvFromIndexer(a)}catch{return null}}async resolveMvFromIndexer(e){let t=this.nameToMvCache.get(e);if(t)return t;try{let o=(await p(this.graphql.queryAccount(s=>`
            query GetIndexerData(${s.varDecls}) {
              blockchain {
                account(${s.argClause}) {
                  info {
                    data
                  }
                }
              }
            }
          `,e)))?.blockchain?.account?.info?.data;if(!o)return null;let n=await this.tvmClientService.getMvFromIndexerData(o);return n&&this.nameToMvCache.set(e,n),n}catch(a){return null}}async getTransactionDetails(e){return await p(this.graphql.query(`
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
    `,{hash:e},{timeout:6e4}).pipe(x(a=>a?.blockchain?.transaction??null)))}async searchByHash(e){let o=(await p(this.graphql.query(`
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
    `,{id:e},{timeout:6e4}))).blockchain,n=o?.message;return{blocks:o?.block?[o.block]:[],transactions:o?.transaction?[o.transaction]:[],messages:n?[{id:n.id,dst_transaction:n.dst_transaction??void 0,src_transaction:n.src_transaction??void 0}]:[]}}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=v({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();export{D as a,V as b,d as c,w as d,_ as e,Fe as f};
