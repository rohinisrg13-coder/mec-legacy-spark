import researchImage from "@/assets/research-lab.jpg";
import { Lightbulb, Rocket, Globe, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Research = () => {
  const highlights = [
    {
      icon: Lightbulb,
      title: "Innovation Labs",
      description: "State-of-the-art facilities for AI, Robotics, and IoT research",
    },
    {
      icon: Rocket,
      title: "Startup Incubation",
      description: "Supporting student entrepreneurs with funding and mentorship",
    },
    {
      icon: Globe,
      title: "Global Collaborations",
      description: "Partnerships with MIT, Stanford, and leading institutions worldwide",
    },
    {
      icon: Award,
      title: "Research Excellence",
      description: "100+ publications in top-tier journals and conferences annually",
    },
  ];

  return (
    <section id="research" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Research & <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pioneering breakthrough research that transforms ideas into real-world solutions. Our faculty and students are at the forefront of technological advancement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-elegant group">
            <img
              src={researchImage}
              alt="Research Laboratory"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-smooth duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary transition-smooth hover:shadow-md group cursor-pointer"
              >
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                    <highlight.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Key Research Areas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Artificial Intelligence",
              "Renewable Energy",
              "Nanotechnology",
              "Quantum Computing",
              "Biotechnology",
              "Smart Cities",
              "Sustainable Materials",
              "Aerospace Engineering",
            ].map((area, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-card border-2 border-border hover:border-primary rounded-full transition-smooth hover:shadow-md cursor-pointer"
              >
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
