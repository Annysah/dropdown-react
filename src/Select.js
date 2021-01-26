import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

function Select() {
  const dataList = [
    {
      State: "Lagos",
      id: 1
    },
    {
      State: "Abuja",
      id: 2
    },
    {
      State: "Rivers",
      id: 3
    },
    {
      State: "Kano",
      id: 4
    },
    {
      State: "Ogun",
      id: 5
    }
  ];

  const [options] = useState(dataList);
  return (
    <div style={{ width: "300px" }}>
      <Multiselect options={options} displayValue="State" />
    </div>
  );
}

export default Select;
