# Map-App

This is a React-Leaflet-based web application that allows users to interact with a map, search for places, add locations, add reviews, and log in for authentication. The app features a collapsible sidebar. The backend, built with Node.js and Express, handles user authentication, location storage, and reviews.

## Features

- **Interactive Map**:
  - Displays a map centered at `[26.508490, 80.229450]` (the location of PClub) with an initial zoom level of 20.
  - Uses OpenStreetMap for rendering maps.
- **Marker Zoom on Click**:
  - Clicking a marker zooms the map to its coordinates at zoom level 15 with a smooth animation and opens a popup with the place name.
- **Marker Icon**:
  - Uses a default blue pin icon, set for better visibility.
- **Sidebar**:
  - Expanded by default, containing Search, Add Location, Add Review, and Login forms.
  - Only one form is visible at a time to prevent overlap.
  - Toggleable with a “Menu” button to maximize map view.
- **Search Places**:
  - Search for locations using the Nominatim API .
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

## Setup and Usage Instructions

- **Clone the repository**:
  ```bash
  git clone <repository-url>
  cd map-app
- **Project Structure**:
  ```bash
  -map-app/
  -├── backend/
  -│   ├── server.js           # Backend API (Express)
  -│   ├── package.json
  -├── src/
  -│   ├── App.js              # Main app with sidebar and map
  -│   ├── Map.js              # Map component with blue markers
  -│   ├── Login.js            # Login form
  -│   ├── AddLocation.js      # Add location form
  -│   ├── AddReview.js        # Add review form
  -│   ├── Search.js           # Search places form
  -│   ├── App.css             # Styles for sidebar and map
  -│   ├── index.js
  -├── package.json
  -├── README.md
- **Running the Application**:
  ```bash
  -cd server
  -noder server.js
  -cd ..
  -npm start
- **For authenticated user features**:
  - use Postman or Curl for registering users and then use Add Location and Add Review feature.
