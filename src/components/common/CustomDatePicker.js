import React from "react";
import DatePicker from "react-datepicker";

const CustomDatePicker = ({ name, value, onChange }) => {
  return (
    <DatePicker
      onChange={value => {
        onChange(name, value);
      }}
    />
  );
};

export default CustomDatePicker;
