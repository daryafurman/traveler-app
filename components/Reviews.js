import React from "react";
import styled from "styled-components";

const ReviewsContainer = styled.div`
  background-image: linear-gradient(
      rgba(243, 239, 227, 0.5),
      rgba(243, 239, 227, 0.5)
    ),
    url("https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
`;

const Title = styled.h1`
  font-family: "Italiana", sans-serif;
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #0a1f22;
`;

const ReviewContent = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Optional: adds a subtle shadow for depth
`;

const Blockquote = styled.blockquote`
  font-size: 1.125rem;
  font-style: italic;
  text-align: center;
  font-family: "Figtree", sans-serif;
`;

const ReviewFooter = styled.footer`
  margin-top: 1rem;
  font-weight: 600;
`;

export default function Reviews() {
  return (
    <ReviewsContainer>
      <Title>Customer Reviews</Title>
      <ReviewContent>
        <Blockquote>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
            mauris at mauris finibus fringilla. Morbi molestie odio a erat
            tincidunt, in fermentum nunc convallis. Nam ante velit, laoreet sed
            lorem vel, iaculis semper lacus. Nam vulputate nec arcu et bibendum.
            Integer ac tempus leo. Ut non lorem nec quam tincidunt ullamcorper.”
          </p>
          <ReviewFooter>- Dexter Morgan, UK</ReviewFooter>
        </Blockquote>
        <Blockquote>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
            mauris at mauris finibus fringilla. Morbi molestie odio a erat
            tincidunt, in fermentum nunc convallis. Nam ante velit, laoreet sed
            lorem vel, iaculis semper lacus. Nam vulputate nec arcu et bibendum.
            Integer ac tempus leo. Ut non lorem nec quam tincidunt ullamcorper.”
          </p>
          <ReviewFooter>- Jane Doe, USA</ReviewFooter>
        </Blockquote>
        <Blockquote>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
            mauris at mauris finibus fringilla. Morbi molestie odio a erat
            tincidunt, in fermentum nunc convallis. Nam ante velit, laoreet sed
            lorem vel, iaculis semper lacus. Nam vulputate nec arcu et bibendum.
            Integer ac tempus leo. Ut non lorem nec quam tincidunt ullamcorper.”
          </p>
          <ReviewFooter>- Dexter Morgan, UK</ReviewFooter>
        </Blockquote>
      </ReviewContent>
    </ReviewsContainer>
  );
}
