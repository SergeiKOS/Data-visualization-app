import React from "react";
import PickDate from "../datePicker/DatePicker";

function Form({ onDataChange, onSubmit , userTimeInput, onChange}) {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <label htmlFor="data">Enter your data:</label>
      <input type="number" id="data" onChange={onDataChange} required={true}/>
      <PickDate userTimeInput={userTimeInput} onChange={onChange}/>
      <button>Save</button>
    </form>
  );
}

export default Form;
