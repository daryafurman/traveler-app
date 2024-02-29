import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 70px;
  background-color: #0a1f22;
  color: #fff;
  text-align: center;
  padding: 20px;
  margin: auto;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <h2>Created by Daria Furman</h2>
      <h4>Berlin 2024</h4>
    </FooterContainer>
  );
}
