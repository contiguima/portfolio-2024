"use client"

import { useState } from "react";
import "./slider.css"
const Slider = ({logos}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const elements = logos;
    const handlePrev = () => {
        setCurrentIndex(
          currentIndex === 0 ? elements.length - 1 : currentIndex - 1
        );
      };
    
      const handleNext = () => {
        setCurrentIndex(
          currentIndex === elements.length - 1 ? 0 : currentIndex + 1
        );
      };

    return  elements.length > 0 ? (
        <div className="slider">
            <button className="left-arrow" onClick={handlePrev}>←</button>
            <div className="slider-components"></div>
            <button className="right-arrow" onClick={handleNext}>→</button>
        </div>
    ) : (<div className="text-warning">
            <h2> There is nothing to see at the moment</h2>
        </div>)



}

export default Slider;