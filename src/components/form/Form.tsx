import React from "react";
import IForm from "./IForm.interface";
// @ts-ignore
import styles from "./Form.module.css";
import PickDate from "../datePicker/DatePicker";

function Form({
  onDataChange,
  onSubmit,
  userTimeInput,
  onDateChange,
  color,
}: IForm) {
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
      <button
        className={styles.btn}
        style={{ border: "2px solid" + color }}
        type="submit"
      >
        Enter
      </button>
    </form>
  );
}

export default Form;
