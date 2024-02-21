import styled from "styled-components";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const SliderContainer = styled.div`
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  height: 700px;
  background-color: #f4743b;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column; /* Adjust as needed for your layout */
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 1s ease-in-out;
  transform: translateX(${(props) => (props.active ? "0" : "100%")});
`;

const TextContainer = styled.div`
  color: white;
  text-align: center;
`;

const Button = styled.button`
  align-self: center;
  gap: 10px;
  width: 100px;
  padding: 10px;
  border-radius: 60px;
  background-color: #70ae6e;
  color: #beee62;
  border: none;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

export default function Tours({ image, country, city, price }) {
  return (
    <SliderContainer>
      {slidesData.map((slide, index) => (
        <Slide
          key={slide.id}
          active={index === currentSlide}
          bgColor={slide.bgColor}
        >
          <Image src={slide.image} width={300} height={200} alt={slide.title} />
          <TextContainer>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <Button>See details</Button>
          </TextContainer>
        </Slide>
      ))}
    </SliderContainer>
  );
}
