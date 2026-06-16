import{d as v}from"./chunk-CX6SF73B.js";import{a as p}from"./chunk-C7ES63IW.js";import{c as g}from"./chunk-F5RX2E5J.js";import{f,q as s}from"./chunk-RPFYFQP4.js";import{L as u,P as o,l as h}from"./chunk-RLXXVR6I.js";var D=(()=>{class a{constructor(){this.graphql=o(f),this.tvmClient=o(g),this.apiService=o(p),this.cache=new Map,this.pending=new Map}getDisplayName(t,e){return t?e?.get(t)??this.getNameSync(t):null}formatAddressOrName(t,e){return this.getDisplayName(t,e)||v(t)}getNameSync(t){if(!t)return null;let e=this.cache.get(t);if(e!==void 0)return e;let n=s(t);return n?(this.cache.set(t,n),n):null}async resolveName(t){if(!t)return null;if(this.cache.has(t))return this.cache.get(t);let e=s(t);if(e)return this.cache.set(t,e),e;let n=this.pending.get(t);if(n)return n;let r=this.fetchName(t);this.pending.set(t,r);try{let i=await r;return this.cache.set(t,i),i}catch(i){return null}finally{this.pending.delete(t)}}async resolveNames(t){let e=[...new Set(t.filter(r=>r&&r.length>0))];await Promise.allSettled(e.map(r=>this.resolveName(r)));let n=new Map;for(let r of e){let i=this.cache.get(r);i&&n.set(r,i)}return n}async fetchName(t){let e=await h(this.graphql.resolveAccountQueryArgs(t)),n=`
      query GetAccountNameInfo(${e.varDecls}) {
        blockchain {
          account(${e.argClause}) {
            info {
              code_hash
              init_code_hash
              data
            }
          }
        }
      }
    `,i=(await h(this.graphql.query(n,e.variables)))?.blockchain?.account?.info;if(!i?.data)return null;for(let y of[i.code_hash,i.init_code_hash].filter(Boolean)){let l=await this.apiService.getCodeSchema(y);if(l?.abi&&i.data)try{let c=(await this.tvmClient.decodeAccountData(i.data,l.abi))?.data?._name;if(c&&typeof c=="string"&&c.trim().length>0)return c.trim()}catch(m){}}return null}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275prov=u({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();export{D as a};
