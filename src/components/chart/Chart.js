import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

function Chart({ dailyData, userTimeInput }) {
  const lineChart = (
    <Line
      options={{ responsive: true }}
      data={dailyData}
      userTimeInput={userTimeInput}
    />
  );
  return <div className={styles.chartWrapper}>{lineChart}</div>;
}

Chart.propTypes = {
  dailyData: PropTypes.object.isRequired,
  userTimeInput: PropTypes.number,
};

export default Chart;
