import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 3rem 1rem;
  min-height: 100vh;
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

  @media (max-width: 768px) {
    font-size: 2rem; // Smaller font size on smaller screens
  }
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap; // Allow items to wrap on smaller screens

  @media (max-width: 768px) {
    flex-direction: column; // Stack vertically on smaller screens
    align-items: center; // Center items when stacked
  }
`;

const FAQList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.3rem;
  width: 100%; // Adjust based on screen size
  max-width: 900px; // Limit the max width

  @media (max-width: 768px) {
    width: 90%; // Take up more width on smaller screens
  }
`;

const FAQItem = styled.li`
  font-family: "Figtree", sans-serif;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #4b5563;
  padding-top: 1rem;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px; // Slightly smaller font on smaller screens
  }
`;

const DropSpan = styled.h4`
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  margin-top: 1rem;
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
  width: 40vw;
  border-radius: 50px;
`;

const faqData = [
  {
    question: "How do I book a trip with your travel agency?",
    answer:
      "You can book a trip with our travel agency by visiting our website, selecting your desired package, and following the booking instructions. For personalized assistance, feel free to contact our customer service.",
  },
  {
    question: "Are your travel packages all-inclusive?",
    answer:
      "Most of our travel packages are all-inclusive, covering accommodation, meals, and activities. However, we also offer customizable packages where you can choose what's included.",
  },
  {
    question: "Can I customize my itinerary?",
    answer:
      "Yes, we offer customizable itineraries. You can work with our travel experts to design a trip that fits your preferences and budget.",
  },
  {
    question: "How do I make payments for my trip?",
    answer:
      "Payments can be made through our website using credit/debit cards, or via bank transfer. Our customer service can guide you through the payment process.",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Yes, we offer discounts for group bookings. The discount rate depends on the size of the group and the chosen package. Please contact us for more details.",
  },
];

export default function Questions() {
  const [visibility, setVisibility] = useState(
    Array(faqData.length).fill(false)
  );

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
            {faqData.map((faq, index) => (
              <FAQItem key={index}>
                <span>{faq.question}</span>
                <Image
                  src="/expand_more.svg"
                  width={35}
                  height={35}
                  alt="expand_more"
                  onClick={() => toggleVisibility(index)}
                />
                <DropSpan $isVisible={visibility[index]}>{faq.answer}</DropSpan>
              </FAQItem>
            ))}
          </FAQList>
          <ImagesContainer>
            <Image
              src="https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="traintohagwards"
            />
          </ImagesContainer>
        </FAQContainer>
      </Container>
    </>
  );
}
