import{d as g}from"./chunk-CX6SF73B.js";import{a as u}from"./chunk-VZWIGR4W.js";import{c as p}from"./chunk-F5RX2E5J.js";import{f,q as h}from"./chunk-R33FNBXU.js";import{L as m,P as o,l}from"./chunk-RLXXVR6I.js";var C=(()=>{class r{constructor(){this.graphql=o(f),this.tvmClient=o(p),this.apiService=o(u),this.cache=new Map,this.pending=new Map}getDisplayName(t,e){return t?e?.get(t)??this.getNameSync(t):null}formatAddressOrName(t,e){return this.getDisplayName(t,e)||g(t)}getNameSync(t){if(!t)return null;let e=this.cache.get(t);if(e!==void 0)return e;let i=h(t);return i?(this.cache.set(t,i),i):null}async resolveName(t){if(!t)return null;if(this.cache.has(t))return this.cache.get(t);let e=h(t);if(e)return this.cache.set(t,e),e;let i=this.pending.get(t);if(i)return i;let n=this.fetchName(t);this.pending.set(t,n);try{let c=await n;return this.cache.set(t,c),c}catch(c){return null}finally{this.pending.delete(t)}}async resolveNames(t){let e=[...new Set(t.filter(n=>n&&n.length>0))];await Promise.allSettled(e.map(n=>this.resolveName(n)));let i=new Map;for(let n of e){let c=this.cache.get(n);c&&i.set(n,c)}return i}async fetchName(t){let i=(await l(this.graphql.queryAccount(n=>`
          query GetAccountNameInfo(${n.varDecls}) {
            blockchain {
              account(${n.argClause}) {
                info {
                  code_hash
                  init_code_hash
                  data
                }
              }
            }
          }
        `,t)))?.blockchain?.account?.info;if(!i?.data)return null;for(let n of[i.code_hash,i.init_code_hash].filter(Boolean)){let c=await this.apiService.getCodeSchema(n);if(c?.abi&&i.data)try{let a=(await this.tvmClient.decodeAccountData(i.data,c.abi))?.data?._name;if(a&&typeof a=="string"&&a.trim().length>0)return a.trim()}catch(s){}}return null}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275prov=m({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{C as a};
