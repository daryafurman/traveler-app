import { useRouter } from "next/router.js";
import { useState } from "react";
import useSWR from "swr";
import styled from "styled-components";
import ImageSlider from "../../../../components/SearchResult/ImageSlider";
import Modal from "../../../../components/Modal";

const Main = styled.div`
  background-color: #cbdde9;
  font-family: "Figtree", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-align: left;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin: auto;
  color: #0a1f22;
  align-items: center;
  position: relative;
  width: 70vw;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 100px;
    align-items: flex-start;
  }

  > * {
    // This will position all direct children except the first (ImageSlider) absolutely
    position: absolute;
    z-index: 2; // Ensures text layers over the slider
  }

  > :first-child {
    // This targets the ImageSlider specifically
    position: relative; // Adjust as needed based on your ImageSlider's styles
    width: 100%;
    z-index: 1; // Ensures the slider is behind the text
  }
`;

const Button = styled.button`
  align-self: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin: 20px auto;
  margin-bottom: 20px;
  gap: 10px;
  width: 30vw;
  padding: 10px;
  border-radius: 60px;
  background-color: orange;
  color: black;
  border: none;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const ItineraryText = styled.p`
  font-size: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin: auto;
  width: 70vw;
`;

const Duration = styled.p`
  font-size: 26px;
  padding-top: 7%;
  padding-left: 12%;
  color: #fff;
`;

const Country = styled.p`
  font-size: 80px;
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  color: orange;
  margin: 0 20px;
  padding-top: 10%;
  padding-left: 5%;
`;

const City = styled.p`
  font-size: 65px;
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  color: orange;
  margin: 0 20px;
  padding-top: 15%;
  padding-left: 10%;
`;

const Price = styled.p`
  font-size: 20px;
  margin-top: 20%;
  margin-left: 7%;
  color: #fff;
  border-radius: 50px;
  padding: 15px;
  background: rgba(255, 165, 0, 0.6);
`;

const Descripton = styled.p`
  width: auto;
  width: 570px;
  margin: 25% 10% 25% 50%;
  color: white;
  font-size: 22px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default function DetailsPage() {
  const [modalShow, setModalShow] = useState(false);
  const [showFullItinarary, setShowFullItinarary] = useState(false); // State to toggle itinerary text

  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);

  const handleModalSubmit = async (event) => {
    event.preventDefault();
    const { name, email, question, tour } = event.target.elements;

    const formData = {
      name: name.value,
      email: email.value,
      tour: tour.value,
      question: question.value || "",
    };

    const response = await fetch("/api/submitRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Form submitted successfully");
      closeModal();
    } else {
      const errorData = await response.json();
      console.error("Failed to submit form:", errorData.error);
    }
  };

  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(isReady ? `/api/tours/${id}` : null, fetcher);

  const isLoading = !data && !error;

  if (!router.isReady || isLoading) return <h2>Loading...</h2>;

  if (!data?.tour) return <h2>Tour not found</h2>;

  const tour = data.tour;

  const toggleItinararyText = () => setShowFullItinarary(!showFullItinarary);

  const truncateItinarary = (itinararyArray) => {
    const fullText = itinararyArray.join("\n");
    if (showFullItinarary) return fullText;
    const truncateAt = Math.floor(fullText.length * 0.2);
    return fullText.slice(0, truncateAt) + " >>> click to see more >>>";
  };

  return (
    <Main>
      <Article>
        <ImageSlider images={tour.photos} />
        <Duration>{tour.duration} days in </Duration>
        <Country>{tour.country}</Country>
        <City>{tour.city}</City>
        <Descripton>{tour.description}</Descripton>
        <Price>only for {tour.price}$</Price>
      </Article>
      <ItineraryText onClick={toggleItinararyText}>
        Programm of the Tour:{" "}
        {Array.isArray(tour.itinarary) ? truncateItinarary(tour.itinarary) : ""}
      </ItineraryText>
      <Button onClick={openModal}>Book Now</Button>
      <Modal
        show={modalShow}
        onClose={closeModal}
        onSubmit={handleModalSubmit}
      />
    </Main>
  );
}
