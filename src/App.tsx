import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';

import RoutesFiles from './components/Routes';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RoutesFiles />
      </Router>

      <Toaster
        position="top-right"
        toastOptions={{
          classNames: {
            toast: 'p-5 items-start gap-4',
            icon: 'mt-2',
          },
        }}
        expand
        richColors
      />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
