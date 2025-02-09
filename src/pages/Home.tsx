import { ReactNode, useContext } from 'react';
import { AppError, CardsList, ErrorButton, Spinner } from '@components';
import { AppContext } from '@context';

type HomeProps = {
  children?: ReactNode;
};

const Home = ({ children }: HomeProps) => {
  const context = useContext(AppContext);

  return (
    <main className="flex flex-1 flex-col gap-4">
      <div className="flex-1">
        {isLoading && <Spinner />}
        {error ? <AppError error={error} /> : <>{children || <CardsList />}</>}
      </div>
      <ErrorButton />
    </main>
  );
};

export default Home;
