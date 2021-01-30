import React from "react";
import IDate from "./IDate.interface";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// @ts-ignore
import styles from "./DatePicker.module.css";

function PickDate({ userTimeInput, onDateChange }: IDate) {
  return (
    <div>
      Enter date:
      <DatePicker
        className={styles.input}
        selected={userTimeInput}
        // @ts-ignore
        onChange={onDateChange}
        dateFormat="yyyy/MM/dd"
        required={true}
      />
    </div>
  );
}

export default PickDate;
