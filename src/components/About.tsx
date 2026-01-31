import { CSSProperties } from "react"
import { Zap, Cloud, Wrench, Users, Activity, CheckCircle, Heart, Award, Sparkles, Code2, UserRound, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"
import profilePhoto from "@/assets/profile-photo.png"

export function About() {
  const { t } = useTranslation()
  
  const chipHighlights = [
    { icon: Zap, text: "5+ years of experience in IT Operations, QA, and Cloud Engineering" },
    { icon: Cloud, text: "AWS, Azure, CI/CD, Terraform, Docker, Kubernetes" },
    { icon: Wrench, text: "Incident management, automation, platform reliability" },
    { icon: Users, text: "Agile/Scrum, cross‑functional collaboration" },
    { icon: Activity, text: "Monitoring, observability, performance in hybrid clouds" },
    { icon: CheckCircle, text: "QA automation and DevOps best practices" }
  ]

  const skills = [
    "Terraform", "Azure", "AWS", "CI/CD", "Automation", "Monitoring", "DevOps"
  ]

  const certifications = [
    "Microsoft Azure Fundamentals (AZ-900)",
    "Microsoft Azure Administrator Associate (AZ-104)"
  ]

  return (
    <section id="about" className="py-24 px-6 scroll-mt-20 relative overflow-hidden" data-reveal>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16" data-reveal-item>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            {t('about.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground flex items-center justify-center gap-4">
            <UserRound className="h-10 w-10 text-primary" />
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Mobile-first layout: Photo appears first on mobile, side-by-side on desktop */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 items-start">
          {/* Content column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 backdrop-blur-sm bg-card/50 rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-300" data-reveal-item style={{ "--reveal-delay": "80ms" } as CSSProperties}>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t('about.paragraph1')}
              </p>
              
              <p className="text-base leading-relaxed text-muted-foreground">
                {t('about.paragraph2')}
              </p>

              <p className="text-base leading-relaxed text-muted-foreground flex items-center gap-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </span>
                {t('about.paragraph3')}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2" data-reveal-item style={{ "--reveal-delay": "140ms" } as CSSProperties}>
              {chipHighlights.map((highlight, index) => {
                const IconComponent = highlight.icon
                return (
                  <div 
                    key={index}
                    className="group rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-5 flex items-start gap-4 transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed text-foreground/90">{highlight.text}</span>
                  </div>
                )
              })}
            </div>

            <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5" data-reveal-item style={{ "--reveal-delay": "200ms" } as CSSProperties}>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t('about.coreSkills')}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 space-y-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5" data-reveal-item style={{ "--reveal-delay": "260ms" } as CSSProperties}>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t('about.certifications')}</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div 
                    key={cert} 
                    className="flex items-center gap-4 p-3 rounded-xl bg-background/50 border border-border/30"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/50 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-foreground/80 leading-relaxed">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2" data-reveal-item style={{ "--reveal-delay": "320ms" } as CSSProperties}>
              <Button 
                size="lg"
                className="px-8 py-6 text-base bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                onClick={() => {
                  const experienceSection = document.getElementById('experience');
                  experienceSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ArrowDown className="h-5 w-5 mr-2" />
                {t('nav.experience')}
              </Button>
            </div>
          </div>

          {/* Photo column - renders first on mobile (order-first), normal on desktop */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full" data-reveal-item style={{ "--reveal-delay": "100ms" } as CSSProperties}>
            <div className="lg:sticky lg:top-24">
              <div className="relative group">
                {/* Animated gradient glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-accent-light/20 to-primary/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-glow" />
                
                {/* Decorative ring with gradient border */}
                <div className="absolute -inset-2 rounded-3xl border-2 border-gradient-animated opacity-50" />
                
                {/* Main image container */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-accent-light/40 rounded-3xl opacity-40" />
                  <img
                    src={profilePhoto}
                    alt="Ionuț Stănculea - Cloud & Operations Engineer"
                    className="relative w-72 h-80 md:w-80 md:h-96 lg:w-[320px] lg:h-[400px] object-cover object-top rounded-2xl border-2 border-primary/30 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-primary/20"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Status badge - positioned at bottom center */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-card/95 backdrop-blur-md border border-primary/30 rounded-full shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">Available for hire</span>
                  </div>
                </div>

                {/* Floating accent shapes for depth */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/10 rounded-full blur-lg animate-float" />
                <div className="absolute -bottom-8 -left-4 w-16 h-16 bg-accent-light/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
