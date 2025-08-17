import { useEffect, useState } from "react"
import { Award, Cloud, Users, TrendingUp, Download, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// Using the new uploaded portrait image

export function About() {
  const [counters, setCounters] = useState({
    experience: 0,
    users: 0,
    incidents: 0,
    issues: 0
  })

  const finalValues = {
    experience: 7,
    users: 5000,
    incidents: 25,
    issues: 1000
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            Object.keys(finalValues).forEach((key) => {
              const finalValue = finalValues[key as keyof typeof finalValues]
              let current = 0
              const increment = finalValue / 60 // 60 frames for 1 second animation
              
              const timer = setInterval(() => {
                current += increment
                if (current >= finalValue) {
                  current = finalValue
                  clearInterval(timer)
                }
                setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
              }, 16) // ~60fps
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    const aboutSection = document.getElementById('about')
    if (aboutSection) observer.observe(aboutSection)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    { icon: Award, label: "Years Experience", value: counters.experience, suffix: "+" },
    { icon: Users, label: "Global Users Supported", value: counters.users, suffix: "+" },
    { icon: TrendingUp, label: "Incident Reduction", value: counters.incidents, suffix: "%" },
    { icon: Cloud, label: "Issues Resolved", value: counters.issues, suffix: "+" }
  ]

  const skills = [
    "Terraform", "Azure", "AWS", "CI/CD", "Automation", "Monitoring", "DevOps"
  ]

  const certifications = [
    "Microsoft Azure Fundamentals (AZ-900)",
    "Microsoft Azure Administrator Associate (AZ-104)"
  ]

  return (
    <section id="about" className="py-20 px-6 scroll-mt-20">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cloud & Operations Engineer building reliable infrastructure with care and precision
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-up">
            {/* Summary */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                I'm a passionate <strong>Cloud & Operations Engineer</strong> with over 7 years 
                of hands-on experience building, managing, and automating scalable infrastructure 
                on Azure and AWS. Currently at Electronic Arts, I specialize in hybrid cloud 
                environments and platform reliability that keeps teams productive and users happy.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My approach combines deep technical expertise with genuine care for the people 
                using these systems. Whether it's reducing incidents by 25% or solving complex 
                infrastructure puzzles, I believe the best solutions are both robust and elegant.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                When I'm not optimizing cloud infrastructure, you'll find me tinkering with smart 
                home gadgets, 3D printing fun prototypes, or exploring the latest cloud technologies.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Key Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon
                  return (
                    <div 
                      key={highlight.label}
                      className="surface-card p-4 text-center hover:scale-105 transition-transform duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <IconComponent className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">
                        {highlight.value}{highlight.suffix}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {highlight.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Core Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} className="skill-badge">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center space-x-3">
                    <Award className="h-4 w-4 text-success" />
                    <span className="cert-badge">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button 
                className="btn-hero hover-scale" 
                onClick={() => window.open('/cv.pdf', '_blank')}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative animate-scale-in">
              <div className="relative">
                <img
                  src="/lovable-uploads/170f5004-9944-4459-b193-b8cca34127e6.png"
                  alt="Ionuț Stănculea - Cloud & Operations Engineer"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover object-center rounded-full shadow-tech animate-float"
                />
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full ring-4 ring-primary/20 ring-offset-4 ring-offset-background"></div>
                {/* Gradient overlay effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}