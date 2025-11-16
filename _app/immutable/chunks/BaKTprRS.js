import{e as m}from"./CNoRuncm.js";const o={GetInfo:`
    query GetInfo {
      info {
        lastBlockTime
        blocksLatency
      }
    }
  `,GetBlockStats:`
    query GetBlockStats($limit: Int!) {
      blocks(orderBy: [{ path: "gen_utime", direction: DESC }], limit: $limit) {
        gen_utime
        tr_count
      }
    }
  `,GetAccounts:`
    query GetAccounts {
      accounts(limit: 15, orderBy: [{path: "last_paid", direction: DESC}]) {
        id
        address
        acc_type_name
        last_paid
        code_hash
      }
    }
  `,GetMessages:`
    query GetMessages($limit: Int!) {
      messages(limit: $limit, orderBy: [{path: "created_at", direction: DESC}]) {
        id
        src
        dst
        value(format: DEC)
        created_at
        msg_type_name
      }
    }
  `,GetLatestTransactions:`
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
  `,GetLatestBlocks:`
    query GetLatestBlocks($limit: Int!) {
      blocks(orderBy: [{ path: "seq_no", direction: DESC }], limit: $limit) {
        seq_no
        gen_utime
        tr_count
        hash
      }
    }
  `,GetAccountBoc:`
    query GetAccount($address: String!) {
        account(address: $address) {
            info {
                boc
            }
        }
    }
  `,GetAccountTransactions:`
    query GetAccountTransactions($limit: Int!, $address: String!) {
      transactions(
        orderBy: [{ path: "now", direction: DESC }]
        limit: $limit
        filter: { account_addr: { eq: $address } }
      ) {
        id
        now
        now_string
        lt
        orig_status_name
        end_status_name
        total_fees(format: DEC)
        balance_delta(format: DEC)
        in_msg
        outmsg_cnt
        aborted
        compute {
          success
          exit_code
        }
        destroyed
      }
    }
  `};class _{async getStats(){var l,u;const[s,e]=await Promise.all([this.post(o.GetInfo),this.post(o.GetBlockStats,{limit:10})]),t=(l=s.data)==null?void 0:l.info,a=(u=e.data)==null?void 0:u.blocks;let n="~15s";if(a&&a.length>1){const i=a.map(r=>r.gen_utime).filter(Boolean);if(i.length>1){const r=[];for(let c=1;c<i.length;c++)r.push(Math.abs(i[c]-i[c-1]));n=`${(r.reduce((c,h)=>c+h,0)/r.length).toFixed(1)}s`}}const d=(a==null?void 0:a.reduce((i,r)=>i+(r.tr_count||0),0))||0;return{totalBlocks:t!=null&&t.lastBlockTime?Math.floor(t.lastBlockTime/15e3):1234567,totalTransactions:d*1e3||9876543,hashrate:"234.5 TH/s",activeAddresses:45678,avgBlockTime:n,difficulty:"12.34T",marketCap:"$1.23B",price:"$2,345.67"}}async getContracts(){var e;const s=await this.post(o.GetAccounts);if((e=s.data)!=null&&e.accounts)return s.data.accounts.filter(t=>t.acc_type_name==="Active"&&t.code_hash).map(t=>({address:t.address,created:t.last_paid}));throw new Error("Failed to fetch contracts")}async getMessages(s=20){const e=await this.post(o.GetMessages,{limit:s});if(e!=null&&e.messages)return e.messages.map(t=>({id:t.id,from:t.src,to:t.dst,type:t.msg_type_name,data:t.body,timestamp:new Date(t.created_at*1e3),value:t.value,msg_type_name:t.msg_type_name}));throw new Error("Failed to fetch messages")}async getLatestTransactions(s=25){const e=await this.post(o.GetLatestTransactions,{limit:s});if(e!=null&&e.transactions)return e.transactions.map(t=>{var d,l;const a=(d=t.in_message)!=null&&d.value?parseFloat(t.in_message.value)/1e9:0;let n="pending";return t.aborted?n="failed":t.status_name==="Finalized"&&(n="success"),{hash:t.id,from:(l=t.in_message)==null?void 0:l.src,to:t.account_addr,amount:a,status:n,timestamp:new Date(t.now*1e3)}});throw new Error("Failed to fetch transactions")}async getLatestBlocks(s=20){const e=await this.post(o.GetLatestBlocks,{limit:s});if(e!=null&&e.blocks)return e.blocks.map(a=>({height:a.seq_no||0,hash:a.hash||"",timestamp:new Date(a.gen_utime*1e3),txCount:a.tr_count||0}));throw new Error("Failed to fetch blocks")}async getAccountBoc(s){var t,a;const e=await this.post(o.GetAccountBoc,{address:s});if((t=e.account)!=null&&t.info)return((a=e.account)==null?void 0:a.info.boc)||null;throw new Error("Account not found")}async getAccountTransactions(s){const e=await this.post(o.GetAccountTransactions,{address:s,limit:20});if(e!=null&&e.transactions)return e.transactions;throw new Error("No transactions found")}async request(s,e,t){const n=await(await fetch(m.graphqlEndpoint,{method:s,headers:{"Content-Type":"text/plain"},body:JSON.stringify({query:e,variables:t})})).json();return m.develop&&console.warn("GraphQL response:",n),n.errors?(console.error("Error loading data:",n.errors),null):n.data}post(s,e={}){return this.request("POST",s,e)}}const y=new _;export{y as g};
