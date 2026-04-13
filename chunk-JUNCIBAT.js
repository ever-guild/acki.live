import{a as J,d as I}from"./chunk-RGJBCIBJ.js";import{a as F,b as k,d as $,e as q}from"./chunk-J3SLVCEX.js";import{D as L,Ja as j,d as R,h as v,j as x,r as _,s as p}from"./chunk-3AXM2HFE.js";var W=R(J());var E=new Map([["91e83e01e41226af166d535e204ab7277b920b8fc518884e1f695ba6f269d74f","AckiNackiBlockManagerNodeWallet"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Mvmultifactor"],["2a7dd92c9d5617625bf1fbba27fc56cdebe8e3dfa844ecce0cf824818ece41a4","BlockKeeperEpochContract"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoinWallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","AckiNackiBlockKeeperNodeWallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoinRoot"],["eb7a346704904a164482466f768ce32a92439cd7488495639a98023901f2800f","USDCRoot"],["d46ad99d6889112ebedd8a00eea444b928b882dab1c6388b1c006e29ebd91fc9","USDCWallet"],["66dd0af2eae28a105c1f6cc8515f7c46271d502b176c6220ae42e3140ba6c3a4","USDCWallet"],["dee014d1c9c5ec9171b261bcf1fa45228c945fbcf1659b911569e458892616cf","DappConfig"],["a713404b073f1d1e0d2daded883e7376da67c8e1daf666d2a0b17b081812d732","DappConfig"]]),N=(()=>{class r{constructor(){this.lastCode=new Map,this.codeSchemaCache=new Map}resolveNameByHash(e){for(let[t,c]of this.lastCode.entries())if(c===e)return t;for(let[t,c]of E.entries())if(t===e)return c}async fetchCodeSchemaJson(e){let t=[`${e}.json`,`${e}.abi.json`];for(let c of t){let n=new AbortController,a=setTimeout(()=>n.abort(),5e3);try{let s=await fetch(`${F.api}/abi/${c}`,{method:"GET",signal:n.signal});if(s.ok)return await s.json()}catch(s){console.debug(`getCodeSchema: Error fetching ${c}`,s)}finally{clearTimeout(a)}}}async updateLastCodeHash(){if(!(this.lastCode.size>0))try{let e=new AbortController,t=setTimeout(()=>e.abort(),5e3),c=await fetch(`${F.api}/abi/last.json`,{method:"GET",signal:e.signal}).finally(()=>clearTimeout(t));if(c.ok){let n=await c.json();for(let a of n)this.lastCode.set(a[0],a[1])}}catch(e){console.warn("Failed to fetch last code hashes:",e)}}async getAlias(e){await this.updateLastCodeHash();let t=E.get(e);if(!t)return e;let c=this.lastCode.get(t);return c||e}async getCodeSchema(e){let t=await this.getAlias(e);if(this.codeSchemaCache.has(t))return this.codeSchemaCache.get(t);try{let c=await this.fetchCodeSchemaJson(t);if(!c||typeof c!="object"){console.debug(`getCodeSchema: No ABI found for ${t}`),this.codeSchemaCache.set(t,void 0);return}let n=c,a=n.abi??n;if(!a||typeof a!="object"||!("ABI version"in a)){console.debug(`getCodeSchema: Invalid ABI response for ${t}`),this.codeSchemaCache.set(t,void 0);return}let s={name:n.name||this.resolveNameByHash(t)||t,abi:(0,W.abiContract)(a)};return this.codeSchemaCache.set(t,s),s}catch(c){console.debug(`getCodeSchema: Error fetching ${t}`,c),this.codeSchemaCache.set(t,void 0);return}}async getLatestCodeHashes(){return await this.updateLastCodeHash(),new Map(this.lastCode)}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=_({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var S=new Map([[3,{id:3,name:"USDC",decimals:6,description:"USD Coin"}]]),U=(()=>{class r{constructor(){this.collectionAddress="0:8888888888888888888888888888888888888888888888888888888888888888",this.cache=null,this.loadingPromise=null,this.graphql=p(k),this.api=p(N),this.tvmClient=p(I),this.platformId=p(L)}async getCurrencyMap(){if(this.cache)return this.cache;if(j(this.platformId))return this.loadCurrencyMap();if(this.loadingPromise)return this.loadingPromise;this.loadingPromise=this.loadCurrencyMap();try{this.cache=await this.loadingPromise}finally{this.loadingPromise=null}return this.cache}async getCurrencyName(e){return(await this.getCurrencyMap()).get(e)?.name??null}async loadCurrencyMap(){try{let c=(await v(this.graphql.query(`
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
      `,{address:this.collectionAddress})))?.blockchain?.account?.info;if(!c?.data)return new Map(S);let n=await this.resolveAbi(c.code_hash,c.init_code_hash);if(!n)return new Map(S);let i=(await this.tvmClient.decodeAccountData(c.data,n))?.data?._data,l=i?.data??i?.currencies?._data??i;if(!l||typeof l!="object")return new Map(S);let m=new Map(S);for(let[g,C]of Object.entries(l)){let A=C?.data??C,w=A!==null&&typeof A=="object"?A:void 0,h=Number(w?.key??g);if(!Number.isFinite(h))continue;let f=w?.name,b=w?.decimals,G=w?.description,P=S.get(h);m.set(h,{id:h,name:typeof f=="string"&&f.trim().length>0?f:P?.name??`Currency ${h}`,decimals:typeof b=="number"?b:P?.decimals,description:typeof G=="string"?G:P?.description})}return m}catch(e){return console.warn("Failed to load currency collection:",e),new Map(S)}}async resolveAbi(e,t){let c=[e,t].filter(Boolean);for(let n of c){let a=await this.api.getCodeSchema(n);if(a?.abi)return a.abi}return null}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=_({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function M(r){let o=r.trim(),e=o.match(/^(-?\d+):([a-fA-F0-9]+)$/);return e?`${String(Number(e[1]))}:${e[2].toLowerCase()}`:o.toLowerCase()}function ne(r){let o=M(r),e=[],t=new Set,c=a=>{let s=a.trim();!s||t.has(s)||(t.add(s),e.push(s))};c(o);let n=o.match(/^(-?\d+):([a-f0-9]+)$/i);return n?.[2]&&c(n[2]),e}function V(r){return/^(-1:|0:)[a-fA-F0-9]{64}$/i.test(r.trim())}function O(r){return/^[a-fA-F0-9]{64}$/i.test(r.trim())}var d=(function(r){return r.Indexer="Indexer",r.MvMultifactor="Mobile Verifier Multifactor",r.PopitGame="Popit Game",r})(d||{}),D=new Map([["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb",d.MvMultifactor],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126",d.PopitGame],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245",d.Indexer]]),B=new Map([["91e83e01e41226af166d535e204ab7277b920b8fc518884e1f695ba6f269d74f","Block Manager Node Wallet"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Multifactor"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoin Wallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","Block Keeper Node Wallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoin Root"],["d46ad99d6889112ebedd8a00eea444b928b882dab1c6388b1c006e29ebd91fc9","USDC Wallet"],["51ceb7acf7a74a59d121f0cdf6372eb22cc072347c09accb46ea160d03daf5cb","Mobile Verifier Root"]]),T=class{constructor(o,e,t){this.tvmClientService=e,Object.assign(this,o),this.detectedType=t??void 0}get type(){return typeof this.detectedType<"u"?this.detectedType:D.get(this.codeHash)??D.get(this.initCodeHash)??null??null}async getName(){return typeof this._nameCache<"u"?this._nameCache:this._namePromise?this._namePromise:(this._namePromise=(async()=>{try{let o=$(this.id);if(o)return this._nameCache=o,o;if(this.type===d.MvMultifactor){let e=await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getMvMultifactorAbi())});this._nameCache=e?.data?._name||null}else if(this.type===d.Indexer){let e=await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getIndexerAbi())});this._nameCache=e?.data?._name||null}else this._nameCache=null}catch(o){console.error("Failed to decode account name",o),this._nameCache=null}finally{this._namePromise=void 0}return this._nameCache})(),this._namePromise)}async getLinkedAccounts(){let o=new Map;try{if(this.type===d.MvMultifactor){let e=await this.getName();if(e){let c=await this.tvmClientService.getIndexerAddressByName(e);o.set(d.Indexer,c)}let t=await this.tvmClientService.getPopitGameAddress(this.id);return t&&o.set(d.PopitGame,t),o}else if(this.type===d.Indexer){let e=await this.tvmClientService.getMvFromIndexerData(this.data);if(e){o.set(d.MvMultifactor,e);let t=await this.tvmClientService.getPopitGameAddress(e);t&&o.set(d.PopitGame,t)}}else if(this.type===d.PopitGame){let t=(await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getPopitGameAbi())}))?.data?._owner;t&&o.set(d.MvMultifactor,t)}}catch(e){console.error("Failed to get linked accounts",e)}return o}},be=(()=>{class r{constructor(){this.graphql=p(k),this.tvmClientService=p(I),this.apiService=p(N),this.currencyService=p(U),this.nameToMvCache=new Map}async getAccountDetails(e){let t=e.trim();if(!this.isAddress(t))try{let n=await this.tvmClientService.getIndexerAddressByName(t);t=await this.resolveMvFromIndexer(n)||n}catch(n){return console.warn("Failed to resolve name to address:",n),null}try{let n=await v(this.graphql.getAccountBoc(t));if(n)try{let{parsed:a}=await this.tvmClientService.parseAccount(n);if(a){let s=Number(a.last_paid),u=await this.currencyService.getCurrencyMap(),i=a.balance_other?.map(h=>{let f=u.get(h.currency),b=f?.name||`Currency ${h.currency}`;return{id:h.currency,name:b,value:parseInt(h.value,16),decimals:f?.decimals}})||[],l=a.code_hash||"",m=a.init_code_hash||"",g=B.get(l),C,y=await this.resolveAccountType(l,m,g),A=[l,m].filter(Boolean);for(let h of A){let f=await this.apiService.getCodeSchema(h);if(f){if(g=f.name,f.abi&&a.data)try{let b=await this.tvmClientService.decodeAccountData(a.data,f.abi);b?.data&&(C=b.data)}catch(b){console.debug("Failed to decode account data:",b)}break}}let w={id:a.id||t,accType:a.acc_type,accTypeName:a.acc_type_name,balances:i.concat([{id:0,name:"SHELL",value:parseInt(a.balance,16),decimals:9}]),bits:parseInt(a.bits,16),boc:n,cells:parseInt(a.cells,16),code:a.code||"",codeHash:l,data:a.data||"",dataHash:a.data_hash||"",initCodeHash:m,jsonVersion:a.json_version,lastPaid:Number.isFinite(s)&&s>0?new Date(s*1e3):null,lastTransLt:parseInt(a.last_trans_lt,16),publicCells:parseInt(a.public_cells,16),workchainId:a.workchain_id,isUpdatable:q(t),contractName:g,dataParsed:C};return new T(w,this.tvmClientService,y)}}catch(a){console.warn("TVM SDK parsing failed, falling back to GraphQL:",a)}return await this.getAccountDetailsFallback(t)}catch(n){return console.error("Failed to get account details:",n),null}}async getAccountDetailsFallback(e){try{let c=await v(this.graphql.query(`
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
                last_trans_lt
                code
                data
                boc
              }
            }
          }
        }
      `,{address:e}).pipe(x(y=>y?.blockchain?.account?.info||null)));if(!c)return null;let n=Number(c.last_paid),s=(await this.currencyService.getCurrencyMap()).get(1)?.name||"SHELL",u=c.balance?parseInt(c.balance,10):0,i=c.code_hash||"",l=B.get(i),m=0;if(c.last_trans_lt){let y=c.last_trans_lt.toString();y.startsWith("0x")?m=parseInt(y,16):m=parseInt(y,10)}let g=await this.resolveAccountType(i,c.init_code_hash||"",l),C={id:e,accType:c.acc_type||0,accTypeName:c.acc_type_name||"Unknown",balances:[{id:0,name:s,value:u}],bits:0,cells:0,publicCells:0,boc:c.boc||"",code:c.code||"",codeHash:i,data:c.data||"",dataHash:c.data_hash||"",initCodeHash:c.init_code_hash||"",jsonVersion:0,lastPaid:Number.isFinite(n)&&n>0?new Date(n*1e3):null,lastTransLt:m,workchainId:0,isUpdatable:q(e),contractName:l};return new T(C,this.tvmClientService,g)}catch(t){return console.error("Fallback account details failed:",t),null}}contractNameToType(e){if(!e)return null;let t=e.toLowerCase();return t.includes("indexer")?d.Indexer:t.includes("multifactor")?d.MvMultifactor:t.includes("popit")?d.PopitGame:null}async resolveAccountType(e,t,c){let n=[e,t].filter(Boolean);for(let a of n){let s=D.get(a);if(s)return s}try{let a=await this.apiService.getLatestCodeHashes();for(let[s,u]of a.entries())if(n.includes(u)){let i=this.contractNameToType(s);if(i)return i}}catch(a){console.debug("resolveAccountType: failed to fetch latest code hashes",a)}return this.contractNameToType(c)}getContractName(e){return B.get(e)}getContractType(e){return D.get(e)}getMainBalance(e){return e.balances.find(c=>c.id===0)?.value??0}getAccountName(e){return $(e)||null}isAddress(e){return V(e)}isHash(e){return O(e)}async getTransactionLookupAddresses(e,t,c=[]){let n=new Set,a=[],s=i=>{let l=M(i);n.has(l)||(n.add(l),a.push(l))};s(e);for(let i of c)i&&s(i);let u=t.trim();if(!this.isAddress(u))try{s(await this.tvmClientService.getIndexerAddressByName(u))}catch{}return a}async getTransactionLookupAddressesForAccount(e,t){let n=[...(await e.getLinkedAccounts()).values()];try{let a=await this.tvmClientService.getPopitGameAddress(e.id);if(a){let s=M(a);n.some(i=>M(i)===s)||n.push(a)}}catch{}return this.getTransactionLookupAddresses(e.id,t,n)}async resolveMvFromIndexer(e){let t=this.nameToMvCache.get(e);if(t)return t;try{let a=(await v(this.graphql.query(`
        query GetIndexerData($address: String!) {
          blockchain {
            account(address: $address) {
              info {
                data
              }
            }
          }
        }
      `,{address:e})))?.blockchain?.account?.info?.data;if(!a)return null;let s=await this.tvmClientService.getMvFromIndexerData(a);return s&&this.nameToMvCache.set(e,s),s}catch(c){return console.debug("Failed to resolve MvMultifactor from Indexer:",c),null}}async getTransactionDetails(e){return await v(this.graphql.query(`
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
    `,{hash:e},{timeout:6e4}).pipe(x(c=>c?.blockchain?.transaction??null)))}async searchByHash(e){let n=(await v(this.graphql.query(`
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
    `,{id:e},{timeout:6e4}))).blockchain,a=n?.message;return{blocks:n?.block?[n.block]:[],transactions:n?.transaction?[n.transaction]:[],messages:a?[{id:a.id,dst_transaction:a.dst_transaction??void 0,src_transaction:a.src_transaction??void 0}]:[]}}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=_({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{N as a,U as b,ne as c,V as d,O as e,d as f,be as g};
