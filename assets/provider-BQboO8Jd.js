import{p as m,f as p}from"./outlined-button-BjpjO3pO.js";document.addEventListener("DOMContentLoaded",()=>{const a=new URLSearchParams(window.location.search).get("provider");if(!a||!m[a]){document.querySelector("main").innerHTML='<div class="container"><p>Error: Provider not found.</p></div>';return}const e=m[a];document.title=`${e.manufacturer} - Reusable Rockets`;const i=document.querySelector('meta[name="description"]');i&&i.setAttribute("content",`Explore ${e.manufacturer}'s innovative fleet of reusable rockets and how they're reducing the cost of space access.`),document.getElementById("provider-name").textContent=e.manufacturer;const o=document.getElementById("breadcrumbs-list");o&&(o.innerHTML=`
          <li><a href="index.html">Home</a></li>
          <li aria-current="page">${e.manufacturer}</li>
        `),document.getElementById("provider-description").textContent=`${e.country}-based aerospace manufacturer developing reusable rocket technology.`,document.getElementById("fleet-title").textContent=`${e.manufacturer} Reusable Fleet`,document.getElementById("fleet-description").textContent=`${e.manufacturer} has developed the following reusable launch vehicles:`;const n=document.getElementById("rocket-grid");n.innerHTML="",e.vehicles&&e.vehicles.length>0?e.vehicles.forEach(t=>{var l,u;const s=document.createElement("div");s.classList.add("rocket-card");const v=`data/${a}/imgs/${t.image}`,c=(l=t.costScaling.find(r=>r.launchNumber===1))==null?void 0:l.cost_usd,d=(u=t.costScaling.find(r=>r.launchNumber===20))==null?void 0:u.cost_usd;s.innerHTML=`
            <img src="${v}" alt="${t.name} rocket" class="rocket-image" loading="lazy" decoding="async" onerror="this.style.display='none'">
            <div class="rocket-content">
              <h3 class="rocket-title">${t.name}</h3>
              <p class="rocket-description">${t.payloadToLEO_t!==null&&t.payloadToLEO_t>0?`Delivers ${t.payloadToLEO_t} t to LEO.`:t.payloadToLEO_t===0?"Suborbital / Test Vehicle":"Payload N/A"}</p>
              <div class="stat-grid">
                <div class="stat-card">
                  <div class="stat-value">${t.reusableStages}</div>
                  <div class="stat-label">Reusable Stages</div>
                </div>
                <div class="stat-card">
                  <div class="stat-value">${c?p(c):"N/A"}</div>
                  <div class="stat-label">First Launch Cost</div>
                </div>
                <div class="stat-card">
                  <div class="stat-value">${d?p(d):"N/A"}</div>
                  <div class="stat-label">Est. 20th Launch Cost</div>
                </div>
              </div>
              <div class="rocket-actions" style="text-align: right; margin-top: auto; padding-top: var(--spacing-sm);"> <!-- Wrapper for alignment -->
                <md-outlined-button href="rocket.html?provider=${a}&rocket=${t.id}">Explore Rocket <span aria-hidden="true">&rarr;</span></md-outlined-button>
              </div>
            </div>
          `,n.appendChild(s)}):n.innerHTML="<p>No vehicle data available for this provider.</p>",document.getElementById("approach-title").textContent=`${e.manufacturer} Reusability Approach`,document.getElementById("approach-description").textContent=`Details about ${e.manufacturer}'s specific approach to rocket reusability and cost reduction strategies.`});
