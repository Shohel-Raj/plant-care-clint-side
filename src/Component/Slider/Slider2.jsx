import React from 'react';
import img from '/2.jpeg'


const Slider2 = () => {
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

                            <h1 className="mb-5 text-2xl font-semibold md:text-4xl md:font-bold pt-1.5 md:pt-4">From Succulents to Ferns: A Guide to Popular Plant Varieties and Their Needs</h1>
                            <p className="mb-5 md:w-md mx-auto">
                            Dive into the world of plant varieties with this helpful guide. Understand the unique care requirements of different types—from sun-loving succulents to moisture-craving ferns.
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Slider2;