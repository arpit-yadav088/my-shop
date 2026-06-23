import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import { useContext } from 'react'
import { adminDataContext } from '../context/AdminContext'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

const Nav = () => {
  let navigate = useNavigate()
  let {serverUrl} = useContext(authDataContext)
  let { getAdmin } = useContext(adminDataContext)

  const logOut = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {withCredentials:true})
      console.log(result.data)
      getAdmin()
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-full h-[70px] bg-gradient-to-r from-[#141414] to-[#0c2025] flex items-center justify-between px-8 shadow-lg">
      <div  className="flex items-center gap-3 cursor-pointer"
      onClick={()=>navigate("/")}>
        <img src={logo} alt=""  className="w-10 h-10" />
        <h1 className="text-3xl font-bold text-[#89daea]">ShopCart</h1>
      </div>
              <button className='text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white'
        onClick={logOut}>Logout</button>
    </div>
  )
}

export default Nav