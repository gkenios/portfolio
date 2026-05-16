import { Mail } from 'lucide-react';

import type { IconProps } from './types';

export function EmailIcon({ href, borderClassName, svgClassName, children }: IconProps) {
  return (
    <a href={`mailto:${href}`} aria-label="Email" className={borderClassName}>
      <Mail className={svgClassName} />
      {children}
    </a>
  );
}
