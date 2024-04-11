import { LucideProps, icons } from 'lucide-react';

interface IconProps extends Omit<LucideProps, 'ref'> {
    name: keyof typeof icons;
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = icons[name];

  return (
      <LucideIcon {...props} />
  );
}
