import Head from "next/head";
import Navigation from "../../components/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Traveler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation></Navigation>
      </main>
    </>
  );
}
