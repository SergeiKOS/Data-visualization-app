import React from "react";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

function Chart({dailyData, userTimeInput}) {
  const lineChart = <Line options={{ responsive: true }} data={dailyData} userTimeInput={userTimeInput} />;
  return <div className={styles.chartWrapper}>{lineChart}</div>;
}

export default Chart;
