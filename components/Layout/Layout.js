import styled from "styled-components";
import Head from "next/head.js";

const Main = styled.main`
  display: grid;
  gap: 0.5rem;
  margin-top: 5rem;
  padding: 0.5rem;
  position: relative;
  width: 700px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Traveler</title>
        <link rel="icon" href="/traveler.svg" />
      </Head>
      <main>{children}</main>
    </>
  );
}
