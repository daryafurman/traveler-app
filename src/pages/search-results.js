import { useRouter } from "next/router";
import useSWR from "swr";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SearchResults() {
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
    <div>
      <h2>Search Results</h2>
      {tours?.map((tour) => (
        <div key={tour._id}>
          <h3>
            {tour.country}, {tour.city}
          </h3>
          <Image
            src={tour.image}
            alt={`${city}, ${country}`}
            width={500}
            height={300}
          />
          <p>{tour.price} $</p>
        </div>
      ))}
    </div>
  );
}
