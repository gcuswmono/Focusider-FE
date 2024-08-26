import React from 'react';

interface MessageProps {
  text: string;
  isUser: boolean;
  showEndButton?: boolean;
  onEndButtonClick?: () => void;
}

const Message = ({ text, isUser, showEndButton = false, onEndButtonClick }: MessageProps) => {
  return (
    <div className={`mb-3 flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`${
          isUser ? 'self-end bg-primary text-white' : 'self-start bg-primary-200 text-black'
        } flex w-fit max-w-sm flex-col break-words rounded-[16px] px-5 py-3 ${isUser ? 'rounded-br-none' : 'rounded-bl-none'}`}
      >
        <p>{text}</p>

        {showEndButton && (
          <div className="mt-2 flex justify-end">
            <button
              className="rounded-full bg-primary px-4 py-1.5 text-4 text-white"
              onClick={onEndButtonClick}
            >
              종료
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
