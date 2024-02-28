import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import { useRouter } from "next/router";

const SearchContainer = styled.div`
  color: #cbdde9;
  padding: 20px; // Slightly reduced from 30px for smaller screens
  width: 90vw;
  max-width: 600px;
  margin: 20px auto;
  justify-content: space-between;
  background: #0a1f22;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 15px; // Further reduce padding for very small screens
    border-radius: 10px; // Optionally reduce border radius for smaller screens
  }
`;

const Button = styled.button`
  align-self: center;
  width: auto; // Adjusted from fixed width to auto
  padding: 10px;
  border-radius: 60px;
  background-color: #cbdde9;
  color: #3f4d34;
  border: none;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Figtree", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 768px) {
    width: 100%; // Full width for smaller screens
    border-radius: 30px; // Adjusted for aesthetic purposes on smaller screens
  }
`;

const List = styled.ul`
  list-style-type: none;
  text-align: left;
`;

export default function SearchResults({
  id,
  photos,
  country,
  city,
  duration,
  price,
}) {
  const router = useRouter();

  const handleSeeDetailsClick = () => {
    router.push(`/tours/${id}`);
  };
  return (
    <SearchContainer>
      <h3>
        {country}, {city}
      </h3>
      <ImageSlider images={photos} />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <List>
          <li>Duration: {duration} </li>
          <li>Price: {price} $</li>
        </List>
        <Button onClick={handleSeeDetailsClick}>See details</Button>
      </div>
    </SearchContainer>
  );
}
