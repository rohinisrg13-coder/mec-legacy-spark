import { Award, Users, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Award, value: "150+", label: "Years of Excellence" },
    { icon: Users, value: "10,000+", label: "Students" },
    { icon: BookOpen, value: "50+", label: "Programs" },
    { icon: TrendingUp, value: "95%", label: "Placement Rate" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">MEC</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Founded in 1856, Madras Engineering College stands as one of India's oldest and most prestigious engineering institutions. We've been at the forefront of technological innovation, shaping leaders who drive progress globally.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-primary transition-smooth hover:shadow-elegant"
            >
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-gradient mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a globally recognized center of excellence in engineering education, fostering innovation, research, and sustainable development that addresses real-world challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class engineering education, nurture creativity and critical thinking, promote cutting-edge research, and develop ethical leaders who contribute to society's advancement.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
