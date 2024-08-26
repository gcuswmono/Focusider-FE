import React from 'react';

interface MessageProps {
  text: string;
  isUser: boolean;
}

const Message = ({ text, isUser }: MessageProps) => {
  return (
    <div className={`mb-3 flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`${
          isUser ? 'self-end bg-primary text-white' : 'self-start bg-primary-200 text-black'
        } flex w-fit max-w-sm break-words rounded-[16px] px-5 py-3 ${isUser ? 'rounded-br-none' : 'rounded-bl-none'}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
