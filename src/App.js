import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Image from "./components/image";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function App() {
  const [nasaData, setNasaData] = useState();
  const[startDate, setStartDate] = useState(new Date());
  
  console.log(startDate);

  const startDateArr = startDate.toString().split(' ');
  const year = startDateArr[3];
    let monthNum = ''
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    months.map(month => {
      if(month === startDateArr[1]){
         return monthNum = `0${months.indexOf(month)}`
      }
    })

  const day = startDateArr[2]

  const date = `${year}-${monthNum}-${day}`;

  useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
    .then(res => {
      setNasaData(res.data);
    }).catch(err => {
      console.error(err);
    })
  }, [])


  return (
    <div className="App">
      <h1>NASA Photo Of The Day</h1>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
      { nasaData && <Image image={nasaData}/> }
    </div>
  );
}

export default App;
