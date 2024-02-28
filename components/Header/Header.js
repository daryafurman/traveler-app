import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 100px;
  width: 100vw;
  z-index: 10;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: 0;
  top: 0;
  background-color: transparent;
  padding: 0 20px; // Add some padding on smaller screens
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);

  @media (max-width: 768px) {
    height: 80px; // Reduce height on smaller screens
    padding: 0 15px; // Adjust padding for smaller screens
  }
`;

const Logo = styled.h1`
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 45px;
  color: #0a1f22;
  padding-left: 70px;

  // em {
  //   color: orange;
  // }

  @media (max-width: 768px) {
    font-size: 35px; // Reduce font size on smaller screens
    padding-left: 20px; // Adjust padding for smaller screens
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    // Optional: Hide MenuContainer on smaller screens if implementing a hamburger menu
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  gap: 1.3rem;
  font-size: 20px;
  font-family: "Figtree", sans-serif;
  font-weight: 300;
  font-style: normal;
  padding-right: 30px;

  @media (max-width: 768px) {
    gap: 0.8rem; // Reduce gap between items
    font-size: 16px; // Reduce font size
    padding-right: 15px; // Adjust padding for smaller screens
  }
`;

const NavLink = styled.a`
  // Changed from styled.link to styled.a
  text-decoration: none;
  padding: 0 0.3rem;
  color: #0a1f22;
  font-weight: bold;
  &:hover {
    border-bottom: 5px dotted var(--primary-color);
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <em>T</em>r<em></em>aveler
      </Logo>
      <MenuContainer>
        <nav>
          <List role="list">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="#tours">Tours</NavLink>
            </li>
            {/* 
            <li>
              <NavLink href="/destinations">Destinations</NavLink>
            </li>
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
            */}
            <li>
              <NavLink href="#faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink href="#contacts">Contacts</NavLink>
            </li>
          </List>
        </nav>
      </MenuContainer>
    </HeaderContainer>
  );
}
