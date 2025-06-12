
import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and efficient code"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and clients"
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Committed to delivering quality results"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a tech enthusiast with a strong foundation in full-stack development, skilled in React, FastAPI, Supabase, and MySQL. 
              I’ve built a variety of projects, from authentication flows to complex API integrations.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My passion extends into cybersecurity and low-level programming, where I explore buffer overflows, PE code injection, and vulnerability testing using tools like WSL, Docker, and Raspberry Pi. 
              I enjoy hands-on experimentation with networks, VLANs, and deep learning.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Driven by curiosity and problem-solving, I love blending creativity with logic in my projects. 
              I’m always eager to learn, break things to understand them better, and collaborate with others who share my passion for technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
