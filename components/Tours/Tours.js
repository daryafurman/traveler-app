import styled from "styled-components";
import { useState } from "react";

const TextContainer = styled.div`
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  width: 500px;
  height: 800px;
  margin: 30px;
  max-width: 400px;
  color: #cbdde9;
  background: #0a1f22;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  max-width: 90%;
  margin: 30px auto;

  @media (max-width: 768px) {
    width: auto; // Lets it expand naturally
    height: auto; // Adjust height as necessary
    padding: 15px; // Smaller padding
  }
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const ImageWrapper = styled.div`
  width: 500px;
  max-width: 400px;
  height: auto;
  margin: 40px auto;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
`;

const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Description = styled.p`
  cursor: pointer;
`;

export default function Tours({
  image,
  country,
  city,
  price,
  description,
  duration,
}) {
  const [showFullDescription, setShowFullDescription] = useState(false); // State to toggle description
  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  // Function to truncate description
  const truncateDescription = (text) => {
    if (showFullDescription || !text) return text;
    return text.length > 100 ? text.slice(0, 100) + "..." : text; // Adjust 100 to your preference
  };
  return (
    <div>
      <Slider>
        <TextContainer>
          <h2>
            {city}, {country}
          </h2>
          <ImageWrapper>
            <ImageContainer src={image} alt={`${city}, ${country}`} />
          </ImageWrapper>
          <Description onClick={toggleDescription}>
            {truncateDescription(description)}
          </Description>{" "}
          <p>Duration: {duration} </p>
          <p>Price: {price} $</p>
        </TextContainer>
      </Slider>
    </div>
  );
}
