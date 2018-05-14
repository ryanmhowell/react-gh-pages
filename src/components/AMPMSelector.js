import React from "react";

const AMPMSelector = (props) => {
    return (
        <div>
          <label>
            <input id="am-radio"
            name="am-radio"
            value="AM" 
            type="radio" 
            checked={props.ampm === "AM"}
            onChange={props.setAM}/>AM
          </label>
          <label>
            <input id="pm-radio"
            name="pm-radio"
            value="PM" 
            type="radio"
            checked={props.ampm === "PM"}
            onChange={props.setPM} />PM
          </label>
        </div>
    )
}

export default AMPMSelector;