import { contactContent, contactMethods, projectTypes } from '../../_data';
import { Section, SectionTitle } from '../ui/Section';

function ContactMethods() {
  return (
    <div className="contact-methods">
      {contactMethods.map((method, index) => (
        <div key={index} className="contact-method">
          <span className="contact-icon">{method.icon}</span>
          <div>
            <h4>{method.title}</h4>
            <a
              href={method.link}
              {...(method.external && {
                target: "_blank",
                rel: "noopener noreferrer"
              })}
            >
              {method.description}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  return (
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
            {projectTypes.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export function ContactSection() {
  return (
    <Section id="contact" className="contact-section">
      <SectionTitle>{contactContent.title}</SectionTitle>
      <div className="contact-content">
        <div className="contact-info">
          <h3>{contactContent.subtitle}</h3>
          <p>{contactContent.description}</p>
          <ContactMethods />
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
