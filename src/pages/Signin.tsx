import { SubmitHandler, useForm } from "react-hook-form";

import AuthLayout from "../components/auth-layout";
import Logo from "../components/logo/logo";

import { routes } from "../lib/routes";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import useSignin, { ISignInPayload } from "../server-store/mutations/useSignIn";


const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ISignInPayload>()

  const { mutate: signUp, isPending } = useSignin()

  const onSubmit: SubmitHandler<ISignInPayload> = (data) => {

    signUp(data, {
      onSuccess: async () => {
        alert('Success')
        reset()
      },
      onError: async () => alert('Failed')
    })
  }
  return (
    <AuthLayout linkData={{ route: routes.signUp(), label: 'Create account' }}>

      <div className="lg:grid lg:grid-cols-2 gap-6 justify-center [&>div]:max-w-[600px] pb-16  primary-padding">
        <div className="hidden lg:block w-full">
          <img src="/assets/sign-in-mockup.png" alt="sign up mockup" className="w-full" />
        </div>

        <div className="bg-white p-10 w-full mx-auto border-1 border-[#DEE2E6] h-max rounded-xl">
          <Logo />

          <h2 className="mb-2 mt-9 text-[24px] text-gray-700">Welcome Back - Login</h2>
          <p className="text-[16px]">Enter your details to continue</p>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10 [&>div]:mb-6 ">
            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Please enter your email', validate: {
                    isValidEmail: (value) =>
                      isEmail(value) || 'Please enter a valid email address',
                  },
                })}
                className="auth-input"
                placeholder="Name@example.com"
              />
              {errors.email && <small role="alert" className='text-error'>{errors.email.message}</small>}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password"
                {...register('password', {
                  required: 'Please enter your password'
                })}
                className="auth-input"
                placeholder="password"
              />
              {errors.password && <small role="alert" className='text-error'>{errors.password.message}</small>}
            </div>

            <button disabled={isPending} className="bg-blue-600 text-white w-full rounded-md p-4 text-center mt-12 mb-3">{isPending ? 'Signing in...' : 'Sign in'}</button>
          </form>

          <p >Don't have an account? <Link to={routes.signUp()} className="font-semibold text-blue-600">Sign up</Link></p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
