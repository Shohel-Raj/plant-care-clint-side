import Aos from 'aos';
import React from 'react';
import { useNavigate } from 'react-router';
import 'aos/dist/aos.css';

Aos.init();

const NewPlantCard = ({ singlePlant }) => {
  const { _id, plantName, image, healthStatus, category } = singlePlant;
  const navigate = useNavigate();

  const handleView = id => {
    navigate(`/viewdetails/${id}`);
  };

  return (
    <div data-aos="fade-up-right" className="relative rounded-2xl shadow-2xl bg-white overflow-hidden max-w-sm">
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">{plantName}</h2>
        <p className="text-sm font-medium uppercase text-gray-600">Category: {category}</p>
        <p className="text-sm font-medium uppercase text-gray-600">Health Status: {healthStatus}</p>
      </div>

      <div className="relative w-full h-52 mt-2">
        <img
          src={image}
          alt={plantName}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => handleView(_id)}
          className="absolute -top-4 left-4 bg-[#34eb74] cursor-pointer text-white hover:bg-[#97f7b9] hover:text-black rounded-full px-4 py-2 shadow-lg text-sm font-medium  transition"
        >
          View Details →
        </button>
      </div>
    </div>
  );
};

export default NewPlantCard;
