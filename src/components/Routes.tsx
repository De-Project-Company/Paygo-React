import { Route, Routes } from "react-router-dom";
import Home from "../pages";
import Dashboard from "../pages/dashboard";
import Projects from "../pages/projects";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";

const RoutesFiles = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default RoutesFiles;
