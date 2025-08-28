import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-church-primary mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to serve you. Whether you have questions about our services, 
            want to join our parish, or need pastoral care, please don't hesitate to reach out.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-card-custom">
                <CardHeader>
                  <CardTitle className="text-church-primary flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-church-gold" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    St. Peter Catholic Church<br />
                    Post Office Box 101<br />
                    Abuakwa-Kumasi<br />
                    Ghana
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-church-gold text-church-gold hover:bg-church-gold hover:text-white"
                  >
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card-custom">
                <CardHeader>
                  <CardTitle className="text-church-primary flex items-center gap-3">
                    <Clock className="h-6 w-6 text-church-gold" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Monday - Friday:</strong> 9:00 AM - 4:00 PM</p>
                    <p><strong>Saturday:</strong> 9:00 AM - 12:00 PM</p>
                    <p><strong>Sunday:</strong> Available after Mass</p>
                  </div>
                  <p className="text-sm text-church-gold mt-4">
                    Emergency pastoral care available 24/7
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Services & Contact Methods */}
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-card-custom">
                <CardHeader>
                  <CardTitle className="text-church-primary flex items-center gap-3">
                    <MessageCircle className="h-6 w-6 text-church-gold" />
                    How to Reach Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-church-primary mb-2">For General Inquiries:</h4>
                      <p className="text-muted-foreground">
                        Please visit the parish office during office hours or 
                        speak with Father after any Mass service.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-church-primary mb-2">For Emergencies:</h4>
                      <p className="text-muted-foreground">
                        Contact any parish council member or approach the presbytery directly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card-custom">
                <CardHeader>
                  <CardTitle className="text-church-primary">
                    Parish Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Baptisms & Confirmations</li>
                    <li>• Wedding Ceremonies</li>
                    <li>• Funeral Services</li>
                    <li>• Spiritual Counseling</li>
                    <li>• Confession</li>
                    <li>• Home Visits for the Sick</li>
                  </ul>
                  <Button 
                    variant="hero" 
                    className="mt-6 w-full"
                  >
                    Schedule an Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-hero text-white shadow-elegant">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Join Our Parish Family
              </h3>
              <p className="text-church-light mb-6 max-w-2xl mx-auto">
                Whether you're new to the area or looking for a spiritual home, 
                we welcome you with open hearts. Come and experience the warmth 
                of our community and grow in faith with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-church-primary"
                >
                  Visit This Sunday
                </Button>
                <Button 
                  variant="hero" 
                  size="lg"
                  className="bg-church-gold hover:bg-church-gold/90 text-church-primary"
                >
                  Learn More About Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;