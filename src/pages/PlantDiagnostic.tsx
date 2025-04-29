import { useState, useRef, ChangeEvent } from 'react';
import { Camera, Upload, AlertTriangle, Check, Loader } from 'lucide-react';

const PlantDiagnostic = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    disease: string;
    confidence: number;
    recommendations: string[];
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
      setResult(null);
    };
    reader.readAsDataURL(file);
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const analyzeImage = () => {
    if (!image) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock result - in real implementation, this would come from an AI service
      setResult({
        disease: "Mildiou de la tomate",
        confidence: 0.89,
        recommendations: [
          "Retirez immédiatement les feuilles infectées et détruisez-les.",
          "Utilisez un fongicide à base de cuivre approuvé pour l'agriculture biologique.",
          "Améliorez la circulation de l'air autour des plants en taillant les feuilles basses.",
          "Évitez d'arroser le feuillage, privilégiez l'arrosage à la base des plants."
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const resetAnalysis = () => {
    setImage(null);
    setResult(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Diagnostic des maladies des plantes</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Prenez une photo d'une plante malade et notre système d'intelligence artificielle analysera 
        l'image pour identifier la maladie et vous fournir des recommandations adaptées.
      </p>
      
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Téléchargez une image</h2>
          
          {!image ? (
            <div className="space-y-4">
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                onClick={handleCameraClick}
              >
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 mb-2">
                  Cliquez ici pour prendre une photo ou télécharger une image
                </p>
                <p className="text-sm text-gray-400">
                  Formats acceptés: JPG, PNG, WEBP
                </p>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={handleCameraClick}
                  className="btn btn-primary"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Prendre une photo
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  capture="environment"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative max-w-md mx-auto rounded-lg overflow-hidden shadow-md">
                <img 
                  src={image} 
                  alt="Plant image" 
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="flex justify-center space-x-4">
                {!isAnalyzing && !result && (
                  <>
                    <button
                      onClick={analyzeImage}
                      className="btn btn-primary"
                    >
                      Analyser l'image
                    </button>
                    <button
                      onClick={resetAnalysis}
                      className="btn btn-outline"
                    >
                      Changer d'image
                    </button>
                  </>
                )}
                
                {isAnalyzing && (
                  <div className="flex items-center space-x-3">
                    <Loader className="animate-spin h-6 w-6 text-primary" />
                    <span className="text-lg">Analyse en cours...</span>
                  </div>
                )}
                
                {result && (
                  <button
                    onClick={resetAnalysis}
                    className="btn btn-outline"
                  >
                    Nouvelle analyse
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        
        {result && (
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-semibold mb-4">Résultats de l'analyse</h3>
            
            <div className="bg-primary/10 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">Maladie détectée:</span>
                <span className="text-lg font-bold text-primary">{result.disease}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base font-medium">Confiance:</span>
                <span className="text-base font-medium">
                  {Math.round(result.confidence * 100)}%
                </span>
              </div>
            </div>
            
            <h4 className="font-semibold text-lg mb-3">Recommandations:</h4>
            <ul className="space-y-3">
              {result.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-amber-800 text-sm">
                  Cette analyse est fournie à titre indicatif seulement. Pour une confirmation définitive, 
                  consultez un agronome ou un expert agricole.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-4">Comment ça marche</h2>
        <ol className="space-y-4 ml-6">
          <li className="list-decimal">
            <span className="font-medium">Prenez une photo claire</span> de la partie affectée de votre plante (feuille, tige, fruit).
          </li>
          <li className="list-decimal">
            <span className="font-medium">Téléchargez l'image</span> sur notre plateforme en utilisant le bouton ci-dessus.
          </li>
          <li className="list-decimal">
            <span className="font-medium">Notre IA analyse l'image</span> en la comparant à une base de données de maladies des plantes.
          </li>
          <li className="list-decimal">
            <span className="font-medium">Recevez un diagnostic</span> avec des recommandations adaptées pour traiter la maladie.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PlantDiagnostic;