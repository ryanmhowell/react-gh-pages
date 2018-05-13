import React, {Component} from "react";
import Appointment from "./Appointment.js";

const AppointmentList = (props) => {
    return(
        <div>
        {props.appointments.map((appointment) => {
          <Appointment 
          dayOfWeek={props.dayOfWeek}
          dayOfMonth={props.dayOfMonth}
          apmtDesc={props.apmtDesc}
          apmtMonth={props.apmtMonth}
          apmtYear={props.apmtYear}
          apmtHours={props.apmtHours}
          apmtMinutes={props.apmtMinutes}
          apmtAmpm={props.apmtAmpm} />
        })}
        </div>
      )
    };

    export default AppointmentList;