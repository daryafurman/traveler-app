import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import Form from "../../../../../components/Admin/Form";
import AdminNavigation from "../../../../../components/Admin/AdminNavigation";

const EditTourContainer = styled.div`
  background-color: #3c6e71;
  padding: 20px;
  margin-top: 100px;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  text-align: center;
`;

export default function EditTour() {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {
    data: tour,
    error,
    mutate,
  } = useSWR(id ? `/api/tours/${id}` : null, fetcher);

  if (!tour) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading tour details.</h2>;

  async function handleSubmit(updatedTour) {
    const response = await fetch(`/api/tours/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTour),
    });

    if (response.ok) {
      mutate();
      router.push(`/admin/tours/${id}`);
    } else {
      const error = await response.json();
      alert(`Failed to update the tour: ${error.message}`);
    }
  }

  async function deleteTour() {
    if (confirm(`Would you like to delete this Tour?`) == true) {
      const response = await fetch(`/api/tours/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await response.json();
        router.push("/admin");
      } else {
        alert(`Error ${response.status}`);
      }
    }
  }

  return (
    <>
      <AdminNavigation />
      <EditTourContainer>
        <Header>Edit Tour</Header>
        <Form
          onSubmit={handleSubmit}
          formName={"edit-tour"}
          defaultData={tour}
        />
      </EditTourContainer>
    </>
  );
}
