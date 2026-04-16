import{a as J,d as N}from"./chunk-TVEMJ7XM.js";import{a as $,b as I,d as q,e as B}from"./chunk-G67CSQXA.js";import{J as L,Ra as j,e as R,i as C,k as F,w as S,x as b}from"./chunk-4HRPKSGR.js";var W=R(J());var E=new Map([["91e83e01e41226af166d535e204ab7277b920b8fc518884e1f695ba6f269d74f","AckiNackiBlockManagerNodeWallet"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Mvmultifactor"],["2a7dd92c9d5617625bf1fbba27fc56cdebe8e3dfa844ecce0cf824818ece41a4","BlockKeeperEpochContract"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoinWallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","AckiNackiBlockKeeperNodeWallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoinRoot"],["eb7a346704904a164482466f768ce32a92439cd7488495639a98023901f2800f","USDCRoot"],["d46ad99d6889112ebedd8a00eea444b928b882dab1c6388b1c006e29ebd91fc9","USDCWallet"],["66dd0af2eae28a105c1f6cc8515f7c46271d502b176c6220ae42e3140ba6c3a4","USDCWallet"],["dee014d1c9c5ec9171b261bcf1fa45228c945fbcf1659b911569e458892616cf","DappConfig"],["a713404b073f1d1e0d2daded883e7376da67c8e1daf666d2a0b17b081812d732","DappConfig"]]),D=(()=>{class r{constructor(){this.lastCode=new Map,this.codeSchemaCache=new Map}resolveNameByHash(e){for(let[t,a]of this.lastCode.entries())if(a===e)return t;for(let[t,a]of E.entries())if(t===e)return a}async fetchCodeSchemaJson(e){let t=[`${e}.json`,`${e}.abi.json`];for(let a of t){let s=new AbortController,n=setTimeout(()=>s.abort(),5e3);try{let c=await fetch(`${$.api}/abi/${a}`,{method:"GET",signal:s.signal});if(c.ok)return await c.json()}catch(c){console.debug(`getCodeSchema: Error fetching ${a}`,c)}finally{clearTimeout(n)}}}async updateLastCodeHash(){if(!(this.lastCode.size>0))try{let e=new AbortController,t=setTimeout(()=>e.abort(),5e3),a=await fetch(`${$.api}/abi/last.json`,{method:"GET",signal:e.signal}).finally(()=>clearTimeout(t));if(a.ok){let s=await a.json();for(let n of s)this.lastCode.set(n[0],n[1])}}catch(e){console.warn("Failed to fetch last code hashes:",e)}}async getAlias(e){await this.updateLastCodeHash();let t=E.get(e);if(!t)return e;let a=this.lastCode.get(t);return a||e}async getCodeSchema(e){let t=await this.getAlias(e);if(this.codeSchemaCache.has(t))return this.codeSchemaCache.get(t);try{let a=await this.fetchCodeSchemaJson(t);if(!a||typeof a!="object"){console.debug(`getCodeSchema: No ABI found for ${t}`),this.codeSchemaCache.set(t,void 0);return}let s=a,n=s.abi??s;if(!n||typeof n!="object"||!("ABI version"in n)){console.debug(`getCodeSchema: Invalid ABI response for ${t}`),this.codeSchemaCache.set(t,void 0);return}let c={name:s.name||this.resolveNameByHash(t)||t,abi:(0,W.abiContract)(n)};return this.codeSchemaCache.set(t,c),c}catch(a){console.debug(`getCodeSchema: Error fetching ${t}`,a),this.codeSchemaCache.set(t,void 0);return}}async getLatestCodeHashes(){return await this.updateLastCodeHash(),new Map(this.lastCode)}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=S({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var A=new Map([[3,{id:3,name:"USDC",decimals:6,description:"USD Coin"}]]),U=(()=>{class r{constructor(){this.collectionAddress="0:8888888888888888888888888888888888888888888888888888888888888888",this.cache=null,this.loadingPromise=null,this.graphql=b(I),this.api=b(D),this.tvmClient=b(N),this.platformId=b(L)}async getCurrencyMap(){if(this.cache)return this.cache;if(j(this.platformId))return this.loadCurrencyMap();if(this.loadingPromise)return this.loadingPromise;this.loadingPromise=this.loadCurrencyMap();try{this.cache=await this.loadingPromise}finally{this.loadingPromise=null}return this.cache}async getCurrencyName(e){return(await this.getCurrencyMap()).get(e)?.name??null}async loadCurrencyMap(){try{let a=(await C(this.graphql.query(`
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
      `,{address:this.collectionAddress})))?.blockchain?.account?.info;if(!a?.data)return new Map(A);let s=await this.resolveAbi(a.code_hash,a.init_code_hash);if(!s)return new Map(A);let i=(await this.tvmClient.decodeAccountData(a.data,s))?.data?._data,l=i?.data??i?.currencies?._data??i;if(!l||typeof l!="object")return new Map(A);let u=new Map(A);for(let[y,g]of Object.entries(l)){let f=g?.data??g,_=f!==null&&typeof f=="object"?f:void 0,w=Number(_?.key??y);if(!Number.isFinite(w))continue;let m=_?.name,p=_?.decimals,v=_?.description,x=A.get(w);u.set(w,{id:w,name:typeof m=="string"&&m.trim().length>0?m:x?.name??`Currency ${w}`,decimals:typeof p=="number"?p:x?.decimals,description:typeof v=="string"?v:x?.description})}return u}catch(e){return console.warn("Failed to load currency collection:",e),new Map(A)}}async resolveAbi(e,t){let a=[e,t].filter(Boolean);for(let s of a){let n=await this.api.getCodeSchema(s);if(n?.abi)return n.abi}return null}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=S({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function k(r){let o=r.trim(),e=o.match(/^(-?\d+):([a-fA-F0-9]+)$/);return e?`${String(Number(e[1]))}:${e[2].toLowerCase()}`:o.toLowerCase()}function ne(r){let o=k(r),e=[],t=new Set,a=n=>{let c=n.trim();!c||t.has(c)||(t.add(c),e.push(c))};a(o);let s=o.match(/^(-?\d+):([a-f0-9]+)$/i);return s?.[2]&&a(s[2]),e}function V(r){return/^(-1:|0:)[a-fA-F0-9]{64}$/i.test(r.trim())}function O(r){return/^[a-fA-F0-9]{64}$/i.test(r.trim())}var d=(function(r){return r.Indexer="Indexer",r.MvMultifactor="Mobile Verifier Multifactor",r.PopitGame="Popit Game",r})(d||{}),T=new Map([["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb",d.MvMultifactor],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126",d.PopitGame],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245",d.Indexer]]),G=new Map([["91e83e01e41226af166d535e204ab7277b920b8fc518884e1f695ba6f269d74f","Block Manager Node Wallet"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Multifactor"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoin Wallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","Block Keeper Node Wallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoin Root"],["d46ad99d6889112ebedd8a00eea444b928b882dab1c6388b1c006e29ebd91fc9","USDC Wallet"],["51ceb7acf7a74a59d121f0cdf6372eb22cc072347c09accb46ea160d03daf5cb","Mobile Verifier Root"]]),P=class{constructor(o,e,t){this.tvmClientService=e,Object.assign(this,o),this.detectedType=t??void 0}get type(){return typeof this.detectedType<"u"?this.detectedType:T.get(this.codeHash)??T.get(this.initCodeHash)??null??null}async getName(){return typeof this._nameCache<"u"?this._nameCache:this._namePromise?this._namePromise:(this._namePromise=(async()=>{try{let o=q(this.id);if(o)return this._nameCache=o,o;if(this.type===d.MvMultifactor){let e=await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getMvMultifactorAbi())});this._nameCache=e?.data?._name||null}else if(this.type===d.Indexer){let e=await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getIndexerAbi())});this._nameCache=e?.data?._name||null}else this._nameCache=null}catch(o){console.error("Failed to decode account name",o),this._nameCache=null}finally{this._namePromise=void 0}return this._nameCache})(),this._namePromise)}async getLinkedAccounts(){let o=new Map;try{if(this.type===d.MvMultifactor){let e=await this.getName();if(e){let a=await this.tvmClientService.getIndexerAddressByName(e);o.set(d.Indexer,a)}let t=await this.tvmClientService.getPopitGameAddress(this.id);return t&&o.set(d.PopitGame,t),o}else if(this.type===d.Indexer){let e=await this.tvmClientService.getMvFromIndexerData(this.data);if(e){o.set(d.MvMultifactor,e);let t=await this.tvmClientService.getPopitGameAddress(e);t&&o.set(d.PopitGame,t)}}else if(this.type===d.PopitGame){let t=(await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getPopitGameAbi())}))?.data?._owner;t&&o.set(d.MvMultifactor,t)}}catch(e){console.error("Failed to get linked accounts",e)}return o}},be=(()=>{class r{constructor(){this.graphql=b(I),this.tvmClientService=b(N),this.apiService=b(D),this.currencyService=b(U),this.nameToMvCache=new Map}async getAccountDetails(e,t={}){let a=e.trim();if(!this.isAddress(a))try{let n=await this.tvmClientService.getIndexerAddressByName(a);a=await this.resolveMvFromIndexer(n)||n}catch(n){return console.warn("Failed to resolve name to address:",n),null}try{let n=await C(this.graphql.getAccountBoc(a,{noCache:t.noCache}));if(n)try{let{parsed:c}=await this.tvmClientService.parseAccount(n);if(c){let h=Number(c.last_paid),i=await this.currencyService.getCurrencyMap(),l=c.balance_other?.map(m=>{let p=i.get(m.currency),v=p?.name||`Currency ${m.currency}`;return{id:m.currency,name:v,value:parseInt(m.value,16),decimals:p?.decimals}})||[],u=c.code_hash||"",y=c.init_code_hash||"",g=G.get(u),M,f=await this.resolveAccountType(u,y,g),_=[u,y].filter(Boolean);for(let m of _){let p=await this.apiService.getCodeSchema(m);if(p){if(g=p.name,p.abi&&c.data)try{let v=await this.tvmClientService.decodeAccountData(c.data,p.abi);v?.data&&(M=v.data)}catch(v){console.debug("Failed to decode account data:",v)}break}}let w={id:c.id||a,accType:c.acc_type,accTypeName:c.acc_type_name,balances:l.concat([{id:0,name:"SHELL",value:parseInt(c.balance,16),decimals:9}]),bits:parseInt(c.bits,16),boc:n,cells:parseInt(c.cells,16),code:c.code||"",codeHash:u,data:c.data||"",dataHash:c.data_hash||"",initCodeHash:y,jsonVersion:c.json_version,lastPaid:Number.isFinite(h)&&h>0?new Date(h*1e3):null,lastTransLt:parseInt(c.last_trans_lt,16),publicCells:parseInt(c.public_cells,16),workchainId:c.workchain_id,isUpdatable:B(a),contractName:g,dataParsed:M};return new P(w,this.tvmClientService,f)}}catch(c){console.warn("TVM SDK parsing failed, falling back to GraphQL:",c)}return await this.getAccountDetailsFallback(a,t.noCache)}catch(n){return console.error("Failed to get account details:",n),null}}async getAccountDetailsFallback(e,t=!1){try{let s=await C(this.graphql.query(`
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
      `,{address:e},{noCache:t}).pipe(F(f=>f?.blockchain?.account?.info||null)));if(!s)return null;let n=Number(s.last_paid),h=(await this.currencyService.getCurrencyMap()).get(1)?.name||"SHELL",i=s.balance?parseInt(s.balance,10):0,l=s.code_hash||"",u=G.get(l),y=0;if(s.last_trans_lt){let f=s.last_trans_lt.toString();f.startsWith("0x")?y=parseInt(f,16):y=parseInt(f,10)}let g=await this.resolveAccountType(l,s.init_code_hash||"",u),M={id:e,accType:s.acc_type||0,accTypeName:s.acc_type_name||"Unknown",balances:[{id:0,name:h,value:i}],bits:0,cells:0,publicCells:0,boc:s.boc||"",code:s.code||"",codeHash:l,data:s.data||"",dataHash:s.data_hash||"",initCodeHash:s.init_code_hash||"",jsonVersion:0,lastPaid:Number.isFinite(n)&&n>0?new Date(n*1e3):null,lastTransLt:y,workchainId:0,isUpdatable:B(e),contractName:u};return new P(M,this.tvmClientService,g)}catch(a){return console.error("Fallback account details failed:",a),null}}contractNameToType(e){if(!e)return null;let t=e.toLowerCase();return t.includes("indexer")?d.Indexer:t.includes("multifactor")?d.MvMultifactor:t.includes("popit")?d.PopitGame:null}async resolveAccountType(e,t,a){let s=[e,t].filter(Boolean);for(let n of s){let c=T.get(n);if(c)return c}try{let n=await this.apiService.getLatestCodeHashes();for(let[c,h]of n.entries())if(s.includes(h)){let i=this.contractNameToType(c);if(i)return i}}catch(n){console.debug("resolveAccountType: failed to fetch latest code hashes",n)}return this.contractNameToType(a)}getContractName(e){return G.get(e)}getContractType(e){return T.get(e)}getMainBalance(e){return e.balances.find(a=>a.id===0)?.value??0}getAccountName(e){return q(e)||null}isAddress(e){return V(e)}isHash(e){return O(e)}async getTransactionLookupAddresses(e,t,a=[]){let s=new Set,n=[],c=i=>{let l=k(i);s.has(l)||(s.add(l),n.push(l))};c(e);for(let i of a)i&&c(i);let h=t.trim();if(!this.isAddress(h))try{c(await this.tvmClientService.getIndexerAddressByName(h))}catch{}return n}async getTransactionLookupAddressesForAccount(e,t){let s=[...(await e.getLinkedAccounts()).values()];try{let n=await this.tvmClientService.getPopitGameAddress(e.id);if(n){let c=k(n);s.some(i=>k(i)===c)||s.push(n)}}catch{}return this.getTransactionLookupAddresses(e.id,t,s)}async resolveMvFromIndexer(e){let t=this.nameToMvCache.get(e);if(t)return t;try{let n=(await C(this.graphql.query(`
        query GetIndexerData($address: String!) {
          blockchain {
            account(address: $address) {
              info {
                data
              }
            }
          }
        }
      `,{address:e})))?.blockchain?.account?.info?.data;if(!n)return null;let c=await this.tvmClientService.getMvFromIndexerData(n);return c&&this.nameToMvCache.set(e,c),c}catch(a){return console.debug("Failed to resolve MvMultifactor from Indexer:",a),null}}async getTransactionDetails(e){return await C(this.graphql.query(`
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
    `,{hash:e},{timeout:6e4}).pipe(F(a=>a?.blockchain?.transaction??null)))}async searchByHash(e){let s=(await C(this.graphql.query(`
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
    `,{id:e},{timeout:6e4}))).blockchain,n=s?.message;return{blocks:s?.block?[s.block]:[],transactions:s?.transaction?[s.transaction]:[],messages:n?[{id:n.id,dst_transaction:n.dst_transaction??void 0,src_transaction:n.src_transaction??void 0}]:[]}}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=S({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{D as a,U as b,ne as c,V as d,O as e,d as f,be as g};
