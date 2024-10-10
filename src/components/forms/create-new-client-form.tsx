import { SubmitHandler, useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import { phone } from 'phone';

interface CreateNewClient {
  fullName: string;
  businessName: string;
  isSameAsBName?: boolean;
  email: string;
  phone: string;
}

interface CreateNewClientProps {
  close: () => void;
}

const CreateNewClientForm = ({ close }: CreateNewClientProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<CreateNewClient>({
    mode: 'onChange',
  });

  const nameAndBusNameIsSame = watch('isSameAsBName');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<CreateNewClient> = (data) => {
    console.log('DATA', data);
    reset();
    close();
  };
  return (
    <div className="bg-white p-10 w-full mx-auto max-w-[600px] text-[14px] border border-[#DEE2E6] overflow-auto h-max rounded-xl">
      <h2 className="mb-2 mt-9 text-[24px] text-gray-700">Add a new client</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mt-10 [&>div]:mb-6 "
      >
        <div>
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            id="fullName"
            {...register('fullName', {
              required: "Please enter client's full name",
              validate: {
                onlyAlphabetsHyphenAndSpace: (value) =>
                  /^[A-Za-z-\s]+$/.test(value) ||
                  'Business name can only contain letters, hyphens, and spaces',
              },
            })}
            className="auth-input"
          />
          {errors.fullName && (
            <small role="alert" className="text-error">
              {errors.fullName.message}
            </small>
          )}
        </div>

        <div>
          <label htmlFor="businessName">Business name</label>
          <input
            type="text"
            id="businessName"
            {...register('businessName', {
              required: !nameAndBusNameIsSame
                ? "Please enter client's business name"
                : false,
            })}
            className="auth-input"
            disabled={nameAndBusNameIsSame}
          />
          {errors.businessName && (
            <small role="alert" className="text-error">
              {errors.businessName.message}
            </small>
          )}
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            {...register('isSameAsBName')}
            className="w-6 h-6"
          />

          <label htmlFor="" className="inline-flex !font-normal">
            Same as full name
          </label>
        </div>

        <div>
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            {...register('phone', {
              required: "Please enter client's phone number",
              validate: {
                isValidPhoneNumber: (val) =>
                  !val
                    ? true
                    : phone(val).isValid || 'Please enter a valid phone number',
              },
            })}
            className="auth-input"
          />
          {errors.phone && (
            <small role="alert" className={errors.phone && 'text-error'}>
              {errors.phone
                ? (errors?.phone.message as string)
                : 'In international format e.g(+23481xxxxxxxx)'}
            </small>
          )}
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: "Please enter client's email",
              validate: {
                isValidEmail: (value) =>
                  isEmail(value) || 'Please enter a valid email address',
              },
            })}
            className="auth-input"
          />
          {errors.email && (
            <small role="alert" className="text-error">
              {errors.email.message}
            </small>
          )}
        </div>

        <div className="flex gap-3 justify-end mt-10">
          <button
            type="button"
            onClick={close}
            className="border border-blue-700 text-blue-600 rounded-md p-4"
          >
            Cancel
          </button>

          <button className="bg-blue-600 text-white  rounded-md p-4 ">
            Create Client
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewClientForm;
