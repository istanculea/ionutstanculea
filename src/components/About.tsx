export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>
          <p className="text-xl text-muted-foreground">
            Building digital experiences with passion and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience 
              creating digital solutions that make a difference. My journey began with 
              a curiosity for how things work, which evolved into a deep love for 
              crafting elegant code and beautiful interfaces.
            </p>
            
            <p className="text-lg leading-relaxed">
              I specialize in modern web technologies and have a keen eye for design. 
              Whether it's building scalable backend systems or creating intuitive 
              user experiences, I approach every project with attention to detail 
              and a commitment to quality.
            </p>

            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge through 
              technical writing and mentoring.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="surface-card p-6 text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground mt-2">Projects Completed</div>
              </div>
              <div className="surface-card p-6 text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground mt-2">Years Experience</div>
              </div>
              <div className="surface-card p-6 text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground mt-2">Happy Clients</div>
              </div>
              <div className="surface-card p-6 text-center">
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground mt-2">Lines of Code</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What I Believe In</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Clean, maintainable code</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>User-centered design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Continuous learning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Collaborative teamwork</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}