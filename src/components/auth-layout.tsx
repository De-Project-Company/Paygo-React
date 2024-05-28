import { ReactNode } from "react";
import Logo from "./logo/logo";
import ShowView from "./show-view/show-view";
import { Link } from "react-router-dom";

type AuthLink = {
   route: string;
   label: string;
}

interface IAuthLayoutProps {
   bgWhite?: boolean;
   children: ReactNode;
   linkData?: AuthLink;
}

const AuthLayout = ({ bgWhite, children, linkData }: IAuthLayoutProps) => {
   return (
      <div className={`${bgWhite ? 'bg-white' : 'bg-[#f7f8ff]'}  min-h-screen`}>

         <div className="flex justify-between py-8 items-center primary-padding lg:mb-16">
            <Logo />

            <ShowView when={!!linkData}>
               <Link to={linkData?.route ?? ''} className=" bg-blue-400 px-4 py-2 font-semibold text-[14px] rounded-md text-white" >
                  {linkData?.label}
               </Link>
            </ShowView>
         </div>

         <>{children}</>

      </div>
   )
}

export default AuthLayout