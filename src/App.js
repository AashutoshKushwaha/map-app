import React, { useState } from 'react';
import Map from './Map';
import Search from './Search';
import AddLocation from './AddLocation';
import AddReview from './AddReview';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional: for styling
import './App.css';

function App() {
  const [markers, setMarkers] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar open by default
  const [activePanel, setActivePanel] = useState(null); // No panel open initially

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    // Close all panels when collapsing sidebar
    if (!sidebarOpen) setActivePanel(null);
  };

  const openPanel = (panel) => {
    // Open the clicked panel; close it if already open
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <div className="App">
      {/* Sidebar Toggle Button */}
      <button
        className="sidebar-toggle btn btn-primary"
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 1100,
        }}
      >
        {sidebarOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar ${sidebarOpen ? 'open' : ''}`}
        style={{
          position: 'absolute',
          top: 60,
          left: 10,
          zIndex: 1000,
          width: sidebarOpen ? '300px' : '0',
          transition: 'width 0.3s ease',
          background: 'white',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          overflow: 'hidden',
        }}
      >
        <div className="sidebar-content" style={{ padding: sidebarOpen ? '15px' : '0' }}>
          {/* Search Panel */}
          <div className="panel">
            <button
              className="btn btn-link"
              onClick={() => openPanel('search')}
              style={{ width: '100%', textAlign: 'left', padding: '10px 0' }}
            >
              Search Places
            </button>
            {activePanel === 'search' && (
              <div className="panel-content">
                <Search setMarkers={setMarkers} />
              </div>
            )}
          </div>

          {/* Add Location Panel */}
          <div className="panel">
            <button
              className="btn btn-link"
              onClick={() => openPanel('addLocation')}
              style={{ width: '100%', textAlign: 'left', padding: '10px 0' }}
            >
              Add Location
            </button>
            {activePanel === 'addLocation' && (
              <div className="panel-content">
                <AddLocation setMarkers={setMarkers} />
              </div>
            )}
          </div>

          {/* Add Review Panel */}
          <div className="panel">
            <button
              className="btn btn-link"
              onClick={() => openPanel('addReview')}
              style={{ width: '100%', textAlign: 'left', padding: '10px 0' }}
            >
              Add Review
            </button>
            {activePanel === 'addReview' && (
              <div className="panel-content">
                <AddReview />
              </div>
            )}
          </div>

          {/* Login Panel */}
          <div className="panel">
            <button
              className="btn btn-link"
              onClick={() => openPanel('login')}
              style={{ width: '100%', textAlign: 'left', padding: '10px 0' }}
            >
              Login
            </button>
            {activePanel === 'login' && (
              <div className="panel-content">
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Map */}
      <Map markers={markers} />
    </div>
  );
}

export default App;