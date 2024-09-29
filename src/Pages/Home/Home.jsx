import React from 'react'
import ContactSec from '../Services/ContactSec'
import HomeService from './HomeService'
import WorkProcess from '../Services/WorkProcess'
import StatsFeature from '../About/StatFeaure'

import AboutFeature from '../About/AboutFeature'
import Swiper from './Swiper'
// import TeamHome from './TeamHome'
// import Feedback from '../Services/TopCategories'
import ProductMain from '../SabazShop/ProductMain'
import TopCategories from '../Services/TopCategories'
const Home = () => {
  return (
    <>
      <Swiper/> 
      <ContactSec/>
      <HomeService/>
       <StatsFeature/>
       <ProductMain/>
        {/* <TeamHome/> */}
      <WorkProcess/>
       <TopCategories/>
        <AboutFeature/>
    </>
  )
}

export default Home
