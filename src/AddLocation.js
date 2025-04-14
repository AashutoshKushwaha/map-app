import React, { useState } from 'react';
import axios from 'axios';

const AddLocation = ({ setMarkers }) => {
  const [name, setName] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        'http://localhost:5000/api/locations',
        { name, lat, lon },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMarkers((prev) => [...prev, { lat, lon, name }]);
      alert('Location added successfully');
      setName('');
      setLat('');
      setLon('');
    } catch (error) {
      console.error('Error adding location:', error);
      alert('Please log in to add a location');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Location Name"
      />
      <input
        type="text"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        placeholder="Latitude"
      />
      <input
        type="text"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
        placeholder="Longitude"
      />
      <button type="submit">Add Location</button>
    </form>
  );
};

export default AddLocation;