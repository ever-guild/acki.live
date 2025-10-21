import{g as u}from"./BOj3_AOA.js";import{g as c,t as s,p as d,i as l}from"./dOC9I46v.js";const y=`{
	"ABI version": 2,
	"version": "2.4",
	"header": ["pubkey", "time", "expire"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
				{"name":"code","type":"map(uint8,cell)"},
				{"name":"root_pubkey","type":"uint256"},
				{"name":"index","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "addValuePopit",
			"inputs": [
				{"name":"name","type":"string"},
				{"name":"id","type":"uint256"},
				{"name":"value","type":"uint64"}
			],
			"outputs": [
			]
		},
		{
			"name": "popCoinRootDeployed",
			"inputs": [
				{"name":"name","type":"string"}
			],
			"outputs": [
			]
		},
		{
			"name": "popCoinWalletDeployed",
			"inputs": [
				{"name":"name","type":"string"}
			],
			"outputs": [
			]
		},
		{
			"name": "setMbiCur",
			"inputs": [
				{"name":"mbiCur","type":"uint64"}
			],
			"outputs": [
			]
		},
		{
			"name": "deployPopCoinWallet",
			"inputs": [
				{"name":"name","type":"string"},
				{"name":"value","type":"uint64"}
			],
			"outputs": [
			]
		},
		{
			"name": "deployPopCoinWalletOldTransfer",
			"inputs": [
				{"name":"name","type":"string"},
				{"name":"value","type":"uint64"}
			],
			"outputs": [
			]
		},
		{
			"name": "withdraw",
			"inputs": [
				{"name":"value","type":"uint128"},
				{"name":"to","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "getPopCoinWalletAddress",
			"inputs": [
				{"name":"name","type":"string"}
			],
			"outputs": [
				{"name":"popCoinWalletAddress","type":"address"}
			]
		},
		{
			"name": "getDetails",
			"inputs": [
			],
			"outputs": [
				{"name":"owner","type":"address"},
				{"name":"root","type":"address"},
				{"name":"startTime","type":"uint32"},
				{"name":"mbiCur","type":"uint64"},
				{"name":"boost","type":"address"},
				{"name":"rewards","type":"uint128"},
				{"name":"minstake","type":"uint128"}
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
		{
			"name": "PopCoinRootReceived",
			"inputs": [
				{"name":"name","type":"string"}
			],
			"outputs": [
			]
		},
		{
			"name": "PopCoinWalletReceived",
			"inputs": [
				{"name":"name","type":"string"}
			],
			"outputs": [
			]
		}
	],
	"fields": [
		{"init":true,"name":"_pubkey","type":"uint256"},
		{"init":false,"name":"_timestamp","type":"uint64"},
		{"init":false,"name":"_constructorFlag","type":"bool"},
		{"init":false,"name":"_code","type":"map(uint8,cell)"},
		{"init":true,"name":"_owner","type":"address"},
		{"init":false,"name":"_mbiCur","type":"uint64"},
		{"init":false,"name":"_root","type":"address"},
		{"init":false,"name":"_startTime","type":"uint32"},
		{"init":false,"name":"_root_pubkey","type":"uint256"},
		{"init":false,"name":"_boost","type":"address"},
		{"init":false,"name":"_rewards","type":"uint128"}
	]
}
`;async function f(e){var r;let n=e.trim();o(n)||(n=await c(n));const a=await u.getAccountBoc(n),{parsed:t}=await s.boc.parse_account({boc:a});if(!t)throw new Error("Failed to parse account BOC");var p=((r=t.balance_other)==null?void 0:r.map(i=>({id:i.currency,name:i.currency===1?"NACKL":"",value:parseInt(i.value,16)})))||[],m={accType:t.acc_type,accTypeName:t.acc_type_name,balances:p.concat([{id:0,name:"SHELL",value:parseInt(t.balance,16)}]),bits:parseInt(t.bits,16),boc:a,cells:parseInt(t.cells,16),code:t.code,codeHash:t.code_hash,data:t.data,dataHash:t.data_hash,id:t.id,initCodeHash:t.init_code_hash,jsonVersion:t.json_version,lastPaid:new Date(t.last_paid*1e3),lastTransLt:parseInt(t.last_trans_lt,16),publicCells:parseInt(t.public_cells,16),workchainId:t.workchain_id};return m}async function _(e){let n=e.trim();o(n)||(n=await c(n));const a=await u.getAccountBoc(n),{parsed:t}=await s.boc.parse_account({boc:a});return(await s.abi.decode_account_data({abi:{type:"Json",value:l},data:t.data})).data._wallet}async function w(e){let n=e.trim();return o(n)||(n=await _(n)),(await s.abi.encode_message({abi:{type:"Json",value:y},deploy_set:{code:d,initial_data:{_pubkey:"0x0",_owner:n}},signer:{type:"None"}})).address}function o(e){const n=e.trim();return/^(0:|-1:)[0-9a-fA-F]{64}$/.test(n)}function v(e){const n=e.trim();return/^[0-9a-fA-F]{64}$/.test(n)}export{w as a,f as g,v as i};
