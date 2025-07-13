
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectsProps {
  theme: "light" | "dark";
}

const Projects = ({ theme }: ProjectsProps) => {
  const projects = [
    {
      title: "AI Voice Assistant",
      description: "An intelligent chat application powered by AI with natural language processing capabilities and real-time messaging.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500",
      technologies: ["React", "Python", "OpenAI API", "WebSocket"],
      githubUrl: "https://github.com/Akul-Kaushal/CAP_astra.git",
      liveUrl: "#",
      status: "In Progress"
    },
    {
      title: "Rag Model Using Ollama",
      description: "A smart AI-powered assistant using RAG with Ollama for real-time document search and question answering.",
      image: "/ollama_rag.png",
      technologies: ['React', 'Node.js', 'Flask','HTML','Css'],
      githubUrl: "https://github.com/Akul-Kaushal/Software_front_end_repo.git",
      liveUrl: "akul-kaushal.me",
      status: "Completed"
    },
    {
      title: "Book Store Application",
      description: "An e-commerce application for buying and selling books with user authentication, product management.",
      image: "/book-worm.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "FastAPI","MySQL"],
      githubUrl: "https://github.com/Akul-Kaushal/BookWorm_Blossom.git",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "Bank Management System",
      description: "A comprehensive banking application with user accounts, transactions, and balance management.",
      technologies: ["PL/Sql"],
      githubUrl: "https://github.com/Akul-Kaushal/dbms_project_bank_management_sys.git",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and interactive elements.",
      image: "/portfolio.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#",
      status: "In Progress"
    },
    // {
    //   title: "Learning Management System",
    //   description: "A comprehensive LMS platform for online education with course management, progress tracking, and interactive learning modules.",
    //   image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500",
    //   technologies: ["Next.js", "MongoDB", "Node.js", "JWT"],
    //   githubUrl: "#",
    //   liveUrl: "#",
    //   status: "In Progress"
    // }
  ];

  return (
    <section
        id="projects"
        className={`py-20 ${
          theme === "dark"
            ? "bg-[rgba(57,255,20,0.02)]"
            : "bg-[rgba(49,127,230,0.03)]"
        }`}
      >


      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've been working on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="hover:scale-110 transition-transform"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-5 w-5" />
                      Code
                    </Button>
                    <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
