import React, {Component} from "react";

class Day extends Component {
  dayNumber = this.props.number;
  
  render() {
  return (
        <div className="weekday">
          <button 
            className="btn" 
            onClick={(dayNumber) => this.props.handleDayChange(this.dayNumber)} 
            number={this.props.number}>{this.props.number}
          </button>
        </div>
    )
  };
}



  export default Day;