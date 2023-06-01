import React from "react";

export default function InputSelect({ options = [], classSelectInput, callback }) {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue)
    callback(selectedValue);
  };

  return (
    <>
      <select
        className={classSelectInput !== undefined ? classSelectInput + " input_select" : "input_select"}
        onChange={handleSelectChange}
      >
        {Array.isArray(options) &&
          options.map((value, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
      </select>
    </>
  );
}
