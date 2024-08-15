import SignUpContainer from '@/app/_components/signup/SignUpContainer';

interface UserinfoPageProps {
  params: {
    slug: string;
  };
}

const SignupPage = ({ params }: UserinfoPageProps) => {
  const pageNumber = params.slug;

  return (
    <section className="flex items-center justify-center">
      <SignUpContainer slug={pageNumber} />
    </section>
  );
};

export default SignupPage;
