import{e as m}from"./BdcfehaN.js";const n={GetInfo:`
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
  `};class _{async getStats(){var l,u;const[a,e]=await Promise.all([this.post(n.GetInfo),this.post(n.GetBlockStats,{limit:10})]),t=(l=a.data)==null?void 0:l.info,s=(u=e.data)==null?void 0:u.blocks;let o="~15s";if(s&&s.length>1){const i=s.map(r=>r.gen_utime).filter(Boolean);if(i.length>1){const r=[];for(let c=1;c<i.length;c++)r.push(Math.abs(i[c]-i[c-1]));o=`${(r.reduce((c,h)=>c+h,0)/r.length).toFixed(1)}s`}}const d=(s==null?void 0:s.reduce((i,r)=>i+(r.tr_count||0),0))||0;return{totalBlocks:t!=null&&t.lastBlockTime?Math.floor(t.lastBlockTime/15e3):1234567,totalTransactions:d*1e3||9876543,hashrate:"234.5 TH/s",activeAddresses:45678,avgBlockTime:o,difficulty:"12.34T",marketCap:"$1.23B",price:"$2,345.67"}}async getContracts(){var e;const a=await this.post(n.GetAccounts);if((e=a.data)!=null&&e.accounts)return a.data.accounts.filter(t=>t.acc_type_name==="Active"&&t.code_hash).map(t=>({address:t.address,created:t.last_paid}));throw new Error("Failed to fetch contracts")}async getMessages(a=20){const e=await this.post(n.GetMessages,{limit:a});if(e!=null&&e.messages)return e.messages.map(t=>({id:t.id,from:t.src,to:t.dst,type:t.msg_type_name,data:t.body,timestamp:new Date(t.created_at*1e3),value:t.value,msg_type_name:t.msg_type_name}));throw new Error("Failed to fetch messages")}async getLatestTransactions(a=25){const e=await this.post(n.GetLatestTransactions,{limit:a});if(e!=null&&e.transactions)return e.transactions.map(t=>{var d,l;const s=(d=t.in_message)!=null&&d.value?parseFloat(t.in_message.value)/1e9:0;let o="pending";return t.aborted?o="failed":t.status_name==="Finalized"&&(o="success"),{hash:t.id,from:(l=t.in_message)==null?void 0:l.src,to:t.account_addr,amount:s,status:o,timestamp:new Date(t.now*1e3)}});throw new Error("Failed to fetch transactions")}async getLatestBlocks(a=20){const e=await this.post(n.GetLatestBlocks,{limit:a});if(e!=null&&e.blocks){var t=e.blocks.map(s=>({height:s.seq_no||0,hash:s.hash||"",timestamp:new Date(s.gen_utime*1e3),txCount:s.tr_count||0}));return t}throw new Error("Failed to fetch blocks")}async getAccountBoc(a){var t,s;const e=await this.post(n.GetAccountBoc,{address:a});if((t=e.account)!=null&&t.info)return((s=e.account)==null?void 0:s.info.boc)||null;throw new Error("Account not found")}async getAccountTransactions(a){const e=await this.post(n.GetAccountTransactions,{address:a,limit:20});if(e!=null&&e.transactions)return e.transactions;throw new Error("No transactions found")}async request(a,e,t){const o=await(await fetch(m.graphqlEndpoint,{method:a,headers:{"Content-Type":"text/plain"},body:JSON.stringify({query:e,variables:t})})).json();return m.develop&&console.log("GraphQL response:",o),o.errors?(console.error("Error loading data:",o.errors),null):o.data}post(a,e={}){return this.request("POST",a,e)}}const y=new _;export{y as g};
