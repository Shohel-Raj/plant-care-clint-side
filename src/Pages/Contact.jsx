import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import contactAnimation from '../assets/contact-plant.json';

const Contact = () => {
  useEffect(() => {
    document.title = 'Plant Care | Contact Us';
  }, []);

  return (
    <div className="bg-base-100 min-h-screen py-10">
      <div className="w-11/12 md:w-10/12 mx-auto space-y-10">

        {/* Header Section - Like About Us */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold ">Contact Us 🌿</h1>
          <p className=" mt-4 md:w-3/5 mx-auto italic">
            We’d love to hear from you — send us your questions, feedback, or plant stories!
          </p>
        </div>

        {/* Main Section: Form + Animation */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Animation */}
          <div className="hidden md:block">
            <Lottie
              animationData={contactAnimation}
              loop
              autoplay
              className="w-full h-[400px]"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 w-full">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Get in Touch</h2>

            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-semibold text-sm text-gray-600">Name</label>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full rounded-md" required />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-sm text-gray-600">Email</label>
                <input type="email" placeholder="Your Email" className="input input-bordered w-full rounded-md" required />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-sm text-gray-600">Message</label>
                <textarea className="textarea textarea-bordered w-full rounded-md" placeholder="Your Message..." rows="4" required></textarea>
              </div>

              <button type="submit" className="btn bg-green-600 text-white rounded-full hover:bg-green-700 px-6">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
