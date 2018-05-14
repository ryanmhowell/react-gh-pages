import React from "react";

const Appointment = (props) => {
    return(
      <div className="col-6 appointment">   
          <h5>{props.apmtMonth + " " 
           + props.apmtDay + ", "
           + props.apmtYear + "    at  "
           + props.apmtHours + ":"
           + props.apmtMinutes + " "
           + props.apmtAmpm}</h5>
           <h5>{props.apmtDesc}</h5>
           <br />  
      </div>
    )
  };

  export default Appointment;