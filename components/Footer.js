import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  height: 250px;
  background-color: #0a1f22;
  text-align: center;
  padding: 20px;
  color: #fff;
`;

const NameLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      &copy;2023 India, All Rights Reserved by &nbsp;
      <NameLink href="https://github.com/daryafurman" className="namelink">
        Ambresh
      </NameLink>
    </FooterContainer>
  );
}
