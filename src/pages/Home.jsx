import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-slate-500 w-[450px] overflow-hidden'>
      <div className='flex justify-between items-center w-full h-16 bg-red-500'>
        <h1 className='font-bold text-2xl p-2'>Notification</h1>
        <img className='p-2' src="./vite.svg" alt="igm" />
      </div>
      {/* <marquee behavior="scroll" direction="up" scrollamount="2" onMouseOver={(event)=>{console.dir(this)}}>
        <ul className='w-full bg-red-300'>
          <li className='font-bold text-white border-b-2 border-red-600'><Link to={"/"}>Hello</Link></li>
        </ul>
        <ul>
          <li>Gaurav</li>
        </ul>
        <ul>
          <li>Rathour</li>
        </ul>
      </marquee> */}
      <div className="marquee-container">
        <div className="marquee-content">
          <ul>
            <li>Gaurav</li>
            <li>Rathour</li>
          </ul>
          <ul>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
