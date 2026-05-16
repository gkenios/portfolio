import { DynamicIcon } from './ContactIcons';
import { CONTACT_DETAILS, FULL_NAME } from '../data';

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
          {/* Iterate over contact details and render icons */}
          {Object.entries(CONTACT_DETAILS).map(([key, value]) => (
            <DynamicIcon
              key={key}
              name={key as keyof typeof CONTACT_DETAILS}
              href={value}
              borderClassName="flex items-center gap-2 text-dim hover:text-accent transition-colors duration-200"
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
