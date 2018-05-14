import React from "react";
import Appointment from "./Appointment.js";

const AppointmentList = (props) => { 
  let List = props.appointments;
  List = List.map((appointment, i) =>
    <Appointment key={i}
    apmtDay={appointment.apmtDay}
    apmtDesc={appointment.apmtDesc}
    apmtMonth={appointment.apmtMonth}
    apmtYear={appointment.apmtYear}
    apmtHours={appointment.apmtHours}
    apmtMinutes={appointment.apmtMinutes}
    apmtAmpm={appointment.apmtAmpm} />
    ) 
  return(
        <div>
          <h3>Current List of Appointments</h3>
          <div className="container">
            <div className="row">
            {List}
            </div>
          </div>
        </div>
      )
    };

    export default AppointmentList;