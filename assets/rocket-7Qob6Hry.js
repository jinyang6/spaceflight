import{b as A,f as v,a as x}from"./outlined-button-JE5ak45U.js";async function T(){const o=document.getElementById("costPerLaunchChart");o&&await M(o)}async function M(o){const s=o.getAttribute("data-rocket-id"),l=o.getAttribute("data-provider");if(!s||!l){console.error("Missing rocket ID or provider for chart");return}try{const e=await A(l,s);if(!e||!e.costScaling){console.error(`Invalid rocket data or missing cost scaling for ${s} from ${l} in initCostPerLaunchChart.`);return}const g=e.costScaling.map(a=>`Launch ${a.launchNumber}`),u=e.costScaling.map(a=>a.cost_usd);try{new Chart(o,{type:"line",data:{labels:g,datasets:[{label:"Cost per Launch (USD)",data:u,borderColor:"#007aff",backgroundColor:"rgba(0, 122, 255, 0.1)",borderWidth:3,pointRadius:6,pointBackgroundColor:"#ffffff",pointBorderColor:"#007aff",pointBorderWidth:2,tension:.1,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:function(a){return v(a.parsed.y)}}}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,ticks:{callback:function(a){return v(a)}}}}}}),console.log(`Successfully created chart for ${s}`)}catch(a){console.error("Error creating chart:",a),N(o,e)}}catch(e){console.error("Error initializing cost per launch chart:",e),o.parentNode.innerHTML=`
      <div style="height: 400px; display: flex; align-items: center; justify-content: center; text-align: center;">
        <p>Unable to load cost data visualization.<br>Please check console for details.</p>
      </div>
    `}}function N(o,s){if(!o||!s||!s.costScaling)return;const l=o.parentNode;l.innerHTML="";const e=document.createElement("table");e.style.width="100%",e.style.borderCollapse="collapse",e.style.marginTop="20px";const g=document.createElement("thead"),u=document.createElement("tr"),a=document.createElement("th");a.textContent="Launch Number",a.style.padding="12px",a.style.backgroundColor="#f2f8ff",u.appendChild(a);const f=document.createElement("th");f.textContent="Cost (USD)",f.style.padding="12px",f.style.backgroundColor="#f2f8ff",u.appendChild(f),g.appendChild(u),e.appendChild(g);const b=document.createElement("tbody");s.costScaling.forEach($=>{const y=document.createElement("tr"),m=document.createElement("td");m.textContent=`Launch ${$.launchNumber}`,m.style.padding="10px",m.style.borderTop="1px solid #e6e6e6",m.style.textAlign="center",y.appendChild(m);const h=document.createElement("td");h.textContent=v($.cost_usd),h.style.padding="10px",h.style.borderTop="1px solid #e6e6e6",h.style.textAlign="center",y.appendChild(h),b.appendChild(y)}),e.appendChild(b),l.appendChild(e)}document.addEventListener("DOMContentLoaded",async()=>{var g,u,a,f,b,$,y,m,h;const o=new URLSearchParams(window.location.search),s=o.get("provider"),l=o.get("rocket"),e=document.getElementById("main-content");if(!s||!l){e.innerHTML='<div class="container"><p>Error: Invalid provider or rocket specified in URL.</p></div>';return}try{const p=await x(s);if(!p){e.innerHTML='<div class="container"><p>Error: Provider data not found.</p></div>';return}const t=await A(s,l);if(!t){e.innerHTML='<div class="container"><p>Error: Rocket not found for this provider.</p></div>';return}document.title=`${t.name} - ${p.manufacturer} Reusable Rocket`;const k=document.querySelector('meta[name="description"]');k&&k.setAttribute("content",`Explore the ${t.name} from ${p.manufacturer} and how its reusability dramatically reduces launch costs.`);const S=document.getElementById("breadcrumbs-list");S&&(S.innerHTML=`
            <li><a href="index.html">Home</a></li>
            <li><a href="provider.html?provider=${s}">${p.manufacturer}</a></li>
            <li aria-current="page">${t.name}</li>
          `);const d=(i,n)=>{const c=i!=null?String(i):"N/A";let r=c;return n==="Height"&&c!=="N/A"&&(r=`${c}m`),n==="Diameter"&&c!=="N/A"&&(r=`${c}m`),n==="Mass"&&c!=="N/A"&&(r=`${i} t`),n==="Payload to LEO"&&c!=="N/A"&&(r=i>0?`${i} t`:"Suborbital"),n==="Cost per kg to LEO"&&c!=="N/A"&&(r=i>0?v(i):"N/A"),n==="First Flight"&&c!=="N/A"&&i?r=new Date(i).getFullYear():n==="First Flight"&&(r="N/A"),`
                <div class="stat-card">
                    <div class="stat-value">${r}</div>
                    <div class="stat-label">${n}</div>
                </div>
            `},I=`data/${s}/imgs/${t.image}`;e.innerHTML=`
          <section class="hero-section hero-section--compact">
            <div class="container">
              <h1 class="hero-title">${t.name}</h1>
              <p class="hero-subtitle">${p.manufacturer}'s ${t.operationalStatus} ${t.reusableStages===2?"fully":t.reusableStages===1?"partially":""} reusable launch vehicle</p>
            </div>
          </section>

          <section class="section">
            <div class="container">
              <div class="rocket-detail-layout">
                <img src="${I}" alt="${t.name} rocket" class="rocket-detail-image" loading="lazy" decoding="async" onerror="this.style.display='none';">
                <div class="rocket-detail-specs">
                  <h2>Technical Specifications</h2>
                  <div class="stat-grid">
                    ${d(t.height_m,"Height")}
                    ${d(t.diameter_m,"Diameter")}
                    ${d(t.mass_t,"Mass")}
                    ${d(t.payloadToLEO_t,"Payload to LEO")}
                    ${d(t.firstFlight,"First Flight")}
                    ${d(t.reusableStages,"Reusable Stages")}
                    ${d(t.costPerKgToLEO_usd,"Cost per kg to LEO")}
                    ${d(t.operationalStatus,"Status")}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section model-section-placeholder">
            <div class="container">
              <div class="model-loader" id="model-loader">
                <!-- JS will populate this -->
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
              <div class="model-viewer-container" id="model-viewer-container" style="display: none;"></div>
            </div>
          </section>

          <section class="section">
            <div class="container">
              <h2>Cost Efficiency Through Reusability</h2>
              <p>The ${t.name} demonstrates significant cost savings through its reusable design. The chart below illustrates the estimated cost per launch decreasing over multiple flights.</p>
              <div class="chart-container">
                <canvas id="costPerLaunchChart" data-rocket-id="${t.id}" data-provider="${s}"></canvas>
              </div>
              <div class="stat-grid" style="margin-top: 2rem;">
                ${((g=t.costScaling)==null?void 0:g.map(i=>d(i.cost_usd?v(i.cost_usd):"N/A",`Launch ${i.launchNumber} Cost`)).join(""))||"<p>Cost scaling data not available.</p>"}
              </div>
              <div style="margin-top: 2rem;">
                <h3>The Economics of ${t.name} Reusability</h3>
                <p>With each reuse, ${p.manufacturer} achieves significant cost savings:</p>
                <ul>
                  <li>First launch cost: ${(a=(u=t.costScaling)==null?void 0:u[0])!=null&&a.cost_usd?v(t.costScaling[0].cost_usd):"N/A"}</li>
                  <li>Estimated 20th launch cost: ${(b=(f=t.costScaling)==null?void 0:f[t.costScaling.length-1])!=null&&b.cost_usd?v(t.costScaling[t.costScaling.length-1].cost_usd):"N/A"}</li>
                  <li>Approximate cost reduction by 20th launch: ${(y=($=t.costScaling)==null?void 0:$[0])!=null&&y.cost_usd&&((h=(m=t.costScaling)==null?void 0:m[t.costScaling.length-1])!=null&&h.cost_usd)?Math.round((1-t.costScaling[t.costScaling.length-1].cost_usd/t.costScaling[0].cost_usd)*100)+"%":"N/A"}</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="section">
            <div class="container">
              <h2>Reusability Features</h2>
              <p>The ${t.name} incorporates several key features that enable its reusability:</p>
              <ul id="reusability-features">
                <li>${t.reusableStages===1?"Reusable first stage":t.reusableStages===2?"Fully reusable first and second stages":"Reusability details not specified"}</li>
                <!-- Add more specific features if available in data -->
              </ul>
            </div>
          </section>
        `,await T();const C=document.getElementById("model-loader"),E=document.getElementById("model-instructions-overlay"),L=document.getElementById("model-viewer-container"),w=document.getElementById("instructions-ok-btn");if(t.modelFile){const i=`data/${s}/models/${t.modelFile}`,n=`${t.name} 3D Model`,c=t.modelCredit?`<p class="model-credit">${t.modelCredit}</p>`:"";C.innerHTML=`
            <div class="model-loader-visual">
              <img src="assets/icons/cube.svg" alt="3D Cube Icon" class="model-loader-icon">
              <h4 class="model-loader-title">Interactive 3D Model</h4>
              <md-filled-button id="load-model-btn" data-model-src="${i}" data-model-alt="${n}">
                Load ${t.name} 3D Model
              </md-filled-button>
            </div>
          `;const r=document.getElementById("load-model-btn");r&&r.addEventListener("click",()=>{C.style.display="none",E.style.display="flex"}),w&&w.addEventListener("click",()=>{E.style.display="none",L.innerHTML=`
                <model-viewer
                  src="${i}"
                  alt="${n}"
                  camera-controls
                  auto-rotate
                  loading="lazy"
                  decoding="async"
                  shadow-intensity="1"
                  environment-image="neutral"
                  style="width: 100%; height: 500px; background-color: var(--md-sys-color-surface-container-lowest); border-radius: var(--md-sys-shape-corner-lg);"
                ></model-viewer>
                ${c}
              `,L.style.display="block"})}else C.innerHTML=`<p class="model-not-available">3D Model Not Available for ${t.name}</p>`}catch(p){console.error("Failed to load rocket details:",p),e.innerHTML='<div class="container"><p>Could not load rocket details. Please try refreshing the page.</p></div>'}});
