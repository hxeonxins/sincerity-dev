export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 75 },
      ],
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'REST APIs', level: 80 },
        { name: 'Firebase', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block text-sm text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">
            Skills
          </div>
          <h2 className="text-4xl mb-4">기술 스택</h2>
          <p className="text-muted-foreground text-lg">지속적으로 학습하고 성장하고 있습니다</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-card border rounded-2xl p-6">
              <h3 className="text-xl mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
