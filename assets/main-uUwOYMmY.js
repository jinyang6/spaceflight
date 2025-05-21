import{g as i}from"./outlined-button-RoEKl5Q2.js";document.addEventListener("DOMContentLoaded",async()=>{const r=document.getElementById("provider-grid");if(!r){console.error("Provider grid not found on index.html!");return}r.innerHTML="";try{const o=await i();if(!o||o.length===0){r.innerHTML="<p>No provider data available at the moment. Please check back later.</p>";return}o.forEach(e=>{const t=document.createElement("div");t.classList.add("provider-card");const a=`${e.country}-based aerospace company developing reusable rocket technology. Fleet includes ${e.vehicleCount} vehicle(s).`,n=e.image;t.innerHTML=`
            <img src="${n}" alt="${e.manufacturer} logo or rocket" class="provider-image" loading="lazy" decoding="async" onerror="this.style.display='none';">
            <div class="provider-content">
              <h3 class="provider-title">${e.manufacturer}</h3>
              <p class="provider-description">${a}</p>
              <div class="provider-actions">
                <md-filled-button href="provider.html?provider=${e.id}">Explore Fleet</md-filled-button>
              </div>
            </div>
          `,r.appendChild(t)})}catch(o){console.error("Failed to load provider summaries for index page:",o),r.innerHTML="<p>Could not load provider data. Please try refreshing the page.</p>"}});
