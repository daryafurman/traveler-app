import Navigation from "../Navigation/Navigation.js";
import styled from "styled-components";
import Image from "next/image.js";
import { useRouter } from "next/router";

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
  background-color: #beee62;
  padding: 0;
`;

const Logo = styled.h1`
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 45px;
  color: #3c6e71;
  padding-left: 70px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 30px;
`;
export default function Header() {
  const router = useRouter();
  const redirectToGoogleAuth = () => {
    router.push("/api/auth/route");
  };
  return (
    <HeaderContainer>
      <Logo>Traveler</Logo>
      <Navigation />
      <Button onClick={redirectToGoogleAuth}>
        <Image
          src="/account.svg"
          width={32}
          height={32}
          alt="account-icon"
        ></Image>
      </Button>
    </HeaderContainer>
  );
}
