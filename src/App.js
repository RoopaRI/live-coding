import React from 'react';
import './App.css';
import ToggleButton from './Components/ToggleButton/ToggleButton';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      {/* Create a simple toggle button. */}
      <ToggleButton/>
      {/* Create a responsive navigation bar */}
      <Navbar/>
    </div>
  );
}

export default App;
