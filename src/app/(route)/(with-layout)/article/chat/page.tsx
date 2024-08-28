'use client';

import React, { useEffect, useState } from 'react';
import MessageForm from '@/app/_components/article/MessageForm';
import { useGetArticleQuery } from '@/app/_api/article/useGetArticleQuery';
import Message from '@/app/_components/article/Message';
import Loading from '@/app/_components/common/atoms/Loading';
import { usePostChatMutation } from '@/app/_api/article/usePostChatMutation';
import { usePostResultMutation } from '@/app/_api/article/usePostResultMutation';
import HeaderNextModule from '@/app/_components/common/modules/HeaderNextModule';
import { useRouter, useSearchParams } from 'next/navigation';

interface MessageType {
  text: string;
  isUser: boolean;
}

const ChatPage = () => {
  const { data: questionData, isLoading } = useGetArticleQuery();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [messageCount, setMessageCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const readTime = parseInt(searchParams.get('readTime') || '0', 10);

  const { mutate: postResult } = usePostResultMutation({
    successCallback: () => {
      router.push('/home');
    },
    errorCallback: (error) => {
      console.error('Failed to post result:', error);
      setIsSubmitting(false);
    },
  });

  const { mutate: postChat } = usePostChatMutation({
    successCallback: (response) => {
      setCurrentQuestion(response.data.question);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.question, isUser: false },
      ]);
    },
    errorCallback: (error) => {
      console.error('Failed to post message:', error);
    },
  });

  useEffect(() => {
    if (questionData?.question) {
      setCurrentQuestion(questionData.question);
      setMessages([{ text: questionData.question, isUser: false }]);
    }
  }, [questionData]);

  const onSendMessage = (message: string) => {
    if (message.trim()) {
      setMessageCount((prevCount) => prevCount + 1);

      setMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }]);

      postChat({
        articleId: questionData?.articleId || 0,
        question: currentQuestion,
        answer: message,
      });
    }
  };

  const onEndButtonClick = () => {
    setIsSubmitting(true);
    postResult({
      articleId: questionData?.articleId || 0,
      readTime,
    });
  };

  return (
    <section className="flex h-dvh w-full flex-col">
      <HeaderNextModule onClick={onEndButtonClick} />
      <div className="flex-grow overflow-y-auto px-8 pb-20 pt-6">
        {isLoading || isSubmitting ? (
          <Loading />
        ) : (
          <>
            {messages.map((msg, index) => (
              <Message
                key={msg.text}
                text={msg.text}
                isUser={msg.isUser}
                showEndButton={!msg.isUser && messageCount >= 5 && index === messages.length - 1}
                onEndButtonClick={onEndButtonClick}
              />
            ))}
          </>
        )}
      </div>
      {!isSubmitting && <MessageForm onSendMessage={onSendMessage} />}
    </section>
  );
};

export default ChatPage;
