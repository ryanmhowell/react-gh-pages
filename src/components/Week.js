import React, {Component} from "react";
import Day from "./Day.js";

const Week = (props) => {
      return(
        <div>
          <div className="container">
          <div className="row">
          <div className="col-3"></div>
          <div className="col-1"><Day currentMonth={props.currentMonth}/></div>
          {/* <div className="col-1"><Day /></div>
          <div className="col-1"><Day /></div>
          <div className="col-1"><Day /></div>
          <div className="col-1"><Day /></div>
          <div className="col-1"><Day /></div>
          <div className="col-1"><Day /></div> */}
          </div>
          </div>
        </div>
      )
    };
  

  export default Week;