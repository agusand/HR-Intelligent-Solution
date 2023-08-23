import { useState, useEffect, useCallback, useMemo } from "react";

import useGetQuestions from "../useGetQuestions";
import useCreateAnswer from "../useCreateAnswer";
import useGetAnswers from "../useGetAnswers";

import { Answer, Message } from "../../types";

import Paragraph from "components/Paragraph";

import User from "types/User";

export default function useMessagesManager(user: User) {
  const [isBotWriting, setIsBotWriting] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatAnswers, setChatAnswers] = useState<Answer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);

  const { chatQuestions } = useGetQuestions(user.first_name);
  const {
    existingChatAnswers,
    lastAnswerIndex,
    isError: isAnswersError,
    isLoading: isAnswersLoading,
  } = useGetAnswers(user.email);
  const { createAnswer } = useCreateAnswer();

  useEffect(() => {
    if (chatQuestions?.length) {
      const min = Math.min(...chatQuestions.map((question) => question.id));
      min && setCurrentQuestion(min);
    }
  }, [chatQuestions]);

  const chatHasFinished = useMemo<boolean>(() => {
    if (!isAnswersLoading && !isAnswersError) {
      return chatAnswers.length === chatQuestions.length;
    } else return false;
  }, [chatAnswers.length, chatQuestions.length, isAnswersError, isAnswersLoading]);

  const welcomeMessage = useMemo<Message>(() => {
    return {
      emitter: "bot",
      children: (
        <p>
          Hola, ¿cómo estas? Bienvenido/a {user.first_name} a la 1er entrevista para MELI. Te voy a
          hacer algunas preguntas para conocerte mejor.
        </p>
      ),
    };
  }, [user.first_name]);
  const initialMessages = useMemo<Message[] | null>(() => {
    if (isAnswersLoading || isAnswersError) return null;

    const messages: Message[] = welcomeMessage ? [welcomeMessage] : [];

    for (let index = 0; index < existingChatAnswers.length; index++) {
      const answer = existingChatAnswers[index];
      const question = chatQuestions.find((question) => question.id === answer.questionId);

      if (!question) {
        continue;
      }

      const botMessage: Message = {
        emitter: "bot",
        children: <Paragraph text={question?.question} />,
        isPlaceholder: false,
      };
      messages.push(botMessage);

      const userMessage: Message = {
        emitter: "user",
        children: <Paragraph text={answer.answer} />,
      };
      messages.push(userMessage);
    }
    return messages;
  }, [chatQuestions, existingChatAnswers, isAnswersError, isAnswersLoading, welcomeMessage]);

  const customSetChatAnswers = useCallback(
    (answerText: string) => {
      if (!currentQuestion) return;

      const answer: Answer = { questionId: currentQuestion, answer: answerText };

      createAnswer(answer);
      setChatAnswers((prevAnswers) => [...prevAnswers, answer]);
    },
    [createAnswer, currentQuestion],
  );

  // Setting inital messages
  useEffect(() => {
    if (!messages.length && initialMessages && typeof lastAnswerIndex === "number") {
      setMessages(initialMessages);
      setCurrentQuestion(lastAnswerIndex + 1);
      setChatAnswers(existingChatAnswers);
    }
  }, [existingChatAnswers, initialMessages, lastAnswerIndex, messages]);

  // Setting question messages
  useEffect(() => {
    if (isAnswersLoading || isAnswersError) return;

    setIsBotWriting(true);

    const question = chatQuestions.find((question) => question.id === currentQuestion)?.question;

    let timer: NodeJS.Timeout;
    if (question) {
      timer = setTimeout(() => {
        setMessages((currentMessages) => {
          return [
            ...(currentMessages || []),
            {
              emitter: "bot",
              children: <Paragraph text={question} />,
              isPlaceholder: true,
            },
          ];
        });
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [chatQuestions, currentQuestion, isAnswersError, isAnswersLoading]);

  useEffect(() => {
    if (!isBotWriting) return;

    const timer = setTimeout(() => {
      setMessages((currentMessages) => {
        const newMessages = [...(currentMessages || [])];

        if (newMessages.length) newMessages[newMessages.length - 1].isPlaceholder = false;
        return newMessages;
      });

      setIsBotWriting(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [isBotWriting, messages]);

  // Setting answer messages
  useEffect(() => {
    if (!currentQuestion || !messages) return;

    const answer = chatAnswers.find((answer) => answer.questionId === currentQuestion)?.answer;
    if (answer) {
      setMessages((messages) => [
        ...(messages || []),
        {
          emitter: "user",
          children: <Paragraph text={answer} />,
        },
      ]);

      setCurrentQuestion((currentQuestion) => (currentQuestion || 0) + 1);
    }
  }, [chatAnswers, currentQuestion, messages]);

  return { messages, setChatAnswers: customSetChatAnswers, isBotWriting, chatHasFinished };
}
