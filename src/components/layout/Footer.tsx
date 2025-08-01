import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram,
  Facebook,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About RIDE", path: "/about" },
    { name: "Apply as Startup", path: "/apply" },
    { name: "Join as Mentor", path: "/mentorship" },
    { name: "Events", path: "/events" },
    { name: "Resources", path: "/resources" },
    { name: "Success Stories", path: "/startups" }
  ];

  const resources = [
    { name: "Incorporation Guide", path: "/resources" },
    { name: "DPIIT Registration", path: "/resources" },
    { name: "Funding Toolkit", path: "/resources" },
    { name: "Compliance Guide", path: "/resources" },
    { name: "Pitch Deck Template", path: "/resources" },
    { name: "Business Plan Guide", path: "/resources" }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow"
              >
                <Rocket className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  RIDE
                </span>
                <span className="text-xs text-muted-foreground -mt-1">
                  Incubation Centre
                </span>
              </div>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed">
              Empowering innovation and entrepreneurship at JIIT Noida. 
              Join our ecosystem where ideas transform into thriving businesses.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>JIIT Noida, Sector 128, Noida, UP</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@ride.jiit.ac.in</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9999 XXX XXX</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={resource.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    {resource.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect & Apply */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-foreground">Get Started</h3>
            
            <div className="space-y-4">
              <Link to="/apply">
                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                  <span className="mr-2">Apply as Startup</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/mentorship">
                <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10">
                  Join as Mentor
                </Button>
              </Link>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground"
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p>&copy; 2024 RIDE Incubation Centre, JIIT Noida. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span>DPIIT Recognized</span>
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;