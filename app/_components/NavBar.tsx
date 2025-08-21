"use client";

import { NAVIGATION_ITEMS } from '../_constants';

export function NavBar() {
  return (
    <nav aria-label="Primary" className="primary-nav">
      <ul>
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
