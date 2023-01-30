import React from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square text-black" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
