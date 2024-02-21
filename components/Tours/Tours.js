import styled from "styled-components";
import { StyledImage } from "./StyledImage";

const ToursContainer = styled.div`
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  height: 500px;
  background-color: #f4743b;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 105px;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 10rem;
`;

export default function Tours({ image, country, city, price }) {
  return (
    <>
      <ToursContainer>
        <ImageContainer>
          <StyledImage
            src={image}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            alt="{id}"
          ></StyledImage>
        </ImageContainer>
        <p>
          {country}, {city}
        </p>
        <p>{price}</p>
      </ToursContainer>
    </>
  );
}
