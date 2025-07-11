import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
// import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
// import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      {/* <ProjectsSection /> */}
      <EducationSection />
      {/* <TestimonialsSection /> */}
      <ContactSection /> 
      <Footer />
    </div>
  );
};

export default Index;
