import React from 'react';


const CommonCare = () => {

    return (
        <>
            <div  className='w-11/12 md:w-10/12 mx-auto'>
                <div className=' md:mt-5 mt-3 mb-5'>
                    <h1 className='font-bold text-2xl'>Healthy Plants Start with Smart Habits</h1>
                    <p className='md:w-4/5 italic mt-3'>Whether you're a beginner or a seasoned plant parent, even small mistakes can lead to big problems. Learn the most common plant care pitfalls—and how to avoid them—to help your green friends grow strong, vibrant, and happy.</p>
                </div>


                <div data-aos="flip-down" className="grid grid-rows-1 md:grid-cols-5 shadow-xl  rounded-2xl py-5 px-3 gap-6 ">
                    <div className="bg-[url('../mistake.jpeg')] md:col-span-2 min-h-56 bg-center  bg-cover rounded-2xl">

                    </div>
                    <div className='md:col-span-3'>
                        <h1 className='font-bold text-2xl mb-4'>🌱 Top Plant Care Mistakes :</h1>
                        <ul className="list-none space-y-2 italic grid md:grid-cols-2 ">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">❌</span>
                                Overwatering – causes root rot and suffocation.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">❌</span>
                                Underwatering – leads to wilting and dry leaves.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">❌</span>
                                Wrong lighting – too much or too little stunts growth.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">❌</span>
                                No drainage – water gets trapped, causing rot.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">❌</span>
                                Wrong soil – lacks nutrients or drains poorly.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">❌</span>
                                Low humidity – browns tips on tropical plants.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">❌</span>
                                Skipping repotting – leads to root-bound stress.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">❌</span>
                                Ignoring pests – can spread fast and kill the plant.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">❌</span>
                                Over/under fertilizing – burns roots or slows growth.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">❌</span>
                                Not researching your plant’s specific needs.
                            </li>
                        </ul>
                    </div>
                </div>



            </div>


        </>
    );
};

export default CommonCare;