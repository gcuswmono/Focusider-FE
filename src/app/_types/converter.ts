export type KeywordType =
  | 'WORDS_AND_EXPRESSIONS'
  | 'VOCABULARY'
  | 'PROVERB'
  | 'FOUR_IDIOMS'
  | 'GRAMMER';

export const KeywordTypeList: KeywordType[] = [
  'WORDS_AND_EXPRESSIONS',
  'VOCABULARY',
  'PROVERB',
  'FOUR_IDIOMS',
  'GRAMMER',
];

export const KeywordTypeConverter: { [key in KeywordType]: string } = {
  WORDS_AND_EXPRESSIONS: '단어와 표현',
  VOCABULARY: '어휘력',
  PROVERB: '속담',
  FOUR_IDIOMS: '사자성어',
  GRAMMER: '문법',
};

export type ArticleKeywordType =
  | 'ART'
  | 'SCIENCE'
  | 'SOCIETY'
  | 'TECHNOLOGY'
  | 'HUMANITIES'
  | 'AMALGAMATION';

export const ArticleKeywordTypeList: ArticleKeywordType[] = [
  'ART',
  'SCIENCE',
  'SOCIETY',
  'TECHNOLOGY',
  'HUMANITIES',
  'AMALGAMATION',
];

export const ArticleKeywordTypeConverter: {
  [key in ArticleKeywordType]: string;
} = {
  ART: '예술',
  SCIENCE: '과학',
  SOCIETY: '사회',
  TECHNOLOGY: '기술',
  HUMANITIES: '인문',
  AMALGAMATION: '융합',
};
