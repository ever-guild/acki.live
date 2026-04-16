import{a as p}from"./chunk-DVEDPYRL.js";import{d as u}from"./chunk-TVEMJ7XM.js";import{b as m,d as s}from"./chunk-G67CSQXA.js";import{i as l,w as f,x as o}from"./chunk-4HRPKSGR.js";var _=(()=>{class a{constructor(){this.graphql=o(m),this.tvmClient=o(u),this.apiService=o(p),this.cache=new Map,this.pending=new Map}getNameSync(t){if(!t)return null;let n=this.cache.get(t);if(n!==void 0)return n;let i=s(t);return i?(this.cache.set(t,i),i):null}async resolveName(t){if(!t)return null;if(this.cache.has(t))return this.cache.get(t);let n=s(t);if(n)return this.cache.set(t,n),n;let i=this.pending.get(t);if(i)return i;let e=this.fetchName(t);this.pending.set(t,e);try{let c=await e;return this.cache.set(t,c),c}finally{this.pending.delete(t)}}async resolveNames(t){let n=[...new Set(t.filter(e=>e&&e.length>0))];await Promise.allSettled(n.map(e=>this.resolveName(e)));let i=new Map;for(let e of n){let c=this.cache.get(e);c&&i.set(e,c)}return i}async fetchName(t){try{let e=(await l(this.graphql.query(`
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
      `,{address:t})))?.blockchain?.account?.info;if(!e?.data)return null;for(let c of[e.code_hash,e.init_code_hash].filter(Boolean)){let h=await this.apiService.getCodeSchema(c);if(h?.abi&&e.data)try{let r=(await this.tvmClient.decodeAccountData(e.data,h.abi))?.data?._name;if(r&&typeof r=="string"&&r.trim().length>0)return r.trim()}catch{}}return null}catch{return null}}static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();export{_ as a};
