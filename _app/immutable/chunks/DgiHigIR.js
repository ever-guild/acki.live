var R=Object.defineProperty;var F=(n,t,a)=>t in n?R(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a;var i=(n,t,a)=>F(n,typeof t!="symbol"?t+"":t,a);import{d as U,w as O}from"./CWMWeSjT.js";import{r as f}from"./VzQr5Kw3.js";import{d as E}from"./B6saGABT.js";const z="production",V=typeof window<"u"?window.location.origin:"https://acki.live/",J="https://mainnet.ackinacki.org/graphql",I=z==="production",g={production:I,develop:!I,sandbox:z==="sandbox",api:V,graphqlEndpoint:J},K={en:{"navbar.closeOverlay":"Close","navbar.closeMenu":"Close menu","transactions.pageTitle":"Transaction","transactions.details.back":"Back to Transactions","transactions.details.title":"Transaction Details","transactions.details.loadErrorTitle":"Failed to load transaction","transactions.details.overview":"Overview","transactions.details.txId":"Transaction ID","transactions.details.status":"Status","transactions.details.accountAddress":"Account Address","transactions.details.timestamp":"Timestamp","transactions.details.balanceDelta":"Balance Delta","transactions.details.totalFees":"Total Fees","transactions.details.type":"Transaction Type","transactions.details.workchainId":"Workchain ID","transactions.details.computePhase":"Compute Phase","transactions.details.compute.success":"Success","transactions.details.compute.exitCode":"Exit Code","transactions.details.compute.gasUsed":"Gas Used","transactions.details.compute.gasFees":"Gas Fees","transactions.details.inputMsg":"Input Message","transactions.details.outputMsg":"Output Messages","transactions.details.from":"@:common.from","transactions.details.to":"@:common.to","transactions.details.value":"@:common.value","app.title":"Blockchain Explorer","app.loading":"Loading...","transactions.loadErrorTitle":"Failed to load transactions","showcase.loadErrorTitle":"Failed to load showcase data","showcase.networkHealth":"Network Health","showcase.recentActivity":"Recent Activity","showcase.topActiveAccounts":"Top Active Accounts","showcase.blockProductionRate":"Block Production Rate (Last 12 Hours)","showcase.messageTypeDistribution":"Message Type Distribution","showcase.loadingAccountData":"Loading account data...","showcase.loadingMessageData":"Loading message data...","error.defaultTitle":"Failed to load","error.retry":"Retry","stats.loadErrorTitle":"Failed to load statistics","stats.networkOverview":"Network Overview","stats.mock":"Mock","copy.copied":"Copied","navbar.searchPlaceholder":"name / address / msg / tx / block","navbar.search":"Search","navbar.noResults":"No results found","navbar.toggleMenu":"Toggle menu","navbar.toggleTheme":"Toggle theme","nav.blocks":"Blocks","nav.transactions":"Transactions","nav.messages":"Messages","nav.contracts":"Contracts","nav.stats":"Statistics","nav.showcase":"Showcase","blocks.title":"Recent Blocks","blocks.height":"Height","blocks.hash":"Hash","blocks.timestamp":"Timestamp","blocks.txCount":"Transactions","blocks.miner":"Miner","transactions.title":"Recent Transactions","transactions.hash":"Tx Hash","transactions.from":"@:common.from","transactions.to":"@:common.to","transactions.amount":"@:common.amount","transactions.status":"@:common.status","transactions.time":"@:common.time","messages.title":"Blockchain Messages","messages.from":"@:common.from","messages.to":"@:common.to","messages.type":"@:common.type","messages.timestamp":"@:common.time","messages.data":"@:common.data","contracts.title":"Smart Contracts","contracts.headers.name":"Name","contracts.headers.address":"Address","contracts.headers.description":"Description","contracts.headers.type":"Type","contracts.type.system":"System","contracts.address":"@:common.address","contracts.created":"Created","contracts.interactions":"Interactions","contracts.creator":"Creator","contracts.type":"Type","stats.title":"Network Statistics","stats.totalBlocks":"Total Blocks","stats.totalTransactions":"Total Transactions","stats.hashrate":"Network Hashrate","stats.activeAddresses":"Active Addresses","stats.avgBlockTime":"Avg Block Time","stats.difficulty":"Difficulty","stats.marketCap":"Market Cap","stats.price":"Price","showcase.title":"Blockchain Showcase","showcase.stat.blockProduction":"Block Production","showcase.stat.transactionThroughput":"Transaction Throughput","showcase.stat.networkLatency":"Network Latency","showcase.stat.normal":"Normal","showcase.stat.high":"High","showcase.stat.low":"Low","status.success":"@:common.success","status.pending":"@:common.pending","common.messageId":"Message ID","common.external":"External","common.from":"From","common.to":"To","common.value":"Value","common.status":"Status","common.type":"Type","common.time":"Time","common.amount":"Amount","common.address":"Address","common.data":"Data","common.success":"Success","common.failed":"Failed","common.pending":"Pending","common.or":"or","common.and":"and","common.updatable":"Updatable","social.feedback":"Feature request","social.security":"security report","social.stayTuned":"Stay tuned for updates","account.title":"Account","account.type":"Type","account.address":"Address","account.balance":"Balance","account.lastPaid":"Last Paid","account.neverPaid":"Never paid","account.linkedAccounts":"Linked Accounts","account.linked.none":"No linked accounts","account.recentTransactions":"Recent Transactions","account.noTransactions":"No transactions found for this account","account.notFound":"Account not found","account.txId":"Transaction ID","account.status":"Status","account.balanceChange":"Balance Change","account.fees":"Fees","account.time":"Time","account.aborted":"Aborted","account.codeData":"Code & Data","account.codeHash":"Code Hash","account.dataHash":"Data Hash","account.initCodeHash":"Init Code Hash","account.code":"Code","account.lastTransLt":"Last Transaction LT","account.bits":"Bits","account.cells":"Cells","account.publicCells":"Public Cells","account.data":"Data","account.upgradableStatus":"Upgrade status","account.name":"Name","status.failed":"Failed"},ru:{"navbar.closeOverlay":"Закрыть","navbar.closeMenu":"Закрыть меню","transactions.pageTitle":"Транзакция","transactions.details.back":"Назад к транзакциям","transactions.details.title":"Детали транзакции","transactions.details.loadErrorTitle":"Не удалось загрузить транзакцию","transactions.details.overview":"Обзор","transactions.details.txId":"ID транзакции","transactions.details.status":"Статус","transactions.details.accountAddress":"Адрес аккаунта","transactions.details.timestamp":"Время","transactions.details.balanceDelta":"Изменение баланса","transactions.details.totalFees":"Комиссии","transactions.details.type":"Тип транзакции","transactions.details.workchainId":"Workchain ID","transactions.details.computePhase":"Фаза вычисления","transactions.details.compute.success":"Успех","transactions.details.compute.exitCode":"Код выхода","transactions.details.compute.gasUsed":"Использовано газа","transactions.details.compute.gasFees":"Комиссии за газ","transactions.details.inputMsg":"Входящее сообщение","transactions.details.outputMsg":"Исходящие сообщения","transactions.details.from":"@:common.from","transactions.details.to":"@:common.to","transactions.details.value":"@:common.value","app.title":"Блокчейн-обозреватель","app.loading":"Загрузка...","transactions.loadErrorTitle":"Не удалось загрузить транзакции","showcase.loadErrorTitle":"Не удалось загрузить данные витрины","showcase.networkHealth":"Здоровье сети","showcase.recentActivity":"Последняя активность","showcase.topActiveAccounts":"Топ активных аккаунтов","showcase.blockProductionRate":"Производство блоков (последние 12 часов)","showcase.messageTypeDistribution":"Распределение типов сообщений","showcase.loadingAccountData":"Загрузка данных аккаунтов...","showcase.loadingMessageData":"Загрузка данных сообщений...","error.defaultTitle":"Не удалось загрузить","error.retry":"Повторить","stats.loadErrorTitle":"Не удалось загрузить статистику","stats.networkOverview":"Обзор сети","stats.mock":"Тестовые данные","copy.copied":"Скопировано","navbar.searchPlaceholder":"имя / адрес / сообщение / tx / блок","navbar.search":"Поиск","navbar.noResults":"Результатов не найдено","navbar.toggleMenu":"Показать меню","navbar.toggleTheme":"Переключить тему","nav.blocks":"Блоки","nav.transactions":"Транзакции","nav.messages":"Сообщения","nav.contracts":"Контракты","nav.stats":"Статистика","nav.showcase":"Витрина","blocks.title":"Последние блоки","blocks.height":"Высота","blocks.hash":"Хэш","blocks.timestamp":"Время","blocks.txCount":"Транзакций","blocks.miner":"Майнер","transactions.title":"Последние транзакции","transactions.hash":"Хэш транзакции","transactions.from":"@:common.from","transactions.to":"@:common.to","transactions.amount":"@:common.amount","transactions.status":"@:common.status","transactions.time":"@:common.time","messages.title":"Сообщения блокчейна","messages.from":"@:common.from","messages.to":"@:common.to","messages.type":"@:common.type","messages.timestamp":"@:common.time","messages.data":"@:common.data","contracts.title":"Смарт-контракты","contracts.headers.name":"Имя","contracts.headers.address":"Адрес","contracts.headers.description":"Описание","contracts.headers.type":"Тип","contracts.type.system":"Система","contracts.address":"@:common.address","contracts.created":"Создан","contracts.interactions":"Взаимодействий","contracts.creator":"Создатель","contracts.type":"Тип","stats.title":"Статистика сети","stats.totalBlocks":"Всего блоков","stats.totalTransactions":"Всего транзакций","stats.hashrate":"Хэшрейт сети","stats.activeAddresses":"Активных адресов","stats.avgBlockTime":"Среднее время блока","stats.difficulty":"Сложность","stats.marketCap":"Рыночная капитализация","stats.price":"Цена","showcase.title":"Витрина блокчейна","showcase.stat.blockProduction":"Производство блоков","showcase.stat.transactionThroughput":"Пропускная способность транзакций","showcase.stat.networkLatency":"Задержка сети","showcase.stat.normal":"Нормально","showcase.stat.high":"Высокая","showcase.stat.low":"Низкая","status.success":"@:common.success","status.pending":"@:common.pending","common.external":"Внешние","common.from":"От","common.to":"Кому","common.value":"Значение","common.status":"Статус","common.type":"Тип","common.time":"Время","common.amount":"Сумма","common.address":"Адрес","common.data":"Данные","common.success":"Успешно","common.failed":"Неудачно","common.pending":"В ожидании","common.or":"или","common.and":"и","common.updatable":"Обновляемый","social.feedback":"Запрос функции","social.security":"отчет по безопасности","social.stayTuned":"Следите за обновлениями","account.title":"Аккаунт","account.type":"Тип","account.address":"Адрес","account.balance":"Баланс","account.lastPaid":"Последняя выплата","account.neverPaid":"Еще не было выплат","account.name":"Имя","account.linkedAccounts":"Связанные аккаунты","account.linked.none":"Связанных аккаунтов нет","account.recentTransactions":"Последние транзакции","account.noTransactions":"Транзакции для этого аккаунта не найдены","account.notFound":"Аккаунт не найден","account.txId":"ID транзакции","account.status":"Статус","account.balanceChange":"Изменение баланса","account.fees":"Комиссии","account.time":"Время","account.aborted":"Прервано","account.codeData":"Код и данные","account.codeHash":"Хэш кода","account.dataHash":"Хэш данных","account.initCodeHash":"Хэш init-кода","account.code":"Код","account.lastTransLt":"LT последней транзакции","account.bits":"Биты","account.cells":"Ячейки","account.publicCells":"Публичные ячейки","account.data":"Данные","account.upgradableStatus":"Статус обновления","status.failed":"Неудачно"}};function W(){const n=localStorage.getItem("language")||"en",{subscribe:t,set:a}=O(n);return{subscribe:t,setLanguage:e=>{localStorage.setItem("language",e),a(e)}}}const Y=W(),gt=U(Y,n=>{function t(a,e=new Set){if(e.has(a))return a;e.add(a);const o=K[n][a];if(!o)return a;if(o.startsWith("@:")){const c=o.slice(2);return t(c,e)}return o}return a=>t(a)}),l={GetInfo:`
    query GetInfo {
      info {
        lastBlockTime
        blocksLatency
      }
    }
  `,GetBlockStats:`
    query GetBlockStats($limit: Int!) {
      blocks(orderBy: [{ path: "seq_no", direction: DESC }], limit: $limit) {
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
  `};class X{async getStats(){var r,A;const[t,a]=await Promise.all([this.post(l.GetInfo),this.post(l.GetBlockStats,{limit:10})]),e=(r=t.data)==null?void 0:r.info,o=(A=a.data)==null?void 0:A.blocks;let c="~15s";if(o&&o.length>1){const u=o.map(s=>s.gen_utime).filter(Boolean);if(u.length>1){const s=[];for(let _=1;_<u.length;_++)s.push(Math.abs(u[_]-u[_-1]));c=`${(s.reduce((_,H)=>_+H,0)/s.length).toFixed(1)}s`}}const p=(o==null?void 0:o.reduce((u,s)=>u+(s.tr_count||0),0))||0;return{totalBlocks:e!=null&&e.lastBlockTime?Math.floor(e.lastBlockTime/15e3):1234567,totalTransactions:p*1e3||9876543,hashrate:"234.5 TH/s",activeAddresses:45678,avgBlockTime:c,difficulty:"12.34T",marketCap:"$1.23B",price:"$2,345.67"}}async getContracts(){var a;const t=await this.post(l.GetAccounts);if((a=t.data)!=null&&a.accounts)return t.data.accounts.filter(e=>e.acc_type_name==="Active"&&e.code_hash).map(e=>({address:e.address,created:e.last_paid}));throw new Error("Failed to fetch contracts")}async getMessages(t=20){const a=await this.post(l.GetMessages,{limit:t});if(a!=null&&a.messages)return a.messages.map(e=>({id:e.id,from:e.src,to:e.dst,type:e.msg_type_name,data:e.body,timestamp:new Date(e.created_at*1e3),value:e.value,msg_type_name:e.msg_type_name}));throw new Error("Failed to fetch messages")}async getLatestTransactions(t=25){const a=await this.post(l.GetLatestTransactions,{limit:t});if(a!=null&&a.transactions)return a.transactions.map(e=>{var p,r;const o=(p=e.in_message)!=null&&p.value?parseFloat(e.in_message.value)/1e9:0;let c="pending";return e.aborted?c="failed":e.status_name==="Finalized"&&(c="success"),{hash:e.id,from:(r=e.in_message)==null?void 0:r.src,to:e.account_addr,amount:o,status:c,timestamp:new Date(e.now*1e3)}});throw new Error("Failed to fetch transactions")}async getLatestBlocks(t=20){const a=await this.post(l.GetLatestBlocks,{limit:t});if(a!=null&&a.blocks)return a.blocks.map(o=>({height:o.seq_no||0,hash:o.hash||"",timestamp:new Date(o.gen_utime*1e3),txCount:o.tr_count||0}));throw new Error("Failed to fetch blocks")}async getAccountBoc(t){var e,o;const a=await this.post(l.GetAccountBoc,{address:t});if((e=a.account)!=null&&e.info)return((o=a.account)==null?void 0:o.info.boc)||null;throw new Error("Account not found")}async getAccountTransactions(t){const a=await this.post(l.GetAccountTransactions,{address:t,limit:20});if(a!=null&&a.transactions)return a.transactions;throw new Error("No transactions found")}async request(t,a,e){const c=await(await fetch(g.graphqlEndpoint,{method:t,headers:{"Content-Type":"text/plain"},body:JSON.stringify({query:a,variables:e})})).json();return c.errors?(console.error("Error loading data:",c.errors),null):c.data}post(t,a={}){return this.request("POST",t,a)}}const B=new X,v=`{
  "ABI version": 2,
  "version": "2.4",
  "header": ["pubkey", "time", "expire"],
  "functions": [
    {
      "name": "constructor",
      "inputs": [
        { "name": "wallet", "type": "address" },
        { "name": "rootPubkey", "type": "uint256" },
        { "name": "index", "type": "uint128" },
        { "name": "root", "type": "address" }
      ],
      "outputs": []
    },
    {
      "name": "isOwner",
      "inputs": [
        { "name": "wallet", "type": "address" },
        { "name": "zkid", "type": "string" },
        { "name": "proof", "type": "bytes" },
        { "name": "epk", "type": "uint256" },
        { "name": "epk_sig", "type": "bytes" },
        { "name": "epk_expire_at", "type": "uint64" },
        { "name": "jwk_modulus", "type": "bytes" },
        { "name": "kid", "type": "bytes" },
        { "name": "jwk_modulus_expire_at", "type": "uint64" },
        { "name": "index_mod_4", "type": "uint8" },
        { "name": "iss_base_64", "type": "string" },
        { "name": "provider", "type": "string" },
        { "name": "header_base_64", "type": "string" },
        { "name": "pub_recovery_key", "type": "uint256" },
        { "name": "pub_recovery_key_sig", "type": "bytes" },
        { "name": "jwk_update_key", "type": "uint256" },
        { "name": "jwk_update_key_sig", "type": "bytes" },
        { "name": "root_provider_certificates", "type": "map(uint256,bytes)" },
        { "name": "owner_pubkey", "type": "uint256" },
        { "name": "index", "type": "uint128" }
      ],
      "outputs": []
    },
    {
      "name": "isOwnerRoot",
      "inputs": [
        { "name": "wallet", "type": "address" },
        { "name": "zkid", "type": "string" },
        { "name": "proof", "type": "bytes" },
        { "name": "epk", "type": "uint256" },
        { "name": "epk_sig", "type": "bytes" },
        { "name": "epk_expire_at", "type": "uint64" },
        { "name": "jwk_modulus", "type": "bytes" },
        { "name": "kid", "type": "bytes" },
        { "name": "jwk_modulus_expire_at", "type": "uint64" },
        { "name": "index_mod_4", "type": "uint8" },
        { "name": "iss_base_64", "type": "string" },
        { "name": "provider", "type": "string" },
        { "name": "header_base_64", "type": "string" },
        { "name": "pub_recovery_key", "type": "uint256" },
        { "name": "pub_recovery_key_sig", "type": "bytes" },
        { "name": "jwk_update_key", "type": "uint256" },
        { "name": "jwk_update_key_sig", "type": "bytes" },
        { "name": "root_provider_certificates", "type": "map(uint256,bytes)" },
        { "name": "owner_pubkey", "type": "uint256" },
        { "name": "mirror", "type": "address" }
      ],
      "outputs": []
    },
    {
      "name": "setNewWallet",
      "inputs": [{ "name": "wallet", "type": "address" }],
      "outputs": []
    },
    {
      "name": "destroyNode",
      "inputs": [],
      "outputs": []
    },
    {
      "name": "getDetails",
      "inputs": [],
      "outputs": [
        { "name": "name", "type": "string" },
        { "name": "wallet", "type": "address" }
      ]
    },
    {
      "name": "getVersion",
      "inputs": [],
      "outputs": [
        { "name": "value0", "type": "string" },
        { "name": "value1", "type": "string" }
      ]
    }
  ],
  "events": [],
  "fields": [
    { "init": true, "name": "_pubkey", "type": "uint256" },
    { "init": false, "name": "_timestamp", "type": "uint64" },
    { "init": false, "name": "_constructorFlag", "type": "bool" },
    { "init": true, "name": "_name", "type": "string" },
    { "init": false, "name": "_wallet", "type": "address" },
    { "init": false, "name": "_root", "type": "address" },
    { "init": false, "name": "_rootPubkey", "type": "uint256" }
  ]
}
`,q="te6ccgECIwEABTUABCSK7VMg4wMgwP/jAiDA/uMC8gseAwEiArSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4igwjXGCD4KMjOzsn5AAHTAAGU0/9QM5MC+ELiIPhl+RDyqJXTAAHyeuLTPwEcAgFO+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8BANa7UTQgQFA1yHXCgD4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8HR0EBFAgghAxmusDu+MCIIIQQ/WwObvjAiCCEEqi0HG64wIgghBqk6xjuuMCEQkHBQN+MPhG8uBM+EJu4wAhk9TR0N76QNTU0//U0z/U0dDU1NM/0wfU1NHQ1NTT/9TT/9TR0NT0BNP/+kDR2zzbPPIAHAYYAfD4RSBukjBw3vhNuvLhkvgA2zyAE2H4a4ASYoAScGR/+EqAFGHIz4WIzo0EkBfXhAAAAAAAAAAAAAAAAAAADM8WgBRiyM+QCdUYYszKAMzMy/9V4MjMyz/MzMs/ywdVgMjMzMzL/1VAyMzL/8z0AMv/zc3Nzclx+wANAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyABwIGAAa+En4S8cF8uGX+AD4awIoIIIQP9hWVbrjAiCCEEP1sDm64wIOCgN+MPhG8uBM+EJu4wAhk9TR0N76QNTU0//U0z/U0dDU1NM/0wfU1NHQ1NTT/9TT/9TR0NT0BNP/03/R2zzjAPIAHAsTAvT4ACDC//LhmiCBA+i58uGagvAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaDIz4oAQMv/ydD4SccF8uGX2zz4S4ATYccFgBJigBJwZIASYfhK+EnIz4WIzo0EkBfXhAAAAAAAAAAAAAAAAAAADM8WgBRiyA0MAGjPkAnVGGLMygDMzMv/VeDIzMs/zMzLP8sHVYDIzMzMy/9VQMjMy//M9ADL/83Nzc3JcfsAACz4J28QghgXSHboALzcghgXSHboAMcoAmIw+Eby4EzR2zwijh4k0NMB+kAwMcjPhyDOgGLPQBLPkv9hWVbMzMlw+wCRW+LjAPIADxMCBIiIIBAADkluZGV4ZXIDMiDAAeMCIIIQH2q/6rrjAiCCEDGa6wO64wIXFRIDcDD4RvLgTPhCbuMA0ds8Io4gJNDTAfpAMDHIz4cgznHPC2ECyM+SxmusDszOzclw+wCRW+LjAPIAHBQTACjtRNDT/9M/MfhDWMjL/8s/zsntVAAI+Er4SwMkMPhG8uBM+EJu4wDR2zzbPPIAHBYYADj4SfgoxwXy4Zf4APgoyM+FCM6Ac89AyYEAoPsABPgw+EJu4wD4RvJzIZPU0dDe+kDT/9N/1NHQ+kDR+AD4Kts8IG7yf9DU0Yj5AAH5ALry4Zf4bFj4awH4bYLwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgyM+KAEDL/8nQ+En4TMcFmPhJIccF8uGX3zDbPPIAHBkgGAA8+E34TPhL+Er4Q/hCyMv/yz/Pg8zOWcjOy//Nye1UAhjQIIs4rbNYxwWKiuIaGwEK103Q2zwbAEjXTNCLL0pA1yb0BDHTCTGLX0vfLATo1yYg10rCAZLXTZIwbeIARO1E0NP/0z/TANT6QNTR0PpA0//R+G34bPhr+Gr4Zvhj+GIACvhG8uBMAxD0pCD0vfLATiIhHwEAIAAKMS4wLjAAFHNvbCAwLjc5LjMAAA==",Z="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",m=new E.TvmClient;async function C(n){return(await m.abi.encode_message({abi:{type:"Json",value:v},deploy_set:{code:q,initial_data:{_pubkey:"0x0",_name:n}},signer:{type:"None"}})).address}const j=`{
  "ABI version": 2,
  "version": "2.4",
  "header": ["pubkey", "time", "expire"],
  "functions": [
    {
      "name": "constructor",
      "inputs": [
        { "name": "code", "type": "map(uint8,cell)" },
        { "name": "root_pubkey", "type": "uint256" },
        { "name": "index", "type": "uint128" }
      ],
      "outputs": []
    },
    {
      "name": "addValuePopit",
      "inputs": [
        { "name": "name", "type": "string" },
        { "name": "id", "type": "uint256" },
        { "name": "value", "type": "uint64" }
      ],
      "outputs": []
    },
    {
      "name": "popCoinRootDeployed",
      "inputs": [{ "name": "name", "type": "string" }],
      "outputs": []
    },
    {
      "name": "popCoinWalletDeployed",
      "inputs": [{ "name": "name", "type": "string" }],
      "outputs": []
    },
    {
      "name": "setMbiCur",
      "inputs": [{ "name": "mbiCur", "type": "uint64" }],
      "outputs": []
    },
    {
      "name": "deployPopCoinWallet",
      "inputs": [
        { "name": "name", "type": "string" },
        { "name": "value", "type": "uint64" }
      ],
      "outputs": []
    },
    {
      "name": "deployPopCoinWalletOldTransfer",
      "inputs": [
        { "name": "name", "type": "string" },
        { "name": "value", "type": "uint64" }
      ],
      "outputs": []
    },
    {
      "name": "withdraw",
      "inputs": [
        { "name": "value", "type": "uint128" },
        { "name": "to", "type": "address" }
      ],
      "outputs": []
    },
    {
      "name": "getPopCoinWalletAddress",
      "inputs": [{ "name": "name", "type": "string" }],
      "outputs": [{ "name": "popCoinWalletAddress", "type": "address" }]
    },
    {
      "name": "getDetails",
      "inputs": [],
      "outputs": [
        { "name": "owner", "type": "address" },
        { "name": "root", "type": "address" },
        { "name": "startTime", "type": "uint32" },
        { "name": "mbiCur", "type": "uint64" },
        { "name": "boost", "type": "address" },
        { "name": "rewards", "type": "uint128" },
        { "name": "minstake", "type": "uint128" }
      ]
    },
    {
      "name": "getVersion",
      "inputs": [],
      "outputs": [
        { "name": "value0", "type": "string" },
        { "name": "value1", "type": "string" }
      ]
    }
  ],
  "events": [
    {
      "name": "PopCoinRootReceived",
      "inputs": [{ "name": "name", "type": "string" }],
      "outputs": []
    },
    {
      "name": "PopCoinWalletReceived",
      "inputs": [{ "name": "name", "type": "string" }],
      "outputs": []
    }
  ],
  "fields": [
    { "init": true, "name": "_pubkey", "type": "uint256" },
    { "init": false, "name": "_timestamp", "type": "uint64" },
    { "init": false, "name": "_constructorFlag", "type": "bool" },
    { "init": false, "name": "_code", "type": "map(uint8,cell)" },
    { "init": true, "name": "_owner", "type": "address" },
    { "init": false, "name": "_mbiCur", "type": "uint64" },
    { "init": false, "name": "_root", "type": "address" },
    { "init": false, "name": "_startTime", "type": "uint32" },
    { "init": false, "name": "_root_pubkey", "type": "uint256" },
    { "init": false, "name": "_boost", "type": "address" },
    { "init": false, "name": "_rewards", "type": "uint128" }
  ]
}
`,$=`{
  "ABI version": 2,
  "version": "2.4",
  "header": ["pubkey", "time", "expire"],
  "functions": [
    {
      "name": "constructor",
      "inputs": [
        { "name": "name", "type": "string" },
        { "name": "zkid", "type": "string" },
        { "name": "proof", "type": "bytes" },
        { "name": "epk", "type": "uint256" },
        { "name": "epk_sig", "type": "bytes" },
        { "name": "epk_expire_at", "type": "uint64" },
        { "name": "jwk_modulus", "type": "bytes" },
        { "name": "kid", "type": "bytes" },
        { "name": "jwk_modulus_expire_at", "type": "uint64" },
        { "name": "index_mod_4", "type": "uint8" },
        { "name": "iss_base_64", "type": "string" },
        { "name": "provider", "type": "string" },
        { "name": "header_base_64", "type": "string" },
        { "name": "pub_recovery_key", "type": "uint256" },
        { "name": "pub_recovery_key_sig", "type": "bytes" },
        { "name": "jwk_update_key", "type": "uint256" },
        { "name": "jwk_update_key_sig", "type": "bytes" },
        { "name": "root_provider_certificates", "type": "map(uint256,bytes)" },
        { "name": "index", "type": "uint128" }
      ],
      "outputs": []
    },
    {
      "name": "cleanWhiteList",
      "inputs": [{ "name": "epk_expire_at", "type": "uint32" }],
      "outputs": []
    },
    {
      "name": "updateWhiteList",
      "inputs": [
        { "name": "epk_expire_at", "type": "uint32" },
        { "name": "index", "type": "uint8" },
        { "name": "name", "type": "string" },
        { "name": "indexMirror", "type": "uint128" }
      ],
      "outputs": []
    },
    {
      "name": "setWhiteList",
      "inputs": [
        { "name": "new_addr", "type": "address" },
        { "name": "index", "type": "uint128" }
      ],
      "outputs": []
    },
    {
      "name": "addJwkModulus",
      "inputs": [
        { "name": "root_cert_sn", "type": "uint256" },
        { "name": "lv_kid", "type": "bytes" },
        { "name": "tls_data", "type": "bytes" }
      ],
      "outputs": [{ "name": "success", "type": "bool" }]
    },
    {
      "name": "deleteJwkModulusByUpdateJwkKey",
      "inputs": [{ "name": "kid", "type": "bytes" }],
      "outputs": []
    },
    {
      "name": "cleanAllExpiredJwks",
      "inputs": [{ "name": "epk_expire_at", "type": "uint64" }],
      "outputs": []
    },
    {
      "name": "deleteJwkModulusByFactor",
      "inputs": [
        { "name": "epk_expire_at", "type": "uint64" },
        { "name": "kid", "type": "bytes" }
      ],
      "outputs": []
    },
    {
      "name": "addZKPfactor",
      "inputs": [
        { "name": "proof", "type": "bytes" },
        { "name": "epk", "type": "uint256" },
        { "name": "kid", "type": "bytes" },
        { "name": "header_base_64", "type": "string" },
        { "name": "epk_expire_at", "type": "uint64" }
      ],
      "outputs": [{ "name": "success", "type": "bool" }]
    },
    {
      "name": "deleteZKPfactorByItself",
      "inputs": [{ "name": "epk_expire_at", "type": "uint64" }],
      "outputs": []
    },
    {
      "name": "cleanAllExpiredZKPFactors",
      "inputs": [{ "name": "epk_expire_at", "type": "uint64" }],
      "outputs": []
    },
    {
      "name": "setWasmHash",
      "inputs": [{ "name": "wasm_hash", "type": "bytes" }],
      "outputs": []
    },
    {
      "name": "setForceRemoveOldest",
      "inputs": [{ "name": "flag", "type": "bool" }],
      "outputs": []
    },
    {
      "name": "addRootProviderCertificate",
      "inputs": [
        { "name": "sn", "type": "uint256" },
        { "name": "root_provider_certificate", "type": "bytes" }
      ],
      "outputs": []
    },
    {
      "name": "deleteRootProviderCertificate",
      "inputs": [{ "name": "sn", "type": "uint256" }],
      "outputs": []
    },
    {
      "name": "cleanRootProviderCertificates",
      "inputs": [],
      "outputs": []
    },
    {
      "name": "cleanAllJwks",
      "inputs": [],
      "outputs": []
    },
    {
      "name": "cleanAllZKPFactors",
      "inputs": [],
      "outputs": []
    },
    {
      "name": "updateRecoveryPhrase",
      "inputs": [
        { "name": "new_pub_recovery_key", "type": "uint256" },
        { "name": "new_pub_recovery_key_sig", "type": "bytes" }
      ],
      "outputs": []
    },
    {
      "name": "updateJwkUpdateKey",
      "inputs": [
        { "name": "new_jwk_update_key", "type": "uint256" },
        { "name": "new_jwk_update_key_sig", "type": "bytes" }
      ],
      "outputs": []
    },
    {
      "name": "updateZkid",
      "inputs": [
        { "name": "zkid", "type": "string" },
        { "name": "proof", "type": "bytes" },
        { "name": "epk", "type": "uint256" },
        { "name": "epk_sig", "type": "bytes" },
        { "name": "kid", "type": "bytes" },
        { "name": "jwk_modulus", "type": "bytes" },
        { "name": "jwk_modulus_expire_at", "type": "uint64" },
        { "name": "index_mod_4", "type": "uint8" },
        { "name": "iss_base_64", "type": "string" },
        { "name": "header_base_64", "type": "string" },
        { "name": "epk_expire_at", "type": "uint64" },
        { "name": "jwk_update_key", "type": "uint256" },
        { "name": "jwk_update_key_sig", "type": "bytes" },
        { "name": "provider", "type": "string" },
        { "name": "root_provider_certificates", "type": "map(uint256,bytes)" }
      ],
      "outputs": []
    },
    {
      "name": "updateSeedPhrase",
      "inputs": [
        { "name": "new_owner_pubkey", "type": "uint256" },
        { "name": "new_owner_pubkey_sig", "type": "bytes" }
      ],
      "outputs": []
    },
    {
      "name": "deleteJwkModulus",
      "inputs": [{ "name": "kid", "type": "bytes" }],
      "outputs": []
    },
    {
      "name": "deleteZKPfactor",
      "inputs": [
        { "name": "epk_expire_at", "type": "uint64" },
        { "name": "epk", "type": "uint256" }
      ],
      "outputs": []
    },
    {
      "name": "deleteZKPfactor_",
      "inputs": [{ "name": "epk", "type": "uint256" }],
      "outputs": []
    },
    {
      "name": "changeSeedPhrase",
      "inputs": [
        { "name": "epk_expire_at", "type": "uint64" },
        { "name": "new_owner_pubkey", "type": "uint256" },
        { "name": "new_owner_pubkey_sig", "type": "bytes" }
      ],
      "outputs": []
    },
    {
      "name": "acceptCandidateSeedPhrase",
      "inputs": [{ "name": "new_owner_pubkey", "type": "uint256" }],
      "outputs": []
    },
    {
      "name": "deleteCandidateSeedPhrase",
      "inputs": [{ "name": "epk_expire_at", "type": "uint64" }],
      "outputs": []
    },
    {
      "name": "addSecurityCard",
      "inputs": [
        { "name": "pubkey", "type": "uint256" },
        { "name": "pubkey_sig", "type": "bytes" }
      ],
      "outputs": []
    },
    {
      "name": "turnOffSecurityCards",
      "inputs": [],
      "outputs": []
    },
    {
      "name": "turnOnSecurityCards",
      "inputs": [],
      "outputs": []
    },
    {
      "name": "deleteSecurityCard",
      "inputs": [{ "name": "pubkey", "type": "uint256" }],
      "outputs": []
    },
    {
      "name": "deleteAllSecurityCards",
      "inputs": [],
      "outputs": []
    },
    {
      "name": "sendTransaction",
      "inputs": [
        { "name": "epk_expire_at", "type": "uint64" },
        { "name": "dest", "type": "address" },
        { "name": "value", "type": "uint128" },
        { "name": "cc", "type": "map(uint32,varuint32)" },
        { "name": "bounce", "type": "bool" },
        { "name": "flags", "type": "uint8" },
        { "name": "payload", "type": "cell" }
      ],
      "outputs": [{ "name": "value0", "type": "address" }]
    },
    {
      "name": "submitTransaction",
      "inputs": [
        { "name": "epk_expire_at", "type": "uint64" },
        { "name": "dest", "type": "address" },
        { "name": "value", "type": "uint128" },
        { "name": "cc", "type": "map(uint32,varuint32)" },
        { "name": "bounce", "type": "bool" },
        { "name": "allBalance", "type": "bool" },
        { "name": "payload", "type": "cell" }
      ],
      "outputs": [{ "name": "transId", "type": "uint64" }]
    },
    {
      "name": "confirmTransaction",
      "inputs": [{ "name": "transactionId", "type": "uint64" }],
      "outputs": []
    },
    {
      "name": "setMaxCleanupTxns",
      "inputs": [
        { "name": "epk_expire_at", "type": "uint64" },
        { "name": "value", "type": "uint256" }
      ],
      "outputs": []
    },
    {
      "name": "setMinValue",
      "inputs": [
        { "name": "epk_expire_at", "type": "uint64" },
        { "name": "value", "type": "uint128" }
      ],
      "outputs": []
    },
    {
      "name": "getTransaction",
      "inputs": [{ "name": "transactionId", "type": "uint64" }],
      "outputs": [
        {
          "components": [
            { "name": "id", "type": "uint64" },
            { "name": "creator", "type": "uint256" },
            { "name": "dest", "type": "address" },
            { "name": "value", "type": "uint128" },
            { "name": "cc", "type": "map(uint32,varuint32)" },
            { "name": "sendFlags", "type": "uint16" },
            { "name": "payload", "type": "cell" },
            { "name": "bounce", "type": "bool" }
          ],
          "name": "trans",
          "type": "tuple"
        }
      ]
    },
    {
      "name": "getTransactions",
      "inputs": [],
      "outputs": [
        {
          "components": [
            { "name": "id", "type": "uint64" },
            { "name": "creator", "type": "uint256" },
            { "name": "dest", "type": "address" },
            { "name": "value", "type": "uint128" },
            { "name": "cc", "type": "map(uint32,varuint32)" },
            { "name": "sendFlags", "type": "uint16" },
            { "name": "payload", "type": "cell" },
            { "name": "bounce", "type": "bool" }
          ],
          "name": "transactions",
          "type": "tuple[]"
        }
      ]
    },
    {
      "name": "getTransactionIds",
      "inputs": [],
      "outputs": [{ "name": "ids", "type": "uint64[]" }]
    },
    {
      "name": "getZKPEphemeralPublicKeys",
      "inputs": [],
      "outputs": [{ "name": "value0", "type": "uint256[]" }]
    },
    {
      "name": "getTimeStamp",
      "inputs": [],
      "outputs": [{ "name": "value0", "type": "uint32" }]
    },
    {
      "name": "getSecurityCardKeys",
      "inputs": [],
      "outputs": [{ "name": "sc_keys", "type": "uint256[]" }]
    },
    {
      "name": "get_epk_expire_at",
      "inputs": [{ "name": "epk", "type": "uint256" }],
      "outputs": [{ "name": "value0", "type": "uint64" }]
    },
    {
      "name": "getVersion",
      "inputs": [],
      "outputs": [
        { "name": "value0", "type": "string" },
        { "name": "value1", "type": "string" }
      ]
    },
    {
      "name": "_factors_ordered_by_timestamp",
      "inputs": [],
      "outputs": [{ "name": "_factors_ordered_by_timestamp", "type": "map(uint256,uint256)" }]
    },
    {
      "name": "_factors_len",
      "inputs": [],
      "outputs": [{ "name": "_factors_len", "type": "uint8" }]
    },
    {
      "name": "_name",
      "inputs": [],
      "outputs": [{ "name": "_name", "type": "string" }]
    },
    {
      "name": "_pub_recovery_key",
      "inputs": [],
      "outputs": [{ "name": "_pub_recovery_key", "type": "uint256" }]
    },
    {
      "name": "_jwk_update_key",
      "inputs": [],
      "outputs": [{ "name": "_jwk_update_key", "type": "uint256" }]
    },
    {
      "name": "_root_provider_certificates",
      "inputs": [],
      "outputs": [{ "name": "_root_provider_certificates", "type": "map(uint256,bytes)" }]
    },
    {
      "name": "_jwk_modulus_data",
      "inputs": [],
      "outputs": [
        {
          "components": [
            { "name": "modulus", "type": "bytes" },
            { "name": "modulus_expire_at", "type": "uint64" }
          ],
          "name": "_jwk_modulus_data",
          "type": "map(uint256,tuple)"
        }
      ]
    },
    {
      "name": "_jwk_modulus_data_len",
      "inputs": [],
      "outputs": [{ "name": "_jwk_modulus_data_len", "type": "uint8" }]
    },
    {
      "name": "_zkid",
      "inputs": [],
      "outputs": [{ "name": "_zkid", "type": "string" }]
    },
    {
      "name": "_index_mod_4",
      "inputs": [],
      "outputs": [{ "name": "_index_mod_4", "type": "uint8" }]
    },
    {
      "name": "_iss_base_64",
      "inputs": [],
      "outputs": [{ "name": "_iss_base_64", "type": "string" }]
    },
    {
      "name": "_lv_provider_bytes",
      "inputs": [],
      "outputs": [{ "name": "_lv_provider_bytes", "type": "bytes" }]
    },
    {
      "name": "_use_security_card",
      "inputs": [],
      "outputs": [{ "name": "_use_security_card", "type": "bool" }]
    },
    {
      "name": "_m_security_cards",
      "inputs": [],
      "outputs": [{ "name": "_m_security_cards", "type": "map(uint256,bool)" }]
    },
    {
      "name": "_m_security_cards_len",
      "inputs": [],
      "outputs": [{ "name": "_m_security_cards_len", "type": "uint8" }]
    },
    {
      "name": "_m_transactions",
      "inputs": [],
      "outputs": [
        {
          "components": [
            { "name": "id", "type": "uint64" },
            { "name": "creator", "type": "uint256" },
            { "name": "dest", "type": "address" },
            { "name": "value", "type": "uint128" },
            { "name": "cc", "type": "map(uint32,varuint32)" },
            { "name": "sendFlags", "type": "uint16" },
            { "name": "payload", "type": "cell" },
            { "name": "bounce", "type": "bool" }
          ],
          "name": "_m_transactions",
          "type": "map(uint64,tuple)"
        }
      ]
    },
    {
      "name": "_m_transactions_len",
      "inputs": [],
      "outputs": [{ "name": "_m_transactions_len", "type": "uint8" }]
    },
    {
      "name": "_min_value",
      "inputs": [],
      "outputs": [{ "name": "_min_value", "type": "uint128" }]
    },
    {
      "name": "_max_cleanup_txns",
      "inputs": [],
      "outputs": [{ "name": "_max_cleanup_txns", "type": "uint256" }]
    },
    {
      "name": "_force_remove_oldest",
      "inputs": [],
      "outputs": [{ "name": "_force_remove_oldest", "type": "bool" }]
    },
    {
      "name": "_verification_key_index",
      "inputs": [],
      "outputs": [{ "name": "_verification_key_index", "type": "uint32" }]
    },
    {
      "name": "_wasm_hash",
      "inputs": [],
      "outputs": [{ "name": "_wasm_hash", "type": "bytes" }]
    }
  ],
  "events": [],
  "fields": [
    { "init": true, "name": "_pubkey", "type": "uint256" },
    { "init": false, "name": "_timestamp", "type": "uint64" },
    { "init": false, "name": "_constructorFlag", "type": "bool" },
    { "init": false, "name": "_factors_ordered_by_timestamp", "type": "map(uint256,uint256)" },
    { "init": false, "name": "_factors_len", "type": "uint8" },
    { "init": false, "name": "_root", "type": "address" },
    { "init": false, "name": "_name", "type": "string" },
    { "init": true, "name": "_owner_pubkey", "type": "uint256" },
    {
      "components": [
        { "name": "value0", "type": "uint256" },
        { "name": "value1", "type": "uint64" }
      ],
      "init": false,
      "name": "_candidate_new_owner_pubkey_and_expiration",
      "type": "optional(tuple)"
    },
    { "init": false, "name": "_pub_recovery_key", "type": "uint256" },
    { "init": false, "name": "_jwk_update_key", "type": "uint256" },
    { "init": false, "name": "_root_provider_certificates", "type": "map(uint256,bytes)" },
    {
      "components": [
        { "name": "modulus", "type": "bytes" },
        { "name": "modulus_expire_at", "type": "uint64" }
      ],
      "init": false,
      "name": "_jwk_modulus_data",
      "type": "map(uint256,tuple)"
    },
    { "init": false, "name": "_jwk_modulus_data_len", "type": "uint8" },
    {
      "components": [
        { "name": "value0", "type": "uint256" },
        {
          "components": [
            { "name": "modulus", "type": "bytes" },
            { "name": "modulus_expire_at", "type": "uint64" }
          ],
          "name": "value1",
          "type": "tuple"
        }
      ],
      "init": false,
      "name": "_start_point_jwk",
      "type": "optional(tuple)"
    },
    { "init": false, "name": "_zkid", "type": "string" },
    { "init": false, "name": "_index_mod_4", "type": "uint8" },
    { "init": false, "name": "_iss_base_64", "type": "string" },
    { "init": false, "name": "_lv_provider_bytes", "type": "bytes" },
    { "init": false, "name": "_use_security_card", "type": "bool" },
    { "init": false, "name": "_m_security_cards", "type": "map(uint256,bool)" },
    { "init": false, "name": "_m_security_cards_len", "type": "uint8" },
    {
      "components": [
        { "name": "id", "type": "uint64" },
        { "name": "creator", "type": "uint256" },
        { "name": "dest", "type": "address" },
        { "name": "value", "type": "uint128" },
        { "name": "cc", "type": "map(uint32,varuint32)" },
        { "name": "sendFlags", "type": "uint16" },
        { "name": "payload", "type": "cell" },
        { "name": "bounce", "type": "bool" }
      ],
      "init": false,
      "name": "_m_transactions",
      "type": "map(uint64,tuple)"
    },
    { "init": false, "name": "_m_transactions_len", "type": "uint8" },
    { "init": false, "name": "_min_value", "type": "uint128" },
    { "init": false, "name": "_max_cleanup_txns", "type": "uint256" },
    { "init": false, "name": "_force_remove_oldest", "type": "bool" },
    { "init": false, "name": "_whiteListOfAddress", "type": "map(address,bool)" },
    { "init": false, "name": "_verification_key_index", "type": "uint32" },
    { "init": false, "name": "_wasm_hash", "type": "bytes" }
  ]
}
`;function y(n,...t){}const b=new Map([]),tt=new Map([["91e83e01e41226af166d535e204ab7277b920b8fc518884e1f695ba6f269d74f","AckiNackiBlockManagerNodeWallet"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"],["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Mvmultifactor"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","PopitGame"],["18365592c5f1e7d319cc1a2fd58fa05ca3afbe4ac49e73bc765d139a2e2d7a29","PopCoinWallet"],["6ec7bbad5c62158a8ada989d93e0212bd0f718e65b88fc85e711a8a22d59f694","AckiNackiBlockKeeperNodeWallet"],["5abf243805c7dc9bdbaaca8ea201773c62f8a83177397e191979551dc5544882","Boost"],["d732aaab198ae70b0f285d28a6629e141a61c752faaf7395d34b7cf32aa84f6d","PopCoinRoot"],["d46ad99d6889112ebedd8a00eea444b928b882dab1c6388b1c006e29ebd91fc9","USDCWallet"]]),k=new Map([]);async function N(){if(b.size>0)return;const n=await fetch(`${g.api}/abi/last`,{method:"GET"});if(n.ok){const t=await n.json();for(const a of t)b.set(a[0],a[1])}}async function et(n){await N();const t=tt.get(n);if(!t)return n;const a=b.get(t);return a||n}async function nt(n){n=await et(n);try{if(k.has(n))return k.get(n);const t=await fetch(`${g.api}/abi/${n}`,{method:"GET"});if(!t.ok){y(`getCodeSchema error fetch ${n}`);return}const a=await t.json();if(!a.abi){y(`getCodeSchema error data ${n}`,{result:a});return}const e={name:a.name,abi:E.abiContract(a.abi)};return k.set(n,e),e}catch{y();return}}async function at(){return await N(),new Map(b)}const L=n=>n.trim().toLowerCase(),M=n=>n.trim().toLowerCase(),st=[["0:2222222222222222222222222222222222222222222222222222222222222222",{name:"Mobile Verifier Root"}],["0:3333333333333333333333333333333333333333333333333333333333333333",{name:"Update Zero Contract",updatable:!0}],["0:4444444444444444444444444444444444444444444444444444444444444444",{name:"License Root"}],["0:5555555555555555555555555555555555555555555555555555555555555555",{name:"Update Custodian Multisig Wallet",updatable:!0}],["0:6666666666666666666666666666666666666666666666666666666666666666",{name:"Block Manager Root",updatable:!0}],["0:7777777777777777777777777777777777777777777777777777777777777777",{name:"Block Keeper Root",updatable:!0}],["0:8888888888888888888888888888888888888888888888888888888888888888",{name:"Currency Collection Config"}],["0:9999999999999999999999999999999999999999999999999999999999999999",{name:"Dapp Root Config"}],["0:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",{name:"USDC Root"}]],ot=new Map(st.map(([n,t])=>[L(n),t])),it=["eb7a346704904a164482466f768ce32a92439cd7488495639a98023901f2800f","bce798a584ac4f4ab44bfb71aa459514b8e164e19a9e1ef997727b3c199ce804","3a1b94ef221f699de662ad748e51643739911db1344cdcfb974b67936d9d0d17","8470e1da28a2b4c742b5f7edefdd97db81c79e726f8a8b0be78d921adaf32414"],ct=new Set(["UpdateZeroContract","BlockKeeperContractRoot","BlockManagerContractRoot","UpdateCustodianMultisigWallet"]),Q=new Set(it.map(n=>M(n)));let P=!1,h=null;async function rt(){if(P)return;h||(h=(async()=>{try{const t=await at();for(const a of ct){const e=t.get(a);e&&Q.add(M(e))}P=!0}catch(t){y("Failed to refresh updatable contract hashes",t)}finally{h=null}})());const n=h;n&&await n}function x(n){if(n)return ot.get(L(n))}function wt(n){var t;return(t=x(n))==null?void 0:t.name}function ut(n){var t;return!!((t=x(n))!=null&&t.updatable)}async function pt(n){return n?(await rt(),Q.has(M(n))):!1}async function dt(n){return ut(n.address)?!0:pt(n.codeHash)}async function mt(n,t){try{return(await m.abi.decode_account_data({data:n,abi:t,allow_partial:!0})).data}catch{y()}}var lt=(n=>(n.Indexer="Indexer",n.MvMultifactor="Mobile Verifier Multifactor",n.PopitGame="Popit Game",n))(lt||{});const D=new Map([["6cc8128da9cda444e4ad83fc7064ea51c6a0bbf0e2aa4777d0807e8ed7283cdb","Mobile Verifier Multifactor"],["18e57fc187e8ac1cc2a9b1e8907e291cd925c840c1f93d2f30fe12747dd90126","Popit Game"],["f5580a523a708377e8fadc17265def99bed081988d9b9f37e153b938390e3245","Indexer"]]);async function kt(n){var u;let t=n.trim();w(t)||(t=await C(t));const a=await B.getAccountBoc(t);if(!a)throw new Error(`Account ${t} does not contain a BOC`);const{parsed:e}=await m.boc.parse_account({boc:a});if(!e)throw new Error("Failed to parse account BOC");const o=Number(e.last_paid),c=((u=e.balance_other)==null?void 0:u.map(s=>({id:s.currency,name:s.currency===1?"NACKL":"",value:parseInt(s.value,16)})))||[],p={accType:e.acc_type,accTypeName:e.acc_type_name,balances:c.concat([{id:0,name:"SHELL",value:parseInt(e.balance,16)}]),bits:parseInt(e.bits,16),boc:a,cells:parseInt(e.cells,16),code:e.code,codeHash:e.code_hash,data:e.data,dataHash:e.data_hash,id:e.id,initCodeHash:e.init_code_hash,jsonVersion:e.json_version,lastPaid:Number.isFinite(o)&&o>0?new Date(o*1e3):null,lastTransLt:parseInt(e.last_trans_lt,16),publicCells:parseInt(e.public_cells,16),workchainId:e.workchain_id,isUpdatable:await dt({address:t,codeHash:e.code_hash})};let r;const A=[e.code_hash,e.init_code_hash].filter(s=>!!s);for(const s of A)if(r=await nt(s),r)break;if(r&&(p.contractName=r.name,r.abi)){const s=await mt(e.data,r.abi);y("decodeData",{dataParsed:s,accountData:e,codeSchema:r}),s&&(p.dataParsed=s)}return new yt(p)}async function S(n){let t=n.trim();w(t)||(t=await C(t));const a=await B.getAccountBoc(t);if(!a)throw new Error(`Account ${t} does not contain a BOC`);const{parsed:e}=await m.boc.parse_account({boc:a});return G(e.data)}async function G(n){return(await m.abi.decode_account_data({abi:{type:"Json",value:v},data:n})).data._wallet}async function T(n){let t=n.trim();return w(t)||(t=await S(t)),(await m.abi.encode_message({abi:{type:"Json",value:j},deploy_set:{code:Z,initial_data:{_pubkey:"0x0",_owner:t}},signer:{type:"None"}})).address}function w(n){const t=n.trim();return/^(0:|-1:)[0-9a-fA-F]{64}$/.test(t)}function At(n){const t=n.trim();return/^[0-9a-fA-F]{64}$/.test(t)}class yt{constructor(t){i(this,"accType");i(this,"accTypeName");i(this,"balances");i(this,"bits");i(this,"boc");i(this,"cells");i(this,"code");i(this,"codeHash");i(this,"data");i(this,"dataHash");i(this,"id");i(this,"initCodeHash");i(this,"jsonVersion");i(this,"lastPaid");i(this,"lastTransLt");i(this,"publicCells");i(this,"workchainId");i(this,"dataParsed");i(this,"contractName");i(this,"isUpdatable");i(this,"_nameCache");i(this,"_namePromise");Object.assign(this,t)}get type(){return D.has(this.codeHash)&&D.get(this.codeHash)||null}async getName(){return typeof this._nameCache<"u"?this._nameCache:this._namePromise?this._namePromise:(this._namePromise=(async()=>{try{if(this.type==="Mobile Verifier Multifactor"){const t=await m.abi.decode_account_data({abi:{type:"Json",value:$},data:this.data});this._nameCache=t.data._name||null}else if(this.type==="Indexer"){const t=await m.abi.decode_account_data({abi:{type:"Json",value:v},data:this.data});this._nameCache=t.data._name||null}else this._nameCache=null}catch(t){y("Failed to decode account name",t),this._nameCache=null}finally{this._namePromise=void 0}return this._nameCache})(),this._namePromise)}async getLinkedAccounts(){const t=new Map;if(this.type==="Mobile Verifier Multifactor"){const a=await this.getName();a&&t.set("Indexer",await C(a));const e=await T(this.id);return e&&t.set("Popit Game",e),t}else if(this.type==="Indexer"){const a=await G(this.data);if(a){t.set("Mobile Verifier Multifactor",a);const e=await T(a);e&&t.set("Popit Game",e)}}else if(this.type==="Popit Game"){const e=(await m.abi.decode_account_data({abi:{type:"Json",value:j},data:this.data})).data._owner;e&&t.set("Mobile Verifier Multifactor",e)}return t}}async function vt(n){var o,c,p,r,A;if(!n||n.trim().length===0)return{found:!1,results:[]};const t=n.trim(),a=t.toLowerCase(),e=[];try{if(w(t))return e.push({type:"account",id:t}),{found:!0,results:e};try{const d=await S(t);if(d)return e.push({type:"account",id:d}),{found:!0,results:e}}catch(d){console.error("Account lookup failed:",d)}if(!At(a))return{found:!1,results:[]};const s=await(await fetch(g.graphqlEndpoint,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({query:`
					query SearchById($id: String!) {
						transactions(filter: { id: { eq: $id } }, limit: 1) { id }
						blocks(filter: { id: { eq: $id } }, limit: 1) { id }
						messages(filter: { id: { eq: $id } }, limit: 1) { 
							id 
							dst_transaction { id } 
							src_transaction { id } 
						}
					}
				`,variables:{id:a}})})).json();if(s.errors)return console.error("Search error:",s.errors),{found:!1,results:[]};if((o=s.data)!=null&&o.blocks&&s.data.blocks.length>0&&e.push({type:"block",id:s.data.blocks[0].id}),(c=s.data)!=null&&c.transactions&&s.data.transactions.length>0&&e.push({type:"transaction",id:s.data.transactions[0].id}),(p=s.data)!=null&&p.messages&&s.data.messages.length>0){const d=s.data.messages[0];e.push({type:"message",id:d.id,relatedTransactionId:((r=d.dst_transaction)==null?void 0:r.id)||((A=d.src_transaction)==null?void 0:A.id)})}return{found:e.length>0,results:e}}catch(u){return console.error("Search failed:",u),{found:!1,results:[]}}}function Ct(n){switch(n.type){case"block":return f(`/blocks/${n.id}`);case"transaction":return f(`/transactions/${n.id}`);case"message":return f(`/messages/${n.id}`);case"account":return f(`/accounts/${n.id}`);default:return f("/")}}export{lt as A,vt as a,Ct as b,wt as c,Y as d,g as e,kt as f,B as g,ut as i,gt as t};
