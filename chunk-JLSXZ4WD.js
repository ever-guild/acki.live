import{g as m}from"./chunk-JUNCIBAT.js";import{b as h}from"./chunk-J3SLVCEX.js";import{a,h as f,r as d,s as u}from"./chunk-3AXM2HFE.js";var p="0:4444444444444444444444444444444444444444444444444444444444444444",_=(()=>{class s{constructor(){this.graphql=u(h),this.blockchainService=u(m)}async getNetworkStats(){let[e,t]=await Promise.all([this.fetchLicenseStats(),this.fetchTPS()]);return a(a({},e),t)}async fetchLicenseStats(){try{let e=await this.blockchainService.getAccountDetails(p);if(!e?.dataParsed)return{licensedBlockKeepers:null,licensedBlockManagers:null};let t=e.dataParsed,c=this.findNumericField(t,["_licenseLeft","licenseLeft","LICENSE LEFT"]),n=c!==null?1e4-c:null,r=this.findNumericField(t,["_licenseBmLeft","licenseBmLeft","LICENSE BMLEFT","_bmLeft","bmLeft","_licenseBMLeft","licenseBMLeft"]),i=r!==null?1e4-r:null;return{licensedBlockKeepers:n,licensedBlockManagers:i}}catch(e){return console.error("Failed to fetch License stats:",e),{licensedBlockKeepers:null,licensedBlockManagers:null}}}async fetchTPS(){let e=`
      query GetRecentBlocks {
        blockchain {
          blocks(last: 20) {
            nodes {
              gen_utime
              tr_count
            }
          }
        }
      }
    `;try{let c=(await f(this.graphql.query(e)))?.blockchain?.blocks?.nodes??[];if(c.length<2)return{tps:null};let n=[...c].sort((o,l)=>(l.gen_utime??0)-(o.gen_utime??0)),r=n.reduce((o,l)=>o+(l.tr_count||0),0),i=n[0].gen_utime-n[n.length-1].gen_utime;return i<=0?{tps:null}:{tps:Math.round(r/i*10)/10}}catch(t){return console.error("Failed to fetch TPS:",t),{tps:null}}}findNumericField(e,t){for(let c of t){let n=e[c];if(typeof n=="number")return n;if(typeof n=="string"){let r=parseInt(n,10);if(!isNaN(r))return r}}return null}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275prov=d({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();export{_ as a};
