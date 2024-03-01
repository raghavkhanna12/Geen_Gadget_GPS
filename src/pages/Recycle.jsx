import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import $ from 'jquery';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import dustbin from '../assets/Images/last.png'
export default function Recycle() {
  const [deviceWeight, setDeviceWeight] = useState('');
  // const [result, setResult] = useState(null);

  const generateScore = () => {
    console.log($("#weight").val())
    setWeight($("#weight").val())
    axios({
      method: 'post',
      url: 'http://localhost:3001/mobile',
      data: {
        weight: deviceWeight
      }
    });
  }
  return (
    <div className=''>
      <Navbar />
      <div className='p-8 grid grid-cols-2 max-lg:grid-cols-1 font-montserrat ml-40 max-lg:ml-0'>
        <div>
          <p className='text-6xl font-semibold grid grid-row-3 mb-8'>Waste to Wealth</p>
          <p className='text-[1.2rem]'>Join the E-waste recycling movement and accumulate credit points as you responsibly dispose of electronics, boosting sustainability efforts.</p>
          <div>
            <iframe src='http://127.0.0.1:5000/' className='min-h-screen  w-full'></iframe>
          </div>
        </div>
        <div>
          <img src={dustbin} />
        </div>
      </div>
    </div>
  )
}
