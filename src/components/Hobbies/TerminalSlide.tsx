import { TerminalWindow } from './TerminalWindow';
import type { SlideProps } from './types';

export function TerminalSlide({ hobby, isCenter }: SlideProps) {
  return (
    <div
      className="w-full h-full flex items-center justify-center p-7"
      style={{
        filter: !isCenter ? 'grayscale(80%) brightness(0.5)' : undefined,
        transition: 'filter 0.5s ease',
      }}
    >
      <div className="w-full h-full">
        <TerminalWindow codeSnippet={hobby.source} accentColor={hobby.accentColor} />
      </div>
    </div>
  );
}
