import { motion } from "framer-motion";
import InteractiveBackground from "@/components/3d/InteractiveBackground";

// Helper function for combining classes
function cn(...inputs: (string | undefined | null | boolean)[]) {
    return inputs.filter(Boolean).join(' ');
}

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-primary/[0.8]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("fixed", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-primary/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(59,130,246,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_20%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

const PageBackground = () => {
  return (
    <>
      <InteractiveBackground />
      
      {/* Geometric Background Shapes - Fixed for Whole Page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <ElegantShape
          delay={0.2}
          width={800}
          height={150}
          rotate={192}
          gradient="from-primary/[0.4]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.4}
          width={600}
          height={130}
          rotate={-15}
          gradient="from-accent/[0.75]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={100}
          rotate={-8}
          gradient="from-primary-glow/[0.5]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={250}
          height={60}
          rotate={20}
          gradient="from-success/[0.4]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={350}
          height={100}
          rotate={-25}
          gradient="from-warning/[0.5]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background pointer-events-none" />
    </>
  );
};

export default PageBackground; 