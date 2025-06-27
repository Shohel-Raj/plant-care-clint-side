import React, { useEffect } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import ViewCard from '../Component/DetaillsCard/ViewCard';

const PlantDetails = () => {
    const data = useLoaderData()
    const navigate = useNavigate();
    const {
        _id,
        wateringFrequency,
        userName,
        userEmail,
        plantName,
        nextWateringDate,
        lastWateredDate,
        image,
        healthStatus,
        description,
        category,
        careLevel
    } = data;
    useEffect(()=>{
                document.title=`Plant Care | Details`
            },[])

    return (
        <>
           <div className="bg-base-100 min-h-screen pb-10">
            <div className="w-11/12 mx-auto mt-10">
                <img
                    src={image}
                    alt={plantName}
                    className="rounded-xl shadow-md w-full max-h-[400px] object-cover"
                />

                <div className="mt-6">
                    <span className="text-xs uppercase text-green-600 font-semibold tracking-widest badge badge-outline">{category}</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 uppercase italic">
                        🌱 Details of {plantName}
                    </h1>

                    <div className="mt-6 space-y-3 text-gray-700 leading-relaxed">
                        <p><strong>Plant Name:</strong> {plantName}</p>
                        <p><strong>Category:</strong> {category}</p>
                        <p><strong>Health Status:</strong> {healthStatus}</p>
                        <p><strong>Care Level:</strong> {careLevel}</p>
                        <p><strong>Watering Frequency:</strong> {wateringFrequency}</p>
                        <p><strong>Last Watered:</strong> {lastWateredDate}</p>
                        <p><strong>Next Watering:</strong> {nextWateringDate}</p>
                        <p><strong>Description:</strong> {description}</p>
                    </div>

                    <div className="mt-6 text-sm text-gray-500 space-y-1">
                        <p>Added by: <span className="italic">{userName}</span></p>
                        <p>Email: <span className="italic">{userEmail}</span></p>
                    </div>
                </div>
<Link
                onClick={() => navigate(-1)}
                className="inline-block text-sm bg-green-600 text-white px-4 mt-3 py-2 rounded-full hover:bg-green-700 transition"
            >
                ← Back
            </Link>
            </div>
            

        </div>
        </>
    );
};

export default PlantDetails;