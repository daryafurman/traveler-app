import styled from "styled-components";

const SearchSection = styled.div`
  background-image: url("/main.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Slogan = styled.h1`
  padding-top: 200px;
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 90px;
  color: #f4743b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
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

const SearchForm = styled.form`
  padding: 20px;
  width: auto;
  max-width: 650px;
  margin: 240px auto;
  color: #beee62;
  font-size: 26px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(16.4px);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Row = styled.div`
  margin-bottom: 20px; /* Example style */
  display: flex;
  flex-direction: column;
  align-items: start;

  label {
    margin-bottom: 5px;
    color: #beee62;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 8px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Example shadow */
  }
`;

export default function TourSearch() {
  return (
    <>
      <SearchSection>
        <Slogan>
          Embark on a journey
          <br /> of a lifetime
        </Slogan>
        <SearchForm>
          <Row>
            <label>Destination:</label>
            <select>
              <option>Country</option>
            </select>
            <select>
              <option>City</option>
            </select>
          </Row>

          <Row>
            <label>Check In</label>
            <input type="date"></input>
          </Row>

          <Row>
            <label>Check Out</label>
            <input type="date"></input>
          </Row>
          <Button>Search</Button>
        </SearchForm>
      </SearchSection>
    </>
  );
}
