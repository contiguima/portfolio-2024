"use client"
import { useEffect, useState } from 'react';
import "../../globals.css"

const BorderComponent = () => {
  const [numSquares, setNumSquares] = useState(0);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    const calculatedNumSquares = Math.floor((screenWidth / 25));

    setNumSquares(calculatedNumSquares);
  }, []);
  const renderSquares = () => {
    const squares = [];
    for (let i = 0; i < numSquares; i++) {
      squares.push(<><div key={i} className="border-element-b"></div> <div key={i} className='border-element-w'></div></>);
    }
    return squares;
  };


  return (
    <div className="border-container">
      {renderSquares()}
    </div>
  );
};

export default BorderComponent;
