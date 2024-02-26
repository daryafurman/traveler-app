import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  background-color: #3c6e71;
  font-family: "Arial", sans-serif;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  padding: 0 2rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#fbbf24" : "transparent")};
  color: ${(props) => (props.primary ? "black" : "#fbbf24")};
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
  &:hover {
    color: white;
  }
`;

const Main = styled.main`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
`;

const Article = styled.article`
  background-color: #1f2937;
  border-radius: 0.5rem;
  padding: 1rem;
  color: white;
`;

const DestinationTitle = styled.h2`
  margin: 0.5rem 0;
  font-size: 1.25rem;
`;

const Price = styled.p`
  font-size: 1.25rem;
`;

export default function PopularDestinations() {
  return (
    <Container>
      <Header>
        <Title>DISCOVER POPULAR DESTINATIONS</Title>
        <div>{/* Implement as needed */}</div>
      </Header>
      <Nav>
        <Button primary>POPULAR</Button>
        {/* Add more buttons as needed */}
      </Nav>
      <Main>
        <Article>
          <Image
            src="https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Destination"
            width={300}
            height={200}
          />
          <DestinationTitle>Boyodo-in Temple</DestinationTitle>
          <p className="text-yellow-300">USA</p>
          <Price>from $450</Price>
        </Article>
        {/* Add more articles as needed */}
      </Main>
    </Container>
  );
}
