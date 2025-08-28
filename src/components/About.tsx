import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-church-primary mb-4">
            About Our Parish
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            St. Peter Catholic Church has been serving the Abuakwa community for decades, 
            providing spiritual guidance, community support, and a place of worship for all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-church-primary mb-6">
              Our Mission
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We are called to be disciples of Jesus Christ, spreading His love and teachings 
              throughout our community. Our parish serves as a beacon of hope, faith, and 
              fellowship for all who seek spiritual growth and community connection.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through worship, education, and service, we strive to build a stronger 
              community rooted in Catholic values and traditions, welcoming all who 
              wish to join our parish family.
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="bg-gradient-card shadow-card-custom hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-church-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-church-primary mb-2">Location</h4>
                    <p className="text-muted-foreground">
                      St. Peter Catholic Church<br />
                      Post Office Box 101<br />
                      Abuakwa-Kumasi
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card-custom hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-church-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-church-primary mb-2">Mass Times</h4>
                    <p className="text-muted-foreground">
                      Sunday: 6:00 AM, 8:00 AM, 10:00 AM<br />
                      Weekdays: 6:00 AM<br />
                      Saturday: 6:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card-custom hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-church-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-church-primary mb-2">Contact</h4>
                    <p className="text-muted-foreground">
                      Phone: Available upon request<br />
                      Office Hours: Mon-Fri, 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;