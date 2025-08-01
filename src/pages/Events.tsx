import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users,
  Trophy,
  Lightbulb,
  Rocket,
  Code,
  Award,
  ArrowRight,
  ExternalLink,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const timelineEvents = [
    {
      year: "2024",
      title: "RIDE Expansion & Growth",
      events: [
        {
          date: "March 2024",
          title: "RIDEHack 3.0",
          description: "Third annual hackathon with 200+ participants, 50 innovative solutions, and ₹5L in prizes.",
          type: "hackathon",
          participants: 200,
          icon: Code,
          status: "completed"
        },
        {
          date: "June 2024",
          title: "Startup Showcase Summit",
          description: "Major investor meet featuring 17 portfolio startups, leading to ₹45L funding commitments.",
          type: "showcase",
          participants: 150,
          icon: Trophy,
          status: "completed"
        },
        {
          date: "September 2024",
          title: "Industry Partnership Day",
          description: "Collaborated with 10+ industry partners to create mentorship and internship opportunities.",
          type: "partnership",
          participants: 80,
          icon: Lightbulb,
          status: "completed"
        }
      ]
    },
    {
      year: "2023",
      title: "Milestone Year",
      events: [
        {
          date: "February 2023",
          title: "DPIIT Recognition Achieved",
          description: "Officially recognized by Department for Promotion of Industry and Internal Trade, Government of India.",
          type: "milestone",
          participants: null,
          icon: Award,
          status: "completed"
        },
        {
          date: "May 2023",
          title: "RIDEHack 2.0",
          description: "Second edition with focus on sustainable technology solutions, 150 participants across 30 teams.",
          type: "hackathon",
          participants: 150,
          icon: Code,
          status: "completed"
        },
        {
          date: "October 2023",
          title: "First Startup Graduations",
          description: "Four startups successfully graduated from incubation program with combined funding of ₹80L.",
          type: "graduation",
          participants: 50,
          icon: Rocket,
          status: "completed"
        }
      ]
    },
    {
      year: "2022",
      title: "Foundation & Growth",
      events: [
        {
          date: "August 2022",
          title: "RIDE Incubation Centre Launch",
          description: "Official launch of RIDE with state-of-the-art facilities and inaugural batch of 8 startups.",
          type: "launch",
          participants: 100,
          icon: Rocket,
          status: "completed"
        },
        {
          date: "November 2022",
          title: "First RIDEHack",
          description: "Inaugural hackathon focusing on innovative solutions for local challenges, 100+ participants.",
          type: "hackathon",
          participants: 100,
          icon: Code,
          status: "completed"
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "RIDEHack 4.0: AI for Good",
      date: "2025-03-15",
      time: "09:00 AM",
      location: "JIIT Noida Campus",
      description: "Annual hackathon focusing on AI solutions for social good. Build innovative applications that can make a positive impact on society.",
      category: "Hackathon",
      registrationOpen: true,
      maxParticipants: 300,
      currentRegistrations: 87,
      prizes: "₹10L Total Prize Pool",
      icon: Code,
      bgColor: "bg-blue-50",
      ctaText: "Register Now"
    },
    {
      id: 2,
      title: "Startup Pitch Championship",
      date: "2025-04-20",
      time: "10:00 AM",
      location: "Innovation Auditorium",
      description: "Pitch your startup idea to a panel of investors and industry experts. Winner receives ₹5L seed funding and incubation support.",
      category: "Competition",
      registrationOpen: true,
      maxParticipants: 50,
      currentRegistrations: 23,
      prizes: "₹5L Seed Funding",
      icon: Trophy,
      bgColor: "bg-yellow-50",
      ctaText: "Apply to Pitch"
    },
    {
      id: 3,
      title: "Industry Mentor Connect",
      date: "2025-05-10",
      time: "02:00 PM",
      location: "RIDE Conference Hall",
      description: "One-on-one mentoring sessions with industry leaders. Get guidance on business strategy, funding, and scaling.",
      category: "Mentorship",
      registrationOpen: true,
      maxParticipants: 100,
      currentRegistrations: 45,
      prizes: "Free Mentoring Sessions",
      icon: Users,
      bgColor: "bg-green-50",
      ctaText: "Book Session"
    },
    {
      id: 4,
      title: "Innovation Workshop Series",
      date: "2025-06-05",
      time: "11:00 AM",
      location: "Tech Lab, JIIT",
      description: "Hands-on workshop on emerging technologies including IoT, Blockchain, and Machine Learning applications.",
      category: "Workshop",
      registrationOpen: false,
      maxParticipants: 80,
      currentRegistrations: 15,
      prizes: "Certificates & Goodies",
      icon: Lightbulb,
      bgColor: "bg-purple-50",
      ctaText: "Notify Me"
    }
  ];

  const eventTypeColors = {
    hackathon: "bg-blue-100 text-blue-800",
    showcase: "bg-green-100 text-green-800",
    partnership: "bg-purple-100 text-purple-800",
    milestone: "bg-yellow-100 text-yellow-800",
    graduation: "bg-red-100 text-red-800",
    launch: "bg-indigo-100 text-indigo-800"
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getRegistrationProgress = (current: number, max: number) => {
    return (current / max) * 100;
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
                <Calendar className="w-4 h-4 mr-2" />
                Events & Timeline
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
                Our Journey & Upcoming Events
              </h1>
              <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
                Explore our milestone achievements and join us for upcoming events 
                that shape the future of innovation and entrepreneurship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Upcoming Events
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Join us for exciting opportunities to innovate, learn, and network
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => {
              const Icon = event.icon;
              const progress = getRegistrationProgress(event.currentRegistrations, event.maxParticipants);
              
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full bg-gradient-card backdrop-blur-sm border border-primary/10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-lg ${event.bgColor} flex items-center justify-center mr-3`}>
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">{event.category}</Badge>
                          <h3 className="font-bold text-lg text-primary">{event.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-sm text-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-foreground">
                        <Trophy className="w-4 h-4 mr-2" />
                        {event.prizes}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Registration Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground">Registrations</span>
                        <span className="text-foreground">
                          {event.currentRegistrations}/{event.maxParticipants}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full ${event.registrationOpen ? 'bg-gradient-primary' : 'bg-muted text-muted-foreground'}`}
                      disabled={!event.registrationOpen}
                    >
                      {event.ctaText}
                      {event.registrationOpen && <ArrowRight className="w-4 h-4 ml-2" />}
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
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
              Our Journey Timeline
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Key milestones and achievements that shaped RIDE's growth
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2"></div>

            {timelineEvents.map((yearData, yearIndex) => (
              <div key={yearData.year} className="mb-16">
                {/* Year Header */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex justify-center mb-8"
                >
                  <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-xl">
                    {yearData.year}
                  </div>
                  <h3 className="absolute top-16 text-center text-lg font-semibold text-accent">
                    {yearData.title}
                  </h3>
                </motion.div>

                {/* Events for this year */}
                <div className="space-y-8 mt-16">
                  {yearData.events.map((event, eventIndex) => {
                    const Icon = event.icon;
                    const isLeft = eventIndex % 2 === 0;
                    
                    return (
                      <motion.div
                        key={eventIndex}
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-start`}
                      >
                        {/* Timeline Node */}
                        <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-6 z-10"></div>
                        
                        {/* Event Card */}
                        <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${!isLeft ? 'md:mr-16' : ''}`}>
                          <Card className="p-6 bg-gradient-card backdrop-blur-sm border border-primary/10">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                                  <Icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <Badge className={eventTypeColors[event.type as keyof typeof eventTypeColors]} variant="secondary">
                                    {event.type}
                                  </Badge>
                                  <p className="text-sm text-accent mt-1">{event.date}</p>
                                </div>
                              </div>
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                            
                            <h4 className="text-lg font-bold text-primary mb-3">{event.title}</h4>
                            <p className="text-foreground leading-relaxed mb-4">{event.description}</p>
                            
                            {event.participants && (
                              <div className="flex items-center text-sm text-foreground">
                                <Users className="w-4 h-4 mr-2" />
                                {event.participants} participants
                              </div>
                            )}
                          </Card>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
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
              Types of Events We Host
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Diverse opportunities for learning, networking, and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Hackathons",
                description: "24-48 hour coding marathons where teams build innovative solutions to real-world problems.",
                features: ["Prize pools up to ₹10L", "Industry mentors", "Networking opportunities", "Prototype development"]
              },
              {
                icon: Users,
                title: "Workshops & Seminars",
                description: "Educational sessions covering entrepreneurship, technology trends, and business development.",
                features: ["Expert speakers", "Hands-on learning", "Skill development", "Certification programs"]
              },
              {
                icon: Trophy,
                title: "Pitch Competitions",
                description: "Platforms for startups to present their ideas to investors and win funding opportunities.",
                features: ["Investor panel", "Funding opportunities", "Media exposure", "Mentorship access"]
              }
            ].map((category, index) => {
              const Icon = category.icon;
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
                      <h3 className="text-xl font-bold text-primary mb-2">{category.title}</h3>
                    </div>
                    
                    <p className="text-foreground mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-card backdrop-blur-sm border border-primary/10 rounded-2xl p-12"
          >
            <Calendar className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Stay Updated with Our Events
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss an opportunity to be part 
              of the innovation ecosystem at RIDE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary">
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-primary/30">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;