var M=Object.defineProperty;var P=(n,t,a)=>t in n?M(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a;var s=(n,t,a)=>P(n,typeof t!="symbol"?t+"":t,a);import{g as w}from"./C0htPYIV.js";import{d as f}from"./B6saGABT.js";const r=`{
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
`,I="te6ccgECIwEABTUABCSK7VMg4wMgwP/jAiDA/uMC8gseAwEiArSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4igwjXGCD4KMjOzsn5AAHTAAGU0/9QM5MC+ELiIPhl+RDyqJXTAAHyeuLTPwEcAgFO+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8BANa7UTQgQFA1yHXCgD4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8HR0EBFAgghAxmusDu+MCIIIQQ/WwObvjAiCCEEqi0HG64wIgghBqk6xjuuMCEQkHBQN+MPhG8uBM+EJu4wAhk9TR0N76QNTU0//U0z/U0dDU1NM/0wfU1NHQ1NTT/9TT/9TR0NT0BNP/+kDR2zzbPPIAHAYYAfD4RSBukjBw3vhNuvLhkvgA2zyAE2H4a4ASYoAScGR/+EqAFGHIz4WIzo0EkBfXhAAAAAAAAAAAAAAAAAAADM8WgBRiyM+QCdUYYszKAMzMy/9V4MjMyz/MzMs/ywdVgMjMzMzL/1VAyMzL/8z0AMv/zc3Nzclx+wANAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyABwIGAAa+En4S8cF8uGX+AD4awIoIIIQP9hWVbrjAiCCEEP1sDm64wIOCgN+MPhG8uBM+EJu4wAhk9TR0N76QNTU0//U0z/U0dDU1NM/0wfU1NHQ1NTT/9TT/9TR0NT0BNP/03/R2zzjAPIAHAsTAvT4ACDC//LhmiCBA+i58uGagvAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaDIz4oAQMv/ydD4SccF8uGX2zz4S4ATYccFgBJigBJwZIASYfhK+EnIz4WIzo0EkBfXhAAAAAAAAAAAAAAAAAAADM8WgBRiyA0MAGjPkAnVGGLMygDMzMv/VeDIzMs/zMzLP8sHVYDIzMzMy/9VQMjMy//M9ADL/83Nzc3JcfsAACz4J28QghgXSHboALzcghgXSHboAMcoAmIw+Eby4EzR2zwijh4k0NMB+kAwMcjPhyDOgGLPQBLPkv9hWVbMzMlw+wCRW+LjAPIADxMCBIiIIBAADkluZGV4ZXIDMiDAAeMCIIIQH2q/6rrjAiCCEDGa6wO64wIXFRIDcDD4RvLgTPhCbuMA0ds8Io4gJNDTAfpAMDHIz4cgznHPC2ECyM+SxmusDszOzclw+wCRW+LjAPIAHBQTACjtRNDT/9M/MfhDWMjL/8s/zsntVAAI+Er4SwMkMPhG8uBM+EJu4wDR2zzbPPIAHBYYADj4SfgoxwXy4Zf4APgoyM+FCM6Ac89AyYEAoPsABPgw+EJu4wD4RvJzIZPU0dDe+kDT/9N/1NHQ+kDR+AD4Kts8IG7yf9DU0Yj5AAH5ALry4Zf4bFj4awH4bYLwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgyM+KAEDL/8nQ+En4TMcFmPhJIccF8uGX3zDbPPIAHBkgGAA8+E34TPhL+Er4Q/hCyMv/yz/Pg8zOWcjOy//Nye1UAhjQIIs4rbNYxwWKiuIaGwEK103Q2zwbAEjXTNCLL0pA1yb0BDHTCTGLX0vfLATo1yYg10rCAZLXTZIwbeIARO1E0NP/0z/TANT6QNTR0PpA0//R+G34bPhr+Gr4Zvhj+GIACvhG8uBMAxD0pCD0vfLATiIhHwEAIAAKMS4wLjAAFHNvbCAwLjc5LjMAAA==",v="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",i=new f.TvmClient;async function d(n){return(await i.abi.encode_message({abi:{type:"Json",value:r},deploy_set:{code:I,initial_data:{_pubkey:"0x0",_name:n}},signer:{type:"None"}})).address}const g=`{
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
`,z=`{
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
`;function u(n,...t){}const y=new Map([]),C=new Map([["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Mvmultifactor"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoinWallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","AckiNackiBlockKeeperNodeWallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoinRoot"]]),m=new Map([]);async function D(){if(y.size>0)return;const n=await fetch("/abi/last",{method:"GET"});if(n.ok){const t=await n.json();for(const a of t)y.set(a[0],a[1])}}async function j(n){await D();const t=C.get(n);if(!t)return n;const a=y.get(t);return a||n}async function E(n){n=await j(n);try{if(m.has(n))return u(`getCodeSchema cashed ${n}`),m.get(n);const t=await fetch(`/abi/${n}`,{method:"GET"});if(!t.ok){u(`getCodeSchema error fetch ${n}`);return}const a=await t.json();if(!a.abi){u(`getCodeSchema error data ${n}`,{result:a});return}const e={name:a.name,abi:f.abiContract(a.abi)};return u(`getCodeSchema saved ${n}`,{data:e}),m.set(n,e),e}catch{u();return}}async function Q(n,t){try{return(await i.abi.decode_account_data({data:n,abi:t,allow_partial:!0})).data}catch{u()}}var N=(n=>(n.Indexer="Indexer",n.MvMultifactor="Mobile Verifier Multifactor",n.PopitGame="Popit Game",n))(N||{});const l=new Map([["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Mobile Verifier Multifactor"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","Popit Game"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"]]);async function R(n){var _;let t=n.trim();c(t)||(t=await d(t));const a=await w.getAccountBoc(t),{parsed:e}=await i.boc.parse_account({boc:a});if(!e)throw new Error("Failed to parse account BOC");var h=((_=e.balance_other)==null?void 0:_.map(p=>({id:p.currency,name:p.currency===1?"NACKL":"",value:parseInt(p.value,16)})))||[],o={accType:e.acc_type,accTypeName:e.acc_type_name,balances:h.concat([{id:0,name:"SHELL",value:parseInt(e.balance,16)}]),bits:parseInt(e.bits,16),boc:a,cells:parseInt(e.cells,16),code:e.code,codeHash:e.code_hash,data:e.data,dataHash:e.data_hash,id:e.id,initCodeHash:e.init_code_hash,jsonVersion:e.json_version,lastPaid:new Date(e.last_paid*1e3),lastTransLt:parseInt(e.last_trans_lt,16),publicCells:parseInt(e.public_cells,16),workchainId:e.workchain_id};const A=await E(e.init_code_hash);if(A&&A.abi){const p=await Q(e.data,A.abi);u("decodeData",{dataParsed:p,accountData:e,codeSchema:A}),p&&(o.dataParsed=p,o.contractName=A.name)}return new T(o)}async function x(n){let t=n.trim();c(t)||(t=await d(t));const a=await w.getAccountBoc(t),{parsed:e}=await i.boc.parse_account({boc:a});return k(e.data)}async function k(n){return(await i.abi.decode_account_data({abi:{type:"Json",value:r},data:n})).data._wallet}async function b(n){let t=n.trim();return c(t)||(t=await x(t)),(await i.abi.encode_message({abi:{type:"Json",value:g},deploy_set:{code:v,initial_data:{_pubkey:"0x0",_owner:t}},signer:{type:"None"}})).address}function c(n){const t=n.trim();return/^(0:|-1:)[0-9a-fA-F]{64}$/.test(t)}function H(n){const t=n.trim();return/^[0-9a-fA-F]{64}$/.test(t)}class T{constructor(t){s(this,"accType");s(this,"accTypeName");s(this,"balances");s(this,"bits");s(this,"boc");s(this,"cells");s(this,"code");s(this,"codeHash");s(this,"data");s(this,"dataHash");s(this,"id");s(this,"initCodeHash");s(this,"jsonVersion");s(this,"lastPaid");s(this,"lastTransLt");s(this,"publicCells");s(this,"workchainId");s(this,"dataParsed");s(this,"contractName");s(this,"_nameCache");s(this,"_namePromise");Object.assign(this,t)}get type(){return l.has(this.codeHash)&&l.get(this.codeHash)||null}async getName(){return typeof this._nameCache<"u"?this._nameCache:this._namePromise?this._namePromise:(this._namePromise=(async()=>{try{if(this.type==="Mobile Verifier Multifactor"){const t=await i.abi.decode_account_data({abi:{type:"Json",value:z},data:this.data});this._nameCache=t.data._name||null}else if(this.type==="Indexer"){const t=await i.abi.decode_account_data({abi:{type:"Json",value:r},data:this.data});this._nameCache=t.data._name||null}else this._nameCache=null}catch{this._nameCache=null}finally{this._namePromise=void 0}return this._nameCache})(),this._namePromise)}async getLinkedAccounts(){const t=new Map;if(this.type==="Mobile Verifier Multifactor"){const a=await this.getName();a&&t.set("Indexer",await d(a));const e=await b(this.id);return e&&t.set("Popit Game",e),t}else if(this.type==="Indexer"){const a=await k(this.data);if(a){t.set("Mobile Verifier Multifactor",a);const e=await b(a);e&&t.set("Popit Game",e)}}else if(this.type==="Popit Game"){const e=(await i.abi.decode_account_data({abi:{type:"Json",value:g},data:this.data})).data._owner;e&&t.set("Mobile Verifier Multifactor",e)}return t}}export{N as A,x as a,R as g,H as i};
