"use client"

import { useState, useEffect} from "react";
import "./slider.css"
const Slider = ({logos}) => {


  const [isMobileView, setIsMobileView] = useState(false);

    useEffect(()=> {
      const mobileMediaQuery = window.matchMedia("(max-width: 600px)");

      const handleMediaQueryChange = (event) =>{
        setIsMobileView(event.matches);
      };

      handleMediaQueryChange(mobileMediaQuery);
      mobileMediaQuery.addEventListener('change', handleMediaQueryChange);

      return() =>{
        mobileMediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    },[]);

    const [isTabletView, setIsTabletView] = useState(false);

    useEffect(()=> {
      const tabletMediaQuery = window.matchMedia("(max-width: 768px)");

      const handleMediaQueryChange = (event) =>{
        setIsTabletView(event.matches);
      };

      handleMediaQueryChange(tabletMediaQuery);
      tabletMediaQuery.addEventListener('change', handleMediaQueryChange);

      return() =>{
        tabletMediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    },[]);


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
            <div className="slider-components"> 

            {isMobileView ? <>{logos[currentIndex]}</> : 

            <>{isTabletView ? <>{logos[currentIndex]} 
            {logos[currentIndex + 1]}</> : 
            
            <>{logos[currentIndex]} 
            {logos[currentIndex + 1]}
            {logos[currentIndex + 2]}
            {logos[currentIndex + 3]} </>}
            
            </>}
            
          
        
            </div>
            <button className="right-arrow" onClick={handleNext}>→</button>
        </div>
    ) : (<div className="text-warning">
            <h2> There is nothing to see at the moment</h2>
        </div>)



}

export default Slider;