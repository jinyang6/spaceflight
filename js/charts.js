/**
 * Reusable Rockets - Charts JavaScript Module
 * Chart initialization and customization for cost efficiency visualization
 */

// Import necessary helper functions from main.js
import { getRocketById, formatCurrency } from './main.js';

/**
 * Initialize all charts on the page. Exported for use.
 * This function is now async as it awaits chart initializations.
 */
export async function initCharts() { // Made async
  // Find chart containers
  const costPerLaunchChart = document.getElementById('costPerLaunchChart');

  if (costPerLaunchChart) {
    // No longer need setTimeout if data fetching is awaited correctly
    // The DOMContentLoaded in rocket.html already ensures canvas exists before calling initCharts.
    // And initCharts will now await the data fetching within initCostPerLaunchChart.
    await initCostPerLaunchChart(costPerLaunchChart); // Await the async chart init
  }
  // Add logic here to find and initialize other chart types if needed
  // e.g., const costPerKgCanvas = document.getElementById('costPerKgChart');
  // if (costPerKgCanvas) { /* call init function */ }
}

/**
 * Initialize the Cost Per Launch chart showing cost reduction over multiple launches
 * (Internal function, not exported)
 * This function is now async as it awaits getRocketById.
 */
async function initCostPerLaunchChart(canvas) { // Made async
  // Get rocket ID and provider from data attributes
  const rocketId = canvas.getAttribute('data-rocket-id');
  const provider = canvas.getAttribute('data-provider');

  if (!rocketId || !provider) {
    console.error('Missing rocket ID or provider for chart');
    return;
  }

  try {
    // Get rocket data using the imported function - now awaiting it
    const rocket = await getRocketById(provider, rocketId); // Added await
    if (!rocket || !rocket.costScaling) {
      // If rocket is null after await, getRocketById would have logged its own error.
      // This console.error might be redundant or can be more specific.
      console.error(`Invalid rocket data or missing cost scaling for ${rocketId} from ${provider} in initCostPerLaunchChart.`);
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
          maintainAspectRatio: false, // Set to false to control size with CSS
          // aspectRatio: 2.5,      // Ignored when maintainAspectRatio is false
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  // Use imported formatCurrency
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
                  // Use imported formatCurrency
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
 * (Internal function)
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
    // Use imported formatCurrency
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

// Note: createCostPerKgChart and createStagesChart are not currently called
// by initCharts but are kept here. If needed, they should also import helpers.

/**
 * Create a bar chart showing cost per kg to LEO comparison
 */
function createCostPerKgChart(canvas, rocketData) {
  // ... (implementation uses formatCurrency indirectly)
}

/**
 * Create a pie chart showing reusable vs. expendable stages
 */
function createStagesChart(canvas, reusableStages, totalStages) {
  // ... (implementation)
}

// Removed DOMContentLoaded listener as initialization should be triggered
// by the importing module (e.g., the inline script in rocket.html)