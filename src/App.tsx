import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import RoutesFiles from './components/Routes';
// import Link from "./components/link";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RoutesFiles />
      </Router>
      <ReactQueryDevtools />
      <Toaster position="top-right" expand richColors />
    </QueryClientProvider>
  );
};

export default App;
