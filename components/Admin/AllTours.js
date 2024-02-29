import styled from "styled-components";
import ImageSlider from "../SearchResult/ImageSlider";
import { useRouter } from "next/router";

const TourContainer = styled.div`
  color: #cbdde9;
  padding: 30px;
  width: 500px;
  margin-left: 20%;
  margin-bottom: 20px;
  margin-top: 110px;
  background: #0a1f22;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 110px;
    padding: 15px;
  }
`;

const Button = styled.button`
  align-self: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin: auto;
  gap: 10px;
  width: 300px;
  padding: 10px;
  border-radius: 40px;
  background-color: orange;
  color: black;
  border: none;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;
const List = styled.li`
  padding-top: 10px;
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
          <li>Duration: {duration} days</li>
          <li>Price: {price} $</li>
        </List>
        <Button onClick={() => router.push(`/admin/tours/${_id}`)}>
          See details
        </Button>
      </TourContainer>
    )
  );
}
