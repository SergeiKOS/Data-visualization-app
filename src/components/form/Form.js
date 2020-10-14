import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import PickDate from "../datePicker/DatePicker";

function Form({ onDataChange, onSubmit, userTimeInput, onDateChange, color }) {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <label htmlFor="data">Enter the number: </label>
      <input
        className={styles.input}
        type="number"
        id="data"
        onChange={onDataChange}
        required={true}
      />
      <PickDate userTimeInput={userTimeInput} onDateChange={onDateChange} />
      <button className={styles.btn} style={{ border: "2px solid" + color }}>
        Enter
      </button>
    </form>
  );
}

Form.propTypes = {
  onDataChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  userTimeInput: PropTypes.object.isRequired,
  onDateChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Form;
