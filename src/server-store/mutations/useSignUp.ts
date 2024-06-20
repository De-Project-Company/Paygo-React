
import { useMutation } from '@tanstack/react-query';
import { api } from '../utils'
import ReactQueryKeys from '../keys'


// TODO: REMOVE THIS AFTERWARDS AND MORE

const baseURl = 'https://paygoapi.startershouse.com/api';
export interface ISignUpPayload {
   email: string;
   phone_number: string;
   password: string;
   password_confirmation: string;
}

interface ISubmitSignUpResponse {

}

const submitSignUpRequest = async (
   data: ISignUpPayload
): Promise<ISubmitSignUpResponse> => {
   const response = await api.post(`${baseURl}/auth/register`, data);
   return response.data;
};


const useSignup = () => {
   return useMutation({
      mutationKey: ReactQueryKeys.SIGN_UP,
      mutationFn: submitSignUpRequest,
   });
};

export default useSignup;