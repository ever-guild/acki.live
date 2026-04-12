import{Ba as m,C as l,D as c,I as d,Ia as h,L as f,s,x as a}from"./chunk-3AXM2HFE.js";var x=(()=>{class t{constructor(){this.appRippleDisabled=m(!1),this.el=s(l),this.destroyRef=s(a),this.platformId=s(c),d(()=>{if(!h(this.platformId))return;let e=this.el.nativeElement;e.setAttribute("data-ripple-host","");let i=p=>{if(this.appRippleDisabled())return;let r=e.getBoundingClientRect(),u=p.clientX-r.left,b=p.clientY-r.top,n=Math.max(r.width,r.height)*2,o=document.createElement("span");o.style.cssText=`
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          width: ${n}px;
          height: ${n}px;
          left: ${u-n/2}px;
          top: ${b-n/2}px;
          background: rgba(var(--primary-color-rgb), 0.2);
          z-index: 100;
        `,e.appendChild(o);let R=o.animate([{transform:"scale(0)",opacity:"1"},{transform:"scale(1)",opacity:"0"}],{duration:500,easing:"cubic-bezier(0.22, 1, 0.36, 1)",fill:"forwards"});R.onfinish=()=>o.remove()};e.addEventListener("pointerdown",i,{passive:!0}),this.destroyRef.onDestroy(()=>{e.removeEventListener("pointerdown",i)})})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=f({type:t,selectors:[["","appRipple",""]],inputs:{appRippleDisabled:[1,"appRippleDisabled"]}})}}return t})();export{x as a};
