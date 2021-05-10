import React, { useState, useEffect } from "react";

import { GithubPicker } from "react-color";

// @ts-ignore
import styles from "./App.module.css";
// @ts-ignore
import { ReactComponent as Logo } from "./logo.svg";
import { customAlert, NotificationComponent } from "./customNotification";
import Form from "./components/form/Form";
import Chart from "./components/chart/Chart";
import {
  returnData,
  returnDate,
  returnColor,
} from "./components/getLocalStorageData";
import ResetBtn from "./components/resetBtn/ResetBtn";

function App() {
  const [userDataInput, setUserDataInput] = useState<number | undefined>();
  const [userTimeInput, setUserTimeInput] = useState(new Date());
  const [userTimeInputNow, setUserTimeInputNow] = useState();
  const [dataData, setDataData] = useState(returnData());
  const [dataTime, setDataTime] = useState(returnDate());
  const [dailyData, setDailyData] = useState<any>({
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
  }, [dataData]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserDataInput(+e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!userTimeInputNow) {
      customAlert("Pick a date.");
      return;
    }

    if (dataTime[dataTime.length - 1] === userTimeInputNow) {
      customAlert("The same date can't be entered.");
      return;
    }

    const dateLater = (date: any): any => {
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
    // @ts-ignore
    dataDataCopy.push(userDataInput);
    const dataDataString = dataDataCopy.join(", ");
    localStorage.setItem("number", dataDataString);
    setDataData(dataDataCopy);
    let dataTimeCopy = [...dataTime];

    // @ts-ignore
    dataTimeCopy.push(userTimeInputNow);
    setDataTime([...dataTimeCopy]);

    const dataTimeString = dataTimeCopy.join(", ");
    localStorage.setItem("date", dataTimeString);
  };

  function formatDate(date: any): string {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("/");
  }

  const handleDateChange = (date: any): void => {
    setUserTimeInput(date);

    date = formatDate(date);
    setUserTimeInputNow(date);
  };

  const handleColorChange = (color: any): void => {
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

  const handleReset = (): void => {
    if (window.confirm("Are you sure you want to delete all your data?")) {
      setDataData([]);
      setDataTime([]);
      localStorage.removeItem("date");
      localStorage.removeItem("number");
    }
  };

  return (
    <div className="App">
      <div className={styles.rules}>
        Graphics to track changes in data (weight, calories, height, etc). Chart
        will be saved in your browser.
      </div>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.formColorPickerWrapper}>
        <Form
          onDataChange={handleDataChange}
          onSubmit={handleSubmit}
          userTimeInput={userTimeInput}
          onDateChange={handleDateChange}
          color={dailyData.datasets[0].backgroundColor}
        />
        <div>
          <ResetBtn onReset={handleReset} />
          <div className={styles.pickColor}>You can pick a color:</div>
          <GithubPicker
            color={dailyData.datasets[0].backgroundColor}
            onChangeComplete={handleColorChange}
          />
        </div>
      </div>

      <Chart dailyData={dailyData} />

      <NotificationComponent />
    </div>
  );
}

export default App;
