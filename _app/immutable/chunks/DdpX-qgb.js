import{e as p}from"./C4RyBbwH.js";import{d as g}from"./B6saGABT.js";const h=`
  query GetAccount($address: String!) {
      account(address: $address) {
          info {
              boc
          }
      }
  }
`,f=`
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
`;async function b(a,e,n){const r=await(await fetch(p.graphqlEndpoint,{method:a,headers:{"Content-Type":"text/plain"},body:JSON.stringify({query:e,variables:n})})).json();return r.errors?(console.error("Error loading data:",r.errors),null):r.data}function m(a,e){return b("POST",a,e)}async function M(a){var n,t;const e=await m(h,{address:a});if(!((n=e.account)!=null&&n.info))throw new Error("Account not found");return((t=e.account)==null?void 0:t.info.boc)||null}async function v(a){var n;const e=await m(f,{address:a,limit:20});if(!((n=e.data)!=null&&n.transactions))throw new Error("No transactions found");return e.data.transactions}const D=`{
	"ABI version": 2,
	"version": "2.4",
	"header": ["pubkey", "time", "expire"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
				{"name":"wallet","type":"address"},
				{"name":"rootPubkey","type":"uint256"},
				{"name":"index","type":"uint128"},
				{"name":"root","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "isOwner",
			"inputs": [
				{"name":"wallet","type":"address"},
				{"name":"zkid","type":"string"},
				{"name":"proof","type":"bytes"},
				{"name":"epk","type":"uint256"},
				{"name":"epk_sig","type":"bytes"},
				{"name":"epk_expire_at","type":"uint64"},
				{"name":"jwk_modulus","type":"bytes"},
				{"name":"kid","type":"bytes"},
				{"name":"jwk_modulus_expire_at","type":"uint64"},
				{"name":"index_mod_4","type":"uint8"},
				{"name":"iss_base_64","type":"string"},
				{"name":"provider","type":"string"},
				{"name":"header_base_64","type":"string"},
				{"name":"pub_recovery_key","type":"uint256"},
				{"name":"pub_recovery_key_sig","type":"bytes"},
				{"name":"jwk_update_key","type":"uint256"},
				{"name":"jwk_update_key_sig","type":"bytes"},
				{"name":"root_provider_certificates","type":"map(uint256,bytes)"},
				{"name":"owner_pubkey","type":"uint256"},
				{"name":"index","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "isOwnerRoot",
			"inputs": [
				{"name":"wallet","type":"address"},
				{"name":"zkid","type":"string"},
				{"name":"proof","type":"bytes"},
				{"name":"epk","type":"uint256"},
				{"name":"epk_sig","type":"bytes"},
				{"name":"epk_expire_at","type":"uint64"},
				{"name":"jwk_modulus","type":"bytes"},
				{"name":"kid","type":"bytes"},
				{"name":"jwk_modulus_expire_at","type":"uint64"},
				{"name":"index_mod_4","type":"uint8"},
				{"name":"iss_base_64","type":"string"},
				{"name":"provider","type":"string"},
				{"name":"header_base_64","type":"string"},
				{"name":"pub_recovery_key","type":"uint256"},
				{"name":"pub_recovery_key_sig","type":"bytes"},
				{"name":"jwk_update_key","type":"uint256"},
				{"name":"jwk_update_key_sig","type":"bytes"},
				{"name":"root_provider_certificates","type":"map(uint256,bytes)"},
				{"name":"owner_pubkey","type":"uint256"},
				{"name":"mirror","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "setNewWallet",
			"inputs": [
				{"name":"wallet","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "destroyNode",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "getDetails",
			"inputs": [
			],
			"outputs": [
				{"name":"name","type":"string"},
				{"name":"wallet","type":"address"}
			]
		},
		{
			"name": "getVersion",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"string"},
				{"name":"value1","type":"string"}
			]
		}
	],
	"events": [
	],
	"fields": [
		{"init":true,"name":"_pubkey","type":"uint256"},
		{"init":false,"name":"_timestamp","type":"uint64"},
		{"init":false,"name":"_constructorFlag","type":"bool"},
		{"init":true,"name":"_name","type":"string"},
		{"init":false,"name":"_wallet","type":"address"},
		{"init":false,"name":"_root","type":"address"},
		{"init":false,"name":"_rootPubkey","type":"uint256"}
	]
}
`,k="te6ccgECIwEABTUABCSK7VMg4wMgwP/jAiDA/uMC8gseAwEiArSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4igwjXGCD4KMjOzsn5AAHTAAGU0/9QM5MC+ELiIPhl+RDyqJXTAAHyeuLTPwEcAgFO+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8BANa7UTQgQFA1yHXCgD4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8HR0EBFAgghAxmusDu+MCIIIQQ/WwObvjAiCCEEqi0HG64wIgghBqk6xjuuMCEQkHBQN+MPhG8uBM+EJu4wAhk9TR0N76QNTU0//U0z/U0dDU1NM/0wfU1NHQ1NTT/9TT/9TR0NT0BNP/+kDR2zzbPPIAHAYYAfD4RSBukjBw3vhNuvLhkvgA2zyAE2H4a4ASYoAScGR/+EqAFGHIz4WIzo0EkBfXhAAAAAAAAAAAAAAAAAAADM8WgBRiyM+QCdUYYszKAMzMy/9V4MjMyz/MzMs/ywdVgMjMzMzL/1VAyMzL/8z0AMv/zc3Nzclx+wANAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyABwIGAAa+En4S8cF8uGX+AD4awIoIIIQP9hWVbrjAiCCEEP1sDm64wIOCgN+MPhG8uBM+EJu4wAhk9TR0N76QNTU0//U0z/U0dDU1NM/0wfU1NHQ1NTT/9TT/9TR0NT0BNP/03/R2zzjAPIAHAsTAvT4ACDC//LhmiCBA+i58uGagvAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaDIz4oAQMv/ydD4SccF8uGX2zz4S4ATYccFgBJigBJwZIASYfhK+EnIz4WIzo0EkBfXhAAAAAAAAAAAAAAAAAAADM8WgBRiyA0MAGjPkAnVGGLMygDMzMv/VeDIzMs/zMzLP8sHVYDIzMzMy/9VQMjMy//M9ADL/83Nzc3JcfsAACz4J28QghgXSHboALzcghgXSHboAMcoAmIw+Eby4EzR2zwijh4k0NMB+kAwMcjPhyDOgGLPQBLPkv9hWVbMzMlw+wCRW+LjAPIADxMCBIiIIBAADkluZGV4ZXIDMiDAAeMCIIIQH2q/6rrjAiCCEDGa6wO64wIXFRIDcDD4RvLgTPhCbuMA0ds8Io4gJNDTAfpAMDHIz4cgznHPC2ECyM+SxmusDszOzclw+wCRW+LjAPIAHBQTACjtRNDT/9M/MfhDWMjL/8s/zsntVAAI+Er4SwMkMPhG8uBM+EJu4wDR2zzbPPIAHBYYADj4SfgoxwXy4Zf4APgoyM+FCM6Ac89AyYEAoPsABPgw+EJu4wD4RvJzIZPU0dDe+kDT/9N/1NHQ+kDR+AD4Kts8IG7yf9DU0Yj5AAH5ALry4Zf4bFj4awH4bYLwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgyM+KAEDL/8nQ+En4TMcFmPhJIccF8uGX3zDbPPIAHBkgGAA8+E34TPhL+Er4Q/hCyMv/yz/Pg8zOWcjOy//Nye1UAhjQIIs4rbNYxwWKiuIaGwEK103Q2zwbAEjXTNCLL0pA1yb0BDHTCTGLX0vfLATo1yYg10rCAZLXTZIwbeIARO1E0NP/0z/TANT6QNTR0PpA0//R+G34bPhr+Gr4Zvhj+GIACvhG8uBMAxD0pCD0vfLATiIhHwEAIAAKMS4wLjAAFHNvbCAwLjc5LjMAAA==",l=new g.TvmClient;async function I(a){return(await l.abi.encode_message({abi:{type:"Json",value:D},deploy_set:{code:k,initial_data:{_pubkey:"0x0",_name:a}},signer:{type:"None"}})).address}async function d(a,e={}){try{const t=await(await fetch(p.graphqlEndpoint,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({query:a,variables:e})})).json();return console.log("GraphQL Response:",t),t}catch(n){return console.error("GraphQL Error:",n),{data:null,errors:[n]}}}async function B(){var n;const e=await d(`
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
  `,{limit:20});if((n=e.data)!=null&&n.blocks)return e.data.blocks.map(t=>({height:t.seq_no||0,hash:t.hash||t.id||"",timestamp:t.gen_utime?new Date(t.gen_utime*1e3):new Date,txCount:t.tr_count||0,miner:"N/A",workchain_id:t.workchain_id,shard:t.shard,seq_no:t.seq_no}));throw new Error("Failed to fetch blocks")}async function P(){var n;const e=await d(`
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
  `,{limit:25});if((n=e.data)!=null&&n.transactions)return e.data.transactions.map(t=>{var i,s;const r=(i=t.in_message)!=null&&i.value?parseFloat(t.in_message.value)/1e9:0;let o="success";return t.aborted?o="failed":(t.status_name==="Preliminary"||t.status_name==="Proposed")&&(o="pending"),{hash:t.id||"",from:((s=t.in_message)==null?void 0:s.src)||"N/A",to:t.account_addr||"N/A",amount:r,status:o,timestamp:t.now?new Date(t.now*1e3):new Date,aborted:t.aborted}});throw new Error("Failed to fetch transactions")}async function N(){var n;const e=await d(`
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
  `);if((n=e.data)!=null&&n.messages)return e.data.messages.map(t=>({id:t.id||"",from:t.src||"N/A",to:t.dst||"N/A",type:t.msg_type_name||"Unknown",data:t.body||"",timestamp:t.created_at?new Date(t.created_at*1e3):new Date,value:t.value,msg_type_name:t.msg_type_name}));throw new Error("Failed to fetch messages")}async function j(){var n,t;const a=`
    query GetInfo {
      info {
        lastBlockTime
        blocksLatency
      }
    }
  `,e=`
    query GetBlockStats($limit: Int!) {
      blocks(orderBy: [{ path: "gen_utime", direction: DESC }], limit: $limit) {
        gen_utime
        tr_count
      }
    }
  `;try{const[r,o]=await Promise.all([d(a),d(e,{limit:10})]),i=(n=r.data)==null?void 0:n.info,s=(t=o.data)==null?void 0:t.blocks;let y="~15s";if(s&&s.length>1){const c=s.map(A=>A.gen_utime).filter(Boolean);if(c.length>1){const A=[];for(let u=1;u<c.length;u++)A.push(Math.abs(c[u]-c[u-1]));y=`${(A.reduce((u,w)=>u+w,0)/A.length).toFixed(1)}s`}}const _=(s==null?void 0:s.reduce((c,A)=>c+(A.tr_count||0),0))||0;return{totalBlocks:i!=null&&i.lastBlockTime?Math.floor(i.lastBlockTime/15e3):1234567,totalTransactions:_*1e3||9876543,hashrate:"234.5 TH/s",activeAddresses:45678,avgBlockTime:y,difficulty:"12.34T",marketCap:"$1.23B",price:"$2,345.67"}}catch{throw new Error("Failed to fetch network stats")}}async function G(a){var i;let e=a.trim();T(e)||(e=await I(e));const n=await M(e),{parsed:t}=await l.boc.parse_account({boc:n});if(!t)throw new Error("Failed to parse account BOC");var r=((i=t.balance_other)==null?void 0:i.map(s=>({id:s.currency,name:s.currency===1?"NACKL":"",value:parseInt(s.value,16)})))||[],o={accType:t.acc_type,accTypeName:t.acc_type_name,balances:r.concat([{id:0,name:"SHELL",value:parseInt(t.balance,16)}]),bits:parseInt(t.bits,16),boc:n,cells:parseInt(t.cells,16),code:t.code,codeHash:t.code_hash,data:t.data,dataHash:t.data_hash,id:t.id,initCodeHash:t.init_code_hash,jsonVersion:t.json_version,lastPaid:new Date(t.last_paid*1e3),lastTransLt:parseInt(t.last_trans_lt,16),publicCells:parseInt(t.public_cells,16),workchainId:t.workchain_id};return o}function T(a){const e=a.trim();return/^(0:|-1:)[0-9a-fA-F]{64}$/.test(e)}function H(a){const e=a.trim();return/^[0-9a-fA-F]{64}$/.test(e)}export{N as a,P as b,j as c,G as d,v as e,B as g,H as i};
