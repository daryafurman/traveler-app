import Image from "next/image";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

const SearchContainer = styled.div`
  font-family: "Figtree", sans-serif; /* Updated font-family, removed the duplicate */
  font-weight: 300; /* Kept the latter font-weight */
  font-style: normal; /* No conflict, but duplicated */
  text-align: center;
  color: #fff; /* No conflict, but duplicated */
  padding: 30px; /* This overrides the initial padding-top of 110px */
  width: 900px;
  max-width: 400px; /* max-width takes precedence, width will effectively be 400px or less */
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px); /* For Safari support */
  display: flex; /* No conflict, but duplicated */
  justify-content: center; /* No conflict, but duplicated */
  flex-direction: column; /* Added for vertical alignment */
  font-optical-sizing: auto; /* Specific font feature, no conflict */
`;

const Button = styled.button`
  align-self: center;
  gap: 10px;
  width: 100px;
  padding: 10px;
  border-radius: 60px;
  background-color: #f4743b;
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

const Main = styled.div`
  background-color: #3c6e71;
  height: 100vh;
  margin-top: 100px;
  font-family: "Figtree", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-align: center;
`;

export default function SearchResults({
  photos,
  country,
  city,
  duration,
  price,
}) {
  return (
    <SearchContainer>
      <h3>
        {country}, {city}
      </h3>
      <ImageSlider images={photos} />
      <ul>
        <li>Duration: {duration} </li>
        <li>Price: {price} $</li>
      </ul>
      <Button>See details</Button>
    </SearchContainer>
  );
}
