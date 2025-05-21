import React from 'react';

const BeginnerFriendly = () => {
    return (
        <>
            <div className='w-11/12 md:w-10/12 mx-auto py-10'>
                <div className=' md:mt-5 mt-3 mb-5'>
                    <h1 className='font-bold text-2xl'>Start your plant journey with confidence.</h1>
                    <p className='md:w-3/5 italic mt-3'>Perfect for beginners, these low-maintenance plants are easy to care for and thrive in almost any space. A great way to grow your confidence—and your greenery!</p>
                </div>


                    <div className="grid grid-rows-1 md:grid-cols-5  shadow-xl rounded-2xl py-5 px-3 gap-6 ">

                        <div className='md:col-span-3'>
                            <h1 className='font-bold text-2xl mb-4'>🌿 Beginner-Friendly Plants:</h1>

                            <ul className="list-none space-y-2 italic grid md:grid-cols-2 ">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✅</span>
                                    Snake Plant – thrives in low light and needs little water.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✅</span>
                                    Pothos – fast-growing, forgiving, and perfect for hanging baskets.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✅</span>
                                    ZZ Plant – tolerates low light and infrequent watering.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✅</span>
                                    Spider Plant – easy to grow and great for air purification.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✅</span>
                                    Peace Lily – thrives in shade and shows when it needs water.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✅</span>
                                    Aloe Vera – loves bright light and doesn’t need frequent watering.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✅</span>
                                    Chinese Evergreen – adaptable and low-maintenance with colorful leaves.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✅</span>
                                    Cast Iron Plant – handles low light and neglect well.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✅</span>
                                    Jade Plant – a hardy succulent that requires minimal care.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✅</span>
                                    Dracaena – a stylish, slow-growing plant that thrives indoors.
                                </li>
                            </ul>


                        </div>

                        <div className="bg-[url('../friendly.jpeg')] min-h-56 bg-center col-span-2  bg-cover rounded-2xl">

                        </div>

                    </div>






            </div>
        </>
    );
};

export default BeginnerFriendly;