import type { SlideProps } from './types';

export function ImageSlide({ hobby, isCenter }: SlideProps) {
  return (
    <img
      src={hobby.source}
      alt={hobby.title}
      decoding='async'
      className="w-full h-full object-contain p-6"
      style={{
        transition: 'filter 0.5s ease',
        filter: isCenter
          ? `drop-shadow(0 24px 32px ${hobby.accentColor}55) grayscale(0%)`
          : 'grayscale(90%) brightness(0.6)',
      }}
    />
  );
}
