 import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Dr. Jennifer Smith',
      title: 'Computer Science Professor',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c1?w=80&h=80&fit=crop&crop=face',
      quote: "Alex consistently demonstrated exceptional programming skills and creative problem-solving abilities throughout the coursework. His final capstone project showcased real-world application potential and technical excellence.",
      rating: 5
    },
    {
      name: 'Mark Thompson',
      title: 'Senior Developer at TechFlow Inc.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      quote: "During Alex's internship with us, he quickly adapted to our tech stack and contributed meaningful code to our projects. His eagerness to learn and attention to detail really impressed the whole team.",
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      title: 'Study Group Partner & Peer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      quote: "Alex was always the go-to person in our study group for debugging and explaining complex concepts. His collaborative approach and willingness to help others learn made him an invaluable teammate.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4 text-gradient">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure to work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="gradient-card shadow-medium border-0 hover:shadow-strong transition-all duration-300 relative overflow-hidden group">
              <CardContent className="p-8 text-center">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Profile image */}
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author info */}
                <div>
                  <div className="font-heading font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="gradient-card shadow-medium border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to take on new challenges and collaborate with amazing teams. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="anime-button inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="anime-button inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  View My Work
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 
