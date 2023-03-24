import React from 'react'

 const EventCards = (props) => {
  return (
    <div className='card bg-white w-[330px] h-[80px] rounded-md' >
      <div className='flex'>
        <div>
          <h6 className='card-title font-poppins text-black text-xs mt-1 ml-2 font-bold'>{props.title} </h6>
        </div>
        <div className='card-calender-svg'>
          {/* //for the time logo */}
        </div>
        <div>
          <p className='card-date-time font-poppins text-gray-800 text-[7px] mt-2 ml-14 font-bold text-opacity-70'>{props.date} {props.time}</p>
        </div>
      </div>
      <div>
        <p className='card-description font-poppins text-black text-[7px] m-2 font-bold'>
            {props.description}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud... */}
        </p>
      </div>

    </div>
  )
}

export default EventCards