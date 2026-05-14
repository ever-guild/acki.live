import{c as g,d as y}from"./chunk-FVK4E7CF.js";import{a as m,k as o,m as f}from"./chunk-AMA6ABAM.js";import{L as u,P as c,Y as h,ea as l,l as d}from"./chunk-L64HRMON.js";var $=(()=>{class n{constructor(){this._isSearching=l(!1),this.isSearching=this._isSearching.asReadonly(),this.injector=c(h),this.graphql=c(m)}isAddress(s){return g(s)}isHash(s){return y(s)}async searchByHash(s){let t=(await d(this.graphql.query(`
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
    `,{id:s},{timeout:6e4}))).blockchain,r=t?.message;return{blocks:t?.block?[t.block]:[],transactions:t?.transaction?[t.transaction]:[],messages:r?[{id:r.id,dst_transaction:r.dst_transaction??void 0,src_transaction:r.src_transaction??void 0}]:[]}}async resolveAccountByName(s){let e=await import("./chunk-OCOYBT4F.js");return this.injector.get(e.BlockchainService).getAccountDetails(s,{noCache:!0})}async search(s){this._isSearching.set(!0);try{let e=s.trim(),i=e.toLowerCase(),t=[];if(this.isAddress(e)){let a=o(e);return t.push({type:"account",id:e,name:a?.name}),{found:!0,results:t}}let r=f(e);if(r)return t.push({type:"account",id:r.address,name:r.name}),{found:!0,results:t};if(this.isHash(i))try{let a=await this.searchByHash(i);if(a){if(a.transactions.length>0)return t.push({type:"transaction",id:e,name:"Transaction"}),{found:!0,results:t};if(a.messages.length>0)return t.push({type:"message",id:e,name:"Message"}),{found:!0,results:t};if(a.blocks.length>0)return t.push({type:"block",id:e,name:"Block"}),{found:!0,results:t}}}catch(a){}else try{let a=await this.resolveAccountByName(e);if(a){let p=a.id!==e?e:o(a.id)?.name||a.contractName;return t.push({type:"account",id:a.id,name:p,slug:a.id!==e?e:void 0}),{found:!0,results:t}}}catch(a){}return{found:t.length>0,results:t}}catch(e){return{found:!1,results:[]}}finally{this._isSearching.set(!1)}}getSearchResultPath(s){switch(s.type){case"block":return`/blocks/${s.id}`;case"transaction":return`/transactions/${s.id}`;case"message":return`/messages/${s.id}`;case"account":return`/accounts/${s.slug||s.id}`;default:return"/"}}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();export{$ as a};
