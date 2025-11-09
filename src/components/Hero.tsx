import heroImage from "@/assets/hero-campus.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
        Madras Engineering College
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-medium">
            rohini Excellence, Inspiring Innovation
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            if you join in the madras engineering college you will be placed in a reputed company with high salary and you learn about more thing of technologies. once you sholud understant the lessons you are a knowledgeful person 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-primary-foreground text-lg px-8 hover:opacity-90 transition-smooth">
              Explore Programs <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2">
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
