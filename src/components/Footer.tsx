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

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border-main bg-bg-subtle">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <div className="flex gap-12">
          {links.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="flex flex-col items-center gap-2 text-dim hover:text-accent transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{label}</span>
            </a>
          ))}
        </div>
        <p className="text-[11px] text-dim">
          © {new Date().getFullYear()} {FULL_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
