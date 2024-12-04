import React from 'react';
import Home from '../pages/Home'
import Footer from '../components/Footer'

const HomeLayout = () => {
  return (
    <div>
      <Home/>

    <div className='min-h-[calc(100vh-232px)]'>

    </div>
    <Footer/>
    </div>
  );
};

export default HomeLayout;