import React, { useState } from 'react';
import axios from 'axios';
import { toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PropertyForm = () => {

  const history = useNavigate()
  const [formData, setFormData] = useState({
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

  const {
    owner_name,
    property_name,
    price,
    address,
    description,
    phone_number,
    rooms_available,
    room_type,
    image_first,
    image_second,
    image_third,
    image_fourth,
  } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('owner_name', owner_name);
    data.append('property_name', property_name);
    data.append('price', price);
    data.append('address', address);
    data.append('description', description);
    data.append('phone_number', phone_number);
    data.append('rooms_available', rooms_available);
    data.append('room_type', room_type);
    data.append('image_first', image_first);
    data.append('image_second', image_second);
    data.append('image_third', image_third);
    data.append('image_fourth', image_fourth)

    try {
        const response = await axios.post('/property/properties/create/', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          
        })
        toast.success('Property created successfully');
        history('/AdminDashboard')
      console.log(response.data);

      setFormData({
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="bg-gray-200 w-4/5 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 mt-4">Create New Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mx-4">
          <div>
            <label htmlFor="owner_name" className="block mb-2 font-medium">
              Owner Name
            </label>
            <input
              type="text"  id="owner_name"  name="owner_name" value={owner_name}  onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="property_name" className="block mb-2 font-medium">
              Property Name
            </label>
            <input
              type="text"  id="property_name"   name="property_name"   value={property_name} onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="price" className="block mb-2 font-medium">
              Price
            </label>
            <input
              type="text" id="price"  name="price"  value={price}  onChange={handleChange}
             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="address" className="block mb-2 font-medium">
              Address
            </label>
            <input
              type="text" id="address" name="address" value={address} onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-2 font-medium">
              Description
            </label>
            <textarea
              id="description" name="description" value={description} onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone_number" className="block mb-2 font-medium">
              Phone Number
            </label>
            <input
              type="text" id="phone_number"  name="phone_number" value={phone_number} onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="rooms_available" className="block mb-2 font-medium">
              Rooms Available
            </label>
            <input
              type="number" id="rooms_available" name="rooms_available" value={rooms_available}  onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="room_type" className="block mb-2 font-medium">
              Room Type
            </label>
            <input
              type="text" id="room_type"  name="room_type" value={room_type} onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="image_first" className="block mb-2 font-medium">
              Image 1
            </label>
            <input
              type="file" id="image_first" name="image_first"  onChange={handleChange} className="focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="image_second" className="block mb-2 font-medium">
              Image 2
            </label>
            <input
              type="file" id="image_second" name="image_second" onChange={handleChange} className="focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="image_third" className="block mb-2 font-medium">
              Image 3
            </label>
            <input
              type="file" id="image_third" name="image_third" onChange={handleChange} className="focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="image_fourth" className="block mb-2 font-medium">
              Image 4
            </label>
            <input
              type="file" id="image_fourth"
              name="image_fourth" onChange={handleChange} className="focus:outline-none"/>
          </div>
        </div>

        <div className="mt-4 mb-5">
          <button
            type="submit"
            className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Create Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
