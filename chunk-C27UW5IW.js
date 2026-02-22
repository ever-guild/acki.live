import{a as W,d as I}from"./chunk-MTR2ODT5.js";import{a as P,c as A,d as q,e as x}from"./chunk-OVFL653R.js";import{d as V,g as b,i as T,p as v,q as C,r as w,ya as j,z as G}from"./chunk-UVXZESVE.js";var $=V(W());var U=new Map([["91e83e01e41226af166d535e204ab7277b920b8fc518884e1f695ba6f269d74f","AckiNackiBlockManagerNodeWallet"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Mvmultifactor"],["2a7dd92c9d5617625bf1fbba27fc56cdebe8e3dfa844ecce0cf824818ece41a4","BlockKeeperEpochContract"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoinWallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","AckiNackiBlockKeeperNodeWallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoinRoot"],["eb7a346704904a164482466f768ce32a92439cd7488495639a98023901f2800f","USDCRoot"],["d46ad99d6889112ebedd8a00eea444b928b882dab1c6388b1c006e29ebd91fc9","USDCWallet"],["66dd0af2eae28a105c1f6cc8515f7c46271d502b176c6220ae42e3140ba6c3a4","USDCWallet"],["dee014d1c9c5ec9171b261bcf1fa45228c945fbcf1659b911569e458892616cf","DappConfig"],["a713404b073f1d1e0d2daded883e7376da67c8e1daf666d2a0b17b081812d732","DappConfig"]]),k=(()=>{class n{constructor(){this.lastCode=new Map,this.codeSchemaCache=new Map}async updateLastCodeHash(){if(!(this.lastCode.size>0))try{let e=new AbortController,t=setTimeout(()=>e.abort(),5e3),a=await fetch(`${P.api}/abi/last.json`,{method:"GET",signal:e.signal}).finally(()=>clearTimeout(t));if(a.ok){let i=await a.json();for(let c of i)this.lastCode.set(c[0],c[1])}}catch(e){console.warn("Failed to fetch last code hashes:",e)}}async getAlias(e){await this.updateLastCodeHash();let t=U.get(e);if(!t)return e;let a=this.lastCode.get(t);return a||e}async getCodeSchema(e){let t=await this.getAlias(e);if(this.codeSchemaCache.has(t))return this.codeSchemaCache.get(t);try{let a=new AbortController,i=setTimeout(()=>a.abort(),5e3),c=await fetch(`${P.api}/abi/${t}.json`,{method:"GET",signal:a.signal}).finally(()=>clearTimeout(i));if(!c.ok){console.debug(`getCodeSchema: No ABI found for ${t}`),this.codeSchemaCache.set(t,void 0);return}let r=await c.json();if(!r.abi){console.debug(`getCodeSchema: No ABI in response for ${t}`),this.codeSchemaCache.set(t,void 0);return}let d={name:r.name,abi:(0,$.abiContract)(r.abi)};return this.codeSchemaCache.set(t,d),d}catch(a){console.debug(`getCodeSchema: Error fetching ${t}`,a),this.codeSchemaCache.set(t,void 0);return}}async getLatestCodeHashes(){return await this.updateLastCodeHash(),new Map(this.lastCode)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var H=(()=>{class n{constructor(e,t,a,i){this.graphql=e,this.api=t,this.tvmClient=a,this.platformId=i,this.collectionAddress="0:8888888888888888888888888888888888888888888888888888888888888888",this.cache=null,this.loadingPromise=null}async getCurrencyMap(){if(this.cache)return this.cache;if(j(this.platformId))return this.loadCurrencyMap();if(this.loadingPromise)return this.loadingPromise;this.loadingPromise=this.loadCurrencyMap();try{this.cache=await this.loadingPromise}finally{this.loadingPromise=null}return this.cache}async getCurrencyName(e){return(await this.getCurrencyMap()).get(e)?.name??null}async loadCurrencyMap(){try{let a=(await b(this.graphql.query(`
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
      `,{address:this.collectionAddress})))?.blockchain?.account?.info;if(!a?.data)return new Map;let i=await this.resolveAbi(a.code_hash,a.init_code_hash);if(!i)return new Map;let r=(await this.tvmClient.decodeAccountData(a.data,i))?.data?._data,d=r?.data??r?.currencies?._data??r;if(!d||typeof d!="object")return new Map;let l=new Map;for(let[m,h]of Object.entries(d)){let u=h?.data??h,p=Number(u?.key??m);if(!Number.isFinite(p))continue;let f=u?.name,_=u?.decimals,S=u?.description;l.set(p,{id:p,name:typeof f=="string"&&f.trim().length>0?f:`Currency ${p}`,decimals:typeof _=="number"?_:void 0,description:typeof S=="string"?S:void 0})}return l}catch(e){return console.warn("Failed to load currency collection:",e),new Map}}async resolveAbi(e,t){let a=[e,t].filter(Boolean);for(let i of a){let c=await this.api.getCodeSchema(i);if(c?.abi)return c.abi}return null}static{this.\u0275fac=function(t){return new(t||n)(C(A),C(k),C(I),C(G))}}static{this.\u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function L(n){return/^(-1:|0:)[a-fA-F0-9]{64}$/i.test(n.trim())}function E(n){return/^[a-fA-F0-9]{64}$/i.test(n.trim())}var s=(function(n){return n.Indexer="Indexer",n.MvMultifactor="Mobile Verifier Multifactor",n.PopitGame="Popit Game",n})(s||{}),N=new Map([["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb",s.MvMultifactor],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126",s.PopitGame],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245",s.Indexer]]),F=new Map([["91e83e01e41226af166d535e204ab7277b920b8fc518884e1f695ba6f269d74f","Block Manager Node Wallet"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Multifactor"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoin Wallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","Block Keeper Node Wallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoin Root"],["d46ad99d6889112ebedd8a00eea444b928b882dab1c6388b1c006e29ebd91fc9","USDC Wallet"],["51ceb7acf7a74a59d121f0cdf6372eb22cc072347c09accb46ea160d03daf5cb","Mobile Verifier Root"]]),D=class{constructor(o,e,t){this.tvmClientService=e,Object.assign(this,o),this.detectedType=t??void 0}get type(){return typeof this.detectedType<"u"?this.detectedType:N.get(this.codeHash)??N.get(this.initCodeHash)??null??null}async getName(){return typeof this._nameCache<"u"?this._nameCache:this._namePromise?this._namePromise:(this._namePromise=(async()=>{try{let o=q(this.id);if(o)return this._nameCache=o,o;if(this.type===s.MvMultifactor){let e=await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getMvMultifactorAbi())});this._nameCache=e?.data?._name||null}else if(this.type===s.Indexer){let e=await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getIndexerAbi())});this._nameCache=e?.data?._name||null}else this._nameCache=null}catch(o){console.error("Failed to decode account name",o),this._nameCache=null}finally{this._namePromise=void 0}return this._nameCache})(),this._namePromise)}async getLinkedAccounts(){let o=new Map;try{if(this.type===s.MvMultifactor){let e=await this.getName();if(e){let a=await this.tvmClientService.getIndexerAddressByName(e);o.set(s.Indexer,a)}let t=await this.tvmClientService.getPopitGameAddress(this.id);return t&&o.set(s.PopitGame,t),o}else if(this.type===s.Indexer){let e=await this.tvmClientService.getMvFromIndexerData(this.data);if(e){o.set(s.MvMultifactor,e);let t=await this.tvmClientService.getPopitGameAddress(e);t&&o.set(s.PopitGame,t)}}else if(this.type===s.PopitGame){let t=(await this.tvmClientService.decodeAccountData(this.data,{type:"Json",value:JSON.stringify(this.tvmClientService.getPopitGameAbi())}))?.data?._owner;t&&o.set(s.MvMultifactor,t)}}catch(e){console.error("Failed to get linked accounts",e)}return o}},he=(()=>{class n{constructor(){this.graphql=w(A),this.tvmClientService=w(I),this.apiService=w(k),this.currencyService=w(H),this.nameToMvCache=new Map}async getAccountDetails(e){let t=e.trim();if(!this.isAddress(t))try{let i=await this.tvmClientService.getIndexerAddressByName(t);t=await this.resolveMvFromIndexer(i)||i}catch(i){return console.warn("Failed to resolve name to address:",i),null}try{let i=await b(this.graphql.getAccountBoc(t));if(i)try{let{parsed:c}=await this.tvmClientService.parseAccount(i);if(c){let r=Number(c.last_paid),d=await this.currencyService.getCurrencyMap(),l=c.balance_other?.map(y=>{let g=d.get(y.currency)?.name||`Currency ${y.currency}`;return{id:y.currency,name:g,value:parseInt(y.value,16)}})||[],m=c.code_hash||"",h=c.init_code_hash||"",u=F.get(m),p,f=await this.resolveAccountType(m,h,u),_=[m,h].filter(Boolean);for(let y of _){let g=await this.apiService.getCodeSchema(y);if(g){if(u=g.name,g.abi&&c.data)try{let M=await this.tvmClientService.decodeAccountData(c.data,g.abi);M?.data&&(p=M.data)}catch(M){console.debug("Failed to decode account data:",M)}break}}let S={id:c.id||t,accType:c.acc_type,accTypeName:c.acc_type_name,balances:l.concat([{id:0,name:"SHELL",value:parseInt(c.balance,16)}]),bits:parseInt(c.bits,16),boc:i,cells:parseInt(c.cells,16),code:c.code||"",codeHash:m,data:c.data||"",dataHash:c.data_hash||"",initCodeHash:h,jsonVersion:c.json_version,lastPaid:Number.isFinite(r)&&r>0?new Date(r*1e3):null,lastTransLt:parseInt(c.last_trans_lt,16),publicCells:parseInt(c.public_cells,16),workchainId:c.workchain_id,isUpdatable:x(t),contractName:u,dataParsed:p};return new D(S,this.tvmClientService,f)}}catch(c){console.warn("TVM SDK parsing failed, falling back to GraphQL:",c)}return await this.getAccountDetailsFallback(t)}catch(i){return console.error("Failed to get account details:",i),null}}async getAccountDetailsFallback(e){try{let a=await b(this.graphql.query(`
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
      `,{address:e}).pipe(T(f=>f?.blockchain?.account?.info||null)));if(!a)return null;let i=Number(a.last_paid),r=(await this.currencyService.getCurrencyMap()).get(1)?.name||"SHELL",d=a.balance?parseInt(a.balance,10):0,l=a.code_hash||"",m=F.get(l),h=0;if(a.last_trans_lt){let f=a.last_trans_lt.toString();f.startsWith("0x")?h=parseInt(f,16):h=parseInt(f,10)}let u=await this.resolveAccountType(l,a.init_code_hash||"",m),p={id:e,accType:a.acc_type||0,accTypeName:a.acc_type_name||"Unknown",balances:[{id:0,name:r,value:d}],bits:0,cells:0,publicCells:0,boc:a.boc||"",code:a.code||"",codeHash:l,data:a.data||"",dataHash:a.data_hash||"",initCodeHash:a.init_code_hash||"",jsonVersion:0,lastPaid:Number.isFinite(i)&&i>0?new Date(i*1e3):null,lastTransLt:h,workchainId:0,isUpdatable:x(e),contractName:m};return new D(p,this.tvmClientService,u)}catch(t){return console.error("Fallback account details failed:",t),null}}contractNameToType(e){if(!e)return null;let t=e.toLowerCase();return t.includes("indexer")?s.Indexer:t.includes("multifactor")?s.MvMultifactor:t.includes("popit")?s.PopitGame:null}async resolveAccountType(e,t,a){let i=[e,t].filter(Boolean);for(let c of i){let r=N.get(c);if(r)return r}try{let c=await this.apiService.getLatestCodeHashes();for(let[r,d]of c.entries())if(i.includes(d)){let l=this.contractNameToType(r);if(l)return l}}catch(c){console.debug("resolveAccountType: failed to fetch latest code hashes",c)}return this.contractNameToType(a)}getContractName(e){return F.get(e)}getContractType(e){return N.get(e)}getMainBalance(e){return e.balances.find(a=>a.id===0)?.value??0}getAccountName(e){return q(e)||null}isAddress(e){return L(e)}isHash(e){return E(e)}async resolveMvFromIndexer(e){let t=this.nameToMvCache.get(e);if(t)return t;try{let c=(await b(this.graphql.query(`
        query GetIndexerData($address: String!) {
          blockchain {
            account(address: $address) {
              info {
                data
              }
            }
          }
        }
      `,{address:e})))?.blockchain?.account?.info?.data;if(!c)return null;let r=await this.tvmClientService.getMvFromIndexerData(c);return r&&this.nameToMvCache.set(e,r),r}catch(a){return console.debug("Failed to resolve MvMultifactor from Indexer:",a),null}}async getTransactionDetails(e){let t=`
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
              msg_type_name
            }
            out_messages {
              id
              src
              dst
              value(format: DEC)
              msg_type_name
            }
          }
        }
      }
    `;try{return await b(this.graphql.query(t,{hash:e}).pipe(T(a=>a?.blockchain?.transaction||null)))}catch(a){return console.error("Failed to get transaction details:",a),null}}async searchByHash(e){return await b(this.graphql.query(`
      query Search($id: String!) {
        blocks(filter: { id: { eq: $id } }, limit: 1) {
          id
        }
        transactions(filter: { id: { eq: $id } }, limit: 1) {
          id
        }
        messages(filter: { id: { eq: $id } }, limit: 1) {
          id
        }
      }
    `,{id:e},{timeout:6e4}))}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();export{L as a,E as b,s as c,he as d};
