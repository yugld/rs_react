import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

const BaseLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="] flex min-h-screen w-full justify-center bg-white">
      <div className="m-4 flex w-full max-w-4xl flex-col gap-6">{children}</div>
    </div>
  );
};

export default BaseLayout;
