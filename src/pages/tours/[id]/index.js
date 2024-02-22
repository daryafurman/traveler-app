import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";

const Article = styled.article`
  padding: 20px;
  width: 700px;
  max-width: 400px;
  margin: 40px auto;
  color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
  font-size: 25px;
`;

const ImagesContainer = styled.div`
  position: relative;
  height: 15rem;
`;

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: tour,
    isLoading,
    error,
  } = useSWR(id ? `/api/tours/${id}` : null);
  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <Article>
      <ImagesContainer>
        <Image
          src={tour.photos}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt=""
        />
      </ImagesContainer>
      <h2>
        {tour.country}, {tour.city}
      </h2>
      <h4>{tour.duration}</h4>
      <h4>{tour.price}</h4>
      <p>{tour.description}</p>
    </Article>
  );
}
