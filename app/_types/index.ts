// Type definitions for the application

export interface Highlight {
    number: string;
    text: string;
}

export interface Skill {
    name: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface ExperienceItem {
    title: string;
    period: string;
    company: string;
    details: string[];
}

export interface EducationItem {
    degree: string;
    period: string;
    school: string;
    details: string;
}

export interface Certification {
    title: string;
    year: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    icon: string;
    technologies: string[];
    links: {
        demo?: string;
        github?: string;
        documentation?: string;
    };
}

export interface ContactMethod {
    icon: string;
    title: string;
    description: string;
    link: string;
    external?: boolean;
}

export interface FormOption {
    value: string;
    label: string;
}
