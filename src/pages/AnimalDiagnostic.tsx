import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, AlertTriangle } from 'lucide-react';

interface Symptom {
  id: number;
  name: string;
  category: string;
}

interface Disease {
  id: number;
  name: string;
  symptoms: number[];
  description: string;
  treatment: string;
  prevention: string;
  severity: 'low' | 'medium' | 'high';
}

const AnimalDiagnostic = () => {
  const [animalType, setAnimalType] = useState<string>('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([]);
  const [openCategory, setOpenCategory] = useState<string | null>('general');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [diagnoseClicked, setDiagnoseClicked] = useState<boolean>(false);
  
  const symptoms: Symptom[] = [
    { id: 1, name: 'Fièvre', category: 'general' },
    { id: 2, name: 'Perte d\'appétit', category: 'general' },
    { id: 3, name: 'Perte de poids', category: 'general' },
    { id: 4, name: 'Léthargie/Fatigue', category: 'general' },
    { id: 5, name: 'Toux', category: 'respiratory' },
    { id: 6, name: 'Difficultés respiratoires', category: 'respiratory' },
    { id: 7, name: 'Écoulement nasal', category: 'respiratory' },
    { id: 8, name: 'Diarrhée', category: 'digestive' },
    { id: 9, name: 'Vomissements', category: 'digestive' },
    { id: 10, name: 'Ballonnements', category: 'digestive' },
    { id: 11, name: 'Lésions cutanées', category: 'skin' },
    { id: 12, name: 'Démangeaisons', category: 'skin' },
    { id: 13, name: 'Perte de poils', category: 'skin' },
    { id: 14, name: 'Boiterie', category: 'locomotion' },
    { id: 15, name: 'Gonflement des articulations', category: 'locomotion' },
  ];

  const diseases: Disease[] = [
    {
      id: 1,
      name: 'Fièvre aphteuse',
      symptoms: [1, 11, 14],
      description: 'Maladie virale très contagieuse qui affecte les bovins, ovins, caprins et porcins. Elle se caractérise par des lésions vésiculeuses sur les muqueuses et la peau.',
      treatment: 'Il n\'existe pas de traitement spécifique. Traitement symptomatique pour soulager la douleur et prévenir les infections secondaires.',
      prevention: 'Vaccination régulière du bétail. Contrôle strict des mouvements des animaux. Mesures de biosécurité rigoureuses.',
      severity: 'high'
    },
    {
      id: 2,
      name: 'Fièvre de la Vallée du Rift',
      symptoms: [1, 2, 8, 9],
      description: 'Maladie virale qui affecte principalement les ruminants, mais peut aussi être transmise à l\'homme. Elle provoque des avortements chez les femelles gestantes.',
      treatment: 'Pas de traitement spécifique. Traitement de soutien pour maintenir l\'hydratation et l\'équilibre électrolytique.',
      prevention: 'Vaccination du bétail. Contrôle des moustiques vecteurs. Éviter les zones inondées pendant les périodes d\'épidémie.',
      severity: 'high'
    },
    {
      id: 3,
      name: 'Dermatophilose',
      symptoms: [11, 12, 13],
      description: 'Infection bactérienne de la peau qui affecte de nombreuses espèces animales, caractérisée par des croûtes et des lésions cutanées.',
      treatment: 'Antibiotiques (pénicilline ou tétracycline). Nettoyage et désinfection des lésions. Amélioration des conditions d\'hébergement.',
      prevention: 'Éviter l\'exposition prolongée à l\'humidité. Contrôle des tiques. Amélioration de l\'hygiène générale.',
      severity: 'medium'
    }
  ];

  const categories = [
    { id: 'general', name: 'Symptômes généraux' },
    { id: 'respiratory', name: 'Système respiratoire' },
    { id: 'digestive', name: 'Système digestif' },
    { id: 'skin', name: 'Peau et poils' },
    { id: 'locomotion', name: 'Locomotion' },
  ];

  const toggleSymptom = (symptomId: number) => {
    if (selectedSymptoms.includes(symptomId)) {
      setSelectedSymptoms(selectedSymptoms.filter(id => id !== symptomId));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptomId]);
    }
  };

  const toggleCategory = (categoryId: string) => {
    if (openCategory === categoryId) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryId);
    }
  };

  const filteredSymptoms = symptoms.filter(symptom => 
    symptom.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const diagnoseDisease = () => {
    setDiagnoseClicked(true);
  };

  const matchedDiseases = diseases.filter(disease => {
    // Simple algorithm: check if at least 2 symptoms match
    const matchingSymptoms = disease.symptoms.filter(symptomId => 
      selectedSymptoms.includes(symptomId)
    );
    return matchingSymptoms.length >= 2;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'text-green-600 bg-green-100';
      case 'medium':
        return 'text-amber-600 bg-amber-100';
      case 'high':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'Faible';
      case 'medium':
        return 'Modérée';
      case 'high':
        return 'Élevée';
      default:
        return 'Inconnue';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Diagnostic des maladies du bétail</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Sélectionnez le type d'animal et les symptômes observés pour obtenir un diagnostic
        préliminaire et des recommandations pour votre bétail.
      </p>
      
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Informations sur l'animal</h2>
        
        <div className="mb-6">
          <label htmlFor="animalType" className="block text-gray-700 font-medium mb-2">
            Type d'animal
          </label>
          <select
            id="animalType"
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
            className="input"
          >
            <option value="">Sélectionnez un type</option>
            <option value="bovins">Bovins (Vaches, Taureaux)</option>
            <option value="ovins">Ovins (Moutons)</option>
            <option value="caprins">Caprins (Chèvres)</option>
            <option value="volailles">Volailles (Poulets, Canards)</option>
          </select>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Symptômes observés</h2>
        
        {/* Search bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="input pl-10"
            placeholder="Rechercher un symptôme..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Symptom categories */}
        <div className="space-y-4 mb-6">
          {searchQuery ? (
            <div>
              <h3 className="font-medium mb-2">Résultats de recherche</h3>
              <ul className="space-y-2">
                {filteredSymptoms.map(symptom => (
                  <li key={symptom.id}>
                    <label className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSymptoms.includes(symptom.id)}
                        onChange={() => toggleSymptom(symptom.id)}
                        className="rounded text-primary focus:ring-primary h-5 w-5"
                      />
                      <span>{symptom.name}</span>
                    </label>
                  </li>
                ))}
              </ul>
              {filteredSymptoms.length === 0 && (
                <p className="text-gray-500 italic">Aucun symptôme ne correspond à votre recherche</p>
              )}
            </div>
          ) : (
            categories.map(category => (
              <div key={category.id} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50"
                  onClick={() => toggleCategory(category.id)}
                >
                  {category.name}
                  {openCategory === category.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                
                {openCategory === category.id && (
                  <div className="border-t p-4">
                    <ul className="space-y-2">
                      {symptoms
                        .filter(symptom => symptom.category === category.id)
                        .map(symptom => (
                          <li key={symptom.id}>
                            <label className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedSymptoms.includes(symptom.id)}
                                onChange={() => toggleSymptom(symptom.id)}
                                className="rounded text-primary focus:ring-primary h-5 w-5"
                              />
                              <span>{symptom.name}</span>
                            </label>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={diagnoseDisease}
            disabled={selectedSymptoms.length < 2 || !animalType}
            className={`btn btn-primary px-8 ${
              (selectedSymptoms.length < 2 || !animalType) ? 
              'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Diagnostiquer
          </button>
        </div>
        
        {diagnoseClicked && selectedSymptoms.length >= 2 && animalType && (
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="text-xl font-semibold mb-4">Résultats du diagnostic</h3>
            
            {matchedDiseases.length > 0 ? (
              <div className="space-y-6">
                {matchedDiseases.map(disease => (
                  <div key={disease.id} className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-gray-50">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-semibold">{disease.name}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(disease.severity)}`}>
                          Gravité: {getSeverityLabel(disease.severity)}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h5 className="font-medium mb-2">Description</h5>
                      <p className="text-gray-700 mb-4">{disease.description}</p>
                      
                      <h5 className="font-medium mb-2">Traitement recommandé</h5>
                      <p className="text-gray-700 mb-4">{disease.treatment}</p>
                      
                      <h5 className="font-medium mb-2">Prévention</h5>
                      <p className="text-gray-700">{disease.prevention}</p>
                    </div>
                  </div>
                ))}
                
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-amber-800 text-sm">
                      Ce diagnostic est fourni à titre indicatif seulement. Consultez un vétérinaire 
                      pour un diagnostic définitif et un traitement approprié.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-2">
                  Aucune maladie correspondant à ces symptômes n'a été trouvée dans notre base de données.
                </p>
                <p className="text-gray-600">
                  Veuillez sélectionner des symptômes supplémentaires ou consulter un vétérinaire pour un diagnostic précis.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-4">Quand consulter un vétérinaire</h2>
        <p className="text-gray-700 mb-4">
          Cette application fournit un diagnostic préliminaire, mais ne remplace pas l'avis d'un expert.
          Consultez un vétérinaire dès que possible si vous observez:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Une fièvre élevée persistante</li>
          <li>Un refus complet de s'alimenter pendant plus de 24 heures</li>
          <li>Des difficultés respiratoires sévères</li>
          <li>Des saignements inexpliqués</li>
          <li>Des symptômes qui s'aggravent rapidement</li>
          <li>Plusieurs animaux présentant des symptômes similaires (possible épidémie)</li>
        </ul>
      </div>
    </div>
  );
};

export default AnimalDiagnostic;