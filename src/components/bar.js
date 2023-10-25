import React from 'react';

const Bar = ({progress, color}) => {

  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%`, backgroundColor:`${color}`}}
      ></div>
    </div>
     <strong style={{color:`${color}`}}>{progress}%</strong>
    </div>
  );
};

export default Bar;
