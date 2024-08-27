'use client';

import { useState } from 'react';
import { SendIcon } from '@/app/_assets/icons';
import Image from 'next/image';

interface MessageFormProps {
  onSendMessage: (message: string) => void;
}

const MessageForm = ({ onSendMessage }: MessageFormProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 flex w-full items-center gap-x-1.5 border-t border-gray-200 bg-primary-100 p-5 xl:w-[1280px]"
    >
      <input
        type="text"
        placeholder="메시지를 입력하세요."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="mr-2.5 flex-grow rounded-md border border-gray-300 py-2.5 pl-3 focus:outline-none"
      />
      <button
        type="submit"
        className="cursor-pointer rounded-md border-none font-semibold text-white"
      >
        <Image src={SendIcon} alt="send" className="h-8 w-8" />
      </button>
    </form>
  );
};

export default MessageForm;
