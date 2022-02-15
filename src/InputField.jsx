import React from "react";

const InputField = (props) => {
  return (
    <>
      <input
        type="text"
        name={props.name}
        maxLength="4"
        onChange={props.onChange}
        required
      />
    </>
  );
};

export default InputField;
