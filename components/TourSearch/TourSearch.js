import styled from "styled-components";
import React, { useEffect, useState } from "react";

const SearchSection = styled.div`
  background-image: url("/main.jpg");
  height: 100vh;
  gap: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: center; // Adjusted for vertical centering
  text-align: center; // Center text for all child elements
`;

const Slogan = styled.span`
  padding-top: 0; // Adjusted padding
  font-family: "Italiana", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 60px;
  color: #0a1f22;
  margin: 0 20px; // Ensure some spacing on smaller screens

  em {
    color: orange;
  }

  @media (max-width: 768px) {
    font-size: 40px; // Smaller font size for mobile devices
  }
`;

const Button = styled.button`
  align-self: center;
  gap: 10px;
  width: 100px;
  padding: 10px;
  border-radius: 60px;
  background-color: orange;
  color: #3f4d34;
  border: none;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  width: auto; /* Adjusted for flexibility */
  min-width: 100px; /* Ensure it doesn't get too small */
  padding: 10px 20px; /* Adjust padding for better visual */

  @media (max-width: 768px) {
    padding: 8px 16px; /* Slightly smaller padding on small screens */
  }
`;

const SearchForm = styled.form`
  padding: 20px;
  width: 90%; // Use percentage-based width for responsiveness
  max-width: 600px; // Maximum width to maintain design integrity
  margin: 20px auto; // Adjusted margin for auto and top spacing
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(16.4px);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 10px;
  }
`;

const Row = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  input,
  select {
    width: 50%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 8px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Example shadow */
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack inputs vertically on small screens */
    align-items: stretch; /* Stretch inputs to full width */
    gap: 10px; /* Reduce gap for a compact layout */
    input,
    select {
      width: auto; /* Adjust input width to auto for full width */
    }
  }
`;

export default function TourSearch() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.countries)) {
          setCountries(data.countries);
        } else {
          console.error("Unexpected data structure:", data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch countries:", error);
      });
  }, []);

  useEffect(() => {
    if (country) {
      fetch(`/api/locations?country=${country}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            const uniqueCities = [...new Set(data.map((tour) => tour.city))];
            setFilteredCities(uniqueCities);
          } else {
            console.error("Unexpected data structure:", data);
          }
        })
        .catch((error) => {
          console.error(
            `Failed to fetch cities for country ${country}:`,
            error
          );
        });
    } else {
      setFilteredCities([]);
    }
  }, [country]);

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `/search-results?country=${country}&city=${city}`;
  };

  return (
    <>
      <SearchSection>
        <Slogan>
          EMB<em>A</em>RK ON A JOURNE<em>Y </em> OF A LIF<em>E</em>TIME
        </Slogan>
        <SearchForm onSubmit={handleSearch}>
          <h1>Choose your destination</h1>
          <Row>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">City</option>
              {filteredCities.map((city) => (
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
