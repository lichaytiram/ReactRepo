import React from 'react';
import './App.css';
import Greet from './components/Greet';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Welcome /> */}

      <Greet firstName="Lichay" lastName="Tiram" >
        <h2>hi</h2>
      </Greet>
      <Greet firstName="Dor" lastName="David" />

    </div>
  );
}

export default App;
