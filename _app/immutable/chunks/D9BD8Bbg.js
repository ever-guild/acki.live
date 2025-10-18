import{e as y}from"./BzX2F8xg.js";async function l(o,a={}){try{const t=await(await fetch(y.graphqlEndpoint,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({query:o,variables:a})})).json();return console.log("GraphQL Response:",t),t}catch(e){return console.error("GraphQL Error:",e),{data:null,errors:[e]}}}async function g(){var e;const a=await l(`
    query GetLatestBlocks($limit: Int!) {
      blocks(orderBy: [{ path: "gen_utime", direction: DESC }], limit: $limit) {
        id
        seq_no
        gen_utime
        gen_utime_string
        workchain_id
        shard
        tr_count
        status_name
        key_block
        hash
      }
    }
  `,{limit:20});if((e=a.data)!=null&&e.blocks)return a.data.blocks.map(t=>({height:t.seq_no||0,hash:t.hash||t.id||"",timestamp:t.gen_utime?new Date(t.gen_utime*1e3):new Date,txCount:t.tr_count||0,miner:"N/A",workchain_id:t.workchain_id,shard:t.shard,seq_no:t.seq_no}));throw new Error("Failed to fetch blocks")}async function w(){var e;const a=await l(`
    query GetLatestTransactions($limit: Int!) {
      transactions(orderBy: [{ path: "now", direction: DESC }], limit: $limit) {
        id
        account_addr
        now
        aborted
        balance_delta(format: DEC)
        total_fees(format: DEC)
        in_message {
          src
          value(format: DEC)
        }
        status_name
      }
    }
  `,{limit:25});if((e=a.data)!=null&&e.transactions)return a.data.transactions.map(t=>{var n,s;const m=(n=t.in_message)!=null&&n.value?parseFloat(t.in_message.value)/1e9:0;let d="success";return t.aborted?d="failed":(t.status_name==="Preliminary"||t.status_name==="Proposed")&&(d="pending"),{hash:t.id||"",from:((s=t.in_message)==null?void 0:s.src)||"N/A",to:t.account_addr||"N/A",amount:m,status:d,timestamp:t.now?new Date(t.now*1e3):new Date,aborted:t.aborted}});throw new Error("Failed to fetch transactions")}async function q(){var e;const a=await l(`
    query GetMessages {
      messages(limit: 20, orderBy: [{path: "created_at", direction: DESC}]) {
        id
        src
        dst
        value(format: DEC)
        created_at
        msg_type_name
        body
      }
    }
  `);if((e=a.data)!=null&&e.messages)return a.data.messages.map(t=>({id:t.id||"",from:t.src||"N/A",to:t.dst||"N/A",type:t.msg_type_name||"Unknown",data:t.body||"",timestamp:t.created_at?new Date(t.created_at*1e3):new Date,value:t.value,msg_type_name:t.msg_type_name}));throw new Error("Failed to fetch messages")}async function k(){var e,t;const o=`
    query GetInfo {
      info {
        lastBlockTime
        blocksLatency
      }
    }
  `,a=`
    query GetBlockStats($limit: Int!) {
      blocks(orderBy: [{ path: "gen_utime", direction: DESC }], limit: $limit) {
        gen_utime
        tr_count
      }
    }
  `;try{const[m,d]=await Promise.all([l(o),l(a,{limit:10})]),n=(e=m.data)==null?void 0:e.info,s=(t=d.data)==null?void 0:t.blocks;let u="~15s";if(s&&s.length>1){const i=s.map(r=>r.gen_utime).filter(Boolean);if(i.length>1){const r=[];for(let c=1;c<i.length;c++)r.push(Math.abs(i[c]-i[c-1]));u=`${(r.reduce((c,_)=>c+_,0)/r.length).toFixed(1)}s`}}const h=(s==null?void 0:s.reduce((i,r)=>i+(r.tr_count||0),0))||0;return{totalBlocks:n!=null&&n.lastBlockTime?Math.floor(n.lastBlockTime/15e3):1234567,totalTransactions:h*1e3||9876543,hashrate:"234.5 TH/s",activeAddresses:45678,avgBlockTime:u,difficulty:"12.34T",marketCap:"$1.23B",price:"$2,345.67"}}catch{throw new Error("Failed to fetch network stats")}}export{w as a,g as b,k as c,q as g};
