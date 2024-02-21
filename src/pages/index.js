import Head from "next/head";
import useSWR from "swr";
import Header from "../../components/Header/Header.js";
import TourSearch from "../../components/TourSearch/TourSearch";
import PopularDestination from "../../components/PopularDestinations/PopularDestinations.js";
import Tours from "../../components/Tours/Tours.js";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  position: relative;
  width: 100%;
`;

export default function Home() {
  const { data } = useSWR("/api/tours", { fallbackData: [] });
  return (
    <>
      <Head>
        <title>Traveler</title>
        <link rel="icon" href="/traveler.svg" />
      </Head>
      <Header />
      <TourSearch />
      <List role="list">
        {data.map((tour) => (
          <ListItem key={tour._id}>
            <Tours
              image={tour.photos[0]}
              country={tour.country}
              city={tour.city}
              price={tour.price}
            />
          </ListItem>
        ))}
      </List>
      <PopularDestination />
    </>
  );
}
