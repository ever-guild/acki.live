import{D as w,G as D,I as $,L as v,N as q,P as C,c as b,h as E,i as h,m as k,mc as T,n as p,na as I,pc as A,qc as L,t as S,w as m}from"./chunk-RLXXVR6I.js";import{a as g,c as _}from"./chunk-C6Q5SG76.js";var x={production:!0,showApplications:!1,api:"https://acki.live",graphqlEndpoint:"https://mainnet.ackinacki.org/graphql",buyShellApiBaseUrl:"https://buy.acki.live"};function Q(a){let i=a.trim(),e=i.match(/^(-?\d+):([a-fA-F0-9]+)$/);return e?`${String(Number(e[1]))}:${e[2].toLowerCase()}`:i.toLowerCase()}function z(a){let i=Q(a),e=[],t=new Set,r=o=>{let s=o.trim();!s||t.has(s)||(t.add(s),e.push(s))};r(i);let n=i.match(/^(-?\d+):([a-f0-9]+)$/i);return n?.[2]&&r(n[2]),e}function j(a){let i=a.trim();return!!(/^(-1:|0:)[a-fA-F0-9]{64}$/i.test(i)||/^[a-fA-F0-9]{64}::[a-fA-F0-9]{64}$/i.test(i))}function K(a){return/^[a-fA-F0-9]{64}$/i.test(a.trim())}function y(a){if(!a)return null;let i=a.trim(),e=i.match(/^([a-fA-F0-9]{64})::([a-fA-F0-9]{64})$/);if(e)return{dappId:e[1].toLowerCase(),accountId:e[2].toLowerCase()};let t=i.match(/^(-?\d+):([a-fA-F0-9]{64})$/);if(t)return{workchain:Number(t[1]),accountId:t[2].toLowerCase()};let r=i.match(/^([a-fA-F0-9]{64})$/);return r?{accountId:r[1].toLowerCase()}:null}var B="https://mainnet.ackinacki.org/graphql",N="https://archive.acki.live/graphql",O=5,G=new q("GRAPHQL_ENDPOINT",{providedIn:"root",factory:()=>x.graphqlEndpoint}),ne=(()=>{class a{constructor(){this.endpoint=C(G),this.http=C(L),this.platformId=C(I),this.isBrowser=T(this.platformId),this.preferredAccountSupports=!0}isTransientTransportError(e){return e instanceof A?e.status===0||e.status>=500:e instanceof Error?e.name==="TimeoutError"||/pool timed out|timed out while waiting|connection/i.test(e.message):!1}normalizeQueryError(e){return e instanceof A?e.status===0?new Error("Unable to reach the GraphQL endpoint. Retry connection."):e.status>=500?new Error("GraphQL endpoint returned a server error. Retry connection."):new Error(e.message||"GraphQL request failed."):e instanceof Error&&e.name==="TimeoutError"?new Error("GraphQL request timed out. Retry connection."):e instanceof Error?e:new Error("GraphQL request failed.")}buildEndpointCandidates(e={}){let r=this.endpoint.trim()||B;if(e.allowFailover===!1||this.isBrowser)return r?[r]:[];let n=[r,B].filter(Boolean);return[...new Set(n)]}withCacheBuster(e,t=!1){return t?`${e}${e.includes("?")?"&":"?"}_ts=${Date.now()}`:e}executeQuery(e,t,r,n={}){return this.http.post(e,JSON.stringify({query:t,variables:r}),{headers:{"Content-Type":"text/plain"}}).pipe(k(n.timeout??8e3),p(o=>{if(o.errors)throw new Error(o.errors[0].message);if(!o.data)throw new Error("No data returned from GraphQL query");return o.data}),w({count:2,delay:(o,s)=>this.isTransientTransportError(o)?S(250*s):h(()=>o)}))}queryWithFailover(e,t,r,n={},o=0){let s=this.withCacheBuster(e[o],n.noCache);return this.executeQuery(s,t,r,n).pipe(m(u=>!(o<e.length-1)||!this.isTransientTransportError(u)?h(()=>this.normalizeQueryError(u)):this.queryWithFailover(e,t,r,n,o+1)))}query(e,t,r={}){return this.queryWithFailover(this.buildEndpointCandidates({allowFailover:r.allowFailover}),e,t,r)}isShellnetEndpoint(){return this.endpoint.toLowerCase().includes("shellnet.ackinacki.org/graphql")}mapBlocksResponse(e){return(e.blockchain?.blocks?.nodes??[]).map(r=>({id:r.hash,seq_no:r.seq_no,gen_utime:r.gen_utime,tr_count:r.tr_count,hash:r.hash})).sort((r,n)=>n.seq_no-r.seq_no)}getBlocks(e=20,t={}){return this.query(`
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
    `,{limit:e},{timeout:t.timeout??6e4,noCache:t.noCache}).pipe(p(n=>this.mapBlocksResponse(n)))}getLiveBlocks(e=20,t={}){return this.isShellnetEndpoint()?this.getBlocks(e,t):this.executeQuery(this.withCacheBuster(N,t.noCache),`
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
    `,{limit:e},{timeout:t.timeout??6e4}).pipe(p(n=>this.mapBlocksResponse(n)),m(n=>h(()=>this.normalizeQueryError(n))))}getLiveNonEmptyBlocks(e=80,t={}){return this.isShellnetEndpoint()?this.getBlocks(e,t):this.executeQuery(this.withCacheBuster(N,t.noCache),`
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
    `,{limit:e},{timeout:t.timeout??6e4}).pipe(p(n=>this.mapBlocksResponse(n)),m(n=>h(()=>this.normalizeQueryError(n))))}getTransactions(e=20){return this.query(`
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
    `,{limit:e},{timeout:6e4}).pipe(p(r=>[...r.blockchain?.transactions?.nodes??[]].sort((o,s)=>s.now-o.now||s.id.localeCompare(o.id))))}getMessages(e=20){let t=Math.min(Math.max(e*10,96),500);return this.query(`
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
    `,{txFetch:t},{timeout:6e4}).pipe(D(n=>{let o=this.collectRecentMessageRefs(n.blockchain?.transactions?.nodes??[],e);if(o.length===0)return E([]);let s=this.buildMessagesByHashQuery(o.length),u=Object.fromEntries(o.map((l,d)=>[`hash${d}`,l.id]));return this.query(s,u,{timeout:6e4}).pipe(p(l=>this.mergeMessageDetails(o,l.blockchain??{})),m(()=>E(this.messagesFromRefs(o))))}))}collectRecentMessageRefs(e,t){let r=new Map;for(let n of e){let o=n.now;if(n.in_msg){let s=r.get(n.in_msg);(s===void 0||o>s)&&r.set(n.in_msg,o)}for(let s of n.out_msgs??[]){let u=r.get(s);(u===void 0||o>u)&&r.set(s,o)}}return[...r.entries()].map(([n,o])=>({id:n,created_at:o})).sort((n,o)=>o.created_at-n.created_at).slice(0,t)}buildMessagesByHashQuery(e){let t=Array.from({length:e},(n,o)=>`$hash${o}: String!`).join(", "),r=Array.from({length:e},(n,o)=>`m${o}: message(hash: $hash${o}) { id src dst value(format: DEC) created_at msg_type_name }`).join(`
          `);return`
      query GetMessagesByHash(${t}) {
        blockchain {
          ${r}
        }
      }
    `}mergeMessageDetails(e,t){return e.map((r,n)=>{let o=t[`m${n}`];return o?{id:o.id||r.id,src:o.src?.trim()||void 0,dst:o.dst?.trim()||void 0,value:o.value??"0",msg_type:this.msgTypeCodeFromName(o.msg_type_name),created_at:o.created_at??r.created_at}:this.syntheticMessage(r)})}messagesFromRefs(e){return e.map(t=>this.syntheticMessage(t))}syntheticMessage(e){return{id:e.id,msg_type:null,value:null,created_at:e.created_at,synthetic:!0}}msgTypeCodeFromName(e){let t=(e??"").replace(/[^a-z]/gi,"").toLowerCase();return t?t.includes("internal")?0:t.includes("externalin")||t.includes("extin")?1:t.includes("externalout")||t.includes("extout")?2:null:null}accountQueryArgs(e,t,r,n=""){if(!e)return{varDecls:`$address${n}: String!`,argClause:`address: $address${n}`,variables:{[`address${n}`]:t}};let o=y(t),s=o?.accountId??t.trim().replace(/^-?\d+:/,"").toLowerCase(),u=r??o?.dappId??s;return{varDecls:`$accountId${n}: String!, $dappId${n}: String!`,argClause:`account_id: $accountId${n}, dapp_id: $dappId${n}`,variables:{[`accountId${n}`]:s,[`dappId${n}`]:u}}}isAccountSchemaMismatch(e){return/argument "(address|account_id|dapp_id)" of type "BlockchainQuery" is required but not provided/i.test(e)||/unknown argument "(address|account_id|dapp_id)"/i.test(e)}runAccountQuery(e,t={}){let r=(n,o,s)=>{let{query:u,variables:l}=e(n);return this.query(u,l,t).pipe($(()=>{this.preferredAccountSupports=n}),m(d=>{let f=d instanceof Error?d.message:String(d);if(this.isAccountSchemaMismatch(f)){if(o>0)return r(n,o-1,s);if(!s)return r(!n,O,!0)}return h(()=>d)}))};return r(this.preferredAccountSupports,O,!1)}queryAccount(e,t,r={}){let l=r,{dappId:n,suffix:o,extraVariables:s}=l,u=_(l,["dappId","suffix","extraVariables"]);return this.runAccountQuery(d=>{let f=this.accountQueryArgs(d,t,n,o);return{query:e(f),variables:g(g({},f.variables),s)}},u)}getAccountBoc(e,t={}){return this.queryAccount(r=>`
        query GetAccount(${r.varDecls}) {
          blockchain {
            account(${r.argClause}) {
              info {
                boc
              }
            }
          }
        }
      `,e,{noCache:t.noCache}).pipe(p(r=>r?.blockchain?.account?.info?.boc||null))}getAccountBocWithDappId(e,t={}){return this.queryAccount(r=>`
        query GetAccountBocDapp(${r.varDecls}) {
          blockchain {
            account(${r.argClause}) {
              info {
                boc
                dapp_id
              }
            }
          }
        }
      `,e,{noCache:t.noCache}).pipe(p(r=>({boc:r?.blockchain?.account?.info?.boc||null,dappId:r?.blockchain?.account?.info?.dapp_id||null})))}getAccountsBocs(e,t={}){let r=Array.from(new Set(e));return r.length===0?new b(n=>{n.next({}),n.complete()}):this.runAccountQuery(n=>{let o=r.map((d,f)=>this.accountQueryArgs(n,d,void 0,`_${f}`)),s=o.map(d=>d.varDecls).join(", "),u=o.map((d,f)=>`a${f}: account(${d.argClause}) { info { boc } }`).join(`
          `),l={};for(let d of o)Object.assign(l,d.variables);return{query:`
            query GetAccounts(${s}) {
              blockchain {
                ${u}
              }
            }
          `,variables:l}},{noCache:t.noCache}).pipe(p(n=>{let o={};return r.forEach((s,u)=>{o[s]=n?.blockchain?.[`a${u}`]?.info?.boc||null}),o}))}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();var M=a=>y(a)?.accountId??a.trim().toLowerCase(),c={accumulator:{address:"0:1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a",name:"Accumulator",displayName:"Accumulator (SHELL Exchange)",description:"Exchange contract for TIP-3 to native ECC USDC (ECC[3]) migration (AN Wallet). Callback onTransferReceived mints ECC USDC to users."},mobileVerifierRoot:{address:"0:2222222222222222222222222222222222222222222222222222222222222222",name:"Mobile Verifier Root",description:"Mobile verification root contract"},updateZeroContract:{address:"0:3333333333333333333333333333333333333333333333333333333333333333",name:"Update Zero Contract",description:"System updates and zero-state",updatable:!0},licenseRoot:{address:"0:4444444444444444444444444444444444444444444444444444444444444444",name:"License Root",description:"Licensing system root contract"},updateCustodianMultisigWallet:{address:"0:5555555555555555555555555555555555555555555555555555555555555555",name:"Update Custodian Multisig Wallet",description:"Custodian multisig update wallet",updatable:!0},blockManagerRoot:{address:"0:6666666666666666666666666666666666666666666666666666666666666666",name:"Block Manager Root",description:"Block production and validation",updatable:!0},blockKeeperRoot:{address:"0:7777777777777777777777777777777777777777777777777777777777777777",name:"Block Keeper Root",description:"Block storage and archival",updatable:!0},currencyCollectionConfig:{address:"0:8888888888888888888888888888888888888888888888888888888888888888",name:"Currency Collection Config",displayName:"Currency Config",description:"Configuration for extra currencies"},dappRootConfig:{address:"0:9999999999999999999999999999999999999999999999999999999999999999",name:"Dapp Root Config",description:"Decentralized app configuration"},usdcRoot:{address:"0:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",name:"USDC Root",description:"USDC root contract"},nacklExchange:{address:"0:3535353535353535353535353535353535353535353535353535353535353535",name:"NACKL Exchange",description:"USDC-backed exchange contract used by emission cross-checks"}},ie=c.accumulator.address,ce=c.mobileVerifierRoot.address,ue=c.updateZeroContract.address,de=c.licenseRoot.address,le=c.updateCustodianMultisigWallet.address,pe=c.blockManagerRoot.address,fe=c.blockKeeperRoot.address,he=c.currencyCollectionConfig.address,me=c.dappRootConfig.address,ge=c.usdcRoot.address,_e=c.nacklExchange.address,Ce=[c.accumulator,c.mobileVerifierRoot,c.updateZeroContract,c.licenseRoot,c.blockManagerRoot,c.blockKeeperRoot,c.currencyCollectionConfig,c.dappRootConfig,c.usdcRoot],F=Object.values(c).map(e=>{var t=e,{address:a}=t,i=_(t,["address"]);return[a,i]}),U=new Map(F.map(([a,i])=>[M(a),i])),P=new Map(F.map(([a,i])=>[i.name.trim().toLowerCase(),g({address:a},i)]));function R(a){if(a)return U.get(M(a))}function ye(a){return R(a)?.name}function Ee(a){if(a)return P.get(a.trim().toLowerCase())}function Ae(a){return!!R(a)?.updatable}function Re(a){let i=R(a);return i?i.routable!==!1:!0}export{x as a,Q as b,z as c,j as d,K as e,ne as f,c as g,ce as h,de as i,pe as j,fe as k,he as l,ge as m,_e as n,Ce as o,R as p,ye as q,Ee as r,Ae as s,Re as t};
