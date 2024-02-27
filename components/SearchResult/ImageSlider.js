import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 100;

  &:hover {
    opacity: 0.7;
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;

const SlidesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-out;
  transform: ${(props) => `translateX(-${props.slideIndex * 100}%)`};
  width: 100%;
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
      <SlideButton className="prev" onClick={goToPrev}>
        <Image src="/chevron_left.svg" width={35} height={35} alt="prev" />
      </SlideButton>
      <SlidesWrapper slideIndex={currentIndex}>
        {images.map((imgSrc, index) => (
          <div key={index} style={{ minWidth: "100%", height: "100%" }}>
            <Image
              src={imgSrc}
              alt={`Slide ${index}`}
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
        ))}
      </SlidesWrapper>
      <SlideButton className="next" onClick={goToNext}>
        <Image src="/navigate_next.svg" width={35} height={35} alt="next" />
      </SlideButton>
    </SliderContainer>
  );
};

export default ImageSlider;
