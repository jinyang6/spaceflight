import{g as n}from"./outlined-button-BjpjO3pO.js";document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("provider-grid");r.innerHTML="";const o=n();o&&o.length>0?o.forEach(e=>{const t=document.createElement("div");t.classList.add("provider-card");const i=`${e.country}-based aerospace company developing reusable rocket technology. Fleet includes ${e.vehicleCount} vehicle(s).`,d=e.image;t.innerHTML=`
            <img src="${d}" alt="${e.manufacturer} logo or rocket" class="provider-image" loading="lazy" decoding="async" onerror="this.style.display='none';">
            <div class="provider-content">
              <h3 class="provider-title">${e.manufacturer}</h3>
              <p class="provider-description">${i}</p>
              <div class="provider-actions">
                <md-filled-button href="provider.html?provider=${e.id}">Explore Fleet</md-filled-button>
              </div>
            </div>
          `,r.appendChild(t)}):r.innerHTML="<p>No provider data available.</p>"});
