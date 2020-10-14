import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.css";

function PickDate({ userTimeInput, onDateChange }) {
  return (
    <div>
      {" "}
      Enter date:{" "}
      <DatePicker
        className={styles.input}
        selected={userTimeInput}
        onChange={onDateChange}
        dateFormat="yyyy/MM/dd"
        required={true}
      />
    </div>
  );
}

PickDate.propTypes = {
  userTimeInput: PropTypes.object.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default PickDate;
