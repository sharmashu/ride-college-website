import { useEffect, useRef, useState } from "react";
import "../styles/event.css";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          description:
            "Third annual hackathon with 200+ participants, 50 innovative solutions, and ₹5L in prizes.",
          type: "hackathon",
          participants: 200,
          icon: Code,
          status: "completed"
        },
        {
          date: "June 2024",
          title: "Startup Showcase Summit",
          description:
            "Major investor meet featuring 17 portfolio startups, leading to ₹45L funding commitments.",
          type: "showcase",
          participants: 150,
          icon: Trophy,
          status: "completed"
        },
        {
          date: "September 2024",
          title: "Industry Partnership Day",
          description:
            "Collaborated with 10+ industry partners to create mentorship and internship opportunities.",
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
          description:
            "Officially recognized by Department for Promotion of Industry and Internal Trade, Government of India.",
          type: "milestone",
          participants: null,
          icon: Award,
          status: "completed"
        },
        {
          date: "May 2023",
          title: "RIDEHack 2.0",
          description:
            "Second edition with focus on sustainable technology solutions, 150 participants across 30 teams.",
          type: "hackathon",
          participants: 150,
          icon: Code,
          status: "completed"
        },
        {
          date: "October 2023",
          title: "First Startup Graduations",
          description:
            "Four startups successfully graduated from incubation program with combined funding of ₹80L.",
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
          description:
            "Official launch of RIDE with state-of-the-art facilities and inaugural batch of 8 startups.",
          type: "launch",
          participants: 100,
          icon: Rocket,
          status: "completed"
        },
        {
          date: "November 2022",
          title: "First RIDEHack",
          description:
            "Inaugural hackathon focusing on innovative solutions for local challenges, 100+ participants.",
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
      description:
        "Annual hackathon focusing on AI solutions for social good. Build innovative applications that can make a positive impact on society.",
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
      description:
        "Pitch your startup idea to a panel of investors and industry experts. Winner receives ₹5L seed funding and incubation support.",
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
      description:
        "One-on-one mentoring sessions with industry leaders. Get guidance on business strategy, funding, and scaling.",
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
      description:
        "Hands-on workshop on emerging technologies including IoT, Blockchain, and Machine Learning applications.",
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
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const getRegistrationProgress = (current: number, max: number) =>
    (current / max) * 100;

  // === Scroll-based animation logic for central spine & glowing ball ===
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  const flatEvents = timelineEvents.flatMap((y) => y.events);

  useEffect(() => {
  let animationFrameId: number | null = null;

  const handleScroll = () => {
    if (animationFrameId !== null) {
      return; // Already scheduled
    }

    animationFrameId = window.requestAnimationFrame(() => {
      if (!timelineRef.current) {
        animationFrameId = null;
        return;
      }

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const height = timelineRef.current.offsetHeight;

      if (rect.bottom >= 0 && rect.top <= viewportHeight) {
        const startOffset = viewportHeight * 0.5;
        const scrolled = Math.max(0, startOffset - rect.top);
        const total = height - viewportHeight * 0.5;
        const progress = Math.min(1, Math.max(0, scrolled / total));
        setScrollProgress(progress);

        const flatEventsLength = timelineEvents.flatMap(y => y.events).length;
        const index = Math.floor(progress * (flatEventsLength - 1));
        setActiveIndex(Math.min(flatEventsLength - 1, Math.max(0, index)));
      }
      animationFrameId = null;
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => {
    if (animationFrameId !== null) {
      window.cancelAnimationFrame(animationFrameId);
    }
    window.removeEventListener('scroll', handleScroll);
  };
}, [timelineEvents]);


  return (
  <Layout>
    <div className="events-page">
      {/* === Background Layers === */}
      {/* Large floating gradient blobs */}
<div className="events-bg-blobs" />

{/* Animated grid overlay */}
<div className="events-grid-overlay" />

{/* Floating Spark Particles */}
<div className="events-particles">
  {Array.from({ length: 25 }).map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 7}s`
      }}
    />
  ))}
</div>

{/* Aurora Wave SVG at bottom */}
<div className="absolute bottom-0 w-full left-0 pointer-events-none z-0">
  <svg width="100%" height="160" viewBox="0 0 1440 160" fill="none">
    <path d="M0 100 Q480 150 960 80 Q1440 100 1440 160 L0 160 Z" fill="url(#auroraGradient)" opacity="0.3" />
    <defs>
      <linearGradient id="auroraGradient" x1="0" y1="0" x2="1440" y2="0">
        <stop stopColor="#7f5af0" />
        <stop offset="1" stopColor="#60c1fa" />
      </linearGradient>
    </defs>
  </svg>
</div>

{/* Animated Light Rays around glowing bulb */}
<div className="absolute top-8 left-1/2 w-72 h-72 pointer-events-none" style={{ transform: 'translateX(-50%)', zIndex: 5 }}>
  <div className="w-full h-full rounded-full bg-gradient-radial from-primary/40 via-primary/20 to-transparent animate-pulse-slow" />
</div>

{/* Rotating Hexagons or Circles */}
<div className="absolute top-10 right-10 w-40 h-40 border-4 border-primary/30 rounded-full animate-spin-slow pointer-events-none" />
<div className="absolute bottom-24 left-24 w-28 h-28 border-2 border-accent/25 rounded-lg animate-spin pointer-events-none" />

      {/* Animated Beams */}
{/* Aurora Waves */}
<div className="absolute w-full bottom-0 left-0 z-5 pointer-events-none">
  <svg width="100%" height="120" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 80 Q480 120 960 40 Q1440 80 1440 120 L0 120 Z" fill="url(#auroraGradient)" opacity="0.23" />
    <defs>
      <linearGradient id="auroraGradient" x1="0" y1="0" x2="1440" y2="0">
        <stop stopColor="#efefff"/><stop offset="1" stopColor="#98fafe"/>
      </linearGradient>
    </defs>
  </svg>
</div>
      <div className="events-bg-blobs" />
      <div className="events-grid-overlay" />
      <div className="events-particles">
  {Array.from({ length: 40 }).map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 7}s`
      }}
    ></span>
  ))}
</div>


      {/* === Foreground Content === */}
      <div className="relative z-20">
        {/* Sticky glowing bulb */}
        <div className="sticky top-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
          <div className="relative">
            <div className="w-12 h-12 bg-primary/20 rounded-full border-2 border-primary/40 backdrop-blur-sm">
              <div className="absolute inset-2 bg-primary/60 rounded-full animate-pulse" />
              <div className="absolute inset-3 bg-primary rounded-full" />
              <div className="absolute -inset-2 bg-primary/10 rounded-full animate-ping" />
            </div>
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              Events & Timeline
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              Upcoming Events
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
              Explore our milestone achievements and join us for upcoming events
              that shape the future of innovation and entrepreneurship.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => {
              const Icon = event.icon;
              const progress = getRegistrationProgress(
                event.currentRegistrations,
                event.maxParticipants
              );
              return (
                <Card
                  key={event.id}
                  className="p-6 bg-gradient-card backdrop-blur-sm border border-primary/10 events-card"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${event.bgColor} flex items-center justify-center mr-3`}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {event.category}
                      </Badge>
                      <h3 className="font-bold text-lg text-primary">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6 text-sm text-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2" />
                      {event.prizes}
                    </div>
                  </div>
                  <p className="mb-6">{event.description}</p>
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Registrations</span>
                      <span>
                        {event.currentRegistrations}/{event.maxParticipants}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Button
                    disabled={!event.registrationOpen}
                    className={`w-full ${
                      event.registrationOpen
                        ? "bg-gradient-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {event.ctaText}
                    {event.registrationOpen && (
                      <ArrowRight className="w-4 h-4 ml-2" />
                    )}
                  </Button>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Animated Timeline Section */}
        <section className="py-20 relative z-10" ref={timelineRef}>
          {/* Timeline Title */}
          <div className="container mx-auto px-4 text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-2 events-section-title">
              Our Journey
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto mt-2">
              Follow our timeline of achievements and milestones
            </p>
          </div>
          <div className="container mx-auto px-4 relative">
            {/* Central Spine - Behind everything */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-primary/20 z-0 pointer-events-none" />

            {/* Progress Line - above spine but behind events */}
            <div
              className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-primary transition-all duration-300 z-10 pointer-events-none"
              style={{ height: `${scrollProgress * 100}%` }}
            />

            {/* Glowing Ball */}
            <div
              className="absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary events-timeline-ball transition-all duration-300 pointer-events-none"
              style={{
                top: `calc(${scrollProgress * 100}% )`
              }}
            ></div>
            {/* Year Blocks and Events */}
            {timelineEvents.map((yearBlock, yIdx) => {
              const flatIdx = timelineEvents
                .slice(0, yIdx)
                .reduce((acc, y) => acc + y.events.length, 0);

              const isYearActive = flatIdx <= activeIndex;

              return (
                <div key={yearBlock.year} className="mb-24 relative z-20">
                  {/* Year Label centered above timeline spine */}
                  <div className="flex flex-col items-center mb-12 relative">
                    <div
                      className={`px-6 py-3 rounded-full font-bold text-xl transition-colors duration-300 events-year-badge ${
                        isYearActive ? "glow" : "outline"
                      }`}
                      style={{ userSelect: "none" }}
                    >
                      {yearBlock.year}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-accent bg-card/80 px-3 py-1 rounded select-none">
                      {yearBlock.title}
                    </h3>
                  </div>
                  {/* Events for this year */}
                  <div className="space-y-20">
                    {yearBlock.events.map((event, eIdx) => {
                      const index = flatIdx + eIdx;
                      const isActive = index <= activeIndex;
                      const isLeft = index % 2 === 0;
                      const Icon = event.icon;
                      return (
                        <div
                          key={index}
                          className={`flex items-center ${
                            isLeft ? "flex-row" : "flex-row-reverse"
                          } relative`}
                        >
                          {/* Checkpoint */}
                          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                            <div
                              className={`w-4 h-4 rounded-full border-4 transition-colors duration-500 ${
                                isActive
                                  ? "bg-primary border-primary shadow-glow-primary"
                                  : "bg-transparent border-primary/30"
                              }`}
                            />
                          </div>
                          {/* Card */}
                          <div className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"}`}>
                            <Card
                              className={`bg-card/50 backdrop-blur-sm border transition-all duration-500 transform events-card ${
                                isActive
                                  ? "border-primary/30 shadow-glow-secondary translate-y-0 opacity-100"
                                  : "border-border/50 translate-y-4 opacity-60"
                              }`}
                            >
                              <CardHeader className="pb-3">
                                <div className="flex items-center justify-between mb-2">
                                  <Badge
                                    className={
                                      eventTypeColors[
                                        event.type as keyof typeof eventTypeColors
                                      ]
                                    }
                                  >
                                    <Icon className="w-3 h-3 mr-1" />
                                    {event.type}
                                  </Badge>
                                  <span className="text-sm text-muted-foreground">
                                    {event.date}
                                  </span>
                                </div>
                                <CardTitle className="text-lg font-semibold text-foreground">
                                  {event.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  {event.description}
                                </p>
                                {event.participants && (
                                  <div className="flex items-center text-sm text-foreground mt-2">
                                    <Users className="w-4 h-4 mr-2" />
                                    {event.participants} participants
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          </div>
                          <div className="w-5/12" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Types of Events Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                Types of Events We Host
              </h2>
              <p className="text-xl text-foreground max-w-2xl mx-auto">
                Diverse opportunities for learning, networking, and innovation
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Hackathons",
                  description:
                    "24-48 hour coding marathons where teams build innovative solutions to real-world problems.",
                  features: [
                    "Prize pools up to ₹10L",
                    "Industry mentors",
                    "Networking opportunities",
                    "Prototype development"
                  ]
                },
                {
                  icon: Users,
                  title: "Workshops & Seminars",
                  description:
                    "Educational sessions covering entrepreneurship, technology trends, and business development.",
                  features: [
                    "Expert speakers",
                    "Hands-on learning",
                    "Skill development",
                    "Certification programs"
                  ]
                },
                {
                  icon: Trophy,
                  title: "Pitch Competitions",
                  description:
                    "Platforms for startups to present their ideas to investors and win funding opportunities.",
                  features: [
                    "Investor panel",
                    "Funding opportunities",
                    "Media exposure",
                    "Mentorship access"
                  ]
                }
              ].map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 h-full bg-gradient-card backdrop-blur-sm border border-primary/10 events-card"
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {category.title}
                      </h3>
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
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);

}

export default Events;
