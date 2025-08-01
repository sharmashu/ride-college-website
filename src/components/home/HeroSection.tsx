import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import InteractiveBackground from "@/components/3d/InteractiveBackground";
import BlurText from "@/components/ui/BlurText";

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

const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <InteractiveBackground />
      
      {/* Geometric Background Shapes - Now Fixed for Whole Page */}
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
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block"
        >
          <Badge 
            variant="secondary" 
            className="mb-4 px-4 py-2 text-sm bg-gradient-card backdrop-blur-sm border border-primary/20 flex items-center justify-center"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            <BlurText
              text="DPIIT Recognized Incubation Centre"
              delay={50}
              animateBy="words"
              className="inline-flex"
              stepDuration={0.2}
            />
          </Badge>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <BlurText
              text="Ignite Innovation."
              delay={200}
              animateBy="words"
              className="block text-primary mb-4"
              stepDuration={0.8}
            />
            <BlurText
              text="Empower Startups."
              delay={200}
              animateBy="words"
              className="block text-accent"
              stepDuration={0.8}
            />
                      </div>

            <BlurText
            text="RIDE is where groundbreaking ideas transform into thriving businesses. Join our ecosystem of innovation, mentorship, and entrepreneurial excellence."
            delay={100}
            className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            stepDuration={0.6}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/apply">
              <Button 
                size="lg" 
                className="bg-gradient-primary px-8 py-4 text-lg"
              >
                <span className="mr-2">Apply as Startup</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/mentorship">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 px-8 py-4 text-lg backdrop-blur-sm"
              >
                <span className="mr-2">Join as Mentor</span>
                <TrendingUp className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background pointer-events-none" />
    </section>
  );
};

export default HeroSection;