import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const MenuContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  height: calc(100vh - 100px); /* Adjust height to account for fixed header */
  width: 250px; /* Set a standard width or 15% whichever works for your design */
  top: 100px; /* Adjusted from margin-top to top */
  background-color: #0a1f22;
  transition: width 0.3s ease; /* Smooth transition for responsive changes */

  @media (max-width: 768px) {
    width: 60px; /* Adjust as needed for smaller screens */
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  gap: 1.3rem;
  font-size: 20px;
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  padding: 10px;
  margin: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 0.3rem;
  color: #cbdde9;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    border-bottom: 5px dotted var(--primary-color);
  }

  // This media query is for demonstration. You might need to adjust it based on your design.
  @media (min-width: 769px) {
    // Styles or overrides for desktop view
  }
`;

const NavLinkText = styled.span`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
`;

const AdminNavigation = () => {
  return (
    <MenuContainer>
      <nav>
        <List role="list">
          <li>
            <NavLink href="/admin" passHref>
              <Image src="/home.svg" width={35} height={35} alt="home-icon" />
              <NavLinkText>Admin panel</NavLinkText>
            </NavLink>
          </li>
          <li>
            <NavLink href="/admin" $isActive={true} passHref>
              <Image
                src="/travel_explore.svg"
                width={35}
                height={35}
                alt="tours-icon"
              />
              <NavLinkText>All Tours</NavLinkText>
            </NavLink>
          </li>
          <li>
            <NavLink href="/admin/create" passHref>
              <Image
                src="/add-tour.svg"
                width={35}
                height={35}
                alt="add-tour-icon"
              />
              <NavLinkText>Add New Tour</NavLinkText>
            </NavLink>
          </li>
          <li>
            <NavLink href="/admin/request" passHref>
              <Image src="/inbox.svg" width={35} height={35} alt="inbox-icon" />
              <NavLinkText>All Requests</NavLinkText>
            </NavLink>
          </li>
        </List>
      </nav>
    </MenuContainer>
  );
};

export default AdminNavigation;
