import React from "react";
import IChart from "./IChart.interface";
import { Line } from "react-chartjs-2";
// @ts-ignore
import styles from "./Chart.module.css";

function Chart({ dailyData }: IChart) {
  const lineChart = <Line options={{ responsive: true }} data={dailyData} />;
  return <div className={styles.chartWrapper}>{lineChart}</div>;
}

export default Chart;
