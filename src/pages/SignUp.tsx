import { SubmitHandler, useForm } from "react-hook-form";
import isMobilePhone from 'validator/lib/isMobilePhone'

import AuthLayout from "../components/auth-layout";
import Logo from "../components/logo/logo";

import { routes } from "../lib/routes";
import useSignup, { ISignUpPayload } from "../server-store/mutations/useSignUp";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";


const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<ISignUpPayload>()

  const { mutate: signUp, isPending } = useSignup()

  const watchedPassword = watch('password')

  const onSubmit: SubmitHandler<ISignUpPayload> = (data) => {

    signUp(data, {
      onSuccess: async () => {
        alert('Success')
        reset()
      },
      onError: async () => alert('Failed')
    })
  }
  return (
    <AuthLayout linkData={{ route: routes.signIn(), label: 'Login to existing account' }}>

      <div className="lg:grid lg:grid-cols-2 gap-6 justify-center [&>div]:max-w-[600px] pb-16  primary-padding">
        <div className="hidden lg:block w-full">
          <img src="/assets/sign-up-mockup-img.png" alt="sign up mockup" className="w-full" />
        </div>

        <div className="bg-white p-10 w-full mx-auto border-1 border-[#DEE2E6] rounded-xl">
          <Logo />

          <h2 className="mb-2 mt-9 text-[24px] text-gray-700">Welcome - Create Account</h2>
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
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                {...register('phone_number', {
                  required: 'Please enter your phone number',
                  validate: {
                    isValid: (val) =>
                      isMobilePhone(val, 'any', { strictMode: true }) ||
                      'Please enter a valid phone number',
                  },
                })}
                className="auth-input"
                placeholder="+234 123 456 7890"
              />
              {errors.phone_number && <small role="alert" className='text-error'>{errors.phone_number.message}</small>}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password"
                {...register('password', {
                  required: 'Please enter your email',
                  validate: {
                    hasUppercase: (value) =>
                      /[A-Z]/.test(value) ||
                      'Password must contain at least one uppercase letter',
                    hasLowercase: (value) =>
                      /[a-z]/.test(value) ||
                      'Password must contain at least one lowercase letter',
                    hasSpecialChar: (value) =>
                      /[\W_]/.test(value) ||
                      'Password must contain at least one special character',
                    hasNumber: (value) =>
                      /\d/.test(value) ||
                      'Password must contain at least one number',
                    hasLength: (value) =>
                      value.length >= 8 ||
                      'Password must be at least 8 characters long',
                  },
                })}
                className="auth-input"
                placeholder="password"
              />
              {errors.password && <small role="alert" className='text-error'>{errors.password.message}</small>}
            </div>

            <div>
              <label htmlFor="confirm password">Confirm Password</label>
              <input type="password" id="confirm password"
                {...register('password_confirmation', {
                  required: 'Please confirm your password',
                  validate: {
                    isValid: (value) =>
                      watchedPassword === value || 'Password mismatch',
                  },
                })}
                className="auth-input"
                placeholder="password"
              />
              {errors.password_confirmation && <small role="alert" className='text-error'>{errors.password_confirmation.message}</small>}
            </div>

            <button disabled={isPending} className="bg-blue-600 text-white w-full rounded-md p-4 text-center mt-12 mb-3">{isPending ? 'Signing up...' : 'Sign Up'}</button>
          </form>

          <p >Already have an account? <Link to={routes.signIn()} className="font-semibold text-blue-600">Login</Link></p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
