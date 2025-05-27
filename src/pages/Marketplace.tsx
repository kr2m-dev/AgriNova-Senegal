import { useState } from 'react';
import { Search, Filter, MapPin, Phone, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  location: string;
  seller: string;
  contact: string;
  image: string;
  description: string;
  quantity: number;
  available: boolean;
}

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  
  const categories = [
    { id: 'all', name: 'Toutes les catégories' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'vegetables', name: 'Légumes' },
    { id: 'grains', name: 'Céréales' },
    { id: 'seeds', name: 'Semences' },
  ];
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Tomates fraîches',
      category: 'vegetables',
      price: 750,
      unit: 'kg',
      location: 'Thiès',
      seller: 'Coopérative Agricole de Thiès',
      contact: '+221 XX XXX XX XX',
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg',
      description: 'Tomates fraîches cultivées sans pesticides. Idéales pour les salades et les sauces.',
      quantity: 500,
      available: true
    },
    {
      id: 2,
      name: 'Mangues Kent',
      category: 'fruits',
      price: 1200,
      unit: 'kg',
      location: 'Ziguinchor',
      seller: 'Vergers du Sud',
      contact: '+221 XX XXX XX XX',
      image: 'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg',
      description: 'Mangues Kent de qualité supérieure. Sucrées et charnues.',
      quantity: 300,
      available: true
    },
    {
      id: 3,
      name: 'Mil',
      category: 'grains',
      price: 500,
      unit: 'kg',
      location: 'Kaolack',
      seller: 'Asso. des Producteurs de Kaolack',
      contact: '+221 XX XXX XX XX',
      image: 'https://images.pexels.com/photos/4117545/pexels-photo-4117545.jpeg',
      description: 'Mil de haute qualité. Récolte récente, propre et bien séché.',
      quantity: 1000,
      available: true
    },

    {
      id: 6,
      name: 'Semences de tomates résistantes',
      category: 'seeds',
      price: 3500,
      unit: '100g',
      location: 'Thiès',
      seller: 'Centre de Recherche Agricole',
      contact: '+221 XX XXX XX XX',
      image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg',
      description: 'Semences de tomates résistantes aux maladies et adaptées au climat sénégalais.',
      quantity: 50,
      available: true
    }
  ];

  const handlePriceRangeChange = (value: string, index: number) => {
    const newValue = parseInt(value);
    if (isNaN(newValue)) return;
    
    const newRange = [...priceRange] as [number, number];
    newRange[index] = newValue;
    setPriceRange(newRange);
  };

  const filteredProducts = products.filter(product => {
    // Filter by search query
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    // Filter by price range
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Marché agricole</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Achetez et vendez directement entre agriculteurs et consommateurs. 
        Trouvez des produits frais et de qualité à des prix justes.
      </p>
      
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input pl-10"
              placeholder="Rechercher des produits..."
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
          
          <button
            className="flex items-center justify-center space-x-2 btn btn-outline"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
            <span>Filtres</span>
            {showFilters ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>
        
        {showFilters && (
          <div className="border-t pt-4">
            <h3 className="font-medium mb-3">Filtrer par prix (FCFA)</h3>
            <div className="flex items-center space-x-4 mb-4">
              <input
                type="number"
                className="input w-32"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => handlePriceRangeChange(e.target.value, 0)}
              />
              <span>à</span>
              <input
                type="number"
                className="input w-32"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => handlePriceRangeChange(e.target.value, 1)}
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="relative h-48">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary text-white py-1 px-3 rounded-full text-sm font-medium">
                  {product.price.toLocaleString()} FCFA/{product.unit}
                </div>
              </div>
              
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-start space-x-2 text-gray-600 mb-2">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>{product.location}</span>
                </div>
                
                <div className="flex items-start space-x-2 text-gray-600 mb-4">
                  <div className="font-medium">Vendeur:</div>
                  <span>{product.seller}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <a 
                    href={`tel:${product.contact}`} 
                    className="flex-1 flex items-center justify-center space-x-2 btn btn-primary"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Appeler</span>
                  </a>
                  <button 
                    className="flex-1 flex items-center justify-center space-x-2 btn btn-outline"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Message</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-xl text-gray-600 mb-2">Aucun produit ne correspond à votre recherche</p>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </div>
        )}
      </div>
      
      <div className="mt-16 bg-accent/10 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-4">Vous êtes agriculteur ?</h2>
        <p className="text-lg mb-6">
          Vendez vos produits directement aux consommateurs et aux distributeurs.
          Créez gratuitement une annonce et touchez plus de clients.
        </p>
        <button className="btn btn-accent">
          Publier une annonce
        </button>
      </div>
    </div>
  );
};

export default Marketplace;