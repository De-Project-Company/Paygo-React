import { BrowserRouter as Router } from 'react-router-dom';
import RoutesFiles from './components/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import Link from "./components/link";

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <RoutesFiles />
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
