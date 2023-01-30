import React from "react";
import { useState } from "react";
import Board from "./Board";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  let [isLast, setIsLast] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    isLast = false;
    if (move === history.length - 1 && move >= 1) {
      // Last Move
      description = "You are on move " + move;
      isLast = true;
    } else if (move === 0) {
      // First Move
      description = "Go to game start";
    } else {
      description = "Go to move #" + move;
    }

    return isLast ? (
      <li key={move} className="list-decimal">
        <p>{description}</p>
      </li>
    ) : (
      <li key={move} className="list-decimal">
        <button
          onClick={() => jumpTo(move)}
          className="text-white font-bold py-1.5 px-4 my-[0.35rem] rounded text-[0.8rem] bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-center "
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board grid gap-10 auto-cols-max grid-rows-1 grid-flow-row md:grid-flow-col">
        <div className="">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info row-span-1">
          <div className="mb-2 text-2xl"> Turn History</div>
          <hr className="h-[3px] my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}

export default Game;
