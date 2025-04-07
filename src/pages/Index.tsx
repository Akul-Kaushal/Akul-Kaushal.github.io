import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center bg-navy pt-16"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy bg-opacity-90"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <p className="text-accent1 font-medium mb-5 animate-fadeIn">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-lighter mb-4 animate-slideUp">
              Akul Kaushal.
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate mb-6 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Exploring the world of tech, one byte at a time.
            </h2>
            {/* <p className="text-slate max-w-lg mb-8 text-lg animate-slideUp" style={{ animationDelay: '0.4s' }}>
              I'm a software developer specializing in building exceptional digital experiences.
              Currently, I'm focused on creating accessible, human-centered products.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{ animationDelay: '0.6s' }}>
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
            
            <div className="hidden md:flex fixed left-6 bottom-0 flex-col items-center gap-6">
              <a 
                href="https://github.com/Akul-Kaushal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-accent1 hover:translate-y-[-5px] transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              {/* <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-accent1 hover:translate-y-[-5px] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a> */}
              <a 
                href="mailto:akulkaushal.main@gmail.com"
                className="text-slate hover:text-accent1 hover:translate-y-[-5px] transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <div className="h-24 w-px bg-slate"></div>
            </div>
          </div>
          
          <a 
            href="#about" 
            className="absolute bottom left-1/2 transform -translate-x-1/2 text-slate hover:text-accent1 transition-colors flex flex-col items-center gap-2"
            aria-label="Scroll down"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionTitle 
            title="About Me" 
            subtitle="Here you'll find more information about me, what I do, and my current skills in terms of programming and technology."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-4 text-navy">Get to know me!</h3>
              <div className="space-y-4 text-slate">
                <p>
                I'm a curious tech explorer with a growing foundation in full-stack development and a deep interest in cybersecurity. 
                I’ve worked with technologies like React, FastAPI, Supabase, and MySQL, building everything from authentication flows to API integrations.
                </p>
                <p>
                My passion for tech doesn't stop at development—I love diving into low-level topics like buffer overflows, PE code injection, and vulnerability testing using tools like WSL, Docker, and even Raspberry Pi.
                I'm always experimenting, whether it's setting up a network with VLANs, learning deep learning, or building a task manager that integrates with Notion's API.
                </p>
                <p>
                What drives me is the thrill of learning—solving problems, breaking things to understand them, and constantly pushing my boundaries.
                I enjoy working on projects that blend creativity with logic, and I’m always open to collaborating with others who share a love for tech.
                </p>
              </div>
              
              <a href="#contact" className="btn btn-primary inline-flex mt-6">
                Contact Me
              </a>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4 text-navy">My Skills</h3>
              
              {/* <SkillCard 
                title="Frontend Development"
                skills={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS']}
              /> */}
              
              <SkillCard 
                title="Backend Development"
                skills={['Node.js','Firebase']}
              />
              
              <SkillCard 
                title="Tools & Others"
                skills={['Git', 'Webpack',]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionTitle 
            title="My Projects" 
            subtitle="Here's a collection of my recent work. Each project represents different challenges and solutions."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Rag Model Using Ollama"
              description="A smart AI-powered assistant using RAG with Ollama for real-time document search and question answering."
              tags={['React', 'Node.js', 'Flask','HTML','Css']}
              imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              // liveUrl="https://example.com"
              githubUrl="https://github.com/Akul-Kaushal/Software_front_end_repo.git"
            />
            
            <ProjectCard 
              title="Book Store Database"
              description="A backend service for a book store, built with FastAPI and MySQL, supporting book listings, availability status, and inventory management."
              tags={['FastApi','MySQL']}
              imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              // liveUrl="https://example.com"
              githubUrl="https://github.com/Akul-Kaushal/Book_store_mangement.git"
            />
            
            <ProjectCard 
              title="Book Worm Blossom"
              description="A user authentication system and admin dashboard for the bookstore, enabling secure login, book management, and real-time status updates."
              tags={['Javascript', 'HTML', 'CSS', 'React']}
              imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              // liveUrl="https://example.com"
              githubUrl="https://github.com/Akul-Kaushal/Software_front_end_repo.git"
            />
            
            {/* <ProjectCard 
              title="Rag Model Using Ollama"
              description="A health application for tracking workout routines, progress, and nutritional information."
              tags={['React Native', 'Firebase']}
              imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              liveUrl="https://example.com"
              githubUrl="https://github.com"
            />
            
            <ProjectCard 
              title="Social Media Dashboard"
              description="Analytics dashboard for tracking social media metrics across multiple platforms."
              tags={['React', 'Chart.js', 'REST API']}
              imageUrl="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
              liveUrl="https://example.com"
              githubUrl="https://github.com"
            />
            
            <ProjectCard 
              title="Recipe Finder"
              description="Culinary application for discovering new recipes based on available ingredients."
              tags={['JavaScript', 'API', 'Responsive']}
              imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              liveUrl="https://example.com"
              githubUrl="https://github.com"
            /> */}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/Akul-Kaushal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline inline-flex"
            >
              See More on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionTitle 
            title="Get In Touch" 
            subtitle="Have a question or want to work together? Feel free to reach out to me using the form below."
            centered
          />
          
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
