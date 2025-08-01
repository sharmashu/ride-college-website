import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Building2, Award, TrendingUp, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  const stats = [
    {
      icon: Building2,
      value: 17,
      label: "Companies Incorporated",
      suffix: "+",
      description: "Successful startups launched",
      color: "text-primary"
    },
    {
      icon: Award,
      value: 100,
      label: "DPIIT Recognized",
      suffix: "%",
      description: "Government certified incubator",
      color: "text-success"
    },
    {
      icon: TrendingUp,
      value: 25,
      label: "Lakhs Investment",
      prefix: "₹",
      suffix: "+",
      description: "Total funding facilitated",
      color: "text-warning"
    },
    {
      icon: Users,
      value: 50,
      label: "Active Mentors",
      suffix: "+",
      description: "Industry experts guiding startups",
      color: "text-accent"
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const counters = statsRef.current;
      
      counters.forEach((counter, index) => {
        const value = stats[index].value;
        const obj = { current: 0 };
        
        gsap.to(obj, {
          current: value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          onUpdate: function() {
            if (counter) {
              const numberElement = counter.querySelector('.counter-number');
              if (numberElement) {
                numberElement.textContent = Math.round(obj.current).toString();
              }
            }
          }
        });
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            Our Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Driving Innovation Forward
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that showcase our commitment to fostering entrepreneurial excellence
            and building a thriving startup ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  ref={el => statsRef.current[index] = el!}
                  className="p-8 text-center relative overflow-hidden bg-gradient-card backdrop-blur-sm border border-primary/10"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <div className="space-y-2">
                    <div className={`text-4xl md:text-5xl font-bold ${stat.color} flex items-center justify-center`}>
                      {stat.prefix && <span className="text-2xl mr-1">{stat.prefix}</span>}
                      <span className="counter-number">0</span>
                      {stat.suffix && <span className="text-2xl ml-1">{stat.suffix}</span>}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground">
                      {stat.label}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>


                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* DPIIT Recognition Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-card backdrop-blur-sm border border-success/20 max-w-2xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-success/10 text-success border-success/20">
              <Award className="w-4 h-4 mr-2" />
              Government Recognition
            </Badge>
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              DPIIT Recognized Startup Incubator
            </h3>
            <p className="text-muted-foreground">
              Officially recognized by the Department for Promotion of Industry and Internal Trade, 
              Government of India, ensuring credibility and access to government schemes and benefits.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;