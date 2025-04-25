/**
 * Reusable Rockets - Main JavaScript Module
 * General functionality and data access using imported modules.
 */

// Import the aggregated provider data
import { providers } from './data.js';

// Export helper functions for use in other modules or inline scripts
export function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  // Add class immediately if already scrolled
  if (window.scrollY > 50) {
      header.classList.add('scrolled');
  }

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

export function formatCurrency(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) {
      return 'N/A';
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  return formatter.format(amount);
}

export function formatCompactNumber(number) {
   if (number === null || number === undefined || isNaN(number)) {
      return 'N/A';
  }
  const formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short'
  });
  return formatter.format(number);
}

// Data access functions using the imported 'providers' object
export function getRocketById(providerId, rocketId) {
  try {
    if (!providers || !providers[providerId]) { // Use imported 'providers'
      throw new Error(`Provider data for '${providerId}' not found.`);
    }
    const providerData = providers[providerId]; // Use imported 'providers'

    const rocket = providerData.vehicles.find(vehicle => vehicle.id === rocketId);
    if (!rocket) {
      throw new Error(`Rocket with ID '${rocketId}' not found for provider '${providerId}'.`);
    }
    // Return a copy
    return JSON.parse(JSON.stringify(rocket));
  } catch (error) {
    console.error('Error getting rocket data by ID:', error);
    return null;
  }
}

export function getProviderRockets(providerId) {
  try {
     if (!providers || !providers[providerId]) { // Use imported 'providers'
      throw new Error(`Provider data for '${providerId}' not found.`);
    }
    const data = providers[providerId]; // Use imported 'providers'

    // Return a copy
    return JSON.parse(JSON.stringify({
      manufacturer: data.manufacturer,
      country: data.country,
      vehicles: data.vehicles
    }));
  } catch (error) {
    console.error(`Error getting rockets for provider '${providerId}':`, error);
    return { manufacturer: '', country: '', vehicles: [] };
  }
}

export function getAllProvidersSummary() {
   try {
       if (!providers) { // Use imported 'providers'
           throw new Error("Imported providers data not found.");
       }
       // Create a summary list
       const summary = Object.keys(providers).map(id => ({
           id: id,
           manufacturer: providers[id].manufacturer,
           country: providers[id].country,
           vehicleCount: providers[id].vehicles?.length || 0,
           // Assuming the first vehicle's image or a placeholder logic is needed
           // This part depends on how index.html uses the data
           image: `data/${id}/imgs/${providers[id].vehicles?.[0]?.image || 'placeholder.png'}` 
       }));
       // Return a copy
       return JSON.parse(JSON.stringify(summary));
   } catch(error) {
       console.error("Error getting all providers summary:", error);
       return [];
   }
}


// Initialize general site features on load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Reusable Rockets main module loaded');
  initHeaderScroll();
  // Page-specific initializations should happen in their respective inline scripts
  // or be triggered from here based on body ID/class if preferred.
});

// Note: The inline scripts in the HTML files will need to be updated
// to import these functions and the 'providers' data from data.js.