import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import BlurText from "@/components/ui/BlurText";

const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
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
    </section>
  );
};

export default HeroSection;