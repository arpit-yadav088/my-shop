import Logo from "../assets/logo.png"
import { IoSearchCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaCartArrowDown } from "react-icons/fa6";
import { useContext, useState } from "react";
import { userDataContext } from "../context/UserContext";
import {useNavigate} from "react-router-dom";
import { authDataContext } from "../context/AuthContext";
import axios from 'axios';
import { MdHome } from "react-icons/md";
import { BsCollection } from "react-icons/bs";
import { MdContacts } from "react-icons/md";



const Nav = () => {
  let {getCurrentUser , userData} =  useContext(userDataContext);
  let {serverUrl} = useContext(authDataContext)
  let [showSearch, setShowSearch] = useState(false);
  let [showProfile, setShowProfile] = useState(false);
  let navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {withCredentials: true})
      console.log(result.data)
      getCurrentUser()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">

      <div className="w-[22%] lg:w-[30%] flex items-center justify-start gap-[19px]">
        <img src={Logo} alt="" className="w-[30px]" />
        <h1 className="text-[25px] text-black font-sans ">ShopCart</h1>
      </div>

      <div className="w-[50%] lg:w-[40%] hidden md:flex">
        <ul className="flex items-center justify-center gap-[19px] text-[white]">
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-amber-950 py-[10px] px-[20px] rounded-2xl">HOME</li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-amber-950 py-[10px] px-[20px] rounded-2xl">COLLECTION</li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-amber-950 py-[10px] px-[20px] rounded-2xl">ABOUT</li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-amber-950 py-[10px] px-[20px] rounded-2xl">CONTACT</li>
        </ul>
      </div>

      <div className="w-[30%] flex items-center justify-end gap-[20px]">
        <IoSearchCircleOutline className="w-[38px] h-[38px] text-[#000000] cursor-pointer" onClick={()=> setShowSearch(prev=>!prev)}/>

        {!userData && <CgProfile className="w-[29px] h-[29px] text-[#000000] cursor-pointer"
        onClick={()=>setShowProfile(prev=>!prev)}
        />}
        {userData && <div className="w-[35px] h-[35px] bg-[#000000] text-[white] rounded-full flex items-center justify-center cursor-pointer" onClick={()=>setShowProfile(prev=>!prev)}>{userData?.name?.slice(0,1).toUpperCase()}</div>}

            {/* {!userData ? (
  <CgProfile className="w-[29px] h-[29px] text-black cursor-pointer" />
) : (
  <div className="w-[35px] h-[35px] bg-black text-white rounded-full flex items-center justify-center font-bold cursor-pointer">
    {userData?.name?.slice(0,1).toUpperCase()}
  </div>
)} */}
        
        <FaCartArrowDown className="w-[30px] h-[30px] text-[#000000] cursor-pointer hidden md:block"/>
        <p className="absolute w-[18px] h-[18px] items-center justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[23px] hidden md:block">10</p>
      </div>

      {showSearch && <div className="w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 flex items-center justify-center">
        <input 
        type="text" 
        className="w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] 
        placeholder:text-white text-[white] text-[18px]
        " placeholder='search here'/>
      </div>}

      {showProfile && <div className="absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10">
        <ul>
          {!userData && <li className="w-[100%] text-white hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
          onClick={()=>{
            navigate("/login");setShowProfile(false)
          }}
          >Login</li>}
          {userData && <li className="w-[100%] text-white hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
          onClick={()=>{handleLogout();setShowProfile(false)}}>Logout</li>}
          <li className="w-[100%] text-white hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">Orders</li>
          <li className="w-[100%] text-white hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">About</li>
        </ul>
      </div>}

      <div className="w-[100vw] h-[90px] flex items-center justify-center fixed px-[20px] fixed bottom-0 left-0 bg-[#191818]  gap-[20px] md:hidden">
        <button className="text-[white] flex items-center justify-center flex-col gap-[2px]">
          <MdHome className="w-[30px] h-[30px] text-[white] md:hidden " />
          Home
        </button>

        <button className="text-[white] flex items-center justify-center flex-col gap-[2px]">
          <BsCollection className="w-[30px] h-[30px] text-[white] md:hidden" />
          Collection
        </button>

        <button className="text-[white] flex items-center justify-center flex-col gap-[2px]">
          <MdContacts className="w-[30px] h-[30px] text-[white] md:hidden" />
          Contacts
        </button>

        <button className="text-[white] flex items-center justify-center flex-col gap-[2px]">
          <FaCartArrowDown className="w-[30px] h-[30px] text-[white] md:hidden" />
          Cart
        </button>

      </div>
    </div>
  )
}

export default Nav