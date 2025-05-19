import React from 'react';
import img from '/3.jpeg'

const Slider3 = () => {
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

                            <h1 className="mb-5 text-2xl font-semibold md:text-4xl md:font-bold pt-1.5 md:pt-4">Top 10 Easy-to-Grow Plant Varieties for Beginners</h1>
                            <p className="mb-5 md:w-md mx-auto">
                            New to plant parenting? Explore ten low-maintenance plant varieties perfect for beginners. These hardy plants are forgiving and beautiful, making them ideal for any home or office.
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Slider3;