import React, {Component} from "react";

const Appointment = (props) => {
    return(
      <div>
      <h4>{props.dayOfWeek + ", "
       + props.apmtMonth + " " 
       + props.dayOfMonth + ", "
       + props.apmtYear}</h4>
       <h4>{props.apmtDesc}</h4>
      </div>
    )
  };

  export default Appointment;