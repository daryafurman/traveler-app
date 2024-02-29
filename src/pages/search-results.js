import { useRouter } from "next/router";
import useSWR from "swr";
import React from "react";
import SearchResults from "../../components/SearchResult/SearchResult";
import styled from "styled-components";

const SearchContainer = styled.div`
  padding-top: 100px;
  height: 100%;
  background-color: #cbdde9;
`;

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  font-family: "Figtree", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-align: center;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0a1f22;
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  text-align: center;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ShowSearchResults() {
  const router = useRouter();
  const { country, city } = router.query;

  const { data: tours, error } = useSWR(
    country && city ? `/api/tours?country=${country}&city=${city}` : null,
    fetcher
  );

  if (!tours && !error) return <div>Loading...</div>;

  if (error)
    return <div>Failed to load the tours. Please try again later.</div>;

  if (tours?.length === 0)
    return <div>No tours found for the selected destination.</div>;

  return (
    <SearchContainer>
      <Title>
        All the tours that we have available to {country}, {city}:
      </Title>
      <Main>
        {tours?.map((tour) => (
          <SearchResults
            key={tour.id}
            id={tour._id}
            photos={tour.photos}
            country={tour.country}
            city={tour.city}
            description={tour.description}
            duration={tour.duration}
            price={tour.price}
          />
        ))}
      </Main>
    </SearchContainer>
  );
}
