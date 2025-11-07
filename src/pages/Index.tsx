import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Departments from "@/components/Departments";
import Admissions from "@/components/Admissions";
import Research from "@/components/Research";
import CampusLife from "@/components/CampusLife";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Departments />
      <Admissions />
      <Research />
      <CampusLife />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
