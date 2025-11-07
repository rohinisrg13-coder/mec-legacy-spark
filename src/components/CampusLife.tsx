import campusImage from "@/assets/campus-life.jpg";
import { Users, Music, Trophy, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CampusLife = () => {
  const activities = [
    {
      icon: Users,
      title: "50+ Clubs",
      description: "Technical, cultural, and social clubs for every interest",
    },
    {
      icon: Music,
      title: "Annual Fest",
      description: "Three-day cultural extravaganza with 10,000+ participants",
    },
    {
      icon: Trophy,
      title: "Sports Excellence",
      description: "Olympic-sized facilities and national-level competitions",
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Impactful social initiatives and outreach programs",
    },
  ];

  return (
    <section id="campus-life" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Campus <span className="text-gradient">Life</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience a vibrant community where learning extends beyond the classroom. Build lifelong friendships and create unforgettable memories.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Activities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary transition-smooth hover:shadow-elegant group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                    <activity.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-elegant group order-1 lg:order-2">
            <img
              src={campusImage}
              alt="Campus Life"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-smooth duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">World-Class Facilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Library", value: "500K+ Books" },
              { label: "Hostels", value: "3,000 Beds" },
              { label: "Labs", value: "120+ Labs" },
              { label: "Cafeterias", value: "8 Dining Halls" },
            ].map((facility, index) => (
              <Card key={index} className="border-2 border-border hover:border-accent transition-smooth">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-gradient mb-2">{facility.value}</p>
                  <p className="text-muted-foreground">{facility.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
