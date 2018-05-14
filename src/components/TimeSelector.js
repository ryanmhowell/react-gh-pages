import React from "react";

const TimeSelector = (props) => {
    return (
      <div>
        <br />
        <button className="btn btn-primary" 
        onClick={props.addHour}>
          <i className="fa fa-arrow-up" />
        </button>
        <button className="btn btn-primary" 
        onClick={props.minusHour}>
          <i className="fa fa-arrow-down" />
        </button>
        <span id="time">
        {props.hours + " : "  
        + (props.minutes < 10 ? "0" : "") + props.minutes 
        + " " + props.ampm}
        </span>
        <button className="btn btn-primary" 
        onClick={props.addMinute}>
          <i className="fa fa-arrow-up" />
        </button>
        <button className="btn btn-primary" 
        onClick={props.minusMinute}>
          <i className="fa fa-arrow-down" />
        </button>
        <br />
      </div>
    )
  };


  export default TimeSelector;