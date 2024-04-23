import { IDataProps, ITestimonialTypes } from "../types/home-page-data-types";

export const howItWorks: IDataProps[] = [
   {
      icon: 'template',
      title: 'Choose a Template',
      description: 'Select from a variety of beautifully designed templates',
   },
   {
      icon: 'customize',
      title: 'Customize Details',
      description:
         'Easily add your business logo, item descriptions, and payment terms.',
   },
   {
      icon: 'download',
      title: 'Send or Download Invoice',
      description: 'Send invoices directly to clients or download for offline ',
   },
];

export const features: IDataProps[] = [
   {
      title: 'Easy Invoice Creation',
      description:
         'Invoicing has never been so simple. With our easy-to-use interface and powerful features, you can create and manage invoices with ease',
      icon: 'create',
   },
   {
      title: 'Real-time updates',
      description:
         "With real-time updates, you'll always have the most up- to - date information at your fingertips. You'll be able to track payments, manage client information, and view invoice statuses instantly",
      icon: 'notification',
   },
   {
      title: 'Customizable Templates',
      description:
         'With Invoice Suite, you can create beautiful invoices that showcase your unique brand personality. Make a lasting impression with every invoice you send',
      icon: 'customize',
   },
];

export const benefits = [
   {
      title: '30% Reduction in Late Payments:',
      description:
         'Enjoy consistent cash flow and say goodbye to chasing invoices.',
   },
   {
      title: '50% More Time Focus',
      description:
         'Automate tasks, eliminate administrative burdens, and reclaim precious hours.',
   },
   {
      title: 'Increased Customer Satisfaction',
      description:
         'Streamline tasks, eradicate administrative burdens, and reclaim precious hours to deliver unparalleled service.',
   },
];

export const testimonialData: ITestimonialTypes[] = [
   {
      image: '/assets/testimony-1-avatar.png',
      testimony: 'PayGO has truly transformed our invoicing process. The simplicity and efficiency have saved us valuable time and improved our cash flow.',
      name: 'Bisi Oge',
      companyAndRole: 'Founder XYZ Company'
   },

   {
      image: '/assets/testimony-2-avatar.png',
      testimony: "Invoice Suite has made a significant difference in managing our finances. It's user- friendly and helps us stay organized.",
      name: 'Tola',
      companyAndRole: 'CEO Idan Group'
   },
   {
      image: '/assets/testimony-3-avatar.png',
      testimony: 'Using Invoice Suite has been a game-changer for our business. It streamlines our invoicing process and enhances client communication.',
      name: 'Koded Jackson',
      companyAndRole: 'Product Manager Agba Incorporation'
   },

]