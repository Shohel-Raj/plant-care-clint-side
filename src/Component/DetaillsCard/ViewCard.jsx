import React from 'react';

const ViewCard = ({ data }) => {








    const { _id, wateringFrequency, userName, userEmail, plantName, nextWateringDate, lastWateredDate, image, healthStatus, description, category, careLevel } = data;
    return (
        <div>
            <div  className="grid grid-rows-1 md:grid-cols-3 shadow-xl rounded-2xl py-5 px-3 gap-6 ">
                <div className='rounded-2xl'>
                    <img className='w-[400px] rounded-2xl' src={image} alt="" />
                </div>
                <div className='col-span-2'>
                    <h1 className='font-bold text-2xl mb-4 uppercase italic'>🌱 details of {plantName} :</h1>
                    <div>

                        <div className='space-y-3'>
                            <h4 className='flex gap-1.5'>Name : <p>{plantName}</p></h4>
                            <h4 className='flex gap-1.5'>Category : <p>{category}</p></h4>
                            <h4 className='flex gap-1.5'>Health Status : <p>{healthStatus}</p></h4>
                            <h4 className='flex gap-1.5'>Care Lever : <p>{careLevel}</p></h4>
                            <h4 className='flex gap-1.5'>Watering Frequency : <p>{wateringFrequency}</p></h4>
                            <h4 className='flex gap-1.5'>Last Watering Date : <p>{lastWateredDate}</p></h4>
                            <h4 className='flex gap-1.5'>Next Watering Date : <p>{nextWateringDate}</p></h4>
                            <h4 className='flex gap-1.5'>Details : <p>{description}</p></h4>
                        </div>
                        <div className='space-y-2 mt-2.5'>
                            <h1 className='text-gray-400'>Added by : <small className='italic'> {userName} </small></h1>
                            <h1 className='text-gray-400'>Email : <small className='italic'> {userEmail} </small></h1>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCard;