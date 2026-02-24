import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RoseCourt from './components/RoseCourt';
import Services from './components/Services';
import Contact from './components/Contact';  // Add this import

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RoseCourt />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />  {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;