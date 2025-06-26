import React, { useEffect, useState } from 'react';
import BlogCard from '../Component/BlogCard/BlogCard';
// import BlogCard from '../components/BlogCard'; // assuming the card is built
// import your API fetch if needed

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    document.title = 'Plant Care | Blogs';

    // fetch from API
    fetch('http://localhost:3000/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-base-100 ">
      {/* Hero Section */}
      <div className="bg-green-50 py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-green-800">🌿 Plant Care Blog</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg italic">
          Discover expert tips, seasonal advice, and beginner guides to grow a happier, healthier indoor jungle.
        </p>
      </div>

      {/* Blog Grid */}
      <div className='bg-base-200 pb-3'>
        <div className="w-11/12 md:w-10/12  mx-auto pt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {
          blogs.length === 0
            ? <p className="text-center col-span-full text-gray-500 italic">Loading blogs...</p>
            : blogs.map(blog => <BlogCard key={blog.title} blog={blog} />)
        }
      </div>
      </div>
      
    </div>
  );
};

export default BlogPage;
