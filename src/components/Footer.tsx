import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white pt-10 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="font-bold text-xl">AgriNova Sénégal</span>
            </div>
            <p className="text-white/80 mb-4">
              Révolutionner l'agriculture au Sénégal grâce à des technologies modernes, 
              accessibles et adaptées aux besoins des agriculteurs.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-white/80 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/diagnostic-plantes" className="text-white/80 hover:text-white transition-colors">
                  Diagnostic des plantes
                </Link>
              </li>
              <li>
                <Link to="/alertes-meteo" className="text-white/80 hover:text-white transition-colors">
                  Alertes météo
                </Link>
              </li>
              <li>
                <Link to="/marche" className="text-white/80 hover:text-white transition-colors">
                  Marché agricole
                </Link>
              </li>
              <li>
                <Link to="/formation" className="text-white/80 hover:text-white transition-colors">
                  Formation
                </Link>
              </li>
            </ul>
          </div>

          {/* Outils */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nos Outils</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/diagnostic-plantes" className="text-white/80 hover:text-white transition-colors">
                  Reconnaissance des maladies
                </Link>
              </li>
              <li>
                <Link to="/alertes-meteo" className="text-white/80 hover:text-white transition-colors">
                  Prévisions météorologiques
                </Link>
              </li>
              <li>
                <Link to="/agriculture-intelligente" className="text-white/80 hover:text-white transition-colors">
                  Optimisation de l'irrigation
                </Link>
              </li>
              <li>
                <Link to="/agriculture-intelligente" className="text-white/80 hover:text-white transition-colors">
                  Gestion des engrais
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 text-white/90" />
                <span className="text-white/80">contact@agrinova -senegal.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 text-white/90" />
                <span className="text-white/80">+221 xx xxx xx xx</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60">
          <p>&copy; {currentYear} AgriNova Sénégal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;