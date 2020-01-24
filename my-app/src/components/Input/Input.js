import React from "react";

const Input = item => {
  return (
    <div>
      <input
        type="radio"
        name="manufacturere"
        id={item.value}
        value={item.value}
        checked
      />
      <label for={item.value}>{item.value}</label>
    </div>
  );
};

export default Input;
