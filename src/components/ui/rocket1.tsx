import React from "react";
import { FaRocket } from "react-icons/fa";

export default function RocketFloating() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-900 to-black">
      <div className="relative flex flex-col items-center animate-float text-white text-6xl">
        <FaRocket className="transform rotate-45" />
        {/* Animated Smoke */}
        <div className="absolute bottom-[-40px] flex flex-col items-center space-y-1">
          <span className="smoke-dot smoke1"></span>
          <span className="smoke-dot smoke2"></span>
          <span className="smoke-dot smoke3"></span>
        </div>
      </div>
    </div>
  );
}
import { useEffect, useRef } from "react";
import gsap from "gsap";