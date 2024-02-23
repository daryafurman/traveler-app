import Image from "next/image";
import styled from "styled-components";

const DestinationsContainer = styled.div`
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 70px;
  height: 100vh;
  background-color: #70ae6e;
  display: flex;
  justify-content: center;
`;

export default function PopularDestinations() {
  return (
    <>
      <DestinationsContainer>
        <p>Popular Destinations:</p>
      </DestinationsContainer>
    </>
  );
}
