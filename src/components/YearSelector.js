import React from "react";

const YearSelector = (props) => {
    return(
      <div>
        <br />
         <div className="container">
           <div className="row">
             <div className="col-3">
               <button className="btn btn-primary" 
               onClick={props.goToLastYear}>
               <i className="fa fa-arrow-left" />
               </button>
             </div>
             <h4 className="col-6">{props.currentYear}</h4>
             <div className="col-3">
               <button className="btn btn-primary" 
               onClick={props.goToNextYear}>
               <i className="fa fa-arrow-right" />
               </button>
             </div>
           </div>
         </div>
        <br />
      </div>
    )
  };

  export default YearSelector;