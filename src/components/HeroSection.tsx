import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70 dark:bg-background/80"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Hi, I'm{' '}
            <span className="text-gradient">Chilamkuru Varun Kumar Reddy</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Fresh Graduate & Aspiring Data Analytics ready to create amazing digital experiences
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{animationDelay: '0.2s'}}>
          <Button 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="gradient-primary text-primary-foreground shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Contact Me
          </Button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary/20 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-primary-light/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
