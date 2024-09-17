import React from 'react';
import './App.css';
// import ToggleButton from './Components/ToggleButton/ToggleButton';
// import Navbar from './Components/Navbar/Navbar';
// import Form from './Components/Form/Form';
// import Counter from './Components/Counter/Counter';
// import Fetch from './Components/Fetch/Fetch';
// import ToDo from './Components/ToDo/ToDo';
import PassedProps from './Components/PassedProps/PassedProps';

function App() {
  return (
    <div className="App">
      {/* 1.Create a simple toggle button. */}
      {/* <ToggleButton/> */}

      {/* 2.Create a responsive navigation bar */}
      {/* <Navbar/> */}

      {/* 3.Create a form with validation. */}
      {/* <Form/> */}

      {/* 4.Create a Simple counter component using react hooks */}
      {/* <Counter/> */}

      {/* 5.Fetch data and display */}
      {/* <Fetch/> */}

      {/* 6.To-Do List  */}
      {/* <ToDo/> */}

      {/* 7.Create a simple React component that displays a list of items passed as props. */}
      <PassedProps/>
    </div>
  );
}

export default App;
