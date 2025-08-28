import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Societies from "@/components/Societies";
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import Announcements from "@/components/Announcements";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogIn, Settings } from "lucide-react";

const Index = () => {
  const { user, isAdmin } = useAuth();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Auth/Admin Bar */}
      <div className="bg-primary/5 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end items-center gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Welcome back, {user.email}
                </span>
                {isAdmin && (
                  <Button size="sm" variant="outline" asChild>
                    <a href="/admin">
                      <Settings className="h-4 w-4 mr-1" />
                      Admin
                    </a>
                  </Button>
                )}
              </div>
            ) : (
              <Button size="sm" variant="outline" asChild>
                <a href="/auth">
                  <LogIn className="h-4 w-4 mr-1" />
                  Sign In
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <Hero />
      <About />
      <Announcements />
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