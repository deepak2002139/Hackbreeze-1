import React,{useState} from 'react'
import LeaderboardCard from './LeaderboardCard'

const LeaderBoard=()=> {

const [show1,setShow1]=useState(false)
const [show2,setShow2]=useState(false)
    const data1=[
        {
            id:1,
            name:'Event-1',
            img:'./img1.jpg'
            
    
        },
        {
            id:2,
            name:'Event-1',
            img:'./img1.jpg'
            
    
        },
        {
            id:3,
            name:'Event-1',
            img:'./img1.jpg'
            
    
        },
        {
            id:4,
            name:'Event-1',
            img:'./img1.jpg'
            
    
        },
        {
            id:5,
            name:'Event-1',
            img:'./img1.jpg'
            
    
        },
        {
            id:6,
            name:'Event-1',
            img:'./img1.jpg'
            
    
        }
      ]

      const data2=[
        {
            id:1,
            name:'Aviraj',
            img:'./img1.jpg'
            
    
        },
        {
            id:2,
            name:'Aviraj',
            img:'./img1.jpg'
            
    
        },
        {
            id:3,
            name:'Aviraj',
            img:'./img1.jpg'
            
    
        },
        {
            id:4,
            name:'Aviraj',
            img:'./img1.jpg'
            
    
        },
        {
            id:5,
            name:'Aviraj',
            img:'./img1.jpg'
            
    
        },
        {
            id:6,
            name:'Aviraj',
            img:'./img1.jpg'
            
    
        }
      ]
    // const data=props.data



    
    const listitem1 = data1.map((item)=>{
        return (
            <LeaderboardCard
            id={item.id}
            name={item.name}
            img={item.img}
            />

        );

        

    }
    
    );

    const listitem2 = data2.map((item)=>{
        return (
            <LeaderboardCard
            id={item.id}
            name={item.name}
            img={item.img}
            />

        );

        

    }
    
    );

    const ShowList1=()=>{
        // if(show1==true){
        //     setShow1(false)
        // }
        // else{
        //     setShow1(true)
        // }
        setShow1(true)
        setShow2(false)
    }

    const ShowList2=()=>{
        // if(show2==true){
        //     setShow2(false)
        // }
        // else{
        //     setShow2(true)
        // }
        setShow2(true)
        
    }

  return (
    <div className='flex flex-col w-[270px] h-100'>
            <div className='flex bg-[#7B2869] rounded-tl-[30px] rounded-tr-[30px] h-[50px] w-[270px]'>
                <h2 className='font-poppins text-white  text-[20px] font-bold px-[70px] py-[8px]'>Leaderboard</h2>
            </div>
            <div className=' bg-[#DFDFDF42]  h-[50px] w-[270px]'>
                <button id='button1_leaderboard' className='focus:outline-none bg-white hover:bg-gray-100  focus:bg-[#FFEDED] active:bg-[#FFEDED] border-2 rounded-tl-md rounded-tr-md h-[30px] w-[85px] mt-[20px] mx-[27px]' onClick={ShowList1} >
                  Monthly
                </button>
                        
                <button id='button2_leaderboard' className='focus:outline-none bg-white hover:bg-gray-100 focus:outline-none focus:bg-[#FFEDED] active:bg-[#FFEDED] border-2 rounded-tl-md rounded-tr-md h-[30px] w-[85px] mt-[20px] mx-[4px] ' onClick={ShowList2}>
                        Weekly
                </button>

                
               
            </div>
            <div className=' flex-col justify-center pl-[px]  bg-white rounded-bl-[30px] rounded-br-[30px] rounded-br-md h-[310px] w-[270px] space-y-1 overflow-x-auto'>
            {show2 ? (listitem2):(listitem1)}
                
            </div>


        </div>
  )
}
export default LeaderBoard