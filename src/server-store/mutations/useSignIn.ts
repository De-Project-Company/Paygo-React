
import { useMutation } from '@tanstack/react-query';
import { api } from '../utils'
import ReactQueryKeys from '../keys'

export interface ISignInPayload {
   email: string;
   password: string;
}

interface ISubmitSignInResponse {

}

const submitSignUpRequest = async (
   data: ISignInPayload
): Promise<ISubmitSignInResponse> => {
   const response = await api.post('/auth/login', data);
   return response.data;
};


const useSignin = () => {
   return useMutation({
      mutationKey: ReactQueryKeys.SIGN_IN,
      mutationFn: submitSignUpRequest,
   });
};

export default useSignin;