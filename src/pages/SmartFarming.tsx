import { useState } from 'react';
import { Droplets, Wind, Sun, LineChart, TestTube, Sprout } from 'lucide-react';

interface Tab {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const SmartFarming = () => {
  const [activeTab, setActiveTab] = useState<string>('irrigation');
  
  const tabs: Tab[] = [
    { id: 'irrigation', name: 'Irrigation', icon: <Droplets className="h-5 w-5" /> },
    { id: 'prediction', name: 'IA & Prédiction', icon: <LineChart className="h-5 w-5" /> },
    { id: 'pests', name: 'Ravageurs', icon: <TestTube className="h-5 w-5" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Agriculture Intelligente</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Explorez nos solutions d'agriculture de précision pour optimiser votre productivité, 
        économiser les ressources et augmenter vos rendements.
      </p>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
        <div className="flex flex-wrap border-b">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`flex items-center px-4 py-3 font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'text-primary border-b-2 border-primary bg-primary/5' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>
        
        <div className="p-6">
          {activeTab === 'irrigation' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Optimisation de l'irrigation</h2>
              
              <div className="mb-8">
                <p className="text-lg mb-4">
                  Notre système d'irrigation intelligente utilise des capteurs IoT pour mesurer l'humidité du sol 
                  en temps réel et déclencher l'irrigation seulement lorsque vos cultures en ont besoin.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2 my-8">
                  <div className="bg-blue-50 rounded-lg p-5">
                    <h3 className="flex items-center text-lg font-semibold mb-3">
                      <Droplets className="h-5 w-5 text-blue-600 mr-2" />
                      Économie d'eau
                    </h3>
                    <p>
                      Réduisez votre consommation d'eau jusqu'à 60% par rapport aux méthodes traditionnelles 
                      en n'irriguant que lorsque c'est nécessaire.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-5">
                    <h3 className="flex items-center text-lg font-semibold mb-3">
                      <LineChart className="h-5 w-5 text-green-600 mr-2" />
                      Augmentation des rendements
                    </h3>
                    <p>
                      Améliorez vos rendements de 20 à 30% grâce à une irrigation optimale qui évite 
                      le stress hydrique des plantes.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-5">
                    <h3 className="flex items-center text-lg font-semibold mb-3">
                      <Sun className="h-5 w-5 text-amber-600 mr-2" />
                      Adaptation aux conditions climatiques
                    </h3>
                    <p>
                      Le système s'adapte automatiquement aux conditions météorologiques actuelles 
                      et aux prévisions pour les prochains jours.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-5">
                    <h3 className="flex items-center text-lg font-semibold mb-3">
                      <Wind className="h-5 w-5 text-purple-600 mr-2" />
                      Installation simple
                    </h3>
                    <p>
                      Notre équipe vous aide à concevoir et installer un système adapté à la taille 
                      et aux besoins spécifiques de votre exploitation.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Comment ça fonctionne</h3>
                <ol className="list-decimal ml-6 space-y-2 mb-6">
                  <li>
                    <strong>Installation des capteurs</strong> : Des capteurs d'humidité du sol sont placés 
                    à différentes profondeurs dans vos champs.
                  </li>
                  <li>
                    <strong>Collecte de données</strong> : Les capteurs transmettent les données en temps réel 
                    à notre plateforme.
                  </li>
                  <li>
                    <strong>Analyse</strong> : Notre système analyse les besoins en eau de vos cultures en fonction 
                    des données des capteurs, des conditions météorologiques et du stade de croissance des plantes.
                  </li>
                  <li>
                    <strong>Irrigation automatique</strong> : Le système active l'irrigation uniquement lorsque 
                    nécessaire, avec la quantité d'eau optimale.
                  </li>
                  <li>
                    <strong>Surveillance via application</strong> : Vous pouvez surveiller et contrôler le système 
                    à distance via notre application mobile.
                  </li>
                </ol>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                  <h4 className="font-semibold mb-2">Témoignage</h4>
                  <p className="italic text-gray-700">
                    "Depuis que j'ai installé le système d'irrigation intelligente, j'ai réduit ma consommation 
                    d'eau de 50% tout en augmentant mon rendement de maraîchage de 25%. L'investissement a été 
                    rentabilisé en moins d'une saison."
                  </p>
                  <p className="mt-2 font-medium">- Mamadou Diop, maraîcher à Thiès</p>
                </div>
                
                <div className="text-center">
                  <button className="btn btn-primary px-8">
                    Demander une consultation
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'prediction' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Prédiction des rendements par IA</h2>
              
              <div className="mb-8">
                <p className="text-lg mb-4">
                  Notre technologie d'intelligence artificielle analyse des millions de données pour 
                  prédire vos rendements et vous aider à prendre les meilleures décisions pour votre exploitation.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2 my-8">
                  <div className="bg-indigo-50 rounded-lg p-5">
                    <h3 className="flex items-center text-lg font-semibold mb-3">
                      <LineChart className="h-5 w-5 text-indigo-600 mr-2" />
                      Prévisions précises
                    </h3>
                    <p>
                      Obtenez des prévisions de rendement avec une précision de 85-90% plusieurs 
                      semaines avant la récolte.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-5">
                    <h3 className="flex items-center text-lg font-semibold mb-3">
                      <Tractor className="h-5 w-5 text-green-600 mr-2" />
                      Planification optimisée
                    </h3>
                    <p>
                      Planifiez mieux vos opérations de récolte, stockage et commercialisation 
                      grâce à des données fiables.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-5">
                    <h3 className="flex items-center text-lg font-semibold mb-3">
                      <Sun className="h-5 w-5 text-amber-600 mr-2" />
                      Analyse des facteurs d'influence
                    </h3>
                    <p>
                      Identifiez les facteurs qui influencent le plus vos rendements: climat, 
                      irrigation, fertilisation, etc.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-5">
                    <h3 className="flex items-center text-lg font-semibold mb-3">
                      <CloudRain className="h-5 w-5 text-blue-600 mr-2" />
                      Adaptation climatique
                    </h3>
                    <p>
                      Recevez des recommandations pour adapter vos pratiques aux changements 
                      climatiques prévus.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Notre approche</h3>
                <p className="mb-4">
                  Nous utilisons des algorithmes d'apprentissage profond qui analysent:
                </p>
                <ul className="list-disc ml-6 space-y-2 mb-6">
                  <li>
                    <strong>Données historiques</strong> de rendement de votre exploitation
                  </li>
                  <li>
                    <strong>Données météorologiques</strong> passées, actuelles et prévisions
                  </li>
                  <li>
                    <strong>Images satellites</strong> pour évaluer la santé des cultures
                  </li>
                  <li>
                    <strong>Données des capteurs IoT</strong> sur votre terrain (humidité, température, etc.)
                  </li>
                  <li>
                    <strong>Pratiques agricoles</strong> (semis, irrigation, fertilisation, etc.)
                  </li>
                </ul>
                
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5 mb-6">
                  <h4 className="font-semibold mb-2">Pourquoi utiliser la prédiction de rendement?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>Négociez de meilleurs contrats de vente avec des estimations précises</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>Optimisez votre logistique et vos ressources humaines pour la récolte</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>Améliorez vos décisions d'investissement avec une meilleure visibilité</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>Réduisez les pertes en agissant rapidement sur les problèmes identifiés</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <button className="btn btn-primary px-8">
                    Essayer la prédiction pour votre exploitation
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'pests' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Détection des ravageurs</h2>
              
              <div className="mb-8">
                <p className="text-lg mb-4">
                  Notre système de surveillance par drones permet d'identifier précocement les infestations 
                  de ravageurs et les maladies, vous permettant d'agir avant que les dégâts ne soient importants.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2 my-8">
                  <div className="bg-red-50 rounded-lg p-5">
                    <h3 className="flex items-center text-lg font-semibold mb-3">
                      <TestTube className="h-5 w-5 text-red-600 mr-2" />
                      Détection précoce
                    </h3>
                    <p>
                      Identifiez les infestations jusqu'à 2 semaines plus tôt qu'avec 
                      des inspections visuelles traditionnelles.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-5">
                    <h3 className="flex items-center text-lg font-semibold mb-3">
                      <Tractor className="h-5 w-5 text-green-600 mr-2" />
                      Traitement ciblé
                    </h3>
                    <p>
                      Appliquez les traitements uniquement où c'est nécessaire, réduisant 
                      ainsi l'utilisation de pesticides.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-5">
                    <h3 className="flex items-center text-lg font-semibold mb-3">
                      <Sun className="h-5 w-5 text-amber-600 mr-2" />
                      Cartographie des risques
                    </h3>
                    <p>
                      Identifiez les zones à haut risque dans votre exploitation pour une 
                      surveillance accrue.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-5">
                    <h3 className="flex items-center text-lg font-semibold mb-3">
                      <Wind className="h-5 w-5 text-blue-600 mr-2" />
                      Prévision des propagations
                    </h3>
                    <p>
                      Anticipez la propagation des ravageurs en fonction des conditions 
                      météorologiques et des vents dominants.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Notre technologie</h3>
                <p className="mb-4">
                  Nous utilisons des drones équipés de caméras multi-spectrales et thermiques qui survolent 
                  régulièrement vos champs pour collecter des données. Notre IA analyse ces images pour:
                </p>
                <ul className="list-disc ml-6 space-y-2 mb-6">
                  <li>
                    <strong>Détecter les signes précoces</strong> d'infestation (changements de couleur des feuilles, 
                    patterns de croissance anormaux)
                  </li>
                  <li>
                    <strong>Identifier les espèces de ravageurs</strong> présentes dans vos cultures
                  </li>
                  <li>
                    <strong>Estimer le niveau d'infestation</strong> et son impact potentiel sur le rendement
                  </li>
                  <li>
                    <strong>Recommander des stratégies de traitement</strong> adaptées à chaque situation
                  </li>
                  <li>
                    <strong>Suivre l'efficacité des traitements</strong> appliqués
                  </li>
                </ul>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
                  <h4 className="font-semibold mb-2">Avantages économiques et environnementaux</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Réduction de 60-70% des pertes dues aux ravageurs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Diminution de 40-50% de l'utilisation de pesticides</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Préservation des insectes bénéfiques et pollinisateurs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Amélioration de la qualité des produits (moins de résidus chimiques)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <button className="btn btn-primary px-8">
                    Programmer un survol de démonstration
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmartFarming;