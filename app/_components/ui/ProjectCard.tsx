import { Project } from '../../_types';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image">
        <div className="project-placeholder">{project.icon}</div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.links.demo && (
            <a href={project.links.demo} className="project-link">Live Demo</a>
          )}
          {project.links.github && (
            <a href={project.links.github} className="project-link">GitHub</a>
          )}
          {project.links.documentation && (
            <a href={project.links.documentation} className="project-link">Documentation</a>
          )}
        </div>
      </div>
    </div>
  );
}

export { ProjectCard };
