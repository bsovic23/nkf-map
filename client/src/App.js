import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
import Map from './pages/Map';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <section>
      <div>
        < Homepage />
      </div>
      <div>
        <Map />
      </div>
    </section>
  );
}

export default App;
