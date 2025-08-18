import { useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import { Rocket } from "lucide-react";

const RocketButtonWithFlame = () => {
  const rocketRef = useRef<HTMLDivElement>(null);
  const flameRef = useRef<HTMLDivElement>(null);
  const smokeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hover/bounce effect
    gsap.to(rocketRef.current, {
      y: -8,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      duration: 1.5,
    });

    // Flicker flame
    gsap.to(flameRef.current, {
      scaleY: 1.2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      duration: 0.3,
      transformOrigin: "center bottom",
    });
  }, []);

  const handleLaunch = () => {
    gsap.killTweensOf([rocketRef.current, flameRef.current]);

    // Rocket takes off
    gsap.to([rocketRef.current, flameRef.current], {
      y: -window.innerHeight,
      scale: 0.6,
      opacity: 0,
      ease: Power2.easeIn,
      duration: 2,
    });

    // Smoke rises
    gsap.fromTo(
      smokeRef.current,
      { opacity: 0, y: 20, scale: 0.6 },
      { opacity: 1, y: -100, scale: 1.5, duration: 2, ease: "power1.out" }
    );

    // Reset after animation
    gsap.delayedCall(2.5, () => {
      gsap.set([rocketRef.current, flameRef.current, smokeRef.current], {
        y: 0,
        scale: 1,
        opacity: 1,
      });
      gsap.to(smokeRef.current, { opacity: 0, duration: 0.5 });
    });
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleLaunch}
        className="bg-gradient-primary px-6 py-3 rounded-lg text-white flex items-center gap-3 relative overflow-visible"
      >
        Apply Now

        {/* Rocket Wrapper */}
        <div ref={rocketRef} className="relative inline-block w-8 h-8">
          {/* Rocket image */}
          <img
            src="/rocket.png" // place in /public folder
            alt="Rocket"
            className="w-full h-full object-contain"
          />

          {/* Flame */}
          <div
            ref={flameRef}
            className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-3 h-5 rounded-full opacity-80 mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, #ff6600 0%, transparent 70%)",
              filter: "blur(2px)",
              animation: "flame-flicker 0.3s infinite alternate",
            }}
          />
        </div>
      </button>

      {/* Smoke image */}
      <div
        ref={smokeRef}
        className="absolute bottom-0 left-[calc(100%+10px)] w-10 h-10 pointer-events-none opacity-0"
      >
        <img
          src="/smoke.png" // place in /public folder
          alt="Smoke"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Rocket;
