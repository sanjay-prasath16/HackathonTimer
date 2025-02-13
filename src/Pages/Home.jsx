import Meteors from "../Components/Meteors";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-screen justify-center items-center flex flex-col bg-black text-white">
      <div className="absolute inset-0 overflow-hidden h-full w-full">
        <Meteors />
      </div>
      <div className="font-bold text-[80px]">
        GEN
        <span className="text-red-800">Ǝ</span>
        SIS
        <span className="text-red-800">`</span>
        25
      </div>
      <p className="mt-[2%] text-[20px] w-[45%] text-center mb-[3%]">
        Unleash your creativity, code your vision, and race against time - GENESIS`25 is where innovation meets execution!
      </p>
      <div className="flex">
        <p className="h-[100px] w-[70px] border border-[#ff0000] bg-[#ff0000] mx-[15px] my-0 font-bold text-[50px] rounded-[8px] text-white items-center justify-center flex glow-box">0</p>
        <p className="h-[100px] w-[70px] border border-[#ff0000] bg-[#ff0000] mx-[15px] my-0 font-bold text-[50px] rounded-[8px] text-white items-center justify-center flex glow-box">1</p>
        <p className="text-[60px] font-bold mx-[10px] my-0 text-[#ff0000]">:</p>
        <p className="h-[100px] w-[70px] border border-[#ff0000] bg-[#ff0000] mx-[15px] my-0 font-bold text-[50px] rounded-[8px] text-white items-center justify-center flex glow-box">0</p>
        <p className="h-[100px] w-[70px] border border-[#ff0000] bg-[#ff0000] mx-[15px] my-0 font-bold text-[50px] rounded-[8px] text-white items-center justify-center flex glow-box">6</p>
        <p className="text-[60px] font-bold mx-[10px] my-0 text-[#ff0000]">:</p>
        <p className="h-[100px] w-[70px] border border-[#ff0000] bg-[#ff0000] mx-[15px] my-0 font-bold text-[50px] rounded-[8px] text-white items-center justify-center flex glow-box">0</p>
        <p className="h-[100px] w-[70px] border border-[#ff0000] bg-[#ff0000] mx-[15px] my-0 font-bold text-[50px] rounded-[8px] text-white items-center justify-center flex glow-box">0</p>
        <p className="text-[60px] font-bold mx-[10px] my-0 text-[#ff0000]">:</p>
        <p className="h-[100px] w-[70px] border border-[#ff0000] bg-[#ff0000] mx-[15px] my-0 font-bold text-[50px] rounded-[8px] text-white items-center justify-center flex glow-box">0</p>
        <p className="h-[100px] w-[70px] border border-[#ff0000] bg-[#ff0000] mx-[15px] my-0 font-bold text-[50px] rounded-[8px] text-white items-center justify-center flex glow-box">0</p>
      </div>
      <Link to='/timer' className="text-[20px] cursor-pointer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Start Now
      </Link>
    </div>
  );
};

export default Home;