import "./styles.css";
import React, { useState } from "react";
import CreaditCard from "./CreditCard";
import InputField from "./InputField";

const App = () => {
  const [showResults, setShowResults] = useState(true);
  const onClick = () => setShowResults(false);

  const [data, setData] = useState({
    fieldone: "",
    fieldtwo: " ",
    fieldthree: "",
    fieldfour: ""
  });

  const [info, setInfo] = useState({
    one: "",
    two: " ",
    three: "",
    four: ""
  });

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    // it will give us the length , value and name of the field.

    setData((preVal) => {
      if (name === "field-1") {
        setData({ ...preVal, fieldone: value });
      } else if (name === "field-2") {
        setData({ ...preVal, fieldtwo: value });
      } else if (name === "field-3") {
        setData({ ...preVal, fieldthree: value, ...[data] });
      } else if (name === "field-4") {
        setData({ ...preVal, fieldfour: value });
      }
    });

    const [fieldName, fieldIndex] = name.split("-");
    // console.log(fieldName)
    // it will split element after -
    // fieldName will give name which is field.
    // console.log(fieldIndex)
    // it will give the number

    let fieldIntIndex = parseInt(fieldIndex, 16);
    // console.log(fieldIndex)
    // it's converting into int and

    // Check if no is greaten then equal to maxlength
    if (value.length >= maxLength) {
      // maxLength is 4

      if (fieldIntIndex < 4) {
        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
          // select the next input field
        );

        if (nextfield !== null) {
          // whenever we move to next input field it will be null
          nextfield.focus();
        }
      }
    }
  };

  const fromSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    setInfo({
      one: data.fieldone,
      two: data.fieldtwo,
      three: data.fieldthree,
      four: data.fieldfour
    });
    onClick();
  };

  return (
    <div className="App">
      {showResults ? (
        <form onSubmit={fromSubmit}>
          <div className="container">
            <h1> Enter your Card Number</h1>

            <div className="userInput">
              <InputField name="field-1" onChange={handleChange} />
              <InputField name="field-2" onChange={handleChange} />
              <InputField name="field-3" onChange={handleChange} />
              <InputField name="field-4" onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <CreaditCard
          one={info.one}
          two={info.two}
          three={info.three}
          four={info.four}
        />
      )}
    </div>
  );
};
export default App;
