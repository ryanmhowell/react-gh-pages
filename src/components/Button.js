import React, {Component} from "react";

const Button = (props) => {
    return(
      <div>
        <form onSubmit={props.addAppointment}>
          <button className="btn btn-danger">Make Appointment</button>
        </form>
        <br />
      </div>
    )
  };

  export default Button;