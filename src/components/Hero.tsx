import React from 'react';
import { Button } from '@/components/ui/button';
import { Cloud, Code, Server, Sparkles, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-light/8 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px]" />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Cloud className="absolute top-24 left-[15%] w-10 h-10 text-primary/15 animate-float" />
        <Server className="absolute bottom-32 right-[20%] w-12 h-12 text-primary/10 animate-float" style={{ animationDelay: '1s' }} />
        <Code className="absolute top-1/3 right-[15%] w-8 h-8 text-primary/15 animate-float" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute bottom-1/4 left-[20%] w-7 h-7 text-primary/10 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-10 hero-entrance">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm shadow-lg shadow-primary/5">
            <Sparkles className="w-4 h-4" />
            <span>Cloud Infrastructure & DevOps Expert</span>
          </div>

          {/* Main heading with enhanced gradient */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary">
                Ionuț Stănculea
              </span>
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent-light rounded-full" />
          </div>

          {/* Subtitle with enhanced styling */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building reliable, scalable cloud infrastructure with{' '}
            <span className="text-primary font-semibold">AWS</span>,{' '}
            <span className="text-primary font-semibold">Azure</span>, and{' '}
            <span className="text-primary font-semibold">DevOps</span> best practices
          </p>

          {/* Key highlights with glass effect */}
          <div className="flex flex-wrap justify-center gap-4 text-sm pt-2">
            {[
              '5+ years of experience',
              'Hybrid Cloud Specialist',
              'Infrastructure as Code'
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 bg-primary hover:bg-primary-dark min-h-[52px] group"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base sm:text-lg px-8 py-6 border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 min-h-[52px] backdrop-blur-sm"
              onClick={() => scrollToSection('experience')}
            >
              View Experience
            </Button>
          </div>

          {/* Tech stack with enhanced cards */}
          <div className="pt-14">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Technologies I Work With</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Terraform', 'Kubernetes', 'Docker', 'Jenkins', 'AWS', 'Azure', 'Python', 'CI/CD'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 text-sm font-medium bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
