import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import "./App.css";
import Image from "./components/image";
import 'react-datepicker/dist/react-datepicker.css'

function App() {
  const [nasaData, setNasaData] = useState();
  const [selectedDate, setSelectedDate] = useState(null)

  useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => {
      setNasaData(res.data);
    }).catch(err => {
      console.error(err);
    })
  }, [])

  const dateChange = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const day = selectedDate.getDate();
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${year}-${month}-${day}`)
      .then(res => {
        setNasaData(res.data)
      }).catch(err => {
        console.error(err);
      })
  }

  return (
    <div className="App">
      <h1>NASA Photo Of The Day</h1>
        <DatePicker 
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat='yyyy-MM-dd'
          maxDate={new Date()}
          />
          <button onClick={dateChange}>Pick Date!</button>
        { nasaData && <Image image={nasaData}/> }
    </div>
  );
}

export default App;
