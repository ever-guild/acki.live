import{c as m,d as p,e as g}from"./chunk-CQ7YQ6R6.js";import{Da as h,e as d,h as l,i as c,o as u}from"./chunk-SSYNGMM4.js";var f=[{name:"Mobile Verifier Root",address:"0:2222222222222222222222222222222222222222222222222222222222222222"},{name:"Update Zero Contract",address:"0:3333333333333333333333333333333333333333333333333333333333333333",updatable:!0},{name:"License Root",address:"0:4444444444444444444444444444444444444444444444444444444444444444"},{name:"Update Custodian Multisig Wallet",address:"0:5555555555555555555555555555555555555555555555555555555555555555",updatable:!0},{name:"Block Manager Root",address:"0:6666666666666666666666666666666666666666666666666666666666666666",updatable:!0},{name:"Block Keeper Root",address:"0:7777777777777777777777777777777777777777777777777777777777777777",updatable:!0},{name:"Currency Collection Config",address:"0:8888888888888888888888888888888888888888888888888888888888888888"},{name:"Dapp Root Config",address:"0:9999999999999999999999999999999999999999999999999999999999999999"},{name:"USDC Root",address:"0:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"}],q=(()=>{class o{constructor(t,e,a){this.graphqlService=t,this.tvmClientService=e,this.blockchainService=a,this._isSearching=u(!1),this.isSearching=this._isSearching.asReadonly()}isAddress(t){return/^(-1|0):[a-fA-F0-9]{64}$/i.test(t)}isHash(t){return/^[a-fA-F0-9]{64}$/i.test(t)}searchAddressBook(t){let e=t.trim().toLowerCase(),a=f.find(n=>n.name.toLowerCase()===e);return a||f.find(n=>n.name.toLowerCase().includes(e)||e.includes(n.name.toLowerCase()))}getAddressInfo(t){let e=t.trim().toLowerCase();return f.find(a=>a.address.toLowerCase()===e)}async search(t){this._isSearching.set(!0);try{let e=t.trim(),a=e.toLowerCase(),s=[];if(this.isAddress(e)){let r=this.getAddressInfo(e);return s.push({type:"account",id:e,name:r?.name}),{found:!0,results:s}}let n=this.searchAddressBook(e);if(n)return s.push({type:"account",id:n.address,name:n.name}),{found:!0,results:s};try{let r=await this.tvmClientService.getIndexerAddressByName(e);if(r){let v=await this.resolveMvFromAccountDetails(r)||await this.resolveMvFromIndexer(r)||r;return s.push({type:"account",id:v}),{found:!0,results:s}}}catch(r){console.debug("Name lookup failed:",r)}if(!this.isHash(a))return{found:!1,results:[]};let i=await d(this.graphqlService.query(`
        query Search($id: String!) {
          blocks(filter: { id: { eq: $id } }, limit: 1) {
            id
          }
          transactions(filter: { id: { eq: $id } }, limit: 1) {
            id
          }
          messages(filter: { id: { eq: $id } }, limit: 1) {
            id
            dst_transaction { id }
            src_transaction { id }
          }
        }
      `,{id:a}));if(i.blocks&&i.blocks.length>0&&s.push({type:"block",id:i.blocks[0].id}),i.transactions&&i.transactions.length>0&&s.push({type:"transaction",id:i.transactions[0].id}),i.messages&&i.messages.length>0){let r=i.messages[0];s.push({type:"message",id:r.id,relatedTransactionId:r.dst_transaction?.id||r.src_transaction?.id})}return{found:s.length>0,results:s}}catch(e){return console.error("Search failed:",e),{found:!1,results:[]}}finally{this._isSearching.set(!1)}}getSearchResultPath(t){switch(t.type){case"block":return`/blocks/${t.id}`;case"transaction":return`/transactions/${t.id}`;case"message":return`/messages/${t.id}`;case"account":return`/accounts/${t.id}`;default:return"/"}}async resolveMvFromIndexer(t){try{let s=(await d(this.graphqlService.query(`
        query GetIndexerData($address: String!) {
          blockchain {
            account(address: $address) {
              info {
                data
              }
            }
          }
        }
      `,{address:t})))?.blockchain?.account?.info?.data;return s?await this.tvmClientService.getMvFromIndexerData(s):null}catch(e){return console.debug("Failed to resolve MF from Indexer data:",e),null}}async resolveMvFromAccountDetails(t){try{let e=await this.blockchainService.getAccountDetails(t);return e&&(await e.getLinkedAccounts()).get(p.MvMultifactor)||null}catch(e){return console.debug("Failed to resolve MF via account details:",e),null}}static{this.\u0275fac=function(e){return new(e||o)(c(h),c(m),c(g))}}static{this.\u0275prov=l({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();export{q as a};
