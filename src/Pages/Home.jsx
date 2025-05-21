import React, { useEffect } from 'react';
import Slider from '../Component/Slider/Slider';
import NewPlantCard from '../Component/NewPlant/NewPlantCard';
import CommonCare from '../Component/CommonMistake/CommonCare';
import BeginnerFriendly from '../Component/Friendly/BeginnerFriendly';


const Home = () => {
     useEffect(()=>{
        document.title=`Plant Care | Home`
    },[])

    return (
        <>
            <div className='my-7'>
                <Slider></Slider>
            </div>
            <div className='bg-base-200 py-1.5'>
                <div className='w-11/12 md:w-10/12 mx-auto md:mt-5'>
                    <h1 className='font-bold text-2xl'>Discover New Green Companions</h1>
                    <p className='md:w-2/5 italic mt-3'>Scroll, swoon, and say hello to plants with personality — because your next green BFF might just be a fiddle-leaf fig.</p>
                </div>
                <div className='my-7 w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3'>

                    <NewPlantCard></NewPlantCard>
                    <NewPlantCard></NewPlantCard>
                    <NewPlantCard></NewPlantCard>
                </div>


            </div>
            <div className='my-7'>
                <CommonCare></CommonCare>
            </div>
            <div className='bg-base-200 py-1.5'>
                    <BeginnerFriendly></BeginnerFriendly>
            </div>


        </>
    );
};

export default Home;