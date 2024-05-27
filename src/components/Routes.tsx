import { Route, Routes } from "react-router-dom";
import Home from "../pages";
import Dashboard from "../pages/dashboard";
import Projects from "../pages/projects";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";
import ClientPage from "../pages/ClientPage";
import { routes } from "../lib/routes";

const RoutesFiles = () => {
  return (
    <Routes>
      <Route path={routes.home()} element={<Home />} />
      <Route path={routes.dashboard()} element={<Dashboard />} />
      <Route path={routes.projects()} element={<Projects />} />
      <Route path={routes.signIn()} element={<Signin />} />
      <Route path={routes.signUp()} element={<SignUp />} />
      <Route path={routes.clients()} element={<ClientPage />} />
    </Routes>
  );
};

export default RoutesFiles;
