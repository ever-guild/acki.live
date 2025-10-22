var k=Object.defineProperty;var v=(e,t,a)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var i=(e,t,a)=>v(e,typeof t!="symbol"?t+"":t,a);import{g as _}from"./DTpoW4qT.js";import{g as u,t as s,i as d,p as w}from"./dOC9I46v.js";const c=`{
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
`,g=`{
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
`;var h=(e=>(e.Indexer="Indexer",e.MvMultifactor="Mobile Verifier Multitactor",e.PopitGame="Popit Game",e))(h||{});const r=new Map([["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Mobile Verifier Multitactor"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","Popit Game"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"]]);async function j(e){var o;let t=e.trim();m(t)||(t=await u(t));const a=await _.getAccountBoc(t),{parsed:n}=await s.boc.parse_account({boc:a});if(!n)throw new Error("Failed to parse account BOC");var b=((o=n.balance_other)==null?void 0:o.map(p=>({id:p.currency,name:p.currency===1?"NACKL":"",value:parseInt(p.value,16)})))||[],f={accType:n.acc_type,accTypeName:n.acc_type_name,balances:b.concat([{id:0,name:"SHELL",value:parseInt(n.balance,16)}]),bits:parseInt(n.bits,16),boc:a,cells:parseInt(n.cells,16),code:n.code,codeHash:n.code_hash,data:n.data,dataHash:n.data_hash,id:n.id,initCodeHash:n.init_code_hash,jsonVersion:n.json_version,lastPaid:new Date(n.last_paid*1e3),lastTransLt:parseInt(n.last_trans_lt,16),publicCells:parseInt(n.public_cells,16),workchainId:n.workchain_id};return new C(f)}async function x(e){let t=e.trim();m(t)||(t=await u(t));const a=await _.getAccountBoc(t),{parsed:n}=await s.boc.parse_account({boc:a});return l(n.data)}async function l(e){return(await s.abi.decode_account_data({abi:{type:"Json",value:d},data:e})).data._wallet}async function y(e){let t=e.trim();return m(t)||(t=await x(t)),(await s.abi.encode_message({abi:{type:"Json",value:c},deploy_set:{code:w,initial_data:{_pubkey:"0x0",_owner:t}},signer:{type:"None"}})).address}function m(e){const t=e.trim();return/^(0:|-1:)[0-9a-fA-F]{64}$/.test(t)}function I(e){const t=e.trim();return/^[0-9a-fA-F]{64}$/.test(t)}class C{constructor(t){i(this,"accType");i(this,"accTypeName");i(this,"balances");i(this,"bits");i(this,"boc");i(this,"cells");i(this,"code");i(this,"codeHash");i(this,"data");i(this,"dataHash");i(this,"id");i(this,"initCodeHash");i(this,"jsonVersion");i(this,"lastPaid");i(this,"lastTransLt");i(this,"publicCells");i(this,"workchainId");i(this,"_nameCache");i(this,"_namePromise");Object.assign(this,t)}get type(){return r.has(this.codeHash)&&r.get(this.codeHash)||null}async getName(){return typeof this._nameCache<"u"?this._nameCache:this._namePromise?this._namePromise:(this._namePromise=(async()=>{try{if(this.type==="Mobile Verifier Multitactor"){const t=await s.abi.decode_account_data({abi:{type:"Json",value:g},data:this.data});this._nameCache=t.data._name||null}else if(this.type==="Indexer"){const t=await s.abi.decode_account_data({abi:{type:"Json",value:d},data:this.data});this._nameCache=t.data._name||null}else this._nameCache=null}catch{this._nameCache=null}finally{this._namePromise=void 0}return this._nameCache})(),this._namePromise)}async getLinkedAccounts(){const t=new Map;if(this.type==="Mobile Verifier Multitactor"){const a=await this.getName();a&&t.set("Indexer",await u(a));const n=await y(this.id);return n&&t.set("Popit Game",n),t}else if(this.type==="Indexer"){const a=await l(this.data);if(a){t.set("Mobile Verifier Multitactor",a);const n=await y(a);n&&t.set("Popit Game",n)}}else if(this.type==="Popit Game"){const n=(await s.abi.decode_account_data({abi:{type:"Json",value:c},data:this.data})).data._owner;n&&t.set("Mobile Verifier Multitactor",n)}return t}}export{h as A,x as a,j as g,I as i};
