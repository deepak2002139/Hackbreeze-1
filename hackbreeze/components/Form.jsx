import React from 'react'

function Form() {
  return (
    <div className='relative h-screen w-screen'>

      <div className='h-[20px] font-medium w-[3500px] mt-[60px] ml-[170px]'>
        <h1 className='font-poppins text-[30px]'>Create new account</h1>
      </div>


      <div className='flex  mt-[20px] ml-[170px]'>
        <h4>Already a member?</h4>
        <h4><a href="#" className="text-[#7B2869] font-medium ml-[5px] hover:bg-gray-300">Log in</a></h4>
      </div>


      <div className=' ml-[180px] mt-[30px]'>
        <label className='font-medium '>
          Name
        </label>
        <div className='flex'>
        <div className='h-[60px] w-[180px] rounded-[15px] bg-[#FFEDED]'>
        <input className='h-[40px] w-[120px] ml-[40px] mt-[6px] bg-[#ffeded]' type='text' placeholder='First Name'/>
          
        </div>
        <div className='h-[60px] w-[180px] rounded-[15px] bg-[#FFEDED] ml-[30px]'>
        <input className='h-[40px] w-[120px] ml-[40px] mt-[6px] bg-[#ffeded]' type='text' placeholder='Last Name'/>

         </div>
       </div>
       



    <div className=' ml-[px] mt-[20px]'>
      <label className='font-medium '>
          Email ID
        </label>
        <div className='h-[60px] w-[390px] rounded-[15px] bg-[#FFEDED]'>
          <input className='h-[40px] w-[140px] ml-[40px] mt-[6px] bg-[#ffeded]' type='text' placeholder='Enter your email ID'/>
          
        </div>
    </div>




    <div className=' ml-[px] mt-[20px]'>
      <label className='font-medium '>
        Password
      </label>
      <div className='h-[60px] w-[390px] rounded-[15px] bg-[#FFEDED]'>
        <input className='h-[40px] w-[200px] ml-[40px] mt-[6px] bg-[#ffeded]' type='text' placeholder='Enter a  strong password'/>
       
      </div>
      </div>




      <div className=' ml-[px] mt-[20px]'>
      <label className='font-medium '>
        Upload image
      </label>
      <div className='h-[60px] w-[120px] rounded-[10px] bg-[#FFEDED]'>
            <button class="bg-#FFEDED hover:bg-#FFEDED text-black font-bold py-5 px-12 flex items-center">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
       
      </button>

      

      </div>
      </div>



      <div className=' ml-[80px] mt-[40px]'>
      
        <div className='h-[60px] w-[160px] rounded-[50px] bg-[#7B2869]'>
    
          <button class="bg- #7B2869 hover:bg-blue-#7B2869 text-white font-bold ml-[50px] mt-[15px] " type="submit">
          Create
        </button>
          
        </div>
      </div>



    </div>
    
      

    
        </div>
  )
}

export default Form