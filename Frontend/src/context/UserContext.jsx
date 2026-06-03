import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import { authDataContext } from "./AuthContext"
// import { getCurrentUser } from "../../../Backend/controller/userController"

export const userDataContext = createContext()
function UserContext ({ children }) {
  let [userData, setUserData] = useState("")
  let {serverUrl} = useContext(authDataContext)
  

  const getCurrentUser = async () => {
      try {
    let result = await axios.post(serverUrl + "/api/user/getcurrentuser",{},{withCredentials:true,});

    setUserData(result.data)
    console.log(result.data)

  } catch (error) {
    setUserData(null)
    console.log(error)
  }
}

  useEffect(() =>{
    getCurrentUser()
  },[])

  let value = {
    userData,setUserData,getCurrentUser,
  }

  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext


// import axios from "axios";
// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// import { authDataContext } from "./AuthContext";

// export const userDataContext = createContext();

// const UserContext = ({ children }) => {
//   const [userData, setUserData] = useState(null);

//   const { serverUrl } = useContext(authDataContext);

//   const getCurrentUser = async () => {
//     try {
//       const result = await axios.get(
//         serverUrl + "/api/user/getcurrentuser",
//         {
//           withCredentials: true,
//         }
//       );

//       setUserData(result.data);

//       console.log(result.data);
//     } catch (error) {
//       setUserData(null);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getCurrentUser();
//   }, []);

//   const value = {
//     userData,
//     setUserData,
//     getCurrentUser,
//   };

//   return (
//     <userDataContext.Provider value={value}>
//       {children}
//     </userDataContext.Provider>
//   );
// };

// export default UserContext;