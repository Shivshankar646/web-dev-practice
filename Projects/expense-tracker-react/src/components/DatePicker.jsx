import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <ReactDatePicker
        selected={date}
        onChange={(date) => setDate(date)}
      />
    </div>
  );
}
