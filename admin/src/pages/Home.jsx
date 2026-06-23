import Nav from '../component/Nav'
import Slidebar from '../component/Slidebar'

const Home = () => {
  
  return (
 <div className="w-[screen] h-[100vh] bg-gradient-to-r from-[#141414] to-[#0c2025]">
      <Nav />
      <Slidebar />

      <div className="flex items-center justify-center h-[calc(100vh-70px)]">
        <h1 className="text-5xl font-bold text-[#89daea]">
          Admin Dashboard
        </h1>
      </div>
    </div>
  )
}

export default Home