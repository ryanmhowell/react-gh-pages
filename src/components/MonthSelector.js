import React from "react";

const MonthSelector = (props) => {
    return(
      <div className="container">
          <div className="row">
            <div className="col-3">
              <button className="btn btn-primary" 
              onClick={props.goToLastMonth}>
                <i className="fa fa-arrow-left" />
              </button>
            </div>
            <div className="col-6">
            <h4>{props.currentMonth} {props.currentYear}</h4>
            </div>
            <div className="col-3">
              <button className="btn btn-primary" 
              onClick={props.goToNextMonth}>
                <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
    )
  };

  export default MonthSelector;