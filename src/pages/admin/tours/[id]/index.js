import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import ImageSlider from "../../../../../components/SearchResult/ImageSlider";
import AdminNavigation from "../../../../../components/Admin/AdminNavigation";
import Link from "next/link";

const Tour = styled.div`
  background-color: #c2cb96;
  margin-top: 100px;
  height: 100hv;
`;

const Article = styled.article`
  padding: 20px;
  width: 700px;
  margin: 40px auto;
  color: #3f4d34;
  font-family: "Figtree", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-align: left;
`;

const EditButton = styled.button`
  align-self: center;
  gap: 10px;
  width: 100px;
  padding: 10px;
  margin-right: 20px;
  border-radius: 60px;
  background-color: #3f4d34;
  color: #f5bda8;
  border: none;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Figtree", sans-serif;
  text-align: center;
`;

const DeleteButton = styled.button`
  align-self: center;
  gap: 10px;
  width: 100px;
  padding: 10px;
  margin-right: 20px;
  border-radius: 60px;
  background-color: #f5bda8;
  color: #3f4d34;
  border: none;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Figtree", sans-serif;
  text-align: center;
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
        <p>{Array.isArray(tour.itinarary) ? tour.itinarary.join(", ") : ""}</p>
        <h4>Duration: {tour.duration}</h4>
        <h4>Price: {tour.price}$</h4>
        <Link href={`/admin/tours/${id}/edit`}>
          <EditButton>Edit tour</EditButton>
        </Link>
        <DeleteButton onClick={deleteTour}>Delete tour</DeleteButton>
      </Article>
    </Tour>
  );
}
