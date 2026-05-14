import{a as B}from"./chunk-WYP252OH.js";import{D,G as A,L as S,N as T,P as m,c as R,h as g,i as h,lc as w,m as k,n as f,na as q,oc as _,pc as v,t as b,w as p}from"./chunk-L64HRMON.js";import{a as E,c as y}from"./chunk-C6Q5SG76.js";var x="https://mainnet.ackinacki.org/graphql",L="https://archive.acki.live/graphql",I=new T("GRAPHQL_ENDPOINT",{providedIn:"root",factory:()=>B.graphqlEndpoint}),W=(()=>{class s{constructor(){this.endpoint=m(I),this.http=m(v),this.platformId=m(q),this.isBrowser=w(this.platformId)}isTransientTransportError(e){return e instanceof _?e.status===0||e.status>=500:e instanceof Error&&e.name==="TimeoutError"}normalizeQueryError(e){return e instanceof _?e.status===0?new Error("Unable to reach the GraphQL endpoint. Retry connection."):e.status>=500?new Error("GraphQL endpoint returned a server error. Retry connection."):new Error(e.message||"GraphQL request failed."):e instanceof Error&&e.name==="TimeoutError"?new Error("GraphQL request timed out. Retry connection."):e instanceof Error?e:new Error("GraphQL request failed.")}buildEndpointCandidates(e={}){let t=this.endpoint.trim(),n=this.isBrowser&&/^https?:\/\/archive\.acki\.live\/graphql\/?$/i.test(t)?x:t;if(e.allowFailover===!1)return n?[n]:[];let r=[n,x].filter(Boolean);return[...new Set(r)]}withCacheBuster(e,t=!1){return t?`${e}${e.includes("?")?"&":"?"}_ts=${Date.now()}`:e}executeQuery(e,t,o,n={}){return this.http.post(e,JSON.stringify({query:t,variables:o}),{headers:{"Content-Type":"text/plain"}}).pipe(k(n.timeout??8e3),f(r=>{if(r.errors)throw new Error(r.errors[0].message);if(!r.data)throw new Error("No data returned from GraphQL query");return r.data}),D({count:1,delay:(r,i)=>this.isTransientTransportError(r)?b(250*i):h(()=>r)}))}queryWithFailover(e,t,o,n={},r=0){let i=this.withCacheBuster(e[r],n.noCache);return this.executeQuery(i,t,o,n).pipe(p(d=>!(r<e.length-1)||!this.isTransientTransportError(d)?h(()=>this.normalizeQueryError(d)):this.queryWithFailover(e,t,o,n,r+1)))}query(e,t,o={}){return this.queryWithFailover(this.buildEndpointCandidates({allowFailover:o.allowFailover}),e,t,o)}isShellnetEndpoint(){return this.endpoint.toLowerCase().includes("shellnet.ackinacki.org/graphql")}mapBlocksResponse(e){return(e.blockchain?.blocks?.nodes??[]).map(o=>({id:o.hash,seq_no:o.seq_no,gen_utime:o.gen_utime,tr_count:o.tr_count,hash:o.hash})).sort((o,n)=>n.seq_no-o.seq_no)}getBlocks(e=20,t={}){return this.query(`
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
    `,{limit:e},{timeout:t.timeout??6e4,noCache:t.noCache}).pipe(f(n=>this.mapBlocksResponse(n)))}getLiveBlocks(e=20,t={}){return this.isShellnetEndpoint()?this.getBlocks(e,t):this.executeQuery(this.withCacheBuster(L,t.noCache),`
      query GetLiveBlocks($limit: Int!) {
        blockchain {
          blocks(last: $limit, allow_latest_inconsistent_data: true) {
            nodes {
              seq_no
              gen_utime
              tr_count
              hash
            }
          }
        }
      }
    `,{limit:e},{timeout:t.timeout??6e4}).pipe(f(n=>this.mapBlocksResponse(n)),p(n=>h(()=>this.normalizeQueryError(n))))}getLiveNonEmptyBlocks(e=80,t={}){return this.isShellnetEndpoint()?this.getBlocks(e,t):this.executeQuery(this.withCacheBuster(L,t.noCache),`
      query GetLiveNonEmptyBlocks($limit: Int!) {
        blockchain {
          blocks(last: $limit, allow_latest_inconsistent_data: true, min_tr_count: 1) {
            nodes {
              seq_no
              gen_utime
              tr_count
              hash
            }
          }
        }
      }
    `,{limit:e},{timeout:t.timeout??6e4}).pipe(f(n=>this.mapBlocksResponse(n)),p(n=>h(()=>this.normalizeQueryError(n))))}getTransactions(e=20){return this.query(`
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
    `,{limit:e},{timeout:6e4}).pipe(f(o=>[...o.blockchain?.transactions?.nodes??[]].sort((r,i)=>i.now-r.now||i.id.localeCompare(r.id))))}getMessages(e=20){let t=Math.min(Math.max(e*10,96),500);return this.query(`
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
    `,{txFetch:t},{timeout:6e4}).pipe(A(n=>{let r=this.collectRecentMessageRefs(n.blockchain?.transactions?.nodes??[],e);if(r.length===0)return g([]);let i=this.buildMessagesByHashQuery(r.length),d=Object.fromEntries(r.map((c,u)=>[`hash${u}`,c.id]));return this.query(i,d,{timeout:6e4}).pipe(f(c=>this.mergeMessageDetails(r,c.blockchain??{})),p(()=>g(this.messagesFromRefs(r))))}))}collectRecentMessageRefs(e,t){let o=new Map;for(let n of e){let r=n.now;if(n.in_msg){let i=o.get(n.in_msg);(i===void 0||r>i)&&o.set(n.in_msg,r)}for(let i of n.out_msgs??[]){let d=o.get(i);(d===void 0||r>d)&&o.set(i,r)}}return[...o.entries()].map(([n,r])=>({id:n,created_at:r})).sort((n,r)=>r.created_at-n.created_at).slice(0,t)}buildMessagesByHashQuery(e){let t=Array.from({length:e},(n,r)=>`$hash${r}: String!`).join(", "),o=Array.from({length:e},(n,r)=>`m${r}: message(hash: $hash${r}) { id src dst value(format: DEC) created_at msg_type_name }`).join(`
          `);return`
      query GetMessagesByHash(${t}) {
        blockchain {
          ${o}
        }
      }
    `}mergeMessageDetails(e,t){return e.map((o,n)=>{let r=t[`m${n}`];return r?{id:r.id||o.id,src:r.src?.trim()||void 0,dst:r.dst?.trim()||void 0,value:r.value??"0",msg_type:this.msgTypeCodeFromName(r.msg_type_name),created_at:r.created_at??o.created_at}:this.syntheticMessage(o)})}messagesFromRefs(e){return e.map(t=>this.syntheticMessage(t))}syntheticMessage(e){return{id:e.id,msg_type:null,value:null,created_at:e.created_at,synthetic:!0}}msgTypeCodeFromName(e){let t=(e??"").replace(/[^a-z]/gi,"").toLowerCase();return t?t.includes("internal")?0:t.includes("externalin")||t.includes("extin")?1:t.includes("externalout")||t.includes("extout")?2:null:null}getAccountBoc(e,t={}){return this.query(`
      query GetAccount($address: String!) {
        blockchain {
          account(address: $address) {
            info {
              boc
            }
          }
        }
      }
    `,{address:e},{noCache:t.noCache}).pipe(f(n=>n?.blockchain?.account?.info?.boc||null))}getAccountsBocs(e,t={}){let o=Array.from(new Set(e));if(o.length===0)return new R(c=>{c.next({}),c.complete()});let n=o.map((c,u)=>`$a${u}: String!`).join(", "),r=o.map((c,u)=>`a${u}: account(address: $a${u}) { info { boc } }`).join(`
          `),i=`
      query GetAccounts(${n}) {
        blockchain {
          ${r}
        }
      }
    `,d={};return o.forEach((c,u)=>{d[`a${u}`]=c}),this.query(i,d,{noCache:t.noCache}).pipe(f(c=>{let u={};return o.forEach((O,$)=>{u[O]=c?.blockchain?.[`a${$}`]?.info?.boc||null}),u}))}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275prov=S({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var N=s=>s.trim().toLowerCase(),a={accumulator:{address:"0:1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a",name:"Accumulator",displayName:"Accumulator (SHELL Exchange)",description:"Exchange contract for TIP-3 to native ECC USDC (ECC[3]) migration (AN Wallet). Callback onTransferReceived mints ECC USDC to users."},mobileVerifierRoot:{address:"0:2222222222222222222222222222222222222222222222222222222222222222",name:"Mobile Verifier Root",description:"Mobile verification root contract"},updateZeroContract:{address:"0:3333333333333333333333333333333333333333333333333333333333333333",name:"Update Zero Contract",description:"System updates and zero-state",updatable:!0},licenseRoot:{address:"0:4444444444444444444444444444444444444444444444444444444444444444",name:"License Root",description:"Licensing system root contract"},updateCustodianMultisigWallet:{address:"0:5555555555555555555555555555555555555555555555555555555555555555",name:"Update Custodian Multisig Wallet",description:"Custodian multisig update wallet",updatable:!0},blockManagerRoot:{address:"0:6666666666666666666666666666666666666666666666666666666666666666",name:"Block Manager Root",description:"Block production and validation",updatable:!0},blockKeeperRoot:{address:"0:7777777777777777777777777777777777777777777777777777777777777777",name:"Block Keeper Root",description:"Block storage and archival",updatable:!0},currencyCollectionConfig:{address:"0:8888888888888888888888888888888888888888888888888888888888888888",name:"Currency Collection Config",displayName:"Currency Config",description:"Configuration for extra currencies"},dappRootConfig:{address:"0:9999999999999999999999999999999999999999999999999999999999999999",name:"Dapp Root Config",description:"Decentralized app configuration"},usdcRoot:{address:"0:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",name:"USDC Root",description:"USDC root contract"},nacklExchange:{address:"0:3535353535353535353535353535353535353535353535353535353535353535",name:"NACKL Exchange",description:"USDC-backed exchange contract used by emission cross-checks"}},Z=a.accumulator.address,Y=a.mobileVerifierRoot.address,J=a.updateZeroContract.address,X=a.licenseRoot.address,ee=a.updateCustodianMultisigWallet.address,te=a.blockManagerRoot.address,re=a.blockKeeperRoot.address,ne=a.currencyCollectionConfig.address,oe=a.dappRootConfig.address,se=a.usdcRoot.address,ae=a.nacklExchange.address,ie=[a.accumulator,a.mobileVerifierRoot,a.updateZeroContract,a.licenseRoot,a.blockManagerRoot,a.blockKeeperRoot,a.currencyCollectionConfig,a.dappRootConfig,a.usdcRoot],M=Object.values(a).map(e=>{var t=e,{address:s}=t,l=y(t,["address"]);return[s,l]}),G=new Map(M.map(([s,l])=>[N(s),l])),F=new Map(M.map(([s,l])=>[l.name.trim().toLowerCase(),E({address:s},l)]));function C(s){if(s)return G.get(N(s))}function ce(s){return C(s)?.name}function ue(s){if(s)return F.get(s.trim().toLowerCase())}function de(s){return!!C(s)?.updatable}function le(s){let l=C(s);return l?l.routable!==!1:!0}export{W as a,a as b,Y as c,X as d,te as e,re as f,ne as g,se as h,ae as i,ie as j,C as k,ce as l,ue as m,de as n,le as o};
