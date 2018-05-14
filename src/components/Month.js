import React, {Component} from "react";
//import Week from "./Week.js";
import Day from "./Day.js";

const Month = (props) => {

  return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {props.week1.map((day,i) => <Day  
              key={i}  
              number={day}
              value={day}
              handleDayChange={props.handleDayChange}/>)}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {props.week2.map((day,i) => <Day  
              key={i} 
              number={day}
              value={day}
              handleDayChange={props.handleDayChange}/>)}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {props.week3.map((day,i) => <Day  
              key={i} 
              number={day} 
              value={day}
              handleDayChange={props.handleDayChange}/>)}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {props.week4.map((day,i) => <Day  
              key={i} 
              number={day} 
              value={day}
              handleDayChange={props.handleDayChange}/>)}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {props.week5.map((day,i) => <Day 
              key={i} 
              number={day} 
              value={day}
              handleDayChange={props.handleDayChange}/>)}
            </div>
          </div>
         
          {/* <div className="row">
            <Week currentMonth={props.currentMonth} />
          </div>
          <div className="row">
            <Week currentMonth={props.currentMonth} />
          </div>
          <div className="row">
            <Week currentMonth={props.currentMonth} />
          </div> */}
        </div>
      </div>
    )
  }
  

  export default Month;