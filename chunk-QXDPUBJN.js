import{d as y}from"./chunk-CQ7MDNOL.js";import{b as f,c as g,n as d,p}from"./chunk-BXJNHH7V.js";import{L as u,P as o,Y as l,ea as m,l as h}from"./chunk-AGICBAG2.js";var $=(()=>{class n{constructor(){this._isSearching=m(!1),this.isSearching=this._isSearching.asReadonly(),this.injector=o(l),this.graphql=o(y)}isAddress(t){return f(t)}isHash(t){return g(t)}async searchByHash(t){let s=(await h(this.graphql.query(`
      query SearchByHash($id: String!) {
        blockchain {
          block(hash: $id) {
            id
          }
          transaction(hash: $id) {
            id
          }
          message(hash: $id) {
            id
          }
        }
      }
    `,{id:t},{timeout:15e3}))).blockchain;return{blocks:s?.block?[{id:t}]:[],transactions:s?.transaction?[s.transaction]:[],messages:s?.message?[s.message]:[]}}async resolveAccountByName(t){let a=await import("./chunk-X5UOKPRD.js");return this.injector.get(a.BlockchainService).getAccountDetails(t,{noCache:!0})}async search(t){this._isSearching.set(!0);try{let a=t.trim(),i=a.toLowerCase(),s=[];if(this.isAddress(a)){let e=d(a);return s.push({type:"account",id:a,name:e?.name}),{found:!0,results:s}}let c=p(a);if(c)return s.push({type:"account",id:c.address,name:c.name}),{found:!0,results:s};if(this.isHash(i))try{let e=await this.searchByHash(i);if(e){if(e.transactions.length>0){let r=e.transactions[0];return s.push({type:"transaction",id:r.id,name:"Transaction"}),{found:!0,results:s}}else if(e.messages.length>0){let r=e.messages[0];return s.push({type:"message",id:r.id,name:"Message"}),{found:!0,results:s}}else if(e.blocks.length>0){let r=e.blocks[0];return s.push({type:"block",id:r.id,name:"Block"}),{found:!0,results:s}}}}catch(e){throw e instanceof Error?e:new Error("Search lookup failed.")}else try{let e=await this.resolveAccountByName(a);if(e){let r=e.id!==a?a:d(e.id)?.name||e.contractName;return s.push({type:"account",id:e.id,name:r,slug:e.id!==a?a:void 0}),{found:!0,results:s}}}catch(e){}return{found:s.length>0,results:s}}finally{this._isSearching.set(!1)}}getSearchResultPath(t){switch(t.type){case"block":return`/blocks/${t.id}`;case"transaction":return`/transactions/${t.id}`;case"message":return`/messages/${t.id}`;case"account":return`/accounts/${t.slug||t.id}`;default:return"/"}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();export{$ as a};
