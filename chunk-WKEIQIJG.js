import{D as A,G as D,L as S,N as q,P as m,c as R,h as g,i as p,m as k,mc as T,n as f,na as w,pc as _,qc as v,t as b,w as h}from"./chunk-RLXXVR6I.js";import{a as C,c as y}from"./chunk-C6Q5SG76.js";var x={production:!0,showApplications:!1,api:"https://acki.live",graphqlEndpoint:"https://mainnet.ackinacki.org/graphql",buyShellApiBaseUrl:"https://buy.acki.live"};var B="https://mainnet.ackinacki.org/graphql",L="https://archive.acki.live/graphql",I=new q("GRAPHQL_ENDPOINT",{providedIn:"root",factory:()=>x.graphqlEndpoint}),V=(()=>{class a{constructor(){this.endpoint=m(I),this.http=m(v),this.platformId=m(w),this.isBrowser=T(this.platformId)}isTransientTransportError(e){return e instanceof _?e.status===0||e.status>=500:e instanceof Error?e.name==="TimeoutError"||/pool timed out|timed out while waiting|connection/i.test(e.message):!1}normalizeQueryError(e){return e instanceof _?e.status===0?new Error("Unable to reach the GraphQL endpoint. Retry connection."):e.status>=500?new Error("GraphQL endpoint returned a server error. Retry connection."):new Error(e.message||"GraphQL request failed."):e instanceof Error&&e.name==="TimeoutError"?new Error("GraphQL request timed out. Retry connection."):e instanceof Error?e:new Error("GraphQL request failed.")}buildEndpointCandidates(e={}){let r=this.endpoint.trim()||B;if(e.allowFailover===!1||this.isBrowser)return r?[r]:[];let o=[r,B].filter(Boolean);return[...new Set(o)]}withCacheBuster(e,t=!1){return t?`${e}${e.includes("?")?"&":"?"}_ts=${Date.now()}`:e}executeQuery(e,t,r,o={}){return this.http.post(e,JSON.stringify({query:t,variables:r}),{headers:{"Content-Type":"text/plain"}}).pipe(k(o.timeout??8e3),f(n=>{if(n.errors)throw new Error(n.errors[0].message);if(!n.data)throw new Error("No data returned from GraphQL query");return n.data}),A({count:2,delay:(n,i)=>this.isTransientTransportError(n)?b(250*i):p(()=>n)}))}queryWithFailover(e,t,r,o={},n=0){let i=this.withCacheBuster(e[n],o.noCache);return this.executeQuery(i,t,r,o).pipe(h(l=>!(n<e.length-1)||!this.isTransientTransportError(l)?p(()=>this.normalizeQueryError(l)):this.queryWithFailover(e,t,r,o,n+1)))}query(e,t,r={}){return this.queryWithFailover(this.buildEndpointCandidates({allowFailover:r.allowFailover}),e,t,r)}isShellnetEndpoint(){return this.endpoint.toLowerCase().includes("shellnet.ackinacki.org/graphql")}mapBlocksResponse(e){return(e.blockchain?.blocks?.nodes??[]).map(r=>({id:r.hash,seq_no:r.seq_no,gen_utime:r.gen_utime,tr_count:r.tr_count,hash:r.hash})).sort((r,o)=>o.seq_no-r.seq_no)}getBlocks(e=20,t={}){return this.query(`
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
    `,{limit:e},{timeout:t.timeout??6e4,noCache:t.noCache}).pipe(f(o=>this.mapBlocksResponse(o)))}getLiveBlocks(e=20,t={}){return this.isShellnetEndpoint()?this.getBlocks(e,t):this.executeQuery(this.withCacheBuster(L,t.noCache),`
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
    `,{limit:e},{timeout:t.timeout??6e4}).pipe(f(o=>this.mapBlocksResponse(o)),h(o=>p(()=>this.normalizeQueryError(o))))}getLiveNonEmptyBlocks(e=80,t={}){return this.isShellnetEndpoint()?this.getBlocks(e,t):this.executeQuery(this.withCacheBuster(L,t.noCache),`
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
    `,{limit:e},{timeout:t.timeout??6e4}).pipe(f(o=>this.mapBlocksResponse(o)),h(o=>p(()=>this.normalizeQueryError(o))))}getTransactions(e=20){return this.query(`
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
    `,{limit:e},{timeout:6e4}).pipe(f(r=>[...r.blockchain?.transactions?.nodes??[]].sort((n,i)=>i.now-n.now||i.id.localeCompare(n.id))))}getMessages(e=20){let t=Math.min(Math.max(e*10,96),500);return this.query(`
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
    `,{txFetch:t},{timeout:6e4}).pipe(D(o=>{let n=this.collectRecentMessageRefs(o.blockchain?.transactions?.nodes??[],e);if(n.length===0)return g([]);let i=this.buildMessagesByHashQuery(n.length),l=Object.fromEntries(n.map((c,u)=>[`hash${u}`,c.id]));return this.query(i,l,{timeout:6e4}).pipe(f(c=>this.mergeMessageDetails(n,c.blockchain??{})),h(()=>g(this.messagesFromRefs(n))))}))}collectRecentMessageRefs(e,t){let r=new Map;for(let o of e){let n=o.now;if(o.in_msg){let i=r.get(o.in_msg);(i===void 0||n>i)&&r.set(o.in_msg,n)}for(let i of o.out_msgs??[]){let l=r.get(i);(l===void 0||n>l)&&r.set(i,n)}}return[...r.entries()].map(([o,n])=>({id:o,created_at:n})).sort((o,n)=>n.created_at-o.created_at).slice(0,t)}buildMessagesByHashQuery(e){let t=Array.from({length:e},(o,n)=>`$hash${n}: String!`).join(", "),r=Array.from({length:e},(o,n)=>`m${n}: message(hash: $hash${n}) { id src dst value(format: DEC) created_at msg_type_name }`).join(`
          `);return`
      query GetMessagesByHash(${t}) {
        blockchain {
          ${r}
        }
      }
    `}mergeMessageDetails(e,t){return e.map((r,o)=>{let n=t[`m${o}`];return n?{id:n.id||r.id,src:n.src?.trim()||void 0,dst:n.dst?.trim()||void 0,value:n.value??"0",msg_type:this.msgTypeCodeFromName(n.msg_type_name),created_at:n.created_at??r.created_at}:this.syntheticMessage(r)})}messagesFromRefs(e){return e.map(t=>this.syntheticMessage(t))}syntheticMessage(e){return{id:e.id,msg_type:null,value:null,created_at:e.created_at,synthetic:!0}}msgTypeCodeFromName(e){let t=(e??"").replace(/[^a-z]/gi,"").toLowerCase();return t?t.includes("internal")?0:t.includes("externalin")||t.includes("extin")?1:t.includes("externalout")||t.includes("extout")?2:null:null}getAccountBoc(e,t={}){return this.query(`
      query GetAccount($address: String!) {
        blockchain {
          account(address: $address) {
            info {
              boc
            }
          }
        }
      }
    `,{address:e},{noCache:t.noCache}).pipe(f(o=>o?.blockchain?.account?.info?.boc||null))}getAccountsBocs(e,t={}){let r=Array.from(new Set(e));if(r.length===0)return new R(c=>{c.next({}),c.complete()});let o=r.map((c,u)=>`$a${u}: String!`).join(", "),n=r.map((c,u)=>`a${u}: account(address: $a${u}) { info { boc } }`).join(`
          `),i=`
      query GetAccounts(${o}) {
        blockchain {
          ${n}
        }
      }
    `,l={};return r.forEach((c,u)=>{l[`a${u}`]=c}),this.query(i,l,{noCache:t.noCache}).pipe(f(c=>{let u={};return r.forEach((O,$)=>{u[O]=c?.blockchain?.[`a${$}`]?.info?.boc||null}),u}))}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275prov=S({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();var N=a=>a.trim().toLowerCase(),s={accumulator:{address:"0:1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a",name:"Accumulator",displayName:"Accumulator (SHELL Exchange)",description:"Exchange contract for TIP-3 to native ECC USDC (ECC[3]) migration (AN Wallet). Callback onTransferReceived mints ECC USDC to users."},mobileVerifierRoot:{address:"0:2222222222222222222222222222222222222222222222222222222222222222",name:"Mobile Verifier Root",description:"Mobile verification root contract"},updateZeroContract:{address:"0:3333333333333333333333333333333333333333333333333333333333333333",name:"Update Zero Contract",description:"System updates and zero-state",updatable:!0},licenseRoot:{address:"0:4444444444444444444444444444444444444444444444444444444444444444",name:"License Root",description:"Licensing system root contract"},updateCustodianMultisigWallet:{address:"0:5555555555555555555555555555555555555555555555555555555555555555",name:"Update Custodian Multisig Wallet",description:"Custodian multisig update wallet",updatable:!0},blockManagerRoot:{address:"0:6666666666666666666666666666666666666666666666666666666666666666",name:"Block Manager Root",description:"Block production and validation",updatable:!0},blockKeeperRoot:{address:"0:7777777777777777777777777777777777777777777777777777777777777777",name:"Block Keeper Root",description:"Block storage and archival",updatable:!0},currencyCollectionConfig:{address:"0:8888888888888888888888888888888888888888888888888888888888888888",name:"Currency Collection Config",displayName:"Currency Config",description:"Configuration for extra currencies"},dappRootConfig:{address:"0:9999999999999999999999999999999999999999999999999999999999999999",name:"Dapp Root Config",description:"Decentralized app configuration"},usdcRoot:{address:"0:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",name:"USDC Root",description:"USDC root contract"},nacklExchange:{address:"0:3535353535353535353535353535353535353535353535353535353535353535",name:"NACKL Exchange",description:"USDC-backed exchange contract used by emission cross-checks"}},Y=s.accumulator.address,J=s.mobileVerifierRoot.address,X=s.updateZeroContract.address,ee=s.licenseRoot.address,te=s.updateCustodianMultisigWallet.address,re=s.blockManagerRoot.address,ne=s.blockKeeperRoot.address,oe=s.currencyCollectionConfig.address,ae=s.dappRootConfig.address,se=s.usdcRoot.address,ie=s.nacklExchange.address,ce=[s.accumulator,s.mobileVerifierRoot,s.updateZeroContract,s.licenseRoot,s.blockManagerRoot,s.blockKeeperRoot,s.currencyCollectionConfig,s.dappRootConfig,s.usdcRoot],M=Object.values(s).map(e=>{var t=e,{address:a}=t,d=y(t,["address"]);return[a,d]}),G=new Map(M.map(([a,d])=>[N(a),d])),F=new Map(M.map(([a,d])=>[d.name.trim().toLowerCase(),C({address:a},d)]));function E(a){if(a)return G.get(N(a))}function ue(a){return E(a)?.name}function le(a){if(a)return F.get(a.trim().toLowerCase())}function de(a){return!!E(a)?.updatable}function fe(a){let d=E(a);return d?d.routable!==!1:!0}export{x as a,V as b,s as c,J as d,ee as e,re as f,ne as g,oe as h,se as i,ie as j,ce as k,E as l,ue as m,le as n,de as o,fe as p};
