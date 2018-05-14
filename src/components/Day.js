import React, {Component} from "react";

const Day = (props) => {

  return (
        <div className="weekday">
          <button 
            className="btn" name="day" 
            onClick={props.handleDayChange} 
            number={props.number}>{props.number}
          </button>
        </div>
    )
  };




  export default Day;