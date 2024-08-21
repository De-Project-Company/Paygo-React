import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Logo from '../components/logo/logo';
import SvgIcon from '../components/svg-icon/svg-icon';
import ShowView from './show-view/show-view';

import { routes } from '../lib/routes';
import { ISvgIconNameTypes } from '../types/svg-icon-type';

const dashboardItems = [
  {
    label: 'Dashboard',
    href: routes.dashboard(),
  },
  {
    label: 'Invoices',
    href: routes.dashboardInvoice(),
  },
  {
    label: 'Clients',
    href: routes.dashboardClients(),
  },
  {
    label: 'Settings',
    href: routes.dashboardSettings(),
  },
];

const dashboardItemIcon: Record<string, ISvgIconNameTypes> = {
  Dashboard: 'layout',
  Invoices: 'invoice',
  Clients: 'people',
  Settings: 'settings',
};

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="lg:flex w-full">
      <ShowView when={isOpen}>
        <div
          className="fixed h-lvh w-full bg-blue-50/[.8] top-0 left-0 lg:hidden z-5 "
          onClick={handleIsOpen}
        />
      </ShowView>
      <aside
        className={`flex flex-col [&>*]:py-[3rem] [&>*]:pl-8 w-full max-w-[500px] lg:max-w-[25rem]  h-screen text-white fixed top-0 left-0 lg:relative lg:left-0 transition-all duration-200 ease-linear z-10
               ${isOpen ? 'translate-x-0  shadow-2xl' : '-translate-x-[100%] lg:translate-x-0'}
               `}
      >
        <div className="bg-white ">
          <Logo />
        </div>

        <div className="bg-[#4263EB] flex-1 flex flex-col justify-between rounded-tl-[2rem] rounded-br-[2rem]">
          <ul className="py-8 font-semibold">
            {dashboardItems.map((item) => (
              <li
                key={item.label}
                className={`${location.pathname === item.href && 'bg-[#ECEFFD] text-[#4263EB] rounded-l-[8px]'}`}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-3 mb-4 p-4 pl-6"
                >
                  <SvgIcon
                    name={dashboardItemIcon[item.label]}
                    className="w-[2rem] h-[2rem]"
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 items-center font-semibold">
            <div className="w-[5rem] h-[5rem]  overflow-hidden rounded-1/2 p-2 border-2">
              <img
                src="/assets/profile.png"
                alt="user-image"
                className="object-cover"
              />
            </div>

            <p>Paul Oluwatoni</p>
          </div>
        </div>
      </aside>

      <>
        <nav className="py-6 px-8 flex w-full justify-between lg:hidden">
          <div className="bg-white ">
            <Logo />
          </div>

          <button
            className="lg:hidden z-10"
            aria-label="Menu"
            onClick={handleIsOpen}
          >
            <SvgIcon
              name={isOpen ? 'close' : 'hamburger-menu'}
              width={30}
              height={30}
              className=" text-blue-600"
            />
          </button>
        </nav>

        <main className="p-7">
          <Outlet />
        </main>
      </>
    </div>
  );
};

export default DashboardLayout;
