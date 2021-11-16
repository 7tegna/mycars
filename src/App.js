import {React, useState } from "react"
import './App.css';
import Car from "./Components/Car";
import Cars from "./Cars";
function App() {
  const [Car, setCars] = useState(Cars);
  const handleClear = () => {
      setCars([]);
  };
  return (
    <div className="App">
      <h2> Car List </h2>
      <h2>{Cars.length} Cars in the lot</h2>
      <Car car={Car}/>
      {Car.length !== 0 ? (
      <button onClick={handleClear}> Clear all</button>
      ) : (
      <button onClick={() => setCars(Cars)}>Reset</button>
      )}
    </div>
  );
}

export default App;