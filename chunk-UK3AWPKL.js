import{d as y}from"./chunk-CX6SF73B.js";import{a as p}from"./chunk-MJQUCBZA.js";import{c as g}from"./chunk-ID3JTNOO.js";import{a as u,l as h}from"./chunk-AMA6ABAM.js";import{L as f,P as o,l}from"./chunk-L64HRMON.js";var C=(()=>{class c{constructor(){this.graphql=o(u),this.tvmClient=o(g),this.apiService=o(p),this.cache=new Map,this.pending=new Map}getDisplayName(t,e){return t?e?.get(t)??this.getNameSync(t):null}formatAddressOrName(t,e){return this.getDisplayName(t,e)||y(t)}getNameSync(t){if(!t)return null;let e=this.cache.get(t);if(e!==void 0)return e;let n=h(t);return n?(this.cache.set(t,n),n):null}async resolveName(t){if(!t)return null;if(this.cache.has(t))return this.cache.get(t);let e=h(t);if(e)return this.cache.set(t,e),e;let n=this.pending.get(t);if(n)return n;let i=this.fetchName(t);this.pending.set(t,i);try{let r=await i;return this.cache.set(t,r),r}catch(r){return null}finally{this.pending.delete(t)}}async resolveNames(t){let e=[...new Set(t.filter(i=>i&&i.length>0))];await Promise.allSettled(e.map(i=>this.resolveName(i)));let n=new Map;for(let i of e){let r=this.cache.get(i);r&&n.set(i,r)}return n}async fetchName(t){let i=(await l(this.graphql.query(`
      query GetAccountNameInfo($address: String!) {
        blockchain {
          account(address: $address) {
            info {
              code_hash
              init_code_hash
              data
            }
          }
        }
      }
    `,{address:t})))?.blockchain?.account?.info;if(!i?.data)return null;for(let r of[i.code_hash,i.init_code_hash].filter(Boolean)){let s=await this.apiService.getCodeSchema(r);if(s?.abi&&i.data)try{let a=(await this.tvmClient.decodeAccountData(i.data,s.abi))?.data?._name;if(a&&typeof a=="string"&&a.trim().length>0)return a.trim()}catch(m){}}return null}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275prov=f({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();export{C as a};
