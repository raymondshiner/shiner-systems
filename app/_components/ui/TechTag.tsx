interface TechTagProps {
  children: React.ReactNode;
  variant?: 'skill' | 'tech';
}

export function TechTag({ children, variant = 'tech' }: TechTagProps) {
  const className = variant === 'skill' ? 'skill-tag' : 'tech-tag';

  return (
    <span className={className}>{children}</span>
  );
}
