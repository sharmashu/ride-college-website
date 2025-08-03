import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Building2, 
  Globe, 
  Users, 
  TrendingUp, 
  Award,
  ExternalLink,
  ArrowRight,
  Lightbulb,
  Target,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Startups = () => {
  const startups = [
    {
      id: 1,
      name: "TechFlow Solutions",
      logo: "🚀",
      description: "AI-powered workflow automation platform helping businesses streamline operations and boost productivity.",
      category: "AI/ML",
      status: "Incorporated",
      tags: ["AI", "Automation", "SaaS"],
      funding: "₹15L",
      website: "#",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      name: "EcoVert",
      logo: "🌱",
      description: "Sustainable packaging solutions using biodegradable materials for eco-conscious businesses.",
      category: "Sustainability",
      status: "Incubating",
      tags: ["Sustainability", "Packaging", "Green Tech"],
      funding: "₹8L",
      website: "#",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      name: "HealthLink",
      logo: "⚕️",
      description: "Telemedicine platform connecting rural patients with healthcare professionals through mobile technology.",
      category: "HealthTech",
      status: "Incorporated",
      tags: ["Healthcare", "Mobile", "Rural"],
      funding: "₹12L",
      website: "#",
      bgColor: "bg-red-50"
    },
    {
      id: 4,
      name: "EduSmart",
      logo: "📚",
      description: "Personalized learning platform using adaptive algorithms to enhance student outcomes.",
      category: "EdTech",
      status: "Prototype",
      tags: ["Education", "AI", "Personalization"],
      funding: "₹5L",
      website: "#",
      bgColor: "bg-yellow-50"
    },
    {
      id: 5,
      name: "FinSecure",
      logo: "💳",
      description: "Blockchain-based payment security solution for small and medium enterprises.",
      category: "FinTech",
      status: "Incorporated",
      tags: ["Blockchain", "Security", "Payments"],
      funding: "₹20L",
      website: "#",
      bgColor: "bg-purple-50"
    },
    {
      id: 6,
      name: "AgriTech Pro",
      logo: "🌾",
      description: "IoT-based crop monitoring system providing real-time insights to farmers for better yield.",
      category: "AgriTech",
      status: "Incubating",
      tags: ["IoT", "Agriculture", "Data Analytics"],
      funding: "₹10L",
      website: "#",
      bgColor: "bg-orange-50"
    },
    {
      id: 7,
      name: "CleanEnergy Hub",
      logo: "⚡",
      description: "Smart grid management system optimizing renewable energy distribution in urban areas.",
      category: "CleanTech",
      status: "Prototype",
      tags: ["Clean Energy", "Smart Grid", "Urban"],
      funding: "₹7L",
      website: "#",
      bgColor: "bg-teal-50"
    },
    {
      id: 8,
      name: "LogiTrack",
      logo: "📦",
      description: "Supply chain optimization platform using machine learning for efficient logistics management.",
      category: "Logistics",
      status: "Incorporated",
      tags: ["Logistics", "Machine Learning", "Supply Chain"],
      funding: "₹18L",
      website: "#",
      bgColor: "bg-indigo-50"
    }
  ];

  const successStories = [
    {
      name: "TechFlow Solutions",
      logo: "🚀",
      achievement: "₹15L Funding Raised",
      description: "Successfully raised seed funding and acquired 50+ enterprise clients within 18 months of incubation.",
      metrics: [
        { label: "Revenue", value: "₹25L ARR" },
        { label: "Clients", value: "50+" },
        { label: "Team Size", value: "12" }
      ],
      quote: "RIDE provided us with the perfect launchpad. The mentorship and infrastructure support were instrumental in our success.",
      founder: "Priya Sharma, CEO"
    },
    {
      name: "FinSecure",
      logo: "💳",
      achievement: "₹20L Series A",
      description: "Scaled to process ₹100Cr+ in secure transactions and expanded to 3 cities with strategic partnerships.",
      metrics: [
        { label: "Transactions", value: "₹100Cr+" },
        { label: "Cities", value: "3" },
        { label: "Partners", value: "25+" }
      ],
      quote: "The RIDE ecosystem connected us with industry mentors who helped us navigate complex financial regulations.",
      founder: "Rahul Kumar, Founder"
    },
    {
      name: "HealthLink",
      logo: "⚕️",
      achievement: "Rural Healthcare Impact",
      description: "Served 10,000+ patients in rural areas and partnered with government healthcare initiatives.",
      metrics: [
        { label: "Patients Served", value: "10K+" },
        { label: "Villages", value: "150+" },
        { label: "Doctors", value: "200+" }
      ],
      quote: "RIDE's support helped us scale our impact and make healthcare accessible to underserved communities.",
      founder: "Dr. Amit Patel, Co-founder"
    }
  ];

  const statusColors = {
    "Incorporated": "bg-green-100 text-green-800",
    "Incubating": "bg-blue-100 text-blue-800",
    "Prototype": "bg-yellow-100 text-yellow-800"
  };

  const categories = ["All", "AI/ML", "HealthTech", "EdTech", "FinTech", "AgriTech", "CleanTech", "Sustainability", "Logistics"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                <Building2 className="w-4 h-4 mr-2" />
                Our Portfolio
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
                Startups in Our Ecosystem
              </h1>
              <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
                Discover the innovative companies and entrepreneurs we've supported 
                in their journey from idea to successful business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button size="lg" className="bg-gradient-primary">
                    Apply as Startup
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-primary/30">
                  View Success Metrics
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building2, value: "17+", label: "Companies Incubated" },
              { icon: TrendingUp, value: "₹85L+", label: "Total Funding Raised" },
              { icon: Users, value: "150+", label: "Jobs Created" },
              { icon: Award, value: "8", label: "Awards Won" }
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

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Our Startup Portfolio
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Innovative companies across various sectors, each solving real-world problems
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant="outline" 
                className="cursor-pointer border-primary/30 text-foreground px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Startup Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startups.map((startup, index) => (
              <motion.div
                key={startup.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-gradient-card backdrop-blur-sm border border-primary/10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-lg ${startup.bgColor} flex items-center justify-center text-2xl mr-3`}>
                        {startup.logo}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-primary">{startup.name}</h3>
                        <p className="text-sm text-accent">{startup.category}</p>
                      </div>
                    </div>
                    <Badge className={statusColors[startup.status as keyof typeof statusColors]}>
                      {startup.status}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-foreground mb-4 leading-relaxed">
                    {startup.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {startup.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <div className="text-sm">
                      <span className="text-foreground">Funding: </span>
                      <span className="font-semibold text-primary">{startup.funding}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Success Stories
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Celebrating the achievements of our portfolio companies
            </p>
          </motion.div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-gradient-card backdrop-blur-sm border border-primary/10">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Left: Company Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mr-4">
                          {story.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary">{story.name}</h3>
                          <Badge className="bg-green-100 text-green-800 mt-1">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {story.achievement}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {story.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <div className="text-lg font-bold text-primary">{metric.value}</div>
                            <div className="text-xs text-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Story & Quote */}
                    <div className="lg:col-span-2">
                      <p className="text-foreground mb-6 leading-relaxed">
                        {story.description}
                      </p>
                      
                      <blockquote className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded-r-lg">
                        <p className="text-foreground italic mb-2">"{story.quote}"</p>
                        <cite className="text-sm text-accent font-medium">- {story.founder}</cite>
                      </blockquote>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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
            className="text-center bg-gradient-card backdrop-blur-sm border border-primary/10 rounded-2xl p-12"
          >
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Have an Innovative Idea?
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Join our portfolio of successful startups. Get the support, mentorship, 
              and resources you need to turn your idea into a thriving business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" className="bg-gradient-primary">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-primary/30">
                  Learn About Our Process
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Startups;