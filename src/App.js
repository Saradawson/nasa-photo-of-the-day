import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Image from "./components/image";

function App() {
  const [nasaData, setNasaData] = useState();

  useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => {
      setNasaData(res.data);
    }).catch(err => {
      console.error(err);
    })
  }, [])


  return (
    <div className="App">
      <h1>NASA Photo Of The Day</h1>
      { nasaData && <Image image={nasaData}/> }
    </div>
  );
}

export default App;
