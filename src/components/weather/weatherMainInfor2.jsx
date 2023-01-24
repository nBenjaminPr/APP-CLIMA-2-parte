import styles from "./weatherMainInfo.module.css";

export default function WeatherMainInfo2({ weather }) {
  return (
    <div className= {styles.mainInfo2}>
        
      <div className={styles.city2}>{weather?.location?.name}</div>
      <div className={styles.country}>{weather?.location?.country}</div>
      <div className={styles.row2}>
        <div>
          <img src={`http:${weather?.current?.condition?.icon}`} width="128" />
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.condition}>
            {weather?.current?.condition.text}
          </div>
          <div className={styles.current}>{weather?.current?.temp_c}º</div>
        </div>
      </div>
    </div>
  );
}
