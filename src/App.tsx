import { BrowserRouter as Router } from "react-router-dom";
import RoutesFiles from "./components/Routes";
import MainPage from "./pages/MainPage";
// import Link from "./components/link";

const App = () => {
  return (
    <Router>
      <RoutesFiles />
      <MainPage />
    </Router>
  );
};

export default App;
