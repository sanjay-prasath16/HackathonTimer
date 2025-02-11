import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import Meteors from "../Components/Meteors";

const BouncyText = ({ onAnimationEnd }) => {
    useEffect(() => {
        const timer = setTimeout(onAnimationEnd, 4000);
        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-black overflow-hidden">
            <svg className="absolute w-full h-full font-bold" viewBox="0 0 1320 300">
                <defs>
                    <linearGradient id="red-black-gradient" x1="0%" y1="0%" x2="250%" y2="0%">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="black" />
                    </linearGradient>
                </defs>
                <text
                    x="50%"
                    y="50%"
                    dy=".35em"
                    textAnchor="middle"
                    className="text-[70px] stroke-2 animate-stroke"
                    fill="url(#red-black-gradient)"
                >
                    Welcome to 30-Hour Hackathon
                </text>
                <text
                    x="50%"
                    y="70%"
                    dy=".35em"
                    textAnchor="middle"
                    className="text-[25px] opacity-0 animate-fade-in"
                    fill="url(#red-black-gradient)"
                >
                    All the best, your time starts now
                </text>
            </svg>
        </div>
    );
};

const Timer = () => {
    const [showTimer, setShowTimer] = useState(false);

    useEffect(() => {
        fireConfetti();
    }, []);

    const fireConfetti = () => {
        confetti({ particleCount: 375, spread: 100, origin: { x: 0, y: 1 }, startVelocity: 55, angle: 60 });
        confetti({ particleCount: 375, spread: 100, origin: { x: 1, y: 1 }, startVelocity: 55, angle: 120 });
    };

    return (
        <div className="h-screen w-screen bg-black flex justify-center items-center relative">
            <div className="absolute inset-0 overflow-hidden h-full w-full">
                <Meteors />
            </div>
            {!showTimer ? (
                <BouncyText onAnimationEnd={() => setTimeout(() => setShowTimer(true), 3000)} />
            ) : (
                <FlipClockCountdown
                    to={new Date().getTime() + 30 * 60 * 60 * 1000}
                    digitBlockStyle={{
                        backgroundColor: "#ff0000",
                        color: "#ffffff",
                        borderRadius: "8px",
                        fontSize: "50px",
                        fontWeight: "bold",
                        height: "100px",
                        width: "70px",
                        margin: "0 15px",
                    }}
                    labelStyle={{
                        color: "#ff0000",
                        fontSize: "22px",
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
                    onFinish={() => console.log("Countdown finished!")}
                    className="flip-clock-glow"
                />
            )}
        </div>
    );
};

export default Timer;