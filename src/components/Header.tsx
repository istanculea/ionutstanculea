import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { NavLink, useLocation } from "react-router-dom"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  const navItems = [
    { href: "#about", label: "About Me" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact Me" }
  ]

  const scrollToSection = (href: string) => {
    if (!isHomePage) {
      window.location.href = `/${href}`
      return
    }
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        const headerHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Removed as requested */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href === "#blog" ? (
                <NavLink
                  key={item.href}
                  to="/blog"
                  className={({ isActive }) =>
                    `text-foreground hover:text-primary transition-colors font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                      isActive ? "text-primary after:scale-x-100" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-200 font-medium rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.href === "#blog" ? (
                  <NavLink
                    key={item.href}
                    to="/blog"
                    className={({ isActive }) =>
                      `text-foreground hover:text-primary transition-colors font-medium ${
                        isActive ? "text-primary" : ""
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => {
                      scrollToSection(item.href)
                      setIsMenuOpen(false)
                    }}
                    className="px-4 py-2 text-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-200 font-medium text-left rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}