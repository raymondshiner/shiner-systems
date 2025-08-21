// Application constants

export const SITE_CONFIG = {
    name: "Raymond Shiner",
    title: "Raymond Shiner - Software Developer & Consultant",
    description:
        "Independent software developer and consultant specializing in modern web technologies, cloud architecture, and full-stack development.",
    url: "https://shinersystems.com",
    author: "Raymond Shiner",
    email: "contact@shinersystems.com",
} as const;

export const SOCIAL_LINKS = {
    linkedin: "https://linkedin.com/in/raymondshiner",
    github: "https://github.com/raymondshiner",
    email: "mailto:contact@shinersystems.com",
} as const;

export const NAVIGATION_ITEMS = [
    { href: "#home", label: "Home" },
    { href: "#resume", label: "Resume" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
] as const;

export const ANIMATION_DELAYS = {
    short: 150,
    medium: 300,
    long: 500,
} as const;
