import React, { useState } from "react";
import styled from "styled-components";
import Tours from "./Tours";

const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 400px;
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

  @media (max-width: 768px) {
    padding: 8px; // Slightly smaller for mobile
    font-size: 0.8em; // Adjust font size if necessary
  }
`;

const SlidesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-out;
  width: 100%;
`;

export default function Slider({ tours }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tours.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tours.length) % tours.length);
  };

  return (
    <SliderContainer>
      <SlideButton className="prev" onClick={prevSlide}>
        Prev
      </SlideButton>
      <SlideButton className="next" onClick={nextSlide}>
        Next
      </SlideButton>
      <SlidesWrapper
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {tours.map((tour, index) => (
          <Tours key={tour._id} {...tour} />
        ))}
      </SlidesWrapper>
    </SliderContainer>
  );
}
