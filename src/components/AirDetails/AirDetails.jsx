import React from "react";
import styles from './AirDetails.module.css';

const AirDetails = ({ airData }) => {
  if (!airData) {
    return <p>No air details available. Please select a city.</p>;
  }

  return (
    <div className={styles.airDetails}>
      <h3>Air Details</h3>
      <div className={styles.detailsCard}>
        <p><strong>Humidity:</strong> {airData.humidity}%</p>
        <p><strong>Wind Speed:</strong> {airData.windSpeed} mph</p>
      </div>
    </div>
  );
};

export default AirDetails;
