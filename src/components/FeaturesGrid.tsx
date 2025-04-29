import { Plane as Plant, HeartPulse, AlertTriangle, Droplets, LineChart, ShoppingBag, BookOpen, Sprout } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesGrid = () => {
  const features = [
    {
      title: 'Diagnostic des plantes',
      description: 'Identifiez les maladies de vos plantes en prenant simplement une photo avec votre appareil.',
      icon: <Plant className="h-7 w-7 text-primary" />,
      to: '/diagnostic-plantes',
      color: 'bg-primary/10'
    },
    {
      title: 'Santé animale',
      description: 'Diagnostiquez les symptômes et recevez des conseils pour la santé de votre bétail.',
      icon: <HeartPulse className="h-7 w-7 text-red-600" />,
      to: '/diagnostic-animaux',
      color: 'bg-red-100'
    },
    {
      title: 'Alertes météo',
      description: 'Restez informé des conditions météorologiques et recevez des alertes en cas de dangers.',
      icon: <AlertTriangle className="h-7 w-7 text-amber-500" />,
      to: '/alertes-meteo',
      color: 'bg-amber-100'
    },
    {
      title: 'Irrigation optimisée',
      description: 'Économisez l&apos;eau grâce à un système d&apos;irrigation intelligent basé sur les besoins réels.',
      icon: <Droplets className="h-7 w-7 text-blue-600" />,
      to: '/agriculture-intelligente',
      color: 'bg-blue-100'
    },
    {
      title: 'Prévision des rendements',
      description: 'Utilisez l&apos;IA pour prédire et optimiser vos rendements agricoles.',
      icon: <LineChart className="h-7 w-7 text-indigo-600" />,
      to: '/agriculture-intelligente',
      color: 'bg-indigo-100'
    },
    {
      title: 'Marché agricole',
      description: 'Vendez vos produits directement aux consommateurs et aux distributeurs locaux.',
      icon: <ShoppingBag className="h-7 w-7 text-green-700" />,
      to: '/marche',
      color: 'bg-green-100'
    },
    {
      title: 'Formation agricole',
      description: 'Accédez à des ressources éducatives pour améliorer vos techniques agricoles.',
      icon: <BookOpen className="h-7 w-7 text-purple-600" />,
      to: '/formation',
      color: 'bg-purple-100'
    },
    {
      title: 'Gestion des engrais',
      description: 'Optimisez l&apos;utilisation des engrais et pesticides pour un meilleur rendement.',
      icon: <Sprout className="h-7 w-7 text-emerald-600" />,
      to: '/agriculture-intelligente',
      color: 'bg-emerald-100'
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nos Services</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Des outils modernes pour vous aider à optimiser votre production et votre rendement
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              to={feature.to}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;