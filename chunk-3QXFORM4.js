import{d as g}from"./chunk-3ZCOCLY3.js";import{$a as d,Ia as r,L as i,P as o,_b as l,ab as c,bb as u,l as s,mb as m,nb as f,oc as p,tc as _}from"./chunk-IBMYI4TS.js";var h=["*"],E=(()=>{class t{constructor(){this.variant=l("default")}variantClasses(){return{default:"badge-muted",system:"badge-system",updatable:"badge-updatable",success:"badge-success",warning:"badge-warning",error:"badge-error",info:"badge-info"}[this.variant()]}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=r({type:t,selectors:[["app-badge"]],inputs:{variant:[1,"variant"]},ngContentSelectors:h,decls:2,vars:1,consts:[[1,"px-2","py-0.5","rounded-full","type-caption","font-medium",3,"ngClass"]],template:function(n,e){n&1&&(m(),c(0,"span",0),f(1),u()),n&2&&d("ngClass",e.variantClasses())},dependencies:[_,p],styles:["[_nghost-%COMP%]{display:inline-flex}"],changeDetection:0})}}return t})();var y=`
  query GetMessage($hash: String!) {
    blockchain {
      message(hash: $hash) {
        id
        src
        dst
        value(format: DEC)
        created_at
        msg_type_name
        status_name
        bounce
        bounced
        body
        body_hash
        fwd_fee(format: DEC)
        ihr_fee(format: DEC)
        block_id
        src_transaction_id
        src_transaction { id }
        dst_transaction { id }
        boc
      }
    }
  }
`,G=(()=>{class t{constructor(){this.graphql=o(g)}async getMessage(a){let e=(await s(this.graphql.query(y,{hash:a}))).blockchain?.message;return e?{message:{id:e.id,src:e.src,dst:e.dst,value:e.value??"0",created_at:e.created_at,msg_type_name:e.msg_type_name!=null?String(e.msg_type_name):"",status_name:e.status_name!=null?String(e.status_name):void 0,bounce:e.bounce,bounced:e.bounced,body:e.body??void 0,body_hash:e.body_hash??void 0,fwd_fee:e.fwd_fee??void 0,ihr_fee:e.ihr_fee??void 0,block_id:e.block_id??void 0,source_transaction_id:e.src_transaction?.id||e.src_transaction_id||void 0,destination_transaction_id:e.dst_transaction?.id||void 0},boc:e.boc??null}:null}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=i({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{E as a,G as b};
