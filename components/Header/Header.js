import Navigation from "../Navigation/Navigation.js";
import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  z-index: 10;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: 0;
  top: 0;
  right: 15px;
  background-color: transparent;
  padding: 0;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(16.4px);
`;

const Logo = styled.h1`
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 45px;
  color: #3f4d34;
  padding-left: 70px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Traveler</Logo>
      <Navigation />
    </HeaderContainer>
  );
}
