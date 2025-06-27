import React, { useEffect } from 'react';
import Login from '../Component/LoginSignIn/Login';
import {
  Leaf,
  Flower,
  Sun,
  CloudRain,
  Droplet,
  Sprout,
  Bug,
} from 'lucide-react';
import { Outlet } from 'react-router';

const AnimatedIcon = ({ children, style, size = 40 }) => (
  <div
    className="absolute animate-float-slow opacity-10"
    style={style}
  >
    {React.cloneElement(children, { size })}
  </div>
);

const LoginSignIn = () => {
  useEffect(() => {
    document.title = `Plant Care | Login`;
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-100 via-green-200 to-green-300 flex items-center justify-center px-4">
      {/* 🌿 Animated Background Icons */}
      <AnimatedIcon style={{ top: '8%', left: '5%' }}>
        <Leaf className="text-green-600" />
      </AnimatedIcon>
      <AnimatedIcon style={{ top: '20%', right: '8%' }}>
        <Flower className="text-pink-500" />
      </AnimatedIcon>
      <AnimatedIcon style={{ top: '45%', left: '12%' }}>
        <Sun className="text-yellow-400" />
      </AnimatedIcon>
      <AnimatedIcon style={{ bottom: '18%', right: '10%' }}>
        <Droplet className="text-blue-400" />
      </AnimatedIcon>
      <AnimatedIcon style={{ bottom: '8%', left: '15%' }}>
        <Sprout className="text-green-800" />
      </AnimatedIcon>
      <AnimatedIcon style={{ top: '65%', right: '20%' }}>
        <CloudRain className="text-blue-300" />
      </AnimatedIcon>
      <AnimatedIcon style={{ top: '30%', left: '45%' }} size={35}>
        <Bug className="text-orange-500" />
      </AnimatedIcon>

      {/* 🔐 Login Card */}
      <div className="z-10 bg-white bg-opacity-95 shadow-2xl rounded-2xl max-w-md w-full p-8 backdrop-blur">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Welcome to PlantsCare</h1>
        {/* <Login /> */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LoginSignIn;
