// src/components/BannerSlider
import React from "react";

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
        left: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

export { CustomNextArrow, CustomPrevArrow };
