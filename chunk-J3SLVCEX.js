import{La as p,i as u,j as i,r as m,s as d}from"./chunk-3AXM2HFE.js";var l={production:!0,showGames:!1,showApplications:!1,api:"https://acki.live",graphqlEndpoint:"https://mainnet.ackinacki.org/graphql"};var M=(()=>{class e{constructor(){this.endpoint=l.graphqlEndpoint,this.http=d(p)}query(n,r,a={}){return this.http.post(this.endpoint,JSON.stringify({query:n,variables:r}),{headers:{"Content-Type":"text/plain"}}).pipe(i(s=>{if(s.errors)throw new Error(s.errors[0].message);if(!s.data)throw new Error("No data returned from GraphQL query");return s.data}),u(a.timeout??8e3))}getBlocks(n=20){return this.query(`
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
    `,{limit:n},{timeout:6e4}).pipe(i(a=>(a.blockchain?.blocks?.nodes??[]).map(t=>({id:t.hash,seq_no:t.seq_no,gen_utime:t.gen_utime,tr_count:t.tr_count,hash:t.hash})).sort((t,o)=>o.seq_no-t.seq_no)))}getTransactions(n=20){return this.query(`
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
    `,{limit:n},{timeout:6e4}).pipe(i(a=>[...a.blockchain?.transactions?.nodes??[]].sort((t,o)=>o.now-t.now||o.id.localeCompare(t.id))))}getMessages(n=20){let r=Math.min(Math.max(n*10,96),500);return this.query(`
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
    `,{txFetch:r},{timeout:6e4}).pipe(i(s=>this.messagesFromTransactionRefs(s.blockchain?.transactions?.nodes??[],n)))}messagesFromTransactionRefs(n,r){let a=new Map;for(let t of n){let o=t.now;if(t.in_msg){let f=a.get(t.in_msg);(f===void 0||o>f)&&a.set(t.in_msg,o)}for(let f of t.out_msgs??[]){let c=a.get(f);(c===void 0||o>c)&&a.set(f,o)}}return[...a.entries()].map(([t,o])=>({id:t,msg_type:0,value:"0",created_at:o})).sort((t,o)=>o.created_at-t.created_at).slice(0,r)}getAccountBoc(n){return this.query(`
      query GetAccount($address: String!) {
        blockchain {
          account(address: $address) {
            info {
              boc
            }
          }
        }
      }
    `,{address:n}).pipe(i(a=>a?.blockchain?.account?.info?.boc||null))}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var h=e=>e.trim().toLowerCase(),y=[["0:1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a",{name:"Accumulator"}],["0:2222222222222222222222222222222222222222222222222222222222222222",{name:"Mobile Verifier Root"}],["0:3333333333333333333333333333333333333333333333333333333333333333",{name:"Update Zero Contract",updatable:!0}],["0:4444444444444444444444444444444444444444444444444444444444444444",{name:"License Root"}],["0:5555555555555555555555555555555555555555555555555555555555555555",{name:"Update Custodian Multisig Wallet",updatable:!0}],["0:6666666666666666666666666666666666666666666666666666666666666666",{name:"Block Manager Root",updatable:!0}],["0:7777777777777777777777777777777777777777777777777777777777777777",{name:"Block Keeper Root",updatable:!0}],["0:8888888888888888888888888888888888888888888888888888888888888888",{name:"Currency Collection Config"}],["0:9999999999999999999999999999999999999999999999999999999999999999",{name:"Dapp Root Config"}],["0:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",{name:"USDC Root"}]],q=new Map(y.map(([e,_])=>[h(e),_]));function g(e){if(e)return q.get(h(e))}function B(e){return g(e)?.name}function D(e){return!!g(e)?.updatable}export{l as a,M as b,g as c,B as d,D as e};
