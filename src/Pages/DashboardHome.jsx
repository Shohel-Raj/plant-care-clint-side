// components/DashboardHome.jsx
import React, { use, useEffect, useState } from 'react';
// import { Users, DollarSign, MessageCircle } from 'lucide-react';
import StatsCard from '../Component/StatasCard/StatsCard';
import { FaLeaf } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { Leaf, MessageCircle, NotebookPen } from 'lucide-react';
import { toast } from 'react-toastify';
import Loader from '../Component/Loader/LOader';
import { AuthContext } from '../Contexts/AuthContext';
import CategoryChart from '../Component/CategoryChart/CategoryChart';
import BlogCategoryChart from '../Component/BlogCategoryChart/BlogCategoryChart.jsx';



const DashboardHome = () => {

  const { user, } = use(AuthContext);

  const [stats, setStats] = useState({
    plants: 0,
    questions: 0,
    blogs: 0,
    growth: {
      plants: '0%',
      questions: '0%',
      blogs: '0%',
    }
  });
  const [myStats, setMyStats] = useState({
    plants: 0,
    questions: 0,
    blogs: 0,
    growth: {
      plants: '0%',
      questions: '0%',
      blogs: '0%',
    }
  });
  const [isDataavail, setIsDataAvail] = useState(true)
  const [categoryData, setCategoryData] = useState([]);
  const [blogData, setBlogData] = useState([]);



  useEffect(() => {
    // Simulate fetching from backend
    const fetchStats = async () => {
      setIsDataAvail(true)
      fetch('https://update-plant-care.vercel.app/stats')
        .then(res => res.json())
        .then(data => {
          setStats(data)
          setIsDataAvail(false)
        })
        .catch(err => {
          setIsDataAvail(false)
          toast.error('Failed to load stats:', err)
        });
    };
    fetch(`https://update-plant-care.vercel.app/stats?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyStats(data))
      .catch((err) => console.error('Failed to load user stats', err));

    fetch('https://update-plant-care.vercel.app/category-count')
      .then((res) => res.json())
      .then((data) => setCategoryData(data));

     fetch('https://update-plant-care.vercel.app/blog-category-count')
      .then(res => res.json())
      .then(data => setBlogData(data));

    fetchStats();
  }, [user]);

  if (isDataavail) {
    return <Loader />
  }

  return (
    <>
      <div className='md:px-7 px-2'>
        <div className="text-center mt-10 pb-5">
          <h1 className="text-3xl font-bold text-black">Welcome to the Dashboard</h1>
          <p className="mt-2">Select an option from the sidebar to get started.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-5">
          <StatsCard title="Total Plants" value={stats.plants} icon={Leaf} growth={stats.growth.plants} />
          <StatsCard title="Total Questions" value={stats.questions} icon={MessageCircle} growth={stats.growth.questions} />
          <StatsCard title="Total Blogs" value={stats.blogs} icon={NotebookPen} growth={stats.growth.blogs} />
          <StatsCard title="My Plants" value={myStats.plants} icon={Leaf} growth={myStats.growth.plants} />
        </div>
      </div>

      <div className='grid grid-cols-1 px-2 md:px-7 gap-4 md:grid-cols-2'>
        {/* left side */}
        <div >
           <CategoryChart data={categoryData} />
        </div>

        {/* right side */}
        <div>
          <BlogCategoryChart data={blogData} />
        </div>

      </div>
    </>

  );
};

export default DashboardHome;
