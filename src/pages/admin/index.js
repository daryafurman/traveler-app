import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavigation from "../../../components/Admin/AdminNavigation";
import AllTours from "../../../components/Admin/AllTours";
import { useSession, signIn } from "next-auth/react";

const AdminContainer = styled.div`
  background-color: #cbdde9;
  display: flex;
  flex-wrap: wrap;

  font-family: "Figtree", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-align: center;

  @media (max-width: 768px) {
    padding-right: 20px; /* Adjust based on MenuContainer's responsive width */
  }
`;

export default function AdminPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });
  const [tours, setTours] = useState([]);
  console.log("session", session);
  useEffect(() => {
    if (session?.user.role === "admin") {
      const fetchTours = async () => {
        try {
          const response = await axios.get("/api/tours");
          setTours(response.data);
        } catch (error) {
          console.error("Failed to fetch tours:", error);
        }
      };

      fetchTours();
    }
  }, [session]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session?.user.role !== "admin") {
    return <p>You are not authorized to view this page!</p>;
  }
  return (
    <>
      <AdminContainer>
        <AdminNavigation />
        <AllTours tours={tours} />
      </AdminContainer>
    </>
  );
}
