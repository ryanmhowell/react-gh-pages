import React from "react";

const Description = (props) => {
    return (
      <div>
        <br />
        <form onSubmit={props.setDesc}>
        <input id="description" 
        name="description" 
        type="text" required placeholder="Description" />
        <button type="submit" name="saveDesc">Save Description</button>
        </form>
        <br />
        <br />
      </div>
    )
  };

  
  export default Description;