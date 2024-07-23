import { Link } from 'react-router-dom';

import { routes } from '@/lib/routes';
import AuthLayout from '../components/auth-layout';
import common from '@/styles/common.module.css';

const VerificationSuccessPage = () => {
  return (
    <AuthLayout>
      <div className="p-10 w-full lg:max-w-[1000px] bg-white mx-auto rounded-xl">
        <div className="mx-auto  text-center lg:w-max">
          <div className="w-full max-w-[300px] mx-auto aspect-square ">
            <img
              src="/assets/verified.png"
              alt="sign up mockup"
              className="w-full"
            />
          </div>

          <p className="py-5 font-bold">Congratulations</p>

          <p className="font-normal">
            Your account has been verified. you can now set up your account
          </p>

          <Link
            to={routes.signIn()}
            replace
            className={`${common.btn} my-5 block`}
          >
            Set up your account
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerificationSuccessPage;
