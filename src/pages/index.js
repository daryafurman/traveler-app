import React from "react";
import PopularDestinations from "../../components/PopularDestinations/PopularDestinations.js";
import Questions from "../../components/Questions.js";
import OneTour from "../../components/Tours/OneTour.js";
import TourSearch from "../../components/TourSearch/TourSearch";

export default function Home() {
  return (
    <>
      <TourSearch />
      {/* <PopularDestinations /> */}
      <OneTour />
      <Questions />
    </>
  );
}
