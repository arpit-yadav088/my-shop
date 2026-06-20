import { useEffect, useState } from "react"
import Background from "../components/Background"
import Hero from "../components/Hero"


const Home = () => {
  let heroData = [
  {
    text1: "30% OFF Limited Offer",
    text2: "Style That Defines You"
  },
  {
    text1: "Discover Bold Fashion",
    text2: "Limited Time Only"
  },
  {
    text1: "Explore New Collection",
    text2: "Shop Your Favorites"
  },
  {
    text1: "Choose Your Perfect Fit",
    text2: "Now On Sale"
  }
]

  let [heroCount,setHeroCount] = useState(0)
  console.log(heroCount);

  useEffect(()=> {
    let interval = setInterval(()=>{
      setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1))
    }, 3000)
    return ()=> clearInterval(interval)
  })

  return (

    <div className="w-screen h-screen mt-[70px] flex bg-black">
    <div className="w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh] bg-gradient-to-1 from-[#141414] to-[#0c2025]">
    <Hero
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      heroData={heroData[heroCount]}
    />
  </div>

  <div className="w-1/2 h-full">
    <Background heroCount={heroCount} />
  </div>
</div>
    // <div className='w-[100vw] h-[100vh] bg-gradient-to-1 from-[#141414] to-[#0c2025]'>

    //   <Background heroCount={heroCount} />
    //   <Hero 
    //   heroCount={heroCount}
    //   setHeroCount={setHeroCount}
    //   heroData={heroData[heroCount]} 
    //   />

    // </div>
  )
}

export default Home