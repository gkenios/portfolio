import type { ImageHobby } from '../../types';

type ImageSlideProps = {
  hobby: ImageHobby;
  isCenter: boolean;
};

export function ImageSlide({ hobby, isCenter }: ImageSlideProps) {
  return (
    <img
      src={hobby.image}
      alt={hobby.title}
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
