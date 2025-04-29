import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-accent text-white rounded-xl mb-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à transformer votre agriculture ?
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Rejoignez des milliers d'agriculteurs qui améliorent leur rendement et réduisent leurs pertes grâce à AgriTech Sénégal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/diagnostic-plantes" 
            className="btn bg-white text-accent hover:bg-white/90 font-semibold text-lg px-8"
          >
            Commencer maintenant
          </Link>
          <Link 
            to="/formation" 
            className="btn border-2 border-white bg-transparent hover:bg-white/10 font-semibold text-lg px-8"
          >
            Découvrir nos formations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;