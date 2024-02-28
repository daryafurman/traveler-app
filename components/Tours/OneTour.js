import Image from "next/image";
import Tours from "./Tours";
import styled from "styled-components";
import useSWR from "swr";
import React, { useState } from "react";

const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: auto; /* Adjusted to auto to accommodate content */
  margin: 60px 0; /* Adjusted to remove horizontal margin which can cause overflow */

  @media (max-width: 768px) {
    margin: 30px 0; /* Smaller margin on smaller screens */
  }
`;

const SlidesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-out;
  width: calc(100% + 30px); // Adjust based on the total margin you'll add
  > div {
    margin-right: 30px; // Adds space between the items
    width: calc(100% - 30px); // Adjust the width based on the margin
    &:last-child {
      margin-right: 0; // Removes margin from the last item
    }
  }
`;

const OneTourContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cbdde9;
`;

const ContainerTitle = styled.h1`
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  color: #0a1f22;
  transform: rotate(-90deg);
`;

export default function OneTour() {
  const { data: tours } = useSWR("/api/tours", { fallbackData: [] });
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tours.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tours.length) % tours.length);
  };

  const slideWidth = 100;
  const slideMovement = -(currentSlide * slideWidth);

  return (
    <OneTourContainer>
      <ContainerTitle>Popular Tours:</ContainerTitle>
      <Image
        onClick={prevSlide}
        src="/chevron_left.svg"
        width={35}
        height={35}
        alt="prev"
      />
      <SliderContainer>
        <SlidesWrapper style={{ transform: `translateX(${slideMovement}%)` }}>
          {tours.map((tour, index) => (
            <div key={tour._id} style={{ width: "100%" }}>
              <Tours
                id={tour._id}
                image={tour.photos[0]}
                country={tour.country}
                city={tour.city}
                price={tour.price}
                description={tour.description}
                duration={tour.duration}
                onClick={(id) =>
                  console.log(`Navigating to tour with ID: ${id}`)
                }
              />
            </div>
          ))}
        </SlidesWrapper>
      </SliderContainer>
      <Image
        onClick={nextSlide}
        src="/navigate_next.svg"
        width={35}
        height={35}
        alt="next"
      />
    </OneTourContainer>
  );
}
