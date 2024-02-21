import styled from "styled-components";
import Image from "next/image";

const ToursContainer = styled.div`
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  height: 300px;
  background-color: #f4743b;
`;

export default function Tours({ image, country, city, price }) {
  return (
    <>
      <ToursContainer>
        <div>
          <Image src={image} width={300} height={200} alt={"id"}></Image>
        </div>
        <p>
          {country}, {city}
        </p>
        <p>Price: {price}</p>
      </ToursContainer>
    </>
  );
}
