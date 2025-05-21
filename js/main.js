/**
 * Reusable Rockets - Main JavaScript Module
 * General functionality and data access using imported modules.
 */

// Import the async data fetching function
import { fetchAllProviderData } from './data.js';

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

// --- Async Data Access Functions ---

/**
 * Get detailed data for a specific provider by ID.
 * @param {string} providerId - The ID of the provider.
 * @returns {Promise<Object|null>} The provider data object or null if not found.
 */
export async function getProviderById(providerId) {
  try {
    const allProviders = await fetchAllProviderData();
    if (!allProviders || !allProviders[providerId]) {
      throw new Error(`Provider data for '${providerId}' not found after fetch.`);
    }
    // Return a copy to prevent accidental modification of the cache
    return JSON.parse(JSON.stringify(allProviders[providerId]));
  } catch (error) {
    console.error(`Error getting provider data by ID for '${providerId}':`, error);
    return null;
  }
}

/**
 * Get detailed data for a specific rocket by provider ID and rocket ID.
 * @param {string} providerId - The ID of the provider.
 * @param {string} rocketId - The ID of the rocket.
 * @returns {Promise<Object|null>} The rocket data object or null if not found.
 */
export async function getRocketById(providerId, rocketId) {
  try {
    const providerData = await getProviderById(providerId); // Uses the async version
    if (!providerData || !providerData.vehicles) {
      // Error already logged by getProviderById if providerData is null
      if (providerData && !providerData.vehicles) {
         console.error(`No vehicles found for provider '${providerId}'.`);
      }
      return null;
    }

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

/**
 * Get summary data for all providers (manufacturer, country, vehicles array).
 * This replaces the old getProviderRockets and is more aligned with what provider.html needs.
 * @param {string} providerId - The ID of the provider.
 * @returns {Promise<Object|null>} An object with manufacturer, country, and vehicles array, or null.
 */
export async function getProviderWithVehicles(providerId) {
    try {
        const providerData = await getProviderById(providerId);
        if (!providerData) return null;

        return JSON.parse(JSON.stringify({
            manufacturer: providerData.manufacturer,
            country: providerData.country,
            vehicles: providerData.vehicles || []
        }));
    } catch (error) {
        console.error(`Error getting rockets for provider '${providerId}':`, error);
        return { manufacturer: '', country: '', vehicles: [] }; // Return a default structure on error
    }
}


/**
 * Get summary data for all providers for the index page.
 * @returns {Promise<Array>} An array of provider summary objects.
 */
export async function getAllProvidersSummary() {
   try {
        const allProviders = await fetchAllProviderData();
        if (!allProviders || Object.keys(allProviders).length === 0) {
            throw new Error("Fetched providers data is empty or not found.");
        }
       
        const summary = Object.keys(allProviders).map(id => {
            const provider = allProviders[id];
            const firstVehicleImage = provider.vehicles?.[0]?.image;
            // Paths are relative to public root. Vite handles base path.
            // Provider logo from JSON, or first vehicle image, or placeholder.
            const image = provider.logo || (firstVehicleImage ? `data/${id}/imgs/${firstVehicleImage}` : 'assets/placeholder.png');
            
            return {
                id: id,
                manufacturer: provider.manufacturer,
                country: provider.country,
                vehicleCount: provider.vehicles?.length || 0,
                image: image 
            };
        });
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
  // and will need to be async to await data loading.
});

// Note: The inline scripts in the HTML files will need to be updated
// to import these async functions and handle their promises.