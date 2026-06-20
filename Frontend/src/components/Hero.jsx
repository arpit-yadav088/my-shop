// import { FaCircle } from "react-icons/fa";

// const Hero = ({heroData,heroCount,setHeroCount}) => {
//   return (
//     <div className="w-[40%] h-screen flex pt-[70px] relative ">
//       <div className="absolute top-[25%] left-[8%]">
//         <p className="text-[#88d9ee] text-[32px] md:text-[50px] lg:text-[65px] font-light leading-tight">{heroData.text1}</p>
//         <p className="text-[#88d9ee] text-[28px] md:text-[45px] lg:text-[60px] font-light mt-4">{heroData.text2}</p>
//       </div>
//       <div className="absolute md:top-[400px] lg:top-[500px] top-[160px] left-[10%] flex items-center justify-center gap-[10px]">
//         <FaCircle className={`w-[14px] ${heroCount=== 0 ? "fill-amber-400":"fill-white"}`} onClick={() => setHeroCount(0)} />
//         <FaCircle className={`w-[14px] ${heroCount=== 1 ? "fill-amber-400":"fill-white"}`} onClick={() => setHeroCount(1)}/>
//         <FaCircle className={`w-[14px] ${heroCount=== 2 ? "fill-amber-400":"fill-white"}`} onClick={() => setHeroCount(2)}/>
//         <FaCircle className={`w-[14px] ${heroCount=== 3 ? "fill-amber-400":"fill-white"}`} onClick={() => setHeroCount(3)}/>
//       </div>
//     </div>
//   )
// }

// export default Hero


import { FaCircle } from "react-icons/fa";

const Hero = ({ heroData, heroCount, setHeroCount }) => {
  return (
    <div className="w-full h-full relative">
      
      <div className="absolute top-[25%] left-[8%]">
        <h1 className="text-[#88d9ee] text-[32px] md:text-[50px] lg:text-[65px] font-light leading-tight">
          {heroData.text1}
        </h1>

        <h2 className="text-[#88d9ee] text-[28px] md:text-[45px] lg:text-[60px] font-light mt-4">
          {heroData.text2}
        </h2>

        <button className="mt-8 px-8 py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition-all">
          Shop Now
        </button>
      </div>

      <div className="absolute bottom-[12%] left-[8%] flex gap-4">
        <FaCircle
          className={`cursor-pointer ${heroCount === 0 ? "fill-amber-400" : "fill-white"}`}
          onClick={() => setHeroCount(0)}
        />
        <FaCircle
          className={`cursor-pointer ${heroCount === 1 ? "fill-amber-400" : "fill-white"}`}
          onClick={() => setHeroCount(1)}
        />
        <FaCircle
          className={`cursor-pointer ${heroCount === 2 ? "fill-amber-400" : "fill-white"}`}
          onClick={() => setHeroCount(2)}
        />
        <FaCircle
          className={`cursor-pointer ${heroCount === 3 ? "fill-amber-400" : "fill-white"}`}
          onClick={() => setHeroCount(3)}
        />
      </div>

    </div>
  );
};

export default Hero;