import React from 'react';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import Categories from '../components/Categories';
import TopProducts from '../components/TopProducts';


function Home() {
  return (
    <>
      <Navbar />
      <Featured />
      <Categories/>
      <TopProducts/>
    </>
  )
}

export default Home
