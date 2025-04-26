export const data = {
  "manufacturer": "SpaceX",
  "country": "United States",
  "vehicles": [
    {
      "id": "falcon9",
      "name": "Falcon 9 Block 5",
      "firstFlight": "2010-06-04",
      "height_m": 69.8,
      "diameter_m": 3.7,
      "mass_t": 549,
      "costPerLaunch_usd": 69750000,
      "payloadToLEO_t": 22.8,
      "costPerKgToLEO_usd": 3059.21,
      "reusableStages": 1,
      "operationalStatus": "active",
      "image": "falcon9.png",
      "modelFile": "falcon9.glb",
      "modelCredit": "\"Falcon 9 - SpaceX\" (https://skfb.ly/6RIC9) by Stanley Creative is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).", // Updated credit
      "costScaling": [
        {
          "launchNumber": 1,
          "cost_usd": 69750000
        },
        {
          "launchNumber": 5,
          "cost_usd": 18975000
        },
        {
          "launchNumber": 10,
          "cost_usd": 15000000
        },
        {
          "launchNumber": 15,
          "cost_usd": 7000000
        },
        {
          "launchNumber": 20,
          "cost_usd": 6000000
        }
      ]
    },
    {
      "id": "falconheavy",
      "name": "Falcon Heavy",
      "firstFlight": "2018-02-06",
      "height_m": 70,
      "diameter_m": 3.66,
      "mass_t": 1420.788,
      "costPerLaunch_usd": 97000000,
      "payloadToLEO_t": 63.8,
      "costPerKgToLEO_usd": 1520.38,
      "reusableStages": 2,
      "operationalStatus": "active",
      "image": "falconheavy.png",
      "modelFile": "falconheavy.glb",
      "modelCredit": "\"SpaceX Falcon Heavy\" (https://skfb.ly/o6zpZ) by AllThingsSpace is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).", // Updated credit
      "costScaling": [
        {
          "launchNumber": 1,
          "cost_usd": 97000000
        },
        {
          "launchNumber": 5,
          "cost_usd": 25000000
        },
        {
          "launchNumber": 10,
          "cost_usd": 20000000
        },
        {
          "launchNumber": 15,
          "cost_usd": 15000000
        },
        {
          "launchNumber": 20,
          "cost_usd": 12000000
        }
      ]
    },
    {
      "id": "starship",
      "name": "Starship",
      "firstFlight": "2023-04-20",
      "height_m": 124.4,
      "diameter_m": 9,
      "mass_t": 5000,
      "costPerLaunch_usd": 10000000,
      "payloadToLEO_t": 100.0,
      "costPerKgToLEO_usd": 100.0,
      "reusableStages": 2,
      "operationalStatus": "testing",
      "image": "starship.png",
      "modelFile": "starship.glb",
      "modelCredit": "\"SpaceX Starship Ship S25 & Booster 9\" (https://skfb.ly/oL9CU) by Clarence365 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).", // Updated credit
      "costScaling": [
        {
          "launchNumber": 1,
          "cost_usd": 10000000
        },
        {
          "launchNumber": 5,
          "cost_usd": 5000000
        },
        {
          "launchNumber": 10,
          "cost_usd": 4000000
        },
        {
          "launchNumber": 15,
          "cost_usd": 3000000
        },
        {
          "launchNumber": 20,
          "cost_usd": 2000000
        }
      ]
    }
  ]
};