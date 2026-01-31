import { CSSProperties } from "react"
import { Building2, Calendar, MapPin, Briefcase, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export function Experience() {
  const { t } = useTranslation()
  
  const experiences = [
    {
      title: t('experience.ea.title'),
      company: t('experience.ea.company'),
      location: t('experience.ea.location'),
      period: t('experience.ea.period'),
      achievements: t('experience.ea.achievements', { returnObjects: true })
    },
    {
      title: t('experience.autodesk.title'),
      company: t('experience.autodesk.company'),
      location: t('experience.autodesk.location'),
      period: t('experience.autodesk.period'),
      achievements: t('experience.autodesk.achievements', { returnObjects: true })
    },
    {
      title: t('experience.altenLead.title'),
      company: t('experience.altenLead.company'),
      location: t('experience.altenLead.location'),
      period: t('experience.altenLead.period'),
      achievements: t('experience.altenLead.achievements', { returnObjects: true })
    },
    {
      title: t('experience.altenEngineer.title'),
      company: t('experience.altenEngineer.company'),
      location: t('experience.altenEngineer.location'),
      period: t('experience.altenEngineer.period'),
      achievements: t('experience.altenEngineer.achievements', { returnObjects: true })
    },
    {
      title: t('experience.expleo.title'),
      company: t('experience.expleo.company'),
      location: t('experience.expleo.location'),
      period: t('experience.expleo.period'),
      achievements: t('experience.expleo.achievements', { returnObjects: true })
    }
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-background relative overflow-hidden" data-reveal>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-3 mb-16" data-reveal-item>
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            {t('experience.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              data-reveal-item
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm">
                    <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg text-sm border border-border/50">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {(exp.achievements as string[]).map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12" data-reveal-item style={{ "--reveal-delay": "120ms" } as CSSProperties}>
          <Button
            variant="outline"
            className="group px-6 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-primary/5"
            onClick={() => {
              const target = document.getElementById('skills')
              target?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {t('nav.skills')}
            <ArrowDown className="h-4 w-4 ml-2 transition-transform group-hover:translate-y-0.5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
