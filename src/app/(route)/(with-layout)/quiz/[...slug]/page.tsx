import QuizContainer from '@/app/_components/quiz/QuizContainer';

interface QuizPageProps {
  params: {
    slug: string;
  };
}

const QuizPage = ({ params }: QuizPageProps) => {
  const pageNumber = params.slug;

  return (
    <section className="flex items-center justify-center">
      <QuizContainer slug={pageNumber} />
    </section>
  );
};

export default QuizPage;
