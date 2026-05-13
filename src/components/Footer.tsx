import { Mail } from 'lucide-react';

import { CONTACT_DETAILS, FULL_NAME } from '../data';
import { GithubIcon, LinkedinIcon } from './Icons';

const links = [
  {
    Icon: Mail,
    label: 'Email',
    href: `mailto:${CONTACT_DETAILS.email}`,
  },
  {
    Icon: GithubIcon,
    label: 'GitHub',
    href: CONTACT_DETAILS.github,
  },
  {
    Icon: LinkedinIcon,
    label: 'LinkedIn',
    href: CONTACT_DETAILS.linkedin,
  },
] as const;

type FooterProps = {
  subtle?: boolean;
};

export function Footer({ subtle = false }: FooterProps) {
  return (
    <footer className={`py-6 px-6 border-t border-border-main${subtle ? ' bg-bg-subtle' : ''}`}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between">
        <p className="text-[11px] text-dim">
          © {new Date().getFullYear()} {FULL_NAME}. All rights reserved.
        </p>
        <div className="flex gap-6">
          {links.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-2 text-dim hover:text-accent transition-colors duration-200"
            >
              <Icon className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
