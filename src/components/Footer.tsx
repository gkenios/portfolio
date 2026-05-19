import { DynamicIcon } from './ContactIcons';
import type { ContactDetails } from '../types';

type FooterProps = {
  fullName: string;
  contactDetails: ContactDetails;
  subtle?: boolean;
};

export function Footer({ fullName, contactDetails, subtle = false }: FooterProps) {
  return (
    <footer className={`py-6 px-6 border-t border-border-main${subtle ? ' bg-bg-subtle' : ''}`}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between">
        <p className="text-[11px] text-muted">
          © {new Date().getFullYear()} {fullName}. All rights reserved.
        </p>
        <div className="flex gap-6">
          {/* Iterate over contact details and render icons */}
          {Object.entries(contactDetails).map(([key, value]: [string, string]) => (
            <DynamicIcon
              key={key}
              name={key as keyof ContactDetails}
              href={value}
              borderClassName="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200"
              svgClassName="w-4 h-4"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{key}</span>
            </DynamicIcon>
          ))}
        </div>
      </div>
    </footer>
  );
}
