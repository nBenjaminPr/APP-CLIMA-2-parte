import { useState, useEffect } from "react";
import Loading from "./loading";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import WeatherMainInfo2 from "./weatherMainInfor2";
import styles from "./weatherApp.module.css";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = "Weather | " + weather?.location?.name ?? "";
  }, [weather]);

  async function loadInfo(city = "tucuman") {
    console.log(
      `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
    );
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      console.log(json);

      setTimeout(() => {
        setWeather({ ...json });
      }, 2000);
    } catch (e) {
      console.error(e);
    }
  }

  function handleOnChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (

    <div className="container">

                            <div className={styles.row}>
                          <div className={styles.box}>
                          <WeatherForm onChangeCity={handleOnChangeCity} />
                          </div>

                                <div className="col-md-4 block" >
                                <div className={styles.weatherContainer}>
                                  {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
                                </div>
                                </div>


                                <div className="col-md-4 block " >
                                <div  className={styles.weatherContainer}>
                                  
                                  
                                  {weather ? <WeatherMainInfo2 weather={weather} /> : <Loading />}
                                </div>

                                    
                                </div>


                                <div className="col-md-4 block">
                                <div className={styles.weatherContainer}>
                                
                                {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
                              </div>

                                </div>

                                </div>

                                
                        </div>
    
  );
}
