import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page non trouvée | AgriTech Sénégal';
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="max-w-md mx-auto">
        <AlertTriangle className="h-24 w-24 text-amber-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Page non trouvée</h1>
        <p className="text-gray-600 text-lg mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          <Home className="h-5 w-5 mr-2" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;