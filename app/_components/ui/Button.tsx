interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const baseClass = variant === 'primary' ? 'cta-primary' : 'cta-secondary';

  return (
    <a href={href} className={`${baseClass} ${className}`}>
      {children}
    </a>
  );
}
