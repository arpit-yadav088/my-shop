
import { Route, Routes } from 'react-router-dom'
import Registration from './Registration'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Nav from './components/Nav'
import { useContext } from 'react'
import { userDataContext } from './context/UserContext'

const App = () => {
  let {userData} = useContext(userDataContext)
  
  return (
    <>
    {userData && <Nav />}
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/login'  element={<Login />}/>
        <Route path='/signup'  element={<Registration />}/>
      </Routes>
    </>
  )
}

export default App