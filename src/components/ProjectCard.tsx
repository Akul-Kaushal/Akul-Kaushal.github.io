
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  githubUrl,
  className,
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "overflow-hidden rounded-lg bg-white shadow-md border border-slate-100 transition-all duration-300 hover:shadow-xl group",
        className
      )}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
        <p className="text-slate mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-medium bg-secondary text-slate-light px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-4">
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-accent1 font-medium hover:underline"
            >
              Live Demo
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-light font-medium hover:underline"
            >
              GitHub
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
