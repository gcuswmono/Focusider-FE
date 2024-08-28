import { BeatLoader } from 'react-spinners';

interface LoadingOnPostProps {
  screen?: boolean; // Whether it covers the whole screen or part of the page
  backgroundOpacity?: number; // Background transparency (default is semi-transparent)
}

const LoadingOnPost = ({ screen = false, backgroundOpacity = 0.5 }: LoadingOnPostProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        screen ? 'h-screen w-screen' : 'h-full w-full'
      }`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`, // Set transparent white background
        pointerEvents: 'none', // Allow interactions with elements behind the loader
      }}
    >
      <BeatLoader color="#A390F2" />
    </div>
  );
};

export default LoadingOnPost;
