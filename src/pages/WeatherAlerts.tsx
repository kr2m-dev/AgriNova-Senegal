import { useState, useEffect } from 'react';
import { MapPin, CloudRain, Wind, Sun, Thermometer, AlertTriangle, Calendar } from 'lucide-react';

interface WeatherData {
  location: string;
  date: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  rainfall: number;
  forecast: string;
  alerts: WeatherAlert[];
}

interface WeatherAlert {
  id: number;
  type: 'rain' | 'drought' | 'wind' | 'heat';
  severity: 'low' | 'medium' | 'high';
  message: string;
  startDate: string;
  endDate: string;
}

const WeatherAlerts = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>('dakar');
  const [loading, setLoading] = useState<boolean>(true);
  
  const locations = [
    { id: 'dakar', name: 'Dakar' },
    { id: 'thies', name: 'Thiès' },
    { id: 'saint-louis', name: 'Saint-Louis' },
    { id: 'kaolack', name: 'Kaolack' },
    { id: 'ziguinchor', name: 'Ziguinchor' },
  ];
  
  // Mock weather data
  const mockWeatherData: Record<string, WeatherData> = {
    dakar: {
      location: 'Dakar',
      date: new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      temperature: 28,
      humidity: 75,
      windSpeed: 15,
      rainfall: 0,
      forecast: 'Ensoleillé avec quelques nuages',
      alerts: [
        {
          id: 1,
          type: 'wind',
          severity: 'medium',
          message: 'Vents forts attendus en soirée. Sécurisez votre matériel agricole.',
          startDate: new Date().toLocaleDateString('fr-FR'),
          endDate: new Date(Date.now() + 86400000).toLocaleDateString('fr-FR')
        }
      ]
    },
    thies: {
      location: 'Thiès',
      date: new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      temperature: 30,
      humidity: 65,
      windSpeed: 10,
      rainfall: 5,
      forecast: 'Averses légères en fin de journée',
      alerts: [
        {
          id: 2,
          type: 'rain',
          severity: 'low',
          message: 'Précipitations modérées prévues. Bon moment pour irriguer vos cultures.',
          startDate: new Date().toLocaleDateString('fr-FR'),
          endDate: new Date(Date.now() + 86400000).toLocaleDateString('fr-FR')
        }
      ]
    },
    'saint-louis': {
      location: 'Saint-Louis',
      date: new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      temperature: 29,
      humidity: 80,
      windSpeed: 20,
      rainfall: 15,
      forecast: 'Orages intermittents',
      alerts: [
        {
          id: 3,
          type: 'rain',
          severity: 'high',
          message: 'Fortes pluies attendues. Risque d\'inondation dans les zones basses.',
          startDate: new Date().toLocaleDateString('fr-FR'),
          endDate: new Date(Date.now() + 172800000).toLocaleDateString('fr-FR')
        }
      ]
    },
    kaolack: {
      location: 'Kaolack',
      date: new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      temperature: 34,
      humidity: 50,
      windSpeed: 8,
      rainfall: 0,
      forecast: 'Chaud et sec',
      alerts: [
        {
          id: 4,
          type: 'heat',
          severity: 'medium',
          message: 'Vague de chaleur prévue. Assurez un ombrage adéquat pour le bétail.',
          startDate: new Date().toLocaleDateString('fr-FR'),
          endDate: new Date(Date.now() + 259200000).toLocaleDateString('fr-FR')
        },
        {
          id: 5,
          type: 'drought',
          severity: 'medium',
          message: 'Conditions de sécheresse persistantes. Économisez l\'eau d\'irrigation.',
          startDate: new Date().toLocaleDateString('fr-FR'),
          endDate: new Date(Date.now() + 604800000).toLocaleDateString('fr-FR')
        }
      ]
    },
    ziguinchor: {
      location: 'Ziguinchor',
      date: new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      temperature: 31,
      humidity: 85,
      windSpeed: 12,
      rainfall: 25,
      forecast: 'Fortes pluies',
      alerts: [
        {
          id: 6,
          type: 'rain',
          severity: 'high',
          message: 'Précipitations abondantes prévues. Évitez les plantations dans les zones inondables.',
          startDate: new Date().toLocaleDateString('fr-FR'),
          endDate: new Date(Date.now() + 172800000).toLocaleDateString('fr-FR')
        }
      ]
    }
  };

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setWeatherData(mockWeatherData[selectedLocation]);
      setLoading(false);
    }, 1000);
  }, [selectedLocation]);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'rain':
        return <CloudRain className="h-6 w-6" />;
      case 'wind':
        return <Wind className="h-6 w-6" />;
      case 'heat':
        return <Thermometer className="h-6 w-6" />;
      case 'drought':
        return <Sun className="h-6 w-6" />;
      default:
        return <AlertTriangle className="h-6 w-6" />;
    }
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'border-green-200 bg-green-50 text-green-700';
      case 'medium':
        return 'border-amber-200 bg-amber-50 text-amber-700';
      case 'high':
        return 'border-red-200 bg-red-50 text-red-700';
      default:
        return 'border-gray-200 bg-gray-50 text-gray-700';
    }
  };

  const getAlertIconColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'text-green-500';
      case 'medium':
        return 'text-amber-500';
      case 'high':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Alertes météo & climat</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Suivez les prévisions météorologiques et recevez des alertes précoces pour protéger vos cultures 
        et votre bétail des événements climatiques extrêmes.
      </p>
      
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
        <div className="flex items-center mb-6">
          <MapPin className="h-5 w-5 text-gray-500 mr-2" />
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="input max-w-xs"
          >
            {locations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
        
        {loading ? (
          <div className="py-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des données météo...</p>
          </div>
        ) : weatherData ? (
          <>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">{weatherData.location}</h2>
                <div className="text-gray-600 text-sm flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {weatherData.date}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-lg p-5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Conditions actuelles</h3>
                    <div className="text-3xl font-bold">{weatherData.temperature}°C</div>
                  </div>
                  <p className="text-gray-600 mb-4">{weatherData.forecast}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Humidité</div>
                      <div className="font-medium">{weatherData.humidity}%</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Vent</div>
                      <div className="font-medium">{weatherData.windSpeed} km/h</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Précipitations</div>
                      <div className="font-medium">{weatherData.rainfall} mm</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent/5 rounded-lg p-5">
                  <h3 className="text-lg font-medium mb-4">Recommandations agricoles</h3>
                  <ul className="space-y-3">
                    {weatherData.temperature > 32 && (
                      <li className="flex items-start space-x-3">
                        <Sun className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Arrosez les cultures en début/fin de journée pour éviter l'évaporation</span>
                      </li>
                    )}
                    {weatherData.rainfall > 0 && weatherData.rainfall < 10 && (
                      <li className="flex items-start space-x-3">
                        <CloudRain className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Pluie légère prévue, réduisez l'irrigation aujourd'hui</span>
                      </li>
                    )}
                    {weatherData.rainfall >= 10 && (
                      <li className="flex items-start space-x-3">
                        <CloudRain className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span>Fortes pluies attendues, vérifiez le drainage de vos champs</span>
                      </li>
                    )}
                    {weatherData.windSpeed > 15 && (
                      <li className="flex items-start space-x-3">
                        <Wind className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span>Vents forts, sécurisez les jeunes plants et structures légères</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Alertes météorologiques</h3>
            
            {weatherData.alerts.length > 0 ? (
              <div className="space-y-4">
                {weatherData.alerts.map(alert => (
                  <div 
                    key={alert.id} 
                    className={`border rounded-lg p-4 ${getAlertColor(alert.severity)}`}
                  >
                    <div className="flex items-start">
                      <div className={`mr-4 ${getAlertIconColor(alert.severity)}`}>
                        {getAlertIcon(alert.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-semibold">
                            {alert.type === 'rain' && 'Alerte pluie'}
                            {alert.type === 'wind' && 'Alerte vent'}
                            {alert.type === 'heat' && 'Alerte chaleur'}
                            {alert.type === 'drought' && 'Alerte sécheresse'}
                          </h4>
                          <div className="text-sm">
                            {alert.startDate} - {alert.endDate}
                          </div>
                        </div>
                        <p>{alert.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center py-6 bg-gray-50 rounded-lg">
                Aucune alerte météorologique active pour cette région.
              </p>
            )}
          </>
        ) : (
          <p className="text-center py-6 bg-gray-50 rounded-lg">
            Impossible de charger les données météorologiques. Veuillez réessayer.
          </p>
        )}
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-4">Prévisions à 5 jours</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[...Array(5)].map((_, index) => {
            const date = new Date();
            date.setDate(date.getDate() + index + 1);
            
            // Generate some simulated data
            const tempVariation = Math.floor(Math.random() * 6) - 3;
            const rainChance = Math.floor(Math.random() * 100);
            
            return (
              <div key={index} className="border rounded-lg p-3 text-center">
                <div className="text-sm font-medium mb-2">
                  {date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric' })}
                </div>
                {rainChance > 70 ? (
                  <CloudRain className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                ) : rainChance > 30 ? (
                  <div className="flex justify-center">
                    <Sun className="h-8 w-8 text-amber-400" />
                    <CloudRain className="h-6 w-6 -ml-2 text-blue-400" />
                  </div>
                ) : (
                  <Sun className="h-8 w-8 mx-auto mb-2 text-amber-500" />
                )}
                <div className="font-bold">
                  {weatherData ? weatherData.temperature + tempVariation : 30 + tempVariation}°C
                </div>
                <div className="text-sm text-gray-500">
                  {rainChance > 70 ? 'Pluie' : rainChance > 30 ? 'Partiellement nuageux' : 'Ensoleillé'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeatherAlerts;