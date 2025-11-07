import { Cpu, Cog, Zap, Building, FlaskConical, Radio } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Departments = () => {
  const departments = [
    {
      icon: Cpu,
      name: "Computer Science & Engineering",
      description: "AI, Machine Learning, Software Development, and Cybersecurity",
      color: "primary",
    },
    {
      icon: Zap,
      name: "Electrical & Electronics",
      description: "Power Systems, Embedded Systems, and IoT Technologies",
      color: "accent",
    },
    {
      icon: Cog,
      name: "Mechanical Engineering",
      description: "Robotics, Automation, Manufacturing, and Design",
      color: "primary",
    },
    {
      icon: Building,
      name: "Civil Engineering",
      description: "Structural Design, Urban Planning, and Sustainable Construction",
      color: "accent",
    },
    {
      icon: FlaskConical,
      name: "Chemical Engineering",
      description: "Process Engineering, Nanotechnology, and Green Chemistry",
      color: "primary",
    },
    {
      icon: Radio,
      name: "Electronics & Communication",
      description: "VLSI, Signal Processing, and Wireless Communications",
      color: "accent",
    },
  ];

  return (
    <section id="departments" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Departments</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our diverse range of engineering disciplines, each offering cutting-edge curriculum and state-of-the-art facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-smooth hover:shadow-elegant group cursor-pointer"
            >
              <CardHeader>
                <div className={`w-14 h-14 ${dept.color === 'primary' ? 'gradient-primary' : 'bg-accent'} rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth`}>
                  <dept.icon className={`w-7 h-7 ${dept.color === 'primary' ? 'text-primary-foreground' : 'text-accent-foreground'}`} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {dept.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{dept.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
