import { heroData, highlights } from '../../_data';
import { Button } from '../ui/Button';
import { Highlight } from '../ui/Highlight';

export function HeroSection() {
  return (
    <main id="home" className="hero-container">
      <div className="hero-content">
        <h1 className="title">{heroData.name}</h1>
        <p className="subtitle">{heroData.title}</p>
        <p className="description">{heroData.description}</p>

        <div className="about-highlights">
          {highlights.map((highlight, index) => (
            <Highlight
              key={index}
              number={highlight.number}
              text={highlight.text}
            />
          ))}
        </div>

        <div className="cta-buttons">
          <Button href="#resume">View Resume</Button>
          <Button href="#contact" variant="secondary">Hire Me</Button>
        </div>
      </div>
    </main>
  );
}
