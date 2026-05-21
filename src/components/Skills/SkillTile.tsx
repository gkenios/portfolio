import type React from 'react';

type SkillTileProps = {
  name: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

export function SkillTile({ name, icon: Icon }: SkillTileProps) {
  const initials = name
    .split(/[\s\-/]/)
    .map((w) => w[0] ?? '')
    .join('')
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="group flex items-center gap-4 px-5 py-3 border border-border-main bg-surface hover:border-accent hover:bg-accent-muted transition-all duration-300 cursor-default">
      {Icon && <Icon className="w-6 h-6 object-contain shrink-0" />}
      {!Icon && (
        <span className="w-6 h-6 flex items-center justify-center text-[9px] font-mono font-bold text-accent border border-accent/25 bg-accent/5 shrink-0">
          {initials}
        </span>
      )}
      <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors">
        {name}
      </span>
    </div>
  );
}
