var h=Object.defineProperty;var x=(n,t,a)=>t in n?h(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a;var i=(n,t,a)=>x(n,typeof t!="symbol"?t+"":t,a);import{g as f}from"./C0htPYIV.js";import{t as s,g as y,i as k,p as C}from"./dOC9I46v.js";import{d as P}from"./B6saGABT.js";const w=`{
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
`,M=`{
	"ABI version": 2,
	"version": "2.4",
	"header": ["pubkey", "time", "expire"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
				{"name":"name","type":"string"},
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
				{"name":"index","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "cleanWhiteList",
			"inputs": [
				{"name":"epk_expire_at","type":"uint32"}
			],
			"outputs": [
			]
		},
		{
			"name": "updateWhiteList",
			"inputs": [
				{"name":"epk_expire_at","type":"uint32"},
				{"name":"index","type":"uint8"},
				{"name":"name","type":"string"},
				{"name":"indexMirror","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "setWhiteList",
			"inputs": [
				{"name":"new_addr","type":"address"},
				{"name":"index","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "addJwkModulus",
			"inputs": [
				{"name":"root_cert_sn","type":"uint256"},
				{"name":"lv_kid","type":"bytes"},
				{"name":"tls_data","type":"bytes"}
			],
			"outputs": [
				{"name":"success","type":"bool"}
			]
		},
		{
			"name": "deleteJwkModulusByUpdateJwkKey",
			"inputs": [
				{"name":"kid","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "cleanAllExpiredJwks",
			"inputs": [
				{"name":"epk_expire_at","type":"uint64"}
			],
			"outputs": [
			]
		},
		{
			"name": "deleteJwkModulusByFactor",
			"inputs": [
				{"name":"epk_expire_at","type":"uint64"},
				{"name":"kid","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "addZKPfactor",
			"inputs": [
				{"name":"proof","type":"bytes"},
				{"name":"epk","type":"uint256"},
				{"name":"kid","type":"bytes"},
				{"name":"header_base_64","type":"string"},
				{"name":"epk_expire_at","type":"uint64"}
			],
			"outputs": [
				{"name":"success","type":"bool"}
			]
		},
		{
			"name": "deleteZKPfactorByItself",
			"inputs": [
				{"name":"epk_expire_at","type":"uint64"}
			],
			"outputs": [
			]
		},
		{
			"name": "cleanAllExpiredZKPFactors",
			"inputs": [
				{"name":"epk_expire_at","type":"uint64"}
			],
			"outputs": [
			]
		},
		{
			"name": "setWasmHash",
			"inputs": [
				{"name":"wasm_hash","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "setForceRemoveOldest",
			"inputs": [
				{"name":"flag","type":"bool"}
			],
			"outputs": [
			]
		},
		{
			"name": "addRootProviderCertificate",
			"inputs": [
				{"name":"sn","type":"uint256"},
				{"name":"root_provider_certificate","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "deleteRootProviderCertificate",
			"inputs": [
				{"name":"sn","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "cleanRootProviderCertificates",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "cleanAllJwks",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "cleanAllZKPFactors",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "updateRecoveryPhrase",
			"inputs": [
				{"name":"new_pub_recovery_key","type":"uint256"},
				{"name":"new_pub_recovery_key_sig","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "updateJwkUpdateKey",
			"inputs": [
				{"name":"new_jwk_update_key","type":"uint256"},
				{"name":"new_jwk_update_key_sig","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "updateZkid",
			"inputs": [
				{"name":"zkid","type":"string"},
				{"name":"proof","type":"bytes"},
				{"name":"epk","type":"uint256"},
				{"name":"epk_sig","type":"bytes"},
				{"name":"kid","type":"bytes"},
				{"name":"jwk_modulus","type":"bytes"},
				{"name":"jwk_modulus_expire_at","type":"uint64"},
				{"name":"index_mod_4","type":"uint8"},
				{"name":"iss_base_64","type":"string"},
				{"name":"header_base_64","type":"string"},
				{"name":"epk_expire_at","type":"uint64"},
				{"name":"jwk_update_key","type":"uint256"},
				{"name":"jwk_update_key_sig","type":"bytes"},
				{"name":"provider","type":"string"},
				{"name":"root_provider_certificates","type":"map(uint256,bytes)"}
			],
			"outputs": [
			]
		},
		{
			"name": "updateSeedPhrase",
			"inputs": [
				{"name":"new_owner_pubkey","type":"uint256"},
				{"name":"new_owner_pubkey_sig","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "deleteJwkModulus",
			"inputs": [
				{"name":"kid","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "deleteZKPfactor",
			"inputs": [
				{"name":"epk_expire_at","type":"uint64"},
				{"name":"epk","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "deleteZKPfactor_",
			"inputs": [
				{"name":"epk","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "changeSeedPhrase",
			"inputs": [
				{"name":"epk_expire_at","type":"uint64"},
				{"name":"new_owner_pubkey","type":"uint256"},
				{"name":"new_owner_pubkey_sig","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "acceptCandidateSeedPhrase",
			"inputs": [
				{"name":"new_owner_pubkey","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "deleteCandidateSeedPhrase",
			"inputs": [
				{"name":"epk_expire_at","type":"uint64"}
			],
			"outputs": [
			]
		},
		{
			"name": "addSecurityCard",
			"inputs": [
				{"name":"pubkey","type":"uint256"},
				{"name":"pubkey_sig","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "turnOffSecurityCards",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "turnOnSecurityCards",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "deleteSecurityCard",
			"inputs": [
				{"name":"pubkey","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "deleteAllSecurityCards",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "sendTransaction",
			"inputs": [
				{"name":"epk_expire_at","type":"uint64"},
				{"name":"dest","type":"address"},
				{"name":"value","type":"uint128"},
				{"name":"cc","type":"map(uint32,varuint32)"},
				{"name":"bounce","type":"bool"},
				{"name":"flags","type":"uint8"},
				{"name":"payload","type":"cell"}
			],
			"outputs": [
				{"name":"value0","type":"address"}
			]
		},
		{
			"name": "submitTransaction",
			"inputs": [
				{"name":"epk_expire_at","type":"uint64"},
				{"name":"dest","type":"address"},
				{"name":"value","type":"uint128"},
				{"name":"cc","type":"map(uint32,varuint32)"},
				{"name":"bounce","type":"bool"},
				{"name":"allBalance","type":"bool"},
				{"name":"payload","type":"cell"}
			],
			"outputs": [
				{"name":"transId","type":"uint64"}
			]
		},
		{
			"name": "confirmTransaction",
			"inputs": [
				{"name":"transactionId","type":"uint64"}
			],
			"outputs": [
			]
		},
		{
			"name": "setMaxCleanupTxns",
			"inputs": [
				{"name":"epk_expire_at","type":"uint64"},
				{"name":"value","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "setMinValue",
			"inputs": [
				{"name":"epk_expire_at","type":"uint64"},
				{"name":"value","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "getTransaction",
			"inputs": [
				{"name":"transactionId","type":"uint64"}
			],
			"outputs": [
				{"components":[{"name":"id","type":"uint64"},{"name":"creator","type":"uint256"},{"name":"dest","type":"address"},{"name":"value","type":"uint128"},{"name":"cc","type":"map(uint32,varuint32)"},{"name":"sendFlags","type":"uint16"},{"name":"payload","type":"cell"},{"name":"bounce","type":"bool"}],"name":"trans","type":"tuple"}
			]
		},
		{
			"name": "getTransactions",
			"inputs": [
			],
			"outputs": [
				{"components":[{"name":"id","type":"uint64"},{"name":"creator","type":"uint256"},{"name":"dest","type":"address"},{"name":"value","type":"uint128"},{"name":"cc","type":"map(uint32,varuint32)"},{"name":"sendFlags","type":"uint16"},{"name":"payload","type":"cell"},{"name":"bounce","type":"bool"}],"name":"transactions","type":"tuple[]"}
			]
		},
		{
			"name": "getTransactionIds",
			"inputs": [
			],
			"outputs": [
				{"name":"ids","type":"uint64[]"}
			]
		},
		{
			"name": "getZKPEphemeralPublicKeys",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint256[]"}
			]
		},
		{
			"name": "getTimeStamp",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint32"}
			]
		},
		{
			"name": "getSecurityCardKeys",
			"inputs": [
			],
			"outputs": [
				{"name":"sc_keys","type":"uint256[]"}
			]
		},
		{
			"name": "get_epk_expire_at",
			"inputs": [
				{"name":"epk","type":"uint256"}
			],
			"outputs": [
				{"name":"value0","type":"uint64"}
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
		},
		{
			"name": "_factors_ordered_by_timestamp",
			"inputs": [
			],
			"outputs": [
				{"name":"_factors_ordered_by_timestamp","type":"map(uint256,uint256)"}
			]
		},
		{
			"name": "_factors_len",
			"inputs": [
			],
			"outputs": [
				{"name":"_factors_len","type":"uint8"}
			]
		},
		{
			"name": "_name",
			"inputs": [
			],
			"outputs": [
				{"name":"_name","type":"string"}
			]
		},
		{
			"name": "_pub_recovery_key",
			"inputs": [
			],
			"outputs": [
				{"name":"_pub_recovery_key","type":"uint256"}
			]
		},
		{
			"name": "_jwk_update_key",
			"inputs": [
			],
			"outputs": [
				{"name":"_jwk_update_key","type":"uint256"}
			]
		},
		{
			"name": "_root_provider_certificates",
			"inputs": [
			],
			"outputs": [
				{"name":"_root_provider_certificates","type":"map(uint256,bytes)"}
			]
		},
		{
			"name": "_jwk_modulus_data",
			"inputs": [
			],
			"outputs": [
				{"components":[{"name":"modulus","type":"bytes"},{"name":"modulus_expire_at","type":"uint64"}],"name":"_jwk_modulus_data","type":"map(uint256,tuple)"}
			]
		},
		{
			"name": "_jwk_modulus_data_len",
			"inputs": [
			],
			"outputs": [
				{"name":"_jwk_modulus_data_len","type":"uint8"}
			]
		},
		{
			"name": "_zkid",
			"inputs": [
			],
			"outputs": [
				{"name":"_zkid","type":"string"}
			]
		},
		{
			"name": "_index_mod_4",
			"inputs": [
			],
			"outputs": [
				{"name":"_index_mod_4","type":"uint8"}
			]
		},
		{
			"name": "_iss_base_64",
			"inputs": [
			],
			"outputs": [
				{"name":"_iss_base_64","type":"string"}
			]
		},
		{
			"name": "_lv_provider_bytes",
			"inputs": [
			],
			"outputs": [
				{"name":"_lv_provider_bytes","type":"bytes"}
			]
		},
		{
			"name": "_use_security_card",
			"inputs": [
			],
			"outputs": [
				{"name":"_use_security_card","type":"bool"}
			]
		},
		{
			"name": "_m_security_cards",
			"inputs": [
			],
			"outputs": [
				{"name":"_m_security_cards","type":"map(uint256,bool)"}
			]
		},
		{
			"name": "_m_security_cards_len",
			"inputs": [
			],
			"outputs": [
				{"name":"_m_security_cards_len","type":"uint8"}
			]
		},
		{
			"name": "_m_transactions",
			"inputs": [
			],
			"outputs": [
				{"components":[{"name":"id","type":"uint64"},{"name":"creator","type":"uint256"},{"name":"dest","type":"address"},{"name":"value","type":"uint128"},{"name":"cc","type":"map(uint32,varuint32)"},{"name":"sendFlags","type":"uint16"},{"name":"payload","type":"cell"},{"name":"bounce","type":"bool"}],"name":"_m_transactions","type":"map(uint64,tuple)"}
			]
		},
		{
			"name": "_m_transactions_len",
			"inputs": [
			],
			"outputs": [
				{"name":"_m_transactions_len","type":"uint8"}
			]
		},
		{
			"name": "_min_value",
			"inputs": [
			],
			"outputs": [
				{"name":"_min_value","type":"uint128"}
			]
		},
		{
			"name": "_max_cleanup_txns",
			"inputs": [
			],
			"outputs": [
				{"name":"_max_cleanup_txns","type":"uint256"}
			]
		},
		{
			"name": "_force_remove_oldest",
			"inputs": [
			],
			"outputs": [
				{"name":"_force_remove_oldest","type":"bool"}
			]
		},
		{
			"name": "_verification_key_index",
			"inputs": [
			],
			"outputs": [
				{"name":"_verification_key_index","type":"uint32"}
			]
		},
		{
			"name": "_wasm_hash",
			"inputs": [
			],
			"outputs": [
				{"name":"_wasm_hash","type":"bytes"}
			]
		}
	],
	"events": [
	],
	"fields": [
		{"init":true,"name":"_pubkey","type":"uint256"},
		{"init":false,"name":"_timestamp","type":"uint64"},
		{"init":false,"name":"_constructorFlag","type":"bool"},
		{"init":false,"name":"_factors_ordered_by_timestamp","type":"map(uint256,uint256)"},
		{"init":false,"name":"_factors_len","type":"uint8"},
		{"init":false,"name":"_root","type":"address"},
		{"init":false,"name":"_name","type":"string"},
		{"init":true,"name":"_owner_pubkey","type":"uint256"},
		{"components":[{"name":"value0","type":"uint256"},{"name":"value1","type":"uint64"}],"init":false,"name":"_candidate_new_owner_pubkey_and_expiration","type":"optional(tuple)"},
		{"init":false,"name":"_pub_recovery_key","type":"uint256"},
		{"init":false,"name":"_jwk_update_key","type":"uint256"},
		{"init":false,"name":"_root_provider_certificates","type":"map(uint256,bytes)"},
		{"components":[{"name":"modulus","type":"bytes"},{"name":"modulus_expire_at","type":"uint64"}],"init":false,"name":"_jwk_modulus_data","type":"map(uint256,tuple)"},
		{"init":false,"name":"_jwk_modulus_data_len","type":"uint8"},
		{"components":[{"name":"value0","type":"uint256"},{"components":[{"name":"modulus","type":"bytes"},{"name":"modulus_expire_at","type":"uint64"}],"name":"value1","type":"tuple"}],"init":false,"name":"_start_point_jwk","type":"optional(tuple)"},
		{"init":false,"name":"_zkid","type":"string"},
		{"init":false,"name":"_index_mod_4","type":"uint8"},
		{"init":false,"name":"_iss_base_64","type":"string"},
		{"init":false,"name":"_lv_provider_bytes","type":"bytes"},
		{"init":false,"name":"_use_security_card","type":"bool"},
		{"init":false,"name":"_m_security_cards","type":"map(uint256,bool)"},
		{"init":false,"name":"_m_security_cards_len","type":"uint8"},
		{"components":[{"name":"id","type":"uint64"},{"name":"creator","type":"uint256"},{"name":"dest","type":"address"},{"name":"value","type":"uint128"},{"name":"cc","type":"map(uint32,varuint32)"},{"name":"sendFlags","type":"uint16"},{"name":"payload","type":"cell"},{"name":"bounce","type":"bool"}],"init":false,"name":"_m_transactions","type":"map(uint64,tuple)"},
		{"init":false,"name":"_m_transactions_len","type":"uint8"},
		{"init":false,"name":"_min_value","type":"uint128"},
		{"init":false,"name":"_max_cleanup_txns","type":"uint256"},
		{"init":false,"name":"_force_remove_oldest","type":"bool"},
		{"init":false,"name":"_whiteListOfAddress","type":"map(address,bool)"},
		{"init":false,"name":"_verification_key_index","type":"uint32"},
		{"init":false,"name":"_wasm_hash","type":"bytes"}
	]
}
`;function u(n,...t){}const d=new Map([]),A=new Map([["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Mvmultifactor"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoinWallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","AckiNackiBlockKeeperNodeWallet"]]),r=new Map([]);async function j(){if(d.size>0)return;const n=await fetch("/abi/last",{method:"GET"});if(n.ok){const t=await n.json();for(const a of t)d.set(a[0],a[1])}}async function I(n){await j();const t=A.get(n);if(!t)return n;const a=d.get(t);return a||n}async function S(n){n=await I(n);try{if(r.has(n))return u(`getCodeSchema cashed ${n}`),r.get(n);const t=await fetch(`/abi/${n}`,{method:"GET"});if(!t.ok){u(`getCodeSchema error fetch ${n}`);return}const a=await t.json();if(!a.abi){u(`getCodeSchema error data ${n}`,{result:a});return}const e={name:a.name,abi:P.abiContract(a.abi)};return u(`getCodeSchema saved ${n}`,{data:e}),r.set(n,e),e}catch{u();return}}async function T(n,t){try{return(await s.abi.decode_account_data({data:n,abi:t,allow_partial:!0})).data}catch{u()}}var D=(n=>(n.Indexer="Indexer",n.MvMultifactor="Mobile Verifier Multifactor",n.PopitGame="Popit Game",n))(D||{});const l=new Map([["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Mobile Verifier Multifactor"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","Popit Game"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"]]);async function N(n){var _;let t=n.trim();c(t)||(t=await y(t));const a=await f.getAccountBoc(t),{parsed:e}=await s.boc.parse_account({boc:a});if(!e)throw new Error("Failed to parse account BOC");var g=((_=e.balance_other)==null?void 0:_.map(p=>({id:p.currency,name:p.currency===1?"NACKL":"",value:parseInt(p.value,16)})))||[],m={accType:e.acc_type,accTypeName:e.acc_type_name,balances:g.concat([{id:0,name:"SHELL",value:parseInt(e.balance,16)}]),bits:parseInt(e.bits,16),boc:a,cells:parseInt(e.cells,16),code:e.code,codeHash:e.code_hash,data:e.data,dataHash:e.data_hash,id:e.id,initCodeHash:e.init_code_hash,jsonVersion:e.json_version,lastPaid:new Date(e.last_paid*1e3),lastTransLt:parseInt(e.last_trans_lt,16),publicCells:parseInt(e.public_cells,16),workchainId:e.workchain_id};const o=await S(e.init_code_hash);if(o&&o.abi){const p=await T(e.data,o.abi);u("decodeData",{dataParsed:p,accountData:e,codeSchema:o}),p&&(m.dataParsed=p,m.contractName=o.name)}return new G(m)}async function F(n){let t=n.trim();c(t)||(t=await y(t));const a=await f.getAccountBoc(t),{parsed:e}=await s.boc.parse_account({boc:a});return v(e.data)}async function v(n){return(await s.abi.decode_account_data({abi:{type:"Json",value:k},data:n})).data._wallet}async function b(n){let t=n.trim();return c(t)||(t=await F(t)),(await s.abi.encode_message({abi:{type:"Json",value:w},deploy_set:{code:C,initial_data:{_pubkey:"0x0",_owner:t}},signer:{type:"None"}})).address}function c(n){const t=n.trim();return/^(0:|-1:)[0-9a-fA-F]{64}$/.test(t)}function V(n){const t=n.trim();return/^[0-9a-fA-F]{64}$/.test(t)}class G{constructor(t){i(this,"accType");i(this,"accTypeName");i(this,"balances");i(this,"bits");i(this,"boc");i(this,"cells");i(this,"code");i(this,"codeHash");i(this,"data");i(this,"dataHash");i(this,"id");i(this,"initCodeHash");i(this,"jsonVersion");i(this,"lastPaid");i(this,"lastTransLt");i(this,"publicCells");i(this,"workchainId");i(this,"dataParsed");i(this,"contractName");i(this,"_nameCache");i(this,"_namePromise");Object.assign(this,t)}get type(){return l.has(this.codeHash)&&l.get(this.codeHash)||null}async getName(){return typeof this._nameCache<"u"?this._nameCache:this._namePromise?this._namePromise:(this._namePromise=(async()=>{try{if(this.type==="Mobile Verifier Multifactor"){const t=await s.abi.decode_account_data({abi:{type:"Json",value:M},data:this.data});this._nameCache=t.data._name||null}else if(this.type==="Indexer"){const t=await s.abi.decode_account_data({abi:{type:"Json",value:k},data:this.data});this._nameCache=t.data._name||null}else this._nameCache=null}catch{this._nameCache=null}finally{this._namePromise=void 0}return this._nameCache})(),this._namePromise)}async getLinkedAccounts(){const t=new Map;if(this.type==="Mobile Verifier Multifactor"){const a=await this.getName();a&&t.set("Indexer",await y(a));const e=await b(this.id);return e&&t.set("Popit Game",e),t}else if(this.type==="Indexer"){const a=await v(this.data);if(a){t.set("Mobile Verifier Multifactor",a);const e=await b(a);e&&t.set("Popit Game",e)}}else if(this.type==="Popit Game"){const e=(await s.abi.decode_account_data({abi:{type:"Json",value:w},data:this.data})).data._owner;e&&t.set("Mobile Verifier Multifactor",e)}return t}}export{D as A,F as a,N as g,V as i};
