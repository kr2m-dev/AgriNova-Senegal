import { useState } from 'react';
import { Book, Video, CheckCircle, ChevronRight, Search, Medal, PlayCircle, FileText } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  lessons: number;
  category: string;
  popular: boolean;
  price: number;
  certification: {
    name: string;
    phases: string[];
    duration: string;
    cost: number;
  } | null;
  requirements?: string[];
}

const Training = () => {
  const [activeTab, setActiveTab] = useState<'courses' | 'resources'>('courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Toutes les catégories' },
    { id: 'crops', name: 'Cultures' },
    { id: 'irrigation', name: 'Irrigation' },
    { id: 'business', name: 'Gestion d\'entreprise' },
    { id: 'organic', name: 'Agriculture biologique' },
  ];
  
  const courses: Course[] = [
    {
      id: 1,
      title: 'Techniques modernes de culture maraîchère',
      description: 'Apprenez les techniques de production maraîchère adaptées au climat sénégalais. Ce cours couvre la préparation du sol, les semis, l\'irrigation et la lutte contre les ravageurs.',
      image: 'https://images.pexels.com/photos/5528986/pexels-photo-5528986.jpeg',
      duration: '6 heures',
      level: 'beginner',
      lessons: 12,
      category: 'crops',
      popular: true,
      price: 25000,
      certification: {
        name: 'Certification Maraîchage Durable',
        phases: ['Formation', 'Pratique', 'Examen', 'Certification'],
        duration: '3 mois',
        cost: 10000
      },
      requirements: ['Avoir une expérience de base en agriculture', 'Être âgé de plus de 21 ans']
    },
    {
      id: 2,
      title: 'Gestion du bétail en saison sèche',
      description: 'Découvrez comment maintenir la santé et la productivité de votre bétail pendant la saison sèche. Stratégies d\'alimentation, conservation de l\'eau et prévention des maladies.',
      image: 'https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg',
      duration: '4 heures',
      level: 'intermediate',
      lessons: 8,
      category: 'livestock',
      popular: true,
      price: 30000,
      certification: {
        name: 'Certification Élevage Durable',
        phases: ['Formation', 'Stage', 'Examen', 'Certification'],
        duration: '4 mois',
        cost: 15000
      },
      requirements: ['Avoir une expérience en élevage', 'Être âgé de plus de 25 ans']
    },
    // {
    //   id: 2,
    //   title: 'Gestion du bétail en saison sèche',
    //   description: 'Découvrez comment maintenir la santé et la productivité de votre bétail pendant la saison sèche. Stratégies d\'alimentation, conservation de l\'eau et prévention des maladies.',
    //   image: 'https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg',
    //   duration: '4 heures',
    //   level: 'intermediate',
    //   lessons: 8,
    //   category: 'livestock',
    //   popular: true
    // },
    {
      id: 3,
      title: 'Systèmes d\'irrigation goutte-à-goutte',
      description: 'Concevez et installez votre propre système d\'irrigation goutte-à-goutte à faible coût. Économisez l\'eau tout en améliorant vos rendements.',
      image: 'https://images.pexels.com/photos/2382325/pexels-photo-2382325.jpeg',
      duration: '3 heures',
      level: 'intermediate',
      lessons: 6,
      category: 'irrigation',
      popular: false,
      price: 20000,
      certification: {
        name: 'Certification Irrigation Durable',
        phases: ['Formation', 'Pratique sur site', 'Examen', 'Certification'],
        duration: '2 mois',
        cost: 8000
      },
      requirements: ['Avoir une expérience en agriculture', 'Être âgé de plus de 21 ans']
    },
    {
      id: 4,
      title: 'Marketing des produits agricoles',
      description: 'Stratégies efficaces pour vendre vos produits agricoles à meilleur prix. Formation sur l\'emballage, la fixation des prix et les canaux de distribution.',
      image: 'https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg',
      duration: '5 heures',
      level: 'beginner',
      lessons: 10,
      category: 'business',
      popular: true,
      price: 15000,
      certification: {
        name: 'Certification Marketing Agricole',
        phases: ['Formation', 'Stage', 'Examen', 'Certification'],
        duration: '3 mois',
        cost: 12000
      },
      requirements: ['Avoir une expérience en agriculture', 'Être âgé de plus de 21 ans']
    },
    {
      id: 5,
      title: 'Agriculture biologique certifiée',
      description: 'Convertissez votre exploitation en agriculture biologique et obtenez une certification. Apprenez les normes, pratiques et avantages de l\'agriculture bio.',
      image: 'https://images.pexels.com/photos/5529603/pexels-photo-5529603.jpeg',
      duration: '8 heures',
      level: 'advanced',
      lessons: 16,
      category: 'organic',
      popular: false,
      price: 40000,
      certification: {
        name: 'Certification Agriculture Biologique',
        phases: ['Formation', 'Stage', 'Audit', 'Certification'],
        duration: '6 mois',
        cost: 25000
      },
      requirements: ['Avoir une expérience en agriculture', 'Être âgé de plus de 25 ans']
    },
    // {
    //   id: 4,
    //   title: 'Marketing des produits agricoles',
    //   description: 'Stratégies efficaces pour vendre vos produits agricoles à meilleur prix. Formation sur l\'emballage, la fixation des prix et les canaux de distribution.',
    //   image: 'https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg',
    //   duration: '5 heures',
    //   level: 'beginner',
    //   lessons: 10,
    //   category: 'business',
    //   popular: true
    // },
    // {
    //   id: 5,
    //   title: 'Agriculture biologique certifiée',
    //   description: 'Convertissez votre exploitation en agriculture biologique et obtenez une certification. Apprenez les normes, pratiques et avantages de l\'agriculture bio.',
    //   image: 'https://images.pexels.com/photos/5529603/pexels-photo-5529603.jpeg',
    //   duration: '8 heures',
    //   level: 'advanced',
    //   lessons: 16,
    //   category: 'organic',
    //   popular: false
    // },
    // {
    //   id: 6,
    //   title: 'Élevage de volailles locales',
    //   description: 'Guide complet sur l\'élevage des races de volailles locales. Construction de poulaillers, alimentation, reproduction et santé des volailles.',
    //   image: 'https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg',
    //   duration: '4 heures',
    //   level: 'beginner',
    //   lessons: 8,
    //   category: 'livestock',
    //   popular: false
    // }
  ];

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'Débutant';
      case 'intermediate':
        return 'Intermédiaire';
      case 'advanced':
        return 'Avancé';
      default:
        return level;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCourses = courses.filter(course => {
    // Filter by search query
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Formation Agricole</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Améliorez vos compétences et connaissances agricoles avec nos cours en ligne 
        et ressources éducatives adaptés au contexte sénégalais.
      </p>
      
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 font-medium text-lg border-b-2 ${
              activeTab === 'courses' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('courses')}
          >
            Cours
          </button>
          <button
            className={`px-4 py-2 font-medium text-lg border-b-2 ${
              activeTab === 'resources' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('resources')}
          >
            Ressources
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input pl-10"
              placeholder={`Rechercher des ${activeTab === 'courses' ? 'cours' : 'ressources'}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="w-full md:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {activeTab === 'courses' ? (
        <>
          {/* Popular courses */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Cours populaires</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter(course => course.popular)
                .map(course => (
                  <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
                    <div className="relative h-48">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                          {getLevelLabel(course.level)}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800 text-xs font-medium">
                          {course.lessons} leçons
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                          {course.price.toLocaleString('fr-FR')} FCFA
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      {course.certification && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Certification incluse</h4>
                          <div className="flex items-center gap-2">
                            <Medal className="h-5 w-5 text-yellow-500" />
                            <span className="text-sm">{course.certification.name}</span>
                          </div>
                          <div className="mt-2">
                            <ul className="list-disc ml-6 space-y-1 text-sm">
                              {course.certification.phases.map((phase, index) => (
                                <li key={index}>{phase}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-2">
                            <span className="text-sm text-gray-600">
                              Durée: {course.certification.duration}
                            </span>
                          </div>
                          <div className="mt-2">
                            <span className="text-sm text-gray-600">
                              Coût: {course.certification.cost.toLocaleString('fr-FR')} FCFA
                            </span>
                          </div>
                        </div>
                      )}
                      {course.requirements && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Prérequis</h4>
                          <ul className="list-disc ml-6 space-y-1 text-sm">
                            {course.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">{course.duration}</span>
                        <button className="btn btn-primary">En savoir plus</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          
          {/* All courses */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Tous les cours</h2>
            
            {filteredCourses.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses
                  .filter(course => !course.popular)
                  .map(course => (
                    <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="relative h-48">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                            {getLevelLabel(course.level)}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800 text-xs font-medium">
                            {course.lessons} leçons
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                            {course.price.toLocaleString('fr-FR')} FCFA
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                        <p className="text-gray-600 mb-4">{course.description}</p>
                        {course.certification && (
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Certification incluse</h4>
                            <div className="flex items-center gap-2">
                              <Medal className="h-5 w-5 text-yellow-500" />
                              <span className="text-sm">{course.certification.name}</span>
                            </div>
                            <div className="mt-2">
                              <ul className="list-disc ml-6 space-y-1 text-sm">
                                {course.certification.phases.map((phase, index) => (
                                  <li key={index}>{phase}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-2">
                              <span className="text-sm text-gray-600">
                                Durée: {course.certification.duration}
                              </span>
                            </div>
                            <div className="mt-2">
                              <span className="text-sm text-gray-600">
                                Coût: {course.certification.cost.toLocaleString('fr-FR')} FCFA
                              </span>
                            </div>
                          </div>
                        )}
                        {course.requirements && (
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Prérequis</h4>
                            <ul className="list-disc ml-6 space-y-1 text-sm">
                              {course.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">{course.duration}</span>
                          <button className="btn btn-primary">En savoir plus</button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-xl text-gray-600 mb-2">Aucun cours ne correspond à votre recherche</p>
                <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-6">Ressources éducatives</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Videos */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center text-2xl font-bold mb-4">
                <Video className="h-6 w-6 mr-2 text-primary" />
                <h3>Vidéos éducatives</h3>
              </div>
              
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <PlayCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Comment diagnostiquer les maladies de la tomate</h4>
                      <p className="text-sm text-gray-600">12 minutes</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <PlayCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Installation d'un système d'irrigation goutte-à-goutte</h4>
                      <p className="text-sm text-gray-600">18 minutes</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <PlayCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Techniques de greffage pour les arbres fruitiers</h4>
                      <p className="text-sm text-gray-600">15 minutes</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <PlayCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Création de compost à partir de déchets agricoles</h4>
                      <p className="text-sm text-gray-600">10 minutes</p>
                    </div>
                  </a>
                </li>
              </ul>
              
              <button className="w-full btn btn-outline mt-4">
                Voir toutes les vidéos
              </button>
            </div>
            
            {/* Guides */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center text-2xl font-bold mb-4">
                <FileText className="h-6 w-6 mr-2 text-primary" />
                <h3>Guides pratiques</h3>
              </div>
              
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <FileText className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Calendrier de plantation pour les régions du Sénégal</h4>
                      <p className="text-sm text-gray-600">PDF, 3.2 MB</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <FileText className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Guide de lutte intégrée contre les ravageurs</h4>
                      <p className="text-sm text-gray-600">PDF, 2.8 MB</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <FileText className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Manuel d'élevage de poulets locaux</h4>
                      <p className="text-sm text-gray-600">PDF, 4.1 MB</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <FileText className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Guide des engrais organiques et leur utilisation</h4>
                      <p className="text-sm text-gray-600">PDF, 2.5 MB</p>
                    </div>
                  </a>
                </li>
              </ul>
              
              <button className="w-full btn btn-outline mt-4">
                Voir tous les guides
              </button>
            </div>
          </div>
          
          {/* Certification */}
          <div className="mt-8 bg-gradient-to-r from-primary to-accent text-white p-8 rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Obtenez votre certification en agriculture</h3>
                <p className="text-white/90 max-w-xl">
                  Suivez nos cours certifiants et recevez un diplôme reconnu par le Ministère de l'Agriculture.
                  Améliorez vos connaissances et augmentez votre valeur sur le marché.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Medal className="h-20 w-20 text-white/20" />
              </div>
            </div>
            <button className="mt-6 bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-lg font-medium">
              Découvrir les certifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Training;