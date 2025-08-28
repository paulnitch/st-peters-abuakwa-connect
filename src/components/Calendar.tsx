import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";

const Calendar = () => {
  const upcomingEvents = [
    {
      date: "Every Sunday",
      time: "6:00 AM, 8:00 AM, 10:00 AM",
      title: "Sunday Mass",
      description: "Join us for our weekly celebration of the Eucharist",
      type: "recurring"
    },
    {
      date: "Every Weekday",
      time: "6:00 AM",
      title: "Daily Mass",
      description: "Start your day with prayer and the celebration of Mass",
      type: "recurring"
    },
    {
      date: "Every Saturday",
      time: "6:00 PM",
      title: "Saturday Evening Mass",
      description: "Weekend Mass for those who cannot attend Sunday services",
      type: "recurring"
    },
    {
      date: "First Friday",
      time: "6:00 PM",
      title: "First Friday Devotion",
      description: "Special devotion to the Sacred Heart of Jesus",
      type: "monthly"
    },
    {
      date: "Every Wednesday",
      time: "6:00 PM",
      title: "Bible Study",
      description: "Deepen your understanding of Scripture with fellow parishioners",
      type: "recurring"
    },
    {
      date: "Last Sunday",
      time: "After 10:00 AM Mass",
      title: "Parish Council Meeting",
      description: "Monthly meeting to discuss parish affairs and activities",
      type: "monthly"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "recurring":
        return "bg-church-gold/10 text-church-gold border-church-gold/20";
      case "monthly":
        return "bg-church-primary/10 text-church-primary border-church-primary/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="calendar" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-church-primary mb-4">
            Parish Calendar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our regular services, special events, and parish activities. 
            All are welcome to participate in our community gatherings.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card shadow-card-custom hover:shadow-elegant transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-church-gold/10 rounded-full flex items-center justify-center">
                            <CalendarIcon className="h-6 w-6 text-church-gold" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-church-primary">
                              {event.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                              {event.type === "recurring" ? "Weekly" : "Monthly"}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-3">
                            {event.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <CalendarIcon className="h-4 w-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>St. Peter Catholic Church</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-card shadow-card-custom">
              <CardHeader>
                <CardTitle className="text-church-primary">
                  Special Events & Announcements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stay tuned for special liturgical celebrations, parish retreats, and community events. 
                  Announcements are made during Mass and posted on our parish bulletin board.
                </p>
                <p className="text-church-gold font-medium mt-4">
                  For the most current information, please check our weekly bulletin or contact the parish office.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;