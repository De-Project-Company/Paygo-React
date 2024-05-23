import { Route, Routes } from "react-router-dom";
// import Home from "../pages";
import Projects from "../pages/projects";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";
import MainPage from "../pages/MainPage";
// import { NavPages } from "../pages/NavPages";

const RoutesFiles = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default RoutesFiles;
