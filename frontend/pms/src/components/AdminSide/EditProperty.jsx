import React, { useState } from 'react';
import axios from 'axios';

const PropertyEdit = (probs) => {
  
  const {id} = probs

  const [property, setProperty] = useState({
    owner_name: '',
    property_name: '',
    price: '',
    address: '',
    description: '',
    phone_number: '',
    rooms_available: 0,
    room_type: '',
    image_first: null,
    image_second: null,
    image_third: null,
    image_fourth: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({ ...prevProperty, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProperty((prevProperty) => ({ ...prevProperty, [e.target.name]: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/property/Edit_property/${id}`, property)
      .then((response) => {
        console.log('Property updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating property:', error);
      });
  };

  return (
    <div className="container mx-auto py-8 bg-gray-300 w-3/4 rounded-3xl mt-4">
      <h2 className="text-2xl font-bold mb-4">Edit Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 m-12">
          <div>
            <label htmlFor="owner_name">Owner Name</label>
            <input
              type="text" id="owner_name" name="owner_name" value={property.owner_name} onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="property_name">Property Name</label>
            <input
              type="text" id="property_name" name="property_name" value={property.property_name} onChange={handleChange} className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="text" id="price" name="price" value={property.price} onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text" id="address" name="address"  value={property.address} onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="description">Description</label>
            <textarea
              id="description" name="description" value={property.description} onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            ></textarea>
          </div>
          <div>
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="text" id="phone_number" name="phone_number" value={property.phone_number} onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="rooms_available">Rooms Available</label>
            <input
              type="number" id="rooms_available" name="rooms_available" value={property.rooms_available} onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="room_type">Room Type</label>
            <input
              type="text" id="room_type" name="room_type" value={property.room_type} onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div> </div>
          <div>
            <label htmlFor="image_first">Image 1</label>
            <input
              type="file" id="image_first" name="image_first"  onChange={handleImageUpload}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="image_second">Image 2</label>
            <input
              type="file" id="image_second"  name="image_second"  onChange={handleImageUpload}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="image_third">Image 3</label>
            <input
              type="file" id="image_third" name="image_third" onChange={handleImageUpload}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="image_fourth">Image 4</label>
            <input
              type="file" id="image_fourth" name="image_fourth" onChange={handleImageUpload}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PropertyEdit;
