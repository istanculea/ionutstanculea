import { useState } from "react"
import { 
  Cloud, 
  Database, 
  GitBranch, 
  Settings, 
  Monitor,
  Server,
  Container,
  Shield,
  Filter,
  Sparkles
} from "lucide-react"

export function Skills() {
  const [activeFilter, setActiveFilter] = useState("All")

  const skillCategories = [
    {
      title: "Cloud Platforms",
      category: "Cloud",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Azure", "AWS", "Azure DevOps", "Azure Monitor", "CloudFormation", "ARM Templates"],
      color: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20"
    },
    {
      title: "Infrastructure & Automation", 
      category: "Infrastructure",
      icon: <Server className="h-6 w-6" />,
      skills: ["Terraform", "Infrastructure as Code", "PowerShell", "Bash", "Python", "Jenkins"],
      color: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/10 group-hover:bg-green-500/20"
    },
    {
      title: "Containers & Orchestration",
      category: "Containers",
      icon: <Container className="h-6 w-6" />,
      skills: ["Docker", "Kubernetes", "Container Registry", "Helm", "Docker Compose", "Microservices"],
      color: "from-purple-500/20 to-violet-500/20",
      iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20"
    },
    {
      title: "Monitoring & Observability",
      category: "Monitoring",
      icon: <Monitor className="h-6 w-6" />,
      skills: ["Grafana", "Azure Monitor", "Log Analytics", "Application Insights", "Prometheus", "AlertManager"],
      color: "from-orange-500/20 to-amber-500/20",
      iconBg: "bg-orange-500/10 group-hover:bg-orange-500/20"
    },
    {
      title: "Databases & Storage",
      category: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL", "Azure SQL", "Blob Storage", "Redis", "MongoDB"],
      color: "from-red-500/20 to-pink-500/20",
      iconBg: "bg-red-500/10 group-hover:bg-red-500/20"
    },
    {
      title: "DevOps & Collaboration",
      category: "DevOps",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["GitHub", "CI/CD Pipelines", "Jira", "Confluence", "Selenium", "Agile"],
      color: "from-teal-500/20 to-cyan-500/20",
      iconBg: "bg-teal-500/10 group-hover:bg-teal-500/20"
    }
  ]

  const filters = ["All", "Cloud", "Infrastructure", "Containers", "Monitoring", "Databases", "DevOps"]

  const filteredCategories = activeFilter === "All" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.category === activeFilter)

  const additionalSkills = [
    { name: "Other Tools", skills: ["CATIA V5", "Solid Edge", "AutoCAD"] }
  ]

  const languageSkills = [
    { language: "Romanian", level: "Native" },
    { language: "English", level: "C2" },
    { language: "Spanish", level: "B1" },
    { language: "Italian", level: "A2" }
  ]

  const CircularProgress = ({ percentage, language, level }: { percentage: number, language: string, level: string }) => {
    const circumference = 2 * Math.PI * 45
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            fill="transparent"
            className="opacity-20"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{ animationDelay: '0.5s' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-foreground">{percentage}%</span>
          <span className="text-xs text-muted-foreground">{level}</span>
        </div>
      </div>
    )
  }

  return (
    <section id="skills" className="py-20 px-6 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container max-w-7xl mx-auto relative">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Core Capabilities</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on with cloud, CI/CD, containers, and observability—delivering reliable, scalable systems.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'glass-card hover:bg-primary/10 text-muted-foreground hover:text-foreground'
              }`}
            >
              {filter === "All" && <Filter className="h-4 w-4 mr-2 inline" />}
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card p-6 group hover:scale-[1.02] transition-all duration-500 hover-shine relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 ${category.iconBg} rounded-xl text-primary transition-all duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill} 
                      className="skill-badge text-xs hover:scale-105 transition-transform duration-200"
                      style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Additional Skills */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {additionalSkills.map((category) => (
            <div key={category.name} className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge text-xs hover:scale-105 transition-transform duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Language Skills */}
        <div className="glass-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Languages</h3>
            <p className="text-muted-foreground">Fluent, business-ready communication.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {languageSkills.map((lang, index) => (
              <div key={lang.language} className="text-center space-y-4" style={{ animationDelay: `${index * 200}ms` }}>
                <h4 className="font-semibold text-lg mb-4">{lang.language}</h4>
                <CircularProgress 
                  percentage={
                    lang.level === 'Native' ? 100 : 
                    lang.level === 'C2' ? 90 : 
                    lang.level === 'B1' ? 65 : 40
                  }
                  language={lang.language}
                  level={lang.level}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}