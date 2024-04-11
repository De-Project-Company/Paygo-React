import clsx from "clsx";

import { navItems } from "../header/header";

import Logo from "../logo/logo";

import commonStyles from '../../styles/common.module.css';
import footerStyles from './footer.module.css'
import { ISvgIconNameTypes } from "../../types/svg-icon-type";
import SvgIcon from "../svg-icon/svg-icon";


interface ISocialLinksProps {
   icon: ISvgIconNameTypes;
   link: ''
}


const socials: ISocialLinksProps[] = [
   {
      icon: 'instagram',
      link: ''
   },
   {
      icon: 'linkedin',
      link: ''
   },
   {
      icon: 'facebook',
      link: ''
   },

]

const Footer = () => {
   return (
      <footer className={clsx(commonStyles.fullBleed, footerStyles.footer)}>
         <div>
            <Logo secondary />
            <p>PayGo is an application that enables small businesses to manage their payments efficiently, by allowing business owners to create profiles for each of their clients, track payment transactions, and receive real-time alerts for unpaid invoices.</p>
         </div>

         <div className={footerStyles.footerSubContainer}>
            <ul className={footerStyles.footerNavItems}>
               {navItems.map(navItem => (
                  <li key={navItem.label}>
                     <a href={navItem.link}>{navItem.label}</a>
                  </li>
               ))}
            </ul>

            <div className={footerStyles.copyright}>
               <p>&copy; {new Date().getFullYear()} Invoice Suite. | All Rights Reserved. </p>

               <div className={footerStyles.privacyPolicyFlex}>
                  <a href="#"> Privacy policy</a>

                  <div>
                     <ul className={footerStyles.socials}>
                        {socials.map(socialMedium => (
                           <li key={socialMedium.icon}>

                              <a href={socialMedium.link}>
                                 <SvgIcon name={socialMedium.icon} />
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

         </div>
      </footer>
   )
}

export default Footer;