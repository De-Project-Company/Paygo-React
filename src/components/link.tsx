// eslint-disable-next-line no-unused-vars

import { Link } from "react-router-dom";

const LinkPage = () => {
  return (
    <div className="flex items-center justify-between bg-blue-800 text-white w-full py-3">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/signin">Signin</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default LinkPage;
