import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

const Slidebar = () => {
  let navigate = useNavigate()
  return (
    <div className="w-[250px] h-[calc(100vh-70px)] bg-[#0f172a] text-white">
      <div className='flex flex-col gap-4 pt-[40px] pl-[20%] text-[15px]'>

        <div className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 py-2 px-3 cursor-pointer hover:bg-[#2c7b89]' onClick={()=>navigate('/add')}>
          <IoMdAddCircleOutline className='w-[20px] h-[20px]'/>
          <p className='hidden md:block'>Add items</p>
        </div>

        <div className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 py-2 px-3 cursor-pointer hover:bg-[#2c7b89]'
        onClick={()=>navigate('/lists')}>
          <FaListUl className='w-[20px] h-[20px]'/>
          <p className='hidden md:block'>List items</p>
        </div>

        <div className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 py-2  px-3 cursor-pointer hover:bg-[#2c7b89]'
        onClick={()=>navigate('/orders')}
        >
          <SiTicktick className='w-[20px] h-[20px]'/>
          <p className='hidden md:block'>Orders</p>
        </div>
      </div>
    </div>
  )
}

export default Slidebar
