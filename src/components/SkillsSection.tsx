import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 80, icon: '⚛️' },
        { name: 'TypeScript', level: 70, icon: '📘' },
        { name: 'Tailwind CSS', level: 80, icon: '🎨' },
        { name: 'Bootstrap', level: 75, icon: '💜' },
        { name: 'jQuery', level: 70, icon: '📜' },
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 75, icon: '🐍' },
        { name: 'Java', level: 70, icon: '☕' },
        { name: 'JavaScript', level: 85, icon: '💛' },
        { name: 'HTML', level: 90, icon: '🌐' },
        { name: 'CSS', level: 85, icon: '🎨' },
      ]
    },
    {
      title: 'Tools & Databases',
      skills: [
        { name: 'Git & GitHub', level: 85, icon: '📁' },
        { name: 'VS Code', level: 90, icon: '💻' },
        { name: 'MySQL', level: 70, icon: '🗄️' },
        { name: 'MongoDB', level: 65, icon: '🍃' },
        { name: 'Node.js', level: 70, icon: '🟢' },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I've learned through coursework, personal projects, and continuous exploration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="gradient-card shadow-medium border-0 hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out group-hover:scale-105"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 3 + skillIndex) * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">
            Hobbies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Doing crypto Projects','Learing New Things','Travelling'
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
