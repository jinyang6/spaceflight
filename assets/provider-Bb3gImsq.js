import{a as g,f as h}from"./outlined-button-JE5ak45U.js";document.addEventListener("DOMContentLoaded",async()=>{const r=new URLSearchParams(window.location.search).get("provider"),a=document.querySelector("main");if(!r){a&&(a.innerHTML='<div class="container"><p>Error: No provider ID specified.</p></div>'),console.error("No provider ID specified in URL.");return}try{const e=await g(r);if(!e){a&&(a.innerHTML='<div class="container"><p>Error: Provider not found.</p></div>'),console.error(`Provider data not found for ID: ${r}`);return}document.title=`${e.manufacturer} - Reusable Rockets`;const s=document.querySelector('meta[name="description"]');s&&s.setAttribute("content",`Explore ${e.manufacturer}'s innovative fleet of reusable rockets and how they're reducing the cost of space access.`),document.getElementById("provider-name").textContent=e.manufacturer,document.getElementById("provider-description").textContent=`${e.country}-based aerospace manufacturer developing reusable rocket technology.`;const d=document.getElementById("breadcrumbs-list");d&&(d.innerHTML=`
            <li><a href="index.html">Home</a></li>
            <li aria-current="page">${e.manufacturer}</li>
          `),document.getElementById("fleet-title").textContent=`${e.manufacturer} Reusable Fleet`,document.getElementById("fleet-description").textContent=`${e.manufacturer} has developed the following reusable launch vehicles:`;const i=document.getElementById("rocket-grid");i.innerHTML="",e.vehicles&&e.vehicles.length>0?e.vehicles.forEach(t=>{var u,m,p,v;const n=document.createElement("div");n.classList.add("rocket-card");const f=`data/${r}/imgs/${t.image}`,c=(m=(u=t.costScaling)==null?void 0:u.find(o=>o.launchNumber===1))==null?void 0:m.cost_usd,l=(v=(p=t.costScaling)==null?void 0:p.find(o=>o.launchNumber===20))==null?void 0:v.cost_usd;n.innerHTML=`
              <img src="${f}" alt="${t.name} rocket" class="rocket-image" loading="lazy" decoding="async" onerror="this.style.display='none'">
              <div class="rocket-content">
                <h3 class="rocket-title">${t.name}</h3>
                <p class="rocket-description">${t.payloadToLEO_t!==null&&t.payloadToLEO_t>0?`Delivers ${t.payloadToLEO_t} t to LEO.`:t.payloadToLEO_t===0?"Suborbital / Test Vehicle":"Payload N/A"}</p>
                <div class="stat-grid">
                  <div class="stat-card">
                    <div class="stat-value">${t.reusableStages!==void 0?t.reusableStages:"N/A"}</div>
                    <div class="stat-label">Reusable Stages</div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-value">${c?h(c):"N/A"}</div>
                    <div class="stat-label">First Launch Cost</div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-value">${l?h(l):"N/A"}</div>
                    <div class="stat-label">Est. 20th Launch Cost</div>
                  </div>
                </div>
                <div class="rocket-actions" style="text-align: right; margin-top: auto; padding-top: var(--spacing-sm);">
                  <md-outlined-button href="rocket.html?provider=${r}&rocket=${t.id}">Explore Rocket <span aria-hidden="true">&rarr;</span></md-outlined-button>
                </div>
              </div>
            `,i.appendChild(n)}):i.innerHTML="<p>No vehicle data available for this provider.</p>",document.getElementById("approach-title").textContent=`${e.manufacturer} Reusability Approach`,document.getElementById("approach-description").textContent=e.reusabilityApproach||`Details about ${e.manufacturer}'s specific approach to rocket reusability and cost reduction strategies.`}catch(e){console.error("Failed to load provider details:",e),a&&(a.innerHTML='<div class="container"><p>Could not load provider details. Please try refreshing the page.</p></div>')}});
