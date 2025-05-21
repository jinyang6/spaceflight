// js/data.js - Fetches and provides access to provider JSON data

const PROVIDER_IDS = ['spacex', 'landspace', 'blueorigin', 'rocketlab'];
let allProvidersDataCache = null; // Simple cache for all provider data

/**
 * Fetches data for a single provider.
 * @param {string} providerId - The ID of the provider (e.g., 'spacex').
 * @returns {Promise<Object|null>} A promise that resolves to the provider's data object or null if an error occurs.
 */
async function fetchProviderData(providerId) {
  try {
    // Construct path using BASE_URL to ensure it works in dev and deployment
    // BASE_URL will be '/' in dev and '/spaceflight/' in production build.
    // We need to ensure no double slashes if BASE_URL is '/' and path starts with '/'.
    // A clean way is to ensure the data path part doesn't start with a slash.
    const baseUrl = import.meta.env.BASE_URL;
    const dataPath = `data/${providerId}/${providerId}.json`;
    // Ensure clean joining of baseUrl and dataPath
    const fetchUrl = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}${dataPath.startsWith('/') ? dataPath.substring(1) : dataPath}`;
    
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      console.error(`Failed to load data for ${providerId} from ${fetchUrl}: ${response.status} ${response.statusText}`);
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data for ${providerId}:`, error);
    return null;
  }
}

/**
 * Fetches and caches data for all known providers.
 * @returns {Promise<Object>} A promise that resolves to an object containing all providers' data,
 *                            keyed by provider ID. Returns an empty object if all fetches fail.
 */
export async function fetchAllProviderData() {
  if (allProvidersDataCache) {
    return allProvidersDataCache;
  }

  const providersData = {};
  // Use Promise.all to fetch all data concurrently
  const results = await Promise.all(PROVIDER_IDS.map(id => fetchProviderData(id)));

  PROVIDER_IDS.forEach((id, index) => {
    if (results[index]) {
      providersData[id] = results[index];
    }
  });
  
  allProvidersDataCache = providersData;
  return allProvidersDataCache;
}

/**
 * Placeholder for the old 'providers' object.
 * This is to minimize immediate breaking changes in other files.
 * Ideally, other files should await fetchAllProviderData() directly.
 * For now, we'll populate this after the first successful fetch.
 */
export let providers = {};

// Immediately try to fetch and populate the providers object.
// This is a top-level await, which is fine in modern modules.
// However, other modules importing 'providers' might get an empty object initially.
// A better pattern is for consuming modules to explicitly await fetchAllProviderData().
(async () => {
  try {
    providers = await fetchAllProviderData();
    console.log("All provider data loaded and cached in js/data.js:", providers);
  } catch (error) {
    console.error("Failed to perform initial fetch of all provider data:", error);
  }
})();