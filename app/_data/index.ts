// Application data and content

import {
    Certification,
    ContactMethod,
    EducationItem,
    ExperienceItem,
    FormOption,
    Highlight,
    Project,
    SkillCategory,
} from "../_types";

export const heroData = {
    name: "Raymond Shiner",
    title: "Independent Software Developer & Consultant",
    description: `I deliver innovative software solutions with expertise in modern web technologies,
    cloud architecture, and full-stack development. Let me transform your ideas into robust,
    scalable applications.`,
};

export const highlights: Highlight[] = [
    { number: "5+", text: "Years Experience" },
    { number: "50+", text: "Projects Completed" },
    { number: "100%", text: "Client Satisfaction" },
];

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "React" },
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "Vue.js" },
            { name: "Tailwind CSS" },
            { name: "JavaScript" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js" },
            { name: "Python" },
            { name: "Express" },
            { name: "FastAPI" },
            { name: "GraphQL" },
            { name: "REST APIs" },
        ],
    },
    {
        title: "Database & Cloud",
        skills: [
            { name: "PostgreSQL" },
            { name: "MongoDB" },
            { name: "AWS" },
            { name: "Vercel" },
            { name: "Docker" },
            { name: "Redis" },
        ],
    },
];

export const experiences: ExperienceItem[] = [
    {
        title: "Independent Software Consultant",
        period: "2019 - Present",
        company: "Shiner Systems",
        details: [
            "Deliver end-to-end web applications for clients across various industries",
            "Provide technical consulting and architecture guidance for scaling applications",
            "Implement modern DevOps practices and CI/CD pipelines",
            "Mentor development teams and conduct code reviews",
        ],
    },
    {
        title: "Senior Full Stack Developer",
        period: "2017 - 2019",
        company: "Tech Solutions Inc.",
        details: [
            "Built scalable web applications using React, Node.js, and AWS",
            "Led a team of 5 developers on multiple client projects",
            "Improved application performance by 40% through optimization techniques",
            "Designed and implemented microservices architecture",
        ],
    },
    {
        title: "Software Developer",
        period: "2015 - 2017",
        company: "StartupXYZ",
        details: [
            "Developed responsive web applications using modern JavaScript frameworks",
            "Collaborated with design teams to implement pixel-perfect UIs",
            "Integrated third-party APIs and payment processing systems",
            "Participated in agile development processes and sprint planning",
        ],
    },
];

export const education: EducationItem[] = [
    {
        degree: "Bachelor of Science in Computer Science",
        period: "2011 - 2015",
        school: "University of Technology",
        details: "Graduated Summa Cum Laude • GPA: 3.9/4.0",
    },
];

export const certifications: Certification[] = [
    { title: "AWS Certified Solutions Architect", year: "2022" },
    { title: "Google Cloud Professional Developer", year: "2021" },
    { title: "MongoDB Certified Developer", year: "2020" },
];

export const projects: Project[] = [
    {
        id: "ecommerce",
        title: "E-Commerce Platform",
        description:
            "A full-stack e-commerce solution built with Next.js, Stripe payments, and PostgreSQL. Features include inventory management, order tracking, and admin dashboard.",
        icon: "🚀",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
        links: {
            demo: "#",
            github: "#",
        },
    },
    {
        id: "task-management",
        title: "Task Management App",
        description:
            "A collaborative task management application with real-time updates, built using React, Node.js, and Socket.io. Supports teams, projects, and deadline tracking.",
        icon: "📱",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
        links: {
            demo: "#",
            github: "#",
        },
    },
    {
        id: "analytics-dashboard",
        title: "Cloud Analytics Dashboard",
        description:
            "A real-time analytics dashboard for monitoring cloud infrastructure and application metrics. Built with Vue.js frontend and Python FastAPI backend.",
        icon: "☁️",
        technologies: ["Vue.js", "Python", "FastAPI", "AWS"],
        links: {
            demo: "#",
            github: "#",
        },
    },
    {
        id: "devops-suite",
        title: "DevOps Automation Suite",
        description:
            "A comprehensive DevOps toolkit for automated deployments, monitoring, and infrastructure management using Docker, Kubernetes, and Terraform.",
        icon: "🔧",
        technologies: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
        links: {
            documentation: "#",
            github: "#",
        },
    },
];

export const contactMethods: ContactMethod[] = [
    {
        icon: "📧",
        title: "Email",
        description: "contact@shinersystems.com",
        link: "mailto:contact@shinersystems.com",
    },
    {
        icon: "💼",
        title: "LinkedIn",
        description: "Connect with me on LinkedIn",
        link: "https://linkedin.com/in/raymondshiner",
        external: true,
    },
    {
        icon: "🐙",
        title: "GitHub",
        description: "View my work on GitHub",
        link: "https://github.com/raymondshiner",
        external: true,
    },
];

export const projectTypes: FormOption[] = [
    { value: "", label: "Select a service" },
    { value: "web-app", label: "Web Application" },
    { value: "mobile-app", label: "Mobile Application" },
    { value: "consulting", label: "Technical Consulting" },
    { value: "optimization", label: "Performance Optimization" },
    { value: "other", label: "Other" },
];

export const contactContent = {
    title: "Let's Work Together",
    subtitle: "Ready to Start Your Project?",
    description: `Whether you need a complete application built from scratch, want to modernize 
    an existing system, or require technical consulting, I'm here to help. 
    Let's discuss how I can bring your vision to life.`,
};
