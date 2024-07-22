const home = () => '/';
const projects = () => '/projects';
const clients = () => '/clients';

// auth
const signIn = () => '/sign-in';
const signUp = () => '/sign-up';
const verified = () => '/verified';

// dashboard
const dashboard = () => '/dashboard';
const dashboardInvoice = () => `${dashboard()}/invoices`;
const dashboardClients = () => `${dashboard()}/clients`;
const dashboardSettings = () => `${dashboard()}/settings`;

export const routes = {
  home,
  signIn,
  signUp,
  verified,
  projects,
  clients,
  dashboard,
  dashboardInvoice,
  dashboardClients,
  dashboardSettings,
};
