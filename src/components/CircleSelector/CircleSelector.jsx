import React from "react";
import "./CircleSelector.css";

function CircleSelector(props) {
  const handleOnClick = (e) => {
    props.setSelected(e.target.value);
  };

  return (
    <div className="CircleSelector">
      {props.selected === "1" ? (
        <button className="selected">CIRCLE 1 SELECTED</button>
      ) : (
        <button value="1" onClick={handleOnClick}>
          SELECT CIRCLE 1
        </button>
      )}
      {props.selected === "2" ? (
        <button className="selected"> CIRCLE 2 SELECTED </button>
      ) : (
        <button value="2" onClick={handleOnClick}>
          SELECT CIRCLE 2
        </button>
      )}
      {props.selected === "3" ? (
        <button className="selected"> CIRCLE 3 SELECTED </button>
      ) : (
        <button value="3" onClick={handleOnClick}>
          SELECT CIRCLE 3
        </button>
      )}
      {props.selected === "4" ? (
        <button className="selected"> CIRCLE 4 SELECTED </button>
      ) : (
        <button value="4" onClick={handleOnClick}>
          SELECT CIRCLE 4
        </button>
      )}
    </div>
  );
}

export default CircleSelector;
