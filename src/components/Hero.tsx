import { Button } from "@/components/ui/button";
import heroImage from "@/assets/church-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="St. Peter Catholic Church - Beautiful gothic architecture with warm lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-church-primary/80 via-church-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            St. Peter Catholic Church
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-church-light font-light">
            Abuakwa, Kumasi
          </p>
          <p className="text-lg md:text-xl mb-8 text-church-light/90 max-w-2xl mx-auto leading-relaxed">
            Welcome to our parish family. Join us in worship, fellowship, and service 
            as we grow together in faith and love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              className="bg-church-gold hover:bg-church-gold/90 text-church-primary font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-gold"
            >
              Join Our Community
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-church-primary font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Calendar
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;