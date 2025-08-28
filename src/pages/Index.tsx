import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Societies from "@/components/Societies";
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Societies />
      <Calendar />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-church-primary text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">St. Peter Catholic Church</h3>
            <p className="text-church-light mb-4">
              Post Office Box 101, Abuakwa-Kumasi
            </p>
            <p className="text-sm text-church-light/80">
              © 2024 St. Peter Catholic Church. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;