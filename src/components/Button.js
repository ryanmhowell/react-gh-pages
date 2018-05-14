import React from "react";

const Button = (props) => {
    return(
      <div>
        <form onSubmit={(e) => props.addAppointment(e)}>
          <button className="btn btn-danger">
            Make Appointment
          </button>
        </form>
        <br />
      </div>
    )
  };

  export default Button;