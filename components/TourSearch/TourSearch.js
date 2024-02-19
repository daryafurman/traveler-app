import Image from "next/image";
import styled from "styled-components";

const Slogan = styled.h1`
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 90px;
  color: #f4743b;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 108px;
`;

const SearchSection = styled.div``;

export default function TourSearch() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('/main.jpg')`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Slogan>
          Embark on a journey
          <br /> of a lifetime
        </Slogan>
        <SearchSection>
          <form>
            <div className="row">
              <label>Destinations</label>
            </div>
          </form>
        </SearchSection>
      </div>
    </>
  );
}
