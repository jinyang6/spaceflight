export const data = {
  "manufacturer": "Blue Origin",
  "country": "United States",
  "vehicles": [
    {
      "id": "newshepard",
      "name": "New Shepard",
      "firstFlight": "2015-04-29",
      "height_m": 18,
      "diameter_m": 3.7,
      "mass_t": 75,
      "costPerLaunch_usd": 8500000,
      "payloadToLEO_t": 0.5,
      "costPerKgToLEO_usd": 17000.0,
      "reusableStages": 1,
      "operationalStatus": "active",
      "image": "new_shepard.png",
      "costScaling": [
        {"launchNumber": 1, "cost_usd": 8500000},
        {"launchNumber": 5, "cost_usd": 4250000},
        {"launchNumber": 10, "cost_usd": 2125000}
      ]
    },
    {
      "id": "newglenn",
      "name": "New Glenn",
      "firstFlight": null,
      "height_m": 95,
      "diameter_m": 7,
      "mass_t": 1450,
      "costPerLaunch_usd": 55000000,
      "payloadToLEO_t": 45.0,
      "costPerKgToLEO_usd": 1222.22,
      "reusableStages": 1,
      "operationalStatus": "development",
      "image": "new_glenn.png",
      "costScaling": [
        {"launchNumber": 1, "cost_usd": 55000000},
        {"launchNumber": 5, "cost_usd": 27500000},
        {"launchNumber": 10, "cost_usd": 13750000}
      ]
    }
  ]
};