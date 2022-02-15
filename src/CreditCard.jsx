import React, { useState } from "react";

const CreaditCard = (props) => {
  const [showResults, setShowResults] = useState(true);
  const onClick = () => setShowResults(false);
  // console.log(props);

  return (
    <>
      {showResults && (
        <div className="card">
          <h1 className="text-left"> Smart Card</h1>
          <div>
            <img src="https://www.pngitem.com/pimgs/m/186-1868430_integrated-circuit-chip-card-hd-png-download.png" />
          </div>
          <div className="Card_Number">
            <h1>
              {props.one} {props.two} {props.three} {props.four}
            </h1>
          </div>
        </div>
      )}
      {showResults && <button onClick={onClick}>Delete</button>}
    </>
  );
};
export default CreaditCard;
