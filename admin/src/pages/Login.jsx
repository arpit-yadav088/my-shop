import { useContext, useState } from "react";
import logo from "../assets/logo.png"
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import axios from "axios"
import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
   const [show, setShow] = useState(false);
   let {serverUrl} = useContext(authDataContext)
   let {adminData , getAdmin} = useContext(adminDataContext)
   let navigate = useNavigate()

  const AdminLogin = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post(serverUrl + "/api/auth/adminlogin",{email, password},
        {withCredentials:true})
        console.log(result.data)
        getAdmin()
        navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
        <div className="w-screen h-screen overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center">
    
          {/* Navbar */}
          <div
            className="w-full h-[70px] flex items-center px-[30px] gap-[10px] cursor-pointer"
          >
            <img className="w-9" src={logo} alt="logo" />
    
            <h1 className="text-[20px] font-semibold">
              Shop Cart
            </h1>
          </div>
    
          {/* Heading */}
          <div className="flex flex-col items-center gap-[5px] mb-[10px]">
            <span className="text-[26px] font-bold">
              Registration Page
            </span>
    
            <span className="text-[14px] text-[#d4d4d4]">
              Welcome to ShopCart, Apply to Admin Login
            </span>
          </div>
    
          {/* Glass Card */}
          <div
            className="
              max-w-[420px]
              w-[85%]
              py-[18px]
              px-[20px]
              bg-white/5
              border border-white/10
              backdrop-blur-2xl
              rounded-3xl
              shadow-2xl
              flex items-center justify-center
            "
          >
    
            {/* Form */}
            <form 
            className="w-full flex flex-col items-center gap-[18px]" 
            onSubmit={AdminLogin}>
    
              {/* Google Button */}
    
              {/* OR */}
    
              {/* Inputs */}
              <div className="w-full flex flex-col gap-[12px]">
    
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                  className="
                    w-full
                    h-[42px]
                    border border-[#96969635]
                    backdrop-blur-sm
                    rounded-xl
                    bg-transparent
                    px-[15px]
                    text-white
                    outline-none
                    placeholder:text-[#ffffffc7]
                  "
                />
    
                {/* Password Input */}
                <div className="w-full relative">
    
                  <input
                    type={show?"text":"password"}
                    placeholder="Password"
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    className="
                      w-full
                      h-[42px]
                      border border-[#96969635]
                      backdrop-blur-sm
                      rounded-xl
                      bg-transparent
                      px-[15px]
                      pr-[45px]
                      text-white
                      outline-none
                      placeholder:text-[#ffffffc7]
                    "
                  />
    
                  {!show && <FaRegEye className=" w-[18px] h-[18px] cursor-pointer absolute right-[15px] top-[50%] translate-y-[-50%] translate-y-[-50%] text-[#d4d4d4] " onClick={()=>setShow(prev => !prev)}/>}
                  {show && <FaRegEyeSlash className=" w-[18px] h-[18px] cursor-pointer absolute right-[15px] top-[50%] translate-y-[-50%] translate-y-[-50%] text-[#d4d4d4] " onClick={()=>setShow(prev => !prev)} />}
    
                </div>
    
                {/* Register Button */}
                <button
                  className="
                    w-full
                    h-[42px]
                    bg-cyan-500
                    rounded-xl
                    font-semibold
                    hover:bg-cyan-600
                    transition-all duration-300
                    mt-[5px] ">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default Login
