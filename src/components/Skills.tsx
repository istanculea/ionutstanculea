import { 
  Code2, 
  Database, 
  Palette, 
  Cloud, 
  Globe, 
  Smartphone,
  Server,
  GitBranch
} from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "SASS"]
    },
    {
      title: "Backend", 
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "FastAPI"]
    },
    {
      title: "Design",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Framer"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS", "Docker", "Kubernetes", "Vercel", "Netlify", "GitHub Actions"]
    },
    {
      title: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["React Native", "Flutter", "Expo", "iOS", "Android", "PWA"]
    },
    {
      title: "Tools",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "VS Code", "Linear", "Notion", "Slack", "Postman"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="surface-card p-8 group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="font-medium">Clean Code</span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Database className="h-8 w-8 text-primary" />
              <span className="font-medium">System Design</span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Palette className="h-8 w-8 text-primary" />
              <span className="font-medium">UI/UX Design</span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <GitBranch className="h-8 w-8 text-primary" />
              <span className="font-medium">Team Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}