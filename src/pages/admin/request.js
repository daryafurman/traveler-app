import styled from "styled-components";
import AllRequest from "../../../components/Admin/AllRequest";
import AdminNavigation from "../../../components/Admin/AdminNavigation";

const RequestContainer = styled.div`
  background-color: #3c6e71;
  padding: 20px;
  margin-top: 100px;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
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
