import { z } from 'zod';

export const choiceContentSchema = z.object({
  id: z.number(),
  content: z.string(),
});

export const quizInfoSchema = z.object({
  quizId: z.number(),
  title: z.string(),
  content: z.string(),
  choiceContent: choiceContentSchema.array(),
});
