import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import { 
  Target, 
  Eye, 
  Lightbulb, 
  Users, 
  Rocket, 
  TrendingUp, 
  Award,
  Building2,
  Handshake,
  Code,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const missionVisionData = [
    {
      icon: Target,
      title: "Our Mission",
      content: "To foster innovation and entrepreneurship by providing comprehensive incubation support, enabling students and faculty to transform groundbreaking ideas into successful, sustainable businesses that contribute to economic growth and societal impact.",
      color: "text-primary"
    },
    {
      icon: Eye,
      title: "Our Vision",
      content: "To be recognized as a leading incubation center that bridges academia and industry, creating a thriving ecosystem where innovation flourishes and entrepreneurs are empowered to build the next generation of transformative companies.",
      color: "text-accent"
    }
  ];

  const ecosystemData = [
    {
      icon: Code,
      title: "RIDEHack",
      subtitle: "Ideation & Hackathons",
      description: "Annual hackathons and ideation workshops that bring together creative minds to solve real-world problems and generate innovative startup ideas.",
      features: ["24-hour hackathons", "Problem-solving workshops", "Idea validation sessions", "Prototype development"]
    },
    {
      icon: Rocket,
      title: "Incubation Framework",
      subtitle: "Structured Startup Development",
      description: "Comprehensive 6-12 month incubation program with structured milestones, mentorship, and resources to accelerate startup growth.",
      features: ["Business model development", "Market validation", "Product development", "Legal & compliance support"]
    },
    {
      icon: TrendingUp,
      title: "Strategic Mentoring",
      subtitle: "Investment & Growth Support",
      description: "Expert guidance from industry leaders, faculty mentors, and successful entrepreneurs to navigate challenges and scale businesses.",
      features: ["1-on-1 mentoring sessions", "Investment readiness", "Network connections", "Strategic partnerships"]
    }
  ];

  const frameworkSteps = [
    {
      step: "01",
      title: "Application & Selection",
      description: "Submit your idea through our application process. Our expert panel evaluates based on innovation, feasibility, and market potential."
    },
    {
      step: "02",
      title: "Ideation & Validation",
      description: "Participate in workshops to refine your idea, conduct market research, and validate your business concept with potential customers."
    },
    {
      step: "03",
      title: "Business Development",
      description: "Develop your business model, create financial projections, and build a comprehensive business plan with mentor guidance."
    },
    {
      step: "04",
      title: "Prototype & MVP",
      description: "Build your minimum viable product with access to our labs, technical resources, and expert technical mentorship."
    },
    {
      step: "05",
      title: "Market Entry",
      description: "Launch your product, acquire first customers, and establish market presence with marketing and sales support."
    },
    {
      step: "06",
      title: "Scale & Investment",
      description: "Prepare for investment, scale operations, and establish sustainable growth with continued strategic support."
    }
  ];

  const achievements = [
    { icon: Building2, value: "17+", label: "Companies Incorporated" },
    { icon: Award, value: "DPIIT", label: "Government Recognition" },
    { icon: Users, value: "50+", label: "Active Mentors" },
    { icon: TrendingUp, value: "₹25L+", label: "Investment Facilitated" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                <Rocket className="w-4 h-4 mr-2" />
                About RIDE
              </Badge>
              <BlurText
                text="Research Innovation Development & Entrepreneurship"
                className="text-4xl md:text-6xl font-bold mb-6 text-primary text-center"
                animateBy="words"
                delay={150}
                stepDuration={0.4}
                direction="top"
                threshold={0.3}
              />
              <p className="text-xl text-foreground max-w-2xl mx-auto">
                JIIT Noida's premier incubation center fostering innovation, 
                supporting entrepreneurs, and building sustainable businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is RIDE */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">What is RIDE?</h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                RIDE (Research Innovation Development and Entrepreneurship) is JIIT Noida's 
                officially recognized startup incubation center. We serve as a bridge between 
                academic excellence and entrepreneurial success, providing comprehensive support 
                to transform innovative ideas into thriving businesses.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                As a DPIIT-recognized incubator, we offer credibility, access to government 
                schemes, and a structured framework that has successfully supported 17+ companies 
                in their entrepreneurial journey, facilitating over ₹25 lakhs in investments.
              </p>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center bg-gradient-card backdrop-blur-sm border border-primary/10">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-2xl font-bold text-primary mb-1">{achievement.value}</div>
                    <div className="text-sm text-foreground">{achievement.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {missionVisionData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full bg-gradient-card backdrop-blur-sm border border-primary/10">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Incubation Framework */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Our Incubation Framework
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              A structured 6-step process that guides entrepreneurs from idea to market success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-gradient-card backdrop-blur-sm border border-primary/10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mr-3">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Ecosystem */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Our Ecosystem
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Three pillars of support that create a comprehensive entrepreneurial environment
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ecosystemData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full bg-gradient-card backdrop-blur-sm border border-primary/10">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-accent font-medium">{item.subtitle}</p>
                    </div>
                    
                    <p className="text-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Join RIDE and transform your innovative ideas into successful businesses 
              with our comprehensive support system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" className="bg-gradient-primary">
                  Apply as Startup
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/mentorship">
                <Button variant="outline" size="lg" className="border-primary/30">
                  Become a Mentor
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;