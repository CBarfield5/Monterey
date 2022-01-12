import React from "react";
 
export const PopUp = props => {
  return (
      <div className='hoverDiv'>
            <div className={`${props.content}`}>
                {props.content}
            </div>
            <div className={`${props.content}Triangle`}/>
    </div>
  );
};
 
export default PopUp;