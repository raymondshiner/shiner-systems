"use client";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="hero-container">
        <div className="hero-content">
          <h1 className="title">Shiner Systems</h1>
          <p className="subtitle">Independent Software Consulting</p>
          <p className="description">
            Delivering innovative software solutions with expertise in modern web technologies,
            cloud architecture, and full-stack development. Transform your ideas into robust,
            scalable applications.
          </p>
          <div className="cta-buttons">
            <a href="#services" className="cta-primary">Our Services</a>
            <a href="#contact" className="cta-secondary">Get in Touch</a>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="section-container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Full-Stack Development</h3>
              <p>End-to-end web application development using modern frameworks like React, Next.js, and Node.js. From concept to deployment.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud architecture design and implementation using AWS, Azure, and Google Cloud Platform for optimal performance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Mobile Development</h3>
              <p>Cross-platform mobile applications using React Native and modern development practices for iOS and Android.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Technical Consulting</h3>
              <p>Strategic technology guidance, code reviews, architecture planning, and development team mentoring.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔄</div>
              <h3>DevOps & CI/CD</h3>
              <p>Automated deployment pipelines, containerization with Docker, and infrastructure as code solutions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Performance Optimization</h3>
              <p>Application performance tuning, database optimization, and scalability improvements for existing systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section tech-section">
        <div className="section-container">
          <h2 className="section-title">Technology Expertise</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-list">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-list">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">GraphQL</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Database</h3>
              <div className="tech-list">
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Redis</span>
                <span className="tech-tag">Prisma</span>
                <span className="tech-tag">Supabase</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Cloud & DevOps</h3>
              <div className="tech-list">
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Vercel</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">GitHub Actions</span>
                <span className="tech-tag">Terraform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="section-container">
          <h2 className="section-title">About Shiner Systems</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Founded by Raymond Shiner, Shiner Systems is an independent software consulting
                firm dedicated to delivering high-quality, innovative solutions for businesses
                of all sizes. With years of experience in software development and system
                architecture, we specialize in modern web technologies and cloud-native solutions.
              </p>
              <p>
                Our approach combines technical excellence with practical business insights,
                ensuring that every project not only meets technical requirements but also
                drives real business value. We work closely with our clients to understand
                their unique challenges and deliver tailored solutions that scale with their growth.
              </p>
              <div className="highlights">
                <div className="highlight">
                  <span className="highlight-number">5+</span>
                  <span className="highlight-text">Years Experience</span>
                </div>
                <div className="highlight">
                  <span className="highlight-number">50+</span>
                  <span className="highlight-text">Projects Completed</span>
                </div>
                <div className="highlight">
                  <span className="highlight-number">100%</span>
                  <span className="highlight-text">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to Start Your Project?</h3>
              <p>
                Whether you need a complete application built from scratch, want to modernize
                an existing system, or require technical consulting, we're here to help.
                Let's discuss how we can bring your vision to life.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:contact@shinersystems.com">contact@shinersystems.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">💼</span>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://linkedin.com/in/raymondshiner" target="_blank" rel="noopener noreferrer">
                      Connect with Raymond Shiner
                    </a>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">🐙</span>
                  <div>
                    <h4>GitHub</h4>
                    <a href="https://github.com/raymondshiner" target="_blank" rel="noopener noreferrer">
                      View Our Work
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="project">Project Type</label>
                  <select id="project" name="project">
                    <option value="">Select a service</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="optimization">Performance Optimization</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={4} required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
