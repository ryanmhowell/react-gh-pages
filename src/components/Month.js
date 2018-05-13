import React, {Component} from "react";
//import Week from "./Week.js";
import Day from "./Day.js";

class Month extends Component {
  state = {
    numOfDays: [1,2,3,4,5,6,7]
  };
  

  render() { 
  return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {this.state.numOfDays.map((day,i) => <Day key={i} number={i+1} />)}
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
  };

  export default Month;