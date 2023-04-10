import React from 'react'
import Friends from '../components/Home/Friends'
import UpcomingEvents from '../components/Home/UpcomingEvents'
import Search from '../components/Home/Search'
import LeaderBoard from '../components/Home/LeaderBoard'
import { DarkModeProvider } from './DarkModeContext'
import DarkModeButton from './darkmodebutton'

const HomePage = () => {
  return (
    
    <div className='relative fixed inset-0 h-screen w-screen bg-white'>
    <div className='flex ml-[250px] mr-[216px] pt-[100px]'>
    <div className='font-poppins text-[80px] font-medium font-weight-500 '>
        <h1>WELCOME</h1>
    </div>
    <div className='font-poppins text-[80px]  font-weight-400 ml-[15px] '>
        <h1>to</h1>
    </div> 
    <div className='font-poppins text-[80px] text-[#7B2869] font-semibold font-weight-500 ml-[15px] '>
        <h1>HackBreeze</h1>
    </div>
    <div className='font-poppins text-[80px]  font-semibold font-weight-500 ml-[10px] '>
        <h1>!</h1>
    </div>
    </div>
    <div className=' mt-[10px] ml-[250px]'>
       <div className='w-[550px] h-[30px]'>
        <p className='text-[25px] font-light font-poppins '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        </div>
        <div className='ml-[700px] mt-[-20px]'>
            <Friends/>
        </div>
    </div>
    <div className='flex ml-[160px] mt-[80px]'>
    <div>
        <UpcomingEvents/>
    </div>
    <div className='flex ml-[120px]'>
        <Search/>
        <div>
            {/* //for the svg */}
        </div>
    </div>
    <div className='ml-[90px]'>
        <LeaderBoard/>
    </div>
    </div>
</div>


  )
}

export default HomePage