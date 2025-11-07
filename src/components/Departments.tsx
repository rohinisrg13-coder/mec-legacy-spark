import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import deptIT from "@/assets/dept-it.png";
import deptCyber from "@/assets/dept-cyber.png";
import deptAI from "@/assets/dept-ai.png";
import deptECE from "@/assets/dept-ece.png";

const Departments = () => {
  const departments = [
    {
      image: deptIT,
      name: "B.Tech. in Information Technology (IT)",
      description: "Ace Computing, Programming & System Design to build innovative software & technology solutions.",
      gradient: "gradient-lime",
    },
    {
      image: deptCyber,
      name: "B.E. in Computer Science & Engineering (Cyber Security)",
      description: "Secure the digital world with advanced cyber security techniques and ethical hacking skills.",
      gradient: "gradient-coral",
    },
    {
      image: deptAI,
      name: "B.E. in Artificial Intelligence & Machine Learning",
      description: "Master AI algorithms, deep learning, and data science to build intelligent systems.",
      gradient: "gradient-purple",
    },
    {
      image: deptECE,
      name: "B.E. in Electronics & Communication Engineering",
      description: "Design cutting-edge electronics, communication systems, and embedded technologies.",
      gradient: "gradient-blue",
    },
    {
      image: deptIT,
      name: "B.E. in Mechanical Engineering",
      description: "Learn robotics, automation, manufacturing processes, and innovative design.",
      gradient: "gradient-orange",
    },
    {
      image: deptECE,
      name: "B.E. in Civil Engineering",
      description: "Build sustainable infrastructure, urban planning, and architectural innovations.",
      gradient: "gradient-cyan",
    },
  ];

  return (
    <section id="departments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className={`${dept.gradient} border-0 rounded-[2rem] overflow-hidden hover:scale-105 transition-smooth cursor-pointer shadow-lg`}
            >
              <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                <div className="w-full h-48 flex items-center justify-center mb-4">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {dept.name}
                </h3>
                <p className="text-foreground/90 text-base leading-relaxed">
                  {dept.description}
                </p>
                <Button 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base font-semibold"
                >
                  Let's Chat
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
