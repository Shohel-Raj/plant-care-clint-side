import React, { useEffect } from 'react';
import Slider from '../Component/Slider/Slider';
import NewPlantCard from '../Component/NewPlant/NewPlantCard';
import CommonCare from '../Component/CommonMistake/CommonCare';
import BeginnerFriendly from '../Component/Friendly/BeginnerFriendly';
import { useLoaderData } from 'react-router';

import 'aos/dist/aos.css';
import Aos from 'aos';

const Home = () => {
    useEffect(() => {
        document.title = 'Plant Care | Home';
        Aos.init({ duration: 1000 });
    }, []);

    const plantData = useLoaderData();

    return (
        <>
            <section className='rounded-3xl pb-3'>
                <Slider />
            </section>

            <section className='bg-base-200 pb-3'>
                <div className='w-11/12 md:w-10/12 mx-auto md:pt-5 pt-3 pb-5 '>
                    <h1 className='font-bold text-2xl'>Discover New Green Companions</h1>
                    <p className='md:w-2/5 italic mt-3'>
                        Scroll, swoon, and say hello to plants with personality — because your next green BFF might just be a fiddle-leaf fig.
                    </p>
                </div>

                <div className='w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-3'>
                    {plantData.length ? (
                        plantData.map(singlePlant => (
                            <NewPlantCard
                                key={singlePlant._id}
                                singlePlant={singlePlant}
                                dataAos="zoom-out-up"
                            />
                        ))
                    ) : (
                        <p className="text-center col-span-full">No plants available at the moment.</p>
                    )}
                </div>
            </section>

            <section className='pb-3'>
                <CommonCare />
            </section>

            <section className='bg-base-200 pb-3'>
                <BeginnerFriendly />
            </section>
        </>
    );
};

export default Home;
