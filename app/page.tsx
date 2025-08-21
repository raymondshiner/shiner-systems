"use client";

import {
  ContactSection,
  HeroSection,
  ProjectsSection,
  ResumeSection,
} from './_components';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}