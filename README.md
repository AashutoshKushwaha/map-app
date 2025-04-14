# Map Application

This is a React-Leaflet-based web application that allows users to interact with a map, search for places, add locations, submit reviews, and log in for authentication. The app features a collapsible sidebar for a clean UI and uses a blue marker icon for visibility. The backend, built with Node.js and Express, handles user authentication, location storage, and reviews.

## Features

- **Interactive Map**:
  - Displays a map centered at `[26.508490, 80.229450]` with an initial zoom level of 20.
  - Uses OpenStreetMap tiles for rendering.
- **Marker Zoom on Click**:
  - Clicking a marker zooms the map to its coordinates at zoom level 15 with a smooth animation and opens a popup with the place name.
- **Marker Icon**:
  - Uses Leaflet’s default blue pin icon, explicitly set for reliable visibility.
- **Sidebar**:
  - Expanded by default, containing Search, Add Location, Add Review, and Login forms.
  - Only one form is visible at a time to prevent overlap, ensuring a clean UI.
  - Toggleable with a “Menu” button to maximize map view.
- **Search Places**:
  - Search for locations using the Nominatim API (e.g., “Kanpur”).
  - Results appear as blue markers with popups showing place names.
- **Add Location**:
  - Authenticated users can add locations by specifying a name, latitude, and longitude.
  - Added locations appear as blue markers and are stored in the backend.
- **Add Review**:
  - Authenticated users can submit reviews for locations using a location ID.
  - Reviews are stored in the backend (no UI display currently).
- **Login**:
  - Users authenticate with a username and password, receiving a JWT token.
  - Required for adding locations and reviews.
- **Responsive Design**:
  - Sidebar adapts to mobile screens (full-width on small devices).
  - Map shifts to accommodate the sidebar, ensuring full visibility.

## Prerequisites

- **Node.js** and **npm** (v14 or higher recommended).
- Browser (e.g., Chrome, Firefox) for testing.
- **Postman** or **curl** for registering users (no registration UI).
- Terminal to run frontend and backend servers.
