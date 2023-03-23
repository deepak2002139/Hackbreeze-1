import React from 'react'

const Friends = () => {
    return (
        <div className='flex flex-col w-80 h-100'>
            <div className='bg-[#7B2869] rounded-tl-[30px] rounded-tr-[30px] h-10 w-80'>
                <h2 className='font-poppins text-xl text-white font-bold px-[120px] py-[6px]'>Friends</h2>
            </div>
            <div className='bg-[#FFEDED] rounded-bl-md rounded-br-md h-[100px] w-80'>
                <div className='relative flex pt-[20px] px-[20px]'>
                    <img src='image1.jpg' className='absolute rounded-full border-2 border-black h-12 w-12'></img>
                    <img src='image2.jpg' className='absolute rounded-full border-2 border-black h-12 w-12 ml-[29px]'></img>
                    <img src='image3.jpg' className='absolute rounded-full border-2 border-black h-12 w-12 ml-[58px]'></img>
                    <img src='image4.jpg' className='absolute rounded-full border-2 border-black h-12 w-12 ml-[87px]'></img>
                    <img src='image3.jpg' className='absolute rounded-full border-2 border-black h-12 w-12 ml-[116px]'></img>

                </div>

            </div>

        </div>
    )
}

export default Friends