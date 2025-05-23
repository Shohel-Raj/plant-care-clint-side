import Aos from 'aos';
import React from 'react';
import { Link, useNavigate } from 'react-router';
import 'aos/dist/aos.css';

 Aos.init();

const NewPlantCard = ({ singlePlant }) => {

    const { _id,    plantName,   image, healthStatus,  category} = singlePlant;


    const naigation =useNavigate();


    const handleView =id =>{
        naigation(`/viewdetails/${id}`)
    }


    return (
        <>
            <div data-aos="fade-up-right" className="card border border-[#97f7b9] lg:card-side bg-base-100 dark:bg-white shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{plantName}</h2>
                    <p className='uppercase font-semibold'>Category : {category}.</p>
                    <p className='uppercase font-semibold'>Health Status : {healthStatus}.</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleView(_id)} className="btn rounded bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black">View Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewPlantCard;