import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 400px; // Adjust to fit your design
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 100;

  &:hover {
    background-color: #777;
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  if (!images || images.length === 0) return <div>No Images</div>;
  return (
    <SliderContainer>
      <SlideButton onClick={goToPrev}>
        <Image src="/chevron_left.svg" width={35} height={35} alt="prev" />
      </SlideButton>
      {images[currentIndex] && (
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          width={500}
          height={300}
          layout="responsive"
        />
      )}
      <SlideButton onClick={goToNext}>
        <Image src="/navigate_next.svg" width={35} height={35} alt="next" />
      </SlideButton>
    </SliderContainer>
  );
};

export default ImageSlider;
