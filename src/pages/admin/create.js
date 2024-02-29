import styled from "styled-components";
import AddTour from "../../../components/Admin/AddTour";
import AdminNavigation from "../../../components/Admin/AdminNavigation";

const AddTourContainer = styled.div`
  background-color: #cbdde9;
  padding: 20px;
  padding-top: 100px; /* Account for the fixed header */
  height: calc(100vh - 100px); /* Adjust the height to account for the header */
  padding-left: 270px; /* Adjust based on the width of the AdminNavigation */
  overflow: auto; /* In case the form is longer than the screen */

  @media (max-width: 768px) {
    margin-left: 60px; /* Adjust based on the responsive width of the AdminNavigation */
  }
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3f4d34;
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  text-align: center;
`;

export default function CreateTour() {
  return (
    <>
      <AdminNavigation />
      <AddTourContainer>
        <Header>Add Tour</Header>
        <AddTour />
      </AddTourContainer>
    </>
  );
}
