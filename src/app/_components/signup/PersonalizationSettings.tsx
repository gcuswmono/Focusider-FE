import { useRouter } from 'next/navigation';
import ButtonAtom from '@/app/_components/common/atoms/ButtonAtom';

interface Props {
  pageNum: string;
}

const PersonalizationSettings = ({ pageNum }: Props) => {
  const router = useRouter();

  return (
    <section className="flex w-full items-center justify-center bg-primary-100">
      <div className="flex h-dvh w-[440px] flex-col items-center justify-center gap-y-6">
        <h1 className="text-h3 font-bold">회원가입이 완료되었습니다</h1>
        <div className="flex w-full flex-col justify-center gap-y-8">
          <p className="text-center text-sub-300">
            준비된 세가지 질문에 답변하여 <br />
            000님을 위한 맞춤형 콘텐츠를 즐겨보세요.
          </p>
          <ButtonAtom
            buttonStyle="dark"
            text="좋아요 !"
            type="submit"
            width="grow"
            height="56px"
            rounded="rounded"
            onClick={() => router.push(`/signup/${parseInt(pageNum, 10) + 1}`)}
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalizationSettings;
