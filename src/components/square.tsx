// components/square.tsx
import React from 'react';

type SquareProps = {
  value: string | null;
  onClick: () => void;
  highlight?: boolean;
};

const Square: React.FC<SquareProps> = ({ value, onClick, highlight }) => {
  const color = value === 'X' ? 'blue' : value === 'O' ? 'red' : 'black';

  const squareStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    border: '1px solid #999',
    color: color,
    fontWeight: 'bold',
    outline: highlight ? '3px solid yellow' : 'none', // Highlight the winning squares
  };

  return (
    <button onClick={onClick} style={squareStyle}>
      {value}
    </button>
  );
};

export default Square;


