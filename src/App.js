import React, { useState, useEffect } from "react";
import Form from "./components/form/Form";
import Chart from "./components/chart/Chart";
import { returnData, returnDate } from "./components/server";

function App() {
  const [userDataInput, setUserDataInput] = useState();
  const [userTimeInput, setUserTimeInput] = useState(new Date());
  const [userTimeInputNow, setUserTimeInputNow] = useState();
  const [dataData, setDataData] = useState(returnData());
  const [dataTime, setDataTime] = useState(returnDate());
  const [dailyData, setDailyData] = useState({
    labels: [],
    datasets: [
      {
        label: "Kg",
        backgroundColor: "rgba(0, 0, 0, 0.75",
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
    
    let dataDataCopy = [...dataData];
    dataDataCopy.push(userDataInput);
    const dataDataString = dataDataCopy.join(", ");
    localStorage.setItem("weights", dataDataString);
    setDataData(dataDataCopy);

    let dataTimeCopy = [...dataTime];
    dataTimeCopy.push(userTimeInputNow);
    const dataTimeString = dataTimeCopy.join(", ");
    localStorage.setItem("date", dataTimeString);

    setDataTime(dataTimeCopy);
  };

  const handleChange = (date) => {
    setUserTimeInput(date)

    function formatDate(date) {
      let month = "" + (date.getMonth() + 1);
      let day = "" + date.getDate();
      let year = date.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("/");
    }
    date = formatDate(date);
    setUserTimeInputNow(date);
  };

  return (
    <div className="App">
      <Form
        onDataChange={handleDataChange}
        onSubmit={handleSubmit}
        userTimeInput={userTimeInput}
        onChange={handleChange}
      />
      <Chart dailyData={dailyData} />
    </div>
  );
}

export default App;
