import styled from "styled-components";
import AllRequest from "../../../components/Admin/AllRequest";
import AdminNavigation from "../../../components/Admin/AdminNavigation";

const RequestContainer = styled.div`
  background-color: #cbdde9;
  padding: 20px;
  padding-top: 100px;
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
      <RequestContainer>
        <Header>All request:</Header>
        <AllRequest />
      </RequestContainer>
    </>
  );
}
