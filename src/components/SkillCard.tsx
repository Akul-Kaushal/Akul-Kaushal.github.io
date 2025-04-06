
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  skills: string[];
  className?: string;
}

const SkillCard = ({ title, skills, className }: SkillCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-6 shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg",
      className
    )}>
      <h3 className="text-navy text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-secondary px-3 py-1 rounded-full text-sm font-medium text-slate"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
