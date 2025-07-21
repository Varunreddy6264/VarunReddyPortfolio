import { Card, CardContent } from '@/components/ui/card';
import genaiCert from '@/assets/certificates/genai-job-sim.png';
import dataAnalyticsCert from '@/assets/certificates/data-analytics-sim.png';
import quantitativeResearchCert from '@/assets/certificates/quantitative-research-sim.png';
import htmltraining from '@/assets/certificates/html.jpg';
import ctraining from '@/assets/certificates/aws.jpg';
import awscloud from '@/assets/certificates/c training.jpg';
import apsche from '@/assets/certificates/1.png';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Artificial Intelligence and Data Science',
      institution: 'Annamacharya Tnstitute of Technology and Sciences, Tirupati',
      period: '2022 - 2026',
      gpa: '7.3/10',
      description: 'Focused on Data Analytics, Excel, Power BI',
      highlights: [
        'Strong foundation in AI and Machine Learning concepts',
        'Hands-on experience with data visualization tools',
        'Active participation in technical workshops',
      ],
    },
  ];

  const certifications = [
    {
      name: 'HTML Training',
      issuer: 'Spoken Tutorial Project at IIT Bombay',
      date: '2023',
      credentialId: '3480823U4G',
      imageUrl:htmltraining,
    },
    {
      name: 'C Training',
      issuer: 'Spoken Tutorial Project at IIT Bombay',
      date: '2023',
      credentialId: '34808234N4',
      imageUrl:ctraining,
    },
    {
      name: 'AWS Cloud Practitioner Exam',
      issuer: 'Geeks for Geeks',
      date: '2024',
      credentialId: 'bd7ed4b2f19f2090a5cfe0cdbdf1825c',
      imageUrl:awscloud,
    },
    {
      name: 'Data Analytics Intern',
      issuer: 'Codec Technologies Pvt. Ltd.',
      date: '2024',
      credentialId: 'E19E86-0116588288923',
    },
    {
      name: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'The Forage',
      date: '2024',
      'User Verification Code': 'et8ysDkvhpx2vWD3W',
      imageUrl: genaiCert,
    },
    {
      name: 'Data Analytics Job Simulation',
      issuer: 'The Forage',
      date: '2024',
      'User Verification Code': 'et8ysDkvhpx2vWD3W',
      imageUrl: dataAnalyticsCert,
    },
    {
      name: 'Quantitative Research Job Simulation',
      issuer: 'The Forage',
      date: '2024',
      'User Verification Code': 'et8ysDkvhpx2vWD3W',
      imageUrl: quantitativeResearchCert,
    },
        {
      name: 'Data Analytics with Tableau ',
      issuer: 'SmartBridge Educational Services Pvt. Ltd',
      date: '2024',
      'User Verification Code': 'EXT-APSCHE_DA-54583',
      imageUrl: apsche,
    },
    
  ];

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4 text-gradient">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and professional certifications that shape my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-8 text-center lg:text-left">
              Education
            </h3>
            {education.map((edu) => (
              <Card key={edu.degree} className="gradient-card shadow-medium border-0">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold mb-2">{edu.degree}</h4>
                      <p className="text-lg text-accent font-semibold">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                      <p className="text-sm text-muted-foreground mt-2">GPA: {edu.gpa}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="font-semibold mb-3">Academic Highlights:</h5>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <svg
                            className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4"
                            />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-8 text-center lg:text-left">
              Professional Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card
                  key={cert.name}
                  className="gradient-card shadow-soft border-0 hover:shadow-medium transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-heading font-semibold mb-1">
                          {cert.imageUrl ? (
                            <a
                              href={cert.imageUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {cert.name}
                            </a>
                          ) : (
                            cert.name
                          )}
                        </h4>
                        <p className="text-sm text-accent">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          ID: {cert.credentialId || cert['User Verification Code']}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Learning Philosophy */}
            <Card className="gradient-card shadow-medium border-0 mt-8">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="font-heading font-semibold mb-2">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground">
                  I believe in staying current with technology trends through continuous learning,
                  online courses, and hands-on experimentation with new tools and frameworks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
