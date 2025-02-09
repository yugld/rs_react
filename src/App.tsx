import { ErrorBoundary } from '@components';
import Header from '@components/Header';
import { AppProvider } from '@context';
import { BaseLayout } from '@layouts';
import Home from '@pages/Home';

function App() {
  return (
    <>
      <ErrorBoundary>
        <AppProvider>
          <BaseLayout>
            <Header />
            <Home />
          </BaseLayout>
        </AppProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
