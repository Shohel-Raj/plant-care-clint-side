import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import ViewCard from '../Component/DetaillsCard/ViewCard';

const ViewDetails = () => {
    const data = useLoaderData()
    useEffect(()=>{
                document.title=`Plant Care | Details`
            },[])

    return (
        <>
            <div className='w-11/12 md:w-10/12 mx-auto my-5'>
                <div className=' md:mt-5 mt-3 mb-5'>
                    <h1 className='font-bold text-2xl'>Discover What Makes This Plant Thrive</h1>
                    <p className='md:w-4/5 italic mt-3'>Every plant has its own needs and quirks. Get to know the specific care tips, common issues, and ideal conditions to keep this plant healthy, lush, and flourishing in your space.</p>

                </div>


                <ViewCard data={data}></ViewCard>


            </div>
        </>
    );
};

export default ViewDetails;