import React, { useEffect } from "react";
import "./Slider.scss";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    //"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3765547/pexels-photo-3765547.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  useEffect(() => {
   const interval = setInterval(() => {
    setCurrentSlide((prev) => prev === data.length - 1 ? 0 :  prev + 1);
    
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide( (prev) => prev === 0 ? data.length - 1 : prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => prev === data.length - 1 ? 0 :  prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIosNewIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
