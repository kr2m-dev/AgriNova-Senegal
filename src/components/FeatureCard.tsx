import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  to: string;
  color?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  to,
  color = 'bg-primary/10'
}: FeatureCardProps) => {
  return (
    <div className="card hover:translate-y-[-5px] transition-all">
      <div className={`rounded-full ${color} w-14 h-14 flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={to} 
        className="flex items-center text-primary font-medium hover:underline"
      >
        Découvrir
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default FeatureCard;