import React from "react";
import styles from './SunDetails.module.css'; 

const SunDetails = ({ sunData }) => {
  if (!sunData) {
    return <p>No sun details available. Please select a city.</p>;
  }

  return (
    <div className={styles.sunDetails}>
      <h3>Sun Details</h3>
      <div className={styles.detailsCard}>
        <p><strong>Sunrise:</strong> {sunData.sunrise}</p>
        <p><strong>Sunset:</strong> {sunData.sunset}</p>
      </div>
    </div>
  );
};

export default SunDetails;
