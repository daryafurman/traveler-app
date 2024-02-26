import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import ImageSlider from "../../../../components/SearchResult/ImageSlider";

const Article = styled.article`
  padding: 20px;
  width: 1000px;
  margin: 40px auto;
  color: #fff;
  color: #beee62;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
`;
const Main = styled.div`
  background-color: #3c6e71;
  margin-top: 100px;
  font-family: "Figtree", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-align: left;
`;

const Button = styled.button`
  align-self: center;
  gap: 10px;
  width: 100px;
  padding: 10px;
  border-radius: 60px;
  background-color: #f4743b;
  color: #beee62;
  border: none;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;
export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(id ? `/api/tours/${id}` : null, fetcher);

  const isLoading = !data && !error;

  if (!router.isReady || isLoading) return <h2>Loading...</h2>;

  if (!data?.tour) return <h2>Tour not found</h2>;

  const tour = data.tour;
  return (
    <Main>
      <Article>
        <h2>
          {tour.country}, {tour.city}
        </h2>
        <ImageSlider images={tour.photos} />
        <p>{tour.description}</p>
        <p>{Array.isArray(tour.itinarary) ? tour.itinarary.join(" , ") : ""}</p>
        <h4>Duration: {tour.duration}</h4>
        <h4>Price: {tour.price}$</h4>
        <Button>Book Now</Button>
      </Article>
    </Main>
  );
}
