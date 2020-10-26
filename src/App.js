import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import {customAlert, NotificationComponent} from './customNotification'

import { GithubPicker } from "react-color";
import Form from "./components/form/Form";
import Chart from "./components/chart/Chart";
import {
  returnData,
  returnDate,
  returnColor,
} from "./components/getLocalStorageData";

function App() {
  const [userDataInput, setUserDataInput] = useState();
  const [userTimeInput, setUserTimeInput] = useState(new Date());
  const [userTimeInputNow, setUserTimeInputNow] = useState();
  const [dataData, setDataData] = useState(returnData());
  const [dataTime, setDataTime] = useState(returnDate());
  const [dailyData, setDailyData] = useState({
    datasets: [
      {
        label: "",
        backgroundColor: returnColor(),
        data: [],
      },
    ],
  });

  useEffect(() => {
    const dailyDataCopy = { ...dailyData };
    const date = returnDate();
    const data = returnData();
    dailyDataCopy.labels = date;
    dailyDataCopy.datasets[0].data = data;
    setDailyData(dailyDataCopy);
  }, [dataData]);

  const handleDataChange = (e) => {
    setUserDataInput(+e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userTimeInputNow) {
      customAlert("Pick a date.");
      return;
    }

    if (dataTime[dataTime.length - 1] === userTimeInputNow) {
      customAlert("The same date can't be entered.");
      return;
    }

    const dateLater = (date) => {
      if (date) {
        date = date.split("/");
        date[0] = date[0] * 400;
        date[1] = date[1] * 32;
        date = date[0] + date[1] + date[2];
        return date;
      }
    };

    if (
      dateLater(dataTime[dataTime.length - 1]) > dateLater(userTimeInputNow)
    ) {
      customAlert("Previous date can't be entered.");
      return;
    }

    let dataDataCopy = [...dataData];
    dataDataCopy.push(userDataInput);
    const dataDataString = dataDataCopy.join(", ");
    localStorage.setItem("number", dataDataString);
    setDataData(dataDataCopy);
    let dataTimeCopy = [...dataTime];

    dataTimeCopy.push(userTimeInputNow);
    setDataTime([...dataTimeCopy]);

    const dataTimeString = dataTimeCopy.join(", ");
    localStorage.setItem("date", dataTimeString);
  };

  function formatDate(date) {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("/");
  }

  const handleDateChange = (date) => {
    setUserTimeInput(date);

    date = formatDate(date);
    setUserTimeInputNow(date);
  };

  const handleColorChange = (color) => {
    setDailyData({
      datasets: [
        {
          label: "",
          backgroundColor: color.hex,
          data: dailyData.datasets[0].data,
        },
      ],
    });
    localStorage.setItem("color", color.hex);
  };

  return (
    <div className="App">
      <div className={styles.rules}>
        Graphics to track changes in data (weight, calories, height, etc). Chart
        will be saved in your browser.
      </div>
      <div className={styles.formColorPickerWrapper}>
        <Form
          onDataChange={handleDataChange}
          onSubmit={handleSubmit}
          userTimeInput={userTimeInput}
          onDateChange={handleDateChange}
          color={dailyData.datasets[0].backgroundColor}
        />
        <div className={styles.pickColor}>You can pick a color:</div>
        <GithubPicker
          color={dailyData.datasets[0].backgroundColor}
          onChangeComplete={handleColorChange}
        />
      </div>

      <Chart dailyData={dailyData} />

      <NotificationComponent/>
    </div>
  );
}

export default App;
