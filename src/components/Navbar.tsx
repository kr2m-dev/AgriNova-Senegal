import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-30 transition-colors duration-300 
                 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl md:text-2xl">AgriNova Sénégal</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-base font-medium transition-colors hover:text-primary
               ${isActive ? 'text-primary' : 'text-gray-700'}`
            }
            end
          >
            Accueil
          </NavLink>
          <NavLink 
            to="/diagnostic-plantes" 
            className={({ isActive }) => 
              `text-base font-medium transition-colors hover:text-primary
               ${isActive ? 'text-primary' : 'text-gray-700'}`
            }
          >
            Diagnostic
          </NavLink>
          <NavLink 
            to="/alertes-meteo" 
            className={({ isActive }) => 
              `text-base font-medium transition-colors hover:text-primary
               ${isActive ? 'text-primary' : 'text-gray-700'}`
            }
          >
            Alertes
          </NavLink>
          <NavLink 
            to="/marche" 
            className={({ isActive }) => 
              `text-base font-medium transition-colors hover:text-primary
               ${isActive ? 'text-primary' : 'text-gray-700'}`
            }
          >
            Marché
          </NavLink>
          <NavLink 
            to="/formation" 
            className={({ isActive }) => 
              `text-base font-medium transition-colors hover:text-primary
               ${isActive ? 'text-primary' : 'text-gray-700'}`
            }
          >
            Formation
          </NavLink>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;