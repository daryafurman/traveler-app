import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 3rem 1rem;
`;

const Title = styled.h1`
  color: #fbbf24;
  font-size: 3rem;
  font-family: "Italiana", sans-serif;
  font-weight: normal;
  margin-bottom: 3rem;
  text-align: center;

  em {
    color: #fff;
  }
`;

const FAQContainer = styled.div`
  display: "flex";
  flexdirection: "row";
  justifycontent: "space-between";
`;

const FAQList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const FAQItem = styled.li`
  font-family: "Figtree", sans-serif;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #4b5563;
  padding-top: 1rem;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  margin-bottom: 1rem;
  cursor: pointer;
`;

const DropSpan = styled.span`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  margin-top: 1rem;
`;

export default function Questions() {
  const [visibility, setVisibility] = useState(Array(5).fill(false));

  // Function to handle click event on the image
  const toggleVisibility = (index) => {
    const updatedVisibility = visibility.map((item, i) =>
      i === index ? !item : item
    );
    setVisibility(updatedVisibility);
  };

  return (
    <>
      <Container>
        <Title>
          FRE<em>Q</em>UENTLY AS<em>K</em>ED QUESTI<em>O</em>NS
        </Title>

        <FAQContainer>
          <FAQList>
            {[...Array(5)].map((_, index) => (
              <FAQItem key={index}>
                <span>Question {index + 1}</span>
                <Image
                  src="/expand_more.svg"
                  width={35}
                  height={35}
                  alt="expand_more"
                  onClick={() => toggleVisibility(index)}
                />
                <DropSpan isVisible={visibility[index]}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </DropSpan>
              </FAQItem>
            ))}
          </FAQList>
          <ImagesContainer>
            <Image
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="canyon"
              width={500}
              height={300}
            />
          </ImagesContainer>
        </FAQContainer>
      </Container>
    </>
  );
}

{
  /* 
  How do I book a trip with your travel agency?
  Are your travel packages is all-inclusive?
  Can I customize my itinerary?
  How do I make payments for my trip?
  Do you offer group discounts?
  */
}
