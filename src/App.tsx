import { BrowserRouter as Router } from "react-router-dom";
import RoutesFiles from "./components/Routes";
import Link from "./components/link";

const App = () => {
  return (
    <Router>
      <Link />
      <RoutesFiles />
    </Router>
  );
};

export default App;
