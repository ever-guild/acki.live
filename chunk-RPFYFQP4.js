import{D as w,E as S,G as g,L as v,N as q,P as y,c as k,h as C,i as m,m as I,mc as L,n as u,na as T,pc as A,qc as N,t as $,w as h}from"./chunk-RLXXVR6I.js";import{a as b,c as D}from"./chunk-C6Q5SG76.js";var x={production:!0,showApplications:!1,api:"https://acki.live",graphqlEndpoint:"https://mainnet.ackinacki.org/graphql",buyShellApiBaseUrl:"https://buy.acki.live"};function P(s){let i=s.trim(),e=i.match(/^(-?\d+):([a-fA-F0-9]+)$/);return e?`${String(Number(e[1]))}:${e[2].toLowerCase()}`:i.toLowerCase()}function Z(s){let i=P(s),e=[],t=new Set,n=o=>{let a=o.trim();!a||t.has(a)||(t.add(a),e.push(a))};n(i);let r=i.match(/^(-?\d+):([a-f0-9]+)$/i);return r?.[2]&&n(r[2]),e}function Y(s){let i=s.trim();return!!(/^(-1:|0:)[a-fA-F0-9]{64}$/i.test(i)||/^[a-fA-F0-9]{64}::[a-fA-F0-9]{64}$/i.test(i))}function J(s){return/^[a-fA-F0-9]{64}$/i.test(s.trim())}function E(s){if(!s)return null;let i=s.trim(),e=i.match(/^([a-fA-F0-9]{64})::([a-fA-F0-9]{64})$/);if(e)return{dappId:e[1].toLowerCase(),accountId:e[2].toLowerCase()};let t=i.match(/^(-?\d+):([a-fA-F0-9]{64})$/);if(t)return{workchain:Number(t[1]),accountId:t[2].toLowerCase()};let n=i.match(/^([a-fA-F0-9]{64})$/);return n?{accountId:n[1].toLowerCase()}:null}var V="0.16.3";function z(s,i){let e=s.trim().split("."),t=i.trim().split("."),n=Math.max(e.length,t.length);for(let r=0;r<n;r++){let o=Number.parseInt(e[r]??"0",10)||0,a=Number.parseInt(t[r]??"0",10)||0;if(o<a)return-1;if(o>a)return 1}return 0}function B(s){return s?z(s,V)>=0:!1}var M="https://mainnet.ackinacki.org/graphql",O="https://archive.acki.live/graphql",H=new q("GRAPHQL_ENDPOINT",{providedIn:"root",factory:()=>x.graphqlEndpoint}),de=(()=>{class s{constructor(){this.endpoint=y(H),this.http=y(N),this.platformId=y(T),this.isBrowser=L(this.platformId)}isTransientTransportError(e){return e instanceof A?e.status===0||e.status>=500:e instanceof Error?e.name==="TimeoutError"||/pool timed out|timed out while waiting|connection/i.test(e.message):!1}normalizeQueryError(e){return e instanceof A?e.status===0?new Error("Unable to reach the GraphQL endpoint. Retry connection."):e.status>=500?new Error("GraphQL endpoint returned a server error. Retry connection."):new Error(e.message||"GraphQL request failed."):e instanceof Error&&e.name==="TimeoutError"?new Error("GraphQL request timed out. Retry connection."):e instanceof Error?e:new Error("GraphQL request failed.")}buildEndpointCandidates(e={}){let n=this.endpoint.trim()||M;if(e.allowFailover===!1||this.isBrowser)return n?[n]:[];let r=[n,M].filter(Boolean);return[...new Set(r)]}withCacheBuster(e,t=!1){return t?`${e}${e.includes("?")?"&":"?"}_ts=${Date.now()}`:e}executeQuery(e,t,n,r={}){return this.http.post(e,JSON.stringify({query:t,variables:n}),{headers:{"Content-Type":"text/plain"}}).pipe(I(r.timeout??8e3),u(o=>{if(o.errors)throw new Error(o.errors[0].message);if(!o.data)throw new Error("No data returned from GraphQL query");return o.data}),w({count:2,delay:(o,a)=>this.isTransientTransportError(o)?$(250*a):m(()=>o)}))}queryWithFailover(e,t,n,r={},o=0){let a=this.withCacheBuster(e[o],r.noCache);return this.executeQuery(a,t,n,r).pipe(h(d=>!(o<e.length-1)||!this.isTransientTransportError(d)?m(()=>this.normalizeQueryError(d)):this.queryWithFailover(e,t,n,r,o+1)))}query(e,t,n={}){return this.queryWithFailover(this.buildEndpointCandidates({allowFailover:n.allowFailover}),e,t,n)}isShellnetEndpoint(){return this.endpoint.toLowerCase().includes("shellnet.ackinacki.org/graphql")}mapBlocksResponse(e){return(e.blockchain?.blocks?.nodes??[]).map(n=>({id:n.hash,seq_no:n.seq_no,gen_utime:n.gen_utime,tr_count:n.tr_count,hash:n.hash})).sort((n,r)=>r.seq_no-n.seq_no)}getBlocks(e=20,t={}){return this.query(`
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
    `,{limit:e},{timeout:t.timeout??6e4,noCache:t.noCache}).pipe(u(r=>this.mapBlocksResponse(r)))}getLiveBlocks(e=20,t={}){return this.isShellnetEndpoint()?this.getBlocks(e,t):this.executeQuery(this.withCacheBuster(O,t.noCache),`
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
    `,{limit:e},{timeout:t.timeout??6e4}).pipe(u(r=>this.mapBlocksResponse(r)),h(r=>m(()=>this.normalizeQueryError(r))))}getLiveNonEmptyBlocks(e=80,t={}){return this.isShellnetEndpoint()?this.getBlocks(e,t):this.executeQuery(this.withCacheBuster(O,t.noCache),`
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
    `,{limit:e},{timeout:t.timeout??6e4}).pipe(u(r=>this.mapBlocksResponse(r)),h(r=>m(()=>this.normalizeQueryError(r))))}getTransactions(e=20){return this.query(`
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
    `,{limit:e},{timeout:6e4}).pipe(u(n=>[...n.blockchain?.transactions?.nodes??[]].sort((o,a)=>a.now-o.now||a.id.localeCompare(o.id))))}getMessages(e=20){let t=Math.min(Math.max(e*10,96),500);return this.query(`
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
    `,{txFetch:t},{timeout:6e4}).pipe(g(r=>{let o=this.collectRecentMessageRefs(r.blockchain?.transactions?.nodes??[],e);if(o.length===0)return C([]);let a=this.buildMessagesByHashQuery(o.length),d=Object.fromEntries(o.map((p,_)=>[`hash${_}`,p.id]));return this.query(a,d,{timeout:6e4}).pipe(u(p=>this.mergeMessageDetails(o,p.blockchain??{})),h(()=>C(this.messagesFromRefs(o))))}))}collectRecentMessageRefs(e,t){let n=new Map;for(let r of e){let o=r.now;if(r.in_msg){let a=n.get(r.in_msg);(a===void 0||o>a)&&n.set(r.in_msg,o)}for(let a of r.out_msgs??[]){let d=n.get(a);(d===void 0||o>d)&&n.set(a,o)}}return[...n.entries()].map(([r,o])=>({id:r,created_at:o})).sort((r,o)=>o.created_at-r.created_at).slice(0,t)}buildMessagesByHashQuery(e){let t=Array.from({length:e},(r,o)=>`$hash${o}: String!`).join(", "),n=Array.from({length:e},(r,o)=>`m${o}: message(hash: $hash${o}) { id src dst value(format: DEC) created_at msg_type_name }`).join(`
          `);return`
      query GetMessagesByHash(${t}) {
        blockchain {
          ${n}
        }
      }
    `}mergeMessageDetails(e,t){return e.map((n,r)=>{let o=t[`m${r}`];return o?{id:o.id||n.id,src:o.src?.trim()||void 0,dst:o.dst?.trim()||void 0,value:o.value??"0",msg_type:this.msgTypeCodeFromName(o.msg_type_name),created_at:o.created_at??n.created_at}:this.syntheticMessage(n)})}messagesFromRefs(e){return e.map(t=>this.syntheticMessage(t))}syntheticMessage(e){return{id:e.id,msg_type:null,value:null,created_at:e.created_at,synthetic:!0}}msgTypeCodeFromName(e){let t=(e??"").replace(/[^a-z]/gi,"").toLowerCase();return t?t.includes("internal")?0:t.includes("externalin")||t.includes("extin")?1:t.includes("externalout")||t.includes("extout")?2:null:null}getNodeVersion(){if(!this.nodeVersion$){let e="query NodeVersion { info { version } }";this.nodeVersion$=this.query(e).pipe(u(t=>t?.info?.version??""),h(()=>C("")),S({bufferSize:1,refCount:!1}))}return this.nodeVersion$}supportsDappId(){return this.getNodeVersion().pipe(u(e=>B(e)))}accountQueryArgs(e,t,n,r=""){if(!e)return{varDecls:`$address${r}: String!`,argClause:`address: $address${r}`,variables:{[`address${r}`]:t}};let o=E(t),a=o?.accountId??t.trim().replace(/^-?\d+:/,"").toLowerCase(),d=n??o?.dappId??a;return{varDecls:`$accountId${r}: String!, $dappId${r}: String!`,argClause:`account_id: $accountId${r}, dapp_id: $dappId${r}`,variables:{[`accountId${r}`]:a,[`dappId${r}`]:d}}}resolveAccountQueryArgs(e,t){return this.supportsDappId().pipe(u(n=>this.accountQueryArgs(n,e,t)))}getAccountBoc(e,t={}){return this.resolveAccountQueryArgs(e).pipe(g(({varDecls:n,argClause:r,variables:o})=>{let a=`
          query GetAccount(${n}) {
            blockchain {
              account(${r}) {
                info {
                  boc
                }
              }
            }
          }
        `;return this.query(a,o,{noCache:t.noCache})}),u(n=>n?.blockchain?.account?.info?.boc||null))}getAccountBocWithDappId(e,t={}){return this.resolveAccountQueryArgs(e).pipe(g(({varDecls:n,argClause:r,variables:o})=>{let a=`
          query GetAccountBocDapp(${n}) {
            blockchain {
              account(${r}) {
                info {
                  boc
                  dapp_id
                }
              }
            }
          }
        `;return this.query(a,o,{noCache:t.noCache})}),u(n=>({boc:n?.blockchain?.account?.info?.boc||null,dappId:n?.blockchain?.account?.info?.dapp_id||null})))}getAccountsBocs(e,t={}){let n=Array.from(new Set(e));return n.length===0?new k(r=>{r.next({}),r.complete()}):this.supportsDappId().pipe(g(r=>{let o=n.map((l,f)=>this.accountQueryArgs(r,l,void 0,`_${f}`)),a=o.map(l=>l.varDecls).join(", "),d=o.map((l,f)=>`a${f}: account(${l.argClause}) { info { boc } }`).join(`
          `),p=`
          query GetAccounts(${a}) {
            blockchain {
              ${d}
            }
          }
        `,_={};for(let l of o)Object.assign(_,l.variables);return this.query(p,_,{noCache:t.noCache}).pipe(u(l=>{let f={};return n.forEach((G,U)=>{f[G]=l?.blockchain?.[`a${U}`]?.info?.boc||null}),f}))}))}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275prov=v({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var F=s=>E(s)?.accountId??s.trim().toLowerCase(),c={accumulator:{address:"0:1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a",name:"Accumulator",displayName:"Accumulator (SHELL Exchange)",description:"Exchange contract for TIP-3 to native ECC USDC (ECC[3]) migration (AN Wallet). Callback onTransferReceived mints ECC USDC to users."},mobileVerifierRoot:{address:"0:2222222222222222222222222222222222222222222222222222222222222222",name:"Mobile Verifier Root",description:"Mobile verification root contract"},updateZeroContract:{address:"0:3333333333333333333333333333333333333333333333333333333333333333",name:"Update Zero Contract",description:"System updates and zero-state",updatable:!0},licenseRoot:{address:"0:4444444444444444444444444444444444444444444444444444444444444444",name:"License Root",description:"Licensing system root contract"},updateCustodianMultisigWallet:{address:"0:5555555555555555555555555555555555555555555555555555555555555555",name:"Update Custodian Multisig Wallet",description:"Custodian multisig update wallet",updatable:!0},blockManagerRoot:{address:"0:6666666666666666666666666666666666666666666666666666666666666666",name:"Block Manager Root",description:"Block production and validation",updatable:!0},blockKeeperRoot:{address:"0:7777777777777777777777777777777777777777777777777777777777777777",name:"Block Keeper Root",description:"Block storage and archival",updatable:!0},currencyCollectionConfig:{address:"0:8888888888888888888888888888888888888888888888888888888888888888",name:"Currency Collection Config",displayName:"Currency Config",description:"Configuration for extra currencies"},dappRootConfig:{address:"0:9999999999999999999999999999999999999999999999999999999999999999",name:"Dapp Root Config",description:"Decentralized app configuration"},usdcRoot:{address:"0:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",name:"USDC Root",description:"USDC root contract"},nacklExchange:{address:"0:3535353535353535353535353535353535353535353535353535353535353535",name:"NACKL Exchange",description:"USDC-backed exchange contract used by emission cross-checks"}},fe=c.accumulator.address,he=c.mobileVerifierRoot.address,me=c.updateZeroContract.address,ge=c.licenseRoot.address,_e=c.updateCustodianMultisigWallet.address,Ce=c.blockManagerRoot.address,ye=c.blockKeeperRoot.address,Ee=c.currencyCollectionConfig.address,Ae=c.dappRootConfig.address,Re=c.usdcRoot.address,be=c.nacklExchange.address,De=[c.accumulator,c.mobileVerifierRoot,c.updateZeroContract,c.licenseRoot,c.blockManagerRoot,c.blockKeeperRoot,c.currencyCollectionConfig,c.dappRootConfig,c.usdcRoot],Q=Object.values(c).map(e=>{var t=e,{address:s}=t,i=D(t,["address"]);return[s,i]}),j=new Map(Q.map(([s,i])=>[F(s),i])),K=new Map(Q.map(([s,i])=>[i.name.trim().toLowerCase(),b({address:s},i)]));function R(s){if(s)return j.get(F(s))}function ke(s){return R(s)?.name}function Ie(s){if(s)return K.get(s.trim().toLowerCase())}function $e(s){return!!R(s)?.updatable}function we(s){let i=R(s);return i?i.routable!==!1:!0}export{x as a,P as b,Z as c,Y as d,J as e,de as f,c as g,he as h,ge as i,Ce as j,ye as k,Ee as l,Re as m,be as n,De as o,R as p,ke as q,Ie as r,$e as s,we as t};
