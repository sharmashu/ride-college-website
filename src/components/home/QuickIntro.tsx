import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Users, Rocket, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const QuickIntro = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Transform your groundbreaking ideas into viable business ventures with our comprehensive support system.",
      color: "text-warning"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Connect with industry leaders, faculty experts, and successful entrepreneurs for guidance and insights.",
      color: "text-primary"
    },
    {
      icon: Rocket,
      title: "Launch Pad",
      description: "Access resources, funding opportunities, and infrastructure to accelerate your startup journey.",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Growth Support",
      description: "Scale your business with our network of investors, partners, and strategic business development support.",
      color: "text-success"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2">
                <Rocket className="w-4 h-4 mr-2" />
                About RIDE
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Empowering Tomorrow's Innovators
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                RIDE (Research Innovation Development and Entrepreneurship) is JIIT Noida's 
                premier incubation centre, fostering a culture of innovation and entrepreneurship. 
                We provide a comprehensive ecosystem where ideas flourish and businesses thrive.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Our Ecosystem</h3>
              <div className="grid gap-4">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-card backdrop-blur-sm border border-primary/10">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">RIDEHack</h4>
                    <p className="text-sm text-muted-foreground">Ideation & Hackathons</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-card backdrop-blur-sm border border-primary/10">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Incubation Framework</h4>
                    <p className="text-sm text-muted-foreground">Structured startup development</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-card backdrop-blur-sm border border-primary/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Strategic Mentoring</h4>
                    <p className="text-sm text-muted-foreground">Investment & growth support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button size="lg" className="bg-gradient-primary">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/startups">
                <Button variant="outline" size="lg" className="border-primary/30">
                  View Success Stories
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="p-6 h-full bg-gradient-card backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:shadow-card transition-all duration-300 group">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 mb-4 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow`}
                    >
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                    
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickIntro;