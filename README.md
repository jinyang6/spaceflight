# Reusable Rockets

An Apple-style minimalist website showcasing the cost efficiency of reusable rockets from different space launch providers, built with dynamic content loading.

**Live Site:** [https://jinyang6.github.io/spaceflight/](https://jinyang6.github.io/spaceflight/)
## Overview

This project presents data on reusable rockets from SpaceX, LandSpace, Blue Origin, and Rocket Lab, focusing on how reusability dramatically reduces launch costs over time. The website uses dynamic content generation to display provider and rocket information from a central data source (`js/data.js`).

The website features:

- Dynamically generated provider and rocket pages
- Interactive cost reduction visualizations (with table fallback)
- Detailed specifications for each rocket loaded from data
- Information about each provider's approach to reusability
- Mobile-responsive design with a clean, minimalist aesthetic

## Technologies Used

- HTML5 Templates (`provider.html`, `rocket.html`)
- CSS3 with responsive design
- Vanilla JavaScript for dynamic content loading and URL parameter parsing
- Chart.js for data visualizations
- Apple-inspired minimal design language

## Project Structure (Dynamic)

```
.
├── index.html              # Main homepage (dynamically lists providers)
├── provider.html           # Template for provider pages (loads data based on URL param: ?provider=...)
├── rocket.html             # Template for rocket pages (loads data based on URL params: ?provider=...&rocket=...)
├── css/
│   └── main.css            # Main stylesheet
├── js/
│   ├── main.js             # Core JS functions, URL parsing
│   ├── data.js             # Central data store for all providers/rockets
│   └── charts.js           # Chart creation and visualization logic
└── data/                   # Provider data, images, and 3D models
    ├── blueorigin/
    │   ├── blueorigin.js
    │   └── imgs/
    ├── landspace/
    │   ├── landspace.js
    │   └── imgs/
    ├── rocketlab/
    │   ├── rocketlab.js
    │   ├── imgs/
    │   └── models/         # 3D models (.glb)
    └── spacex/
        ├── spacex.js
        ├── imgs/
        └── models/         # 3D models (.glb)
```

## How Dynamic Loading Works

1.  **`index.html`**: Loads provider summaries from `js/data.js` and creates links to `provider.html?provider=[providerId]`.
2.  **`provider.html`**: Reads the `provider` parameter from the URL. Loads the corresponding provider data from `js/data.js`. Displays provider info and generates a list of rockets, linking to `rocket.html?provider=[providerId]&rocket=[rocketId]`.
3.  **`rocket.html`**: Reads `provider` and `rocket` parameters from the URL. Loads the specific rocket data from `js/data.js`. Displays detailed specs and the cost efficiency chart/table.

## GitHub Pages Deployment

This website is designed to be hosted on GitHub Pages. To deploy:

1. Push this repository to GitHub.
2. Go to the repository settings.
3. In the "Pages" section, select the branch to deploy from (e.g., `main`).
4. Ensure the source is set to "Deploy from a branch".
5. The site will be published at `https://<your-username>.github.io/<repository-name>/`. Direct links like `https://<your-username>.github.io/<repository-name>/provider.html?provider=spacex` should work.

## Data Sources

The data for this project is sourced from publicly available information and consolidated in `js/data.js`.

## 3D Model Credits

The interactive 3D models used on the rocket detail pages are sourced from Sketchfab and licensed under Creative Commons Attribution:

- Falcon 9: ["Falcon 9 - SpaceX"](https://skfb.ly/6RIC9) by Stanley Creative is licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/).
- Falcon Heavy: ["SpaceX Falcon Heavy"](https://skfb.ly/o6zpZ) by AllThingsSpace is licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/).
- Starship: ["SpaceX Starship Ship S25 & Booster 9"](https://skfb.ly/oL9CU) by Clarence365 is licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/).
- Rocketlab Neutron: ["Rocketlab Neutron Rocket"](https://skfb.ly/oACvZ) by Clarence365 is licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/).

Models for other rockets (LandSpace, Blue Origin) are placeholders or not yet available.
## Features

- **Dynamic Provider Pages:** Overview of each space company and their fleet.
- **Dynamic Rocket Pages:** Detailed information about each rocket with cost efficiency visualizations.
- **Interactive Charts:** Visual representation of how costs decrease with each reuse (with table fallback).
- **Responsive Design:** Optimized for all screen sizes.

## Cost Efficiency Focus

The website highlights how reusable rockets dramatically reduce the cost of accessing space, using data loaded dynamically for each rocket.

## License

This is an educational project showcasing space technology data and dynamic web development techniques.

## Author

This project was created for educational purposes.