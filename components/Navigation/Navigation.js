import Link from "next/link";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  gap: 1.3rem;
  font-size: 20px;
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 0.3rem;
  color: ${({ $isActive }) => ($isActive ? "#f4743b" : "#3c6e71")};
  font-weight: bold;
  &:hover {
    border-bottom: 5px dotted var(--primary-color);
  }
`;

const Navigation = () => {
  return (
    <MenuContainer>
      <nav>
        <List role="list">
          <li>
            <NavLink href="/" passHref>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/tours" passHref>
              Tours
            </NavLink>
          </li>
          <li>
            <NavLink href="/destinations" passHref>
              Destinations*
            </NavLink>
          </li>
          <li>
            <NavLink href="/blog" passHref>
              Blog*
            </NavLink>
          </li>
          <li>
            <NavLink href="/contacts" passHref>
              Contacts
            </NavLink>
          </li>
        </List>
      </nav>
    </MenuContainer>
  );
};

export default Navigation;
