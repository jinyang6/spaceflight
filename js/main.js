/**
 * Reusable Rockets - Main JavaScript
 * General functionality for the website using global data from data.js
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Reusable Rockets website loaded');

  // Initialize header scroll effect
  initHeaderScroll();

  // Initialize any charts on the page (charts.js should handle its own trigger)
  // if (typeof initCharts === 'function') {
  //   initCharts(); // Let charts.js handle its own initialization via DOMContentLoaded
  // }
});

/**
 * Add a subtle style change to the header on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  // Add class immediately if already scrolled
  if (window.scrollY > 50) {
      header.classList.add('scrolled');
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * Format a number as currency (USD)
 */
function formatCurrency(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) {
      return 'N/A'; // Handle cases where cost might be null or not a number
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return formatter.format(amount);
}

/**
 * Format a number as a compact number with suffix (K, M, B)
 */
function formatCompactNumber(number) {
   if (number === null || number === undefined || isNaN(number)) {
      return 'N/A';
  }
  const formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short'
  });

  return formatter.format(number);
}

/**
 * Get rocket data by ID using global data
 */
function getRocketById(providerId, rocketId) {
  try {
    if (!allData || !allData[providerId]) {
      throw new Error(`Provider data for '${providerId}' not found.`);
    }
    const providerData = allData[providerId];

    const rocket = providerData.vehicles.find(vehicle => vehicle.id === rocketId);
    if (!rocket) {
      throw new Error(`Rocket with ID '${rocketId}' not found for provider '${providerId}'.`);
    }

    // Return a copy to prevent accidental modification of the original data
    return JSON.parse(JSON.stringify(rocket));
  } catch (error) {
    console.error('Error getting rocket data by ID:', error);
    return null;
  }
}

/**
 * Get all rockets from a provider using global data
 */
function getProviderRockets(providerId) {
  try {
     if (!allData || !allData[providerId]) {
      throw new Error(`Provider data for '${providerId}' not found.`);
    }
    const data = allData[providerId];

    // Return a copy
    return JSON.parse(JSON.stringify({
      manufacturer: data.manufacturer,
      country: data.country,
      vehicles: data.vehicles
    }));
  } catch (error) {
    console.error(`Error getting rockets for provider '${providerId}':`, error);
    return {
      manufacturer: '',
      country: '',
      vehicles: []
    };
  }
}

/**
 * Get all providers summary using global data
 */
function getAllProviders() {
   try {
       if (!providersData) {
           throw new Error("Global providersData not found.");
       }
       // Return a copy
       return JSON.parse(JSON.stringify(providersData));
   } catch(error) {
       console.error("Error getting all providers:", error);
       return [];
   }
}

// Example of how a page might call these (already implemented in HTML templates):
// document.addEventListener('DOMContentLoaded', () => {
//   const providers = getAllProviders();
//   console.log(providers);
//   const falcon9 = getRocketById('spacex', 'falcon9');
//   console.log(falcon9);
// });