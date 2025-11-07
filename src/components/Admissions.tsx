import { Calendar, FileText, CheckCircle, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Admissions = () => {
  const steps = [
    {
      icon: FileText,
      title: "Application",
      description: "Submit your application with academic transcripts and entrance exam scores",
    },
    {
      icon: CheckCircle,
      title: "Evaluation",
      description: "Our admission committee reviews your application and credentials",
    },
    {
      icon: Calendar,
      title: "Interview",
      description: "Selected candidates attend a personal interview and aptitude assessment",
    },
    {
      icon: GraduationCap,
      title: "Enrollment",
      description: "Receive your admission letter and complete enrollment formalities",
    },
  ];

  const requirements = [
    "Minimum 85% in 12th standard (PCM)",
    "Valid entrance exam scores (JEE/SAT)",
    "English proficiency certification",
    "Statement of purpose",
    "Two letters of recommendation",
  ];

  return (
    <section id="admissions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Admissions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the next generation of engineering leaders. Our admission process is designed to identify exceptional talent and potential.
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Admission Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary transition-smooth relative overflow-hidden group"
              >
                <div className="absolute top-4 right-4 text-5xl font-bold text-muted/10">
                  {index + 1}
                </div>
                <CardContent className="p-6 relative z-10">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements and CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Eligibility Requirements</h3>
              <ul className="space-y-3 mb-8">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary flex-1">
                  Start Application
                </Button>
                <Button size="lg" variant="outline" className="flex-1 border-2 border-primary">
                  Download Prospectus
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Dates */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Application Deadline:</strong> March 31, 2026 |{" "}
            <strong className="text-foreground">Academic Year Starts:</strong> August 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
