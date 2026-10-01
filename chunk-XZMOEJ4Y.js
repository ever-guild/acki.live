import{d as N}from"./chunk-BXJNHH7V.js";import{D as A,L as P,N as D,P as _,h as v,i as f,l as $,m as I,n as p,s as k,u as C,uc as y,vc as T,w}from"./chunk-AGICBAG2.js";import{a as d,b as q,c as E}from"./chunk-IMPBB4AK.js";var S={production:!0,showApplications:!1,api:"https://acki.live",graphqlEndpoint:"https://api.acki.live/graphql ",buyShellApiBaseUrl:"https://buy.acki.live",buyEnabled:!1,showNodeIps:!1};function L(a){return(a?.edges??[]).map(l=>l.node)}function G(a){let l=a.out_messages;return!Array.isArray(l)||!l.some(e=>e==null)?a:q(d({},a),{out_messages:l.filter(e=>e!=null)})}var Q="https://mainnet.ackinacki.org/graphql",M=new D("GRAPHQL_ENDPOINT",{providedIn:"root",factory:()=>S.graphqlEndpoint}),B="id src dst value(format: DEC) created_at msg_type_name",R=`in_message { ${B} } out_messages { ${B} }`,F=25,O=`
  id
  now
  account_addr
  total_fees(format: DEC)
  balance_delta(format: DEC)
  status
  aborted
  in_message { id src dst value(format: DEC) value_other { currency value(format: DEC) } msg_type_name }
  out_messages { id src dst value(format: DEC) value_other { currency value(format: DEC) } msg_type_name }
`;function b(a){return(a??[]).filter(l=>!!l?.cursor&&!!l.node).reverse()}function j(a){let l=(a.out_messages??[]).filter(e=>!!e?.id).reverse();return a.in_message?.id&&!a.in_message.src?.trim()&&l.push(a.in_message),l}var ee=(()=>{class a{constructor(){this.endpoint=_(M),this.http=_(T)}isTransientTransportError(e){return e instanceof y?e.status===0||e.status>=500:e instanceof Error?e.name==="TimeoutError"||/pool timed out|timed out while waiting|connection|interrupted|request timeout|timeout has occurred/i.test(e.message):!1}normalizeQueryError(e){return e instanceof y?e.status===0?new Error("Unable to reach the GraphQL endpoint. Retry connection."):e.status>=500?new Error("GraphQL endpoint returned a server error. Retry connection."):new Error(e.message||"GraphQL request failed."):e instanceof Error&&e.name==="TimeoutError"?new Error("GraphQL request timed out. Retry connection."):e instanceof Error?e:new Error("GraphQL request failed.")}resolveEndpoint(){return this.endpoint.trim()||Q}executeQuery(e,n,t,r={}){return this.http.post(e,JSON.stringify({query:n,variables:t}),{headers:{"Content-Type":"text/plain"},transferCache:!r.noCache}).pipe(I(r.timeout??8e3),p(o=>{if(o.errors)throw new Error(o.errors[0].message);if(!o.data)throw new Error("No data returned from GraphQL query");return o.data}),A({count:2,delay:(o,s)=>this.isTransientTransportError(o)?C(250*s):f(()=>o)}))}query(e,n,t={}){return this.executeQuery(this.resolveEndpoint(),e,n,t).pipe(w(r=>f(()=>this.normalizeQueryError(r))))}mapBlocksResponse(e){return L(e.blockchain?.blocks).map(t=>({id:t.hash,seq_no:t.seq_no,gen_utime:t.gen_utime,tr_count:t.tr_count,hash:t.hash})).sort((t,r)=>r.seq_no-t.seq_no)}getBlocks(e=20,n={}){return this.query(`
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
    `,{count:n,before:e},{timeout:6e4}).pipe(p(r=>{let o=r.blockchain?.blocks,s=b(o?.edges);return{items:s.map(({node:c})=>({id:c.hash,seq_no:c.seq_no,gen_utime:c.gen_utime,tr_count:c.tr_count,hash:c.hash})),before:s.at(-1)?.cursor??e,hasMore:!!o?.pageInfo?.hasPreviousPage&&s.length>0}}))}getTransactionsPage(e,n=20){let t=`
      query TransactionsPage($count: Int!, $before: String) {
        blockchain {
          transactions(last: $count, before: $before) {
            edges { cursor node { ${O} } }
            pageInfo { hasPreviousPage }
          }
        }
      }
    `;return this.query(t,{count:n,before:e},{timeout:6e4}).pipe(p(r=>{let o=r.blockchain?.transactions,s=b(o?.edges);return{items:s.map(({node:c})=>G(c)),before:s.at(-1)?.cursor??e,hasMore:!!o?.pageInfo?.hasPreviousPage&&s.length>0}}))}getMessagesPage(e,n=20){let t=`
      query MessagesPage($count: Int!, $before: String) {
        blockchain {
          transactions(last: $count, before: $before) {
            edges { cursor node { ${R} } }
            pageInfo { hasPreviousPage }
          }
        }
      }
    `;return k(async()=>{let r=[],o=new Set,s=e,c=!0;for(;r.length<n&&c;){let u=(await $(this.query(t,{count:F,before:s},{timeout:6e4}))).blockchain?.transactions,h=b(u?.edges);for(let{node:m}of h)for(let g of j(m))o.has(g.id)||(o.add(g.id),r.push(this.toMessage(g)));c=!!u?.pageInfo?.hasPreviousPage&&h.length>0,h.length>0&&(s=h[h.length-1].cursor)}return{items:r,before:s,hasMore:c}})}toMessage(e){return{id:e.id,src:e.src?.trim()||void 0,dst:e.dst?.trim()||void 0,value:e.value??null,msg_type:this.msgTypeCodeFromName(e.msg_type_name),created_at:e.created_at??0}}msgTypeCodeFromName(e){let n=(e??"").replace(/[^a-z]/gi,"").toLowerCase();return n?n.includes("internal")?0:n.includes("externalin")||n.includes("extin")?1:n.includes("externalout")||n.includes("extout")?2:null:null}accountQueryArgs(e,n,t=""){let r=N(e),o=r?.accountId??e.trim().replace(/^-?\d+:/,"").toLowerCase(),s=n??r?.dappId??o;return{varDecls:`$accountId${t}: String!, $dappId${t}: String!`,argClause:`account_id: $accountId${t}, dapp_id: $dappId${t}`,variables:{[`accountId${t}`]:o,[`dappId${t}`]:s}}}queryAccount(e,n,t={}){let u=t,{dappId:r,suffix:o,extraVariables:s}=u,c=E(u,["dappId","suffix","extraVariables"]),i=this.accountQueryArgs(n,r,o);return this.query(e(i),d(d({},i.variables),s),c)}getAccountBoc(e,n={}){return this.queryAccount(t=>`
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
      `,e,{noCache:n.noCache}).pipe(p(t=>({boc:t?.blockchain?.account?.info?.boc||null,dappId:t?.blockchain?.account?.info?.dapp_id||null})))}getAccountsBocs(e,n={}){let t=Array.from(new Set(e));if(t.length===0)return v({});let r=t.map((i,u)=>this.accountQueryArgs(i,void 0,`_${u}`)),o=r.map(i=>i.varDecls).join(", "),s=r.map((i,u)=>`a${u}: account(${i.argClause}) { info { boc } }`).join(`
          `),c={};for(let i of r)Object.assign(c,i.variables);return this.query(`
        query GetAccounts(${o}) {
          blockchain {
            ${s}
          }
        }
      `,c,{noCache:n.noCache}).pipe(p(i=>{let u={};return t.forEach((h,m)=>{u[h]=i?.blockchain?.[`a${m}`]?.info?.boc||null}),u}))}static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275prov=P({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();export{S as a,L as b,G as c,ee as d};
