import { BeatLoader } from 'react-spinners';

const Loading = ({ screen = false }) => {
  return (
    <div className="fixed inset-0 z-40 flex h-full w-full">
      <BeatLoader color="#A390F2" className="mx-auto my-auto" />
    </div>
  );
};

export default Loading;
