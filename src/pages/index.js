import Head from "next/head";
import Header from "../../components/Header/Header.js";
import TourSearch from "../../components/TourSearch/TourSearch";
import PopularDestination from "../../components/PopularDestinations/PopularDestinations.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Traveler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <TourSearch />
        <PopularDestination />
      </main>
    </>
  );
}
