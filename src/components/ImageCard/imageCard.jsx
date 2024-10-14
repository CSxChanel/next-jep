import React, { useRef, useState } from "react";
import Card from "./Card";

const ImageCard = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const images = [
    {
      src: "/banners/banner-1.jpg",
      alt: "Banner 1",
    },
    {
      src: "/banners/banner-2.png",
      alt: "Banner 2",
    },
    {
      src: "/banners/banner-3.jpg",
      alt: "Banner 3",
    },
    {
      src: "/banners/banner-4.jpg",
      alt: "Banner 4",
    },
    {
      src: "/banners/banner-5.jpg",
      alt: "Banner 5",
    },
    {
      src: "/banners/banner-6.jpg",
      alt: "Banner 6",
    },
    {
      src: "/banners/banner-7.jpg",
      alt: "Banner 7",
    },
    {
      src: "/banners/banner-8.jpg",
      alt: "Banner 8",
    },
    {
      src: "/banners/banner-9.jpg",
      alt: "Banner 9",
    },
    {
      src: "/banners/banner-10.jpg",
      alt: "Banner 10",
    },
    {
      src: "/banners/banner-11.jpg",
      alt: "Banner 11",
    },
    {
      src: "/banners/banner-12.jpg",
      alt: "Banner 12",
    },
    {
      src: "/banners/banner-13.jpg",
      alt: "Banner 13",
    },
    {
      src: "/banners/banner-14.png",
      alt: "Banner 14",
    },
  ];

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      className="flex space-x-6 my-5 ml-5 overflow-x-auto no-scrollbar scroll-smooth cursor-pointer"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="min-w-[340px] h-[200px] rounded-br-3xl rounded-tl-3xl border overflow-hidden"
        >
          <Card image={image} />
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
