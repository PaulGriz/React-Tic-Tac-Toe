import React from "react";
import Square from "./Square";
import { ArrowPathIcon } from '@heroicons/react/24/solid'

const Board = ({ xIsNext, squares, onPlay }) => {
  // # Utility Functions
  // ------------------------
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return; // Prevent's Multiple clicks from overwriting state & Checks for winner after each click
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `${winner} won the Game!`;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function refreshPage() {
    window.location.reload(false);
  }

  // TODO: Update the Status Logic
  return (
    <div className="justify-center align-middle">
      <div className="mb-2 text-2xl">{status}</div>
      <hr className="h-[3px] my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      {/* Using Arrow Functions to prevent handleClick() from being calls on window render */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      {/* Refresh Page Button */}
      <div>
        <hr className="h-[3px] my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <button
          onClick={refreshPage}
          type="button"
          className="flex align-middle content-center text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 w-30 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-m px-5 py-2.5 text-center ml-4"
        >
          Click to reset game <ArrowPathIcon className="h-5 w-5 ml-1.5 mt-[2.5px]"/>
        </button>
      </div>
    </div>
  );
};

export default Board;

// ====================================
// ## Utility Functions
// ====================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
