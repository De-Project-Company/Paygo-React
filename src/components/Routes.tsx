import { Route, Routes } from "react-router-dom";
import Home from "../pages";
import Dashboard from "../pages/dashboard";
import Projects from "../pages/projects";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";
import ClientPage from "../pages/ClientPage";
import { routes } from "../lib/routes";


// TODO: Changes made here
const RoutesFiles = () => {
  return (
    <Routes>
      <Route path={routes.home()} element={<Home />} />
      <Route path={routes.dashboard()} element={<Dashboard />} />
      <Route path={routes.projects()} element={<Projects />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path={routes.clients()} element={<ClientPage />} />
    </Routes>
  );
};

export default RoutesFiles;
