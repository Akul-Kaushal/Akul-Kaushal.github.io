
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false,
  className
}: SectionTitleProps) => {
  return (
    <div className={cn(
      centered ? 'text-center mx-auto' : '',
      'mb-12',
      className
    )}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={cn("section-subtitle", centered && "mx-auto")}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
