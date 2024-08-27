import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  hasNavigator?: boolean;
}

export default function PageContainer({ children, hasNavigator }: Props) {
  return (
    <main
      className={`relative mx-auto w-full ${
        hasNavigator ? 'pt-16' : ''
      } bg-primary-100 xl:w-dvw xl:max-w-[1280px]`} // 화면 너비가 xl 이상일 때 너비를 1280px로 제한
    >
      <section className={`${hasNavigator ? 'pt-16' : ''} h-dvh`}>{children}</section>
    </main>
  );
}
