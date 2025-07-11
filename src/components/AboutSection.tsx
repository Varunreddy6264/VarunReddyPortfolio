import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to life through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Card className="gradient-card shadow-medium border-0">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground mb-6">
                Hi, I'm CHILAMKURU VARUN KUMAR REDDY, a passionate and ambitious Artificial Intelligence & Data Science graduate from Annamacharya Institute of Technology and Sciences, Tirupati. Ever since I was introduced to the power of data and intelligent systems, I've been deeply driven to explore how technology can solve real-world problems and make life better.
                </p>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                
                  As a fresher, I may not have years of industry experience, but I bring fresh ideas, a strong work ethic, and a mindset eager to learn and grow. I'm looking for a platform where I can contribute meaningfully, keep learning from industry experts, and build innovative solutions that make a difference.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">1</div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent">2026</div>
                    <div className="text-sm text-muted-foreground">Graduate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full gradient-primary p-1 shadow-strong">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                 <img 
                   src="/IMG_20231204_075604_725.jpg" 
                   alt="My Profile"
                   className="w-full h-full object-cover rounded-full"
                 />
                </div>
              </div>
              
              {/* Floating badges */}
             <div className="absolute -top-2 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-medium animate-float"> 
                 Creativity
              </div> 
              <div className="absolute -bottom-7 -left-9 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-medium animate-float" style={{animationDelay: '1s'}}>
                Quick Learner
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="gradient-card shadow-soft border-0 hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Always exploring new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-soft border-0 hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Strong team player with excellent communication skills and agile methodology experience.
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-soft border-0 hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold mb-2">Quality</h3>
              <p className="text-sm text-muted-foreground">
                Committed to writing clean, maintainable code with comprehensive testing and documentation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
