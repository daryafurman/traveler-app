import React, { useState, useEffect } from "react";
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

  @media (max-width: 768px) {
    padding-top: 100px;
    padding: 8px; // Slightly smaller for mobile
    font-size: 0.8em; // Adjust font size if necessary
  }
`;

const SlidesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-out;
  transform: ${(props) => `translateX(-${props.slideIndex * 100}%)`};
`;

const ImageContainer = styled.div`
  flex: 0 0 100%;
  height: 80%;
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        goToNext();
      } else if (event.key === "ArrowLeft") {
        goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length]); // Add dependencies here if your images array can change

  if (!images || images.length === 0) return <div>No Images</div>;

  return (
    <SliderContainer>
      <SlideButton
        className="prev"
        onClick={goToPrev}
        aria-label="Previous Slide"
      >
        <Image src="/chevron_left.svg" width={35} height={35} alt="Previous" />
      </SlideButton>
      <SlidesWrapper slideIndex={currentIndex}>
        {images.map((imgSrc, index) => (
          <ImageContainer key={index}>
            <Image
              src={imgSrc}
              alt={`Slide ${index + 1}`}
              width={500}
              height={300}
              layout="responsive"
            />
          </ImageContainer>
        ))}
      </SlidesWrapper>
      <SlideButton className="next" onClick={goToNext} aria-label="Next Slide">
        <Image src="/navigate_next.svg" width={35} height={35} alt="Next" />
      </SlideButton>
    </SliderContainer>
  );
};

export default ImageSlider;
