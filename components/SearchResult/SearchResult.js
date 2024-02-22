import Image from "next/image";
import styled from "styled-components";

const SearchContainer = styled.div`
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  color: #fff;
  padding-top: 110px;
  height: 100vh;
  background-color: #70ae6e;
  display: flex;
  justify-content: center;
`;

export default function SearchResults({ image, country, city, price }) {
  return (
    <SearchContainer>
      <h2>Search Results</h2>
      <h3>
        {country}, {city}
      </h3>
      <Image src={image} alt={`${city}, ${country}`} width={500} height={300} />
      <p>{price} $</p>
    </SearchContainer>
  );
}
