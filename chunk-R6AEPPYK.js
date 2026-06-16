import{d as k,e as p,f as b,p as l,r as S}from"./chunk-RPFYFQP4.js";import{L as g,P as d,Y as f,ea as y,l as u}from"./chunk-RLXXVR6I.js";var I=(()=>{class r{constructor(){this._isSearching=y(!1),this.isSearching=this._isSearching.asReadonly(),this.injector=d(f),this.graphql=d(b)}isAddress(e){return k(e)}isHash(e){return p(e)}async searchByHash(e){let s=`
      query SearchTransactionByHash($id: String!) {
        blockchain {
          transaction(hash: $id) {
            id
          }
        }
      }
    `,c=`
      query SearchBlockByHash($id: String!) {
        blockchain {
          block(hash: $id) {
            id
          }
        }
      }
    `,a=`
      query SearchMessageByHash($id: String!) {
        blockchain {
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
    `,i=u(this.graphql.query(s,{id:e},{timeout:3e4})).catch(o=>({blockchain:{transaction:null}})),t=u(this.graphql.query(c,{id:e},{timeout:3e4})).catch(o=>({blockchain:{block:null}})),n=u(this.graphql.query(a,{id:e},{timeout:3e4})).catch(o=>({blockchain:{message:null}})),[m,v,B]=await Promise.all([i,t,n]),h=B.blockchain?.message;return{blocks:v.blockchain?.block?[{id:e}]:[],transactions:m.blockchain?.transaction?[m.blockchain.transaction]:[],messages:h?[{id:h.id,dst_transaction:h.dst_transaction??void 0,src_transaction:h.src_transaction??void 0}]:[]}}async resolveAccountByName(e){let s=await import("./chunk-XVH5RIR5.js");return this.injector.get(s.BlockchainService).getAccountDetails(e,{noCache:!0})}async search(e){this._isSearching.set(!0);try{let s=e.trim(),c=s.toLowerCase(),a=[];if(this.isAddress(s)){let t=l(s);return a.push({type:"account",id:s,name:t?.name}),{found:!0,results:a}}let i=S(s);if(i)return a.push({type:"account",id:i.address,name:i.name}),{found:!0,results:a};if(this.isHash(c))try{let t=await this.searchByHash(c);if(t){if(t.transactions.length>0){let n=t.transactions[0];return a.push({type:"transaction",id:n.id,name:"Transaction"}),{found:!0,results:a}}else if(t.messages.length>0){let n=t.messages[0];return a.push({type:"message",id:n.id,name:"Message"}),{found:!0,results:a}}else if(t.blocks.length>0){let n=t.blocks[0];return a.push({type:"block",id:n.id,name:"Block"}),{found:!0,results:a}}}}catch(t){}else try{let t=await this.resolveAccountByName(s);if(t){let n=t.id!==s?s:l(t.id)?.name||t.contractName;return a.push({type:"account",id:t.id,name:n,slug:t.id!==s?s:void 0}),{found:!0,results:a}}}catch(t){}return{found:a.length>0,results:a}}catch(s){return{found:!1,results:[]}}finally{this._isSearching.set(!1)}}getSearchResultPath(e){switch(e.type){case"block":return`/blocks/${e.id}`;case"transaction":return`/transactions/${e.id}`;case"message":return`/messages/${e.id}`;case"account":return`/accounts/${e.slug||e.id}`;default:return"/"}}static{this.\u0275fac=function(s){return new(s||r)}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{I as a};
