"use client";

export default function Home() {
  return (
    <>
      {/* Home/About Section */}
      <main id="home" className="hero-container">
        <div className="hero-content">
          <h1 className="title">Raymond Shiner</h1>
          <p className="subtitle">Independent Software Developer & Consultant</p>
          <p className="description">
            I deliver innovative software solutions with expertise in modern web technologies,
            cloud architecture, and full-stack development. Let me transform your ideas into robust,
            scalable applications.
          </p>
          <div className="about-highlights">
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
          <div className="cta-buttons">
            <a href="#resume" className="cta-primary">View Resume</a>
            <a href="#contact" className="cta-secondary">Hire Me</a>
          </div>
        </div>
      </main>

      {/* Resume Section */}
      <section id="resume" className="section resume-section">
        <div className="section-container">
          <h2 className="section-title">Resume</h2>
          <div className="resume-content">

            {/* Skills */}
            <div className="resume-block">
              <h3 className="resume-heading">Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <div className="skill-list">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Next.js</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">Vue.js</span>
                    <span className="skill-tag">Tailwind CSS</span>
                    <span className="skill-tag">JavaScript</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <div className="skill-list">
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Express</span>
                    <span className="skill-tag">FastAPI</span>
                    <span className="skill-tag">GraphQL</span>
                    <span className="skill-tag">REST APIs</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Database & Cloud</h4>
                  <div className="skill-list">
                    <span className="skill-tag">PostgreSQL</span>
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">AWS</span>
                    <span className="skill-tag">Vercel</span>
                    <span className="skill-tag">Docker</span>
                    <span className="skill-tag">Redis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="resume-block">
              <h3 className="resume-heading">Experience</h3>
              <div className="experience-list">
                <div className="experience-item">
                  <div className="experience-header">
                    <h4>Independent Software Consultant</h4>
                    <span className="experience-period">2019 - Present</span>
                  </div>
                  <p className="experience-company">Shiner Systems</p>
                  <ul className="experience-details">
                    <li>Deliver end-to-end web applications for clients across various industries</li>
                    <li>Provide technical consulting and architecture guidance for scaling applications</li>
                    <li>Implement modern DevOps practices and CI/CD pipelines</li>
                    <li>Mentor development teams and conduct code reviews</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <div className="experience-header">
                    <h4>Senior Full Stack Developer</h4>
                    <span className="experience-period">2017 - 2019</span>
                  </div>
                  <p className="experience-company">Tech Solutions Inc.</p>
                  <ul className="experience-details">
                    <li>Built scalable web applications using React, Node.js, and AWS</li>
                    <li>Led a team of 5 developers on multiple client projects</li>
                    <li>Improved application performance by 40% through optimization techniques</li>
                    <li>Designed and implemented microservices architecture</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <div className="experience-header">
                    <h4>Software Developer</h4>
                    <span className="experience-period">2015 - 2017</span>
                  </div>
                  <p className="experience-company">StartupXYZ</p>
                  <ul className="experience-details">
                    <li>Developed responsive web applications using modern JavaScript frameworks</li>
                    <li>Collaborated with design teams to implement pixel-perfect UIs</li>
                    <li>Integrated third-party APIs and payment processing systems</li>
                    <li>Participated in agile development processes and sprint planning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="resume-block">
              <h3 className="resume-heading">Education</h3>
              <div className="education-list">
                <div className="education-item">
                  <div className="education-header">
                    <h4>Bachelor of Science in Computer Science</h4>
                    <span className="education-period">2011 - 2015</span>
                  </div>
                  <p className="education-school">University of Technology</p>
                  <p className="education-details">Graduated Summa Cum Laude • GPA: 3.9/4.0</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="resume-block">
              <h3 className="resume-heading">Certifications</h3>
              <div className="certifications-list">
                <div className="certification-item">
                  <h4>AWS Certified Solutions Architect</h4>
                  <span className="certification-year">2022</span>
                </div>
                <div className="certification-item">
                  <h4>Google Cloud Professional Developer</h4>
                  <span className="certification-year">2021</span>
                </div>
                <div className="certification-item">
                  <h4>MongoDB Certified Developer</h4>
                  <span className="certification-year">2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🚀</div>
              </div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>A full-stack e-commerce solution built with Next.js, Stripe payments, and PostgreSQL. Features include inventory management, order tracking, and admin dashboard.</p>
                <div className="project-tech">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Stripe</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">📱</div>
              </div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>A collaborative task management application with real-time updates, built using React, Node.js, and Socket.io. Supports teams, projects, and deadline tracking.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Socket.io</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">☁️</div>
              </div>
              <div className="project-content">
                <h3>Cloud Analytics Dashboard</h3>
                <p>A real-time analytics dashboard for monitoring cloud infrastructure and application metrics. Built with Vue.js frontend and Python FastAPI backend.</p>
                <div className="project-tech">
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">AWS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🔧</div>
              </div>
              <div className="project-content">
                <h3>DevOps Automation Suite</h3>
                <p>A comprehensive DevOps toolkit for automated deployments, monitoring, and infrastructure management using Docker, Kubernetes, and Terraform.</p>
                <div className="project-tech">
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">Kubernetes</span>
                  <span className="tech-tag">Terraform</span>
                  <span className="tech-tag">GitHub Actions</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Documentation</a>
                  <a href="#" className="project-link">GitHub</a>
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
                an existing system, or require technical consulting, I'm here to help.
                Let's discuss how I can bring your vision to life.
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
                      Connect with me on LinkedIn
                    </a>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">🐙</span>
                  <div>
                    <h4>GitHub</h4>
                    <a href="https://github.com/raymondshiner" target="_blank" rel="noopener noreferrer">
                      View my work on GitHub
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