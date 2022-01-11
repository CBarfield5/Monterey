import React from "react";
 
export const PopUp = props => {
    console.log(props.content)
  return (
      <div>
            <div className="finderPop">
                Finder
            </div>
            <div className="finderTriangle"/>
    </div>
  );
};
 
export default PopUp;