import Header from "../../components/Header/Header.js";
import TourSearch from "../../components/TourSearch/TourSearch";
import React, { useState } from "react";
import useSWR from "swr";
import styled from "styled-components";
import Tours from "../../components/Tours/Tours.js";
import Image from "next/image.js";
import PopularDestinations from "../../components/PopularDestinations/PopularDestinations.js";

const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const SlidesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-out;
  width: 100%;
`;

const OneTour = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eecb75;
`;

export default function Home() {
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
    <>
      <TourSearch />
      <OneTour>
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
              <div key={tour._id} style={{ width: "100%", flex: "0 0 100%" }}>
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
      </OneTour>
      <PopularDestinations></PopularDestinations>
    </>
  );
}
