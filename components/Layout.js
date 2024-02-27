import styled from "styled-components";
import Head from "next/head.js";
import Header from "./Header/Header";

const Main = styled.main``;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Traveler</title>
        <link rel="icon" href="/traveler.svg" />
      </Head>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
