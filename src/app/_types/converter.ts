export type KeywordType = 'WORDS_AND_EXPRESSIONS' | 'VOCABULARY' | 'PROVERB';

export const KeywordTypeList: KeywordType[] = ['WORDS_AND_EXPRESSIONS', 'VOCABULARY', 'PROVERB'];

export const KeywordTypeConverter: { [key in KeywordType]: string } = {
  WORDS_AND_EXPRESSIONS: '유형 A',
  VOCABULARY: '유형 B',
  PROVERB: '유형 C',
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
