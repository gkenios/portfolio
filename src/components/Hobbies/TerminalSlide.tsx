import { TerminalWindow } from './TerminalWindow';
import type { TerminalHobby } from '../../types';

type TerminalSlideProps = {
  hobby: TerminalHobby;
  isCenter: boolean;
};

export function TerminalSlide({ hobby, isCenter }: TerminalSlideProps) {
  return (
    <div
      className="w-full h-full flex items-center justify-center p-7"
      style={{
        filter: !isCenter ? 'grayscale(80%) brightness(0.5)' : undefined,
        transition: 'filter 0.5s ease',
      }}
    >
      <div className="w-full h-full">
        <TerminalWindow codeSnippet={hobby.codeSnippet} accentColor={hobby.accentColor} />
      </div>
    </div>
  );
}
