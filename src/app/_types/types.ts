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

export const pageInfoSchema = z.object({
  pageNum: z.number(),
  pageSize: z.number(),
  totalElements: z.number(),
  totalPages: z.number(),
});

export const keywordInfoSchema = z.object({
  keywordType: z.string(),
});

export const quizInfoListSchema = z.object({
  quizId: z.number(),
  quizAttemptId: z.number(),
  level: z.number(),
  keywordInfos: keywordInfoSchema.array(),
  createdAt: z.string().nullable(),
  updatedAt: z.string().nullable(),
});

export const quizListSchema = z.object({
  quizInfos: quizInfoListSchema.array(),
  pageInfo: pageInfoSchema,
});

export const quizAnswerSchema = z.object({
  correctContent: z.string(),
  chooseAnswer: z.string(),
  commentaryContent: z.string(),
});

export const memberInfoSchema = z.object({
  profileImageUrl: z.string().nullable().optional(),
  name: z.string(),
  accountId: z.string(),
  birthDay: z.string(),
  memberGenderType: z.string(),
  createdAt: z.string(),
});

export const articleInfoSchema = z.object({
  articleId: z.number(),
  title: z.string(),
  content: z.string(),
  question: z.string(),
  categoryType: z.string(),
});

export const articleArchiveInfoSchema = z.object({
  articleId: z.number(),
  title: z.string(),
  categoryType: z.string(),
  readingDate: z.string(),
});

export const articleArchiveListSchema = z.object({
  readingInfos: articleArchiveInfoSchema.array().nullable(),
  pageInfo: pageInfoSchema,
});

export const articleDetailIinfoSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export const reportInfoSchema = z.object({
  weekInfoId: z.number(),
  title: z.string(),
});

export const reportInfoListSchema = z.object({
  weekInfoInfos: reportInfoSchema.array().nullable(),
});

export const readingStatInfoSchema = z.object({
  readingDate: z.string(),
  readingTime: z.number(),
  understanding: z.number(),
});

export const reportDetailInfoSchema = z.object({
  title: z.string(),
  comment: z.string(),
  startDate: z.string(),
  readingStatInfos: readingStatInfoSchema.array(),
});
