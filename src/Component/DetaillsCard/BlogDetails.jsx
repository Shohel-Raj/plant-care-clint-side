import React from 'react';
import { useLoaderData, Link } from 'react-router';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const BlogDetails = () => {
  const blog = useLoaderData();
  const { title, description, author, date, thumbnail, category } = blog;

  return (
    <div className="bg-base-100 min-h-screen pb-10">
      <div className="w-11/12 md:w-8/12 mx-auto mt-10">
        <img
          src={thumbnail}
          alt={title}
          className="rounded-xl shadow-md w-full max-h-[400px] object-cover"
        />

        <div className="mt-6">
          <span className="text-xs uppercase text-green-600 font-semibold tracking-widest">{category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">{title}</h1>

          <div className="flex items-center text-sm text-gray-500 gap-5 mt-2">
            <span className="flex items-center gap-1">
              <FaUser />
              {author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt />
              {new Date(date).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
          {description}
        </div>

        <div className="mt-10">
          <Link
            to="/blog"
            className="inline-block text-sm bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
          >
            ← Back to Blog List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
