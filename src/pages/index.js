import React from "react";
import PopularDestinations from "../../components/PopularDestinations/PopularDestinations.js";
import Questions from "../../components/Questions.js";
import OneTour from "../../components/Tours/OneTour.js";
import TourSearch from "../../components/TourSearch/TourSearch";
import Reviews from "../../components/Reviews.js";
import Footer from "../../components/Footer.js";

export default function Home() {
  return (
    <>
      <TourSearch />
      {/* <PopularDestinations /> */}
      <div id="tours">
        <OneTour />
      </div>
      <div id="faq">
        <Questions />
      </div>
      <Reviews />
      <div id="contacts">
        <Footer />
      </div>
    </>
  );
}
