import React from 'react'

function Search() {
    return (
        <div className='flex flex-col w-100 h-150'>


            <div className='bg-[#FFEDED] rounded-[20px] h-[150px] w-80'>
                <div className='bg-[#D9D9D9] mt-[18px] h-[30px] w-[250px] rounded-full mx-[30px] ' >
                    <input className='ml-[30px] mx-[1px] bg-[#d9d9d9] h-[30px] w-[200px] focus:outline-none focus:shadow-outline text-gray-700 ' type="text" placeholder="Type here to search" />
                </div>

                <div className='flex'>
                    <button className="bg-white hover:bg-[#f5f5f5] text-[#7B2869] h-[30px] w-[85px]  px-4  ml-[57px] my-[20px] rounded-[10px] focus:outline-none focus:shadow-outline" type="button">
                        Events
                    </button>
                    <button className="bg-white hover:bg-[#f5f5f5] text-[#7B2869] h-[30px] w-[85px]  px-4  ml-[28px] my-[20px] rounded-[10px] focus:outline-none focus:shadow-outline" type="button">
                        Page
                    </button>
                </div>
                <div>

                <button className="bg-white hover:bg-[#f5f5f5] text-[#7B2869] h-[30px] w-[100px]  px-4  ml-[100px] my-[-20px] rounded-[10px] focus:outline-none focus:shadow-outline" type="button">
                        View All
                    </button>

                </div>



            </div>




        </div>
    )
}

export default Search
