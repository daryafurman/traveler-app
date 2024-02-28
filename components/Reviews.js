import React from "react";
import styled from "styled-components";

const ReviewsContainer = styled.div`
  background-image: linear-gradient(
      rgba(243, 239, 227, 0.5),
      rgba(243, 239, 227, 0.5)
    ),
    url("https://images.unsplash.com/photo-1471093507554-1b18de49c890?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  // min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 0.5rem; // Adjust padding for smaller screens
  }
`;

const Title = styled.h1`
  font-family: "Italiana", sans-serif;
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  text-align: center;
  transform: rotate(-90deg);
  color: #0a1f22;

  @media (max-width: 768px) {
    font-size: 2rem; // Adjust font size for smaller screens
  }

  em {
    color: #fff;
  }
`;
const ReviewContent = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: row; // Change direction to column for better mobile layout
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Optional: adds a subtle shadow for depth
  margin: 0 1rem; // Ensure it doesn't touch the sides on small screens

  @media (min-width: 769px) {
    flex-direction: row; // Use row layout for larger screens
    justify-content: space-around; // Distribute space evenly on larger screens
  }
`;

const Blockquote = styled.blockquote`
  font-size: 1.125rem;
  font-style: italic;
  text-align: center;
  font-family: "Figtree", sans-serif;
  margin: 1rem 0; // Add margin for spacing between reviews on small screens

  @media (max-width: 768px) {
    font-size: 1rem; // Adjust font size for smaller screens
  }
`;

const ReviewFooter = styled.footer`
  margin-top: 1rem;
  font-weight: 600;
`;

export default function Reviews() {
  return (
    <ReviewsContainer>
      <Title>
        Cust<em>o</em>mer Review<em>s</em>
      </Title>
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
      </ReviewContent>
      <ReviewContent>
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
      </ReviewContent>
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
      </ReviewContent>
    </ReviewsContainer>
  );
}
