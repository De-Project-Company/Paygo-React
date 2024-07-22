import { useMutation } from '@tanstack/react-query';

import { toast } from 'sonner';

import { useStore } from '../../client-store';
import { ISubmitSignUpResponse } from '../../types/auth,types';
import ReactQueryKeys from '../keys';
import { api } from '../utils';
export interface ISignUpPayload {
  email: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
}

const submitSignUpRequest = async (
  data: ISignUpPayload
): Promise<ISubmitSignUpResponse> => {
  const response = await api.post(`/auth/register`, data);
  return response.data;
};

const useSignup = (reset: () => void) => {
  const setUser = useStore((state) => state.setUser);

  return useMutation({
    mutationKey: ReactQueryKeys.SIGN_UP,
    mutationFn: submitSignUpRequest,
    onSuccess: (data) => {
      setUser(data.user);
      toast.success('sign-up successful');
      reset();
    },
    onError: async () => toast.error('Sign up failed'),
  });
};

export default useSignup;
