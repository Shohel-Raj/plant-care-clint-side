import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'Plant Care | About Us';
  }, []);

  return (
    <div className="bg-base-100 min-h-screen pb-10">
      <div className="w-11/12 md:w-10/12 mx-auto mt-10 space-y-10">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Plant Care 🌱</h1>
          <p className=" mt-4 md:w-3/5 mx-auto italic">
            Helping you grow happier, healthier plants — one leaf at a time.
          </p>
        </div>

        {/* Who we are */}
        <div className="grid md:grid-cols-2 gap-8 items-center border border-[#97f7b9] shadow-xl rounded-2xl py-5 px-3">
          <div className='h-80'>
            <img

              src="https://i.postimg.cc/cHZ3Td16/pexels-shvetsa-5030010.jpg"
              alt="Plant team"
              className="rounded-2xl shadow-md w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold  mb-2">Who We Are</h2>
            <p className="leading-relaxed">
              Plant Care is a community-driven platform for houseplant lovers of all experience levels. We’re passionate about nature and the benefits of growing greenery indoors. Our goal is simple — make plant parenting easy, joyful, and rewarding.
            </p>
          </div>
        </div>

        {/* Mission section */}
        <div className="grid md:grid-cols-2 gap-8 items-center border border-[#97f7b9] shadow-xl rounded-2xl py-5 px-3">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold  mb-2">Our Mission</h2>
            <p className="leading-relaxed">
              We aim to educate, inspire, and support every plant parent with practical advice, seasonal tips, and a vibrant community. Whether you’re growing your first succulent or tending to a thriving indoor jungle — we’re here to help every step of the way.
            </p>
          </div>
          <div className="order-1 md:order-2 h-80">
            <img
              src="https://i.postimg.cc/t4bq3RHw/blog-thubnail_(7).jpg"
              alt="Plant mission"
              className="rounded-2xl shadow-md w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Vision or CTA */}
        <div className="text-center pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-2">Let’s Grow Together 🌿</h2>
          <p className=" max-w-xl mx-auto">
            Join our growing community and turn your space into a green sanctuary. From soil to sunlight — we’ve got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
