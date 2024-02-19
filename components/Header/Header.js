import Navigation from "../Navigation/Navigation.js";
import styled from "styled-components";
import Image from "next/image.js";

const HeaderContainer = styled.div`
  height: 100px;
  width: auto;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: 0;
  top: 0;
  background-color: #beee62;
  padding: 10px 20px;
`;

const Logo = styled.h1`
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 45px;
  color: #3c6e71;
`;

const Button = styled.button``;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Traveler</Logo>
      <Navigation />
      <Button>
        <Image
          src="/assets/account.svg"
          width={24}
          height={24}
          alt="accounticon"
        ></Image>
      </Button>
    </HeaderContainer>
  );
}
