
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        'https://tnitdhmiqmedptaifzts.supabase.co/functions/v1/send-contact-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      toast({
        title: 'Message sent successfully!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'varunreddy7456@gmail.com',
      link: 'mailto:varunreddy7456@gmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'Linkedin.com',
      link: 'https://www.linkedin.com/in/chilamkuru-varun-kumar-reddy-600802371',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Kadapa, Andhra Pradesh',
      link: null,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'Github.com',
      link: 'https://github.com/Varunreddy6264',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
          <path d="M16 0a16 16 0 1016 16A16.017 16.017 0 0016 0zm.015 5.63a3.757 3.757 0 110 7.515 3.757 3.757 0 010-7.515zM23.485 25.27h-2.683v-5.682c0-1.353-.024-3.09-1.882-3.09-1.884 0-2.173 1.471-2.173 2.993v5.78H14.06V13.23h2.575v1.646h.036a2.825 2.825 0 012.543-1.395c2.716 0 3.22 1.788 3.22 4.113v7.676z"/>
        </svg>
      ),
      label: 'Credly',
      value: 'Credly.com',
      link: 'https://www.credly.com/earner/dashboard',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4 text-gradient">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-8">Get In Touch</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.slice(0, 3).map((info) => (
                <div key={info.label} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} className="font-medium hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-medium">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.slice(3).map((info) => (
                <div key={info.label} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} className="font-medium hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-medium">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="gradient-card shadow-soft border-0 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Resume View */}
            <Card className="gradient-card shadow-soft border-0 mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-semibold mb-1">View Resume</h4>
                    <p className="text-sm text-muted-foreground">
                      Take a look at my resume in image format
                    </p>
                  </div>
                  <a href="/resume/Varun_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open('/resume/Varun_Resume.pdf', '_blank'); }}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-4.553a1 1 0 00-1.414-1.414L13.586 8H5a2 2 0 00-2 2v9a2 2 0 002 2v-7a1 1 0 10-2 0v6H5v-9h8a1 1 0 001-1z" />
                      </svg>
                      View Resume
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="mt-8 p-6 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-success">Quick Response</div>
                  <div className="text-sm text-muted-foreground">
                    I typically respond within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
