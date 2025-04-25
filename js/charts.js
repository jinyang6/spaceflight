/**
 * Reusable Rockets - Charts JavaScript
 * Chart initialization and customization for cost efficiency visualization
 */

/**
 * Initialize all charts on the page
 */
function initCharts() {
  // Find chart containers
  const costPerLaunchChart = document.getElementById('costPerLaunchChart');
  
  if (costPerLaunchChart) {
    // Add a small delay to ensure DOM is fully rendered
    setTimeout(() => {
      initCostPerLaunchChart(costPerLaunchChart);
    }, 100);
  }
}

/**
 * Initialize the Cost Per Launch chart showing cost reduction over multiple launches
 */
function initCostPerLaunchChart(canvas) {
  // Get rocket ID and provider from data attributes
  const rocketId = canvas.getAttribute('data-rocket-id');
  const provider = canvas.getAttribute('data-provider');
  
  if (!rocketId || !provider) {
    console.error('Missing rocket ID or provider for chart');
    return;
  }
  
  try {
    // Get rocket data
    const rocket = getRocketById(provider, rocketId);
    if (!rocket || !rocket.costScaling) {
      console.error('Invalid rocket data or missing cost scaling information');
      return;
    }
    
    // Extract data for chart
    const launchNumbers = rocket.costScaling.map(item => `Launch ${item.launchNumber}`);
    const costs = rocket.costScaling.map(item => item.cost_usd);
    
    // Create chart with error handling
    try {
      new Chart(canvas, {
        type: 'line',
        data: {
          labels: launchNumbers,
          datasets: [{
            label: 'Cost per Launch (USD)',
            data: costs,
            borderColor: '#007aff',
            backgroundColor: 'rgba(0, 122, 255, 0.1)',
            borderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#007aff',
            pointBorderWidth: 2,
            tension: 0.1,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return formatCurrency(context.parsed.y);
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return formatCurrency(value);
                }
              }
            }
          }
        }
      });
      console.log(`Successfully created chart for ${rocketId}`);
    } catch (chartError) {
      console.error('Error creating chart:', chartError);
      // Create fallback visualization if Chart.js fails
      createFallbackVisualization(canvas, rocket);
    }
  } catch (error) {
    console.error('Error initializing cost per launch chart:', error);
    // Show error message in the chart container
    canvas.parentNode.innerHTML = `
      <div style="height: 400px; display: flex; align-items: center; justify-content: center; text-align: center;">
        <p>Unable to load cost data visualization.<br>Please check console for details.</p>
      </div>
    `;
  }
}

/**
 * Create a fallback visualization if Chart.js fails
 */
function createFallbackVisualization(canvas, rocket) {
  if (!canvas || !rocket || !rocket.costScaling) return;
  
  // Clear the canvas container
  const container = canvas.parentNode;
  container.innerHTML = '';
  
  // Create a table with the cost data
  const table = document.createElement('table');
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';
  table.style.marginTop = '20px';
  
  // Create header row
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  
  const launchHeader = document.createElement('th');
  launchHeader.textContent = 'Launch Number';
  launchHeader.style.padding = '12px';
  launchHeader.style.backgroundColor = '#f2f8ff';
  headerRow.appendChild(launchHeader);
  
  const costHeader = document.createElement('th');
  costHeader.textContent = 'Cost (USD)';
  costHeader.style.padding = '12px';
  costHeader.style.backgroundColor = '#f2f8ff';
  headerRow.appendChild(costHeader);
  
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  // Create body rows
  const tbody = document.createElement('tbody');
  
  rocket.costScaling.forEach(item => {
    const row = document.createElement('tr');
    
    const launchCell = document.createElement('td');
    launchCell.textContent = `Launch ${item.launchNumber}`;
    launchCell.style.padding = '10px';
    launchCell.style.borderTop = '1px solid #e6e6e6';
    launchCell.style.textAlign = 'center';
    row.appendChild(launchCell);
    
    const costCell = document.createElement('td');
    costCell.textContent = formatCurrency(item.cost_usd);
    costCell.style.padding = '10px';
    costCell.style.borderTop = '1px solid #e6e6e6';
    costCell.style.textAlign = 'center';
    row.appendChild(costCell);
    
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  container.appendChild(table);
}

/**
 * Create a bar chart showing cost per kg to LEO comparison
 */
function createCostPerKgChart(canvas, rocketData) {
  if (!canvas || !rocketData) return;
  
  // Extract data
  const rocketNames = rocketData.map(item => item.name);
  const costPerKgValues = rocketData.map(item => item.costPerKgToLEO_usd);
  
  // Create chart
  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: rocketNames,
      datasets: [{
        label: 'Cost per kg to LEO (USD)',
        data: costPerKgValues,
        backgroundColor: 'rgba(0, 122, 255, 0.7)',
        borderWidth: 0,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return '$' + context.parsed.y.toFixed(2) + ' per kg';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '$' + value;
            }
          }
        }
      }
    }
  });
}

/**
 * Create a pie chart showing reusable vs. expendable stages
 */
function createStagesChart(canvas, reusableStages, totalStages) {
  if (!canvas) return;
  
  const expendableStages = totalStages - reusableStages;
  
  // Create chart
  new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['Reusable Stages', 'Expendable Stages'],
      datasets: [{
        data: [reusableStages, expendableStages],
        backgroundColor: ['#007aff', '#e6e6e6'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      },
      cutout: '70%'
    }
  });
}