import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ setMarkers }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );
      const results = response.data;
      setMarkers(
        results.map((result) => ({
          lat: result.lat,
          lon: result.lon,
          name: result.display_name,
        }))
      );
    } catch (error) {
      console.error('Error searching places:', error);
    }
  };

  return (
    <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1000 }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search places"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;