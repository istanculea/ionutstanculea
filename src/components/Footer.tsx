import { Mail, MapPin, Linkedin, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Blog", href: "/blog" },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ionut-stanculea",
      icon: Linkedin
    },
    {
      name: "GitHub", 
      href: "https://github.com/ionut-stanculea",
      icon: Github
    }
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.location.href = href
    }
  }

  return (
    <footer className="py-16 px-6 border-t border-border bg-muted/20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Me */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gradient">Ionuț Stănculea</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cloud Infrastructure Engineer passionate about building scalable, automated solutions that drive business growth and innovation.
            </p>
            <Button 
              className="w-full sm:w-auto"
              onClick={() => scrollToSection('#contact')}
            >
              Hire Me
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:ionut@example.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors text-sm group"
              >
                <Mail className="h-4 w-4 group-hover:text-primary transition-colors" />
                <span>ionut@example.com</span>
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                <span>Remote / Europe</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors text-sm group"
                  >
                    <Icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                    <span>{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Ionuț Stănculea. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ☁️ and ⚡ automation
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}