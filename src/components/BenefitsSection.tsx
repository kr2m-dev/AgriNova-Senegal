import { Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Augmentation des rendements',
      description: 'Optimisez votre productivité grâce à des conseils personnalisés et des techniques agricoles modernes.'
    },
    {
      title: 'Réduction des pertes',
      description: 'Détectez précocement les maladies et les ravageurs pour minimiser les pertes de récoltes.'
    },
    {
      title: 'Économie d\'eau et d\'intrants',
      description: 'Utilisez précisément la quantité d\'eau et d\'engrais nécessaire grâce à l\'agriculture de précision.'
    },
    {
      title: 'Meilleure résilience climatique',
      description: 'Anticipez les changements climatiques et adaptez vos cultures aux conditions locales.'
    },
    {
      title: 'Accès direct au marché',
      description: 'Vendez directement vos produits sans intermédiaires et augmentez vos revenus.'
    },
    {
      title: 'Formation continue',
      description: 'Améliorez constamment vos connaissances grâce à notre plateforme de formation agricole.'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-primary/5 rounded-xl my-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Les Avantages d'AgriNova Sénégal
          </h2>
          <p className="text-lg text-gray-600">
            Notre technologie transforme l'agriculture traditionnelle en une activité plus productive, 
            durable et rentable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary rounded-full p-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;