import { signInWithPopup } from "firebase/auth"

import { useNavigate } from "react-router-dom";
import Logo from "./assets/logo.png";
import google from "./assets/google.png";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useContext, useState } from "react";
import { authDataContext } from "./context/AuthContext";
import axios from "axios"
import { auth, provider } from "../utils/Firebase";
import { userDataContext } from "./context/UserContext";

const Registration = () => {

  let [show, setShow] = useState(false);
  let {serverUrl} = useContext(authDataContext);
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let { getCurrentUser} = useContext(userDataContext)

  let navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post(serverUrl + "/api/auth/registration",{
        name,email,password
      },{withCredentials:true})
      getCurrentUser()
      navigate("/")
      console.log(result.data)

    } catch (error) {
      console.log(error)
    }
  }

  const googleSignup = async () => {
    try {
      const response = await signInWithPopup(auth , provider)
      let user = response.user
      let name = user.displayName;
      let email = user.email

      const result = await axios.post(serverUrl + "/api/auth/googlelogin",{name , email} , {withCredentials:true})
      console.log(result.data)

    } catch (error) {
    console.log(error.code);
    console.log(error.message);
    }
  }

  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center">

      {/* Navbar */}
      <div
        className="w-full h-[70px] flex items-center px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-9" src={Logo} alt="logo" />

        <h1 className="text-[20px] font-semibold"> Shop Cart</h1>
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center gap-[5px] mb-[10px]">
        <span className="text-[26px] font-bold">
          Registration Page
        </span>

        <span className="text-[14px] text-[#d4d4d4]">
          Welcome to ShopCart, place your order
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
        onSubmit={handleSignup}
        className="w-full flex flex-col items-center gap-[18px]">

          {/* Google Button */}
          <div
             onClick={googleSignup}
            className="
              w-full
              h-[42px]
              bg-[#42656cae]
              rounded-xl
              flex items-center justify-center
              gap-[10px]
              cursor-pointer
              hover:bg-[#4f7881]
              transition-all duration-300
            "
          >
            <img
              src={google}
              alt="google"
              className="w-[18px]"
            />

            <span className="text-[14px] font-medium">
              Registration with Google
            </span>
          </div>

          {/* OR */}
          <div className="w-full flex items-center justify-center gap-[10px]">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>

            <span className="text-[12px] text-[#d4d4d4]">
              OR
            </span>

            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>

          {/* Inputs */}
          <div className="w-full flex flex-col gap-[12px]">

            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e)=>setName(e.target.value)}
              value={name}
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
                mt-[5px]
              "
            >
              Register
            </button>

            <p className="flex gap-[10px] text-[14px]">
              You have any account?

              <span
                className="text-[16px] font-semibold cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>

          </div>

        </form>
      </div>
    </div>
  );
};

export default Registration;