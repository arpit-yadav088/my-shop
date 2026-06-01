// import { useNavigate } from "react-router-dom";
// import Logo from "./assets/logo.png";
// import google from "./assets/google.png"

// const Registration = () => {

//      let navigate = useNavigate()
//   return (
//    <div className="w-screen h-screen overflow-auto py-[20px] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center">
//       <div className="w-full h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer" onClick={() => navigate("/")}>
//         <img  className="w-10" src={Logo} alt="logo"/>
//         <h1 className="text-[22px] font-sans">shop cart</h1>
//       </div>
      
//       <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
//         <span className="text-[25px] font-semibold">Registration Page</span>
//         <span className="text-[16px]">Welcome to ShopCart, please your order</span>
//       </div>

//         <div
//   className="
//     max-w-[600px] w-[90%] h-[500px] bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl flex items-center justify-center hover:scale-[1.01] transition-all duration-300">
//           <form action="" className="w-[90%] h-[90%] flex flex-col items-center justify-center justify-start gap-[20px]">
//             <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer">
//               <img src={google} alt="" className="w-[20px]" />Registration with Googole</div>

//               <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
//                 <div className="w-[40%] h-[1px] bg-[#96969635]"></div>OR
//                 <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
//               </div>

//               <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]">
//                 <input type="text" className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px]" placeholder='username' required/>

//                 <input type="text" className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px]"  placeholder='email' required/>

//                 <input type="password" className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px]" placeholder='password' required/>
                
//               </div>
//           </form>
//         </div>
//     </div>
//   )
// }

// export default Registration



// import { useNavigate } from "react-router-dom";
// import Logo from "./assets/logo.png";
// import google from "./assets/google.png";
// import { FaRegEyeSlash } from "react-icons/fa6";


// const Registration = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-screen h-screen overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center">

//       {/* Navbar */}
//       <div
//         className="w-full h-[70px] flex items-center px-[30px] gap-[10px] cursor-pointer"
//         onClick={() => navigate("/")}
//       >
//         <img className="w-9" src={Logo} alt="logo" />

//         <h1 className="text-[20px] font-semibold">
//           Shop Cart
//         </h1>
//       </div>

//       {/* Heading */}
//       <div className="flex flex-col items-center gap-[5px] mb-[10px]">
//         <span className="text-[26px] font-bold">
//           Registration Page
//         </span>

//         <span className="text-[14px] text-[#d4d4d4]">
//           Welcome to ShopCart, place your order
//         </span>
//       </div>

//       {/* Glass Card */}
//       <div
//         className="
//           max-w-[420px]
//           w-[85%]
//           py-[18px]
//           px-[20px]
//           bg-white/5
//           border border-white/10
//           backdrop-blur-2xl
//           rounded-3xl
//           shadow-2xl
//           flex items-center justify-center
//         "
//       >

//         {/* Form */}
//         <form className="w-full flex flex-col items-center gap-[18px]">

//           {/* Google Button */}
//           <div
//             className="
//               w-full
//               h-[42px]
//               bg-[#42656cae]
//               rounded-xl
//               flex items-center justify-center
//               gap-[10px]
//               cursor-pointer
//               hover:bg-[#4f7881]
//               transition-all duration-300
//             "
//           >
//             <img
//               src={google}
//               alt="google"
//               className="w-[18px]"
//             />

//             <span className="text-[14px] font-medium">
//               Registration with Google
//             </span>
//           </div>

//           {/* OR */}
//           <div className="w-full flex items-center justify-center gap-[10px]">
//             <div className="w-[40%] h-[1px] bg-[#96969635]"></div>

//             <span className="text-[12px] text-[#d4d4d4]">
//               OR
//             </span>

//             <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
//           </div>

//           {/* Inputs */}
//           <div className="w-full flex flex-col gap-[12px] relative">

//             <input
//               type="text"
//               placeholder="Username"
//               required
//               className="
//                 w-full
//                 h-[42px]
//                 border border-[#96969635]
//                 backdrop-blur-sm
//                 rounded-xl
//                 bg-transparent
//                 px-[15px]
//                 text-white
//                 outline-none
//                 placeholder:text-[#ffffffc7]
//               "
//             />

//             <input
//               type="email"
//               placeholder="Email"
//               required
//               className="
//                 w-full
//                 h-[42px]
//                 border border-[#96969635]
//                 backdrop-blur-sm
//                 rounded-xl
//                 bg-transparent
//                 px-[15px]
//                 text-white
//                 outline-none
//                 placeholder:text-[#ffffffc7]
//               "
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               required
              
//               className="
//                 w-full
//                 h-[42px]
//                 border border-[#96969635]
//                 backdrop-blur-sm
//                 rounded-xl
//                 bg-transparent
//                 px-[15px]
//                 text-white
//                 outline-none
//                 placeholder:text-[#ffffffc7]
//               "
//             />
//             <FaRegEyeSlash className="w-[20px] h-[20px] cursor-pointer absolute right-[5%]"/>


//             {/* Register Button */}
//             <button
//               className="
//                 w-full
//                 h-[42px]
//                 bg-cyan-500
//                 rounded-xl
//                 font-semibold
//                 hover:bg-cyan-600
//                 transition-all duration-300
//                 mt-[5px]
//               "
//             >
//               Register
//             </button>
//             <p className="flex gap-[10px]">You have any account?<span className="text-[17px] font-semibold cursor-pointer" 
//             onClick={()=> navigate("/login")}>Login</span></p>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Registration;



import { useNavigate } from "react-router-dom";
import Logo from "./assets/logo.png";
import google from "./assets/google.png";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useContext, useState } from "react";
import { authDataContext } from "./context/AuthContext";
import axios from "axios"

const Registration = () => {

  let [show, setShow] = useState(false);
  let {serverUrl} = useContext(authDataContext);
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  let navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post(serverUrl + "/api/auth/registration",{
        name,email,password
      },{withCredentials:true})
      console.log(result.data)

    } catch (error) {
      console.log(error)
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