import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, BookOpen, Mic, Music, Baby } from "lucide-react";

const Societies = () => {
  const societies = [
    {
      name: "Knights and Ladies of the Blessed Sacrament (KLBS)",
      description: "A society dedicated to adoration and devotion to the Blessed Sacrament, promoting spiritual growth through prayer and service.",
      icon: Heart,
      members: "50+ Members"
    },
    {
      name: "Youth Choir",
      description: "Our vibrant youth choir leads worship through beautiful music, inspiring the congregation with their spiritual songs.",
      icon: Music,
      members: "25+ Members"
    },
    {
      name: "Christian Mothers",
      description: "A fellowship of women supporting each other in faith, family life, and community service through prayer and action.",
      icon: Users,
      members: "40+ Members"
    },
    {
      name: "Sons and Daughters",
      description: "A youth organization fostering spiritual growth, leadership development, and community engagement among young adults.",
      icon: Baby,
      members: "30+ Members"
    },
    {
      name: "Lectors",
      description: "Dedicated members who proclaim the Word of God during Mass, helping to bring Scripture to life for our congregation.",
      icon: BookOpen,
      members: "15+ Members"
    },
    {
      name: "Parish Choir",
      description: "Our main choir that leads the congregation in worship through traditional and contemporary Catholic music.",
      icon: Mic,
      members: "20+ Members"
    }
  ];

  return (
    <section id="societies" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-church-primary mb-4">
            Our Parish Societies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join one of our active parish societies and become part of a community 
            dedicated to faith, fellowship, and service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {societies.map((society, index) => {
            const IconComponent = society.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card shadow-card-custom hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-church-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-church-gold/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-church-gold" />
                  </div>
                  <CardTitle className="text-church-primary text-lg leading-tight">
                    {society.name}
                  </CardTitle>
                  <p className="text-sm text-church-gold font-medium">
                    {society.members}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {society.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in joining one of our societies? Contact the parish office 
            or speak with any of our society leaders after Mass.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-church-gold hover:text-church-primary font-semibold transition-colors duration-300"
          >
            Get in Touch
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Societies;