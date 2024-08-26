'use client';

import { useEffect, useState } from 'react';
import MessageForm from '@/app/_components/article/MessageForm';
import { useGetArticleQuery } from '@/app/_api/article/useGetArticleQuery';
import Message from '@/app/_components/article/Message';
import Loading from '@/app/_components/common/atoms/Loading';
import { usePostChatMutation } from '@/app/_api/article/usePostChatMutation';

interface MessageType {
  text: string;
  isUser: boolean;
}

const ChatPage = () => {
  const { data: questionData, isLoading } = useGetArticleQuery();
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>(''); // 현재 질문을 저장하는 상태

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
      setMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }]);

      /*
      console.log({
        articleId: questionData?.articleId || 0,
        question: currentQuestion,
        answer: message, 
      }); */

      postChat({
        articleId: questionData?.articleId || 0,
        question: currentQuestion,
        answer: message,
      });
    }
  };

  return (
    <section className="flex h-full w-full flex-col">
      <div className="flex-grow overflow-y-auto px-8 py-4">
        {isLoading ? (
          <Loading />
        ) : (
          messages.map((msg, index) => (
            <Message key={msg.text} text={msg.text} isUser={msg.isUser} />
          ))
        )}
      </div>
      <MessageForm onSendMessage={onSendMessage} />
    </section>
  );
};

export default ChatPage;
