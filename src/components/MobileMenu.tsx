import { NavLink } from 'react-router-dom';
import { Home, Plane as Plant, AlertTriangle, BookOpen, Droplets, HeartPulse } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
      onClick={onClose}
    >
      <div 
        className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full overflow-y-auto pt-6 pb-9 px-6">
          <div className="space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => `
                flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors
                ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}
              `}
              onClick={onClose}
              end
            >
              <Home className="h-6 w-6" />
              <span className="font-medium text-lg">Accueil</span>
            </NavLink>
            
            <h3 className="font-medium text-sm text-gray-500 uppercase px-4 mt-6 mb-2">
              Diagnostic
            </h3>
            
            <NavLink 
              to="/diagnostic-plantes" 
              className={({ isActive }) => `
                flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors
                ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}
              `}
              onClick={onClose}
            >
              <Plant className="h-6 w-6" />
              <span className="font-medium text-lg">Maladies des plantes</span>
            </NavLink>
            
            <NavLink 
              to="/diagnostic-animaux" 
              className={({ isActive }) => `
                flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors
                ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}
              `}
              onClick={onClose}
            >
              <HeartPulse className="h-6 w-6" />
              <span className="font-medium text-lg">Maladies du bétail</span>
            </NavLink>
            
            <h3 className="font-medium text-sm text-gray-500 uppercase px-4 mt-6 mb-2">
              Climat & Sol
            </h3>
            
            <NavLink 
              to="/alertes-meteo" 
              className={({ isActive }) => `
                flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors
                ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}
              `}
              onClick={onClose}
            >
              <AlertTriangle className="h-6 w-6" />
              <span className="font-medium text-lg">Alertes météo</span>
            </NavLink>
            
            <NavLink 
              to="/agriculture-intelligente" 
              className={({ isActive }) => `
                flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors
                ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}
              `}
              onClick={onClose}
            >
              <Droplets className="h-6 w-6" />
              <span className="font-medium text-lg">Irrigation</span>
            </NavLink>
            
            <h3 className="font-medium text-sm text-gray-500 uppercase px-4 mt-6 mb-2">
              Ressources
            </h3>
            
            <NavLink 
              to="/formation" 
              className={({ isActive }) => `
                flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors
                ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}
              `}
              onClick={onClose}
            >
              <BookOpen className="h-6 w-6" />
              <span className="font-medium text-lg">Formation</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;