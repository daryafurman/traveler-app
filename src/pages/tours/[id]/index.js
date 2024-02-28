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
  min-height: 100vh;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column; // Change direction on small screens
  padding-top: 20px; // Adjusted padding
  margin: auto;
  color: #0a1f22;
  align-items: center; // Center items for better responsiveness

  @media (min-width: 768px) {
    flex-direction: row; // Use row layout on larger screens
    padding-top: 100px;
    align-items: flex-start; // Align items at the start on larger screens
  }
`;

const Button = styled.button`
  align-self: center;
  gap: 10px;
  width: 100px;
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

const DestandImgSlider = styled.div`
  padding: 0px 40px 0px 40px;
  width: 35%;
`;

const Text = styled.div`
  width: 65%;
  padding: 40px 40px 40px 40px;
`;

const ItineraryText = styled.p`
  cursor: pointer;
  padding: 40px;
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
    return fullText.slice(0, truncateAt) + "Click to read the full schedule...";
  };

  return (
    <Main>
      <Article>
        <DestandImgSlider>
          <h2>
            {tour.country}, {tour.city}
          </h2>
          <ImageSlider images={tour.photos} />
        </DestandImgSlider>
        <Text>
          <h3>{tour.description}</h3>

          <h4>Duration: {tour.duration}</h4>
          <h4>Price: {tour.price}$</h4>
          <Button onClick={openModal}>Book Now</Button>
          <Modal
            show={modalShow}
            onClose={closeModal}
            onSubmit={handleModalSubmit}
          />
        </Text>
      </Article>
      <ItineraryText onClick={toggleItinararyText}>
        Programm of the Tour:{" "}
        {Array.isArray(tour.itinarary) ? truncateItinarary(tour.itinarary) : ""}
      </ItineraryText>
    </Main>
  );
}
