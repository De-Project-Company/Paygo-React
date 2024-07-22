import { Link, useLocation } from 'react-router-dom';
import Logo from '../components/logo/logo';
import SvgIcon from '../components/svg-icon/svg-icon';
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

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="md:flex w-full">
      <aside className="flex flex-col [&>*]:py-[3rem] [&>*]:pl-8 w-[25rem]  h-screen text-white ">
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
      <main>
        <nav className="py-6 px-8 flex justify-between">
          <button className="md:hidden" aria-label="Menu">
            <SvgIcon name="hamburger-menu" className="w-10 h-10" />
          </button>
        </nav>
      </main>
    </div>
  );
};

export default Dashboard;
