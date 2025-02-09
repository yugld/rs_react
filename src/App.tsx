import { AppProvider } from '@context';
import { BaseLayout } from '@layouts';
import Home from '@pages/Home';

function App() {
  return (
    <>
      {' '}
      <AppProvider>
        <BaseLayout>
          <Header />
          <Home />
        </BaseLayout>
      </AppProvider>
    </>
  );
}

export default App;
