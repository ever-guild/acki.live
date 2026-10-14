import{d as B}from"./chunk-YL3NXGYT.js";import{Ac as f,Bc as D,D as T,L as G,N as q,P as g,h as C,i as m,l as L,m as P,n as p,s as w,u as N,w as E}from"./chunk-IBMYI4TS.js";import{a as d,b as v,c as $}from"./chunk-AY4LCFTV.js";var _={production:!0,showApplications:!1,api:"https://acki.live",graphqlEndpoint:"https://api.acki.live/graphql ",buyShellApiBaseUrl:"https://buy.acki.live",buyEnabled:!1,showNodeIps:!1,mainnetFallback:!0};function Q(a){return(a?.edges??[]).map(l=>l.node)}function S(a){let l=a.out_messages;return!Array.isArray(l)||!l.some(e=>e==null)?a:v(d({},a),{out_messages:l.filter(e=>e!=null)})}var k="https://mainnet.ackinacki.org/graphql",A="https://api.acki.live/graphql",F="/graphql-block-manager",M=new q("GRAPHQL_ENDPOINT",{providedIn:"root",factory:()=>_.graphqlEndpoint}),O=new q("GRAPHQL_MAINNET_FALLBACK",{providedIn:"root",factory:()=>_.mainnetFallback}),R="id src dst value(format: DEC) created_at msg_type_name",H=`in_message { ${R} } out_messages { ${R} }`,j=25,x=`
  id
  now
  account_addr
  total_fees(format: DEC)
  balance_delta(format: DEC)
  status
  aborted
  in_message { id src dst value(format: DEC) value_other { currency value(format: DEC) } msg_type_name }
  out_messages { id src dst value(format: DEC) value_other { currency value(format: DEC) } msg_type_name }
`;function I(a){return(a??[]).filter(l=>!!l?.cursor&&!!l.node).reverse()}function K(a){let l=(a.out_messages??[]).filter(e=>!!e?.id).reverse();return a.in_message?.id&&!a.in_message.src?.trim()&&l.push(a.in_message),l}var re=(()=>{class a{constructor(){this.endpoint=g(M),this.mainnetFallback=g(O),this.http=g(D)}isTransientTransportError(e){return e instanceof f?e.status===0||e.status>=500:e instanceof Error?e.name==="TimeoutError"||/pool timed out|timed out while waiting|connection|interrupted|request timeout|timeout has occurred/i.test(e.message):!1}normalizeQueryError(e){return e instanceof f?e.status===0?new Error("Unable to reach the GraphQL endpoint. Retry connection."):e.status>=500?new Error("GraphQL endpoint returned a server error. Retry connection."):new Error(e.message||"GraphQL request failed."):e instanceof Error&&e.name==="TimeoutError"?new Error("GraphQL request timed out. Retry connection."):e instanceof Error?e:new Error("GraphQL request failed.")}resolveEndpoint(){return this.endpoint.trim()||k}fallbackEndpointFor(e){return e==="/graphql"?_.production?A:F:e===k?A:e===A&&this.mainnetFallback?k:null}executeQuery(e,n,t,r={}){return this.http.post(e,JSON.stringify({query:n,variables:t}),{headers:{"Content-Type":"text/plain"},transferCache:!r.noCache}).pipe(P(r.timeout??8e3),p(s=>{if(s.errors)throw new Error(s.errors[0].message);if(!s.data)throw new Error("No data returned from GraphQL query");return s.data}),T({count:2,delay:(s,o)=>this.isTransientTransportError(s)?N(250*o):m(()=>s)}))}query(e,n,t={}){let r=this.resolveEndpoint(),s=this.fallbackEndpointFor(r);return this.executeQuery(r,e,n,t).pipe(E(o=>{let i=o instanceof f?o.status===0||o.status===429||o.status>=500:o instanceof Error&&/All BK API endpoints failed/i.test(o.message);return s&&i?this.executeQuery(s,e,n,t):m(()=>o)}),E(o=>m(()=>this.normalizeQueryError(o))))}mapBlocksResponse(e){return Q(e.blockchain?.blocks).map(t=>({id:t.hash,seq_no:t.seq_no,gen_utime:t.gen_utime,tr_count:t.tr_count,hash:t.hash})).sort((t,r)=>r.seq_no-t.seq_no)}getBlocks(e=20,n={}){return this.query(`
      query GetBlocks($limit: Int!) {
        blockchain {
          blocks(last: $limit) {
            edges {
              node {
                seq_no
                gen_utime
                tr_count
                hash
              }
            }
          }
        }
      }
    `,{limit:e},{timeout:n.timeout??6e4,noCache:n.noCache}).pipe(p(r=>this.mapBlocksResponse(r)))}getLiveBlocks(e=20,n={}){return this.query(`
      query GetLiveBlocks($limit: Int!) {
        blockchain {
          blocks(last: $limit, allow_latest_inconsistent_data: true) {
            edges {
              node {
                seq_no
                gen_utime
                tr_count
                hash
              }
            }
          }
        }
      }
    `,{limit:e},{timeout:n.timeout??15e3,noCache:n.noCache}).pipe(p(r=>this.mapBlocksResponse(r)))}getLiveNonEmptyBlocks(e=80,n={}){return this.query(`
      query GetLiveNonEmptyBlocks($limit: Int!) {
        blockchain {
          blocks(last: $limit, allow_latest_inconsistent_data: true, min_tr_count: 1) {
            edges {
              node {
                seq_no
                gen_utime
                tr_count
                hash
              }
            }
          }
        }
      }
    `,{limit:e},{timeout:n.timeout??15e3,noCache:n.noCache}).pipe(p(r=>this.mapBlocksResponse(r)))}getBlocksPage(e,n=20){return this.query(`
      query BlocksPage($count: Int!, $before: String) {
        blockchain {
          blocks(last: $count, before: $before) {
            edges { cursor node { seq_no gen_utime tr_count hash } }
            pageInfo { hasPreviousPage }
          }
        }
      }
    `,{count:n,before:e},{timeout:6e4}).pipe(p(r=>{let s=r.blockchain?.blocks,o=I(s?.edges);return{items:o.map(({node:i})=>({id:i.hash,seq_no:i.seq_no,gen_utime:i.gen_utime,tr_count:i.tr_count,hash:i.hash})),before:o.at(-1)?.cursor??e,hasMore:!!s?.pageInfo?.hasPreviousPage&&o.length>0}}))}getTransactionsPage(e,n=20){let t=`
      query TransactionsPage($count: Int!, $before: String) {
        blockchain {
          transactions(last: $count, before: $before) {
            edges { cursor node { ${x} } }
            pageInfo { hasPreviousPage }
          }
        }
      }
    `;return this.query(t,{count:n,before:e},{timeout:6e4}).pipe(p(r=>{let s=r.blockchain?.transactions,o=I(s?.edges);return{items:o.map(({node:i})=>S(i)),before:o.at(-1)?.cursor??e,hasMore:!!s?.pageInfo?.hasPreviousPage&&o.length>0}}))}getMessagesPage(e,n=20){let t=`
      query MessagesPage($count: Int!, $before: String) {
        blockchain {
          transactions(last: $count, before: $before) {
            edges { cursor node { ${H} } }
            pageInfo { hasPreviousPage }
          }
        }
      }
    `;return w(async()=>{let r=[],s=new Set,o=e,i=!0;for(;r.length<n&&i;){let u=(await L(this.query(t,{count:j,before:o},{timeout:6e4}))).blockchain?.transactions,h=I(u?.edges);for(let{node:y}of h)for(let b of K(y))s.has(b.id)||(s.add(b.id),r.push(this.toMessage(b)));i=!!u?.pageInfo?.hasPreviousPage&&h.length>0,h.length>0&&(o=h[h.length-1].cursor)}return{items:r,before:o,hasMore:i}})}toMessage(e){return{id:e.id,src:e.src?.trim()||void 0,dst:e.dst?.trim()||void 0,value:e.value??null,msg_type:this.msgTypeCodeFromName(e.msg_type_name),created_at:e.created_at??0}}msgTypeCodeFromName(e){let n=(e??"").replace(/[^a-z]/gi,"").toLowerCase();return n?n.includes("internal")?0:n.includes("externalin")||n.includes("extin")?1:n.includes("externalout")||n.includes("extout")?2:null:null}accountQueryArgs(e,n,t=""){let r=B(e),s=r?.accountId??e.trim().replace(/^-?\d+:/,"").toLowerCase(),o=n??r?.dappId??s;return{varDecls:`$accountId${t}: String!, $dappId${t}: String!`,argClause:`account_id: $accountId${t}, dapp_id: $dappId${t}`,variables:{[`accountId${t}`]:s,[`dappId${t}`]:o}}}queryAccount(e,n,t={}){let u=t,{dappId:r,suffix:s,extraVariables:o}=u,i=$(u,["dappId","suffix","extraVariables"]),c=this.accountQueryArgs(n,r,s);return this.query(e(c),d(d({},c.variables),o),i)}getAccountBoc(e,n={}){return this.queryAccount(t=>`
        query GetAccount(${t.varDecls}) {
          blockchain {
            account(${t.argClause}) {
              info {
                boc
              }
            }
          }
        }
      `,e,{noCache:n.noCache}).pipe(p(t=>t?.blockchain?.account?.info?.boc||null))}getAccountBocWithDappId(e,n={}){return this.queryAccount(t=>`
        query GetAccountBocDapp(${t.varDecls}) {
          blockchain {
            account(${t.argClause}) {
              info {
                boc
                dapp_id
              }
            }
          }
        }
      `,e,{noCache:n.noCache}).pipe(p(t=>({boc:t?.blockchain?.account?.info?.boc||null,dappId:t?.blockchain?.account?.info?.dapp_id||null})))}getAccountsBocs(e,n={}){let t=Array.from(new Set(e));if(t.length===0)return C({});let r=t.map((c,u)=>this.accountQueryArgs(c,void 0,`_${u}`)),s=r.map(c=>c.varDecls).join(", "),o=r.map((c,u)=>`a${u}: account(${c.argClause}) { info { boc } }`).join(`
          `),i={};for(let c of r)Object.assign(i,c.variables);return this.query(`
        query GetAccounts(${s}) {
          blockchain {
            ${o}
          }
        }
      `,i,{noCache:n.noCache}).pipe(p(c=>{let u={};return t.forEach((h,y)=>{u[h]=c?.blockchain?.[`a${y}`]?.info?.boc||null}),u}))}static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275prov=G({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();export{_ as a,Q as b,S as c,re as d};
