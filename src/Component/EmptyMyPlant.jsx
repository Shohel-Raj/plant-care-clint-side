import Lottie from 'lottie-react';
import React from 'react';
import anim from '../../public/anim.json'
import { Link } from 'react-router';

const EmptyMyPlant = () => {

    const style = {
  height: 300,
};
    return (
        <>
            <section className="grid justify-center items-center">
                <div>
                    <Lottie animationData={anim} style={style} />
                </div>
                <h1 className='text-center mb-3 uppercase font-bold italic'>No plant Added Yet</h1>
                <Link className='btn' to='/addPlant'>Add Now!</Link>
            </section>
        </>
    );
};

export default EmptyMyPlant;