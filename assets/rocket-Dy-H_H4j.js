import{a as $,f as v,p as y}from"./outlined-button-BjpjO3pO.js";function C(){const a=document.getElementById("costPerLaunchChart");a&&setTimeout(()=>{k(a)},100)}function k(a){const s=a.getAttribute("data-rocket-id"),d=a.getAttribute("data-provider");if(!s||!d){console.error("Missing rocket ID or provider for chart");return}try{const t=$(d,s);if(!t||!t.costScaling){console.error("Invalid rocket data or missing cost scaling information");return}const r=t.costScaling.map(o=>`Launch ${o.launchNumber}`),e=t.costScaling.map(o=>o.cost_usd);try{new Chart(a,{type:"line",data:{labels:r,datasets:[{label:"Cost per Launch (USD)",data:e,borderColor:"#007aff",backgroundColor:"rgba(0, 122, 255, 0.1)",borderWidth:3,pointRadius:6,pointBackgroundColor:"#ffffff",pointBorderColor:"#007aff",pointBorderWidth:2,tension:.1,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!0,aspectRatio:2.5,plugins:{legend:{display:!1},tooltip:{callbacks:{label:function(o){return v(o.parsed.y)}}}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,ticks:{callback:function(o){return v(o)}}}}}}),console.log(`Successfully created chart for ${s}`)}catch(o){console.error("Error creating chart:",o),E(a,t)}}catch(t){console.error("Error initializing cost per launch chart:",t),a.parentNode.innerHTML=`
      <div style="height: 400px; display: flex; align-items: center; justify-content: center; text-align: center;">
        <p>Unable to load cost data visualization.<br>Please check console for details.</p>
      </div>
    `}}function E(a,s){if(!a||!s||!s.costScaling)return;const d=a.parentNode;d.innerHTML="";const t=document.createElement("table");t.style.width="100%",t.style.borderCollapse="collapse",t.style.marginTop="20px";const r=document.createElement("thead"),e=document.createElement("tr"),o=document.createElement("th");o.textContent="Launch Number",o.style.padding="12px",o.style.backgroundColor="#f2f8ff",e.appendChild(o);const h=document.createElement("th");h.textContent="Cost (USD)",h.style.padding="12px",h.style.backgroundColor="#f2f8ff",e.appendChild(h),r.appendChild(e),t.appendChild(r);const n=document.createElement("tbody");s.costScaling.forEach(f=>{const g=document.createElement("tr"),u=document.createElement("td");u.textContent=`Launch ${f.launchNumber}`,u.style.padding="10px",u.style.borderTop="1px solid #e6e6e6",u.style.textAlign="center",g.appendChild(u);const m=document.createElement("td");m.textContent=v(f.cost_usd),m.style.padding="10px",m.style.borderTop="1px solid #e6e6e6",m.style.textAlign="center",g.appendChild(m),n.appendChild(g)}),t.appendChild(n),d.appendChild(t)}document.addEventListener("DOMContentLoaded",()=>{const a=new URLSearchParams(window.location.search),s=a.get("provider"),d=a.get("rocket"),t=document.getElementById("main-content");if(!s||!d||!y[s]){t.innerHTML='<div class="container"><p>Error: Invalid provider or rocket specified.</p></div>';return}const r=y[s],e=r.vehicles.find(i=>i.id===d);if(!e){t.innerHTML='<div class="container"><p>Error: Rocket not found for this provider.</p></div>';return}document.title=`${e.name} - ${r.manufacturer} Reusable Rocket`;const o=document.querySelector('meta[name="description"]');o&&o.setAttribute("content",`Explore the ${e.name} from ${r.manufacturer} and how its reusability dramatically reduces launch costs.`);const h=document.getElementById("breadcrumbs-list");h&&(h.innerHTML=`
          <li><a href="index.html">Home</a></li>
          <li><a href="provider.html?provider=${s}">${r.manufacturer}</a></li>
          <li aria-current="page">${e.name}</li>
        `);const n=(i,l)=>{const c=i!=null?String(i):"N/A";let p=c;return l==="Height"&&c!=="N/A"&&(p=`${c}m`),l==="Diameter"&&c!=="N/A"&&(p=`${c}m`),l==="Mass"&&c!=="N/A"&&(p=`${i} t`),l==="Payload to LEO"&&c!=="N/A"&&(p=i>0?`${i} t`:"Suborbital"),l==="Cost per kg to LEO"&&c!=="N/A"&&(p=i>0?v(i):"N/A"),l==="First Flight"&&c!=="N/A"&&(p=new Date(i).getFullYear()),`
              <div class="stat-card">
                  <div class="stat-value">${p}</div>
                  <div class="stat-label">${l}</div>
              </div>
          `},f=`data/${s}/imgs/${e.image}`;t.innerHTML=`
        <section class="hero-section hero-section--compact">
          <div class="container">
            <h1 class="hero-title">${e.name}</h1>
            <p class="hero-subtitle">${r.manufacturer}'s ${e.operationalStatus} ${e.reusableStages===2?"fully":e.reusableStages===1?"partially":""} reusable launch vehicle</p>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="rocket-detail-layout"> <!-- Image and Specs side-by-side -->
              <img src="${f}" alt="${e.name} rocket" class="rocket-detail-image" loading="lazy" decoding="async" onerror="this.style.display='none';">
              
              <div class="rocket-detail-specs">
                <h2>Technical Specifications</h2>
                <div class="stat-grid">
                  ${n(e.height_m,"Height")}
                  ${n(e.diameter_m,"Diameter")}
                  ${n(e.mass_t,"Mass")}
                  ${n(e.payloadToLEO_t,"Payload to LEO")}
                  ${n(e.firstFlight,"First Flight")}
                  ${n(e.reusableStages,"Reusable Stages")}
                  ${n(e.costPerKgToLEO_usd,"Cost per kg to LEO")}
                  ${n(e.operationalStatus,"Status")}
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 3D Model Section (Now separate and full width) -->
        <section class="section model-section-placeholder">
          <div class="container">
            <div class="model-loader" id="model-loader">
              <!-- JS will populate this with the MWC button -->
            </div>
            <div class="model-instructions-overlay" id="model-instructions-overlay" style="display: none;">
              <div class="modal-content">
                <h3>How to Interact</h3>
                <div class="instructions-grid">
                  <div class="instruction-item"><img src="assets/icons/rotate.svg" alt="Rotate Icon"><span>Rotate: Click & Drag</span></div>
                  <div class="instruction-item"><img src="assets/icons/zoom.svg" alt="Zoom Icon"><span>Zoom: Scroll / Pinch</span></div>
                  <div class="instruction-item"><img src="assets/icons/pan.svg" alt="Pan Icon"><img src="assets/icons/right-click.svg" alt="Right Click Icon" class="inline-icon"><span>Pan: Right-Click / 2-Finger Drag</span></div>
                </div>
                <md-filled-button id="instructions-ok-btn">Okay, Got It!</md-filled-button>
              </div>
            </div>
            <div class="model-viewer-container" id="model-viewer-container" style="display: none;">
              <!-- Model viewer inserted here by JS -->
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <h2>Cost Efficiency Through Reusability</h2>
            <p>The ${e.name} demonstrates significant cost savings through its reusable design. The chart below illustrates the estimated cost per launch decreasing over multiple flights.</p>
            <div class="chart-container">
              <canvas id="costPerLaunchChart" data-rocket-id="${e.id}" data-provider="${s}"></canvas>
            </div>
            <div class="stat-grid" style="margin-top: 2rem;">
              ${e.costScaling.map(i=>n(i.cost_usd?v(i.cost_usd):"N/A",`Launch ${i.launchNumber} Cost`)).join("")}
            </div>
            <div style="margin-top: 2rem;">
              <h3>The Economics of ${e.name} Reusability</h3>
              <p>With each reuse, ${r.manufacturer} achieves significant cost savings:</p>
              <ul>
                <li>First launch cost: ${v(e.costScaling[0].cost_usd)}</li>
                <li>Estimated 20th launch cost: ${v(e.costScaling[e.costScaling.length-1].cost_usd)}</li>
                <li>Approximate cost reduction by 20th launch: ${Math.round((1-e.costScaling[e.costScaling.length-1].cost_usd/e.costScaling[0].cost_usd)*100)}%</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <h2>Reusability Features</h2>
            <p>The ${e.name} incorporates several key features that enable its reusability:</p>
            <ul id="reusability-features">
              <li>${e.reusableStages===1?"Reusable first stage":e.reusableStages===2?"Fully reusable first and second stages":"Reusability details not specified"}</li>
              <!-- Add more specific features if available in data -->
            </ul>
          </div>
        </section>
      `,C();const g=document.getElementById("model-loader"),u=document.getElementById("model-instructions-overlay"),m=document.getElementById("model-viewer-container"),b=document.getElementById("instructions-ok-btn");if(e.modelFile){const i=`data/${s}/models/${e.modelFile}`,l=`${e.name} 3D Model`,c=e.modelCredit?`<p class="model-credit">${e.modelCredit}</p>`:"";g.innerHTML=`
          <div class="model-loader-visual">
            <img src="assets/icons/cube.svg" alt="3D Cube Icon" class="model-loader-icon">
            <h4 class="model-loader-title">Interactive 3D Model</h4>
            <md-filled-button id="load-model-btn" data-model-src="${i}" data-model-alt="${l}">
              Load ${e.name} 3D Model
            </md-filled-button>
          </div>
        `,document.getElementById("load-model-btn").addEventListener("click",()=>{g.style.display="none",u.style.display="flex"}),b.addEventListener("click",()=>{u.style.display="none",m.innerHTML=`
            <model-viewer
              src="${i}"
              alt="${l}"
              camera-controls
              auto-rotate
              loading="lazy"
              decoding="async"
              shadow-intensity="1"
              environment-image="neutral"
              style="width: 100%; height: 500px; background-color: var(--md-sys-color-surface-container-lowest); border-radius: var(--md-sys-shape-corner-lg);"
            ></model-viewer>
            ${c}
          `,m.style.display="block"})}else g.innerHTML=`<p class="model-not-available">3D Model Not Available for ${e.name}</p>`});
