// components/board.tsx
import React from 'react';
import Square from './square';

type BoardProps = {
  squares: (string | null)[];
  onClick: (i: number) => void;
  winnerLine?: number[]; // Add winnerLine prop
};

const Board: React.FC<BoardProps> = ({ squares, onClick, winnerLine }) => (
  <div style={boardStyle}>
    {squares.map((square, i) => (
      <Square
        key={i}
        value={square}
        onClick={() => onClick(i)}
        highlight={winnerLine?.includes(i)} // Highlight squares in the winning line
      />
    ))}
  </div>
);

const boardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 100px)',
  gridTemplateRows: 'repeat(3, 100px)',
  gap: '5px',
};

export default Board;
