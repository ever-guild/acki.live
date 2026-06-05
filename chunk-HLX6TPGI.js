import{Aa as f,Ja as u,P as n,Tb as h,_ as c,ja as d,mc as y,na as m}from"./chunk-RLXXVR6I.js";var P=(()=>{class t{constructor(){this.appRippleDisabled=h(!1),this.el=n(d),this.destroyRef=n(c),this.platformId=n(m),f(()=>{if(!y(this.platformId))return;let e=this.el.nativeElement;e.setAttribute("data-ripple-host","");let i=getComputedStyle(e),p=Number.parseFloat(i.getPropertyValue("--duration-moderate")),b=i.getPropertyValue("--ease-expressive").trim(),a=l=>{if(this.appRippleDisabled())return;let r=e.getBoundingClientRect(),g=l.clientX-r.left,D=l.clientY-r.top,o=Math.max(r.width,r.height)*2,s=document.createElement("span");s.style.cssText=`
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          width: ${o}px;
          height: ${o}px;
          left: ${g-o/2}px;
          top: ${D-o/2}px;
          background: rgba(var(--primary-color-rgb), 0.2);
          z-index: 100;
        `,e.appendChild(s);let R=s.animate([{transform:"scale(0)",opacity:"1"},{transform:"scale(1)",opacity:"0"}],{duration:Number.isFinite(p)?p:500,easing:b,fill:"forwards"});R.onfinish=()=>s.remove()};e.addEventListener("pointerdown",a,{passive:!0}),this.destroyRef.onDestroy(()=>{e.removeEventListener("pointerdown",a)})})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=u({type:t,selectors:[["","appRipple",""]],inputs:{appRippleDisabled:[1,"appRippleDisabled"]}})}}return t})();export{P as a};
