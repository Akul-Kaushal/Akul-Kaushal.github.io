
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Profile Picture Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 flex items-center justify-center border-4 border-primary/30 hover:scale-105 transition-transform duration-300">
            <img
              src="/akul.png" 
              alt="Profile"
              className="w-50 h-50 rounded-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            AKUL KAUSHAL
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Creative Problem Solver | Backend Developer | Cybersecurity Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Passionate about building scalable backend systems and enhancing cybersecurity measures. 
            I thrive on challenges and love to create solutions that make a difference.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 transition-transform"
              onClick={() => window.open("https://github.com/akul-kaushal", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
            {/* <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5" />
            </Button> */}
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="hover:scale-105 transition-transform"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="hover:scale-105 transition-transform"
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown 
              className="mx-auto h-6 w-6 text-muted-foreground cursor-pointer hover:text-primary transition-colors"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
