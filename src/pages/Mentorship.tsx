import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { 
  Users, 
  GraduationCap, 
  Building2, 
  UserCheck,
  Star,
  Linkedin,
  Mail,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  Target,
  BookOpen,
  Award,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const Mentorship = () => {
  const mentorshipModel = [
    {
      icon: GraduationCap,
      title: "Faculty Mentors",
      description: "Experienced professors and researchers from JIIT providing academic guidance and technical expertise.",
      features: [
        "Technical expertise in various domains",
        "Research methodology guidance", 
        "Academic project supervision",
        "Publication and patent support"
      ],
      count: "15+ Faculty",
      color: "text-blue-600"
    },
    {
      icon: Building2,
      title: "Industry Experts",
      description: "Seasoned professionals from leading companies sharing real-world business insights and market knowledge.",
      features: [
        "Business strategy development",
        "Market analysis and validation",
        "Scaling and operations guidance",
        "Investment readiness coaching"
      ],
      count: "25+ Experts",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Peer Learning Circles",
      description: "Collaborative groups of entrepreneurs supporting each other through shared experiences and knowledge.",
      features: [
        "Peer-to-peer problem solving",
        "Networking opportunities",
        "Experience sharing sessions",
        "Collaborative project development"
      ],
      count: "10+ Circles",
      color: "text-purple-600"
    }
  ];

  const mentors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Professor, Computer Science",
      organization: "JIIT Noida",
      type: "Faculty",
      image: "👩‍🏫",
      expertise: ["AI/ML", "Data Science", "Research Methodology"],
      experience: "15+ years",
      startups: 8,
      rating: 4.9,
      bio: "Leading researcher in AI/ML with 100+ publications. Passionate about guiding students to transform research into viable startups.",
      achievements: ["Best Faculty Award 2023", "AI Innovation Grant", "50+ Research Publications"],
      linkedin: "#",
      email: "priya.sharma@jiit.ac.in"
    },
    {
      id: 2,
      name: "Rahul Gupta",
      role: "VP Engineering",
      organization: "Tech Mahindra",
      type: "Industry",
      image: "👨‍💼",
      expertise: ["Product Development", "Scaling", "Team Building"],
      experience: "12+ years",
      startups: 12,
      rating: 4.8,
      bio: "Tech leader with experience scaling products from 0 to millions of users. Expert in agile development and team management.",
      achievements: ["Tech Leadership Award", "15+ Product Launches", "Team of 200+ Engineers"],
      linkedin: "#",
      email: "rahul@mentors.ride.com"
    },
    {
      id: 3,
      name: "Anita Verma",
      role: "Startup Founder & Angel Investor",
      organization: "EcoTech Solutions",
      type: "Entrepreneur",
      image: "👩‍💼",
      expertise: ["Business Strategy", "Fundraising", "Market Entry"],
      experience: "10+ years",
      startups: 15,
      rating: 4.9,
      bio: "Serial entrepreneur with 2 successful exits. Now focusing on mentoring sustainable technology startups.",
      achievements: ["2x Successful Exits", "₹50Cr+ Raised", "Angel Investor of the Year"],
      linkedin: "#",
      email: "anita@mentors.ride.com"
    },
    {
      id: 4,
      name: "Prof. Vikram Singh",
      role: "Dean, Innovation & Research",
      organization: "JIIT Noida",
      type: "Faculty",
      image: "👨‍🏫",
      expertise: ["Innovation Management", "IP & Patents", "Technology Transfer"],
      experience: "20+ years",
      startups: 6,
      rating: 4.7,
      bio: "Academic leader focused on bridging the gap between research and commercialization. Expert in IP management.",
      achievements: ["Innovation Excellence Award", "25+ Patents Filed", "Technology Transfer Expert"],
      linkedin: "#",
      email: "vikram.singh@jiit.ac.in"
    },
    {
      id: 5,
      name: "Sneha Patel",
      role: "Digital Marketing Director",
      organization: "Flipkart",
      type: "Industry",
      image: "👩‍💻",
      expertise: ["Digital Marketing", "Growth Hacking", "Brand Building"],
      experience: "8+ years",
      startups: 10,
      rating: 4.8,
      bio: "Growth expert who has scaled multiple products from startup to unicorn stage. Specialist in digital marketing strategies.",
      achievements: ["Growth Hacker of the Year", "10x User Growth", "Brand Building Expert"],
      linkedin: "#",
      email: "sneha@mentors.ride.com"
    },
    {
      id: 6,
      name: "Dr. Amit Kumar",
      role: "CTO",
      organization: "MedTech Innovations",
      type: "Industry",
      image: "👨‍⚕️",
      expertise: ["HealthTech", "IoT", "Product Management"],
      experience: "14+ years",
      startups: 7,
      rating: 4.9,
      bio: "Healthcare technology expert with deep experience in IoT-based medical devices and regulatory compliance.",
      achievements: ["FDA Approved Products", "Healthcare Innovation Award", "5+ Patents"],
      linkedin: "#",
      email: "amit@mentors.ride.com"
    }
  ];

  const mentorTypeColors = {
    "Faculty": "bg-blue-100 text-blue-800",
    "Industry": "bg-green-100 text-green-800",
    "Entrepreneur": "bg-purple-100 text-purple-800"
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Mentorship Program
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
                Expert Mentorship for Startup Success
              </h1>
              <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
                Connect with industry leaders, faculty experts, and successful entrepreneurs 
                who provide guidance, insights, and support for your startup journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary">
                  Find a Mentor
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30">
                  Become a Mentor
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentorship Model */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Our Mentorship Model
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Three pillars of support providing comprehensive guidance for entrepreneurial success
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mentorshipModel.map((model, index) => {
              const Icon = model.icon;
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
                      <h3 className="text-xl font-bold text-primary mb-2">{model.title}</h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {model.count}
                      </Badge>
                    </div>
                    
                    <p className="text-foreground mb-6 leading-relaxed">
                      {model.description}
                    </p>

                    <div className="space-y-2">
                      {model.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 mr-3 text-primary" />
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

      {/* Meet Our Mentors */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Meet Our Mentors
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Experienced professionals across various domains ready to guide your journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-gradient-card backdrop-blur-sm border border-primary/10">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                      {mentor.image}
                    </div>
                    <h3 className="font-bold text-lg text-primary">{mentor.name}</h3>
                    <p className="text-sm text-accent">{mentor.role}</p>
                    <p className="text-xs text-foreground">{mentor.organization}</p>
                    <Badge className={mentorTypeColors[mentor.type as keyof typeof mentorTypeColors]} variant="secondary">
                      {mentor.type}
                    </Badge>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">{mentor.experience}</div>
                      <div className="text-xs text-foreground">Experience</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">{mentor.startups}</div>
                      <div className="text-xs text-foreground">Startups</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-lg font-bold text-primary">{mentor.rating}</span>
                      </div>
                      <div className="text-xs text-foreground">Rating</div>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-foreground mb-4 leading-relaxed">
                    {mentor.bio}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-2">Key Achievements</h4>
                    <div className="space-y-1">
                      {mentor.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-xs">
                          <Award className="w-3 h-3 mr-2 text-primary" />
                          <span className="text-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Mentor */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                Become a Mentor
              </h2>
              <p className="text-xl text-foreground max-w-2xl mx-auto">
                Share your expertise and help shape the next generation of entrepreneurs
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-gradient-card backdrop-blur-sm border border-primary/10">
                  <h3 className="text-2xl font-bold text-primary mb-6">Why Become a Mentor?</h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: Lightbulb,
                        title: "Give Back to Community",
                        description: "Share your knowledge and experience to help budding entrepreneurs succeed."
                      },
                      {
                        icon: TrendingUp,
                        title: "Stay Updated",
                        description: "Keep up with latest trends and innovations while working with young minds."
                      },
                      {
                        icon: Target,
                        title: "Make Impact",
                        description: "Directly contribute to the success of startups and economic growth."
                      },
                      {
                        icon: Users,
                        title: "Network Expansion",
                        description: "Connect with other mentors, entrepreneurs, and industry leaders."
                      }
                    ].map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <div key={index} className="flex items-start">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-1">{benefit.title}</h4>
                            <p className="text-sm text-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>

              {/* Application Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-gradient-card backdrop-blur-sm border border-primary/10">
                  <h3 className="text-2xl font-bold text-primary mb-6">Mentor Application</h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input type="email" placeholder="your.email@example.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Years of Experience *
                        </label>
                        <Input placeholder="e.g., 10+ years" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Current Organization *
                      </label>
                      <Input placeholder="Company/University name" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Designation/Role *
                      </label>
                      <Input placeholder="Your current position" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Areas of Expertise *
                      </label>
                      <Input placeholder="e.g., AI/ML, Business Strategy, Marketing" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        LinkedIn Profile
                      </label>
                      <Input placeholder="https://linkedin.com/in/yourprofile" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Why do you want to become a mentor? *
                      </label>
                      <Textarea 
                        placeholder="Tell us about your motivation to mentor startups..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Previous Mentoring Experience
                      </label>
                      <Textarea 
                        placeholder="Describe any previous mentoring or coaching experience..."
                        rows={3}
                      />
                    </div>

                    <Button className="w-full bg-gradient-primary">
                      Submit Application
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Mentorship Impact
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              The power of guidance reflected in our success metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Active Mentors", icon: Users },
              { value: "100+", label: "Mentoring Sessions", icon: BookOpen },
              { value: "85%", label: "Success Rate", icon: TrendingUp },
              { value: "4.8/5", label: "Mentor Rating", icon: Star }
            ].map((stat, index) => {
              const Icon = stat.icon;
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
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-foreground">{stat.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mentorship;