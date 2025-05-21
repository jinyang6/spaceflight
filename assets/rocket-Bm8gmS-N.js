import{b as I,f,a as w}from"./outlined-button-RoEKl5Q2.js";function x(){const a=document.getElementById("costPerLaunchChart");a&&setTimeout(()=>{M(a)},100)}function M(a){const s=a.getAttribute("data-rocket-id"),d=a.getAttribute("data-provider");if(!s||!d){console.error("Missing rocket ID or provider for chart");return}try{const t=I(d,s);if(!t||!t.costScaling){console.error("Invalid rocket data or missing cost scaling information");return}const g=t.costScaling.map(i=>`Launch ${i.launchNumber}`),u=t.costScaling.map(i=>i.cost_usd);try{new Chart(a,{type:"line",data:{labels:g,datasets:[{label:"Cost per Launch (USD)",data:u,borderColor:"#007aff",backgroundColor:"rgba(0, 122, 255, 0.1)",borderWidth:3,pointRadius:6,pointBackgroundColor:"#ffffff",pointBorderColor:"#007aff",pointBorderWidth:2,tension:.1,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!0,aspectRatio:2.5,plugins:{legend:{display:!1},tooltip:{callbacks:{label:function(i){return f(i.parsed.y)}}}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,ticks:{callback:function(i){return f(i)}}}}}}),console.log(`Successfully created chart for ${s}`)}catch(i){console.error("Error creating chart:",i),N(a,t)}}catch(t){console.error("Error initializing cost per launch chart:",t),a.parentNode.innerHTML=`
      <div style="height: 400px; display: flex; align-items: center; justify-content: center; text-align: center;">
        <p>Unable to load cost data visualization.<br>Please check console for details.</p>
      </div>
    `}}function N(a,s){if(!a||!s||!s.costScaling)return;const d=a.parentNode;d.innerHTML="";const t=document.createElement("table");t.style.width="100%",t.style.borderCollapse="collapse",t.style.marginTop="20px";const g=document.createElement("thead"),u=document.createElement("tr"),i=document.createElement("th");i.textContent="Launch Number",i.style.padding="12px",i.style.backgroundColor="#f2f8ff",u.appendChild(i);const v=document.createElement("th");v.textContent="Cost (USD)",v.style.padding="12px",v.style.backgroundColor="#f2f8ff",u.appendChild(v),g.appendChild(u),t.appendChild(g);const b=document.createElement("tbody");s.costScaling.forEach($=>{const y=document.createElement("tr"),m=document.createElement("td");m.textContent=`Launch ${$.launchNumber}`,m.style.padding="10px",m.style.borderTop="1px solid #e6e6e6",m.style.textAlign="center",y.appendChild(m);const p=document.createElement("td");p.textContent=f($.cost_usd),p.style.padding="10px",p.style.borderTop="1px solid #e6e6e6",p.style.textAlign="center",y.appendChild(p),b.appendChild(y)}),t.appendChild(b),d.appendChild(t)}document.addEventListener("DOMContentLoaded",async()=>{var g,u,i,v,b,$,y,m,p;const a=new URLSearchParams(window.location.search),s=a.get("provider"),d=a.get("rocket"),t=document.getElementById("main-content");if(!s||!d){t.innerHTML='<div class="container"><p>Error: Invalid provider or rocket specified in URL.</p></div>';return}try{const h=await w(s);if(!h){t.innerHTML='<div class="container"><p>Error: Provider data not found.</p></div>';return}const e=await I(s,d);if(!e){t.innerHTML='<div class="container"><p>Error: Rocket not found for this provider.</p></div>';return}document.title=`${e.name} - ${h.manufacturer} Reusable Rocket`;const k=document.querySelector('meta[name="description"]');k&&k.setAttribute("content",`Explore the ${e.name} from ${h.manufacturer} and how its reusability dramatically reduces launch costs.`);const S=document.getElementById("breadcrumbs-list");S&&(S.innerHTML=`
            <li><a href="index.html">Home</a></li>
            <li><a href="provider.html?provider=${s}">${h.manufacturer}</a></li>
            <li aria-current="page">${e.name}</li>
          `);const l=(o,n)=>{const c=o!=null?String(o):"N/A";let r=c;return n==="Height"&&c!=="N/A"&&(r=`${c}m`),n==="Diameter"&&c!=="N/A"&&(r=`${c}m`),n==="Mass"&&c!=="N/A"&&(r=`${o} t`),n==="Payload to LEO"&&c!=="N/A"&&(r=o>0?`${o} t`:"Suborbital"),n==="Cost per kg to LEO"&&c!=="N/A"&&(r=o>0?f(o):"N/A"),n==="First Flight"&&c!=="N/A"&&o?r=new Date(o).getFullYear():n==="First Flight"&&(r="N/A"),`
                <div class="stat-card">
                    <div class="stat-value">${r}</div>
                    <div class="stat-label">${n}</div>
                </div>
            `},T=`data/${s}/imgs/${e.image}`;t.innerHTML=`
          <section class="hero-section hero-section--compact">
            <div class="container">
              <h1 class="hero-title">${e.name}</h1>
              <p class="hero-subtitle">${h.manufacturer}'s ${e.operationalStatus} ${e.reusableStages===2?"fully":e.reusableStages===1?"partially":""} reusable launch vehicle</p>
            </div>
          </section>

          <section class="section">
            <div class="container">
              <div class="rocket-detail-layout">
                <img src="${T}" alt="${e.name} rocket" class="rocket-detail-image" loading="lazy" decoding="async" onerror="this.style.display='none';">
                <div class="rocket-detail-specs">
                  <h2>Technical Specifications</h2>
                  <div class="stat-grid">
                    ${l(e.height_m,"Height")}
                    ${l(e.diameter_m,"Diameter")}
                    ${l(e.mass_t,"Mass")}
                    ${l(e.payloadToLEO_t,"Payload to LEO")}
                    ${l(e.firstFlight,"First Flight")}
                    ${l(e.reusableStages,"Reusable Stages")}
                    ${l(e.costPerKgToLEO_usd,"Cost per kg to LEO")}
                    ${l(e.operationalStatus,"Status")}
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
              <p>The ${e.name} demonstrates significant cost savings through its reusable design. The chart below illustrates the estimated cost per launch decreasing over multiple flights.</p>
              <div class="chart-container">
                <canvas id="costPerLaunchChart" data-rocket-id="${e.id}" data-provider="${s}"></canvas>
              </div>
              <div class="stat-grid" style="margin-top: 2rem;">
                ${((g=e.costScaling)==null?void 0:g.map(o=>l(o.cost_usd?f(o.cost_usd):"N/A",`Launch ${o.launchNumber} Cost`)).join(""))||"<p>Cost scaling data not available.</p>"}
              </div>
              <div style="margin-top: 2rem;">
                <h3>The Economics of ${e.name} Reusability</h3>
                <p>With each reuse, ${h.manufacturer} achieves significant cost savings:</p>
                <ul>
                  <li>First launch cost: ${(i=(u=e.costScaling)==null?void 0:u[0])!=null&&i.cost_usd?f(e.costScaling[0].cost_usd):"N/A"}</li>
                  <li>Estimated 20th launch cost: ${(b=(v=e.costScaling)==null?void 0:v[e.costScaling.length-1])!=null&&b.cost_usd?f(e.costScaling[e.costScaling.length-1].cost_usd):"N/A"}</li>
                  <li>Approximate cost reduction by 20th launch: ${(y=($=e.costScaling)==null?void 0:$[0])!=null&&y.cost_usd&&((p=(m=e.costScaling)==null?void 0:m[e.costScaling.length-1])!=null&&p.cost_usd)?Math.round((1-e.costScaling[e.costScaling.length-1].cost_usd/e.costScaling[0].cost_usd)*100)+"%":"N/A"}</li>
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
        `,x();const C=document.getElementById("model-loader"),E=document.getElementById("model-instructions-overlay"),L=document.getElementById("model-viewer-container"),A=document.getElementById("instructions-ok-btn");if(e.modelFile){const o=`data/${s}/models/${e.modelFile}`,n=`${e.name} 3D Model`,c=e.modelCredit?`<p class="model-credit">${e.modelCredit}</p>`:"";C.innerHTML=`
            <div class="model-loader-visual">
              <img src="assets/icons/cube.svg" alt="3D Cube Icon" class="model-loader-icon">
              <h4 class="model-loader-title">Interactive 3D Model</h4>
              <md-filled-button id="load-model-btn" data-model-src="${o}" data-model-alt="${n}">
                Load ${e.name} 3D Model
              </md-filled-button>
            </div>
          `;const r=document.getElementById("load-model-btn");r&&r.addEventListener("click",()=>{C.style.display="none",E.style.display="flex"}),A&&A.addEventListener("click",()=>{E.style.display="none",L.innerHTML=`
                <model-viewer
                  src="${o}"
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
              `,L.style.display="block"})}else C.innerHTML=`<p class="model-not-available">3D Model Not Available for ${e.name}</p>`}catch(h){console.error("Failed to load rocket details:",h),t.innerHTML='<div class="container"><p>Could not load rocket details. Please try refreshing the page.</p></div>'}});
