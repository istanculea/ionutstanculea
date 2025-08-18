import { Building2, Calendar, MapPin } from "lucide-react"
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
      title: t('experience.metro.title'),
      company: t('experience.metro.company'),
      location: t('experience.metro.location'),
      period: t('experience.metro.period'),
      achievements: t('experience.metro.achievements', { returnObjects: true })
    },
    {
      title: t('experience.altex.title'),
      company: t('experience.altex.company'),
      location: t('experience.altex.location'),
      period: t('experience.altex.period'),
      achievements: t('experience.altex.achievements', { returnObjects: true })
    },
    {
      title: t('experience.brd.title'),
      company: t('experience.brd.company'),
      location: t('experience.brd.location'),
      period: t('experience.brd.period'),
      achievements: t('experience.brd.achievements', { returnObjects: true })
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">{t('experience.title')}</h2>
          <p className="text-xl text-muted-foreground">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="surface-card p-8 hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground bg-surface/50 px-4 py-2 rounded-lg">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {(exp.achievements as string[]).map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}