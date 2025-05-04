import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';
import Banner from '../components/Banner';
import Patient from '../components/Patient';


const Home = () => {
  return (
    <div>
     <Header/>
     <SpecialityMenu/>
     <TopDoctors/>
     <Banner/>
     <Patient/>
     
   
    </div>
  )
}

export default Home;
