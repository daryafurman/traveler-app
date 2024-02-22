import styled from "styled-components";

const ContainerTitle = styled.h1`
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  color: #fff;
`;

const TextContainer = styled.div`
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  padding: 30px;
  width: 500px;
  max-width: 400px;
  margin: 40px auto;
  color: #fff;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 66vh;
`;

const ImageWrapper = styled.div`
  width: 800px;
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

export default function Tours({
  image,
  country,
  city,
  price,
  description,
  duration,
}) {
  return (
    <div>
      <ContainerTitle>Popular Tours:</ContainerTitle>
      <Slider>
        <TextContainer>
          <h2>
            {city}, {country}
          </h2>
          <p>{description} </p>
          <p>Duration: {duration} </p>
          <p>Price: {price} $</p>
        </TextContainer>
        <ImageWrapper>
          <ImageContainer src={image} alt={`${city}, ${country}`} />
        </ImageWrapper>
      </Slider>
    </div>
  );
}
