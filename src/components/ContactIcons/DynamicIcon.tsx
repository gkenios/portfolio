import { EmailIcon } from './EmailIcon';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import type { IconProps } from './types';
import type { ContactDetails } from '../../types';

const iconRegistry = {
  email: EmailIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

type DynamicIconProps = {
  name: keyof ContactDetails;
} & IconProps;

export function DynamicIcon({
  name,
  href,
  borderClassName,
  svgClassName,
  children,
}: DynamicIconProps) {
  const IconComponent = iconRegistry[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in registry.`);
    return null;
  }
  return (
    <IconComponent href={href} borderClassName={borderClassName} svgClassName={svgClassName}>
      {children}
    </IconComponent>
  );
}
