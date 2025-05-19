import React from 'react';
import img from '/1.jpeg'
const Slider1 = () => {
    return (
        <>
            <div
                className="hero min-h-[calc(100vh-100px)] rounded-3xl overflow-hidden "
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className='p-3.5 md:p-0'>
                    <div className="hero-content text-neutral-content text-center relative ">
                        <div className="w-11/12 md:w-9/12 ">

                            <h1 className="mb-5 text-2xl font-semibold md:text-4xl md:font-bold pt-1.5 md:pt-4">Essential Plant Care Tips for Thriving Houseplants</h1>
                            <p className="mb-5 md:w-md mx-auto">
                                Discover simple yet effective plant care tips to keep your indoor plants healthy and vibrant. Learn how to water, prune, and position your green friends for optimal growth.
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Slider1;