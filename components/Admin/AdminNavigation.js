import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const MenuContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  height: 100vh;
  width: 15%;
  background-color: #f4743b;
  padding-top: 100px;
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
  color: ${({ $isActive }) => ($isActive ? "#beee62" : "#fff")};
  font-weight: bold;
  display: flex; // To align the Image and text properly
  align-items: center; // Center aligns items vertically within the NavLink
  gap: 10px; // Adjust the gap between the icon and text as needed

  &:hover {
    border-bottom: 5px dotted var(--primary-color);
  }
`;

const AdminNavigation = () => {
  return (
    <MenuContainer>
      <nav>
        <List role="list">
          <h3>
            <NavLink href="/admin" passHref>
              <Image
                src="/home.svg"
                width={35}
                height={35}
                alt="home-icon"
              ></Image>
              Admin panel
            </NavLink>
          </h3>
          <li>
            <NavLink href="/admin" $isActive={true} passHref>
              <Image
                src="/travel_explore.svg"
                width={35}
                height={35}
                alt="tours-icon"
              ></Image>
              Tours
            </NavLink>
          </li>
          <li>
            <NavLink href="/admin/create" passHref>
              <Image
                src="/add-tour.svg"
                width={35}
                height={35}
                alt="add-tour-icon"
              ></Image>
              Add New Tour
            </NavLink>
          </li>
          <li>
            <NavLink href="/admin/requests" passHref>
              <Image
                src="/inbox.svg"
                width={35}
                height={35}
                alt="inbox-icon"
              ></Image>
              New Requests
            </NavLink>
          </li>
        </List>
      </nav>
    </MenuContainer>
  );
};

export default AdminNavigation;
