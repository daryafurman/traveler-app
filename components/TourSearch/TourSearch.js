import styled from "styled-components";
import React, { useEffect, useState } from "react";

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
  color: #3f4d34;
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
  background-color: #f5bda8;
  color: #3f4d34;
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
  width: 600px;
  margin: 100px auto;
  color: #beee62;
  font-size: 26px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(16.4px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    color: #beee62;
    text-align: center;
  }
`;

const Row = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  input,
  select {
    width: 50%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 8px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Example shadow */
  }
`;

export default function TourSearch() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [locations, setLocations] = useState({ countries: [], cities: [] });

  useEffect(() => {
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => {
        const { countries, cities } = data;
        if (Array.isArray(countries) && Array.isArray(cities)) {
          setLocations({ countries, cities });
        } else {
          console.error("Unexpected data structure:", data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch locations:", error);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `/search-results?country=${country}&city=${city}`;
  };

  return (
    <>
      <SearchSection>
        <Slogan>
          Embark on a journey
          <br /> of a lifetime
        </Slogan>
        <SearchForm onSubmit={handleSearch}>
          <label>Choose your destination</label>
          <Row>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {locations.countries &&
                locations.countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
            </select>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">City</option>
              {locations.cities &&
                locations.cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
            <Button type="submit">Search</Button>
          </Row>
        </SearchForm>
      </SearchSection>
    </>
  );
}
