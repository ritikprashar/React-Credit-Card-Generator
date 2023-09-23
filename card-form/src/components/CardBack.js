import React from "react";

const CardBack = ({ cardCvc }) => {
  return (
    <div className="card-back">
      <div className="card-back-div1"></div>
      <div className="card-back-div2">
        <p> {cardCvc ? cardCvc : "000"} </p>
      </div>
    </div>
  );
};

export default CardBack;
