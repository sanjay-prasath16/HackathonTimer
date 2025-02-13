import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import Meteors from "../Components/Meteors";
import Cracker from '../Components/FireWork';

const Timer = () => {
    const [showText, setShowText] = useState(true);
    const [animateOut, setAnimateOut] = useState(false);
    const [targetTime, setTargetTime] = useState(() => {
        const storedTargetTime = localStorage.getItem('targetTime');
        return storedTargetTime ? parseInt(storedTargetTime, 10) : new Date().getTime() + 30 * 60 * 60 * 1000;
    });

    useEffect(() => {
        localStorage.setItem('targetTime', targetTime.toString());

        fireConfetti();

        const timer = setTimeout(() => {
            setAnimateOut(true);
            setTimeout(() => setShowText(false), 1000);
        }, 3000);

        return () => clearTimeout(timer);
    }, [targetTime]);

    const fireConfetti = () => {
        confetti({ particleCount: 375, spread: 100, origin: { x: 0, y: 1 }, startVelocity: 55, angle: 60 });
        confetti({ particleCount: 375, spread: 100, origin: { x: 1, y: 1 }, startVelocity: 55, angle: 120 });
    };

    return (
        <div className="h-screen w-screen bg-black flex flex-col pt-[5%] items-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden h-full w-full pointer-events-none">
                <Meteors />
                <Cracker />
            </div>
            <div className="font-bold text-[80px] PlayFair text-[#ff0000]">
                GEN
                <span className="text-white">Ǝ</span>
                SIS
                <span className="text-white">`</span>
                25
            </div>
            <FlipClockCountdown
                to={targetTime}
                digitBlockStyle={{
                    backgroundColor: "#ff0000",
                    color: "#ffffff",
                    borderRadius: "8px",
                    fontSize: "70px",
                    fontWeight: "600",
                    height: "200px",
                    width: "130px",
                    margin: "0 15px",
                }}
                labelStyle={{
                    color: "#ff0000",
                    fontSize: "32px",
                    fontWeight: "bold",
                    paddingTop: "20px",
                    textTransform: "uppercase",
                }}
                separatorStyle={{
                    color: "#ff0000",
                    size: "10px",
                    boxShadow: "0 0 10px rgba(128, 0, 0, 0.8)",
                }}
                dividerStyle={{ color: "none" }}
                showSeparators={true}
                className="flip-clock-glow mb-[3%] mt-[5%]"
                style={{ fontWeight: "600" }}
            />
            {showText ? (
                <p
                    className={`animated-title ${animateOut ? "animate-out" : ""}`}
                    aria-label="The hackathon officially starts now"
                >
                    The hackathon officially starts now! 🚀
                </p>
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default Timer;