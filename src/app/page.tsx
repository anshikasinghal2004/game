
'use client'
import React, { useState } from 'react';
import Board from '../components/board';

type SquareType = 'X' | 'O' | null;

export default function Home() {
  const [history, setHistory] = useState<SquareType[][]>([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[historyPoint.length - 1];
    const squares = [...current];
    if (calculateWinner(squares).winner || squares[i]) return;
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const renderMoves = () => (
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : 'Go to Start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    })
  );

  const current = history[stepNumber];
  const { winner, line } = calculateWinner(current);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board squares={current} onClick={handleClick} winnerLine={line} />
      <div>
        <h3>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</h3>
        {renderMoves()}
      </div>
    </div>
  );
}

const calculateWinner = (squares: SquareType[]) => {
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
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return { winner: null, line: [] };
};
