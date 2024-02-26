import styled from "styled-components";
import ImageSlider from "../SearchResult/ImageSlider";
import { useRouter } from "next/router";

const TourContainer = styled.div`
  color: #3f4d34;
  padding: 30px;
  width: 700px;
  margin: 20px auto;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
`;

const Button = styled.button`
  align-self: center;
  gap: 10px;
  width: 100px;
  padding: 10px;
  border-radius: 60px;
  background-color: #3f4d34;
  color: #f5bda8;
  border: none;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const List = styled.ul`
  list-style-type: none;
  text-align: left;
`;

export default function AllTours({ tours }) {
  const router = useRouter();

  return tours.map(
    ({ _id, country, city, duration, description, price, photos }) => (
      <TourContainer key={_id}>
        <h3>
          {country}, {city}
        </h3>
        <ImageSlider images={photos} />
        <List>
          <li>Description: {description}</li>
          <br />
          <li>Duration: {duration}</li>
          <li>Price: {price} $</li>
        </List>
        <Button onClick={() => router.push(`/admin/tours/${_id}`)}>
          See details
        </Button>
      </TourContainer>
    )
  );
}
