import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import ImageSlider from "../../../../../components/SearchResult/ImageSlider";
import AdminNavigation from "../../../../../components/Admin/AdminNavigation";
import Link from "next/link";

const Tour = styled.div`
  background-color: #cbdde9;
  min-height: 100vh;
`;

const Article = styled.article`
  padding-top: 100px; /* Account for fixed header if any */
  padding-left: 20%; /* Adjust based on the sidebar's width */
  width: auto; /* Make width flexible */
  max-width: 700px; /* Maximum width to maintain readability */
  margin-left: auto; /* Center the article when there's space */
  margin-right: auto; /* Center the article when there's space */
  font-family: "Figtree", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-align: left;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    padding-left: 16%; /* Reduce padding for smaller screens */
    padding-right: 10%; /* Ensure padding on the right for consistency */
  }
`;

const EditButton = styled.button`
  align-self: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin: 10px;
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

const DeleteButton = styled.button`
  align-self: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin: 10px;
  gap: 10px;
  width: 100px;
  padding: 10px;
  border-radius: 60px;
  background-color: red;
  color: white;
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

  if (!isReady || isLoading) return <h2>Loading...</h2>;
  if (error || !data?.tour) return <h2>Tour not found</h2>;

  const tour = data.tour;

  async function deleteTour() {
    if (confirm(`Are you sure you want to delete this tour?`)) {
      const response = await fetch(`/api/tours/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/admin");
      } else {
        alert(`Error deleting tour: ${response.statusText}`);
      }
    }
  }
  return (
    <Tour>
      <AdminNavigation />
      <Article>
        <h2>
          {tour.country}, {tour.city}
        </h2>
        <ImageSlider images={tour.photos} />

        <p>{tour.description}</p>
        <h4>Programm of the tour:</h4>
        <p>
          {Array.isArray(tour.itinarary)
            ? tour.itinarary.join(
                "__________________________________________________________________"
              )
            : ""}
        </p>
        <h4>Duration: {tour.duration} days</h4>
        <h4>Price: {tour.price} $</h4>
        <Link href={`/admin/tours/${id}/edit`}>
          <EditButton>Edit tour</EditButton>
        </Link>
        <DeleteButton onClick={deleteTour}>Delete tour</DeleteButton>
      </Article>
    </Tour>
  );
}
