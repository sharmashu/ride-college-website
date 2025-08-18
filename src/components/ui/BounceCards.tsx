import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 400,
  containerHeight = 550,
  animationDelay = 0.5,
  animationStagger = 1,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)",
  ],
  enableHover = true,
}) {
  // Card size and gap in px (should match Tailwind classes)
  const cardSize = 80;
  const gap = 15;
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxCards, setMaxCards] = useState(images.length);

  useEffect(() => {
    function updateMaxCards() {
      let width =
        containerRef.current?.offsetWidth ||
        window.innerWidth ||
        containerWidth;
      // Calculate how many cards fit fully
      const possible = Math.floor((width + gap) / (cardSize + gap));
      setMaxCards(Math.min(possible, images.length));
    }
    updateMaxCards();
    window.addEventListener("resize", updateMaxCards);
    return () => window.removeEventListener("resize", updateMaxCards);
  }, [images.length, containerWidth]);

  useEffect(() => {
    gsap.fromTo(
      ".card",
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay,
      }
    );
  }, [animationDelay, animationStagger, easeType, maxCards]);

  const getNoRotationTransform = (transformStr: string) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform: string, offsetX: number) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === "none"
        ? `translate(${offsetX}px)`
        : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover) return;

    images.slice(0, maxCards).forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      } else {
        const offsetX = i < hoveredIdx ? -30 : 30;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay,
          overwrite: "auto",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;

    images.slice(0, maxCards).forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center justify-center ${className}`}
      style={{
        width: "100%",
        height: "auto",
      }}
    >
      <div className="flex items-center justify-center gap-2 mt-2 ">
        {images.slice(0, maxCards).map((src, idx) => (
          <div
            key={idx}
            className={`card card-${idx} w-[160px] h-[140px] border border-blue-400 rounded-xl overflow-hidden bg-background`}
            style={{
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.10)",
              transform: transformStyles[idx] || "none",
            }}
            onMouseEnter={() => pushSiblings(idx)}
            onMouseLeave={resetSiblings}
          >
             <img
              className="w-full h-full object-cover"
              src={src}
              alt={`card-${idx}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}