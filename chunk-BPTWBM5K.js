import{b as m,d as b}from"./chunk-XZMOEJ4Y.js";import{L as p,P as k,l as u}from"./chunk-AGICBAG2.js";var q=`
                id
                account_addr
                now
                now_string
                lt
                orig_status_name
                end_status_name
                total_fees(format: DEC)
                balance_delta(format: DEC)
                aborted`,j=(()=>{class c{constructor(){this.graphql=k(b)}async getBlock(r){return(await u(this.graphql.query(`
      query GetBlock($hash: String!) {
        blockchain {
          block(hash: $hash) {
            id
            hash
            chain_order
            file_hash
            seq_no
            height
            thread_id
            shard
            workchain_id
            gen_utime
            gen_utime_string
            tr_count
            master_seq_no
            after_split
            before_split
            prev_ref {
              root_hash
            }
            prev_alt_ref {
              root_hash
            }
            prev_vert_ref {
              root_hash
            }
            prev_vert_alt_ref {
              root_hash
            }
            value_flow {
              created
              exported
              fees_collected
              fees_imported
              imported
              minted
            }
            account_blocks {
              account_addr
              transactions {
                transaction_id
                lt
              }
            }
            in_msg_descr {
              transaction_id
            }
            out_msg_descr {
              transaction_id
            }
          }
        }
      }
      `,{hash:r},{timeout:6e4}))).blockchain?.block??null}async getNextBlockHash(r,o){let a=(await u(this.graphql.query(`
      query NextBlockByHeight($threadId: String!, $height: Int!) {
        blockchain {
          blockByHeight(thread_id: $threadId, height: $height) {
            id
            hash
          }
        }
      }
    `,{threadId:r,height:o},{timeout:6e4}))).blockchain?.blockByHeight;return a&&(a.hash||a.id||"").trim()||null}async getCurrentThreadId(){let r=await u(this.graphql.query(`query GetValidationThreadId {
          blockchain {
            blocks(last: 1) {
              edges {
                node {
                  thread_id
                }
              }
            }
          }
        }`,void 0,{timeout:15e3}));return m(r?.blockchain?.blocks)[0]?.thread_id?.trim()||null}async getBlockTimesByHeight(r,o){let i=new Map;if(o.length===0)return i;let n={threadId:r},a=o.map((t,e)=>(n[`height${e}`]=t,`b${e}: blockByHeight(thread_id: $threadId, height: $height${e}) { seq_no gen_utime }`)).join(`
          `),s=o.map((t,e)=>`$height${e}: Int!`).join(", "),l=await u(this.graphql.query(`query GetBlockTimestamps($threadId: String!, ${s}) {
          blockchain {
          ${a}
          }
        }`,n,{timeout:15e3}));for(let t of Object.values(l?.blockchain??{}))t?.seq_no!=null&&t?.gen_utime!=null&&i.set(t.seq_no,t.gen_utime);return i}async getTransactionRows(r){let n=[];for(let t=0;t<r.length;t+=25)n.push(r.slice(t,t+25));let a=t=>{let e={},h=t.map((g,d)=>(e[`h${d}`]=g,`t${d}: transaction(hash: $h${d}) {${q}
              }`)).join(`
`),f=t.map((g,d)=>`$h${d}: String!`).join(", ");return u(this.graphql.query(`query BlockTxRows(${f}) {
  blockchain {
${h}
  }
}`,e,{timeout:3e4}))},s=[],l=null;for(let t=0;t<n.length;t+=2){let e=await Promise.allSettled(n.slice(t,t+2).map(a));for(let h of e)if(h.status==="fulfilled")for(let f of Object.values(h.value.blockchain??{}))f?.id&&s.push(f);else l=h.reason instanceof Error?h.reason:new Error(String(h.reason))}return{rows:s,error:s.length>0?null:l}}async findTransactionIdsForBlock(r,o,i){let n=new Set(r.map(l=>l.trim()).filter(l=>l.length>0));if(n.size===0)return[];let a=Math.min(200,Math.max(o*4,100));if(i?.trim()){let l=`
      query BlockTxIdScanAroundCursor($n: Int!, $after: String) {
        blockchain {
          transactions(first: $n, after: $after, allow_latest_inconsistent_data: true) {
            edges {
              node {
                id
                block_id
              }
            }
          }
        }
      }
      `;try{let t=await u(this.graphql.query(l,{n:a,after:i.trim()},{timeout:3e4})),e=[];for(let h of m(t.blockchain?.transactions))if(n.has(h.block_id)&&(e.push(h.id),e.length>=o))break;if(e.length>0)return e}catch(t){let e=t}}let s=`
      query BlockTxIdScanRecent($n: Int!) {
        blockchain {
          transactions(last: $n, allow_latest_inconsistent_data: true) {
            edges {
              node {
                id
                block_id
              }
            }
          }
        }
      }
    `;try{let l=await u(this.graphql.query(s,{n:a},{timeout:3e4})),t=[];for(let e of m(l.blockchain?.transactions))if(n.has(e.block_id)&&(t.push(e.id),t.length>=o))break;return t}catch{return[]}}static{this.\u0275fac=function(o){return new(o||c)}}static{this.\u0275prov=p({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();function x(c,_){let r=[],o=new Set,i=(n,a)=>{let s=n?.trim();!s||o.has(s)||(o.add(s),r.push({id:s,lt:(a??"0").trim()}))};for(let n of c.account_blocks??[])for(let a of n.transactions??[])i(a.transaction_id,a.lt);for(let n of c.in_msg_descr??[])i(n.transaction_id);for(let n of c.out_msg_descr??[])i(n.transaction_id);return r.sort($).slice(0,_).map(n=>n.id)}function $(c,_){let r=y(c.lt),o=y(_.lt);return r===o?c.id.localeCompare(_.id):r<o?-1:1}function y(c){try{return BigInt(c.trim())}catch{return BigInt(0)}}export{j as a,x as b,$ as c};
