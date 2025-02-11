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
      <p className="mt-[1%] text-[40px] font-medium animate-glow">30-Hour Hackathon</p>
      <p className="mt-[2%] text-[20px] w-[45%] text-center mb-[3%]">
        Unleash your creativity, code your vision, and race against time - GENESIS`25 is where innovation meets execution!
      </p>

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