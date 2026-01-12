import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker({ getdate }) {
  const [date, setDate] = useState(new Date());

  // ✅ send date to parent ONLY when it changes
  useEffect(() => {
    getdate(date);
  }, [date, getdate]);

  return (
    <div>
      <ReactDatePicker
        selected={date}
        onChange={(selectedDate) => setDate(selectedDate)}
      />
    </div>
  );
}
