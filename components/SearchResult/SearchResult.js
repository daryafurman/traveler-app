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

const Results = styled.div`
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  padding: 30px;
  width: 500px;
  max-width: 400px;
  margin: 40px auto;
  color: #fff;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
  display: flex;
  justify-content: center;
  flex-direction: column;
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
