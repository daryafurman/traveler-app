import styled from "styled-components";
import { useState, useEffect } from "react";

export const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  padding-left: 240px;
  font-size: 20px;
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  color: #fff;
`;

export const Input = styled.input`
  padding: 0.5rem;
`;

export const Textarea = styled.textarea`
  font-family: "Figtree", sans-serif;
  padding: 0.5rem;
`;

export const Label = styled.label`
  font-weight: bold;
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

const AddPhotoButton = styled.button`
  align-self: center;
  gap: 10px;
  width: 100px;
  padding: 10px;
  border-radius: 60px;
  background-color: #beee62;
  color: #f4743b;
  border: none;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const PhotoInput = ({ id, value, onChange }) => (
  <div>
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(id, e.target.value)}
      placeholder="Enter photo URL"
    />
  </div>
);

export default function TourForm({ onSubmit, formName, defaultData, tourId }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    country: "",
    city: "",
    itinerary: "",
    duration: "",
    price: "",
    photos: [""], // Initialize photos with an empty string to represent an empty input field
  });

  useEffect(() => {
    if (tourId) {
      fetchTourData(tourId)
        .then((data) => {
          setFormData({
            ...data,
            // Assuming data.photos is an array of photo URLs; if not, adjust accordingly
            photos: data.photos.length > 0 ? data.photos : [""],
          });
        })
        .catch((error) => {
          console.error("Failed to fetch tour data:", error);
        });
    }
  }, [tourId]);

  function handlePhotoChange(id, newValue) {
    setFormData((prevState) => ({
      ...prevState,
      photos: prevState.photos.map((photo, index) =>
        index === id ? newValue : photo
      ),
    }));
  }

  function addPhotoField() {
    setFormData((prevState) => ({
      ...prevState,
      photos: [...prevState.photos, ""],
    }));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      ...formData,
      photos: formData.photos.filter((url) => url.trim() !== ""), // Ensure to trim and remove empty URLs
    });
  }

  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      <Label htmlFor="country">Country</Label>
      <Input
        id="country"
        name="country"
        type="text"
        value={formData.country}
        onChange={handleInputChange}
      />
      <Label htmlFor="city">City</Label>
      <Input
        id="city"
        name="city"
        type="text"
        defaultValue={formData.city}
        onChange={handleInputChange}
      />
      <Label htmlFor="description">Description</Label>
      <Textarea
        id="description"
        name="description"
        defaultValue={formData.description}
        onChange={handleInputChange}
      />
      <Label htmlFor="itinerary">Itinerary</Label>
      <Textarea
        id="itinerary"
        name="itinerary"
        defaultValue={formData.itinerary}
        onChange={handleInputChange}
      />
      <Label htmlFor="duration">Duration (days)</Label>
      <Input
        id="duration"
        name="duration"
        type="number"
        defaultValue={formData.duration}
        onChange={handleInputChange}
      />
      <Label htmlFor="price">Price</Label>
      <Input
        id="price"
        name="price"
        type="number"
        step="0.01"
        defaultValue={formData.price}
        onChange={handleInputChange}
      />
      <Label>Photos</Label>
      {formData.photos.map((url, index) => (
        <PhotoInput
          key={index}
          id={index}
          value={url}
          onChange={handlePhotoChange}
        />
      ))}
      <AddPhotoButton type="button" onClick={addPhotoField}>
        Add Photo
      </AddPhotoButton>
      <Button type="submit">{formName}</Button>
    </FormContainer>
  );
}