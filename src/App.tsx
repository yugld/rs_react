import { BaseLayout } from '@layouts';
import Home from '@pages/Home';

function App() {
  return (
    <>
      <BaseLayout>
        <Header />
        <Home />
      </BaseLayout>
    </>
  );
}

export default App;
