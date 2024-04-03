import { Link } from "react-router-dom";

import logoStyles from './logo.module.css';

const Logo = () => {
   return (
      <Link to='/' className={logoStyles.logo}>
         <img src="/assets/logo.png" alt="PayGo logo" />
      </Link>
   )
}

export default Logo;