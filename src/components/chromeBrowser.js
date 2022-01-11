import React from "react";
 
export const chromeBrowser = props => {
  return (
    <div className="chromeBrowser">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default chromeBrowser;