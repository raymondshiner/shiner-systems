import { certifications, education, experiences, skillCategories } from '../../_data';
import { Section, SectionTitle } from '../ui/Section';
import { TechTag } from '../ui/TechTag';

function SkillsBlock() {
  return (
    <div className="resume-block">
      <h3 className="resume-heading">Technical Skills</h3>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h4>{category.title}</h4>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <TechTag key={skillIndex} variant="skill">
                  {skill.name}
                </TechTag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceBlock() {
  return (
    <div className="resume-block">
      <h3 className="resume-heading">Experience</h3>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h4>{exp.title}</h4>
              <span className="experience-period">{exp.period}</span>
            </div>
            <p className="experience-company">{exp.company}</p>
            <ul className="experience-details">
              {exp.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationBlock() {
  return (
    <div className="resume-block">
      <h3 className="resume-heading">Education</h3>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h4>{edu.degree}</h4>
              <span className="education-period">{edu.period}</span>
            </div>
            <p className="education-school">{edu.school}</p>
            <p className="education-details">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CertificationsBlock() {
  return (
    <div className="resume-block">
      <h3 className="resume-heading">Certifications</h3>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <h4>{cert.title}</h4>
            <span className="certification-year">{cert.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ResumeSection() {
  return (
    <Section id="resume" className="resume-section">
      <SectionTitle>Resume</SectionTitle>
      <div className="resume-content">
        <SkillsBlock />
        <ExperienceBlock />
        <EducationBlock />
        <CertificationsBlock />
      </div>
    </Section>
  );
}
