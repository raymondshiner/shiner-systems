import { projects } from '../../_data';
import { ProjectCard } from '../ui/ProjectCard';
import { Section, SectionTitle } from '../ui/Section';

export function ProjectsSection() {
  return (
    <Section id="projects" className="projects-section">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
