import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Grâce à AgriNova, j'ai pu identifier rapidement une maladie qui attaquait mes plants de tomate. Les conseils m'ont permis de sauver ma récolte et d'améliorer mon rendement de 30%.",
    author: "Mamadou Diop",
    role: "Agriculteur à Thiès",
    image: "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&h=150"
  },
  {
    id: 2,
    content: "L'application d'alerte météo m'a sauvé plus d'une fois. J'ai pu prendre des précautions avant une forte pluie qui aurait pu détruire mes semis. Un outil indispensable pour chaque agriculteur.",
    author: "Aïssatou Fall",
    role: "Maraîchère à Saint-Louis",
    image: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&h=150"
  },
  {
    id: 3,
    content: "La plateforme de formation m'a permis d'apprendre de nouvelles techniques d'irrigation qui ont réduit ma consommation d'eau de 40%. Je recommande AgriTech à tous mes collègues éleveurs.",
    author: "Ousmane Ndiaye",
    role: "Éleveur à Kolda",
    image: "https://images.pexels.com/photos/10995781/pexels-photo-10995781.jpeg?auto=compress&cs=tinysrgb&h=150"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Ce que disent nos utilisateurs
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10">
            <button 
              onClick={goToPrevious}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 relative">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />
            
            <div className="relative z-0">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`transition-opacity duration-300 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6 mt-8 relative z-10">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold text-lg">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10">
            <button 
              onClick={goToNext}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary scale-110' : 'bg-gray-300'
                }`}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;