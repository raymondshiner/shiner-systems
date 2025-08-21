"use client";

export function NavBar() {
  return (
    <nav aria-label="Primary" className="primary-nav">
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}
