import{Ta as h,f as m,j as d,k as u,w as l,x as p}from"./chunk-4HRPKSGR.js";var g={production:!0,showGames:!1,showApplications:!1,api:"https://acki.live",graphqlEndpoint:"https://mainnet.ackinacki.org/graphql"};var M=(()=>{class n{constructor(){this.endpoint=g.graphqlEndpoint,this.http=p(h)}query(o,r,e={}){let i=e.noCache?`${this.endpoint}${this.endpoint.includes("?")?"&":"?"}_ts=${Date.now()}`:this.endpoint;return this.http.post(i,JSON.stringify({query:o,variables:r}),{headers:{"Content-Type":"text/plain"}}).pipe(u(t=>{if(t.errors)throw new Error(t.errors[0].message);if(!t.data)throw new Error("No data returned from GraphQL query");return t.data}),d(e.timeout??8e3))}getBlocks(o=20){return this.query(`
      query GetBlocks($limit: Int!) {
        blockchain {
          blocks(last: $limit) {
            nodes {
              seq_no
              gen_utime
              tr_count
              hash
            }
          }
        }
      }
    `,{limit:o},{timeout:6e4}).pipe(u(e=>(e.blockchain?.blocks?.nodes??[]).map(t=>({id:t.hash,seq_no:t.seq_no,gen_utime:t.gen_utime,tr_count:t.tr_count,hash:t.hash})).sort((t,a)=>a.seq_no-t.seq_no)))}getTransactions(o=20){return this.query(`
      query GetTransactions($limit: Int!) {
        blockchain {
          transactions(last: $limit) {
            nodes {
              id
              now
              account_addr
              total_fees(format: DEC)
              balance_delta(format: DEC)
              status
              aborted
              in_message {
                id
                src
                dst
                value(format: DEC)
                value_other { currency value(format: DEC) }
                msg_type_name
              }
              out_messages {
                id
                src
                dst
                value(format: DEC)
                value_other { currency value(format: DEC) }
                msg_type_name
              }
            }
          }
        }
      }
    `,{limit:o},{timeout:6e4}).pipe(u(e=>[...e.blockchain?.transactions?.nodes??[]].sort((t,a)=>a.now-t.now||a.id.localeCompare(t.id))))}getMessages(o=20){let r=Math.min(Math.max(o*10,96),500);return this.query(`
      query GetMessagesViaTransactions($txFetch: Int!) {
        blockchain {
          transactions(last: $txFetch) {
            nodes {
              in_msg
              out_msgs
              now
            }
          }
        }
      }
    `,{txFetch:r},{timeout:6e4}).pipe(u(i=>this.messagesFromTransactionRefs(i.blockchain?.transactions?.nodes??[],o)))}messagesFromTransactionRefs(o,r){let e=new Map;for(let t of o){let a=t.now;if(t.in_msg){let f=e.get(t.in_msg);(f===void 0||a>f)&&e.set(t.in_msg,a)}for(let f of t.out_msgs??[]){let s=e.get(f);(s===void 0||a>s)&&e.set(f,a)}}return[...e.entries()].map(([t,a])=>({id:t,msg_type:0,value:"0",created_at:a})).sort((t,a)=>a.created_at-t.created_at).slice(0,r)}getAccountBoc(o,r={}){return this.query(`
      query GetAccount($address: String!) {
        blockchain {
          account(address: $address) {
            info {
              boc
            }
          }
        }
      }
    `,{address:o},{noCache:r.noCache}).pipe(u(i=>i?.blockchain?.account?.info?.boc||null))}getAccountsBocs(o,r={}){let e=Array.from(new Set(o));if(e.length===0)return new m(s=>{s.next({}),s.complete()});let i=e.map((s,c)=>`$a${c}: String!`).join(", "),t=e.map((s,c)=>`a${c}: account(address: $a${c}) { info { boc } }`).join(`
          `),a=`
      query GetAccounts(${i}) {
        blockchain {
          ${t}
        }
      }
    `,f={};return e.forEach((s,c)=>{f[`a${c}`]=s}),this.query(a,f,{noCache:r.noCache}).pipe(u(s=>{let c={};return e.forEach((b,C)=>{c[b]=s?.blockchain?.[`a${C}`]?.info?.boc||null}),c}))}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var y=n=>n.trim().toLowerCase(),w=[["0:1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a",{name:"Accumulator"}],["0:2222222222222222222222222222222222222222222222222222222222222222",{name:"Mobile Verifier Root"}],["0:3333333333333333333333333333333333333333333333333333333333333333",{name:"Update Zero Contract",updatable:!0}],["0:4444444444444444444444444444444444444444444444444444444444444444",{name:"License Root"}],["0:5555555555555555555555555555555555555555555555555555555555555555",{name:"Update Custodian Multisig Wallet",updatable:!0}],["0:6666666666666666666666666666666666666666666666666666666666666666",{name:"Block Manager Root",updatable:!0}],["0:7777777777777777777777777777777777777777777777777777777777777777",{name:"Block Keeper Root",updatable:!0}],["0:8888888888888888888888888888888888888888888888888888888888888888",{name:"Currency Collection Config"}],["0:9999999999999999999999999999999999999999999999999999999999999999",{name:"Dapp Root Config"}],["0:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",{name:"USDC Root"}]],$=new Map(w.map(([n,q])=>[y(n),q]));function _(n){if(n)return $.get(y(n))}function G(n){return _(n)?.name}function I(n){return!!_(n)?.updatable}export{g as a,M as b,_ as c,G as d,I as e};
