export type KeywordType = 'WORDS_AND_EXPRESSIONS' | 'VOCABULARY' | 'PROVERB';

export const KeywordTypeList: KeywordType[] = ['WORDS_AND_EXPRESSIONS', 'VOCABULARY', 'PROVERB'];

export const KeywordTypeConverter: { [key in KeywordType]: string } = {
  WORDS_AND_EXPRESSIONS: '유형 A',
  VOCABULARY: '유형 B',
  PROVERB: '유형 C',
};
