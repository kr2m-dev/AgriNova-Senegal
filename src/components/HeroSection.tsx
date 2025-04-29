import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const images = [
  'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg',
  'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg',
  'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg'
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-xl mb-16">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-center px-6 md:px-12 lg:px-16 max-w-5xl mx-auto text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
        AgriNova Sénégal
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8 md:mb-10 animate-fade-in-delayed">
          L'innovation technologique au service des agriculteurs et éleveurs sénégalais. 
          Diagnostiquez, anticipez, optimisez.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in-delayed-more">
          <Link
            to="/diagnostic-plantes"
            className="btn btn-primary"
          >
            Commencer maintenant
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
          <Link
            to="/formation"
            className="btn btn-outline border-white text-white hover:bg-white/20"
          >
            Découvrir la formation
          </Link>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;