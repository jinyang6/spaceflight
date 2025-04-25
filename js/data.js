/**
 * Reusable Rockets - Data
 * Contains all rocket data to avoid CORS issues when loading from local files
 */

// SpaceX data
const spacexData = {
  "manufacturer": "SpaceX",
  "country": "United States",
  "vehicles": [
    {
      "id": "falcon9",
      "name": "Falcon 9 Block 5",
      "firstFlight": "2010-06-04",
      "height_m": 69.8,
      "diameter_m": 3.7,
      "mass_kg": 549000,
      "costPerLaunch_usd": 69750000,
      "payloadToLEO_kg": 22800,
      "costPerKgToLEO_usd": 3059.21,
      "reusableStages": 1,
      "operationalStatus": "active",
      "image": "falcon9.png",
      "costScaling": [
        {"launchNumber": 1, "cost_usd": 69750000},
        {"launchNumber": 5, "cost_usd": 18975000},
        {"launchNumber": 10, "cost_usd": 15000000},
        {"launchNumber": 15, "cost_usd": 7000000},
        {"launchNumber": 20, "cost_usd": 6000000}
      ]
    },
    {
      "id": "falconheavy",
      "name": "Falcon Heavy",
      "firstFlight": "2018-02-06",
      "height_m": 70,
      "diameter_m": 3.66,
      "mass_kg": 1420788,
      "costPerLaunch_usd": 97000000,
      "payloadToLEO_kg": 63800,
      "costPerKgToLEO_usd": 1518.18,
      "reusableStages": 2,
      "operationalStatus": "active",
      "image": "falconheavy.png",
      "costScaling": [
        {"launchNumber": 1, "cost_usd": 97000000},
        {"launchNumber": 5, "cost_usd": 25000000},
        {"launchNumber": 10, "cost_usd": 20000000},
        {"launchNumber": 15, "cost_usd": 15000000},
        {"launchNumber": 20, "cost_usd": 12000000}
      ]
    },
    {
      "id": "starship",
      "name": "Starship",
      "firstFlight": "2023-04-20",
      "height_m": 124.4,
      "diameter_m": 9,
      "mass_kg": 5000000,
      "costPerLaunch_usd": 10000000,
      "payloadToLEO_kg": 100000,
      "costPerKgToLEO_usd": 100,
      "reusableStages": 2,
      "operationalStatus": "testing",
      "image": "starship.png",
      "costScaling": [
        {"launchNumber": 1, "cost_usd": 10000000},
        {"launchNumber": 5, "cost_usd": 5000000},
        {"launchNumber": 10, "cost_usd": 4000000},
        {"launchNumber": 15, "cost_usd": 3000000},
        {"launchNumber": 20, "cost_usd": 2000000}
      ]
    }
  ]
};

// LandSpace data
const landspaceData = {
  "manufacturer": "LandSpace",
  "country": "China",
  "vehicles": [
    {
      "id": "zhuque3",
      "name": "Zhuque-3",
      "firstFlight": null,
      "height_m": 76.6,
      "diameter_m": 4.5,
      "mass_kg": 660000,
      "costPerLaunch_usd": 6390000,
      "payloadToLEO_kg": 21300,
      "costPerKgToLEO_usd": 300,
      "reusableStages": 1,
      "operationalStatus": "planned",
      "image": "zhuque3.png",
      "costScaling": [
        {"launchNumber": 1, "cost_usd": 6390000},
        {"launchNumber": 5, "cost_usd": 5325000},
        {"launchNumber": 10, "cost_usd": 4260000},
        {"launchNumber": 15, "cost_usd": 3195000},
        {"launchNumber": 20, "cost_usd": 2130000}
      ]
    }
  ]
};

// Blue Origin data
const blueOriginData = {
  "manufacturer": "Blue Origin",
  "country": "United States",
  "vehicles": [
    {
      "id": "new_shepard",
      "name": "New Shepard",
      "firstFlight": "2015-04-29",
      "height_m": 19.2,
      "diameter_m": 3.8,
      "mass_kg": 75000,
      "costPerLaunch_usd": 500000,
      "payloadToLEO_kg": 0, // Suborbital
      "costPerKgToLEO_usd": null, // Suborbital
      "reusableStages": 1,
      "operationalStatus": "active",
      "image": "new_shepard.png",
      "costScaling": [
        {"launchNumber": 1, "cost_usd": 500000},
        {"launchNumber": 5, "cost_usd": 300000},
        {"launchNumber": 10, "cost_usd": 200000},
        {"launchNumber": 15, "cost_usd": 150000},
        {"launchNumber": 20, "cost_usd": 100000}
      ]
    },
    {
      "id": "new_glenn",
      "name": "New Glenn",
      "firstFlight": "2025-01-16", // Planned
      "height_m": 98,
      "diameter_m": 7,
      "mass_kg": null,
      "costPerLaunch_usd": 20000000,
      "payloadToLEO_kg": 45000,
      "costPerKgToLEO_usd": 444.44,
      "reusableStages": 1,
      "operationalStatus": "planned", // Updated status
      "image": "new_glenn.png",
      "costScaling": [ // Note: Cost scaling data seems constant, might need update later
        {"launchNumber": 1, "cost_usd": 20000000},
        {"launchNumber": 5, "cost_usd": 20000000},
        {"launchNumber": 10, "cost_usd": 20000000},
        {"launchNumber": 15, "cost_usd": 20000000},
        {"launchNumber": 20, "cost_usd": 20000000}
      ]
    }
  ]
};


// All providers data (Combined)
const allData = {
  "spacex": spacexData,
  "landspace": landspaceData,
  "blueorigin": blueOriginData
};

// Helper function to get provider summary
function getProviderSummary(providerId) {
  const data = allData[providerId];
  if (!data) return null;
  return {
    id: providerId,
    manufacturer: data.manufacturer,
    country: data.country,
    vehicleCount: data.vehicles.length,
    // Get a representative image (e.g., first vehicle's image)
    image: data.vehicles.length > 0 ? `data/${providerId}/imgs/${data.vehicles[0].image}` : null
  };
}

// Array of provider summaries
const providersData = Object.keys(allData).map(id => getProviderSummary(id)).filter(p => p !== null);