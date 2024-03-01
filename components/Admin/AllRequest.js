import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Main = styled.div`
  height: 100vh;
  padding-left: 270px;
`;

const Table = styled.table`
  width: 50%;
  border-collapse: collapse;
  font-family: "Figtree", sans-serif;
`;

const Th = styled.th`
  background-color: #c2cb96;
  color: #3f4d34;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export default function AllRequest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/submitRequest");
      const jsonData = await response.json();
      if (jsonData.success) {
        setData(jsonData.data);
      } else {
        console.error("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <Main>
      <Table>
        <thead>
          <tr>
            <Th>Name Surname</Th>
            <Th>Email</Th>
            <Th>Tour Name</Th>
            <Th>Question</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.name}</Td>
              <Td>{item.email}</Td>
              <Td>{item.tour}</Td>
              <Td>{item.question}</Td>
              <Td>
                <input type="checkbox" />
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Main>
  );
}
