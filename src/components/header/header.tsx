import Logo from '../logo/logo';
import SvgIcon from '../svg-icon/svg-icon';

import common from '../../styles/common.module.css';
import headerStyles from './header.module.css';
import { useState } from 'react';
import { clsx } from 'clsx';
import ShowView from '../show-view/show-view';

export const navItems = [
  {
    link: '/',
    label: 'home',
  },
  {
    link: '#',
    label: 'features',
  },
  {
    link: '#',
    label: 'how it works',
  },
  {
    link: '#',
    label: 'contact us',
  },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseSideBar = () => {
    setIsOpen(false);
  };

  return (
    <header className={common.fullBleed}>
      {/* overlay container */}
      <ShowView when={isOpen}>
        <div className={common.overlayContainer} onClick={handleCloseSideBar} />
      </ShowView>

      <nav className={headerStyles.nav}>
        <Logo />

        <div
          className={clsx(headerStyles.navItems, isOpen && headerStyles.open)}
        >
          <ul>
            <button
              className={clsx(headerStyles.menuBtn, headerStyles.close)}
              aria-label="close-sidebar"
              onClick={handleCloseSideBar}
            >
              <SvgIcon name="close" />
            </button>
            {navItems.map((navItem) => (
              <li key={navItem.label}>
                <a href={navItem.link} className={headerStyles.navItem}>
                  {navItem.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#" className={common.btn}>
            Get Started
          </a>
        </div>

        <button
          className={headerStyles.menuBtn}
          aria-label="Menu"
          onClick={() => setIsOpen(true)}
        >
          <SvgIcon name="hamburger-menu" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
