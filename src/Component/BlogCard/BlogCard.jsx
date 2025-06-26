import React from 'react';
import { FaCalendarAlt, FaEye } from 'react-icons/fa';
import './BlogCard.css'; // custom styles (defined below)
import { Link } from 'react-router';

import 'aos/dist/aos.css';
import Aos from 'aos';

 Aos.init();

const BlogCard = ({ blog }) => {
  const { title, description, date, thumbnail,category ,_id} = blog;

  return (
    <div data-aos="zoom-in-left" className="blog-card shadow-md rounded-2xl bg-white text-black overflow-hidden flex flex-col justify-between transition hover:shadow-xl">
      <div className="p-4 space-y-3">
        <h2 className="text-lg font-semibold leading-snug">{title}</h2>

        <div className="flex items-center text-xs text-gray-500 gap-4">
          <div className="flex items-center gap-1">
            <FaCalendarAlt className="text-sm" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">

            <div className='badge badge-outline badge-primary'>{category}</div>
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>

      <div className="relative w-full h-48 overflow-hidden rounded-b-2xl">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Link to={`/viewBlogDetails/${_id}`} className="read-button cursor-pointer">
          Read Article →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
