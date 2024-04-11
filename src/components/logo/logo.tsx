import { Link } from 'react-router-dom';

import logoStyles from './logo.module.css';

interface ILogoProps {
  secondary?: boolean;
}

const Logo = ({ secondary }: ILogoProps) => {
  return (
    <Link to="/" className={logoStyles.logo}>
      <img
        src={secondary ? '/assets/logo-white.png' : '/assets/logo.png'}
        alt="PayGo logo"
      />
    </Link>
  );
};

export default Logo;
