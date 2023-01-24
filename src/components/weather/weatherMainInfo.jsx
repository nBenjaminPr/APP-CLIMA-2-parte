import styles from "./weatherMainInfo.module.css";

export default function WeatherMainInfo({ weather }) {
  return (
    <div className= {styles.mainInfo}>
      <div className={styles.city}>{weather?.location?.name}</div>
      <div className={styles.country}>{weather?.location?.country}</div>
      <div className={styles.row}>
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
