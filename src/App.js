import React from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Veriler from "./Veriler";
import Tarih from "./Tarih";

const başlangıç = {
  copyright: "Daniel Stern",
  date: "2023-02-02",
  explanation:
    "The 1970s are sometimes ignored by astronomers, like this beautiful grouping of reflection nebulae in Orion - NGC 1977, NGC 1975, and NGC 1973 - usually overlooked in favor of the substantial glow from the nearby stellar nursery better known as the Orion Nebula. Found along Orion's sword just north of the bright Orion Nebula complex, these reflection nebulae are also associated with Orion's giant molecular cloud about 1,500 light-years away, but are dominated by the characteristic blue color of interstellar dust reflecting light from hot young stars. In this sharp color image a portion of the Orion Nebula appears along the bottom border with the cluster of reflection nebulae at picture center. NGC 1977 stretches across the field just below center, separated from NGC 1973 (above right) and NGC 1975 (above left) by dark regions laced with faint red emission from hydrogen atoms. Taken together, the dark regions suggest the region's popular moniker, the Running Man Nebula. At the estimated distance of Orion's dusty molecular cloud this running man would be about 15 light-years across.",
  hdurl: "https://apod.nasa.gov/apod/image/2302/NGC1975RunningMan.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Reflections on the 1970s",
  url: "https://apod.nasa.gov/apod/image/2202/NGC1975RunningMan_1024.jpg",
};
function App() {
  const [veri, setVeri] = useState(null);
  const [date, setDate] = useState("2023-02-02");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        setVeri(response.data);
      })
      .catch((error) => {
        console.log("Bu numaralı Hata:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then((response) => {
        console.log(response);
        setVeri(response.data);
      })
      .catch((error) => {
        console.log("Bu numaralı Hata:", error);
      });
  }, [date]);

  return (
    <div className="App">
      <p style={{ fontWeigth: "bold", fontSize: "1.5rem" }}>
        Astronomy Picture of the Day
      </p>
      <Tarih date={date} setDate={setDate} />
      <Veriler veri={veri} />
    </div>
  );
}

export default App;
