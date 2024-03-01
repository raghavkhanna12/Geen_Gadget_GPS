import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import locateImage from '../assets/Images/locate.png'
import locationData from '../../api/output.json'
import NewsCard from '../components/NewsCard'
import Footer from '../components/Footer'

export default function Locator() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  function getCurrentLocation() {
    var latitude;
    var longitude;
    navigator.geolocation.getCurrentPosition(function (position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log("Latitude : ", latitude, "Longitude : ", longitude);
      setLat(latitude);
      setLong(longitude);
    });

    axios({
      method: 'post',
      url: 'http://localhost:3001',
      data: {
        lat: latitude,
        long: longitude
      }
    });
    console.log(locationData[1].Address)
  }

  return (
    <div className='scroll-smooth'>
      <Navbar />
      <div className='p-8 ml-24 max-lg:ml-0 grid grid-cols-2 max-lg:grid-cols-1 font-montserrat min-h-screen'>
        <div>
          <p className='text-6xl font-semibold grid grid-row-3 mb-16 mt-20'>Locate Recycling Facility</p>
          <p className='text-[1.2rem]'>Simplify your quest to locate the closest E-Waste recycling facility. Begin your eco-conscious journey effortlessly by discovering convenient and responsible disposal options in your immediate <span className='block'>area.</span></p>
          <Link to="/locator"><button className='bg-[#014558] text-white rounded-md font-bold text-xl px-8 py-4 mt-20' onClick={getCurrentLocation}><a href="#locate">Facilities Near Me</a></button></Link>
        </div>
        <img src={locateImage} className=' max-lg:mt-8 max-lg:mx-auto mt-20' />
      </div>
      <div className='bg-[#A8D27C] rounded-t-xl' id="locate">
      <div className=' ml-24 mr-24 max-lg:0'>
        <div className='grid grid-cols-2 max-lg:grid-cols-1 p-8'>
          <iframe src='api\index.html' width={470} height={470} className='border-2 border-black'></iframe>
          <div className=''>
            <div className='grid grid-row-4 gap-3 p-10 bg-[#014558] text-white'>
              <ul className=''>
                <li className='px-4 py-4 my-1'>1. {locationData[0].Address}</li>
                <li className='px-4 py-4 my-1'>2. {locationData[1].Address}</li>
                <li className='px-4 py-4 my-1'>3. {locationData[2].Address}</li>
                <li className='px-4 py-4 my-1'>4. {locationData[3].Address}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
