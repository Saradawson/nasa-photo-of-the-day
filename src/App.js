import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const dummyData = {
date: "2022-05-18",
explanation: "Cloudy skies plagued some sky watchers on Sunday as May's Full Flower Moon slipped through Earth's shadow in a total lunar eclipse. In skies above Chile's Atacama desert this telephoto snapshot still captured an awesome spectacle though. Seen through thin high cirrus clouds just before totality began, a last sliver of sunlit crescent glistens like a hazy jewel atop the mostly shadowed lunar disk. This full moon was near perigee, the closest point in its elliptical orbit. It passed near the center of Earth's dark umbral shadow during the 90 minute long total eclipse phase. Faintly suffused with sunlight scattered by the atmosphere, the umbral shadow itself gave the eclipsed moon a reddened appearance and the very dramatic popular moniker of a Blood Moon.",
hdurl: "https://apod.nasa.gov/apod/image/2205/DiamondMoonWSMALL.jpg",
title: "A Jewel on the Flower Moon",
}

function App() {
  const [nasaData, setNasaData] = useState(dummyData);

  // axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  // .then(res => {
    // setNasaData(res.data);
  // }).catch(err => {
    // console.error(err);
  // })


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
