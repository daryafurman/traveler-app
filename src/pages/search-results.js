import { useRouter } from "next/router";
import useSWR from "swr";
import React from "react";
import SearchResults from "../../components/SearchResult/SearchResult";
import styled from "styled-components";

const Main = styled.div`
  background-color: #cbdde9;
  padding-top: 100px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  font-family: "Figtree", sans-serif;
  font-weight: 300;
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
    <>
      <h2 style={{ color: "#3f4d34" }}>
        All the tours that we have available to {country}, {city}:
      </h2>
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
    </>
  );
}
