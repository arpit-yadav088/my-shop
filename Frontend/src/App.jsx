
import { Route, Routes } from 'react-router-dom'
import Registration from './Registration'
import Home from './Pages/Home'
import Login from './Pages/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/login'  element={<Login />}/>
        <Route path='/signup'  element={<Registration />}/>
      </Routes>
    </>
  )
}

export default App