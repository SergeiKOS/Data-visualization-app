import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function PickDate({userTimeInput, onChange}) {
  return (
    <div>
      <DatePicker selected={userTimeInput} onChange={onChange} dateFormat="yyyy/MM/dd" required={true}/>
    </div>
  );
}

export default PickDate;
