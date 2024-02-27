import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavigation from "../../../components/Admin/AdminNavigation";
import AllTours from "../../../components/Admin/AllTours";

const AdminContainer = styled.div`
  background-color: #cbdde9;
  margin-top: 100px;
  font-family: "Figtree", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    margin-top: 60px;
    padding: 10px;
  }
`;

export default function AdminPage() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get("/api/tours");
        setTours(response.data);
      } catch (error) {
        console.error("Failed to fetch tours:", error);
      }
    };

    fetchTours();
  }, []);
  return (
    <>
      <AdminContainer>
        <AdminNavigation />
        <AllTours tours={tours} />
      </AdminContainer>
    </>
  );
}
